import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Grid, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { AdminResumeEducationData } from "../AdminPanelComponentHelper/AdminResumeEducationData";

export const AdminBlog = () => {
  const [selectedItem, setSelectedItem] = React.useState({});
  const [editLink, setEditLink] = React.useState(false);
  const dataList = [
    {
      name: "leetCode question 12",
      link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
      des: "show movie list we can like dislike",
    },
    {
      name: "Movie App",
      link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
      des: "show movie list we can like dislike",
    },
    {
      name: "Movie App",
      link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
      des: "show movie list we can like dislike",
    },
    {
      name: "Movie App",
      link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
      des: "show movie list we can like dislike",
    },
    {
      name: "Movie App",
      link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
      des: "show movie list we can like dislike",
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
            mb: 3,
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
          // selectedVal={selectedVal}
          // setEditFile = {setEditFile}
          setEditLink={setEditLink}
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
              label="Project Name"
              sx={{
                width: `${selectedItem.name && !editLink ? "84%" : "98%"}`,
                m: 1,
              }}
              value={selectedItem.name ? `${selectedItem.name}` : ""}
            />

            {selectedItem.name && !editLink ? (
              <div
                style={{ width: "13%", textAlign: "center", fontSize: "20px" }}
              >
                <a
                  style={{ marginRight: "12px" }}
                  target="_blank"
                  href="https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html"
                >
                  Blog Link
                </a>
                <EditIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setEditLink(true);
                  }}
                ></EditIcon>
              </div>
            ) : (
              <TextField
                label="Blog Link"
                focused
                type="text"
                sx={{
                  width: "98%",
                  m: 1,
                }}
                value={selectedItem.link ? `${selectedItem.link}` : ""}
              />
            )}

            <TextField
              label="Project Description"
              multiline
              rows={4}
              sx={{
                width: "98%",
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
