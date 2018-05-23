import React from "react";
import uuid from "uuid";
import style from "../../styles/App.css";
import Title from "../components/Title.js";
import TodoList from "../components/TodoList.js";
import TodoForm from "../components/TodoForm.js";
import { hot } from "react-hot-loader";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: "",
            data: [
                {
                    id: 1,
                    text: "clean room"
                },
                {
                    id: 2,
                    text: "wash the dishes"
                },
                {
                    id: 3,
                    text: "feed my cat"
                }
            ]
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ todoText: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        const todo = {
            id: uuid.v4(),
            text: this.state.todoText
        };
        this.setState({
            todoText: "",
            data: [...this.state.data, todo]
        });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title
                    header="To Do App"
                    todoTasksNumber={this.state.data.length}
                />
                <TodoForm
                    onSubmit={this.onSubmit}
                    todoText={this.state.todoText}
                    onChange={this.onChange}
                />
                <TodoList
                    data={this.state.data}
                    remove={this.removeTodo.bind(this)}
                />
            </div>
        );
    }
}

export default hot(module)(App);
