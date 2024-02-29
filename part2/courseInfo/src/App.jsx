const Course = ({ course }) => {
  return (
    <>
    <Header course={course} />
    <Content course={course}/>
    </>
  )
}


const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  )
}

const Part = ({ part,  exercise }) => {
  return (
    <>
      <p>{part} {exercise}</p>
    </>
  )
}

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map(part => <Part key={part.id} part={part.name} exercise={part.exercises}/>)}
    </>
  )
}

// const Total = ({}) => {
//   console.log('Total Props', props)
//   const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

//   return (
//     <p>Number of exercises {total}</p>
//   )
// }



const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }

  return <Course course={course} />
}

export default App