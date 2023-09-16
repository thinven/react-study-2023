import { getImageUrl } from "./utils.js";

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export const people2 = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

export default function List() {
  const listItems = people.map((person, idx) => {
    console.log("---> person: ", person);
    return <li key={idx}>{person}</li>;
  });

  const listItems2 = people2
    .filter((person) => person.profession === "chemist")
    .map((person, idx) => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));

  const handle = (person) => {
    return (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    );
  };
  const chemists = [];
  const notChemists = [];
  people2.forEach((person) => {
    person.profession === "chemist"
      ? chemists.push(person)
      : notChemists.push(person);
  });
  const listItems3 = chemists.map(handle);
  const listItems4 = notChemists.map(handle);

  console.log("---> listItems: ", listItems);

  return (
    <>
      {/* <ul>{listItems}</ul> */}
      {/* <ul>{listItems2}</ul> */}
      <ul>{listItems3}</ul>
      <hr />
      <ul>{listItems4}</ul>
    </>
  );
}
