import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-scroll";
export default function Navbar() {
  const [value, setValue] = React.useState("home");
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // React.useEffect(() => {
  //   setScrollPosition((scrollPosition + 100) % 2500);
  // }, []);

  console.log(scrollPosition);

  // console.log(value);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: "0px",
        right: "0px",
        zIndex: 3,
        // backgroundColor: "#2e7d32",
        backgroundColor: `${
          scrollPosition <= 100
            ? "#2e7d3200"
            : scrollPosition <= 300
            ? "#3481382e"
            : scrollPosition <= 500
            ? "#3481385c"
            : scrollPosition <= 680
            ? "#34813894"
            : "#348138b3"
        }`,
      }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="Home"
            value="home"
            color="white"
            sx={{
              color: "white",
            }}
          />
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="About"
            value="about"
            sx={{
              color: "white",
            }}
            // onClick={() => {
            //   setScrollPosition(500);
            //   window.pageYOffset = 500;
            // }}
          />
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="Resume"
            value="resume"
            sx={{
              color: "white",
            }}
          />
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="Works"
            value="works"
            sx={{
              color: "white",
            }}
          />
        </Link>
        <Link
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="Experience"
            value="experience"
            sx={{
              color: "white",
            }}
          />
        </Link>
        <Link
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="Blog"
            value="blog"
            sx={{
              color: "white",
            }}
          />
        </Link>
        <Link
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="Contacts"
            value="contacts"
            sx={{
              color: "white",
            }}
          />
        </Link>
      </Tabs>
    </Box>
  );
}
