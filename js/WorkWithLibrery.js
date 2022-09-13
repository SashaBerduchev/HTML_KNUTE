var btnLibAdd = document.getElementById('btnLibAdd');
var btnBookAdd = document.getElementById('btnBookAdd');
let librery;
function addBook() {
    var Name = document.getElementById('Name');
    var Author = document.getElementById('Author');
    var Year = document.getElementById('Year');
    var Invent_num = document.getElementById('Invent_num');
    var Price = document.getElementById('Price');


}

btnBookAdd.addEventListener('click', addBook);

function addLibrery() {
    var NameLib = document.getElementById('NameLib');
    var AddresLib = document.getElementById('AddresLib');
    var NameOfLib = document.getElementsByTagName('H1');
    console.log(NameLib.value + ' ' + AddresLib.value);
    librery = new Librery(NameLib.value, AddresLib.value);
    NameOfLib.innerText = librery.getName();
    console.log(librery.getName() + librery.getAddres());
}

btnLibAdd.addEventListener('click', addLibrery)