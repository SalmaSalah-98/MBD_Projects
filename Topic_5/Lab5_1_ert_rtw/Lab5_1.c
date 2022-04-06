/*
 * File: Lab5_1.c
 *
 * Code generated for Simulink model 'Lab5_1'.
 *
 * Model version                  : 1.6
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Apr 06 14:00:26 2022
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

#include "Lab5_1.h"
#include "Lab5_1_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Lab5_1_T Lab5_1_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Lab5_1_T Lab5_1_Y;

/* Real-time model */
RT_MODEL_Lab5_1_T Lab5_1_M_;
RT_MODEL_Lab5_1_T *const Lab5_1_M = &Lab5_1_M_;

/* Model step function */
void Lab5_1_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Constant: '<S1>/Constant'
   *  DataTypeConversion: '<Root>/Data Type Conversion1'
   *  Inport: '<Root>/In1'
   */
  Lab5_1_Y.Out1[0] = (Enum_dataType)Lab5_1_U.In1;
  Lab5_1_Y.Out1[1] = RCC_enuOK;
}

/* Model initialize function */
void Lab5_1_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Lab5_1_M, (NULL));

  /* external inputs */
  Lab5_1_U.In1 = 0;

  /* external outputs */
  Lab5_1_Y.Out1[0] = RCC_enuOK;
  Lab5_1_Y.Out1[1] = RCC_enuOK;
}

/* Model terminate function */
void Lab5_1_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
