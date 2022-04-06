/*
 * File: Lab2_1.c
 *
 * Code generated for Simulink model 'Lab2_1'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Apr 05 00:21:13 2022
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

#include "Lab2_1.h"
#include "Lab2_1_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Lab2_1_T Lab2_1_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Lab2_1_T Lab2_1_Y;

/* Real-time model */
RT_MODEL_Lab2_1_T Lab2_1_M_;
RT_MODEL_Lab2_1_T *const Lab2_1_M = &Lab2_1_M_;

/* Model step function */
void Lab2_1_step(void)
{
  /* If: '<Root>/If' incorporates:
   *  Inport: '<Root>/Grade'
   */
  if ((100.0 >= Lab2_1_U.Grade) && (Lab2_1_U.Grade >= 85.0)) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem' incorporates:
     *  ActionPort: '<S1>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<S1>/Constant'
     */
    Lab2_1_Y.Out1 = 1.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem' */
  } else if ((85.0 > Lab2_1_U.Grade) && (Lab2_1_U.Grade >= 75.0)) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem1' incorporates:
     *  ActionPort: '<S2>/Action Port'
     */
    /* Outport: '<Root>/Out2' incorporates:
     *  Constant: '<S2>/Constant'
     */
    Lab2_1_Y.Out2 = 2.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem1' */
  } else if ((75.0 > Lab2_1_U.Grade) && (Lab2_1_U.Grade >= 65.0)) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem2' incorporates:
     *  ActionPort: '<S3>/Action Port'
     */
    /* Outport: '<Root>/Out3' incorporates:
     *  Constant: '<S3>/Constant'
     */
    Lab2_1_Y.Out3 = 3.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem2' */
  } else if ((65.0 > Lab2_1_U.Grade) && (Lab2_1_U.Grade >= 50.0)) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem3' incorporates:
     *  ActionPort: '<S4>/Action Port'
     */
    /* Outport: '<Root>/Out4' incorporates:
     *  Constant: '<S4>/Constant'
     */
    Lab2_1_Y.Out4 = 4.0;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem3' */
  } else {
    if (Lab2_1_U.Grade < 50.0) {
      /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem4' incorporates:
       *  ActionPort: '<S5>/Action Port'
       */
      /* Outport: '<Root>/Out5' incorporates:
       *  Constant: '<S5>/Constant'
       */
      Lab2_1_Y.Out5 = 5.0;

      /* End of Outputs for SubSystem: '<Root>/If Action Subsystem4' */
    }
  }

  /* End of If: '<Root>/If' */
}

/* Model initialize function */
void Lab2_1_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Lab2_1_M, (NULL));

  /* external inputs */
  Lab2_1_U.Grade = 0.0;

  /* external outputs */
  (void) memset((void *)&Lab2_1_Y, 0,
                sizeof(ExtY_Lab2_1_T));
}

/* Model terminate function */
void Lab2_1_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
