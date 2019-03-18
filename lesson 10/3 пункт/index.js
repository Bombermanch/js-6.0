class Options{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(text){
        let div = document.createElement('div');
        div.textContent = text;
        div.style.cssText = `height:${this.height}px;
                             width:${this.width}px;
                             background-color:${this.bg};
                             font-size:${this.fontSize}px;
                             text-align:${this.textAlign};`;
        document.body.appendChild(div);
    }
}

let div = new options(500, 500, 'red', 40, 'center');
div.createDiv('Это новый блок');


