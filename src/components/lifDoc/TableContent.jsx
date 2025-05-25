import { Nav } from 'react-bootstrap';
import logo from '../../assets/Lif.svg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TableContent.css';

const Sidebar = () => {
  return (
    <Nav className="lif-sidebar lif-sidebar-row">
      <img src={logo} alt="Lif Logo" className="lif-sidebar-logo" />
      <Nav className="lif-sidebar-links">
        <Button as={Link} to="/" className="back-button mb-4 btn btn-primary">Back to Home</Button>
        <h4 className="text-muted mb-4">Table of Contents</h4>
        <Nav.Link href="#">Introduction</Nav.Link>
        <Nav.Link href="#">Getting Started</Nav.Link>
        <Nav.Link href="#">DSL Syntax Reference</Nav.Link>
        <Nav.Link href="#">Layout System</Nav.Link>
        <Nav.Link href="#">Properties & Styling</Nav.Link>
        <Nav.Link href="#">Events & Actions</Nav.Link>
        <Nav.Link href="#">Advanced Features</Nav.Link>
        <Nav.Link href="#">FAQs</Nav.Link>
      </Nav>
    </Nav>
  );
};

export default Sidebar;
