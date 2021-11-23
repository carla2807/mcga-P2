import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';
import {
  required,
  number,
  minValue,
  trim,
  string,
  composeValidators,
} from '../../../validate/validations';
import { updateStudent as updateStudentAction } from '../../../redux/actions/studentActions';
import { closeModal as closeModalAction } from '../../../redux/actions/modalActions';
import Button from '../../Shared/Button';
import Select from '../../Shared/Select';
import Input from '../../Shared/Input';
import Modal from '../../Shared/Modal';
import styles from './updateStudent.module.css';

const StudentForm = ({ student, updateStudent, closeModal }) => {
  const onSubmitStudent = (values) => {
    updateStudent({ ...values, id: student._id });

    closeModal();
  };

  const turns = [
    {
      id: 'morning',
      value: 'morning',
    },
    {
      id: 'afternoon',
      value: 'afternoon',
    },
  ];

  const courses = [
    {
      id: 'Cybersecurity',
      value: 'Cybersecurity',
    },
    {
      id: 'Python',
      value: 'Python',
    },
    {
      id: 'Javascript',
      value: 'Javascript',
    },
    {
      id: 'JAVA',
      value: 'JAVA',
    },
  ];

  return (
    <Modal>
      <div className={styles.containerForm}>
        <Form
          onSubmit={onSubmitStudent}
          initialValues={{
            name: student.name,
            lastName: student.lastName,
            age: student.age,
            turn: student.turn,
            course: student.course,
            amount: student.amount,
          }}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit} className={styles.formContainer}>
              <div className={styles.textInput}>
                <Field
                  name="name"
                  component={Input}
                  placeholder="Add name"
                  label="Name:"
                  validate={composeValidators(required, trim, string)}
                />
              </div>
              <div className={styles.textInput}>
                <Field
                  name="lastName"
                  component={Input}
                  placeholder="Add last name"
                  label="Last name:"
                  validate={composeValidators(required, trim, string)}
                />
              </div>
              <div className={styles.textInput}>
                <Field
                  name="age"
                  component={Input}
                  placeholder="Add age"
                  label="Age:"
                  validate={composeValidators(required, number, minValue, trim)}
                />
              </div>
              <div>
                <Field
                  name="turn"
                  component={Select}
                  options={turns}
                  label="Turn:"
                />
              </div>
              <div className={styles.textInput}>
                <Field
                  name="course"
                  component={Select}
                  options={courses}
                  label="Course:"
                />
              </div>
              <div className={styles.textInput}>
                <Field
                  name="amount"
                  component={Input}
                  placeholder="Add amount"
                  label="Amount:"
                  validate={composeValidators(required, number, trim)}
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button
                  disabled={submitting || pristine}
                  btnLabel="Submit"
                  type="submit"
                />
                <Button
                  disabled={submitting || pristine}
                  btnLabel="Reset"
                  type="button"
                  onClick={form.reset}
                />
              </div>
            </form>
          )}
        />
      </div>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateStudent: updateStudentAction,
      closeModal: closeModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(StudentForm);
