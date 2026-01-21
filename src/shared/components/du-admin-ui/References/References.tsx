import React from 'react'

import * as S from '@/shared/components/du-admin-ui/References/References.styles'

export const References: React.FC<{ year: number }> = ({ year }) => {
  return (
    <S.ReferencesWrapper>
      <S.Text>Copyright &copy; ${year} (주)데이터유니버스. All Rights Reserved. </S.Text>
    </S.ReferencesWrapper>
  )
}
