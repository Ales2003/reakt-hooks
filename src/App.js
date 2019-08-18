import React, {useState} from 'react'
import TodoList from './TodoList'



export default function App () {
  // state = {
  //   todos: [
  //     {id: 1, title: 'First todo', completed: false},
  //     {id: 2, title: 'Second todo', completed: true},
  //   ]
  // }

//как результат ф-и use state мы получаем массив из 2-х элементов:
// 1-й элкмент -  состояние
//2-й элемент -  . ф-я--setter к-я позволяем изменяет состояние
//передаем нач состояние к-е хотим использовать

    const [todos, setTodos] = useState([
      {id: 1, title: 'First todo', completed: false},
      {id: 2, title: 'Second todo', completed: true},
    ]) 

    const [todoTitle, setTodoTitle] = useState('')

    const addTodo = event => {
      if(event.key === 'Enter') {
        setTodos([
          ...todos,
          {
            id:Date.now(),
            title: todoTitle,
            completed: false 
          }
        ])
        setTodoTitle('')
      }
    }

    return (
      <div className="container">
        <h1>Todo app</h1>

          <div className="input-field">
            <input
              type="text"
              value = {todoTitle}
              onChange = {event => setTodoTitle(event.target.value)}
              onKeyPress = {addTodo}

            />
            <label>Todo name</label>
          </div>

          <TodoList todos={todos} />
      </div>
    );
}