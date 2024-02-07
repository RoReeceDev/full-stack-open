const Header = (props) =>{
  console.log('Header Props', props)
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) =>{
  console.log('Part Props', props)
  return(
  <>
  <p>{props.part} {props.exercise}</p>
  </>
  )
}

const Content = (props) =>{
  console.log('Content Props', props)
  return (
    <>
    <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
    <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
    <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  console.log('Total Props', props)

  return (
    <p>Number of exercises {props.total}</p>
  )
}







const App = () => {
 const course = 'Half Stack application development'
 const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
}
 const part2 = {
  name: 'Using props to pass data',
  exercises: 7
}
 const part3 = {
  name: 'State of a component',
  exercises: 14
}

  return (
    <>
      <div>
        <Header course={course} />
        <Content parts={[part1, part2, part3]} />
        <Total total={part1.exercises + part2.exercises + part3.exercises}/>
      </div>
    </>
  )
}

export default App
