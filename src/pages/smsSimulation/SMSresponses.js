const getRightMessage = (arr, str) => {
  return arr.find((el) => {
    if (el.type === str) return el.message;
  });
};

const executeStateUpdate = (responseUser, provObj, iniText, setIniText) => {
  setTimeout(() => {
    setIniText([...iniText, responseUser, provObj]);
  }, 600);
};

export const SmsResponse = (
  e,
  userResponses,
  optInOnboardingSMSData,
  iniText,
  setIniText,
  iniRef
) => {
  if (e.keyCode === 13) {
    let smsAnswer = e.currentTarget.value.toLowerCase();
    let responseUser = { ...userResponses[0], message: [smsAnswer] };
    setIniText([...iniText, responseUser]);
    let provObj = {};
    switch (smsAnswer) {
      case "yes":
        provObj = getRightMessage(optInOnboardingSMSData, smsAnswer);
        executeStateUpdate(responseUser, provObj, iniText, setIniText);
        break;
      case "no":
        provObj = getRightMessage(optInOnboardingSMSData, smsAnswer);
        executeStateUpdate(responseUser, provObj, iniText, setIniText);
        break;
      case "clear":
        setIniText([optInOnboardingSMSData[0]]);
        break;
      default:
        provObj = getRightMessage(optInOnboardingSMSData, "any");
        executeStateUpdate(responseUser, provObj, iniText, setIniText);
        break;
    }
    iniRef.current.value = "";
  }
};
