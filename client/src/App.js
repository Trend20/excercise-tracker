import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ExercisesList from './components/ExercisesList/ExercisesList';
import EditExercise from './components/EditExercise/EditExercise';
import CreateExercise from './components/CreateExercise/CreateExercise';
import CreateUser from './components/CreateUser/CreateUser';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home/>}/>
          <Route path="/tasks" exact element={<ExercisesList />}/>
          <Route path="/edit/id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>

     {/* <div className="footer-text">
      <p>Copyright © 2022. All Rights Reserved.</p>
      <p>Designed by @ Enock Omondi</p> 
     </div> */}
    </Router>
  );
}

export default App;
