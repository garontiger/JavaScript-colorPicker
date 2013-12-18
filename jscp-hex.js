<html>
<head>
<style type="text/css">
<!--
.border-rb {
    cursor:pointer;
    height:15px;
    width:15px;
    border-right: solid black 1px;
    border-bottom: solid black 1px;
    font-size:1px;
}
.border-lt {
    border-top: 1px solid #000;
    border-left: 1px solid #000;
}
.border-t {
    border-top: 1px solid #000;
    border-left: 1px none #000;
}
.div_color_preview {
    background-color: none;
    width: 50px; 
    height: 50px; 
    border: 1px solid #000;
    border-radius:5px;
}
#show_color_table {visibility : hidden;}

-->
</style>
</head>
<body>
<h1> Click on the box to get the color pallete</h1>
<div id="div_color_text">Hex code</div>
<br>
<div id="div_color_preview" class="div_color_preview" onClick="show();"></div>
<br>
<script type="text/javascript" language="javascript">

function col_preview(c) {
    document.getElementById('div_color_preview').style.cssText = 'background-color: ' + c + '; width: 50px; height: 50px; border: 1px solid #000;';
    document.getElementById('div_color_text').innerHTML  = c;
}

function col_exit(c) {
    document.getElementById('div_color_preview').style.cssText = 'background-color: ' + c + '; width: 50px; height: 50px; border: 1px solid #000;';
    document.getElementById('div_color_text').innerHTML  = "Hex code";
}

function show()
{
   document.getElementById('show_color_table').style.cssText = 'visibility: visible;';
}
function col_click(c) {
    document.getElementById('txtColor').value = c;
    document.getElementById('div_color_preview').style.cssText = 'background-color: ' + c + '; width: 50px; height: 50px; border: 1px solid #000;';
    document.getElementById('show_color_table').style.cssText = 'visibility: hidden;';
}


document.write('<table width="170" border="0" cellpadding="0" cellspacing="0" style="background-color:black;" id="show_color_table"><tr><td width="90"><table border="0" cellpadding="0" cellspacing="0" class="border-lt" >');
var int_count_col1 = 6;
var int_count_col2 = 6;
var int_count = 0;
while (int_count != 36){
    int_count = int_count + 1
    if (int_count_col1 == 1) {str_count_col1 = "00"}
    if (int_count_col1 == 2) {str_count_col1 = "33"}
    if (int_count_col1 == 3) {str_count_col1 = "66"}
    if (int_count_col1 == 4) {str_count_col1 = "99"}
    if (int_count_col1 == 5) {str_count_col1 = "CC"}
    if (int_count_col1 == 6) {str_count_col1 = "FF"}
    if (int_count_col2 == 1) {str_count_col2 = "00"}
    if (int_count_col2 == 2) {str_count_col2 = "33"}
    if (int_count_col2 == 3) {str_count_col2 = "66"}
    if (int_count_col2 == 4) {str_count_col2 = "99"}
    if (int_count_col2 == 5) {str_count_col2 = "CC"}
    if (int_count_col2 == 6) {str_count_col2 = "FF"}
    document.write('<tr><td onMouseOver="col_preview(\'#FF' + str_count_col1 + str_count_col2 + '\');" onClick="col_click(\'#FF' + str_count_col1 + str_count_col2 + '\');" onMouseOut="col_exit();" bgcolor="#FF' + str_count_col1 + str_count_col2 + '" class="border-rb">&nbsp;</td>' +
               '<td onMouseOver="col_preview(\'#CC' + str_count_col1 + str_count_col2 + '\');" onClick="col_click(\'#CC' + str_count_col1 + str_count_col2 + '\');" onMouseOut="col_exit();" bgcolor="#CC' + str_count_col1 + str_count_col2 + '" class="border-rb">&nbsp;</td>' +
               '<td onMouseOver="col_preview(\'#99' + str_count_col1 + str_count_col2 + '\');" onClick="col_click(\'#99' + str_count_col1 + str_count_col2 + '\');" onMouseOut="col_exit();" bgcolor="#99' + str_count_col1 + str_count_col2 + '" class="border-rb">&nbsp;</td>' +
               '<td onMouseOver="col_preview(\'#66' + str_count_col1 + str_count_col2 + '\');" onClick="col_click(\'#66' + str_count_col1 + str_count_col2 + '\');" onMouseOut="col_exit();" bgcolor="#66' + str_count_col1 + str_count_col2 + '" class="border-rb">&nbsp;</td>' +
               '<td onMouseOver="col_preview(\'#33' + str_count_col1 + str_count_col2 + '\');" onClick="col_click(\'#33' + str_count_col1 + str_count_col2 + '\');" onMouseOut="col_exit();" bgcolor="#33' + str_count_col1 + str_count_col2 + '" class="border-rb">&nbsp;</td>' +
               '<td onMouseOver="col_preview(\'#00' + str_count_col1 + str_count_col2 + '\');" onClick="col_click(\'#00' + str_count_col1 + str_count_col2 + '\');" onMouseOut="col_exit();" bgcolor="#00' + str_count_col1 + str_count_col2 + '" class="border-rb">&nbsp;</td></tr>');    
    if (int_count_col2 == 1){int_count_col1 = int_count_col1 - 1;int_count_col2 = 6;
    }else{int_count_col2 = int_count_col2 - 1}
    if (int_count == 18) {document.write('</table></td><td width="90"><table width="0%" border="0" cellpadding="0" cellspacing="0" class="border-t">');}
    if (int_count == 36) {document.write('</table></td></tr></table>');}
}

</script>
</body>
</html>
