function spinalCase(str) {
    return str.replace(/([A-Z])/g, " $1").toLowerCase().match(/[a-z]+/g).join('-');
}

spinalCase('This Is Spinal Tap');
