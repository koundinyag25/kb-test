import React, { useState } from 'react';

export const PanelItem = ({ item }) => {
    console.log({ itemChilds: item.childItems});
    const [collapse, setCollapse] = useState(false);
    if(!item) return null;
  
    return (
      <>
        <span>
         {item?.childItems?.length > 0 && <button onClick={() => setCollapse(!collapse)}>{collapse ? '+': '-'}</button>}
          {item.name}
        </span>
        <div className='left'>
          {!collapse && item.childItems && item?.childItems.length > 0 ? item?.childItems.map(child => <PanelItem item={child} />) : null}
        </div>
      </>
    )
}