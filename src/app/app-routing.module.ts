import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        canActivate: [AuthGuard],
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
