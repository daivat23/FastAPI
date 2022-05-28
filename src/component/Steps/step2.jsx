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

const Step2 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Please Fill Second Page Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "systemType",
            label: "System Type",
            options: [
              { key: "1", value: "test" },
              { key: "2", value: "test2" },
              { key: "3", value: "test3" },
              { key: "4", value: "test4" },
              { key: "5", value: "test5" },
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
            name: "systemOwner",
            label: "System Owner",
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
          {renderInputField({
            state,
            name: "networkOwner",
            label: "Network Owner",
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
            name: "testMachineLocation",
            label: "Test Machine Location",
            options: [
              { key: "surat", value: "surat" },
              { key: "vapi", value: "vapi" },
              { key: "daman", value: "daman" },
              { key: "dandi", value: "dandi" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ marginTop: "-5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid style={{ marginTop: "-16px" }} item xs={12} sm={6}>
        <label for="systemFunction">System Function:</label>
          {renderInputField1({
            state,
            name: "systemFunction",
            label: "System Function",
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
            name: "systemLocation",
            label: "System Location",
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
            name: "testingContacts",
            label: "Testing Contacts",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ marginTop: "-5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
        </Grid>
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "Next", onClick: handleNext })}</Box>
      </Grid>
    </Paper>
  );
};

export default Step2;
