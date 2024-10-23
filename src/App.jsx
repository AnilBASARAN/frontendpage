import {Routes,Route} from "react-router-dom"
import PostPage from "./pages/PostPage"
import UserPage from "./pages/UserPage"


function App() {
 

  return (
 <Routes>
<Route path="/:username" element ={<UserPage />} />
<Route path="/:username/post/:pid" element ={<PostPage />} />
 </Routes>
  )
}

export default App
