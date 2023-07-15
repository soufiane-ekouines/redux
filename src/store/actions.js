// action 
const increment = (num) =>{
    return{
      type:"incr",
      payload:num?num:1
    }
  }
  
  const dencrement = (num) =>{
    return{
      type:"dec",
      payload:num?num:1
    }
  }

  const login = () =>{
    return{
      type:"login"
    }
  }

  const logout = () =>{
    return{
      type:"logout"
    }
  }

  export {increment,dencrement,login,logout};