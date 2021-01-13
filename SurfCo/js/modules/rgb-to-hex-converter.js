function rgbToHex (n) {
    if (n < 0) {
        n = 0;
    } else if (n > 255) {
        n = 255;
    }

    let str = n.toString(16);

    if (n < 16) {
        str = '0' + str;
    }
    console.log(str.toUpperCase());
}