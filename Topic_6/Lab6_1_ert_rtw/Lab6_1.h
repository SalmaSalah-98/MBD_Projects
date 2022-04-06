/*
 * File: Lab6_1.h
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

#ifndef RTW_HEADER_Lab6_1_h_
#define RTW_HEADER_Lab6_1_h_
#include <stddef.h>
#include <string.h>
#ifndef Lab6_1_COMMON_INCLUDES_
# define Lab6_1_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Lab6_1_COMMON_INCLUDES_ */

#include "Lab6_1_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block signals (auto storage) */
typedef struct {
  real_T led;                          /* '<S2>/LedStatus ' */
} B_Lab6_1_T;

/* Block states (auto storage) for system '<Root>' */
typedef struct {
  struct {
    void *AQHandles;
  } HiddenToAsyncQueue_InsertedFor_;   /* synthesized block */

  int32_T clockTickCounter;            /* '<Root>/Pulse Generator' */
  uint8_T is_active_c2_Lab6_1;         /* '<Root>/Chart' */
  uint8_T temporalCounter_i1;          /* '<Root>/Chart' */
} DW_Lab6_1_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
} ExtY_Lab6_1_T;

/* Real-time Model Data Structure */
struct tag_RTM_Lab6_1_T {
  const char_T * volatile errorStatus;
};

/* Block signals (auto storage) */
extern B_Lab6_1_T Lab6_1_B;

/* Block states (auto storage) */
extern DW_Lab6_1_T Lab6_1_DW;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Lab6_1_T Lab6_1_Y;

/* Model entry point functions */
extern void Lab6_1_initialize(void);
extern void Lab6_1_step(void);
extern void Lab6_1_terminate(void);

/* Real-time Model object */
extern RT_MODEL_Lab6_1_T *const Lab6_1_M;

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
 * '<Root>' : 'Lab6_1'
 * '<S1>'   : 'Lab6_1/Chart'
 * '<S2>'   : 'Lab6_1/Function-Call Subsystem'
 * '<S3>'   : 'Lab6_1/Function-Call Subsystem/CheckSwitchStatus'
 * '<S4>'   : 'Lab6_1/Function-Call Subsystem/LedStatus '
 */
#endif                                 /* RTW_HEADER_Lab6_1_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
