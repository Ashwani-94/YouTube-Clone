import React from 'react'
import {Nav} from '../component/main/nav/Nav'
import {Left} from '../component/main/left/Left'
import {Content} from '../component/main/content/Content'
export const Main = () => {
  return (
    <div>
      <Left/>
      <Nav/>
      <Content/>
    </div>
  )
}
