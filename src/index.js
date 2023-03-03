import {createStore} from 'redux'
//where you are going to put your data

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const ADD = "ADD";
const MINUS = "MINUS";
const number = document.querySelector('span');
const countModifier = (count = 0,action)=>{
    //action is a second parameter or argument 
    //that redux uses when it calls our function 
    // ...modify count
    // if(action.type==="ADD"){
    //     return count=count+1;
    // } else if(action.type==="MINUS"){
    //     return count=count-1;
    // } else {
    //     return count;
    // }
    switch (action.type){
        case ADD:
            return count+1;
        case MINUS:
            return count-1;
        default :
            return count;
    }

}
//chages your data. 
//whatever it returns it will be your data of your application

const countStore = createStore(countModifier);

const onChange = ()=>{
    number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

add.addEventListener("click",()=>countStore.dispatch({type:ADD}));
minus.addEventListener("click",()=>countStore.dispatch({type:MINUS}))