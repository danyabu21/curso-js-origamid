// Liste 5 objetos nativos

/*

- Array
- Object
- Number
- String
- Boolean

*/

// Liste 5 objetos do browser

/*

 - Element
 - DomList
 - HTMLCollection
 - NodeList
 - Document

*/

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== "undefined") {
  console.log("existe");
} else {
  console.log("Não existe");
}

if (typeof window.webkitCancelAnimationFrame !== "undefined") {
  console.log("existe");
} else {
  console.log("Não existe");
}
