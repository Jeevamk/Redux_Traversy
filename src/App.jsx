import reactLogo from './assets/react.svg'
import './App.css'
import Posts from './components/Posts'
import PostForms from './components/PostForms'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    
    <>
    <Provider store={store}>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    <PostForms />
    <hr></hr>
    <Posts />
    </Provider>
    </>
  )
}

export default App
