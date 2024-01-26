import React from 'react'

const TailwindTree = () => {
  return (
    <div>
      <ul>
        <li className="px-2 hover:bg-secondary-100">One</li>
        <li className="px-2 hover:bg-secondary-100">Two</li>
        <li>
            <a
            data-te-collapse-init
            href="#collapseThree"
            role="button"
            aria-expanded="false"
            aria-controls="collapseThree"
            className="flex items-center px-2 hover:bg-secondary-100 focus:text-primary active:text-primary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="h-4 w-4">
                <path
               strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            Three
            </a>
            <ul
            className="!visible hidden"
            id="collapseThree"
            data-te-collapse-item>
            <li className="ml-4 px-2 hover:bg-secondary-100">Second-one</li>
            <li className="ml-4 px-2 hover:bg-secondary-100">Second-two</li>
            <li className="ml-4">
                <a
                data-te-collapse-init
                href="#collapseSecondThree"
                role="button"
                aria-expanded="false"
                aria-controls="collapseSecondThree"
                className="flex items-center px-2 hover:bg-secondary-100 focus:text-primary active:text-primary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="h-4 w-4">
                    <path
                   strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                Second-three
                </a>
                <ul
                className="!visible hidden"
                id="collapseSecondThree"
                data-te-collapse-item>
                <li className="ml-4 px-2">
                    <a
                    data-te-collapse-init
                    href="#collapseThirdOne"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseThirdOne"
                    className="flex items-center px-2 hover:bg-secondary-100 focus:text-primary active:text-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="h-4 w-4">
                        <path
                       strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg
                    >Third-one
                    </a>
                    <ul
                    className="!visible hidden"
                    id="collapseThirdOne"
                    data-te-collapse-item>
                    <li className="ml-4 px-2 hover:bg-secondary-100">
                        Fourth-one
                    </li>
                    <li className="ml-4 px-2 hover:bg-secondary-100">
                        Fourth-two
                    </li>
                    <li className="ml-4 px-2 hover:bg-secondary-100">
                        Fourth-three
                    </li>
                    </ul>
                </li>
                <li className="ml-4 px-2 hover:bg-secondary-100">Third-two</li>
                <li className="ml-4">
                    <a
                    data-te-collapse-init
                    href="#collapseThirdThree"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseThirdThree"
                    className="flex items-center px-2 hover:bg-secondary-100 focus:text-primary active:text-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="h-4 w-4">
                        <path
                       strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg
                    >Third-three
                    </a>
                    <ul
                    className="!visible hidden"
                    id="collapseThirdThree"
                    data-te-collapse-item>
                    <li className="ml-4 px-2 hover:bg-secondary-100">
                        Fourth-one
                    </li>
                    <li className="ml-4 px-2 hover:bg-secondary-100">
                        Fourth-two
                    </li>
                    <li className="ml-4 px-2 hover:bg-secondary-100">
                        Fourth-three
                    </li>
                    </ul>
                </li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
    </div>
  )
}

export default TailwindTree