import React, { useState } from "react";

export default function Providename({ P_firstName }) {
  const [firstName, setFirstName] = useState(P_firstName || "");
  const [InputName, setInputName] = useState("");

  const handleClick = () => {
    setFirstName(InputName);
  };

  return (
    <div className="m-3 text-center">
      <h3 className="m-2">
        {firstName ? "hello " + firstName : "hello there"}
      </h3>

      {firstName ? (
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.7-mCHPYH98YRH1LMFMdIHAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="This is for your kind and beautiful soul"
        />
      ) : (
        <>
          <p>Provide your name to get something sweet:</p>
          <input
            type="text"
            placeholder="Enter your name"
            name="firstName"
            onChange={(e) => setInputName(e.target.value)}
            className="form-control mt-2"
          />
          <button onClick={handleClick}>send</button>
        </>
      )}
    </div>
  );
}
