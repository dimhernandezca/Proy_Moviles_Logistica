import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ IonicModule, ReactiveFormsModule ],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  frmLogin: FormGroup;

  constructor() {
    this.frmLogin = new FormGroup({
      user: new FormControl('dimhernandezca@uninpahu.edu.co', Validators.required),
      pass: new FormControl('123', Validators.required)
    })
   }

   login(){
      console.log(this.frmLogin.value.user);
   }

  ngOnInit() {}

}
