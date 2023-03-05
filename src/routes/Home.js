import React, { useState } from 'react'
import {connect} from 'react-redux';
import Todo from '../components/Todo'
import { actionCreators } from '../store';

function Home({toDos,addToDo}) {
  const [text,setText] = useState("");
  function onChange(e){
    setText(e.target.value);
  }  
  function onSubmit(e){
    e.preventDefault();
    addToDo(text)
  }
  return (
    <div>
<h1>To Do</h1>
<form onSubmit={onSubmit}>
    <input type="text" value={text} onChange={onChange}></input>
    <button>ADD</button>
</form>
    <ul>
       {toDos.map(todo=><Todo {...todo} key={todo.id}></Todo>)}
    </ul>
    </div>
  )
}

function getCurrentState(state){
    return { toDos: state};

}

function mapDispatchToProps(dispatch,ownProps){
    return { addToDo:(text)=>dispatch(actionCreators.addToDo(text))};
}

export default connect(getCurrentState,mapDispatchToProps)(Home);