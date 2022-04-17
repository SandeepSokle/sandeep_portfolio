import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Grid, TextField } from "@mui/material";
import { AdminResumeEducationData } from "../AdminPanelComponentHelper/AdminResumeEducationData";

export const AdminExperience = () => {
  const [selectedVal, setSelectedVal] = React.useState("Complete");
  const [selectedItem, setSelectedItem] = React.useState({});
  const [editFile, setEditFile] = React.useState(false);
  const [editLink, setEditLink] = React.useState(false);
  const dataList = [
    {
      name: "Movie App",
      experience: 2,
      des: "show movie list we can like dislike",
      response: "working as a developer",
      // link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
    },
    {
      name: "Movie App",
      experience: 2,
      des: "show movie list we can like dislike",
      response: "working as a developer",
      // link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
    },
    {
      name: "Movie App",
      experience: 2,
      des: "show movie list we can like dislike",
      response: "working as a developer",
      // link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
    },
    {
      name: "Movie App",
      experience: 2,
      des: "show movie list we can like dislike",
      response: "working as a developer",
      // link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
    },
    {
      name: "Movie App",
      experience: 2,
      des: "show movie list we can like dislike",
      response: "working as a developer",
      // link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
    },
  ];
  return (
    <Grid
      sx={{
        display: "flex",
        "& > *": {},
      }}
    >
      <Grid xs={12} sx={{ p: "2px 2rem" }}>
       
        <Box
          fullWidth
          sx={{
            mb: "2rem",
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

        <AdminResumeEducationData
          selectedVal={selectedVal}
          data={dataList}
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
              label="Experince"
              type="number"
              sx={{
                width: "48%",
                m: 1,
              }}
              value={
                selectedItem.experience ? `${selectedItem.experience}` : ""
              }
            />
            <TextField
              label="Responsibility"
              multiline
              rows={4}
              sx={{
                width: "48%",
                m: 1,
              }}
              value={selectedItem.response ? `${selectedItem.response}` : ""}
            />
            <TextField
              label="Project Description"
              multiline
              rows={4}
              sx={{
                width: "48%",
                m: 1,
              }}
              value={selectedItem.des ? `${selectedItem.des}` : ""}
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
            <Button variant="contained">
              {selectedItem.name ? "Update Data" : "Save Data"}
            </Button>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};
