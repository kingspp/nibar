import styles from "./styles.jsx";

const render = ({ output }) => {
	try {  
	 let usage=parseInt(output.loadAverage/output.cores*100);
  if (typeof output === "undefined") return null;
  return (
    <div style={usage > 30 ? { color: styles.colors.red } : null}>
      <span>C{usage}%,</span>
    </div>
  );	
  }
  	catch(error) {
      console.log(error);
    	return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
   
};

export default render;
