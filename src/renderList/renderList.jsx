import { people } from "./data";
import { GetImageUrl } from "../util";

let chemists = [];
let others = [];
people.forEach((person) => {
  if (person.profession === "chemist") {
    chemists.push(person);
  } else {
    others.push(person);
  }
});

function ProfessionSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={GetImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function List() {
  return (
    <article>
      <h1>Scientists</h1>
      <ProfessionSection title="Chemists" people={chemists} />
      <ProfessionSection title="Others" people={others} />
    </article>
  );
}
