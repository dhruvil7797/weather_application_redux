import './App.css';
import Dashboard from './Views/Dashboard'
import { ToastContainer, Slide} from 'react-toastify';
function App() {
  return (
    <div className="App">
      <ToastContainer
        transition={Slide}
        position="top-left"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Dashboard />
    </div>
  );
}

export default App;
