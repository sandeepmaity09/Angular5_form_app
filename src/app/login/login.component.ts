import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../services/data.service';

@Component({
  selector: 'model-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	// public myform:FormGroup;

	// ngOnInit(){
	// 	this.myform = new FormGroup({
	// 		name: new FormGroup({
	// 			firstName: new FormControl('',Validators.required),
	// 			lastName: new FormControl('',Validators.required)
	// 		}),
	// 		email: new FormControl('',[
	// 			Validators.required,
	// 			Validators.pattern('[^@]*@[^@]*')
	// 			]),
	// 		password: new FormControl('',[
	// 			Validators.required,
	// 			Validators.minLength(8)
	// 			]),
	// 		language: new FormControl('',Validators.required)
	// 	})
	// }
	
	public myform: FormGroup;
	public firstName: FormControl;
	public lastName: FormControl;
	public email: FormControl;
	public password: FormControl;
	public language: FormControl;

	ngOnInit(){
		this.createFormControls();
		this.createForm();
	}

	public createFormControls(){
		this.firstName = new FormControl('',Validators.required);
		this.lastName = new FormControl('',Validators.required);
		this.email = new FormControl('',[
			Validators.required,
			Validators.pattern('[^@]*@[^@]*')
		]);
		this.password = new FormControl('',[
			Validators.required,
			Validators.minLength(8)
		]);
		this.language = new FormControl('',Validators.required);
	}

	public createForm(){
		this.myform = new FormGroup({
			name : new FormGroup({
				firstName: this.firstName,
				lastName: this.lastName
			}),
			email: this.email,
			password: this.password,
			language: this.language
		});
	}

	constructor(private data:DataService){}

	public langs = this.data.optionsForLanguage();

	public onSubmit(){
		console.log('onSubmit Called');
		this.myform.reset();
	}

}
