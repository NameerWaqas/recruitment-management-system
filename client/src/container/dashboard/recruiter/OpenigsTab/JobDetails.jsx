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
import { useSelector, useDispatch } from "react-redux";

import { updateJobDetails } from "../../../../redux/reducers/newOpening";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "60vh",
    backgroundColor: "#343a40",
  },
  selectContainer: {
    minWidth: "100%",
    height: 45,
    backgroundColor: "#343a40",
  },
  select: {
    minWidth: "100%",
    height: 45,
  },
  calender: {
    borderRadius: "10px",
    width: "100%",
  },
  notch: { border: "1px solid white" },
  focused: {},
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
}));

function JobDetails() {
  const dispatch = useDispatch();
  const { jobDetails } = useSelector((state) => state.newOpening);

  const [jobStart, setJobStart] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openings, setOpening] = useState(1);
  const [organization, organizationName] = useState("");
  const [jobType, setJobType] = useState("Full time");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const updateReducer = () => {
    dispatch(
      updateJobDetails({
        JD: {
          city,
          country,
          description,
          openings,
          organization,
          jobType,
          title,
        },
      })
    );
  };

  const classes = useStyles();
  return (
    <div
      id="container"
      className={`p-3 ${classes.container}`}
      style={{ backgroundColor: "#0A0B18" }}
    >
      <Grid container spacing={2}>
        <Grid item md={4} sm={6} xs={12}>
          <TextField
            onBlur={updateReducer}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
            variant="outlined"
            label="Job Title"
            size="small"
            style={{ width: "100%" }}
            InputProps={{
              style: { color: "white" },
              classes: {
                root: classes.cssOutlinedInput,
                notchedOutline: classes.notch,
                focused: classes.focused,
              },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <TextField
            onBlur={updateReducer}
            onChange={(e) => organizationName(e.target.value)}
            type="text"
            value={organization}
            variant="outlined"
            label="Organization"
            size="small"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <TextField
            onBlur={updateReducer}
            onChange={(e) => setOpening(e.target.value)}
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
            onBlur={updateReducer}
            onChange={(e) => setCountry(e.target.value)}
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
            onBlur={updateReducer}
            onChange={(e) => setCity(e.target.value)}
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
            onBlur={updateReducer}
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
