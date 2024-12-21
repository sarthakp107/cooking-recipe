import { createContext, useReducer } from "react";


// Create context
export const ThemeContext = createContext(); 

const themeReducer = () => {

}

// Create ThemeProvider component
export function ThemeProvider({ children }) { //children is the component that we surround it in index.js: in this case::: App
  
  const[state , dispatch] = useReducer(themeReducer,{
    color : "blue"
  });

  const changeColor = (color) => {
    dispatch({type : 'CHANGE_COLOR' , payload: color}) //type of state change , payload: data base the state to
  }


  return (
    <ThemeContext.Provider value={{ color: 'blue' }}>
      {children}
    </ThemeContext.Provider>
  );
}
