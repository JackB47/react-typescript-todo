import React, { useState, FormEvent } from "react";

export default function TodoList() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]) as any;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([...items, value]);
    setValue("");
    console.log(items);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleDelete = (item: string) => {
    setItems(items.filter((itemsItem: string) => item !== itemsItem));
  };

  return (
    <div>
      <p>Todo List</p>
      <ul>
        {items.map((item: string) => (
          <li>
            {item}
            <button onClick={() => handleDelete(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">add item</button>
      </form>
    </div>
  );
}
