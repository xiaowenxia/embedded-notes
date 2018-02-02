源码目录：
	api：	存放uboot提供的接口函数
	arch：	存放跟芯片相关的文件
	board：	开发板配置文件
	common:	uboot命令行下支持的命令
	disk：	磁盘支持
	doc：	文件目录
	drivers:设备驱动程序
	examples例程
	fs:	支持的文件系统，cramfs fat fdos jffs2 registerfs
	include:uboot使用到的头文件
	lib_xxx:与体系结构相关的库文件
	net:	网络协议栈相关的文件 BOOTP TFTP RARP NFS
	tools:	工具 mkimage crc

启动流程：
	stage1：cpu 硬件初始化，汇编实现，加载U-Boot到RAM空间 设置堆栈 跳转到stage2
	stage2：一般主函数是lib_arm/board.c中的start_armboot。
		调用一系列的初始化函数
		将内核从flash复制到ram中
		进入uboot命令行
		调用内核

