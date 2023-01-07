import React, { ComponentProps } from 'react';

export interface HeaderProps extends ComponentProps<'header'> {}

const Header = ({ children }: HeaderProps): JSX.Element => {
    return <header className=''>{children}</header>;
};

export { Header };
