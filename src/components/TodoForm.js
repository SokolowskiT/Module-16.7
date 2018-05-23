import React from "react";
import style from "../../styles/TodoForm.css";

const TodoForm = ({ onSubmit, todoText, onChange }) => (
	<form className={style.TodoForm} onSubmit={onSubmit}>
		<input
			type="text"
			value={todoText}
			onChange={onChange}
			placeholder="Task title"
			maxLength="256"
		/>
		<button type="submit">Add task</button>
	</form>
);

export default TodoForm;
