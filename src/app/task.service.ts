import { EventEmitter, Injectable } from "@angular/core";
import { Task } from "./task.interface"
import { LocalStorageService } from "./local-storage.service"

@Injectable({
    providedIn: 'root',
  })

export class TaskService{
    public tasks: Task[] = [];

    public tasksEmiter = new EventEmitter<Task[]>()

    constructor(public localStorageService: LocalStorageService){
      this.tasks = this.localStorageService.getData();
      this.tasksEmiter.subscribe(x => this.localStorageService.setData(x))
    }

    getAll(): Task[] {
      this.tasksEmiter.emit(this.tasks)
      return this.tasks;
    }

    addTask(task: Task){
      this.tasks.push(task);
      this.tasksEmiter.emit(this.tasks)
    }

    deleteTask(task: Task){
        
        const indexOfTask = this.tasks.findIndex((t: Task) => t.id === task.id);
    
        if (indexOfTask !== -1) {
          this.tasks.splice(indexOfTask,1);
         }   
         this.tasksEmiter.emit(this.tasks)
    }

    deleteAllTasks(){
        
      this.tasks = [];
      this.tasksEmiter.emit(this.tasks);
  }


}
