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
import VPN from "./lib/VPN.jsx";
import Weather from "./lib/Weather.jsx";
import Caffeinate from "./lib/Caffeinate.jsx";
import Bluetooth from "./lib/Bluetooth.jsx";
import DiskStats from "./lib/DiskStats.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";
import { css } from "uebersicht"

const style = ({
  display: "grid",
  padding: "0 5px",
  gridAutoFlow: "column",
  gridGap: "10px",
  position: "fixed",
  overflow: "hidden",
  right: "0px",
  bottom: "0px",
  color: styles.colors.dim,
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  lineHeight: styles.lineHeight,
  fontWeight: styles.fontWeight,
    // "&:hover": {
    //     color: "#FFFFFF"
    // }

    // opacity:0.6
});

export const refreshFrequency = 5000;

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
      <Weather output={data.weather} />
      <UPTime output={data.uptime} />
      <Cpu output={data.cpu} />
      <Memory output={data.memory} />
      <Storage output={data.storage} />
      <DiskStats output={data.diskstats} />
      <Netstats output={data.netstats} />
      <Wifi output={data.wifi} />      
      <Battery output={data.battery} />
      <DateTime output={data.datetime} />
      <Caffeinate output={data.caffeinate} />
      <Bluetooth output={data.bluetooth} />
      <Dnd output={data.dnd} />
      <Mute output={data.mute} />
      <VPN output={data.vpn} />
    </div>
  );
};



export default null;
