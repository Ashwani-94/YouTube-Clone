import React from 'react'
import Categories_css from './Categories.module.css'
export const Categories = () => {
    return (
        <div className={Categories_css.categories}>
            <div id={Categories_css.categories_item_active} className={Categories_css.categories_item}>All</div>
            <div className={Categories_css.categories_item}>Science</div>
            <div className={Categories_css.categories_item}>Ashwani_Kumar</div>
            <div className={Categories_css.categories_item}>Roorkee</div>
            <div className={Categories_css.categories_item}>React</div>
            <div className={Categories_css.categories_item}>Youtube</div>
            <div className={Categories_css.categories_item}>Live</div>
            <div className={Categories_css.categories_item}>Java_Script</div>
            <div className={Categories_css.categories_item}>HTML</div>
            <div className={Categories_css.categories_item}>CSS</div>
            <div className={Categories_css.categories_item}>Angular</div>
            <div className={Categories_css.categories_item}>ASME</div>
            <div className={Categories_css.categories_item}>Devlopment</div>
            <div className={Categories_css.categories_item}>Software</div>
            <div className={Categories_css.categories_item}>Coding</div>
            <div className={Categories_css.categories_item}>ICPC</div>
            <div className={Categories_css.categories_item}>C++</div>
            <div className={Categories_css.categories_item}>Python</div>
        </div>
    )
}
