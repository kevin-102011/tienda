import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {PriceConsolaService} from "../../services/price-consola/price-consola.service";

@Component({
  selector: 'app-price-consola',
  templateUrl: './price-consola.component.html',
  styleUrls: ['./price-consola.component.css']
})
export class PriceConsolaComponent implements OnInit {
  consolePriceForm:FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    public priceConsolaService:PriceConsolaService
  ) { }

  ngOnInit(): void {
    this.consolePriceForm = this.formBuilder.group({
      consoleTypeId: new FormControl(null, [Validators.required,]),
      pricePerConsoleCash: new FormControl(null, [Validators.required,]),
      pricePerConsoleDate: new FormControl(null, [Validators.required,]),

    })
  }

  consolePriceSave(){
    if(this.consolePriceForm.valid){
      const data={
        consoleTypeId: this.consolePriceForm.get('consoleTypeId')?.value,
        pricePerConsoleCash: this.consolePriceForm.get('pricePerConsoleCash')?.value,
        pricePerConsoleDate: this.consolePriceForm.get('pricePerConsoleDate')?.value
      }
      this.priceConsolaService.savePriceConsola(data).subscribe(()=>{
        Swal.fire({
          icon: 'success',
          title: 'Datos guardados correctamente',
          text: 'Precione Ok para continuar'
        });
        this.consolePriceForm.reset();
      })
    }else{

      Swal.fire({
        icon: 'warning',
        title: 'Formulario Invalido',
        text: 'Porfavor verifique que todos los campos se llenen correctamente'
      })
      this.consolePriceForm.markAllAsTouched();
    }
  }

}
