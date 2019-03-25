function solve() {
    debugger;
    return (function(){
        let list = [];
        let size = 0;
debugger;
        const add = function (element) {
            list.push(element);
            list.sort((a,b)=>a-b);
            this.size++;
        };

        const remove = function (index) {
            if (index>=0 && index<list.length) {
                list.splice(index, 1);
                this.size--;
            }
        };

        const get = function (index) {
            return list[index];
        };

        return {
            add,
            remove,
            get,
            size,
            list
        };
    })();
}

let myList = solve();
console.log(myList.add(5));
myList.add(2);
myList.add(1);
console.log(myList.get(3));