import logo from "./logo.svg";
import "./App.css";
import SignatureInput from "./content/files/signature-input";
import SignatureOutput from "./content/files/signature-output";
import { useState } from "react";
function App() {
  const [popup, setPopup] = useState(false);
  const [code, setCode] = useState("");
  const handleCodeChange = (code) => {
    setPopup(true);
    setCode(code.trim(""));
  };
  const copyToClipboard = (containerid) => {
    const element = document.getElementById(containerid); // Get the container by ID

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNode(element);
    selection.removeAllRanges();
    range.setStart(element, 0);
    console.log(element);
    range.setEnd(element, 2);
    selection.addRange(range);

    document.execCommand("copy");
    let btnElement = document.getElementById("copy-popup");
    initCopyNotification(btnElement);
  };
  function initCopyNotification(element) {
    const currentText = element.innerText;
    element.classList.add("copied");
    element.innerHTML =
      '<span style="line-height:12px">📋</span> Copied to clipboard!';
    const removeNotification = setTimeout(() => {
      element.classList.remove("copied");
      element.innerText = currentText;
      clearTimeout(removeNotification);
    }, 3000);
  }
  return (
    <div className="App">
      {popup && <div id="popup" class="show"></div>}
      {popup && (
        <div id="popup-inner">
          <div
            className="innerContent"
            id="TableIdContent"
            dangerouslySetInnerHTML={{ __html: code }}
          ></div>
          <br></br>
          <button
            onClick={(e) => copyToClipboard("popup-inner")}
            class="btn copy"
            id="copy-popup"
          >
            Copy generated signature
          </button>
          <button
            onClick={() => setPopup(false)}
            class="btn cancel"
            id="cancel-popup"
          >
            Cancel
          </button>
        </div>
      )}
      <SignatureInput
        handleCodeChange={handleCodeChange}
        popup={popup}
        setPopup={setPopup}
      />
      {/* <SignatureOutput /> */}
    </div>
  );
}

export default App;
