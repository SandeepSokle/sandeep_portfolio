import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import { Popover, TextField } from "@mui/material";

const ConfigInput = (props) => {
  const {
    setSelectedItem,
    i,
    element,
    setConflict,
    selectedVal,
    setEditFile,
    setEditLink,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  // console.log(configType);
  // console.log(element);
  const [data, setData] = useState({});
  const feature = {
    fontSize: "30px",
    margin: "0 5px",
  };

  // const deleteConfiguration = async (id, data,element) => {
  //   try {
  //     // console.log("deleteConfiguration", id, data);
  //     let response = await axios.put(
  //       process.env.REACT_APP_BASE_URL +
  //         "/api/v1/configuration/delete" +
  //         `/${id}`,
  //       data
  //     );
  //     // alert(response.statusText + " Delete Configuration Successfully");
  //     dispatch(openSnackbar("Delete Configuration Successfully", "success"));
  //     dispatch(deleteConfiguationActionCreater(id,data,element))
  //     setConflict(true);
  //   } catch (e) {
  //     // console.log(e);
  //     // alert(e);
  //     dispatch(openSnackbar("Delete Configuration failed", "error"));
  //     dispatch(loaderEndActionCreater());

  //   }
  // };

  // useEffect(() => {
  //   setData(element);
  // }, [element, configType]);

  const handleEdit = () => {
    if (setSelectedItem) setSelectedItem(element);
    if (setEditFile) setEditFile(false);
    if (setEditLink) setEditLink(false);
  };

  const handleDelete = () => {
    // let newData = {
    //   type: configType.dataKey,
    // };
    // if (window.confirm("Confirm to delete")) {
    //   // console.log(newData);
    //   dispatch(loaderStartActionCreater());
    //   deleteConfiguration(element.id, newData,element);
    // }else{
    //   dispatch(openSnackbar("Delete Configuration Cancelled", "error"));
    // }
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <div
      className="d-flex align-items-center"
      style={{
        width: "49%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ width: "70%" }}>
        <TextField
          fullWidth
          className="form-control"
          disabled
          value={element.name}
          // onChange={handleChange}
          label={`${selectedVal} ${i + 1}`}
          id="fullWidth"
        />
      </div>

      <div
        className="d-flex align-items-center "
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ width: "30%" }} onClick={handleEdit}>
          <IconButton aria-label="delete" size="large">
            <EditTwoToneIcon style={feature} />
          </IconButton>
        </div>
        <div style={{ width: "30%" }} onClick={handleDelete}>
          {" "}
          <IconButton aria-label="delete" size="large">
            <DeleteTwoToneIcon style={feature} />
          </IconButton>
        </div>
        <div
          style={{ width: "30%" }}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          {" "}
          <IconButton aria-label="delete" size="large">
            <InfoTwoToneIcon style={{ fontSize: "30px" }} />
          </IconButton>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <div
              style={{
                padding: ".5rem",
                fontSize: "1.1rem",
                maxWidth: "20rem",
                fontStyle: "none",
              }}
            >
              info not available
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default ConfigInput;
