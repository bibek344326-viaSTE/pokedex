import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonCard({ name, url, onClick }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  if (!data) return <div style={cardStyle}>Loading...</div>;

  return (
    <div
      style={cardStyle}
      className="pokemon-card"
      onClick={() => onClick(url)} // ✅ Use this for modal triggering
    >
      <img
        src={data.sprites.front_default}
        alt={data.name}
        style={{
          width: "96px",
          height: "96px",
          marginBottom: "0.5rem"
        }}
      />
      <h3 style={{
        textTransform: "capitalize",
        fontSize: "1.1rem",
        color: "#333",
        margin: 0
      }}>
        {data.name}
      </h3>
    </div>
  );
}


// Styling object
const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "1rem",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  textDecoration: "none",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  color: "#000",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer"
};
