import React from 'react'

const TreeListItem = ({name, onClick, hasChildren, isExpanded}) => {

    const handleClick = (e) => {
        e.stopPropagation(); 
        onClick();
      }


  return (
        <li onClick={handleClick} className='text-left'>
            <span className='text-md'> 
                    {hasChildren && <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                className="h-4 w-4 inline-block">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d= {isExpanded ? "m19.5 8.25-7.5 7.5-7.5-7.5" : "m8.25 4.5 7.5 7.5-7.5 7.5"} />                                    
                            </svg> }
                           
                    
                    {name} 
            </span>
      </li> 
  )
}

export default TreeListItem