// import "../src/CSS/style.css";
// import FullList from "./model/FullListItem";
// import ListItem from "./model/listItems";
// import ListTemplate from "./template/listTemplate";

// const initApp = () => {
//   // get instances of implementations
//   const fullList = FullList.instance;
//   const template = ListTemplate.instance;

//   const itemEntryForm = document.getElementById(
//     "itemEntryForm"
//   ) as HTMLFormElement;

//   itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
//     event.preventDefault();

//     let input = document.getElementById("newItem") as HTMLInputElement;
//     const entryText = input.value.trim();
//     if (!entryText) return;

//     // get the last item on the list
//     const itemId = fullList.list.length
//       ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
//       : 1;

//     const newItem = new ListItem(itemId.toString(), entryText);

//     fullList.addItem(newItem);
//     template.render(fullList);
//     input.value = "";
//   });

//   const clearItems = document.getElementById(
//     "clearItemsButton"
//   ) as HTMLButtonElement;

//   clearItems.addEventListener("click", (): void => {
//     fullList.clearList();
//     template.clear();
//   });

//   fullList.load();
//   template.render(fullList);
// };

// document.addEventListener("DOMContentLoaded", initApp)

import ListItem from "./model/listItems";
import TemplateList from "./template/listTemplate";
import FullList from "./model/FullListItem";

import "./CSS/style.css";

const initApp = () => {
  const fullList = FullList.instance;
  const template = TemplateList.instance;

  const formEntry = document.getElementById("itemEntryForm") as HTMLFormElement;

  formEntry.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();
    const input = document.getElementById("newItem") as HTMLInputElement;
    const inputText = input.value.trim();

    if (!inputText) return;

    const itemId = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const itemObj = new ListItem(itemId.toString(), inputText);

    fullList.addItem(itemObj);
    template.render(fullList);
  });

  const clearBtn = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;

  clearBtn.addEventListener("click", () => {
    fullList.clearList();
    template.render(fullList);
  });

  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
