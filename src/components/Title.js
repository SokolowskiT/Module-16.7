import React from "react";
import style from "../../styles/Title.css";

const Title = props => (
	<div>
		<h1 className={style.todoTitle}>{props.header}</h1>
		<p className={style.todoTasksNumber}>
			Tasks Number: {props.todoTasksNumber}
		</p>
	</div>
);

export default Title;
