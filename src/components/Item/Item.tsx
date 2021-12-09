import * as React from "react";

interface IProps {
  name: string;
  id: string;
  image: string;
}

const Item: React.FC<IProps> = ({ name, image }) => {
  return (
    <div>
      <div>{name}</div>
      <img src={image} alt="" />
    </div>
  );
};

export default Item;
