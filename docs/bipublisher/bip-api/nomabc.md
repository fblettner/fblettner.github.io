---
layout: default
title: Encode and display Barcode 128
permalink: /bipublisher/bip-api/nomabc
parent: BI Publisher API
grand_parent: BI Publisher
nav_order: 1
---

# Simple JAVA CLASS to encode string and display barcode 128 with BI Publisher RTF template
## Built with VSCode and JDK 11

### Steps to use this java class

### 1) Modify xdo.cfg 
Add the line below to declare the truetype font. The font is delivered into the dist directory. (Thanks to GrandZebu for explanation and font : http://grandzebu.net/informatique/codbar/code128.htm)

\<font family="Code 128z" style="normal" weight="normal"><truetype path="d:/BIP/java/fonts/code128z.TTF"/></font>


### 2) Declaration of a custom function into a RTF Template
Add a field into the template and set the property like this

\<?register-barcode-vendor:'nomabc.BarcodeUtil';'NOMANA’?>

![NOMASX-1](/assets/nomabc/custom_function.png){: width="600"}

### 3) Convert into BarCode 128
Add the field with the value to convert and modify the property with the following script

\<?format-barcode:DataBarreCode;'code128';'NOMANA’?>

![NOMASX-1](/assets/nomabc/convert_barcode.png){: width="600"}

### 4) Display BarCode
Modify the font for the field in RTF with and select "Code 128z". If the truetype is not declared into Windows fonts, you will not see the font but you can simply modify it by typing the font name as screenshot below

![NOMASX-1](/assets/nomabc/display_barcode.png){: width="600"}
