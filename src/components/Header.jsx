import UserHeader from "./UserHeader"


const Header = ({setIsDark,isDark}) => {
   
  return (
    <div className="flex flex-col items-center justify-center mt-6 mb-12" >
        {
            isDark ? <img
            onClick={()=>setIsDark(!isDark)} 
             className="w-4" src="public/dark-logo.svg" /> :  <img
             onClick={()=>setIsDark(!isDark)} 
             className="w-4" src="public/light-logo.svg" />
        }
        <UserHeader />
    </div>
  )
}

export default Header