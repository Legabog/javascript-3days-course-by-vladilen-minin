import img from "../../Screenshot_1.jpg";
import {
  TitleBlock,
  ImageBlock,
  TextBlock,
  TextColumnsBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Конструктор сайтов by legabog", {
    tag: "h1",
    styles:
      "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 40%, rgba(0,212,255,1) 100%); color: #fff; text-align: center;",
  }),

  new TextBlock(
    "3-х дневный курс по чистому JavaScript автор: @vladilen.minin",
    {
      tag: "h6",
      styles:
        "background: #4A76A8; color: #fff; text-align: center; padding-top: 10px;",
    }
  ),

  new TextColumnsBlock(
    ["HTML5", "CSS, SCSS, Less", "JavaScript ES6+", "React, Redux"],
    {
      styles:
        "color: #fff; background: linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(121,94,9,1) 41%, rgba(255,179,0,1) 100%); padding: 1rem;",
    }
  ),

  new ImageBlock(img, {
    alt: "Myimage",
    styles: "width: 10%",
  }),
];
