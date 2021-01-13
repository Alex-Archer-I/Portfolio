function activeClassByClick (selector, active, target, display = null, displayActive = null) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(name => name.classList.remove(active));
    target.classList.add(active);

    if (display) {
        let n = 0;
        const displayElements = document.querySelectorAll(display);
        elements.forEach((name, i) => {
            if (name.classList.contains(active)){
                n = i;
            }
        });

        activeClassByClick(display, displayActive, displayElements[n]);
    }
}

export default activeClassByClick;