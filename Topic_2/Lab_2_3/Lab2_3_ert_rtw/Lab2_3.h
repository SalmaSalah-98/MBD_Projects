/*
 * File: Lab2_3.h
 *
 * Code generated for Simulink model 'Lab2_3'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Apr 05 00:57:33 2022
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

#ifndef RTW_HEADER_Lab2_3_h_
#define RTW_HEADER_Lab2_3_h_
#include <stddef.h>
#ifndef Lab2_3_COMMON_INCLUDES_
# define Lab2_3_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Lab2_3_COMMON_INCLUDES_ */

#include "Lab2_3_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  int32_T In1;                         /* '<Root>/In1' */
} ExtU_Lab2_3_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  int32_T Out1;                        /* '<Root>/Out1' */
} ExtY_Lab2_3_T;

/* Real-time Model Data Structure */
struct tag_RTM_Lab2_3_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_Lab2_3_T Lab2_3_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Lab2_3_T Lab2_3_Y;

/* Model entry point functions */
extern void Lab2_3_initialize(void);
extern void Lab2_3_step(void);
extern void Lab2_3_terminate(void);

/* Real-time Model object */
extern RT_MODEL_Lab2_3_T *const Lab2_3_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<Root>/Display' : Unused code path elimination
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
 * '<Root>' : 'Lab2_3'
 * '<S1>'   : 'Lab2_3/For Iterator Subsystem'
 */
#endif                                 /* RTW_HEADER_Lab2_3_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
