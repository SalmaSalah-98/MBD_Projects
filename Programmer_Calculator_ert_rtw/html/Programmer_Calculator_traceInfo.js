function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Operand_1
 */
	this.urlHashMap["Programmer_Calculator:1"] = "Programmer_Calculator.c:40,48,56,64,72&Programmer_Calculator.h:44";
	/* <Root>/Operand_2 */
	this.urlHashMap["Programmer_Calculator:2"] = "Programmer_Calculator.c:41,49,57,65,78&Programmer_Calculator.h:45";
	/* <Root>/Logical
Operator3 */
	this.urlHashMap["Programmer_Calculator:12"] = "Programmer_Calculator.c:66";
	/* <Root>/Logical
Operator4 */
	this.urlHashMap["Programmer_Calculator:13"] = "Programmer_Calculator.c:73";
	/* <Root>/Logical
Operator5 */
	this.urlHashMap["Programmer_Calculator:14"] = "Programmer_Calculator.c:79";
	/* <Root>/Logical(AND)
Operator */
	this.urlHashMap["Programmer_Calculator:9"] = "Programmer_Calculator.c:42";
	/* <Root>/Logical(OR)
Operator
 */
	this.urlHashMap["Programmer_Calculator:10"] = "Programmer_Calculator.c:50";
	/* <Root>/Logical(XOR)
Operator
 */
	this.urlHashMap["Programmer_Calculator:11"] = "Programmer_Calculator.c:58";
	/* <Root>/Out1 */
	this.urlHashMap["Programmer_Calculator:3"] = "Programmer_Calculator.c:39&Programmer_Calculator.h:50";
	/* <Root>/Out2 */
	this.urlHashMap["Programmer_Calculator:15"] = "Programmer_Calculator.c:47&Programmer_Calculator.h:51";
	/* <Root>/Out3 */
	this.urlHashMap["Programmer_Calculator:16"] = "Programmer_Calculator.c:55&Programmer_Calculator.h:52";
	/* <Root>/Out4 */
	this.urlHashMap["Programmer_Calculator:17"] = "Programmer_Calculator.c:63&Programmer_Calculator.h:53";
	/* <Root>/Out5 */
	this.urlHashMap["Programmer_Calculator:18"] = "Programmer_Calculator.c:71&Programmer_Calculator.h:54";
	/* <Root>/Out6 */
	this.urlHashMap["Programmer_Calculator:19"] = "Programmer_Calculator.c:77&Programmer_Calculator.h:55";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Programmer_Calculator"};
	this.sidHashMap["Programmer_Calculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/Operand_1 "] = {sid: "Programmer_Calculator:1"};
	this.sidHashMap["Programmer_Calculator:1"] = {rtwname: "<Root>/Operand_1 "};
	this.rtwnameHashMap["<Root>/Operand_2"] = {sid: "Programmer_Calculator:2"};
	this.sidHashMap["Programmer_Calculator:2"] = {rtwname: "<Root>/Operand_2"};
	this.rtwnameHashMap["<Root>/Logical Operator3"] = {sid: "Programmer_Calculator:12"};
	this.sidHashMap["Programmer_Calculator:12"] = {rtwname: "<Root>/Logical Operator3"};
	this.rtwnameHashMap["<Root>/Logical Operator4"] = {sid: "Programmer_Calculator:13"};
	this.sidHashMap["Programmer_Calculator:13"] = {rtwname: "<Root>/Logical Operator4"};
	this.rtwnameHashMap["<Root>/Logical Operator5"] = {sid: "Programmer_Calculator:14"};
	this.sidHashMap["Programmer_Calculator:14"] = {rtwname: "<Root>/Logical Operator5"};
	this.rtwnameHashMap["<Root>/Logical(AND) Operator"] = {sid: "Programmer_Calculator:9"};
	this.sidHashMap["Programmer_Calculator:9"] = {rtwname: "<Root>/Logical(AND) Operator"};
	this.rtwnameHashMap["<Root>/Logical(OR) Operator "] = {sid: "Programmer_Calculator:10"};
	this.sidHashMap["Programmer_Calculator:10"] = {rtwname: "<Root>/Logical(OR) Operator "};
	this.rtwnameHashMap["<Root>/Logical(XOR) Operator "] = {sid: "Programmer_Calculator:11"};
	this.sidHashMap["Programmer_Calculator:11"] = {rtwname: "<Root>/Logical(XOR) Operator "};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Programmer_Calculator:3"};
	this.sidHashMap["Programmer_Calculator:3"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "Programmer_Calculator:15"};
	this.sidHashMap["Programmer_Calculator:15"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "Programmer_Calculator:16"};
	this.sidHashMap["Programmer_Calculator:16"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "Programmer_Calculator:17"};
	this.sidHashMap["Programmer_Calculator:17"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<Root>/Out5"] = {sid: "Programmer_Calculator:18"};
	this.sidHashMap["Programmer_Calculator:18"] = {rtwname: "<Root>/Out5"};
	this.rtwnameHashMap["<Root>/Out6"] = {sid: "Programmer_Calculator:19"};
	this.sidHashMap["Programmer_Calculator:19"] = {rtwname: "<Root>/Out6"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
