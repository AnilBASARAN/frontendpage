

const Header = ({setIsDark,isDark}) => {
   
  return (
    <div className="flex justify-center mt-6 mb-12" >
        {
            isDark ? <img
            onClick={()=>setIsDark(!isDark)} 
             className="w-4" src="public/dark-logo.svg" /> :  <img
             onClick={()=>setIsDark(!isDark)} 
             className="w-4" src="public/light-logo.svg" />
        }
        
    </div>
  )
}

export default Header