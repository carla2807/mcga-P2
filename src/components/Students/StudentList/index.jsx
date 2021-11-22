import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material';
import Student from '../Student';
import styles from './studentList.module.css';

const StudentList = ({ students, onDelete }) => {
  return (
    <div>
      {students.isLoading ? (
        <h3>Getting students...</h3>
      ) : (
        <Paper className={styles.container}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={styles.goalStudent}>Action</TableCell>
                <TableCell className={styles.goalStudent}>Name</TableCell>
                <TableCell className={styles.goalStudent} align="center">
                  Lastname
                </TableCell>
                <TableCell className={styles.goalStudent} align="center">
                  Age
                </TableCell>
                <TableCell className={styles.goalStudent} align="center">
                  Course
                </TableCell>
                <TableCell className={styles.goalStudent} align="center">
                  Turn
                </TableCell>
                <TableCell className={styles.goalStudent} align="center">
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.list.map((student) => (
                <Student
                  key={student._id}
                  student={student}
                  onDelete={onDelete}
                />
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </div>
  );
};

StudentList.propTypes = {
  students: PropTypes.instanceOf(Object).isRequired,
};

export default StudentList;
