import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientServiceService} from "../../services/client-service/client-service.service";
import {GameService} from "../../services/game-service/game-service.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {
  alquilerForm:FormGroup = new FormGroup({});
  clients:any;
  games:any;

  constructor(
    private formBuilder: FormBuilder,
    public clientService:ClientServiceService,
    public gameService:GameService
  ) { }

  ngOnInit(): void {
    this.alquilerForm = this.formBuilder.group({
      personId: new FormControl(null, [Validators.required,])

    })
    this.getAllClients();
  }
  getAllClients(){
    this.clientService.getAllClient().subscribe((data)=>{
      this.clients =data;
    })
  }
  getAllgames(){
    this.gameService.getAllGame().subscribe((data)=>{
      this.games = data;
    })
}

  generateFacture() {
    if(this.alquilerForm.valid){
      this.getAllgames();

    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Formulario Invalido',
        text: 'Porfavor Seleccione un cliente'
      })
    }

  }

  buttonAlquilerGame(item:any) {

  }
}
