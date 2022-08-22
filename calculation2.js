//select player function
let serial = 0;
function playerSelect(playerNameSelect) {
    let playerName = playerNameSelect.name;
    console.log(playerName);
    let Table = document.getElementById('table')
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    
    if (serial < 5) {
        serial = serial+1;
        td.innerText = serial;
        td.classList.add('text-center');
        td.classList.add('text-white');
         Table.append(tr);
        tr.appendChild(td);
        td2.innerText = playerName;
        td2.classList.add('text-center');
        td2.classList.add('text-white');
        tr.appendChild(td2);  
        var x = document.getElementById(playerNameSelect.id);
        x.setAttribute('disabled', true);
        x.style.backgroundColor = "gray";
    }
    else {
        alert("You cannot add More than 5 players");
        
    }
    
}
// Total Player price  function
document.getElementById('playerPriceButton').addEventListener('click', function () {
     let calculationinputbox = document.getElementById('calcInput');
    let perPlayerPrice = calculationinputbox.value;
    let totalPlayer = serial;
   
    if (totalPlayer > 0) {
        let totalPrice = perPlayerPrice * totalPlayer;
        let totalPlayerPrice = document.getElementById('totalPlayerPrice');
        totalPlayerPrice.innerText = totalPrice;
    }
    else {
        alert("Please Select Player First");
    }
})
// Total Budget function
document.getElementById('finalCalculation').addEventListener('click', function () {
    let managerPrice = document.getElementById('manager');
    let coachPrice = document.getElementById('coach');
    let totalPlayerPrice = document.getElementById('totalPlayerPrice');
    let final = document.getElementById('finalPrice');
    if (managerPrice.value === '' || coachPrice.value === '') {
        alert("please enter Number");
    }
    else {
        let totaPlayerFinalPrice = parseInt(totalPlayerPrice.innerText);
    let managerTotalPrice = parseInt(managerPrice.value);
    let coachTotalPrice =parseInt( coachPrice.value);
    let totalPrice = managerTotalPrice + coachTotalPrice + totaPlayerFinalPrice;
    final.innerText = totalPrice;
    }

})

