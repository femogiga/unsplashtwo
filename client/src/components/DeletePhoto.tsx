import dataService from '../utility/dataService';
import Button from './Button';
import TextInput from './TextInput';

const DeletePhoto = ({ onClick,getId }) => {
  const addPhotoStyle = {
    width: '38.75rem',
    padding: '1rem',
    boxShadow:
      '0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.2), 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    // marginInline: 'auto',
    zIndex: '3',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50% )',
    backgroundColor: 'white',
    display: 'flex',
    borderRadius: '12px',
  };

   const handleDelete = (getId) => {

     dataService
       .remove(`/posts/${getId}`)
       .then((res) => res.data)
       .catch((error) => console.error(error));
   };
  return (
    <article className='add-photo-modal flx-col gap-1' style={addPhotoStyle}>
      <h2 style={{ marginBlockEnd: '-.8rem' }}>Are you sure ?</h2>

      <TextInput
        borderColor={'#BDBDBD'}
        icon={null}
        placeholder={'password'}
        labelText={'Password'}
        width={'90%'}
        type='password'
      />
      <div className='flex gap-1' style={{ alignSelf: 'flex-end' }}>
        <Button
          bgColor={'white'}
          color={'#BDBDBD'}
          text={'Cancel'}
          padding={'.6rem'}
          onClick={onClick}
        />
        <Button
          bgColor={'#EB5757'}
          color={'white'}
          text={'Delete'}
          padding={'.6rem'}
           onClick={()=>handleDelete(getId)}
        />
      </div>
    </article>
  );
};

export default DeletePhoto;
