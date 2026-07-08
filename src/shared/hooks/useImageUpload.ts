import { useMutation } from '@tanstack/react-query'
import type { UploadRequestOption } from 'rc-upload/lib/interface'

import type { DmrsCuidBody } from '@/shared/api/api.types'
import { ERRORCODES_COMMON } from '@/shared/constants'
import { CMD_TYPE } from '@/shared/types/constants'
import {
  isEmptyString,
  requestDeleteImage,
  requestRegisterImageReplace,
} from '@/shared/utils/tempUtils'

/**
 * 이미지 업로드/삭제를 공통으로 처리하는 Hook
 *
 * ## 기능
 * - 이미지 업로드
 * - 이미지 삭제(다중 삭제 지원)
 * - 업로드 결과 및 에러 메시지 공통 처리
 *
 * ## 특징
 * - React Query(useMutation) 기반으로 구현
 * - 업로드 성공 시 이미지 URL 반환
 * - 서버 응답 코드에 따라 공통 에러 처리
 * - 여러 이미지를 병렬로 삭제(Promise.allSettled)
 *
 * @returns
 * upload(request, path, label?)
 *  - 이미지를 업로드하고 업로드된 이미지 URL을 반환합니다.
 *
 * deleteImages(...imgPaths)
 *  - 전달된 이미지 경로를 모두 삭제합니다.
 *  - 삭제 실패한 이미지는 다른 삭제 작업에 영향을 주지 않습니다.
 *
 * @example
 * const { upload, deleteImages } = useImageUpload()
 *
 * const imageUrl = await upload(request, '/notice', '대표')
 * await deleteImages(imageUrl)
 */

export const useImageUpload = () => {
  const { mutateAsync: uploadImage } = useMutation({
    mutationKey: [CMD_TYPE.UPLOAD_IMAGE_REPLACE],
    mutationFn: ({ request, path }: { request: UploadRequestOption; path: string }) =>
      requestRegisterImageReplace(request, path),
  })

  const { mutateAsync: deleteImage } = useMutation<unknown, DmrsCuidBody, string>(
    requestDeleteImage(),
  )

  const upload = async (request: UploadRequestOption, path: string, label?: string) => {
    const response = await uploadImage({ request, path })
    switch (response?.data.Header.ErrCode) {
      case ERRORCODES_COMMON.SUCCESS:
        if (!isEmptyString(response?.data.Body.ImageURL)) return response?.data.Body.ImageURL ?? ''
        throw new Error(`${label ?? ''} 이미지 업로드에 실패했습니다.`)
      case ERRORCODES_COMMON.ERROR_IMAGE_ALREADY_EXISTS:
        throw new Error(`동일한 ${label ?? ''} 이미지 파일명이 이미 존재합니다.`)
      default:
        throw new Error(
          response?.data.Header.ErrMsg ?? `${label ?? ''} 이미지 업로드에 실패했습니다.`,
        )
    }
  }

  const deleteImages = async (...imgPaths: (string | undefined)[]) => {
    await Promise.allSettled(
      imgPaths
        .filter((path): path is string => !!path)
        .map((path) => deleteImage(path).catch(() => console.error('이미지 삭제 실패:', path))),
    )
  }

  return { upload, deleteImages }
}
