import React, {useEffect, useRef, useState} from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { StaticImage } from "gatsby-plugin-image"

export default function ThemeToggle() {
    // never thought just switching button styles in sync with the theme would be this hard
    
    const [inversion, setInversion] = useState('dark')

    const themeRef = useRef(null)

    useEffect(() =>  setInversion(getComputedStyle(themeRef.current)['background-color'] === 'rgb(17, 24, 39)' ? true : false), [])

    return (
    <ThemeToggler>
    {({ theme, toggleTheme }) => (                      
        <button ref={themeRef} className="w-7 h-5 md:w-10 md:h-10 bg-primary" onClick={e => {
            if (theme === 'dark') {
                toggleTheme('light')
                setInversion(false)
            } else {
                toggleTheme('dark')
                setInversion(true)
            }
        }}> 
            <div className={inversion ? "invert p-[2px] md:p-2 bg-pink-600 rounded-full drop-shadow" : 'p-[2px] md:p-2 bg-gray-100 rounded-full drop-shadow'}>
                <StaticImage src="../images/sun-set.svg" alt="theme toggle"/>
            </div>
        </button>                     
        )}
    </ThemeToggler>
    )
}