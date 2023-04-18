//import React from "react";
import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import questions from "./questions";
import generateMarkdown from "../utils/generateMarkdown";

//Function To Write: Handle the data from the form and send it to Generate Markdown file, which should begin the process of creating the file that will be the ReadMeFile, Do tomorrow


async function exportReadmeFile(data) {
  const fileData = data;
  const blob = new Blob([fileData], {type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "README.md";
  link.href = url;
  link.click();
}

const ReadmeForm = () => {
  const formRef = useRef(null);

  //Input State Handlers:

  const [title, setTitle] = useState("");
  const [descript, setDescript] = useState("");
  const [installation, setInstallation] = useState("");
  const [usage, setUsage] = useState("");
  const [videoexample, setVideoExample] = useState("");
  const [contribute, setContribute] = useState("");
  const [tests, setTests] = useState("");
  const [license, setLicense] = useState("");
  const [contact, setContact] = useState("");
  /*     const locale = "en";
    const [loading, setLoading] = useState(false); */

  //This gathers the data and sends it where I want it to go, so this will be likely sent to Generate Markdown
  const handleSubmit = (event) => {
    event.preventDefault();
    //setLoading(true);
    //this takes the answers and creates an array that the generateMarkdown.js can map
    const answers = [
      title,
      descript,
      installation,
      usage,
      videoexample,
      contribute,
      tests,
      license,
      contact,
    ];
    exportReadmeFile(generateMarkdown(answers));
    //alert();
  };

  const handleValueChange = (event) => {
    event.preventDefault();
    setLicense(event.target.value);
  };

  //Returned HTML/React Component code
  return (
    <div>
      <h1>README Creator</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <table>
          <tr>
            <th>{questions[0].name}</th>
            <td>
              <input
                type="text"
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>{questions[1].name}</th>
            <td>
              <input
                type="textarea"
                value={descript}
                name="descript"
                onChange={(e) => setDescript(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>{questions[2].name}</th>
            <td>
              <input
                type="text"
                value={installation}
                name="installation"
                onChange={(e) => setInstallation(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>{questions[3].name}</th>
            <td>
              <input
                type="text"
                value={usage}
                name="usage"
                onChange={(e) => setUsage(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>{questions[4].name}</th>
            <td>
              <input
                type="text"
                value={videoexample}
                name="videoexample"
                onChange={(e) => setVideoExample(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>{questions[5].name}</th>
            <td>
              <input
                type="text"
                value={contribute}
                name="contribute"
                onChange={(e) => setContribute(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>{questions[6].name}</th>
            <td>
              <input
                type="text"
                value={tests}
                name="tests"
                onChange={(e) => setTests(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>{questions[7].name}</th>
            <td>
              <table onChange={handleValueChange}>
                <tr>
                  <input
                    type="radio"
                    id={license}
                    name="license"
                    value="Apache"
                  />
                  <label>{questions[7].choices[0].name}</label>
                </tr>
                <tr>
                  <input
                    type="radio"
                    id={license}
                    name="license"
                    value="MIT"
                  />
                  <label>{questions[7].choices[1].name}</label>
                </tr>
                <tr>
                  <input
                    type="radio"
                    id={license}
                    name="license"
                    value="Mozilla Public License"
                  />
                  <label>{questions[7].choices[2].name}</label>
                </tr>
                <tr>
                  <input
                    type="radio"
                    id={license}
                    name="license"
                    value="GNU"
                  />
                  <label>{questions[7].choices[3].name}</label>
                </tr>
                <tr>
                  <input
                    type="radio"
                    id={license}
                    name="license"
                    value="The Unlicense"
                  />
                  <label>{questions[7].choices[4].name}</label>
                </tr>
                <tr>
                  <input
                    type="radio"
                    id={license}
                    name="license"
                    value="none"
                  />
                  <label>No License</label>

                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <th>{questions[8].name}</th>
            <td>
              <input
                type="email"
                value={contact}
                name="contact"
                onChange={(e) => setContact(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" value="Submit" />
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/">
                <button>Back</button>
              </Link>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default ReadmeForm;
