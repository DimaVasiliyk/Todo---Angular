import { Component, OnInit } from '@angular/core';
import { SesionStorageService} from '../todos/services/session-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public storageService:SesionStorageService) { }
  ngOnInit(): void {
  }

}
