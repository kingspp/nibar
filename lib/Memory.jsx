import styles from "./styles.jsx";

const render = ({ output }) => {
		try {  
		let usage=parseInt(output.used/output.total*100);
  if (typeof output === "undefined") return null;
  return (
    <div style={usage > 70 ? { color: styles.colors.red } : null}>
      <span >R{usage}%,</span>
    </div>
  );
  }
  	catch(error) {
    	return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
  
};

export default render;
