import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GameService} from "../../../services/game-service/game-service.service";
import Swal from "sweetalert2";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  gameForm:FormGroup = new FormGroup({});
  gameId:any;
  dataGame:any;
  constructor(
    private formBuilder: FormBuilder,
    public gameService:GameService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('videoGameId');
    this.gameForm = this.formBuilder.group({
      videoGameName: new FormControl(null, [Validators.required,]),
      videoGameYear: new FormControl(null, [Validators.required,Validators.max(2022)]),
      videoGameGender: new FormControl(null, [Validators.required,])
    })
    this.getAllgameById();
  }
  getAllgameById(){
    this.gameService.getGameById(this.gameId).subscribe((data)=>{
      this.dataGame=data

      this.gameForm.patchValue({
        videoGameName:this.dataGame.videoGameName,
        videoGameYear:this.dataGame.videoGameYear,
        videoGameGender:this.dataGame.videoGameGender
      })
    })
  }
  gameSave() {
    if (this.gameForm.valid) {
      const data = {
        videoGameName: this.gameForm.get('videoGameName')?.value,
        videoGameYear: this.gameForm.get('videoGameYear')?.value,
        videoGameGender: this.gameForm.get('videoGameGender')?.value
      }
      this.gameService.updateGame(this.gameId,data).subscribe({
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
