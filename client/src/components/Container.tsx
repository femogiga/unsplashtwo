// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

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
  const [getId, setGetId] = useState(null);
  // const [deleteState, setDeleteState] = useState(false)
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    // console.log('picDarta=>', picLabel)
    console.log('picDarta=>', postData);
    console.log('textInput=>', searchInput);
  }, [deleteVisible, picLabel, picSource, postData, getId, searchInput]);

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
    setModalVisible(false);
    setTimeout(() => window.location.reload(), 500);
    //  setTimeout(() => window.location.reload(), 900);
  };

  return (
    <div>
      <Header
        onClick={(e) => handleAddButton(e)}
        onChange={(e) => setSearchInput(e.target.value)}
        searchInput={searchInput}
      />
      <Main
        onDeleteVisible={(e) => onDeleteVisible(e)}
        setGetId={setGetId}
        searchInput={searchInput}
      />
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
        <DeletePhoto onClick={handleCancelButton} getId={getId} />
      )}
    </div>
  );
};

export default Container;
