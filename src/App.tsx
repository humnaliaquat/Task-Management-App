
import Butoon from "./components/Butoon"
import "./App.css"
import Container from "./components/Container"
import Activity from "./components/Activity"
import Tasks from "./components/Tasks"

function App() {

  return (
    <>
      <Butoon logo = "Taskely"/>
      <div className='  .container-xl main-container  mt-3 ms-5 me-5'>
        <Container/>
        <Activity/>
        <Tasks/>
    </div>
    </>
  )
}

export default App
