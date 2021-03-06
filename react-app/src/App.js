import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import { restoreUser } from "./store/session";
import CharacterDashboard from "./components/characterDashboard";
import NewCharacterForm from "./components/newCharacter";
import CharacterView from "./components/characterView";
import SpellView from "./components/spellView";
import { useDispatch } from "react-redux";

function App() {
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(restoreUser());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <div className="whole_page">
        <NavBar />
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/users/:userId" exact={true}>
            <User />
          </ProtectedRoute>
          <ProtectedRoute path="/" exact={true}>
            <h1>DnD Spell Tracker</h1>
          </ProtectedRoute>
          <ProtectedRoute path="/characters" exact={true}>
            <CharacterDashboard />
          </ProtectedRoute>
          <ProtectedRoute path="/characters/new" exact={true}>
            <NewCharacterForm />
          </ProtectedRoute>
          <ProtectedRoute path="/characters/:characterId" exact={true}>
            <CharacterView />
          </ProtectedRoute>
          <ProtectedRoute path="/spells/:spellId" exact={true}>
            <SpellView></SpellView>
          </ProtectedRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
