import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from "../../services/client-service/client-service.service";

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {
clients:any;
  constructor(
    public clientService:ClientServiceService
  ) { }

  ngOnInit(): void {
    this.getAllClients();
  }
  getAllClients(){
    this.clientService.getAllClient().subscribe((data)=>{
      this.clients = data;
    })
  }

}
