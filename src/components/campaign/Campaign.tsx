import * as React from "react";

import { IItem } from "../../types/item";
import Item from "../Item/Item";

interface IProps {
  name: string;
  id: string;
  image: string;
  items: IItem[];
}

const Campaign: React.FC<IProps> = ({ name, id, image, items }) => {
  return (
    <div>
      <div>{name}</div>
      <img src={image} alt="" />
      <div>
        <h2>Items:</h2>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Campaign;
