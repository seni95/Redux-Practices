import React from 'react'
import { useParams } from 'react-router'
import { connect } from 'react-redux';

function Detail({todo}) {
    const id = useParams();

  return (
    <>
    <h1>created at: {todo?.id}</h1>
    <div>{todo?.text}</div>
    </>
  )


}
  function mapStateToProps(state,ownProps){
    console.log(state);
   console.log(ownProps); 
   console.log("??hh");
    // const {
    //     match:{
    //         params:{id}
    //     }
    // } = ownProps;
    // return {todo: state.find(toDo=>toDo.id == parseInt(id))};
  }

export default connect(mapStateToProps)(Detail);