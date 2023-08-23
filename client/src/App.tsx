import "./App.css";
import AddPhoto from "./components/AddPhoto";
import Button from "./components/Button";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import SearchIcon from "@mui/icons-material/Search";
import DeletePhoto from "./components/deletePhoto";

function App() {
  return (
    <div className="app">
      {/* <Button
        bgColor={"#3DB46D"}
        color={"white"}
        text={"Pick me"}
        padding={".6rem"}
      /> */}
      {/* <TextInput
        borderColor={"#BDBDBD"}
        icon={<SearchIcon />}
        placeholder={"Search by name"}
        labelText={"Label"}
        width
      />

      <TextInput
        borderColor={"#BDBDBD"}
        icon={<SearchIcon />}
        placeholder={"Search by name"}
        labelText={"Photo url"}
        width
      /> */}
      <Header />
      <Main />
      <DeletePhoto/>
      {/* <AddPhoto /> */}
    </div>
  );
}

export default App;
