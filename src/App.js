import {useState} from 'react'

import Home from './pages/Home'
import Header from './components/Header'

import { ThemeProvider} from 'styled-components'
import GlobalStyle from './styles/global'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {

  const curretTheme = localStorage.getItem('theme') === 'light' ? light : dark
  
  const [theme, setTheme] = useState(curretTheme)
  
  function toggleTheme(){
    setTheme(theme.title === 'light' ? dark : light)
    localStorage.setItem('theme',theme.title === 'light' ? 'dark' : 'light')
  }
  
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <Header toggleTheme={ toggleTheme } />
          <Home />
        </div>

      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
