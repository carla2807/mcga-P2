import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import styles from './student.module.css';
import { showModal as showModalAction } from '../../../redux/actions/modalActions';
import modalTypes from '../../../redux/types/modalTypes';

const Student = ({ student, showModal }) => {
  const { _id, name, lastName, age, course, turn, amount } = student;
  const DeleteModal = (studentId, studentName) => {
    showModal(modalTypes.DELETE_STUDENT, {
      id: studentId,
      name: studentName,
    });
  };
  const UpdateModal = () => {
    showModal(modalTypes.UPDATE_STUDENT, {
      student,
    });
  };
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>
        <FaTimes
          className={styles.btn}
          style={{ cursor: 'pointer' }}
          onClick={() => DeleteModal(_id, name)}
        />

        <button
          type="button"
          className={styles.btn}
          style={{ cursor: 'pointer' }}
          onClick={() => UpdateModal(student)}
        >
          Edit
        </button>
      </TableCell>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{lastName}</TableCell>
      <TableCell align="right">{age}</TableCell>
      <TableCell align="right">{course}</TableCell>
      <TableCell align="right">{turn}</TableCell>
      <TableCell align="right">{amount}</TableCell>
    </TableRow>
  );
};

Student.propTypes = {
  student: PropTypes.instanceOf(Object).isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal: showModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Student);
