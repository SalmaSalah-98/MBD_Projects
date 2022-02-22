/*
 * File: Scientific_Calculator.h
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

#ifndef RTW_HEADER_Scientific_Calculator_h_
#define RTW_HEADER_Scientific_Calculator_h_
#include <stddef.h>
#include <string.h>
#ifndef Scientific_Calculator_COMMON_INCLUDES_
# define Scientific_Calculator_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Scientific_Calculator_COMMON_INCLUDES_ */

#include "Scientific_Calculator_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  uint8_T Operand1;                    /* '<Root>/Operand1 ' */
  uint8_T Operand2;                    /* '<Root>/Operand2 ' */
} ExtU_Scientific_Calculator_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  uint8_T Result;                      /* '<Root>/Result ' */
  uint8_T Result1;                     /* '<Root>/Result 1' */
  uint8_T Result2;                     /* '<Root>/Result 2' */
  uint16_T Result3;                    /* '<Root>/Result 3' */
} ExtY_Scientific_Calculator_T;

/* Real-time Model Data Structure */
struct tag_RTM_Scientific_Calculator_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_Scientific_Calculator_T Scientific_Calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Scientific_Calculator_T Scientific_Calculator_Y;

/* Model entry point functions */
extern void Scientific_Calculator_initialize(void);
extern void Scientific_Calculator_step(void);
extern void Scientific_Calculator_terminate(void);

/* Real-time Model object */
extern RT_MODEL_Scientific_Calculato_T *const Scientific_Calculator_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<Root>/Display' : Unused code path elimination
 * Block '<Root>/Display1' : Unused code path elimination
 * Block '<Root>/Display2' : Unused code path elimination
 * Block '<Root>/Display3' : Unused code path elimination
 */

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
 * '<Root>' : 'Scientific_Calculator'
 */
#endif                                 /* RTW_HEADER_Scientific_Calculator_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
