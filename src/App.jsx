import { useState } from "react";
import "./App.css";

const App = () => {
  let [flashcards, setFlashcards] = useState({});

  const showForm = () => {
    let form = document.querySelector("dialog");
    form.show();
  };

  console.log(flashcards);
  return (
    <div>
      <Button onclick={showForm} text={"Add Flashcard"} />
      <FlashcardForm flashcards={flashcards} setFlashcards={setFlashcards} />
    </div>
  );
};

const Button = ({ onclick, text }) => {
  return <button onClick={onclick}>{text}</button>;
};

const FlashcardForm = ({ setFlashcards, flashcards }) => {
  let newFlashcard = {};
  let newArray = [];
  let terms = [];
  let definitions = [];
  const createFlashcard = (event) => {
    event.preventDefault();
    let title = document.querySelector("#title");
    let termInputs = document.querySelectorAll(".term");
    termInputs.forEach((term) => {
      terms.push(term.value);
    });
    let definitionInputs = document.querySelectorAll(".definition");
    definitionInputs.forEach((definition) => {
      definitions.push(definition.value);
    });
    for (let i = 0; i < termInputs.length; i++) {
      let pair = { term: terms[i], definition: definitions[i] };
      newArray.push(pair);
    }

    newFlashcard = { ...flashcards };
    newFlashcard[title.value] = newArray;
    setFlashcards(newFlashcard);
  };
  const addPair = (event) => {
    event.preventDefault();
    index += 1;
    let container = document.querySelector("#pairContainer");
    let divPair = document.createElement("div");
    divPair.classList.add("pair");

    let termLabel = document.createElement("label");
    termLabel.htmlFor = "term" + index;
    termLabel.textContent = "Term: ";
    let termInput = document.createElement("input");
    termInput.setAttribute("id", "term" + index);
    termInput.setAttribute("type", "text");
    termInput.classList.add("term");
    termInput.setAttribute("name", "term");

    let definitionLabel = document.createElement("label");
    definitionLabel.htmlFor = "definition" + index;
    definitionLabel.textContent = "Definition: ";
    let definitionInput = document.createElement("input");
    definitionInput.setAttribute("id", "definition" + index);
    definitionInput.setAttribute("type", "text");
    definitionInput.classList.add("definition");
    definitionInput.setAttribute("name", "definition");

    termLabel.appendChild(termInput);
    definitionLabel.appendChild(definitionInput);
    divPair.appendChild(termLabel);
    divPair.appendChild(definitionLabel);
    container.appendChild(divPair);
  };

  let index = 3;
  return (
    <dialog className="form">
      <form>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            type="text"
            placeholder="Fysik begrepp V.23"
            name="title"
          ></input>
        </label>
        <div id="pairContainer">
          <div className="pair">
            <label htmlFor="term1">
              Term:{" "}
              <input
                id="term1"
                type="text"
                className="term"
                placeholder="Fysik begrepp V.23"
                name="term"
              ></input>
            </label>
            <label htmlFor="definition1">
              Definition:{" "}
              <input
                id="definition1"
                type="text"
                className="definition"
                placeholder="Fysik begrepp V.23"
                name="definition"
              ></input>
            </label>
          </div>
          <div className="pair">
            <label htmlFor="term2">
              Term:{" "}
              <input
                id="term2"
                type="text"
                className="term"
                placeholder="Fysik begrepp V.23"
                name="term"
              ></input>
            </label>
            <label htmlFor="definition2">
              Definition:{" "}
              <input
                id="definition2"
                type="text"
                className="definition"
                placeholder="Fysik begrepp V.23"
                name="definition"
              ></input>
            </label>
          </div>
          <div className="pair">
            <label htmlFor="term3">
              Term:{" "}
              <input
                id="term3"
                type="text"
                className="term"
                placeholder="Fysik begrepp V.23"
                name="term"
              ></input>
            </label>
            <label htmlFor="definition3">
              Definition:{" "}
              <input
                id="definition3"
                type="text"
                className="definition"
                placeholder="Fysik begrepp V.23"
                name="definition"
              ></input>
            </label>
          </div>
        </div>

        <Button text={"Add pair"} onclick={addPair} />
        <Button text={"CREATE"} onclick={createFlashcard} />
      </form>
    </dialog>
  );
};

export default App;
