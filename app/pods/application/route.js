import Route from "@ember/routing/route";
import { action } from "@ember/object";
import axios from "axios";

export default class ApplicationRoute extends Route {
  async model() {
    return { todos: await this.loadTodos() };
  }
  async loadTodos() {
    let todos;
    try {
      const { data } = await axios.get("/todos");
      todos = data;
    } catch (error) {
      console.log(error);
      todos = [];
    }
    return todos;
  }
  @action
  saveTodo() {}
}
