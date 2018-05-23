import React from "react";
import style from "../../styles/Todo.css";

const Todo = ({ todo, remove }) => (
	<li id={todo.id} className={style.Todo}>
		{todo.text}
		<button onClick={() => remove(todo.id)}>Delete</button>
	</li>
);

export default Todo;
