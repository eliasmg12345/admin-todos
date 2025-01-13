
interface Props {
    value: string
}

export const CrucigramInput = ({ value }: Props) => {

    return (

        <input
            type="text"
            className="w-20 h-20 text-center border"
            defaultValue={value}
        />
    )
}