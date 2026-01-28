import React, { useEffect, useRef, useState } from 'react'
import { FileExcelOutlined, FileImageOutlined, SyncOutlined } from '@ant-design/icons/lib/icons'
import domToImage from 'dom-to-image'
import { saveAs } from 'file-saver'
import styled from 'styled-components'

import { type WithChildrenProps } from '@/shared/utils/tempUtils'
import { eventEmitter, exportCsvFromTable } from '@/shared/utils/tempUtils'

export interface PanelProps extends WithChildrenProps {
  title?: string
  radio?: JSX.Element
  fileTitle?: string
  showExtraDownloadBtn?: boolean
  callbackFn?: () => Promise<void> | void | boolean
}

const Panel: React.FC<PanelProps> = ({
  title,
  radio,
  fileTitle = title,
  children,
  showExtraDownloadBtn = false,
  callbackFn,
}) => {
  const panelRef = useRef<HTMLDivElement>(null)
  const [isPartnerTable, setIsPartnerTable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  /**
   * download to csv for marketing
   */
  const handleClickPartnerCsvDownload = async () => {
    if (isLoading) return
    if (isPartnerTable) {
      if (!panelRef.current) throw Error('panel ref not found.')
      const tableElement = panelRef.current.querySelector('#PartnerTable') as HTMLTableElement

      exportCsvFromTable(tableElement, `제휴사_${fileTitle}`)
      return
    }
    if (callbackFn) {
      try {
        setIsLoading(true)
        await callbackFn()
      } finally {
        setIsLoading(false)
      }
    }
  }

  /**
   * download to csv
   */
  const handleClickCsvDownload = async () => {
    if (!panelRef.current) throw Error('panel ref not found.')
    const tableElement = panelRef.current.querySelector('table')
    if (!tableElement) throw Error('table not found')

    exportCsvFromTable(tableElement, `${fileTitle}`)
  }

  /**
   * download to image
   */
  const handleClickImageDownload = async () => {
    if (!panelRef.current) throw Error('panel ref not found.')

    const tableBlob = await domToImage.toBlob(
      panelRef.current.querySelector('table') as HTMLElement,
      { bgcolor: '#ffffff' },
    )
    saveAs(tableBlob, `${fileTitle}.png`)
  }

  useEffect(() => {
    if (panelRef.current) {
      setIsPartnerTable(!!panelRef.current.querySelector('#PartnerTable'))
    }
  }, [panelRef])
  useEffect(() => {
    const reset = () => setIsLoading(false)

    eventEmitter.on('saveFail', reset)

    return () => {
      eventEmitter.off('saveFail', reset)
    }
  }, [])

  return (
    <S.Panel>
      <S.Header>
        <S.LabelTitle>
          {title ? title : ''}
          {radio ? radio : ''}
        </S.LabelTitle>
        <span>
          {showExtraDownloadBtn &&
            (isLoading ? (
              <SyncOutlined spin />
            ) : (
              <S.LabelPartnerCsvDownload onClick={handleClickPartnerCsvDownload}>
                <FileExcelOutlined />
              </S.LabelPartnerCsvDownload>
            ))}

          <S.LabelCsvDownload onClick={() => handleClickCsvDownload()}>
            <FileExcelOutlined />
          </S.LabelCsvDownload>
          <S.LabelImageDownload onClick={() => handleClickImageDownload()}>
            <FileImageOutlined />
          </S.LabelImageDownload>
        </span>
      </S.Header>
      <div ref={panelRef}>{children}</div>
    </S.Panel>
  )
}

export default Panel

const S = {
  Panel: styled.div`
    display: inline-block;
    width: 100%;
    & td,
    th {
      padding: 6px 12px !important;
    }
  `,
    Header: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: 700;
    padding: 15px 25px 15px 25px;
    border: 1px solid #b3cbe1;
    border-bottom: none;
  `,
    LabelTitle: styled.span`
    text-align: left;
  `,
    LabelPartnerCsvDownload: styled.span`
    cursor: pointer;
    text-align: right;
    color: gray;
    margin-left: 10px;

    &:hover {
      color: var(--skyblue);
    }
    &:hover:after {
      position: absolute;
      font-size: 12px;
      top: 40px;
      right: 30px;
      content: 'Save as detailed CSV';
    }
  `,
    LabelCsvDownload: styled.span`
    cursor: pointer;
    text-align: right;
    color: gray;
    margin-left: 10px;

    &:hover {
      color: var(--skyblue);
    }
    &:hover:after {
      position: absolute;
      font-size: 12px;
      top: 40px;
      right: 30px;
      content: 'Save as CSV';
    }
  `,
    LabelImageDownload: styled.span`
    cursor: pointer;
    text-align: right;
    color: gray;
    margin-left: 10px;

    &:hover {
      color: var(--skyblue);
    }
    &:hover:after {
      position: absolute;
      font-size: 12px;
      top: 40px;
      right: 10px;
      content: 'Save as Image';
    }
  `,
    LabelInRadio: styled.span`
    padding-left: 20px;
    .ant-radio-button-wrapper {
      min-width: 70px;
      text-align: center;
    }
  `
}