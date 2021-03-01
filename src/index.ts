class Vigenere {
    key: string;

    constructor(key: string) {
        this.key = Vigenere.formatText(key);
    }

    private static formatText(text: string): string {
        return text.toUpperCase().replace(/[^A-Z]/g, "")
    }

}