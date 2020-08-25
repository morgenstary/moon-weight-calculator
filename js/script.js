document.getElementById('input').focus();

// prevent letters in user input
var RegExp = new RegExp(/^\d*\.?\d*$/);
var val = document.getElementById("input").value;

function valid(elem) {
    if (RegExp.test(elem.value)) {
        val = elem.value;
        let eval = calc(val);
        document.getElementById('output').textContent = `Your weight on the Moon is ${eval}`;
    } else {
        elem.value = val;
        document.getElementById('output').textContent = `Please enter a number`;
    }
    // calc
    function calc(num) {
        let res = (num / 9.81) * 1.622;
        return res.toFixed(2);
    }
}
// clear input
function clear() {
    document.getElementById('output').textContent = "";
    document.getElementById('input').value = "";

}

document.getElementById('input').onclick = clear;










