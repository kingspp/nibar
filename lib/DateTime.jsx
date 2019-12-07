import styles from "./styles.jsx";


const render = ({ output }) => {
	try {  
		if (typeof output === "undefined") return null;
  return (
    <div>
      {output.date}
      &nbsp;
      {output.time}
    </div>
  );
  }
  	catch(error) {
    	return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
  
};

export default render;
