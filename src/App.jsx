import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage"
import UserPage from "./pages/UserPage"
import Header from "./components/Header"
import { useState } from "react"
import clsx from "clsx";

function App() {
 
  const [isDark,setIsDark] = useState(true);

  return (
    <div className={clsx("flex justify-center h-screen",!isDark?"bg-black":"bg-white")}>
      <div className="w-full max-w-4xl items-center justify-center">

     <Router>
     <Header isDark={isDark} setIsDark={setIsDark}  />

 <Routes>
<Route path="/:username" element ={<UserPage />} />
<Route path="/:username/post/:pid" element ={<PostPage />} />
 </Routes>
     </Router>
      </div>
    </div>
   
  )
}

export default App
