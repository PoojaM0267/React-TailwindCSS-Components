import React from 'react';
import Tree from './Tree';
import { treeData } from '../../constants';

const TreeView = () => {
  return (
    <div>
        <h1 className='border-b-8 '>React Tree View (click to expand)</h1>
        <Tree treeData={treeData} />
    </div>
  )
}

export default TreeView