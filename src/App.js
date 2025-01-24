import React from 'react';
import {Main} from './Main'

// const Main = lazy(() => import('./Main'));

function App() {
  return (
    
    <div className="App">
        {/* <h1>News-App</h1> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Main/>
      {/* </Suspense> */}
     
    </div> 
  );
}

export default App;

