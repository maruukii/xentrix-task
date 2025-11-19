import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { BrowserRouter } from 'react-router-dom'
// import "./i18n";
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { queryClient, persister } from './lib/reactQuery.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
          <App />
        </PersistQueryClientProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
