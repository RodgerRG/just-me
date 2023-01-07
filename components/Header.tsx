import React, { ComponentProps } from 'react';

export interface HeaderProps extends ComponentProps<'header'> {}

const Header = ({ children }: HeaderProps): JSX.Element => {
    return (
        <header className='flex items-center space-x-4 shadow-md flex-row bg-white text-black'>
            {children}
        </header>
    );
};

export { Header };
