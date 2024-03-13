import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <>
      <div>I'm About</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: 20, height: 20, backgroundColor: "red" }}></div>
      </div>
      <Outlet />
    </>
  );
};
export default About;
