import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  return (
    <>
      <Header />
      {!isAuthorized && <Auth />}
      {isAuthorized && <UserProfile />}

      <Counter />
    </>
  );
}

export default App;
