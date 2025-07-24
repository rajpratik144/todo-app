import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTrash, faSquare } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="todo-item">
      <FontAwesomeIcon
        icon={todo.completed ? faCheckSquare : faSquare}
        className={todo.completed ? "icon green" : "icon"}
        onClick={onToggle}
      />
      <span className={todo.completed ? "todo-text green-text" : "todo-text"}>{todo.text}</span>
      <FontAwesomeIcon icon={faTrash} className="icon delete" onClick={onDelete} />
    </div>
  );
}

export default TodoItem;
