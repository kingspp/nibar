import styles from "./styles.jsx";

const render = ({ output }) => {	
  if (output == 0) return null;
  return <div><i className="fa fa-bluetooth-b"/></div>;
};

export default render;
