import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { addTodo, setTodo } from '../redux/todo';

const mapStateToProps = (state) => {
  return {
    todos: state.todo.items
  }
}

const mapActionsToProps = {
  addTodo,
  setTodo
}

export default connect(mapStateToProps, mapActionsToProps)(TodoApp);