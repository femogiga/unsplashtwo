
import Button from "./Button";
import TextInput from "./TextInput";

const AddPhoto = ({onModalVisible,onCreate,picLabel,picSource,onLabelChange,onSourceChange}) => {


  const addPhotoStyle = {
    width: "38.75rem",
    padding: "1.5rem",
    boxShadow:
      "0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.2), 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.2)",
    position: "absolute",
    // marginInline: 'auto',
    zIndex: "3",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50% )",
    backgroundColor: "white",
    display: "flex",
    borderRadius: "12px",
  };
  return (
     (
      <form className="add-photo-modal flx-col" style={addPhotoStyle}>
        <h2>Add a new photo</h2>
        <TextInput
          borderColor={"#BDBDBD"}
          icon={null}
          placeholder={"Add a label"}
          labelText={"Label"}
          width={"90%"}
          value={picLabel}
          onChange = {onLabelChange}
        />

        <TextInput
          borderColor={"#BDBDBD"}
          icon={null}
          placeholder={"Add a photo url"}
          labelText={"Photo url"}
          width={"90%"}
          value={picSource}
          onChange = {onSourceChange}
        />
        <div className="flex gap-1" style={{ alignSelf: "flex-end" }}>
          <Button
            bgColor={"white"}
            color={"#BDBDBD"}
            text={"Cancel"}
            padding={".6rem"}
            onClick={onModalVisible}
          />
          <Button
            bgColor={"#3DB46D"}
            color={"white"}
            text={"Submit"}
            padding={".6rem"}
            onClick={ onCreate}
          />
        </div>
      </form>
    )
  );
};

export default AddPhoto;
