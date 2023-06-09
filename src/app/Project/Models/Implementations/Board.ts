import { Jugador } from "./Jugador";

export class Board {
  squares: { id: string; peca: string; color: string; x: number; y: number }[]
  torn: string = "w";
  cementiriBlanques: string[] = [];
  cementiriNegres: string[] = [];
  constructor() {
    this.squares = [
      { id: "1a", peca: "wrook", color: 'SaddleBrown', x: 1, y: 1 },
      { id: "1b", peca: "wknight", color: 'white', x: 2, y: 1 },
      { id: "1c", peca: "wbishop", color: 'SaddleBrown', x: 3, y: 1 },
      { id: "1d", peca: "wqueen", color: 'white', x: 4, y: 1 },
      { id: "1e", peca: "wking", color: 'SaddleBrown', x: 5, y: 1 },
      { id: "1f", peca: "wbishop", color: 'white', x: 6, y: 1 },
      { id: "1g", peca: "wknight", color: 'SaddleBrown', x: 7, y: 1 },
      { id: "1h", peca: "wrook", color: 'white', x: 8, y: 1 },
      { id: "2a", peca: "wpawn", color: 'white', x: 1, y: 2 },
      { id: "2b", peca: "wpawn", color: 'SaddleBrown', x: 2, y: 2 },
      { id: "2c", peca: "wpawn", color: 'white', x: 3, y: 2 },
      { id: "2d", peca: "wpawn", color: 'SaddleBrown', x: 4, y: 2 },
      { id: "2e", peca: "wpawn", color: 'white', x: 5, y: 2 },
      { id: "2f", peca: "wpawn", color: 'SaddleBrown', x: 6, y: 2 },
      { id: "2g", peca: "wpawn", color: 'white', x: 7, y: 2 },
      { id: "2h", peca: "wpawn", color: 'SaddleBrown', x: 8, y: 2 },
      { id: "3a", peca: "", color: 'SaddleBrown', x: 1, y: 3 },
      { id: "3b", peca: "", color: 'white', x: 2, y: 3 },
      { id: "3c", peca: "", color: 'SaddleBrown', x: 3, y: 3 },
      { id: "3d", peca: "", color: 'white', x: 4, y: 3 },
      { id: "3e", peca: "", color: 'SaddleBrown', x: 5, y: 3 },
      { id: "3f", peca: "", color: 'white', x: 6, y: 3 },
      { id: "3g", peca: "", color: 'SaddleBrown', x: 7, y: 3 },
      { id: "3h", peca: "", color: 'white', x: 8, y: 3 },
      { id: "4a", peca: "", color: 'white', x: 1, y: 4 },
      { id: "4b", peca: "", color: 'SaddleBrown', x: 2, y: 4 },
      { id: "4c", peca: "", color: 'white', x: 3, y: 4 },
      { id: "4d", peca: "", color: 'SaddleBrown', x: 4, y: 4 },
      { id: "4e", peca: "", color: 'white', x: 5, y: 4 },
      { id: "4f", peca: "", color: 'SaddleBrown', x: 6, y: 4 },
      { id: "4g", peca: "", color: 'white', x: 7, y: 4 },
      { id: "4h", peca: "", color: 'SaddleBrown', x: 8, y: 4 },
      { id: "5a", peca: "", color: 'SaddleBrown', x: 1, y: 5 },
      { id: "5b", peca: "", color: 'white', x: 2, y: 5 },
      { id: "5c", peca: "", color: 'SaddleBrown', x: 3, y: 5 },
      { id: "5d", peca: "", color: 'white', x: 4, y: 5 },
      { id: "5e", peca: "", color: 'SaddleBrown', x: 5, y: 5 },
      { id: "5f", peca: "", color: 'white', x: 6, y: 5 },
      { id: "5g", peca: "", color: 'SaddleBrown', x: 7, y: 5 },
      { id: "5h", peca: "", color: 'white', x: 8, y: 5 },
      { id: "6a", peca: "", color: 'white', x: 1, y: 6 },
      { id: "6b", peca: "", color: 'SaddleBrown', x: 2, y: 6 },
      { id: "6c", peca: "", color: 'white', x: 3, y: 6 },
      { id: "6d", peca: "", color: 'SaddleBrown', x: 4, y: 6 },
      { id: "6e", peca: "", color: 'white', x: 5, y: 6 },
      { id: "6f", peca: "", color: 'SaddleBrown', x: 6, y: 6 },
      { id: "6g", peca: "", color: 'white', x: 7, y: 6 },
      { id: "6h", peca: "", color: 'SaddleBrown', x: 8, y: 6 },
      { id: "7a", peca: "bpawn", color: 'SaddleBrown', x: 1, y: 7 },
      { id: "7b", peca: "bpawn", color: 'white', x: 2, y: 7 },
      { id: "7c", peca: "bpawn", color: 'SaddleBrown', x: 3, y: 7 },
      { id: "7d", peca: "bpawn", color: 'white', x: 4, y: 7 },
      { id: "7e", peca: "bpawn", color: 'SaddleBrown', x: 5, y: 7 },
      { id: "7f", peca: "bpawn", color: 'white', x: 6, y: 7 },
      { id: "7g", peca: "bpawn", color: 'SaddleBrown', x: 7, y: 7 },
      { id: "7h", peca: "bpawn", color: 'white', x: 8, y: 7 },
      { id: "8a", peca: "brook", color: 'white', x: 1, y: 8 },
      { id: "8b", peca: "bknight", color: 'SaddleBrown', x: 2, y: 8 },
      { id: "8c", peca: "bbishop", color: 'white', x: 3, y: 8 },
      { id: "8d", peca: "bqueen", color: 'SaddleBrown', x: 4, y: 8 },
      { id: "8e", peca: "bking", color: 'white', x: 5, y: 8 },
      { id: "8f", peca: "bbishop", color: 'SaddleBrown', x: 6, y: 8 },
      { id: "8g", peca: "bknight", color: 'white', x: 7, y: 8 },
      { id: "8h", peca: "brook", color: 'SaddleBrown', x: 8, y: 8 }
    ]
  }

  getBoardBlack() {
    let board = [];
    let row = [];
    for (let i = 0; i < this.squares.length; i++) {
      row.push(this.squares[i]);
      if (row.length == 8) {
        board.push(row);
        row = [];
      }
    }
    board.forEach(row => {
      row.reverse();
    });
    return board;
  }
  getBoardWhite() {
    let board = [];
    let row = [];
    for (let i = 0; i < this.squares.length; i++) {
      row.push(this.squares[i]);
      if (row.length == 8) {
        board.push(row);
        row = [];
      }
    }
    board.reverse();
    return board;
  }

  getSquare(id: string) {
    var square = this.squares.find(square => square.id === id);
    if (square == undefined) {
      return { id: "0", peca: "", color: '', x: 0, y: 0 }
    }
    return square;
  }

  movePieceSocket(from: string, to: string) {
    let fromSquare = this.getSquare(from);
    let toSquare = this.getSquare(to);
    //check if the move is valid
    if (fromSquare.peca != '') {
      //check if pawn is in the last row
      if (toSquare.peca.split('')[0] == 'w') {
        this.cementiriBlanques.push(toSquare.peca);
      } else if (toSquare.peca.split('')[0] == 'b') {
        this.cementiriNegres.push(toSquare.peca);
      }
      if (fromSquare.peca == 'wpawn' && toSquare.y == 8) {
        toSquare.peca = 'wqueen';
      } else if (fromSquare.peca == 'bpawn' && toSquare.y == 1) {
        toSquare.peca = 'bqueen';
      } else {
        toSquare.peca = fromSquare.peca;
      }
      fromSquare.peca = '';
      //change turn
      if (this.torn == 'w') {
        this.torn = 'b';
      } else {
        this.torn = 'w';
      }
    }
  }

  movePiece(from: string, to: string, taulell: string, jugador: Jugador): boolean {
    let fromSquare = this.getSquare(from);
    let toSquare = this.getSquare(to);
    let colorFrom = fromSquare.peca.substring(0, 1);
    let colorTo = toSquare.peca.substring(0, 1);
    //check if the move is valid
    if (fromSquare.id == '0' || toSquare.id == '0' || colorFrom == colorTo || colorFrom != this.torn || colorFrom != jugador.color || taulell != jugador.taulell) {
      console.log('Movement not valid');
      return false;
    }
    return true;

  }

}
