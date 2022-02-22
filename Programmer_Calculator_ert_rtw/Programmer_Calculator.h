/*
 * File: Programmer_Calculator.h
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

#ifndef RTW_HEADER_Programmer_Calculator_h_
#define RTW_HEADER_Programmer_Calculator_h_
#include <stddef.h>
#include <string.h>
#ifndef Programmer_Calculator_COMMON_INCLUDES_
# define Programmer_Calculator_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Programmer_Calculator_COMMON_INCLUDES_ */

#include "Programmer_Calculator_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  uint8_T Operand_1;                   /* '<Root>/Operand_1 ' */
  uint8_T Operand_2;                   /* '<Root>/Operand_2' */
} ExtU_Programmer_Calculator_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  boolean_T Out1;                      /* '<Root>/Out1' */
  boolean_T Out2;                      /* '<Root>/Out2' */
  boolean_T Out3;                      /* '<Root>/Out3' */
  boolean_T Out4;                      /* '<Root>/Out4' */
  boolean_T Out5;                      /* '<Root>/Out5' */
  boolean_T Out6;                      /* '<Root>/Out6' */
} ExtY_Programmer_Calculator_T;

/* Real-time Model Data Structure */
struct tag_RTM_Programmer_Calculator_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_Programmer_Calculator_T Programmer_Calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Programmer_Calculator_T Programmer_Calculator_Y;

/* Model entry point functions */
extern void Programmer_Calculator_initialize(void);
extern void Programmer_Calculator_step(void);
extern void Programmer_Calculator_terminate(void);

/* Real-time Model object */
extern RT_MODEL_Programmer_Calculato_T *const Programmer_Calculator_M;

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'Programmer_Calculator'
 */
#endif                                 /* RTW_HEADER_Programmer_Calculator_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
