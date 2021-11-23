import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal as closeModalAction } from '../../../redux/actions/modalActions';
import { deleteStudent as deleteStudentAction } from '../../../redux/actions/studentActions';
import Modal from '../../Shared/Modal';
import Button from '../../Shared/Button';

const Confirmation = ({
  studentName,
  studentId,
  closeModal,
  deleteStudent,
}) => {
  const onDeleteStudent = () => {
    deleteStudent(studentId);
    closeModal();
  };

  return (
    <Modal>
      <div>
        <p>Delete student {studentName}?</p>
        <div>
          <Button type="button" btnLabel="Cancel" onClick={() => closeModal()}>
            Confirm
          </Button>
          <Button
            type="button"
            btnLabel="Confirm"
            onClick={() => onDeleteStudent()}
          />
        </div>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      closeModal: closeModalAction,
      deleteStudent: deleteStudentAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Confirmation);
