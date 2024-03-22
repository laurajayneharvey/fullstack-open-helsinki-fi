const Total = (props) => {
    return (
        <p><strong>total of {props.parts.reduce((partialSum, a) => partialSum + a.exercises, 0)} exercises</strong></p>
    )
  }
  
  export default Total