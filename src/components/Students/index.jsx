import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStudents as getStudentsAction } from '../../redux/actions/studentActions';
import { showModal as showModalAction } from '../../redux/actions/modalActions';
import modalTypes from '../../redux/types/modalTypes';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';
import Confirmation from './Confirmation';
import UpdateStudentForm from './UpdateStudentForm';
import styles from './students.module.css';

const Students = ({ students, getStudents, showModal, modalType, meta }) => {
  useEffect(() => {
    getStudents();
  }, []);

  const showAddModal = () => {
    showModal(modalTypes.ADD_STUDENT);
  };

  return (
    <div className={styles.studentsContainer}>
      <button type="button" onClick={() => showAddModal()}>
        Add
      </button>
      {modalType === 'ADD_STUDENT' && <AddStudentForm />}{' '}
      {modalType === 'DELETE_STUDENT' && (
        <Confirmation studentId={meta.id} studentName={meta.name} />
      )}
      {modalType === 'UPDATE_STUDENT' && (
        <UpdateStudentForm student={meta.student} />
      )}{' '}
      <StudentList students={students} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getStudents: getStudentsAction,
      showModal: showModalAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  students: state.students,
  modalType: state.modal.modalType,
  meta: state.modal.meta,
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
