import React from 'react';

function TodoItem(props) {
  const { job } = props;

  return (
    <div className="todo-item">
      <p>Todo Item</p>
      <div className="btn-group">
        <a className="edit-btn">Edit</a>
        <button type="submit">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
