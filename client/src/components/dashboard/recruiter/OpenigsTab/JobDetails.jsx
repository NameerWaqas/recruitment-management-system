import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "60vh",
    backgroundColor: "white",
  },
  selectContainer: {
    minWidth: "100%",
    height: 45,
    backgroundColor: "white",
  },
  select: {
    minWidth: "100%",
    height: 45,
  },
  calender: {
    borderRadius: "10px",
    width: "100%",
  },
}));

function JobDetails({ setJobDetails }) {
  const [jobStart, setJobStart] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openings, setOpening] = useState(1);
  const [roleType, setRoleType] = useState("");
  // const [jobType, setJobType] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const updateJobDetails = () => {
    setJobDetails({
      city,
      country,
      description,
      jobStart,
      openings,
      roleType,
      title,
    });
  };

  const classes = useStyles();
  return (
    <div id="container" className={`p-3 ${classes.container}`}>
      <Grid container spacing={2}>
        <Grid item md={4} sm={6} xs={12}>
          <TextField
            onBlur={updateJobDetails}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
            variant="outlined"
            label="Job Title"
            size="small"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <TextField
            onBlur={(e) => updateJobDetails(e.target.value)}
            onChange={setRoleType}
            type="text"
            value={roleType}
            variant="outlined"
            label="Role Type"
            size="small"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <TextField
            onBlur={(e) => updateJobDetails(e.target.value)}
            onChange={setOpening}
            type="text"
            value={openings}
            variant="outlined"
            label="Number of openings"
            size="small"
            style={{ width: "100%" }}
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
        <Grid item md={4} sm={6} xs={12}>
          <TextField
            onBlur={(e) => updateJobDetails(e.target.value)}
            onChange={setCountry}
            type="text"
            value={country}
            variant="outlined"
            label="Country"
            size="small"
            style={{ width: "100%" }}
          />
        </Grid>{" "}
        <Grid item md={4} sm={6} xs={12}>
          <TextField
            onBlur={(e) => updateJobDetails(e.target.value)}
            onChange={setCity}
            type="text"
            value={city}
            variant="outlined"
            label="City"
            size="small"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <TextField
            onBlur={updateJobDetails}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            value={description}
            variant="outlined"
            label="Job Description"
            size="medium"
            multiline
            style={{ width: "100%", marginTop: 0 }}
            margin="dense"
          />
        </Grid>
        <Grid item md={4} sm={6}>
          <Calendar
            onChange={(e) => setJobStart(e)}
            value={jobStart}
            className={classes.calender}
          />
        </Grid>
        <Grid item md={4} sm={6}>
          <Calendar
            onChange={(e) => setJobStart(e)}
            value={jobStart}
            className={classes.calender}
          />
        </Grid>
      </Grid>
    </div>
  );
}

JobDetails.propTypes = {
  setJobDetails: PropTypes.func.isRequired,
};

export default JobDetails;
