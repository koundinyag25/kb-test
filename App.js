import { useEffect, useState } from 'react';
import './App.css';
import { PanelItem } from './components/PanelItem';

const ENDPOINT = 'https://api.npoint.io/a772fce7e400c8816672';


const formatData = (data) => {
  let map = {};
  data.forEach(item => {
    if(!map[item.id]) {
      map[item.id] = { isRoot: !item.parentId , childItems : [], ...item }
    } 
    if(map[item.parentId]) {
      map[item.parentId] = { 
        ...map[item.parentId], 
        childItems :[...map[item.parentId]?.childItems, item], 
      };
    } 
  })
  return map;
}

const fetchItems = () => fetch(ENDPOINT).then(res => res.json()).catch(error => error);

function App() {
  const [items,  setItems] = useState();

  useEffect(() => {
    (async () => {
      const {data} = await fetchItems();
      setItems(formatData(data));
    })()
  }, []);

  return (
    <div className='container'>
      {items && Object.values(items).map(item => item.isRoot ? <PanelItem item={item}/> : null)}
    </div>
  );
}

export default App;
