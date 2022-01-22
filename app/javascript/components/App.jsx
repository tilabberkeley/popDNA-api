// import React from "react";
// import Routes from "../routes/Index";

// export default props => <>{Routes}</>;
import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Home'
import Docs from './Docs'

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route exact path="/docs" component={Docs} />
            </Routes>
        </div>
    )
}

export default App