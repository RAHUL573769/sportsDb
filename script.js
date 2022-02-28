let inputFieldSelect = document.getElementById('input-field');
const inputButtonSelect = document.getElementById('input-button');


const getPlayers = () => {

     inputFieldSelect.value = ' ';
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputFieldSelect.value}`;

    fetch(url)
        .then(data => data.json())
        .then(data => displayPlayerDetail(data.player))
    

    // console.log(url);
 

   
    
    
}


const displayPlayerDetail = (players) => {

    // console.log(players);

    for ( const player of players) {
        console.log(player);
        const parent = document.getElementById('player-card');
        const insideParentDiv = document.createElement('div');
        insideParentDiv.innerHTML=` <div class="card">
              <div class="prof-pic">
                <img src="" alt="" />
              </div>
              <h2>Name::Rahul </h2>
              <h5>Country:</h5>
              <p></p>
              <div class="all-button">
                <div class="btn btn-danger">Delete</div>
                <div class="btn btn-success">Details</div>
              </div>
            </div>`
        parent.appendChild(insideParentDiv);

    }

    
}