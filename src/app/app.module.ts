import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskService } from './todos/services/task.service';
import { HttpClientModule } from '@angular/common/http';

// import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    // BackgroundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
