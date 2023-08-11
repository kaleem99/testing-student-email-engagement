import { signatureData } from "../data";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import signatureOutput from "./signature-output";
const SignatureInput = ({ handleCodeChange, popup, setPopup }) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneLine: "",
    generalHotline: "",
    universityEmail: "",
    calenderLink: "",
    UniversityName: "",
    pronoun: "",
    UnsubscribeLink: "",
  });
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      Papa.parse(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHnQSaukgdQAU1D2qDbDUff5ia94gz3k-aDCyCBim6Y52OljZvowr4Rzd_qHLMa2yPezs14GyKl4rP/pub?gid=1229061563&single=true&output=csv",
        {
          download: true,
          header: true,
          complete: (results) => {
            setData(results.data);
            console.log(results.data[3][""]);
          },
        }
      );

      //   for (let i = 0; i < data.length; i++) {
      //     let result = data[i];
      //     for (const key in result) {
      //       const value = result[key];
      //       console.log(`Key: ${key}, Value: ${value}`);
      //     }
      //   }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const keyValues = Object.keys(state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const generateSignature = () => {
    for (let key in state) {
      if (
        (state[key] === "" && key !== "pronoun") ||
        (key === "UnsubscribeLink" && state[key] === "None")
      ) {
        return alert("Please ensure all your details are filled in.");
      }
    }
    const result = signatureOutput(state);
    console.log(result);
    handleCodeChange(result);
  };
  return (
    <div className="inputContainer">
      <h3>Enter your details</h3>
      {signatureData.map((text, i) => {
        return (
          <div className="labelAndInput">
            <label>{text}</label>
            {i < signatureData.length - 1 ? (
              <input
                name={keyValues[i]}
                onChange={(e) => handleChange(e)}
                value={state[keyValues[i]]}
                type="name"
              />
            ) : (
              <select name={keyValues[i]} onChange={(e) => handleChange(e)}>
                <option value="None">None</option>
                {data.map(
                  (item, index) =>
                    item[""] !== "" &&
                    item[""] !== "Business Unit Name" && (
                      <option value={item["_1"]} key={index}>
                        {console.log(item["_1"], item[""])}
                        {item[""]}
                      </option>
                    )
                )}
              </select>
            )}
          </div>
        );
      })}
      <button
        onClick={() => generateSignature()}
        class="btn"
        id="create-signature"
        tabindex="0"
      >
        Create Signature
      </button>
    </div>
  );
};

export default SignatureInput;
