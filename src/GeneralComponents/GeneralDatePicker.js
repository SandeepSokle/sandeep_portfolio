import * as React from "react";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export const GeneralDatePicker = (props) => {
  const {
    conflict,
    setConflict,
    label,
    place,
    dataKey,
    onlyNumber,
    paddingRight,
    submitted,
    multiline,
    dataValue,
    data,
    setData,
    uploadFile,
  } = props;
  const PlaceHolder = label;
  const storeValue = dataKey;

  const [value, setValue] = React.useState(
    dataValue ? dataValue : props.data[storeValue]
  );

  // console.log(storeValue, props.data[storeValue], value, data);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (setConflict) {
      // console.log(conflict);
      setConflict(!conflict);
    }
    if (!data) return;
    let newData = data;
    newData[`${storeValue}`] = event.target.value;
    setData(newData);
  };

  React.useEffect(() => {
    setValue(data[storeValue]);
    if (setConflict) {
      // console.log(conflict);
      setConflict(!conflict);
    }
    if (!data) return;
    let newData = data;
    newData[`${storeValue}`] = data[storeValue];
    setData(newData);
  }, [data]);

  const allowOnlyLetters = (e, t) => {
    if (e.target.value.length >= 20) {
      alert("Please enter a Valid Range");
      e.preventDefault();
    }
    if (window.event) {
      var charCode = window.event.keyCode;
    } else if (e) {
      var charCode = e.which;
    } else {
      return true;
    }
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
      console.log(e.target.value);
      return true;
    } else {
      alert("Please enter only alphabets");
      e.preventDefault();
      return false;
    }
  };

  const allowOnlyPositiveNumber = (e) => {
    if (window.event) {
      var charCode = window.event.keyCode;
    } else if (e) {
      var charCode = e.which;
    } else {
      return true;
    }
    if (charCode >= 48 && charCode <= 57) return true;
    else {
      alert("Please enter only positive Number");
      e.preventDefault();
      return false;
    }
  };

  React.useEffect(() => {
    if (props.value != null) {
      let newData = props.data;
      newData[`${storeValue}`] = props.value;
      props.setData(newData);
      setValue(props.value);
    }
  }, []);

  React.useEffect(() => {
    setValue(dataValue);
  }, [uploadFile]);
  return (
    <div
      style={{
        margin: "1rem .1rem",
        marginBottom: `${props.lowMargin ? "0.1rem" : "1rem"}`,
        width: props.width ? props.width : "100%",
      }}
    >
      <DatePicker
        label={place ? place : PlaceHolder}
        // id="fullWidth"
        fullWidth
        // className="form-control"
        value={props.value ? props.value : value}
        //   minDate={new Date('2017-01-01')}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />

      {/* <TextField
        fullWidth
        type={onlyNumber ? "number" : "text"}
        multiline={multiline ? true : false}
        rows={4}
        error={
          submitted && (value === undefined || value === "" || value === 0)
            ? true
            : false
        }
        paddingRight={`${paddingRight ? paddingRight : "0rem"}`}
        className="form-control"
        disabled={props.disabled ? true : false}
        required={props.required ? true : false}
        value={props.value ? props.value : value}
        onKeyPress={
          dataKey === "title"
            ? allowOnlyLetters
            : onlyNumber
            ? allowOnlyPositiveNumber
            : () => {}
        }
        onChange={handleChange}
        label={place ? place : PlaceHolder}
        id="fullWidth"
      /> */}
    </div>
  );
};
