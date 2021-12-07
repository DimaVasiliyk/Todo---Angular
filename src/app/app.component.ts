import { v4 as uuidv4 } from 'uuid';
import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService, } from './todos/services/task.service'
import { Task } from "./todos/task.interface"
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Todo';
  }
