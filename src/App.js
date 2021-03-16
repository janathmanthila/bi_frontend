import {BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";

import Layout from "./components/layout/layout";
import {BASEURL} from "./config"

axios.defaults.baseURL = BASEURL;

function App() {
  return (
      <Router>
        <Layout/>
      </Router>
  );
}

export default App;
