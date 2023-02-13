import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// ---- LANDING ----
import Landing from '../components/landing/pages/platform/LandingVets'

// ---- LEGAL ----
import Privacy from '../components/landing/pages/legal/Privacy'
import Terms from '../components/landing/pages/legal/Terms'
import Attribution from '../components/landing/pages/legal/Attribution'

// ---- ABOUT ----
import About from '../components/landing/pages/about/About'

// ---- EXTERNAL API ROUTES ----
import SetAppointment from '../components/app/pages/external-apis/appointment/ExternalAppointment'

// ---- AUTH ----
import Auth from '../components/landing/pages/sign-in/Auth'

import PublicRoute from '../utils/PublicRoute'
import VetsRoutes from './VetsRoutes'

/* 
    TODO : Connection to the below pages is suspended for this version
    TODO : yet their pages will exist
*/
// import Blog from '../components/landing/blog/Blog'
// import IntroducingMetrics from '../components/landing/blog/posts/announcements/IntroducingMetrics'
// import Learn from '../components/landing/learn/check-auth/LearnCheckAuth'
// import Pricing from '../components/landing/pricing/Pricing'


const AnimatedRoutes = () => {

    let location = useLocation()

  return (
      <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
              {/* -------------------- LANDING ------------- */}
              <PublicRoute exact path="/" component={Landing} />

              {/* ---- SIGN IN --- */}
              <PublicRoute exact path="/sign-in" component={Auth} />

              {/* ---- ABOUT --- */}
              <PublicRoute exact path="/about" component={About} />

              {/* ---- LEGAL ---- */}
              <PublicRoute
                  exact
                  path="/legal/attribution"
                  component={Attribution}
              />
              <PublicRoute exact path="/legal/privacy" component={Privacy} />
              <PublicRoute exact path="/legal/terms" component={Terms} />

              {/* ---- APPOINTMENT ---- */}
              <PublicRoute
                  exact
                  path="/vets/external-api/set-appointment/:businessId"
                  component={SetAppointment}
              />

              <Route component={VetsRoutes} />

                {/* 
                // TODO : Connection to these pages is suspended for this version
                // TODO : yet their pages will exists
                */}
              {/* <PublicRoute exact path="/learn/check-auth" component={Learn} /> */}
              {/* <PublicRoute exact path="/pricing" component={Pricing} /> */}
              {/* Blog */}
              {/* <PublicRoute exact path="/blog" component={Blog} /> */}
              {/* <PublicRoute
                  exact
                  path="/blog/introducing-bodinga-medics"
                  component={IntroducingMetrics}
              /> */}

          </Switch>
      </AnimatePresence>
  )
}

export default AnimatedRoutes