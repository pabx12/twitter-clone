import React from 'react'
import { Tweet } from '../typings'
export type Props = {
    tweet: Tweet
}
function Tweet({ tweet }: Props) {
  return (
    <div>Tweet</div>
  )
}

export default Tweet