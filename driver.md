
## 驱动开发注意事项
1. 不能访问C库
2. 只有一个很小的定长堆栈
3. 没有内存保护机制
4. 浮点数很难使用，应该使用整型数

## Kconfig
> 描述了所属目录源文档相关的内核配置菜单，用于make menuconfig中的配置

示例：
```sh
menu "Network device support"
config NETDEVICES
    bool "Enable Net Devices"  菜单类型
    depends on NET             该项依赖项，如果没有选中NET，则不会显示这项菜单。
        default y              默认yes
        help                   帮助信息
            This is help desciption。
    ...
    endmenu
```

### 菜单类型
菜单类型有：
* `bool` []
* `tristate` <>   三态（内建 模块 移除）
* `string`        字符串
* `hex` ()        十六进制
* `integer`       整型


## .config
> make menuconfig之后保存的文件

## Makefile
```makefile
    obj-y += foo.o  # 默认由foo.c或者foo.s 编译得到
    obj-m += foo.o  # 默认编译成模块
```
## vmlinux
> 是由linux源码编译后未压缩的内核

## linux内核Makefile
由5部分组成:
1. `Makefile` : 顶层Makefile。
2. `.config`: kernel配置文件。
3. `arch/xxx/Makefile`: 具体架构的Makefile。
4. `scripts/Makefile.xxx` : 通用规则。
5. `kbuild Makefile`: 整个kernel中大约有数百个这种文件。

`arch/$ARCH/configs` 默认的配置文件
`/driver/vidio` 对应Graphics support 代表显卡	

## file_operations
> 驱动程序操作功能结构体

|函数|说明|
|-|-|
|`open()`|打开设备|
|`release()`|释放设备|
|`read()`|读设备|
|`write()`|写设备|
|`ioctl()`|对设备设置控制参数|
|`llseek()`|修改文件当前的读写位置|
|`poll()`|查询设备是否可读可写|


## linux内核编译操作

```sh
make bzImage                    # 编译生成压缩的内核二进制文件
make vmlinux                    # 编译生成二进制内核文件
make modules                    # 编译生成内核模块
make modules_install # 安装模块
make bzdisk|fdimage|isoimage    # 编译生成启动软盘镜像或者光盘镜像
make install                    # 安装内核文件
make all                        # 相当于vmlinux+modules+bzImage
make rpm                        # 构建内核rpm包
make foo/bar/foobar.ko          # 编译单个驱动
make header_install             # 安装内核头文件
make M=some/sub/dir             # 编译指定目录
make O=/path/to/some/dir        # 指定生成的文件放到该目录
make kernelversion              # 输出内核版本信息
make kernelrelease              # 输出内核发行标识
make rpm-pkg|deb-pkg|tar-pkg|targz-pkg|tarbz2-pkg   # 构建这种格式的内核包
make clean                      # 清除生成文件（保留.config和部分模块文件）
make mrproper                   # 清除全部文件（包括.config和备份文件）
make distclean                  # 在make mrproper上还清除编辑器其他的备份文件
```

## modules.order
    记录了Makefile中模块出现的顺序
## .o.cmd
    表示生成该对象的具体命令



