import { useEffect, useState } from "react";

function QuoteBox() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => setQuote(data.content))
      .catch(() => setQuote("Build first. Perfect later."));
  }, []);

  return (
    <div className="
      mt-10 
      p-5 
      bg-blue-50 
      rounded-xl 
      text-center
    ">
      <p className="italic text-gray-700">
        “{quote}”
      </p>
    </div>
  );
}

export default QuoteBox;
