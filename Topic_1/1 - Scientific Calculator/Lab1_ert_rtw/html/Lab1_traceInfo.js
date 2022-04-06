function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Lab1:6"] = "Lab1.c:42,49,56,88&Lab1.h:49";
	/* <Root>/In2 */
	this.urlHashMap["Lab1:7"] = "Lab1.c:43,50,57,63&Lab1.h:50";
	/* <Root>/Add */
	this.urlHashMap["Lab1:3"] = "Lab1.c:44";
	/* <Root>/Display */
	this.urlHashMap["Lab1:5"] = "msg=rtwMsg_reducedBlock&block=Lab1:5";
	/* <Root>/Display1 */
	this.urlHashMap["Lab1:13"] = "msg=rtwMsg_reducedBlock&block=Lab1:13";
	/* <Root>/Display2 */
	this.urlHashMap["Lab1:14"] = "msg=rtwMsg_reducedBlock&block=Lab1:14";
	/* <Root>/Display3 */
	this.urlHashMap["Lab1:15"] = "msg=rtwMsg_reducedBlock&block=Lab1:15";
	/* <Root>/Display4 */
	this.urlHashMap["Lab1:27"] = "msg=rtwMsg_reducedBlock&block=Lab1:27";
	/* <Root>/Divide */
	this.urlHashMap["Lab1:9"] = "Lab1.c:89";
	/* <Root>/If */
	this.urlHashMap["Lab1:20"] = "Lab1.c:62,85";
	/* <Root>/If Action
Subsystem */
	this.urlHashMap["Lab1:16"] = "Lab1.c:67,75";
	/* <Root>/If Action
Subsystem1 */
	this.urlHashMap["Lab1:21"] = "Lab1.c:77,82";
	/* <Root>/Product */
	this.urlHashMap["Lab1:2"] = "Lab1.c:58";
	/* <Root>/Subtract */
	this.urlHashMap["Lab1:1"] = "Lab1.c:51";
	/* <Root>/Out1 */
	this.urlHashMap["Lab1:4"] = "Lab1.c:41&Lab1.h:55";
	/* <Root>/Out2 */
	this.urlHashMap["Lab1:10"] = "Lab1.c:48&Lab1.h:56";
	/* <Root>/Out3 */
	this.urlHashMap["Lab1:11"] = "Lab1.c:55&Lab1.h:57";
	/* <Root>/Out4 */
	this.urlHashMap["Lab1:12"] = "Lab1.c:87&Lab1.h:58";
	/* <Root>/Out5 */
	this.urlHashMap["Lab1:26"] = "Lab1.c:70&Lab1.h:59";
	/* <S1>/Action Port */
	this.urlHashMap["Lab1:18"] = "Lab1.c:68";
	/* <S1>/Constant */
	this.urlHashMap["Lab1:25"] = "Lab1.c:71";
	/* <S2>/In1 */
	this.urlHashMap["Lab1:22"] = "Lab1.c:64&Lab1.h:44";
	/* <S2>/Action Port */
	this.urlHashMap["Lab1:23"] = "Lab1.c:78";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Lab1"};
	this.sidHashMap["Lab1"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Lab1:16"};
	this.sidHashMap["Lab1:16"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "Lab1:21"};
	this.sidHashMap["Lab1:21"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Lab1:6"};
	this.sidHashMap["Lab1:6"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "Lab1:7"};
	this.sidHashMap["Lab1:7"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Add"] = {sid: "Lab1:3"};
	this.sidHashMap["Lab1:3"] = {rtwname: "<Root>/Add"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "Lab1:5"};
	this.sidHashMap["Lab1:5"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/Display1"] = {sid: "Lab1:13"};
	this.sidHashMap["Lab1:13"] = {rtwname: "<Root>/Display1"};
	this.rtwnameHashMap["<Root>/Display2"] = {sid: "Lab1:14"};
	this.sidHashMap["Lab1:14"] = {rtwname: "<Root>/Display2"};
	this.rtwnameHashMap["<Root>/Display3"] = {sid: "Lab1:15"};
	this.sidHashMap["Lab1:15"] = {rtwname: "<Root>/Display3"};
	this.rtwnameHashMap["<Root>/Display4"] = {sid: "Lab1:27"};
	this.sidHashMap["Lab1:27"] = {rtwname: "<Root>/Display4"};
	this.rtwnameHashMap["<Root>/Divide"] = {sid: "Lab1:9"};
	this.sidHashMap["Lab1:9"] = {rtwname: "<Root>/Divide"};
	this.rtwnameHashMap["<Root>/If"] = {sid: "Lab1:20"};
	this.sidHashMap["Lab1:20"] = {rtwname: "<Root>/If"};
	this.rtwnameHashMap["<Root>/If Action Subsystem"] = {sid: "Lab1:16"};
	this.sidHashMap["Lab1:16"] = {rtwname: "<Root>/If Action Subsystem"};
	this.rtwnameHashMap["<Root>/If Action Subsystem1"] = {sid: "Lab1:21"};
	this.sidHashMap["Lab1:21"] = {rtwname: "<Root>/If Action Subsystem1"};
	this.rtwnameHashMap["<Root>/Product"] = {sid: "Lab1:2"};
	this.sidHashMap["Lab1:2"] = {rtwname: "<Root>/Product"};
	this.rtwnameHashMap["<Root>/Subtract"] = {sid: "Lab1:1"};
	this.sidHashMap["Lab1:1"] = {rtwname: "<Root>/Subtract"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Lab1:4"};
	this.sidHashMap["Lab1:4"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "Lab1:10"};
	this.sidHashMap["Lab1:10"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "Lab1:11"};
	this.sidHashMap["Lab1:11"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "Lab1:12"};
	this.sidHashMap["Lab1:12"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<Root>/Out5"] = {sid: "Lab1:26"};
	this.sidHashMap["Lab1:26"] = {rtwname: "<Root>/Out5"};
	this.rtwnameHashMap["<S1>/Action Port"] = {sid: "Lab1:18"};
	this.sidHashMap["Lab1:18"] = {rtwname: "<S1>/Action Port"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "Lab1:25"};
	this.sidHashMap["Lab1:25"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "Lab1:19"};
	this.sidHashMap["Lab1:19"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "Lab1:22"};
	this.sidHashMap["Lab1:22"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "Lab1:23"};
	this.sidHashMap["Lab1:23"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "Lab1:24"};
	this.sidHashMap["Lab1:24"] = {rtwname: "<S2>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
