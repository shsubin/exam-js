class Shape
{
    constructor (name, side, length)
    {
        this.name = name;
        this.side = side;
        this.length = length;
    }
    chuvi()
    {
        document.write('Chu vi cua ' + this.name + ' la ' + this.side * this.length);
        document.write("<BR>");
    }
}

let sqr = new Shape('Hinh vuong', 1, 5);
let tri = new Shape('Tam giac', 3, 3);

sqr.chuvi();
tri.chuvi();