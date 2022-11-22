import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection, HubConnectionBuilder} from '@microsoft/signalr';
import { connect } from 'net';

class PlayerModel {
  name: string;
}

@Component({
  selector: 'app-resistance-role-generator',
  templateUrl: './resistance-role-generator.component.html',
  styleUrls: ['./resistance-role-generator.component.scss']
})
export class ResistanceRoleGeneratorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    var connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:5001/playerHub").build();
    connection.on("AllPlayers", (message) => {
      debugger;
      console.log(message);
    })
    connection.start().then(() => {});
  }

  model = new PlayerModel();

  players = new Array<PlayerModel>();

  onSubmit(): boolean {
    debugger;
    const playerModel = new PlayerModel();
    playerModel.name = this.model.name;
    this.http.post("https://localhost:5001/players", playerModel).subscribe(() => {

    });
    return false;
  }
}
