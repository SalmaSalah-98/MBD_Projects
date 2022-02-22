function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Operand1
 */
	this.urlHashMap["Scientific_Calculator:1"] = "Scientific_Calculator.c:40,48,56,65&Scientific_Calculator.h:44";
	/* <Root>/Operand2
 */
	this.urlHashMap["Scientific_Calculator:2"] = "Scientific_Calculator.c:41,49,57,66&Scientific_Calculator.h:45";
	/* <Root>/Add */
	this.urlHashMap["Scientific_Calculator:5"] = "Scientific_Calculator.c:42";
	/* <Root>/Display */
	this.urlHashMap["Scientific_Calculator:4"] = "msg=rtwMsg_reducedBlock&block=Scientific_Calculator:4";
	/* <Root>/Display1 */
	this.urlHashMap["Scientific_Calculator:12"] = "msg=rtwMsg_reducedBlock&block=Scientific_Calculator:12";
	/* <Root>/Display2 */
	this.urlHashMap["Scientific_Calculator:13"] = "msg=rtwMsg_reducedBlock&block=Scientific_Calculator:13";
	/* <Root>/Display3 */
	this.urlHashMap["Scientific_Calculator:14"] = "msg=rtwMsg_reducedBlock&block=Scientific_Calculator:14";
	/* <Root>/Divide */
	this.urlHashMap["Scientific_Calculator:7"] = "Scientific_Calculator.c:58";
	/* <Root>/Product */
	this.urlHashMap["Scientific_Calculator:8"] = "Scientific_Calculator.c:67";
	/* <Root>/Subtract */
	this.urlHashMap["Scientific_Calculator:6"] = "Scientific_Calculator.c:50";
	/* <Root>/Result
 */
	this.urlHashMap["Scientific_Calculator:3"] = "Scientific_Calculator.c:39&Scientific_Calculator.h:50";
	/* <Root>/Result
1 */
	this.urlHashMap["Scientific_Calculator:9"] = "Scientific_Calculator.c:47&Scientific_Calculator.h:51";
	/* <Root>/Result
2 */
	this.urlHashMap["Scientific_Calculator:10"] = "Scientific_Calculator.c:55&Scientific_Calculator.h:52";
	/* <Root>/Result
3 */
	this.urlHashMap["Scientific_Calculator:11"] = "Scientific_Calculator.c:64&Scientific_Calculator.h:53";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Scientific_Calculator"};
	this.sidHashMap["Scientific_Calculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/Operand1 "] = {sid: "Scientific_Calculator:1"};
	this.sidHashMap["Scientific_Calculator:1"] = {rtwname: "<Root>/Operand1 "};
	this.rtwnameHashMap["<Root>/Operand2 "] = {sid: "Scientific_Calculator:2"};
	this.sidHashMap["Scientific_Calculator:2"] = {rtwname: "<Root>/Operand2 "};
	this.rtwnameHashMap["<Root>/Add"] = {sid: "Scientific_Calculator:5"};
	this.sidHashMap["Scientific_Calculator:5"] = {rtwname: "<Root>/Add"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "Scientific_Calculator:4"};
	this.sidHashMap["Scientific_Calculator:4"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/Display1"] = {sid: "Scientific_Calculator:12"};
	this.sidHashMap["Scientific_Calculator:12"] = {rtwname: "<Root>/Display1"};
	this.rtwnameHashMap["<Root>/Display2"] = {sid: "Scientific_Calculator:13"};
	this.sidHashMap["Scientific_Calculator:13"] = {rtwname: "<Root>/Display2"};
	this.rtwnameHashMap["<Root>/Display3"] = {sid: "Scientific_Calculator:14"};
	this.sidHashMap["Scientific_Calculator:14"] = {rtwname: "<Root>/Display3"};
	this.rtwnameHashMap["<Root>/Divide"] = {sid: "Scientific_Calculator:7"};
	this.sidHashMap["Scientific_Calculator:7"] = {rtwname: "<Root>/Divide"};
	this.rtwnameHashMap["<Root>/Product"] = {sid: "Scientific_Calculator:8"};
	this.sidHashMap["Scientific_Calculator:8"] = {rtwname: "<Root>/Product"};
	this.rtwnameHashMap["<Root>/Subtract"] = {sid: "Scientific_Calculator:6"};
	this.sidHashMap["Scientific_Calculator:6"] = {rtwname: "<Root>/Subtract"};
	this.rtwnameHashMap["<Root>/Result "] = {sid: "Scientific_Calculator:3"};
	this.sidHashMap["Scientific_Calculator:3"] = {rtwname: "<Root>/Result "};
	this.rtwnameHashMap["<Root>/Result 1"] = {sid: "Scientific_Calculator:9"};
	this.sidHashMap["Scientific_Calculator:9"] = {rtwname: "<Root>/Result 1"};
	this.rtwnameHashMap["<Root>/Result 2"] = {sid: "Scientific_Calculator:10"};
	this.sidHashMap["Scientific_Calculator:10"] = {rtwname: "<Root>/Result 2"};
	this.rtwnameHashMap["<Root>/Result 3"] = {sid: "Scientific_Calculator:11"};
	this.sidHashMap["Scientific_Calculator:11"] = {rtwname: "<Root>/Result 3"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
