function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Chart */
	this.urlHashMap["Lab4_1:26"] = "Lab4_1.c:54,85,108&Lab4_1.h:53,54";
	/* <Root>/Constant */
	this.urlHashMap["Lab4_1:13"] = "Lab4_1.c:45";
	/* <Root>/Constant1 */
	this.urlHashMap["Lab4_1:17"] = "Lab4_1.c:73";
	/* <Root>/Function-Call
Generator */
	this.urlHashMap["Lab4_1:12"] = "Lab4_1.c:41,49";
	/* <Root>/Function-Call
Subsystem */
	this.urlHashMap["Lab4_1:8"] = "Lab4_1.c:42";
	/* <Root>/Function-Call
Subsystem1 */
	this.urlHashMap["Lab4_1:19"] = "Lab4_1.c:71,80";
	/* <Root>/Out1 */
	this.urlHashMap["Lab4_1:7"] = "Lab4_1.c:51&Lab4_1.h:59";
	/* <Root>/Out2 */
	this.urlHashMap["Lab4_1:25"] = "Lab4_1.c:72&Lab4_1.h:60";
	/* <S1>:1 */
	this.urlHashMap["Lab4_1:26:1"] = "Lab4_1.c:69";
	/* <S1>:2 */
	this.urlHashMap["Lab4_1:26:2"] = "Lab4_1.c:66";
	/* <S1>:3 */
	this.urlHashMap["Lab4_1:26:3"] = "Lab4_1.c:76";
	/* <S1>:5 */
	this.urlHashMap["Lab4_1:26:5"] = "Lab4_1.c:77";
	/* <S2>/In1 */
	this.urlHashMap["Lab4_1:9"] = "Lab4_1.c:44&Lab4_1.h:44";
	/* <S3>/In1 */
	this.urlHashMap["Lab4_1:20"] = "Lab4_1.c:74";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Lab4_1"};
	this.sidHashMap["Lab4_1"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Lab4_1:26"};
	this.sidHashMap["Lab4_1:26"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "Lab4_1:8"};
	this.sidHashMap["Lab4_1:8"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "Lab4_1:19"};
	this.sidHashMap["Lab4_1:19"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "Lab4_1:26"};
	this.sidHashMap["Lab4_1:26"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "Lab4_1:13"};
	this.sidHashMap["Lab4_1:13"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "Lab4_1:17"};
	this.sidHashMap["Lab4_1:17"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Function-Call Generator"] = {sid: "Lab4_1:12"};
	this.sidHashMap["Lab4_1:12"] = {rtwname: "<Root>/Function-Call Generator"};
	this.rtwnameHashMap["<Root>/Function-Call Subsystem"] = {sid: "Lab4_1:8"};
	this.sidHashMap["Lab4_1:8"] = {rtwname: "<Root>/Function-Call Subsystem"};
	this.rtwnameHashMap["<Root>/Function-Call Subsystem1"] = {sid: "Lab4_1:19"};
	this.sidHashMap["Lab4_1:19"] = {rtwname: "<Root>/Function-Call Subsystem1"};
	this.rtwnameHashMap["<Root>/Lamp"] = {sid: "Lab4_1:14"};
	this.sidHashMap["Lab4_1:14"] = {rtwname: "<Root>/Lamp"};
	this.rtwnameHashMap["<Root>/Lamp1"] = {sid: "Lab4_1:23"};
	this.sidHashMap["Lab4_1:23"] = {rtwname: "<Root>/Lamp1"};
	this.rtwnameHashMap["<Root>/Toggle Switch"] = {sid: "Lab4_1:15"};
	this.sidHashMap["Lab4_1:15"] = {rtwname: "<Root>/Toggle Switch"};
	this.rtwnameHashMap["<Root>/Toggle Switch1"] = {sid: "Lab4_1:24"};
	this.sidHashMap["Lab4_1:24"] = {rtwname: "<Root>/Toggle Switch1"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Lab4_1:7"};
	this.sidHashMap["Lab4_1:7"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "Lab4_1:25"};
	this.sidHashMap["Lab4_1:25"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "Lab4_1:26:1"};
	this.sidHashMap["Lab4_1:26:1"] = {rtwname: "<S1>:1"};
	this.rtwnameHashMap["<S1>:2"] = {sid: "Lab4_1:26:2"};
	this.sidHashMap["Lab4_1:26:2"] = {rtwname: "<S1>:2"};
	this.rtwnameHashMap["<S1>:3"] = {sid: "Lab4_1:26:3"};
	this.sidHashMap["Lab4_1:26:3"] = {rtwname: "<S1>:3"};
	this.rtwnameHashMap["<S1>:5"] = {sid: "Lab4_1:26:5"};
	this.sidHashMap["Lab4_1:26:5"] = {rtwname: "<S1>:5"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "Lab4_1:9"};
	this.sidHashMap["Lab4_1:9"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/function"] = {sid: "Lab4_1:10"};
	this.sidHashMap["Lab4_1:10"] = {rtwname: "<S2>/function"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "Lab4_1:11"};
	this.sidHashMap["Lab4_1:11"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/In1"] = {sid: "Lab4_1:20"};
	this.sidHashMap["Lab4_1:20"] = {rtwname: "<S3>/In1"};
	this.rtwnameHashMap["<S3>/function"] = {sid: "Lab4_1:21"};
	this.sidHashMap["Lab4_1:21"] = {rtwname: "<S3>/function"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "Lab4_1:22"};
	this.sidHashMap["Lab4_1:22"] = {rtwname: "<S3>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
