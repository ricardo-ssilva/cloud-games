gamesJson = [
    {id: 1, game: 'God of war', img: 'images/game1.jpg', description: ' ', genre:'Action', totalPlayers: 999} 
]


gamesJson.map((item, index)=>{

    document.querySelector('.img').style.backgroundImage = `url(${item.img})`



})