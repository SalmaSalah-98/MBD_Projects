/*
 * File: Lab4_1.c
 *
 * Code generated for Simulink model 'Lab4_1'.
 *
 * Model version                  : 1.7
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Apr 06 05:35:40 2022
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

#include "Lab4_1.h"
#include "Lab4_1_private.h"

/* Block signals (auto storage) */
B_Lab4_1_T Lab4_1_B;

/* Block states (auto storage) */
DW_Lab4_1_T Lab4_1_DW;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Lab4_1_T Lab4_1_Y;

/* Real-time model */
RT_MODEL_Lab4_1_T Lab4_1_M_;
RT_MODEL_Lab4_1_T *const Lab4_1_M = &Lab4_1_M_;

/* Model step function */
void Lab4_1_step(void)
{
  /* S-Function (fcncallgen): '<Root>/Function-Call Generator' incorporates:
   *  SubSystem: '<Root>/Function-Call Subsystem'
   */
  /* Inport: '<S2>/In1' incorporates:
   *  Constant: '<Root>/Constant'
   */
  Lab4_1_B.In1 = 1.0;

  /* End of Outputs for S-Function (fcncallgen): '<Root>/Function-Call Generator' */

  /* Outport: '<Root>/Out1' */
  Lab4_1_Y.Out1 = Lab4_1_B.In1;

  /* Chart: '<Root>/Chart' */
  if (Lab4_1_DW.temporalCounter_i1 < 3U) {
    Lab4_1_DW.temporalCounter_i1++;
  }

  /* Gateway: Chart */
  /* During: Chart */
  if (Lab4_1_DW.is_active_c3_Lab4_1 == 0U) {
    /* Entry: Chart */
    Lab4_1_DW.is_active_c3_Lab4_1 = 1U;

    /* Entry Internal: Chart */
    /* Transition: '<S1>:2' */
    Lab4_1_DW.temporalCounter_i1 = 0U;
  } else {
    /* During 'Call_Fuction': '<S1>:1' */
    if (Lab4_1_DW.temporalCounter_i1 >= 1U) {
      /* Outputs for Function Call SubSystem: '<Root>/Function-Call Subsystem1' */
      /* Outport: '<Root>/Out2' incorporates:
       *  Constant: '<Root>/Constant1'
       *  Inport: '<S3>/In1'
       */
      /* Transition: '<S1>:3' */
      /* Event: '<S1>:5' */
      Lab4_1_Y.Out2 = 1.0;

      /* End of Outputs for SubSystem: '<Root>/Function-Call Subsystem1' */
      Lab4_1_DW.temporalCounter_i1 = 0U;
    }
  }

  /* End of Chart: '<Root>/Chart' */
}

/* Model initialize function */
void Lab4_1_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Lab4_1_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &Lab4_1_B), 0,
                sizeof(B_Lab4_1_T));

  /* states (dwork) */
  (void) memset((void *)&Lab4_1_DW, 0,
                sizeof(DW_Lab4_1_T));

  /* external outputs */
  (void) memset((void *)&Lab4_1_Y, 0,
                sizeof(ExtY_Lab4_1_T));

  /* SystemInitialize for Chart: '<Root>/Chart' */
  Lab4_1_DW.temporalCounter_i1 = 0U;
  Lab4_1_DW.is_active_c3_Lab4_1 = 0U;
}

/* Model terminate function */
void Lab4_1_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
