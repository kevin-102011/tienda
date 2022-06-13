import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {GameService} from "../../services/game-service/game-service.service";

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
    if (this.gameForm.valid){
      const data ={
        consoleTypeId: this.gameForm.get('consoleTypeId')?.value,
        videoGameName :this.gameForm.get('videoGameName')?.value,
        videoGameStock:this.gameForm.get('videoGameStock')?.value,
        videoGameYear:this.gameForm.get('videoGameYear')?.value,
        videoGameGender:this.gameForm.get('videoGameGender')?.value
      }
      this.gameService.saveGame(data).subscribe(()=>{
        Swal.fire({
          icon: 'success',
          title: 'Datos guardados correctamente',
          text: 'Precione Ok para continuar'
        });
        this.gameForm.reset();
      })

    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Formulario Invalido',
        text: 'Porfavor verifique que todos los campos se llenen correctamente'
      })
      this.gameForm.markAllAsTouched();
    }

  }
}
