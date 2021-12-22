import { ApiService } from './api.service';
import { Injectable } from "@angular/core";
import { Task } from "../task.interface"
import { LocalStorageService } from "./local-storage.service"
import { BehaviorSubject, Observable, } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  private taskSubject = new BehaviorSubject<Task[]>([]);

  constructor(private apiService: ApiService) {
    this._getTasks()
  }

  private _getTasks(): any {
    this.apiService.getTodos().subscribe((data) => {
      this.taskSubject.next(data)
    })

  }
  public getAll(): Observable<Task[]> {
    return this.taskSubject.asObservable();
  };

  public addTask(task: Task) {
    const tasks = this.taskSubject.getValue()
    this.apiService.createTodo(task).subscribe(newTask => {
      this.taskSubject.next([...(newTask.reverse())]);
    })
  }

  public deleteTask(task: Task) {
    const tasks = this.taskSubject.getValue();
    this.apiService.deleteTodo(task.id).subscribe(deletedTodo => {
      const indexOfTask = tasks.findIndex((t: Task) => t.id === task.id);
      if (indexOfTask !== -1) {
        tasks.splice(indexOfTask, 1);
        this.taskSubject.next([...tasks]);
      }
    })
  }

  public deleteAllTasks() {
this.apiService.deleteAllTodo().subscribe( ()  => {
  this.taskSubject.next([]);})
    // this.taskSubject.value.forEach(data => {
    //   this.apiService.deleteTodo(data.id).subscribe(() => {
    //     this.taskSubject.next([]);
    //   })
//     })
    
  }
}
