import React, {useState} from 'react';
import Tree from './Tree';
import TreeListItem from './TreeListItem';

const TreeNode = ({node}) => {

    const { children, name } = node;
    const [showChildren, setShowChildren] = useState(false);
    
    //const [showSubChildren, setShowSubChildren] = useState(false);

    const handleClick = () => {
        //e.preventDefault();
        setShowChildren(!showChildren);
      };

      

  return (
    <ul onClick={handleClick}  className='ml-12 px-2 cursor-pointer'>      
          <TreeListItem name={name} onClick={handleClick} hasChildren={children.length > 0 ? true : false}  isExpanded={showChildren}/>
          {showChildren && <Tree treeData={children} />}
    </ul>
  )
}

export default TreeNode