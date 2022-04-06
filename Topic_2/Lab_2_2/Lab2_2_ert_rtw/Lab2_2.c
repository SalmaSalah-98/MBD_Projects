/*
 * File: Lab2_2.c
 *
 * Code generated for Simulink model 'Lab2_2'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Apr 05 00:31:10 2022
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

#include "Lab2_2.h"
#include "Lab2_2_private.h"

/* Block signals (auto storage) */
B_Lab2_2_T Lab2_2_B;

/* External inputs (root inport signals with auto storage) */
ExtU_Lab2_2_T Lab2_2_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Lab2_2_T Lab2_2_Y;

/* Real-time model */
RT_MODEL_Lab2_2_T Lab2_2_M_;
RT_MODEL_Lab2_2_T *const Lab2_2_M = &Lab2_2_M_;

/* Model step function */
void Lab2_2_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<S1>/Add'
   */
  Lab2_2_Y.Out1 = Lab2_2_U.In1 + Lab2_2_U.In2;

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<S1>/Subtract'
   */
  Lab2_2_Y.Out2 = Lab2_2_U.In1 - Lab2_2_U.In2;

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Product: '<S1>/Product'
   */
  Lab2_2_Y.Out3 = Lab2_2_U.In1 * Lab2_2_U.In2;

  /* If: '<S1>/If' incorporates:
   *  Inport: '<Root>/In2'
   *  Inport: '<S4>/In1'
   */
  if (Lab2_2_U.In2 == 0.0) {
    /* Outputs for IfAction SubSystem: '<S1>/If Action Subsystem' incorporates:
     *  ActionPort: '<S3>/Action Port'
     */
    /* Outport: '<Root>/Out5' incorporates:
     *  Constant: '<S3>/Constant'
     */
    Lab2_2_Y.Out5 = 0.0;

    /* End of Outputs for SubSystem: '<S1>/If Action Subsystem' */
  } else {
    /* Outputs for IfAction SubSystem: '<S1>/If Action Subsystem1' incorporates:
     *  ActionPort: '<S4>/Action Port'
     */
    Lab2_2_B.In1 = Lab2_2_U.In2;

    /* End of Outputs for SubSystem: '<S1>/If Action Subsystem1' */
  }

  /* End of If: '<S1>/If' */

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/In1'
   *  Product: '<S1>/Divide'
   */
  Lab2_2_Y.Out4 = Lab2_2_U.In1 / Lab2_2_B.In1;

  /* Outport: '<Root>/Out6' incorporates:
   *  Inport: '<Root>/In3'
   *  Inport: '<Root>/In4'
   *  S-Function (sfix_bitop): '<S2>/Bitwise Operator'
   */
  Lab2_2_Y.Out6 = (int8_T)(Lab2_2_U.In3 & Lab2_2_U.In4);

  /* Outport: '<Root>/Out7' incorporates:
   *  Inport: '<Root>/In3'
   *  Inport: '<Root>/In4'
   *  S-Function (sfix_bitop): '<S2>/Bitwise Operator1'
   */
  Lab2_2_Y.Out7 = (int8_T)(Lab2_2_U.In3 | Lab2_2_U.In4);

  /* Outport: '<Root>/Out8' incorporates:
   *  Inport: '<Root>/In3'
   *  Inport: '<Root>/In4'
   *  S-Function (sfix_bitop): '<S2>/Bitwise Operator2'
   */
  Lab2_2_Y.Out8 = (int8_T)(Lab2_2_U.In3 ^ Lab2_2_U.In4);

  /* Outport: '<Root>/Out9' incorporates:
   *  Inport: '<Root>/In3'
   *  Inport: '<Root>/In4'
   *  S-Function (sfix_bitop): '<S2>/Bitwise Operator3'
   */
  Lab2_2_Y.Out9 = (int8_T)~(int8_T)(Lab2_2_U.In3 & Lab2_2_U.In4);

  /* Outport: '<Root>/Out10' incorporates:
   *  Inport: '<Root>/In3'
   *  Inport: '<Root>/In4'
   *  S-Function (sfix_bitop): '<S2>/Bitwise Operator4'
   */
  Lab2_2_Y.Out10 = (int8_T)~(int8_T)(Lab2_2_U.In3 | Lab2_2_U.In4);

  /* Outport: '<Root>/Out11' incorporates:
   *  Inport: '<Root>/In3'
   *  S-Function (sfix_bitop): '<S2>/Bitwise input 1'
   */
  Lab2_2_Y.Out11 = (int8_T)~Lab2_2_U.In3;

  /* Outport: '<Root>/Out12' incorporates:
   *  Inport: '<Root>/In4'
   *  S-Function (sfix_bitop): '<S2>/Bitwise input 2'
   */
  Lab2_2_Y.Out12 = (int8_T)~Lab2_2_U.In4;
}

/* Model initialize function */
void Lab2_2_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Lab2_2_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &Lab2_2_B), 0,
                sizeof(B_Lab2_2_T));

  /* external inputs */
  (void) memset((void *)&Lab2_2_U, 0,
                sizeof(ExtU_Lab2_2_T));

  /* external outputs */
  (void) memset((void *)&Lab2_2_Y, 0,
                sizeof(ExtY_Lab2_2_T));
}

/* Model terminate function */
void Lab2_2_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
