import React from 'react'
import Categories_css from './Categories.module.css'
export const Categories = () => {
    return (
        <div className={Categories_css.categories}>
            <div id={Categories_css.categories_item_active} className={Categories_css.categories_item}>All</div>
            <div className={Categories_css.categories_item}>Science</div>
            <div className={Categories_css.categories_item}>Ashwani Kumar</div>
            <div className={Categories_css.categories_item}>IIT Roorkee</div>
            <div className={Categories_css.categories_item}>React JS</div>
            <div className={Categories_css.categories_item}>Youtube</div>
            <div className={Categories_css.categories_item}>Live</div>
            <div className={Categories_css.categories_item}>Java_Script</div>
            <div className={Categories_css.categories_item}>HTML</div>
            <div className={Categories_css.categories_item}>CSS</div>
            <div className={Categories_css.categories_item}>Angular</div>
            <div className={Categories_css.categories_item}>ASME IITR Chapter</div>
            <div className={Categories_css.categories_item}>Web Devlopment</div>
            <div className={Categories_css.categories_item}>Software</div>
            <div className={Categories_css.categories_item}>Coding</div>
            <div className={Categories_css.categories_item}>ACM ICPC</div>
            <div className={Categories_css.categories_item}>C++</div>
            <div className={Categories_css.categories_item}>Python</div>
        </div>
    )
}
