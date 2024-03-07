import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css'
import { ResultContexProvider } from './components/Result';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ResultContexProvider>
    <App />
    </ResultContexProvider>

);

