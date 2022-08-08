import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent {
  tasksToDo = ['Task 1', 'Task 2'];
  tasksFinished = ['Task 3', 'Task 4'];
  taskInputValue = '';

  addTask(): void {
    if (this.taskInputValue) {
      // @ts-ignore
      this.tasksToDo.push(this.taskInputValue)
      this.taskInputValue = '';
    }
    }

  deleteTask(index: number): void {
    // @ts-ignore
    this.tasksFinished.push(this.tasksToDo[index]);
    this.tasksToDo.splice(index, 1);
  }

  clearAll() {
    this.tasksToDo = [];
    this.tasksFinished = []
  }

  clearFinished() {
    this.tasksFinished = []
  }
}
