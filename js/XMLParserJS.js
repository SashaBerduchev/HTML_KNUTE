var btnReadXml = document.getElementById('btnReadXml');

function xmlParseRead() {
    var parser = new DOMParser();
    xmlDoc = parser.parseFromString('Books.xml');
    console.log(xmlDoc);
}

btnReadXml.addEventListener('click', xmlParseRead)