import { connect } from 'react-redux';
import Component from '../components/Balance';
import * as actionCreators from '../actions';

const mapStateToProps = state => {
  const props = {
    balance: state.elements.balance
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;