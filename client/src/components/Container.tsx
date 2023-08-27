import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import AddPhoto from './AddPhoto';
import DeletePhoto from './DeletePhoto';
import dataService from '../utility/dataService';

const Container = () => {
  const [active, setActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [picLabel, setPicLabel] = useState<string>('');
  const [picSource, setPicSource] = useState<string>('');
  const [postData, setPostData] = useState({});
  const[getId, setGetId] = useState(null)
  // const [deleteState, setDeleteState] = useState(false)

  useEffect(() => {
    // console.log('picDarta=>', picLabel)

    console.log('picDarta=>', postData);
  }, [deleteVisible, picLabel, picSource, postData,getId]);

  const handleLabelChange = (e) => {
    setPicLabel(e.target.value);
  };

  const handleSourceChange = (e) => {
    setPicSource(e.target.value);
  };
  //
  const handleAddButton = (e) => {
    e.preventDefault();

    setModalVisible(true);
  };

  const handleCancelButton = (e) => {
    e.preventDefault();

    setModalVisible(false);
    setDeleteVisible(false);
  };

  // const handleDeleteButton = () => {
  //   setDeleteVisible(true);
  // };

  const onDeleteVisible = (e) => {
    setGetId(e);
    setDeleteVisible(true);
    console.log('visible', deleteVisible);
  };

  const handleCreate = (e) => {
    e.preventDefault();

    const dataToSend = { label: picLabel, content: picSource };

    if (dataToSend.content === '' || dataToSend.label === '') {
      return;
    } else {
      dataService
        .create('/posts', dataToSend)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    }
    setPostData({});
  };


  return (
    <div>
      <Header onClick={(e) => handleAddButton(e)} />
      <Main onDeleteVisible={(e)=>onDeleteVisible(e)} setGetId = {setGetId} />
      {modalVisible && (
        <AddPhoto
          onModalVisible={handleCancelButton}
          onCreate={handleCreate}
          onSourceChange={handleSourceChange}
          onLabelChange={handleLabelChange}
          picLabel={picLabel}
          picSource={picSource}
        />
      )}
      {deleteVisible && (
        <DeletePhoto onClick={handleCancelButton}  getId = {getId} />
      )}
    </div>
  );
};

export default Container;
