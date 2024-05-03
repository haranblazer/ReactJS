import { useState, useEffect } from "react";
import "./style.css";

export default function ProgressBarIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [ScrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setData(data);
        setLoading(true);
      }
    } catch (err) {
      console.log(err);
      setErrorMessage(err);
    }
  }

  function handleScrollChange() {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((document.documentElement.scrollTop / height) * 100);
    console.log(ScrollPercentage);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  useEffect(() => {
    fetchData(url);
  }, [url]);
  console.log(data, loading);

  return (
    <div>
      <div className="topContainer">
        <h1>Project 9 : Progress Bar Indicator</h1>
        <div className="progressStaticContainer">
          <div
            className="progressContainer"
            style={{ width: `${ScrollPercentage}%` }}
          >{Math.ceil(ScrollPercentage)}%</div>
        </div>
      </div>
      <div className="dataContainer">
        {data?.products?.map((itm) => (
          <p key={itm.id}>{itm.title}</p>
        ))}
      </div>
    </div>
  );
}
