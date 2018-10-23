document.addEventListener("DOMContentLoaded", () => {
  const newJediForm = document.querySelector("#new-jedi-form");
  newJediForm.addEventListener("submit", handleNewJediFormSubmit);

  const deleteAllButton = document.querySelector("#delete-all");
  deleteAllButton.addEventListener("click", handleDeleteAllClick);
 })


  const createJediListItem = function (form) {
    const jediListItem = document.createElement("li");
    jediListItem.classList.add("jedi-list-item");

    const name = document.createElement("h2");
    name.textContent = `Name: ${form.name.value}`;
    jediListItem.appendChild(name);

    const rank = document.createElement("h3");
    rank.textContent = `Rank: ${form.rank.value}`;
    jediListItem.appendChild(rank);

    const forms = document.createElement("p");
      let checkedValue = [];
      let inputElements = document.querySelectorAll('#forms');
      for (let i=0; i < inputElements.length; ++i){
        if(inputElements[i].checked){
          checkedValue.push(inputElements[i].value);
        }
      }
      let checkedValueString = ""
      if(checkedValue.length !== 0) {
        checkedValueString = checkedValue.reduce((x, y) => x + ", " + y)
      } else {
        checkedValueString = "None"
      }
    forms.textContent = `Lightsaber Forms: ${checkedValueString}`;
    jediListItem.appendChild(forms);

    const lightsaberColour = document.createElement("p");
    lightsaberColour.textContent = `Lightsaber Colour: ${form.lightsaberColour.value}`;
    jediListItem.appendChild(lightsaberColour);

    const jediCouncil = document.createElement("p");
    jediCouncil.textContent = `Are they on the Jedi Council? ${form.council.value}`;
    jediListItem.appendChild(jediCouncil);

    return jediListItem;
  };

  const handleNewJediFormSubmit = function (event) {
    event.preventDefault();

    const jediListItem = createJediListItem(event.target);

    const jediList = document.querySelector("#jedi-list");
    jediList.appendChild(jediListItem);

    event.target.reset();
  };

  const handleDeleteAllClick = function (event) {
    const jediList = document.querySelector("#jedi-list");
    jediList.innerHTML = "";
  };
