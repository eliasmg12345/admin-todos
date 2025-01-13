'use client'
import { useState } from "react"


interface Props {
    top: boolean
    bottom: boolean
    left: boolean
    right: boolean
}

export const MakeText = ({ top, bottom, left, right }: Props) => {
    const [text, setText] = useState('')
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
                    'top'
                    : bottom ?
                        'bottom'
                        : left ?
                            'left'
                            : right &&
                            'right'

            }

            <input
                type="text"
                onChange={e => setText(e.target.value)}
                onDragLeave={() => setLeave('leaved')}
            />
            <p>
                {
                    text
                }
                {leave}
            </p>
        </div>
    )
}