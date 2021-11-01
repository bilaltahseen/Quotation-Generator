import { Container, Navbar } from 'react-bootstrap';

interface Props {}

const Header = (props: Props) => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Open Source Project</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Owner
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/bilaltahseen'
            >
              &nbsp;Bilal Tahseen
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
