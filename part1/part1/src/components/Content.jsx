const Content = (props) => {
    return (
        <>
            <Part part={props.part1.name} exercises={props.part1.exercises} />
            <Part part={props.part2.name} exercises={props.part2.exercises} />
            <Part part={props.part3.name} exercises={props.part3.exercises} />
        </>
    )
  }

  import Part from "./Part"
  
  export default Content