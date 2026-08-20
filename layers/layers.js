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
var format_Mfoundi_UTM32N_1 = new ol.format.GeoJSON();
var features_Mfoundi_UTM32N_1 = format_Mfoundi_UTM32N_1.readFeatures(json_Mfoundi_UTM32N_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mfoundi_UTM32N_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mfoundi_UTM32N_1.addFeatures(features_Mfoundi_UTM32N_1);
var lyr_Mfoundi_UTM32N_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mfoundi_UTM32N_1, 
                style: style_Mfoundi_UTM32N_1,
                popuplayertitle: 'Mfoundi_UTM32N',
                interactive: true,
                title: '<img src="styles/legend/Mfoundi_UTM32N_1.png" /> Mfoundi_UTM32N'
            });
var format_Wouri_UTM32N_2 = new ol.format.GeoJSON();
var features_Wouri_UTM32N_2 = format_Wouri_UTM32N_2.readFeatures(json_Wouri_UTM32N_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wouri_UTM32N_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wouri_UTM32N_2.addFeatures(features_Wouri_UTM32N_2);
var lyr_Wouri_UTM32N_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wouri_UTM32N_2, 
                style: style_Wouri_UTM32N_2,
                popuplayertitle: 'Wouri_UTM32N',
                interactive: true,
                title: '<img src="styles/legend/Wouri_UTM32N_2.png" /> Wouri_UTM32N'
            });
var format_PlannedMegahubsDouala_3 = new ol.format.GeoJSON();
var features_PlannedMegahubsDouala_3 = format_PlannedMegahubsDouala_3.readFeatures(json_PlannedMegahubsDouala_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedMegahubsDouala_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedMegahubsDouala_3.addFeatures(features_PlannedMegahubsDouala_3);
var lyr_PlannedMegahubsDouala_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedMegahubsDouala_3, 
                style: style_PlannedMegahubsDouala_3,
                popuplayertitle: 'Planned Megahubs Douala',
                interactive: true,
                title: '<img src="styles/legend/PlannedMegahubsDouala_3.png" /> Planned Megahubs Douala'
            });
var format_PlannedMegahubsYaounde_4 = new ol.format.GeoJSON();
var features_PlannedMegahubsYaounde_4 = format_PlannedMegahubsYaounde_4.readFeatures(json_PlannedMegahubsYaounde_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedMegahubsYaounde_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedMegahubsYaounde_4.addFeatures(features_PlannedMegahubsYaounde_4);
var lyr_PlannedMegahubsYaounde_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedMegahubsYaounde_4, 
                style: style_PlannedMegahubsYaounde_4,
                popuplayertitle: 'Planned Megahubs Yaounde',
                interactive: true,
                title: '<img src="styles/legend/PlannedMegahubsYaounde_4.png" /> Planned Megahubs Yaounde'
            });
var format_Acquiredsites_5 = new ol.format.GeoJSON();
var features_Acquiredsites_5 = format_Acquiredsites_5.readFeatures(json_Acquiredsites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acquiredsites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acquiredsites_5.addFeatures(features_Acquiredsites_5);
var lyr_Acquiredsites_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acquiredsites_5, 
                style: style_Acquiredsites_5,
                popuplayertitle: 'Acquired sites',
                interactive: true,
                title: '<img src="styles/legend/Acquiredsites_5.png" /> Acquired sites'
            });
var format_Sitesreadytoactivate_6 = new ol.format.GeoJSON();
var features_Sitesreadytoactivate_6 = format_Sitesreadytoactivate_6.readFeatures(json_Sitesreadytoactivate_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesreadytoactivate_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesreadytoactivate_6.addFeatures(features_Sitesreadytoactivate_6);
var lyr_Sitesreadytoactivate_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesreadytoactivate_6, 
                style: style_Sitesreadytoactivate_6,
                popuplayertitle: 'Sites ready to activate',
                interactive: true,
                title: '<img src="styles/legend/Sitesreadytoactivate_6.png" /> Sites ready to activate'
            });
var format_Activesites_7 = new ol.format.GeoJSON();
var features_Activesites_7 = format_Activesites_7.readFeatures(json_Activesites_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Activesites_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Activesites_7.addFeatures(features_Activesites_7);
var lyr_Activesites_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Activesites_7, 
                style: style_Activesites_7,
                popuplayertitle: 'Active sites',
                interactive: true,
                title: '<img src="styles/legend/Activesites_7.png" /> Active sites'
            });
var group_SitesCameroon = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Sites Cameroon'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Mfoundi_UTM32N_1.setVisible(true);lyr_Wouri_UTM32N_2.setVisible(true);lyr_PlannedMegahubsDouala_3.setVisible(true);lyr_PlannedMegahubsYaounde_4.setVisible(true);lyr_Acquiredsites_5.setVisible(true);lyr_Sitesreadytoactivate_6.setVisible(true);lyr_Activesites_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Mfoundi_UTM32N_1,lyr_Wouri_UTM32N_2,lyr_PlannedMegahubsDouala_3,lyr_PlannedMegahubsYaounde_4,lyr_Acquiredsites_5,lyr_Sitesreadytoactivate_6,lyr_Activesites_7];
lyr_Mfoundi_UTM32N_1.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Wouri_UTM32N_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_PlannedMegahubsDouala_3.set('fieldAliases', {'id': 'id', '# racks': '# racks', 'Transforme': 'Transforme', });
lyr_PlannedMegahubsYaounde_4.set('fieldAliases', {'id': 'id', '# Racks': '# Racks', 'trans_cap': 'trans_cap', });
lyr_Acquiredsites_5.set('fieldAliases', {'Station_ID': 'Station_ID', 'Ville': 'Ville', 'Nom du sit': 'Nom du sit', 'Latitude (': 'Latitude (', 'Longitude': 'Longitude', 'Type': 'Type', 'Racks cap': 'Racks cap', });
lyr_Sitesreadytoactivate_6.set('fieldAliases', {'Station_ID': 'Station_ID', 'Ville': 'Ville', 'Nom du sit': 'Nom du sit', 'Latitude (': 'Latitude (', 'Longitude': 'Longitude', 'Type': 'Type', 'Racks cap': 'Racks cap', });
lyr_Activesites_7.set('fieldAliases', {'Station_ID': 'Station_ID', 'Ville': 'Ville', 'Nom du sit': 'Nom du sit', 'Latitude (': 'Latitude (', 'Longitude': 'Longitude', 'Type': 'Type', 'Racks Cap': 'Racks Cap', });
lyr_Mfoundi_UTM32N_1.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Wouri_UTM32N_2.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_PlannedMegahubsDouala_3.set('fieldImages', {'id': 'TextEdit', '# racks': 'TextEdit', 'Transforme': 'TextEdit', });
lyr_PlannedMegahubsYaounde_4.set('fieldImages', {'id': 'TextEdit', '# Racks': 'TextEdit', 'trans_cap': 'TextEdit', });
lyr_Acquiredsites_5.set('fieldImages', {'Station_ID': 'TextEdit', 'Ville': 'TextEdit', 'Nom du sit': 'TextEdit', 'Latitude (': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Racks cap': 'Range', });
lyr_Sitesreadytoactivate_6.set('fieldImages', {'Station_ID': 'TextEdit', 'Ville': 'TextEdit', 'Nom du sit': 'TextEdit', 'Latitude (': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Racks cap': 'TextEdit', });
lyr_Activesites_7.set('fieldImages', {'Station_ID': 'TextEdit', 'Ville': 'TextEdit', 'Nom du sit': 'TextEdit', 'Latitude (': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Racks Cap': 'Range', });
lyr_Mfoundi_UTM32N_1.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Wouri_UTM32N_2.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_PlannedMegahubsDouala_3.set('fieldLabels', {'id': 'no label', '# racks': 'inline label - always visible', 'Transforme': 'inline label - always visible', });
lyr_PlannedMegahubsYaounde_4.set('fieldLabels', {'id': 'no label', '# Racks': 'inline label - always visible', 'trans_cap': 'inline label - always visible', });
lyr_Acquiredsites_5.set('fieldLabels', {'Station_ID': 'no label', 'Ville': 'no label', 'Nom du sit': 'inline label - always visible', 'Latitude (': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - always visible', 'Racks cap': 'inline label - always visible', });
lyr_Sitesreadytoactivate_6.set('fieldLabels', {'Station_ID': 'no label', 'Ville': 'no label', 'Nom du sit': 'inline label - always visible', 'Latitude (': 'no label', 'Longitude': 'no label', 'Type': 'inline label - always visible', 'Racks cap': 'inline label - always visible', });
lyr_Activesites_7.set('fieldLabels', {'Station_ID': 'no label', 'Ville': 'no label', 'Nom du sit': 'inline label - always visible', 'Latitude (': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - visible with data', 'Racks Cap': 'inline label - always visible', });
lyr_Activesites_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});