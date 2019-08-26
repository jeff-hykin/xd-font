'use strict';
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9, _r1_t10, _r1_t11, _r1_t12, _r1_t13, _r1_t14, _r1_t15, _r1_t16;
var _r1_t2 = function _r1_t9(r144_t) {
    var r144_n, r144_i, r144_a, _r144_t3, _r144_t4, _r144_t7, _r144_t9, _r144_t10, _r144_t11, _r144_t12, _r144_t13, _r144_t16, _r144_t18, _r144_t19, _r144_t20, _r144_t21, _r144_t22, _r144_t25;
    var _r144_t0 = function () {
        _r144_t7 = function (_r144_t8) {
            _r144_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r144_t8
            };
        };
        _r144_t9 = r144_t instanceof Array;
        if (_r144_t9) {
            _r144_t10 = r144_n = r144_t.length;
            _r144_t11 = r144_i = 0;
            _r144_t12 = function (_r144_t14) {
                return _r144_t7(_r144_t14);
            };
            _r144_t13 = function (_r144_t15) {
                _r144_t16 = r144_i < r144_n;
                if (_r144_t16) {
                    _r144_t0 = function (_r144_t17) {
                        return _r144_t13(r144_i = r144_i + 1);
                    };
                    return {
                        'value': [
                            r144_i,
                            r144_t[r144_i]
                        ],
                        'done': false
                    };
                } else
                    return _r144_t12(_r144_t15);
            };
            return _r144_t13();
        } else {
            _r144_t18 = r144_a = Object.keys(r144_t);
            _r144_t19 = r144_n = r144_a.length;
            _r144_t20 = r144_i = 0;
            _r144_t21 = function (_r144_t23) {
                return _r144_t7(_r144_t23);
            };
            _r144_t22 = function (_r144_t24) {
                _r144_t25 = r144_i < r144_n;
                if (_r144_t25) {
                    _r144_t0 = function (_r144_t26) {
                        return _r144_t22(r144_i = r144_i + 1);
                    };
                    return {
                        'value': [
                            r144_a[r144_i],
                            r144_t[r144_a[r144_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r144_t21(_r144_t24);
            };
            return _r144_t22();
        }
    };
    var _r144_t1 = function (x) {
        try {
            return _r144_t0(x);
        } catch (ex) {
            return _r144_t2(ex);
        }
    };
    var _r144_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9)
        _r144_t3 = this;
    else {
        _r144_t4 = function () {
        };
        _r144_t4.prototype = _r1_t9.prototype;
        _r144_t3 = new _r144_t4();
    }
    _r144_t3[Symbol.iterator] = function () {
        return _r144_t3;
    };
    _r144_t3.next = _r144_t1;
    _r144_t3.throw = function (x) {
        return _r144_t2(x);
    };
    return _r144_t3;
};
var r1_topsort = require('topsort');
var r1_Glyph = require('../support/glyph');
var r1_Transform = require('../support/transform');
var _r1_t8 = require('./feature/ligation');
var r1_progLigNameMap = _r1_t8.progLigNameMap;
var r1_buildLigations = _r1_t8.buildLigations;
var r1_buildOPBD = require('./feature/opbd');
var r1_buildCCMP = require('./feature/ccmp');
var r1_GDEF_SIMPLE = 1;
var r1_GDEF_LIGATURE = 2;
var r1_GDEF_MARK = 3;
var r1_buildGSUB = function _r1_t10(r137_para, r137_glyphs, r137_glyphList, r137_markGlyphs) {
    var r137_glyph, r137_fs, r137_feature, r137_name, r137_composition, r137_tags, r137_ch, r137_tag, _r137_t0, _r137_t1, _r137_t2, _r137_t3, _r137_t4, _r137_t5, _r137_t6, _r137_t7, _r137_t8, _r137_t9, _r137_t10, _r137_t11;
    var r137_commonList = [];
    var r137_languages = {
        'DFLT_DFLT': { 'features': r137_commonList },
        'latn_DFLT': { 'features': r137_commonList },
        'grek_DFLT': { 'features': r137_commonList },
        'cyrl_DFLT': { 'features': r137_commonList },
        'kana_DFLT': { 'features': r137_commonList },
        'hani_DFLT': { 'features': r137_commonList }
    };
    var r137_features = {};
    var r137_lookups = {};
    var r137_lookupOrder = [];
    var r137_xn$lookupsingle$7Hrq = function _r137_t14(r138_name, r138_f, r138_t) {
        var r138_subtable = {};
        var _r138_t0 = 0;
        var _r138_t1 = r138_f.length;
        var r138_j = _r138_t0;
        for (; r138_j < _r138_t1; r138_j = r138_j + 1)
            r138_subtable[r138_f[r138_j]] = r138_t[r138_j];
        return r137_lookups[r138_name] = {
            'type': 'gsub_single',
            'subtables': [r138_subtable]
        };
    };
    var r137_getsublookup = function _r137_t15(r141_left, r141_right) {
        var r141_found, r141_name, r141_lookup, r141_st, r141_check, r141_j, _r141_t0, _r141_t1, _r141_t2, _r141_t3, _r141_t4, _r141_t5;
        if (!r141_right)
            return null;
        else if (typeof r141_right === 'string')
            return r141_right;
        else if (r141_right instanceof Function)
            return r137_getsublookup(r141_left, r141_right(r141_left));
        else {
            r141_found = null;
            _r141_t0 = _r1_t2(r137_lookups)[Symbol.iterator]();
            _r141_t1 = void 0;
            for (; !(_r141_t1 = _r141_t0.next()).done;) {
                _r141_t2 = _r141_t1.value;
                r141_name = _r141_t2[0];
                r141_lookup = _r141_t2[1];
                _r141_t3 = r141_lookup;
                if (_r141_t3 && 'gsub_single' === _r141_t3.type && (Array.isArray(_r141_t3.subtables) && _r141_t3.subtables.length === 1)) {
                    r141_st = _r141_t3.subtables[0];
                    _r141_t3.subtables;
                    r141_check = true;
                    _r141_t4 = 0;
                    _r141_t5 = r141_left.length;
                    r141_j = _r141_t4;
                    for (; r141_j < _r141_t5; r141_j = r141_j + 1)
                        if (r141_st[r141_left[r141_j]] !== r141_right[r141_j])
                            r141_check = false;
                    if (r141_check)
                        r141_found = r141_name;
                }
            }
            if (r141_found)
                return r141_found;
            r141_name = '_lookup_' + Object.keys(r137_lookups).length;
            r137_xn$lookupsingle$7Hrq(r141_name, r141_left, r141_right);
            return r141_name;
        }
    };
    var r137_xn$chainrule$1aao = function _r137_t16() {
        var r148_term, r148_lutn;
        var _r148_t7 = arguments;
        var r148_terms = [].slice.call(_r148_t7, 0).map(function _r148_t8(r149_x) {
            return r149_x.left ? r149_x : {
                'left': r149_x,
                'right': null
            };
        });
        var r148_subtable = {
            'match': [],
            'apply': [],
            'inputBegins': 0,
            'inputEnds': 0
        };
        var r148_foundi = false;
        var r148_founde = false;
        var _r148_t0 = 0;
        var _r148_t1 = r148_terms.length;
        var r148_j = _r148_t0;
        for (; r148_j < _r148_t1; r148_j = r148_j + 1)
            if (!r148_foundi && r148_terms[r148_j].right) {
                r148_subtable.inputBegins = r148_j;
                r148_foundi = true;
            }
        var _r148_t2 = r148_terms.length - 1;
        var _r148_t3 = 0;
        r148_j = _r148_t2;
        for (; r148_j >= _r148_t3; r148_j = r148_j - 1)
            if (!r148_founde && r148_terms[r148_j].right) {
                r148_subtable.inputEnds = r148_j + 1;
                r148_founde = true;
            }
        var _r148_t4 = 0;
        var _r148_t5 = r148_terms.length;
        r148_j = _r148_t4;
        for (; r148_j < _r148_t5; r148_j = r148_j + 1) {
            r148_term = r148_terms[r148_j];
            r148_subtable.match.push(r148_term.left);
            r148_lutn = r137_getsublookup(r148_term.left, r148_term.right);
            if (r148_lutn)
                r148_subtable.apply.push({
                    'at': r148_j,
                    'lookup': r148_lutn
                });
        }
        return r148_subtable;
    };
    r1_buildCCMP(r137_xn$chainrule$1aao, r137_markGlyphs, r137_commonList, r137_features, r137_lookups);
    if (r137_para.enableLigation)
        (function () {
            var r158_plm = r1_progLigNameMap();
            r158_plm.calt = r137_para.customLigSet || r158_plm[r137_para.defLigSet] || r158_plm.calt;
            return r1_buildLigations(r137_xn$chainrule$1aao, r137_lookupOrder, r137_commonList, r137_features, r137_lookups, r158_plm, r137_glyphs);
        }());
    var r137_srbSubtable = null;
    if (r137_para.isItalic)
        r137_srbSubtable = {
            'cyrbe': 'cyrbe.serbian',
            'cyrghe': 'cyrghe.serbian',
            'cyrde': 'cyrde.serbian',
            'cyrpe': 'cyrpe.serbian',
            'cyrte': 'cyrte.serbian'
        };
    else
        r137_srbSubtable = { 'cyrbe': 'cyrbe.serbian' };
    r137_lookups.locl_srb = {
        'type': 'gsub_single',
        'subtables': [r137_srbSubtable]
    };
    r137_features.locl_srb = ['locl_srb'];
    var r137_bgrSubtable = {
        'cyrve': 'cyrve.BGR',
        'cyrghe': 'cyrghe.italic',
        'cyrde': 'g',
        'cyrzhe': 'cyrzhe.BGR',
        'cyrze': 'cyrze.BGR',
        'cyri': 'u',
        'cyribreve': 'ubreve',
        'cyrka': 'k',
        'cyrEl': 'Lambda',
        'cyrel': 'turnv',
        'cyrpe': 'n',
        'cyrte': 'm',
        'cyrsha': 'cyrsha.italic',
        'cyrshcha': 'cyrshcha.italic',
        'cyryu': 'cyryu.BGR'
    };
    r137_lookups.locl_bgr = {
        'type': 'gsub_single',
        'subtables': [r137_bgrSubtable]
    };
    r137_features.locl_bgr = ['locl_bgr'];
    if (r137_para.enableCvSs) {
        _r137_t0 = r137_glyphList;
        _r137_t1 = _r137_t0.length;
        _r137_t2 = 0;
        for (; _r137_t2 < _r137_t1; _r137_t2 = _r137_t2 + 1) {
            r137_glyph = _r137_t0[_r137_t2];
            if (r137_glyph.featureSelector) {
                r137_fs = r137_glyph.featureSelector;
                _r137_t3 = Object.keys(r137_fs);
                _r137_t4 = _r137_t3.length;
                _r137_t5 = 0;
                for (; _r137_t5 < _r137_t4; _r137_t5 = _r137_t5 + 1) {
                    r137_feature = _r137_t3[_r137_t5];
                    if (!r137_lookups[r137_feature]) {
                        r137_features[r137_feature] = [r137_feature];
                        r137_lookups[r137_feature] = {
                            'type': 'gsub_single',
                            'subtables': [{}]
                        };
                        r137_commonList.push(r137_feature);
                    }
                    r137_lookups[r137_feature].subtables[0][r137_glyph.name] = r137_fs[r137_feature];
                }
            }
        }
        _r137_t6 = _r1_t2(r137_para.variants)[Symbol.iterator]();
        _r137_t7 = void 0;
        for (; !(_r137_t7 = _r137_t6.next()).done;) {
            _r137_t8 = _r137_t7.value;
            r137_name = _r137_t8[0];
            r137_composition = _r137_t8[1];
            if (r137_name.length === 4 && r137_composition['__isComposite'] && r137_name.slice(0, 2) === 'ss') {
                r137_commonList.push(r137_name);
                r137_tags = {};
                _r137_t9 = _r1_t2(r137_composition['__cvmap'])[Symbol.iterator]();
                _r137_t10 = void 0;
                for (; !(_r137_t10 = _r137_t9.next()).done; r137_tags[r137_tag] = true) {
                    _r137_t11 = _r137_t10.value;
                    r137_ch = _r137_t11[0];
                    r137_tag = _r137_t11[1];
                }
                r137_features[r137_name] = Object.keys(r137_tags).filter(function _r137_t19(r169_tag) {
                    return r137_tags[r169_tag];
                });
            }
        }
    }
    r137_languages['cyrl_SRB '] = { 'features': ['locl_srb'].concat(r137_commonList) };
    r137_languages['cyrl_MKD '] = { 'features': ['locl_srb'].concat(r137_commonList) };
    r137_languages['cyrl_BGR '] = { 'features': ['locl_bgr'].concat(r137_commonList) };
    return {
        'languages': r137_languages,
        'features': r137_features,
        'lookups': r137_lookups,
        'lookupOrder': r1_topsort(r137_lookupOrder)
    };
};
var r1_buildGPOS = function _r1_t11(r170_para, r170_glyphs, r170_glyphList, r170_markGlyphs) {
    var r170_marktag;
    var r170_lookup_mark = {
        'type': 'gpos_mark_to_base',
        'subtables': []
    };
    var r170_lookup_mkmk = {
        'type': 'gpos_mark_to_mark',
        'subtables': []
    };
    var r170_createBaseInfo = function _r170_t5(r171_g, r171_th, r171_px, r171_py) {
        var r171_key;
        var r171_res = {};
        var r171_pushed = false;
        var _r171_t0 = Object.keys(r171_g.anchors);
        var _r171_t1 = _r171_t0.length;
        var _r171_t2 = 0;
        for (; _r171_t2 < _r171_t1; _r171_t2 = _r171_t2 + 1) {
            r171_key = _r171_t0[_r171_t2];
            if (!r171_th || r171_th[r171_key]) {
                r171_res[r171_key] = {
                    'x': r171_g.anchors[r171_key][r171_px || 'x'],
                    'y': r171_g.anchors[r171_key][r171_py || 'y']
                };
                r171_pushed = true;
            }
        }
        return r171_pushed ? r171_res : void 0;
    };
    var r170_createMTSSubtable = function _r170_t6(r173_lookup, r173_anchorClasses) {
        var r173_ac, r173_glyph, r173_anchorKeys, r173_hasAnchor, r173_key, r173_isMarkGlyph, r173_markKey, r173_r, _r173_t6, _r173_t7, _r173_t8, _r173_t9, _r173_t10, _r173_t11;
        var r173_subtable = {
            'marks': {},
            'bases': {}
        };
        var r173_th = {};
        var _r173_t0 = r173_anchorClasses;
        var _r173_t1 = _r173_t0.length;
        var _r173_t2 = 0;
        for (; _r173_t2 < _r173_t1; _r173_t2 = _r173_t2 + 1) {
            r173_ac = _r173_t0[_r173_t2];
            r173_th[r173_ac] = true;
        }
        var _r173_t3 = r170_glyphList;
        var _r173_t4 = _r173_t3.length;
        var _r173_t5 = 0;
        for (; _r173_t5 < _r173_t4; _r173_t5 = _r173_t5 + 1) {
            r173_glyph = _r173_t3[_r173_t5];
            if (r173_glyph.anchors) {
                r173_anchorKeys = Object.keys(r173_glyph.anchors);
                r173_hasAnchor = false;
                _r173_t6 = r173_anchorKeys;
                _r173_t7 = _r173_t6.length;
                _r173_t8 = 0;
                for (; _r173_t8 < _r173_t7; _r173_t8 = _r173_t8 + 1) {
                    r173_key = _r173_t6[_r173_t8];
                    if (r173_th[r173_key])
                        r173_hasAnchor = true;
                }
                if (r173_hasAnchor) {
                    r173_isMarkGlyph = false;
                    r173_markKey = void 0;
                    _r173_t9 = r173_anchorKeys;
                    _r173_t10 = _r173_t9.length;
                    _r173_t11 = 0;
                    for (; _r173_t11 < _r173_t10; _r173_t11 = _r173_t11 + 1) {
                        r173_key = _r173_t9[_r173_t11];
                        if (r173_glyph.anchors[r173_key].type === 'mark') {
                            r173_isMarkGlyph = true;
                            r173_markKey = r173_key;
                        }
                    }
                    if (r173_isMarkGlyph) {
                        r173_subtable.marks[r173_glyph.name] = {
                            'class': r173_markKey,
                            'x': r173_glyph.anchors[r173_markKey].x,
                            'y': r173_glyph.anchors[r173_markKey].y
                        };
                        if (r173_lookup === r170_lookup_mkmk) {
                            r173_r = r170_createBaseInfo(r173_glyph, r173_th, 'mbx', 'mby');
                            if (r173_r)
                                r173_subtable.bases[r173_glyph.name] = r173_r;
                        }
                    } else if (r173_lookup === r170_lookup_mark) {
                        r173_r = r170_createBaseInfo(r173_glyph, r173_th, 'x', 'y');
                        if (r173_r)
                            r173_subtable.bases[r173_glyph.name] = r173_r;
                    }
                }
            }
        }
        return r173_lookup.subtables.push(r173_subtable);
    };
    var _r170_t0 = [
        'above',
        'below',
        'overlay',
        'slash',
        'topright',
        'bottomright',
        'trailing',
        'lf'
    ];
    var _r170_t1 = _r170_t0.length;
    var _r170_t2 = 0;
    for (; _r170_t2 < _r170_t1; _r170_t2 = _r170_t2 + 1) {
        r170_marktag = _r170_t0[_r170_t2];
        r170_createMTSSubtable(r170_lookup_mark, [r170_marktag]);
        r170_createMTSSubtable(r170_lookup_mkmk, [r170_marktag]);
    }
    return {
        'languages': {
            'DFLT_DFLT': {
                'features': [
                    'mark0',
                    'mkmk0'
                ]
            },
            'latn_DFLT': {
                'features': [
                    'mark0',
                    'mkmk0'
                ]
            },
            'grek_DFLT': {
                'features': [
                    'mark0',
                    'mkmk0'
                ]
            },
            'cyrl_DFLT': {
                'features': [
                    'mark0',
                    'mkmk0'
                ]
            }
        },
        'features': {
            'mark0': ['l_mark'],
            'mkmk0': ['l_mkmk']
        },
        'lookups': {
            'l_mark': r170_lookup_mark,
            'l_mkmk': r170_lookup_mkmk
        }
    };
};
var r1_buildGDEF = function _r1_t12(r182_para, r182_glyphs, r182_glyphList, r182_markGlyphs) {
    var r182_glyph, r182_anchorKeys, r182_key, _r182_t3, _r182_t4, _r182_t5;
    var r182_GDEF = { 'glyphClassDef': {} };
    var _r182_t0 = r182_glyphList;
    var _r182_t1 = _r182_t0.length;
    var _r182_t2 = 0;
    for (; _r182_t2 < _r182_t1; _r182_t2 = _r182_t2 + 1) {
        r182_glyph = _r182_t0[_r182_t2];
        r182_GDEF.glyphClassDef[r182_glyph.name] = /_/.test(r182_glyph.name) ? r1_GDEF_LIGATURE : r1_GDEF_SIMPLE;
        if (r182_glyph.anchors && (r182_anchorKeys = Object.keys(r182_glyph.anchors), r182_anchorKeys.length)) {
            _r182_t3 = r182_anchorKeys;
            _r182_t4 = _r182_t3.length;
            _r182_t5 = 0;
            for (; _r182_t5 < _r182_t4; _r182_t5 = _r182_t5 + 1) {
                r182_key = _r182_t3[_r182_t5];
                if (r182_glyph.anchors[r182_key].type === 'mark') {
                    if (!r182_markGlyphs[r182_key])
                        r182_markGlyphs[r182_key] = [];
                    r182_markGlyphs[r182_key].push(r182_glyph.name);
                    r182_markGlyphs.all.push(r182_glyph.name);
                    r182_GDEF.glyphClassDef[r182_glyph.name] = r1_GDEF_MARK;
                }
            }
        }
    }
    return r182_GDEF;
};
var r1_interpretLookups = function _r1_t13(r185_gs, r185_lutns, r185_lookups) {
    var r185_lutn, r185_lut, _r185_t6;
    var _r185_t0 = r185_lutns;
    var _r185_t1 = _r185_t0.length;
    var _r185_t2 = 0;
    var _r185_t5 = _r185_t2 < _r185_t1;
    for (; _r185_t5; _r185_t5 = _r185_t2 < _r185_t1)
        _r185_t6 = (r185_lutn = _r185_t0[_r185_t2], r185_lut = r185_lookups[r185_lutn], r1_interpretLookup(r185_gs, r185_lut, r185_lookups), _r185_t2 = _r185_t2 + 1);
    return _r185_t6;
};
var r1_interpretLookup = function _r1_t14(r188_gs, r188_lut, r188_lookups) {
    var r188_j, r188_incN, _r188_t6, _r188_t7, _r188_t8, _r188_t9, _r188_t12, _r188_t13;
    var _r188_t0 = r188_lut.type;
    if ('gsub_chaining' === _r188_t0) {
        r188_j = 0;
        _r188_t6 = r188_j < r188_gs.length;
        for (; _r188_t6; _r188_t6 = r188_j < r188_gs.length) {
            r188_incN = 1;
            (function () {
                var r194_subtable, r194_matchT, r194_ib, r194_foundMatch, r194_k, r194_app, _r194_t3, _r194_t4, _r194_t5, _r194_t7;
                var _r194_t0 = r188_lut.subtables;
                var _r194_t1 = _r194_t0.length;
                var _r194_t2 = 0;
                var _r194_t6 = _r194_t2 < _r194_t1;
                for (; _r194_t6; _r194_t6 = _r194_t2 < _r194_t1) {
                    r194_subtable = _r194_t0[_r194_t2];
                    r194_matchT = r194_subtable.match;
                    r194_ib = r194_subtable.inputBegins;
                    r194_foundMatch = true;
                    r194_k = 0;
                    for (; r194_foundMatch && r194_k < r194_matchT.length; r194_k = r194_k + 1)
                        if (!r188_gs[r188_j + r194_k - r194_ib])
                            r194_foundMatch = false;
                        else if (r194_matchT[r194_k].indexOf(r188_gs[r188_j + r194_k - r194_ib]) < 0)
                            r194_foundMatch = false;
                    if (r194_foundMatch) {
                        _r194_t3 = r194_subtable.apply;
                        _r194_t4 = _r194_t3.length;
                        _r194_t5 = 0;
                        for (; _r194_t5 < _r194_t4; _r194_t5 = _r194_t5 + 1) {
                            r194_app = _r194_t3[_r194_t5];
                            (function () {
                                var r200_aj = r188_j - r194_ib + r194_app.at;
                                var r200_alut = r188_lookups[r194_app.lookup];
                                return r1_interpretLookupAt(r188_gs, r200_aj, r200_alut);
                            }());
                        }
                        r188_incN = r188_incN + r194_subtable.inputEnds - r194_subtable.inputBegins;
                        return void 0;
                    }
                    _r194_t7 = _r194_t2 = _r194_t2 + 1;
                }
                return _r194_t7;
            }());
            _r188_t7 = r188_j = r188_j + r188_incN;
        }
        return _r188_t7;
    } else if ('gsub_reverse' === _r188_t0) {
        r188_j = r188_gs.length - 1;
        _r188_t8 = r188_j >= 0;
        for (; _r188_t8; _r188_t8 = r188_j >= 0) {
            (function () {
                var r190_subtable, r190_matchT, r190_ib, r190_foundMatch, r190_k, _r190_t4;
                var _r190_t0 = r188_lut.subtables;
                var _r190_t1 = _r190_t0.length;
                var _r190_t2 = 0;
                var _r190_t3 = _r190_t2 < _r190_t1;
                for (; _r190_t3; _r190_t3 = _r190_t2 < _r190_t1) {
                    r190_subtable = _r190_t0[_r190_t2];
                    r190_matchT = r190_subtable.match;
                    r190_ib = r190_subtable.inputIndex;
                    r190_foundMatch = true;
                    r190_k = 0;
                    for (; r190_foundMatch && r190_k < r190_matchT.length; r190_k = r190_k + 1)
                        if (!r188_gs[r188_j + r190_k - r190_ib])
                            r190_foundMatch = false;
                        else if (r190_matchT[r190_k].indexOf(r188_gs[r188_j + r190_k - r190_ib]) < 0)
                            r190_foundMatch = false;
                    if (r190_foundMatch)
                        r188_gs[r188_j] = r190_subtable.to[r190_matchT[r190_ib].indexOf(r188_gs[r188_j])] || r188_gs[r188_j];
                    _r190_t4 = _r190_t2 = _r190_t2 + 1;
                }
                return _r190_t4;
            }());
            _r188_t9 = r188_j = r188_j - 1;
        }
        return _r188_t9;
    } else if ('gsub_single' === _r188_t0) {
        r188_j = 0;
        _r188_t12 = r188_j < r188_gs.length;
        for (; _r188_t12; _r188_t12 = r188_j < r188_gs.length)
            _r188_t13 = (r1_interpretLookupAt(r188_gs, r188_j, r188_lut), r188_j = r188_j + 1);
        return _r188_t13;
    } else
        return void 0;
};
var r1_interpretLookupAt = function _r1_t15(r201_gs, r201_j, r201_lut) {
    var r201_subtable, _r201_t1, _r201_t2, _r201_t3, _r201_t7, _r201_t8;
    var _r201_t0 = r201_lut.type;
    if ('gsub_single' === _r201_t0) {
        _r201_t1 = r201_lut.subtables;
        _r201_t2 = _r201_t1.length;
        _r201_t3 = 0;
        _r201_t7 = _r201_t3 < _r201_t2;
        for (; _r201_t7; _r201_t7 = _r201_t3 < _r201_t2)
            _r201_t8 = (r201_subtable = _r201_t1[_r201_t3], r201_subtable[r201_gs[r201_j]] ? r201_gs[r201_j] = r201_subtable[r201_gs[r201_j]] : void 0, _r201_t3 = _r201_t3 + 1);
        return _r201_t8;
    } else
        return void 0;
};
exports.apply = r1_apply = function _r1_t16(r205_para, r205_glyphs, r205_glyphList, r205_unicodeGlyphs) {
    var r205_cldef, _r205_t0, _r205_t1, _r205_t2;
    var r205_markGlyphs = { 'all': [] };
    var r205_GPOS = r1_buildGPOS(r205_para, r205_glyphs, r205_glyphList, r205_markGlyphs);
    var r205_GDEF = r1_buildGDEF(r205_para, r205_glyphs, r205_glyphList, r205_markGlyphs);
    var r205_GSUB = r1_buildGSUB(r205_para, r205_glyphs, r205_glyphList, r205_markGlyphs);
    if (r205_para.spacing > 0 && r205_para.compLig) {
        _r205_t0 = r205_para.compLig;
        _r205_t1 = _r205_t0.length;
        _r205_t2 = 0;
        for (; _r205_t2 < _r205_t1; _r205_t2 = _r205_t2 + 1) {
            r205_cldef = _r205_t0[_r205_t2];
            (function () {
                var r209_gn, r209_g;
                if (!r205_cldef.unicode)
                    return void 0;
                if (!r205_cldef.featureTag)
                    return void 0;
                if (!r205_GSUB.features[r205_cldef.featureTag])
                    return void 0;
                if (!r205_cldef.sequence)
                    return void 0;
                var r209_gnames = [];
                var r209_j = 0;
                for (; r209_j < r205_cldef.sequence.length; r209_j = r209_j + 1) {
                    if (!r205_unicodeGlyphs[r205_cldef.sequence.charCodeAt(r209_j)])
                        return void 0;
                    r209_gnames.push(r205_unicodeGlyphs[r205_cldef.sequence.charCodeAt(r209_j)].name);
                }
                r1_interpretLookups(r209_gnames, r205_GSUB.features[r205_cldef.featureTag], r205_GSUB.lookups);
                var r209_g1 = new r1_Glyph('$clig.' + r205_cldef.unicode);
                r209_g1.advanceWidth = 0;
                r209_g1.cmpPriority = 1;
                r209_g1.unicode = [r205_cldef.unicode];
                var _r209_t0 = r209_gnames;
                var _r209_t1 = _r209_t0.length;
                var _r209_t2 = 0;
                for (; _r209_t2 < _r209_t1; _r209_t2 = _r209_t2 + 1) {
                    r209_gn = _r209_t0[_r209_t2];
                    r209_g = r205_glyphs[r209_gn];
                    r209_g1['apply-transform'](new r1_Transform(1, 0, 0, 1, -r209_g1.advanceWidth, 0));
                    r209_g1.include(r209_g);
                    r209_g1['apply-transform'](new r1_Transform(1, 0, 0, 1, r209_g1.advanceWidth, 0));
                    r209_g1.advanceWidth = r209_g1.advanceWidth + r209_g.advanceWidth;
                }
                r205_glyphs[r209_g1.name] = r209_g1;
                r205_unicodeGlyphs[r205_cldef.unicode] = r209_g1;
                r205_glyphList.push(r209_g1);
                return r205_GDEF.glyphClassDef[r209_g1.name] = r1_GDEF_LIGATURE;
            }());
        }
    }
    return {
        'GSUB': r205_GSUB,
        'GPOS': r205_GPOS,
        'GDEF': r205_GDEF
    };
};
