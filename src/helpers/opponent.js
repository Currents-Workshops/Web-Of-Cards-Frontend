const generateOpponentArray = (game, userId) => {
  if (game == null) return [];
  if (game.users == null) return [];
  let res = [];
  for (let i = 0; i < game.users.length; i++) {
    let user = game.users[i];
    if (user.id !== userId)
      res.push({
        name: user.name,
        id: user.id,
        isPlaying: game.cur_turn === i,
        isLost: user.isLost,
        number_of_cards: user.cards.length,
      });
  }
  return [...res];
};

export default generateOpponentArray;
