# 目录
* [tcpip模型](#tcpip模型)
* [以太网协议](#以太网协议)
* [ARP协议](#ARP协议)
* [TCP协议](#TCP协议)

## tcpip模型

<table style="text-align:center">
   <tr>
      <td>OSI模型</td>
      <td>linux tcpip模型</td>
      <td>常用协议</td>
      <td>网络设备</td>
   </tr>
   <tr>
      <td>网络层</td>
      <td rowspan="3">网络层</td>
      <td rowspan="3">telnet/DHCP/TFTP/FTP/MQTT/NFS/DNS/FTP/SNMP</td>
      <td rowspan="3"></td>
   </tr>
   <tr>
      <td>表示层</td>
   </tr>
   <tr>
      <td>会话层</td>
   </tr>
   <tr>
      <td>传输层</td>
      <td>传输层</td>
      <td>TCP/UDP</td>
      <td>四层交换机</td>
   </tr>
   <tr>
      <td>网络层</td>
      <td>网络层</td>
      <td>IP/ICMP/IGMP/ARP</td>
      <td>路由器，三层交换机</td>
   </tr>
   <tr>
      <td>数据链路层</td>
      <td rowspan="2">网络接口层</td>
      <td rowspan="2">Ethernet/PPP/PPPoE</td>
      <td>交换机（二层交换机），网桥，网卡（一半物理层，一半链路层）</td>
   </tr>
   <tr>
      <td>物理层</td>
      <td>中继器、集线器</td>
   </tr>
</table>

## 以太网协议

<table style="text-align:center">
   <tr>
      <td>前导码</td>
      <td>SFD</td>
      <td>目标地址</td>
      <td>源地址</td>
      <td>长度/类型</td>
      <td>数据</td>
      <td>CRC校验</td>
   </tr>
   <tr>
      <td>7字节</td>
      <td>1字节</td>
      <td>6字节</td>
      <td>6字节</td>
      <td>2字节</td>
      <td>46~1500字节</td>
      <td>4字节</td>
   </tr>
</table>

> 1. <strong>前导码和SFD：</strong> 不能算是以太网数据帧，是以太网在物理层上发送以太网数据时添加上去的。
> 2. <strong>长度/类型：</strong> 大于1518，表示该以太网帧中的数据属于哪个上层协议（0x0800:IP数据包；0x0806:ARP数据包）
> 3. <strong>单播地址、组播地址：</strong> 第一个字节的bit0为0代表单播地址，为1代表组播地址。

## ARP协议

<table style="text-align:center">
   <tr>
      <td>以太网首部</td>
      <td>硬件类型</td>
      <td>协议类型</td>
      <td>MAC地址长度</td>
      <td>协议地址长度</td>
      <td>OP</td>
      <td>源MAC地址</td>
      <td>源IP地址</td>
      <td>目标MAC地址</td>
      <td>目标IP地址</td>
   </tr>
   <tr>
      <td>14字节</td>
      <td>2字节</td>
      <td>2字节</td>
      <td>1字节</td>
      <td>1字节</td>
      <td>2字节</td>
      <td>6字节</td>
      <td>4字节</td>
      <td>6字节</td>
      <td>4字节</td>
   </tr>
</table>

> 1. <strong>MAC地址长度和IP地址长度：</strong> 分别为6和4.
> 2. <strong>OP：</strong>ARP请求（值为1）、ARP应答（值为2）。

## tcp协议

tcp三次握手：
1. 客户端发送一个SYN段（同步序号）指明客户打算连接的服务器端口，以及初始化序号(ISN) 。
2. 服务器发回包含服务器的初始序号的SYN报文段作为应答。同时，将确认序号(ACK)设置为客户的ISN加1以对客户的SYN 报文段进行确认。一个SYN将占用一个序号。
3. 客户必须将确认序号设置为服务器的ISN加1以对服务器的SYN报文段进行确认。
如下图所示：
![tcp协议图解](res/tcp协议图解.jpg)