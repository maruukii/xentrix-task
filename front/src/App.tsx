import Routes from './routes'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css'
const App = () => {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      <Routes />
    </>
  )
}

export default App
