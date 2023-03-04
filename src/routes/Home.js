import React, { useState } from 'react'

export default function Home() {
  
  const [text,setText] = useState("");
  function onChange(e){
    setText(e.target.value);
  }  
  function onSubmit(e){
    e.preventDefault();

  }
  return (
    <div>
<h1>To Do</h1>
<form onSubmit={onSubmit}>
    <input type="text" value={text} onChange={onChange}></input>
    <button>ADD</button>
</form>
    <ul></ul>

    </div>
  )
}
