
interface Props {
    setValueInput: (value: string) => void
    // setValueInput: string
}

export const CrucigramNewWord = ({setValueInput}:Props) => {


    return (
        <div className="text-xl flex m-3 gap-10">
            <label htmlFor="newWord">Nueva Palabra: </label>
            <input
                type="text"
                id="newWord"
                className=""
                onChange={e => setValueInput(e.target.value)}
            />

        </div>
    )
}