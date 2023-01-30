import PropTypes from 'prop-types';
import { ButtonStyles, Container } from './ButtonStyles';

export const Button = ({ onClick }) => {
  return (
    <Container>
      <ButtonStyles type="button" onClick={onClick}>
        Load More
      </ButtonStyles>
    </Container>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
