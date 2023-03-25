import "./App.css";
import BodyContainer from "./components/BodyContainer";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <BodyContainer />,
    children: [
      { path: "/", element: <MainContainer /> },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
