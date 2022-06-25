import logo from './logo.svg';
import './App.css';
import DisplayRecord from './displayRecord/displayRecord';

function App() {
  let students = [
    {
      'name': 'ABCD1',
      'class': 'MCA1'
    },
    {
      'name': 'ABCD2',
      'class': 'MCA1'
    },
    {
      'name': 'ABCD3',
      'class': 'MCA2'
    }
  ]

  return (
    <div className="App">
      <h1>Welcome</h1>
      {
        students.map((student) => (
          <DisplayRecord student={student} />
        ))
      }
    </div>
  );
}

export default App;
