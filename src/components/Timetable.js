import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const timetable = [
  { time: '08:00 - 09:00', subject: 'Mathematics' },
  { time: '09:00 - 10:00', subject: 'Physics' },
  { time: '10:00 - 11:00', subject: 'Chemistry' },
  { time: '11:00 - 12:00', subject: 'Biology' },
  { time: '12:00 - 01:00', subject: 'Lunch Break' },
  { time: '01:00 - 02:00', subject: 'History' },
  { time: '02:00 - 03:00', subject: 'Geography' },
  { time: '03:00 - 04:00', subject: 'English' },
  { time: '04:00 - 05:00', subject: 'Physical Education' },
];

const Timetable = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Timetable
      </Typography>
      <Grid container spacing={2}>
        {timetable.map((entry, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
              <Typography variant="subtitle1">{entry.time}</Typography>
              <Typography variant="body1">{entry.subject}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Timetable;
