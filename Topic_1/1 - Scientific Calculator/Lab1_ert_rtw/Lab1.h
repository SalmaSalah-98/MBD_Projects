/*
 * File: Lab1.h
 *
 * Code generated for Simulink model 'Lab1'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Mon Apr 04 23:30:07 2022
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

#ifndef RTW_HEADER_Lab1_h_
#define RTW_HEADER_Lab1_h_
#include <stddef.h>
#include <string.h>
#ifndef Lab1_COMMON_INCLUDES_
# define Lab1_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Lab1_COMMON_INCLUDES_ */

#include "Lab1_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block signals (auto storage) */
typedef struct {
  real_T In1;                          /* '<S2>/In1' */
} B_Lab1_T;

/* External inputs (root inport signals with auto storage) */
typedef struct {
  real_T In1;                          /* '<Root>/In1' */
  real_T In2;                          /* '<Root>/In2' */
} ExtU_Lab1_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
  real_T Out2;                         /* '<Root>/Out2' */
  real_T Out3;                         /* '<Root>/Out3' */
  real_T Out4;                         /* '<Root>/Out4' */
  real_T Out5;                         /* '<Root>/Out5' */
} ExtY_Lab1_T;

/* Real-time Model Data Structure */
struct tag_RTM_Lab1_T {
  const char_T * volatile errorStatus;
};

/* Block signals (auto storage) */
extern B_Lab1_T Lab1_B;

/* External inputs (root inport signals with auto storage) */
extern ExtU_Lab1_T Lab1_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Lab1_T Lab1_Y;

/* Model entry point functions */
extern void Lab1_initialize(void);
extern void Lab1_step(void);
extern void Lab1_terminate(void);

/* Real-time Model object */
extern RT_MODEL_Lab1_T *const Lab1_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<Root>/Display' : Unused code path elimination
 * Block '<Root>/Display1' : Unused code path elimination
 * Block '<Root>/Display2' : Unused code path elimination
 * Block '<Root>/Display3' : Unused code path elimination
 * Block '<Root>/Display4' : Unused code path elimination
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
 * '<Root>' : 'Lab1'
 * '<S1>'   : 'Lab1/If Action Subsystem'
 * '<S2>'   : 'Lab1/If Action Subsystem1'
 */
#endif                                 /* RTW_HEADER_Lab1_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
