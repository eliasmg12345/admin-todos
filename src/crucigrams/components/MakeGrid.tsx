'use client'

import { useState } from "react"
import { MakeTable } from "@/crucigrams"


export const MakeGrid = () => {

    const [sizeH, setSizeH] = useState(0)
    const [sizeW, setSizeW] = useState(0)

    return (
        <div className="">
            <input
                className="m-4 p-2 w-10"
                placeholder="1"
                type="number"
                id="sizeW"
                onChange={e => setSizeW(+e.target.value)}
            />
            <label htmlFor="">{'<--->'}</label>
            <input
                className="m-4 p-2 w-10"
                placeholder="2"
                type="number"
                id="sizeH"
                onChange={e => setSizeH(+e.target.value)}
            />
            <label htmlFor="" className="signV">{'vertical'}</label>
            <MakeTable sizeH={sizeH} sizeW={sizeW} />
        </div>
    )
}