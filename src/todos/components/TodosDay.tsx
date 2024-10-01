
const days = ['Lunes','Martes','Miercoles']

export const TodosDay = ()=>{

    return (
        <div className="flex">
            {
                days.map((day,i)=>(
                    <div 
                        key={i}
                        className="p-4 border border-blue-700 m-2 font-bold" 
                    >
                        {day}
                    </div>
                ))
            }
        </div>
    )
}