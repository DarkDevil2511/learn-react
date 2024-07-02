import { Outlet } from 'react-router-dom';
import '@mantine/core/styles.css';

import AppBody from './components/app-body';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <AppBody>
      <Outlet />
    </AppBody>
  )
}

export default App
