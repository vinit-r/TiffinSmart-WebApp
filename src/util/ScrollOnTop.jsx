import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const ScrollOnTop = () => {
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return null;
};

export default ScrollOnTop;
