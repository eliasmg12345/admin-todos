export const dynamic = 'force-dynamic'
export const revalidate = 0


import { getUserSessionServer } from "@/app/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { TodosDay } from "@/todos/components/TodosDay";
import { redirect } from "next/navigation";


export const metadata = {
  title: 'Listado de Todos',
  description: 'Listado de Todos',
};

export default async function ServerTodosPage() {

  const user = await getUserSessionServer()
  if (!user) redirect('/api/auth/signin')

  const todos = await prisma.todo.findMany({ 
    where:{userId:user.id},
    orderBy: { description: 'asc' } 
  })


  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>

      <div className="w-full px-3 mx-5 mb-5">

        <NewTodo days={[]} />
      </div>
      <TodosDay />

      <TodosGrid todos={todos} />
    </>
  );
}