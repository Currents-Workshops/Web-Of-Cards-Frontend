const isGameNotStart = (game) => {
    if(game == null) return true;
    if(game.started == null) return true;
    if(game.started  === true) return false;
    return true;
}
  
export default isGameNotStart;