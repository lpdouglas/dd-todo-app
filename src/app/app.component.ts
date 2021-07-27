import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dd-todo-app';
  
  @Input() todoList :Array<string> = new Array();

  /**
   * addTodo on list
   */
  public addTodo(e :HTMLInputElement) {    
    let value = e.value;
    if (!value) return;

    this.todoList.push(value.trim());
    e.value = "";
  }

  public deleteTodo(e :string) {
    if (!e) return;

    let value = e.trim();

    let index = this.todoList.findIndex(v => v == value );
    if (index>=0) this.todoList.splice(index, 1);
  }
}