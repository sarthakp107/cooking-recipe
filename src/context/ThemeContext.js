import { createContext, useReducer } from "react";


// Create context
export const ThemeContext = createContext(); 

const themeReducer = (state , aciton) => {
  switch(aciton.type){
    case 'CHANGE_COLOR' :
      return {...state , color : aciton.payload}
    
    case 'CHANGE_MODE' : 
    return { ...state , mode : aciton.payload}

      default: 
      return state
  }
}

// Create ThemeProvider component
export function ThemeProvider({ children }) { //children is the component that we surround it in index.js: in this case::: App
  
  //  useReducer (function , initial state);
  const[state , dispatch] = useReducer(themeReducer,{
    color : "#58249c",
    mode : 'dark'
  });

  const changeColor = (color) => {
    dispatch({type : 'CHANGE_COLOR' , payload: color}) //type of state change , payload: data base the state to
  }

  const changeMode = (mode) => {
    dispatch({type : 'CHANGE_MODE' , payload : mode})
  }


  return (
    <ThemeContext.Provider value={{ ...state , changeColor , changeMode}}>
      {children}
    </ThemeContext.Provider>
  );
}
