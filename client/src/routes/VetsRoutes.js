import React  from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from '../utils/PrivateRoute'

// --- DASHBOARD ---
import Dashboard from '../components/app/pages/dashboard/Dashboard'

// --- CLIENTS ---
import ClientsIndividual from '../components/app/pages/clients-individual/ClientsIndividual'
import Clients from '../components/app/pages/clients/Clients'

import Business from '../components/app/pages/business/Business'
import Social from '../components/app/pages/business/social/Social'

// --- CALENDAR ---
import Calendar from '../components/app/pages/calendar/Calendar'

// ---- TIMELINE ---
import Timeline from '../components/app/pages/timeline/Timeline'

// ----- NOT FOUND ---
import NotFound from '../components/app/pages/not-found/NotFound'

// --- UPCOMING ---
import Upcoming from '../components/app/pages/upcoming/Upcoming'

//  --- SETTINGS --
import Settings from '../components/app/pages/me/settings/Settings'

//  --- LEARN -----
import Learn from '../components/landing/pages/learn/main/Learn'

//  --- CASES ----
import Cases from '../components/app/pages/cases/Cases'

// --- REPORTS ----
import CreateReport from '../components/app/pages/reports/create/CreateReport'


// Learn - ADD
import AddStoreTutorial from '../components/landing/pages/learn/tutorials/add/Store'


const VetsRoutes = () => {

    return (
        <Switch>
            {/* ------------------ SWITCH ----- */}
            <PrivateRoute path="/me/settings" exact component={Settings} />

            {/*  LEARN ----- */}
            <PrivateRoute path="/learn" exact component={Learn} />

            {/* ---------------- TODO: ---- */}
            <PrivateRoute
                path="/learn/tutorial/add/add-new-stores"
                exact
                component={AddStoreTutorial}
            />

            {/* ----- DASHBOARD -------- */}
            <PrivateRoute exact path="/vets/dashboard" component={Dashboard} />

            {/* ----- CASES -------- */}
            <PrivateRoute exact path="/vets/cases" component={Cases} />

            {/* ------- CLIENTS ------ */}
            <PrivateRoute exact path="/vets/clients" component={Clients} />
            <PrivateRoute
                exact
                path="/vets/clients/individual/owner/:id"
                component={ClientsIndividual}
            />

            {/* TODO: change the below component and connect to real pet profile*/}
            <PrivateRoute
                exact
                path="/vets/clients/individual/owner/:id/pet/:id"
                component={ClientsIndividual}
            />

            {/* -------- BOOKINGS ---- */}
            <PrivateRoute exact path="/vets/upcoming" component={Upcoming} />

            {/* -- CALENDAR ----- */}
            <PrivateRoute exact path="/vets/calendar" component={Calendar} />

            {/* --- TIMELINE ----- */}
            <PrivateRoute exact path="/vets/timeline" component={Timeline} />

            {/* --- BUSINESS --------- */}
            <PrivateRoute exact path="/vets/business" component={Business} />

            <PrivateRoute exact path="/vets/store/social" component={Social} />

            {/* --- INSTA -- */}
            <PrivateRoute path="/vets/insta" component={Social} />

            {/* --- REPORTS  */}
            <PrivateRoute
                exact
                path="/report/new/:timestamp/:userId/:randomString"
                component={CreateReport}
            />

            {/*  NOT FOUND - */}
            <Route component={NotFound} />
        </Switch>
    )
}

export default VetsRoutes
