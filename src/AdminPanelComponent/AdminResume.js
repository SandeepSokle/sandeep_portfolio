import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Grid, TextField } from "@mui/material";
import { AdminResumeEducationData } from "../AdminPanelComponentHelper/AdminResumeEducationData";
import axios from "axios";

export const AdminResume = (props) => {
  const { selectedTab } = props;
  const [selectedVal, setSelectedVal] = React.useState("Education");
  const [selectedItem, setSelectedItem] = React.useState({});
  console.log(selectedItem);

  const data = [
    {
      name: "crsu",
      location: "Jind",
      startDate: Date(),
      endDate: Date(),
      courseName: "MCA",
      CGPA: "8.2",
    },
    {
      name: "crsu",
      location: "Jind",
      startDate: Date(),
      endDate: Date(),
      courseName: "MCA",
      CGPA: "8.2",
    },
    {
      name: "crsu",
      location: "Jind",
      startDate: Date(),
      endDate: Date(),
      courseName: "MCA",
      CGPA: "8.2",
    },
    {
      name: "crsu",
      location: "Jind",
      startDate: Date(),
      endDate: Date(),
      courseName: "MCA",
      CGPA: "8.2",
    },
  ];

  const dataWork = [
    {
      name: "nirmitee",
      location: "Jind",
      startDate: Date(),
      endDate: Date(),
      jobTitle: "Software Engineer",
      responsibility: "developer",
    },
    {
      name: "Elintex tecknologies",
      location: "Pune",
      startDate: Date(),
      endDate: Date(),
      jobTitle: "Software Engineer",
      responsibility: "developer in web app",
    },
    {
      name: "nirmitee",
      location: "Jind",
      startDate: Date(),
      endDate: Date(),
      jobTitle: "Software Engineer",
      responsibility: "developer",
    },
    {
      name: "nirmitee",
      location: "Jind",
      startDate: Date(),
      endDate: Date(),
      jobTitle: "Software Engineer",
      responsibility: "developer",
    },
    {
      name: "nirmitee",
      location: "Jind",
      startDate: Date(),
      endDate: Date(),
      jobTitle: "Software Engineer",
      responsibility: "developer",
    },
  ];

  const dataAchive = [
    {
      name: "Haryan Hacks",
      location: "Jind",
      date: Date(),
      des: "HAryan Hackes is a compitition that is based on developer",
    },
    {
      name: "Haryan Hacks",
      location: "Jind",
      date: Date(),
      des: "HAryan Hackes is a compitition that is based on developer",
    },
    {
      name: "Haryan Hacks",
      location: "Jind",
      date: Date(),
      des: "HAryan Hackes is a compitition that is based on developer",
    },
    {
      name: "Haryan Hacks",
      location: "Jind",
      date: Date(),
      des: "HAryan Hackes is a compitition that is based on developer",
    },
  ];

  const dataSkill = [
    {
      name: "DSA",
      rate: 90,
    },
    {
      name: "Development",
      rate: 80,
    },
    {
      name: "JS",
      rate: 78,
    },
    {
      name: "Java",
      rate: 89,
    },
  ];

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
        setSelectedItem({});
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
        setSelectedItem({});
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
        setSelectedItem({});
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
        setSelectedItem({});
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
    // setSelectedItem({});
    switch (val) {
      case "Education":
        return (
          <div style={{ width: "100%" }}>
            <AdminResumeEducationData
              selectedVal={selectedVal}
              data={data}
              setSelectedItem={setSelectedItem}
            />
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
                  value={selectedItem.name ? `${selectedItem.name}` : ""}
                />
                <TextField
                  label="School Location"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  value={selectedItem.name ? `${selectedItem.location}` : ""}
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
                  value={
                    selectedItem.startDate
                      ? `${convert(selectedItem.startDate)}`
                      : ""
                  }
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
                  value={
                    selectedItem.endDate
                      ? `${convert(selectedItem.endDate)}`
                      : ""
                  }
                />
                <TextField
                  label="Course Name"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  value={
                    selectedItem.courseName ? `${selectedItem.courseName}` : ""
                  }
                />
                <TextField
                  label="CGPA"
                  number
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  value={selectedItem.name ? `${selectedItem.CGPA}` : ""}
                />
              </Box>
            </div>
          </div>
        );
      case "Works":
        return (
          <>
            <div style={{ width: "100%" }}>
              <AdminResumeEducationData
                selectedVal={selectedVal}
                data={dataWork}
                setSelectedItem={setSelectedItem}
              />

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
                    value={selectedItem.name ? `${selectedItem.name}` : ""}
                  />
                  <TextField
                    label="Job Location"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    value={selectedItem.name ? `${selectedItem.location}` : ""}
                  />
                  <TextField
                    label="Date of joining"
                    focused
                    type="date"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    value={
                      selectedItem.startDate
                        ? `${convert(selectedItem.startDate)}`
                        : ""
                    }
                  />
                  <TextField
                    label="Date of Leave"
                    focused
                    type="date"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    value={
                      selectedItem.endDate
                        ? `${convert(selectedItem.endDate)}`
                        : ""
                    }
                  />
                  <TextField
                    label="Job Title"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    value={
                      selectedItem.jobTitle ? `${selectedItem.jobTitle}` : ""
                    }
                  />
                  <TextField
                    label="Responsibilities"
                    multiline
                    rows={5}
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    value={
                      selectedItem.responsibility
                        ? `${selectedItem.responsibility}`
                        : ""
                    }
                  />
                </Box>
              </div>
            </div>
          </>
        );
      case "Achievements":
        return (
          <>
            <div style={{ width: "100%" }}>
              <AdminResumeEducationData
                selectedVal={selectedVal}
                data={dataAchive}
                setSelectedItem={setSelectedItem}
              />
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
                    value={selectedItem.name ? `${selectedItem.name}` : ""}
                  />

                  <TextField
                    label="Date"
                    focused
                    type="date"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    value={
                      selectedItem.date ? `${convert(selectedItem.date)}` : ""
                    }
                  />

                  <TextField
                    label="Description"
                    multiline
                    fullWidth
                    rows={5}
                    sx={{
                      m: 1,
                    }}
                    value={selectedItem.des ? `${selectedItem.des}` : ""}
                  />
                </Box>
              </div>
            </div>
          </>
        );
      case "Skills":
        return (
          <>
            <div style={{ width: "100%" }}>
              <AdminResumeEducationData
                selectedVal={selectedVal}
                data={dataSkill}
                setSelectedItem={setSelectedItem}
              />
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
                    value={selectedItem.name ? `${selectedItem.name}` : ""}
                  />

                  <TextField
                    label="Rate yourself from 100"
                    type="number"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    value={selectedItem.rate ? `${selectedItem.rate}` : ""}
                  />
                </Box>
              </div>
            </div>
          </>
        );

      default:
        break;
    }
  };

  const handleSubmit = async (name) => {
    if (name) {
      alert("Update Hit!!");
    } else {
      console.log("Save Hit!!", selectedTab, selectedVal);

      const response = await axios.post("/portfolio/save", {
        data: {
          name: "crsu",
          location: "Jind",
          startDate: new Date(),
          endDate: new Date(),
          courseName: "MCA",
          CGPA: "8.2",
        },
        id: "1234587678",
        module: selectedTab.toLowerCase(),
        type: selectedVal.toLowerCase(),
      });

      console.log(response.data);
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
      <Grid xs={9.5} sx={{ p: "2px 2rem", width: "100%" }}>
        <h1
          style={{
            color: "rgb(25 118 210)",
            display: "block",
          }}
        >
          {selectedVal}
        </h1>
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
          <Button
            variant="contained"
            onClick={() => {
              setSelectedItem({});
            }}
          >
            UnSelect Data
          </Button>
        </Box>
        <br></br>
        {handleSwitch(selectedVal)}
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
          <Button
            variant="contained"
            onClick={() => {
              handleSubmit(selectedItem.name);
            }}
          >
            {selectedItem.name ? "Update Data" : "Save Data"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
