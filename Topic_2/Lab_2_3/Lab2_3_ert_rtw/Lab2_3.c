/*
 * File: Lab2_3.c
 *
 * Code generated for Simulink model 'Lab2_3'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Apr 05 00:57:33 2022
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

#include "Lab2_3.h"
#include "Lab2_3_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Lab2_3_T Lab2_3_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Lab2_3_T Lab2_3_Y;

/* Real-time model */
RT_MODEL_Lab2_3_T Lab2_3_M_;
RT_MODEL_Lab2_3_T *const Lab2_3_M = &Lab2_3_M_;

/* Model step function */
void Lab2_3_step(void)
{
  int32_T s1_iter;
  int32_T UnitDelay_DSTATE;

  /* Outputs for Iterator SubSystem: '<Root>/For Iterator Subsystem' incorporates:
   *  ForIterator: '<S1>/For Iterator'
   */
  /* InitializeConditions for UnitDelay: '<S1>/Unit Delay' */
  UnitDelay_DSTATE = 1;

  /* Inport: '<Root>/In1' */
  for (s1_iter = 1; s1_iter <= Lab2_3_U.In1; s1_iter++) {
    /* Outport: '<Root>/Out1' incorporates:
     *  Product: '<S1>/Product'
     *  UnitDelay: '<S1>/Unit Delay'
     */
    Lab2_3_Y.Out1 = s1_iter * UnitDelay_DSTATE;

    /* Update for UnitDelay: '<S1>/Unit Delay' */
    UnitDelay_DSTATE = Lab2_3_Y.Out1;
  }

  /* End of Inport: '<Root>/In1' */
  /* End of Outputs for SubSystem: '<Root>/For Iterator Subsystem' */
}

/* Model initialize function */
void Lab2_3_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Lab2_3_M, (NULL));

  /* external inputs */
  Lab2_3_U.In1 = 0;

  /* external outputs */
  Lab2_3_Y.Out1 = 0;
}

/* Model terminate function */
void Lab2_3_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
