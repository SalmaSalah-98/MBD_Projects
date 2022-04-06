/*
 * File: Lab3_1_private.h
 *
 * Code generated for Simulink model 'Lab3_1'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Apr 05 01:29:44 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. MISRA C:2012 guidelines
 *    2. Execution efficiency
 *    3. ROM efficiency
 *    4. RAM efficiency
 *    5. Debugging
 *    6. Safety precaution
 * Validation result: Not run
 */

#ifndef RTW_HEADER_Lab3_1_private_h_
#define RTW_HEADER_Lab3_1_private_h_
#include "rtwtypes.h"

extern void mul_wide_su32(int32_T in0, uint32_T in1, uint32_T *ptrOutBitsHi,
  uint32_T *ptrOutBitsLo);
extern int32_T mul_s32_s32_u32_sat(int32_T a, uint32_T b);

#endif                                 /* RTW_HEADER_Lab3_1_private_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
