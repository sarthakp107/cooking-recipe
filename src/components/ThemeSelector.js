import { useTheme } from '../hooks/useTheme'
import './ThemeSelector.css'

import React from 'react'
/*
Q. need three buttons that changes the color when user clicks on it

1. create an array of color
2. use changeColor function from the theme cont4ext/ useTheme hook

*/

const themeColors = ['#58249c' , '#249c6b' , '#b70233']

export default function ThemeSelector() {
    const {changeColor} = useTheme();
  return (
    <div className='theme-selector'>
        <div className="theme-buttons">
            {themeColors.map((color) => (
                <div
                    key={color}
                    onClick={ () => {changeColor(color)}}
                    style={{background : color}}
                />
            ))}
        </div>
    </div>
  )
}

