import { ActiveUserContextProvider } from "./core/modules/user/contexts/ActiveUserContext"
import Router from "./core/modules/router/components/pages/Router"

function App() {
  return (
    <ActiveUserContextProvider>
      <Router />
    </ActiveUserContextProvider>
  )
}

export default App
