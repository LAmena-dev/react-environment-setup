export function Greeting() {
  return <h2>This is an imported greeting</h2>;
}

export function FaveFood() {
  return (
    <div>
      <h1>Coconut Chicken Curry</h1>
      <img src="../public/coconut_chicken_curry.jpg" />
      <h2>Description</h2>
      <p>
        A nice zippy chicken curry balanced out by the sweetness of coconut
        milk. This recipe is very basic and easy to customize to your taste. I
        have added hearts of palm, bamboo shoots, pineapple, mushrooms, onions
        or shallots...have fun with it!
      </p>
    </div>
  );
}

export function HTMLConv() {
  return (
    <div>
      <h1>Test title</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

export default function Bio() {
  return (
    <div>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br />
        <b>
          And <i>pictures</i>
        </b>{" "}
        of scientists!
      </p>
    </div>
  );
}
