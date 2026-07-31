import React from "react";

const Hotel = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "brown",
          backgroundColor: "black",
          padding: "10px",
          marginBottom: "30px",
        }}
      >
        ABES DA DHABA
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            border: "5px solid white",
            height: "400px",
            width: "400px",
            backgroundColor: "black",
            color: "white",
            padding: "15px",
            boxSizing: "border-box",
          }}
        >
          <h2 style={{ color: "brown" }}>Pizza</h2>

          <img
            src="https://imgs.search.brave.com/c2RId7xBTSRmVDKNU0o12SC1aK4lamHDLLl_W40LBw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/MDMxNjY5MS9waG90/by91bnJlY29nbml6/YWJsZS13b21hbi10/YWtpbmctYS1zbGlj/ZS1vZi1waXp6YS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/LXp0YWlLcV9uQ0RW/dVFQZ21yUjZtSGpj/X1Q4dlVtcW9HMmRL/OEcxXzBTRT0"
            alt=" " height="200" width="200"
          />

          <h2>Pizza</h2>
          <h2>Price - $50</h2>
        </div>

        <div
          style={{
            border: "5px solid white",
            height: "400px",
            width: "400px",
            backgroundColor: "black",
            color: "white",
            padding: "15px",
            boxSizing: "border-box",
          }}
        >
          <h2 style={{ color: "brown" }}>Soft Drinks</h2>

          <img
            src="https://imgs.search.brave.com/SHe8xGJepL_zdFbHWOk71bCKzrBukT0vy3XIdMQUKII/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vY2FuLWRpZXQt/Y29rZS1pcy10YWJs/ZV8xMjM1ODMxLTIw/NDY4OS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA"
            alt="Coca Cola"
            height="200"
            width="200"
          />

          <h2>Coca Cola</h2>
          <h2>Price - $10</h2>
        </div>
      </div>
    </div>
  );
};

export default Hotel;