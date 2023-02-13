import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import LandingRoutes from "./routes/LandingRoutes";

// ---- STYLE SHEETS ----
import './components/landing/Landing.css'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

// ---- REDUX ----
import store from './store'
import { loadUser } from './redux/actions/auth/auth'

const persistor = persistStore(store)

function App() {
    
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <Router>
                      <LandingRoutes />
              </Router>
          </PersistGate>
      </Provider>
  )
}

export default App;
