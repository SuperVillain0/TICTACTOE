const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // Check if at least two squares have the same non-null value
    const count =
      (squares[a] === squares[b] ? 1 : 0) + (squares[a] === squares[c] ? 1 : 0);
    if (count >= 2 && squares[a] !== null) {
      return squares[a];
    }
  }
  return null;
};

export default calculateWinner;
