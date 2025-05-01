import react, { useCallback, useState, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copy")

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);



  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
      .then(() => {
        setCopyText("Copied!");
        setTimeout(() => {
          setCopyText("Copy");
        }, 2000);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
        setCopyText("Failed!");
        setTimeout(() => {
          setCopyText("Copy");
        }, 2000);
      });
  }, [password]);

  return (
    <>
      <div className='w-180 h-60 bg-gray-800 mt-20 rounded-lg shadow-lg justify-center mx-auto'>
        <h1 className="text-4xl text-center text-white font-bold py-5">
          Password Generator
        </h1>
        <input
          type='text'
          value={password}
          className='w-120 ml-16 h-10 bg-white rounded-lg shadow-lg'
          placeholder='Password'
          readOnly
        />
        <button className='w-20 h-10 font-bold bg-blue-500 text-white rounded-lg shadow-lg ml-2'
          onClick={copyToClipboard} >
          {copyText} 
        </button>

        <div className='flex mt-8 ml-15 gap-x-2'>
          <div className='flex item-center gap-x-2'>
            <input
              type='range'
              min={8}
              max={100}
              value={length}
              className='w-50 cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-orange-400'>length: {length}</label>
          </div>

          <div className='flex item-center gap-x-2'>
            <input
              type="checkbox"
              checked={numberAllowed}
              className="cursor-pointer"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor='numberInput' className='text-orange-400'>Numbers</label>
          </div>

          <div className='flex item-center gap-x-2'>
            <input
              type="checkbox"
              checked={charAllowed}
              className="cursor-pointer"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor='charInput' className='text-orange-400'>Character</label>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
