# 面试要点记录
> 主要涉及到嵌入式软件开发、嵌入式驱动开发、IOT开发、git等知识点。
> 最新的请参考[wiki](https://github.com/xiaowenxia/embedded-notes/wiki)和我的[个人博客](https://xiaowenxia.github.io/embedded-notes/)
---
### 要点
- [x] c基础知识
- [x] 数据结构（链表 hash表 排序算法 设计模式等）
- [x] 外设（串口 网口 i2s i2c spi sdio等）
- [x] ARM cortex-m0 m3 m4 A8等芯片架构
- [ ] 操作系统（内存管理 进程管理 实时性要求 任务间通讯等）
- [x] tcpip协议栈（tcpip模型 分层结构 ip tcp udp icmp igmp tftp http ftp等协议）
- [x] linux 多线程 多进程通讯 linux系统任务调度和中断
- [ ] bash命令 shell makefile python github go javascript
- [ ] linux 启动过程
- [ ] git 命令
---
#目录
* [c语言基础](./c基础.md)
    * [c基础](./c基础.md#c基础)
        * [数据类型说明](./c基础.md#数据类型说明)
        * [volatile](./c基础.md#volatile)
        * [指针](./c基础.md#函数指针)
        * [const](./c基础.md#const)
        * [main函数的返回值](./c基础.md#main函数的返回值)
        * [浮点数存储方式](./c基础.md#浮点数存储方式)
    * [c题目](./c基础.md#c题目)
        * [printf返回值](./c基础.md#printf返回值)
        * [enum枚举类型](./c基础.md#enum枚举类型)
        * [可变参数函数](./c基础.md#可变参数函数)
    * [链表](./c基础.md#链表)
    * [排序算法](./c基础.md#排序算法)
        * [选择排序](./c基础.md#选择排序)
        * [插入排序](./c基础.md#插入排序)
        * [希尔排序](./c基础.md#希尔排序)
        * [冒泡排序](./c基础.md#冒泡排序)
        * [快速排序](./c基础.md#快速排序)
* [linux知识点](./linux.md)
    * [关键命令说明](./linux.md#关键命令说明)
        * [系统关机命令](./linux.md#系统关机命令)
        * [linux查看文本的指令](./linux.md#linux查看文本的指令)
        * [mount](./linux.md#mount指令)
        * [dmesg](./linux.md#dmesg)
        * [grep](./linux.md#grep)
        * [find](./linux.md#find)
        * [lsusb](./linux.md#lsusb)
        * [lsof](./linux.md#lsof)
    * [linux软件开发知识点](./linux.md#linux软件开发知识点)
        * [linux进程间通讯方式](./linux.md#linux进程间通讯方式)
        * [内存申请函数](./linux.md#内存申请函数)
        * [gcc编译过程](./linux.md#gcc编译过程)
        * [文件系统](./linux.md#文件系统)
        * [硬链接和软连接](./linux.md#硬链接和软连接)
        * [linux内核子系统](./linux.md#linux内核子系统)
        * [进程几种状态](./linux.md#进程几种状态)
        * [文件系统组成](./linux.md#文件系统组成)
        * [linux文件类型](./linux.md#linux文件类型)
        * [linux常用的系统调用函数](./linux.md#linux常用的系统调用函数)
        * [fork函数](./linux.md#fork函数)
        * [僵尸进程](./linux.md#僵尸进程)
        * [常见文件说明](./linux.md#常见文件说明)
        * [proc目录说明](./linux.md#proc目录说明)
        * [fopen参数说明](./linux.md#fopen参数说明)
    * [linux驱动开发知识点](./linux.md#linux驱动开发知识点)
    * [makefile](./linux.md#makefile)
    * [shell](./linux.md#shell)
* [freertos 源码详解](./freertos-inside.md)
    * [协程--croutine.c](./freertos-inside.md#协程--croutine.c)
* [tcpip 协议栈知识点](./tcpip协议栈.md)
    * [tcpip模型](./tcpip协议栈.md#tcpip模型)
    * [以太网协议](./tcpip协议栈.md#以太网协议)
    * [ARP协议](./tcpip协议栈.md#ARP协议)
    * [TCP协议](./tcpip协议栈.md#TCP协议)
* [git 使用说明](./git.md)
    * [git cheatsheet](./git.md#git-cheatsheet)
* [git 底层技术](./git-inside.md)