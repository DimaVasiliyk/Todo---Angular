import { Injectable } from '@angular/core';
import { TaskService } from "./task.service"

@Injectable({
	providedIn: 'root'
})


export class LocalStorageService {

	public getData(){

	return JSON.parse(localStorage.getItem('data') || '[]')
	
	   }
	 
	public setData(data: Object){
		
 	 localStorage.setItem("data",JSON.stringify(data));
	 }

}
