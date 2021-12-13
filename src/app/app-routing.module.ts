import { LoginComponent } from './auth/components/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { TodosComponent } from './todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'todo',
        loadChildren: ()=> import('../app/todos/todos.module').then(m=> m.TodosModule)
      },
      {
        path:'auth',
        loadChildren: ()=> import('../app/auth/auth.module').then(m=> m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
