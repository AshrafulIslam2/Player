let serial = 0;
function playerSelect(playerNameSelect,event) {
    let playerName = playerNameSelect.name;
    console.log(playerName);
    let Table = document.getElementById('table')
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
     serial = serial+1;
    td.innerText = serial;
    td.classList.add('text-center');
    Table.append(tr);
    tr.appendChild(td);
    td2.innerText = playerName;
    td2.classList.add('text-center');
    tr.appendChild(td2);
}
