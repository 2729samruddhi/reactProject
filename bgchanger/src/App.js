import React, { useState } from 'react'; 

function App() {
  const [color, setColor] = useState('Olive')
  
  const colors = [
    'red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'
    
  ]
  
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl'>
          {colors.map(color => (
            <button 
              key={color}
              onClick={() => setColor(color)}
              className={`px-4 py-1 rounded-full text-white`}
              style={{backgroundColor: color}}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;