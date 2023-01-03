import ReactDOM from 'react-dom/client';

// import css file. This css is automitacally apllied to the 
import './index.css';

//this is import if default export, and it can be imoprted using any name
import App from './App'; 

// non default export takes same name as the export name
import {MyName} from './App';

//
const root = ReactDOM.createRoot(document.getElementById('root'));

// When any component is no longer needed then we used UNMOUNT to remove that component.
root.unmount(<MyName />);

//  
root.render(<App/>);