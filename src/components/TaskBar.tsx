import React from "react";
import {
  HiOutlineHome,
  HiOutlineFolder,
  HiOutlineDocumentText,
  HiOutlineBookmark,
} from "react-icons/hi";
import Zoom from "@mui/material/Zoom";
import { LightTooltip } from "./LightTooltip";

type TaskBarProps = {
  color: string;
};

export const TaskBar: React.FunctionComponent<TaskBarProps> = () => {
  const iconColor = "#52E19F";

  return (
    <div className="flex  bg-white mt-6 h-14 p-2 items-center rounded-full justify-between shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
      <LightTooltip title="Home" placement="bottom" TransitionComponent={Zoom}>
        <div>
          <HiOutlineHome
            size={26}
            color={iconColor}
            className="opacity-70 hover:opacity-100 m-3"
          />
        </div>
      </LightTooltip>
      <LightTooltip title="Projects" placement="bottom" TransitionComponent={Zoom}>
        <div>
        <HiOutlineFolder
          size={26}
          color={iconColor}
          className="opacity-70 hover:opacity-100 m-3"
        />
        </div>
      </LightTooltip>
      <LightTooltip title="Articles" placement="bottom" TransitionComponent={Zoom}>
        <div>
      <HiOutlineDocumentText
        size={26}
        color={iconColor}
        className="opacity-70 hover:opacity-100 m-3"
      />
      </div>
      </LightTooltip>
      <LightTooltip title="Bookmark" placement="bottom" TransitionComponent={Zoom}>
        <div>
      <HiOutlineBookmark
        size={26}
        color={iconColor}
        className="opacity-70 hover:opacity-100 m-3"
      />
      </div>
      </LightTooltip>
    </div>
  );
};
