import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// react don't understand this
const CustomElement = {
    type: 'a',
    props: {
        href:"https://google.com",
        target: '_blank'
    },
    children: "Clicke me to visit google"
}

function MyApp() {
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

// in vite this name will be start with capital letter
const AnotherElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>
)

// react element
const ReactElement = React.createElement(
    'a',
    {href:'https://google.com',target:"_blank"},
    'Click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    // <MyApp />
    // AnotherElement
    // CustomElement
    // ReactElement
)
