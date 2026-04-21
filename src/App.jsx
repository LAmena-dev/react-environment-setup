import "./App.css";
import { FaveFood, Greeting } from "./gettingStarted/reactComps";
import { HTMLConv, TodoList } from "./gettingStarted/whatIsJSX";
import { Animals } from "./gettingStarted/renderTechs";
import DrinkList from "./gettingStarted/condPrac";
import { List, Poem, RecipeList } from "./gettingStarted/renderList";
import {
  FeedbackForm,
  FeedbackForm2,
  Form,
  Gallery,
} from "./statesAndEffects/IntroToState";
import { Person } from "./statesAndEffects/moreState";
import Clock from "./statesAndEffects/dealWithSideEffects";
import FunctionalInput from "./classComponents/components/FunctionalInput";
import ClassInput from "./classComponents/components/ClassInput";
import "./classComponents/style.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Greeting />
    <FaveFood />
    <HTMLConv />
    <Bio />
    <TodoList />
    <Animals />
    <DrinkList />
    <List />
    <RecipeList />
    <Poem /> 
    <Gallery />
    <Profile />
    <Prof />
    <Gallery />
    <Form />
    <FeedbackForm />
    <FeedbackForm2 />
    <Person />
    <Clock />*/}

      {/* <FunctionalInput name="Functional component!" />
      <div className="divider" />
      <ClassInput name="Class based component!" /> */}


    </>
  );
}

export default App;
