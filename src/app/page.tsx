"use client"

// CSS Imports
import './globals.css'

// Component Imports
import Header from './components/modules/Header/Header'

// MUI Imports
import { ThemeProvider, createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Page() {
  return (
    <ThemeProvider theme={darkTheme}>
      <main>
        <Header />
      </main>
    </ThemeProvider>
  )
}