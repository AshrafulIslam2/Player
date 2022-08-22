var messi = {
    name: "Leonal Massi",
    imgUrl:"image/messi.jpg",
    numberOfGoal: 124,
    numberOfAssist: 255,
    id: "1"
    
}
var rolandho = {
    name: "cristiano ronaldo",
    imgUrl:"image/ronaldho.jpg",
    numberOfGoal: 104,
    numberOfAssist: 155,
    id: "2"
}
var coutinho = {
    name: "coutinho",
    imgUrl:"image/coutinho.jpg",
    numberOfGoal: 84,
    numberOfAssist: 55,
    id: "3"
}
var dipol = {
    name: "depul",
    imgUrl:"image/dipol.jpg",
    numberOfGoal: 4,
    numberOfAssist: 5,
    id: "4"
}
var kane = {
    name: "kane",
    imgUrl:"image/kane.jpg",
    numberOfGoal: 134,
    numberOfAssist: 135,
    id: "5"
}
var kante = {
    name: "kante",
    imgUrl:"image/kante.jpg",
    numberOfGoal: 134,
    numberOfAssist: 355,
    id: "6"
}
var lewandowski = {
    name: "lewandowski",
    imgUrl:"image/lewandowski.jpg",
    numberOfGoal: 204,
    numberOfAssist: 255,
    id: "7"
}
var maria = {
    name: "maria",
    imgUrl:"image/maria.jpg",
    numberOfGoal: 204,
    numberOfAssist: 55,
    id: "8"
}
var neymar = {
    name: "neymar",
    imgUrl:"image/neymar.jpg",
    numberOfGoal: 124,
    numberOfAssist: 255,
    id: "9"
}
var ozil = {
    name: "cristiano ozil",
    imgUrl:"image/ozil.jpg",
    numberOfGoal: 104,
    numberOfAssist: 155,
    id: "10"
}
var ramos = {
    name: "ramos",
    imgUrl:"image/ramos.jpg",
    numberOfGoal: 104,
    numberOfAssist: 155,
    id:"11"
}



function dynamicPlayer(player) {
    const main = document.getElementById('mainSection');
    let div = document.createElement('div');
    const stringyfy = JSON.stringify(player);
    div.classList.add('bg-stone-900');
    div.classList.add('border');
    div.classList.add('rounded');
    div.innerHTML = `
            <div class="flex justify-center items-center ">
                <img src=${player.imgUrl} alt="" srcset="" class="image">
            </div>
            <div class="flex flex-col justify-ceneter items-center" id=playerSection>
                <h1 class = "text-white text-xl mt-3">${player.name}</h1>
                <div class="flex justify-ceneter items-center">
                    <p class="mr-3 text-slate-400">Goal:Goal:${player.numberOfGoal}</p>
                    <p class = "text-slate-400">Assist: ${player.numberOfAssist}</p>
                </div>
                <button type="submit" class= "text-white bg-sky-600 w-48 mt-4 h-8 mb-4" id=${player.id} onclick = 'playerSelect(${stringyfy})'>Select</button>
            </div>
    
    `
    main.appendChild(div);
                
            
}
dynamicPlayer(messi);
dynamicPlayer(rolandho);
dynamicPlayer(coutinho);
dynamicPlayer(dipol);
dynamicPlayer(kane);
dynamicPlayer(kante);
dynamicPlayer(lewandowski);
dynamicPlayer(maria);
dynamicPlayer(neymar);
dynamicPlayer(ozil);
dynamicPlayer(neymar);
dynamicPlayer(ramos);


