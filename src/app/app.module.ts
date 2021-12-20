import { HttpInterceptor } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NgModule, Provider } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskService } from './todos/services/task.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { TokenInterceptor } from './token.interceptor';

// import { BackgroundComponent } from './background/background.component';
const INTERCEPTOR_PROVIDER: Provider = {
  provide:HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
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
    TaskService,
    AuthGuard,
    INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
