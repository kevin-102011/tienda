import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {ClientServiceService} from "../../services/client-service/client-service.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  clientForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public clientService:ClientServiceService
  ) {
  }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      personDocumentTypeId: new FormControl(null, [Validators.required,]),
      personName: new FormControl(null, [Validators.required,]),
      personEmail: new FormControl(null, [Validators.required, Validators.email]),
      personPhone: new FormControl(null, [Validators.required,]),
      personAddress: new FormControl(null, [Validators.required,]),
      personLastName: new FormControl(null, [Validators.required,]),
      personDocument: new FormControl(null, [Validators.required,])
    })
  }

  clientSave() {
    if (this.clientForm.valid) {
      const data = {
        personDocumentTypeId: this.clientForm.get('personDocumentTypeId')?.value,
        personName: this.clientForm.get('personName')?.value,
        personEmail: this.clientForm.get('personEmail')?.value,
        personPhone: this.clientForm.get('personPhone')?.value,
        personAddress: this.clientForm.get('personAddress')?.value,
        personLastName: this.clientForm.get('personLastName')?.value,
        personDocument: this.clientForm.get('personDocument')?.value,
      }
      this.clientService.saveClient(data).subscribe({
        next:()=>{
          Swal.fire(
            'Datos guardados correctamente!',
            'Presione el Boton (OK) para Continuar',
            'success'
          )
          this.clientForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          if (error.status == 400) {
            Swal.fire({
              icon: 'error',
              title: 'Ya existe este registro',
              text: 'Porfavor introdusca nuevos datos'
            });
          }else{
            Swal.fire({
              icon: 'error',
              title: 'OOPS',
              text: 'Error server'
            })
          }
        }
      })
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Formulario Invalido',
        text: 'Porfavor verifique que todos los campos se llenen correctamente'
      })
      this.clientForm.markAllAsTouched();
    }
  }
}
