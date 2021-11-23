import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Student from '../Student';
import styles from './studentList.module.css';

const StudentList = ({ students }) => {
  return (
    <div>
      {students.isLoading ? (
        <h3>Getting students...</h3>
      ) : (
        <div className={styles.container}>
          <Table
            sx={{ minWidth: 650 }}
            size="medium"
            style={{ backgroundColor: '#EBF5FB' }}
            aria-label="a dense table"
          >
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
                <Student key={student._id} student={student} />
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

StudentList.propTypes = {
  students: PropTypes.instanceOf(Object).isRequired,
};

export default StudentList;
