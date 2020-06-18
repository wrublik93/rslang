import React from "react";

const List = (props) => {
  const { list, listHeading } = props;

  const listItems = list.map((item) => <li key={item.toString()}>{item}</li>);

  return (
    <>
      {listHeading && <h3>{listHeading}</h3>}
      <ul>{listItems}</ul>
    </>
  );
};

export default List;
