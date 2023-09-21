Blockly.HSV_SATURATION = 1;

Blockly.Blocks['abs'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck("var")
        .appendField("λ");
    this.appendValueInput("EXPR")
        .setCheck(["var", "exp", "Number"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(130);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['app'] = {
  init: function() {
    this.appendValueInput("EXPR1")
        .setCheck(["var", "exp", "Number"])
        .appendField("app");
    this.appendValueInput("EXPR2")
        .setCheck(["var", "exp", "Number"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("")
        .appendField(new Blockly.FieldTextInput("x"), "NAME");
    this.setOutput(true, "var");
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['math_number'] = {
  /**
   * Block for numeric value.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Msg.MATH_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber('3'), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};
Blockly.JavaScript.forBlock['abs'] = function(block) {
  var var_name = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_NONE);
  var expr_code = Blockly.JavaScript.valueToCode(block, 'EXPR', Blockly.JavaScript.ORDER_NONE);
  var code = '(' + var_name + ' => ' + expr_code + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.forBlock['app'] = function(block) {
  var expr1_code = Blockly.JavaScript.valueToCode(block, 'EXPR1', Blockly.JavaScript.ORDER_NONE);
  var expr2_code = Blockly.JavaScript.valueToCode(block, 'EXPR2', Blockly.JavaScript.ORDER_NONE);
  var code = '(' + expr1_code + ')(' + expr2_code + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.forBlock['var'] = function(block) {
  var var_name = block.getFieldValue('NAME');
  var code = var_name;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.Blocks['math_arithmetic'] = {
  // ... existing code ...
};

Blockly.Blocks['named_func'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("function")
        .appendField(new Blockly.FieldTextInput("f"), "NAME");
    this.appendValueInput("FUNC")
        .setCheck("exp")
        .appendField("=");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['functionDef'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("f"), "NAME")
        .appendField("=");
    this.appendValueInput("EXPR")
        .setCheck(["var", "exp", "Number"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(40);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['functionDef'] = function(block) {
  var func_name = block.getFieldValue('NAME');
  var expr_code = Blockly.JavaScript.valueToCode(block, 'EXPR', Blockly.JavaScript.ORDER_NONE);
  var code = 'const ' + func_name + ' = ' + expr_code + ';';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['functionCall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("f"), "NAME");
    this.setOutput(true, "exp");
    this.setColour(40);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['functionCall'] = function(block) {
  var func_name = block.getFieldValue('NAME');
  var code = func_name;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
