import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "../dashboard/Dashboard";
import BillingCycle from "../billingCycle/BillingCycle";
import NotFound from "../notFound/NotFound";

const AppRoutes = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard></Dashboard>}></Route>
                <Route path="/billingCycles" element={<BillingCycle></BillingCycle>}></Route>
            </Routes>
        </BrowserRouter>
            
        
    )
}

export default AppRoutes;