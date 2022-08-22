let serial = 0;
function playerSelect(playerNameSelect) {
    let playerName = playerNameSelect.name;
    console.log(playerName);
    let Table = document.getElementById('table')
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
     serial = serial+1;
    if (serial <= 5) {
        td.innerText = serial;
        td.classList.add('text-center');
         Table.append(tr);
        tr.appendChild(td);
        td2.innerText = playerName;
        td2.classList.add('text-center');
        tr.appendChild(td2);  
        var x = document.getElementById(playerNameSelect.id);
        console.log(x);
        x.setAttribute('disabled', true);
        x.style.backgroundColor = "gray";
    }
    else {
        alert("You cannot add More than 5 players");
        
    }
    
}
