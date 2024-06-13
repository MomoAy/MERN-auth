import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center mt-5'>
        <Col xs={12} md={6} className='card p-5'>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

FormContainer.propTypes = {
  children: PropTypes.element.isRequired
}

export default FormContainer;
