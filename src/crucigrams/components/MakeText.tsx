'use client'
import { useState } from "react"


interface Props {
    top: boolean
    bottom: boolean
    left: boolean
    right: boolean
    valueTextTop: (value: string) => void
    valueTextBottom: (value: string) => void
    valueTextLeft: (value: string) => void
    valueTextRight: (value: string) => void
}

export const MakeText = ({ top, bottom, left, right, valueTextTop, valueTextBottom, valueTextLeft, valueTextRight }: Props) => {
    const [leave, setLeave] = useState('')
    console.log({ top, bottom, left, right });

    if (top === false && bottom === false && left === false && right === false) {
        return
    }

    return (
        <div
            className="text"
        >
            {
                top ?
                    <input
                        type="text"
                        onChange={e => valueTextTop(e.target.value)}
                    />
                    : bottom ?
                        <input
                            type="text"
                            onChange={e => valueTextBottom(e.target.value)}
                        />
                        : left ?
                            <input
                                type="text"
                                onChange={e => valueTextLeft(e.target.value)}
                            />
                            : right &&
                            <input
                                type="text"
                                onChange={e => valueTextRight(e.target.value)}
                            />

            }


            <div
                className="fade-in backdrop-filter backdrop-blur-sm"
                onClick={() => setLeave('leaved')}
            >
            </div>
        </div>
    )
}