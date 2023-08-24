import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import AddPhoto from "./AddPhoto";
import DeletePhoto from "./DeletePhoto";

const Container = () => {
  const [active, setActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);

  useEffect(() => {}, [deleteVisible]);
  const handleAddButton = (e) => {
    e.preventDefault();

    setModalVisible(true);
  };

  const handleCancelButton = (e) => {
    e.preventDefault();

    setModalVisible(false);
    setDeleteVisible(false);
  };

  const handleDeleteButton = () => {
    setDeleteVisible(true);
  };

  const onDeleteVisible = () => {
    setDeleteVisible(true);
    console.log("visible", deleteVisible);
  };

  return (
    <div>
      <Header onClick={(e) => handleAddButton(e)} />
      <Main onDeleteVisible={onDeleteVisible} />
      {modalVisible && <AddPhoto onModalVisible={handleCancelButton} />}
      {deleteVisible && <DeletePhoto onClick={handleCancelButton} />}
    </div>
  );
};

export default Container;
