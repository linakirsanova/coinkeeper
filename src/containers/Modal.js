import { connect } from 'react-redux';
import Component from '../components/Modal';
import * as actionCreators from '../actions';

const mapStateToProps = state => {
  const props = {
    show: state.showModal,
    operation: state.newOperation,
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;