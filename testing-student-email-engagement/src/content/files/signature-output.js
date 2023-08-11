const signatureOutput = (state) => {
  return `<table
  width="470px"
  align="left"
  valign="top"
  border="0"
  cellspacing="0"
  cellpadding="0"
  style="
    display: block;
    background-color: #fff;
    font-family: 'Montserrat', Arial, sans-serif;
  "
>
  <tbody>
    <tr>
      <td
        width="470"
        height="22"
        valign="top"
        style="color: #3d75d4; font-size: 16px"
        role="none"
      >
        <strong id="pfirstName" tabIndex="1" aria-description="First name">
          ${state.firstName}
        </strong>
        <strong id="pLastName" tabIndex="2" aria-description="Last name">
          ${state.lastName}
        </strong>
        <span id="pronoun" role="presentation">
          ${state.pronoun ? "|" : ""}
          <span id="pronoun" tabindex="4" aria-description="Pronouns">
            ${state.pronoun}
          </span>
        </span>
      </td>
    </tr>
    <tr>
      <td
        width="470"
        height="22"
        valign="top"
        style="color: #303030; font-size: 16px"
        role="none"
      >
        <strong id="callOrText" tabIndex="5" aria-description="Call or Text">
          Call or text: ${state.phoneLine}
        </strong>
      </td>
    </tr>
    <tr>
      <td
        width="470"
        height="22"
        valign="top"
        style="color: #303030; font-size: 16px"
        role="none"
      >
        <strong id="callOrText" tabIndex="5" aria-description="Call or Text">
          General Admissions: ${state.generalHotline}
        </strong>
      </td>
    </tr>
    <tr>
      <td
        width="470"
        valign="top"
        style="color: #303030; font-size: 16px"
        role="none"
      >
        <strong id="email" tabIndex="5" aria-description="email">
          <a href="mailto:${state.universityEmail}">
            ${state.universityEmail}
          </a>
        </strong>
      </td>
    </tr>
    <tr>
      <td
        width="470"
        height="60px"
        valign="top"
        style="color: #303030; font-size: 16px"
        role="none"
      >
        <strong id="email" tabIndex="5" aria-description="email">
          <a
            href="${state.calenderLink}"
            style="text-decoration: none; font-size: 16px"
            target="_blank"
          >
            <span
              style="
                font-size: 16px;
                font-family: 'Proxima Nova', sans-serif;
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-variant-alternates: normal;
                text-decoration: underline;
                text-decoration-skip-ink: none;
                vertical-align: baseline;
                white-space: preserve;
              "
            >Schedule a meeting here&nbsp;</span>
          </a>
        </strong>
      </td>
    </tr>
    <tr>
      <td
        style="
          font-size: 14px;
          width: 394px;
          font-style: italic;
          text-align: left;
          margin-left: 2px;
          height: 60px;
          vertical-align: top;
        "
      >
        This email was sent by an employee of 2U, Inc., parent company of edX
        LLC (“2U”). ${state.UniversityName} works with 2U to deliver education
        programs online.
      </td>
    </tr>
    <tr>
      <td
        style="
          font-size: 14px;
          width: 394px;
          font-style: italic;
          text-align: left;
          margin-left: 2px;
        "
      >
        2U, Inc.
      </td>
    </tr>
    <tr>
      <td
        style="
          font-size: 14px;
          width: 394px;
          font-style: italic;
          text-align: left;
          margin-left: 2px;
        "
      >
        7900 Harkins Rd
      </td>
    </tr>
    <tr>
      <td
        style="
          font-size: 14px;
          width: 394px;
          font-style: italic;
          text-align: left;
          margin-left: 2px;
          height: 30px;
          vertical-align: top;
        "
      >
        Lanham, MD 20706
      </td>
    </tr>
    <tr>
      <td
        style="
          font-size: 14px;
          width: 394px;
          font-style: italic;
          text-align: left;
          margin-left: 2px;
          height: 80;
        "
      >
        <a target="_blank" href="${state.UnsubscribeLink}">
          If you no longer wish to receive these emails, you may unsubscribe at
          any time.
        </a>
      </td>
    </tr>
  </tbody>
</table>
`;
};

export default signatureOutput;
