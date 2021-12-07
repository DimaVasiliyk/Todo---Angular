import { v4 as uuidv4 } from 'uuid';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService, } from './services/task.service'
import { Task } from "./task.interface"
import { Observable } from 'rxjs';
import { TimingPipe } from './pipes/timing.pipe';
import { OrdinalPipe } from './pipes/ordinal.pipe';

@Component({
	selector: 'todo',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.scss'],
	providers: [TimingPipe, OrdinalPipe],
})

export class TodosComponent implements OnInit {

	taskForm = new FormGroup({
		title: new FormControl(''),
		date: new FormControl(''),
	});

	tasks$!: Observable<Task[]>;
	// date: Date = new Date()

	constructor(public taskService: TaskService) { }

	public addTask() {
		if (this.taskForm.valid) {
			const task: Task = {
				id: uuidv4(),
				title: this.taskForm.value.title,
				date: new Date(),
			};
			this.taskService.addTask(task);
		} else {
			console.log('form invalid');
		}
	}

	public deleteTask(task: Task) {
		this.taskService.deleteTask(task);
	}

	public deleteAll() {
		this.taskService.deleteAllTasks();
	}

	ngOnInit(): void {
		this.tasks$ = this.taskService.getAll();

	}
}

