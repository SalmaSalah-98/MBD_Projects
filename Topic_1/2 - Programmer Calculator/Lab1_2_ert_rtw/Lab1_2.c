/*
 * File: Lab1_2.c
 *
 * Code generated for Simulink model 'Lab1_2'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Mon Apr 04 23:56:30 2022
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

#include "Lab1_2.h"
#include "Lab1_2_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Lab1_2_T Lab1_2_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Lab1_2_T Lab1_2_Y;

/* Real-time model */
RT_MODEL_Lab1_2_T Lab1_2_M_;
RT_MODEL_Lab1_2_T *const Lab1_2_M = &Lab1_2_M_;

/* Model step function */
void Lab1_2_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator'
   */
  Lab1_2_Y.Out1 = (int8_T)(Lab1_2_U.In1 & Lab1_2_U.In2);

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator1'
   */
  Lab1_2_Y.Out2 = (int8_T)(Lab1_2_U.In1 | Lab1_2_U.In2);

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator2'
   */
  Lab1_2_Y.Out3 = (int8_T)(Lab1_2_U.In1 ^ Lab1_2_U.In2);

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator3'
   */
  Lab1_2_Y.Out4 = (int8_T)~(int8_T)(Lab1_2_U.In1 & Lab1_2_U.In2);

  /* Outport: '<Root>/Out5' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator4'
   */
  Lab1_2_Y.Out5 = (int8_T)~(int8_T)(Lab1_2_U.In1 | Lab1_2_U.In2);

  /* Outport: '<Root>/Out6' incorporates:
   *  Inport: '<Root>/In1'
   *  S-Function (sfix_bitop): '<Root>/Bitwise input 1'
   */
  Lab1_2_Y.Out6 = (int8_T)~Lab1_2_U.In1;

  /* Outport: '<Root>/Out7' incorporates:
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise input 2'
   */
  Lab1_2_Y.Out7 = (int8_T)~Lab1_2_U.In2;
}

/* Model initialize function */
void Lab1_2_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Lab1_2_M, (NULL));

  /* external inputs */
  (void) memset((void *)&Lab1_2_U, 0,
                sizeof(ExtU_Lab1_2_T));

  /* external outputs */
  (void) memset((void *)&Lab1_2_Y, 0,
                sizeof(ExtY_Lab1_2_T));
}

/* Model terminate function */
void Lab1_2_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
