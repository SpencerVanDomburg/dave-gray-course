import {useState} from 'react';


const Content = () => {
  const [name, setName] = useState('Dafve');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Bob','Kevin','Dave'];
    const int = Math.floor(Math.random()*3);
    setName(names[int]);
  }

  const handleClick = () => {
    setCount(count+1);
    console.log(count);
  }

  const handleClick2 = () => {
    console.log(count);
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it</button>
    </main>
  )
}

export default Content
