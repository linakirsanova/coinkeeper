import { connect } from 'react-redux';
import Component from '../components/Modal';
import * as actionCreators from '../actions';

const mapStateToProps = state => {
    debugger;
  const props = {
    show: state.showModal
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;