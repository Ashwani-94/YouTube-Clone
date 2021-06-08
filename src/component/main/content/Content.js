import React from 'react'
import Content_css from './Content.module.css'
import {Categories} from './categories/Categories'
import {Video} from './video/Video'
export const Content = () => {
    return (
        <>
            <div className={Content_css.content}>
                <Categories/>
            </div>
            <div className={Content_css.video}>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
            </div>
        </>
    )
}
