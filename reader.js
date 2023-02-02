export class FormReader {
    getTagName;
    getPropName;
    getPropValue;
    getContect;
    constructor() {
        this.getTagName = document.getElementById('tagName').value;
        this.getPropName = document.getElementById('propName').value;
        this.getPropValue = document.getElementById('propValue').value;
        this.getContect = document.getElementById('contect').value;
    }
}

