

interface DaySelected {
    daySelectedd: (day: string) => void
}
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']


export const TodosDay = ({ daySelectedd }: DaySelected) => {

    const onDaySelected = (day: string) => {
        daySelectedd(day)
    }

    return (
        <div className="flex ">
            {
                days.map((day, i) => (
                    <div
                        key={i}
                        className="p-4 border border-blue-700 m-2 font-bold cursor-pointer hover:bg-blue-100 capitalize"
                        onClick={() => onDaySelected(day)}
                    >
                        {day}
                    </div>
                ))
            }
        </div>
    )
}