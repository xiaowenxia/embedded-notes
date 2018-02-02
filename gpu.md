vivante		：图芯技术有限公司
		用于android 3.0版本的平板系统中（Honeycomb）
gpu显卡联系方式	:yaowen.feng@vivantecorp.com13816214198
三星galaxy tab4 7.0 （T230 T231）
硬件抽象层	：Hardware Abstraction Layer (HAL)
Alpha Blending	：是按照“Alpha”混合向量的值来混合源像素和目标像素的一种图像处理技术。
android SurfaceFlinger：	SurfaceFlinger服务负责绘制Android应用程序的UI
android专有驱动：
  	1）Android Ashmem 匿名共享内存； 为用户空间程序提供分配内存的机制
      	2）Android Logger    轻量级的LOG（日志） 驱动；
      	3）Android Binder     基于 OpenBinder 框架的一个驱动；
      	4）Android Power Management  电源管理模块；
      	5）Low Memory Killer  低内存管理器；
      	6）Android PMEM        物理内存驱动；
      	7）USB Gadget             USB 驱动（基于 gaeget 框架）；
      	8）Ram Console           用于调试写入日志信息的设备；
      	9）Time Device             定时控制设备；  
     	10）Android Alarm         硬件时钟；
android 上的设备驱动：
      	1）Framebuff surfaceflinger gralloc 显示驱动；
      	2）Event 输入设备驱动；
      	3）ALSA 音频驱动；
      	4）OSS 音频驱动；
      	5）v412摄像头：视频驱动；
      	6）MTD 驱动；
      	7）蓝牙驱动；
      	8）WLAN 设备驱动；
	
OpenGL:	开放图形库 open graphics library 用于生成2D 3D图像，有350個不同的函數调用
OpenGL ES:（OpenGL for Embedded Systems）是OpenGL三维图形API的子集，针对手机、PDA和游戏主机等嵌入式设备而设计
OpenVG：（Open Vector Graphics）2D矢量图形处理标准函式库
OpenCL：（Open Computing Language）开放运算语言
DirectFB：（Direct Frame Buffer），提供硬体图形加速库
GDI：	（Graphics Device Interface），图形设备接口，负责系统与绘图程序之间的信息交换
DirectDraw：DirectDraw是DirectX中的关于视频输入输出的基本部分，使用DirectDraw可以方便地编制出高效的视频处理程序，只要用户的硬件支持DirectDraw，就能保证你的代码可以处理它们。
Skia:	Android中的2D图形库
libagl:	Android中通过软件方法实现的一套OpenGL动态库
libhgl:	为区别libagl，自定义的一种叫法。特指GPU厂商提供的硬件实现的OpenGL
render:	特指使用OpenGL动态库进行3D渲染
copybit:Android使用2D引擎来加速图形操作（主要是Surface之间的composition操作）的一种技术，对应着一个或几个动态库。
pmem:	Android特有驱动，从linux内核中reserve物理连续内存，可以为2d、3d引擎、vpu等设备分配物理连续内存。

使用GPU硬件加速需要做的工作
1.Linux内核方面：
	添加GPU驱动支持，以模块方式编译GPU驱动，Android启动时加载内核模块。
	添加PMEM支持，预留内存供GPU使用
2.Android方面：
	添加copybit HAL
	修改gralloc gralloc负责显存等的分配，以及对framebuffer操作
	修改libagl
	修改surfaceflinger
framebuffer
	文件节点/dev/graphics/fb*
JZ4770:使用GC860 gpu
缩略词：
	BSP	板级开发包
	DE	Draw Engine	绘画引擎？
	DRI	Direct Rendering Infrastructure	（基层直接渲染），一个安全且有效率的直接对显示硬件存取的方法，DRI的一个主要目的就是提供高效能的OpenGL支持，DRI是由一系列的软件模块组成。引入DRI的目的是为了3D图形加速，DRI是一个软件架构，用来协调linux kernel，X windows系统，3D图形硬件以及OpenGL渲染引擎之间的工作。
	DRM	Direct Rendering Manager（），DRM驱动用来处理DMA，内存管理，资源锁以及安全硬件访问。linux DRM层用来支持那些复杂的显卡设备
	EXA	X Window Acceleration for 2D
	FE	Graphics Pipeline Front End
	GAL	Graphics Abstraction Layer
	GDI	Graphics Device Interface
	HI	Host Interface
	ICD	Installable Client Driver
	MC	Memory Controller
	OCL	OpenCL
	PA	Primitive Assembly
	PE	Pixel Engine
	RA	Rasterizer
	SE	Setup Engine
	SH	Shader
	SMP	Symmetric Multiprocessing
	SoC	System on Chip
	TX	Texture Engine
GPU具有高并行结构（highly parallel structure），所以GPU 在处理图形数据和复杂算法方面拥有比CPU 更高的效率
Shade Language（着色语言）有：GLSL（High Level ShadingLanguage）Cg语言（C for Graphic）
图形绘制管线分为三个主要阶段
	应用程序阶段
	几何阶段：顶点坐标变换、光照、裁剪、投影以及屏幕映射
	光栅阶段，基于几何阶段的输出数据，为像素（Pixel）正确配色，绘制完整图像，每个像素的信息存储在颜色缓冲器（color buffer 或者frame buffer）中









