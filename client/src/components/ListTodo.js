import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {

    const [todos, setTodo] = useState([])
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
    },[])

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
                    {todos.map(todo =>(
                        <tr>
                            <td>
                                {todo.description}
                            </td>
                            <td>
                                Edit
                            </td>
                            <td>
                                Delete
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </Fragment>
    )
}

export default ListTodos;