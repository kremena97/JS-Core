class Stringer {
    constructor(string, length) {
        this._innerString = string;
        this._innerLength = length;
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
        if (this.innerLength < this._innerString.length) {
            this.innerString = this.innerString.slice(0, this.innerLength);
        }else {
            this.innerString = this._innerString;
        }
    }

    decrease(length) {
        debugger;
        if (this.innerLength - length <0){
            this.innerLength = 0;
        } else{
            this.innerLength -= length;
        }

        if (this.innerLength < this._innerString.length) {
            this.innerString = this.innerString.slice(0, this.innerLength);
        }
    }

    toString() {
        if (this.innerString.length < this._innerString.length){
            return this.innerString + '...';
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
