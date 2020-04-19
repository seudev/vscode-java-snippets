## Table of contents
1. [Snippets](#snippets)
  1. [Basic types](#basic-types)
  2. [Conditionals](#conditionals)
  3. [Constants](#constants)
  4. [Exceptions](#exceptions)
  5. [Fields](#fields)
  6. [Keywords](#keywords)
  7. [Lambdas](#lambdas)
  8. [Loops](#loops)
  9. [Methods](#methods)
  10. [Object](#object)
  11. [Prints](#prints)
  12. [Returns](#returns)
  13. [Variables](#variables)


## Snippets

### Basic types

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| c, class | A class. |
| sc, class, sclass | A static class. |
| i, interface | An interface. |
| fi, finterface, interface | An interface. |
| e, enum | An enum. |
| a, annotation | An annotation. |
| ra, annotation, rannotation | A repetable annotation. |
| t, type | A type. |

### Conditionals

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| if | An if statement. |
| ifn | An if null statement. |
| ifnn | An if not null statement. |
| ifi | An if instanceof statement. |
| ific | An if instanceof statement then cast. |
| ifni | An if not instanceof statement. |
| ife | An if empty statement. |
| ifne | An if not empty statement. |
| ifnne | An if not null and not empty statement. |
| ifnoe | An if null or empty statement. |
| ifno | An if null or condition statement. |
| ifnna | An if not null and condition statement. |
| ift | An if ternary statement. |
| iftn | An if null ternary statement. |
| iftnn | An if not null ternary statement. |
| else | An else statement. |
| sw, switch | A switch statement. |
| cb, case | A case break statement. |
| cr, case | A case return statement. |

### Constants

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| sf, const | A constant. |
| Psf, const, Pconst | A public constant. |
| psf, const, pconst | A private constant. |

### Exceptions

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| tb, try | A try block. |
| twr, tryr | A try with resources block. |
| ctb, catch | A catch block. |
| fb, finally | A finally block. |
| tc, tryc, trycatch | A try catch block around the selected text. |
| tcf, trycf, trycatch | A try catch finally block around the selected text. |
| te, throw | Throw a exception. |
| tn, throw | Throw a new exception. |
| tr, throw | Throw a new RuntimeException. |
| tu, throw | Throw a new UnsupportedOperationException. |
| tia, throw | Throw a new IllegalArgumentException. |
| tis, throw | Throw a new IllegalStateException. |

### Fields

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| f, field | A field. |
| ff, field, ffield | A final field. |
| fv, field, fieldv | A field with default value. |
| ffv, field, ffield, ffieldv | A final field with value. |
| pf, field, pfield | A private field. |
| pff, field, pffield | A private final field. |
| pfv, field, pfieldv | A private field with default value. |
| pffv, field, pffieldv | A private final field with value. |
| p, param | A parameter. |

### Keywords

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| abstract | abstract keyword |
| continue | continue keyword |
| switch | switch keyword |
| assert | assert keyword |
| default | default keyword |
| package | package keyword |
| synchronized | synchronized keyword |
| boolean | boolean keyword |
| private | private keyword |
| this | this keyword |
| break | break keyword |
| double | double keyword |
| implements | implements keyword |
| protected | protected keyword |
| throw | throw keyword |
| byte | byte keyword |
| else | else keyword |
| import | import keyword |
| public | public keyword |
| throws | throws keyword |
| case | case keyword |
| enum | enum keyword |
| instanceof | instanceof keyword |
| return | return keyword |
| transient | transient keyword |
| catch | catch keyword |
| extends | extends keyword |
| int | int keyword |
| short | short keyword |
| try | try keyword |
| char | char keyword |
| final | final keyword |
| interface | interface keyword |
| static | static keyword |
| void | void keyword |
| class | class keyword |
| finally | finally keyword |
| long | long keyword |
| strictfp | strictfp keyword |
| volatile | volatile keyword |
| float | float keyword |
| native | native keyword |
| super | super keyword |
| while | while keyword |

### Lambdas

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| l0s | A simple lambda without arguments. |
| l0 | A lambda block without arguments. |
| l1s | A simple lambda with 1 argument. |
| l1 | A lambda block with 1 argument. |
| l2s | A simple lambda with 2 arguments. |
| l2 | A lambda block with 2 arguments. |
| l3s | A simple lambda with 3 arguments. |
| l3 | A lambda block with 3 arguments. |
| l4s | A simple lambda with 4 arguments. |
| l4 | A lambda block with 4 arguments. |
| l5s | A simple lambda with 5 arguments. |
| l5 | A lambda block with 5 arguments. |

### Loops

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| fors, for | A for loop over sequence. |
| forc, for | A countdown for loop. |
| fora, for | A for loop over array. |
| forra, for | A for loop over reverse array. |
| fori, foreach, for | A for loop over iterable. |
| wh, while | A while loop. |
| dwh, dwhile, dowhile, while | A do-while loop. |

### Methods

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| psvm, main | A main method. |
| m, method | A method. |
| sm, method, smethod | A static method. |
| pm, method, pmethod | A private method. |
| psm, method, psmethod | A private static method. |
| Pm, method, Pmethod | A public method. |
| Psm, method, Psmethod | A public static method. |

### Object

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| n, new | A new instance. |
| cast | Cast a object. |
| eq | null-safe equals than. |
| eqm | null-safe equals than member. |
| em, equals | An equals method. |
| hm, hashcode | A hashcode method. |
| @o | A @Override annotation. |

### Prints

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| pl, print | Prints a String. |
| pln, print, println | Prints a String and then terminate the line. |
| pf, print, printf | Prints a formatted String. |
| pfn, print, printfn | Prints a formatted String and then terminate the line. |
| pv, print, printv | Prints the variable value. |
| pfv, print, printfv | Prints the formatted variable value. |

### Returns

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| r, return | A return. |
| rn, return | A return null. |
| rt, return | A return true. |
| rf, return | A return false. |
| rth, return | A return this. |

### Variables

| **Prefixes** | **Description** |
| ------------ | ---------------- |
| v, var | A local variable. |
| vv, var, varv | A local variable. |
| vsb, var, varsb | A local string variable from StringBuilder. |
| sb, stringb, sbuilder | A local StringBuilder variable. |

