import React from 'react'
import { Carousel, type CarouselProps } from 'antd'
import styled from 'styled-components'

export interface AntdCarouselProps extends CarouselProps {
  className?: string
}

export const AntdCarousel: React.FC<AntdCarouselProps> = ({ className, ...props }) => {
  return <S.Carousel className={className} {...props} />
}

const S = {
  Carousel: styled(Carousel)``
}