export default class ModalWindow {
    constructor (title, text, buttonText) {
        this.title = title;
        this.text = text;
        this.buttonText = buttonText;
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('modal');
        element.innerHTML = `
            <div class="title modal_title">${this.title}</div>
            <div class="text modal_text">${this.text}</div>
            <button class="modal_close btn">${this.buttonText}</button>
        `;
        document.querySelector('.overlay').append(element);
    }
}