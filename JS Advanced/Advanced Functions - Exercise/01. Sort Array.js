function solve(arr, sortMethod) {
    var ascendingComparator = function (a, b) {
        return a - b;
    };

    var descendingComparator = function (a, b) {
        return b - a;
    };

    var sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };

    return arr.sort(sortingStrategies[sortMethod]);
}

solve([14, 7, 17, 6, 8], 'asc');