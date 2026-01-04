import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
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

// import { Gallery, Prof, Profile } from "./gettingStarted/passProps";

createRoot(document.getElementById("root")).render(
  <StrictMode>
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
    <Prof />*/}

    <Gallery />
    <Form />
    <FeedbackForm />
    <FeedbackForm2 />
    <Person />
  </StrictMode>
);
