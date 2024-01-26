import React from 'react';
import Tree from './Tree';
import { treeData, bomData } from './constants';

const TreeView = () => {
  return (
    <div>
        <h1 className='border-b-8 '>React Tree View (click to expand)</h1>
        <Tree treeData={bomData} />
    </div>
  )
}

export default TreeView