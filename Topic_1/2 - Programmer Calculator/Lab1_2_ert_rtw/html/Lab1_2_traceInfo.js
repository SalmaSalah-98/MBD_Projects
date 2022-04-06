function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Lab1_2:4"] = "Lab1_2.c:39,46,53,60,67,74&Lab1_2.h:44";
	/* <Root>/In2 */
	this.urlHashMap["Lab1_2:12"] = "Lab1_2.c:40,47,54,61,68,80&Lab1_2.h:45";
	/* <Root>/Bitwise
Operator */
	this.urlHashMap["Lab1_2:1"] = "Lab1_2.c:41";
	/* <Root>/Bitwise
Operator1 */
	this.urlHashMap["Lab1_2:5"] = "Lab1_2.c:48";
	/* <Root>/Bitwise
Operator2 */
	this.urlHashMap["Lab1_2:6"] = "Lab1_2.c:55";
	/* <Root>/Bitwise
Operator3 */
	this.urlHashMap["Lab1_2:7"] = "Lab1_2.c:62";
	/* <Root>/Bitwise
Operator4 */
	this.urlHashMap["Lab1_2:8"] = "Lab1_2.c:69";
	/* <Root>/Bitwise
input 1 */
	this.urlHashMap["Lab1_2:9"] = "Lab1_2.c:75";
	/* <Root>/Bitwise
input 2 */
	this.urlHashMap["Lab1_2:11"] = "Lab1_2.c:81";
	/* <Root>/Display */
	this.urlHashMap["Lab1_2:3"] = "msg=rtwMsg_reducedBlock&block=Lab1_2:3";
	/* <Root>/Display1 */
	this.urlHashMap["Lab1_2:19"] = "msg=rtwMsg_reducedBlock&block=Lab1_2:19";
	/* <Root>/Display2 */
	this.urlHashMap["Lab1_2:20"] = "msg=rtwMsg_reducedBlock&block=Lab1_2:20";
	/* <Root>/Display3 */
	this.urlHashMap["Lab1_2:21"] = "msg=rtwMsg_reducedBlock&block=Lab1_2:21";
	/* <Root>/Display4 */
	this.urlHashMap["Lab1_2:22"] = "msg=rtwMsg_reducedBlock&block=Lab1_2:22";
	/* <Root>/Display5 */
	this.urlHashMap["Lab1_2:23"] = "msg=rtwMsg_reducedBlock&block=Lab1_2:23";
	/* <Root>/Display6 */
	this.urlHashMap["Lab1_2:24"] = "msg=rtwMsg_reducedBlock&block=Lab1_2:24";
	/* <Root>/Out1 */
	this.urlHashMap["Lab1_2:2"] = "Lab1_2.c:38&Lab1_2.h:50";
	/* <Root>/Out2 */
	this.urlHashMap["Lab1_2:13"] = "Lab1_2.c:45&Lab1_2.h:51";
	/* <Root>/Out3 */
	this.urlHashMap["Lab1_2:14"] = "Lab1_2.c:52&Lab1_2.h:52";
	/* <Root>/Out4 */
	this.urlHashMap["Lab1_2:15"] = "Lab1_2.c:59&Lab1_2.h:53";
	/* <Root>/Out5 */
	this.urlHashMap["Lab1_2:16"] = "Lab1_2.c:66&Lab1_2.h:54";
	/* <Root>/Out6 */
	this.urlHashMap["Lab1_2:17"] = "Lab1_2.c:73&Lab1_2.h:55";
	/* <Root>/Out7 */
	this.urlHashMap["Lab1_2:18"] = "Lab1_2.c:79&Lab1_2.h:56";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Lab1_2"};
	this.sidHashMap["Lab1_2"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Lab1_2:4"};
	this.sidHashMap["Lab1_2:4"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "Lab1_2:12"};
	this.sidHashMap["Lab1_2:12"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Bitwise Operator"] = {sid: "Lab1_2:1"};
	this.sidHashMap["Lab1_2:1"] = {rtwname: "<Root>/Bitwise Operator"};
	this.rtwnameHashMap["<Root>/Bitwise Operator1"] = {sid: "Lab1_2:5"};
	this.sidHashMap["Lab1_2:5"] = {rtwname: "<Root>/Bitwise Operator1"};
	this.rtwnameHashMap["<Root>/Bitwise Operator2"] = {sid: "Lab1_2:6"};
	this.sidHashMap["Lab1_2:6"] = {rtwname: "<Root>/Bitwise Operator2"};
	this.rtwnameHashMap["<Root>/Bitwise Operator3"] = {sid: "Lab1_2:7"};
	this.sidHashMap["Lab1_2:7"] = {rtwname: "<Root>/Bitwise Operator3"};
	this.rtwnameHashMap["<Root>/Bitwise Operator4"] = {sid: "Lab1_2:8"};
	this.sidHashMap["Lab1_2:8"] = {rtwname: "<Root>/Bitwise Operator4"};
	this.rtwnameHashMap["<Root>/Bitwise input 1"] = {sid: "Lab1_2:9"};
	this.sidHashMap["Lab1_2:9"] = {rtwname: "<Root>/Bitwise input 1"};
	this.rtwnameHashMap["<Root>/Bitwise input 2"] = {sid: "Lab1_2:11"};
	this.sidHashMap["Lab1_2:11"] = {rtwname: "<Root>/Bitwise input 2"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "Lab1_2:3"};
	this.sidHashMap["Lab1_2:3"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/Display1"] = {sid: "Lab1_2:19"};
	this.sidHashMap["Lab1_2:19"] = {rtwname: "<Root>/Display1"};
	this.rtwnameHashMap["<Root>/Display2"] = {sid: "Lab1_2:20"};
	this.sidHashMap["Lab1_2:20"] = {rtwname: "<Root>/Display2"};
	this.rtwnameHashMap["<Root>/Display3"] = {sid: "Lab1_2:21"};
	this.sidHashMap["Lab1_2:21"] = {rtwname: "<Root>/Display3"};
	this.rtwnameHashMap["<Root>/Display4"] = {sid: "Lab1_2:22"};
	this.sidHashMap["Lab1_2:22"] = {rtwname: "<Root>/Display4"};
	this.rtwnameHashMap["<Root>/Display5"] = {sid: "Lab1_2:23"};
	this.sidHashMap["Lab1_2:23"] = {rtwname: "<Root>/Display5"};
	this.rtwnameHashMap["<Root>/Display6"] = {sid: "Lab1_2:24"};
	this.sidHashMap["Lab1_2:24"] = {rtwname: "<Root>/Display6"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Lab1_2:2"};
	this.sidHashMap["Lab1_2:2"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "Lab1_2:13"};
	this.sidHashMap["Lab1_2:13"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "Lab1_2:14"};
	this.sidHashMap["Lab1_2:14"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "Lab1_2:15"};
	this.sidHashMap["Lab1_2:15"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<Root>/Out5"] = {sid: "Lab1_2:16"};
	this.sidHashMap["Lab1_2:16"] = {rtwname: "<Root>/Out5"};
	this.rtwnameHashMap["<Root>/Out6"] = {sid: "Lab1_2:17"};
	this.sidHashMap["Lab1_2:17"] = {rtwname: "<Root>/Out6"};
	this.rtwnameHashMap["<Root>/Out7"] = {sid: "Lab1_2:18"};
	this.sidHashMap["Lab1_2:18"] = {rtwname: "<Root>/Out7"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
