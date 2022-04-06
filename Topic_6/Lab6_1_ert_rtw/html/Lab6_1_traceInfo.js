function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Chart */
	this.urlHashMap["Lab6_1:7"] = "Lab6_1.c:50,104,132&Lab6_1.h:54,55";
	/* <Root>/Function-Call
Subsystem */
	this.urlHashMap["Lab6_1:1"] = "Lab6_1.c:67,98";
	/* <Root>/Pulse
Generator */
	this.urlHashMap["Lab6_1:12"] = "Lab6_1.c:41,48,129&Lab6_1.h:53";
	/* <Root>/Out1 */
	this.urlHashMap["Lab6_1:11"] = "Lab6_1.c:106&Lab6_1.h:60";
	/* <S1>:1 */
	this.urlHashMap["Lab6_1:7:1"] = "Lab6_1.c:65";
	/* <S1>:2 */
	this.urlHashMap["Lab6_1:7:2"] = "Lab6_1.c:62";
	/* <S1>:3 */
	this.urlHashMap["Lab6_1:7:3"] = "Lab6_1.c:69";
	/* <S1>:5 */
	this.urlHashMap["Lab6_1:7:5"] = "Lab6_1.c:70";
	/* <S2>/CheckSwitchStatus */
	this.urlHashMap["Lab6_1:5"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=Lab6_1:5";
	/* <S2>/LedStatus  */
	this.urlHashMap["Lab6_1:6"] = "Lab6_1.c:68&Lab6_1.h:44";
	/* <S3>:1 */
	this.urlHashMap["Lab6_1:5:1"] = "Lab6_1.c:77";
	/* <S3>:2 */
	this.urlHashMap["Lab6_1:5:2"] = "msg=rtwMsg_notTraceable&block=Lab6_1:5:2";
	/* <S3>:3 */
	this.urlHashMap["Lab6_1:5:3"] = "Lab6_1.c:81";
	/* <S3>:4 */
	this.urlHashMap["Lab6_1:5:4"] = "msg=rtwMsg_notTraceable&block=Lab6_1:5:4";
	/* <S3>:5 */
	this.urlHashMap["Lab6_1:5:5"] = "msg=rtwMsg_notTraceable&block=Lab6_1:5:5";
	/* <S3>:6 */
	this.urlHashMap["Lab6_1:5:6"] = "Lab6_1.c:83";
	/* <S3>:2:1 */
	this.urlHashMap["Lab6_1:5:2:1"] = "Lab6_1.c:79,80";
	/* <S3>:3:1 */
	this.urlHashMap["Lab6_1:5:3:1"] = "Lab6_1.c:82";
	/* <S4>:1 */
	this.urlHashMap["Lab6_1:6:1"] = "Lab6_1.c:90";
	/* <S4>:2 */
	this.urlHashMap["Lab6_1:6:2"] = "msg=rtwMsg_notTraceable&block=Lab6_1:6:2";
	/* <S4>:3 */
	this.urlHashMap["Lab6_1:6:3"] = "Lab6_1.c:94";
	/* <S4>:4 */
	this.urlHashMap["Lab6_1:6:4"] = "msg=rtwMsg_notTraceable&block=Lab6_1:6:4";
	/* <S4>:5 */
	this.urlHashMap["Lab6_1:6:5"] = "msg=rtwMsg_notTraceable&block=Lab6_1:6:5";
	/* <S4>:6 */
	this.urlHashMap["Lab6_1:6:6"] = "Lab6_1.c:99";
	/* <S4>:2:1 */
	this.urlHashMap["Lab6_1:6:2:1"] = "Lab6_1.c:92,93";
	/* <S4>:3:1 */
	this.urlHashMap["Lab6_1:6:3:1"] = "Lab6_1.c:95";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Lab6_1"};
	this.sidHashMap["Lab6_1"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Lab6_1:7"};
	this.sidHashMap["Lab6_1:7"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "Lab6_1:1"};
	this.sidHashMap["Lab6_1:1"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "Lab6_1:5"};
	this.sidHashMap["Lab6_1:5"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "Lab6_1:6"};
	this.sidHashMap["Lab6_1:6"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "Lab6_1:7"};
	this.sidHashMap["Lab6_1:7"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Function-Call Subsystem"] = {sid: "Lab6_1:1"};
	this.sidHashMap["Lab6_1:1"] = {rtwname: "<Root>/Function-Call Subsystem"};
	this.rtwnameHashMap["<Root>/Lamp1"] = {sid: "Lab6_1:8"};
	this.sidHashMap["Lab6_1:8"] = {rtwname: "<Root>/Lamp1"};
	this.rtwnameHashMap["<Root>/Pulse Generator"] = {sid: "Lab6_1:12"};
	this.sidHashMap["Lab6_1:12"] = {rtwname: "<Root>/Pulse Generator"};
	this.rtwnameHashMap["<Root>/Toggle Switch1"] = {sid: "Lab6_1:9"};
	this.sidHashMap["Lab6_1:9"] = {rtwname: "<Root>/Toggle Switch1"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Lab6_1:11"};
	this.sidHashMap["Lab6_1:11"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "Lab6_1:7:1"};
	this.sidHashMap["Lab6_1:7:1"] = {rtwname: "<S1>:1"};
	this.rtwnameHashMap["<S1>:2"] = {sid: "Lab6_1:7:2"};
	this.sidHashMap["Lab6_1:7:2"] = {rtwname: "<S1>:2"};
	this.rtwnameHashMap["<S1>:3"] = {sid: "Lab6_1:7:3"};
	this.sidHashMap["Lab6_1:7:3"] = {rtwname: "<S1>:3"};
	this.rtwnameHashMap["<S1>:5"] = {sid: "Lab6_1:7:5"};
	this.sidHashMap["Lab6_1:7:5"] = {rtwname: "<S1>:5"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "Lab6_1:2"};
	this.sidHashMap["Lab6_1:2"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/function"] = {sid: "Lab6_1:3"};
	this.sidHashMap["Lab6_1:3"] = {rtwname: "<S2>/function"};
	this.rtwnameHashMap["<S2>/CheckSwitchStatus"] = {sid: "Lab6_1:5"};
	this.sidHashMap["Lab6_1:5"] = {rtwname: "<S2>/CheckSwitchStatus"};
	this.rtwnameHashMap["<S2>/LedStatus "] = {sid: "Lab6_1:6"};
	this.sidHashMap["Lab6_1:6"] = {rtwname: "<S2>/LedStatus "};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "Lab6_1:4"};
	this.sidHashMap["Lab6_1:4"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>:1"] = {sid: "Lab6_1:5:1"};
	this.sidHashMap["Lab6_1:5:1"] = {rtwname: "<S3>:1"};
	this.rtwnameHashMap["<S3>:2"] = {sid: "Lab6_1:5:2"};
	this.sidHashMap["Lab6_1:5:2"] = {rtwname: "<S3>:2"};
	this.rtwnameHashMap["<S3>:3"] = {sid: "Lab6_1:5:3"};
	this.sidHashMap["Lab6_1:5:3"] = {rtwname: "<S3>:3"};
	this.rtwnameHashMap["<S3>:4"] = {sid: "Lab6_1:5:4"};
	this.sidHashMap["Lab6_1:5:4"] = {rtwname: "<S3>:4"};
	this.rtwnameHashMap["<S3>:5"] = {sid: "Lab6_1:5:5"};
	this.sidHashMap["Lab6_1:5:5"] = {rtwname: "<S3>:5"};
	this.rtwnameHashMap["<S3>:6"] = {sid: "Lab6_1:5:6"};
	this.sidHashMap["Lab6_1:5:6"] = {rtwname: "<S3>:6"};
	this.rtwnameHashMap["<S3>:2:1"] = {sid: "Lab6_1:5:2:1"};
	this.sidHashMap["Lab6_1:5:2:1"] = {rtwname: "<S3>:2:1"};
	this.rtwnameHashMap["<S3>:3:1"] = {sid: "Lab6_1:5:3:1"};
	this.sidHashMap["Lab6_1:5:3:1"] = {rtwname: "<S3>:3:1"};
	this.rtwnameHashMap["<S4>:1"] = {sid: "Lab6_1:6:1"};
	this.sidHashMap["Lab6_1:6:1"] = {rtwname: "<S4>:1"};
	this.rtwnameHashMap["<S4>:2"] = {sid: "Lab6_1:6:2"};
	this.sidHashMap["Lab6_1:6:2"] = {rtwname: "<S4>:2"};
	this.rtwnameHashMap["<S4>:3"] = {sid: "Lab6_1:6:3"};
	this.sidHashMap["Lab6_1:6:3"] = {rtwname: "<S4>:3"};
	this.rtwnameHashMap["<S4>:4"] = {sid: "Lab6_1:6:4"};
	this.sidHashMap["Lab6_1:6:4"] = {rtwname: "<S4>:4"};
	this.rtwnameHashMap["<S4>:5"] = {sid: "Lab6_1:6:5"};
	this.sidHashMap["Lab6_1:6:5"] = {rtwname: "<S4>:5"};
	this.rtwnameHashMap["<S4>:6"] = {sid: "Lab6_1:6:6"};
	this.sidHashMap["Lab6_1:6:6"] = {rtwname: "<S4>:6"};
	this.rtwnameHashMap["<S4>:2:1"] = {sid: "Lab6_1:6:2:1"};
	this.sidHashMap["Lab6_1:6:2:1"] = {rtwname: "<S4>:2:1"};
	this.rtwnameHashMap["<S4>:3:1"] = {sid: "Lab6_1:6:3:1"};
	this.sidHashMap["Lab6_1:6:3:1"] = {rtwname: "<S4>:3:1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
