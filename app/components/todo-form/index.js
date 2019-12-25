import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class TodoFormComponent extends Component {
  constructor(owner, args) {
    super(owner, args);
    const { todos } = args;

    this.todos = JSON.parse(JSON.stringify(todos)) || [];
  }
  @tracked
  todos;
}
