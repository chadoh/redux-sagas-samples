import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  load as loadTodos,
  complete as completeTodo
} from '../reducers/todos';
import { getAsArray as getTodosAsArray } from '../selectors/todos';
import { Link } from 'react-router';
import TodoList from '../components/TodoList';

class Done extends Component {
  componentDidMount() {
    const { loadTodos } = this.props;
    loadTodos('complete');
  }

  render() {
    return (
      <div>
        <h2>Done <Link to='/all'>all</Link></h2>
        <TodoList todos={this.props.todos} onTodoClick={this.props.completeTodo} />
      </div>
    );
  }
}

Done = connect((state) => ({
  todos: getTodosAsArray(state.todos, 'complete'),
}), {
  loadTodos,
  completeTodo,
})(Done);

export default Done;
