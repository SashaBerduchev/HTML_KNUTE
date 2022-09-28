
class XMLBooks{
    XmlStr
    constructor() {
        this.XmlStr ='<?xml version="1.0"?>\n' +
            '<books>\n' +
            '    <book>\n' +
            '        <name>Книга 1</name>\n' +
            '        <author>григорій Вашкевич</author>\n' +
            '        <date>2015</date>\n' +
            '        <invent>1155621</invent>\n' +
            '        <price>500</price>\n' +
            '    </book>\n' +
            '    <book>\n' +
            '        <name>Книга 2</name>\n' +
            '        <author>григорій Вашкевич</author>\n' +
            '        <date>2016</date>\n' +
            '        <invent>1255621</invent>\n' +
            '        <price>700</price>\n' +
            '    </book>\n' +
            '    <book>\n' +
            '        <name>Книга 3</name>\n' +
            '        <author>григорій Вашкевич</author>\n' +
            '        <date>2017</date>\n' +
            '        <invent>1355621</invent>\n' +
            '        <price>900</price>\n' +
            '    </book>\n' +
            '    <book>\n' +
            '        <name>Книга 4</name>\n' +
            '        <author>григорій Вашкевич</author>\n' +
            '        <date>2019</date>\n' +
            '        <invent>1455621</invent>\n' +
            '        <price>1200</price>\n' +
            '    </book>\n' +
            '    <book>\n' +
            '        <name>Книга 5</name>\n' +
            '        <author>григорій Вашкевич</author>\n' +
            '        <date>2022</date>\n' +
            '        <invent>1855621</invent>\n' +
            '        <price>1500</price>\n' +
            '    </book>\n' +
            '</books>'
    }
    getStrXml(){
        return this.XmlStr;
    }

}


