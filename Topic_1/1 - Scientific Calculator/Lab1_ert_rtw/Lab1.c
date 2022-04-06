/*
 * File: Lab1.c
 *
 * Code generated for Simulink model 'Lab1'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Mon Apr 04 23:30:07 2022
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

#include "Lab1.h"
#include "Lab1_private.h"

/* Block signals (auto storage) */
B_Lab1_T Lab1_B;

/* External inputs (root inport signals with auto storage) */
ExtU_Lab1_T Lab1_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Lab1_T Lab1_Y;

/* Real-time model */
RT_MODEL_Lab1_T Lab1_M_;
RT_MODEL_Lab1_T *const Lab1_M = &Lab1_M_;

/* Model step function */
void Lab1_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<Root>/Add'
   */
  Lab1_Y.Out1 = Lab1_U.In1 + Lab1_U.In2;

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<Root>/Subtract'
   */
  Lab1_Y.Out2 = Lab1_U.In1 - Lab1_U.In2;

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Product: '<Root>/Product'
   */
  Lab1_Y.Out3 = Lab1_U.In1 * Lab1_U.In2;

  /* If: '<Root>/If' incorporates:
   *  Inport: '<Root>/In2'
   *  Inport: '<S2>/In1'
   */
  if (Lab1_U.In2 == 0.0) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem' incorporates:
     *  ActionPort: '<S1>/Action Port'
     */
    /* Outport: '<Root>/Out5' incorporates:
     *  Constant: '<S1>/Constant'
     */
    Lab1_Y.Out5 = 0.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem' */
  } else {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem1' incorporates:
     *  ActionPort: '<S2>/Action Port'
     */
    Lab1_B.In1 = Lab1_U.In2;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem1' */
  }

  /* End of If: '<Root>/If' */

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/In1'
   *  Product: '<Root>/Divide'
   */
  Lab1_Y.Out4 = Lab1_U.In1 / Lab1_B.In1;
}

/* Model initialize function */
void Lab1_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Lab1_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &Lab1_B), 0,
                sizeof(B_Lab1_T));

  /* external inputs */
  (void) memset((void *)&Lab1_U, 0,
                sizeof(ExtU_Lab1_T));

  /* external outputs */
  (void) memset((void *)&Lab1_Y, 0,
                sizeof(ExtY_Lab1_T));
}

/* Model terminate function */
void Lab1_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
