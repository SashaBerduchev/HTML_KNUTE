var btn = document.getElementById('btn');
btn.addEventListener('click', getSelery);

function getSelery(){
    var sum = 0;
    var oklad = document.getElementById('oklad');
    var cout_day = document.getElementById('cout_day');
    var is_prof = document.getElementById('is_prof');
    var res = document.getElementById('res');
    if(oklad.value){
        if(oklad.value <=1000){
            sum = oklad.value;
        }else if(oklad>1000 && oklad <5000){
            var persent = oklad.value/100*10;
            sum = oklad.value - persent;
        }else{
            var persent = oklad.value/100*20;
            sum = oklad.value - persent;
        }
    }
    if(is_prof.checked== true){
        var persent = oklad.value/100*1;
        sum = sum - persent;
    }
    var persent = oklad.value/100*1;
    sum = sum - persent;

    console.log(sum);
    res.value = sum;

    let response = fetch('http://localhost/SaveResult/Save', {
        method: 'POST',
        body: sum
    })
}