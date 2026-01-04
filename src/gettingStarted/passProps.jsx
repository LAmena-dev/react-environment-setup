import { GetImageUrl } from "../util.jsx";

function Person({ imageId, name, size = 70, profession, awards, discovery }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={GetImageUrl(imageId)}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          {/* {awards.map((award) => (
            <li key={award.id}>
              <ul>
                <p>{award}</p>
              </ul>
            </li>
          ))} */}
          ({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Person
        imageId={"szV5sdG"}
        name={"Maria Skłodowska-Curie"}
        profession={"physicist and chemist"}
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discovery={"polonium (chemical element)"}
      />
      <Person
        imageId={"YfeOqp2"}
        name={"Katsuko Saruhashi"}
        profession={"geochemist"}
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovery={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}

const ratio = window.devicePixelRatio;

function Avatar({ person, size }) {
  let thumbnailSize = "s";
  if (size * ratio > 90) {
    thumbnailSize = "b";
  }
  return (
    <img
      className="avatar"
      src={GetImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "7vQD0fP",
      }}
    />
  );
}

function Card({ children, title }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export function Prof() {
  return (
    <div>
      <Card title="Photo">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card title="About">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
