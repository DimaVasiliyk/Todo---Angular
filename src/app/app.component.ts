import { v4 as uuidv4 } from 'uuid';
import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService, } from './task.service'
import { Task } from "./task.interface"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
    taskForm = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
  	});

tasks: Task[] = [];
 
constructor(public taskService: TaskService){}
	
	addTask(){

		if (this.taskForm.valid) {
			const task: Task = {
				id: uuidv4(),
				title: this.taskForm.value.title,
				date: this.taskForm.value.date,
				
			};
			this.taskService.addTask(task);
			} else {
			console.log('form invalid');
		}
	}

  	deleteTask(task: Task){
        this.taskService.deleteTask(task);

	
	}
       
	deleteAll(){
		this.tasks.length = 0;
	}

	ngOnInit(): void {
		this.tasks = this.taskService.getAll();
	}
}

