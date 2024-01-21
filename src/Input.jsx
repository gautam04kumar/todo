import React, { useEffect, useState } from 'react'

export default function Input(props) {

    let [todo, setTodo] = useState('')
    let [error, setError] = useState(false)

    const changeInput = (event) => {
        setTodo(event.target.value)
        if (event.target.value.length > 0) {
            setError(false)
        } else {
            setError(true)
        }

    }
    const submit = (e) => {
        e.preventDefault();
        if (todo.length > 0) {
            if (props.editData.index !== "") {
                props.updateTodo(props.editData.index,todo)
            } else {
                props.addTodo(todo)
            }

        } else {
            setError(true)
        }

        //    todo.length>0 ? props.addTodo(todo) : setError(true)
        setTodo('')

    }

    useEffect(() => {
        setTodo(props.editData.data)
    }, [props.editData])
    return (
        <form className="row g-3" onSubmit={submit}>
            <div className="col-10">
                <input type="text"
                    className="form-control"
                    placeholder="enter todo"
                    value={todo}
                    onChange={changeInput} />
                {
                    error && <p className="text-danger">please enter todo</p>
                }
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3" >
                    {
                        props.editData.index === '' ? "add" : "update"
                    }
                </button>
            </div>
        </form>
    )
}
