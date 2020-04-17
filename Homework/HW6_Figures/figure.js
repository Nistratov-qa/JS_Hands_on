class Point {
    constructor(x, y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
    }
}

class Figure extends Point {
    constructor() {
        super(x, y, name);
    if (new.target === Figure ) {
        throw new TypeError("Cannot instantiate this class");
        }
    
    }

    getType(){
        if(this.constructor !== Figure) {
            throw new Error("This is not a class type")
        }
        return this.constructor.toString();
    }
    getSquare(){
        
    }
    getPerimeter(){

    }
}
// export default new Figure();