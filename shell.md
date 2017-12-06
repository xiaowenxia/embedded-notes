# 目录

## shell种类
<table>
  <tr>
  <td>bash</td>
  <td>csh</td>
  <td>ksh</td>
  <td>zsh</td>
  </tr>
</table>

## 基本语法
### 定义和使用变量
```sh
#!/bin/sh
a=" hello world"
echo $a
echo 'a is xiaxaiwen${a}'
```
### if else
```sh
if ....; then 
　 .... 
elif ....; then 
　 .... 
else 
　 .... 
fi 
```
### [] 条件测试
> [] 中前后一定要加空格

### shell常用命令
|                           |                              |
|---------------------------|------------------------------|
|`echo`                     |将文字内容打印在屏幕上 |
|`ls`                       |文件列表 |
|`wc`                       |计算文件行数(-l),单词数(-w),字符数(-c) |
|`cp`                       | 文件拷贝 |
|`mv`                       | 重命名文件或移动文件 |
|`rm`                       | 删除文件 |
|`grep`                     | 在文件内搜索字符串比如：grep 'searchstring' file.txt |
|`cut -b`                   |  指定欲显示的文件内容范围，并将它们输出到标准输出设备比如：输出每行第5个到第9个字符cut -b5-9 file.txt千万不要和cat命令混淆，这是两个完全不同的命令 |
|`cat`                      | 输出文件内容到标准输出设备（屏幕）上 |
|`file`                     | 得到文件类型 |
|`read var`                 | 提示用户输入，并将输入赋值给变量 |
|`sort`                     | 对file.txt文件中的行进行排序 |
|`uniq`                     | 删除文本文件中出现的行列比如： sort file.txt | uniq |
|`expr`                     | 进行数学运算Example: add 2 and 3expr 2 "+" 3 |
|`find`                     | 搜索文件比如：根据文件名搜索find . -name filename -print |
|`tee`                      | 将数据输出到标准输出设备(屏幕) 和文件比如：somecommand | tee outfile |
|`basename`                 | 返回不包含路径的文件名比如： basename /bin/tux将返回 tux |
|`dirname`                  | 返回文件所在路径比如：dirname /bin/tux将返回 /bin |
|`head`                     | 打印文本文件开头几行 |
|`tail`                     | 打印文本文件末尾几行 |
|`sed`                      | Sed是一个基本的查找替换程序。可以从标准输入（比如命令管道）读入文本，并将结果输出到标准输出（屏幕）。该命令采用正则表达式（见参考）进行搜索。不要和shell中的通配符相混淆。比如：将linuxfocus 替换为 LinuxFocus ：cat text.file | sed 's/linuxfocus/LinuxFocus/' > newtext.file |
|awk                        | awk 用来从文本文件中提取字段。缺省地，字段分割符是空格，可以使用-F指定其他分割符。cat file.txt | awk -F, '{print $1 "," $3 }'这里我们使用，作为字段分割符，同时打印第一个和第三个字段。如果该文件内容如下： Adam Bor, 34, IndiaKerry Miller, 22, USA命令输出结果为：Adam Bor, IndiaKerry Miller, USA |

