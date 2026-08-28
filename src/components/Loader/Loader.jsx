import "./Loader.css";
import { useEffect, useState } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const progressTimer = setInterval(() => {
      value += 2;
      setProgress(value);

      if (value >= 100) {
        clearInterval(progressTimer);

        setFade(true);

        setTimeout(() => {
          setLoading(false);
        }, 700);
      }
    }, 40);

    return () => clearInterval(progressTimer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`loader ${fade ? "fade-out" : ""}`}>
      <div className="loader-content">

        <h1 className="logo">N</h1>

        <h2>NITHIN</h2>

        <p>Loading Experience...</p>

        <div className="progress">
          <div
            className="bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <span className="percentage">
          {progress}%
        </span>

      </div>
    </div>
  );
}

export default Loader;