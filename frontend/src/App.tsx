import React from 'react';
import Home from "./pages/Home";

import RoutersContext from "./context/RoutersContext";

function App() {
    const routersContext = React.useContext(RoutersContext);

    return (
        <>
            <Home id={routersContext.Home}/>
        </>
    );
}

export default App;
