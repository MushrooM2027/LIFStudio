import { Container } from 'react-bootstrap';
import TableContent from '../../components/lifDoc/TableContent';
import Introduction from '../../components/lifDoc/Introduction';
import GettingStarted from '../../components/lifDoc/GettingStarted';
import FAQsContent from '../../components/FAQ';
import './LifDocPage.css';

const LifDocPage = () => {
  return (
      <Container fluid className="home-contain">
      <div className="home-roww">
        <div className="content-wrap">
          <Introduction />
          <GettingStarted />
          <FAQsContent />
        </div>
        <div className="sidebar-wrap">
          <TableContent />
        </div>
      </div>

    </Container>
  );
};

export default LifDocPage;
