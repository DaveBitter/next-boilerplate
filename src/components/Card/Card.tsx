// Libs
import React from 'react';

// Utils

// Resources

// Components

// Interface
interface IProps {
    children: JSX.Element[] | JSX.Element | string | number
}

// Component
const Card = ({ children, ...attributes }: IProps) => {
    return <div className='card' {...attributes}>
        {children}
    </div>;
};

// Props
Card.defaultProps = {};

export default Card;
