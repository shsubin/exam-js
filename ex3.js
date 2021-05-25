function random(min, max) 
{
    return Math.floor(Math.random() * (max - min)) + min;
}

function chooseName(arr) 
{
    let paragh = "";
    paragh = arr[random(0, arr.length)];
    return paragh;
}

let names = ["Hoang", "Son", "Data", "Scientist"];
let choose = chooseName(names);
document.write(choose);