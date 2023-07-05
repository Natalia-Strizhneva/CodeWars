/*"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
 */

const rps = (p1, p2) => {
  const winning = { scissors: "paper", paper: "rock", rock: "scissors" };
  return p1 === p2
    ? "Draw!"
    : winning[p1] === p2
    ? "Player 1 won!"
    : "Player 2 won!";
};
