import React, { useState } from 'react';

export const PanelItem = ({ item, map }) => {
    const [collapse, setCollapse] = useState(false);
    if(!item) return null;
    const childItems = map[item.id]?.childItems || [];

    return (
      <>
        <span>
         {childItems.length > 0 && <button onClick={() => setCollapse(!collapse)}>{collapse ? '+': '-'}</button>}
          {item.name}
        </span>
        <div className='left'>
          {!collapse && childItems.length > 0 ? childItems.map(child => <PanelItem item={child} map={map}/>) : null}
        </div>
      </>
    )
}