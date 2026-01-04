import { people, recipes } from "./data";
import { GetImageUrl } from "../util";
import { Fragment } from "react";

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

export function List() {
  return (
    <article>
      <h1>Scientists</h1>
      <ProfessionSection title="Chemists" people={chemists} />
      <ProfessionSection title="Others" people={others} />
    </article>
  );
}

function Recipe({ name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  );
}

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <Fragment key={index}>
          {index > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      ))}
    </article>
  );
}
