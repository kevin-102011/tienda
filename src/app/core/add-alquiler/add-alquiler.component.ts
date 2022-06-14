import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../services/game-service/game-service.service";
import {InvoiceService} from "../../services/invoice/invoice.service";

@Component({
  selector: 'app-add-alquiler',
  templateUrl: './add-alquiler.component.html',
  styleUrls: ['./add-alquiler.component.css']
})
export class AddAlquilerComponent implements OnInit {
  alquilerListForm:FormGroup = new FormGroup({});

  videoGameId:any;
  invoiceId:any;
  gameList:any;
  rentalDateStart:string='';
  rentalDateEnd:string='';
  constructor(
    private formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public gameService:GameService,
    public invoiceService:InvoiceService
  ) { }

  ngOnInit(): void {
    this.videoGameId = this.route.snapshot.paramMap.get('videoGameId');
    this.invoiceId = this.route.snapshot.paramMap.get('invoiceId');

    this.alquilerListForm = this.formBuilder.group({
      rentalDateStart: new FormControl(null, [Validators.required,]),
      rentalDateEnd: new FormControl(null, [Validators.required,])
    })

  }

  generateListVideoGames() {
    if(this.alquilerListForm.valid){
      this.rentalDateStart = this.alquilerListForm.get('rentalDateStart')?.value
      this.rentalDateEnd = this.alquilerListForm.get('rentalDateEnd')?.value

      this.gameService.getAllListAddRent(this.videoGameId,this.rentalDateStart).subscribe((data)=>{
       this.gameList = data;
      })

    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Formulario Invalido',
        text: 'Porfavor Seleccione las Fechas'
      })
    }
  }

  rentByreferenceId(item:any) {
 let  gameReferenceId = item.gameReferenceId;
  const data ={
    gameReferenceId:gameReferenceId,
    rentalDateStart:this.rentalDateStart,
    rentalDateEnd:this.rentalDateEnd,
    invoiceId:this.invoiceId
   }
   this.invoiceService.saveRentGame(data).subscribe(()=>{
     Swal.fire({
       icon: 'success',
       title: 'Renta añadida a la factura',
       text: 'Precione el boton Ok para continuar'
     })
   })
    this.generateListVideoGames();

  }
}
