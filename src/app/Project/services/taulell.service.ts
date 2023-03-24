import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaulellService {
  jugadors: Observable<{ jugadors: { nom: string, color: string, taulell: string, id: string }[] }> = this.socket.fromEvent<{ jugadors: { nom: string, color: string, taulell: string, id: string }[] }>('players');
  iniciar: Observable<boolean> = this.socket.fromEvent<boolean>('startGame');
  player: Observable<{ nom: string; color: string; taulell: string; id: string; }> = this.socket.fromEvent<{ nom: string; color: string; taulell: string; id: string; }>('player');
  move: Observable<{ from: string, to: string, taulell: string }> = this.socket.fromEvent<{ from: string, to: string, taulell: string }>('move');
  constructor(private socket: Socket) { }
  newPlayer(nom: string) {
    this.socket.emit('addPlayer', { nom: nom, id: this.playerId() });
  }

  sendMove(from: string, to: string, taulell: string) {
    this.socket.emit('move', { from: from, to: to, taulell: taulell });
  }

  private playerId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
