var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google (Satellite)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Yaoundeboundaries_1 = new ol.format.GeoJSON();
var features_Yaoundeboundaries_1 = format_Yaoundeboundaries_1.readFeatures(json_Yaoundeboundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yaoundeboundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yaoundeboundaries_1.addFeatures(features_Yaoundeboundaries_1);
var lyr_Yaoundeboundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yaoundeboundaries_1, 
                style: style_Yaoundeboundaries_1,
                popuplayertitle: 'Yaounde boundaries',
                interactive: true,
                title: '<img src="styles/legend/Yaoundeboundaries_1.png" /> Yaounde boundaries'
            });
var format_Doualaboundaries_2 = new ol.format.GeoJSON();
var features_Doualaboundaries_2 = format_Doualaboundaries_2.readFeatures(json_Doualaboundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Doualaboundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Doualaboundaries_2.addFeatures(features_Doualaboundaries_2);
var lyr_Doualaboundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Doualaboundaries_2, 
                style: style_Doualaboundaries_2,
                popuplayertitle: 'Douala boundaries',
                interactive: true,
                title: '<img src="styles/legend/Doualaboundaries_2.png" /> Douala boundaries'
            });
var format_PlannedMegahubsYaounde_3 = new ol.format.GeoJSON();
var features_PlannedMegahubsYaounde_3 = format_PlannedMegahubsYaounde_3.readFeatures(json_PlannedMegahubsYaounde_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedMegahubsYaounde_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedMegahubsYaounde_3.addFeatures(features_PlannedMegahubsYaounde_3);
var lyr_PlannedMegahubsYaounde_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedMegahubsYaounde_3, 
                style: style_PlannedMegahubsYaounde_3,
                popuplayertitle: 'Planned Megahubs Yaounde',
                interactive: true,
                title: '<img src="styles/legend/PlannedMegahubsYaounde_3.png" /> Planned Megahubs Yaounde'
            });
var format_PlannedMegahubsDouala_4 = new ol.format.GeoJSON();
var features_PlannedMegahubsDouala_4 = format_PlannedMegahubsDouala_4.readFeatures(json_PlannedMegahubsDouala_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedMegahubsDouala_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedMegahubsDouala_4.addFeatures(features_PlannedMegahubsDouala_4);
var lyr_PlannedMegahubsDouala_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedMegahubsDouala_4, 
                style: style_PlannedMegahubsDouala_4,
                popuplayertitle: 'Planned Megahubs Douala',
                interactive: true,
                title: '<img src="styles/legend/PlannedMegahubsDouala_4.png" /> Planned Megahubs Douala'
            });
var format_MegahubsitesvalidatedbyEIP_5 = new ol.format.GeoJSON();
var features_MegahubsitesvalidatedbyEIP_5 = format_MegahubsitesvalidatedbyEIP_5.readFeatures(json_MegahubsitesvalidatedbyEIP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MegahubsitesvalidatedbyEIP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MegahubsitesvalidatedbyEIP_5.addFeatures(features_MegahubsitesvalidatedbyEIP_5);
var lyr_MegahubsitesvalidatedbyEIP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MegahubsitesvalidatedbyEIP_5, 
                style: style_MegahubsitesvalidatedbyEIP_5,
                popuplayertitle: 'Megahub sites validated by EIP',
                interactive: true,
                title: '<img src="styles/legend/MegahubsitesvalidatedbyEIP_5.png" /> Megahub sites validated by EIP'
            });
var format_Smallsitesacquired_6 = new ol.format.GeoJSON();
var features_Smallsitesacquired_6 = format_Smallsitesacquired_6.readFeatures(json_Smallsitesacquired_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Smallsitesacquired_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Smallsitesacquired_6.addFeatures(features_Smallsitesacquired_6);
var lyr_Smallsitesacquired_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Smallsitesacquired_6, 
                style: style_Smallsitesacquired_6,
                popuplayertitle: 'Small sites acquired',
                interactive: true,
                title: '<img src="styles/legend/Smallsitesacquired_6.png" /> Small sites acquired'
            });
var format_Smallsitesreadytoactivate_7 = new ol.format.GeoJSON();
var features_Smallsitesreadytoactivate_7 = format_Smallsitesreadytoactivate_7.readFeatures(json_Smallsitesreadytoactivate_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Smallsitesreadytoactivate_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Smallsitesreadytoactivate_7.addFeatures(features_Smallsitesreadytoactivate_7);
var lyr_Smallsitesreadytoactivate_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Smallsitesreadytoactivate_7, 
                style: style_Smallsitesreadytoactivate_7,
                popuplayertitle: 'Small sites ready to activate',
                interactive: true,
                title: '<img src="styles/legend/Smallsitesreadytoactivate_7.png" /> Small sites ready to activate'
            });
var format_Activesites_8 = new ol.format.GeoJSON();
var features_Activesites_8 = format_Activesites_8.readFeatures(json_Activesites_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Activesites_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Activesites_8.addFeatures(features_Activesites_8);
var lyr_Activesites_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Activesites_8, 
                style: style_Activesites_8,
                popuplayertitle: 'Active sites',
                interactive: true,
                title: '<img src="styles/legend/Activesites_8.png" /> Active sites'
            });
var group_Oldlayers = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Old layers'});
var group_SitesCameroon = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Sites Cameroon'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Yaoundeboundaries_1.setVisible(true);lyr_Doualaboundaries_2.setVisible(true);lyr_PlannedMegahubsYaounde_3.setVisible(true);lyr_PlannedMegahubsDouala_4.setVisible(true);lyr_MegahubsitesvalidatedbyEIP_5.setVisible(true);lyr_Smallsitesacquired_6.setVisible(true);lyr_Smallsitesreadytoactivate_7.setVisible(true);lyr_Activesites_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Yaoundeboundaries_1,lyr_Doualaboundaries_2,lyr_PlannedMegahubsYaounde_3,lyr_PlannedMegahubsDouala_4,lyr_MegahubsitesvalidatedbyEIP_5,lyr_Smallsitesacquired_6,lyr_Smallsitesreadytoactivate_7,lyr_Activesites_8];
lyr_Yaoundeboundaries_1.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Doualaboundaries_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_PlannedMegahubsYaounde_3.set('fieldAliases', {'id': 'id', '# Racks': '# Racks', 'KVA': 'KVA', 'Site Name': 'Site Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_PlannedMegahubsDouala_4.set('fieldAliases', {'id': 'id', '# racks': '# racks', 'KVA': 'KVA', 'Site name': 'Site name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MegahubsitesvalidatedbyEIP_5.set('fieldAliases', {'id': 'id', 'Site name': 'Site name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Floor spac': 'Floor spac', 'Roof space': 'Roof space', 'Type': 'Type', 'Racks cap': 'Racks cap', });
lyr_Smallsitesacquired_6.set('fieldAliases', {'Station_ID': 'Station_ID', 'Ville': 'Ville', 'Nom du sit': 'Nom du sit', 'Latitude (': 'Latitude (', 'Longitude': 'Longitude', 'Type': 'Type', 'Racks cap': 'Racks cap', });
lyr_Smallsitesreadytoactivate_7.set('fieldAliases', {'Station_ID': 'Station_ID', 'Ville': 'Ville', 'Nom du sit': 'Nom du sit', 'Latitude (': 'Latitude (', 'Longitude': 'Longitude', 'Type': 'Type', 'Racks cap': 'Racks cap', });
lyr_Activesites_8.set('fieldAliases', {'Station_ID': 'Station_ID', 'Ville': 'Ville', 'Nom du sit': 'Nom du sit', 'Latitude (': 'Latitude (', 'Longitude': 'Longitude', 'Type': 'Type', 'Racks Cap': 'Racks Cap', });
lyr_Yaoundeboundaries_1.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Doualaboundaries_2.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_PlannedMegahubsYaounde_3.set('fieldImages', {'id': 'TextEdit', '# Racks': 'TextEdit', 'KVA': '', 'Site Name': '', 'Latitude': '', 'Longitude': '', });
lyr_PlannedMegahubsDouala_4.set('fieldImages', {'id': 'TextEdit', '# racks': 'TextEdit', 'KVA': '', 'Site name': '', 'Latitude': '', 'Longitude': '', });
lyr_MegahubsitesvalidatedbyEIP_5.set('fieldImages', {'id': 'TextEdit', 'Site name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Floor spac': 'TextEdit', 'Roof space': 'TextEdit', 'Type': 'TextEdit', 'Racks cap': 'TextEdit', });
lyr_Smallsitesacquired_6.set('fieldImages', {'Station_ID': 'TextEdit', 'Ville': 'TextEdit', 'Nom du sit': 'TextEdit', 'Latitude (': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Racks cap': 'Range', });
lyr_Smallsitesreadytoactivate_7.set('fieldImages', {'Station_ID': 'TextEdit', 'Ville': 'TextEdit', 'Nom du sit': 'TextEdit', 'Latitude (': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Racks cap': 'TextEdit', });
lyr_Activesites_8.set('fieldImages', {'Station_ID': 'TextEdit', 'Ville': 'TextEdit', 'Nom du sit': 'TextEdit', 'Latitude (': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Racks Cap': 'Range', });
lyr_Yaoundeboundaries_1.set('fieldLabels', {'fid': 'hidden field', 'adm2_name': 'inline label - always visible', 'adm2_name1': 'hidden field', 'adm2_name2': 'hidden field', 'adm2_name3': 'hidden field', 'adm2_pcode': 'hidden field', 'adm1_name': 'inline label - always visible', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'inline label - always visible', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm2_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', });
lyr_Doualaboundaries_2.set('fieldLabels', {'fid': 'hidden field', 'adm2_name': 'inline label - always visible', 'adm2_name1': 'hidden field', 'adm2_name2': 'hidden field', 'adm2_name3': 'hidden field', 'adm2_pcode': 'hidden field', 'adm1_name': 'inline label - always visible', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'inline label - always visible', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm2_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', });
lyr_PlannedMegahubsYaounde_3.set('fieldLabels', {'id': 'hidden field', '# Racks': 'inline label - always visible', 'KVA': 'inline label - always visible', 'Site Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_PlannedMegahubsDouala_4.set('fieldLabels', {'id': 'hidden field', '# racks': 'inline label - always visible', 'KVA': 'inline label - always visible', 'Site name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_MegahubsitesvalidatedbyEIP_5.set('fieldLabels', {'id': 'hidden field', 'Site name': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Floor spac': 'inline label - always visible', 'Roof space': 'inline label - always visible', 'Type': 'inline label - always visible', 'Racks cap': 'inline label - always visible', });
lyr_Smallsitesacquired_6.set('fieldLabels', {'Station_ID': 'hidden field', 'Ville': 'inline label - always visible', 'Nom du sit': 'inline label - always visible', 'Latitude (': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - always visible', 'Racks cap': 'inline label - always visible', });
lyr_Smallsitesreadytoactivate_7.set('fieldLabels', {'Station_ID': 'hidden field', 'Ville': 'inline label - always visible', 'Nom du sit': 'inline label - always visible', 'Latitude (': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - always visible', 'Racks cap': 'inline label - always visible', });
lyr_Activesites_8.set('fieldLabels', {'Station_ID': 'hidden field', 'Ville': 'inline label - always visible', 'Nom du sit': 'inline label - always visible', 'Latitude (': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - visible with data', 'Racks Cap': 'inline label - always visible', });
lyr_Activesites_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});