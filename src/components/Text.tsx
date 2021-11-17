import React, { FunctionComponent } from "react"

interface Props {
  text: string
}
const Text: FunctionComponent<Props> = ({ text }) => {
  return <div>{text}</div>
}

export default Text
