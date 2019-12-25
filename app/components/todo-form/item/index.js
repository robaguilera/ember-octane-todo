import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class TodoFormItem extends Component {
  @action
  completeTodo() {
    this.todo.isComplete = !this.todo.isComplete;
  }
}
