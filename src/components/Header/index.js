import { ThemeContext } from 'styled-components'
import {useState, useEffect, useContext} from 'react'
import Switch from 'react-switch'
import {Head, Logo, SwithDiv} from './styles'


function App({ toggleTheme }) {
  const { title } = useContext(ThemeContext)
  const [checkedSwitch, setCheckedSwitch] = useState(true)


  useEffect(()=>{
    

    let _temp = title

    if(_temp == undefined) return;
    setCheckedSwitch(_temp === "light")

    
},[checkedSwitch])
  
  return (

      <Head className="header">
        <Logo className="logo">
          <a href="/">Theme Switcher</a>
        </Logo>

        <SwithDiv>
            <Switch 
              onChange={ toggleTheme } 
              checked={title === 'light'} 
              checkedIcon={false}
              uncheckedIcon={false} 
              height={10}
              width={40}
              handleDiameter={20}
              offColor="#000"
              onColor= "#f5f5f5"
            />
        </SwithDiv>

      </Head>

  );
}

export default App;