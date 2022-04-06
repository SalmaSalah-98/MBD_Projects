/*
 * File: Lab2_2.h
 *
 * Code generated for Simulink model 'Lab2_2'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Apr 05 00:31:10 2022
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

#ifndef RTW_HEADER_Lab2_2_h_
#define RTW_HEADER_Lab2_2_h_
#include <stddef.h>
#include <string.h>
#ifndef Lab2_2_COMMON_INCLUDES_
# define Lab2_2_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Lab2_2_COMMON_INCLUDES_ */

#include "Lab2_2_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block signals (auto storage) */
typedef struct {
  real_T In1;                          /* '<S4>/In1' */
} B_Lab2_2_T;

/* External inputs (root inport signals with auto storage) */
typedef struct {
  real_T In1;                          /* '<Root>/In1' */
  real_T In2;                          /* '<Root>/In2' */
  int8_T In3;                          /* '<Root>/In3' */
  int8_T In4;                          /* '<Root>/In4' */
} ExtU_Lab2_2_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
  real_T Out2;                         /* '<Root>/Out2' */
  real_T Out3;                         /* '<Root>/Out3' */
  real_T Out4;                         /* '<Root>/Out4' */
  real_T Out5;                         /* '<Root>/Out5' */
  int8_T Out6;                         /* '<Root>/Out6' */
  int8_T Out7;                         /* '<Root>/Out7' */
  int8_T Out8;                         /* '<Root>/Out8' */
  int8_T Out9;                         /* '<Root>/Out9' */
  int8_T Out10;                        /* '<Root>/Out10' */
  int8_T Out11;                        /* '<Root>/Out11' */
  int8_T Out12;                        /* '<Root>/Out12' */
} ExtY_Lab2_2_T;

/* Real-time Model Data Structure */
struct tag_RTM_Lab2_2_T {
  const char_T * volatile errorStatus;
};

/* Block signals (auto storage) */
extern B_Lab2_2_T Lab2_2_B;

/* External inputs (root inport signals with auto storage) */
extern ExtU_Lab2_2_T Lab2_2_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Lab2_2_T Lab2_2_Y;

/* Model entry point functions */
extern void Lab2_2_initialize(void);
extern void Lab2_2_step(void);
extern void Lab2_2_terminate(void);

/* Real-time Model object */
extern RT_MODEL_Lab2_2_T *const Lab2_2_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<S1>/Display' : Unused code path elimination
 * Block '<S1>/Display1' : Unused code path elimination
 * Block '<S1>/Display2' : Unused code path elimination
 * Block '<S1>/Display3' : Unused code path elimination
 * Block '<S1>/Display4' : Unused code path elimination
 * Block '<S2>/Display' : Unused code path elimination
 * Block '<S2>/Display1' : Unused code path elimination
 * Block '<S2>/Display2' : Unused code path elimination
 * Block '<S2>/Display3' : Unused code path elimination
 * Block '<S2>/Display4' : Unused code path elimination
 * Block '<S2>/Display5' : Unused code path elimination
 * Block '<S2>/Display6' : Unused code path elimination
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
 * '<Root>' : 'Lab2_2'
 * '<S1>'   : 'Lab2_2/Subsystem'
 * '<S2>'   : 'Lab2_2/Subsystem1'
 * '<S3>'   : 'Lab2_2/Subsystem/If Action Subsystem'
 * '<S4>'   : 'Lab2_2/Subsystem/If Action Subsystem1'
 */
#endif                                 /* RTW_HEADER_Lab2_2_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
