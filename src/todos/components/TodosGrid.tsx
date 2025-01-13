'use client'

import { Todo } from '@prisma/client'
import { TodoItem } from '..'
// import * as todosApi from "@/todos/helpers/todos";
import { useRouter } from 'next/navigation';
import { toggleTodo } from '../actions/todo-actions';
import { useState } from 'react';
import { TodosDay } from './TodosDay';

interface Props {
    todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {
    const [daySelected, setDaySelected] = useState('')

    const todoByDay = todos.filter(todo => todo.day === daySelected)
    const router = useRouter()
    /*
    const toggleTodo = async (id: string, complete: boolean) => {
        const updatedTodo = await todosApi.updateTodo(id, complete)
        router.refresh()
    }
    */


    return (
        <div className='flex flex-col'>
            <TodosDay daySelectedd={setDaySelected} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                {
                    todoByDay.map(todo => (
                        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                    ))
                }
            </div>
        </div>
    )
}
