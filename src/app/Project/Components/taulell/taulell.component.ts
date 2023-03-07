import { Component } from '@angular/core';
import { Board } from '../../Models/Implementations/Board';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Jugador } from '../../Models/Implementations/Jugador';
import { TaulellService } from '../../services/taulell.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-taulell',
  templateUrl: './taulell.component.html',
  styleUrls: ['./taulell.component.css']
})
export class TaulellComponent {
  boardWhite: Board;
  boardBlack: Board;
  taulellBlanques;
  taulellNegres;
  alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  iniciat: boolean = false;
  jugadors!: { jugadors: [{ nom: string; color: string; taulell: string; id: string; }] };
  player!: Jugador;
  playerName: string = "";
  private _playerSub!: Subscription;
  constructor(private taulellService: TaulellService) {
    this.boardWhite = new Board();
    this.boardBlack = new Board();
    this.taulellBlanques = this.boardWhite.getBoardWhite();
    this.taulellNegres = this.boardBlack.getBoardBlack();

  }

  ngOnInit() {

  }

  movePieceBlanca(from: string, to: string) {
    console.log("moving " + from + " to " + to);
    this.boardWhite.movePiece(from, to, "tw", this.player);
    this.taulellBlanques = this.boardWhite.getBoardWhite();
  }
  movePieceNegra(from: string, to: string) {
    this.boardBlack.movePiece(from, to, "tb", this.player);
    this.taulellNegres = this.boardBlack.getBoardBlack();
  }

  getSquare(id: string) {
    return this.boardBlack.getSquare(id);
  }

  highlightSquare(e: any) {
    e.preventDefault();
    e.target.style.backgroundColor = 'yellow';
  }

  unhighlightSquare(e: any) {
    e.preventDefault();
    var quadrat = this.getSquare(e.target.id);
    e.target.style.backgroundColor = quadrat.color;
  }

  allowDrop(e: any) {
    e.preventDefault();
    this.highlightSquare(e);

  }


  dropTaulellBlanques(e: any,) {
    this.unhighlightSquare(e);
    let posicioInici = e.dataTransfer.getData("text").split("tw")[0];
    if (posicioInici.length != 2) {
      return;
    }
    this.movePieceBlanca(posicioInici, e.target.id);
  }
  dropTaulellNegres(e: any,) {
    this.unhighlightSquare(e);
    let posicioInici = e.dataTransfer.getData("text").split("tb")[0];
    if (posicioInici.length != 2) {
      return;
    }
    this.movePieceNegra(posicioInici, e.target.id);
  }


  dragStart(e: any) {
    e.dataTransfer.setData("text", e.target.id + e.target.className);

  }


  ready() {
    this._playerSub = this.taulellService.jugadors.pipe(
    ).subscribe(jugadors => this.jugadors = jugadors);
    this._playerSub = this.taulellService.player.pipe(
    ).subscribe(player => {
      console.log(JSON.stringify(player));
      this.player = new Jugador(player.nom, player.color, player.taulell, player.id)
    });
    this._playerSub = this.taulellService.iniciar.pipe(
    ).subscribe(iniciat => this.iniciat = iniciat);
    this.taulellService.newPlayer(this.playerName);

  }
}






