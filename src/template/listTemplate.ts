import FullList from "../model/FullListItem";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

// export default class ListTemplate implements DOMList {
//   ul: HTMLUListElement;

//   // to confirm this implementation as a singleton. 
//   //? static means that the property or methode apply only for a class and can be accessed directly by the class and not an instance of the class.
//   static instance: ListTemplate = new ListTemplate();

//   private constructor() {
//     this.ul = document.getElementById("listItems") as HTMLUListElement;
//   }

//   clear(): void {
//     this.ul.innerHTML = "";
//   }

//   render(fullList: FullList): void {
//     this.clear();

//     fullList.list.forEach((item) => {
//       const li = document.createElement("li") as HTMLLIElement;
//       li.className = "item";

//       const check = document.createElement("input") as HTMLInputElement;
//       check.type = "checkbox";
//       check.id = item.id;
//       check.tabIndex = 0;
//       check.checked = item.checked;
//       check.addEventListener("change", () => {
//         item.checked = !item.checked;
//         fullList.save();
//       });
//       li.append(check);

//       const label = document.createElement("label") as HTMLLabelElement;
//       label.htmlFor = item.id;
//       label.textContent = item.item;
//       li.append(label);

//       const button = document.createElement("button") as HTMLButtonElement;
//       button.textContent = "X";
//       button.className = "button";

//       button.addEventListener("click", ():void => {
//         console.log('clicked', item.id)
//         fullList.removeItem(item.id);
//         this.render(fullList);
//       });

//       li.append(button);

//       this.ul.append(li);
//     });
//   }
// }


// import FullList from "../model/FullListItem";

// interface DOMList {
//   ul: HTMLUListElement;
//   clear(): void;
//   render(fullList: FullList): void;
// }


export default class TemplateList implements DOMList {
  ul: HTMLUListElement;

  static instance: TemplateList  = new TemplateList();

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = '';
  }

  render(fullList: FullList): void {
    this.clear();

    fullList.list.map(item => {
      const li = document.createElement('li') as HTMLLIElement;
      li.className = 'item';

      const input = document.createElement('input') as HTMLInputElement;
      input.type = 'checkbox';
      input.tabIndex = 0;
      input.id = item.id;
      input.checked = item.checked;

      input.addEventListener('change', () => {
        item.checked = !item.checked;
        fullList.save();
      })

      li.append(input);

      const label = document.createElement('label') as HTMLLabelElement;
      label.htmlFor = item.id;
      label.textContent = item.item;

      li.append(label);

      const button = document.createElement('button') as HTMLButtonElement;
      button.className = 'button';
      button.textContent = 'X';

      button.addEventListener('click', (): void =>{
        FullList.instance.removeItem(item.id);
        TemplateList.instance.render(fullList);
       
      })

      li.append(button);

      this.ul.append(li);

    })

   







  }





}