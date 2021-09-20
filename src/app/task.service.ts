import { Injectable } from "@angular/core";
import { Task } from "./task.interface"

@Injectable({
    providedIn: 'root',
  })

export class TaskService{
    public tasks: Task[] = [];

    getAll(): Task[] {
        return this.tasks;
    }

    addTask(task: Task){
            this.tasks.push(task);
    }


    deleteTask(task: Task){
        
        const indexOfTask = this.tasks.findIndex((t: Task) => t.id === task.id);
    
        if (indexOfTask !== -1) {
          this.tasks.splice(indexOfTask,1);
         }   
    }
}