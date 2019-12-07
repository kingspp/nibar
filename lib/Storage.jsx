import styles from "./styles.jsx";

const render = ({ output }) => {
	try {  
		if (typeof output === "undefined") return null;
  return (  

    <div style={output.free < 50 ? { color: styles.colors.red } : null}>
    <link rel="stylesheet" type="text/css" href="/nibar/assets/fa.css"/>
      <span>D{parseInt(output.used/output.total*100)}%</span>
    </div>
  );
  }
  	catch(error) {
    	return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
  
};

export default render;
