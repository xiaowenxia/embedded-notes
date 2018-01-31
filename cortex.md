# 目录

## arm内核发展历史

arm7 cortex-m0 cortex-m3 cortex-m4 cortex-m7 arm9 arm11 arm12 cortex-a7 cortex-a9 cortex-a11 cortex-a52

cortex系列属于armv7架构

armv7A  cortex-A系列
cortex-A系列有 ARM7 ARM9 ARM11 cortex-A5 cortex-A7 cortex-A8 cortex-A9 cortex-A15 cortex-A17 cortex-A53 cortex-A57 cortex-A72
A53和A57，A72属于armv8架构

cortex-M系列有M0 M0+ M3 M4 M7

cortex-M0只支持thumb指令集

## cortex-M系列芯片系统框图

中断控制器 M内核 AHB总线 存储器和外设 电源管理 时钟树

## 通用寄存器
R0 R1 R2 R3 R4 R5 R6 R7 R8 R9 R10 R11 R12 

## 特殊寄存器
SP(R13) LR(R14) PC(R15) CONTROL xPSR PRIMASK

## MSP和PSP
msp中断中会使用，psp用于线程栈使用，通过配置CONTROL寄存器切换。

## xPSR
IPSR可以用来判断当前处于什么中断。

## PRIMASK
中断屏蔽寄存器，写1屏蔽所有中断(除了不可屏蔽中断和hardfault)

## CONTROL
第1bit写1表示切换成PSP
系统复位后默认使用msp，中断中也使用msp。

## 栈空间操作
通过CONTROL寄存器决定使用msp还是psp
栈向下递减
栈指针始终指向栈的最后一个数据，每次执行数据存储前(push)，SP会首先j减小

## 异常和中断
m0最多支持32个外部中断
### 系统异常
> 主要用于操作系统和错误处理

异常类型   异常编号   说明
reset        1     上电复位、系统复位
NMI          2     不可屏蔽中断
hardfault    3     硬件错误
SVCall       11    系统调用
PendSV       13    挂起系统调用
systick      15    系统滴答

## NVIC 可嵌套向量z中断控制器
中断可嵌套
相同优先级的中断不可嵌套
相同中断不可嵌套

## 系统控制块SCB
实际上是许多的系统管理的寄存器
jtag 或swd调试接口

## cortex-m0启动流程
程序从0x00000000地址开始执行
程序bin文件的开始处为中断向量表，向量表大小由实际使用的irq来决定。
sp指针 resetHandler地址 NMI地址 hardfault地址 。。。

## 堆栈
堆向上增长
栈向下增长

## 中断向量表
## M0 M3 M4 M7区别
M0 armv6-M架构

M3 armv7-M架构
多了basepri寄存器可以阻止某优先级或更低的优先级的中断。
faultmask寄存器提供了更多的错误管理特性。
32为thumb指令
位段特性
位域处理
多处理器支持
最多240个中断
硬件除法
存储器保护单元
更多的调试和跟踪特性


M4 armv7-M架构
浮点特性
SIMD指令(单周期多指令)
饱和算法
单周期MAC(MAC乘法累加)

