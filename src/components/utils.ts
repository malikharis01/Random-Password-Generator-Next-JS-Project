function randomChar(min: number, max: number) {
    return String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
}

function getSpecialChar() {
    const specialChar = "!@#$%^&*";
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}

export { randomChar, getSpecialChar }