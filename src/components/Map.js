import React from "react";
import MapImage from "../images/Maps@2x.png";
import { Image } from "antd";
const Map = () => {
  return (
    <Image src={MapImage} preview={false} alt="map-image" style={{height:"90vh", width:"48vw"}}/>
    )
    
};
export default Map;
