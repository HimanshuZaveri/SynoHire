import CardGrey from './Components/Card/CardGrey';

import './App.css';

function App() {
  return (
  <CardGrey  title="Card Heading" >

    <p>void will always result into undefined. This is useful as event handlers may change 
      their behavior if a return value is given. With void this will not happen as you are 
      guaranteed to return undefined.
    </p>
    <p>void will always result into undefined. This is useful as event handlers may change 
      their behavior if a return value is given. With void this will not happen as you are 
      guaranteed to return undefined.
    </p>

  </ CardGrey>
  );
}

export default App;
