import { Component } from '@angular/core';
import { Board } from '../../Models/Implementations/Board';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
  constructor() {
    this.boardWhite = new Board();
    this.boardBlack = new Board();
    this.taulellBlanques = this.boardWhite.getBoardWhite();
    this.taulellNegres = this.boardBlack.getBoardBlack();

  }

  ngOnInit() {
  }

  movePieceBlanca(from: string, to: string) {
    this.boardWhite.movePiece(from, to, "w");
    this.taulellBlanques = this.boardWhite.getBoardWhite();
  }
  movePieceNegra(from: string, to: string) {
    this.boardBlack.movePiece(from, to, "b");
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
    let posicioInici = e.dataTransfer.getData("text").split("w")[0];
    if (posicioInici.length != 2) {
      return;
    }
    this.movePieceBlanca(posicioInici, e.target.id);
  }
  dropTaulellNegres(e: any,) {
    this.unhighlightSquare(e);
    let posicioInici = e.dataTransfer.getData("text").split("b")[0];
    if (posicioInici.length != 2) {
      return;
    }
    this.movePieceNegra(posicioInici, e.target.id);
  }


  dragStart(e: any) {
    e.dataTransfer.setData("text", e.target.id + e.target.className);

  }

}




