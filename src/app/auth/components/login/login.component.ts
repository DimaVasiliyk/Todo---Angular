import { ApiService } from './../../../todos/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SesionStorageService } from 'src/app/todos/services/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public form: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService,private  storageService:SesionStorageService,private router: Router) {
    this.form = fb.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.apiService.login(this.form.value).subscribe((token: string)=>{
    this.storageService.setToken(token);
      this.router.navigate(["/todo"])
    })
  }
}
