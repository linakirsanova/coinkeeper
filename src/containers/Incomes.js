import { connect } from 'react-redux';
import Component from '../components/Incomes';
import * as actionCreators from '../actions';

const mapStateToProps = state => {
  const props = {
    incomes: state.elements.incomes
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;