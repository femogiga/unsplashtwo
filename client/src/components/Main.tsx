import { useEffect, useState } from 'react';
import Card from './Card';
import dataService from '../utility/dataService';

const Main = ({ onDeleteVisible }) => {
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
        {/* <Card
          onClick={onDeleteVisible}
          variant={'smallCard'}
          src={smallimage}
        /> */}
        {/* <Card variant={'smallCard'} src={smallimage} />
        <Card variant={'smallCard'} src={smallimage} />
      </div>
      <div className='main flex row-gap-2 flx-col'>
        <Card variant={'bigCard'} src={'http://localhost:9000/arsenal.jpeg'} />
        <Card variant={'bigCard'} src={bigimage} />
      </div>
      <div className='main flex row-gap-2 flx-col'>
        <Card variant={'smallCard'} src={smallimage} />
        <Card variant={'bigCard'} src={bigimage} /> */}
        {data.map((item) => (
          <Card
            key={item.id}
            // variant={item.id % 2 === 0 ? 'bigCard' : 'smallCard'}
            label={item.label}
            variant={'bigCard'}
            src={item.content}
            onClick={onDeleteVisible}

          />
        ))}
      </div>
    </section>
  );
};

export default Main;
