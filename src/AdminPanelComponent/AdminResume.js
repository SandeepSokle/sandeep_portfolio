import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Grid, TextField } from "@mui/material";
import { AdminResumeEducationData } from "../AdminPanelComponentHelper/AdminResumeEducationData";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import { GeneralInputField } from "../GeneralComponents/GeneralInputField";
import { GeneralDatePicker } from "../GeneralComponents/GeneralDatePicker";
// import { GeneralDatePicker } from "../GeneralComponents/GeneralDatePicker";

export const AdminResume = (props) => {
  const { selectedTab } = props;
  const [selectedVal, setSelectedVal] = React.useState("Education");
  const [selectedItem, setSelectedItem] = React.useState({});
  const [allData, setAllData] = React.useState({});
  const [data, setData] = React.useState({});
  // console.log(selectedItem);
  const dispatch = useDispatch();
  const newData = useSelector((state) => {
    return state?.data?.resume;
  });

  React.useEffect(() => {
    dispatch(getDataActionCreater());
  }, []);

  React.useEffect(() => {
    console.log("selectedItem", selectedItem);
    setData(selectedItem);
  }, [selectedItem]);

  React.useEffect(() => {
    // console.log("newData in Admin : ", newData.education);
    setAllData(newData);
  }, [newData]);

  const dataEducation = [
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
  const handleSubmit = async (name) => {
    if (name) {
      console.info("Update Hit!!", data);
      dispatch(getDataActionCreater());
    } else {
      console.log("Save Hit!!", selectedTab, selectedVal, data);

      const response = await axios.post("/portfolio/save", {
        data: data,
        id: "1234587678",
        module: selectedTab.toLowerCase(),
        type: selectedVal.toLowerCase(),
      });

      console.log(response.data);
    }
  };
  const handleSwitch = (val) => {
    // setSelectedItem({});
    switch (val) {
      case "Education":
        return (
          <div style={{ width: "100%" }}>
            <AdminResumeEducationData
              selectedVal={selectedVal}
              data={newData?.education || []}
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
                <GeneralInputField
                  data={data}
                  setData={setData}
                  // disabled={selectedData?.id ? true : false}
                  width="48%"
                  place={"School / Institute Name"}
                  // value={data?.name}
                  dataKey={"name"}
                  // value = {data.name}

                />
                {/* <TextField
                  label="School / Institute Name"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  value={selectedItem.name ? `${selectedItem.name}` : ""}
                /> */}
                <GeneralInputField
                  data={data}
                  setData={setData}
                  // disabled={selectedData?.id ? true : false}
                  width="48%"
                  place={"School Location"}
                  dataKey={"location"}
                  // value = {data.location}
                />
                {/* <TextField
                  label="School Location"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  value={selectedItem.name ? `${selectedItem.location}` : ""}
                /> */}

                {/* <GeneralDatePicker
                  data={data}
                  setData={setData}
                  // disabled={selectedData?.id ? true : false}
                  width="48%"
                  place={"Date of joining"}
                  dataKey={"startDate"}
                /> */}

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
                  onChange={(val) => {
                    setData({
                      ...data,
                      startDate: val,
                    });
                  }}
                  value={
                    data.startDate ? `${convert(selectedItem.startDate)}` : ""
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
                  onChange={(val) => {
                    setData({
                      ...data,
                      endDate: val,
                    });
                  }}
                  value={data.endDate ? `${convert(selectedItem.endDate)}` : ""}
                />

                <GeneralInputField
                  data={data}
                  setData={setData}
                  // disabled={selectedData?.id ? true : false}
                  width="48%"
                  place={"Course Name"}
                  dataKey={"courseName"}
                  // value = {data.courseName}

                />
                {/* <TextField
                  label="Course Name"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  value={
                    selectedItem.courseName ? `${selectedItem.courseName}` : ""
                  }
                /> */}

                <GeneralInputField
                  data={data}
                  setData={setData}
                  // disabled={selectedData?.id ? true : false}
                  width="48%"
                  place={"CGPA"}
                  dataKey={"CGPA"}
                  // value = {data.CGPA}
                  onlyNumber
                />
                {/* <TextField
                  label="CGPA"
                  number
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  value={selectedItem.name ? `${selectedItem.CGPA}` : ""}
                /> */}
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
