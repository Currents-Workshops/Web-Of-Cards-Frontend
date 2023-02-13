const deck = (game) => {
    if(game == null) return [];
    if(game.center_deck == null) return [];
    return game.center_deck;
}
  
export default deck;
  