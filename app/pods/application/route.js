import Route from "@ember/routing/route";
import todos from "ember-quickstart/mocks/todos";
import { action } from "@ember/object";

export default class ApplicationRoute extends Route {
  model() {
    return { todos };
  }
  @action
  saveTodo() {}
}
