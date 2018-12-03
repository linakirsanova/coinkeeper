import { connect } from 'react-redux';
import Component from '../components/TransferHistoryModal';
import * as actionCreators from '../actions';

const mapStateToProps = state => {
  const props = {
    transfers: state.elements.transfers,
    showHistory: state.showTransferHistory,
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;