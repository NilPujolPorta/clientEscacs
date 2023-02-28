import { Component } from '@angular/core';
import { Board } from '../../Models/Implementations/Board';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-taulell',
  templateUrl: './taulell.component.html',
  styleUrls: ['./taulell.component.css']
})
export class TaulellComponent {
  board: Board;
  taulell;
  constructor() {
    this.board = new Board();
    this.taulell = this.board.getBoardWhite();
  }

  ngOnInit() {
  }

  movePiece(from: string, to: string) {
    this.board.movePiece(from, to);
    this.taulell = this.board.getBoardWhite();
  }

  getSquare(id: string) {
    return this.board.getSquare(id);
  }

  highlightSquare(e: any) {
    e.preventDefault();
    console.log(e);
    e.target.style.backgroundColor = 'yellow';
  }

  unhighlightSquare(e: any) {
    e.preventDefault();
    e.target.style.backgroundColor = 'white';
  }

  allowDrop(e: any) {
    e.preventDefault();
  }

  drag(e: any) {
    e.dataTransfer.setData("text", e.target.id);
  }

  drop(e: any) {
    console.log(e);
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }

}




