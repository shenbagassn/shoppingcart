import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
 
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;//Reactive Form
  constructor(public usr1:UsersService) //using Dependency Injection create instance & public added to change parameter into property
  { }

  ngOnInit(): void {
    //Reactive Form-create form control and apply validations
    this.loginForm= new FormGroup(
      {'Username':new FormControl(null,Validators.required),
      'Password':new FormControl(null,[Validators.required,Validators.minLength(4)])
  })


    $('.toggle').click(()=>{
      // Switches the Icon
      $(this).children('i').toggleClass('fa-pencil');
      // Switches the forms  
      $('.form').animate({
      height: "toggle",
      'padding-top': 'toggle',
      'padding-bottom': 'toggle',
      opacity: "toggle"
      }, "slow");
    });
  }

  doLogin(){
    console.log(this.loginForm.value);
    
  }

  doRegistration(form:NgForm){
this.usr1.registration(form.value);
  }



}
