'use strict';
var r1_assignFontNames, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9, _r1_t10;
var r1_COPYRIGHT = 0;
var r1_FAMILY = 1;
var r1_STYLE = 2;
var r1_UNIQUE_NAME = 3;
var r1_FULL_NAME = 4;
var r1_VERSION = 5;
var r1_POSTSCRIPT = 6;
var r1_TRADEMARK = 7;
var r1_MANUFACTURER = 8;
var r1_DESIGNER = 9;
var r1_DESCRIPTION = 10;
var r1_LICENCE = 13;
var r1_PREFERRED_FAMILY = 16;
var r1_PREFERRED_STYLE = 17;
var r1_WWS_PREFERRED_FAMILY = 21;
var r1_WWS_PREFERRED_STYLE = 22;
var r1_nameFont = function _r1_t8(r124_font, r124_nameid, r124_str) {
    r124_font.name.push({
        'platformID': 1,
        'encodingID': 0,
        'languageID': 0,
        'nameID': r124_nameid,
        'nameString': r124_str
    });
    return r124_font.name.push({
        'platformID': 3,
        'encodingID': 1,
        'languageID': 1033,
        'nameID': r124_nameid,
        'nameString': r124_str
    });
};
var r1_weightToMenuStyleMap = {
    100: 'Thin',
    200: 'Extralight',
    300: 'Light',
    400: '',
    500: 'Medium',
    600: 'Semibold',
    700: 'Bold',
    800: 'Extrabold',
    900: 'Heavy'
};
var r1_slantToMenuStyleMap = {
    'normal': '',
    'italic': 'Italic',
    'oblique': 'Oblique'
};
var r1_getStyle = function _r1_t9(r125_weight, r125_slant) {
    return (r1_weightToMenuStyleMap[r125_weight] + ' ' + r1_slantToMenuStyleMap[r125_slant]).trim() || 'Regular';
};
exports.assignFontNames = r1_assignFontNames = function _r1_t10(r127_para, r127_metrics, r127_font) {
    var r127_compatFamilySuffix, r127_compatStyle;
    r127_font.name = [];
    var r127_family = r127_para.naming.family.trim();
    var r127_style = r1_getStyle(r127_para.naming.weight, r127_para.naming.slant);
    var r127_version = r127_para.naming.version;
    var r127_isItalic = r127_para.naming.slant === 'italic';
    var r127_isOblique = r127_para.naming.slant === 'oblique';
    var r127_isBold = r127_para.naming.weight > 650;
    r1_nameFont(r127_font, r1_PREFERRED_FAMILY, r127_family);
    r1_nameFont(r127_font, r1_PREFERRED_STYLE, r127_style);
    r1_nameFont(r127_font, r1_WWS_PREFERRED_FAMILY, r127_family);
    r1_nameFont(r127_font, r1_WWS_PREFERRED_STYLE, r127_style);
    r127_font.name.preferredFamily = r127_family;
    r127_font.name.preferredSubFamily = r127_style;
    if (r127_style === 'Regular' || r127_style === 'Bold' || r127_style === 'Italic' || r127_style === 'Bold Italic') {
        r1_nameFont(r127_font, r1_FAMILY, r127_family);
        r1_nameFont(r127_font, r1_STYLE, r127_style);
    } else {
        r127_compatFamilySuffix = r127_style.replace(/ Italic$/, '').replace(/ Extra/, 'X');
        r127_compatStyle = / Italic$/.test(r127_style) ? 'Italic' : 'Regular';
        r1_nameFont(r127_font, r1_FAMILY, r127_family + ' ' + r127_compatFamilySuffix);
        r1_nameFont(r127_font, r1_STYLE, r127_compatStyle);
    }
    r1_nameFont(r127_font, r1_UNIQUE_NAME, '' + r127_family + ' ' + r127_style + ' ' + r127_version);
    var r127_fontfullName = r127_style !== 'Regular' ? r127_family + ' ' + r127_style : r127_family;
    r1_nameFont(r127_font, r1_FULL_NAME, r127_fontfullName);
    r1_nameFont(r127_font, r1_POSTSCRIPT, r127_fontfullName.replace(/ /g, '-'));
    r1_nameFont(r127_font, r1_VERSION, r127_version);
    r1_nameFont(r127_font, r1_COPYRIGHT, r127_para.copyright);
    r1_nameFont(r127_font, r1_MANUFACTURER, r127_para.manufacturer);
    r1_nameFont(r127_font, r1_DESIGNER, r127_para.designer);
    r1_nameFont(r127_font, r1_DESCRIPTION, r127_para.description);
    r1_nameFont(r127_font, r1_LICENCE, r127_para.licence);
    r127_font.name = r127_font.name.sort(function _r127_t2(r128_a, r128_b) {
        if (r128_a.platformID !== r128_b.platformID)
            return r128_a.platformID - r128_b.platformID;
        if (r128_a.encodingID !== r128_b.encodingID)
            return r128_a.encodingID - r128_b.encodingID;
        if (r128_a.languageID !== r128_b.languageID)
            return r128_a.languageID - r128_b.languageID;
        return r128_a.nameID - r128_b.nameID;
    });
    r127_font.OS_2.usWeightClass = r127_para.naming.weight;
    r127_font.OS_2.panose[2] = 1 + r127_para.naming.weight / 100;
    r127_font.OS_2.fsSelection = {
        'oblique': !!r127_isOblique,
        'bold': !!r127_isBold,
        'italic': !!(r127_isItalic || r127_isOblique),
        'regular': !!(!r127_isBold && !r127_isItalic && !r127_isOblique),
        'useTypoMetrics': true
    };
    r127_font.OS_2.sFamilyClass = 8 * 256 + 9;
    r127_font.OS_2.xAvgCharWidth = r127_para.width;
    r127_font.head.macStyle = {
        'bold': !!r127_isBold,
        'italic': !!(r127_isItalic || r127_isOblique)
    };
    return r127_para.diversityM === 1 && r127_para.diversityF === 1 && r127_para.diversityI === 1 && r127_para.diversityII === 1 ? (r127_font.OS_2.panose[3] = 9, r127_font.post.isFixedPitch = true) : (r127_font.OS_2.panose[3] = 0, r127_font.post.isFixedPitch = false);
};
