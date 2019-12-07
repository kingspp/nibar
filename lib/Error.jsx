const style = {
  color: "#AF5F5F"
};

const render = ({ msg, side }) => {
		try {  
		if (typeof msg === "undefined") return null;
  return <div style={style}>{msg}</div>;
  }
  	catch(error) {
    	return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
  
};

export default render;
