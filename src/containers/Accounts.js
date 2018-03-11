import { connect } from 'react-redux';
import Component from '../components/Accounts';
import * as actionCreators from '../actions';

const mapStateToProps = state => {
  console.log(state);
  const props = {
    accounts: state.elements.accounts
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;