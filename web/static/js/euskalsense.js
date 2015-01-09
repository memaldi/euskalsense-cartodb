var unitsIndex = {}
unitsIndex['t_c2_ba'] = 'ºC';
unitsIndex['benceno'] = 'µg/m3';
unitsIndex['v_vien'] = 'm/s';
unitsIndex['ch4'] = 'mg/m3';
unitsIndex['co'] = 'mg/m3';
unitsIndex['etilbenceno'] = 'µg/m3';
unitsIndex['h'] = '%';
unitsIndex['hcnm'] = 'mg/m3';
unitsIndex['m_p_xileno'] = 'µg/m3';
unitsIndex['nh3'] = 'µ/m3';
unitsIndex['no'] = 'µ/m3';
unitsIndex['no2'] = 'µ/m3';
unitsIndex['nox'] = 'µg/m3';
unitsIndex['o3'] = 'µg/m3';
unitsIndex['ortoxileno'] = 'µg/m3';
unitsIndex['p'] = 'mBar';
unitsIndex['pm2_2c5'] = 'µg/m3';
unitsIndex['pm10'] = 'µg/m3';
unitsIndex['precipitacion'] = 'l/m2';
unitsIndex['r'] = 'w/m2';
unitsIndex['r_uva'] = 'w/m2';
unitsIndex['sh2'] = 'µg/m3';
unitsIndex['so2'] = 'µg/m3';
unitsIndex['tolueno'] = 'µg/m3';

var cartoCSS = {};
cartoCSS['t_c2_ba'] = " \
#t_c2_ba{ \
  marker-fill-opacity: 0.8; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-width: 10; \
  marker-fill: #FFFFB2; \
  marker-allow-overlap: true; \
} \
#t_c2_ba [ valor <= 40] { \
   marker-fill: #0079E5; \
} \
#t_c2_ba [ valor <= 35] { \
   marker-fill: #01C0E3; \
} \
#t_c2_ba [ valor <= 30] { \
   marker-fill: #03E2BE; \
} \
#t_c2_ba [ valor <= 25] { \
   marker-fill: #04E078; \
} \
#t_c2_ba [ valor <= 20] { \
   marker-fill: #06DF34; \
} \
#t_c2_ba [ valor <= 15] { \
   marker-fill: #1CDD07; \
} \
#t_c2_ba [ valor <= 10] { \
   marker-fill: #5FDC09; \
} \
#t_c2_ba [ valor <= 5] { \
   marker-fill: #A1DA0A; \
} \
#t_c2_ba [ valor <= 0] { \
   marker-fill: #D9D10B; \
} \
#t_c2_ba [ valor <= -5] { \
   marker-fill: #D7910D; \
} \
#t_c2_ba [ valor <= -10] { \
   marker-fill: #D6520E; \
} \
#t_c2_ba [ valor <= -15] { \
   marker-fill: #D51510; \
}";

cartoCSS['benceno'] = " \
#benceno{ \
  marker-fill-opacity: 0.8; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-width: 10; \
  marker-fill: #229A00; \
  marker-allow-overlap: true; \
} \
#benceno [ valor >= 5] { \
   marker-fill: #d51510; \
}";

cartoCSS['v_vien'] = " \
#v_vien{ \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/0kt.svg); \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-allow-overlap: true; \
  marker-transform: rotate([dir], 0, 0); \
} \
#v_vien [fuerza >= 2.57] { \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/5kt.svg); \
} \
#v_vien [fuerza >= 5.14] { \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/10kt.svg); \
} \
#v_vien [fuerza >= 7.71] { \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/15kt.svg); \
} \
#v_vien [fuerza >= 10.28] { \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/20kt.svg); \
} \
#v_vien [fuerza >= 15.43] { \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/30kt.svg); \
} \
#v_vien [fuerza >= 20.57] { \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/40kt.svg); \
} \
#v_vien [fuerza >= 25.72] { \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/50kt.svg); \
} \
#v_vien [fuerza >= 38.58] { \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/75kt.svg); \
} \
#v_vien [fuerza >= 51.44] { \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/100kt.svg); \
} \
#v_vien [fuerza >= 64.30] { \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/125kt.svg); \
} \
#v_vien [fuerza >= 77.16] { \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/150kt.svg); \
} \
#v_vien [fuerza >= 90.02] { \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/175kt.svg); \
}";

cartoCSS['ch4'] = ' \
#ch4{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['co'] = ' \
#co{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['etilbenceno'] = ' \
#etilbenceno{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['h'] = ' \
#h{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FF0000; \
  marker-allow-overlap: true; \
} \
#h [ valor <= 90] { \
   marker-fill: #FF1C1C; \
} \
#h [ valor <= 80] { \
   marker-fill: #FF3838; \
} \
#h [ valor <= 70] { \
   marker-fill: #FF5555; \
} \
#h [ valor <= 60] { \
   marker-fill: #FF7171; \
} \
#h [ valor <= 50] { \
   marker-fill: #FF8D8D; \
} \
#h [ valor <= 40] { \
   marker-fill: #FFAAAA; \
} \
#h [ valor <= 30] { \
   marker-fill: #FFC6C6; \
} \
#h [ valor <= 20] { \
   marker-fill: #FFE2E2; \
} \
#h [ valor <= 10] { \
   marker-fill: #FFFFFF; \
}';

cartoCSS['hcnm'] = ' \
#hcnm{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['m_p_xileno'] = ' \
#m_p_xileno{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['nh3'] = ' \
#nh3{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['no'] = ' \
#no{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['no2'] = ' \
#no2{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FF0000; \
  marker-allow-overlap: true; \
} \
#no2 [ valor <= 190] { \
   marker-fill: #FF0D0D; \
} \
#no2 [ valor <= 180] { \
   marker-fill: #FF1A1A; \
} \
#no2 [ valor <= 170] { \
   marker-fill: #FF2828; \
} \
#no2 [ valor <= 160] { \
   marker-fill: #FF3535; \
} \
#no2 [ valor <= 150] { \
   marker-fill: #FF4343; \
} \
#no2 [ valor <= 140] { \
   marker-fill: #FF5050; \
} \
#no2 [ valor <= 130] { \
   marker-fill: #FF5D5D; \
} \
#no2 [ valor <= 120] { \
   marker-fill: #FF6B6B; \
} \
#no2 [ valor <= 110] { \
   marker-fill: #FF7878; \
} \
#no2 [ valor <= 100] { \
   marker-fill: #FF8686; \
} \
#no2 [ valor <= 90] { \
   marker-fill: #FF9393; \
} \
#no2 [ valor <= 80] { \
   marker-fill: #FFA1A1; \
} \
#no2 [ valor <= 70] { \
   marker-fill: #FFAEAE; \
} \
#no2 [ valor <= 60] { \
   marker-fill: #FFBBBB; \
} \
#no2 [ valor <= 50] { \
   marker-fill: #FFC9C9; \
} \
#no2 [ valor <= 40] { \
   marker-fill: #FFD6D6; \
} \
#no2 [ valor <= 30] { \
   marker-fill: #FFE4E4; \
} \
#no2 [ valor <= 20] { \
   marker-fill: #FFF1F1; \
} \
#no2 [ valor <= 10] { \
   marker-fill: #FFFFFF; \
}';

cartoCSS['nox'] = ' \
#nox{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['o3'] = ' \
#o3{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['ortoxileno'] = ' \
#ortoxileno{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['p'] = ' \
#p{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['pm2_2c5'] = ' \
#pm2_2c5{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['pm10'] = ' \
#pm10{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['precipitacion'] = ' \
#precipitacion{ \
  marker-file: url(http://apps.morelab.deusto.es/euskalsense/static/img/rain.svg); \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
} \
#precipitacion [ valor > 0] { \
   marker-fill: #48DAF4; \
} \
#precipitacion [ valor > 0.2] { \
   marker-fill: #6AB3CB; \
} \
#precipitacion [ valor > 1] { \
   marker-fill: #8C8DA2; \
} \
#precipitacion [ valor > 2] { \
   marker-fill: #AF6679; \
} \
#precipitacion [ valor > 5] { \
   marker-fill: #D14050; \
} \
#precipitacion [ valor > 10] { \
   marker-fill: #F41A27; \
}';

cartoCSS['r'] = ' \
#r{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['r_uva'] = ' \
#r_uva{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['sh2'] = ' \
#sh2{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['so2'] = ' \
#so2{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

cartoCSS['tolueno'] = ' \
#tolueno{ \
  marker-fill-opacity: 0.9; \
  marker-line-color: #000000; \
  marker-line-width: 1.5; \
  marker-line-opacity: 1; \
  marker-placement: point; \
  marker-type: ellipse; \
  marker-width: 10; \
  marker-fill: #FFFFFF; \
  marker-allow-overlap: true; \
}';

var cartoLegend = {};
cartoLegend['t_c2_ba'] = ' \
<ul> \
  <li class="min"> \
    -20 \
  </li> \
  <li class="max"> \
    40 \
  </li> \
  <li class="graph count_441"> \
  <div class="colors"> \
  <div class="quartile" style="background-color:#0079E5"></div> \
  <div class="quartile" style="background-color:#01C0E3"></div> \
  <div class="quartile" style="background-color:#03E2BE"></div> \
  <div class="quartile" style="background-color:#04E078"></div> \
  <div class="quartile" style="background-color:#06DF34"></div> \
  <div class="quartile" style="background-color:#1CDD07"></div> \
  <div class="quartile" style="background-color:#5FDC09"></div> \
    <div class="quartile" style="background-color:#A1DA0A"></div> \
    <div class="quartile" style="background-color:#D9D10B"></div> \
    <div class="quartile" style="background-color:#D7910D"></div> \
    <div class="quartile" style="background-color:#D6520E"></div> \
    <div class="quartile" style="background-color:#D51510"></div> \
  </div> \
  </li> \
</ul>';

cartoLegend['benceno'] = ' \
<ul> \
  <li class="min"> \
    0.0 \
  </li> \
  <li class="max"> \
    &gt;5 \
  </li> \
  <li class="graph count_126"> \
  <div class="colors"> \
  <div class="quartile" style="background-color:#229a00"></div> \
  <div class="quartile" style="background-color:#d51510"></div> \
  </div> \
  </li> \
</ul>';

cartoLegend['v_vien'] = '';

cartoLegend['ch4'] = '';

cartoLegend['co'] = '';

cartoLegend['etilbenceno'] = '';

cartoLegend['h'] = ' \
<ul> \
  <li class="min"> \
    0 \
  </li> \
  <li class="max"> \
    100 % \
  </li> \
  <li class="graph count_441"> \
  <div class="colors"> \
  <div class="quartile" style="background-color:#FFFFFF"></div> \
  <div class="quartile" style="background-color:#FFE2E2"></div> \
  <div class="quartile" style="background-color:#FFC6C6"></div> \
  <div class="quartile" style="background-color:#FFAAAA"></div> \
  <div class="quartile" style="background-color:#FF8D8D"></div> \
  <div class="quartile" style="background-color:#FF7171"></div> \
  <div class="quartile" style="background-color:#FF5555"></div> \
    <div class="quartile" style="background-color:#FF3838"></div> \
    <div class="quartile" style="background-color:#FF1C1C"></div> \
    <div class="quartile" style="background-color:#FF0000"></div> \
  </div> \
  </li> \
</ul>';

cartoLegend['hcnm'] = '';

cartoLegend['m_p_xileno'] = '';

cartoLegend['nh3'] = '';

cartoLegend['no'] = '';

cartoLegend['no2'] = ' \
<ul> \
  <li class="min"> \
    0 \
  </li> \
  <li class="max"> \
    200 \
  </li> \
  <li class="graph count_441"> \
  <div class="colors"> \
    <div class="quartile" style="background-color:#FFFFFF"></div> \
    <div class="quartile" style="background-color:#FFF1F1"></div> \
    <div class="quartile" style="background-color:#FFE4E4"></div> \
    <div class="quartile" style="background-color:#FFD6D6"></div> \
    <div class="quartile" style="background-color:#FFC9C9"></div> \
    <div class="quartile" style="background-color:#FFBBBB"></div> \
    <div class="quartile" style="background-color:#FFAEAE"></div> \
    <div class="quartile" style="background-color:#FFA1A1"></div> \
    <div class="quartile" style="background-color:#FF9393"></div> \
    <div class="quartile" style="background-color:#FF8686"></div> \
    <div class="quartile" style="background-color:#FF7878"></div> \
    <div class="quartile" style="background-color:#FF6B6B"></div> \
    <div class="quartile" style="background-color:#FF5D5D"></div> \
    <div class="quartile" style="background-color:#FF5050"></div> \
    <div class="quartile" style="background-color:#FF4343"></div> \
    <div class="quartile" style="background-color:#FF3535"></div> \
    <div class="quartile" style="background-color:#FF2828"></div> \
    <div class="quartile" style="background-color:#FF1A1A"></div> \
    <div class="quartile" style="background-color:#FF0D0D"></div> \
    <div class="quartile" style="background-color:#FF0000"></div> \
  </div> \
  </li> \
</ul>';

cartoLegend['nox'] = '';

cartoLegend['o3'] = '';

cartoLegend['ortoxileno'] = '';

cartoLegend['p'] = '';

cartoLegend['pm2_2c5'] = '';

cartoLegend['pm10'] = '';

cartoLegend['precipitacion'] = '<ul> \
  <li class="min"> \
    0 \
  </li> \
  <li class="max"> \
    > 20 l/m2 \
  </li> \
  <li class="graph count_441"> \
  <div class="colors"> \
  <div class="quartile" style="background-color:#FFFFFF"></div> \
  <div class="quartile" style="background-color:#48DAF4"></div> \
  <div class="quartile" style="background-color:#6AB3CB"></div> \
  <div class="quartile" style="background-color:#8C8DA2"></div> \
  <div class="quartile" style="background-color:#AF6679"></div> \
  <div class="quartile" style="background-color:#D14050"></div> \
  <div class="quartile" style="background-color:#F41A27"></div> \
  </div> \
  </li> \
</ul>';

cartoLegend['r'] = '';

cartoLegend['r_uva'] = '';

cartoLegend['sh2'] = '';

cartoLegend['so2'] = '';

cartoLegend['tolueno'] = '';

var cartoPopup = [];
cartoPopup['normal'] = ' \
<div class="cartodb-popup v2" style="background: dimgray; opacity: 0.9;"> \
  <a href="#close" class="cartodb-popup-close-button close" style="background: dimgray; opacity: 0.8;" onclick="closePopup()">x</a> \
  <div class="cartodb-popup-content-wrapper" > \
    <div class="cartodb-popup-content"> \
      <h4 id="popupTitle"></h4> \
      <p style="color:black;">{{nombre_estacion}}</p> \
      <p style="color:black;">{{direccion_estacion}}</p> \
      <p style="color:black;">{{localidad}}</p> \
      <h4 id="popupDate">fecha</h4> \
      <p style="color:black;">{{fecha}}</p> \
      <h4 id="popupValue">Valor</h4> \
      <p style="color:black;">{{valor}} {0}</p> \
    </div> \
  </div> \
  <div class="cartodb-popup-tip-container"></div> \
</div>';

cartoPopup['viento'] = ' \
<div class="cartodb-popup v2" style="background: dimgray; opacity: 0.9;"> \
  <a href="#close" class="cartodb-popup-close-button close" style="background: dimgray; opacity: 0.8;" onclick="closePopup()">x</a> \
  <div class="cartodb-popup-content-wrapper" > \
    <div class="cartodb-popup-content"> \
      <h4 id="popupTitle">Estación</h4> \
      <p style="color:black;">{{nombre_estacion}}</p> \
      <p style="color:black;">{{direccion_estacion}}</p> \
      <p style="color:black;">{{localidad}}</p> \
      <h4 id="popupDate">fecha</h4> \
      <p style="color:black;">{{fecha}}</p> \
      <h4 id="popupValue">Valor</h4> \
      <p style="color:black;">{{fuerza}} m/s - {{dir}}º</p> \
    </div> \
  </div> \
  <div class="cartodb-popup-tip-container"></div> \
</div>';

String.format = function() {
    // The string containing the format items (e.g. "{0}")
    // will and always has to be the first argument.
    var theString = arguments[0];

    // start with the second argument (i = 1)
    for (var i = 1; i < arguments.length; i++) {
        // "gm" = RegEx options for Global search (more than one instance)
        // and for Multiline search
        var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
    }

    return theString;
}

function EuskalSense(user, visualization, popupOption) {
    var sql = new cartodb.SQL({ user: user });
    var cartoDBLayer;
    var currentTableName = 't_c2_ba';
    var visualization = visualization;
    var popupOption = popupOption;

    this.init = function() {
        cartodb.createVis('map', visualization)
        .done(function(vis, layers) {
          cartoDBLayer = layers[1];
          var maxSQL = "SELECT MAX(fecha) as maxFecha, MIN(fecha) as minFecha FROM (";
          var count = 1;
          for (var key in unitsIndex) {
            if (count != 1) {
                maxSQL += " UNION ALL ";
            }
            maxSQL += "SELECT FECHA FROM " + key;
            count += 1;
          }
          maxSQL += ") as subQuery";
          sql.execute(maxSQL)
            .done(function(data) {
              var max = data.rows[0].maxfecha;
              var date = max.split('T')[0].replace(/-/g, '/');
              $('#datetime-picker').datetimepicker({
                startDate: date
              });
              var datetime = $("#datetime-picker");
              datetime.attr('value', String(max).replace('Z', '').replace('T', ' '));

              var subLayerOptions = {
                sql: "SELECT * FROM " + currentTableName + " WHERE (fecha >= ('" + max +  "') AND fecha <= ('" + max + "') AND valor IS NOT NULL)",
                cartocss: cartoCSS[currentTableName]
              }

              cartoDBLayer.getSubLayer(1).set(subLayerOptions).on('featureClick', function(event, latlng, pos, data, layerIndex) {
                var popupSQL = "SELECT fecha, nombre_estacion FROM v_vien WHERE cartodb_id = " + data.cartodb_id;

                sql.execute(popupSQL)
                  .done(function(data) {
                    $("#popupTitle")[0].innerHTML = popupOption['popupTitle'];
                    $("#popupDate")[0].innerHTML = popupOption['popupDate'];
                    $("#popupValue")[0].innerHTML = popupOption['popupValue'];
                    var fecha = data.rows[0].fecha;
                    var nombre_estacion = data.rows[0].nombre_estacion;
                    drawChart(fecha, nombre_estacion, currentTableName);
                  })
                  .error(function(errors) {
                    console.log("errors:" + errors);
                  });
              });

              cartoDBLayer.getSubLayer(0)
                          .set(subLayerOptions)
                          .on('featureClick', function(event, latlng, pos, data, layerIndex) {
                            popupSQL = "SELECT fecha, nombre_estacion FROM " + currentTableName + " WHERE cartodb_id = " + data.cartodb_id;
                            sql.execute(popupSQL)
                                .done(function(data) {
                                  $("#popupTitle")[0].innerHTML = popupOption['popupTitle'];
                                  $("#popupDate")[0].innerHTML = popupOption['popupDate'];
                                  $("#popupValue")[0].innerHTML = popupOption['popupValue'];
                                  var fecha = data.rows[0].fecha;
                                  var nombre_estacion = data.rows[0].nombre_estacion;
                                  drawChart(fecha, nombre_estacion, currentTableName);
                                })
                                .error(function(errors) {
                                  // errors contains a list of errors
                                  console.log("errors:" + errors);
                            });
                          });
                })
            .error(function(errors) {
              // errors contains a list of errors
              console.log("errors:" + errors);
          });

          cartoDBLayer.getSubLayer(0).show();
          cartoDBLayer.getSubLayer(1).hide();
        });
    }

        function drawChart(date, station_name, currentTableName) {
          // Remove graph
          d3.select("svg")
            .remove();

          var units;

          var radioButtons = $("input[name='optionsRadios']");

          $.each(radioButtons, function (index, item) {
              if (item.checked) {
                units = unitsIndex[item.value];
              }
            });

          // D3JS graph
          var margin = {top: 20, right: 20, bottom: 30, left: 50},
          width = 350 - margin.left - margin.right,
          height = 182 - margin.top - margin.bottom;

          var parseDate = d3.time.format("%Y-%m-%dT%H:%M:%S").parse;

          var x = d3.time.scale()
              .range([0, width]);

          var y = d3.scale.linear()
              .range([height, 0]);

          var xAxis = d3.svg.axis()
              .scale(x)
              .ticks(d3.time.hour, 6)
              .orient("bottom")
              .tickFormat(d3.time.format("%H:%M"));;

          var yAxis = d3.svg.axis()
              .scale(y)
              .ticks(5)
              .orient("left");

          var area = d3.svg.area()
              .x(function(d) { return x(d.fecha); })
              .y0(height)
              .y1(function(d) { return y(d.valor); });

          var line = d3.svg.line()
              .x(function(d) { return x(d.fecha); })
              .y(function(d) { return y(d.valor); });

          var div = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

          var svg = d3.select("body").append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .attr("id", "graph")
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


          bottom_limit = date.split('T')[0] + "T00:00:00";
          top_limit =  date.split('T')[0] + "T23:00:00";
          sql.execute("SELECT fecha, valor FROM " + currentTableName +" WHERE (fecha >= ('" + bottom_limit +  "') AND fecha <= ('" + top_limit + "') AND nombre_estacion = '" + station_name + "' AND valor IS NOT NULL) ORDER BY fecha ASC")
              .done(function(data) {
                var chartData = new Array()
                var valueAccum = 0;
                $.each(data['rows'], function(key, value) {
                  chartDate = parseDate(value.fecha.replace('Z', ''));
                  valueAccum =+ value.valor;
                  chartData.push({'fecha': chartDate, 'valor': valueAccum});
                });
                x.domain(d3.extent(chartData, function(d) { return d.fecha; }));
                //TODO: Fix this
                y.domain([0, d3.max(chartData, function(d) { return d.valor; }) + 2]);

                svg.append("path")
                  .datum(chartData)
                  .attr("class", "area")
                  .attr("d", area);

                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                svg.append("g")
                    .attr("class", "y axis")
                    .call(yAxis)
                  .append("text")
                    //.attr("transform", "rotate(-90)")
                    .attr("y", 6)
                    .attr("dy", "-10px")
                    .style("text-anchor", "end")
                    .text(units);
                svg.append("path")
                    .datum(chartData)
                    .attr("class", "line")
                    .attr("d", line);

                svg.selectAll("dot")
                  .data(chartData)
                  .enter()
                  .append("circle")
                  .attr("stroke", "dimgray")
                  .attr("stroke-width", 2.5)
                  .attr("fill", "black")
                  .attr("r", 4)
                  .attr("cx", function(d) { return x(d.fecha); })
                  .attr("cy", function(d) { return y(d.valor); })
                  .on("mouseover", function(d) {
                      div.transition()
                          .duration(200)
                          .style("opacity", 1);
                      div .html(d.valor)
                          .style("left", (d3.event.pageX - 28) + "px")
                          .style("top", (d3.event.pageY - 28) + "px");
                      })
                  .on("mouseout", function(d) {
                      div.transition()
                          .duration(500)
                          .style("opacity", 0);
                  });
              })
              .error(function(errors) {
                // errors contains a list of errors
                console.log("errors:" + errors);
          });
        }

        this.updateLayer = function(date, table_name, sublayer_number) {

          var popup = $(".cartodb-popup.v2").hide();

          var chart = d3.select("svg");

          if (chart[0][0] != null) {
            d3.select("svg").remove();
          }

          if (table_name == 'v_vien') {
            sublayer_number = 1;
            cartoDBLayer.getSubLayer(0).hide();
            cartoDBLayer.getSubLayer(1).show();
          } else {
            cartoDBLayer.getSubLayer(1).hide();
            cartoDBLayer.getSubLayer(0).show();
          }

          currentTableName = table_name;

          var layoutSQL;

          if (table_name != 'v_vien') {
            layoutSQL = "SELECT * FROM " + table_name + " WHERE (fecha >= ('" + date +  "') AND fecha <= ('" + date + "') AND valor IS NOT NULL)";
          } else {
            layoutSQL = "SELECT v_vien.fecha as fecha, v_vien.the_geom_webmercator, v_vien.cartodb_id, v_vien.nombre_estacion as nombre_estacion, v_vien.valor as fuerza, d_vien.valor as dir, v_vien.localidad as localidad, v_vien.direccion_estacion as direccion_estacion FROM v_vien, d_vien WHERE (v_vien.fecha >= ('" + date + "') AND v_vien.fecha <= ('" + date + "') AND v_vien.valor is not Null AND v_vien.fecha = d_vien.fecha AND v_vien.nombre_estacion = d_vien.nombre_estacion)";
          }

          var subLayerOptions = {
                sql: layoutSQL,
                cartocss: cartoCSS[table_name]
              }


          var popup_name = 'normal';
          if (table_name == 'v_vien') {
            popup_name = 'viento';
          }

          cartoDBLayer.getSubLayer(sublayer_number)
                      .set(subLayerOptions)
                      .infowindow.set('template', String.format(cartoPopup[popup_name], unitsIndex[table_name]));
          var legend = $(".cartodb-legend.choropleth")[0];
          legend.innerHTML = cartoLegend[table_name];
        }
}

