import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CategoriesContainer from "./components/CategoriesContainer";
function App() {
  

  return (
    <div className="container">
      <h2>Exp App (redux) </h2>
      <div className="row">
        <CategoriesContainer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
