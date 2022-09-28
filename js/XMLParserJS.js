var btnReadXml = document.getElementById('btnReadXml');

function xmlParseRead() {
    var Name = document.getElementById('Name');
    var Author = document.getElementById('Author');
    var Year = document.getElementById('Year');
    var invent = document.getElementById('invent');
    var price = document.getElementById('price');
    var parser = new DOMParser();
    var xmlstr = new XMLBooks();
    var xml = xmlstr.getStrXml();
    xmlDoc = parser.parseFromString(xml, "text/xml");

    console.log(xmlDoc);
    console.log(xmlDoc.getElementsByTagName('books')[0].childNodes);
    var perNodes = xmlDoc.getElementsByTagName('books')[0].childNodes
    for (var i=0; perNodes.length; i++){
        console.log(perNodes[i].childNodes.values());
    }
}

btnReadXml.addEventListener('click', xmlParseRead)