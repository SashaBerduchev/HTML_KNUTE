var btnReadXml = document.getElementById('btnReadXml');

function xmlParseRead() {
    var Name = document.getElementById('Name');
    var parser = new DOMParser();
    var xmlstr = new XMLBooks();
    var xml = xmlstr.getStrXml();
    xmlDoc = parser.parseFromString(xml, "text/xml");

    console.log(xmlDoc);
    console.log(xmlDoc.getElementsByTagName('books')[0].childNodes);
    var perNodes = xmlDoc.getElementsByTagName('books');
    for (var i=0; perNodes.length; i++){
        var book = perNodes[i].getElementsByTagName('book');
        for (var j=0; j<book.length; j++){
            var name = book.item(j);
            console.log(name.textContent+"\n");
            Name.textContent += name.textContent + "\n";
        }

    }
}

btnReadXml.addEventListener('click', xmlParseRead)