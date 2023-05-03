# 기본 포트

| 프로토콜                                                                        | Port          | Description                                                                             |
| ------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------- |
| FTP                                                                             | 20, 21 / TCP  | 파일 전송 프로토콜 (File Transfer Protocol)                                             |
| SSH                                                                             | 22 / TCP      | Secure Shell, SSH(or Secure) FTP                                                        |
| svn + ssh (Sub version ssh)                                                     | 22 / TCP      | svn과 ssh 프로토콜을 합친 프로토콜                                                      |
| Telnet                                                                          | 23 / TCP      | TCP Protocol                                                                            |
| SMTP                                                                            | 25 / TCP      | 간이 전자 우편 전송 프로토콜                                                            |
| (Simple Mail Transfer Protocol SMTP) - 인터넷에서 이메일을 보내기 위한 프로토콜 |
| DNS                                                                             | 53 / TCP, UDP | Domain Name System                                                                      |
| DHCP                                                                            | 67, 68 / UDP  | Dynamic Host Configuration Protocol                                                     |
| TFTP                                                                            | 69 / UDP      | Trivial File Transfer Protocol, FTP보다 단순한 방식의 파일 전송 프로토콜                |
| HTTP                                                                            | 80 / TCP      | Hypertext Transfer Protocol, 브라우저가 웹 페이지에 연결할 수 있도록 하기 위한 프로토콜 |
| POP3                                                                            | 110 / TCP     | Post Office Protocol                                                                    |

응용 계층 인터넷 프로토콜 중 하나
윈도우 라이브 핫메일, G메일 과 같은 대부분의 웹 메일을 지원 |
| NTP | 123 / UDP | Network Time Protocol
패킷 교환, 가변 레이턴시, 데이터 네트워크를 통해 컴퓨터 시스템 간 시간 동기화를 위한 네트워크 프로토콜 |
| NetBIOS | 137, 138, 139 / TCP, UDP | OSI 모형의 세션 계층에 관련된 서비스들을 제공하여 개개의 컴퓨터 근거리 통신망을 통해 통신하도록 함 |
| IMAP | 143 / TCP | Internet Message Access Protocol
원격 서버로부터 TCP / IP연결을 통해 이메일을 가져오는데 사용됨 |
| SNMP | 161, 162 / TCP, UDP | Simple Network Management Protocol |
| BGP | 179 / TCP | Border Gateway Protocol
경계 경로 프로토콜 - 인터넷에서 주 경로 지정을 담당하는 프로토콜의 한 종류 |
| LDAP | 389 / TCP, UDP | Lightweight Directory Access Protocol
경량 디렉토리 접근 프로토콜
TCP/IP위에서 디렉토리 서비스를 조회하고 수정 |
| HTTPS | 443 / TCP | Hypertext Transfer Protocol Secure |
| LDAPS | 636 / TCP, UDP | Lightweight Directory Access Protocol Secure
SSL, TLS에서 제공하는 보안 연결을 통해 제공됨 |
| FTPS | 989, 990 / TCP | FTP Secure, FTP SSL, FTPES, S-FTP
FTP의 확장 |
| mysql | 3306 | MySQL |
| RDP | 3389 / TCP | Remote Desktop Protocol
원격 컴퓨터의 그래픽 사용자 인터페이스를 제공 |
| svn | 3690 / TCP, UDP | 서브버전은 자유 소프트웨어 버전관리 시스템. |
| Tomcat remote shutdown | 8005 / TCP | Tomcat remote shutdown |
| git | 9418 / TCP, UDP | git |
