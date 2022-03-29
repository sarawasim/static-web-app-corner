import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [people, setPeople] = useState("");

  useEffect(() => {
    getAllPeople();
  }, []);

  const url = "/api/toons";

  const getAllPeople = () => {
    axios
      .get(url)
      .then((response) => {
        const allPeople = response.data;
        setPeople(allPeople);
        console.log(allPeople);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {people && (
        <div className="App">
          <table>
            <thead>
              <tr>
                <th> ID </th>
                <th> Name </th>
                <th> Occupation </th>
              </tr>
            </thead>
            <tbody>
              {people.map((person, index) => (
                <tr key={index}>
                  <td> {person.id} </td>
                  <td> {person.firstName} </td>
                  <td> {person.occupation} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default App;
