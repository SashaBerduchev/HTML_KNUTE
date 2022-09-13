
var NameLib = document.getElementById('NameLib');
var AddresLib = document.getElementById('AddresLib');


var Name = document.getElementById('Name');
var Author = document.getElementById('Author');
var Year = document.getElementById('Year');
var Invent_num = document.getElementById('Invent_num');
var Price = document.getElementById('Price');


var NameOfLib = document.getElementsByTagName('H1');


var btnLibAdd = document.getElementById('btnLibAdd');
var btnBookAdd = document.getElementById('btnBookAdd');

function addBook() {

}

btnBookAdd.click('click', addBook);

function addLibrery() {
    let librery = new Librery(NameLib, AddresLib);
    NameOfLib.texContent = librery.getName();
    console.log(librery.getName() + librery.getAddres());
}

btnLibAdd.click('click', addLibrery)