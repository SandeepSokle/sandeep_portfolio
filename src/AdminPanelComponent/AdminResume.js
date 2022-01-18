import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Grid, TextField } from "@mui/material";
import { AdminResumeEducationData } from "../AdminPanelComponentHelper/AdminResumeEducationData";

export const AdminResume = () => {
  const [selectedVal, setSelectedVal] = React.useState("Education");
  const [selectedItem, setSelectedItem] = React.useState({});
console.log(selectedItem);

function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

  const buttons = [
    <Button
      key="aboutMe"
      onClick={() => {
        setSelectedVal("Education");
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      Education
    </Button>,
    <Button
      key="contact"
      onClick={() => {
        setSelectedVal("Works");
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      Works
    </Button>,
    <Button
      key="contact"
      onClick={() => {
        setSelectedVal("Achievements");
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      Achievements
    </Button>,
    <Button
      key="contact"
      onClick={() => {
        setSelectedVal("Skills");
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      Skills
    </Button>,
  ];

  const handleSwitch = (val) => {
    switch (val) {
      case "Education":
        return (
          <div style = {{width : "100%"}}>
            <AdminResumeEducationData setSelectedItem={setSelectedItem}/>
            <div
              style={{
                // border: "1px dashed",
                borderColor: "black",
                marginTop: "1rem",
                padding: "1rem",
              }}
            >
              <Box
                fullWidth
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  label="School / Institute Name"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  value = {selectedItem.schoolName ? `${selectedItem.schoolName}` : ""}
                />
                <TextField
                  label="School Location"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                   value = {selectedItem.schoolName ? `${selectedItem.location}` : ""}
                />
                <TextField
                  label="Date of joining"
                  id="date"
                  // focused
                  type="date"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                   value = {selectedItem.startDate ? `${convert(selectedItem.startDate)}` : ""}
                />
                <TextField
                  label="Date of Leave"
                  id="date"
                  // focused
                  type="date"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value = {selectedItem.endDate ? `${convert(selectedItem.endDate)}` : ""}

                />
                <TextField
                  label="Course Name"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                   value = {selectedItem.courseName ? `${selectedItem.courseName}` : ""}
                />
                <TextField
                  label="CGPA"
                  number
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                   value = {selectedItem.schoolName ? `${selectedItem.CGPA}` : ""}
                />
              </Box>
              <Box
                fullWidth
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                width
              >
                <Button variant="contained">Save Data</Button>
              </Box>
            </div>
          </div>
        );
      case "Works":
        return (
          <>
            <h3>Data</h3>
            <div
              style={{
                // border: "1px dashed",
                borderColor: "black",
                marginTop: "1rem",
                padding: "1rem",
              }}
            >
              <Box
                fullWidth
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  label="Company Name"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                />
                <TextField
                  label="Job Location"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                />
                <TextField
                  label="Date of joining"
                  focused
                  type="date"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                />
                <TextField
                  label="Date of Leave"
                  focused
                  type="date"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                />
                <TextField
                  label="Job Title"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                />
                <TextField
                  label="Responsibilities"
                  multiline
                  rows={5}
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                />
              </Box>
              <Box
                fullWidth
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                width
              >
                <Button variant="contained">Save Data</Button>
              </Box>
            </div>
          </>
        );
      case "Achievements":
        return (
          <>
            <h3>Data</h3>
            <div
              style={{
                // border: "1px dashed",
                borderColor: "black",
                marginTop: "1rem",
                padding: "1rem",
              }}
            >
              <Box
                fullWidth
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  label="Title"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                />

                <TextField
                  label="Date"
                  focused
                  type="date"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                />

                <TextField
                  label="Description"
                  multiline
                  fullWidth
                  rows={5}
                  sx={{
                    m: 1,
                  }}
                />
              </Box>
              <Box
                fullWidth
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                width
              >
                <Button variant="contained">Save Data</Button>
              </Box>
            </div>
          </>
        );
      case "Skills":
        return (
          <>
            <h3>Data</h3>
            <div
              style={{
                // border: "1px dashed",
                borderColor: "black",
                marginTop: "1rem",
                padding: "1rem",
              }}
            >
              <Box
                fullWidth
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  label="Name"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                />

                <TextField
                  label="Rate yourself from 100"
                  type="number"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                />
              </Box>
              <Box
                fullWidth
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                width
              >
                <Button variant="contained">Save Data</Button>
              </Box>
            </div>
          </>
        );

      default:
        break;
    }
  };
  return (
    <Grid
      sx={{
        display: "flex",
        "& > *": {},
      }}
    >
      <Grid
        xs={2.5}
        sx={{
          borderRight: "1rem solid rgb(0 0 0 / 26%)",

          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          {buttons}
        </ButtonGroup>
      </Grid>
      <Grid xs={9.5} sx={{ p: "2px 2rem" ,width : "100%"}}>
        <h1>{selectedVal}</h1>
        <br></br>
        {handleSwitch(selectedVal)}
      </Grid>
    </Grid>
  );
};
