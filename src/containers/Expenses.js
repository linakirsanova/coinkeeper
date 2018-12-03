import { connect } from 'react-redux';
import Component from '../components/Expenses';
import * as actionCreators from '../actions';

const mapStateToProps = state => {
  const props = {
    expenses: state.elements.expenses
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;