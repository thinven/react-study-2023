import { getImageUrl } from "core";

function Avatar(props) {
  const {
    person = {
      name: "Aklilu Lemma",
      imageId: "OKS67lh",
    },
    size = 100,
  } = props;
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default Avatar;
