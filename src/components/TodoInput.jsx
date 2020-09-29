import React, {useState} from 'react'
import uuid from 'uuid/v4'
import {useDispatch} from 'react-redux'

const TodoInput = () => {
    // todo가 CRUD 대상(object)입니다. -> 속성이 된다.
    // 함수는 const 타입에 할당함
    // JSON = JavaScript Object Notation. / 객체
    // object { a : 'a', b : () => {} (<- 이건 생략 가능)}, array []

    const [todo, setTodo] = useState('') // todo의 타입 결정
    const dispatch = useDispatch()
    const submitForm = e => {
        e.preventDefault() // default 기능은 막고, 내가 정의한 기능을 구현하라
        const newTodo = {
            todoId: uuid(),
            name : todo,
            complete: false
        }
        addTodo(newTodo)
        setTodo("")
    }

    const handleChange = e => {
        e.preventDefault()
        setTodo(e.target.value)
    }

    const addTodo = todo => {
        dispatch(addTodoAction(todo)) // 영속적으로 저장할 곳, state -> api -> db
    }
    return <>
    <h1>할일 등록</h1>
    <form onSubmit={submitForm} method='POST'>
        <div>
            <input type="text" name="todo" onChange={handleChange}/><br/>
            <input type="submit" value="ADD TODO"/>
        </div>
    </form>
    </>
}
export default TodoInput