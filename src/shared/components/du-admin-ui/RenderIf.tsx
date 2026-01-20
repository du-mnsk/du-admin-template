import { Fragment, type ReactNode } from 'react'

export interface RenderIfProps {
  when: boolean
  children: ReactNode
}
export interface RenderSwitchProps {
  when: boolean
  children: [ReactNode, ReactNode]
}

const RenderIf = ({ children, when }: RenderIfProps) => {
  return <Fragment>{when && children}</Fragment>
}

const RenderSwitch = ({ children, when }: RenderSwitchProps) => {
  return <Fragment>{when ? children[0] : children[1]}</Fragment>
}

export { RenderIf, RenderSwitch }
