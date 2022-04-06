function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Lab2_3:7"] = "Lab2_3.c:47,59&Lab2_3.h:43";
	/* <Root>/Display */
	this.urlHashMap["Lab2_3:9"] = "msg=rtwMsg_SimulationReducedBlock&block=Lab2_3:9";
	/* <Root>/For Iterator
Subsystem */
	this.urlHashMap["Lab2_3:1"] = "Lab2_3.c:41,60";
	/* <Root>/Out1 */
	this.urlHashMap["Lab2_3:8"] = "Lab2_3.c:49&Lab2_3.h:48";
	/* <S1>/For Iterator */
	this.urlHashMap["Lab2_3:3"] = "Lab2_3.c:42";
	/* <S1>/Product */
	this.urlHashMap["Lab2_3:5"] = "Lab2_3.c:50";
	/* <S1>/Unit Delay */
	this.urlHashMap["Lab2_3:6"] = "Lab2_3.c:44,51,55";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Lab2_3"};
	this.sidHashMap["Lab2_3"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Lab2_3:1"};
	this.sidHashMap["Lab2_3:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Lab2_3:7"};
	this.sidHashMap["Lab2_3:7"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "Lab2_3:9"};
	this.sidHashMap["Lab2_3:9"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/For Iterator Subsystem"] = {sid: "Lab2_3:1"};
	this.sidHashMap["Lab2_3:1"] = {rtwname: "<Root>/For Iterator Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Lab2_3:8"};
	this.sidHashMap["Lab2_3:8"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "Lab2_3:2"};
	this.sidHashMap["Lab2_3:2"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/For Iterator"] = {sid: "Lab2_3:3"};
	this.sidHashMap["Lab2_3:3"] = {rtwname: "<S1>/For Iterator"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "Lab2_3:5"};
	this.sidHashMap["Lab2_3:5"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Unit Delay"] = {sid: "Lab2_3:6"};
	this.sidHashMap["Lab2_3:6"] = {rtwname: "<S1>/Unit Delay"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "Lab2_3:4"};
	this.sidHashMap["Lab2_3:4"] = {rtwname: "<S1>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
