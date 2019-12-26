import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class TodoFormItem extends Component {
  @action
  completeTodo() {
    const { saveTodo, todo } = this.args;
    const draftTodo = { ...todo, tags: [...todo.tags] };

    draftTodo.isComplete = !draftTodo.isComplete;
    saveTodo(draftTodo);
  }
}
