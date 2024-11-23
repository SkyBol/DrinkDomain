import { ActiveUserContextProvider } from "./core/modules/user/contexts/ActiveUserContext"
import Router from "./core/modules/router/components/pages/Router"
import SearchAppBar from "./core/modules/Navbar/Navbar.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ActiveUserContextProvider>
        <SearchAppBar/>
        <Router />
      </ActiveUserContextProvider>
    </I18nextProvider>
  )
}

export default App;
