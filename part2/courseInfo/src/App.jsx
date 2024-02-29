const Course = ({ courses }) => {
  return (
    <>
    <h1>Web Development Curriculum</h1>
      {courses.map((course) => {
        return (
        <div key={course.id}>
          <Header title= {course.name} />
          <Content course={course}/>
          <Total course={course} />
        </div>
        )
      })}
    </>
  )
}


const Header = ({ title }) => {

  return (
    <>
      <h2>{title}</h2>
    </>
  )
}

const Part = ({ part, exercise }) => {
  return (
    <>
      <p>{part} {exercise}</p>
    </>
  )
}

const Content = ({ course }) => {
  console.log('course', course)
  let parts = course.parts
  return (
    <>
      {parts.map((part) => <Part key={part.id} part={part.name} exercise={part.exercises}/>)}
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
    <p><strong>total of {total} exercises</strong></p>
  )
}



const App = () => {
  const courses = [
    {
      name: 'Half Stack Application Development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using Props to Pass Data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of A Component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <Course courses={courses} />
    </>
  )
}

export default App