import styles from "./styles.jsx";

const speed = type => {
  if (type < 1000) {
    return { val: type.toString().padStart(3, "0"), unit: "kb/s" };
  } else if (type > 1000 && type < 10000) {
    return {
      val: parseFloat(Math.round((type / 1000) * 100) / 100).toFixed(1),
      unit: "mb/s"
    };
  } else {
    return {
      val: Math.round(type / 1000)
        .toString()
        .padStart(3, "0"),
      unit: "mb/s"
    };
  }
};

export const updateState = event => {
  const data = event.output.split("#");
  const dwl = speed(Math.round(data[0]));
  const upl = speed(Math.round(data[1]));

  return {
    dwl: `Dwl: ${dwl.val} ${dwl.unit}`,
    upl: `Upl: ${upl.val} ${upl.unit}`
  };
};

const render = ({ output }) => {
  try {  
    const data = output.split("#");
  const dwl = (speed(Math.round(data[0])));
  const upl = (speed(Math.round(data[1])));
  if (typeof output === "undefined") return null;
  return (
    <div style={{display:"block"}}>
      <span style={upl.unit === "mb/s" ? { color: styles.colors.red } : null}>
        􀄨{upl.val}{upl.unit}&nbsp;
      </span>
      <span style={dwl.unit === "mb/s" ? { color: styles.colors.red } : null}>
        􀄩{dwl.val}{dwl.unit}&nbsp;
      </span>
    </div>
  );
  }
    catch(error) {
      console.log(error);
      return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
  
};

export default render;
