import React from 'react'
import { Spin } from 'antd'
import ReactECharts from 'echarts-for-react'
import styled from 'styled-components'

import { ChartOption } from '@/shared/utils/tempUtils'

interface ChareStyleProps {
  $height?: number | 'auto'
}

export interface ChartProps {
  option?: ChartOption
  height?: number | 'auto'
}

const Chart: React.FC<ChartProps> = (props: ChartProps) => {
  return props.option ? (
    <S.Chart $height={props.height}>
      <ReactECharts option={props.option} opts={{ height: props.height }} notMerge={true} lazyUpdate={true} />
    </S.Chart>
  ) : (
    <Spin tip="Loading...">
      <S.Chart $height={props.height}></S.Chart>
    </Spin>
  )
}

export default Chart

const S = {
  Chart: styled.div<ChareStyleProps>`
   display: inline-block;
    width: 100%;
    height: ${(props) => props.$height}px;
    padding: 20px 10px 20px 20px;
    border: 1px solid rgb(179, 203, 225);
  `
}