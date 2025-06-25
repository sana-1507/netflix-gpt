
import './App.css'
import appStore from './utils/appStore'
import { Provider } from "react-redux";
import Body from './components/Body';

function App() {

  return (
    <>
      {/* <h1 className=' font-bold text-xs'>Let's build Netflix GPT</h1> */}
      {/* <Header />
       */}
       {/* <Login /> */}
       <Provider store={appStore}><Body /></Provider>
    </>
  )
}

export default App
