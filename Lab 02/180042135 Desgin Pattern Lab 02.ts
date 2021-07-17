interface InputText {
    operation(): string
}

class PlainText implements InputText {

    inputText: string

    constructor(inputText: string) {
        this.inputText = inputText
    }

    public operation(): string {
        return this.inputText;
    }
}

class TextDecorator implements InputText {
    protected component: InputText;

    constructor(component: InputText) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

class ItalicDecorator extends TextDecorator {
    public operation(): string {
        return super.operation().italics();
    }
}

class BoldDecorator extends TextDecorator {
    public operation(): string {
        return super.operation().bold();
    }
}

class StrikeDecorator extends TextDecorator {
    public operation(): string {
        return super.operation().strike();
    }
}


function clientCode(component: InputText) {
    console.log(`Output: ${component.operation()}`);
}

const plainText = new PlainText('GG');
const decorator01 = new ItalicDecorator(plainText);
const decorator02 = new BoldDecorator(decorator01);
const decorator03 = new StrikeDecorator(decorator02);

clientCode(plainText);
clientCode(decorator01);
clientCode(decorator02);
clientCode(decorator03);