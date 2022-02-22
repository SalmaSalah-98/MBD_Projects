/*
 * File: Programmer_Calculator.c
 *
 * Code generated for Simulink model 'Programmer_Calculator'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Feb 23 00:12:34 2022
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

#include "Programmer_Calculator.h"
#include "Programmer_Calculator_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Programmer_Calculator_T Programmer_Calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Programmer_Calculator_T Programmer_Calculator_Y;

/* Real-time model */
RT_MODEL_Programmer_Calculato_T Programmer_Calculator_M_;
RT_MODEL_Programmer_Calculato_T *const Programmer_Calculator_M =
  &Programmer_Calculator_M_;

/* Model step function */
void Programmer_Calculator_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/Operand_1 '
   *  Inport: '<Root>/Operand_2'
   *  Logic: '<Root>/Logical(AND) Operator'
   */
  Programmer_Calculator_Y.Out1 = ((Programmer_Calculator_U.Operand_1 != 0) &&
    (Programmer_Calculator_U.Operand_2 != 0));

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/Operand_1 '
   *  Inport: '<Root>/Operand_2'
   *  Logic: '<Root>/Logical(OR) Operator '
   */
  Programmer_Calculator_Y.Out2 = ((Programmer_Calculator_U.Operand_1 != 0) ||
    (Programmer_Calculator_U.Operand_2 != 0));

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/Operand_1 '
   *  Inport: '<Root>/Operand_2'
   *  Logic: '<Root>/Logical(XOR) Operator '
   */
  Programmer_Calculator_Y.Out3 = (Programmer_Calculator_U.Operand_1 != 0) ^
    (Programmer_Calculator_U.Operand_2 != 0);

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/Operand_1 '
   *  Inport: '<Root>/Operand_2'
   *  Logic: '<Root>/Logical Operator3'
   */
  Programmer_Calculator_Y.Out4 = !(boolean_T)((Programmer_Calculator_U.Operand_1
    != 0) ^ (Programmer_Calculator_U.Operand_2 != 0));

  /* Outport: '<Root>/Out5' incorporates:
   *  Inport: '<Root>/Operand_1 '
   *  Logic: '<Root>/Logical Operator4'
   */
  Programmer_Calculator_Y.Out5 = !(Programmer_Calculator_U.Operand_1 != 0);

  /* Outport: '<Root>/Out6' incorporates:
   *  Inport: '<Root>/Operand_2'
   *  Logic: '<Root>/Logical Operator5'
   */
  Programmer_Calculator_Y.Out6 = !(Programmer_Calculator_U.Operand_2 != 0);
}

/* Model initialize function */
void Programmer_Calculator_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Programmer_Calculator_M, (NULL));

  /* external inputs */
  (void) memset((void *)&Programmer_Calculator_U, 0,
                sizeof(ExtU_Programmer_Calculator_T));

  /* external outputs */
  (void) memset((void *)&Programmer_Calculator_Y, 0,
                sizeof(ExtY_Programmer_Calculator_T));
}

/* Model terminate function */
void Programmer_Calculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
