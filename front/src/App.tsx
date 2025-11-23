import Routes from './routes'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css'
const App = () => {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
      <Routes />
    </>
  )
}

export default App
