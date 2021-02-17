import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'    // Bu yerga import qilinadigan fayllarimizni yozamiz.

ReactDOM.render(
  <React.StrictMode>
    <App />     {/* import qilingan fayli natijasini COMPONENT qilib yozamiz */}
  </React.StrictMode>,
  document.getElementById('root')   // 'index.html'ning 'body'sidagi 'root' 'id'li 'div'ga 'appendChild' qilib beradi, ya'ni RENDER qilib beradi.
)
