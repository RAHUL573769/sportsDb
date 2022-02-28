
// const inputButtonSelect = document.getElementById('input-button');
let inputFieldSelect = document.getElementById('input-field');

const getPlayers = () => {

   
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputFieldSelect.value}`;
  inputFieldSelect.value = ' ';
    fetch(url)
        .then(data => data.json())
        .then(data => displayPlayerDetail(data.player))
    

    console.log(url);
 

   
    
    
}


const displayPlayerDetail = (players) => {

    // console.log(players);

    for ( const player of players) {
        console.log(player.strPlayer);
        const parent = document.getElementById('player-card');
        const insideParentDiv = document.createElement('div');
        insideParentDiv.innerHTML=` <div class="card">
              <div class="prof-pic">
                <img class="w-25" src="${player.strThumb}" alt="" />
              </div>
              <h2>Name: ${player.strPlayer}</h2>
              <img src="" alt="">
              <h5>Country:${player.strNationality}</h5>
              <p></p>
              <div class="all-button">
                <div class="btn btn-danger">Delete</div>
                <div onclick="eachPlayerDetails()"class="btn btn-success">Details</div>
              </div>
            </div>`
        parent.appendChild(insideParentDiv);

    }

    
}

const eachPlayerDetails = () => {
 
}