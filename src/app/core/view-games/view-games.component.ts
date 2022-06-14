import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game-service/game-service.service";

@Component({
  selector: 'app-view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.css']
})
export class ViewGamesComponent implements OnInit {
  games:any;
  constructor(
    public gameService:GameService
  ) { }

  ngOnInit(): void {
    this.getAllGames();
  }
  getAllGames(){
    this.gameService.getAllGame().subscribe((data)=>{
      this.games=data
    })
  }

}
