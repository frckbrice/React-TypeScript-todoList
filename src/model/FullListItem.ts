import ListItem from "./listItems";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

// // export default class FullList implements List {
// //   list: ListItem[];
// //   constructor() {
// //     this.list = [];
// //   }


// //   load(): void {
// //     //load from database
// //   }

// //   save(): void {
// //     localStorage.setItem('list', JSON.stringify(this.list));
// //   }

// //   clearList(): void {
// //     this.list = [];
// //   }

// //   addItem(itemObj: ListItem): void {
// //     this.list.push(itemObj);
// //   }

// //   removeItem(id: string): void {
// //     const index = this.list.findIndex((obj: ListItem) => obj.id === id);

// //     if(index > -1) {
// //       this.list.splice(index, 1);
// //     }

// //   }

// // }

// export default class FullList implements List {
//   static instance: FullList = new FullList();
//    //? This makes this fullList a singleton. so there will be only one instance.
//   private constructor(private _list: ListItem[] = []) {}
//   //? This makes this fullList a singleton. so there will be only one instance.

//   get list(): ListItem[] {
//     return this._list;
//   }

//   load(): void {
//     const storedList: string | null = localStorage.getItem("list");
//     if (typeof storedList !== "string") return;

//     const parsedList: { _id: string; _item: string; _checked: boolean }[] =
//       JSON.parse(storedList);

//     parsedList.forEach((itemObj) => {
//       const newlistItem = new ListItem(
//         itemObj._id,
//         itemObj._item,
//         itemObj._checked
//       );

//       FullList.instance.addItem(newlistItem);
//     });
//   }

//   save(): void {
//     localStorage.setItem("list", JSON.stringify(this._list));
//   }

//   clearList(): void {
//     this._list = [];
//     this.save();
//   }

//   addItem(itemObj: ListItem): void {
//     this._list.push(itemObj);
//     this.save();
//   }

//   removeItem(id: string): void {
//     const index = this._list.findIndex((obj: ListItem) => obj.id === id);

//     if (index > -1) {
//       this._list.splice(index, 1);
//       this.save();
//     }
//   }
// }



// import ListItem from "./listItems";

// interface List {
//   list: ListItem[];
//   load(): void;
//   save(): void;
//   clearList(): void;
//   addItem(itemObj: ListItem): void;
//   removeItem(id: string): void;
// }

export default class FullList implements List {
  static instance: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {}

  get list() {
    return this._list;
  }

  save(): void {
    localStorage.setItem('list', JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    const index = this.list.findIndex(item => item.id === id);

    if(index > -1) {
      this.list.splice(index, 1);
      this.save();
    }
    
  }

  load(): void {
    const storedList: string | null = localStorage.getItem('list');

    if(typeof storedList !== 'string') {
      return
    }

    const confirmList: {_id: string, _item: string  ,_checked: boolean}[] = JSON.parse(storedList);

    confirmList.forEach((item) => {
      const itemObj =  new ListItem(
        item._id,
        item._item,
        item._checked,
      )

      FullList.instance.addItem(itemObj)
    })
  }











}