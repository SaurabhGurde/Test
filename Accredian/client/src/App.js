import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Landing';

function App() {
  return (
    <div>
       <ToastContainer />
       <Landing/>
    </div>
  );
}

export default App;
