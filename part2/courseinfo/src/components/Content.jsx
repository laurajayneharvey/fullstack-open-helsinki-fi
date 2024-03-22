const Content = (props) => {
    return (
        <>
        {props.parts.map(part => 
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        )}
        </>
    )
  }

  import Part from "./Part"
  
  export default Content