import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";

function App() {
  const [user, setUser] = React.useState(null);
  console.log(user)
  return (
    <div className="app">
      {!user ? (
        <Login user={setUser} />
        
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed user={user} />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
