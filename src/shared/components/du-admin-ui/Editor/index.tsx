import 'suneditor/dist/css/suneditor.min.css'

import { useMemo } from 'react'
import type { SunEditorOptions } from 'suneditor/src/options'
import SunEditor, { buttonList } from 'suneditor-react'
import type { UploadBeforeHandler } from 'suneditor-react/dist/types/upload'

interface EditorProps {
  value?: string
  onChange?: (value: string) => void
}

const Editor = ({ value = '', onChange }: EditorProps) => {
  const options = useMemo<SunEditorOptions>(() => {
    return {
      minHeight: '400px',
      buttonList: buttonList.complex,
    }
  }, [])

  const handleImageUploadBefore = (
    files: Array<File>,
    info: object,
    uploadHandler: UploadBeforeHandler,
  ) => {
    ;(async () => {
      //TODO
      //const response = await requestRegisterImage(files[0])
      const uploadInfo = {
        result: [
          {
            url: '' /*TODO*/,
            name: '' /*TODO*/,
            size: files[0].size,
          },
        ],
      }
      uploadHandler(uploadInfo)
    })()
    return false
  }

  return (
    <SunEditor
      onChange={onChange}
      defaultValue={value}
      onImageUploadBefore={handleImageUploadBefore}
      setOptions={options}
    />
  )
}

export default Editor
