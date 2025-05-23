// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SplashScreen    from './components/SplashScreen';
import WelcomeScreen   from './components/WelcomeScreen';
import InfoScreen      from './components/InfoScreen';
import RoleSelection   from './components/RoleSelection';
import Register        from './components/Register';
import Login           from './components/Login';
import Home            from './components/Home';
import Cash          from './components/Cash';
import Receive         from './components/Receive';
import Buy from './components/Buy';
import Swap from './components/Swap';
import Stake from './components/Stake.jsx';
import Send from './components/Send';
import Scan from './components/Scan';
import Shopping      from './components/Shopping';
import Checkout from './components/Checkout';
import Notification  from './components/Notification';
import Profile       from './components/Profile';
import Forum           from './components/Forum';
import Payment         from './components/Payment';
import Help            from './components/Help';
import Settings     from './components/Settings';
import AccountSettings     from './components/settings/AccountSettings';
import ActivitySettings    from './components/settings/ActivitySettings';
import NotificationSettings from './components/settings/NotificationSettings.jsx';
import LanguageSettings    from './components/settings/LanguageSettings';
import PrivacySettings     from './components/settings/PrivacySettings';
import Sell from './components/Sell';
import Chat from './components/Chat';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"               element={<SplashScreen />} />
        <Route path="/welcome"        element={<WelcomeScreen />} />
        <Route path="/info"           element={<InfoScreen />} />
        <Route path="/roles"          element={<RoleSelection />} />
        <Route path="/:role/register" element={<Register />} />
        <Route path="/:role/login"    element={<Login />} />
        <Route path="/home"           element={<Home />} />
        <Route path="/cash"           element={<Cash />} />
        <Route path="/receive"        element={<Receive />} />
        <Route path="/buy"            element={<Buy />} />
        <Route path="/swap"           element={<Swap />} />
        <Route path="/stake"          element={<Stake />} />
        <Route path="/send"           element={<Send />} />
        <Route path="/scan"           element={<Scan />} />
        <Route path="/shop"           element={<Shopping />} />
        <Route path="/checkout"       element={<Checkout />} />
        <Route path="/mail"           element={<Notification />} />
        <Route path="/profile"        element={<Profile />} />
        <Route path="/forum"   element={<Forum />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/help"    element={<Help />} />
        <Route path="/settings"       element={<Settings />} />
        <Route path="/settings/account"         element={<AccountSettings />} />
        <Route path="/settings/activity"        element={<ActivitySettings />} />
        <Route path="/settings/notification"    element={<NotificationSettings />} />
        <Route path="/settings/language"        element={<LanguageSettings />} />
        <Route path="/settings/privacy"         element={<PrivacySettings />} />
        <Route path="/sell"           element={<Sell />} />
        <Route path="/chat/:productId" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
