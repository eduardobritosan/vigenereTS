class Vigenere {
    key: string;

    constructor(key: string) {
        this.key = Vigenere.formatText(key);
    }

    private static formatText(text: string): string {
        return text.toUpperCase().replace(/[^A-Z]/g, "")
    }

    encrypt(plainText: string): string {
        return Array.prototype.map.call(Vigenere.formatText(plainText), (letter: string, index: number): string => {
            return String.fromCharCode((letter.charCodeAt(0) + this.key.charCodeAt(index % this.key.length) - 130) % 26 + 65)
        }).join("");
    }
}

let original: string = "DES AST RES";

console.log(`Mensaje original: ${original}`);

let vig: Vigenere = new Vigenere("SOL");
let encoded: string = vig.encrypt(original);

console.log(`Mensaje cifrado: ${encoded}`);