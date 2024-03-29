import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {


  @Input() task!: Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggle: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onClickDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggleReminder(task: Task) {
    this.onToggle.emit(task)
  }

}
