const playerCards = (game,userId) => {
    if(game.users == null) return [];
    for(let i = 0 ; i< game.users.length;i++ )
    {
        let user = game.users[i];
        if(user.id === userId) return user.cards;   
    }
    return [];
}
  
export default playerCards;