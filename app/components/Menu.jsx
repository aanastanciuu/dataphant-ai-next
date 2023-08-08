"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import "./style/menu.scss";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const highlightLink = function () {
    setIsActive(true);
  };

  return (
    <div className="menu-side">
      <ul>
        <li onClick={highlightLink}>
          <Link href="/">Ask Questions</Link>
        </li>
        <li onClick={highlightLink}>
          <Link href="/documents">Manage Documents</Link>
        </li>
        <li onClick={highlightLink}>
          <Link href="/info">Information Hub</Link>
        </li>
        <li onClick={highlightLink}>
          <Link href="/login">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
