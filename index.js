var x = prompt("x?",'');
var n = prompt("n?",'');

function pow (x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}


alert(pow (x, n));

