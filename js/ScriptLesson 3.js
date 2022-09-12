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
    if(index.value == '' || street.value == '' || city.value == '' || house.value == '' || flat.value == ''){
        alert("Fields are not filled");
        return;
    }else if(/^\d+$/.test(index.value)==false){
        alert('Index not number');
        return;
    }else if(/^\d+$/.test(flat.value)== false){
        alert('Flat not number');
        return;
    }else if(/^\w/.test(street.value)==false){
        alert("Street must be a string");
        return;
    }else{
        let addres = selvalue + ', ' + street.value + ', ' + house.value + ', ' + flat.value + ', ' + index.value;
        res.value = addres;
        alert("Done");
    }




}
