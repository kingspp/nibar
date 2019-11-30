import DateTime from "./lib/DateTime.jsx";
import Battery from "./lib/Battery.jsx";
import Cpu from "./lib/Cpu.jsx";
import Wifi from "./lib/Wifi.jsx";
import Dnd from "./lib/Dnd.jsx";
import Netstats from "./lib/Netstats.jsx";
import Storage from "./lib/Storage.jsx";
import Memory from "./lib/Memory.jsx";
import UPTime from "./lib/UPTime.jsx";
import Mute from "./lib/Mute.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";


const style = {
  display: "grid",
  padding: "0 12px",
  gridAutoFlow: "column",
  gridGap: "16px",
  position: "fixed",
  overflow: "hidden",
  right: "0px",
  bottom: "0px",
  color: styles.colors.dim,
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  lineHeight: styles.lineHeight,
  fontWeight: styles.fontWeight
};

export const refreshFrequency = 10000;

export const command = "./nibar/scripts/stats.sh";

export const render = ({ output }) => {
  const data = parse(output);
  if (typeof data === "undefined") {
    return (
      <div style={style}>
        <Error msg="Initializing . . ." side="right" />
      </div>
    );
  }
  return (  
    <div style={style}>                
      <UPTime output={data.uptime} />
      <Cpu output={data.cpu} />
      <Memory output={data.memory} />
      <Storage output={data.storage} />
      <Netstats output={data.netstats} />
      <Wifi output={data.wifi} />      
      <Battery output={data.battery} />
      <DateTime output={data.datetime} />
      <Dnd output={data.dnd} />
      <Mute output={data.mute} />
    </div>
  );
};



export default null;
