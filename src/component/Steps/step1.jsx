/* eslint-disable no-use-before-define */
import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderInputField1,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step1 = ({ state, handleChange, handleNext }) => {

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Please Fill First Page Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "testName",
            label: "Test Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ marginTop: "-5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "additionalAccess",
            label: "Additional Access",
            onChange: handleChange,
          })}
          <button>API</button>
          <button>SEARCH</button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ marginTop: "-5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "systemState",
            label: "System State",
            options: [
              { key: "1", value: "1" },
              { key: "2", value: "2" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ marginTop: "-5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "systemName",
            label: "System Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ marginTop: "-5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "systemEnvironment",
            label: "System Environment",
            type: "text",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ marginTop: "-5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid style={{ marginTop: "-16px" }} item xs={12} sm={6}>
      <label for="testingUnit">Testing Unit:</label>
          {renderInputField1({
            state,
            name: "testingUnit",
            label: "Testing Unit",
            type: "text",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ marginTop: "-5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "yourReference",
            label: "Your Reference",
            type: "text",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ marginTop: "-5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
        </Grid>
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        {renderButton({ label: "Next", onClick: handleNext })}
      </Grid>
    </Paper>
  );
};

export default Step1;
