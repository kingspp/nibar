import styles from "./styles.jsx";
const render = ({ output }) => {
	try {  
		if (typeof output === "undefined") return null;
  const status = output.status;
  const ssid = output.ssid;
  if (status === "inactive") return <div>Wi-Fi off</div>;
  return <div>􀙇 {output.ssid}</div>;
  }
  	catch(error) {
    	return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
  
};

export default render;
