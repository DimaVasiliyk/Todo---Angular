import { v4 as uuidv4 } from 'uuid';
import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
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

    constructor(private elRef:ElementRef) {}


    ngAfterViewInit() {


      let  themeSwitcherButton = this.elRef.nativeElement.querySelector('.button-theme');
      console.log(themeSwitcherButton);
      
      themeSwitcherButton.addEventListener('click',() => {
      let background = document.body;
      background.classList.add('theme-light')
      if (background.classList.contains('theme-dark')) {
              background.classList.remove('theme-dark')
              background.classList.add('theme-light')
              console.log(background,"one if");
              
            } else {
              background.classList.add('theme-dark')
              background.classList.remove('theme-light')
              console.log(background,"two if");
            }
          }
      )
      }
    ngAfterContentInit() {
      let background = document.body;
      background.classList.add('theme-light')
    }
  


//  constructor(private elRef:ElementRef) {}

//   @ViewChild('elemButton') themeSwitcherButton: any; 

// 	title = 'Todo';
//   themeSwitcherButton = document.querySelector('.button-theme')

//     this.themeSwitcherButton.addEventListener('click',() {
//       const background = document.querySelector('background')
    
//     if (background.classList.contains('theme-dark')) {
//       background.classList.remove('theme-dark')
//       background.classList.add('theme-light')
//     } else {
//       background.classList.add('theme-dark')
//       background.classList.remove('theme-light')
//     }
//   })
  
//   ngAfterViewInit() {
//     console.log(this.input.nativeElement.value);
//   }

}
