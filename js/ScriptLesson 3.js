var btn = document.getElementById('btn');
btn.addEventListener('click', IsCorrect);

function IsCorrect(){
    console.log("CORRECT");
    var index = document.getElementById('index');
    var street = document.getElementById('street');
    var city = document.getElementById('Cities');
    var house = document.getElementById('house');
    var flat = document.getElementById('flat');
    var selvalue = city.value;
    var res = document.getElementById('res');
    console.log(index.value +','+ street.value + ', '+ selvalue +  ', ' + house.value + ', ' + flat.value);
    let addres = selvalue + ', ' + street.value + ', ' + house.value + ', ' + flat.value + ', ' + index.value;
    res.value = addres;

}
