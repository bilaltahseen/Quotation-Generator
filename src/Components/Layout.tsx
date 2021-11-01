import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container style={{ padding: '30px' }} fluid>
        {children}
      </Container>
    </>
  );
};

export default Layout;
