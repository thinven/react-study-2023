export default function Item({ name, importance, isPacked }) {
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
  // if (isPacked) {
  //   itemContent = <del>{name + " ✔" + "❌"}</del>;
  // }
  // return <li className="item">{itemContent}</li>;
  //   return <li className="item">{isPacked ? name + " ✔" : name + "❌"}</li>;
  //   return <li className="item">{isPacked ? name + " ✔" : name + "❌"}</li>;

  let itemContent = isPacked ? name + " ✔" : name + "❌";
  if (importance > 0) {
    itemContent = (
      <>
        {itemContent}&nbsp;
        <span>(중요도: {importance})</span>
      </>
    );
  }
  return <li className="item">{itemContent}</li>;
}
