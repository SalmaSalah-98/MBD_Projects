/*
 * File: Lab3_2.c
 *
 * Code generated for Simulink model 'Lab3_2'.
 *
 * Model version                  : 1.8
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Apr 05 03:11:37 2022
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

#include "Lab3_2.h"
#include "Lab3_2_private.h"

/* Named constants for Chart: '<Root>/Chart' */
#define Lab3_2_IN_Go                   ((uint8_T)1U)
#define Lab3_2_IN_NO_ACTIVE_CHILD      ((uint8_T)0U)
#define Lab3_2_IN_Ready                ((uint8_T)2U)
#define Lab3_2_IN_Stop                 ((uint8_T)3U)

/* Block signals (auto storage) */
B_Lab3_2_T Lab3_2_B;

/* Block states (auto storage) */
DW_Lab3_2_T Lab3_2_DW;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Lab3_2_T Lab3_2_Y;

/* Real-time model */
RT_MODEL_Lab3_2_T Lab3_2_M_;
RT_MODEL_Lab3_2_T *const Lab3_2_M = &Lab3_2_M_;

/* Model step function */
void Lab3_2_step(void)
{
  /* Chart: '<Root>/Chart' */
  if (Lab3_2_DW.temporalCounter_i1 < 31U) {
    Lab3_2_DW.temporalCounter_i1++;
  }

  /* Gateway: Chart */
  /* During: Chart */
  if (Lab3_2_DW.is_active_c3_Lab3_2 == 0U) {
    /* Entry: Chart */
    Lab3_2_DW.is_active_c3_Lab3_2 = 1U;

    /* Entry Internal: Chart */
    /* Transition: '<S1>:2' */
    Lab3_2_DW.is_c3_Lab3_2 = Lab3_2_IN_Ready;
    Lab3_2_DW.temporalCounter_i1 = 0U;

    /* Entry 'Ready': '<S1>:1' */
    /* '<S1>:1:1' red_led = 0; */
    Lab3_2_B.red_led = 0.0;

    /* '<S1>:1:1' yellow_led = 0; */
    Lab3_2_B.yellow_led = 0.0;

    /* '<S1>:1:1' green_led = 0; */
    Lab3_2_B.green_led = 0.0;
  } else {
    switch (Lab3_2_DW.is_c3_Lab3_2) {
     case Lab3_2_IN_Go:
      /* During 'Go': '<S1>:6' */
      /* '<S1>:10:1' sf_internal_predicateOutput = ... */
      /* '<S1>:10:1' after(3000,msec); */
      if (Lab3_2_DW.temporalCounter_i1 >= 15U) {
        /* Transition: '<S1>:10' */
        /* Exit 'Go': '<S1>:6' */
        Lab3_2_DW.is_c3_Lab3_2 = Lab3_2_IN_Stop;
        Lab3_2_DW.temporalCounter_i1 = 0U;

        /* Entry 'Stop': '<S1>:7' */
        /* '<S1>:7:1' red_led = 0; */
        Lab3_2_B.red_led = 0.0;

        /* '<S1>:7:1' yellow_led = 0; */
        Lab3_2_B.yellow_led = 0.0;

        /* '<S1>:7:1' green_led = 0; */
        Lab3_2_B.green_led = 0.0;
      } else {
        /* '<S1>:6:3' red_led = 0; */
        Lab3_2_B.red_led = 0.0;

        /* '<S1>:6:4' yellow_led = 0; */
        Lab3_2_B.yellow_led = 0.0;

        /* '<S1>:6:5' green_led = 1; */
        Lab3_2_B.green_led = 1.0;
      }
      break;

     case Lab3_2_IN_Ready:
      /* During 'Ready': '<S1>:1' */
      /* '<S1>:8:1' sf_internal_predicateOutput = ... */
      /* '<S1>:8:1' after(3000,msec); */
      if (Lab3_2_DW.temporalCounter_i1 >= 15U) {
        /* Transition: '<S1>:8' */
        /* Exit 'Ready': '<S1>:1' */
        Lab3_2_DW.is_c3_Lab3_2 = Lab3_2_IN_Go;
        Lab3_2_DW.temporalCounter_i1 = 0U;

        /* Entry 'Go': '<S1>:6' */
        /* '<S1>:6:1' red_led = 0; */
        Lab3_2_B.red_led = 0.0;

        /* '<S1>:6:1' yellow_led = 0; */
        Lab3_2_B.yellow_led = 0.0;

        /* '<S1>:6:1' green_led = 0; */
        Lab3_2_B.green_led = 0.0;
      } else {
        /* '<S1>:1:3' red_led = 0; */
        Lab3_2_B.red_led = 0.0;

        /* '<S1>:1:4' yellow_led = 1; */
        Lab3_2_B.yellow_led = 1.0;

        /* '<S1>:1:5' green_led = 0; */
        Lab3_2_B.green_led = 0.0;
      }
      break;

     default:
      /* During 'Stop': '<S1>:7' */
      /* '<S1>:12:1' sf_internal_predicateOutput = ... */
      /* '<S1>:12:1' after(3000,msec); */
      if (Lab3_2_DW.temporalCounter_i1 >= 15U) {
        /* Transition: '<S1>:12' */
        /* Exit 'Stop': '<S1>:7' */
        Lab3_2_DW.is_c3_Lab3_2 = Lab3_2_IN_Ready;
        Lab3_2_DW.temporalCounter_i1 = 0U;

        /* Entry 'Ready': '<S1>:1' */
        /* '<S1>:1:1' red_led = 0; */
        Lab3_2_B.red_led = 0.0;

        /* '<S1>:1:1' yellow_led = 0; */
        Lab3_2_B.yellow_led = 0.0;

        /* '<S1>:1:1' green_led = 0; */
        Lab3_2_B.green_led = 0.0;
      } else {
        /* '<S1>:7:3' red_led = 1; */
        Lab3_2_B.red_led = 1.0;

        /* '<S1>:7:4' yellow_led = 0; */
        Lab3_2_B.yellow_led = 0.0;

        /* '<S1>:7:5' green_led = 0; */
        Lab3_2_B.green_led = 0.0;
      }
      break;
    }
  }

  /* End of Chart: '<Root>/Chart' */

  /* Outport: '<Root>/Out1' */
  Lab3_2_Y.Out1 = Lab3_2_B.yellow_led;

  /* Outport: '<Root>/Out2' */
  Lab3_2_Y.Out2 = Lab3_2_B.green_led;

  /* Outport: '<Root>/Out3' */
  Lab3_2_Y.Out3 = Lab3_2_B.red_led;
}

/* Model initialize function */
void Lab3_2_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Lab3_2_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &Lab3_2_B), 0,
                sizeof(B_Lab3_2_T));

  /* states (dwork) */
  (void) memset((void *)&Lab3_2_DW, 0,
                sizeof(DW_Lab3_2_T));

  /* external outputs */
  (void) memset((void *)&Lab3_2_Y, 0,
                sizeof(ExtY_Lab3_2_T));

  /* SystemInitialize for Chart: '<Root>/Chart' */
  Lab3_2_DW.temporalCounter_i1 = 0U;
  Lab3_2_DW.is_active_c3_Lab3_2 = 0U;
  Lab3_2_DW.is_c3_Lab3_2 = Lab3_2_IN_NO_ACTIVE_CHILD;
}

/* Model terminate function */
void Lab3_2_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
