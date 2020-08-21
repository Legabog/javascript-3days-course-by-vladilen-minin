import { row, col, image } from "./utils";

function title(block) {
  const { tag, styles } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), styles);
}

function text(block) {
  const { tag, styles } = block.options;
  return row(col(`<${tag}>${block.value}</$>`), styles);
}

function textColumns(block) {
  const { tag, styles } = block.options;
  const html = block.value.map((item) => col(`<${tag}>${item}</$tag>`, styles));
  return row(html.join(""));
}

function img(block) {
  const { styles, alt } = block.options;
  return image(block.value, styles, alt);
}

export const templates = {
  title,
  text,
  textColumns,
  img,
};
