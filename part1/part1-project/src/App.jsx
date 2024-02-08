import { useState } from 'react'


// const Hello = (props) => {
//   // console.log(props)

//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>
//         So you were probably born in {bornYear()}
//       </p>
//     </div>
//   )
// }


const Display = ({ counter }) => <div>{counter}</div>
 

const Button = ({ onClick, text }) => (
    <button onClick={props.onClick}>{props.text}</button>
  )


const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)


  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <>
      <Display counter={counter} />
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero' />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
    </>
  )
}

export default App
