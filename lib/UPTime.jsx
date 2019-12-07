import styles from "./styles.jsx";

const render = ({ output }) => {
	try {  
		if (typeof output === "undefined") return null;
  return (
    <div style={output > 10 ? { color: styles.colors.red } : null}>
      <span>{output.replace(',','')}</span>
    </div>
  );
  }
  	catch(error) {
    	return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
  
};

export default render;
