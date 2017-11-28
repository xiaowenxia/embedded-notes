# 目录

## 简单的任务函数
```c
void ATaskFunction( void *pvParameters )
{
    int iVariableExample = 0;

    /* 任务通常实现在一个死循环中。 */
    for( ;; )
    {
        /* 完成任务功能的代码将放在这里。 */
    }
    /* 如果任务的具体实现会跳出上面的死循环，则此任务必须在函数运行完之前删除。传入NULL参数表示删除的是当前任务 */
    vTaskDelete( NULL );
}
```
## 创建任务函数
```c
/* 函数原型 */
portBASE_TYPE xTaskCreate( pdTASK_CODE pvTaskCode,
                            const signed portCHAR * const pcName,
                            unsigned portSHORT usStackDepth,
                            void *pvParameters,
                            unsigned portBASE_TYPE uxPriority,
                            xTaskHandle *pxCreatedTask );
/* 函数示例 */
static TaskHandle_t myTaskHandler = NULL;

xTaskCreate(ATaskFunction, "myTask", 512, NULL, configMAX_PRIORITIES - 4, &myTaskHandler);
```

## 删除任务函数
```c
/* 函数原型 */
void vTaskDelete( xTaskHandle pxTaskToDelete );
```

## 任务优先级
低优先级号表示任务的优先级低，优先级号0表示最低优先级。有效的优先级号范围从0到`(configMAX_PRIORITES – 1)`。

|函数|说明|
|---|---|
|vTaskPrioritySet()|可以动态的更改任务优先级|
|uxTaskPriorityGet()|获取任务优先级|
|uxTaskPriorityGetFromISR()|在ISR函数中获取任务优先级|

## 延时函数
```c
void vTaskDelay( portTickType xTicksToDelay );
```
> xTicksToDelay 表示延时多少个tick \
> 该函数会把task切出到阻塞态

### 精确延时函数
```c
void vTaskDelayUntil( portTickType * pxPreviousWakeTime, portTickType xTimeIncrement );
```
> 调用此函数的任务解除阻塞的时间是绝对时刻，比起vTaskDelay()延时时间更精确

使用方法：

```c
void vTaskFunction( void *pvParameters )
{
    char *pcTaskName;
    portTickType xLastWakeTime;
    pcTaskName = ( char * ) pvParameters;

    /* 变量xLastWakeTime需要被初始化为当前心跳计数值。说明一下，这是该变量唯一一次被显式赋值。之后，
    xLastWakeTime将在函数vTaskDelayUntil()中自动更新。 */
    xLastWakeTime = xTaskGetTickCount();

    for( ;; )
    {
        vPrintString( pcTaskName );
        /* 本任务将精确的以250毫秒为周期执行。同vTaskDelay()函数一样，时间值是以心跳周期为单位的，
        可以使用常量portTICK_RATE_MS将毫秒转换为心跳周期。变量xLastWakeTime会在
        vTaskDelayUntil()中自动更新，因此不需要应用程序进行显示更新。 */
        vTaskDelayUntil( &xLastWakeTime, ( 250 / portTICK_RATE_MS ) );
    }
}
```

## 空闲任务

> 调用vTaskStartScheduler()时，调度器会自动创建一个空闲任务 \
> 空闲任务拥有最低优先级(优先级0) \
> 空闲任务是一个非常短小的循环

具体代码在vTaskStartScheduler()中可以看到：

```c
void vTaskStartScheduler( void )
{
    BaseType_t xReturn;

    /* Add the idle task at the lowest priority. */
    #if ( INCLUDE_xTaskGetIdleTaskHandle == 1 )
    {
        /* Create the idle task, storing its handle in xIdleTaskHandle so it can
        be returned by the xTaskGetIdleTaskHandle() function. */
        xReturn = xTaskCreate( prvIdleTask, "IDLE", tskIDLE_STACK_SIZE, ( void * ) NULL, ( tskIDLE_PRIORITY | portPRIVILEGE_BIT ), &xIdleTaskHandle ); /*lint !e961 MISRA exception, justified as it is not a redundant explicit cast to all supported compilers. */
    }
    #else
    {
        /* Create the idle task without storing its handle. */
        xReturn = xTaskCreate( prvIdleTask, "IDLE", tskIDLE_STACK_SIZE, ( void * ) NULL, ( tskIDLE_PRIORITY | portPRIVILEGE_BIT ), NULL );  /*lint !e961 MISRA exception, justified as it is not a redundant explicit cast to all supported compilers. */
    }
    #endif /* INCLUDE_xTaskGetIdleTaskHandle */

    ...
}
```

* [协程--croutine.c](#协程--croutine.c)

## 系统运行过程

## 协程--croutine.c
4个链表：readyList  pendingList  delayList（2个）
## 链表设计--List.c

## 系统调度

## 任务管理

## 内存管理