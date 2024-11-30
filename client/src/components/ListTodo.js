import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodos = () => {

    const [todos, setTodo] = useState([])


    // delete todo function

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            setTodo(todos.filter(todo => todo.todo_id != id))

        } catch (error) {
            console.log(error.message);

        }
    }


    const getTodo = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setTodo(jsonData);

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getTodo()
    }, [])

    console.log(todos);

    return (
        <Fragment>
            <table class="table mt-5 table-striped text-center">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td >
                                {todo.description}
                            </td>
                            <td>
                                <EditTodo todo={todo}/>
                            </td>
                            <td >
                                <div className="btn btn-danger " type="button"
                                    onClick={() => deleteTodo(todo.todo_id)}>
                                    Delete
                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </Fragment>
    )
}

export default ListTodos;