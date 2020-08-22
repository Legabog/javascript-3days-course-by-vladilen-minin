import {row, col, image} from "../utils"

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error("Метод toHTML должен быть реализован!");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = "h2", styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), styles);
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles, alt } = this.options;
    return image(this.value, styles, alt);
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag, styles } = this.options;
    return row(col(`<${tag}>${this.value}</$>`), styles);
  }
}

export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag, styles } = this.options;
    const html = this.value.map((item) =>
      col(`<${tag}>${item}</$tag>`, styles)
    );
    return row(html.join(""));
  }
}
