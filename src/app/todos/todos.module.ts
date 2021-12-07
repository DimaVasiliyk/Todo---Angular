import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
import { TaskService } from './services/task.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { SharedModule } from '../shared/shared.module';
import { OrdinalPipe } from './pipes/ordinal.pipe';
import { TimingPipe } from './pipes/timing.pipe';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TodosComponent,
        canActivate: []
      }

    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TodosComponent,
    TimingPipe,
    OrdinalPipe,
  ],
  providers: [TaskService, LocalStorageService]
})
export class TodosModule { }
