let extensible = (() => {
    let counter = 0;
    debugger;
    return class Extensible {
        constructor() {
            this.id = counter;
            counter++;
        }

        extend(template) {
            debugger;
            for (let parentProp of Object.keys(template)) {

                if (typeof (template[parentProp]) == 'function') {
                    Object.getPrototypeOf(this)[parentProp] = template[parentProp];
                }else{
                    this[parentProp] = template[parentProp];
                }
            }
        }
    }
})();

var template = {
    extensionData: 5,
    extensionMethod: function (value) {
        return value + 1;
    }
};
let testObj = new extensible();
testObj.extend(template);
console.log(testObj);