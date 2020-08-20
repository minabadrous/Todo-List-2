import React, {useState} from 'react'

const AddTodoForm = props => {
    
    const submitChange = (event) => {
        event.preventDefault();
        props.AddTodo(
            {id: Math.random(), 
            task: document.getElementById('new').value}
            );
        document.getElementById('new').value = '';
    }

    return(
        <div className="add-todo">
            <form onSubmit={submitChange}>
                <input id="new" type="text" placeholder="Enter a new Task"></input>
            </form>
        </div>
    )
}

export default AddTodoForm;