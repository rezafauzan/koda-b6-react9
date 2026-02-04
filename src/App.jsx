import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Form from "/src/pages/Form"
import Results from "/src/pages/Results"
import { createRoot } from "react-dom/client"

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Form />
      },
      {
        path: '/results',
        element: <Results />
      }
    ]
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
