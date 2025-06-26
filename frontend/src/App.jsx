import { useState } from 'react'
import {ClerkProviderWithRoutes} from "./auth/ClerkProviderWithRoutes.jsx"
import {Routes, Route} from "react-router-dom"
import {Layout} from "./layout/Layout.jsx"
import {HistoryPanel} from "./history/HistoryPanel.jsx"
import {ChallengeGenerator} from "./challenge/ChallengeGenerator.jsx"
import {AuthenticationPage} from "./auth/AuthenticationPage.jsx"
import './App.css'

function App() {
    return <ClerkProviderWithRoutes>
        <Routes>

        </Routes>
    </ClerkProviderWithRoutes>
}

export default App
