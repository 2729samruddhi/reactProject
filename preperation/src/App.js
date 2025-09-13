import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
   const [text, setText] = useState("");

  useEffect(()=>{
    console.log("Effect runs after every render",count); 
  },[count])

  return (
    <div className="App">
        <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
       <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
export default App;

// Output Behavior:
// Runs again whenever count changes.
// Updating text won’t trigger the effect (since it’s not in dependencies).
