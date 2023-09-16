import Item from "./Item";

const data = [
  { importance: 9, name: "Space suit", isPacked: true },
  { importance: 0, name: "Helmet with a golden leaf", isPacked: true },
  { importance: 6, name: "Photo of Tam", isPacked: false },
];

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
      <hr />
      <ul>
        {data.map((item) => (
          <>
            <Item
              importance={item.importance}
              name={item.name}
              isPacked={item.isPacked}
            />
            <Item {...item} />
          </>
        ))}
      </ul>
    </section>
  );
}
