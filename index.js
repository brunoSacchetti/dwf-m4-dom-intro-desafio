const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const itemsEls = document.querySelectorAll(".lista li");
  
  //const lisEls = listaEl.querySelectorAll("li");
  
  for(let element of itemsEls) {
    element.remove();
  }

  for(let item of cosasQueAprendimos){
    const newLielement = document.createElement("li");
    newLielement.textContent = item.tema;
    newLielement.classList.add(item.class || "item");
    console.log(newLielement);
    
    document.querySelector(".lista").appendChild(newLielement);
  }

}

main();
