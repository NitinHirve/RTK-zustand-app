import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IceCreamView";
import UserView from "./features/user/UserView";


function App() {
  return (
    <div className="App">
      <h1>Hello Redux Toolkitt</h1>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
