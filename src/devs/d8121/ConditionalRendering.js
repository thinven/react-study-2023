function Item({ name, importance, isPacked }) {
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
  let itemContent = name;
  if (importance > 0) {
    itemContent = (
      <>
        {name}&nbsp;
        <span>(중요도: {importance})</span>
      </>
    );
  }
  return <li className="item">{itemContent}</li>;
}

const drinks = {
  tea: { pop: "leaf", cc: "15–70 mg/cup", age: "4,000+ years" },
  coffee: { pop: "bean", cc: "80–185 mg/cup", age: "1,000+ years" },
};

function Drink({ name }) {
  let selectedDrink = drinks.tea;
  if (name === "coffee") {
    selectedDrink = drinks.coffee;
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{selectedDrink.pop}</dd>
        <dt>Caffeine content</dt>
        <dd>{selectedDrink.cc}</dd>
        <dt>Age</dt>
        <dd>{selectedDrink.age}</dd>
      </dl>
    </section>
  );
}

function Drink2({ name }) {
  let partOfPlant;
  let caffeineContent;
  let age;

  if (name === "tea") {
    partOfPlant = "leaf";
    caffeineContent = "15–70 mg/cup";
    age = "4,000+ years";
  } else {
    partOfPlant = "bean";
    caffeineContent = "80–185 mg/cup";
    age = "1,000+ years";
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{partOfPlant}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeineContent}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

const types = {
  tea: {
    part: "leaf",
    content: "15–70 mg/cup",
    age: "4,000+ years",
  },
  coffee: {
    part: "bean",
    content: "80–185 mg/cup",
    age: "1,000+ years",
  },
};
function Drink3({ name }) {
  // const type = types[name];
  let type = types.coffee;
  if (name === "tea") {
    type = types.tea;
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{type.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{type.content}</dd>
        <dt>Age</dt>
        <dd>{type.age}</dd>
      </dl>
    </section>
  );
}

const data = [
  { importance: 9, name: "Space suit" },
  { importance: 0, name: "Helmet with a golden leaf" },
  { importance: 6, name: "Photo of Tam" },
];

export default function PackingList(props) {
  //   const { data, condition } = props;
  // //   const {data:testData} = useQeury(///);

  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <div>
        <Drink2 name="tea" />
        <Drink2 name="coffee" />
      </div>

      <ul>
        {data.map((item) => (
          <Item importance={item.importance} name={item.name} />
        ))}
        {/* <Drink name="tea" />
        <Drink3 name="tea" /> */}
      </ul>
    </section>
  );
}
