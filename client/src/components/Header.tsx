import logo from "../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";
import TextInput from "./TextInput";
import { useState } from "react";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";


const Header = ({onClick}) => {


  return (
   <header className="header flow-4">
      <form action="" className="form flex sp-btw col-gap-2">
        <div className="flex gap-2 alg-cent">
          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* <div className="input-cont">
            <SearchIcon />
            <input type="text" placeholder="Search by name" />
          </div> */}
          <TextInput
            borderColor={"#BDBDBD"}
            icon={<SearchIcon />}
            placeholder={"Search by name"}
            labelText={null}
            width

          />
        </div>
        <div>
          <Button onClick={onClick}
            bgColor={"#3DB46D"}
            color={"white"}
            text={"Add a photo"}
            padding={".6rem"}
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
