import './App.css';
import Practice1 from './pages/Practice1';
import Practice2 from './pages/Practice2'
import Practice3 from './pages/Practice3';
import Practice4 from './pages/Practice4';
import Practice5 from './pages/Practice5';
import Practice6 from './pages/Practice6';
import Practice7 from './pages/Practice7';
import Practice8 from './pages/Practice8';
function App() {
  // In order to see each components individually, uncomment the desired one to view in particular 
  return (
    <div className="App">
     <Practice1 />
     <Practice2 />
     <Practice3 />
     <Practice4 num='121'>
      This is a paragraph of the Practice test files
     </Practice4>
     <Practice5 num= '9555' />
     <Practice6 />
     <Practice7 />
     <Practice8 name='Sayantan' surname="Paul" />
    </div>
  );
}

export default App;
