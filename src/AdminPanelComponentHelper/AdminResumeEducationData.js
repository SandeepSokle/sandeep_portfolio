import Box from "@mui/material/Box";
import { useState } from "react";
import ConfigInput from "./ConfigInput";
export const AdminResumeEducationData = (props) => {
  const { setSelectedItem } = props;
  const data = [
    {
      schoolName: "crsu",
      location: "Jind",
      startDate: Date(),
      endDate: Date(),
      courseName: "MCA",
      CGPA: "8.2",
    },
    {
      schoolName: "crsu",
      location: "Jind",
      startDate: Date(),
      endDate: Date(),
      courseName: "MCA",
      CGPA: "8.2",
    },
    {
      schoolName: "crsu",
      location: "Jind",
      startDate: Date(),
      endDate: Date(),
      courseName: "MCA",
      CGPA: "8.2",
    },
    {
      schoolName: "crsu",
      location: "Jind",
      startDate: Date(),
      endDate: Date(),
      courseName: "MCA",
      CGPA: "8.2",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        // height: 300,
        // backgroundColor: "primary.dark",
        // "&:hover": {
        //   backgroundColor: "primary.main",
        //   opacity: [0.9, 0.8, 0.7],
        // },
        paddingBottom: "2rem",
        borderBottom: "1.2rem solid rgb(182 182 182)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        {data.map((item, i) => (
          <ConfigInput setSelectedItem={setSelectedItem} i={i} element={item} />
        ))}
      </div>
    </Box>
  );
};
