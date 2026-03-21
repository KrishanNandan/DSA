import { useState, useEffect } from "react";

const TrafficLight = () => {
  const [light, setLight] = useState({ color: "red", time: 5000 });
  useEffect(() => {
    const timer = setTimeout(() => {
      setLight((prev) => {
        if (prev.color === "red") {
          return { color: "yellow", time: 2000 };
        }
        if (prev.color === "yellow") {
          return { color: "green", time: 10000 };
        }
        if (prev.color === "green") {
          return { color: "red", time: 10000 };
        }
        return prev;
      });
    }, light?.time);
    return () => {
      clearTimeout(timer);
    };
  }, [light.color]);
  return (
    <p style={{ backgroundColor: light.color }}>
      Hello! this is data component
    </p>
  );
};

export default TrafficLight;
