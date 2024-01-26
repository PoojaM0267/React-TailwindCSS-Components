import React from 'react';
import TreeNode from './TreeNode';

const Tree = ({ treeData }) => {
  return (
   <>
    {treeData?.map((node) => ( 
        <TreeNode node = {node} key = {node.key} />
     ))}
   </>
  )
}

export default Tree