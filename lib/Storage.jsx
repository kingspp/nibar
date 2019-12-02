import styles from "./styles.jsx";

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (  

    <div style={output.free < 50 ? { color: styles.colors.red } : null}>
    <link rel="stylesheet" type="text/css" href="/nibar/assets/fa.css"/>
      <span>D{parseInt(output.used/output.total*100)}%</span>
    </div>
  );
};

export default render;
