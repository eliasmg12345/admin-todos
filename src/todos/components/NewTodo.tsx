'use client';

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
//import * as todosApi from "@/todos/helpers/todos";
//import { useRouter } from "next/navigation";
import { addTodo, deleteCompletedTodos } from "../actions/todo-actions";
import { createTodo } from "../helpers/todos";
import { useRouter } from "next/navigation";

type Days = ['Lunes', 'Martes', 'Miercoles']


export const NewTodo = () => {
    const router = useRouter()
    const [description, setDescription] = useState('')
    const [day, setDay] = useState('')


    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (description.trim().length === 0) return

        //await addTodo(description)
        await createTodo(description, day)
        router.refresh()
        setDescription('')
        //router.refresh()

    }

    return (
        <form onSubmit={onSubmit} className='flex w-full'>
            <input type="text"
                onChange={e => setDescription(e.target.value)}
                value={description}
                className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
                placeholder="¿Qué necesita ser hecho?" />
            <select name="day" id="day" onChange={e => setDay(e.target.value)}>
                <option value="monday">Lunes</option>
                <option value="tuesday">Martes</option>
                <option value="wednesday">Miercoles</option>
                <option value="thursday">Jueves</option>
                <option value="friday">Viernes</option>
                <option value="saturday">Sabado</option>
                <option value="sunday">Domingo</option>
            </select>

            <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
                Crear
            </button>

            <span className='flex flex-1'></span>

            <button
                onClick={() => deleteCompletedTodos()}
                type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
                <IoTrashOutline />
                Borrar Completados
            </button>

        </form>
    )
}