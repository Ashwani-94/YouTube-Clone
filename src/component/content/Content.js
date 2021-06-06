import React from 'react'
import Content_css from './Content.module.css'
import {Categories} from './categories/Categories'
export const Content = () => {
    return (
        <div className={Content_css.content}>
            <Categories/>
        </div>
    )
}
