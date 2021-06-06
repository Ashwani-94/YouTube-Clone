import React from 'react'
import Left_css from './Left.module.css'
import Menu from '@material-ui/icons/MenuOutlined'
import Home from '@material-ui/icons/HomeRounded'
import Explore from '@material-ui/icons/ExploreRounded'
import Subscription from '@material-ui/icons/SubscriptionsRounded'
import Like from '@material-ui/icons/ThumbUpRounded'
export const Left = () => {
    return (
        <div className={Left_css.left}>
            <div className={Left_css.menu}><Menu className={Left_css.icon}/></div>
            <div className={Left_css.left_icons}>
                <div className={Left_css.left_icons_box}><Home id={Left_css.home} className={Left_css.icon}/><div id={Left_css.home_name} className={Left_css.icon_name}>Home</div></div>
                <div className={Left_css.left_icons_box}><Explore className={Left_css.icon}/><div className={Left_css.icon_name}>Explore</div></div>
                <div className={Left_css.left_icons_box}><Subscription className={Left_css.icon}/><div className={Left_css.icon_name}>Subscriptions</div></div>
                <div className={Left_css.left_icons_box}><Like className={Left_css.icon}/><div className={Left_css.icon_name}>Liked</div></div>
            </div>
        </div>
    )
}
