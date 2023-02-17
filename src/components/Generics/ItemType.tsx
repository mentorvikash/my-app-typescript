import React from "react";

type ItemType<T> = {
  items: T[];
  clickHandler: (value: T) => void;
};

const ItemList = <T extends {id: number}>({ items, clickHandler }: ItemType<T>) => {
  return (
    <div>
      <h2>List of items: </h2>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => clickHandler(item)}>
            this is me
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
