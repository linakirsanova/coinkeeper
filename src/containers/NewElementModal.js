import { connect } from 'react-redux';
import Component from '../components/NewElementModal';
import * as actionCreators from '../actions';

const mapStateToProps = state => {
  const props = {
    show: state.showNewElementModal,
    newElement: state.newElement,
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;