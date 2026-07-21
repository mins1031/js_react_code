import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// document.getElementById('root') 
// index.html에서 id = "root"인 값을 불러오는 코드

// createRoot()
// 리액트는 해당 값을 리액트의 root로 설정한다고함.

// .render()
// root를 랜더링하는 메서드

{/* <StrictMode>
    <App />
  </StrictMode>, */}
// <App />이란걸 랜더링 하겠다. 
// 그럼 App 은 뭐냐? src 내부의 App.jsx 파일이라고함.
