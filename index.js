String.prototype.banana = function () {
    return "🍌"
}

const randomString = "This is a string"

console.log("this is another sting that is not stored in a variable".banana())

console.log(randomString.banana());

String.prototype.capitalizeFirstOnly = function () {
    return `${this[0].toUpperCase()}${this.slice(1).toLowerCase()}`
}


console.log("marCEL".capitalizeFirstOnly()) // COOOL