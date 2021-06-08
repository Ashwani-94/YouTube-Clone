import React from 'react'
import Video_css from './Video.module.css'
export const Video = () => {
    return (
        <div className={Video_css.video}>
            <div className={Video_css.video_thumb}>
                <img  src="https://i.ytimg.com/vi/6xVMUo0_hu4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBR0GpNt2WW-GwSXcbCNjch0GlI1A" alt="" />
                <span className={Video_css.video_duration}>05:47</span>
            </div>
            <div className={Video_css.video_detail}>
                <img src="https://yt3.ggpht.com/ytc/AAUvwngAg8C9ez6SdBMdgEA-Aud61obXOuY1zsUPkL8Z0w=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <div className={Video_css.video_detail_items}>
                    <div className={Video_css.video_title}>Ashwani Kumar | Youtube Clone | React Js 🔥🔥🔥 | IIT Roorkee</div>
                    <div className={Video_css.video_channel}>IIT Roorkee</div>
                    <div className={Video_css.video_views_age}>
                        <span className={Video_css.video_views}>1.7B views • </span>
                        <span></span>
                        <span className={Video_css.video_age}>1 year ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
