import Route from "@ember/routing/route";
import todos from "ember-quickstart/mocks/todos";
import { action } from "@ember/object";
import axios from "axios";

export default class ApplicationRoute extends Route {
  model() {
    const res = axios.get("/todos");
    return { todos };
  }
  @action
  saveTodo() {}
}
