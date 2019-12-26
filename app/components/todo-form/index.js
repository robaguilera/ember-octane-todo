import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TodoFormComponent extends Component {
  constructor(owner, args) {
    super(owner, args);
    const { todos } = args;

    // trust me i'm a professional
    // kids don't try this at home
    this.todos = JSON.parse(JSON.stringify(todos)) || [];
  }

  @action
  saveTodo(draftTodo) {
    const { todos } = this;
    const { updateTodos } = this.args;
    const todoIdx = todos.findIndex(todo => todo.id === draftTodo.id);

    if (todoIdx > -1) {
      todos[todoIdx] = draftTodo;
    } else {
      todos.push(draftTodo);
    }

    updateTodos(todos);
  }
}
