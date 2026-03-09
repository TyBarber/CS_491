
import './App.css'
import Room from './Room.jsx'

const House = (props) => (
    <>

     <div> This house is called {props.name}</div>
     <Room name="bedroom" house={props.name}></Room>
    </>
  )


export default House
