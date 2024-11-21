[Download](https://github.com/fblettner/bip-nomabc){: style="float: right;" .btn-primary .btn .fs-5 .mb-4 .mb-md-0 target="_blank"}
**Built with VSCode and JDK 11**

## 1. Modify xdo.cfg
Add the line below to declare the truetype font. The font is delivered into the dist directory. (Thanks to GrandZebu for explanation and font : http://grandzebu.net/informatique/codbar/code128.htm)

```html
<font family="Code 128z" style="normal" weight="normal"><truetype path="d:/BIP/java/fonts/code128z.TTF"/></font>
```

## 2. Declaration of a custom function into a RTF Template
Add a field into the template and set the property like this

```xml
<?register-barcode-vendor:'nomabc.BarcodeUtil';'NOMANA’?>
```

![NOMASX-1](https://docs.nomana-it.fr/assets/nomabc/custom_function.png)

## 3. Convert into BarCode 128
Add the field with the value to convert and modify the property with the following script

```xml
<?format-barcode:DataBarreCode;'code128';'NOMANA’?>
```

![NOMASX-1](https://docs.nomana-it.fr/assets/nomabc/convert_barcode.png)

## 4. Display BarCode
Modify the font for the field in RTF with and select "Code 128z". If the truetype is not declared into Windows fonts, you will not see the font but you can simply modify it by typing the font name as screenshot below

![NOMASX-1](https://docs.nomana-it.fr/assets/nomabc/display_barcode.png)
