
import {
  Route,
  Switch,
} from 'react-router-dom';
import NavBar from "./NavBar";
import Art from "./art";
import Art2 from "./art2";
import Art3 from "./art3";
import InkaWall1 from "./art/inkawall1";
import Inkamen1 from "./art/inkamen1";
import Paginate from "./paginate";



function App() {
  return (
    <>
    <NavBar />
    if (!path ? <h1>Page does not exist!</h1>: "")

    <Switch>
      <Route exact path="/"><Art /></Route>
      <Route path="/2"><Art2 /></Route>
      <Route path="/3"><Art3 /></Route>
      <Route path="/inkawall1"><InkaWall1 /></Route>
      <Route path="/inkamen1"><Inkamen1 /></Route>

    </Switch>
    <Paginate />
    </>
  );
}

export default App;
