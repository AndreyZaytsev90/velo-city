import React from 'react';

const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map((todo) =>
                <li key={todo.id}>{todo.done? <s>{todo.text}</s>: todo.text}</li>
            )}
        </ul>
    );
};

export default TodoList;