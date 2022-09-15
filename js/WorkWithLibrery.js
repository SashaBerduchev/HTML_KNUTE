
let librery;
var btnLibAdd = document.getElementById('btnLibAdd');
var btnBookAdd = document.getElementById('btnBookAdd');
var btnShowLibrery = document.getElementById('btnShowLibrery');
function addBook() {
    var Name = document.getElementById('Name');
    var Author = document.getElementById('Author');
    var Year = document.getElementById('Year');
    var Invent_num = document.getElementById('Invent_num');
    var Price = document.getElementById('Price');
    if(librery == null){
        alert("Librery non-exist: NullReferenceException");
    }else{
        librery.methodAdd(Name.value, Author.value, Year.value, Invent_num.value, Price.value);
    }

}

btnBookAdd.addEventListener('click', addBook);

function addLibrery() {
    var NameLib = document.getElementById('NameLib');
    var AddresLib = document.getElementById('AddresLib');
    var textLib = document.getElementById('textLib');
    console.log(NameLib.value + ' ' + AddresLib.value);
    librery = new Librery(NameLib.value, AddresLib.value);
    document.getElementById('textLib').value = librery.getName();
    document.getElementById('adreslib').value = librery.getAddres();
    console.log(librery.getName() + librery.getAddres());
}

btnLibAdd.addEventListener('click', addLibrery)

function showLibrery() {
    librery.showLibrery();
}

btnShowLibrery.addEventListener('click', showLibrery)