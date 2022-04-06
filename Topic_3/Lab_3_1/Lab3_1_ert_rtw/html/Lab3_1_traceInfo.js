function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Lab3_1:2"] = "Lab3_1.c:104&Lab3_1.h:43";
	/* <Root>/Chart */
	this.urlHashMap["Lab3_1:1"] = "Lab3_1.c:103,122";
	/* <Root>/Out1 */
	this.urlHashMap["Lab3_1:3"] = "Lab3_1.c:124&Lab3_1.h:48";
	/* <S1>:2 */
	this.urlHashMap["Lab3_1:1:2"] = "Lab3_1.c:114";
	/* <S1>:3 */
	this.urlHashMap["Lab3_1:1:3"] = "Lab3_1.c:115";
	/* <S1>:1 */
	this.urlHashMap["Lab3_1:1:1"] = "Lab3_1.c:109";
	/* <S1>:4 */
	this.urlHashMap["Lab3_1:1:4"] = "Lab3_1.c:110";
	/* <S1>:5 */
	this.urlHashMap["Lab3_1:1:5"] = "Lab3_1.c:118";
	/* <S1>:6 */
	this.urlHashMap["Lab3_1:1:6"] = "Lab3_1.c:125";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Lab3_1"};
	this.sidHashMap["Lab3_1"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Lab3_1:1"};
	this.sidHashMap["Lab3_1:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Lab3_1:2"};
	this.sidHashMap["Lab3_1:2"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "Lab3_1:1"};
	this.sidHashMap["Lab3_1:1"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Lab3_1:3"};
	this.sidHashMap["Lab3_1:3"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>:2"] = {sid: "Lab3_1:1:2"};
	this.sidHashMap["Lab3_1:1:2"] = {rtwname: "<S1>:2"};
	this.rtwnameHashMap["<S1>:3"] = {sid: "Lab3_1:1:3"};
	this.sidHashMap["Lab3_1:1:3"] = {rtwname: "<S1>:3"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "Lab3_1:1:1"};
	this.sidHashMap["Lab3_1:1:1"] = {rtwname: "<S1>:1"};
	this.rtwnameHashMap["<S1>:4"] = {sid: "Lab3_1:1:4"};
	this.sidHashMap["Lab3_1:1:4"] = {rtwname: "<S1>:4"};
	this.rtwnameHashMap["<S1>:5"] = {sid: "Lab3_1:1:5"};
	this.sidHashMap["Lab3_1:1:5"] = {rtwname: "<S1>:5"};
	this.rtwnameHashMap["<S1>:6"] = {sid: "Lab3_1:1:6"};
	this.sidHashMap["Lab3_1:1:6"] = {rtwname: "<S1>:6"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
