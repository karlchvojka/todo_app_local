// NextJS Client Declaration
"use client"

// NextJS Component imports
import Image from 'next/image'

// MUI Imports
import { 
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography
} from '@mui/material'
import {
  createTheme,
  ThemeProvider
} from '@mui/material/styles'

// Theme Config
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
    <main className="main">
      <AppBar position="absolute" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
    </main>
    </ThemeProvider>
  )
}
