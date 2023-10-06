const solveNQueens = (n: number): string[][] => {
  const board: string[][] = Array.from({ length: n }, () => Array(n).fill("."));
  const solutions: string[][] = [];

  const isValid = (row: number, col: number): boolean => {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  };

  const backtrack = (row: number): void => {
    if (row === n) {
      solutions.push(board.map((r) => r.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = ".";
      }
    }
  };

  backtrack(0);
  return solutions;
};

const result: string[][] = solveNQueens(4);
