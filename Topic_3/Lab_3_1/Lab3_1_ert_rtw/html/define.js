function CodeDefine() { 
this.def = new Array();
this.def["rt_OneStep"] = {file: "ert_main_c.html",line:39,type:"fcn"};
this.def["main"] = {file: "ert_main_c.html",line:76,type:"fcn"};
this.def["Lab3_1_U"] = {file: "Lab3_1_c.html",line:26,type:"var"};
this.def["Lab3_1_Y"] = {file: "Lab3_1_c.html",line:29,type:"var"};
this.def["Lab3_1_M_"] = {file: "Lab3_1_c.html",line:32,type:"var"};
this.def["Lab3_1_M"] = {file: "Lab3_1_c.html",line:33,type:"var"};
this.def["mul_wide_su32"] = {file: "Lab3_1_c.html",line:34,type:"fcn"};
this.def["mul_s32_s32_u32_sat"] = {file: "Lab3_1_c.html",line:79,type:"fcn"};
this.def["Lab3_1_step"] = {file: "Lab3_1_c.html",line:98,type:"fcn"};
this.def["Lab3_1_initialize"] = {file: "Lab3_1_c.html",line:130,type:"fcn"};
this.def["Lab3_1_terminate"] = {file: "Lab3_1_c.html",line:145,type:"fcn"};
this.def["ExtU_Lab3_1_T"] = {file: "Lab3_1_h.html",line:44,type:"type"};
this.def["ExtY_Lab3_1_T"] = {file: "Lab3_1_h.html",line:49,type:"type"};
this.def["RT_MODEL_Lab3_1_T"] = {file: "Lab3_1_types_h.html",line:26,type:"type"};
this.def["int8_T"] = {file: "rtwtypes_h.html",line:53,type:"type"};
this.def["uint8_T"] = {file: "rtwtypes_h.html",line:54,type:"type"};
this.def["int16_T"] = {file: "rtwtypes_h.html",line:55,type:"type"};
this.def["uint16_T"] = {file: "rtwtypes_h.html",line:56,type:"type"};
this.def["int32_T"] = {file: "rtwtypes_h.html",line:57,type:"type"};
this.def["uint32_T"] = {file: "rtwtypes_h.html",line:58,type:"type"};
this.def["real32_T"] = {file: "rtwtypes_h.html",line:59,type:"type"};
this.def["real64_T"] = {file: "rtwtypes_h.html",line:60,type:"type"};
this.def["real_T"] = {file: "rtwtypes_h.html",line:66,type:"type"};
this.def["time_T"] = {file: "rtwtypes_h.html",line:67,type:"type"};
this.def["boolean_T"] = {file: "rtwtypes_h.html",line:68,type:"type"};
this.def["int_T"] = {file: "rtwtypes_h.html",line:69,type:"type"};
this.def["uint_T"] = {file: "rtwtypes_h.html",line:70,type:"type"};
this.def["ulong_T"] = {file: "rtwtypes_h.html",line:71,type:"type"};
this.def["char_T"] = {file: "rtwtypes_h.html",line:72,type:"type"};
this.def["uchar_T"] = {file: "rtwtypes_h.html",line:73,type:"type"};
this.def["byte_T"] = {file: "rtwtypes_h.html",line:74,type:"type"};
this.def["creal32_T"] = {file: "rtwtypes_h.html",line:84,type:"type"};
this.def["creal64_T"] = {file: "rtwtypes_h.html",line:89,type:"type"};
this.def["creal_T"] = {file: "rtwtypes_h.html",line:94,type:"type"};
this.def["cint8_T"] = {file: "rtwtypes_h.html",line:101,type:"type"};
this.def["cuint8_T"] = {file: "rtwtypes_h.html",line:108,type:"type"};
this.def["cint16_T"] = {file: "rtwtypes_h.html",line:115,type:"type"};
this.def["cuint16_T"] = {file: "rtwtypes_h.html",line:122,type:"type"};
this.def["cint32_T"] = {file: "rtwtypes_h.html",line:129,type:"type"};
this.def["cuint32_T"] = {file: "rtwtypes_h.html",line:136,type:"type"};
this.def["pointer_T"] = {file: "rtwtypes_h.html",line:154,type:"type"};
}
CodeDefine.instance = new CodeDefine();
var testHarnessInfo = {OwnerFileName: "", HarnessOwner: "", HarnessName: "", IsTestHarness: "0"};
var relPathToBuildDir = "../ert_main.c";
var fileSep = "\\";
var isPC = true;
function Html2SrcLink() {
	this.html2SrcPath = new Array;
	this.html2Root = new Array;
	this.html2SrcPath["ert_main_c.html"] = "../ert_main.c";
	this.html2Root["ert_main_c.html"] = "ert_main_c.html";
	this.html2SrcPath["Lab3_1_c.html"] = "../Lab3_1.c";
	this.html2Root["Lab3_1_c.html"] = "Lab3_1_c.html";
	this.html2SrcPath["Lab3_1_h.html"] = "../Lab3_1.h";
	this.html2Root["Lab3_1_h.html"] = "Lab3_1_h.html";
	this.html2SrcPath["Lab3_1_private_h.html"] = "../Lab3_1_private.h";
	this.html2Root["Lab3_1_private_h.html"] = "Lab3_1_private_h.html";
	this.html2SrcPath["Lab3_1_types_h.html"] = "../Lab3_1_types.h";
	this.html2Root["Lab3_1_types_h.html"] = "Lab3_1_types_h.html";
	this.html2SrcPath["rtwtypes_h.html"] = "../rtwtypes.h";
	this.html2Root["rtwtypes_h.html"] = "rtwtypes_h.html";
	this.getLink2Src = function (htmlFileName) {
		 if (this.html2SrcPath[htmlFileName])
			 return this.html2SrcPath[htmlFileName];
		 else
			 return null;
	}
	this.getLinkFromRoot = function (htmlFileName) {
		 if (this.html2Root[htmlFileName])
			 return this.html2Root[htmlFileName];
		 else
			 return null;
	}
}
Html2SrcLink.instance = new Html2SrcLink();
var fileList = [
"ert_main_c.html","Lab3_1_c.html","Lab3_1_h.html","Lab3_1_private_h.html","Lab3_1_types_h.html","rtwtypes_h.html"];
