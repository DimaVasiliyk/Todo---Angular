import { Injectable } from "@angular/core";
import { Task } from "../task.interface"
import { LocalStorageService } from "./local-storage.service"
import { BehaviorSubject, Observable,} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  private taskSubject = new BehaviorSubject<Task[]>(this._getTasks());

  constructor(public localStorageService: LocalStorageService) { }


  private _getTasks(): Task[] {
    return this.localStorageService.getData() || [];
  }


 public  getAll(): Observable<Task[]> {
    return this.taskSubject.asObservable();
  };

  public addTask(task: Task) {

    const tasks = this.taskSubject.getValue()
    this.taskSubject.next([task, ...tasks]);

  }

  public deleteTask(task: Task) {
    const tasks = this.taskSubject.getValue();
    const indexOfTask = tasks.findIndex((t: Task) => t.id === task.id);

    if (indexOfTask !== -1) {
      tasks.splice(indexOfTask, 1);

      this.taskSubject.next([...tasks]);
    }
  }
  
  public deleteAllTasks() {
    this.taskSubject.next([]);
  }
}
