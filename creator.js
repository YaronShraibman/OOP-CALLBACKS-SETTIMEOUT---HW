export class HTML {
    tagName;
    propName;
    propValue;
    contect;

    constructor(tagNameInput, propNameInput, propValueInput, contectInput) {
        this.tagName = tagNameInput;
        this.propName = propNameInput;
        this.propValue = propValueInput;
        this.contect = contectInput;
        this.createNewTag();
    }

    createNewTag() {
        let tag = document.createElement(this.tagName);
        tag.setAttribute(this.propName, this.propValue);
        tag.innerHTML = this.contect;
        document.body.appendChild(tag)
    }
}
