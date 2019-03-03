function processor(arr) {
    let closure = (function () {
        let myString = '';

        return {
            append: (str) => myString += str,
            removeStart: (n) => myString = myString.slice(n),
            removeEnd: (n) => myString = myString.slice(0, myString.length - n),
            print: () => console.log(myString)
        }
    })();

    for (let st of arr) {
        let [comm, value] = st.split(' ');
        closure[comm](value);
    }
}

processor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);