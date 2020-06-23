import React from 'react';

import { ButtonProps } from './__types';
import * as styled from './__styles';

export const Button: React.FC<ButtonProps> = ({
    link,
    size,
    type,
    children,
    width,
    className,
}) => {
    return (
        <styled.Button
            to={link ? link.to : ''}
            size={size}
            type={type}
            width={width ?? 'auto'}
            className={className}
        >
            {children}
        </styled.Button>
    );
};