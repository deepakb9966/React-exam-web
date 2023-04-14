
import './App.css';
// import GmailTreeView from "./components/topic"
import FadeMenu from "./components/topic"
import ButtonAppBar from "./components/header"
import Paper from "./components/Quetions"
import Results from"./components/Results"
import Auth from "./components/auth"
import Register from "./components/register"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    // <Homepage/>
      
      <Routes>
        <Route path='*' element={<Auth/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Quetions' element={<Paper />}/>
        <Route path='/Results' element={<Results />}/>
        {/* <Route path='/Profile' element={<MyProfile/>}/>
        <Route path="/displayAnswer" element={<Displayanswer/>}/>
        <Route path="/FinalMarks" element={<FinalMarks/>}/> */}
      </Routes>
    
    
  );
}

export default App;
