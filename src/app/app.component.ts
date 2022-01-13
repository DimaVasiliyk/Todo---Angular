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
      themeSwitcherButton.addEventListener('click',() => {
      let background = this.elRef.nativeElement.querySelector('body');
      background.classList.add('light-theme')
      if (background.classList.contains('dark-theme')) {
              background.classList.remove('dark-theme')
              background.classList.add('light-theme')
              console.log(background,"one if");
              
            } else {
              background.classList.add('dark-theme')
              background.classList.remove('light-theme')
              console.log(background,"two if");
            }
          }
        
      )
      }
  
    ngAfterContentInit() {
      let background = this.elRef.nativeElement.querySelector('body');
      background.classList.add('light-theme')
    }
  


//  constructor(private elRef:ElementRef) {}

//   @ViewChild('elemButton') themeSwitcherButton: any; 

// 	title = 'Todo';
//   themeSwitcherButton = document.querySelector('.button-theme')

//     this.themeSwitcherButton.addEventListener('click',() {
//       const background = document.querySelector('background')
    
//     if (background.classList.contains('dark-theme')) {
//       background.classList.remove('dark-theme')
//       background.classList.add('light-theme')
//     } else {
//       background.classList.add('dark-theme')
//       background.classList.remove('light-theme')
//     }
//   })
  
//   ngAfterViewInit() {
//     console.log(this.input.nativeElement.value);
//   }

}
