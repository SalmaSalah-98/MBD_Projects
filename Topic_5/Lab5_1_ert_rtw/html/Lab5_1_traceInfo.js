function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Lab5_1:16"] = "Lab5_1.c:41&Lab5_1.h:43";
	/* <Root>/Data Type Conversion */
	this.urlHashMap["Lab5_1:4"] = "msg=rtwMsg_SimulationReducedBlock&block=Lab5_1:4";
	/* <Root>/Data Type Conversion1 */
	this.urlHashMap["Lab5_1:10"] = "Lab5_1.c:40";
	/* <Root>/Scope */
	this.urlHashMap["Lab5_1:14"] = "msg=rtwMsg_notTraceable&block=Lab5_1:14";
	/* <Root>/Out1 */
	this.urlHashMap["Lab5_1:13"] = "Lab5_1.c:38&Lab5_1.h:48";
	/* <S1>/Constant */
	this.urlHashMap["Lab5_1:2:158"] = "Lab5_1.c:39";
	/* <S2>/Clock */
	this.urlHashMap["Lab5_1:11:167"] = "msg=rtwMsg_notTraceable&block=Lab5_1:11:167";
	/* <S2>/Constant */
	this.urlHashMap["Lab5_1:11:168"] = "msg=rtwMsg_notTraceable&block=Lab5_1:11:168";
	/* <S2>/Look-Up Table1 */
	this.urlHashMap["Lab5_1:11:223"] = "msg=rtwMsg_notTraceable&block=Lab5_1:11:223";
	/* <S2>/Math
Function */
	this.urlHashMap["Lab5_1:11:170"] = "msg=rtwMsg_notTraceable&block=Lab5_1:11:170";
	/* <S2>/Output */
	this.urlHashMap["Lab5_1:11:171"] = "msg=rtwMsg_notTraceable&block=Lab5_1:11:171";
	/* <S2>/Sum */
	this.urlHashMap["Lab5_1:11:172"] = "msg=rtwMsg_notTraceable&block=Lab5_1:11:172";
	/* <S2>/startTime */
	this.urlHashMap["Lab5_1:11:173"] = "msg=rtwMsg_notTraceable&block=Lab5_1:11:173";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Lab5_1"};
	this.sidHashMap["Lab5_1"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Lab5_1:2"};
	this.sidHashMap["Lab5_1:2"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "Lab5_1:11"};
	this.sidHashMap["Lab5_1:11"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Lab5_1:16"};
	this.sidHashMap["Lab5_1:16"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Data Type Conversion"] = {sid: "Lab5_1:4"};
	this.sidHashMap["Lab5_1:4"] = {rtwname: "<Root>/Data Type Conversion"};
	this.rtwnameHashMap["<Root>/Data Type Conversion1"] = {sid: "Lab5_1:10"};
	this.sidHashMap["Lab5_1:10"] = {rtwname: "<Root>/Data Type Conversion1"};
	this.rtwnameHashMap["<Root>/Enumerated Constant"] = {sid: "Lab5_1:2"};
	this.sidHashMap["Lab5_1:2"] = {rtwname: "<Root>/Enumerated Constant"};
	this.rtwnameHashMap["<Root>/Mux"] = {sid: "Lab5_1:8"};
	this.sidHashMap["Lab5_1:8"] = {rtwname: "<Root>/Mux"};
	this.rtwnameHashMap["<Root>/Repeating Sequence"] = {sid: "Lab5_1:11"};
	this.sidHashMap["Lab5_1:11"] = {rtwname: "<Root>/Repeating Sequence"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "Lab5_1:14"};
	this.sidHashMap["Lab5_1:14"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Lab5_1:13"};
	this.sidHashMap["Lab5_1:13"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "Lab5_1:2:158"};
	this.sidHashMap["Lab5_1:2:158"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Out"] = {sid: "Lab5_1:2:159"};
	this.sidHashMap["Lab5_1:2:159"] = {rtwname: "<S1>/Out"};
	this.rtwnameHashMap["<S2>/Clock"] = {sid: "Lab5_1:11:167"};
	this.sidHashMap["Lab5_1:11:167"] = {rtwname: "<S2>/Clock"};
	this.rtwnameHashMap["<S2>/Constant"] = {sid: "Lab5_1:11:168"};
	this.sidHashMap["Lab5_1:11:168"] = {rtwname: "<S2>/Constant"};
	this.rtwnameHashMap["<S2>/Look-Up Table1"] = {sid: "Lab5_1:11:223"};
	this.sidHashMap["Lab5_1:11:223"] = {rtwname: "<S2>/Look-Up Table1"};
	this.rtwnameHashMap["<S2>/Math Function"] = {sid: "Lab5_1:11:170"};
	this.sidHashMap["Lab5_1:11:170"] = {rtwname: "<S2>/Math Function"};
	this.rtwnameHashMap["<S2>/Output"] = {sid: "Lab5_1:11:171"};
	this.sidHashMap["Lab5_1:11:171"] = {rtwname: "<S2>/Output"};
	this.rtwnameHashMap["<S2>/Sum"] = {sid: "Lab5_1:11:172"};
	this.sidHashMap["Lab5_1:11:172"] = {rtwname: "<S2>/Sum"};
	this.rtwnameHashMap["<S2>/startTime"] = {sid: "Lab5_1:11:173"};
	this.sidHashMap["Lab5_1:11:173"] = {rtwname: "<S2>/startTime"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "Lab5_1:11:174"};
	this.sidHashMap["Lab5_1:11:174"] = {rtwname: "<S2>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
