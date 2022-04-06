function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Chart */
	this.urlHashMap["Lab3_2:1"] = "Lab3_2.c:25,47,169,201&Lab3_2.h:44,45,46,63,64,65";
	/* <Root>/Out1 */
	this.urlHashMap["Lab3_2:5"] = "Lab3_2.c:171&Lab3_2.h:70";
	/* <Root>/Out2 */
	this.urlHashMap["Lab3_2:6"] = "Lab3_2.c:174&Lab3_2.h:71";
	/* <Root>/Out3 */
	this.urlHashMap["Lab3_2:7"] = "Lab3_2.c:177&Lab3_2.h:72";
	/* <S1>:6 */
	this.urlHashMap["Lab3_2:1:6"] = "Lab3_2.c:75,80,115";
	/* <S1>:1 */
	this.urlHashMap["Lab3_2:1:1"] = "Lab3_2.c:63,106,111,146";
	/* <S1>:7 */
	this.urlHashMap["Lab3_2:1:7"] = "Lab3_2.c:84,137,142";
	/* <S1>:2 */
	this.urlHashMap["Lab3_2:1:2"] = "Lab3_2.c:59";
	/* <S1>:12 */
	this.urlHashMap["Lab3_2:1:12"] = "Lab3_2.c:141";
	/* <S1>:10 */
	this.urlHashMap["Lab3_2:1:10"] = "Lab3_2.c:79";
	/* <S1>:8 */
	this.urlHashMap["Lab3_2:1:8"] = "Lab3_2.c:110";
	/* <S1>:1:1 */
	this.urlHashMap["Lab3_2:1:1:1"] = "Lab3_2.c:64,67,70,147,150,153";
	/* <S1>:10:1 */
	this.urlHashMap["Lab3_2:1:10:1"] = "Lab3_2.c:76,77";
	/* <S1>:7:1 */
	this.urlHashMap["Lab3_2:1:7:1"] = "Lab3_2.c:85,88,91";
	/* <S1>:6:3 */
	this.urlHashMap["Lab3_2:1:6:3"] = "Lab3_2.c:94";
	/* <S1>:6:4 */
	this.urlHashMap["Lab3_2:1:6:4"] = "Lab3_2.c:97";
	/* <S1>:6:5 */
	this.urlHashMap["Lab3_2:1:6:5"] = "Lab3_2.c:100";
	/* <S1>:8:1 */
	this.urlHashMap["Lab3_2:1:8:1"] = "Lab3_2.c:107,108";
	/* <S1>:6:1 */
	this.urlHashMap["Lab3_2:1:6:1"] = "Lab3_2.c:116,119,122";
	/* <S1>:1:3 */
	this.urlHashMap["Lab3_2:1:1:3"] = "Lab3_2.c:125";
	/* <S1>:1:4 */
	this.urlHashMap["Lab3_2:1:1:4"] = "Lab3_2.c:128";
	/* <S1>:1:5 */
	this.urlHashMap["Lab3_2:1:1:5"] = "Lab3_2.c:131";
	/* <S1>:12:1 */
	this.urlHashMap["Lab3_2:1:12:1"] = "Lab3_2.c:138,139";
	/* <S1>:7:3 */
	this.urlHashMap["Lab3_2:1:7:3"] = "Lab3_2.c:156";
	/* <S1>:7:4 */
	this.urlHashMap["Lab3_2:1:7:4"] = "Lab3_2.c:159";
	/* <S1>:7:5 */
	this.urlHashMap["Lab3_2:1:7:5"] = "Lab3_2.c:162";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Lab3_2"};
	this.sidHashMap["Lab3_2"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Lab3_2:1"};
	this.sidHashMap["Lab3_2:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "Lab3_2:1"};
	this.sidHashMap["Lab3_2:1"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Lamp"] = {sid: "Lab3_2:2"};
	this.sidHashMap["Lab3_2:2"] = {rtwname: "<Root>/Lamp"};
	this.rtwnameHashMap["<Root>/Lamp1"] = {sid: "Lab3_2:3"};
	this.sidHashMap["Lab3_2:3"] = {rtwname: "<Root>/Lamp1"};
	this.rtwnameHashMap["<Root>/Lamp2"] = {sid: "Lab3_2:4"};
	this.sidHashMap["Lab3_2:4"] = {rtwname: "<Root>/Lamp2"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Lab3_2:5"};
	this.sidHashMap["Lab3_2:5"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "Lab3_2:6"};
	this.sidHashMap["Lab3_2:6"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "Lab3_2:7"};
	this.sidHashMap["Lab3_2:7"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<S1>:6"] = {sid: "Lab3_2:1:6"};
	this.sidHashMap["Lab3_2:1:6"] = {rtwname: "<S1>:6"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "Lab3_2:1:1"};
	this.sidHashMap["Lab3_2:1:1"] = {rtwname: "<S1>:1"};
	this.rtwnameHashMap["<S1>:7"] = {sid: "Lab3_2:1:7"};
	this.sidHashMap["Lab3_2:1:7"] = {rtwname: "<S1>:7"};
	this.rtwnameHashMap["<S1>:2"] = {sid: "Lab3_2:1:2"};
	this.sidHashMap["Lab3_2:1:2"] = {rtwname: "<S1>:2"};
	this.rtwnameHashMap["<S1>:12"] = {sid: "Lab3_2:1:12"};
	this.sidHashMap["Lab3_2:1:12"] = {rtwname: "<S1>:12"};
	this.rtwnameHashMap["<S1>:10"] = {sid: "Lab3_2:1:10"};
	this.sidHashMap["Lab3_2:1:10"] = {rtwname: "<S1>:10"};
	this.rtwnameHashMap["<S1>:8"] = {sid: "Lab3_2:1:8"};
	this.sidHashMap["Lab3_2:1:8"] = {rtwname: "<S1>:8"};
	this.rtwnameHashMap["<S1>:1:1"] = {sid: "Lab3_2:1:1:1"};
	this.sidHashMap["Lab3_2:1:1:1"] = {rtwname: "<S1>:1:1"};
	this.rtwnameHashMap["<S1>:10:1"] = {sid: "Lab3_2:1:10:1"};
	this.sidHashMap["Lab3_2:1:10:1"] = {rtwname: "<S1>:10:1"};
	this.rtwnameHashMap["<S1>:7:1"] = {sid: "Lab3_2:1:7:1"};
	this.sidHashMap["Lab3_2:1:7:1"] = {rtwname: "<S1>:7:1"};
	this.rtwnameHashMap["<S1>:6:3"] = {sid: "Lab3_2:1:6:3"};
	this.sidHashMap["Lab3_2:1:6:3"] = {rtwname: "<S1>:6:3"};
	this.rtwnameHashMap["<S1>:6:4"] = {sid: "Lab3_2:1:6:4"};
	this.sidHashMap["Lab3_2:1:6:4"] = {rtwname: "<S1>:6:4"};
	this.rtwnameHashMap["<S1>:6:5"] = {sid: "Lab3_2:1:6:5"};
	this.sidHashMap["Lab3_2:1:6:5"] = {rtwname: "<S1>:6:5"};
	this.rtwnameHashMap["<S1>:8:1"] = {sid: "Lab3_2:1:8:1"};
	this.sidHashMap["Lab3_2:1:8:1"] = {rtwname: "<S1>:8:1"};
	this.rtwnameHashMap["<S1>:6:1"] = {sid: "Lab3_2:1:6:1"};
	this.sidHashMap["Lab3_2:1:6:1"] = {rtwname: "<S1>:6:1"};
	this.rtwnameHashMap["<S1>:1:3"] = {sid: "Lab3_2:1:1:3"};
	this.sidHashMap["Lab3_2:1:1:3"] = {rtwname: "<S1>:1:3"};
	this.rtwnameHashMap["<S1>:1:4"] = {sid: "Lab3_2:1:1:4"};
	this.sidHashMap["Lab3_2:1:1:4"] = {rtwname: "<S1>:1:4"};
	this.rtwnameHashMap["<S1>:1:5"] = {sid: "Lab3_2:1:1:5"};
	this.sidHashMap["Lab3_2:1:1:5"] = {rtwname: "<S1>:1:5"};
	this.rtwnameHashMap["<S1>:12:1"] = {sid: "Lab3_2:1:12:1"};
	this.sidHashMap["Lab3_2:1:12:1"] = {rtwname: "<S1>:12:1"};
	this.rtwnameHashMap["<S1>:7:3"] = {sid: "Lab3_2:1:7:3"};
	this.sidHashMap["Lab3_2:1:7:3"] = {rtwname: "<S1>:7:3"};
	this.rtwnameHashMap["<S1>:7:4"] = {sid: "Lab3_2:1:7:4"};
	this.sidHashMap["Lab3_2:1:7:4"] = {rtwname: "<S1>:7:4"};
	this.rtwnameHashMap["<S1>:7:5"] = {sid: "Lab3_2:1:7:5"};
	this.sidHashMap["Lab3_2:1:7:5"] = {rtwname: "<S1>:7:5"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
