const turn = (game,userId) => {
    if(game == null) return false;
    if(game.users == null) return false;
    if(game.started === false) return false;
    if(game.users[game.cur_turn] == null) return false
    if(game.users[game.cur_turn].id === userId) return true;
    return false;
}
  
export default turn;
  