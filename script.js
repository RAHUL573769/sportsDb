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
    }

    
}