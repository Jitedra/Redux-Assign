import { connect } from 'react-redux';

import { addValues } from '../modules/student';
import Student from '../components/Student';

const mapDispatchToProps = (dispatch) => {
  return{
      //addData: (formData) => dispatch(addValues(formData))
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Student);
