/*
 * File: Lab6_1.c
 *
 * Code generated for Simulink model 'Lab6_1'.
 *
 * Model version                  : 1.9
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Apr 06 12:25:50 2022
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

#include "Lab6_1.h"
#include "Lab6_1_private.h"

/* Block signals (auto storage) */
B_Lab6_1_T Lab6_1_B;

/* Block states (auto storage) */
DW_Lab6_1_T Lab6_1_DW;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Lab6_1_T Lab6_1_Y;

/* Real-time model */
RT_MODEL_Lab6_1_T Lab6_1_M_;
RT_MODEL_Lab6_1_T *const Lab6_1_M = &Lab6_1_M_;

/* Model step function */
void Lab6_1_step(void)
{
  /* DiscretePulseGenerator: '<Root>/Pulse Generator' */
  if (Lab6_1_DW.clockTickCounter >= 19) {
    Lab6_1_DW.clockTickCounter = 0;
  } else {
    Lab6_1_DW.clockTickCounter++;
  }

  /* End of DiscretePulseGenerator: '<Root>/Pulse Generator' */

  /* Chart: '<Root>/Chart' */
  if (Lab6_1_DW.temporalCounter_i1 < 3U) {
    Lab6_1_DW.temporalCounter_i1++;
  }

  /* Gateway: Chart */
  /* During: Chart */
  if (Lab6_1_DW.is_active_c2_Lab6_1 == 0U) {
    /* Entry: Chart */
    Lab6_1_DW.is_active_c2_Lab6_1 = 1U;

    /* Entry Internal: Chart */
    /* Transition: '<S1>:2' */
    Lab6_1_DW.temporalCounter_i1 = 0U;
  } else {
    /* During 'Call_Fuction': '<S1>:1' */
    if (Lab6_1_DW.temporalCounter_i1 >= 1U) {
      /* Outputs for Function Call SubSystem: '<Root>/Function-Call Subsystem' */
      /* Chart: '<S2>/LedStatus ' */
      /* Transition: '<S1>:3' */
      /* Event: '<S1>:5' */
      /* Gateway: Function-Call
         Subsystem/CheckSwitchStatus */
      /* During: Function-Call
         Subsystem/CheckSwitchStatus */
      /* Entry Internal: Function-Call
         Subsystem/CheckSwitchStatus */
      /* Transition: '<S3>:1' */
      /*  Check Button */
      /* '<S3>:2:1' sf_internal_predicateOutput = ... */
      /* '<S3>:2:1' Switch == 1; */
      /* Transition: '<S3>:3' */
      /* '<S3>:3:1' flag = 0; */
      /* Transition: '<S3>:6' */
      /* Gateway: Function-Call
         Subsystem/LedStatus  */
      /* During: Function-Call
         Subsystem/LedStatus  */
      /* Entry Internal: Function-Call
         Subsystem/LedStatus  */
      /* Transition: '<S4>:1' */
      /*  LedStatus */
      /* '<S4>:2:1' sf_internal_predicateOutput = ... */
      /* '<S4>:2:1' ledSt == 1; */
      /* Transition: '<S4>:3' */
      /* '<S4>:3:1' led = 0; */
      Lab6_1_B.led = 0.0;

      /* End of Outputs for SubSystem: '<Root>/Function-Call Subsystem' */
      /* Transition: '<S4>:6' */
      Lab6_1_DW.temporalCounter_i1 = 0U;
    }
  }

  /* End of Chart: '<Root>/Chart' */

  /* Outport: '<Root>/Out1' */
  Lab6_1_Y.Out1 = Lab6_1_B.led;
}

/* Model initialize function */
void Lab6_1_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Lab6_1_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &Lab6_1_B), 0,
                sizeof(B_Lab6_1_T));

  /* states (dwork) */
  (void) memset((void *)&Lab6_1_DW, 0,
                sizeof(DW_Lab6_1_T));

  /* external outputs */
  Lab6_1_Y.Out1 = 0.0;

  /* Start for DiscretePulseGenerator: '<Root>/Pulse Generator' */
  Lab6_1_DW.clockTickCounter = 0;

  /* SystemInitialize for Chart: '<Root>/Chart' */
  Lab6_1_DW.temporalCounter_i1 = 0U;
  Lab6_1_DW.is_active_c2_Lab6_1 = 0U;
}

/* Model terminate function */
void Lab6_1_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
