var xmlString = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="app" id="|*nT426^Js?MG3aO+bXD" x="68" y="78"><value name="EXPR1"><block type="abs" id="7znB^lm.*76=$cfE_3rX"><value name="VAR"><block type="var" id="k)Q]$^YH;K77M[S%?:31"><field name="NAME">x</field></block></value><value name="EXPR"><block type="math_arithmetic" id="_OOsz0y!G?ZALI6*!p:0"><field name="OP">ADD</field><value name="A"><block type="var" id="~y[MCf2?m(5ttw;tYt+z"><field name="NAME">x</field></block></value><value name="B"><block type="math_number" id="A[Y|QmJ8,)wWo6TU-[Xt"><field name="NUM">1</field></block></value></block></value></block></value><value name="EXPR2"><block type="math_number" id="sYHQvj3I3*+5jya=0}0("><field name="NUM">2</field></block></value></block></xml>';
var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var serializer = new XMLSerializer();
window.defaultBlocks = serializer.serializeToString(xmlDoc);
