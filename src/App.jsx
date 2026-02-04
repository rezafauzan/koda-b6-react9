import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Form from "/src/pages/Form"
import Results from "/src/pages/Results"
import { store } from "/src/redux/store"
import { Provider } from "react-redux"

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
