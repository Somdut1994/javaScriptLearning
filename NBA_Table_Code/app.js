const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const getScore = (game, team)  => {
  const {homeTeam , awayTeam}=game;
  const gameLi=document.createElement('li');
  const teamNames=`${awayTeam.team} @ ${homeTeam.team}`;
  let scoreLine;

  if (awayTeam.points>homeTeam.points) {
    scoreLine=`<b>${awayTeam.points}</b>-${homeTeam.points}`;
    gameLi.innerHTML=`${teamNames} ${scoreLine}`;
    let result;
    if (awayTeam.team===team) result="win";
    else result="loss";
    gameLi.setAttribute('class', result);
  } else {
    scoreLine=`${awayTeam.points}-<b>${homeTeam.points}</b>`;
    gameLi.innerHTML=`${teamNames} ${scoreLine}`;
    let result;
    if (homeTeam.team===team) result="win";
    else result="loss";
    gameLi.setAttribute('class', result);
   } 
   return gameLi; 
}

function makeChart(games, team) {
  const ulParent=document.createElement('ul');
  for (let game of games){
    const gameLi=getScore(game, team);
    ulParent.appendChild(gameLi);  
  }
  return ulParent
}

const sections=document.querySelectorAll('section');
const ulWarriors=makeChart(warriorsGames, "Golden State");
const ulHouston=makeChart(warriorsGames, "Houston");
sections[0].append(ulWarriors);
sections[1].append(ulHouston);


// document.body.prepend(ulWarriors);
