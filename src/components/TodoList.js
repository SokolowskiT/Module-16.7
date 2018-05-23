import React from "react";
import style from "../../styles/TodoList.css";
import Todo from "./Todo";

const TodoList = ({ data, remove }) => {
	const todoArr = data.map(todo => (
		<Todo key={todo.id} todo={todo} remove={remove} />
	));
	return <ol className={style.todoList}>{todoArr}</ol>;
};

export default TodoList;
