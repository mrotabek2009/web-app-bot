import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Numbers from './components/Numbers'
import Comments from './components/Comments'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/numbers',
		element: <Numbers />,
	},
	{
		path: '/comment',
		element: <Comments />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
