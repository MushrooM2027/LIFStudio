import { Nav, Navbar } from 'react-bootstrap';
import './SideBar.css';
import logo from '../assets/Lif.svg';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <Nav className="sidebar flex-row">
      <img src={logo} alt="Lif Logo" className="logo" />
      <p className="sidebar-title">The IDE with all the features you need, having a consistent look, feel and operation across platforms.</p>
      <Nav className="sidebar-links">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as="a" href="/installer/LIFStudioInstaller.msi" download="LIFStudioInstaller.msi">
          Download LifStudio
        </Nav.Link>
        <Nav.Link as="a" href="/installer/LIFStudio.jar" download="LIFCompiler.jar">
          Download jar file
        </Nav.Link>
        <Nav.Link as={Link} to="/LifDocumentation">Lif documentation</Nav.Link>
        <Nav.Link href="#">FAQs</Nav.Link>
      </Nav>
    </Nav>

  );
};

export default Sidebar;
