// src/components/WidgetNav.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WidgetNav = ({ profileIcon, role, username }) => {
  const nav = useNavigate();
  const state = { state: { role, username } };

  const items = [
    { key: 'home',   icon: '🏠', label: 'Home',  path: '/home' },
    { key: 'wallet', icon: '💳', label: 'Wallet', path: '/cash' },
    { key: 'shop',   icon: '🛒', label: 'Shop',  path: '/shop', isCart: true },
    { key: 'mail',   icon: '✉️', label: 'Notification',  path: '/mail' },
    { key: 'profile',icon: profileIcon, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="widget-nav">
      {items.map((item) => (
        <button
          key={item.key}
          className={`widget-button${item.isCart ? ' cart' : ''}`}
          onClick={() => nav(item.path, state)}
        >
          <span>{item.icon}</span>
          {!item.isCart && <small>{item.label}</small>}
        </button>
      ))}
    </div>
  );
};

export default WidgetNav;
