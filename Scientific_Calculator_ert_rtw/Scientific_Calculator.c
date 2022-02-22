/*
 * File: Scientific_Calculator.c
 *
 * Code generated for Simulink model 'Scientific_Calculator'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Feb 22 23:48:51 2022
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

#include "Scientific_Calculator.h"
#include "Scientific_Calculator_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Scientific_Calculator_T Scientific_Calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Scientific_Calculator_T Scientific_Calculator_Y;

/* Real-time model */
RT_MODEL_Scientific_Calculato_T Scientific_Calculator_M_;
RT_MODEL_Scientific_Calculato_T *const Scientific_Calculator_M =
  &Scientific_Calculator_M_;

/* Model step function */
void Scientific_Calculator_step(void)
{
  /* Outport: '<Root>/Result ' incorporates:
   *  Inport: '<Root>/Operand1 '
   *  Inport: '<Root>/Operand2 '
   *  Sum: '<Root>/Add'
   */
  Scientific_Calculator_Y.Result = (uint8_T)((uint32_T)
    Scientific_Calculator_U.Operand1 + Scientific_Calculator_U.Operand2);

  /* Outport: '<Root>/Result 1' incorporates:
   *  Inport: '<Root>/Operand1 '
   *  Inport: '<Root>/Operand2 '
   *  Sum: '<Root>/Subtract'
   */
  Scientific_Calculator_Y.Result1 = (uint8_T)(Scientific_Calculator_U.Operand1 -
    Scientific_Calculator_U.Operand2);

  /* Outport: '<Root>/Result 2' incorporates:
   *  Inport: '<Root>/Operand1 '
   *  Inport: '<Root>/Operand2 '
   *  Product: '<Root>/Divide'
   */
  Scientific_Calculator_Y.Result2 = (uint8_T)(Scientific_Calculator_U.Operand2 ==
    0U ? MAX_uint32_T : (uint32_T)Scientific_Calculator_U.Operand1 /
    Scientific_Calculator_U.Operand2);

  /* Outport: '<Root>/Result 3' incorporates:
   *  Inport: '<Root>/Operand1 '
   *  Inport: '<Root>/Operand2 '
   *  Product: '<Root>/Product'
   */
  Scientific_Calculator_Y.Result3 = (uint16_T)((uint32_T)
    Scientific_Calculator_U.Operand1 * Scientific_Calculator_U.Operand2);
}

/* Model initialize function */
void Scientific_Calculator_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Scientific_Calculator_M, (NULL));

  /* external inputs */
  (void) memset((void *)&Scientific_Calculator_U, 0,
                sizeof(ExtU_Scientific_Calculator_T));

  /* external outputs */
  (void) memset((void *)&Scientific_Calculator_Y, 0,
                sizeof(ExtY_Scientific_Calculator_T));
}

/* Model terminate function */
void Scientific_Calculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
