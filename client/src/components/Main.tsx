import { useEffect, useState } from 'react';
import Card from './Card';
import dataService from '../utility/dataService';
import { InputLabel } from '@mui/material';

const Main = ({ onDeleteVisible, setGetId, searchInput }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dataService.get('/posts');
        const response = await result.data;
        setData(response);
        return response;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className='main flex sp-btw'>
      <div className='main flex  row-gap-2 wrap col-gap-2 sp-btw'>
        {data
          .filter((item) => searchInput === '' || item.label === searchInput)
          .map((item) => (
            <Card
              key={item.id}
              // variant={item.id % 2 === 0 ? 'bigCard' : 'smallCard'}
              label={item.label}
              variant={'bigCard'}
              src={item.content}
              onClick={(e) => onDeleteVisible(item.id)}
              // onDelete={() =>  handleDelete(item.id)}//
            />
          ))}
      </div>
    </section>
  );
};

export default Main;
