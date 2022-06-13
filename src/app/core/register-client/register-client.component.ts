import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  clientForm:FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      Identificacion: new FormControl(null, [Validators.required,]),
      nombre: new FormControl(null, [Validators.required,]),
      email: new FormControl(null, [Validators.required,Validators.email]),
      telefono: new FormControl(null, [Validators.required,]),
      direccion: new FormControl(null, [Validators.required,])
    })
  }

  clientSave() {
    if(this.clientForm.valid){

    }
  }
}
