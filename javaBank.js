let javaBank = [
    {
      "id": 1,
      "type": "choice",
      "content": "1、下列选项中，不属于 Java 语言特点的一项是。",
      "options": {
        "A": "安全性",
        "B": "分布式",
        "C": "面向对象",
        "D": "编译执行"
      },
      "answer": "D"
    },
    {
      "id": 2,
      "type": "choice",
      "content": "2、Java 语言和 c++语言相比，哪一项是 Java 有的，而 c++没有？",
      "options": {
        "A": "面向对象",
        "B": "有类库",
        "C": "跨平台",
        "D": "动态链接"
      },
      "answer": "C"
    },
    {
      "id": 3,
      "type": "choice",
      "content": "3、如下哪个不是 Java 中有效的变量名。",
      "options": {
        "A": "if",
        "B": "hello",
        "C": "name",
        "D": "good"
      },
      "answer": "A"
    },
    {
      "id": 4,
      "type": "choice",
      "content": "4、下列不属于 Java 保留字的一个是。",
      "options": {
        "A": "else",
        "B": "Unicode",
        "C": "if",
        "D": "static"
      },
      "answer": "B"
    },
    {
      "id": 5,
      "type": "choice",
      "content": "5、现有 2 个 char 类型的变量 a1=`a`、a2=2，当执行 a1=(char)(a1+a2)；语句之后，a1 的值应该是。",
      "options": {
        "A": "`a`",
        "B": "12",
        "C": "`c`",
        "D": "语句在编译时出错"
      },
      "answer": "C"
    },
    {
      "id": 6,
      "type": "choice",
      "content": "6、下列关于 int 类型和 long 类型的说法中，正确的一个是。",
      "options": {
        "A": "int 类型可以自动转换为 long 类型",
        "B": "long 类型可以自动转换为 int 类型",
        "C": "long 类型占的存储空间比 int 类型的小",
        "D": "long 类型和 int 类型数据能表示整数的范围一样"
      },
      "answer": "A"
    },
    {
      "id": 7,
      "type": "choice",
      "content": "7、下列类的定义中，错误的是。",
      "options": {
        "A": "class y{}",
        "B": "public x extends y{}",
        "C": "public class x extends y{}",
        "D": "class x extends y implements y1{}"
      },
      "answer": "B"
    },
    {
      "id": 8,
      "type": "choice",
      "content": "8、执行语句 int i=1, j=i+1；后 i 与 j 的值分别为。",
      "options": {
        "A": "1 与 1",
        "B": "2 与 1",
        "C": "1 与 2",
        "D": "2 与 2"
      },
      "answer": "C"
    },
    {
      "id": 9,
      "type": "choice",
      "content": "9、为了区分重载多态中间名的不同方法，要求。",
      "options": {
        "A": "调用时用类名或对象名做前缀",
        "B": "返回值类型不同",
        "C": "形式参数个数或者类型不同",
        "D": "形式参数名称不同"
      },
      "answer": "C"
    },
    {
      "id": 10,
      "type": "choice",
      "content": "10、定义类头时能使用的修饰符是。",
      "options": {
        "A": "private",
        "B": "static",
        "C": "protected",
        "D": "abstract"
      },
      "answer": "D"
    },
    {
      "id": 11,
      "type": "choice",
      "content": "11、如果在编译 Java 程序时，编译结果报告说找不到要编译的代码，错误是。",
      "options": {
        "A": "没有 import 相应的包",
        "B": "if 语法错误",
        "C": "程序中存在异常",
        "D": "文件名写错"
      },
      "answer": "D"
    },
    {
      "id": 12,
      "type": "choice",
      "content": "12、int 类型被包装在如下的哪一个类中？",
      "options": {
        "A": "java.lang.Character",
        "B": "java.lang.Integer",
        "C": "java.util.Integer",
        "D": "java.lang.Short"
      },
      "answer": "B"
    },
    {
      "id": 13,
      "type": "choice",
      "content": "13、关于对下列代码段的描述，正确的一项是。catch(Exception e) { System.Err.println(“An exception was thrown”); throw e; }",
      "options": {
        "A": "程序终止",
        "B": "编译出错",
        "C": "该异常不会被处理",
        "D": "该异常会继续被上层处理"
      },
      "answer": "D"
    },
    {
      "id": 14,
      "type": "choice",
      "content": "14、下列说法中，错误的一项是。",
      "options": {
        "A": "内部类是被定义于另一个类中的类",
        "B": "使用内部类实现监听器，在编程时比较容易实现",
        "C": "内部类对象可以访问外部类的成员方法和变量，包括私有成员",
        "D": "由于内部类定义于另一个类，因此不适用于 AWT 的事件处理机制"
      },
      "answer": "C"
    },
    {
      "id": 15,
      "type": "choice",
      "content": "15、下面选项是 StringBuffer 的构造方法，哪个选项是错误的。",
      "options": {
        "A": "StringBuffer()",
        "B": "StringBuffer(int capacity)",
        "C": "StringBuffer(String str)",
        "D": "StringBuffer(char[] data)"
      },
      "answer": "B"
    },
    {
      "id": 16,
      "type": "choice",
      "content": "16、下面关于变量及其范围的陈述哪是不正确的。",
      "options": {
        "A": "实例变量用关键字 static 声明",
        "B": "局部变量在使用前必须被初始化",
        "C": "实例变量是类的成员变量",
        "D": "在方法中定义的局部变量在该方法被执行时创建"
      },
      "answer": "A"
    },
    {
      "id": 17,
      "type": "choice",
      "content": "17、以下关于继承的叙述正确的是。",
      "options": {
        "A": "在 Java 中类只允许单一继承",
        "B": "在 Java 中一个类只能实现一个接口",
        "C": "在 Java 中一个类不能同时继承一个类和实现一个接口",
        "D": "在 Java 中接口只允许单一继承"
      },
      "answer": "A"
    },
    {
      "id": 18,
      "type": "choice",
      "content": "18、下说法中错误的一项是。",
      "options": {
        "A": "线程一旦创建，则立即自动进行",
        "B": "线程创建后需要调用 start() 方法，将线程置于可运行状态",
        "C": "调用线程的 start() 方法后，线程也不一定能立即执行",
        "D": "线程处于可运行状态，意味着它可以被调度"
      },
      "answer": "A"
    },
    {
      "id": 19,
      "type": "choice",
      "content": "19、包 packone 的类 ClassOne 中有如下成员方法：protected void method_A(){...} private void method_B(){...} public void method_C(){...} void method_D(){...} 类 ClassTwo 不属于包 packone 并且不是 ClassOne 的子类，在 ClassTwo 类中可以调用哪个方法。",
      "options": {
        "A": "method_A",
        "B": "method_B",
        "C": "method_C",
        "D": "method_D"
      },
      "answer": "C"
    },
    {
      "id": 20,
      "type": "choice",
      "content": "20、下面哪一个 import 命令可以为我们提供编写输入输出应用程序的类。",
      "options": {
        "A": "import java.sql.*;",
        "B": "import java.util.*;",
        "C": "import java.io.*;",
        "D": "import java.net.*;"
      },
      "answer": "C"
    },
    {
      "id": 21,
      "type": "choice",
      "content": "21、以下选项中，哪个用来编译源程序。",
      "options": {
        "A": "Javadoc",
        "B": "Java 运行工具",
        "C": "Java 编译器",
        "D": "Java 打包工具"
      },
      "answer": "C"
    },
    {
      "id": 22,
      "type": "choice",
      "content": "22、Java 属于以下哪种语言？",
      "options": {
        "A": "机器语言",
        "B": "汇编语言",
        "C": "高级语言",
        "D": "以上都不对"
      },
      "answer": "C"
    },
    {
      "id": 23,
      "type": "choice",
      "content": "23、下面哪种类型的文件可以在 Java 虚拟机中运行？",
      "options": {
        "A": "java",
        "B": ".jre",
        "C": "class",
        "D": ".exe"
      },
      "answer": "C"
    },
    {
      "id": 24,
      "type": "choice",
      "content": "24、以下选项中，switch 语句判断条件可以接收的数据类型有哪些？（多选）",
      "options": {
        "A": "int",
        "B": "byte",
        "C": "char",
        "D": "short"
      },
      "answer": "ABCD"
    },
    {
      "id": 25,
      "type": "choice",
      "content": "25、假设 int x = 2，三元表达式 (x>0?x+1:5) 的运行结果是以下哪一个？",
      "options": {
        "A": "0",
        "B": "2",
        "C": "3",
        "D": "5"
      },
      "answer": "C"
    },
    {
      "id": 26,
      "type": "choice",
      "content": "26、下面的运算符中，用于执行除法运算是哪个？",
      "options": {
        "A": "%",
        "B": "\\",
        "C": "/",
        "D": "*"
      },
      "answer": "C"
    },
    {
      "id": 27,
      "type": "choice",
      "content": "27、下列语句哪些属于循环语句？（多选）",
      "options": {
        "A": "for 语句",
        "B": "if 语句",
        "C": "while 语句",
        "D": "switch 语句"
      },
      "answer": "AC"
    },
    {
      "id": 28,
      "type": "choice",
      "content": "28、下面哪种写法可以实现访问数组 arr 的第 1 个元素？",
      "options": {
        "A": "arr[0]",
        "B": "arr(0)",
        "C": "arr[1]",
        "D": "arr(1)"
      },
      "answer": "A"
    },
    {
      "id": 29,
      "type": "choice",
      "content": "29、以下哪个选项可以正确创建一个长度为 3 的一维数组？",
      "options": {
        "A": "new int [2];",
        "B": "new int[3][];",
        "C": "new int[3];",
        "D": "以上答案皆不对"
      },
      "answer": "C"
    },
    {
      "id": 30,
      "type": "choice",
      "content": "30、请先阅读下面的代码。int x = 1; int y = 2; if (x % 2 == 0) { y++; } else { y--; } System.out.println(\"y=\" + y); 上面一段程序运行结束时，变量 y 的值为下列哪一项？",
      "options": {
        "A": "3",
        "B": "2",
        "C": "1",
        "D": "switch 语句"
      },
      "answer": "C"
    },
    {
      "id": 31,
      "type": "choice",
      "content": "31、在 Java 中，以下哪个关键字用于定义类？",
      "options": {
        "A": "function",
        "B": "class",
        "C": "struct",
        "D": "object"
      },
      "answer": "B"
    },
    {
      "id": 32,
      "type": "choice",
      "content": "32、以下哪种数据类型在 Java 中用于表示布尔值？",
      "options": {
        "A": "int",
        "B": "boolean",
        "C": "char",
        "D": "float"
      },
      "answer": "B"
    },
    {
      "id": 33,
      "type": "choice",
      "content": "33、在 Java 中，数组的下标从（ ）开始。",
      "options": {
        "A": "0",
        "B": "1",
        "C": "-1",
        "D": "视情况而定"
      },
      "answer": "A"
    },
    {
      "id": 34,
      "type": "choice",
      "content": "34、以下哪个方法用于在控制台输出信息？",
      "options": {
        "A": "println()",
        "B": "print()",
        "C": "printf()",
        "D": "以上都是"
      },
      "answer": "D"
    },
    {
      "id": 35,
      "type": "choice",
      "content": "35、在 Java 中，一个类可以继承（ ）个父类。",
      "options": {
        "A": "1",
        "B": "2",
        "C": "多",
        "D": "0"
      },
      "answer": "A"
    },
    {
      "id": 36,
      "type": "choice",
      "content": "36、以下哪个是 Java 中的访问修饰符，表示同一包内可见？",
      "options": {
        "A": "private",
        "B": "public",
        "C": "protected",
        "D": "default（不写修饰符情况）"
      },
      "answer": "D"
    },
    {
      "id": 37,
      "type": "choice",
      "content": "37、在 Java 中，用于抛出异常的关键字是。",
      "options": {
        "A": "try",
        "B": "catch",
        "C": "throw",
        "D": "finally"
      },
      "answer": "C"
    },
    {
      "id": 38,
      "type": "choice",
      "content": "38、以下哪种循环结构在知道循环次数时最适合使用？",
      "options": {
        "A": "while 循环",
        "B": "do - while 循环",
        "C": "for 循环",
        "D": "以上都可以"
      },
      "answer": "C"
    },
    {
      "id": 39,
      "type": "choice",
      "content": "39、在 Java 中，字符串是（ ）类型的对象。",
      "options": {
        "A": "基本数据",
        "B": "引用数据",
        "C": "既不是基本也不是引用",
        "D": "特殊的基本数据"
      },
      "answer": "B"
    },
    {
      "id": 40,
      "type": "choice",
      "content": "40、以下哪个不是 Java 中的包装类？",
      "options": {
        "A": "Integer",
        "B": "Double",
        "C": "String",
        "D": "Boolean"
      },
      "answer": "C"
    },
    {
      "id": 41,
      "type": "choice",
      "content": "41、JDK 提供的编译器是。",
      "options": {
        "A": "java.exe",
        "B": "javac.exe",
        "C": "javap.exe",
        "D": "javaw.exe"
      },
      "answer": "B"
    },
    {
      "id": 42,
      "type": "choice",
      "content": "42、以下作为 Java 程序入口的 main 方法声明正确的。",
      "options": {
        "A": "public void main(String args[])",
        "B": "public int main(String args[])",
        "C": "public static void main(String args[])",
        "D": "public static int main(String args[])"
      },
      "answer": "C"
    },
    {
      "id": 43,
      "type": "choice",
      "content": "43、以下标识符错误的是。",
      "options": {
        "A": "Public",
        "B": "张三",
        "C": "class",
        "D": "main"
      },
      "answer": "C"
    },
    {
      "id": 44,
      "type": "choice",
      "content": "44、java 中定义字符串 String s=\"pzhu\", 下面操作可以取字符串长度的是。",
      "options": {
        "A": "s.length()",
        "B": "s.length",
        "C": "s.size()",
        "D": "length(s)"
      },
      "answer": "A"
    },
    {
      "id": 45,
      "type": "choice",
      "content": "45、如下定义数组，操作正确的是。int a[]={1,2,3};",
      "options": {
        "A": "a[3]=100",
        "B": "a[0].length",
        "C": "a++",
        "D": "a.length"
      },
      "answer": "D"
    },
    {
      "id": 46,
      "type": "choice",
      "content": "46、如下定义二维数组操作错误的是。int a[][]={{1,2},{3}};",
      "options": {
        "A": "a[0][1]=200",
        "B": "a[0].length",
        "C": "a[1][1]=100",
        "D": "a.length"
      },
      "answer": "C"
    },
    {
      "id": 47,
      "type": "choice",
      "content": "47、以下数据类型存储空间最大的是。",
      "options": {
        "A": "byte",
        "B": "long",
        "C": "float",
        "D": "char"
      },
      "answer": "B"
    },
    {
      "id": 48,
      "type": "choice",
      "content": "48、面向对象的三大特性，不包括如下。",
      "options": {
        "A": "异常",
        "B": "封装",
        "C": "继承",
        "D": "多态"
      },
      "answer": "A"
    },
    {
      "id": 49,
      "type": "choice",
      "content": "49、关于类的定义以下说法错误。",
      "options": {
        "A": "类定义使用 class 关键字",
        "B": "每个类中必须有一个 main 方法",
        "C": "一个包可以包含多个类",
        "D": "java 中所有类都是 Object 类的子类"
      },
      "answer": "B"
    },
    {
      "id": 50,
      "type": "choice",
      "content": "50、关于构造方法以下说法错误的是。",
      "options": {
        "A": "构造方法名必须与类名一致",
        "B": "构造方法可以重载",
        "C": "构造方法是通过 new 来调用",
        "D": "每个类都必须编写构造方法代码"
      },
      "answer": "D"
    },
    {
      "id": 51,
      "type": "choice",
      "content": "51、关于继承如下说法错误的是。",
      "options": {
        "A": "Java 是单继承的",
        "B": "通过 extends 来定义继承",
        "C": "所有父类方法都可以被 override 的",
        "D": "继承呈现的是 is a 的关系"
      },
      "answer": "C"
    },
    {
      "id": 52,
      "type": "choice",
      "content": "52、以下代码执行的结果是。System.out.println(\"攀枝花学院 pzhu\".length());",
      "options": {
        "A": "编译错误",
        "B": "运行错误",
        "C": "9",
        "D": "14"
      },
      "answer": "C"
    },
    {
      "id": 53,
      "type": "choice",
      "content": "53、用来存储键值对的容器是。",
      "options": {
        "A": "ArrayList",
        "B": "LinkedList",
        "C": "HashSet",
        "D": "HashMap"
      },
      "answer": "D"
    },
    {
      "id": 54,
      "type": "choice",
      "content": "54、java 中用来抛出异常的关键字是。",
      "options": {
        "A": "try",
        "B": "catch",
        "C": "throw",
        "D": "throws"
      },
      "answer": "C"
    },
    {
      "id": 55,
      "type": "choice",
      "content": "55、关于 finally 块中的代码，以下说法不正确的是。",
      "options": {
        "A": "try 块中的 return 语句会中断 finally 块中语句的执行",
        "B": "无论 finally 块前的语句运行是否产生异常，其中语句都会执行",
        "C": "finally 块中的语句通常中用作资源的清理",
        "D": "try 块中的 System.exit(1)语句会中断 finally 块中语句的执行"
      },
      "answer": "A"
    },
    {
      "id": 56,
      "type": "choice",
      "content": "56、关于 Java 字符串说法错误的是。",
      "options": {
        "A": "Java 中的字符串是常量",
        "B": "Java 中的字符串不是对象",
        "C": "Java 中的字符串存储在常量池中",
        "D": "一个字符串定义后的长度不可变"
      },
      "answer": "B"
    },
    {
      "id": 57,
      "type": "choice",
      "content": "57、关于 JDBC 操作数据库，以下说法不正确的。",
      "options": {
        "A": "JDBC 只能操作 MySQL 数据库",
        "B": "JDBC 中定义的 Connection,Statement,ResultSet 都是接口",
        "C": "JDBC 操作数据库必须要有相应的实现了 JDBC 接口的驱动",
        "D": "JDBC 可以通过将客户端 SQL 传递给数据库服务器来实现数据库操作"
      },
      "answer": "A"
    },
    {
      "id": 58,
      "type": "choice",
      "content": "58、以下程序代码错误的是。abstract class P{} class A extends P{} abstract class B extends P{}",
      "options": {
        "A": "P p=new A();",
        "B": "P p=new B();",
        "C": "A a=new A();",
        "D": "P p=new P{} {void foo()}};"
      },
      "answer": "B"
    },
    {
      "id": 59,
      "type": "choice",
      "content": "59、以下 Collection c 创建有误的是。",
      "options": {
        "A": "Collection c=new ArrayList();",
        "B": "Collection c=new LinkedList();",
        "C": "Collection c=new HashSet();",
        "D": "Collection c=new HashMap();"
      },
      "answer": "D"
    },
    {
      "id": 60,
      "type": "choice",
      "content": "60、以下程序代码错误的是。interface IA{ void f(); }",
      "options": {
        "A": "abstract class A implements IA{}",
        "B": "class A implements IA{void f(){}}",
        "C": "class A implements IA {void f(String s){}}",
        "D": "IA a=new IA(){void f(){}}"
      },
      "answer": "C"
    },
    {
      "id": 61,
      "type": "choice",
      "content": "61、javac 是 java 的。",
      "options": {
        "A": "解释器",
        "B": "编译器",
        "C": "小程序浏览器",
        "D": "调试器"
      },
      "answer": "B"
    },
    {
      "id": 62,
      "type": "choice",
      "content": "62、appletviewer 是 java 的。",
      "options": {
        "A": "解释器",
        "B": "编译器",
        "C": "小程序浏览器",
        "D": "调试器"
      },
      "answer": "C"
    },
    {
      "id": 63,
      "type": "choice",
      "content": "63、编译一个定义了三个类和三个方法的 java 源码文件，总共会产生几个字节码文件，其扩展名是什么？",
      "options": {
        "A": "5 个字节码文件，其扩展名是“java”",
        "B": "2 个字节码文件，其扩展名是“java”",
        "C": "3 个字节码文件，其扩展名是“class”",
        "D": "2 个字节码文件，其扩展名是“class”"
      },
      "answer": "C"
    },
    {
      "id": 64,
      "type": "choice",
      "content": "64、java 源码文件的名称与主类的名称。",
      "options": {
        "A": "必须相同但不区分大小写",
        "B": "必须相同且区分大小写",
        "C": "必须不同",
        "D": "任意"
      },
      "answer": "B"
    },
    {
      "id": 65,
      "type": "choice",
      "content": "65、下面那些选项不能用做变量名的首字符。",
      "options": {
        "A": "字母",
        "B": "下划线（__）",
        "C": "数字",
        "D": "美元符号（$）"
      },
      "answer": "C"
    },
    {
      "id": 66,
      "type": "choice",
      "content": "66、下面哪个不是 java 的原始数据类型？",
      "options": {
        "A": "short",
        "B": "boolean",
        "C": "Int",
        "D": "Float"
      },
      "answer": "B"
    },
    {
      "id": 67,
      "type": "choice",
      "content": "67、下面哪条语句不会出现编译警告或错误？",
      "options": {
        "A": "float f=1.3F;",
        "B": "chat c=\"a\";",
        "C": "float f=1.3;",
        "D": "boolean d=null;"
      },
      "answer": "A"
    },
    {
      "id": 68,
      "type": "choice",
      "content": "68、以下声明常量不正确的是。",
      "options": {
        "A": "final int PI=3;",
        "B": "final PI=3;",
        "C": "static final int PI=3;",
        "D": "public static final int PI=3;"
      },
      "answer": "B"
    },
    {
      "id": 69,
      "type": "choice",
      "content": "69、java 定义了 4 个整型数据类型：字节性（byte）短整型(short) 整型（int）长整型（long），其中 byte 占用内存为。",
      "options": {
        "A": "8bit",
        "B": "16bit",
        "C": "32 bit",
        "D": "64bit"
      },
      "answer": "A"
    },
    {
      "id": 70,
      "type": "choice",
      "content": "70、5%2.1 的值是。",
      "options": {
        "A": "1",
        "B": "0",
        "C": "0.8",
        "D": "不能通过编译"
      },
      "answer": "D"
    },
    {
      "id": 71,
      "type": "choice",
      "content": "71、-11&3 的值是。",
      "options": {
        "A": "1",
        "B": "3",
        "C": "9",
        "D": "-11"
      },
      "answer": "A"
    },
    {
      "id": 72,
      "type": "choice",
      "content": "72、8<<2 的值是。",
      "options": {
        "A": "2",
        "B": "4",
        "C": "8",
        "D": "32"
      },
      "answer": "D"
    },
    {
      "id": 73,
      "type": "choice",
      "content": "73、若有 int a = 1, b= 2, c = 3, d=4; 则表达式 a>b?a:c>d?c:d 的值是。",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "answer": "D"
    },
    {
      "id": 74,
      "type": "choice",
      "content": "74、以下为合法类型转换的为。",
      "options": {
        "A": "(int)'A'",
        "B": "(char)'A'",
        "C": "(boolean)(2-2)",
        "D": "(char)(651/12)"
      },
      "answer": "D"
    },
    {
      "id": 75,
      "type": "choice",
      "content": "75、下面哪条语句是正确的？",
      "options": {
        "A": "int a={1,2,3,4,5};",
        "B": "int b={1,2,3,4,5}",
        "C": "int c[]={1,2,3,4,5};",
        "D": "int [l]d={1,2,3,4,5}"
      },
      "answer": "C"
    },
    {
      "id": 76,
      "type": "choice",
      "content": "76、对于数组 int a[]; 下面那条语句可以输出数据 a 的元素个数？",
      "options": {
        "A": "System.out.println(a.size);",
        "B": "System.out.println(a.size());",
        "C": "System.out.println(a.length());",
        "D": "System.out.println(a.length);"
      },
      "answer": "D"
    },
    {
      "id": 77,
      "type": "choice",
      "content": "77、可以用作 switch 表达式的基本数据类型分别是。",
      "options": {
        "A": "boolean",
        "B": "byte",
        "C": "float",
        "D": "double"
      },
      "answer": "B"
    },
    {
      "id": 78,
      "type": "choice",
      "content": "78、下面的 while 语句退出时.i 的值是。byte b=1; int i = 0 ; while(b++) i=i+1;",
      "options": {
        "A": "126",
        "B": "0",
        "C": "127",
        "D": "出现死循环，i 的值无穷大"
      },
      "answer": "D"
    },
    {
      "id": 79,
      "type": "choice",
      "content": "79、设 J_Hello.java 文件内容如下：class J_Hello{ static void main(String args[]){ System.out.println(“Hello!”); } } 下面说法正确的是。",
      "options": {
        "A": "J_Hello.java 无法通过编译",
        "B": "J_Hello.java 可以通过编译，但运行时出现“Main method not public”提示信息",
        "C": "J_Hello.java 可以通过编译，但无法运行，且无任何提示信息",
        "D": "J_Hello.java 可以通过编译，可以正常运行，输出“Hello!”"
      },
      "answer": "B"
    },
    {
      "id": 80,
      "type": "choice",
      "content": "80、下面哪个类声明是正确的。",
      "options": {
        "A": "abstract final class car{}",
        "B": "abstract private car(){",
        "C": "protected private car{",
        "D": "public abstract class car{}"
      },
      "answer": "D"
    },
    {
      "id": 81,
      "type": "choice",
      "content": "81、下列（ ）的说法是错误的。",
      "options": {
        "A": "Java 语言只允许单一继承",
        "B": "Java 语言允许多个接口",
        "C": "Java 语言不允许一个类派生多个子类",
        "D": "Java 语言的单一继承使得代码更加可靠"
      },
      "answer": "C"
    },
    {
      "id": 82,
      "type": "choice",
      "content": "82、下述（ ）说法是正确的。",
      "options": {
        "A": "实例变量是类的成员变量",
        "B": "实例变量是用 static 关键字声明的",
        "C": "方法变量在方法执行时创建",
        "D": "方法变量在使用之前不用初始化"
      },
      "answer": "A"
    },
    {
      "id": 83,
      "type": "choice",
      "content": "83、使用继承的优点。",
      "options": {
        "A": "基类的大部分功能可以通过继承关系自动进入派生类",
        "B": "继承将基类的实现细节暴露给派生类",
        "C": "基类实现出现问题，就会影响到派生类",
        "D": "可在运行期决定是否选择继承代码，有足够的灵活性"
      },
      "answer": "A"
    },
    {
      "id": 84,
      "type": "choice",
      "content": "84、下列关于修饰符混用的说法，错误的是。",
      "options": {
        "A": "abstract 不能与 final 并列修饰同一个类",
        "B": "abstract 类中不能有 private 的成员",
        "C": "abstract 方法必须在 abstract 类中",
        "D": "static 方法中能处理非 static 的属性"
      },
      "answer": "A"
    },
    {
      "id": 85,
      "type": "choice",
      "content": "85、对于下列代码：public class Parent {public int addValue(int a, int b){ int s; s=a+b; return s;} } class Child extends Parent{……} Child 类中欲把 Parent 类中的 addValue 方法覆盖，下述什么方法可以加入类 Child 中？",
      "options": {
        "A": "private int addValue(int a,int b){……}",
        "B": "public float addValue(int a,int b){……}",
        "C": "public int addValue(int a,int b){……}",
        "D": "public int addValue(int a,int b)throws MyException{……}"
      },
      "answer": "C"
    },
    {
      "id": 86,
      "type": "choice",
      "content": "86、声明成员变量为临时变量（又称为过渡变量）所用的保留字是。",
      "options": {
        "A": "final",
        "B": "abstract",
        "C": "transient",
        "D": "temp"
      },
      "answer": "C"
    },
    {
      "id": 87,
      "type": "choice",
      "content": "87、声明公共变量所用的保留字是。",
      "options": {
        "A": "public",
        "B": "private",
        "C": "protectede",
        "D": "static"
      },
      "answer": "A"
    },
    {
      "id": 88,
      "type": "choice",
      "content": "88、声明受保护变量所用的保留字是。",
      "options": {
        "A": "public",
        "B": "private",
        "C": "protected",
        "D": "static"
      },
      "answer": "C"
    },
    {
      "id": 89,
      "type": "choice",
      "content": "89、对于下述类定义哪个说法正确？class MyString extends String{……}",
      "options": {
        "A": "可以成功编译",
        "B": "无法编译，因为没有 main 方法",
        "C": "无法编译，因为 String 是抽象类",
        "D": "无法编译，因为 String 是 final 类"
      },
      "answer": "D"
    },
    {
      "id": 90,
      "type": "choice",
      "content": "90、不能在 Java 派生类中被覆盖的方法是。",
      "options": {
        "A": "构造函数",
        "B": "动态方法",
        "C": "final 方法",
        "D": "抽象方法"
      },
      "answer": "C"
    },
    {
      "id": 91,
      "type": "choice",
      "content": "91、关于方法覆盖，下面哪个说法是错误的。",
      "options": {
        "A": "方法覆盖可以发生在任意类之间",
        "B": "覆盖方法与被覆盖的方法返回值类型相同",
        "C": "如果被覆盖的方法用 public 修饰，覆盖方法也必须用 public 修饰",
        "D": "覆盖方法不能抛出比被覆盖的方法更多的异常"
      },
      "answer": "A"
    },
    {
      "id": 92,
      "type": "choice",
      "content": "92、下面哪个方法声明是正确的？",
      "options": {
        "A": "abstract final String abc(){}",
        "B": "public abstract abc(){}",
        "C": "private static void abc(){}",
        "D": "public abstract static void abc(){}"
      },
      "answer": "B"
    },
    {
      "id": 93,
      "type": "judge",
      "content": "1. Java 语言具有良好的安全性和可移植性及平台无关性。",
      "answer": true
    },
    {
      "id": 94,
      "type": "judge",
      "content": "2. Java 语言取消了联合概念，保留了结构概念。",
      "answer": false
    },
    {
      "id": 95,
      "type": "judge",
      "content": "3. Java 语言中数据类型占内存字节数与平台无关。",
      "answer": true
    },
    {
      "id": 96,
      "type": "judge",
      "content": "4. Java 语言中可用下标和指针两种方式表示数组元素。",
      "answer": false
    },
    {
      "id": 97,
      "type": "judge",
      "content": "5. Java 语言的源程序不是编译型的，而是编译解释型的。",
      "answer": true
    },
    {
      "id": 98,
      "type": "judge",
      "content": "6. Java 程序分为两大类：一类是 Application 程序，另一类是 Applet 程序。前者又称为 Java 应用程序，后者又称 java 小应用程序。",
      "answer": true
    },
    {
      "id": 99,
      "type": "judge",
      "content": "7. Java Application 程序是由多个文件组成，其中可以有也可以没有主文件。",
      "answer": false
    },
    {
      "id": 100,
      "type": "judge",
      "content": "8. Java application 程序中，每一个类中，必有一个主方法 main()方法。",
      "answer": false
    },
    {
      "id": 101,
      "type": "judge",
      "content": "9. 组成 Java Application 的若干类中，有且仅有一个主类，只有主类中含有主方法 main()。",
      "answer": true
    },
    {
      "id": 102,
      "type": "judge",
      "content": "10. Java Application 程序中，必有一个主方法 main()，该方法有没有参数都可以。",
      "answer": false
    },
    {
      "id": 103,
      "type": "judge",
      "content": "11. 如果一个 Java 程序中有多个类，编译后只生成一个字节码文件，其名字同主类名。",
      "answer": false
    },
    {
      "id": 104,
      "type": "judge",
      "content": "12. Java 程序中是不区分大小写字母的。",
      "answer": false
    },
    {
      "id": 105,
      "type": "judge",
      "content": "13. Java 程序编译后生成的字节码文件，其后缀是.exe。",
      "answer": false
    },
    {
      "id": 106,
      "type": "judge",
      "content": "14. 在 Java 程序中，使用 import 语句引入的类是在解释器中实现的。",
      "answer": false
    },
    {
      "id": 107,
      "type": "judge",
      "content": "15. 在运行字节码文件中，使用 java 命令，一定要给出字节码文件的扩展名.class。",
      "answer": false
    },
    {
      "id": 108,
      "type": "judge",
      "content": "16. Java 核心源码包存放在 JDK 安装目录的 bin 目录下。",
      "answer": false
    },
    {
      "id": 109,
      "type": "judge",
      "content": "17. JDK 安装成功后，可以将 bin 目录的路径配置在环境变量 path 中。",
      "answer": true
    },
    {
      "id": 110,
      "type": "judge",
      "content": "18. 安装 JDK 时可以选择不安装公共 JRE。",
      "answer": true
    },
    {
      "id": 111,
      "type": "judge",
      "content": "19. lib 是 library 的缩写，用于存放 Java 类库或库文件。",
      "answer": true
    },
    {
      "id": 112,
      "type": "judge",
      "content": "20. Java 是一种面向对象的语言，因此它不支持过程式编程。",
      "answer": false
    },
    {
      "id": 113,
      "type": "judge",
      "content": "21. 在 Java 中，所有的方法都必须定义在类中。",
      "answer": true
    },
    {
      "id": 114,
      "type": "judge",
      "content": "22. 在 Java 中，所有的变量都必须定义在方法中。",
      "answer": false
    },
    {
      "id": 115,
      "type": "judge",
      "content": "23. 在 Java 中，可以使用关键字 this 来引用当前对象的引用。",
      "answer": true
    },
    {
      "id": 116,
      "type": "judge",
      "content": "24. 在 Java 中，接口是一种抽象类型，因此不能被实例化。",
      "answer": true
    },
    {
      "id": 117,
      "type": "judge",
      "content": "25. 在 Java 中，可以通过继承一个类来实现多个接口。",
      "answer": true
    },
    {
      "id": 118,
      "type": "judge",
      "content": "26. 利用 equals()方法判定 Date 类时，判断的是对象的值而不是对象的地址。",
      "answer": true
    },
    {
      "id": 119,
      "type": "judge",
      "content": "27. 类加载器加载程序运行所需要的所有类，它通过区分本机文件系统的类和网络系统导入的类增加安全性。",
      "answer": true
    },
    {
      "id": 120,
      "type": "judge",
      "content": "28. ==操作符判定两个分立的对象的内容和类型是否一致。",
      "answer": false
    },
    {
      "id": 121,
      "type": "judge",
      "content": "29. 调用 System.gc()方法能保证 JVM 立即进行垃圾收集。",
      "answer": false
    },
    {
      "id": 122,
      "type": "judge",
      "content": "30. final 修饰的变量可以不初始化。",
      "answer": false
    },
    {
      "id": 123,
      "type": "judge",
      "content": "31. Java 的 char 类型采用 ASCII 编码。",
      "answer": false
    },
    {
      "id": 124,
      "type": "judge",
      "content": "32. Java 的数据是对象，可以存储不同类型的数据。",
      "answer": false
    },
    {
      "id": 125,
      "type": "judge",
      "content": "33. Java 中 String 类是不可变的，修改时会生成新对象。",
      "answer": true
    },
    {
      "id": 126,
      "type": "judge",
      "content": "34. try - catch 块必须包含 finally 子句。",
      "answer": false
    },
    {
      "id": 127,
      "type": "judge",
      "content": "35. Java 中所有的异常都必须被处理。",
      "answer": false
    },
    {
      "id": 128,
      "type": "judge",
      "content": "36. 接口和类一样也可以有继承关系，而且只能支持单继承。",
      "answer": false
    },
    {
      "id": 129,
      "type": "judge",
      "content": "37. 可以用 FileOutputStream 对象作为 PrintWriter 类的构造方法的参数。",
      "answer": true
    },
    {
      "id": 130,
      "type": "judge",
      "content": "38. Runnable 是 Java 中用于实现多线程的关键字。",
      "answer": false
    },
    {
      "id": 131,
      "type": "judge",
      "content": "39. 一个类如果实现了多个接口，则它必须重载该接口中的所有方法。",
      "answer": true
    },
    {
      "id": 132,
      "type": "judge",
      "content": "40. 当一个方法在运行过程中产生一个异常，则这个方法会终止，整个程序也终止运行。",
      "answer": false
    },
    {
      "id": 133,
      "type": "judge",
      "content": "41. Java 是一种面向对象的语言，不支持过程式编程。",
      "answer": false
    },
    {
      "id": 134,
      "type": "judge",
      "content": "42. 在 Java 中，所有的方法都必须定义在类中。",
      "answer": true
    },
    {
      "id": 135,
      "type": "judge",
      "content": "43. 在 Java 中，变量可以在方法外部定义，成为成员变量或实例变量。",
      "answer": true
    },
    {
      "id": 136,
      "type": "judge",
      "content": "44. 在 Java 中，使用关键字 this 可以引用当前对象。",
      "answer": true
    },
    {
      "id": 137,
      "type": "judge",
      "content": "45. 在 Java 中，接口是一种抽象类型，不能被实例化。",
      "answer": true
    },
    {
      "id": 138,
      "type": "judge",
      "content": "46. 在 Java 中，一个类可以实现多个接口。",
      "answer": true
    },
    {
      "id": 139,
      "type": "judge",
      "content": "47. Java 的源代码中定义几个类，编译结果就生成几个以 .class 为后缀的字节码文件。",
      "answer": true
    },
    {
      "id": 140,
      "type": "judge",
      "content": "48. Java Application 程序中，必须有一个主方法 main()，该方法有没有参数都可以。",
      "answer": false
    },
    {
      "id": 141,
      "type": "judge",
      "content": "49. Java 的数据是对象，可以存储不同类型的数据。",
      "answer": false
    },
    {
      "id": 142,
      "type": "judge",
      "content": "50. Java 中 String 类是不可变的，修改时会生成新对象。",
      "answer": true
    },
    {
      "id": 143,
      "type": "judge",
      "content": "51. try - catch 块必须包含 finally 子句。",
      "answer": false
    },
    {
      "id": 144,
      "type": "judge",
      "content": "52. Java 中 final 修饰的变量必须初始化且不可修改。",
      "answer": true
    },
    {
      "id": 145,
      "type": "judge",
      "content": "53. Java 的 char 类型采用 ASCII 编码。",
      "answer": false
    },
    {
      "id": 146,
      "type": "judge",
      "content": "54. 利用 equals() 方法判定 Date 类时，判断的是对象的值而不是对象的地址。",
      "answer": true
    },
    {
      "id": 147,
      "type": "short_answer",
      "content": "1. 简述 Java 语言的特点。",
      "answer": "• 跨平台性：通过 JVM 的编译，Java 程序可以在任何操作系统上运行\n• 面向对象性：可将类和对象抽象化，封装属性和行为\n• 开源：开源社区开发了众多开源框架\n• 安全性高：提供了安全机制，防止程序对计算机系统造成危害\n• 健壮性：有严格的类型检查和异常处理机制\n• 多线程：支持多线程编程，提高程序效率"
    },
    {
      "id": 148,
      "type": "short_answer",
      "content": "2. 什么是 Java 虚拟机 JVM？",
      "answer": "Java 虚拟机是一种抽象化的计算机，通过在实际计算机上仿真模拟各种计算机功能来实现。它有自己完善的硬件架构（如处理器、堆栈、寄存器等）和指令系统。JVM 屏蔽了与具体操作系统平台相关的信息，使得 Java 程序只需生成在 Java 虚拟机上运行的目标代码（字节码），就可以在多种平台上不加修改地运行。"
    },
    {
      "id": 149,
      "type": "short_answer",
      "content": "3. 简述类和对象的概念以及它们之间的联系",
      "answer": "类定义了一个事物的抽象特征（属性和行为方法），对象是类的实例。类是对象的模板，根据类模板可以创建出具体的对象实例。例如，定义“学生”类包含姓名、年龄等属性和上课、吃饭等行为，通过这个类可以创建具体的学生对象。"
    },
    {
      "id": 150,
      "type": "short_answer",
      "content": "4. Java 中的数据类型分为哪几类？",
      "answer": "Java 定义了 8 个基本数据类型：byte、short、int、long、float、double、char、boolean。还有引用数据类型：类、接口、数组等。"
    },
    {
      "id": 151,
      "type": "short_answer",
      "content": "5. 什么是常量？Java 中常量有哪些类型？",
      "answer": "常量是在程序中直接引用且值不变的数据项。Java 中有整数、浮点、字符和布尔类型的直接常量，以及用标识符表示的符号常量（需先声明后使用）。"
    },
    {
      "id": 152,
      "type": "short_answer",
      "content": "6. 简述 Java 中的自动类型转换和强制类型转换",
      "answer": "• 自动类型转换：低级数据类型向高级数据类型的转换（如 int→long）\n• 强制类型转换：高级数据类型向低级数据类型的转换（如 float→int），需显式声明且可能丢失精度"
    },
    {
      "id": 153,
      "type": "short_answer",
      "content": "7. 简述 if 语句中判断条件是否成立的表达式是否一定是逻辑型的表达式",
      "answer": "不一定，但最终结果必须是逻辑值。逻辑表达式的值以“1”（真）和“0”（假）表示，只要最终结果为逻辑值即满足条件。"
    },
    {
      "id": 154,
      "type": "short_answer",
      "content": "8. switch 语句中，case 后面的语句序列中一定要有 break 语句吗？",
      "answer": "不一定。break 用于跳出 switch 结构；若无 break，程序会继续执行后续 case 子句（允许多个 case 子句执行）。"
    },
    {
      "id": 155,
      "type": "short_answer",
      "content": "9. 试比较 break 语句与 continue 语句用于循环语句中的不同",
      "answer": "• continue：终止本次循环，跳过剩余代码，转向循环条件判断\n• break：跳出整个循环体或 switch 语句，继续执行后续代码"
    },
    {
      "id": 156,
      "type": "short_answer",
      "content": "10. 简述 while、do...while 和 for 三种循环的异同",
      "answer": "相同点：三种循环可互相实现\n不同点：\n• while/do...while 需在循环外初始化变量，for 可在迭代语句初始化\n• do...while 先执行后判断（至少执行一次），while 先判断后执行\n• for 常用于循环次数已知，while/do...while 用于循环次数不确定"
    },
    {
      "id": 157,
      "type": "short_answer",
      "content": "11. 简述 Java 中构造函数的作用",
      "answer": "构造函数用于创建对象时初始化对象状态。特点：与类同名、无返回值类型、可带参数、在 new 对象时自动调用。"
    },
    {
      "id": 158,
      "type": "short_answer",
      "content": "12. 什么是 Java 中的多态？",
      "answer": "多态指同一行为具有不同表现形式。通过继承/接口实现：父类引用指向子类对象时，调用方法会根据实际对象类型执行不同逻辑。"
    },
    {
      "id": 159,
      "type": "short_answer",
      "content": "13. 简单说明 Java 中异常处理的流程",
      "answer": "1. 将可能抛出异常的代码放在 try 块\n2. 若 try 块抛出异常，匹配 catch 块处理\n3. 无论是否异常，finally 块都会执行（用于资源清理）"
    },
    {
      "id": 160,
      "type": "short_answer",
      "content": "14. 简述 Java 中接口和抽象类的区别",
      "answer": "• 接口：方法全为抽象方法，变量为常量，一个类可实现多个接口\n• 抽象类：可含抽象/非抽象方法，一个类只能继承一个抽象类"
    },
    {
      "id": 161,
      "type": "short_answer",
      "content": "15. 简述 Java 中的垃圾回收机制",
      "answer": "自动内存管理技术，回收不再使用的对象内存。原理：垃圾回收器通过可达性分析标记不可达对象，定期回收其内存（不立即回收）。作用：防止内存泄漏，减轻手动管理负担。"
    },
    {
      "id": 162,
      "type": "short_answer",
      "content": "16. 什么是继承？Java 中如何实现继承？",
      "answer": "继承使子类无需重定义即可拥有父类的属性和方法。Java 中通过 extends 关键字实现（如 class SubClass extends SuperClass{}），支持单继承和多层继承。"
    },
    {
      "id": 163,
      "type": "short_answer",
      "content": "17. 请简述方法重载和方法重写的区别",
      "answer": "• 重载：同一类中同名方法（参数个数/类型不同），可改变返回值类型\n• 重写：子类覆盖父类方法（方法名/参数相同），返回类型需兼容，访问权限不能更严格"
    },
    {
      "id": 164,
      "type": "essay",
      "content": "1. 论述 Java 中抽象类和接口的区别",
      "answer": "抽象类与接口的区别：\n• 方法特性：抽象类可有抽象/非抽象方法；接口方法默认 public abstract（全抽象）\n• 变量特性：抽象类变量类型多样；接口变量默认 public static final（常量）\n• 继承关系：类只能继承一个抽象类，但可实现多个接口\n• 设计目的：抽象类用于抽取共性；接口用于定义规范（契约）"
    },
    {
      "id": 165,
      "type": "essay",
      "content": "2. 什么是 Java 中的垃圾回收机制？它有什么作用和原理？",
      "answer": "作用：自动回收不再被引用的对象内存，防止内存泄漏，提高内存利用率\n原理：\n1. 通过可达性分析算法标记不可达对象（从 GC Roots 对象遍历引用链）\n2. 回收算法：标记-清除、标记-整理、复制等\n3. 回收时机：对象不再被任何引用指向时"
    },
    {
      "id": 166,
      "type": "essay",
      "content": "3. 如何在 Java 中创建一个线程？有哪几种方式，它们的区别是什么？",
      "answer": "创建方式：\n1. 继承 Thread 类：重写 run()，new 对象后调用 start()\n2. 实现 Runnable 接口：实现 run()，将对象传入 Thread 构造器\n区别：\n• 继承 Thread：受限（Java 单继承），扩展性差\n• 实现 Runnable：更灵活（可同时继承其他类），符合面向对象设计"
    },
    {
      "id": 167,
      "type": "essay",
      "content": "4. 解释 Java 中的异常处理机制",
      "answer": "通过 try-catch-finally 处理：\n• try：包含可能抛出异常的代码\n• catch：捕获并处理特定类型异常（可多个，按具体→宽泛排列）\n• finally：无论是否异常都会执行（用于资源清理）\n流程：try 块异常 → 匹配 catch 块 → 执行 finally 块"
    },
    {
      "id": 168,
      "type": "essay",
      "content": "5. 简述 Java 中多态的概念、实现方式及好处",
      "answer": "概念：同一行为的不同表现形式\n实现方式：\n• 继承：父类引用指向子类对象，调用重写方法\n• 接口：不同类实现同一接口，通过接口引用调用方法\n好处：\n• 提高代码可扩展性/可维护性\n• 便于复用（统一处理父类/接口引用）\n• 新增子类无需修改大量代码"
    },
    {
      "id": 169,
      "type": "essay",
      "content": "6. 论述 Java 中静态变量和实例变量的区别",
      "answer": "区别：\n• 定义：静态变量（static 修饰）；实例变量（无 static）\n• 内存：静态变量类加载时分配（唯一副本）；实例变量对象创建时分配（每对象独立）\n• 访问：静态变量可通过类名/对象访问；实例变量仅通过对象访问\n• 生命周期：静态变量与类相同；实例变量与对象相同\n• 用途：静态变量存全局状态/共享数据；实例变量存对象状态"
    }
  ]