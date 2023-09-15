import YourFirstComponent from "../01.your.first.component/YourFirstComponent";
import { ImportingAndExportingComponents } from "../02.importing.and.exporting.components";
import { WritingMarkupWithJSX } from "../03.writing.markup.with.jsx";
import { JavaScriptInJSXWithCurlyBraces } from "../04.javascript.in.jsx.with.curly.braces";

export const mainRoutes = [
  {
    path: "/d8121/yourFirstComponent",
    component: YourFirstComponent,
    key: "d8121.yourFirstComponent",
  },
  {
    path: "/d8121/importingAndExportingComponents",
    component: ImportingAndExportingComponents,
    key: "d8121.importingAndExportingComponents",
  },
  {
    path: "/d8121/writingMarkupWithJSX",
    component: WritingMarkupWithJSX,
    key: "d8121.writingMarkupWithJSX",
  },
  {
    path: "/d8121/javaScriptInJSXWithCurlyBraces",
    component: JavaScriptInJSXWithCurlyBraces,
    key: "d8121.javaScriptInJSXWithCurlyBraces",
  },
];
