Blockly.Blocks["ky_006_passive_buzzer_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-006 PASSIVE BUZZER");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(
          new Blockly.FieldTextInput("0"),
          "KY_006_PASSIVE_BUZZER_PIN"
        )
        .appendField("SET STATE")
        .appendField(
          new Blockly.FieldVariable("KY_006_PASSIVE_BUZZER_STATE"),
          "KY_006_PASSIVE_BUZZER_STATE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };