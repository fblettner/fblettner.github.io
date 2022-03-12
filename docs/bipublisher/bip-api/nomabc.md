---
layout: default
title: Encode and display Barcode 128
permalink: /bipublisher/bip-api/nomabc
parent: BI Publisher API
grand_parent: BI Publisher
nav_order: 1
---

## Simple JAVA CLASS to encode string and display barcode 128 with BI Publisher RTF template  <!-- omit in toc -->
[Download](https://github.com/fblettner/bip-nomabc){: style="float: right;" .btn-primary .btn .fs-5 .mb-4 .mb-md-0 target="_blank"}
### *Built with VSCode and JDK 11*  <!-- omit in toc -->

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }

- [1. Modify xdo.cfg](#1-modify-xdocfg)
- [2. Declaration of a custom function into a RTF Template](#2-declaration-of-a-custom-function-into-a-rtf-template)
- [3. Convert into BarCode 128](#3-convert-into-barcode-128)
- [4. Display BarCode](#4-display-barcode)
</details>

## 1. Modify xdo.cfg
{: .textbox} 
Add the line below to declare the truetype font. The font is delivered into the dist directory. (Thanks to GrandZebu for explanation and font : http://grandzebu.net/informatique/codbar/code128.htm)

```html
<font family="Code 128z" style="normal" weight="normal"><truetype path="d:/BIP/java/fonts/code128z.TTF"/></font>
```

## 2. Declaration of a custom function into a RTF Template
{: .textbox #custom}
Add a field into the template and set the property like this

```xml
<?register-barcode-vendor:'nomabc.BarcodeUtil';'NOMANA’?>
```

![NOMASX-1](/assets/nomabc/custom_function.png){: width="600"}

## 3. Convert into BarCode 128
{: .textbox}
Add the field with the value to convert and modify the property with the following script

```xml
<?format-barcode:DataBarreCode;'code128';'NOMANA’?>
```

![NOMASX-1](/assets/nomabc/convert_barcode.png){: width="600"}

## 4. Display BarCode
{: .textbox}
Modify the font for the field in RTF with and select "Code 128z". If the truetype is not declared into Windows fonts, you will not see the font but you can simply modify it by typing the font name as screenshot below

![NOMASX-1](/assets/nomabc/display_barcode.png){: width="600"}
