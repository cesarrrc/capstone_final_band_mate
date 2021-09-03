import { connect } from "react-redux";
import AddInstrumentPage from "../components/AddInstrumentPage";
import { createInstrument } from "../redux/actions/userAction";
import instruments from "../consts/instruments";

function mapStateToProp(state) {
  return {
    instruments
  };
}

const dispatchStateToProps = {
  createInstrument
};

export default connect(mapStateToProp, dispatchStateToProps)(AddInstrumentPage)