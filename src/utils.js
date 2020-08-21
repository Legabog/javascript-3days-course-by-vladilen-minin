export function row(content, styles = "") {
  return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content, styles = "") {
  return `<div class="col-sm" style="${styles}">${content}</div>`;
}

export function image(content, styles = "", alt) {
  return `<img src=${content} style="${styles}" alt=${alt}/>`;
}
