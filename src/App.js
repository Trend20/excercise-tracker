import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ExercisesList from './components/ExercisesList/ExercisesList';
import EditExercise from './components/EditExercise/EditExercise';
import CreateExercise from './components/CreateExercise/CreateExercise';
import CreateUser from './components/CreateUser/CreateUser';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="" exact component={ExercisesList}/>
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
