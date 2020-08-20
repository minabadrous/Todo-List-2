import React, {useState} from 'react';

const TodoList = props => {

    return(
        <div className="todo-list">
            {props.todos.map(todo => {
                return(
                 <div onClick={() => props.RemoveTodo(todo.id)} className="todo-item" key={todo.id}>{todo.task}</div>
                )
            })}
      </div>
    )
}

export default TodoList;