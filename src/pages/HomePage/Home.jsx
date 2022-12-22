import React, { useEffect, useState } from "react";
import { Button } from "../../globalStyles";
import "../../App.css";

const Home = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });
  // const [lastName, setLastName] = useState("");

  useEffect(() => {
    let saveFirstName = localStorage.getItem("firstName");
    let saveLastName = localStorage.getItem("lastName");

    setData({
      firstName: saveFirstName || "",
      lastName: saveLastName || "",
    });
    console.log(saveFirstName, saveLastName);
  }, []);

  let clearData = () => {
    localStorage.clear();
    setData({ firstName: "Build", lastName: "formula" });
  };

  return (
    <>
      <div className="HomePageData">
        <div className="textDataHome">
          <h2>Welcome</h2>
          <div className="mydataofLocal">
            <span>{data.firstName} </span>
            <span>{data.lastName}</span>
          </div>
          <Button onClick={() => clearData()}>Clear</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
