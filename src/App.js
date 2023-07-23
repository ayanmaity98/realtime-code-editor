
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <>
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
            success: {
              style: {
                fontWeight: 600
              },
              theme: {
                primary: '#4aed88',
              },
            },
            error: {
              style: {
                fontWeight: 600
              }
            }
        }}></Toaster>
    </div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/editor/:roomId" element={<EditorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
