let solution = (function () {

    return {
        add: (vec1, vec2) => {
            let xa = vec1[0];
            let ya = vec1[1];
            let xb = vec2[0];
            let yb = vec2[1];
            result = [xa + xb, ya + yb];
            return result
        },

        multiply: (vec1, s) => {
            let xa = vec1[0];
            let ya = vec1[1];
            result = [xa * s, ya * s];
            return result
        },

        length: (vec1) => {
            let xa = vec1[0];
            let ya = vec1[1];
            result = Math.sqrt(Math.pow(xa, 2) + Math.pow(ya, 2));
            return result
        },

        dot: (vec1, vec2) => {
            let xa = vec1[0];
            let ya = vec1[1];
            let xb = vec2[0];
            let yb = vec2[1];
            result = xa * xb + ya * yb;
            return result
        },

        cross: (vec1, vec2) => {
            let xa = vec1[0];
            let ya = vec1[1];
            let xb = vec2[0];
            let yb = vec2[1];
            result = xa * yb - xb * ya;
            return result
        }
    }
}());

console.log(solution.dot([2, 3], [2, -1]));