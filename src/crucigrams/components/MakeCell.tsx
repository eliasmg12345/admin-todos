'use client'

import { useState } from "react"
import { MakeText } from "./MakeText"


export const MakeCell = () => {

    const [top, setTop] = useState(false)
    const [bottom, setBottom] = useState(false)
    const [left, setLeft] = useState(false)
    const [right, setRight] = useState(false)

    return (
        <div className="cell ">
            <div
                onClick={
                    () => {
                        setTop(!top)
                        setBottom(false)
                        setRight(false)
                        setLeft(false)
                    }
                }
                className="top cursor-pointer hover:text-sky-600 border border-sky-500"
            >
                top
            </div>
            <div
                onClick={
                    () => {
                        setTop(false)
                        setBottom(false)
                        setRight(!right)
                        setLeft(false)
                    }
                }
                className="right cursor-pointer hover:text-sky-600 border border-sky-500"
            >
                right
            </div>
            <div
                onClick={
                    () => {
                        setTop(false)
                        setBottom(!bottom)
                        setRight(false)
                        setLeft(false)
                    }
                }
                className="bottom cursor-pointer hover:text-sky-600 border border-sky-500"
            >
                bottom
            </div>
            <div
                onClick={
                    () => {
                        setTop(false)
                        setBottom(false)
                        setRight(false)
                        setLeft(!left)
                    }
                }
                className="left cursor-pointer hover:text-sky-600 border border-sky-500"
            >
                left
            </div>
            {
                // top ? (
                //     <MakeText top={top} bottom={bottom} left={left} right={right} />
                // ) : left ? (
                //     <MakeText top={top} bottom={bottom} left={left} right={right} />
                // ) : bottom ? (
                //     <MakeText top={top} bottom={bottom} left={left} right={right} />
                // ) : right ? (
                //     <MakeText top={top} bottom={bottom} left={left} right={right} />
                // ) : (<></>)
                
                <MakeText top={top} bottom={bottom} left={left} right={right} />

            }

        </div>
    )
}