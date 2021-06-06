import React from 'react'
import {Nav} from './component/nav/Nav'
import {Left} from './component/left/Left'
import {Content} from './component/content/Content'
import App_css from './App.module.css'
export const App = () => {
  return (
    <div>
      <Left/>
      <Nav/>
      <Content/>
    </div>
  )
}
