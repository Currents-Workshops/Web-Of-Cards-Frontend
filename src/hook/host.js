const isHost = (game,userId) => {
    if(game == null) return false;
    if(game.host == null) return false;
    if(game.host.id == null) return false;
    if(game.host.id === userId) return true;
    return false;
}
  
export default isHost;