function chooseName(arr) 
{
    let paragh = "";
    paragh = arr[Math.floor(Math.random() * arr.length)];
    return paragh;
}

let names = ["Hoang", "Son", "is", "a", "Data", "Scientist"];
let choose = chooseName(names);
alert(choose);