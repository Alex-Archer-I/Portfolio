class blogCard {
    constructor(img, text, firstClass, parent, addClasses = null) {
        this.img = img;
        this.text = text;
        this.firstClass = firstClass;
        this.parent = document.querySelector(parent);
        this.addClasses = addClasses;
    }

    render(url) {
        const element = document.createElement('div');

        element.classList.add(this.firstClass);
        if (this.addClasses != null) {
            this.addClasses.forEach(name => element.classList.add(name));
        }

        element.innerHTML = `
            <img src="${this.img}" alt="post" class="${this.firstClass}_img">
            <div class=${this.firstClass}_text>${this.text}</div>
        `;

        this.parent.append(element);
    }
}

export default blogCard;