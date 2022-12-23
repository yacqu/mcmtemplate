
import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import './SideBarItem.scss';

export function SideBarItem(props) {
  // React will ignore custom boolean attributes, therefore we pass a string
  // we use this attribute in our SCSS for styling
  const highlight = props.highlight ? 'highlight-item' : null;
  return (
      <Menu.Item className={['sidebar-item', highlight].join(' ')}>
        <div className='sidebar-item-alignment-container'>
            <a className='sidebar-item-hyperlink' href={props.link} >
                <span>
                    {props.label}
                    
                </span>
            </a>
            
        </div>
      </Menu.Item>
  );
}