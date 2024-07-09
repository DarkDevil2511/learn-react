import ReactDOM from 'react-dom/client'
import AppRouterProvider from './components/providers/app-router-provider/index.tsx';
// import App from './App.tsx'
import './global.css'

import AppProvider from './components/providers/index.tsx'
import '@mantine/core/styles.css'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  //<React.StrictMode>
  <AppProvider>
    <AppRouterProvider />
  </AppProvider>
  // </React.StrictMode>,
)
