import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InvoiceService} from "../../services/invoice/invoice.service";
import {ClientServiceService} from "../../services/client-service/client-service.service";

@Component({
  selector: 'app-imp-facture',
  templateUrl: './imp-facture.component.html',
  styleUrls: ['./imp-facture.component.css']
})
export class ImpFactureComponent implements OnInit {
invoiceId:any;
dataFacture:any;
PersonName:any;
arrayData:[]=[];
  constructor(
    private route: ActivatedRoute,
    public invoiceService:InvoiceService,
    public clientService:ClientServiceService
  ) { }

  ngOnInit(): void {
    this.invoiceId = this.route.snapshot.paramMap.get('invoiceId');
    this.getAllFacture();
  }
  getAllFacture(){
    this.invoiceService.getInvoiceById(this.invoiceId).subscribe((data)=>{
      this.dataFacture=data;
      console.log( this.dataFacture)

      this.clientService.getClientById(this.dataFacture.personId).subscribe((data)=>{
        this.PersonName = data.personName
      })
    })
  }

}
