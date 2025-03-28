/*
 * @Author: lixiaofei05 lixiaofei05@baidu.com
 * @Date: 2025-03-26 14:16:07
 * @LastEditors: lixiaofei05 lixiaofei05@baidu.com
 * @LastEditTime: 2025-03-27 19:31:29
 * @FilePath: /TangSengDaoDaoWeb/packages/tsdaodaobase/src/Components/IconClick/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Component, ReactNode } from "react";
import "./index.css"

export interface IconClickProps {
    icon:string
    onClick?:()=>void
}

export default class IconClick extends Component<IconClickProps> {
    render(): ReactNode {
        const { icon,onClick } = this.props
        return <div className="wk-iconclick" onClick={()=>{
            if(onClick) {
                onClick()
            }
        }}>
            <img src={icon}></img>
        </div>
    }
}