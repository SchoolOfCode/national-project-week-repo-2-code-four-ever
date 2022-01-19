import React from "react";
import { useLocation } from "react-router-dom";

// const dbdata = [
//   {
//     id: "1",
//     mainTitle: "React",
//     titles: "Description",
//     description: "we have covered npm and different commands",
//   },
//   {
//     id: "2",
//     mainTitle: "React",
//     titles: "Notes",
//     description: "npm will install all the dependencies",
//   },
//   {
//     id: "3",
//     mainTitle: "React",
//     titles: "Links",
//     description: "http://www.googliamo.com",
//   },
// ];

const API_URL = process.env.REACT_APP_API_URL;

const CardViewer = () => {
  const { state } = useLocation();
  const { wn, dn } = state;
  // console.log("HELLO", wn, dn);
  const [data, setData] = React.useState([]);
  // Set up the states for the inputs
  // const [titleInput, setTitleInput] = React.useState('');

  const find = wn * dn;

  React.useEffect(() => {
    async function fetchData() {
      const resp = await fetch(
        `${API_URL}/note/day${find}`
      );
      const fetchedData = await resp.json();
      setData(fetchedData);
      console.log(fetchedData);
    }
    fetchData();
  }, [find]);

  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </>
        );
      })}
    </div>
  );
};

export default CardViewer;
