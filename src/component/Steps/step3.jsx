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

const Step3 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Please Fill Third Page Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "fireWall",
            label: "FireWall You have",
            options: [
              { key: "Programming", value: "Programming" },
              { key: "Communication", value: "Communication" },
              { key: "Designing", value: "Designing" },
              { key: "not Yet Defined", value: "not Yet Defined" },
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
          {renderSelect({
            state,
            name: "idsPresent",
            label: "IDSPresent You have",
            options: [
              { key: "Less than 1 year", value: "Less than 1 year" },
              { key: "More than 1 year", value: "More than 1 year" },
              { key: "1 year", value: "1 year" },
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
          {renderSelect({
            state,
            name: "riskUpdate",
            label: "RiskUpdate Work Type",
            options: [
              { key: "Marketting", value: "Marketting" },
              { key: "Official Work", value: "Official Work" },
              { key: "Work from home", value: "Work from home" },
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
      <label for="targetIpAddress">Target Ip Address:</label>
          {renderInputField1({
            state,
            name: "targetIpAddress",
            label: "Target Ip Address",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ marginTop: "-5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid style={{ marginTop: "-16px" }} item xs={12} sm={6}>
      <label for="testIpAddress">Test Ip Address:</label>
          {renderInputField1({
            state,
            name: "testIpAddress",
            label: "Test Ip Address",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ marginTop: "-5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid style={{ marginTop: "-16px" }} item xs={12} sm={6}>
      <label for="typesOfTesting">Types Of Testing:</label>
          {renderInputField1({
            state,
            name: "typesOfTesting",
            label: "Types Of Testing",
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
            name: "testingTools",
            label: "Testing Tools",
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
        <Box ml={2}>
          {renderButton({ label: "Finish", onClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
