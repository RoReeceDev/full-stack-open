const Course = ({ course }) => {
  return (
    <>
    <Header course={course} />
    <Content course={course}/>
    <Total course={course} />
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

const Total = ({ course }) => {
  let parts = course.parts
  let total = parts.reduce((s, p) => {
    console.log('What is happening', s, p.exercises)
    return s + p.exercises
  }, 0)

  return (
    <p>total of {total} exercises</p>
  )
}



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
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      },
    ]
  }

  return <Course course={course} />
}

export default App