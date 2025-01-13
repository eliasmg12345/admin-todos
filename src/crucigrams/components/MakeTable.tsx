import { MakeCell } from "@/crucigrams"

interface Props {
    sizeH: number
    sizeW: number
}

export const MakeTable = ({ sizeH, sizeW }: Props) => {
    let sizeHeight = []
    for (let i = 0; i < sizeH; i++) {
        sizeHeight[i] = i
    }
    let sizeWeight = []
    for (let j = 0; j < sizeW; j++) {
        sizeWeight[j] = j
    }

    return (
        <table>
            {
                sizeHeight.map(h => (
                    <tr>
                        {
                            sizeWeight.map((w, index) => (

                                <td className="border w-64 h-32">
                                    <MakeCell />
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </table>
    )
}