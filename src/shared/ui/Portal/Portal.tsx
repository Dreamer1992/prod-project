import { createPortal } from 'react-dom'

interface IProps {
  children: React.ReactNode
  container?: HTMLElement
  key?: string
}

export const Portal = (props: IProps) => {
  const { children, container = document.body, key } = props

  return createPortal(children, container, key)
}
