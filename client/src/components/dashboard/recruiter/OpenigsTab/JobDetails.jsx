import React from "react"; // , { useState }
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import {
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  selectContainer: {
    minWidth: 230,
    height: 45,
    backgroundColor: "white",
  },
  select: {
    minWidth: 230,
    height: 45,
  },
}));
function JobDetails() {
  const classes = useStyles();
  return (
    <Card id="container" className="p-3">
      <Grid container spacing={2}>
        <Grid item md={4} sm={6} xs={12}>
          <TextField
            type="text"
            variant="outlined"
            label="Job Title"
            size="small"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <TextField
            type="text"
            variant="outlined"
            label="Role Type"
            size="small"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <TextField
            type="text"
            variant="outlined"
            label="Number of openings"
            size="small"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <FormControl variant="standard" className={classes.selectContainer}>
            <InputLabel>Job Type</InputLabel>
            <Select value="Full time" className={classes.select}>
              <MenuItem>Full time</MenuItem>
              <MenuItem>Part time</MenuItem>
              <MenuItem>Remote</MenuItem>
              <MenuItem>Freelance</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  );
}

export default JobDetails;
