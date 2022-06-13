import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {GameService} from "../../services/game-service/game-service.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register-game',
  templateUrl: './register-game.component.html',
  styleUrls: ['./register-game.component.css']
})
export class RegisterGameComponent implements OnInit {
  gameForm:FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    public gameService:GameService
  ) { }

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      consoleTypeId: new FormControl(null, [Validators.required,]),
      videoGameName: new FormControl(null, [Validators.required,]),
      videoGameStock: new FormControl(null, [Validators.required,]),
      videoGameYear: new FormControl(null, [Validators.required,Validators.max(2022)]),
      videoGameGender: new FormControl(null, [Validators.required,])
    })
  }

  gameSave() {
    if (this.gameForm.valid) {
      const data = {
        consoleTypeId: this.gameForm.get('consoleTypeId')?.value,
        videoGameName: this.gameForm.get('videoGameName')?.value,
        videoGameStock: this.gameForm.get('videoGameStock')?.value,
        videoGameYear: this.gameForm.get('videoGameYear')?.value,
        videoGameGender: this.gameForm.get('videoGameGender')?.value
      }
      this.gameService.saveGame(data).subscribe({
        next:()=>{
          Swal.fire(
            'Datos guardados correctamente!',
            'Presione el Boton (OK) para Continuar',
            'success'
          )
          this.gameForm.reset();
        },error: (error: HttpErrorResponse) => {
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
        text: 'Por favor verifique que todos los campos se llenen correctamente'
      })
      this.gameForm.markAllAsTouched();
     }

  }
}
