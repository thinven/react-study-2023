import Avatar from "./Avatar";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile(props) {
  const {
    person = {
      name: "Aklilu Lemma",
      imageId: "OKS67lh",
    },
    size,
    isSepia,
    thickBorder,
  } = props;
  return (
    <>
      <div>
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
        <Avatar
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
        <Avatar
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />
        <hr />
        <Avatar
          person={person}
          size={size}
          isSepia={isSepia}
          thickBorder={thickBorder}
        />
        <Avatar {...props} />
      </div>
      <hr />
      <Card>
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
      </Card>
    </>
  );
}
