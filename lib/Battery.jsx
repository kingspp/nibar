import styles from "./styles.jsx";

const render = ({ output }) => {
  let charging = output.charging;
  let percentage = output.percentage;
  let remainingTime = output.remaining;

  return (
    <div>
    <div
    style={
      percentage < 20 && charging == "false"
      ? { color: styles.colors.red }
      : charging=="true"?{ color: styles.colors.green }:null
    }
    ><span>{charging==='true' ? "􀋨" : "B"} {percentage}%, {remainingTime}</span>        
    </div>
    </div>
    );
};

export default render;

