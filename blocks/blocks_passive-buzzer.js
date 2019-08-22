Blockly.Blocks['ky_006_passive_buzzer_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-006 PASSIVE BUZZER");
    this.appendValueInput("KY_006_PASSIVE_BUZZER_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};