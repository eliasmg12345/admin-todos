'use client'

import { useState } from "react"
import { CrucigramInput } from "./CrucigramInput"
import { CrucigramNewWord } from "./CrucigramNewWord"


export const CrucigramGrid = () => {

    const [cells, setCells] = useState<string[]>([])

    const valueInput = (e: string) => {
        setCells(e.split(''))
    }

    return (
        <div className="flex flex-col">
            <CrucigramNewWord setValueInput={valueInput} />

            {
                cells.map((cell, i) => (
                    <CrucigramInput value={cell} key={i} />
                ))
            }
        </div>
    )
}