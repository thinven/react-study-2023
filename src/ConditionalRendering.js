function Item({ name, isPacked }) {
  //   if (isPacked) {
  //     return <li className="item">{name} ✔</li>;
  //   }
  //   return <li className="item">{name}</li>;
  //   if (isPacked) {
  //     return null;
  //   }
  //   return <li className="item">{name}</li>;
  //   return <li className="item">{isPacked ? name + " ✔" : name}</li>;
  //   return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
  //   name ? ture : false;
  //   name || "dft"
  //   name ?? "dft"
  //   return (
  //     <li className="item">
  //       {name || "dft"} {isPacked && "✔"}
  //       {name ?? "dft"} {isPacked && "✔"}
  //     </li>
  //   );
  //   let itemContent = name;
  //   if (isPacked) {
  //     itemContent = name + " ✔";
  //   }
  //   return <li className="item">{itemContent}</li>;
  //   let itemContent = name;
  //   if (isPacked) {
  //     itemContent = <del>{name + " ✔" + "❌"}</del>;
  //   }
  //   return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name={""} />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
