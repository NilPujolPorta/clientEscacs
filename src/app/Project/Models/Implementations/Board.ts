
export class Board {
  squares: { id: string; peca: string; color: string; x: number; y: number }[]
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

  getSquareByPosition(x: number, y: number) {
    var square = this.squares.find(square => square.x === x && square.y === y);
    if (square == undefined) {
      return { id: "0", peca: "", color: '', x: 0, y: 0 }
    }
    return square;
  }

  movePiece(from: string, to: string) {
    let fromSquare = this.getSquare(from);
    let toSquare = this.getSquare(to);
    toSquare.peca = fromSquare.peca;
    fromSquare.peca = '';
  }

  movePieceByPosition(fromX: number, fromY: number, toX: number, toY: number) {

    let fromSquare = this.getSquareByPosition(fromX, fromY);
    let toSquare = this.getSquareByPosition(toX, toY);
    toSquare.peca = fromSquare.peca;
    fromSquare.peca = '';
  }
}
