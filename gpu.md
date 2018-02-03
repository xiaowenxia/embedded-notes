## vivante图芯技术有限公司

## 硬件抽象层
    Hardware Abstraction Layer (HAL)
## Alpha Blending
    是按照“Alpha”混合向量的值来混合源像素和目标像素的一种图像处理技术。
## android SurfaceFlinger
    SurfaceFlinger服务负责绘制Android应用程序的UI

## android专有驱动

|驱动|说明|
|-|-|
|`Android Ashmem`|匿名共享内存； 为用户空间程序提供分配内存的机制|
|`Android Logger`|轻量级的LOG（日志）驱动|
|`Android Binder`|基于 OpenBinder 框架的一个驱动|
|`Android Power Management`|电源管理模块|
|`Low Memory Killer`|低内存管理器|
|`Android PMEM`|物理内存驱动|
|`USB Gadget`|USB 驱动（基于 gaeget 框架）|
|`Ram Console`|用于调试写入日志信息的设备|
|`Time Device`|定时控制设备|
|`Android Alarm`|硬件时钟|

## android 上的设备驱动

|驱动|说明|
|-|-|
|`Framebuff`|显示驱动|
|`surfaceflinger`|显示驱动|
|`gralloc`|显示驱动|
|`Event`|输入设备驱动|
|`ALSA`|音频驱动|
|`OSS`|音频驱动|
|`v412`|摄像头视频驱动|
|`MTD`|驱动|
||蓝牙驱动|
|`WLAN`|wifi驱动|

## android 图形名词

|名词|说明|
|-|-|
|`OpenGL`|开放图形库（open graphics library）用于生成2D 3D图像|
|`OpenGL ES`|（OpenGL for Embedded Systems）是OpenGL三维图形API的子集，针对手机、PDA和游戏主机等嵌入式设备而设计|
|`OpenVG`|（Open Vector Graphics）2D矢量图形处理标准函式库|
|`OpenCL`|（Open Computing Language）开放运算语言|
|`DirectFB`|（Direct Frame Buffer），提供硬体图形加速库|
|`GDI`|（Graphics Device Interface），图形设备接口，负责系统与绘图程序之间的信息交换|
|`DirectDraw`|DirectX中的关于视频输入输出的基本部分，使用DirectDraw可以方便地编制出高效的视频处理程序，只要用户的硬件支持DirectDraw，就能保证你的代码可以处理它们。|
|`Skia`|Android中的2D图形库|
|`libagl`|Android中通过软件方法实现的一套OpenGL动态库|
|`libhgl`|为区别libagl，自定义的一种叫法。特指GPU厂商提供的硬件实现的OpenGL|
|`render`|特指使用OpenGL动态库进行3D渲染|
|`copybit`|Android使用2D引擎来加速图形操作（主要是Surface之间的composition操作）的一种技术，对应着一个或几个动态库。|
|`pmem`|Android特有驱动，从linux内核中reserve物理连续内存，可以为2d、3d引擎、vpu等设备分配物理连续内存。|


## 使用GPU硬件加速需要做的工作
* Linux内核方面：
	* 添加GPU驱动支持，以模块方式编译GPU驱动，Android启动时加载内核模块。
	* 添加PMEM支持，预留内存供GPU使用
* Android方面：
	* 添加copybit HAL
	* 修改gralloc gralloc负责显存等的分配，以及对framebuffer操作
	* 修改libagl
	* 修改surfaceflinger
## framebuffer
    framebuffer字符设备

设备位于`/dev/graphics/fb*`,主设备号为29
相关代码：
```sh
include/linux/fb.h
driver/video/fbmem.c
fbmem.c	# 提供用户接口
xxxfb.c	# 提供硬件操作接口
```
用户操作：
|函数|说明|
|-|-|
|`ioctl()`|获取/设置信息|
|`mmap()`|映射内存|








