Blockly.JavaScript["ky_006_passive_buzzer_block"] = function(block) {
    var text_ky_006_passive_buzzer_pin = block.getFieldValue(
      "KY_006_PASSIVE_BUZZER_PIN"
    );
    var variable_ky_006_passive_buzzer_state = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_006_PASSIVE_BUZZER_STATE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
  #VARIABLE
    int KY_006_PASSIVE_BUZZER_PIN = ${text_ky_006_passive_buzzer_pin}; // set the buzzer control digital IO pin
  #END

  #SETUP
    pinMode(KY_006_PASSIVE_BUZZER_PIN, OUTPUT); // set pin 8 as output
  #END

  ${variable_ky_006_passive_buzzer_state} = ${text_ky_006_passive_buzzer_pin};
    `;
    return code;
  };