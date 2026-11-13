import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// Below is Default Export, so we can use any name while importing
import Login from './User.Component'
// below is Named Export, so we need to use {} while importing
import { ReactJsxTutorial } from './react-tut-jsx-understanding'
import FuncReactUnderstanding from './function-understanding'
import { VariableInReact } from './Variable-in-React'
import StateReactUnderstanding from './State-React-Understanding'
import PropsReactUnderstanding from './Props-react-Understanding'
import PropsStyleJsxDefaultSend from './Props-Style-Jsx-Default-Send'
import { ChangeInputFieldValueDisplay } from './Change-Input-Field-Value-Display'
import CheckboxValueDisplay from './Change-Checkbox-Value-Display'
import RadioButtonDropdownDisplay from './Radio-Button-Dropdown-Display'
function App() {
  const [count, setCount] = useState(0)
  let userObj = [
    {
      "name": "Aditya Jain",
      "age": 25,
      "email": "adi@test.com"
    }
  ]
  const [userDetails, showUserDetails] = useState(false)

  return (
    <div>
      <h1>React Tutorial</h1>
      {/* <Login />
      <ReactJsxTutorial />
      <VariableInReact />
      <StateReactUnderstanding />
      <FuncReactUnderstanding /> */}
      {/* <PropsReactUnderstanding name="Aditya Jain" age={25} /> */}
      {/* <button onClick={() => showUserDetails(!userDetails)}>Toggle User Details</button> */}
      {/* {userObj && userDetails && <PropsReactUnderstanding userList={userObj} />} */}
      {/* <ChangeInputFieldValueDisplay />
      {userObj && userDetails ? <PropsReactUnderstanding userList={userObj} /> : null}
      <PropsStyleJsxDefaultSend custom_color="darkblue">
        <p>This is a child component</p>
      </PropsStyleJsxDefaultSend> */}
      <CheckboxValueDisplay />
      <RadioButtonDropdownDisplay />


    </div>
  )
}

export default App
