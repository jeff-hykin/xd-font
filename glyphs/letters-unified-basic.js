'use strict';
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t12, _r1_t13, _r1_t14;
var _r1_t2 = function _r1_t12(r372_t) {
    var r372_n, r372_i, r372_a, _r372_t3, _r372_t4, _r372_t7, _r372_t9, _r372_t10, _r372_t11, _r372_t12, _r372_t13, _r372_t16, _r372_t18, _r372_t19, _r372_t20, _r372_t21, _r372_t22, _r372_t25;
    var _r372_t0 = function () {
        _r372_t7 = function (_r372_t8) {
            _r372_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r372_t8
            };
        };
        _r372_t9 = r372_t instanceof Array;
        if (_r372_t9) {
            _r372_t10 = r372_n = r372_t.length;
            _r372_t11 = r372_i = 0;
            _r372_t12 = function (_r372_t14) {
                return _r372_t7(_r372_t14);
            };
            _r372_t13 = function (_r372_t15) {
                _r372_t16 = r372_i < r372_n;
                if (_r372_t16) {
                    _r372_t0 = function (_r372_t17) {
                        return _r372_t13(r372_i = r372_i + 1);
                    };
                    return {
                        'value': [
                            r372_i,
                            r372_t[r372_i]
                        ],
                        'done': false
                    };
                } else
                    return _r372_t12(_r372_t15);
            };
            return _r372_t13();
        } else {
            _r372_t18 = r372_a = Object.keys(r372_t);
            _r372_t19 = r372_n = r372_a.length;
            _r372_t20 = r372_i = 0;
            _r372_t21 = function (_r372_t23) {
                return _r372_t7(_r372_t23);
            };
            _r372_t22 = function (_r372_t24) {
                _r372_t25 = r372_i < r372_n;
                if (_r372_t25) {
                    _r372_t0 = function (_r372_t26) {
                        return _r372_t22(r372_i = r372_i + 1);
                    };
                    return {
                        'value': [
                            r372_a[r372_i],
                            r372_t[r372_a[r372_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r372_t21(_r372_t24);
            };
            return _r372_t22();
        }
    };
    var _r372_t1 = function (x) {
        try {
            return _r372_t0(x);
        } catch (ex) {
            return _r372_t2(ex);
        }
    };
    var _r372_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t12)
        _r372_t3 = this;
    else {
        _r372_t4 = function () {
        };
        _r372_t4.prototype = _r1_t12.prototype;
        _r372_t3 = new _r372_t4();
    }
    _r372_t3[Symbol.iterator] = function () {
        return _r372_t3;
    };
    _r372_t3.next = _r372_t1;
    _r372_t3.throw = function (x) {
        return _r372_t2(x);
    };
    return _r372_t3;
};
var _r1_class8 = function _r1_t13(r150_x, r150_y) {
    var _r150_t0 = this;
    _r150_t0.x = r150_x;
    _r150_t0.y = r150_y;
    return void 0;
};
var _r1_t9 = require('../support/transform');
var r1_Transform = _r1_t9;
var r1_tp = _r1_t9.transformPoint;
var r1_utp = _r1_t9.untransform;
var r1_inverse = _r1_t9.inverse;
var _r1_t10 = require('../support/utils');
var r1_mix = _r1_t10.mix;
var r1_linreg = _r1_t10.linreg;
var r1_clamp = _r1_t10.clamp;
var r1_fallback = _r1_t10.fallback;
var _r1_t11 = require('../meta/aesthetics');
var r1_designParameters = _r1_t11.designParameters;
exports.apply = r1_apply = function _r1_t14() {
    var _r250_t19 = this;
    var r250_xn$capture$2Lrc = _r250_t19;
    var _r250_t0 = r250_xn$capture$2Lrc;
    var r250_metrics = _r250_t0.metrics;
    var r250_xn$NamedParameterPair$2Lrc9b = _r250_t0['$NamedParameterPair$'];
    var r250_xn$donothing$2Lrc0b = _r250_t0['$donothing$'];
    var r250_para = _r250_t0.para;
    var r250_recursive = _r250_t0.recursive;
    var r250_recursiveCodes = _r250_t0.recursiveCodes;
    var r250_variantSelector = _r250_t0.variantSelector;
    var r250_font = _r250_t0.font;
    var r250_glyphs = _r250_t0.glyphs;
    var r250_glyphList = _r250_t0.glyphList;
    var r250_unicodeGlyphs = _r250_t0.unicodeGlyphs;
    var r250_xn$createglyph$7Hrq = _r250_t0['create-glyph'];
    var r250_xn$save$2Lrc5 = _r250_t0['$save$'];
    var r250_xn$saveglyph$5sIl = _r250_t0['save-glyph'];
    var r250_spirofns = _r250_t0.spirofns;
    var r250_markset = _r250_t0.markset;
    var r250_MARK = _r250_t0.MARK;
    var r250_BASE = _r250_t0.BASE;
    var r250_AS_BASE = _r250_t0.AS_BASE;
    var r250_ALSO_METRICS = _r250_t0.ALSO_METRICS;
    var r250_pickHash = _r250_t0.pickHash;
    var r250_dependencyProfile = _r250_t0.dependencyProfile;
    var r250_getDependencyProfile = _r250_t0.getDependencyProfile;
    var r250_buildFont = _r250_t0.buildFont;
    var r250_newtemp = _r250_t0.newtemp;
    var r250_tagged = _r250_t0.tagged;
    var r250_TempFont = _r250_t0.TempFont;
    var r250_includeGlyphPart = _r250_t0.includeGlyphPart;
    var r250_compsiteMarkSet = _r250_t0.compsiteMarkSet;
    var r250_MarksetDiv = _r250_t0.MarksetDiv;
    var r250_DivFrame = _r250_t0.DivFrame;
    var _r250_t1 = r250_metrics;
    var r250_UPM = _r250_t1.UPM;
    var r250_WIDTH = _r250_t1.WIDTH;
    var r250_SB = _r250_t1.SB;
    var r250_CAP = _r250_t1.CAP;
    var r250_XH = _r250_t1.XH;
    var r250_DESCENDER = _r250_t1.DESCENDER;
    var r250_CONTRAST = _r250_t1.CONTRAST;
    var r250_symbolMid = _r250_t1.symbolMid;
    var r250_parenTop = _r250_t1.parenTop;
    var r250_parenBot = _r250_t1.parenBot;
    var r250_operTop = _r250_t1.operTop;
    var r250_operBot = _r250_t1.operBot;
    var r250_tackTop = _r250_t1.tackTop;
    var r250_tackBot = _r250_t1.tackBot;
    var r250_plusTop = _r250_t1.plusTop;
    var r250_plusBot = _r250_t1.plusBot;
    var r250_Italify = _r250_t1.Italify;
    var r250_Upright = _r250_t1.Upright;
    var r250_Scale = _r250_t1.Scale;
    var r250_Translate = _r250_t1.Translate;
    var r250_Rotate = _r250_t1.Rotate;
    var r250_globalTransform = _r250_t1.globalTransform;
    var r250_TANSLANT = _r250_t1.TANSLANT;
    var r250_SINSLANT = _r250_t1.SINSLANT;
    var r250_COSSLANT = _r250_t1.COSSLANT;
    var r250_HVCONTRAST = _r250_t1.HVCONTRAST;
    var r250_UPWARD = _r250_t1.UPWARD;
    var r250_DOWNWARD = _r250_t1.DOWNWARD;
    var r250_RIGHTWARD = _r250_t1.RIGHTWARD;
    var r250_LEFTWARD = _r250_t1.LEFTWARD;
    var r250_Upward = _r250_t1.Upward;
    var r250_Downward = _r250_t1.Downward;
    var r250_Leftward = _r250_t1.Leftward;
    var r250_Rightward = _r250_t1.Rightward;
    var r250_O = _r250_t1.O;
    var r250_OX = _r250_t1.OX;
    var r250_OXHOOK = _r250_t1.OXHOOK;
    var r250_HOOK = _r250_t1.HOOK;
    var r250_AHOOK = _r250_t1.AHOOK;
    var r250_SHOOK = _r250_t1.SHOOK;
    var r250_RHOOK = _r250_t1.RHOOK;
    var r250_JHOOK = _r250_t1.JHOOK;
    var r250_FHOOK = _r250_t1.FHOOK;
    var r250_HOOKX = _r250_t1.HOOKX;
    var r250_SMOOTH = _r250_t1.SMOOTH;
    var r250_SMALLSMOOTH = _r250_t1.SMALLSMOOTH;
    var r250_STROKE = _r250_t1.STROKE;
    var r250_DOTSIZE = _r250_t1.DOTSIZE;
    var r250_PERIODSIZE = _r250_t1.PERIODSIZE;
    var r250_BARPOS = _r250_t1.BARPOS;
    var r250_GBARPOS = _r250_t1.GBARPOS;
    var r250_PBARPOS = _r250_t1.PBARPOS;
    var r250_EBARPOS = _r250_t1.EBARPOS;
    var r250_OVERLAYPOS = _r250_t1.OVERLAYPOS;
    var r250_FIVEBARPOS = _r250_t1.FIVEBARPOS;
    var r250_LONGJUT = _r250_t1.LONGJUT;
    var r250_JUT = _r250_t1.JUT;
    var r250_VJUT = _r250_t1.VJUT;
    var r250_ACCENT = _r250_t1.ACCENT;
    var r250_ACCENTX = _r250_t1.ACCENTX;
    var r250_CTHIN = _r250_t1.CTHIN;
    var r250_CTHINB = _r250_t1.CTHINB;
    var r250_SLAB = _r250_t1.SLAB;
    var r250_TAILADJX = _r250_t1.TAILADJX;
    var r250_TAILADJY = _r250_t1.TAILADJY;
    var r250_LBALANCE = _r250_t1.LBALANCE;
    var r250_IBALANCE = _r250_t1.IBALANCE;
    var r250_LBALANCE2 = _r250_t1.LBALANCE2;
    var r250_IBALANCE2 = _r250_t1.IBALANCE2;
    var r250_JBALANCE = _r250_t1.JBALANCE;
    var r250_JBALANCE2 = _r250_t1.JBALANCE2;
    var r250_TBALANCE = _r250_t1.TBALANCE;
    var r250_TBALANCE2 = _r250_t1.TBALANCE2;
    var r250_RBALANCE = _r250_t1.RBALANCE;
    var r250_RBALANCE2 = _r250_t1.RBALANCE2;
    var r250_FBALANCE = _r250_t1.FBALANCE;
    var r250_ONEBALANCE = _r250_t1.ONEBALANCE;
    var r250_FULLWIDTH = _r250_t1.FULLWIDTH;
    var r250_FULLWIDTH1 = _r250_t1.FULLWIDTH1;
    var r250_FULLWIDTH2 = _r250_t1.FULLWIDTH2;
    var r250_FULLWIDTH3 = _r250_t1.FULLWIDTH3;
    var r250_OXE = _r250_t1.OXE;
    var r250_ESS = _r250_t1.ESS;
    var r250_ESSQUESTION = _r250_t1.ESSQUESTION;
    var r250_XO = _r250_t1.XO;
    var r250_CAPO = _r250_t1.CAPO;
    var r250_HALFSTROKE = _r250_t1.HALFSTROKE;
    var r250_RIGHTSB = _r250_t1.RIGHTSB;
    var r250_FWRSB = _r250_t1.FWRSB;
    var r250_MIDDLE = _r250_t1.MIDDLE;
    var r250_FWMIDDLE = _r250_t1.FWMIDDLE;
    var r250_CAPMIDDLE = _r250_t1.CAPMIDDLE;
    var r250_CAP_SMOOTH = _r250_t1.CAP_SMOOTH;
    var r250_DOTRADIUS = _r250_t1.DOTRADIUS;
    var r250_PERIODRADIUS = _r250_t1.PERIODRADIUS;
    var r250_SIDEJUT = _r250_t1.SIDEJUT;
    var r250_SMOOTHA = _r250_t1.SMOOTHA;
    var r250_SMOOTHB = _r250_t1.SMOOTHB;
    var r250_SMALLSMOOTHA = _r250_t1.SMALLSMOOTHA;
    var r250_SMALLSMOOTHB = _r250_t1.SMALLSMOOTHB;
    var r250_CORRECTION_OMIDX = _r250_t1.CORRECTION_OMIDX;
    var r250_CORRECTION_OMIDS = _r250_t1.CORRECTION_OMIDS;
    var r250_WHITENESS = _r250_t1.WHITENESS;
    var r250_adviceBlackness = _r250_t1.adviceBlackness;
    var r250_adviceBlackness2 = _r250_t1.adviceBlackness2;
    var r250_MVERTSTROKE = _r250_t1.MVERTSTROKE;
    var r250_MVERTSTROKE_D = _r250_t1.MVERTSTROKE_D;
    var r250_OVERLAYSTROKE = _r250_t1.OVERLAYSTROKE;
    var r250_OPERATORSTROKE = _r250_t1.OPERATORSTROKE;
    var r250_GEOMETRYSTROKE = _r250_t1.GEOMETRYSTROKE;
    var r250_SHOULDERFINE = _r250_t1.SHOULDERFINE;
    var r250_SUPERNESS = _r250_t1.SUPERNESS;
    var r250_superxy = _r250_t1.superxy;
    var r250_adviceSSmooth = _r250_t1.adviceSSmooth;
    var r250_adviceGlottalStopSmooth = _r250_t1.adviceGlottalStopSmooth;
    var r250_shoulderMidSlope = _r250_t1.shoulderMidSlope;
    var _r250_t2 = r250_spirofns;
    var r250_g4 = _r250_t2.g4;
    var r250_g2 = _r250_t2.g2;
    var r250_corner = _r250_t2.corner;
    var r250_flat = _r250_t2.flat;
    var r250_curl = _r250_t2.curl;
    var r250_close = _r250_t2.close;
    var r250_end = _r250_t2.end;
    var r250_straight = _r250_t2.straight;
    var r250_widths = _r250_t2.widths;
    var r250_xn$disablegizmo$3qIs = _r250_t2['disable-gizmo'];
    var r250_xn$disablecontrast$3qIs = _r250_t2['disable-contrast'];
    var r250_heading = _r250_t2.heading;
    var r250_unimportant = _r250_t2.unimportant;
    var r250_important = _r250_t2.important;
    var r250_alsothru = _r250_t2.alsothru;
    var r250_alsothruthem = _r250_t2.alsothruthem;
    var r250_bezcontrols = _r250_t2.bezcontrols;
    var r250_quadcontrols = _r250_t2.quadcontrols;
    var r250_archv = _r250_t2.archv;
    var r250_arcvh = _r250_t2.arcvh;
    var r250_complexThru = _r250_t2.complexThru;
    var r250_dispiro = _r250_t2.dispiro;
    var r250_xn$spirooutline$1aao = _r250_t2['spiro-outline'];
    var r250_union = _r250_t2.union;
    var r250_intersection = _r250_t2.intersection;
    var r250_difference = _r250_t2.difference;
    var _r250_t3 = r250_xn$capture$2Lrc.commonShapes;
    var r250_queryFeatureSelector = _r250_t3.queryFeatureSelector;
    var r250_xn$selectvariant$7Hrq = _r250_t3['select-variant'];
    var r250_xn$italicvariant$7Hrq = _r250_t3['italic-variant'];
    var r250_alias = _r250_t3.alias;
    var r250_composite = _r250_t3.composite;
    var r250_xn$intounicode$5sIl = _r250_t3['into-unicode'];
    var r250_turned = _r250_t3.turned;
    var r250_hcombine = _r250_t3.hcombine;
    var r250_vcombine = _r250_t3.vcombine;
    var r250_dual = _r250_t3.dual;
    var r250_vdual = _r250_t3.vdual;
    var r250_fwl = _r250_t3.fwl;
    var r250_fwr = _r250_t3.fwr;
    var r250_dwl = _r250_t3.dwl;
    var r250_dwr = _r250_t3.dwr;
    var r250_dwc = _r250_t3.dwc;
    var r250_Rect = _r250_t3.Rect;
    var r250_Ring = _r250_t3.Ring;
    var r250_RingAt = _r250_t3.RingAt;
    var r250_DotAt = _r250_t3.DotAt;
    var r250_CircleRing = _r250_t3.CircleRing;
    var r250_CircleRingAt = _r250_t3.CircleRingAt;
    var r250_CircleDotAt = _r250_t3.CircleDotAt;
    var r250_OShape = _r250_t3.OShape;
    var r250_OShapeOutline = _r250_t3.OShapeOutline;
    var r250_OBarLeftShape = _r250_t3.OBarLeftShape;
    var r250_OBarRightShape = _r250_t3.OBarRightShape;
    var r250_LeftwardTopSerif = _r250_t3.LeftwardTopSerif;
    var r250_LeftwardBottomSerif = _r250_t3.LeftwardBottomSerif;
    var r250_RightwardTopSerif = _r250_t3.RightwardTopSerif;
    var r250_RightwardBottomSerif = _r250_t3.RightwardBottomSerif;
    var r250_CenterTopSerif = _r250_t3.CenterTopSerif;
    var r250_CenterBottomSerif = _r250_t3.CenterBottomSerif;
    var r250_DownwardRightSerif = _r250_t3.DownwardRightSerif;
    var r250_UpwardRightSerif = _r250_t3.UpwardRightSerif;
    var r250_DownwardLeftSerif = _r250_t3.DownwardLeftSerif;
    var r250_UpwardLeftSerif = _r250_t3.UpwardLeftSerif;
    var r250_AIVSerifs = _r250_t3.AIVSerifs;
    var r250_AIHSerifs = _r250_t3.AIHSerifs;
    var r250_AINSerifs = _r250_t3.AINSerifs;
    var r250_AICyrISerifs = _r250_t3.AICyrISerifs;
    var r250_AIMSerifs = _r250_t3.AIMSerifs;
    var r250_halfXStrand = _r250_t3.halfXStrand;
    var r250_xStrand = _r250_t3.xStrand;
    var r250_nShoulderKnots = _r250_t3.nShoulderKnots;
    var r250_nShoulder = _r250_t3.nShoulder;
    var r250_mShoulderSpiro = _r250_t3.mShoulderSpiro;
    var r250_HBar = _r250_t3.HBar;
    var r250_HBarTop = _r250_t3.HBarTop;
    var r250_HBarBottom = _r250_t3.HBarBottom;
    var r250_HOverlayBar = _r250_t3.HOverlayBar;
    var r250_VBar = _r250_t3.VBar;
    var r250_VBarLeft = _r250_t3.VBarLeft;
    var r250_VBarRight = _r250_t3.VBarRight;
    var r250_VerticalHook = _r250_t3.VerticalHook;
    var r250_LegShape = _r250_t3.LegShape;
    var r250_LeftHook = _r250_t3.LeftHook;
    var r250_HooktopLeftBar = _r250_t3.HooktopLeftBar;
    var r250_CurlyTail = _r250_t3.CurlyTail;
    var r250_HCurlyTail = _r250_t3.HCurlyTail;
    var r250_FlatSlashShape = _r250_t3.FlatSlashShape;
    var r250_determineMixR = _r250_t3.determineMixR;
    var r250_HookShape = _r250_t3.HookShape;
    var r250_hookstart = _r250_t3.hookstart;
    var r250_hookend = _r250_t3.hookend;
    var r250_CyrDescender = _r250_t3.CyrDescender;
    var r250_refair = _r250_t3.refair;
    var r250_Fork = _r250_t3.Fork;
    var r250_Miniature = _r250_t3.Miniature;
    var r250_Thinner = _r250_t3.Thinner;
    var r250_Widen = _r250_t3.Widen;
    var r250_FlipAround = _r250_t3.FlipAround;
    var r250_ScaleAround = _r250_t3.ScaleAround;
    var r250_Realign = _r250_t3.Realign;
    var r250_ForceUpright = _r250_t3.ForceUpright;
    var r250_Overlay = _r250_t3.Overlay;
    var r250_diagCor = _r250_t3.diagCor;
    var _r250_t4 = r250_xn$capture$2Lrc.overmarks;
    var r250_markExtend = _r250_t4.markExtend;
    var r250_markHalfStroke = _r250_t4.markHalfStroke;
    var r250_markStress = _r250_t4.markStress;
    var r250_markFine = _r250_t4.markFine;
    var r250_markMiddle = _r250_t4.markMiddle;
    var r250_markDotsRadius = _r250_t4.markDotsRadius;
    var r250_aboveMarkTop = _r250_t4.aboveMarkTop;
    var r250_aboveMarkBot = _r250_t4.aboveMarkBot;
    var r250_aboveMarkMid = _r250_t4.aboveMarkMid;
    var r250_belowMarkBot = _r250_t4.belowMarkBot;
    var r250_belowMarkTop = _r250_t4.belowMarkTop;
    var r250_commaOvershoot = _r250_t4.commaOvershoot;
    var r250_commaOvershoot2 = _r250_t4.commaOvershoot2;
    var r250_commaAboveRadius = _r250_t4.commaAboveRadius;
    var r250_TildeShape = _r250_t4.TildeShape;
    var _r250_t5 = function () {
        (function _r253_t0() {
            var _r255_t0 = this;
            var r255_currentGlyph = _r255_t0;
            if (!r255_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.1')
                r250_glyphList.pop();
            var r255_df = r250_DivFrame(r250_para.diversityI);
            r255_currentGlyph['set-width'](r255_df.width);
            r255_currentGlyph.include(r255_df.markSet.capital);
            r255_currentGlyph.include(r250_VBar(r255_df.middle, 0, r250_CAP));
            r255_currentGlyph.cmpPriority = -2;
            r250_xn$save$2Lrc5.call(r255_currentGlyph, 'I.straight');
            r250_dependencyProfile[r255_currentGlyph.name] = r250_getDependencyProfile(r255_currentGlyph);
            return r255_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.1', r250_xn$donothing$2Lrc0b)));
        (function _r253_t1() {
            var _r261_t0 = this;
            var r261_currentGlyph = _r261_t0;
            if (!r261_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.2')
                r250_glyphList.pop();
            var r261_df = r250_DivFrame(r250_para.diversityII);
            r261_currentGlyph['set-width'](r261_df.width);
            r261_currentGlyph.include(r261_df.markSet.capital);
            r261_currentGlyph.include(r250_VBar(r261_df.middle, 0, r250_CAP));
            r261_currentGlyph.cmpPriority = -2;
            r250_xn$save$2Lrc5.call(r261_currentGlyph, 'I.line');
            r250_dependencyProfile[r261_currentGlyph.name] = r250_getDependencyProfile(r261_currentGlyph);
            return r261_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.2', r250_xn$donothing$2Lrc0b)));
        var r253_ISerifShape = function _r253_t2(r266_top) {
            return function _r266_t2() {
                var _r268_t0 = this;
                var r268_currentGlyph = _r268_t0;
                var r268_df = r250_DivFrame(r250_para.diversityI);
                r268_currentGlyph.include(r250_VBar(r268_df.middle, 0, r266_top));
                r268_currentGlyph.include(r250_CenterBottomSerif(r268_df.middle, 0, r250_LONGJUT * Math.max(r268_df.div, 0.8)));
                r268_currentGlyph.include(r250_CenterTopSerif(r268_df.middle, r266_top, r250_LONGJUT * Math.max(r268_df.div, 0.8)));
                return void 0;
            };
        };
        (function _r253_t3() {
            var _r273_t0 = this;
            var r273_currentGlyph = _r273_t0;
            if (!r273_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.3')
                r250_glyphList.pop();
            var r273_df = r250_DivFrame(r250_para.diversityI);
            r273_currentGlyph['set-width'](r273_df.width);
            r273_currentGlyph.include(r273_df.markSet.capital);
            r273_currentGlyph.include(r253_ISerifShape(r250_CAP));
            r250_xn$save$2Lrc5.call(r273_currentGlyph, 'I.serifed');
            r250_dependencyProfile[r273_currentGlyph.name] = r250_getDependencyProfile(r273_currentGlyph);
            return r273_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.3', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('I', 'I');
        r250_alias('Iota', 921, 'I');
        r250_alias('cyrUkrainianI', 1030, 'I');
        r250_alias('Palochka', 1216, 'I');
        (function _r253_t4() {
            var _r279_t0 = this;
            var r279_currentGlyph = _r279_t0;
            if (!r279_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.4')
                r250_glyphList.pop();
            var r279_df = r250_DivFrame(r250_para.diversityI);
            r279_currentGlyph.include(r279_df.markSet.e);
            r279_currentGlyph['set-width'](r279_df.width);
            r279_currentGlyph.include(r253_ISerifShape(r250_XH));
            r250_xn$save$2Lrc5.call(r279_currentGlyph, 'smcpI', 618);
            r250_dependencyProfile[r279_currentGlyph.name] = r250_getDependencyProfile(r279_currentGlyph);
            return r279_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.4', r250_xn$donothing$2Lrc0b)));
        return [r253_ISerifShape];
    }();
    var r250_ISerifShape = _r250_t5[0];
    var _r250_t6 = function () {
        var r285_fs, r285_fs_i, r285_k, r285_gid, _r285_t0, _r285_t1, _r285_t2;
        var r285_IotaShape = function _r285_t3(r286_top) {
            return function _r286_t2() {
                var _r288_t0 = this;
                var r288_currentGlyph = _r288_t0;
                var r288_df = r250_DivFrame(r250_para.diversityI);
                var r288_middle = r288_df.middle;
                r288_currentGlyph['set-anchor']('above', r250_BASE, r288_middle, r286_top);
                r288_currentGlyph.include(r250_tagged('serifLT', r250_LeftwardTopSerif(r288_middle, r286_top, r250_LONGJUT * r288_df.div)));
                r288_currentGlyph.include(r250_dispiro(r250_widths.center(), r250_flat(r288_middle, r286_top, r250_heading(r250_DOWNWARD)), r250_curl(r288_middle, r250_HOOK), r250_arcvh(), r250_flat(r288_middle + r250_HOOK - r250_HALFSTROKE, r250_HALFSTROKE), r250_curl(r288_middle + Math.max(r250_HOOKX, r250_LONGJUT * 1.05 * r288_df.div), r250_HALFSTROKE, r250_heading(r250_RIGHTWARD))));
                return void 0;
            };
        };
        (function _r285_t4() {
            var _r293_t0 = this;
            var r293_currentGlyph = _r293_t0;
            if (!r293_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.5')
                r250_glyphList.pop();
            var r293_df = r250_DivFrame(r250_para.diversityI);
            r293_currentGlyph['set-width'](r293_df.width);
            r293_currentGlyph.include(r293_df.markSet.e);
            r293_currentGlyph.include(r285_IotaShape(r250_XH));
            r250_xn$save$2Lrc5.call(r293_currentGlyph, 'iota', 953);
            r250_xn$save$2Lrc5.call(r293_currentGlyph, 'latiniota', 617);
            r250_dependencyProfile[r293_currentGlyph.name] = r250_getDependencyProfile(r293_currentGlyph);
            return r293_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.5', r250_xn$donothing$2Lrc0b)));
        (function _r285_t5() {
            var _r300_t0 = this;
            var r300_currentGlyph = _r300_t0;
            if (!r300_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.6')
                r250_glyphList.pop();
            var r300_df = r250_DivFrame(r250_para.diversityI);
            r300_currentGlyph['set-width'](r300_df.width);
            r300_currentGlyph.include(r300_df.markSet.capital);
            r300_currentGlyph.include(r285_IotaShape(r250_CAP));
            r250_xn$save$2Lrc5.call(r300_currentGlyph, 'latinIota', 406);
            r250_dependencyProfile[r300_currentGlyph.name] = r250_getDependencyProfile(r300_currentGlyph);
            return r300_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.6', r250_xn$donothing$2Lrc0b)));
        (function _r285_t6() {
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            if (!r306_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.7')
                r250_glyphList.pop();
            var r306_df = r250_DivFrame(r250_para.diversityI);
            r306_currentGlyph['set-width'](r306_df.width);
            r306_currentGlyph.include(r306_df.markSet.e);
            r306_currentGlyph.include(r250_VBar(r306_df.middle, 0, r250_XH));
            r306_currentGlyph.cmpPriority = -2;
            r250_xn$save$2Lrc5.call(r306_currentGlyph, 'dotlessi.straight');
            r250_dependencyProfile[r306_currentGlyph.name] = r250_getDependencyProfile(r306_currentGlyph);
            return r306_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.7', r250_xn$donothing$2Lrc0b)));
        (function _r285_t7() {
            var _r312_t0 = this;
            var r312_currentGlyph = _r312_t0;
            if (!r312_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.8')
                r250_glyphList.pop();
            var r312_df = r250_DivFrame(r250_para.diversityI);
            r312_currentGlyph['set-width'](r312_df.width);
            r312_currentGlyph.include(r312_df.markSet.e);
            var r312_balance = r250_IBALANCE2 * r312_df.div * r312_df.div;
            r312_currentGlyph.include(r250_VBar(r312_df.middle + r312_balance, 0, r250_XH));
            r312_currentGlyph.include(r250_LeftwardTopSerif(r312_df.middle + r312_balance, r250_XH, r250_LONGJUT * r312_df.div));
            r250_xn$save$2Lrc5.call(r312_currentGlyph, 'dotlessi.hooky');
            r250_dependencyProfile[r312_currentGlyph.name] = r250_getDependencyProfile(r312_currentGlyph);
            return r312_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.8', r250_xn$donothing$2Lrc0b)));
        (function _r285_t8() {
            var _r319_t0 = this;
            var r319_currentGlyph = _r319_t0;
            if (!r319_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.9')
                r250_glyphList.pop();
            var r319_df = r250_DivFrame(r250_para.diversityI);
            r319_currentGlyph['set-width'](r319_df.width);
            r319_currentGlyph.include(r319_df.markSet.e);
            r319_currentGlyph.include(r250_VBar(r319_df.middle, 0, r250_XH));
            r319_currentGlyph.include(r250_LeftwardTopSerif(r319_df.middle, r250_XH, r250_LONGJUT * r319_df.div));
            r319_currentGlyph.include(r250_RightwardBottomSerif(r319_df.middle, 0, r250_LONGJUT * r319_df.div));
            r250_xn$save$2Lrc5.call(r319_currentGlyph, 'dotlessi.zshaped');
            r250_dependencyProfile[r319_currentGlyph.name] = r250_getDependencyProfile(r319_currentGlyph);
            return r319_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.9', r250_xn$donothing$2Lrc0b)));
        (function _r285_t9() {
            var _r327_t0 = this;
            var r327_currentGlyph = _r327_t0;
            if (!r327_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.10')
                r250_glyphList.pop();
            var r327_df = r250_DivFrame(r250_para.diversityII);
            r327_currentGlyph['set-width'](r327_df.width);
            r327_currentGlyph.include(r327_df.markSet.e);
            r327_currentGlyph.include(r250_VBar(r327_df.middle, 0, r250_XH));
            r250_xn$save$2Lrc5.call(r327_currentGlyph, 'dotlessi.line');
            r250_dependencyProfile[r327_currentGlyph.name] = r250_getDependencyProfile(r327_currentGlyph);
            return r327_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.10', r250_xn$donothing$2Lrc0b)));
        (function _r285_t10() {
            var _r333_t0 = this;
            var r333_currentGlyph = _r333_t0;
            if (!r333_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.11')
                r250_glyphList.pop();
            var r333_df = r250_DivFrame(r250_para.diversityI);
            r333_currentGlyph['set-width'](r333_df.width);
            r333_currentGlyph.include(r333_df.markSet.e);
            var r333_balance = r250_IBALANCE * r333_df.div * r333_df.div;
            r333_currentGlyph.include(r250_VBar(r333_df.middle + r333_balance, 0, r250_XH));
            r333_currentGlyph.include(r250_LeftwardTopSerif(r333_df.middle + r333_balance, r250_XH, r250_LONGJUT * r333_df.div - r333_balance));
            r333_currentGlyph.include(r250_RightwardBottomSerif(r333_df.middle, 0, r250_LONGJUT * r333_df.div));
            r333_currentGlyph.include(r250_LeftwardBottomSerif(r333_df.middle, 0, r250_LONGJUT * r333_df.div));
            r250_xn$save$2Lrc5.call(r333_currentGlyph, 'dotlessi.serifed');
            r250_dependencyProfile[r333_currentGlyph.name] = r250_getDependencyProfile(r333_currentGlyph);
            return r333_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.11', r250_xn$donothing$2Lrc0b)));
        (function _r285_t11() {
            var r342_shift, r342_left, r342_right, r342_rightTerm, r342_middle;
            var _r342_t0 = this;
            var r342_currentGlyph = _r342_t0;
            if (!r342_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.12')
                r250_glyphList.pop();
            var r342_df = r250_DivFrame(r250_para.diversityI);
            r342_currentGlyph['set-width'](r342_df.width);
            r342_currentGlyph.include(r342_df.markSet.e);
            if (r250_para.isItalic) {
                r342_shift = (1 - r342_df.div) * 0.2;
                r342_left = r1_mix(r250_SB, r342_df.rightSB, r1_linreg(18, 0.42, 126, 0.46, r250_STROKE) - r342_shift) - r250_HALFSTROKE * r250_HVCONTRAST;
                r342_right = r1_mix(r250_SB, r342_df.rightSB, 1.1 - r342_shift);
                r342_rightTerm = Math.max(r342_right, r342_left + r250_HOOKX + r250_STROKE);
                r342_middle = r1_mix(r342_left, r342_right, 0.55 * r342_df.div);
                r342_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r342_left, r250_XH, r250_heading(r250_DOWNWARD)), r250_curl(r342_left, r250_SMALLSMOOTHB * 0.8), r250_hookend(r250_O), r250_g4(r342_rightTerm, r250_HOOK * r1_linreg(18, 0.85, 126, 1, r250_STROKE) * r342_df.div)));
                r342_currentGlyph.include(r250_dispiro(r250_flat(r342_left - r250_LONGJUT * r342_df.div + r250_HALFSTROKE * r250_HVCONTRAST, r250_XH, r250_widths(0, r250_STROKE)), r250_curl(r342_left, r250_XH)));
                r342_currentGlyph['set-anchor']('above', r250_BASE, r342_left + r250_HALFSTROKE * r250_HVCONTRAST + r1_linreg(18, 0.25, 126, 0, r250_STROKE) * r250_TANSLANT * r342_df.width, r250_XH);
                r342_currentGlyph['set-anchor']('below', r250_BASE, r342_middle, 0);
            } else
                r342_currentGlyph.include(r285_IotaShape(r250_XH));
            r250_xn$save$2Lrc5.call(r342_currentGlyph, 'dotlessi.italic');
            r250_dependencyProfile[r342_currentGlyph.name] = r250_getDependencyProfile(r342_currentGlyph);
            return r342_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.12', r250_xn$donothing$2Lrc0b)));
        var r285_TailedIShape = function _r285_t12(r351_df, r351_top) {
            return function _r351_t2() {
                var _r353_t0 = this;
                var r353_currentGlyph = _r353_t0;
                var r353_middle = r351_df.middle - r250_LBALANCE2;
                var r353_x0 = r250_HALFSTROKE + (r250_HOOK - r250_STROKE + 1) * 0.85 * r351_df.div + r250_LBALANCE2;
                var r353_x1 = Math.max(r250_HOOK - r250_HALFSTROKE + 1, r250_LONGJUT * r351_df.div) + r250_LBALANCE2;
                r353_currentGlyph.include(r250_dispiro(r250_widths.center(), r250_flat(r353_middle, r351_top, r250_heading(r250_DOWNWARD)), r250_curl(r353_middle, r250_HOOK), r250_arcvh(), r250_g4.right.mid(r353_middle + r353_x0, r250_HALFSTROKE + r250_O, r250_heading(r250_RIGHTWARD)), r250_g4(r353_middle + r353_x1, r250_HALFSTROKE - r250_O, r250_heading(r250_RIGHTWARD))));
                r353_currentGlyph['set-anchor']('above', r250_BASE, r353_middle, r351_top);
                r353_currentGlyph['set-anchor']('below', r250_BASE, r353_middle, 0);
                r353_currentGlyph['set-anchor']('overlay', r250_BASE, r353_middle, r351_top * r250_OVERLAYPOS);
                r353_currentGlyph['set-anchor']('topright', r250_BASE, r353_middle + r250_RIGHTSB - r250_MIDDLE, r351_top);
                return void 0;
            };
        };
        (function _r285_t13() {
            var _r360_t0 = this;
            var r360_currentGlyph = _r360_t0;
            if (!r360_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.13')
                r250_glyphList.pop();
            var r360_df = r250_DivFrame(r250_para.diversityI);
            r360_currentGlyph['set-width'](r360_df.width);
            r360_currentGlyph.include(r360_df.markSet.b);
            r360_currentGlyph.include(r285_TailedIShape(r360_df, r250_XH));
            r250_xn$save$2Lrc5.call(r360_currentGlyph, 'dotlessi.tailed');
            r250_dependencyProfile[r360_currentGlyph.name] = r250_getDependencyProfile(r360_currentGlyph);
            return r360_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.13', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('dotlessi', 305);
        (function _r285_t14() {
            var _r366_t0 = this;
            var r366_currentGlyph = _r366_t0;
            if (!r366_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.14')
                r250_glyphList.pop();
            r250_includeGlyphPart(r366_currentGlyph, r250_glyphs, 'dotlessi', r250_AS_BASE);
            r250_includeGlyphPart(r366_currentGlyph, r250_glyphs, 'ogonekBelow');
            r250_xn$save$2Lrc5.call(r366_currentGlyph, 'iogonek.dotless');
            r250_dependencyProfile[r366_currentGlyph.name] = r250_getDependencyProfile(r366_currentGlyph);
            return r366_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.14', r250_xn$donothing$2Lrc0b)));
        r250_composite('i', r250_glyphs.dotlessi, r250_glyphs.dotAbove, r250_xn$intounicode$5sIl('i'));
        if (r250_glyphs.i && r250_glyphs.dotlessi) {
            r285_fs = r250_queryFeatureSelector('dotlessi', r250_para);
            r285_fs_i = r250_queryFeatureSelector('dotlessi', r250_para, 'i');
            _r285_t0 = _r1_t2(r285_fs)[Symbol.iterator]();
            _r285_t1 = void 0;
            for (; !(_r285_t1 = _r285_t0.next()).done; r250_composite(r285_fs_i[r285_k], r250_glyphs[r285_gid], r250_glyphs.dotAbove)) {
                _r285_t2 = _r285_t1.value;
                r285_k = _r285_t2[0];
                r285_gid = _r285_t2[1];
            }
            r250_glyphs.i.featureSelector = r285_fs_i;
        }
        r250_alias('cyrUkrainiani', 1110, 'i');
        r250_turned(void 0, 7433, 'i', r250_MIDDLE * r250_para.diversityI, r250_XH / 2, r250_markset.p);
        return [
            r285_IotaShape,
            r285_TailedIShape
        ];
    }();
    var r250_IotaShape = _r250_t6[0];
    var r250_TailedIShape = _r250_t6[1];
    (function () {
        (function _r375_t0() {
            var _r377_t0 = this;
            var r377_currentGlyph = _r377_t0;
            if (!r377_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.15')
                r250_glyphList.pop();
            r377_currentGlyph['set-width'](r250_WIDTH);
            r377_currentGlyph.include(r250_markset.capital);
            r377_currentGlyph['set-anchor']('above', r250_BASE, r250_RIGHTSB - r250_STROKE * r250_HVCONTRAST * 0.75 - r250_JBALANCE2, r250_CAP);
            r377_currentGlyph['set-anchor']('overlay', r250_BASE, r250_RIGHTSB - r250_STROKE * r250_HVCONTRAST * 0.75 - r250_JBALANCE2, r250_CAP * r250_OVERLAYPOS);
            var r377_slope = r250_STROKE * 0.00092;
            var r377_expand = 0.35;
            var r377_coexpand = (1 - r377_expand) / 2;
            var r377_hookx = 0.75 * r250_SB;
            r377_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r250_RIGHTSB - r250_JBALANCE2, r250_CAP, r250_heading(r250_DOWNWARD)), r250_curl(r250_RIGHTSB - r250_JBALANCE2, r250_SMOOTH), r250_hookend(r250_O), r250_g4(r377_hookx, r250_HOOK)));
            r250_xn$save$2Lrc5.call(r377_currentGlyph, 'J.straight');
            r250_dependencyProfile[r377_currentGlyph.name] = r250_getDependencyProfile(r377_currentGlyph);
            return r377_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.15', r250_xn$donothing$2Lrc0b)));
        (function _r375_t1() {
            var _r385_t0 = this;
            var r385_currentGlyph = _r385_t0;
            if (!r385_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.16')
                r250_glyphList.pop();
            r385_currentGlyph['set-width'](r250_WIDTH);
            r385_currentGlyph.include(r250_markset.capital);
            var r385_slope = r250_STROKE * 0.00092;
            var r385_expand = 0.35;
            var r385_coexpand = (1 - r385_expand) / 2;
            var r385_smooth = r250_HOOK + 0.75 * r250_STROKE;
            var r385_hookx = 0.5 * r250_SB;
            r385_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r250_RIGHTSB - r250_JBALANCE2, r250_CAP, r250_heading(r250_DOWNWARD)), r250_curl(r250_RIGHTSB - r250_JBALANCE2, r385_smooth), r250_straight.left.end(r1_mix(r250_SB, r250_RIGHTSB, 0.3), r250_O, r250_heading(r250_LEFTWARD))));
            r250_xn$save$2Lrc5.call(r385_currentGlyph, 'J.shorthook');
            r250_dependencyProfile[r385_currentGlyph.name] = r250_getDependencyProfile(r385_currentGlyph);
            return r385_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.16', r250_xn$donothing$2Lrc0b)));
        (function _r375_t2() {
            var _r391_t0 = this;
            var r391_currentGlyph = _r391_t0;
            if (!r391_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.17')
                r250_glyphList.pop();
            r391_currentGlyph['set-width'](r250_WIDTH);
            r250_includeGlyphPart(r391_currentGlyph, r250_glyphs, 'J.straight', r250_AS_BASE);
            r391_currentGlyph.include(r250_LeftwardTopSerif(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST - r250_JBALANCE2, r250_CAP, r250_LONGJUT));
            r250_xn$save$2Lrc5.call(r391_currentGlyph, 'J.serifed');
            r250_dependencyProfile[r391_currentGlyph.name] = r250_getDependencyProfile(r391_currentGlyph);
            return r391_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.17', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('J', 'J');
        r250_alias('cyrJe', 1032, 'J');
        return r250_alias('grkJ', 895, 'J');
    }());
    (function () {
        var r397_fs, r397_fs_j, r397_k, r397_gid, _r397_t0, _r397_t1, _r397_t2;
        (function _r397_t3() {
            var _r399_t0 = this;
            var r399_currentGlyph = _r399_t0;
            if (!r399_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.18')
                r250_glyphList.pop();
            r399_currentGlyph.include(r250_markset.p);
            var r399_center = r250_MIDDLE + r250_JBALANCE + r250_HALFSTROKE * r250_HVCONTRAST;
            r399_currentGlyph['set-anchor']('above', r250_BASE, r399_center - r250_HVCONTRAST * r250_HALFSTROKE, r250_XH);
            r399_currentGlyph['set-anchor']('overlay', r250_BASE, r399_center - r250_HVCONTRAST * r250_HALFSTROKE, r250_XH / 2);
            var r399_hookx = r399_center - r250_WIDTH * 0.5 - r250_STROKE * r250_HVCONTRAST + r250_OXHOOK;
            var r399_turn = r1_mix(r399_center, r399_hookx, 0.5) + r250_CORRECTION_OMIDS;
            r399_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r399_center, r250_XH, r250_heading(r250_DOWNWARD)), r250_curl(r399_center, r250_DESCENDER + r250_SMOOTHA), r250_hookend(r250_DESCENDER + r250_O), r250_g4(r399_hookx, r250_DESCENDER + r250_JHOOK)));
            r250_xn$save$2Lrc5.call(r399_currentGlyph, 'dotlessj.straight');
            r250_dependencyProfile[r399_currentGlyph.name] = r250_getDependencyProfile(r399_currentGlyph);
            return r399_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.18', r250_xn$donothing$2Lrc0b)));
        (function _r397_t4() {
            var _r406_t0 = this;
            var r406_currentGlyph = _r406_t0;
            if (!r406_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.19')
                r250_glyphList.pop();
            r406_currentGlyph.include(r250_markset.p);
            r406_currentGlyph.include(r250_VBar(r250_MIDDLE, r250_DESCENDER, r250_XH));
            r250_xn$save$2Lrc5.call(r406_currentGlyph, 'dotlessj.line');
            r250_dependencyProfile[r406_currentGlyph.name] = r250_getDependencyProfile(r406_currentGlyph);
            return r406_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.19', r250_xn$donothing$2Lrc0b)));
        (function _r397_t5() {
            var _r411_t0 = this;
            var r411_currentGlyph = _r411_t0;
            if (!r411_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.20')
                r250_glyphList.pop();
            r411_currentGlyph.include(r250_markset.p);
            r250_includeGlyphPart(r411_currentGlyph, r250_glyphs, 'dotlessj.straight', r250_AS_BASE);
            r411_currentGlyph.include(r250_LeftwardTopSerif(r250_MIDDLE + r250_JBALANCE, r250_XH, r250_LONGJUT));
            r411_currentGlyph['set-anchor']('above', r250_BASE, r250_MIDDLE + r250_JBALANCE - r250_STROKE * 0.166 * r250_HVCONTRAST, r250_XH);
            r411_currentGlyph['set-anchor']('overlay', r250_BASE, r250_MIDDLE + r250_JBALANCE - r250_STROKE * 0.166 * r250_HVCONTRAST, r250_XH / 2);
            r250_xn$save$2Lrc5.call(r411_currentGlyph, 'dotlessj.serifed');
            r250_dependencyProfile[r411_currentGlyph.name] = r250_getDependencyProfile(r411_currentGlyph);
            return r411_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.20', r250_xn$donothing$2Lrc0b)));
        (function _r397_t6() {
            var _r419_t0 = this;
            var r419_currentGlyph = _r419_t0;
            if (!r419_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.21')
                r250_glyphList.pop();
            var r419_df = r250_DivFrame(r250_para.diversityII);
            r419_currentGlyph['set-width'](r419_df.width);
            r419_currentGlyph.include(r419_df.markSet.p);
            var r419_crossLeft = r1_mix(0, r250_SB, 1 / 2);
            var r419_crossRight = r1_mix(r419_df.width, r419_df.rightSB, 1 / 2);
            var r419_terminal = r419_crossLeft - r250_OX * 2;
            var r419_bar = r419_df.middle + r250_HALFSTROKE * r250_HVCONTRAST;
            var r419_tTurn = Math.max(r250_HOOK * 0.9, r250_STROKE * 1.5, Math.min(r250_HOOK, r250_STROKE * 1.75));
            r419_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(Math.min(r419_terminal, r419_bar - r419_tTurn - Math.max(r250_STROKE / 3, r419_df.width / 6)), r250_DESCENDER), r250_curl(r419_bar - r419_tTurn, r250_DESCENDER), r250_archv(), r250_flat(r419_bar, r250_DESCENDER + r419_tTurn), r250_curl(r419_bar, r250_XH, r250_heading(r250_UPWARD))));
            r419_currentGlyph['set-anchor']('above', r250_BASE, r419_df.middle, r250_XH);
            r419_currentGlyph['set-anchor']('overlay', r250_BASE, r419_df.middle, r250_XH / 2);
            r250_xn$save$2Lrc5.call(r419_currentGlyph, 'dotlessj.narrow');
            r250_dependencyProfile[r419_currentGlyph.name] = r250_getDependencyProfile(r419_currentGlyph);
            return r419_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.21', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('dotlessj', 567);
        r250_composite('j', r250_glyphs.dotlessj, r250_glyphs.dotAbove, r250_xn$intounicode$5sIl('j'));
        if (r250_glyphs.j && r250_glyphs.dotlessj) {
            r397_fs = r250_queryFeatureSelector('dotlessj', r250_para);
            r397_fs_j = r250_queryFeatureSelector('dotlessj', r250_para, 'j');
            _r397_t0 = _r1_t2(r397_fs)[Symbol.iterator]();
            _r397_t1 = void 0;
            for (; !(_r397_t1 = _r397_t0.next()).done; r250_composite(r397_fs_j[r397_k], r250_glyphs[r397_gid], r250_glyphs.dotAbove)) {
                _r397_t2 = _r397_t1.value;
                r397_k = _r397_t2[0];
                r397_gid = _r397_t2[1];
            }
            r250_glyphs.j.featureSelector = r397_fs_j;
        }
        r250_alias('grkj', 1011, 'j');
        r250_alias('cyrje', 1112, 'j');
        return function _r397_t7() {
            var _r430_t0 = this;
            var r430_currentGlyph = _r430_t0;
            if (!r430_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.22')
                r250_glyphList.pop();
            r430_currentGlyph.include(r250_markset.p);
            r430_currentGlyph['set-anchor']('above', r250_BASE, r250_MIDDLE + r250_JBALANCE, r250_XH);
            var r430_fine = r250_adviceBlackness(3.5);
            var r430_rinner = r250_LONGJUT / 2 - r430_fine / 2;
            var r430_m1 = r250_MIDDLE - r250_HALFSTROKE * r250_HVCONTRAST + r250_JBALANCE;
            var r430_x2 = r1_mix(r250_RIGHTSB, r430_m1, 0.25);
            var r430_y2 = r250_DESCENDER + r250_O;
            r430_currentGlyph.include(r250_LeftwardTopSerif(r250_MIDDLE + r250_JBALANCE, r250_XH, r250_LONGJUT));
            r430_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r430_m1, r250_XH, r250_heading(r250_DOWNWARD)), r250_curl(r430_m1, r250_DESCENDER + r430_fine + r430_rinner * 2), r250_CurlyTail(r430_fine, r430_rinner, r430_m1, r250_DESCENDER, r430_m1 - r250_LONGJUT, r430_x2, r430_y2)));
            r250_includeGlyphPart(r430_currentGlyph, r250_glyphs, 'dotAbove');
            r250_xn$save$2Lrc5.call(r430_currentGlyph, 'jcurlytail', 669);
            r250_dependencyProfile[r430_currentGlyph.name] = r250_getDependencyProfile(r430_currentGlyph);
            return r430_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.22', r250_xn$donothing$2Lrc0b));
    }());
    var _r250_t7 = function () {
        var r438_LShape = function _r438_t0(r439_top) {
            return function _r439_t2() {
                var _r441_t0 = this;
                var r441_currentGlyph = _r441_t0;
                r441_currentGlyph.include(r250_VBarLeft(r250_SB * 1.5, 0, r439_top));
                r441_currentGlyph.include(r250_HBarBottom(r250_SB * 1.5 - r250_O, r250_RIGHTSB - r250_OX, 0));
                if (r250_SLAB) {
                    r441_currentGlyph.include(r250_LeftwardBottomSerif(r250_SB * 1.5, 0, r250_SIDEJUT));
                    r441_currentGlyph.include(r250_CenterTopSerif(r250_SB * 1.5 + r250_HVCONTRAST * r250_HALFSTROKE, r439_top, r250_JUT));
                    r441_currentGlyph.include(r250_UpwardRightSerif(r250_RIGHTSB - r250_OX, 0, r250_VJUT));
                }
                return void 0;
            };
        };
        (function _r438_t1() {
            var _r448_t0 = this;
            var r448_currentGlyph = _r448_t0;
            if (!r448_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.23')
                r250_glyphList.pop();
            r448_currentGlyph['set-width'](r250_WIDTH);
            r448_currentGlyph.include(r250_markset.capital);
            r448_currentGlyph.include(r438_LShape(r250_CAP));
            r250_xn$save$2Lrc5.call(r448_currentGlyph, 'L', 'L');
            r250_dependencyProfile[r448_currentGlyph.name] = r250_getDependencyProfile(r448_currentGlyph);
            return r448_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.23', r250_xn$donothing$2Lrc0b)));
        r250_turned('turnL', 42880, 'L', r250_MIDDLE, r250_CAP / 2);
        (function _r438_t2() {
            var _r454_t0 = this;
            var r454_currentGlyph = _r454_t0;
            if (!r454_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.24')
                r250_glyphList.pop();
            r250_includeGlyphPart(r454_currentGlyph, r250_glyphs, 'commaAbove');
            r454_currentGlyph['apply-transform'](r250_Translate(r250_WIDTH + (r250_RIGHTSB - r250_SB) * 0.375, 0));
            r250_includeGlyphPart(r454_currentGlyph, r250_glyphs, 'L', r250_AS_BASE);
            r250_xn$save$2Lrc5.call(r454_currentGlyph, 'Lcaron', 317);
            r250_dependencyProfile[r454_currentGlyph.name] = r250_getDependencyProfile(r454_currentGlyph);
            return r454_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.24', r250_xn$donothing$2Lrc0b)));
        (function _r438_t3() {
            var _r460_t0 = this;
            var r460_currentGlyph = _r460_t0;
            if (!r460_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.25')
                r250_glyphList.pop();
            r250_includeGlyphPart(r460_currentGlyph, r250_glyphs, 'L', r250_AS_BASE);
            var r460_fine = 0.5 * r250_OVERLAYSTROKE;
            var r460_middle = r1_mix(r250_STROKE, r250_CAP, 0.5);
            r460_currentGlyph.include(r250_dispiro(r250_flat(r1_mix(0, r250_SB, 0.5), r460_middle - r250_LONGJUT * 0.4, r250_widths(r460_fine, r460_fine)), r250_curl(1.6 * r250_LONGJUT + r1_mix(0, r250_SB, 0.5), r460_middle + r250_LONGJUT * 0.4)));
            r250_xn$save$2Lrc5.call(r460_currentGlyph, 'Lslash', 321);
            r250_dependencyProfile[r460_currentGlyph.name] = r250_getDependencyProfile(r460_currentGlyph);
            return r460_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.25', r250_xn$donothing$2Lrc0b)));
        (function _r438_t4() {
            var _r465_t0 = this;
            var r465_currentGlyph = _r465_t0;
            if (!r465_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.26')
                r250_glyphList.pop();
            r250_includeGlyphPart(r465_currentGlyph, r250_glyphs, 'L', r250_AS_BASE);
            r465_currentGlyph.include(r250_Ring(r1_mix(r250_STROKE, r250_CAP, 0.5) + r250_DOTRADIUS, r1_mix(r250_STROKE, r250_CAP, 0.5) - r250_DOTRADIUS, r1_mix(r250_SB, r250_RIGHTSB, 0.65) - r250_DOTRADIUS, r1_mix(r250_SB, r250_RIGHTSB, 0.65) + r250_DOTRADIUS));
            r250_xn$save$2Lrc5.call(r465_currentGlyph, 'Ldot', 319);
            r250_dependencyProfile[r465_currentGlyph.name] = r250_getDependencyProfile(r465_currentGlyph);
            return r465_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.26', r250_xn$donothing$2Lrc0b)));
        (function _r438_t5() {
            var _r470_t0 = this;
            var r470_currentGlyph = _r470_t0;
            if (!r470_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.27')
                r250_glyphList.pop();
            r250_includeGlyphPart(r470_currentGlyph, r250_glyphs, 'L', r250_AS_BASE);
            r470_currentGlyph.include(r250_HOverlayBar(r250_SB * 0.3, r1_mix(r250_SB + r250_STROKE, r250_RIGHTSB - r250_STROKE, 0.55), r250_CAP * r250_OVERLAYPOS));
            r250_xn$save$2Lrc5.call(r470_currentGlyph, 'Lbar', 573);
            r250_dependencyProfile[r470_currentGlyph.name] = r250_getDependencyProfile(r470_currentGlyph);
            return r470_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.27', r250_xn$donothing$2Lrc0b)));
        (function _r438_t6() {
            var _r475_t0 = this;
            var r475_currentGlyph = _r475_t0;
            if (!r475_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.28')
                r250_glyphList.pop();
            r475_currentGlyph.include(r250_markset.e);
            r475_currentGlyph.include(r438_LShape(r250_XH));
            r250_xn$save$2Lrc5.call(r475_currentGlyph, 'smcpL', 671);
            r250_dependencyProfile[r475_currentGlyph.name] = r250_getDependencyProfile(r475_currentGlyph);
            return r475_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.28', r250_xn$donothing$2Lrc0b)));
        return [r438_LShape];
    }();
    var r250_LShape = _r250_t7[0];
    (function () {
        (function _r480_t0() {
            var _r482_t0 = this;
            var r482_currentGlyph = _r482_t0;
            if (!r482_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.29')
                r250_glyphList.pop();
            var r482_df = r250_DivFrame(r250_para.diversityI);
            r482_currentGlyph['set-width'](r482_df.width);
            r482_currentGlyph.include(r482_df.markSet.b);
            var r482_balance = r250_LBALANCE2 * r482_df.div * r482_df.div;
            var r482_middle = r482_df.middle + r482_balance;
            r482_currentGlyph['set-anchor']('above', r250_BASE, r482_middle, r250_CAP);
            r482_currentGlyph['set-anchor']('below', r250_BASE, r482_middle, 0);
            r482_currentGlyph['set-anchor']('overlay', r250_BASE, r482_middle, r250_CAP * r250_OVERLAYPOS);
            r482_currentGlyph['set-anchor']('topright', r250_BASE, r482_df.middle + r250_RIGHTSB - r250_MIDDLE, r250_CAP);
            r482_currentGlyph.include(r250_VBar(r482_df.middle + r482_balance, 0, r250_CAP - r250_STROKE));
            r482_currentGlyph.include(r250_LeftwardTopSerif(r482_df.middle + r482_balance, r250_CAP, r250_LONGJUT * r482_df.div));
            r250_xn$save$2Lrc5.call(r482_currentGlyph, 'l.hooky');
            r250_dependencyProfile[r482_currentGlyph.name] = r250_getDependencyProfile(r482_currentGlyph);
            return r482_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.29', r250_xn$donothing$2Lrc0b)));
        (function _r480_t1() {
            var _r493_t0 = this;
            var r493_currentGlyph = _r493_t0;
            if (!r493_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.30')
                r250_glyphList.pop();
            var r493_df = r250_DivFrame(r250_para.diversityI);
            r493_currentGlyph['set-width'](r493_df.width);
            r493_currentGlyph.include(r493_df.markSet.b);
            r493_currentGlyph.include(r250_VBar(r493_df.middle, 0, r250_CAP - r250_STROKE));
            r493_currentGlyph.include(r250_tagged('serifLT', r250_LeftwardTopSerif(r493_df.middle, r250_CAP, r250_LONGJUT * r493_df.div)));
            r493_currentGlyph.include(r250_tagged('serifRB', r250_RightwardBottomSerif(r493_df.middle, 0, r250_LONGJUT * r493_df.div)));
            r493_currentGlyph['set-anchor']('topright', r250_BASE, r493_df.middle + r250_RIGHTSB - r250_MIDDLE, r250_CAP);
            r250_xn$save$2Lrc5.call(r493_currentGlyph, 'l.zshaped');
            r250_dependencyProfile[r493_currentGlyph.name] = r250_getDependencyProfile(r493_currentGlyph);
            return r493_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.30', r250_xn$donothing$2Lrc0b)));
        (function _r480_t2() {
            var _r502_t0 = this;
            var r502_currentGlyph = _r502_t0;
            if (!r502_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.31')
                r250_glyphList.pop();
            var r502_df = r250_DivFrame(r250_para.diversityII);
            r502_currentGlyph['set-width'](r502_df.width);
            r502_currentGlyph.include(r502_df.markSet.b);
            r502_currentGlyph.include(r250_VBar(r502_df.middle, 0, r250_CAP * 0.6));
            r502_currentGlyph.include(r250_VBar(r502_df.middle, r250_CAP * 0.4, r250_CAP));
            r502_currentGlyph['set-anchor']('topright', r250_BASE, r502_df.middle + r250_RIGHTSB - r250_MIDDLE, r250_CAP);
            r250_xn$save$2Lrc5.call(r502_currentGlyph, 'l.line');
            r250_dependencyProfile[r502_currentGlyph.name] = r250_getDependencyProfile(r502_currentGlyph);
            return r502_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.31', r250_xn$donothing$2Lrc0b)));
        (function _r480_t3() {
            var _r510_t0 = this;
            var r510_currentGlyph = _r510_t0;
            if (!r510_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.32')
                r250_glyphList.pop();
            var r510_df = r250_DivFrame(r250_para.diversityI);
            r510_currentGlyph['set-width'](r510_df.width);
            r510_currentGlyph.include(r510_df.markSet.b);
            var r510_balance = r250_LBALANCE * r510_df.div * r510_df.div;
            r510_currentGlyph.include(r250_VBar(r510_df.middle + r510_balance, 0, r250_CAP));
            r510_currentGlyph.include(r250_LeftwardTopSerif(r510_df.middle + r510_balance, r250_CAP, r250_LONGJUT * r510_df.div - r510_balance));
            r510_currentGlyph.include(r250_CenterBottomSerif(r510_df.middle, 0, r250_LONGJUT * r510_df.div));
            r510_currentGlyph['set-anchor']('overlay', r250_BASE, r510_df.middle + r510_balance / 2, r250_CAP * r250_OVERLAYPOS);
            r510_currentGlyph['set-anchor']('topright', r250_BASE, r510_df.middle + r250_RIGHTSB - r250_MIDDLE, r250_CAP);
            r250_xn$save$2Lrc5.call(r510_currentGlyph, 'l.serifed');
            r250_dependencyProfile[r510_currentGlyph.name] = r250_getDependencyProfile(r510_currentGlyph);
            return r510_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.32', r250_xn$donothing$2Lrc0b)));
        (function _r480_t4() {
            var r520_shift, r520_left, r520_right, r520_rightTerm, r520_middle;
            var _r520_t0 = this;
            var r520_currentGlyph = _r520_t0;
            if (!r520_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.33')
                r250_glyphList.pop();
            var r520_df = r250_DivFrame(r250_para.diversityI);
            r520_currentGlyph['set-width'](r520_df.width);
            r520_currentGlyph.include(r520_df.markSet.b);
            if (r250_para.isItalic) {
                r520_shift = (1 - r520_df.div) * 0.4;
                r520_left = r1_mix(r250_SB, r520_df.rightSB, 0.3 - r520_shift);
                r520_right = r1_mix(r250_SB, r520_df.rightSB, 1.1 - r520_shift);
                r520_rightTerm = Math.max(r520_right, r520_left + r250_HOOKX + r250_STROKE);
                r520_middle = r1_mix(r520_left, r520_right, 0.54 * r520_df.div);
                r520_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r520_left, r250_CAP, r250_heading(r250_DOWNWARD)), r250_curl(r520_left, r250_SMALLSMOOTHB * 0.85), r250_hookend(r250_O), r250_g4(r520_rightTerm, r250_HOOK * r1_linreg(18, 0.85, 126, 1, r250_STROKE) * r520_df.div)));
                r520_currentGlyph.include(r250_tagged('serifLT', r250_dispiro(r250_flat(r520_left - r250_LONGJUT * r520_df.div + r250_HALFSTROKE * r250_HVCONTRAST, r250_CAP, r250_widths(0, r250_STROKE)), r250_curl(r520_left, r250_CAP))));
                r520_currentGlyph['set-anchor']('above', r250_BASE, r520_left + r250_HALFSTROKE, r250_CAP);
                r520_currentGlyph['set-anchor']('below', r250_BASE, r520_middle, 0);
                r520_currentGlyph['set-anchor']('overlay', r250_BASE, r520_left + r250_HALFSTROKE, r250_CAP * r250_OVERLAYPOS);
                r520_currentGlyph['set-anchor']('topright', r250_BASE, r520_left + r250_HALFSTROKE + r250_RIGHTSB - r250_MIDDLE, r250_CAP);
            } else {
                r520_currentGlyph.include(r250_IotaShape(r250_CAP));
                r520_currentGlyph['set-anchor']('topright', r250_BASE, r520_df.middle + r250_RIGHTSB - r250_MIDDLE, r250_CAP);
            }
            r250_xn$save$2Lrc5.call(r520_currentGlyph, 'l.italic');
            r250_dependencyProfile[r520_currentGlyph.name] = r250_getDependencyProfile(r520_currentGlyph);
            return r520_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.33', r250_xn$donothing$2Lrc0b)));
        (function _r480_t5() {
            var _r533_t0 = this;
            var r533_currentGlyph = _r533_t0;
            if (!r533_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.34')
                r250_glyphList.pop();
            var r533_df = r250_DivFrame(r250_para.diversityI);
            r533_currentGlyph['set-width'](r533_df.width);
            r533_currentGlyph.include(r533_df.markSet.b);
            r533_currentGlyph.include(r250_TailedIShape(r533_df, r250_CAP));
            r250_xn$save$2Lrc5.call(r533_currentGlyph, 'l.tailed');
            r250_dependencyProfile[r533_currentGlyph.name] = r250_getDependencyProfile(r533_currentGlyph);
            return r533_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.34', r250_xn$donothing$2Lrc0b)));
        (function _r480_t6() {
            var _r539_t0 = this;
            var r539_currentGlyph = _r539_t0;
            if (!r539_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.35')
                r250_glyphList.pop();
            var r539_df = r250_DivFrame(r250_para.diversityI);
            r539_currentGlyph['set-width'](r539_df.width);
            r539_currentGlyph.include(r539_df.markSet.b);
            var r539_middle = r539_df.middle - r250_LBALANCE2;
            r539_currentGlyph['set-anchor']('above', r250_BASE, r539_middle, r250_CAP);
            r539_currentGlyph['set-anchor']('below', r250_BASE, r539_middle, 0);
            r539_currentGlyph['set-anchor']('overlay', r250_BASE, r539_middle, r250_CAP * r250_OVERLAYPOS);
            r539_currentGlyph['set-anchor']('topright', r250_BASE, r539_middle + r250_RIGHTSB - r250_MIDDLE, r250_CAP);
            r539_currentGlyph.include(r250_VBar(r539_middle, 0, r250_CAP));
            r539_currentGlyph.include(r250_RightwardBottomSerif(r539_middle, 0, r250_LONGJUT * r539_df.div));
            r250_xn$save$2Lrc5.call(r539_currentGlyph, 'l.hookybottom');
            r250_dependencyProfile[r539_currentGlyph.name] = r250_getDependencyProfile(r539_currentGlyph);
            return r539_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.35', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('l', 'l');
        r250_alias('palochka', 1231, 'l');
        r250_turned('turnl', 42881, 'l', r250_MIDDLE, r250_XH / 2, r250_markset.p);
        (function _r480_t7() {
            var _r550_t0 = this;
            var r550_currentGlyph = _r550_t0;
            if (!r550_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.36')
                r250_glyphList.pop();
            r250_includeGlyphPart(r550_currentGlyph, r250_glyphs, 'l', r250_AS_BASE);
            r550_currentGlyph['apply-transform'](r250_Translate(-r250_DOTRADIUS / 2, 0));
            r550_currentGlyph.include(r250_Ring(r1_mix(r250_STROKE, r250_CAP, 0.5) + r250_DOTRADIUS, r1_mix(r250_STROKE, r250_CAP, 0.5) - r250_DOTRADIUS, r1_mix(r250_SB, r250_RIGHTSB, 1) - r250_DOTSIZE, r1_mix(r250_SB, r250_RIGHTSB, 1)));
            r250_xn$save$2Lrc5.call(r550_currentGlyph, 'ldot', 320);
            r250_dependencyProfile[r550_currentGlyph.name] = r250_getDependencyProfile(r550_currentGlyph);
            return r550_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.36', r250_xn$donothing$2Lrc0b)));
        (function _r480_t8() {
            var _r556_t0 = this;
            var r556_currentGlyph = _r556_t0;
            if (!r556_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.37')
                r250_glyphList.pop();
            var r556_df = r250_DivFrame(r250_para.diversityI);
            r250_includeGlyphPart(r556_currentGlyph, r250_glyphs, 'rtailBR');
            r556_currentGlyph['apply-transform'](r250_Translate(r556_df.middle + r250_LBALANCE2 + r250_HALFSTROKE * r250_HVCONTRAST, 0));
            r250_includeGlyphPart(r556_currentGlyph, r250_glyphs, 'l.hooky');
            r556_currentGlyph.include(r556_df.markSet.if);
            r250_xn$save$2Lrc5.call(r556_currentGlyph, 'lrtail', 621);
            r250_dependencyProfile[r556_currentGlyph.name] = r250_getDependencyProfile(r556_currentGlyph);
            return r556_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.37', r250_xn$donothing$2Lrc0b)));
        (function _r480_t9() {
            var _r563_t0 = this;
            var r563_currentGlyph = _r563_t0;
            if (!r563_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.38')
                r250_glyphList.pop();
            r563_currentGlyph.include(r250_markset.b);
            var r563_fine = r250_adviceBlackness(3.5);
            var r563_rinner = r250_LONGJUT / 2 - r563_fine / 2;
            var r563_m1 = r250_MIDDLE + r250_HALFSTROKE * r250_HVCONTRAST;
            var r563_x2 = r1_mix(r250_SB, r563_m1, 0.25);
            var r563_y2 = -r563_fine;
            r563_currentGlyph.include(r250_LeftwardTopSerif(r250_MIDDLE, r250_CAP, r250_LONGJUT));
            r563_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r563_m1, r250_CAP, r250_heading(r250_DOWNWARD)), r250_curl(r563_m1, r563_fine + r563_rinner * 2), r250_CurlyTail(r563_fine, r563_rinner, r563_m1, 0, r563_m1 + r250_LONGJUT, r563_x2, r563_y2)));
            r250_xn$save$2Lrc5.call(r563_currentGlyph, 'lcurlytail', 564);
            r250_dependencyProfile[r563_currentGlyph.name] = r250_getDependencyProfile(r563_currentGlyph);
            return r563_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.38', r250_xn$donothing$2Lrc0b)));
        (function _r480_t10() {
            var _r569_t0 = this;
            var r569_currentGlyph = _r569_t0;
            if (!r569_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.39')
                r250_glyphList.pop();
            var r569_df = r250_DivFrame(r250_para.diversityI);
            r250_includeGlyphPart(r569_currentGlyph, r250_glyphs, 'l.serifed', r250_AS_BASE, r250_ALSO_METRICS);
            r569_currentGlyph.include(r250_xn$createglyph$7Hrq(function _r569_t2() {
                var _r573_t0 = this;
                var r573_currentGlyph = _r573_t0;
                r250_includeGlyphPart(r573_currentGlyph, r250_glyphs, 'tildeAbove');
                r573_currentGlyph['apply-transform'](r250_Upright());
                r573_currentGlyph['apply-transform'](r250_Translate(r569_df.middle - r250_markMiddle, r250_CAP * 0.525 - r1_mix(r250_aboveMarkBot, r250_aboveMarkTop, 0.5)));
                r573_currentGlyph['apply-transform'](r250_Italify());
                return void 0;
            }));
            r250_xn$save$2Lrc5.call(r569_currentGlyph, 'ltildeover', 619);
            r250_dependencyProfile[r569_currentGlyph.name] = r250_getDependencyProfile(r569_currentGlyph);
            return r569_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.39', r250_xn$donothing$2Lrc0b)));
        var r480_Belt = function _r480_t11(r579_middle) {
            return function _r579_t2() {
                var _r581_t0 = this;
                var r581_currentGlyph = _r581_t0;
                var r581_fine = r250_adviceBlackness(4.5);
                var r581_r = r250_XH * 0.05;
                r581_currentGlyph.include(r250_dispiro(r250_widths.rhs(r581_fine), r250_flat(r579_middle, r250_CAPMIDDLE + r581_r, r250_heading(r250_LEFTWARD)), r250_curl(r579_middle - r250_HALFSTROKE - r581_r * 1.5, r250_CAPMIDDLE + r581_r), r250_archv(), r250_g4.down.mid(r579_middle - r250_HALFSTROKE - r581_r * 2.5, r250_CAPMIDDLE, r250_heading(r250_DOWNWARD)), r250_arcvh(), r250_flat(r579_middle - r250_HALFSTROKE - r581_r * 1.5, r250_CAPMIDDLE - r581_r), r250_curl(r579_middle + r250_HALFSTROKE + r581_r * 1.5 + r581_fine, r250_CAPMIDDLE - r581_r)));
                return void 0;
            };
        };
        (function _r480_t12() {
            var _r584_t0 = this;
            var r584_currentGlyph = _r584_t0;
            if (!r584_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.40')
                r250_glyphList.pop();
            var r584_df = r250_DivFrame(r250_para.diversityI);
            r250_includeGlyphPart(r584_currentGlyph, r250_glyphs, 'l.serifed', r250_AS_BASE, r250_ALSO_METRICS);
            r584_currentGlyph.include(r480_Belt(r584_df.middle));
            r250_xn$save$2Lrc5.call(r584_currentGlyph, 'lbelt', 620);
            r250_dependencyProfile[r584_currentGlyph.name] = r250_getDependencyProfile(r584_currentGlyph);
            return r584_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.40', r250_xn$donothing$2Lrc0b)));
        (function _r480_t13() {
            var _r589_t0 = this;
            var r589_currentGlyph = _r589_t0;
            if (!r589_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.41')
                r250_glyphList.pop();
            var r589_df = r250_DivFrame(r250_para.diversityI);
            r250_includeGlyphPart(r589_currentGlyph, r250_glyphs, 'lrtail', r250_AS_BASE, r250_ALSO_METRICS);
            r589_currentGlyph.include(r480_Belt(r589_df.middle));
            r250_xn$save$2Lrc5.call(r589_currentGlyph, 'lbeltrtail', 42894);
            r250_dependencyProfile[r589_currentGlyph.name] = r250_getDependencyProfile(r589_currentGlyph);
            return r589_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.41', r250_xn$donothing$2Lrc0b)));
        return function _r480_t14() {
            var _r594_t0 = this;
            var r594_currentGlyph = _r594_t0;
            if (!r594_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.42')
                r250_glyphList.pop();
            r594_currentGlyph.include(r250_markset.if);
            var r594_fine = r250_adviceBlackness(4);
            r594_currentGlyph.include(r250_dispiro(r250_widths.center(r594_fine), r250_g4.down.start(r250_MIDDLE, r250_CAP - r594_fine * 1.5, r250_heading(r250_DOWNWARD)), r250_arcvh(), r250_g4(r250_MIDDLE - r594_fine * 1, r250_CAP - r594_fine * 2.5, r250_heading(r250_LEFTWARD)), r250_archv(), r250_g4(r250_MIDDLE - r594_fine * 2, r250_CAP - r594_fine * 1.5, r250_heading(r250_UPWARD)), r250_arcvh(), r250_g4(r250_MIDDLE - r594_fine * 1, r250_CAP - r594_fine * 0.5, r250_heading(r250_RIGHTWARD)), r250_archv(), r250_flat(r250_MIDDLE, r250_CAP - r594_fine * 1.5, r250_widths.heading(r250_HALFSTROKE, r250_HALFSTROKE, r250_DOWNWARD)), r250_curl(r250_MIDDLE, 0, r250_heading(r250_DOWNWARD)), r250_arcvh(), r250_straight.right.end(r250_MIDDLE + r250_HOOKX, -r250_HOOK)));
            r250_xn$save$2Lrc5.call(r594_currentGlyph, 'looprevesh', 426);
            r250_dependencyProfile[r594_currentGlyph.name] = r250_getDependencyProfile(r594_currentGlyph);
            return r594_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.42', r250_xn$donothing$2Lrc0b));
    }());
    var _r250_t8 = function () {
        var r599_cornerdist = r250_HALFSTROKE * r250_HVCONTRAST * 1.15;
        var r599_vcurviness = r250_SLAB && !r250_para.isItalic ? 0.15 : 0.3;
        var r599_VShape = function _r599_t0() {
            var _r600_t7 = arguments;
            var _r600_t0 = [].slice.call(_r600_t7, 0);
            var _r600_t1 = [];
            var _r600_t2 = 0;
            for (; _r600_t2 < _r600_t0.length; _r600_t2 = _r600_t2 + 1)
                if (!(_r600_t0[_r600_t2] instanceof r250_xn$NamedParameterPair$2Lrc9b))
                    _r600_t1.push(_r600_t0[_r600_t2]);
            var r600_top = r1_fallback(r600_top, _r600_t1[0]);
            var r600_sw = r1_fallback(r600_sw, _r600_t1[1], r250_STROKE);
            var r600_barStraight = r1_fallback(r600_barStraight, _r600_t1[2]);
            var r600_div = r1_fallback(r600_div, _r600_t1[3]);
            var _r600_t3 = _r600_t0;
            var _r600_t4 = _r600_t3.length;
            var _r600_t5 = 0;
            for (; _r600_t5 < _r600_t4; _r600_t5 = _r600_t5 + 1) {
                _r600_t2 = _r600_t3[_r600_t5];
                if (_r600_t2 && _r600_t2 instanceof r250_xn$NamedParameterPair$2Lrc9b && _r600_t2.left === 'top')
                    r600_top = _r600_t2.right;
                if (_r600_t2 && _r600_t2 instanceof r250_xn$NamedParameterPair$2Lrc9b && _r600_t2.left === 'sw')
                    r600_sw = _r600_t2.right;
                if (_r600_t2 && _r600_t2 instanceof r250_xn$NamedParameterPair$2Lrc9b && _r600_t2.left === 'barStraight')
                    r600_barStraight = _r600_t2.right;
                if (_r600_t2 && _r600_t2 instanceof r250_xn$NamedParameterPair$2Lrc9b && _r600_t2.left === 'div')
                    r600_div = _r600_t2.right;
            }
            return function _r600_t8() {
                var _r605_t0 = this;
                var r605_currentGlyph = _r605_t0;
                var r605_df = r250_DivFrame(r600_div);
                var r605_fine = (r600_barStraight ? r599_VShape.fineStraight : r599_VShape.fine) * r600_sw / r250_STROKE;
                var r605_sbCor = r600_top / r250_CAP * (r250_OX * (r250_SLAB ? 1 : 4));
                var r605_dgCor = r250_diagCor(r600_top, r250_WIDTH / 2, 0, r600_sw * 2);
                if (r600_barStraight)
                    r605_currentGlyph.include(r250_dispiro(r250_widths.lhs(r600_sw * r605_dgCor), r250_flat(r250_SB + r605_sbCor, r600_top, r250_heading(r250_DOWNWARD)), r250_g4(r605_df.middle - r599_cornerdist, 0, r250_widths.lhs(r605_fine))));
                else
                    r605_currentGlyph.include(r250_dispiro(r250_widths.lhs(r600_sw), r250_flat(r250_SB, r600_top, r250_heading(r250_DOWNWARD)), r250_curl(r250_SB, r600_top * 0.9, r250_heading(r250_DOWNWARD)), r250_quadcontrols(0, r599_vcurviness, 9, r250_unimportant), r250_g4(r605_df.middle - r599_cornerdist, 0, r250_widths.lhs(r605_fine))));
                r605_currentGlyph['start-from'](r605_df.middle + r599_cornerdist, 0);
                r605_currentGlyph['line-to'](r605_df.middle - r599_cornerdist, 0);
                r605_currentGlyph['line-to'](r605_df.middle, r605_fine);
                if (r600_barStraight)
                    r605_currentGlyph.include(r250_dispiro(r250_widths.rhs(r600_sw * r605_dgCor), r250_flat(r605_df.rightSB - r605_sbCor, r600_top, r250_heading(r250_DOWNWARD)), r250_g4(r605_df.middle + r599_cornerdist, 0, r250_widths.rhs(r605_fine))));
                else
                    r605_currentGlyph.include(r250_dispiro(r250_widths.rhs(r600_sw), r250_flat(r605_df.rightSB, r600_top, r250_heading(r250_DOWNWARD)), r250_curl(r605_df.rightSB, r600_top * 0.9, r250_heading(r250_DOWNWARD)), r250_quadcontrols(0, r599_vcurviness, 9, r250_unimportant), r250_g4(r605_df.middle + r599_cornerdist, 0, r250_widths.rhs(r605_fine))));
                r605_currentGlyph['tag-contour']('strokeUp');
                r605_currentGlyph.include(r250_AIVSerifs(r600_top));
                return void 0;
            };
        };
        r599_VShape.fine = r250_STROKE * r1_fallback(r250_para.vtipfine, r250_SLAB ? 0.9 : 0.8);
        r599_VShape.fineStraight = r250_STROKE * 0.95;
        (function _r599_t1() {
            var _r616_t0 = this;
            var r616_currentGlyph = _r616_t0;
            if (!r616_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.43')
                r250_glyphList.pop();
            r616_currentGlyph['set-width'](r250_WIDTH);
            r616_currentGlyph.include(r250_markset.capital);
            r616_currentGlyph.include(r599_VShape(r250_CAP, r250_STROKE, r250_para.straightBar));
            r250_xn$save$2Lrc5.call(r616_currentGlyph, 'V', 'V');
            r250_dependencyProfile[r616_currentGlyph.name] = r250_getDependencyProfile(r616_currentGlyph);
            return r616_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.43', r250_xn$donothing$2Lrc0b)));
        (function _r599_t2() {
            var _r622_t0 = this;
            var r622_currentGlyph = _r622_t0;
            if (!r622_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.44')
                r250_glyphList.pop();
            r622_currentGlyph.include(r250_markset.e);
            r622_currentGlyph.include(r599_VShape(r250_XH, r250_STROKE, r250_para.straightBar));
            r250_xn$save$2Lrc5.call(r622_currentGlyph, 'v', 'v');
            r250_dependencyProfile[r622_currentGlyph.name] = r250_getDependencyProfile(r622_currentGlyph);
            return r622_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.44', r250_xn$donothing$2Lrc0b)));
        var r599_VHooktopShape = function _r599_t3(r626_top, r626__stroke, r626_barStraight) {
            return function _r626_t2() {
                var _r628_t0 = this;
                var r628_currentGlyph = _r628_t0;
                r628_currentGlyph.include(r599_VShape(r626_top, r1_fallback(r626__stroke, r250_STROKE), r626_barStraight));
                r628_currentGlyph['eject-contour']('serifRT');
                r628_currentGlyph['eject-contour']('strokeUp');
                r628_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_straight.left.start(r250_RIGHTSB + r250_HOOKX / 3, r626_top - r250_STROKE), r250_g4(r250_RIGHTSB - r250_HOOKX / 3, r626_top - r250_HALFSTROKE - r250_HOOK), r250_quadcontrols(0.4, 0.75, 64, r250_unimportant), r250_g4(r250_MIDDLE + r599_cornerdist, 0, r250_widths.rhs(r599_VShape.fine))));
                return void 0;
            };
        };
        (function _r599_t4() {
            var _r634_t0 = this;
            var r634_currentGlyph = _r634_t0;
            if (!r634_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.45')
                r250_glyphList.pop();
            r634_currentGlyph.include(r250_markset.e);
            r634_currentGlyph.include(r599_VHooktopShape(r250_XH, r250_STROKE, r250_para.straightBar));
            r250_xn$save$2Lrc5.call(r634_currentGlyph, 'vhooktop', 11377);
            r250_xn$save$2Lrc5.call(r634_currentGlyph, 'cyrizhitsa', 1141);
            r250_dependencyProfile[r634_currentGlyph.name] = r250_getDependencyProfile(r634_currentGlyph);
            return r634_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.45', r250_xn$donothing$2Lrc0b)));
        (function _r599_t5() {
            var _r640_t0 = this;
            var r640_currentGlyph = _r640_t0;
            if (!r640_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.46')
                r250_glyphList.pop();
            r640_currentGlyph.include(r250_markset.capital);
            r640_currentGlyph.include(r599_VHooktopShape(r250_CAP, r250_STROKE, r250_para.straightBar));
            r250_xn$save$2Lrc5.call(r640_currentGlyph, 'cyrIzhitsa', 1140);
            r250_dependencyProfile[r640_currentGlyph.name] = r250_getDependencyProfile(r640_currentGlyph);
            return r640_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.46', r250_xn$donothing$2Lrc0b)));
        r250_turned('turnv', 652, 'v', r250_MIDDLE, r250_XH / 2);
        (function _r599_t6() {
            var _r645_t0 = this;
            var r645_currentGlyph = _r645_t0;
            if (!r645_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.47')
                r250_glyphList.pop();
            r645_currentGlyph.include(r250_markset.e);
            var r645_xmid = r250_MIDDLE + r250_HALFSTROKE * 0.75;
            r645_currentGlyph.include(r250_dispiro(r250_g4(r250_SB + 0.4 * r250_STROKE * r250_HVCONTRAST, r250_XH - r250_O, r250_widths.rhs()), r250_bezcontrols(0.33, 0.2, 1, 0.76, 6, r250_important), r250_g4.down.end(r645_xmid, 0, r250_heading(r250_DOWNWARD))));
            r645_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r250_RIGHTSB, r250_XH, r250_heading(r250_DOWNWARD)), r250_curl(r250_RIGHTSB, r250_XH * 0.9, r250_heading(r250_DOWNWARD)), r250_quadcontrols(0, 0.3, 6), r250_g4(r645_xmid, 0)));
            r250_xn$save$2Lrc5.call(r645_currentGlyph, 'nu', 957);
            r250_dependencyProfile[r645_currentGlyph.name] = r250_getDependencyProfile(r645_currentGlyph);
            return r645_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.47', r250_xn$donothing$2Lrc0b)));
        return [r599_VShape];
    }();
    var r250_VShape = _r250_t8[0];
    (function () {
        var r651_AMaskShape = function _r651_t0(r652_top, r652_sw, r652_barStraight, r652_div) {
            var r652_df = r250_DivFrame(r1_fallback(r652_div, 1));
            var r652_sbCor = r652_barStraight ? r652_top / r250_CAP * (r250_OX * (r250_SLAB ? 1 : 4)) : 0;
            var r652_ptOffset = r652_barStraight ? 0 : r652_top * 0.15;
            return r250_xn$spirooutline$1aao(r250_corner(r250_SB + r652_sbCor + 1, 0), r250_corner(r250_SB + r652_sbCor + 1, r652_ptOffset), r250_corner(r652_df.middle, r250_CAP), r250_corner(r652_df.rightSB - r652_sbCor - 1, r652_ptOffset), r250_corner(r652_df.rightSB - r652_sbCor - 1, 0));
        };
        (function _r651_t1() {
            var _r654_t0 = this;
            var r654_currentGlyph = _r654_t0;
            if (!r654_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.48')
                r250_glyphList.pop();
            r654_currentGlyph['set-width'](r250_WIDTH);
            r654_currentGlyph.include(r250_markset.capital);
            r654_currentGlyph['set-anchor']('trailing', r250_BASE, r250_RIGHTSB - r250_markHalfStroke, 0);
            r654_currentGlyph.include(r250_VShape(r250_CAP, r250_STROKE, r250_para.straightBar));
            r654_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_CAP / 2));
            r654_currentGlyph.include(r250_intersection(r250_HBarTop(0, r250_WIDTH, r250_XH / 2), r651_AMaskShape(r250_CAP, r250_STROKE, r250_para.straightBar, 1)));
            r250_xn$save$2Lrc5.call(r654_currentGlyph, 'A', 'A');
            r250_xn$save$2Lrc5.call(r654_currentGlyph, 'Alpha', 913);
            r250_xn$save$2Lrc5.call(r654_currentGlyph, 'cyrA', 1040);
            r250_dependencyProfile[r654_currentGlyph.name] = r250_getDependencyProfile(r654_currentGlyph);
            return r654_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.48', r250_xn$donothing$2Lrc0b)));
        return r250_turned(void 0, 11375, 'A', r250_MIDDLE, r250_CAP / 2);
    }());
    (function () {
        (function _r665_t0() {
            var _r667_t0 = this;
            var r667_currentGlyph = _r667_t0;
            if (!r667_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.49')
                r250_glyphList.pop();
            r667_currentGlyph['set-width'](r250_WIDTH);
            r667_currentGlyph.include(r250_markset.e);
            r667_currentGlyph['set-anchor']('trailing', r250_BASE, r250_RIGHTSB - r250_markHalfStroke, 0);
            var r667_stroke = r250_adviceBlackness2(2.875, 2, r250_XH);
            var r667_bartop = r250_XH * r250_OVERLAYPOS * 1.02 + r667_stroke / 2;
            var r667_lowslope = r250_shoulderMidSlope(r250_SHOULDERFINE, void 0, -1);
            var r667_lowmiddle = r1_mix(r250_SB + r250_OX, r250_RIGHTSB - r667_stroke / 2 * r250_HVCONTRAST, r1_linreg(72, 0.51, 126, 0.58, r667_stroke)) + r250_CORRECTION_OMIDS * 0.5;
            var r667_barsmooth = r1_mix(r250_SB, r250_RIGHTSB, 0.55);
            r667_currentGlyph.include(r250_dispiro(r250_widths.lhs(r667_stroke), r250_flat(r250_RIGHTSB, 0, r250_heading(r250_UPWARD)), r250_curl(r250_RIGHTSB, r250_XH - r250_SMOOTHB * r1_linreg(18, 0.9, 126, 0.81, r667_stroke)), r250_hookend(r250_XO), r250_g4(r250_SB - r250_OXHOOK / 2, r250_XH - r250_AHOOK)));
            r667_currentGlyph.include(r250_dispiro(r250_widths.lhs(r667_stroke), r250_flat(r250_RIGHTSB + r250_O, r667_bartop, r250_heading(r250_LEFTWARD)), r250_curl(r667_barsmooth, r667_bartop), r250_archv(), r250_g4(r250_SB + r250_OX, r667_bartop * 0.95 * (r250_SMALLSMOOTHB / (r250_SMALLSMOOTHA + r250_SMALLSMOOTHB))), r250_arcvh(), r250_g4(r667_lowmiddle + -r667_lowslope * r667_stroke, r250_O, r250_heading({
                'y': 1,
                'x': r667_lowslope
            })), r250_archv(16), r250_straight.up.end(r250_RIGHTSB - r667_stroke * r250_HVCONTRAST + r250_SHOULDERFINE * r250_HVCONTRAST, r250_SMALLSMOOTHB * 0.9, r250_widths.lhs(r250_SHOULDERFINE))));
            if (r250_SLAB)
                r667_currentGlyph.include(r250_tagged('serifRB', r250_RightwardBottomSerif(r250_RIGHTSB, 0, r250_SIDEJUT)));
            r250_xn$save$2Lrc5.call(r667_currentGlyph, 'a.doublestorey');
            r250_dependencyProfile[r667_currentGlyph.name] = r250_getDependencyProfile(r667_currentGlyph);
            return r667_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.49', r250_xn$donothing$2Lrc0b)));
        (function _r665_t1() {
            var _r676_t0 = this;
            var r676_currentGlyph = _r676_t0;
            if (!r676_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.50')
                r250_glyphList.pop();
            r676_currentGlyph['set-width'](r250_WIDTH);
            r676_currentGlyph.include(r250_markset.e);
            r676_currentGlyph['set-anchor']('trailing', r250_BASE, r250_RIGHTSB - r250_markHalfStroke, 0);
            r676_currentGlyph.include(r250_OBarRightShape());
            if (r250_SLAB) {
                r676_currentGlyph.include(r250_VBarRight(r250_RIGHTSB, 0, r250_XH));
                r676_currentGlyph.include(r250_RightwardBottomSerif(r250_RIGHTSB, 0, r250_SIDEJUT));
                r676_currentGlyph['tag-contour']('serifRB');
            } else {
                r676_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r250_RIGHTSB, r250_XH, r250_heading(r250_DOWNWARD)), r250_curl(r250_RIGHTSB, r250_SMOOTHA, r250_heading(r250_DOWNWARD)), r250_g4(r1_mix(r250_SB, r250_RIGHTSB, 1 + 0.4 * r250_TANSLANT), 0, r250_heading(r250_DOWNWARD))));
                r676_currentGlyph['set-anchor']('bottomright', r250_BASE, r1_mix(r250_SB, r250_RIGHTSB, 1.075), 0);
            }
            r250_xn$save$2Lrc5.call(r676_currentGlyph, 'a.singlestorey');
            r250_dependencyProfile[r676_currentGlyph.name] = r250_getDependencyProfile(r676_currentGlyph);
            return r676_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.50', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('a', 'a');
        r250_alias('cyra', 1072, 'a');
        (function _r665_t2() {
            var _r688_t0 = this;
            var r688_currentGlyph = _r688_t0;
            if (!r688_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.51')
                r250_glyphList.pop();
            r688_currentGlyph.include(r250_markset.capital);
            r688_currentGlyph.include(r250_OBarRightShape(r250_CAP));
            r688_currentGlyph['start-from'](r250_RIGHTSB, 0);
            r688_currentGlyph['line-to'](r250_RIGHTSB - r250_STROKE * r250_HVCONTRAST, 0);
            r688_currentGlyph['line-to'](r250_RIGHTSB - r250_STROKE * r250_HVCONTRAST, r250_CAP - r250_STROKE / 2);
            r688_currentGlyph['line-to'](r250_RIGHTSB, r250_CAP - r250_O);
            r250_xn$save$2Lrc5.call(r688_currentGlyph, 'largescripta', 11373);
            r688_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_CAP / 2));
            r250_xn$save$2Lrc5.call(r688_currentGlyph, 'turnlargescripta', 11376);
            r250_dependencyProfile[r688_currentGlyph.name] = r250_getDependencyProfile(r688_currentGlyph);
            return r688_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.51', r250_xn$donothing$2Lrc0b)));
        (function _r665_t3() {
            var _r699_t0 = this;
            var r699_currentGlyph = _r699_t0;
            if (!r699_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.52')
                r250_glyphList.pop();
            r699_currentGlyph.include(r250_markset.e);
            r699_currentGlyph.include(r250_OBarRightShape());
            r699_currentGlyph['start-from'](r250_RIGHTSB, 0);
            r699_currentGlyph['line-to'](r250_RIGHTSB - r250_STROKE * r250_HVCONTRAST, 0);
            r699_currentGlyph['line-to'](r250_RIGHTSB - r250_STROKE * r250_HVCONTRAST, r250_XH - r250_STROKE / 2);
            r699_currentGlyph['line-to'](r250_RIGHTSB, r250_XH - r250_O);
            if (r250_SLAB) {
                r699_currentGlyph.include(r250_RightwardBottomSerif(r250_RIGHTSB, 0, r250_SIDEJUT));
                r699_currentGlyph['tag-contour']('serifRB');
            }
            r250_xn$save$2Lrc5.call(r699_currentGlyph, 'scripta', 593);
            r250_dependencyProfile[r699_currentGlyph.name] = r250_getDependencyProfile(r699_currentGlyph);
            return r699_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.52', r250_xn$donothing$2Lrc0b)));
        r250_turned('turna', 592, 'a.doublestorey', r250_MIDDLE, r250_XH / 2);
        r250_turned(void 0, 594, 'scripta', r250_MIDDLE, r250_XH / 2);
        return function _r665_t4() {
            var _r710_t0 = this;
            var r710_currentGlyph = _r710_t0;
            if (!r710_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.53')
                r250_glyphList.pop();
            r250_includeGlyphPart(r710_currentGlyph, r250_glyphs, 'a.doublestorey', r250_AS_BASE);
            r710_currentGlyph['eject-contour']('serifRB');
            r250_includeGlyphPart(r710_currentGlyph, r250_glyphs, 'rtailBR');
            r250_xn$save$2Lrc5.call(r710_currentGlyph, 'artail', 7567);
            r250_dependencyProfile[r710_currentGlyph.name] = r250_getDependencyProfile(r710_currentGlyph);
            return r710_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.53', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r716_WShape = function _r716_t0(r717_top, r717_barStraight, r717_df) {
            return function _r717_t2() {
                var _r719_t0 = this;
                var r719_currentGlyph = _r719_t0;
                var r719_fineOuter = r717_barStraight ? r250_adviceBlackness(r716_WShape.fineS, r717_df.div) : r250_adviceBlackness(r716_WShape.fineOuter, r717_df.div);
                var r719_fineInner = r717_barStraight ? r250_adviceBlackness(r716_WShape.fineS, r717_df.div) : r250_adviceBlackness(r716_WShape.fineInner, r717_df.div);
                var r719_fineHeight = (r719_fineOuter + r719_fineInner) / 2;
                var r719_hwCO = r717_barStraight ? 1 / 2 * r250_adviceBlackness(r716_WShape.hwCOS, r717_df.div) : 1 / 2 * r250_adviceBlackness(r716_WShape.hwCO, r717_df.div);
                var r719_delimBias = r719_hwCO * r250_HVCONTRAST;
                var r719_fineOffsetOuter = r719_hwCO * r250_HVCONTRAST;
                var r719_fineOffsetInner = r719_hwCO * r250_HVCONTRAST;
                var r719_m1 = r1_mix(r717_df.leftSB + r719_delimBias, r717_df.rightSB - r719_delimBias, r717_barStraight ? r716_WShape.m1S : r716_WShape.m1) + (r717_barStraight ? r250_O : 0);
                var r719_m2 = r1_mix(r717_df.leftSB + r719_delimBias, r717_df.rightSB - r719_delimBias, r717_barStraight ? r716_WShape.m2S : r716_WShape.m2) - (r717_barStraight ? r250_O : 0);
                var r719_wMidHeight = r717_barStraight ? r717_top : r717_top * 0.6;
                if (r717_barStraight)
                    r719_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r717_df.leftSB + r250_O * 2, r717_top, r250_heading(r250_DOWNWARD)), r250_g4(r719_m1 - r719_fineOffsetOuter, 0, r250_widths.lhs(r719_fineOuter))));
                else
                    r719_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r717_df.leftSB, r717_top, r250_heading(r250_DOWNWARD)), r250_curl(r717_df.leftSB, r717_top * 0.75, r250_heading(r250_DOWNWARD)), r250_quadcontrols(0, 0.3, 6, r250_unimportant), r250_g4(r719_m1 - r719_fineOffsetOuter, 0, r250_widths.lhs(r719_fineOuter))));
                var r719_InnerShapes = function _r719_t2() {
                    return r250_union(r250_xn$spirooutline$1aao(r250_corner(r719_m1 + r719_fineOffsetInner, 0), r250_corner(r719_m1 - r719_fineOffsetOuter, 0), r250_corner(r719_m1, r719_fineHeight)), r250_xn$spirooutline$1aao(r250_corner(r717_df.middle + r719_fineOffsetInner, r719_wMidHeight), r250_corner(r717_df.middle, r719_wMidHeight - r719_fineHeight), r250_corner(r717_df.middle - r719_fineOffsetInner, r719_wMidHeight)), r250_xn$spirooutline$1aao(r250_corner(r719_m2 + r719_fineOffsetOuter, 0), r250_corner(r719_m2 - r719_fineOffsetInner, 0), r250_corner(r719_m2, r719_fineHeight)), r250_dispiro(r250_widths.lhs(r719_fineInner), r250_flat(r717_df.middle - r719_fineOffsetInner, r719_wMidHeight), r250_curl(r719_m1 + r719_fineOffsetInner, 0, r250_widths.rhs(r719_fineInner))), r250_dispiro(r250_widths.rhs(r719_fineInner), r250_flat(r717_df.middle + r719_fineOffsetInner, r719_wMidHeight), r250_curl(r719_m2 - r719_fineOffsetInner, 0, r250_widths.lhs(r719_fineInner))));
                };
                var r719_InnerStrokeMask = function _r719_t3() {
                    return r250_union(r250_xn$spirooutline$1aao(r250_corner(0, 0), r250_corner(r717_df.width, 0), r250_corner(r717_df.width, -r717_df.width), r250_corner(0, -r717_df.width)), r250_xn$spirooutline$1aao(r250_corner(0, r719_wMidHeight), r250_corner(r717_df.width, r719_wMidHeight), r250_corner(r717_df.width, r719_wMidHeight + r717_df.width), r250_corner(0, r719_wMidHeight + r717_df.width)));
                };
                r719_currentGlyph.include(r250_difference(r719_InnerShapes(), r719_InnerStrokeMask()));
                if (r717_barStraight)
                    r719_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r717_df.rightSB - r250_O * 2, r717_top, r250_heading(r250_DOWNWARD)), r250_g4(r719_m2 + r719_fineOffsetOuter, 0, r250_widths.rhs(r719_fineOuter))));
                else
                    r719_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r717_df.rightSB, r717_top, r250_heading(r250_DOWNWARD)), r250_curl(r717_df.rightSB, r717_top * 0.75, r250_heading(r250_DOWNWARD)), r250_quadcontrols(0, 0.3, 6, r250_unimportant), r250_g4(r719_m2 + r719_fineOffsetOuter, 0, r250_widths.rhs(r719_fineOuter))));
                r719_currentGlyph.include(r250_AIVSerifs(r717_top, r717_df.leftSB, r717_df.rightSB));
                return void 0;
            };
        };
        r716_WShape.fineOuter = 5;
        r716_WShape.fineInner = 6;
        r716_WShape.fineS = 5.5;
        r716_WShape.hwCO = 5;
        r716_WShape.hwCOS = 4;
        r716_WShape.m1 = 0.25;
        r716_WShape.m2 = 0.75;
        r716_WShape.m1S = 0.24;
        r716_WShape.m2S = 0.76;
        (function _r716_t1() {
            var _r729_t0 = this;
            var r729_currentGlyph = _r729_t0;
            if (!r729_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.54')
                r250_glyphList.pop();
            var r729_df = r250_DivFrame(r250_para.diversityM, 3);
            r729_currentGlyph['set-width'](r729_df.width);
            r729_currentGlyph.include(r729_df.markSet.capital);
            r729_currentGlyph.include(r716_WShape(r250_CAP, r250_para.straightBar, r729_df));
            r250_xn$save$2Lrc5.call(r729_currentGlyph, 'W', 'W');
            r250_xn$save$2Lrc5.call(r729_currentGlyph, 'cyrWe', 1308);
            r250_dependencyProfile[r729_currentGlyph.name] = r250_getDependencyProfile(r729_currentGlyph);
            return r729_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.54', r250_xn$donothing$2Lrc0b)));
        (function _r716_t2() {
            var _r736_t0 = this;
            var r736_currentGlyph = _r736_t0;
            if (!r736_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.55')
                r250_glyphList.pop();
            var r736_df = r250_DivFrame(r250_para.diversityM, 3);
            r736_currentGlyph['set-width'](r736_df.width);
            r736_currentGlyph.include(r736_df.markSet.e);
            r736_currentGlyph.include(r716_WShape(r250_XH, r250_para.straightBar, r736_df));
            r250_xn$save$2Lrc5.call(r736_currentGlyph, 'w', 'w');
            r250_xn$save$2Lrc5.call(r736_currentGlyph, 'cyrwe', 1309);
            r250_dependencyProfile[r736_currentGlyph.name] = r250_getDependencyProfile(r736_currentGlyph);
            return r736_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.55', r250_xn$donothing$2Lrc0b)));
        r250_turned(void 0, 653, 'w', r250_MIDDLE * r250_para.diversityM, r250_XH / 2);
        var r716_WHooktopShape = function _r716_t3(r742_top, r742_barStraight, r742_df) {
            return function _r742_t2() {
                var r744_s;
                var _r744_t0 = this;
                var r744_currentGlyph = _r744_t0;
                var r744_fineOuter = r742_barStraight ? r250_adviceBlackness(r716_WShape.fineS, r742_df.div) : r250_adviceBlackness(r716_WShape.fineOuter, r742_df.div);
                var r744_fineOffsetOuter = r744_fineOuter / 2 * r250_HVCONTRAST * (r742_barStraight ? r716_WShape.fineOffsetS : r716_WShape.fineOffset);
                var r744_m2 = r742_df.width * (r742_barStraight ? r716_WShape.m2S : r716_WShape.m2) - (r742_barStraight ? r250_O : 0);
                r744_currentGlyph.include(r716_WShape(r742_top, r742_barStraight, r742_df));
                _r744_t0.contours.pop();
                if (r250_SLAB) {
                    r744_s = _r744_t0.contours.pop();
                    _r744_t0.contours.pop();
                    _r744_t0.contours.push(r744_s);
                }
                r744_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_straight.down.start(r742_df.rightSB, r742_top - r250_HOOK, r250_heading(r250_DOWNWARD)), r250_quadcontrols(0, 0.3, 6, r250_unimportant, r250_g2), r250_g4(r744_m2 + r744_fineOffsetOuter, 0, r250_widths.rhs(r744_fineOuter))));
                r744_currentGlyph.include(r250_VerticalHook(r742_df.rightSB - r250_HALFSTROKE * r250_HVCONTRAST, r742_top - r250_HOOK, r250_HOOKX * 0.65, -r250_HOOK + r250_HALFSTROKE));
                return void 0;
            };
        };
        (function _r716_t4() {
            var _r749_t0 = this;
            var r749_currentGlyph = _r749_t0;
            if (!r749_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.56')
                r250_glyphList.pop();
            var r749_df = r250_DivFrame(r250_para.diversityM, 3);
            r749_currentGlyph['set-width'](r749_df.width);
            r749_currentGlyph.include(r749_df.markSet.capital);
            r749_currentGlyph.include(r716_WHooktopShape(r250_CAP, r250_para.straightBar, r749_df));
            r250_xn$save$2Lrc5.call(r749_currentGlyph, 'Whooktop', 11378);
            r250_dependencyProfile[r749_currentGlyph.name] = r250_getDependencyProfile(r749_currentGlyph);
            return r749_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.56', r250_xn$donothing$2Lrc0b)));
        (function _r716_t5() {
            var _r755_t0 = this;
            var r755_currentGlyph = _r755_t0;
            if (!r755_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.57')
                r250_glyphList.pop();
            var r755_df = r250_DivFrame(r250_para.diversityM, 3);
            r755_currentGlyph['set-width'](r755_df.width);
            r755_currentGlyph.include(r755_df.markSet.e);
            r755_currentGlyph.include(r716_WHooktopShape(r250_XH, r250_para.straightBar, r755_df));
            r250_xn$save$2Lrc5.call(r755_currentGlyph, 'whooktop', 11379);
            r250_dependencyProfile[r755_currentGlyph.name] = r250_getDependencyProfile(r755_currentGlyph);
            return r755_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.57', r250_xn$donothing$2Lrc0b)));
        (function _r716_t6() {
            var _r761_t0 = this;
            var r761_currentGlyph = _r761_t0;
            if (!r761_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.58')
                r250_glyphList.pop();
            var r761_df = r250_DivFrame(1, 3);
            r761_currentGlyph['set-width'](r761_df.width);
            r761_currentGlyph.include(r761_df.markSet.capital);
            r761_currentGlyph.include(r716_WShape(r250_CAP / 2, r250_para.straightBar, r761_df));
            r761_currentGlyph['apply-transform'](r250_Upright());
            r761_currentGlyph['apply-transform'](r250_Translate(0, r250_CAP / 2));
            r761_currentGlyph['apply-transform'](r250_Italify());
            r761_currentGlyph.include(r716_WShape(r250_CAP / 2, r250_para.straightBar, r761_df));
            r250_xn$save$2Lrc5.call(r761_currentGlyph, 'ww', 684);
            r250_dependencyProfile[r761_currentGlyph.name] = r250_getDependencyProfile(r761_currentGlyph);
            return r761_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.58', r250_xn$donothing$2Lrc0b)));
        return [r716_WShape];
    }());
    (function () {
        (function _r771_t0() {
            var _r773_t0 = this;
            var r773_currentGlyph = _r773_t0;
            if (!r773_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.59')
                r250_glyphList.pop();
            r773_currentGlyph['set-width'](r250_WIDTH);
            r773_currentGlyph.include(r250_markset.capital);
            r773_currentGlyph.include(r250_xStrand(r250_SB, 0, r250_RIGHTSB, r250_CAP, 0.1, 0.4, 0.28));
            r773_currentGlyph.include(r250_xStrand(r250_SB, r250_CAP, r250_RIGHTSB, 0, 0.1, 0.4, 0.28));
            r773_currentGlyph.include(r250_AIHSerifs(r250_CAP));
            r250_xn$save$2Lrc5.call(r773_currentGlyph, 'X', 'X');
            r250_xn$save$2Lrc5.call(r773_currentGlyph, 'Chi', 935);
            r250_xn$save$2Lrc5.call(r773_currentGlyph, 'cyrHa', 1061);
            r250_dependencyProfile[r773_currentGlyph.name] = r250_getDependencyProfile(r773_currentGlyph);
            return r773_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.59', r250_xn$donothing$2Lrc0b)));
        (function _r771_t1() {
            var _r783_t0 = this;
            var r783_currentGlyph = _r783_t0;
            if (!r783_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.60')
                r250_glyphList.pop();
            r783_currentGlyph.include(r250_markset.e);
            var r783_TURN = r250_XH * 0.1;
            r783_currentGlyph.include(r250_xStrand(r250_SB, 0, r250_RIGHTSB, r250_XH, 0.02, 0.4, 0.14));
            r783_currentGlyph.include(r250_xStrand(r250_SB, r250_XH, r250_RIGHTSB, 0, 0.02, 0.4, 0.14));
            r783_currentGlyph.include(r250_AIHSerifs(r250_XH));
            r250_xn$save$2Lrc5.call(r783_currentGlyph, 'x', 'x');
            r250_xn$save$2Lrc5.call(r783_currentGlyph, 'cyrha', 1093);
            r250_dependencyProfile[r783_currentGlyph.name] = r250_getDependencyProfile(r783_currentGlyph);
            return r783_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.60', r250_xn$donothing$2Lrc0b)));
        (function _r771_t2() {
            var _r791_t0 = this;
            var r791_currentGlyph = _r791_t0;
            if (!r791_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.61')
                r250_glyphList.pop();
            r791_currentGlyph['set-width'](r250_WIDTH);
            r791_currentGlyph.include(r250_markset.p);
            r791_currentGlyph.include(r250_xStrand(r250_SB, r250_DESCENDER, r250_RIGHTSB, r250_XH, 0.05, 0.4, 0.11));
            r791_currentGlyph.include(r250_xStrand(r250_SB, r250_XH, r250_RIGHTSB, r250_DESCENDER, 0.05, 0.4, 0.11));
            r250_xn$save$2Lrc5.call(r791_currentGlyph, 'chi', 967);
            r250_xn$save$2Lrc5.call(r791_currentGlyph, 'latinchi', 43859);
            r250_dependencyProfile[r791_currentGlyph.name] = r250_getDependencyProfile(r791_currentGlyph);
            return r791_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.61', r250_xn$donothing$2Lrc0b)));
        r250_composite('cyrHadescender', r250_glyphs.cyrHa, r250_CyrDescender(r250_RIGHTSB), r250_xn$intounicode$5sIl(1202));
        return r250_composite('cyrhadescender', r250_glyphs.cyrha, r250_CyrDescender(r250_RIGHTSB), r250_xn$intounicode$5sIl(1203));
    }());
    var _r250_t9 = function () {
        var r799_YShape = function _r799_t0(r800_top, r800_bot) {
            return function _r800_t2() {
                var _r802_t0 = this;
                var r802_currentGlyph = _r802_t0;
                var r802_cross = r1_mix(r1_fallback(r800_bot, 0), r800_top, 0.4);
                r802_currentGlyph.include(r250_halfXStrand(r250_SB, r800_top, r250_MIDDLE, r802_cross, 0.1, 0.4, 0.28));
                r802_currentGlyph.include(r250_halfXStrand(r250_RIGHTSB, r800_top, r250_MIDDLE, r802_cross, 0.1, 0.4, 0.28));
                r802_currentGlyph['tag-contour']('strokeRT');
                r802_currentGlyph.include(r250_VBar(r250_MIDDLE, r1_fallback(r800_bot, 0), r802_cross + r250_HALFSTROKE));
                r802_currentGlyph['set-anchor']('overlay', r250_BASE, r250_MIDDLE, r802_cross);
                if (r250_SLAB) {
                    r802_currentGlyph.include(r250_AIVSerifs(r800_top));
                    r802_currentGlyph.include(r250_CenterBottomSerif(r250_MIDDLE, r1_fallback(r800_bot, 0), r250_JUT));
                }
                return void 0;
            };
        };
        (function _r799_t1() {
            var _r811_t0 = this;
            var r811_currentGlyph = _r811_t0;
            if (!r811_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.62')
                r250_glyphList.pop();
            r811_currentGlyph['set-width'](r250_WIDTH);
            r811_currentGlyph.include(r250_markset.capital);
            r811_currentGlyph.include(r799_YShape(r250_CAP));
            r250_xn$save$2Lrc5.call(r811_currentGlyph, 'Y', 'Y');
            r250_xn$save$2Lrc5.call(r811_currentGlyph, 'Upsilon', 933);
            r250_xn$save$2Lrc5.call(r811_currentGlyph, 'cyrUe', 1198);
            r250_dependencyProfile[r811_currentGlyph.name] = r250_getDependencyProfile(r811_currentGlyph);
            return r811_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.62', r250_xn$donothing$2Lrc0b)));
        (function _r799_t2() {
            var _r819_t0 = this;
            var r819_currentGlyph = _r819_t0;
            if (!r819_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.63')
                r250_glyphList.pop();
            r250_includeGlyphPart(r819_currentGlyph, r250_glyphs, 'Y', r250_AS_BASE);
            r819_currentGlyph['eject-contour']('strokeRT');
            r819_currentGlyph['eject-contour']('serifRT');
            var r819_cross = r250_CAP * 0.4;
            r819_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_straight.left.start(r250_RIGHTSB + r250_HOOKX / 3, r250_CAP - r250_STROKE), r250_g4(r250_RIGHTSB - r250_HOOKX / 3, r250_CAP - r250_HOOK), r250_quadcontrols(0.55, 0.7, 32, r250_unimportant), r250_g4(r250_MIDDLE + r250_STROKE / 2 * r250_HVCONTRAST, r819_cross), r250_end(function _r819_t2() {
                var _r824_t0 = this;
                return _r824_t0.loose = true;
            })));
            r250_xn$save$2Lrc5.call(r819_currentGlyph, 'Yhooktop', 435);
            r250_dependencyProfile[r819_currentGlyph.name] = r250_getDependencyProfile(r819_currentGlyph);
            return r819_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.63', r250_xn$donothing$2Lrc0b)));
        (function _r799_t3() {
            var _r827_t0 = this;
            var r827_currentGlyph = _r827_t0;
            if (!r827_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.64')
                r250_glyphList.pop();
            r827_currentGlyph.include(r250_markset.p);
            r827_currentGlyph.include(r799_YShape(r250_XH, r250_DESCENDER));
            r250_xn$save$2Lrc5.call(r827_currentGlyph, 'cyrue', 1199);
            r250_dependencyProfile[r827_currentGlyph.name] = r250_getDependencyProfile(r827_currentGlyph);
            return r827_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.64', r250_xn$donothing$2Lrc0b)));
        (function _r799_t4() {
            var _r832_t0 = this;
            var r832_currentGlyph = _r832_t0;
            if (!r832_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.65')
                r250_glyphList.pop();
            r832_currentGlyph.include(r250_markset.e);
            r832_currentGlyph.include(r799_YShape(r250_XH));
            r250_xn$save$2Lrc5.call(r832_currentGlyph, 'smcpY', 655);
            r250_dependencyProfile[r832_currentGlyph.name] = r250_getDependencyProfile(r832_currentGlyph);
            return r832_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.65', r250_xn$donothing$2Lrc0b)));
        return [r799_YShape];
    }();
    var r250_YShape = _r250_t9[0];
    var _r250_t10 = function () {
        var r837_useCurlyBottom = r250_para.isItalic || r250_SLAB || r250_para.straightBar;
        var r837_px1 = 0.84;
        var r837_py1 = r1_linreg(18, 0.8, 126, 0.76, r250_STROKE);
        var r837_px2 = 0.95;
        var r837_py20 = 0.88;
        var r837_py2 = r837_useCurlyBottom ? r1_linreg(18, 0.97, 126, 0.85, r250_STROKE) : r837_py20;
        var r837_pds = 0.05;
        var r837_pds2 = 0.01;
        var r837_dpy1 = (1 - r1_linreg(1 - r837_px2, 1 - r837_py2, r837_px1, r837_py1, 1)) / (1 - r837_py1);
        var r837_dpy20 = (1 - r1_linreg(1 - r837_px1, 1 - r837_py1, r837_px2, r837_py20, 1)) / (1 - r837_py20);
        var r837_dpy2 = (1 - r1_linreg(1 - r837_px1, 1 - r837_py1, r837_px2, r837_py2, 1)) / (1 - r837_py2);
        var r837_yrstrokel0 = r250_MIDDLE - r250_WIDTH * 0.1;
        var r837_yrstrokel = r250_MIDDLE - r250_WIDTH * (r837_useCurlyBottom ? 0.15 : 0.1) + (r837_useCurlyBottom ? r250_HALFSTROKE : 0);
        var r837_yrstroker = r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST;
        var r837_yshrink = r1_linreg(18, 1, 126, 0.85, r250_STROKE) * (r250_para.straightBar ? r250_adviceBlackness(3.25) / r250_STROKE : 1);
        var r837_slabysize = r250_JUT * (r250_WIDTH / r250_UPM) + r250_STROKE * 0.25;
        var r837_slabyvx = r1_linreg(18, 0.7, 126, 0.5, r250_STROKE);
        var r837_yTopKnots = function _r837_t0(r838_x, r838_top, r838_ds, r838_dir, r838_dx, r838_dy) {
            var r838_hs = r250_HALFSTROKE * r250_diagCor(r838_dy, r838_dx, 0, r250_STROKE * 2);
            if (r250_para.straightBar)
                return [r250_flat(r838_x - r250_OX * r838_dir, r838_top, r250_widths.heading(r838_hs, r838_hs, r250_DOWNWARD))];
            else
                return [
                    r250_flat(r838_x, r838_top, r250_heading(r250_DOWNWARD)),
                    r250_curl(r838_x, r838_top - r838_ds, r250_heading(r250_DOWNWARD)),
                    r250_quadcontrols(0, r837_dpy1, 16)
                ];
        };
        var r837_yBaseKnots = function _r837_t1(r839_top, r839_bottom, r839_hooktop) {
            var r839_ds = (r839_top - r839_bottom) * r837_pds;
            var r839_ds2 = (r839_top - r839_bottom) * r837_pds2 + (r837_useCurlyBottom ? r837_slabysize * r837_slabyvx : 0);
            return [
                r250_para.straightBar && !r839_hooktop ? [] : [r250_flat(r1_mix(r837_yrstrokel, r837_yrstroker, r837_px1), r1_mix(r839_bottom + r839_ds2, r839_top - r839_ds, r837_py1))],
                r250_curl(r1_mix(r837_yrstrokel, r837_yrstroker, 1 - r837_px2), r1_mix(r839_bottom + r839_ds2, r839_top - r839_ds, 1 - r837_py2), r250_widths.center(r250_STROKE * (r837_useCurlyBottom ? r837_yshrink : 1))),
                r837_useCurlyBottom ? [
                    r250_flat(r837_yrstrokel - r837_slabysize, r839_bottom + r250_HALFSTROKE, r250_widths.center()),
                    r250_curl(Math.min(r837_yrstrokel - r837_slabysize - 0.1, r837_yrstrokel - r250_HALFSTROKE - r250_JUT), r839_bottom + r250_HALFSTROKE)
                ] : [
                    r250_quadcontrols(1, 1 - r837_dpy2, 16),
                    r250_flat(r837_yrstrokel, r839_bottom + r839_ds2, r250_heading(r250_DOWNWARD)),
                    r250_curl(r837_yrstrokel, r839_bottom, r250_heading(r250_DOWNWARD))
                ]
            ];
        };
        var r837_yJoinKnots = function _r837_t2(r840_ds, r840_ds2, r840_top, r840_bottom, r840_hooktop) {
            var r840_joinProportion = r1_linreg(1 - r837_px2, 1 - r837_py2, r250_para.straightBar && !r840_hooktop ? 0.965 : r837_px1, r250_para.straightBar && !r840_hooktop ? 1 : r837_py1, (r250_MIDDLE - r837_yrstrokel) / (r837_yrstroker - r837_yrstrokel));
            return [
                r250_para.straightBar ? [] : [r250_flat(r1_mix(r250_WIDTH - r837_yrstrokel, r250_WIDTH - r837_yrstroker, r837_px1), r1_mix(r840_bottom + r840_ds2, r840_top - r840_ds, r837_py1))],
                r250_curl(r250_MIDDLE, r1_mix(r840_bottom + r840_ds2, r840_top - r840_ds, r840_joinProportion), r250_widths.center(r250_STROKE * r837_yshrink))
            ];
        };
        var r837_SmallYShape = function _r837_t3(r841_top, r841_bottom) {
            return function _r841_t2() {
                var _r843_t0 = this;
                var r843_currentGlyph = _r843_t0;
                var r843_ds = (r841_top - r841_bottom) * r837_pds;
                var r843_ds2 = (r841_top - r841_bottom) * r837_pds2 + (r837_useCurlyBottom ? r837_slabysize * r837_slabyvx : 0);
                r843_currentGlyph.include(r250_tagged('strokeR', r250_dispiro(r250_widths.center(), r837_yTopKnots(r837_yrstroker, r841_top, r843_ds, 1, r250_WIDTH, r841_top - r841_bottom), r837_yBaseKnots(r841_top, r841_bottom), r250_end(function _r843_t2() {
                    var _r845_t0 = this;
                    return _r845_t0.cleanmore = true;
                }))));
                r843_currentGlyph.include(r250_dispiro(r250_widths.center(), r837_yTopKnots(r250_WIDTH - r837_yrstroker, r841_top, r843_ds, -1, r250_WIDTH, r841_top - r841_bottom), r837_yJoinKnots(r843_ds, r843_ds2, r841_top, r841_bottom), r250_end(function _r843_t3() {
                    var _r847_t0 = this;
                    return _r847_t0.cleanmore = true;
                })));
                if (r250_SLAB)
                    r843_currentGlyph.include(r250_AIVSerifs(r841_top));
                return void 0;
            };
        };
        var r837_SmallYHookTopShape = function _r837_t4(r849_top, r849_bottom) {
            return function _r849_t2() {
                var _r851_t0 = this;
                var r851_currentGlyph = _r851_t0;
                var r851_ds = (r849_top - r849_bottom) * r837_pds;
                var r851_ds2 = (r849_top - r849_bottom) * r837_pds2 + (r837_useCurlyBottom ? r837_slabysize * r837_slabyvx : 0);
                r851_currentGlyph.include(r250_tagged('strokeR', r250_dispiro(r250_widths.center(), r250_straight.left.start(r1_mix(r837_yrstrokel, r837_yrstroker, r837_px1) + r250_HOOKX, r250_XH - r250_HALFSTROKE), r837_yBaseKnots(r849_top, r849_bottom, true), r250_end(function _r851_t2() {
                    var _r853_t0 = this;
                    return _r853_t0.cleanmore = true;
                }))));
                r851_currentGlyph.include(r250_dispiro(r250_widths.center(), r837_yTopKnots(r250_WIDTH - r837_yrstroker, r849_top, r851_ds, -1, r250_WIDTH, r849_top - r849_bottom), r837_yJoinKnots(r851_ds, r851_ds2, r849_top, r849_bottom, true), r250_end(function _r851_t3() {
                    var _r855_t0 = this;
                    return _r855_t0.cleanmore = true;
                })));
                if (r250_SLAB) {
                    r851_currentGlyph.include(r250_AIVSerifs(r849_top));
                    r851_currentGlyph['eject-contour']('serifRT');
                }
                return void 0;
            };
        };
        (function _r837_t5() {
            var _r859_t0 = this;
            var r859_currentGlyph = _r859_t0;
            if (!r859_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.66')
                r250_glyphList.pop();
            r859_currentGlyph.include(r250_markset.p);
            r859_currentGlyph.include(r837_SmallYShape(r250_XH, r250_DESCENDER));
            r250_xn$save$2Lrc5.call(r859_currentGlyph, 'y.straight');
            r250_dependencyProfile[r859_currentGlyph.name] = r250_getDependencyProfile(r859_currentGlyph);
            return r859_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.66', r250_xn$donothing$2Lrc0b)));
        (function _r837_t6() {
            var _r864_t0 = this;
            var r864_currentGlyph = _r864_t0;
            if (!r864_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.67')
                r250_glyphList.pop();
            r864_currentGlyph.include(r250_markset.p);
            r864_currentGlyph.include(r250_nShoulder(new r250_xn$NamedParameterPair$2Lrc9b('left', r250_SB + r250_STROKE * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('right', r250_RIGHTSB), new r250_xn$NamedParameterPair$2Lrc9b('fine', r250_SHOULDERFINE)));
            r864_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_XH / 2));
            r864_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r250_RIGHTSB, r250_XH, r250_heading(r250_DOWNWARD)), r250_curl(r250_RIGHTSB, r250_DESCENDER + r250_SMALLSMOOTHA), r250_hookend(r250_DESCENDER + r250_O), r250_g4(r250_SB, r250_DESCENDER + r250_SHOOK)));
            if (r250_SLAB)
                r864_currentGlyph.include(r250_LeftwardTopSerif(r250_SB, r250_XH, r250_SIDEJUT));
            r250_xn$save$2Lrc5.call(r864_currentGlyph, 'y.curly');
            r250_dependencyProfile[r864_currentGlyph.name] = r250_getDependencyProfile(r864_currentGlyph);
            return r864_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.67', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('y', 'y');
        r250_alias('cyru', 1091, 'y');
        r250_turned(void 0, 654, 'y.straight', r250_MIDDLE, r250_XH / 2, r250_markset.b);
        (function _r837_t7() {
            var _r875_t0 = this;
            var r875_currentGlyph = _r875_t0;
            if (!r875_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.68')
                r250_glyphList.pop();
            r875_currentGlyph.include(r250_markset.p);
            r875_currentGlyph.include(r837_SmallYHookTopShape(r250_XH, r250_DESCENDER));
            r250_xn$save$2Lrc5.call(r875_currentGlyph, 'yhooktop', 436);
            r250_dependencyProfile[r875_currentGlyph.name] = r250_getDependencyProfile(r875_currentGlyph);
            return r875_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.68', r250_xn$donothing$2Lrc0b)));
        (function _r837_t8() {
            var _r880_t0 = this;
            var r880_currentGlyph = _r880_t0;
            if (!r880_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.69')
                r250_glyphList.pop();
            r880_currentGlyph.include(r250_markset.capital);
            r880_currentGlyph.include(r837_SmallYShape(r250_CAP, 0));
            r250_xn$save$2Lrc5.call(r880_currentGlyph, 'cyrU', 1059);
            r250_dependencyProfile[r880_currentGlyph.name] = r250_getDependencyProfile(r880_currentGlyph);
            return r880_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.69', r250_xn$donothing$2Lrc0b)));
        (function _r837_t9() {
            var _r885_t0 = this;
            var r885_currentGlyph = _r885_t0;
            if (!r885_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.70')
                r250_glyphList.pop();
            r885_currentGlyph.include(r250_markset.b);
            var r885_top = r250_CAP;
            var r885_bottom = 0;
            var r885_ds = (r885_top - r885_bottom) * r837_pds;
            var r885_ds2 = (r885_top - r885_bottom) * r837_pds2;
            r885_currentGlyph.include(r250_tagged('strokeR', r250_dispiro(r250_widths.center(), r250_flat(r837_yrstroker, r885_bottom, r250_heading(r250_UPWARD)), r250_curl(r837_yrstroker, r885_bottom + r885_ds, r250_heading(r250_UPWARD)), r250_quadcontrols(0, r837_dpy1, 16), r250_flat(r1_mix(r837_yrstroker, r837_yrstrokel0, 1 - r837_px1), r1_mix(r885_top - r885_ds2, r885_bottom + r885_ds, r837_py1)), r250_curl(r1_mix(r837_yrstroker, r837_yrstrokel0, r837_px2), r1_mix(r885_top - r885_ds2, r885_bottom + r885_ds, 1 - r837_py20)), r250_quadcontrols(1, 1 - r837_dpy20, 16), r250_flat(r837_yrstrokel0, r885_top - r885_ds2, r250_heading(r250_UPWARD)), r250_curl(r837_yrstrokel0, r885_top, r250_heading(r250_UPWARD)), r250_end(function _r885_t2() {
                var _r888_t0 = this;
                return _r888_t0.cleanmore = true;
            }))));
            r885_currentGlyph.include(r250_dispiro(r250_widths.center(), r250_flat(r250_WIDTH - r837_yrstroker, r885_bottom, r250_heading(r250_UPWARD)), r250_curl(r250_WIDTH - r837_yrstroker, r885_bottom + r885_ds, r250_heading(r250_UPWARD)), r250_quadcontrols(0, r837_dpy1, 16), r250_flat(r1_mix(r250_WIDTH - r837_yrstrokel0, r250_WIDTH - r837_yrstroker, r837_px1), r1_mix(r885_top - r885_ds2, r885_bottom + r885_ds, r837_py1)), r250_curl(r250_MIDDLE, r1_mix(r885_top - r885_ds2, r885_bottom + r885_ds, r1_linreg(1 - r837_px2, 1 - r837_py20, r837_px1, r837_py1, (r250_MIDDLE - r837_yrstrokel0) / (r837_yrstroker - r837_yrstrokel0)))), r250_end(function _r885_t3() {
                var _r890_t0 = this;
                return _r890_t0.cleanmore = true;
            })));
            r250_xn$save$2Lrc5.call(r885_currentGlyph, 'lambda', 955);
            r250_dependencyProfile[r885_currentGlyph.name] = r250_getDependencyProfile(r885_currentGlyph);
            return r885_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.70', r250_xn$donothing$2Lrc0b)));
        (function _r837_t10() {
            var _r893_t0 = this;
            var r893_currentGlyph = _r893_t0;
            if (!r893_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.71')
                r250_glyphList.pop();
            r250_includeGlyphPart(r893_currentGlyph, r250_glyphs, 'lambda', r250_AS_BASE);
            r893_currentGlyph.include(r250_FlatSlashShape(r1_tp(r250_Upright(), r250_glyphs['l.serifed'].anchors.above).x / r250_para.diversityI, r1_mix(0, r250_CAP, 0.7), r250_OVERLAYSTROKE / 2));
            r250_xn$save$2Lrc5.call(r893_currentGlyph, 'lambdaslash', 411);
            r250_dependencyProfile[r893_currentGlyph.name] = r250_getDependencyProfile(r893_currentGlyph);
            return r893_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.71', r250_xn$donothing$2Lrc0b)));
        return [
            r837_SmallYShape,
            r837_yBaseKnots
        ];
    }();
    var r250_SmallYShape = _r250_t10[0];
    var r250_yBaseKnots = _r250_t10[1];
    var _r250_t11 = function () {
        var r898_KBalance = !r250_SLAB && r250_para.straightBar ? r250_WIDTH / 16 + 0 * r250_STROKE / 12 : 0;
        var r898_KShape = function _r898_t0(r899_top, r899_straightBar) {
            return function _r899_t2() {
                var _r901_t0 = this;
                var r901_currentGlyph = _r901_t0;
                var r901_turn = r899_top * 0.99;
                var r901_fine = r250_adviceBlackness(3.5);
                var r901_Ok = 0;
                var r901_OkSerif = 0;
                if (r899_straightBar)
                    (function () {
                        var r903_attach = r899_top * 0.42 - r250_STROKE;
                        var r903_attach2 = r899_top * 0.72 + r250_STROKE;
                        r901_Ok = ((r250_SLAB ? 0 : -4) * r250_OX - r250_STROKE / 3) * (r250_XH / r899_top);
                        r901_OkSerif = r250_SLAB ? 0 : r901_Ok;
                        r901_currentGlyph.include(r250_intersection(r250_Rect(r899_top, 0, 0, r250_UPM), r250_dispiro(r250_widths.rhs(), r250_flat(r250_RIGHTSB - r901_Ok, r899_top), r250_curl(r250_SB + r250_STROKE, r903_attach, r250_widths(0, r901_fine)))));
                        return r901_currentGlyph.include(r250_intersection(r250_xn$spirooutline$1aao(r250_corner(r250_SB + r250_STROKE, 0), r250_corner(r250_SB + r250_STROKE, r903_attach + 1), r250_corner(r250_RIGHTSB - r901_Ok - 1, r899_top), r250_corner(r250_RIGHTSB - r901_Ok, r899_top), r250_corner(r250_RIGHTSB - r901_Ok, 0)), r250_dispiro(r250_widths.lhs(), r250_flat(r250_RIGHTSB - r901_Ok, 0), r250_curl(r250_SB + r250_STROKE, r903_attach2))));
                    }());
                else
                    (function () {
                        var r907_attach = r899_top * (r250_SLAB ? 0.325 : 0.375);
                        var r907_attach2 = r250_SLAB ? r1_mix(r250_SB, r250_RIGHTSB, 0.48) : r250_MIDDLE;
                        r901_currentGlyph.include(r250_dispiro(r250_g4.down.start(r250_RIGHTSB, r899_top, r250_widths.heading(0, r250_STROKE * (r250_SLAB ? 1.15 : 1.05) * (r250_WIDTH * 2 / r250_UPM), r250_DOWNWARD)), r250_bezcontrols(0, r250_SLAB ? 0.1 : 0.2, 0.5, r250_SLAB ? 0.55 : 0.65, 8), r250_g4(r250_SB + r250_STROKE, r907_attach, r250_widths(0, r901_fine))));
                        return r901_currentGlyph.include(r250_dispiro(r250_widths.center(), r250_g4.up.start(r250_RIGHTSB - r250_O - r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_heading(r250_UPWARD)), r250_quadcontrols(0, r250_SLAB ? 0.125 : 0.25, 8), r250_g4(r907_attach2, r899_top * 0.61, r250_widths.center(r901_fine))));
                    }());
                if (r250_SLAB)
                    (function () {
                        var r911_topSerifX = r250_RIGHTSB - r901_OkSerif - (r250_STROKE * (r250_SLAB ? 1.15 : 1.05) * (r250_WIDTH * 2 / r250_UPM) / 2 - r250_HALFSTROKE) * r250_HVCONTRAST * (r250_para.isItalic ? 1 : 0) - r250_HALFSTROKE * 0.5 * r250_HVCONTRAST;
                        var r911_bottomSerifX = r250_RIGHTSB - r901_OkSerif - r250_O * (r250_para.isItalic ? 1 : 0);
                        r901_currentGlyph.include(r250_RightwardTopSerif(r911_topSerifX, r899_top, r250_SIDEJUT + r250_HALFSTROKE * 0.5 * r250_HVCONTRAST));
                        return r901_currentGlyph.include(r250_RightwardBottomSerif(r911_bottomSerifX, 0, r250_SIDEJUT));
                    }());
                return void 0;
            };
        };
        (function _r898_t1() {
            var _r915_t0 = this;
            var r915_currentGlyph = _r915_t0;
            if (!r915_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.72')
                r250_glyphList.pop();
            r915_currentGlyph['set-width'](r250_WIDTH);
            r915_currentGlyph.include(r250_markset.capital);
            r915_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_CAP));
            r915_currentGlyph.include(r898_KShape(r250_CAP, r250_para.straightBar));
            if (r250_SLAB) {
                r915_currentGlyph.include(r250_CenterTopSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, r250_CAP, r250_JUT));
                r915_currentGlyph.include(r250_CenterBottomSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
            }
            r915_currentGlyph.include(r250_Translate(r898_KBalance, 0));
            r250_xn$save$2Lrc5.call(r915_currentGlyph, 'K', 'K');
            r250_xn$save$2Lrc5.call(r915_currentGlyph, 'Kappa', 922);
            r250_xn$save$2Lrc5.call(r915_currentGlyph, 'cyrKa', 1050);
            r250_dependencyProfile[r915_currentGlyph.name] = r250_getDependencyProfile(r915_currentGlyph);
            return r915_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.72', r250_xn$donothing$2Lrc0b)));
        r250_composite(r250_glyphs.cyrKa, r250_CyrDescender(r250_RIGHTSB - r250_O), r250_xn$intounicode$5sIl(1178));
        (function _r898_t2() {
            var _r927_t0 = this;
            var r927_currentGlyph = _r927_t0;
            if (!r927_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.73')
                r250_glyphList.pop();
            r927_currentGlyph['set-width'](r250_WIDTH);
            r927_currentGlyph.include(r250_markset.b);
            r927_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_CAP));
            r927_currentGlyph.include(r898_KShape(r250_XH, r250_para.straightBar));
            if (r250_SLAB) {
                r927_currentGlyph.include(r250_LeftwardTopSerif(r250_SB, r250_CAP, r250_SIDEJUT));
                if (!r250_para.isItalic) {
                    r927_currentGlyph.include(r250_CenterBottomSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                    r927_currentGlyph['tag-contour']('serifLB');
                }
            }
            r927_currentGlyph.include(r250_Translate(r898_KBalance, 0));
            r250_xn$save$2Lrc5.call(r927_currentGlyph, 'k', 'k');
            r250_dependencyProfile[r927_currentGlyph.name] = r250_getDependencyProfile(r927_currentGlyph);
            return r927_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.73', r250_xn$donothing$2Lrc0b)));
        (function _r898_t3() {
            var _r938_t0 = this;
            var r938_currentGlyph = _r938_t0;
            if (!r938_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.74')
                r250_glyphList.pop();
            r938_currentGlyph['set-width'](r250_WIDTH);
            r938_currentGlyph.include(r250_markset.e);
            r938_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_XH));
            r938_currentGlyph.include(r898_KShape(r250_XH, r250_para.straightBar));
            if (r250_SLAB)
                r938_currentGlyph.include(r250_LeftwardTopSerif(r250_SB, r250_XH, r250_SIDEJUT));
            r938_currentGlyph.include(r250_Translate(r898_KBalance, 0));
            r250_xn$save$2Lrc5.call(r938_currentGlyph, 'kappa', 954);
            r250_dependencyProfile[r938_currentGlyph.name] = r250_getDependencyProfile(r938_currentGlyph);
            return r938_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.74', r250_xn$donothing$2Lrc0b)));
        (function _r898_t4() {
            var _r947_t0 = this;
            var r947_currentGlyph = _r947_t0;
            if (!r947_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.75')
                r250_glyphList.pop();
            r947_currentGlyph['set-width'](r250_WIDTH);
            r947_currentGlyph.include(r250_markset.e);
            r947_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_XH));
            r947_currentGlyph.include(r898_KShape(r250_XH, r250_para.straightBar));
            if (r250_SLAB) {
                r947_currentGlyph.include(r250_CenterBottomSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                r947_currentGlyph.include(r250_CenterTopSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, r250_XH, r250_JUT));
            }
            r947_currentGlyph.include(r250_Translate(r898_KBalance, 0));
            r250_xn$save$2Lrc5.call(r947_currentGlyph, 'cyrka', 1082);
            r250_xn$save$2Lrc5.call(r947_currentGlyph, 'latinkappa', 312);
            r250_dependencyProfile[r947_currentGlyph.name] = r250_getDependencyProfile(r947_currentGlyph);
            return r947_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.75', r250_xn$donothing$2Lrc0b)));
        r250_composite(r250_glyphs.cyrka, r250_CyrDescender(r250_RIGHTSB - r250_O), r250_xn$intounicode$5sIl(1179));
        (function _r898_t5() {
            var _r958_t0 = this;
            var r958_currentGlyph = _r958_t0;
            if (!r958_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.76')
                r250_glyphList.pop();
            r958_currentGlyph.include(r250_markset.capital);
            r958_currentGlyph.include(r898_KShape(r250_CAP, r250_para.straightBar));
            r958_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_CAP - r250_HOOK - r250_HALFSTROKE));
            r958_currentGlyph.include(r250_VerticalHook(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, r250_CAP - r250_HOOK - r250_HALFSTROKE, r250_HOOKX, -r250_HOOK));
            r250_xn$save$2Lrc5.call(r958_currentGlyph, 'Khooktop', 408);
            r250_dependencyProfile[r958_currentGlyph.name] = r250_getDependencyProfile(r958_currentGlyph);
            return r958_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.76', r250_xn$donothing$2Lrc0b)));
        (function _r898_t6() {
            var _r965_t0 = this;
            var r965_currentGlyph = _r965_t0;
            if (!r965_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.77')
                r250_glyphList.pop();
            r965_currentGlyph.include(r250_markset.b);
            r965_currentGlyph.include(r898_KShape(r250_XH, r250_para.straightBar));
            r965_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_CAP - r250_HOOK - r250_HALFSTROKE));
            r965_currentGlyph.include(r250_VerticalHook(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, r250_CAP - r250_HOOK - r250_HALFSTROKE, r250_HOOKX, -r250_HOOK));
            r250_xn$save$2Lrc5.call(r965_currentGlyph, 'khooktop', 409);
            r250_dependencyProfile[r965_currentGlyph.name] = r250_getDependencyProfile(r965_currentGlyph);
            return r965_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.77', r250_xn$donothing$2Lrc0b)));
        r250_turned(void 0, 42928, 'K', r250_MIDDLE, r250_CAP / 2);
        r250_turned(void 0, 670, 'k', r250_MIDDLE, r250_XH / 2, r250_markset.p);
        return [r898_KShape];
    }();
    var r250_KShape = _r250_t11[0];
    (function () {
        var r972_BShape = function _r972_t0(r973_top) {
            return function _r973_t2() {
                var _r975_t0 = this;
                var r975_currentGlyph = _r975_t0;
                var r975_stroke = r250_adviceBlackness2(2.875, 2, r250_XH);
                var r975_bowl = r973_top * 0.52 + r975_stroke / 2;
                var r975_barleft = r250_SB;
                var r975_curvleft = r250_RIGHTSB - r250_SB * 0.5 - (r973_top - (r975_bowl - r975_stroke)) * 0.45;
                var r975_curvleftTop = Math.min(r975_curvleft, r250_RIGHTSB - r250_SB * 0.5 - r250_OX - r975_stroke * 1.375);
                var r975_fine = r975_stroke * r250_CTHIN;
                r975_currentGlyph.include(r250_dispiro(r250_widths.rhs(r975_stroke), r250_flat(r975_barleft - r250_O, r973_top, r250_heading(r250_RIGHTWARD)), r250_curl(r975_curvleftTop - r250_CORRECTION_OMIDS, r973_top), r250_archv(), r250_g4(r250_RIGHTSB - r250_SB * 0.5 - r250_OX, r1_mix(r973_top, r975_bowl - r975_stroke, r250_SMOOTHB / (r250_SMOOTHA + r250_SMOOTHB))), r250_arcvh(), r250_flat(r975_curvleftTop + r250_CORRECTION_OMIDS, r975_bowl - r975_fine, r250_widths.rhs(r975_fine)), r250_curl(r975_barleft - r250_O, r975_bowl - r975_fine, r250_heading(r250_LEFTWARD))));
                r975_currentGlyph.include(r250_dispiro(r250_widths.rhs(r975_fine), r250_flat(r975_barleft - r250_O, r975_bowl - r975_stroke + r975_fine, r250_heading(r250_RIGHTWARD)), r250_curl(r975_curvleft - r250_CORRECTION_OMIDS, r975_bowl - r975_stroke + r975_fine), r250_archv(), r250_g4(r250_RIGHTSB - r250_OX, r1_mix(r975_bowl, 0, r250_SMOOTHB / (r250_SMOOTHA + r250_SMOOTHB)), r250_widths.rhs(r975_stroke)), r250_arcvh(), r250_flat(r975_curvleft + r250_CORRECTION_OMIDS, 0), r250_curl(r975_barleft - r250_O, 0, r250_heading(r250_LEFTWARD))));
                r975_currentGlyph.include(r250_VBarLeft(r975_barleft, 0, r973_top, r975_stroke));
                if (r250_SLAB) {
                    r975_currentGlyph.include(r250_LeftwardTopSerif(r975_barleft, r973_top, r250_SIDEJUT));
                    r975_currentGlyph['tag-contour']('serifLT');
                    r975_currentGlyph.include(r250_LeftwardBottomSerif(r975_barleft, 0, r250_SIDEJUT));
                    r975_currentGlyph['tag-contour']('serifLB');
                }
                return void 0;
            };
        };
        (function _r972_t1() {
            var _r984_t0 = this;
            var r984_currentGlyph = _r984_t0;
            if (!r984_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.78')
                r250_glyphList.pop();
            r984_currentGlyph['set-width'](r250_WIDTH);
            r984_currentGlyph.include(r250_markset.capital);
            r984_currentGlyph.include(r972_BShape(r250_CAP));
            r250_xn$save$2Lrc5.call(r984_currentGlyph, 'B', 'B');
            r250_xn$save$2Lrc5.call(r984_currentGlyph, 'Beta', 914);
            r250_xn$save$2Lrc5.call(r984_currentGlyph, 'cyrVe', 1042);
            r250_dependencyProfile[r984_currentGlyph.name] = r250_getDependencyProfile(r984_currentGlyph);
            return r984_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.78', r250_xn$donothing$2Lrc0b)));
        (function _r972_t2() {
            var _r992_t0 = this;
            var r992_currentGlyph = _r992_t0;
            if (!r992_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.79')
                r250_glyphList.pop();
            r250_includeGlyphPart(r992_currentGlyph, r250_glyphs, 'B', r250_AS_BASE);
            r992_currentGlyph['eject-contour']('serifLT');
            r992_currentGlyph.include(r250_LeftHook(r250_SB, r250_CAP));
            r250_xn$save$2Lrc5.call(r992_currentGlyph, 'Bhookleft', 385);
            r250_dependencyProfile[r992_currentGlyph.name] = r250_getDependencyProfile(r992_currentGlyph);
            return r992_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.79', r250_xn$donothing$2Lrc0b)));
        var r972_ItalicCyrveShape = function _r972_t3(r997_top) {
            return function _r997_t2() {
                var _r999_t0 = this;
                var r999_currentGlyph = _r999_t0;
                var r999_stroke = r250_adviceBlackness2(2.875, 2, r997_top);
                var r999_mid = r1_mix(r250_RIGHTSB, r250_SB, 0.65);
                var r999_midy = r997_top * r250_BARPOS;
                var r999_smb = r997_top - r1_mix(r999_midy + r999_stroke / 2, r997_top - r250_O - r999_stroke, r250_SMOOTHA / (r250_SMOOTHA + r250_SMOOTHB)) + r250_TANSLANT * r250_HVCONTRAST * r999_stroke;
                var r999_sma = r1_mix(r999_stroke + r250_O, r999_midy - r999_stroke / 2, r250_SMOOTHA / (r250_SMOOTHA + r250_SMOOTHB)) - r250_TANSLANT * r250_HVCONTRAST * r999_stroke;
                r999_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r999_mid, r999_midy - r999_stroke / 2, r250_heading(r250_RIGHTWARD)), r250_curl(r250_MIDDLE, r999_midy - r999_stroke / 2), r250_archv(), r250_g4(r250_RIGHTSB + r250_O, r997_top - r999_smb), r250_arcvh(), r250_g4(r250_MIDDLE - r250_CORRECTION_OMIDS, r997_top - r250_O), r250_archv(), r250_flat.ai(r250_SB + r250_O, r997_top - r250_SMALLSMOOTHA), r250_curl.ai(r250_SB + r250_O, r250_SMALLSMOOTHB), r250_arcvh(), r250_g4(r250_MIDDLE + r250_CORRECTION_OMIDS, r250_O), r250_archv(), r250_g4(r250_RIGHTSB - r250_O, r999_sma), r250_arcvh(), r250_flat(r250_MIDDLE, r999_midy + r999_stroke / 2), r250_curl(r999_mid, r999_midy + r999_stroke / 2, r250_heading(r250_LEFTWARD))));
                return void 0;
            };
        };
        (function _r972_t4() {
            var _r1002_t0 = this;
            var r1002_currentGlyph = _r1002_t0;
            if (!r1002_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.80')
                r250_glyphList.pop();
            r1002_currentGlyph.include(r250_markset.e);
            r1002_currentGlyph.include(r972_ItalicCyrveShape(r250_XH));
            r250_xn$save$2Lrc5.call(r1002_currentGlyph, 'cyrve.italic');
            r250_xn$save$2Lrc5.call(r1002_currentGlyph, 'closeturnepsilon', 606);
            r250_dependencyProfile[r1002_currentGlyph.name] = r250_getDependencyProfile(r1002_currentGlyph);
            return r1002_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.80', r250_xn$donothing$2Lrc0b)));
        (function _r972_t5() {
            var _r1008_t0 = this;
            var r1008_currentGlyph = _r1008_t0;
            if (!r1008_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.81')
                r250_glyphList.pop();
            r1008_currentGlyph.include(r250_markset.e);
            r1008_currentGlyph.include(r972_ItalicCyrveShape(r250_CAP));
            r250_xn$save$2Lrc5.call(r1008_currentGlyph, 'cyrve.BGR');
            r250_dependencyProfile[r1008_currentGlyph.name] = r250_getDependencyProfile(r1008_currentGlyph);
            return r1008_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.81', r250_xn$donothing$2Lrc0b)));
        (function _r972_t6() {
            var _r1013_t0 = this;
            var r1013_currentGlyph = _r1013_t0;
            if (!r1013_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.82')
                r250_glyphList.pop();
            r1013_currentGlyph.include(r250_markset.e);
            r1013_currentGlyph.include(r972_BShape(r250_XH));
            r250_xn$save$2Lrc5.call(r1013_currentGlyph, 'cyrve.upright');
            r250_xn$save$2Lrc5.call(r1013_currentGlyph, 'smcpB', 665);
            r250_dependencyProfile[r1013_currentGlyph.name] = r250_getDependencyProfile(r1013_currentGlyph);
            return r1013_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.82', r250_xn$donothing$2Lrc0b)));
        r250_xn$italicvariant$7Hrq('cyrve', 1074);
        (function _r972_t7() {
            var _r1019_t0 = this;
            var r1019_currentGlyph = _r1019_t0;
            if (!r1019_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.83')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1019_currentGlyph, r250_glyphs, 'B', r250_AS_BASE);
            r1019_currentGlyph.include(r250_HOverlayBar(r1_mix(r250_SB, 0, 0.7), r1_mix(r250_SB, r250_RIGHTSB, 0.5), r1_mix(0, r250_CAP, 0.3), Math.min((r250_CAP - r250_STROKE * 3) / 4, r250_OVERLAYSTROKE)));
            r250_xn$save$2Lrc5.call(r1019_currentGlyph, 'Bbar', 579);
            r250_dependencyProfile[r1019_currentGlyph.name] = r250_getDependencyProfile(r1019_currentGlyph);
            return r1019_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.83', r250_xn$donothing$2Lrc0b)));
        return function _r972_t8() {
            var _r1024_t0 = this;
            var r1024_currentGlyph = _r1024_t0;
            if (!r1024_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.84')
                r250_glyphList.pop();
            r1024_currentGlyph.include(r250_markset.if);
            var r1024_ymiddle = r1_mix(0, r250_CAP, 0.55) - r250_HALFSTROKE;
            var r1024_fine = r250_STROKE * r250_CTHIN;
            r1024_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r250_SB, r250_DESCENDER, r250_heading(r250_UPWARD)), r250_curl(r250_SB, r250_CAP - r250_SMALLSMOOTHA), r250_arcvh(), r250_g4(r1_mix(r250_SB, r250_RIGHTSB - r250_OX + r250_O * 3, 0.5) - r250_CORRECTION_OMIDS, r250_CAPO), r250_archv(), r250_g4(r250_RIGHTSB - r250_OX + r250_O * 3, r1_mix(r250_CAP, r1024_ymiddle, 0.5)), r250_arcvh(), r250_flat(r1_mix(r250_SB, r250_RIGHTSB - r250_OX + r250_O * 3, 0.5), r1024_ymiddle + r250_STROKE - r1024_fine, r250_widths.rhs(r1024_fine)), r250_curl(r1_mix(r250_SB, r250_RIGHTSB, 0.3), r1024_ymiddle + r250_STROKE - r1024_fine)));
            r1024_currentGlyph.include(r250_dispiro(r250_widths.rhs(r1024_fine), r250_flat(r1_mix(r250_SB, r250_RIGHTSB, 0.3) - (2 * r1024_fine - r250_STROKE) * r250_TANSLANT, r1024_ymiddle + r1024_fine), r250_curl(r250_RIGHTSB - r1024_ymiddle / 2 - r250_HALFSTROKE, r1024_ymiddle + r1024_fine), r250_archv(), r250_g4(r250_RIGHTSB - r250_OX, r1_mix(0, r1024_ymiddle + r250_STROKE, 0.5), r250_widths.rhs()), r250_arcvh(), r250_flat(r250_RIGHTSB - r1024_ymiddle / 2 - r250_HALFSTROKE, 0), r250_curl(r250_SB + r250_HALFSTROKE, 0, r250_heading(r250_LEFTWARD))));
            r250_xn$save$2Lrc5.call(r1024_currentGlyph, 'beta', 946);
            r250_dependencyProfile[r1024_currentGlyph.name] = r250_getDependencyProfile(r1024_currentGlyph);
            return r1024_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.84', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r1030_t0() {
            var _r1032_t0 = this;
            var r1032_currentGlyph = _r1032_t0;
            if (!r1032_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.85')
                r250_glyphList.pop();
            r1032_currentGlyph['set-width'](r250_WIDTH);
            r1032_currentGlyph.include(r250_markset.b);
            r1032_currentGlyph.include(r250_OBarLeftShape());
            r1032_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_CAP));
            if (r250_SLAB) {
                r1032_currentGlyph.include(r250_LeftwardTopSerif(r250_SB, r250_CAP, r250_SIDEJUT));
                r1032_currentGlyph['tag-contour']('serifLT');
                r1032_currentGlyph.include(r250_LeftwardBottomSerif(r250_SB, 0, r250_SIDEJUT));
                r1032_currentGlyph['tag-contour']('serifLB');
            }
            r250_xn$save$2Lrc5.call(r1032_currentGlyph, 'b', 'b');
            r250_dependencyProfile[r1032_currentGlyph.name] = r250_getDependencyProfile(r1032_currentGlyph);
            return r1032_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.85', r250_xn$donothing$2Lrc0b)));
        (function _r1030_t1() {
            var _r1043_t0 = this;
            var r1043_currentGlyph = _r1043_t0;
            if (!r1043_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.86')
                r250_glyphList.pop();
            r1043_currentGlyph.include(r250_markset.b);
            r1043_currentGlyph.include(r250_OBarLeftShape());
            r1043_currentGlyph.include(r250_HooktopLeftBar());
            if (r250_SLAB) {
                r1043_currentGlyph.include(r250_LeftwardBottomSerif(r250_SB, 0, r250_SIDEJUT));
                r1043_currentGlyph['tag-contour']('serifLB');
            }
            r250_xn$save$2Lrc5.call(r1043_currentGlyph, 'bhooktop', 595);
            r250_dependencyProfile[r1043_currentGlyph.name] = r250_getDependencyProfile(r1043_currentGlyph);
            return r1043_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.86', r250_xn$donothing$2Lrc0b)));
        (function _r1030_t2() {
            var _r1051_t0 = this;
            var r1051_currentGlyph = _r1051_t0;
            if (!r1051_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.87')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1051_currentGlyph, r250_glyphs, 'b', r250_AS_BASE);
            r1051_currentGlyph.include(r250_HOverlayBar(r1_mix(r250_SB, 0, 0.7), r1_mix(r250_SB, r250_RIGHTSB, 0.5), r1_mix(r250_XH, r250_CAP, 0.45)));
            r250_xn$save$2Lrc5.call(r1051_currentGlyph, 'bbar', 384);
            r250_dependencyProfile[r1051_currentGlyph.name] = r250_getDependencyProfile(r1051_currentGlyph);
            return r1051_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.87', r250_xn$donothing$2Lrc0b)));
        (function _r1030_t3() {
            var _r1056_t0 = this;
            var r1056_currentGlyph = _r1056_t0;
            if (!r1056_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.88')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1056_currentGlyph, r250_glyphs, 'dotAbove');
            r1056_currentGlyph['apply-transform'](r250_Translate(r250_WIDTH + r250_HALFSTROKE, 0));
            r250_includeGlyphPart(r1056_currentGlyph, r250_glyphs, 'b', r250_AS_BASE);
            r250_xn$save$2Lrc5.call(r1056_currentGlyph, 'bdot', 7683);
            r250_dependencyProfile[r1056_currentGlyph.name] = r250_getDependencyProfile(r1056_currentGlyph);
            return r1056_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.88', r250_xn$donothing$2Lrc0b)));
        (function _r1030_t4() {
            var _r1062_t0 = this;
            var r1062_currentGlyph = _r1062_t0;
            if (!r1062_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.89')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1062_currentGlyph, r250_glyphs, 'b', r250_AS_BASE);
            r1062_currentGlyph.include(r250_HBarTop(r250_SB - r250_O, r1_mix(r250_SB, r250_RIGHTSB, 0.9), r250_CAP));
            if (r250_SLAB)
                r1062_currentGlyph.include(r250_DownwardRightSerif(r1_mix(r250_SB, r250_RIGHTSB, 0.9), r250_CAP, r250_VJUT));
            r250_xn$save$2Lrc5.call(r1062_currentGlyph, 'latinbe', 387);
            r250_dependencyProfile[r1062_currentGlyph.name] = r250_getDependencyProfile(r1062_currentGlyph);
            return r1062_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.89', r250_xn$donothing$2Lrc0b)));
        return function _r1030_t5() {
            var _r1068_t0 = this;
            var r1068_currentGlyph = _r1068_t0;
            if (!r1068_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.90')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1068_currentGlyph, r250_glyphs, 'b', r250_AS_BASE);
            r1068_currentGlyph['eject-contour']('serifLT');
            var r1068_s = Math.max(r250_XH * 0.1, r250_STROKE);
            r1068_currentGlyph['start-from'](r250_SB - r250_O, r250_CAP);
            r1068_currentGlyph['line-to'](r250_SB, r250_CAP);
            r1068_currentGlyph['line-to'](r250_SB - r1068_s, r250_CAP - r1068_s);
            r1068_currentGlyph['line-to'](r250_SB, r250_CAP - r1068_s * 2);
            r1068_currentGlyph['line-to'](r250_SB - r250_O, r250_CAP - r1068_s * 2);
            r1068_currentGlyph['reverse-last']();
            r250_xn$save$2Lrc5.call(r1068_currentGlyph, 'zhuangtonesix', 389);
            r250_dependencyProfile[r1068_currentGlyph.name] = r250_getDependencyProfile(r1068_currentGlyph);
            return r1068_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.90', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r1079_t0() {
            var _r1081_t0 = this;
            var r1081_currentGlyph = _r1081_t0;
            if (!r1081_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.91')
                r250_glyphList.pop();
            r1081_currentGlyph['set-width'](r250_WIDTH);
            r1081_currentGlyph.include(r250_markset.capital);
            var r1081_dsmooth = Math.min(r250_CAP * 0.499, r250_SMOOTH * 1.35);
            var r1081_bsmooth = Math.min((r250_WIDTH - r250_SB * 2) * 0.75, r250_SMOOTH * 1.1);
            var r1081_barleft = r250_SB;
            r1081_currentGlyph.include(r250_VBarLeft(r1081_barleft, 0, r250_CAP));
            r1081_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r1081_barleft - r250_O, r250_CAP, r250_heading(r250_RIGHTWARD)), r250_curl(r250_RIGHTSB - r1081_bsmooth, r250_CAP), r250_archv(), r250_flat(r250_RIGHTSB - r250_OX, r250_CAP - r1081_dsmooth - (r250_SMOOTHB - r250_SMOOTH)), r250_curl(r250_RIGHTSB - r250_OX, r1081_dsmooth + (r250_SMOOTHA - r250_SMOOTH)), r250_arcvh(), r250_flat(r250_RIGHTSB - r1081_bsmooth, 0), r250_curl(r1081_barleft - r250_O, 0, r250_heading(r250_LEFTWARD))));
            if (r250_SLAB) {
                r1081_currentGlyph.include(r250_LeftwardTopSerif(r1081_barleft, r250_CAP, r250_SIDEJUT));
                r1081_currentGlyph['tag-contour']('serifLT');
                r1081_currentGlyph.include(r250_LeftwardBottomSerif(r1081_barleft, 0, r250_SIDEJUT));
                r1081_currentGlyph['tag-contour']('serifLB');
            }
            r250_xn$save$2Lrc5.call(r1081_currentGlyph, 'D', 'D');
            r250_dependencyProfile[r1081_currentGlyph.name] = r250_getDependencyProfile(r1081_currentGlyph);
            return r1081_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.91', r250_xn$donothing$2Lrc0b)));
        (function _r1079_t1() {
            var _r1092_t0 = this;
            var r1092_currentGlyph = _r1092_t0;
            if (!r1092_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.92')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1092_currentGlyph, r250_glyphs, 'D', r250_AS_BASE);
            r1092_currentGlyph.include(r250_HOverlayBar(r250_SB * 0.3, r1_mix(r250_SB + r250_STROKE, r250_RIGHTSB - r250_STROKE, 0.55), r250_CAP * r250_OVERLAYPOS));
            r250_xn$save$2Lrc5.call(r1092_currentGlyph, 'Eth', 208);
            r250_xn$save$2Lrc5.call(r1092_currentGlyph, 'Dcroat', 272);
            r250_xn$save$2Lrc5.call(r1092_currentGlyph, 'arficanD', 393);
            r250_dependencyProfile[r1092_currentGlyph.name] = r250_getDependencyProfile(r1092_currentGlyph);
            return r1092_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.92', r250_xn$donothing$2Lrc0b)));
        return function _r1079_t2() {
            var _r1099_t0 = this;
            var r1099_currentGlyph = _r1099_t0;
            if (!r1099_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.93')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1099_currentGlyph, r250_glyphs, 'D', r250_AS_BASE);
            r1099_currentGlyph['eject-contour']('serifLT');
            r1099_currentGlyph.include(r250_LeftHook(r250_SB, r250_CAP));
            r250_xn$save$2Lrc5.call(r1099_currentGlyph, 'Dhookleft', 394);
            r250_dependencyProfile[r1099_currentGlyph.name] = r250_getDependencyProfile(r1099_currentGlyph);
            return r1099_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.93', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r1105_t0() {
            var _r1107_t0 = this;
            var r1107_currentGlyph = _r1107_t0;
            if (!r1107_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.94')
                r250_glyphList.pop();
            r1107_currentGlyph['set-width'](r250_WIDTH);
            r1107_currentGlyph.include(r250_markset.b);
            r1107_currentGlyph.include(r250_OBarRightShape());
            r1107_currentGlyph.include(r250_VBarRight(r250_RIGHTSB, 0, r250_CAP));
            if (r250_SLAB) {
                r1107_currentGlyph.include(r250_RightwardBottomSerif(r250_RIGHTSB, 0, r250_SIDEJUT));
                r1107_currentGlyph['tag-contour']('serifRB');
                r1107_currentGlyph.include(r250_LeftwardTopSerif(r250_RIGHTSB - r250_STROKE * r250_HVCONTRAST, r250_CAP, r250_SIDEJUT));
            }
            r250_xn$save$2Lrc5.call(r1107_currentGlyph, 'd', 'd');
            r250_dependencyProfile[r1107_currentGlyph.name] = r250_getDependencyProfile(r1107_currentGlyph);
            return r1107_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.94', r250_xn$donothing$2Lrc0b)));
        (function _r1105_t1() {
            var _r1117_t0 = this;
            var r1117_currentGlyph = _r1117_t0;
            if (!r1117_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.95')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1117_currentGlyph, r250_glyphs, 'd', r250_AS_BASE);
            r1117_currentGlyph.include(r250_HBar(r1_mix(r250_SB + r250_STROKE, r250_RIGHTSB - r250_STROKE, 0.5), r1_mix(r250_RIGHTSB, r250_WIDTH, 0.7), r1_mix(r250_XH, r250_CAP, 0.45), r250_OVERLAYSTROKE));
            r250_xn$save$2Lrc5.call(r1117_currentGlyph, 'dcroat', 273);
            r250_dependencyProfile[r1117_currentGlyph.name] = r250_getDependencyProfile(r1117_currentGlyph);
            return r1117_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.95', r250_xn$donothing$2Lrc0b)));
        (function _r1105_t2() {
            var _r1122_t0 = this;
            var r1122_currentGlyph = _r1122_t0;
            if (!r1122_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.96')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1122_currentGlyph, r250_glyphs, 'commaAbove');
            r1122_currentGlyph['apply-transform'](r250_Translate(r250_WIDTH + (r250_RIGHTSB - r250_SB) / 2 + r250_markExtend / 2, 0));
            var r1122_f = r250_Widen(['d'], 0.95, 1);
            r1122_currentGlyph.include(r1122_f.d);
            r1122_currentGlyph.include(r250_markset.b);
            r250_xn$save$2Lrc5.call(r1122_currentGlyph, 'dcaron', 271);
            r250_dependencyProfile[r1122_currentGlyph.name] = r250_getDependencyProfile(r1122_currentGlyph);
            return r1122_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.96', r250_xn$donothing$2Lrc0b)));
        (function _r1105_t3() {
            var _r1129_t0 = this;
            var r1129_currentGlyph = _r1129_t0;
            if (!r1129_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.97')
                r250_glyphList.pop();
            var r1129_fine = r250_adviceBlackness(4);
            var r1129_rinner = r1_clamp(r250_WIDTH * 0.065, r250_XH * 0.05, r1129_fine * 0.35);
            var r1129_m1 = Math.min(r250_RIGHTSB, r250_WIDTH - r1129_rinner * 2 - r1129_fine - r250_OX);
            var r1129_x2 = r1_mix(r250_SB, r1129_m1, 0.5);
            var r1129_y2 = 0 - r1129_fine - r1129_rinner * 1.25;
            r1129_currentGlyph.include(r250_markset.e);
            r1129_currentGlyph.include(r250_OBarRightShape(r250_XH, r1129_m1));
            r1129_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r1129_m1, r250_CAP, r250_heading(r250_DOWNWARD)), r250_curl(r1129_m1, r1129_rinner * 2 + r1129_fine), r250_CurlyTail(r1129_fine, r1129_rinner, r1129_m1, 0, r1129_m1 + r1129_rinner * 2 + r1129_fine, r1129_x2, r1129_y2)));
            if (r250_SLAB)
                r1129_currentGlyph.include(r250_LeftwardTopSerif(r1129_m1 - r250_STROKE * r250_HVCONTRAST, r250_CAP, r250_SIDEJUT));
            r250_xn$save$2Lrc5.call(r1129_currentGlyph, 'dcurlytail', 545);
            r250_dependencyProfile[r1129_currentGlyph.name] = r250_getDependencyProfile(r1129_currentGlyph);
            return r1129_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.97', r250_xn$donothing$2Lrc0b)));
        (function _r1105_t4() {
            var _r1136_t0 = this;
            var r1136_currentGlyph = _r1136_t0;
            if (!r1136_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.98')
                r250_glyphList.pop();
            r1136_currentGlyph.include(r250_markset.b);
            r1136_currentGlyph.include(r250_OBarRightShape());
            r1136_currentGlyph.include(r250_VBarRight(r250_RIGHTSB, 0, r250_XH));
            r1136_currentGlyph.include(r250_RightwardBottomSerif(r250_RIGHTSB, 0, r250_SIDEJUT));
            r1136_currentGlyph['tag-contour']('serifRB');
            r1136_currentGlyph.include(r250_VerticalHook(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, r250_XH, r250_HOOKX, -r250_HOOK));
            r250_xn$save$2Lrc5.call(r1136_currentGlyph, 'dhooktop', 599);
            r250_dependencyProfile[r1136_currentGlyph.name] = r250_getDependencyProfile(r1136_currentGlyph);
            return r1136_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.98', r250_xn$donothing$2Lrc0b)));
        (function _r1105_t5() {
            var _r1145_t0 = this;
            var r1145_currentGlyph = _r1145_t0;
            if (!r1145_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.99')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1145_currentGlyph, r250_glyphs, 'dotAbove');
            r1145_currentGlyph['apply-transform'](r250_Translate(r250_WIDTH - r250_HALFSTROKE, 0));
            r250_includeGlyphPart(r1145_currentGlyph, r250_glyphs, 'd', r250_AS_BASE);
            r250_xn$save$2Lrc5.call(r1145_currentGlyph, 'ddot', 7691);
            r250_dependencyProfile[r1145_currentGlyph.name] = r250_getDependencyProfile(r1145_currentGlyph);
            return r1145_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.99', r250_xn$donothing$2Lrc0b)));
        return function _r1105_t6() {
            var _r1151_t0 = this;
            var r1151_currentGlyph = _r1151_t0;
            if (!r1151_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.100')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1151_currentGlyph, r250_glyphs, 'd', r250_AS_BASE);
            r1151_currentGlyph.include(r250_HBarTop(r1_mix(r250_RIGHTSB, r250_SB, 0.9), r250_RIGHTSB + r250_O, r250_CAP));
            if (r250_SLAB)
                r1151_currentGlyph.include(r250_DownwardLeftSerif(r1_mix(r250_RIGHTSB, r250_SB, 0.9), r250_CAP, r250_VJUT));
            r250_xn$save$2Lrc5.call(r1151_currentGlyph, 'latinde', 396);
            r250_dependencyProfile[r1151_currentGlyph.name] = r250_getDependencyProfile(r1151_currentGlyph);
            return r1151_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.100', r250_xn$donothing$2Lrc0b));
    }());
    var _r250_t12 = function () {
        var r1157_PShape = function _r1157_t0(r1158_top, r1158__mul, r1158_bp) {
            return function _r1158_t2() {
                var _r1160_t0 = this;
                var r1160_currentGlyph = _r1160_t0;
                var r1160_mul = r1_fallback(r1158__mul, 1.25);
                var r1160_bowlTop = r1158_top * 1;
                var r1160_bowlBottom = (r1158_top - r250_STROKE) * r1_fallback(r1158_bp, r250_PBARPOS) - r250_HALFSTROKE;
                var r1160_turn = r1_mix(r1160_bowlTop, r1160_bowlBottom, r250_SMOOTHB / (r250_SMOOTHA + r250_SMOOTHB));
                var r1160_turnRadius = (r1160_bowlTop - r1160_bowlBottom) * 0.45;
                r1160_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r250_SB * r1160_mul - r250_O, r1160_bowlTop, r250_heading(r250_RIGHTWARD)), r250_curl(r250_RIGHTSB - r1160_turnRadius - r250_CORRECTION_OMIDS, r1160_bowlTop), r250_archv(), r250_g4(r250_RIGHTSB - r250_OX, r1160_turn), r250_arcvh(), r250_flat(r250_RIGHTSB - r1160_turnRadius + r250_CORRECTION_OMIDS, r1160_bowlBottom), r250_curl(r250_SB * r1160_mul - r250_O, r1160_bowlBottom, r250_heading(r250_LEFTWARD))));
                r1160_currentGlyph.include(r250_VBarLeft(r250_SB * r1160_mul, 0, r1158_top));
                r1160_currentGlyph['tag-contour']('strokeL');
                if (r250_SLAB) {
                    r1160_currentGlyph.include(r250_LeftwardTopSerif(r250_SB * r1160_mul, r1158_top, r250_SIDEJUT));
                    r1160_currentGlyph['tag-contour']('serifLT');
                    r1160_currentGlyph.include(r250_CenterBottomSerif(r250_SB * r1160_mul + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                }
                return void 0;
            };
        };
        (function _r1157_t1() {
            var _r1168_t0 = this;
            var r1168_currentGlyph = _r1168_t0;
            if (!r1168_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.101')
                r250_glyphList.pop();
            r1168_currentGlyph['set-width'](r250_WIDTH);
            r1168_currentGlyph.include(r250_markset.capital);
            r1168_currentGlyph.include(r1157_PShape(r250_CAP));
            r250_xn$save$2Lrc5.call(r1168_currentGlyph, 'P', 'P');
            r250_xn$save$2Lrc5.call(r1168_currentGlyph, 'Rho', 929);
            r250_xn$save$2Lrc5.call(r1168_currentGlyph, 'cyrEr', 1056);
            r250_dependencyProfile[r1168_currentGlyph.name] = r250_getDependencyProfile(r1168_currentGlyph);
            return r1168_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.101', r250_xn$donothing$2Lrc0b)));
        (function _r1157_t2() {
            var _r1176_t0 = this;
            var r1176_currentGlyph = _r1176_t0;
            if (!r1176_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.102')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1176_currentGlyph, r250_glyphs, 'P', r250_AS_BASE);
            r1176_currentGlyph['eject-contour']('serifLT');
            r1176_currentGlyph.include(r250_LeftHook(r250_SB * 1.25, r250_CAP));
            r250_xn$save$2Lrc5.call(r1176_currentGlyph, 'Phookleft', 420);
            r250_dependencyProfile[r1176_currentGlyph.name] = r250_getDependencyProfile(r1176_currentGlyph);
            return r1176_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.102', r250_xn$donothing$2Lrc0b)));
        return [r1157_PShape];
    }();
    var r250_PShape = _r250_t12[0];
    (function () {
        (function _r1182_t0() {
            var _r1184_t0 = this;
            var r1184_currentGlyph = _r1184_t0;
            if (!r1184_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.103')
                r250_glyphList.pop();
            r1184_currentGlyph['set-width'](r250_WIDTH);
            r1184_currentGlyph.include(r250_markset.p);
            r1184_currentGlyph.include(r250_tagged('bowl', r250_OBarLeftShape()));
            r1184_currentGlyph.include(r250_VBarLeft(r250_SB, r250_DESCENDER, r250_XH));
            if (r250_SLAB) {
                r1184_currentGlyph.include(r250_LeftwardTopSerif(r250_SB, r250_XH, r250_SIDEJUT));
                r1184_currentGlyph['tag-contour']('serifLT');
                r1184_currentGlyph.include(r250_CenterBottomSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, r250_DESCENDER, r250_JUT));
                r1184_currentGlyph['tag-contour']('serifLB');
            }
            r1184_currentGlyph['set-anchor']('overlay', r250_BASE, r250_MIDDLE, r250_XH / 2);
            r250_xn$save$2Lrc5.call(r1184_currentGlyph, 'p', 'p');
            r250_xn$save$2Lrc5.call(r1184_currentGlyph, 'cyrer', 1088);
            r250_dependencyProfile[r1184_currentGlyph.name] = r250_getDependencyProfile(r1184_currentGlyph);
            return r1184_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.103', r250_xn$donothing$2Lrc0b)));
        (function _r1182_t1() {
            var _r1197_t0 = this;
            var r1197_currentGlyph = _r1197_t0;
            if (!r1197_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.104')
                r250_glyphList.pop();
            r1197_currentGlyph.include(r250_markset.if);
            r1197_currentGlyph.include(r250_OBarLeftShape());
            r1197_currentGlyph.include(r250_HooktopLeftBar(void 0, r250_DESCENDER));
            if (r250_SLAB) {
                r1197_currentGlyph.include(r250_CenterBottomSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, r250_DESCENDER, r250_JUT));
                r1197_currentGlyph['tag-contour']('serifLB');
            }
            r250_xn$save$2Lrc5.call(r1197_currentGlyph, 'phooktop', 421);
            r250_dependencyProfile[r1197_currentGlyph.name] = r250_getDependencyProfile(r1197_currentGlyph);
            return r1197_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.104', r250_xn$donothing$2Lrc0b)));
        return function _r1182_t2() {
            var _r1205_t0 = this;
            var r1205_currentGlyph = _r1205_t0;
            if (!r1205_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.105')
                r250_glyphList.pop();
            r1205_currentGlyph.include(r250_markset.p);
            r1205_currentGlyph.include(r250_OShape(r250_XH, 0, r250_SB - r250_OX + r250_O, r250_RIGHTSB));
            r1205_currentGlyph.include(r250_VBar(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST + r250_O, r250_DESCENDER, r250_SMALLSMOOTHB));
            r250_xn$save$2Lrc5.call(r1205_currentGlyph, 'rho', 961);
            r250_dependencyProfile[r1205_currentGlyph.name] = r250_getDependencyProfile(r1205_currentGlyph);
            return r1205_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.105', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r1211_RShape = function _r1211_t0(r1212_top) {
            return function _r1212_t2() {
                var _r1214_t0 = this;
                var r1214_currentGlyph = _r1214_t0;
                var r1214_m = r250_SLAB ? 0.5 + r250_HALFSTROKE / r250_CAP : r250_PBARPOS;
                r1214_currentGlyph.include(r250_PShape(r1212_top, 1, r1214_m));
                var r1214_right = r250_RIGHTSB - r250_O - (r250_SLAB ? r250_JUT / 8 : 0);
                if (r250_para.straightBar)
                    (function () {
                        var r1217_shift = r250_SLAB ? -r250_JUT / 2 + 0.25 * r250_STROKE * r250_HVCONTRAST : 0;
                        var r1217_xRightBottom = r1214_right - r250_OX * 2 - r250_HALFSTROKE * r250_HVCONTRAST;
                        r1214_currentGlyph.include(r250_dispiro(r250_widths.center(r250_STROKE * r250_diagCor(r1212_top, r250_WIDTH, 0, r250_STROKE * 2)), r250_corner(r250_MIDDLE + r1217_shift / 2, (r1212_top - r250_STROKE) * r1214_m, r250_heading(r250_DOWNWARD)), r250_corner(r1217_xRightBottom + r1217_shift, 0, r250_heading(r250_DOWNWARD))));
                        return r250_SLAB ? r1214_currentGlyph.include(r250_RightwardBottomSerif(r1217_xRightBottom + r1217_shift + 0.25 * r250_STROKE * r250_HVCONTRAST, 0, r250_SIDEJUT + r250_JUT / 8)) : void 0;
                    }());
                else {
                    r1214_currentGlyph.include(r250_dispiro(r250_widths.center(), r250_g4.up.start(r1214_right, 0, r250_heading(r250_UPWARD)), r250_quadcontrols(0, r250_SLAB ? 0.3 : 0.4, 8), r250_g4(r250_MIDDLE, (r1212_top - r250_STROKE) * r1214_m)));
                    if (r250_SLAB)
                        r1214_currentGlyph.include(r250_RightwardBottomSerif(r1214_right, 0, r250_SIDEJUT + r250_JUT / 8));
                }
                return void 0;
            };
        };
        (function _r1211_t1() {
            var _r1223_t0 = this;
            var r1223_currentGlyph = _r1223_t0;
            if (!r1223_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.106')
                r250_glyphList.pop();
            r1223_currentGlyph['set-width'](r250_WIDTH);
            r1223_currentGlyph.include(r250_markset.capital);
            r1223_currentGlyph.include(r1211_RShape(r250_CAP));
            r1223_currentGlyph['set-anchor']('overlay', r250_BASE, r250_SB + r250_STROKE * r250_HVCONTRAST, r250_CAP * r250_PBARPOS - r250_HALFSTROKE);
            r250_xn$save$2Lrc5.call(r1223_currentGlyph, 'R', 'R');
            r1223_currentGlyph['eject-contour']('strokeL');
            r250_xn$save$2Lrc5.call(r1223_currentGlyph, 'Rrotunda', 42842);
            r250_dependencyProfile[r1223_currentGlyph.name] = r250_getDependencyProfile(r1223_currentGlyph);
            return r1223_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.106', r250_xn$donothing$2Lrc0b)));
        (function _r1211_t2() {
            var _r1232_t0 = this;
            var r1232_currentGlyph = _r1232_t0;
            if (!r1232_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.107')
                r250_glyphList.pop();
            r1232_currentGlyph.include(r250_markset.e);
            r1232_currentGlyph.include(r1211_RShape(r250_XH));
            r250_xn$save$2Lrc5.call(r1232_currentGlyph, 'smcpR', 640);
            r1232_currentGlyph['eject-contour']('strokeL');
            r250_xn$save$2Lrc5.call(r1232_currentGlyph, 'rrotunda', 42843);
            r250_dependencyProfile[r1232_currentGlyph.name] = r250_getDependencyProfile(r1232_currentGlyph);
            return r1232_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.107', r250_xn$donothing$2Lrc0b)));
        (function _r1211_t3() {
            var _r1239_t0 = this;
            var r1239_currentGlyph = _r1239_t0;
            if (!r1239_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.108')
                r250_glyphList.pop();
            r1239_currentGlyph.include(r250_markset.if);
            var r1239_top = r250_CAP * 0.85;
            var r1239_bp = 0.45;
            r1239_currentGlyph.include(r250_PShape(r1239_top, 1, r1239_bp));
            r1239_currentGlyph.include(r250_VBarLeft(r250_SB, r1239_top - 1, r250_CAP));
            var r1239_TURN = r250_XH * 0.1;
            var r1239_right = r250_RIGHTSB - r250_O;
            r1239_currentGlyph.include(r250_dispiro(r250_widths.center(), r250_g4.up.start(r1239_right - r250_HALFSTROKE, r250_DESCENDER, r250_heading(r250_UPWARD)), r250_quadcontrols(0, 0.4, 8), r250_g4(r250_MIDDLE, (r1239_top - r250_STROKE) * r1239_bp)));
            r250_xn$save$2Lrc5.call(r1239_currentGlyph, 'Yr', 422);
            r250_dependencyProfile[r1239_currentGlyph.name] = r250_getDependencyProfile(r1239_currentGlyph);
            return r1239_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.108', r250_xn$donothing$2Lrc0b)));
        var r1211_CyrYaShape = function _r1211_t4(r1245_top) {
            return function _r1245_t2() {
                var _r1247_t0 = this;
                var r1247_currentGlyph = _r1247_t0;
                var r1247_bowlTop = r1245_top * 1;
                var r1247_m = r250_SLAB ? 0.5 + r250_HALFSTROKE / r250_CAP : r250_PBARPOS;
                var r1247_bowlBottom = (r1245_top - r250_STROKE) * r1247_m - r250_HALFSTROKE;
                var r1247_turn = r1_mix(r1247_bowlTop, r1247_bowlBottom, r250_SMOOTHA / (r250_SMOOTHA + r250_SMOOTHB));
                var r1247_turnRadius = (r1247_bowlTop - r1247_bowlBottom) * 0.45;
                var r1247_barright = r250_WIDTH - r250_SB * 1.25;
                r1247_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r1247_barright - r250_HALFSTROKE * 0.1, r1247_bowlTop, r250_heading(r250_LEFTWARD)), r250_curl(r250_SB + r1247_turnRadius - r250_CORRECTION_OMIDS, r1247_bowlTop), r250_archv(), r250_g4(r250_SB + r250_O, r1247_turn), r250_arcvh(), r250_flat(r250_SB + r1247_turnRadius + r250_CORRECTION_OMIDS, r1247_bowlBottom), r250_curl(r1247_barright - r250_HALFSTROKE * 0.1, r1247_bowlBottom, r250_heading(r250_RIGHTWARD))));
                r1247_currentGlyph.include(r250_VBarRight(r1247_barright, 0, r1245_top));
                var r1247_left = r250_SB + r250_O + (r250_SLAB ? r250_JUT / 8 : 0);
                if (r250_para.straightBar)
                    r1247_currentGlyph.include(r250_dispiro(r250_widths.center(r250_STROKE * r250_diagCor(r1245_top, r250_WIDTH - r250_STROKE * 2)), r250_corner(r250_MIDDLE, (r1245_top - r250_STROKE) * r1247_m, r250_heading(r250_DOWNWARD)), r250_corner(r1247_left + r250_OX * 2 + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_heading(r250_DOWNWARD))));
                else
                    r1247_currentGlyph.include(r250_dispiro(r250_widths.center(), r250_g4.up.start(r1247_left + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_heading(r250_UPWARD)), r250_quadcontrols(0, r250_SLAB ? 0.3 : 0.4, 8), r250_g4(r250_MIDDLE, (r1245_top - r250_STROKE) * r1247_m)));
                if (r250_SLAB) {
                    r1247_currentGlyph.include(r250_RightwardTopSerif(r1247_barright, r1245_top, r250_SIDEJUT));
                    r1247_currentGlyph.include(r250_CenterBottomSerif(r1247_barright - r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                    r1247_currentGlyph.include(r250_LeftwardBottomSerif(r250_SB + r250_JUT / 8, 0, r250_SIDEJUT + r250_JUT / 8));
                }
                return void 0;
            };
        };
        (function _r1211_t5() {
            var _r1256_t0 = this;
            var r1256_currentGlyph = _r1256_t0;
            if (!r1256_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.109')
                r250_glyphList.pop();
            r1256_currentGlyph.include(r250_markset.capital);
            r1256_currentGlyph.include(r1211_CyrYaShape(r250_CAP));
            r250_xn$save$2Lrc5.call(r1256_currentGlyph, 'cyrYa', 1071);
            r250_dependencyProfile[r1256_currentGlyph.name] = r250_getDependencyProfile(r1256_currentGlyph);
            return r1256_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.109', r250_xn$donothing$2Lrc0b)));
        (function _r1211_t6() {
            var _r1261_t0 = this;
            var r1261_currentGlyph = _r1261_t0;
            if (!r1261_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.110')
                r250_glyphList.pop();
            r1261_currentGlyph.include(r250_markset.e);
            r1261_currentGlyph.include(r1211_CyrYaShape(r250_XH));
            r250_xn$save$2Lrc5.call(r1261_currentGlyph, 'cyrya', 1103);
            r250_dependencyProfile[r1261_currentGlyph.name] = r250_getDependencyProfile(r1261_currentGlyph);
            return r1261_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.110', r250_xn$donothing$2Lrc0b)));
        return r250_turned('invsmcpR', 641, 'cyrya', r250_MIDDLE, r250_XH / 2);
    }());
    (function () {
        var r1266_dfR = r250_DivFrame(r250_para.diversityF);
        var r1266_narrowSuffix = function _r1266_t0(r1267_narrow) {
            return r1267_narrow ? '.narrow' : '.standard';
        };
        var r1266_RDim = function _r1266_t1(r1268_narrowR) {
            var r1268_rbar = r250_SB + r250_RBALANCE * (r1268_narrowR ? 1 / 2 : 1) + r250_STROKE * r250_HVCONTRAST;
            var r1268_rBottomSerif = function _r1268_t2(r1269_y) {
                return r250_tagged('serifLB', r250_CenterBottomSerif(r1268_rbar - r250_HALFSTROKE * r250_HVCONTRAST + r250_RBALANCE * 0.35, r1269_y, r250_JUT + r250_RBALANCE * 0.65));
            };
            var r1268_rTopSerif = function _r1268_t3(r1270_y) {
                return r250_tagged('serifLT', r250_LeftwardTopSerif(r1268_rbar - r250_STROKE * r250_HVCONTRAST, r1270_y, r250_SIDEJUT + r250_RBALANCE * 0.3));
            };
            var r1268_fine = r250_SHOULDERFINE * r250_CTHIN;
            var r1268_rhookx = r1266_dfR.rightSB + r250_RBALANCE2 - r250_OXE;
            var r1268_mixp = 0.54 + 2 * r250_TANSLANT * r250_STROKE / r250_WIDTH;
            var r1268_mixpin = 0.65 + r250_TANSLANT * r1_linreg(72, 0.1, 108, 0.5, r250_STROKE);
            var r1268_rmiddle = r1268_narrowR ? r1_mix(r1268_rhookx, r1266_dfR.width, 3 / 8) : r1_mix(r1268_rbar - r1268_fine, r1268_rhookx, r1268_mixp);
            var r1268_rmiddlein = r1_mix(r1268_rbar, r1268_rhookx - r250_STROKE * r250_HVCONTRAST * 1.05, r1268_mixpin) - r250_CORRECTION_OMIDS;
            var r1268_skew = Math.max(0, (r1268_rmiddle - r1268_rmiddlein) / r250_STROKE - r250_TANSLANT * r1_linreg(72, 0.25, 108, 0.75, r250_STROKE));
            return {
                'rbar': r1268_rbar,
                'rBottomSerif': r1268_rBottomSerif,
                'rTopSerif': r1268_rTopSerif,
                'fine': r1268_fine,
                'rmiddle': r1268_rmiddle,
                'skew': r1268_skew,
                'rhookx': r1268_rhookx
            };
        };
        (function _r1266_t2() {
            var _r1272_t1 = this;
            var r1272_currentGlyph = _r1272_t1;
            if (!r1272_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.111')
                r250_glyphList.pop();
            var r1272_df = r1266_dfR;
            r1272_currentGlyph['set-width'](r1272_df.width);
            r1272_currentGlyph.include(r1272_df.markSet.e);
            var _r1272_t0 = r1266_RDim(false);
            var r1272_rbar = _r1272_t0.rbar;
            var r1272_rBottomSerif = _r1272_t0.rBottomSerif;
            var r1272_rTopSerif = _r1272_t0.rTopSerif;
            var r1272_fine = _r1272_t0.fine;
            var r1272_rmiddle = _r1272_t0.rmiddle;
            var r1272_skew = _r1272_t0.skew;
            var r1272_rhookx = _r1272_t0.rhookx;
            r1272_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_g4(r1272_rhookx, r250_XH - r250_RHOOK, r250_heading({
                'y': r1_linreg(18, -0.45, 126, -0.5, r250_STROKE),
                'x': -1.04
            })), r250_alsothru(0.37 - r250_TANSLANT * 0.1, 0.72), r250_g4.left.mid(r1272_rmiddle - r250_CORRECTION_OMIDS * r1_linreg(72, 0.75, 108, 1, r250_STROKE), r250_XO, r250_widths.heading(r250_STROKE, 0, {
                'y': -1,
                'x': -r1272_skew
            })), r250_archv(), r250_straight.down.end(r1272_rbar - r1272_fine * r250_HVCONTRAST, r250_XH * 0.53 + (r250_SMALLSMOOTH - r250_SMALLSMOOTHA), r250_widths.heading(r1272_fine, 0, r250_DOWNWARD))));
            r1272_currentGlyph.include(r250_VBarRight(r1272_rbar, 0, r250_XH));
            r1272_currentGlyph['set-anchor']('overlay', r250_BASE, r1272_rbar - r250_STROKE * 0.25, r250_XH * 0.5);
            if (r250_SLAB) {
                r1272_currentGlyph.include(r1272_rBottomSerif(0));
                r1272_currentGlyph.include(r1272_rTopSerif(r250_XH));
            }
            r250_xn$save$2Lrc5.call(r1272_currentGlyph, 'r.standard');
            r250_dependencyProfile[r1272_currentGlyph.name] = r250_getDependencyProfile(r1272_currentGlyph);
            return r1272_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.111', r250_xn$donothing$2Lrc0b)));
        (function _r1266_t3() {
            var _r1282_t1 = this;
            var r1282_currentGlyph = _r1282_t1;
            if (!r1282_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.112')
                r250_glyphList.pop();
            var r1282_df = r1266_dfR;
            r1282_currentGlyph['set-width'](r1282_df.width);
            r1282_currentGlyph.include(r1282_df.markSet.e);
            var _r1282_t0 = r1266_RDim(true);
            var r1282_rbar = _r1282_t0.rbar;
            var r1282_rBottomSerif = _r1282_t0.rBottomSerif;
            var r1282_rTopSerif = _r1282_t0.rTopSerif;
            var r1282_fine = _r1282_t0.fine;
            var r1282_rmiddle = _r1282_t0.rmiddle;
            var r1282_skew = _r1282_t0.skew;
            r1282_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_g4.left.mid(r1282_rmiddle - r250_CORRECTION_OMIDS * r1_linreg(72, 0.75, 108, 1, r250_STROKE), r250_XO), r250_archv(), r250_straight.down.end(r1282_rbar - r1282_fine * r250_HVCONTRAST, r250_XH * 0.53 + (r250_SMALLSMOOTH - r250_SMALLSMOOTHA), r250_widths.heading(r1282_fine, 0, r250_DOWNWARD))));
            r1282_currentGlyph.include(r250_VBarRight(r1282_rbar, 0, r250_XH));
            r1282_currentGlyph['set-anchor']('overlay', r250_BASE, r1282_rbar - r250_STROKE * 0.25, r250_XH * 0.5);
            if (r250_SLAB) {
                r1282_currentGlyph.include(r1282_rBottomSerif(0));
                r1282_currentGlyph.include(r1282_rTopSerif(r250_XH));
            }
            r250_xn$save$2Lrc5.call(r1282_currentGlyph, 'r.narrow');
            r250_dependencyProfile[r1282_currentGlyph.name] = r250_getDependencyProfile(r1282_currentGlyph);
            return r1282_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.112', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('r', 'r');
        (function () {
            var r1292_marks = function _r1292_t0() {
                return r250_compsiteMarkSet(r1266_dfR.markSet.e, {
                    'anchors': {
                        'bottomright': {
                            'type': r250_BASE,
                            'x': r1266_dfR.rightSB - r250_RBALANCE,
                            'y': 0
                        }
                    }
                });
            };
            r250_turned('turnr.standard', void 0, 'r.standard', r1266_dfR.middle, r250_XH / 2, r1292_marks());
            r250_turned('turnr.narrow', void 0, 'r.narrow', r1266_dfR.middle, r250_XH / 2, r1292_marks());
            return r250_xn$selectvariant$7Hrq('turnr', 633, new r250_xn$NamedParameterPair$2Lrc9b('follow', 'r'));
        }());
        (function () {
            var r1296_SmallRLongLegShape = function _r1296_t0(r1297_narrow) {
                return function _r1297_t2() {
                    var _r1299_t1 = this;
                    var r1299_currentGlyph = _r1299_t1;
                    var _r1299_t0 = r1266_RDim(r1297_narrow);
                    var r1299_rbar = _r1299_t0.rbar;
                    var r1299_rBottomSerif = _r1299_t0.rBottomSerif;
                    r250_includeGlyphPart(r1299_currentGlyph, r250_glyphs, 'r' + r1266_narrowSuffix(r1297_narrow));
                    r1299_currentGlyph['eject-contour']('serifLB');
                    r1299_currentGlyph.include(r250_VBarRight(r1299_rbar, r250_DESCENDER, 0));
                    if (r250_SLAB)
                        r1299_currentGlyph.include(r1299_rBottomSerif(r250_DESCENDER));
                    return void 0;
                };
            };
            (function _r1296_t1() {
                var _r1305_t0 = this;
                var r1305_currentGlyph = _r1305_t0;
                if (!r1305_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.113')
                    r250_glyphList.pop();
                var r1305_df = r1266_dfR;
                r1305_currentGlyph['set-width'](r1305_df.width);
                r1305_currentGlyph.include(r1305_df.markSet.p);
                (function _r1305_t2() {
                    var _r1309_t0 = this;
                    var r1309_currentGlyph = _r1309_t0;
                    if (!r1309_currentGlyph)
                        return void 0;
                    if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.114')
                        r250_glyphList.pop();
                    r1309_currentGlyph.include(r1296_SmallRLongLegShape(false));
                    r250_xn$save$2Lrc5.call(r1309_currentGlyph, 'rlongleg.standard');
                    r250_dependencyProfile[r1309_currentGlyph.name] = r250_getDependencyProfile(r1309_currentGlyph);
                    return r1309_currentGlyph;
                }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.114', function _r1305_t3() {
                    var _r1312_t0 = this;
                    _r1312_t0.include(r1305_currentGlyph, true);
                    return _r1312_t0.advanceWidth = r1305_currentGlyph.advanceWidth;
                })));
                (function _r1305_t4() {
                    var _r1314_t0 = this;
                    var r1314_currentGlyph = _r1314_t0;
                    if (!r1314_currentGlyph)
                        return void 0;
                    if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.115')
                        r250_glyphList.pop();
                    r1314_currentGlyph.include(r1296_SmallRLongLegShape(true));
                    r250_xn$save$2Lrc5.call(r1314_currentGlyph, 'rlongleg.narrow');
                    r250_dependencyProfile[r1314_currentGlyph.name] = r250_getDependencyProfile(r1314_currentGlyph);
                    return r1314_currentGlyph;
                }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.115', function _r1305_t5() {
                    var _r1317_t0 = this;
                    _r1317_t0.include(r1305_currentGlyph, true);
                    return _r1317_t0.advanceWidth = r1305_currentGlyph.advanceWidth;
                })));
                r250_dependencyProfile[r1305_currentGlyph.name] = r250_getDependencyProfile(r1305_currentGlyph);
                return r1305_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.113', r250_xn$donothing$2Lrc0b)));
            return r250_xn$selectvariant$7Hrq('rlongleg', 636, new r250_xn$NamedParameterPair$2Lrc9b('follow', 'r'));
        }());
        (function () {
            var r1320_marks = function _r1320_t0() {
                return r250_compsiteMarkSet(r1266_dfR.markSet.b, {
                    'anchors': {
                        'bottomright': {
                            'type': r250_BASE,
                            'x': r1266_dfR.rightSB - r250_RBALANCE,
                            'y': 0
                        }
                    }
                });
            };
            r250_turned('turnrlongleg.standard', void 0, 'rlongleg.standard', r1266_dfR.middle, r250_XH / 2, r1320_marks());
            r250_turned('turnrlongleg.narrow', void 0, 'rlongleg.narrow', r1266_dfR.middle, r250_XH / 2, r1320_marks());
            return r250_xn$selectvariant$7Hrq('turnrlongleg', 634, new r250_xn$NamedParameterPair$2Lrc9b('follow', 'r'));
        }());
        (function () {
            var r1324_SmallRRTailShape = function _r1324_t0(r1325_narrow) {
                return function _r1325_t2() {
                    var _r1327_t1 = this;
                    var r1327_currentGlyph = _r1327_t1;
                    var _r1327_t0 = r1266_RDim(r1325_narrow);
                    var r1327_rbar = _r1327_t0.rbar;
                    var r1327_rBottomSerif = _r1327_t0.rBottomSerif;
                    r250_includeGlyphPart(r1327_currentGlyph, r250_glyphs, 'r' + r1266_narrowSuffix(r1325_narrow));
                    r1327_currentGlyph['eject-contour']('serifLB');
                    r1327_currentGlyph.include(r250_xn$createglyph$7Hrq(function _r1327_t3() {
                        var _r1332_t0 = this;
                        var r1332_currentGlyph = _r1332_t0;
                        r250_includeGlyphPart(r1332_currentGlyph, r250_glyphs, 'rtailBR');
                        r1332_currentGlyph['apply-transform'](r250_Upright());
                        r1332_currentGlyph['apply-transform'](r250_Translate(r1327_rbar, 0));
                        r1332_currentGlyph['apply-transform'](r250_Italify());
                        return void 0;
                    }));
                    return void 0;
                };
            };
            (function _r1324_t1() {
                var _r1338_t0 = this;
                var r1338_currentGlyph = _r1338_t0;
                if (!r1338_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.116')
                    r250_glyphList.pop();
                var r1338_df = r1266_dfR;
                r1338_currentGlyph['set-width'](r1338_df.width);
                r1338_currentGlyph.include(r1338_df.markSet.p);
                (function _r1338_t2() {
                    var _r1342_t0 = this;
                    var r1342_currentGlyph = _r1342_t0;
                    if (!r1342_currentGlyph)
                        return void 0;
                    if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.117')
                        r250_glyphList.pop();
                    r1342_currentGlyph.include(r1324_SmallRRTailShape(false));
                    r250_xn$save$2Lrc5.call(r1342_currentGlyph, 'rrtail.standard');
                    r250_dependencyProfile[r1342_currentGlyph.name] = r250_getDependencyProfile(r1342_currentGlyph);
                    return r1342_currentGlyph;
                }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.117', function _r1338_t3() {
                    var _r1345_t0 = this;
                    _r1345_t0.include(r1338_currentGlyph, true);
                    return _r1345_t0.advanceWidth = r1338_currentGlyph.advanceWidth;
                })));
                (function _r1338_t4() {
                    var _r1347_t0 = this;
                    var r1347_currentGlyph = _r1347_t0;
                    if (!r1347_currentGlyph)
                        return void 0;
                    if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.118')
                        r250_glyphList.pop();
                    r1347_currentGlyph.include(r1324_SmallRRTailShape(true));
                    r250_xn$save$2Lrc5.call(r1347_currentGlyph, 'rrtail.narrow');
                    r250_dependencyProfile[r1347_currentGlyph.name] = r250_getDependencyProfile(r1347_currentGlyph);
                    return r1347_currentGlyph;
                }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.118', function _r1338_t5() {
                    var _r1350_t0 = this;
                    _r1350_t0.include(r1338_currentGlyph, true);
                    return _r1350_t0.advanceWidth = r1338_currentGlyph.advanceWidth;
                })));
                r250_dependencyProfile[r1338_currentGlyph.name] = r250_getDependencyProfile(r1338_currentGlyph);
                return r1338_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.116', r250_xn$donothing$2Lrc0b)));
            return r250_xn$selectvariant$7Hrq('rrtail', 637, new r250_xn$NamedParameterPair$2Lrc9b('follow', 'r'));
        }());
        (function () {
            r250_turned('smallLetterTurnedRWithTail.standard', void 0, 'rrtail.standard', r1266_dfR.middle, r250_XH / 2);
            r250_turned('smallLetterTurnedRWithTail.narrow', void 0, 'rrtail.narrow', r1266_dfR.middle, r250_XH / 2);
            return r250_xn$selectvariant$7Hrq('smallLetterTurnedRWithTail', 11385, new r250_xn$NamedParameterPair$2Lrc9b('follow', 'r'));
        }());
        (function () {
            var r1356_TurnRRTailShape = function _r1356_t0(r1357_narrow) {
                return function _r1357_t2() {
                    var _r1359_t0 = this;
                    var r1359_currentGlyph = _r1359_t0;
                    var r1359_df = r1266_dfR;
                    r250_includeGlyphPart(r1359_currentGlyph, r250_glyphs, 'r' + (r1357_narrow ? '.narrow' : '.standard'));
                    r1359_currentGlyph['eject-contour']('serifLT');
                    r1359_currentGlyph.include(r250_FlipAround(r1359_df.middle, r250_XH / 2));
                    r1359_currentGlyph.include(r250_xn$createglyph$7Hrq(function _r1359_t2() {
                        var _r1365_t0 = this;
                        var r1365_currentGlyph = _r1365_t0;
                        r250_includeGlyphPart(r1365_currentGlyph, r250_glyphs, 'rtailBR');
                        r1365_currentGlyph['apply-transform'](r250_Upright());
                        r1365_currentGlyph['apply-transform'](r250_Translate(r1359_df.rightSB - r250_RBALANCE * (r250_para.straightBar ? 1 / 2 : 1), 0));
                        r1365_currentGlyph['apply-transform'](r250_Italify());
                        return void 0;
                    }));
                    return void 0;
                };
            };
            (function _r1356_t1() {
                var _r1371_t0 = this;
                var r1371_currentGlyph = _r1371_t0;
                if (!r1371_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.119')
                    r250_glyphList.pop();
                var r1371_df = r1266_dfR;
                r1371_currentGlyph['set-width'](r1371_df.width);
                r1371_currentGlyph.include(r1371_df.markSet.p);
                (function _r1371_t2() {
                    var _r1375_t0 = this;
                    var r1375_currentGlyph = _r1375_t0;
                    if (!r1375_currentGlyph)
                        return void 0;
                    if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.120')
                        r250_glyphList.pop();
                    r1375_currentGlyph.include(r1356_TurnRRTailShape(false));
                    r250_xn$save$2Lrc5.call(r1375_currentGlyph, 'turnrrtail.standard');
                    r250_dependencyProfile[r1375_currentGlyph.name] = r250_getDependencyProfile(r1375_currentGlyph);
                    return r1375_currentGlyph;
                }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.120', function _r1371_t3() {
                    var _r1378_t0 = this;
                    _r1378_t0.include(r1371_currentGlyph, true);
                    return _r1378_t0.advanceWidth = r1371_currentGlyph.advanceWidth;
                })));
                (function _r1371_t4() {
                    var _r1380_t0 = this;
                    var r1380_currentGlyph = _r1380_t0;
                    if (!r1380_currentGlyph)
                        return void 0;
                    if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.121')
                        r250_glyphList.pop();
                    r1380_currentGlyph.include(r1356_TurnRRTailShape(true));
                    r250_xn$save$2Lrc5.call(r1380_currentGlyph, 'turnrrtail.narrow');
                    r250_dependencyProfile[r1380_currentGlyph.name] = r250_getDependencyProfile(r1380_currentGlyph);
                    return r1380_currentGlyph;
                }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.121', function _r1371_t5() {
                    var _r1383_t0 = this;
                    _r1383_t0.include(r1371_currentGlyph, true);
                    return _r1383_t0.advanceWidth = r1371_currentGlyph.advanceWidth;
                })));
                r250_dependencyProfile[r1371_currentGlyph.name] = r250_getDependencyProfile(r1371_currentGlyph);
                return r1371_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.119', r250_xn$donothing$2Lrc0b)));
            return r250_xn$selectvariant$7Hrq('turnrrtail', 635, new r250_xn$NamedParameterPair$2Lrc9b('follow', 'r'));
        }());
        (function _r1266_t16() {
            var _r1386_t1 = this;
            var r1386_currentGlyph = _r1386_t1;
            if (!r1386_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.122')
                r250_glyphList.pop();
            var r1386_df = r1266_dfR;
            r1386_currentGlyph['set-width'](r1386_df.width);
            r1386_currentGlyph.include(r1386_df.markSet.e);
            var _r1386_t0 = r1266_RDim(false);
            var r1386_rbar = _r1386_t0.rbar;
            var r1386_rBottomSerif = _r1386_t0.rBottomSerif;
            var r1386_rhookx = r250_RIGHTSB + r250_RBALANCE2 - r250_OXE;
            var r1386_rmiddle = r1_mix(r1386_rbar, r1386_rhookx - r250_HALFSTROKE, 0.5) - r250_CORRECTION_OMIDS;
            r1386_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_g4(r1386_rhookx, r250_XH - r250_RHOOK), r250_hookstart(r250_XO), r250_flat(r1386_rbar - r250_STROKE * r250_HVCONTRAST, r250_XH - r250_SMALLSMOOTHA), r250_curl(r1386_rbar - r250_STROKE * r250_HVCONTRAST, 0, r250_heading(r250_DOWNWARD))));
            if (r250_SLAB)
                r1386_currentGlyph.include(r1386_rBottomSerif(0));
            r250_xn$save$2Lrc5.call(r1386_currentGlyph, 'rflap.standard');
            r250_dependencyProfile[r1386_currentGlyph.name] = r250_getDependencyProfile(r1386_currentGlyph);
            return r1386_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.122', r250_xn$donothing$2Lrc0b)));
        (function _r1266_t17() {
            var _r1393_t1 = this;
            var r1393_currentGlyph = _r1393_t1;
            if (!r1393_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.123')
                r250_glyphList.pop();
            var r1393_df = r1266_dfR;
            r1393_currentGlyph['set-width'](r1393_df.width);
            r1393_currentGlyph.include(r1393_df.markSet.e);
            var _r1393_t0 = r1266_RDim(true);
            var r1393_rbar = _r1393_t0.rbar;
            var r1393_rBottomSerif = _r1393_t0.rBottomSerif;
            var r1393_rmiddle = _r1393_t0.rmiddle;
            r1393_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_g4.left.start(r1393_rmiddle - r250_CORRECTION_OMIDS * r1_linreg(72, 0.75, 108, 1, r250_STROKE), r250_XO), r250_archv(), r250_flat(r1393_rbar - r250_STROKE * r250_HVCONTRAST, r250_XH - r250_SMALLSMOOTHA), r250_curl(r1393_rbar - r250_STROKE * r250_HVCONTRAST, 0, r250_heading(r250_DOWNWARD))));
            if (r250_SLAB)
                r1393_currentGlyph.include(r1393_rBottomSerif(0));
            r250_xn$save$2Lrc5.call(r1393_currentGlyph, 'rflap.narrow');
            r250_dependencyProfile[r1393_currentGlyph.name] = r250_getDependencyProfile(r1393_currentGlyph);
            return r1393_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.123', r250_xn$donothing$2Lrc0b)));
        return r250_xn$selectvariant$7Hrq('rflap', 638, new r250_xn$NamedParameterPair$2Lrc9b('follow', 'r'));
    }());
    (function () {
        var r1401_CShape = function _r1401_t0(r1402_top, r1402_bot) {
            return function _r1402_t2() {
                var _r1404_t0 = this;
                var r1404_currentGlyph = _r1404_t0;
                r1404_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_g4(r250_RIGHTSB, r1402_top - r250_HOOK), r250_hookstart(r1402_top - r250_O), r250_flat(r250_SB + r250_OX, r1402_top - r250_SMOOTHA), r250_curl(r250_SB + r250_OX, r1402_bot + r250_SMOOTHB), r250_hookend(r1402_bot + r250_O), r250_g4(r250_RIGHTSB, r1402_bot + r250_HOOK)));
                return void 0;
            };
        };
        (function _r1401_t1() {
            var _r1407_t0 = this;
            var r1407_currentGlyph = _r1407_t0;
            if (!r1407_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.124')
                r250_glyphList.pop();
            r1407_currentGlyph['set-width'](r250_WIDTH);
            r1407_currentGlyph.include(r250_markset.capital);
            r1407_currentGlyph.include(r1401_CShape(r250_CAP, 0));
            r250_xn$save$2Lrc5.call(r1407_currentGlyph, 'C', 'C');
            r250_xn$save$2Lrc5.call(r1407_currentGlyph, 'cyrEs', 1057);
            r250_xn$save$2Lrc5.call(r1407_currentGlyph, 'lunateSigma', 1017);
            r250_dependencyProfile[r1407_currentGlyph.name] = r250_getDependencyProfile(r1407_currentGlyph);
            return r1407_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.124', r250_xn$donothing$2Lrc0b)));
        (function _r1401_t2() {
            var _r1415_t0 = this;
            var r1415_currentGlyph = _r1415_t0;
            if (!r1415_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.125')
                r250_glyphList.pop();
            r1415_currentGlyph['set-width'](r250_WIDTH);
            r1415_currentGlyph.include(r250_markset.e);
            r1415_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_g4(r250_RIGHTSB, r250_XH - r250_HOOK), r250_hookstart(r250_XO), r250_flat.ai(r250_SB + r250_OX, r250_XH - r250_SMALLSMOOTHA), r250_curl.ai(r250_SB + r250_OX, 0 + r250_SMALLSMOOTHB), r250_hookend(r250_O), r250_g4(r250_RIGHTSB, r250_HOOK)));
            r250_xn$save$2Lrc5.call(r1415_currentGlyph, 'c', 'c');
            r250_xn$save$2Lrc5.call(r1415_currentGlyph, 'cyres', 1089);
            r250_xn$save$2Lrc5.call(r1415_currentGlyph, 'lunatesigma', 1010);
            r250_dependencyProfile[r1415_currentGlyph.name] = r250_getDependencyProfile(r1415_currentGlyph);
            return r1415_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.125', r250_xn$donothing$2Lrc0b)));
        r250_turned('turnC', 390, 'C', r250_MIDDLE, r250_CAP / 2);
        r250_turned('turnc', 596, 'c', r250_MIDDLE, r250_XH / 2);
        r250_composite(r250_glyphs.turnc, r250_xn$intounicode$5sIl(891));
        r250_composite(r250_glyphs.turnC, r250_xn$intounicode$5sIl(1021));
        r250_composite(r250_glyphs.c, r250_DotAt(r250_MIDDLE + r250_HALFSTROKE / 4, r250_XH / 2, r250_DOTRADIUS), r250_xn$intounicode$5sIl(892));
        r250_composite(r250_glyphs.turnc, r250_DotAt(r250_MIDDLE - r250_HALFSTROKE / 4, r250_XH / 2, r250_DOTRADIUS), r250_xn$intounicode$5sIl(893));
        r250_composite(r250_glyphs.C, r250_DotAt(r250_MIDDLE + r250_HALFSTROKE / 4, r250_CAP / 2, r250_DOTRADIUS), r250_xn$intounicode$5sIl(1022));
        r250_composite(r250_glyphs.turnC, r250_DotAt(r250_MIDDLE - r250_HALFSTROKE / 4, r250_CAP / 2, r250_DOTRADIUS), r250_xn$intounicode$5sIl(1023));
        (function _r1401_t3() {
            var _r1423_t0 = this;
            var r1423_currentGlyph = _r1423_t0;
            if (!r1423_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.126')
                r250_glyphList.pop();
            r1423_currentGlyph['set-width'](r250_WIDTH);
            r1423_currentGlyph.include(r250_markset.p);
            r1423_currentGlyph.include(r1401_CShape(r250_XH, r250_DESCENDER));
            r250_xn$save$2Lrc5.call(r1423_currentGlyph, 'strenchedC', 663);
            r250_dependencyProfile[r1423_currentGlyph.name] = r250_getDependencyProfile(r1423_currentGlyph);
            return r1423_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.126', r250_xn$donothing$2Lrc0b)));
        (function _r1401_t4() {
            var _r1429_t0 = this;
            var r1429_currentGlyph = _r1429_t0;
            if (!r1429_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.127')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1429_currentGlyph, r250_glyphs, 'C', r250_AS_BASE);
            r1429_currentGlyph.include(r250_VBarRight(r250_RIGHTSB - r250_OXHOOK, r250_CAP - r250_HOOK, r250_CAP));
            r1429_currentGlyph.include(r250_VerticalHook(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST - r250_OXHOOK, r250_CAP, r250_HOOKX, -r250_HOOK));
            r250_xn$save$2Lrc5.call(r1429_currentGlyph, 'Chooktop', 391);
            r250_dependencyProfile[r1429_currentGlyph.name] = r250_getDependencyProfile(r1429_currentGlyph);
            return r1429_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.127', r250_xn$donothing$2Lrc0b)));
        (function _r1401_t5() {
            var _r1435_t0 = this;
            var r1435_currentGlyph = _r1435_t0;
            if (!r1435_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.128')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1435_currentGlyph, r250_glyphs, 'c', r250_AS_BASE);
            r1435_currentGlyph.include(r250_VBarRight(r250_RIGHTSB - r250_OXHOOK, r250_XH - r250_HOOK, r250_XH));
            r1435_currentGlyph.include(r250_VerticalHook(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST - r250_OXHOOK, r250_XH, r250_HOOKX, -r250_HOOK));
            r250_xn$save$2Lrc5.call(r1435_currentGlyph, 'chooktop', 392);
            r250_dependencyProfile[r1435_currentGlyph.name] = r250_getDependencyProfile(r1435_currentGlyph);
            return r1435_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.128', r250_xn$donothing$2Lrc0b)));
        (function _r1401_t6() {
            var _r1441_t0 = this;
            var r1441_currentGlyph = _r1441_t0;
            if (!r1441_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.129')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1441_currentGlyph, r250_glyphs, 'C', r250_AS_BASE);
            r1441_currentGlyph.include(r250_HOverlayBar(r250_SB * 0.3, r1_mix(r250_SB + r250_STROKE, r250_RIGHTSB - r250_STROKE, 0.55), r250_CAP * r250_OVERLAYPOS));
            r250_xn$save$2Lrc5.call(r1441_currentGlyph, 'Cbar', 42898);
            r250_dependencyProfile[r1441_currentGlyph.name] = r250_getDependencyProfile(r1441_currentGlyph);
            return r1441_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.129', r250_xn$donothing$2Lrc0b)));
        (function _r1401_t7() {
            var _r1446_t0 = this;
            var r1446_currentGlyph = _r1446_t0;
            if (!r1446_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.130')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1446_currentGlyph, r250_glyphs, 'c', r250_AS_BASE);
            r1446_currentGlyph.include(r250_HOverlayBar(r250_SB * 0.3, r1_mix(r250_SB + r250_STROKE, r250_RIGHTSB - r250_STROKE, 0.55), r250_XH * r250_OVERLAYPOS));
            r250_xn$save$2Lrc5.call(r1446_currentGlyph, 'cbar', 42899);
            r250_dependencyProfile[r1446_currentGlyph.name] = r250_getDependencyProfile(r1446_currentGlyph);
            return r1446_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.130', r250_xn$donothing$2Lrc0b)));
        (function _r1401_t8() {
            var _r1451_t0 = this;
            var r1451_currentGlyph = _r1451_t0;
            if (!r1451_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.131')
                r250_glyphList.pop();
            r1451_currentGlyph.include(r250_markset.e);
            var r1451_stroke = r250_adviceBlackness2(2.875, 2, r250_XH);
            var r1451_fine = r250_adviceBlackness(3);
            var r1451_rinner = (r250_XH * 0.45 - r1451_fine * 1.5) / 2;
            var r1451_m1 = r250_SB + r250_O + r1451_stroke * r250_HVCONTRAST;
            var r1451_x2 = r250_SB + r1451_stroke * 0.3;
            var r1451_y2 = -r250_XH * 0.05;
            r1451_currentGlyph.include(r250_dispiro(r250_widths.lhs(r1451_stroke), r250_g4(r250_RIGHTSB, r250_XH - r250_HOOK), r250_hookstart(r250_XH), r250_flat.ai(r250_SB + r250_OX, r250_XH - r250_SMALLSMOOTHA), r250_curl.ai(r250_SB + r250_OX, r250_SMALLSMOOTHB), r250_arcvh(), r250_CurlyTail(r1451_fine, r1451_rinner, r1451_m1, 0, r250_RIGHTSB, r1451_x2, r1451_y2, r1_linreg(500, 0.5, 375, -0.25, Math.min(r250_WIDTH, 500)), void 0, r1_linreg(500, 0, 375, 1, Math.min(r250_WIDTH, 500)))));
            r250_xn$save$2Lrc5.call(r1451_currentGlyph, 'ccurlytail', 597);
            r250_dependencyProfile[r1451_currentGlyph.name] = r250_getDependencyProfile(r1451_currentGlyph);
            return r1451_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.131', r250_xn$donothing$2Lrc0b)));
        (function _r1401_t9() {
            var _r1456_t0 = this;
            var r1456_currentGlyph = _r1456_t0;
            if (!r1456_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.132')
                r250_glyphList.pop();
            r1456_currentGlyph.include(r250_markset.capital);
            r250_includeGlyphPart(r1456_currentGlyph, r250_glyphs, 'C');
            r1456_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_CAP / 2));
            r1456_currentGlyph.include(r250_HBar(r1_mix(r250_SB, r250_RIGHTSB, 0.25), r250_RIGHTSB, r250_CAP / 2));
            r250_xn$save$2Lrc5.call(r1456_currentGlyph, 'cyrE', 1069);
            r250_dependencyProfile[r1456_currentGlyph.name] = r250_getDependencyProfile(r1456_currentGlyph);
            return r1456_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.132', r250_xn$donothing$2Lrc0b)));
        (function _r1401_t10() {
            var _r1463_t0 = this;
            var r1463_currentGlyph = _r1463_t0;
            if (!r1463_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.133')
                r250_glyphList.pop();
            r1463_currentGlyph.include(r250_markset.e);
            r250_includeGlyphPart(r1463_currentGlyph, r250_glyphs, 'c');
            r1463_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_XH / 2));
            r1463_currentGlyph.include(r250_HBar(r1_mix(r250_SB, r250_RIGHTSB, 0.25), r250_RIGHTSB, r250_XH / 2));
            r250_xn$save$2Lrc5.call(r1463_currentGlyph, 'cyre', 1101);
            r250_dependencyProfile[r1463_currentGlyph.name] = r250_getDependencyProfile(r1463_currentGlyph);
            return r1463_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.133', r250_xn$donothing$2Lrc0b)));
        (function _r1401_t11() {
            var _r1470_t0 = this;
            var r1470_currentGlyph = _r1470_t0;
            if (!r1470_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.134')
                r250_glyphList.pop();
            r1470_currentGlyph.include(r250_markset.capital);
            r250_includeGlyphPart(r1470_currentGlyph, r250_glyphs, 'C');
            r1470_currentGlyph.include(r250_HBar(r250_SB, r1_mix(r250_RIGHTSB, r250_SB, 0.25), r250_CAP / 2, r250_adviceBlackness2(4, 2, r250_CAP)));
            r250_xn$save$2Lrc5.call(r1470_currentGlyph, 'cyrYe', 1028);
            r250_dependencyProfile[r1470_currentGlyph.name] = r250_getDependencyProfile(r1470_currentGlyph);
            return r1470_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.134', r250_xn$donothing$2Lrc0b)));
        (function _r1401_t12() {
            var _r1476_t0 = this;
            var r1476_currentGlyph = _r1476_t0;
            if (!r1476_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.135')
                r250_glyphList.pop();
            r1476_currentGlyph.include(r250_markset.e);
            r250_includeGlyphPart(r1476_currentGlyph, r250_glyphs, 'c');
            r1476_currentGlyph.include(r250_HBar(r250_SB, r1_mix(r250_RIGHTSB, r250_SB, 0.25), r250_XH / 2, r250_adviceBlackness2(4, 2, r250_XH)));
            r250_xn$save$2Lrc5.call(r1476_currentGlyph, 'cyrye', 1108);
            r250_dependencyProfile[r1476_currentGlyph.name] = r250_getDependencyProfile(r1476_currentGlyph);
            return r1476_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.135', r250_xn$donothing$2Lrc0b)));
        (function _r1401_t13() {
            var _r1482_t0 = this;
            var r1482_currentGlyph = _r1482_t0;
            if (!r1482_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.136')
                r250_glyphList.pop();
            r1482_currentGlyph.include(r250_markset.e);
            r1482_currentGlyph['start-from'](r250_RIGHTSB + 0.25 * r250_SB, r250_XH);
            r1482_currentGlyph['line-to'](r250_RIGHTSB + 0.25 * r250_SB, r250_XH - r250_STROKE);
            r1482_currentGlyph['line-to'](r250_MIDDLE, r250_XH - r250_STROKE - r250_O * 1.5);
            r1482_currentGlyph['line-to'](r250_MIDDLE, r250_XH - r250_O);
            r1482_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r250_MIDDLE + 1, r250_XH - r250_O), r250_curl(r250_MIDDLE, r250_XH - r250_O), r250_archv(), r250_flat.ai(r250_SB + r250_OX, r250_XH - r250_SMALLSMOOTHA), r250_curl.ai(r250_SB + r250_OX, r250_SMALLSMOOTHB), r250_arcvh(), r250_g4(r250_MIDDLE + r250_CORRECTION_OMIDS, r250_O), r250_archv(), r250_flat.ai(r250_RIGHTSB - r250_OX * 0.5, r250_SMALLSMOOTHA), r250_curl.ai(r250_RIGHTSB - r250_OX * 0.5, r250_XH - r250_SMALLSMOOTHB), r250_arcvh(), r250_flat(r250_MIDDLE, r250_XH - r250_HALFSTROKE - r250_O, r250_widths(r250_HALFSTROKE, 0)), r250_curl(r250_MIDDLE - 1, r250_XH - r250_HALFSTROKE - r250_O)));
            r250_xn$save$2Lrc5.call(r1482_currentGlyph, 'sigma', 963);
            r250_dependencyProfile[r1482_currentGlyph.name] = r250_getDependencyProfile(r1482_currentGlyph);
            return r1482_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.136', r250_xn$donothing$2Lrc0b)));
        return function _r1401_t14() {
            var _r1491_t0 = this;
            var r1491_currentGlyph = _r1491_t0;
            if (!r1491_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.137')
                r250_glyphList.pop();
            r1491_currentGlyph.include(r250_markset.p);
            r1491_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_g4(r250_RIGHTSB, r250_XH - r250_HOOK), r250_hookstart(r250_XH), r250_flat.ai(r250_SB + r250_OX, r250_XH - r250_SMALLSMOOTHA), r250_curl.ai(r250_SB + r250_OX, r250_SMALLSMOOTHB), r250_arcvh(), r250_g4(r250_MIDDLE + r250_CORRECTION_OMIDS, 0), r250_alsothru(0.5, 0.1353), r250_g4.down.mid(r250_RIGHTSB - r250_STROKE * r250_HVCONTRAST + r250_OX, r1_mix(r250_DESCENDER, r250_STROKE, r1_linreg(18, 0.5, 126, 0.49, r250_STROKE)), r250_heading(r250_DOWNWARD)), r250_arcvh(), r250_flat(r250_RIGHTSB - r250_HOOKX + r250_OX, r250_DESCENDER + r250_STROKE, r250_heading(r250_LEFTWARD)), r250_curl(Math.min(r250_RIGHTSB - r250_STROKE * r250_HVCONTRAST * 1.5, r250_RIGHTSB - r250_HOOKX + r250_OX - 1), r250_DESCENDER + r250_STROKE, r250_heading(r250_LEFTWARD))));
            r250_xn$save$2Lrc5.call(r1491_currentGlyph, 'sigmafinal', 962);
            r250_dependencyProfile[r1491_currentGlyph.name] = r250_getDependencyProfile(r1491_currentGlyph);
            return r1491_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.137', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r1496_GShape = function _r1496_t0(r1497_top, r1497_sma, r1497_smb) {
            return function _r1497_t2() {
                var _r1499_t0 = this;
                var r1499_currentGlyph = _r1499_t0;
                var r1499_ybar = r1497_top * 0.52 + r250_STROKE * 0.25;
                r1499_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_g4(r250_RIGHTSB, r1497_top - r250_HOOK), r250_hookstart(r1497_top - r250_O), r250_flat(r250_SB + r250_OX, r1497_top - r1497_sma), r250_curl(r250_SB + r250_OX, r1497_smb), r250_arcvh(), r250_g4(r250_MIDDLE + r250_CORRECTION_OMIDS, r250_O), r250_archv(), r250_flat(r250_RIGHTSB, r1497_sma), r250_curl(r250_RIGHTSB, r1499_ybar, r250_heading(r250_UPWARD))));
                r1499_currentGlyph.include(r250_dispiro(r250_flat(r250_MIDDLE, r1499_ybar, r250_widths(0, r250_STROKE)), r250_curl(r250_RIGHTSB, r1499_ybar, r250_heading(r250_RIGHTWARD))));
                return void 0;
            };
        };
        (function _r1496_t1() {
            var _r1503_t0 = this;
            var r1503_currentGlyph = _r1503_t0;
            if (!r1503_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.138')
                r250_glyphList.pop();
            r1503_currentGlyph['set-width'](r250_WIDTH);
            r1503_currentGlyph.include(r250_markset.capital);
            r1503_currentGlyph.include(r1496_GShape(r250_CAP, r250_SMOOTHA, r250_SMOOTHB));
            r250_xn$save$2Lrc5.call(r1503_currentGlyph, 'G', 'G');
            r250_dependencyProfile[r1503_currentGlyph.name] = r250_getDependencyProfile(r1503_currentGlyph);
            return r1503_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.138', r250_xn$donothing$2Lrc0b)));
        (function _r1496_t2() {
            var _r1509_t0 = this;
            var r1509_currentGlyph = _r1509_t0;
            if (!r1509_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.139')
                r250_glyphList.pop();
            r1509_currentGlyph.include(r250_markset.e);
            r1509_currentGlyph.include(r1496_GShape(r250_XH, r250_SMOOTHA, r250_SMOOTHB));
            r250_xn$save$2Lrc5.call(r1509_currentGlyph, 'smcpG', 610);
            r250_dependencyProfile[r1509_currentGlyph.name] = r250_getDependencyProfile(r1509_currentGlyph);
            return r1509_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.139', r250_xn$donothing$2Lrc0b)));
        (function _r1496_t3() {
            var _r1514_t0 = this;
            var r1514_currentGlyph = _r1514_t0;
            if (!r1514_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.140')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1514_currentGlyph, r250_glyphs, 'G', r250_AS_BASE);
            r1514_currentGlyph.include(r250_VBarRight(r250_RIGHTSB - r250_OXHOOK, r250_CAP - r250_HOOK, r250_CAP));
            r1514_currentGlyph.include(r250_VerticalHook(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST - r250_OXHOOK, r250_CAP, r250_HOOKX, -r250_HOOK, void 0, r250_O));
            r250_xn$save$2Lrc5.call(r1514_currentGlyph, 'Ghooktop', 403);
            r250_dependencyProfile[r1514_currentGlyph.name] = r250_getDependencyProfile(r1514_currentGlyph);
            return r1514_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.140', r250_xn$donothing$2Lrc0b)));
        (function _r1496_t4() {
            var _r1520_t0 = this;
            var r1520_currentGlyph = _r1520_t0;
            if (!r1520_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.141')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1520_currentGlyph, r250_glyphs, 'smcpG', r250_AS_BASE);
            r1520_currentGlyph.include(r250_VBarRight(r250_RIGHTSB - r250_OXHOOK, r250_XH - r250_HOOK, r250_XH));
            r1520_currentGlyph.include(r250_VerticalHook(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST - r250_OXHOOK, r250_XH, r250_HOOKX, -r250_HOOK, void 0, r250_O));
            r250_xn$save$2Lrc5.call(r1520_currentGlyph, 'smcpGhooktop', 667);
            r250_dependencyProfile[r1520_currentGlyph.name] = r250_getDependencyProfile(r1520_currentGlyph);
            return r1520_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.141', r250_xn$donothing$2Lrc0b)));
        return function _r1496_t5() {
            var _r1526_t0 = this;
            var r1526_currentGlyph = _r1526_t0;
            if (!r1526_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.142')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1526_currentGlyph, r250_glyphs, 'G', r250_AS_BASE);
            r1526_currentGlyph.include(r250_HOverlayBar(r1_mix(r250_SB, r250_RIGHTSB, 0.5), r1_mix(r250_RIGHTSB, r250_WIDTH, 0.7), r1_mix(0, r250_CAPMIDDLE, 0.55)));
            r250_xn$save$2Lrc5.call(r1526_currentGlyph, 'Gbar', 484);
            r250_dependencyProfile[r1526_currentGlyph.name] = r250_getDependencyProfile(r1526_currentGlyph);
            return r1526_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.142', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r1531_t0() {
            var _r1533_t0 = this;
            var r1533_currentGlyph = _r1533_t0;
            if (!r1533_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.143')
                r250_glyphList.pop();
            r1533_currentGlyph.include(r250_markset.p);
            var r1533_obot = r250_XH * r250_GBARPOS - r250_O - r250_STROKE * 0.4;
            r1533_currentGlyph.include(r250_OShape(r250_XH, r1533_obot, r250_SB, r250_RIGHTSB - 0.3 * r250_SB));
            var r1533_gleftx = r1_mix(0, r250_SB, 0.85) + r250_OX;
            var r1533_grightx = r1_mix(r250_WIDTH, r250_RIGHTSB, 0.825) - r250_OX;
            var r1533_groundy = Math.round(r1_mix(r250_DESCENDER, r250_XH * r250_GBARPOS, 0.64) + r250_HALFSTROKE);
            var r1533_gtipy = r1_mix(r1533_groundy, r1533_obot + r250_STROKE + r250_O, 1.005) - r250_STROKE * r250_CTHIN;
            r1533_currentGlyph.include(r250_dispiro(r250_g4.left.start(r1_mix(r250_SB, r250_RIGHTSB, 0.4), r1533_gtipy, r250_widths(0, r250_STROKE * r250_CTHIN)), r250_g4(r1_mix(r250_SB, r250_RIGHTSB, 0.0575) + r250_STROKE * 0.85, r1_mix(r1533_groundy, r1533_gtipy, 0.5), r250_widths.rhs(r250_STROKE * r1_mix(r250_CTHIN, 1, 0.5))), r250_flat(r1_mix(r250_SB, r250_RIGHTSB, 0.435), r1533_groundy, r250_widths(0, r250_STROKE)), r250_curl(r1_mix(r250_RIGHTSB, r250_SB, 0.435), r1533_groundy), r250_archv(4), r250_g4(r1533_grightx, r1_mix(r250_DESCENDER + r250_O, r1533_groundy, 1.06 * r250_SMALLSMOOTHA / (r250_SMALLSMOOTHA + r250_SMALLSMOOTHB))), r250_arcvh(), r250_g4(r250_MIDDLE + r250_CORRECTION_OMIDS, r250_DESCENDER + r250_O), r250_archv(), r250_g4(r1533_gleftx, r1_mix(r250_DESCENDER + r250_O, r1533_groundy, 1.06 * r250_SMALLSMOOTHB / (r250_SMALLSMOOTHA + r250_SMALLSMOOTHB))), r250_arcvh(), r250_g4(r1_mix(r250_SB, r250_RIGHTSB, 0.435), r1533_groundy, r250_heading(r250_RIGHTWARD))));
            var r1533_gm = r1_mix(r250_SB, r250_RIGHTSB - 0.3 * r250_SB, 0.5);
            r1533_currentGlyph['start-from'](r250_RIGHTSB + 0.25 * r250_SB - r250_OX, r250_XH);
            r1533_currentGlyph['line-to'](r250_RIGHTSB + 0.25 * r250_SB - r250_OX, r250_XH - r250_STROKE);
            r1533_currentGlyph['line-to'](r1533_gm, r250_XH - r250_STROKE - r250_O);
            r1533_currentGlyph['line-to'](r1533_gm, r250_XH);
            r1533_currentGlyph['set-anchor']('overlay', r250_BASE, r250_MIDDLE, r1_mix(r250_DESCENDER + r250_O, r1533_groundy, 0.5));
            r250_xn$save$2Lrc5.call(r1533_currentGlyph, 'g.doublestorey');
            r250_dependencyProfile[r1533_currentGlyph.name] = r250_getDependencyProfile(r1533_currentGlyph);
            return r1533_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.143', r250_xn$donothing$2Lrc0b)));
        (function _r1531_t1() {
            var _r1544_t0 = this;
            var r1544_currentGlyph = _r1544_t0;
            if (!r1544_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.144')
                r250_glyphList.pop();
            r1544_currentGlyph.include(r250_markset.p);
            var r1544_obot = r250_XH * r250_GBARPOS - r250_O - r250_STROKE * 0.4;
            r1544_currentGlyph.include(r250_OShape(r250_XH, r1544_obot, r250_SB, r250_RIGHTSB - 0.3 * r250_SB));
            var r1544_gleftx = r1_mix(0, r250_SB, 0.85) + r250_OX;
            var r1544_grightx = r1_mix(r250_WIDTH, r250_RIGHTSB, 0.825) - r250_OX;
            var r1544_groundy = Math.round(r1_mix(r250_DESCENDER, r250_XH * r250_GBARPOS, 0.64) + r250_HALFSTROKE);
            var r1544_gtipy = r1_mix(r1544_groundy, r1544_obot + r250_STROKE + r250_O, 1.005) - r250_STROKE * r250_CTHIN;
            r1544_currentGlyph.include(r250_dispiro(r250_g4.left.start(r1_mix(r250_SB, r250_RIGHTSB, 0.4), r1544_gtipy, r250_widths(0, r250_STROKE * r250_CTHIN)), r250_g4(r1_mix(r250_SB, r250_RIGHTSB, 0.0575) + r250_STROKE * 0.85, r1_mix(r1544_groundy, r1544_gtipy, 0.5), r250_widths.rhs(r250_STROKE * r1_mix(r250_CTHIN, 1, 0.5))), r250_flat(r1_mix(r250_SB, r250_RIGHTSB, 0.435), r1544_groundy, r250_widths(0, r250_STROKE)), r250_curl(r1_mix(r250_RIGHTSB, r250_SB, 0.435), r1544_groundy), r250_archv(4), r250_g4(r1544_grightx, r1_mix(r250_DESCENDER + r250_O, r1544_groundy, 1.06 * r250_SMALLSMOOTHA / (r250_SMALLSMOOTHA + r250_SMALLSMOOTHB))), r250_hookend(r250_DESCENDER + r250_O), r250_g4(r1544_gleftx, r1_mix(r250_DESCENDER + r250_O, r1544_groundy, 1.06 * r250_SMALLSMOOTHB / (r250_SMALLSMOOTHA + r250_SMALLSMOOTHB)))));
            var r1544_gm = r1_mix(r250_SB, r250_RIGHTSB - 0.3 * r250_SB, 0.5);
            r1544_currentGlyph['start-from'](r250_RIGHTSB + 0.25 * r250_SB - r250_OX, r250_XH);
            r1544_currentGlyph['line-to'](r250_RIGHTSB + 0.25 * r250_SB - r250_OX, r250_XH - r250_STROKE);
            r1544_currentGlyph['line-to'](r1544_gm, r250_XH - r250_STROKE - r250_O);
            r1544_currentGlyph['line-to'](r1544_gm, r250_XH);
            r1544_currentGlyph['set-anchor']('overlay', r250_BASE, r250_MIDDLE, r1_mix(r250_DESCENDER + r250_O, r1544_groundy, 0.5));
            r250_xn$save$2Lrc5.call(r1544_currentGlyph, 'g.opendoublestorey');
            r250_dependencyProfile[r1544_currentGlyph.name] = r250_getDependencyProfile(r1544_currentGlyph);
            return r1544_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.144', r250_xn$donothing$2Lrc0b)));
        (function _r1531_t2() {
            var _r1555_t0 = this;
            var r1555_currentGlyph = _r1555_t0;
            if (!r1555_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.145')
                r250_glyphList.pop();
            r1555_currentGlyph.include(r250_markset.p);
            r1555_currentGlyph.include(r250_OBarRightShape());
            r1555_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r250_RIGHTSB, r250_XH, r250_heading(r250_DOWNWARD)), r250_curl(r250_RIGHTSB, r250_DESCENDER + r250_SMALLSMOOTHA), r250_hookend(r250_DESCENDER + r250_O), r250_g4(r250_SB, r250_DESCENDER + r250_SHOOK)));
            if (r250_SLAB) {
                r1555_currentGlyph.include(r250_RightwardTopSerif(r250_RIGHTSB, r250_XH, r250_SIDEJUT));
                r1555_currentGlyph['tag-contour']('serifRT');
            }
            r1555_currentGlyph['set-anchor']('overlay', r250_BASE, r250_MIDDLE, r250_XH / 2);
            r250_xn$save$2Lrc5.call(r1555_currentGlyph, 'g.singlestorey');
            r250_xn$save$2Lrc5.call(r1555_currentGlyph, 'scriptg', 609);
            r250_xn$save$2Lrc5.call(r1555_currentGlyph, 'cyrde.serbian');
            r250_dependencyProfile[r1555_currentGlyph.name] = r250_getDependencyProfile(r1555_currentGlyph);
            return r1555_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.145', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('g', 'g');
        r250_turned(void 0, 7543, 'g', r250_MIDDLE, r1_mix(r250_DESCENDER, r250_XH, 0.5));
        (function _r1531_t3() {
            var _r1566_t0 = this;
            var r1566_currentGlyph = _r1566_t0;
            if (!r1566_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.146')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1566_currentGlyph, r250_glyphs, 'scriptg', r250_AS_BASE);
            r1566_currentGlyph['eject-contour']('serifRT');
            r1566_currentGlyph.include(r250_VerticalHook(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, r250_XH, r250_HOOKX, -r250_HOOK, void 0, r250_O));
            r250_xn$save$2Lrc5.call(r1566_currentGlyph, 'scriptghooktop', 608);
            r250_dependencyProfile[r1566_currentGlyph.name] = r250_getDependencyProfile(r1566_currentGlyph);
            return r1566_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.146', r250_xn$donothing$2Lrc0b)));
        return function () {
            var r1572_l = r1_mix(0, r250_SB, 0.3);
            var r1572_r = r1_mix(r250_WIDTH, r250_RIGHTSB, 0.3);
            var r1572_bwDoubleStorey = Math.min(r250_adviceBlackness(5), 0.5 / 3 * (r250_CAP - r250_STROKE * 4));
            var r1572_bwSingleStorey = r250_adviceBlackness2(4, 2, r250_XH);
            (function _r1572_t0() {
                var _r1574_t0 = this;
                var r1574_currentGlyph = _r1574_t0;
                if (!r1574_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.147')
                    r250_glyphList.pop();
                r250_includeGlyphPart(r1574_currentGlyph, r250_glyphs, 'g.doublestorey', r250_AS_BASE);
                r1574_currentGlyph.include(r250_HBar(r1572_l, r1572_r, r250_glyphs['g.doublestorey'].anchors.overlay.y, r1572_bwDoubleStorey));
                r250_xn$save$2Lrc5.call(r1574_currentGlyph, 'gbar.doublestorey');
                r250_dependencyProfile[r1574_currentGlyph.name] = r250_getDependencyProfile(r1574_currentGlyph);
                return r1574_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.147', r250_xn$donothing$2Lrc0b)));
            (function _r1572_t1() {
                var _r1579_t0 = this;
                var r1579_currentGlyph = _r1579_t0;
                if (!r1579_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.148')
                    r250_glyphList.pop();
                r250_includeGlyphPart(r1579_currentGlyph, r250_glyphs, 'g.opendoublestorey', r250_AS_BASE);
                r1579_currentGlyph.include(r250_HBar(r1572_l, r1572_r, r250_glyphs['g.opendoublestorey'].anchors.overlay.y, r1572_bwDoubleStorey));
                r250_xn$save$2Lrc5.call(r1579_currentGlyph, 'gbar.opendoublestorey');
                r250_dependencyProfile[r1579_currentGlyph.name] = r250_getDependencyProfile(r1579_currentGlyph);
                return r1579_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.148', r250_xn$donothing$2Lrc0b)));
            (function _r1572_t2() {
                var _r1584_t0 = this;
                var r1584_currentGlyph = _r1584_t0;
                if (!r1584_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.149')
                    r250_glyphList.pop();
                r250_includeGlyphPart(r1584_currentGlyph, r250_glyphs, 'g.singlestorey', r250_AS_BASE);
                r1584_currentGlyph.include(r250_HBar(r1572_l, r1572_r, r250_glyphs['g.singlestorey'].anchors.overlay.y, r1572_bwSingleStorey));
                r250_xn$save$2Lrc5.call(r1584_currentGlyph, 'gbar.singlestorey');
                r250_dependencyProfile[r1584_currentGlyph.name] = r250_getDependencyProfile(r1584_currentGlyph);
                return r1584_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.149', r250_xn$donothing$2Lrc0b)));
            return r250_xn$selectvariant$7Hrq('gbar', 485, new r250_xn$NamedParameterPair$2Lrc9b('follow', 'g'));
        }();
    }());
    (function () {
        (function _r1590_t0() {
            var _r1592_t0 = this;
            var r1592_currentGlyph = _r1592_t0;
            if (!r1592_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.150')
                r250_glyphList.pop();
            r1592_currentGlyph.include(r250_markset.capital);
            r1592_currentGlyph.include(r250_OShape(r250_CAP, 0, r250_SB, r250_RIGHTSB, void 0, r250_SMOOTHA, r250_SMOOTHB));
            r250_xn$save$2Lrc5.call(r1592_currentGlyph, 'O', 'O');
            r250_xn$save$2Lrc5.call(r1592_currentGlyph, 'Omicron', 927);
            r250_xn$save$2Lrc5.call(r1592_currentGlyph, 'cyrO', 1054);
            r250_dependencyProfile[r1592_currentGlyph.name] = r250_getDependencyProfile(r1592_currentGlyph);
            return r1592_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.150', r250_xn$donothing$2Lrc0b)));
        (function _r1590_t1() {
            var _r1599_t0 = this;
            var r1599_currentGlyph = _r1599_t0;
            if (!r1599_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.151')
                r250_glyphList.pop();
            r1599_currentGlyph['set-width'](r250_WIDTH);
            r1599_currentGlyph.include(r250_markset.e);
            r1599_currentGlyph.include(r250_OShape(r250_XH, 0, r250_SB, r250_RIGHTSB, void 0, void 0, void 0, true));
            r250_xn$save$2Lrc5.call(r1599_currentGlyph, 'o', 'o');
            r250_xn$save$2Lrc5.call(r1599_currentGlyph, 'omicron', 959);
            r250_xn$save$2Lrc5.call(r1599_currentGlyph, 'cyro', 1086);
            r250_dependencyProfile[r1599_currentGlyph.name] = r250_getDependencyProfile(r1599_currentGlyph);
            return r1599_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.151', r250_xn$donothing$2Lrc0b)));
        (function _r1590_t2() {
            var _r1607_t0 = this;
            var r1607_currentGlyph = _r1607_t0;
            if (!r1607_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.152')
                r250_glyphList.pop();
            var r1607_fine = 0.5 * r250_OVERLAYSTROKE;
            r250_includeGlyphPart(r1607_currentGlyph, r250_glyphs, 'O', r250_AS_BASE);
            r1607_currentGlyph.include(r250_dispiro(r250_flat(r250_SB + r250_O + r1607_fine, r1_mix(r250_CAP, 0, 1.05), r250_widths(r1607_fine, r1607_fine)), r250_curl(r250_RIGHTSB - r250_O - r1607_fine, r1_mix(0, r250_CAP, 1.05))));
            r250_xn$save$2Lrc5.call(r1607_currentGlyph, 'Oslash', 216);
            r250_dependencyProfile[r1607_currentGlyph.name] = r250_getDependencyProfile(r1607_currentGlyph);
            return r1607_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.152', r250_xn$donothing$2Lrc0b)));
        (function _r1590_t3() {
            var _r1612_t0 = this;
            var r1612_currentGlyph = _r1612_t0;
            if (!r1612_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.153')
                r250_glyphList.pop();
            var r1612_fine = 0.5 * r250_OVERLAYSTROKE;
            r250_includeGlyphPart(r1612_currentGlyph, r250_glyphs, 'o', r250_AS_BASE);
            r1612_currentGlyph.include(r250_dispiro(r250_flat(r250_SB + r250_O + r1612_fine, r1_mix(r250_XH, 0, 1.05), r250_widths(r1612_fine, r1612_fine)), r250_curl(r250_RIGHTSB - r250_O - r1612_fine, r1_mix(0, r250_XH, 1.05))));
            r250_xn$save$2Lrc5.call(r1612_currentGlyph, 'oslash', 248);
            r250_dependencyProfile[r1612_currentGlyph.name] = r250_getDependencyProfile(r1612_currentGlyph);
            return r1612_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.153', r250_xn$donothing$2Lrc0b)));
        (function _r1590_t4() {
            var _r1617_t0 = this;
            var r1617_currentGlyph = _r1617_t0;
            if (!r1617_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.154')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1617_currentGlyph, r250_glyphs, 'O', r250_AS_BASE);
            r1617_currentGlyph.include(r250_HBar(r250_SB + r250_OX + 1, r250_RIGHTSB - r250_OX - 1, r250_CAP * 0.5, r250_OVERLAYSTROKE));
            r250_xn$save$2Lrc5.call(r1617_currentGlyph, 'Obar', 415);
            r250_xn$save$2Lrc5.call(r1617_currentGlyph, 'cyrOe', 1256);
            r250_xn$save$2Lrc5.call(r1617_currentGlyph, 'capSymbolTheta', 1012);
            r250_dependencyProfile[r1617_currentGlyph.name] = r250_getDependencyProfile(r1617_currentGlyph);
            return r1617_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.154', r250_xn$donothing$2Lrc0b)));
        (function _r1590_t5() {
            var _r1624_t0 = this;
            var r1624_currentGlyph = _r1624_t0;
            if (!r1624_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.155')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1624_currentGlyph, r250_glyphs, 'o', r250_AS_BASE);
            r1624_currentGlyph.include(r250_HBar(r250_SB + r250_OX + 1, r250_RIGHTSB - r250_OX - 1, r250_XH * 0.5, r250_OVERLAYSTROKE));
            r250_xn$save$2Lrc5.call(r1624_currentGlyph, 'obar', 629);
            r250_xn$save$2Lrc5.call(r1624_currentGlyph, 'cyroe', 1257);
            r250_dependencyProfile[r1624_currentGlyph.name] = r250_getDependencyProfile(r1624_currentGlyph);
            return r1624_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.155', r250_xn$donothing$2Lrc0b)));
        (function _r1590_t6() {
            var _r1630_t0 = this;
            var r1630_currentGlyph = _r1630_t0;
            if (!r1630_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.156')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1630_currentGlyph, r250_glyphs, 'O', r250_AS_BASE);
            var r1630_radius = Math.min(r250_DOTRADIUS, (r250_RIGHTSB - r250_SB - r250_STROKE * 2) / 4);
            r1630_currentGlyph.include(r250_Ring(r250_CAPMIDDLE + r1630_radius, r250_CAPMIDDLE - r1630_radius, r250_MIDDLE + r1630_radius, r250_MIDDLE - r1630_radius));
            r250_xn$save$2Lrc5.call(r1630_currentGlyph, 'bulleye', 664);
            r250_dependencyProfile[r1630_currentGlyph.name] = r250_getDependencyProfile(r1630_currentGlyph);
            return r1630_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.156', r250_xn$donothing$2Lrc0b)));
        (function _r1590_t7() {
            var _r1635_t0 = this;
            var r1635_currentGlyph = _r1635_t0;
            if (!r1635_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.157')
                r250_glyphList.pop();
            r1635_currentGlyph.include(r250_markset.e);
            r1635_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r250_SB + r250_OX, r250_XH / 2, r250_heading(r250_UPWARD)), r250_curl(r250_SB + r250_OX, r250_XH - Math.min(r250_XH / 2 - 0.1, r250_SMALLSMOOTHA)), r250_arcvh(), r250_g4(r250_MIDDLE - r250_CORRECTION_OMIDS, r250_XH - r250_O), r250_archv(), r250_flat(r250_RIGHTSB - r250_OX, r250_XH - Math.min(r250_XH / 2 - 0.1, r250_SMALLSMOOTHB)), r250_curl(r250_RIGHTSB - r250_OX, r250_XH / 2, r250_heading(r250_DOWNWARD))));
            r250_xn$save$2Lrc5.call(r1635_currentGlyph, 'oupperhalf', 7446);
            r250_dependencyProfile[r1635_currentGlyph.name] = r250_getDependencyProfile(r1635_currentGlyph);
            return r1635_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.157', r250_xn$donothing$2Lrc0b)));
        return function _r1590_t8() {
            var _r1640_t0 = this;
            var r1640_currentGlyph = _r1640_t0;
            if (!r1640_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.158')
                r250_glyphList.pop();
            r1640_currentGlyph.include(r250_markset.e);
            r1640_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r250_SB + r250_OX, r250_XH / 2, r250_heading(r250_DOWNWARD)), r250_curl(r250_SB + r250_OX, Math.min(r250_XH / 2 - 0.1, r250_SMALLSMOOTHB)), r250_arcvh(), r250_g4(r250_MIDDLE + r250_CORRECTION_OMIDS, r250_O), r250_archv(), r250_flat(r250_RIGHTSB - r250_OX, Math.min(r250_XH / 2 - 0.1, r250_SMALLSMOOTHA)), r250_curl(r250_RIGHTSB - r250_OX, r250_XH / 2, r250_heading(r250_UPWARD))));
            r250_xn$save$2Lrc5.call(r1640_currentGlyph, 'olowerhalf', 7447);
            r250_dependencyProfile[r1640_currentGlyph.name] = r250_getDependencyProfile(r1640_currentGlyph);
            return r1640_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.158', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r1645_t0() {
            var _r1647_t0 = this;
            var r1647_currentGlyph = _r1647_t0;
            if (!r1647_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.159')
                r250_glyphList.pop();
            r1647_currentGlyph['set-width'](r250_WIDTH);
            r250_includeGlyphPart(r1647_currentGlyph, r250_glyphs, 'O', r250_AS_BASE);
            var r1647_shift = r1_linreg(18, 0, 126, 0.25, r250_STROKE);
            r1647_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r250_MIDDLE + r250_WIDTH * 0.075 - r250_STROKE * r250_HVCONTRAST * r1647_shift, -r250_CAP * 0.2, r250_heading(r250_UPWARD)), r250_curl(r250_MIDDLE - r250_STROKE * r250_HVCONTRAST * r1647_shift, 0)));
            r250_xn$save$2Lrc5.call(r1647_currentGlyph, 'Q.straight');
            r250_dependencyProfile[r1647_currentGlyph.name] = r250_getDependencyProfile(r1647_currentGlyph);
            return r1647_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.159', r250_xn$donothing$2Lrc0b)));
        (function _r1645_t1() {
            var _r1653_t0 = this;
            var r1653_currentGlyph = _r1653_t0;
            if (!r1653_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.160')
                r250_glyphList.pop();
            r1653_currentGlyph['set-width'](r250_WIDTH);
            r250_includeGlyphPart(r1653_currentGlyph, r250_glyphs, 'O', r250_AS_BASE);
            var r1653_shift = r1_linreg(18, 0.5, 126, 0.6, r250_STROKE);
            var r1653_startx = r250_MIDDLE + r250_STROKE * r1653_shift * r250_HVCONTRAST;
            var r1653_terminalx = r250_MIDDLE + r250_HOOKX;
            r1653_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r1653_startx, r250_HALFSTROKE, r250_heading(r250_DOWNWARD)), r250_curl(r1653_startx, 0, r250_heading(r250_DOWNWARD)), r250_arcvh(), r250_flat(Math.min(r1653_terminalx - 1, r1653_startx + r250_HOOK - r250_STROKE), r250_STROKE - r250_HOOK), r250_curl(r1653_terminalx, r250_STROKE - r250_HOOK)));
            r250_xn$save$2Lrc5.call(r1653_currentGlyph, 'Q.taily');
            r250_dependencyProfile[r1653_currentGlyph.name] = r250_getDependencyProfile(r1653_currentGlyph);
            return r1653_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.160', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('Q', 'Q');
        return r250_alias('cyrQa', 1306, 'Q');
    }());
    (function () {
        (function _r1659_t0() {
            var _r1661_t0 = this;
            var r1661_currentGlyph = _r1661_t0;
            if (!r1661_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.161')
                r250_glyphList.pop();
            r1661_currentGlyph['set-width'](r250_WIDTH);
            r1661_currentGlyph.include(r250_markset.p);
            r1661_currentGlyph.include(r250_OBarRightShape());
            r1661_currentGlyph.include(r250_VBarRight(r250_RIGHTSB, r250_DESCENDER, r250_XH));
            if (r250_SLAB) {
                r1661_currentGlyph.include(r250_RightwardTopSerif(r250_RIGHTSB, r250_XH, r250_SIDEJUT));
                r1661_currentGlyph['tag-contour']('serifRT');
                r1661_currentGlyph.include(r250_CenterBottomSerif(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, r250_DESCENDER, r250_JUT));
            }
            r250_xn$save$2Lrc5.call(r1661_currentGlyph, 'q', 'q');
            r250_xn$save$2Lrc5.call(r1661_currentGlyph, 'cyrqa', 1307);
            r250_dependencyProfile[r1661_currentGlyph.name] = r250_getDependencyProfile(r1661_currentGlyph);
            return r1661_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.161', r250_xn$donothing$2Lrc0b)));
        (function _r1659_t1() {
            var _r1672_t0 = this;
            var r1672_currentGlyph = _r1672_t0;
            if (!r1672_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.162')
                r250_glyphList.pop();
            r1672_currentGlyph.include(r250_markset.capital);
            r1672_currentGlyph.include(r250_OBarRightShape(r250_CAP));
            r1672_currentGlyph.include(r250_VBarRight(r250_RIGHTSB, 0, r250_CAP));
            r1672_currentGlyph.include(r250_xn$createglyph$7Hrq(function _r1672_t2() {
                var _r1678_t0 = this;
                var r1678_currentGlyph = _r1678_t0;
                r250_includeGlyphPart(r1678_currentGlyph, r250_glyphs, 'rtailBR');
                r1678_currentGlyph['apply-transform'](r250_Upright());
                r1678_currentGlyph['apply-transform'](r250_Translate(r250_RIGHTSB, 0));
                r1678_currentGlyph['apply-transform'](r250_Italify());
                return void 0;
            }));
            if (r250_SLAB) {
                r1672_currentGlyph.include(r250_RightwardTopSerif(r250_RIGHTSB, r250_CAP, r250_SIDEJUT));
                r1672_currentGlyph['tag-contour']('serifRT');
            }
            r250_xn$save$2Lrc5.call(r1672_currentGlyph, 'Qrtail', 586);
            r250_dependencyProfile[r1672_currentGlyph.name] = r250_getDependencyProfile(r1672_currentGlyph);
            return r1672_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.162', r250_xn$donothing$2Lrc0b)));
        (function _r1659_t2() {
            var _r1687_t0 = this;
            var r1687_currentGlyph = _r1687_t0;
            if (!r1687_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.163')
                r250_glyphList.pop();
            r1687_currentGlyph.include(r250_markset.e);
            r1687_currentGlyph.include(r250_OBarRightShape());
            r1687_currentGlyph.include(r250_VBarRight(r250_RIGHTSB, 0, r250_XH));
            r1687_currentGlyph.include(r250_xn$createglyph$7Hrq(function _r1687_t2() {
                var _r1693_t0 = this;
                var r1693_currentGlyph = _r1693_t0;
                r250_includeGlyphPart(r1693_currentGlyph, r250_glyphs, 'rtailBR');
                r1693_currentGlyph['apply-transform'](r250_Upright());
                r1693_currentGlyph['apply-transform'](r250_Translate(r250_RIGHTSB, 0));
                r1693_currentGlyph['apply-transform'](r250_Italify());
                return void 0;
            }));
            if (r250_SLAB) {
                r1687_currentGlyph.include(r250_RightwardTopSerif(r250_RIGHTSB, r250_XH, r250_SIDEJUT));
                r1687_currentGlyph['tag-contour']('serifRT');
            }
            r250_xn$save$2Lrc5.call(r1687_currentGlyph, 'qrtail', 587);
            r250_dependencyProfile[r1687_currentGlyph.name] = r250_getDependencyProfile(r1687_currentGlyph);
            return r1687_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.163', r250_xn$donothing$2Lrc0b)));
        return function _r1659_t3() {
            var _r1702_t0 = this;
            var r1702_currentGlyph = _r1702_t0;
            if (!r1702_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.164')
                r250_glyphList.pop();
            r1702_currentGlyph.include(r250_markset.p);
            r250_includeGlyphPart(r1702_currentGlyph, r250_glyphs, 'q');
            r1702_currentGlyph['eject-contour']('serifRT');
            r1702_currentGlyph.include(r250_VerticalHook(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, r250_XH, r250_HOOKX, -r250_HOOK));
            r250_xn$save$2Lrc5.call(r1702_currentGlyph, 'qhooktop', 672);
            r250_dependencyProfile[r1702_currentGlyph.name] = r250_getDependencyProfile(r1702_currentGlyph);
            return r1702_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.164', r250_xn$donothing$2Lrc0b));
    }());
    var _r250_t13 = function () {
        var r1709_NShape = function _r1709_t0(r1710_top, r1710_left, r1710_right, r1710_coward, r1710_diagcoward, r1710_xn) {
            return function _r1710_t2() {
                var _r1712_t0 = this;
                var r1712_currentGlyph = _r1712_t0;
                var r1712_topstroke = r250_adviceBlackness(r1_fallback(r1710_diagcoward, 4));
                var r1712_stroke = r250_adviceBlackness(r1_fallback(r1710_coward, 1));
                var r1712_halftopstroke = r1712_topstroke / 2;
                r1712_currentGlyph.include(r250_dispiro(r250_flat(r1710_left, 0, r250_widths.heading(0, r1712_stroke, r250_UPWARD)), r250_curl(r1710_left, r1710_top * 0.4, r250_heading(r250_UPWARD)), r250_straight.up.end(r1710_left, r1710_top, r250_widths.heading(0, r1712_topstroke, r250_UPWARD))));
                r1712_currentGlyph.include(r250_dispiro(r250_flat(r1710_right, r1710_top, r250_widths.heading(0, r1712_stroke, r250_DOWNWARD)), r250_curl(r1710_right, r1710_top * 0.6, r250_heading(r250_DOWNWARD)), r250_straight.down.end(r1710_right, 0, r250_widths.heading(0, r1712_topstroke, r250_DOWNWARD))));
                r1712_currentGlyph.include(r250_dispiro(r250_flat(r1710_left + r1712_halftopstroke, r1710_top, r250_widths.heading(r1712_topstroke, 0, r250_DOWNWARD)), r250_curl(r1710_right - r1712_halftopstroke, 0, r250_widths.heading(0, r1712_topstroke, r250_DOWNWARD))));
                r1712_currentGlyph.include(r250_AINSerifs(r1710_top, r1710_left, r1710_right, r1712_stroke, r1710_xn));
                return void 0;
            };
        };
        (function _r1709_t1() {
            var _r1718_t0 = this;
            var r1718_currentGlyph = _r1718_t0;
            if (!r1718_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.165')
                r250_glyphList.pop();
            r1718_currentGlyph['set-width'](r250_WIDTH);
            r1718_currentGlyph.include(r250_markset.capital);
            r1718_currentGlyph.include(r1709_NShape(r250_CAP, r250_SB, r250_RIGHTSB));
            r250_xn$save$2Lrc5.call(r1718_currentGlyph, 'N', 'N');
            r250_xn$save$2Lrc5.call(r1718_currentGlyph, 'Nu', 925);
            r250_dependencyProfile[r1718_currentGlyph.name] = r250_getDependencyProfile(r1718_currentGlyph);
            return r1718_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.165', r250_xn$donothing$2Lrc0b)));
        (function _r1709_t2() {
            var _r1725_t0 = this;
            var r1725_currentGlyph = _r1725_t0;
            if (!r1725_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.166')
                r250_glyphList.pop();
            r1725_currentGlyph.include(r250_markset.e);
            r1725_currentGlyph.include(r1709_NShape(r250_XH, r250_SB, r250_RIGHTSB, 3, 3.5));
            r250_xn$save$2Lrc5.call(r1725_currentGlyph, 'smcpN', 628);
            r250_dependencyProfile[r1725_currentGlyph.name] = r250_getDependencyProfile(r1725_currentGlyph);
            return r1725_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.166', r250_xn$donothing$2Lrc0b)));
        (function _r1709_t3() {
            var _r1730_t0 = this;
            var r1730_currentGlyph = _r1730_t0;
            if (!r1730_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.167')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1730_currentGlyph, r250_glyphs, 'N', r250_AS_BASE);
            r1730_currentGlyph['eject-contour']('serifLB');
            r1730_currentGlyph.include(r250_VerticalHook(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, -r250_HOOKX, r250_HOOK));
            r250_xn$save$2Lrc5.call(r1730_currentGlyph, 'Nltail', 413);
            r250_dependencyProfile[r1730_currentGlyph.name] = r250_getDependencyProfile(r1730_currentGlyph);
            return r1730_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.167', r250_xn$donothing$2Lrc0b)));
        return [r1709_NShape];
    }();
    var r250_NShape = _r250_t13[0];
    (function () {
        (function _r1736_t0() {
            var _r1738_t0 = this;
            var r1738_currentGlyph = _r1738_t0;
            if (!r1738_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.168')
                r250_glyphList.pop();
            r1738_currentGlyph['set-width'](r250_WIDTH);
            r1738_currentGlyph.include(r250_markset.e);
            r1738_currentGlyph.include(r250_nShoulder(new r250_xn$NamedParameterPair$2Lrc9b('left', r250_SB + r250_STROKE * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('right', r250_RIGHTSB), new r250_xn$NamedParameterPair$2Lrc9b('fine', r250_SHOULDERFINE)));
            r1738_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_XH));
            if (r250_SLAB) {
                r1738_currentGlyph.include(r250_LeftwardTopSerif(r250_SB, r250_XH, r250_SIDEJUT));
                r1738_currentGlyph['tag-contour']('serifLT');
                if (r250_para.isItalic)
                    r1738_currentGlyph.include(r250_tagged('serifRB', r250_RightwardBottomSerif(r250_RIGHTSB, 0, r250_SIDEJUT)));
                else
                    r1738_currentGlyph.include(r250_tagged('serifRB', r250_CenterBottomSerif(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT)));
                if (!r250_para.isItalic)
                    r1738_currentGlyph.include(r250_tagged('serifLB', r250_CenterBottomSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT)));
            }
            r250_xn$save$2Lrc5.call(r1738_currentGlyph, 'n', 'n');
            r250_xn$save$2Lrc5.call(r1738_currentGlyph, 'cyrpe.italic');
            r250_dependencyProfile[r1738_currentGlyph.name] = r250_getDependencyProfile(r1738_currentGlyph);
            return r1738_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.168', r250_xn$donothing$2Lrc0b)));
        (function _r1736_t1() {
            var _r1754_t0 = this;
            var r1754_currentGlyph = _r1754_t0;
            if (!r1754_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.169')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1754_currentGlyph, r250_glyphs, 'commaAbove');
            r1754_currentGlyph['apply-transform'](r250_Translate(r250_WIDTH + r250_SB - r250_MIDDLE, 0));
            r250_includeGlyphPart(r1754_currentGlyph, r250_glyphs, 'n', r250_AS_BASE);
            r250_xn$save$2Lrc5.call(r1754_currentGlyph, 'napostrophe', 329);
            r250_dependencyProfile[r1754_currentGlyph.name] = r250_getDependencyProfile(r1754_currentGlyph);
            return r1754_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.169', r250_xn$donothing$2Lrc0b)));
        (function _r1736_t2() {
            var _r1760_t0 = this;
            var r1760_currentGlyph = _r1760_t0;
            if (!r1760_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.170')
                r250_glyphList.pop();
            r1760_currentGlyph.include(r250_markset.p);
            r250_includeGlyphPart(r1760_currentGlyph, r250_glyphs, 'n', false);
            r1760_currentGlyph['eject-contour']('serifRB');
            r1760_currentGlyph.include(r250_VerticalHook(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, 0, -r250_HOOKX, r250_HOOK));
            r250_xn$save$2Lrc5.call(r1760_currentGlyph, 'eng', 331);
            r250_dependencyProfile[r1760_currentGlyph.name] = r250_getDependencyProfile(r1760_currentGlyph);
            return r1760_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.170', r250_xn$donothing$2Lrc0b)));
        (function _r1736_t3() {
            var _r1767_t0 = this;
            var r1767_currentGlyph = _r1767_t0;
            if (!r1767_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.171')
                r250_glyphList.pop();
            r1767_currentGlyph.include(r250_markset.capital);
            r1767_currentGlyph.include(r250_nShoulder(new r250_xn$NamedParameterPair$2Lrc9b('left', r250_SB + r250_STROKE), new r250_xn$NamedParameterPair$2Lrc9b('right', r250_RIGHTSB), new r250_xn$NamedParameterPair$2Lrc9b('top', r250_CAP), new r250_xn$NamedParameterPair$2Lrc9b('bottom', r250_HOOK + r250_HALFSTROKE + r250_O), new r250_xn$NamedParameterPair$2Lrc9b('sma', r250_SMOOTHA), new r250_xn$NamedParameterPair$2Lrc9b('smb', r250_SMOOTHB)));
            r1767_currentGlyph.include(r250_VerticalHook(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, r250_HOOK + r250_HALFSTROKE + r250_O, Math.max((r250_SB - r250_RIGHTSB) / 2 + r250_HALFSTROKE, -r250_HOOKX), r250_HOOK));
            r1767_currentGlyph.include(r250_VBar(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_CAP));
            r250_xn$save$2Lrc5.call(r1767_currentGlyph, 'Eng', 330);
            r250_dependencyProfile[r1767_currentGlyph.name] = r250_getDependencyProfile(r1767_currentGlyph);
            return r1767_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.171', r250_xn$donothing$2Lrc0b)));
        (function _r1736_t4() {
            var _r1780_t0 = this;
            var r1780_currentGlyph = _r1780_t0;
            if (!r1780_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.172')
                r250_glyphList.pop();
            r250_includeGlyphPart(r1780_currentGlyph, r250_glyphs, 'n', r250_AS_BASE);
            r1780_currentGlyph['eject-contour']('serifLB');
            r1780_currentGlyph.include(r250_VerticalHook(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, -r250_HOOKX, r250_HOOK));
            r250_xn$save$2Lrc5.call(r1780_currentGlyph, 'nltail', 626);
            r250_dependencyProfile[r1780_currentGlyph.name] = r250_getDependencyProfile(r1780_currentGlyph);
            return r1780_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.172', r250_xn$donothing$2Lrc0b)));
        (function _r1736_t5() {
            var _r1786_t0 = this;
            var r1786_currentGlyph = _r1786_t0;
            if (!r1786_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.173')
                r250_glyphList.pop();
            var r1786_fine = r250_adviceBlackness(4);
            var r1786_rinner = r1_clamp(r250_WIDTH * 0.065, r250_XH * 0.05, r1786_fine * 0.35);
            var r1786_wide = r250_adviceBlackness(3);
            var r1786_m1 = Math.min(r250_RIGHTSB, r250_WIDTH - r1786_rinner * 2 - r1786_fine - r250_OX);
            var r1786_x2 = r1_mix(r250_SB, r1786_m1, 0.5);
            var r1786_y2 = -r1786_fine;
            r1786_currentGlyph.include(r250_markset.e);
            r1786_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_XH, r1786_wide));
            r1786_currentGlyph.include(r250_dispiro(r250_nShoulderKnots(new r250_xn$NamedParameterPair$2Lrc9b('left', r250_SB + r1786_wide * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('right', r1786_m1), new r250_xn$NamedParameterPair$2Lrc9b('fine', r250_SHOULDERFINE), new r250_xn$NamedParameterPair$2Lrc9b('bottom', r1786_rinner * 2 + r1786_fine), new r250_xn$NamedParameterPair$2Lrc9b('stroke', r1786_wide)), r250_CurlyTail(r1786_fine, r1786_rinner, r1786_m1, 0, r1786_m1 + r1786_rinner * 2 + r1786_fine, r1786_x2, r1786_y2)));
            if (r250_SLAB) {
                r1786_currentGlyph.include(r250_LeftwardTopSerif(r250_SB, r250_XH, r250_SIDEJUT));
                r1786_currentGlyph['tag-contour']('serifLT');
                if (!r250_para.isItalic) {
                    r1786_currentGlyph.include(r250_CenterBottomSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                    r1786_currentGlyph['tag-contour']('serifLB');
                }
            }
            r250_xn$save$2Lrc5.call(r1786_currentGlyph, 'ncurlytail', 565);
            r250_dependencyProfile[r1786_currentGlyph.name] = r250_getDependencyProfile(r1786_currentGlyph);
            return r1786_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.173', r250_xn$donothing$2Lrc0b)));
        (function _r1736_t6() {
            var _r1801_t0 = this;
            var r1801_currentGlyph = _r1801_t0;
            if (!r1801_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.174')
                r250_glyphList.pop();
            r1801_currentGlyph.include(r250_markset.p);
            r1801_currentGlyph['set-anchor']('lf', r250_BASE, r250_SB + r250_HALFSTROKE, 0);
            r1801_currentGlyph.include(r250_nShoulder(new r250_xn$NamedParameterPair$2Lrc9b('left', r250_SB + r250_STROKE * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('right', r250_RIGHTSB), new r250_xn$NamedParameterPair$2Lrc9b('bottom', r250_DESCENDER)));
            r1801_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_XH));
            if (r250_SLAB) {
                r1801_currentGlyph.include(r250_LeftwardTopSerif(r250_SB, r250_XH, r250_SIDEJUT));
                r1801_currentGlyph['tag-contour']('serifLT');
            }
            r250_xn$save$2Lrc5.call(r1801_currentGlyph, 'eta', 951);
            r250_dependencyProfile[r1801_currentGlyph.name] = r250_getDependencyProfile(r1801_currentGlyph);
            return r1801_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.174', r250_xn$donothing$2Lrc0b)));
        (function _r1736_t7() {
            var _r1813_t0 = this;
            var r1813_currentGlyph = _r1813_t0;
            if (!r1813_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.175')
                r250_glyphList.pop();
            r1813_currentGlyph.include(r250_markset.if);
            r1813_currentGlyph['set-anchor']('lf', r250_BASE, r250_SB + r250_HALFSTROKE, 0);
            r1813_currentGlyph.include(r250_nShoulder(new r250_xn$NamedParameterPair$2Lrc9b('left', r250_SB + r250_STROKE * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('right', r250_RIGHTSB), new r250_xn$NamedParameterPair$2Lrc9b('top', r250_CAP), new r250_xn$NamedParameterPair$2Lrc9b('bottom', r250_DESCENDER)));
            r1813_currentGlyph.include(r250_VBar(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_CAP));
            if (r250_SLAB) {
                r1813_currentGlyph.include(r250_LeftwardTopSerif(r250_SB, r250_CAP, r250_SIDEJUT));
                r1813_currentGlyph['tag-contour']('serifLT');
                if (r250_para.isItalic)
                    r1813_currentGlyph.include(r250_tagged('serifRB', r250_RightwardBottomSerif(r250_RIGHTSB, r250_DESCENDER, r250_SIDEJUT)));
                else
                    r1813_currentGlyph.include(r250_tagged('serifRB', r250_CenterBottomSerif(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, r250_DESCENDER, r250_JUT)));
                if (!r250_para.isItalic) {
                    r1813_currentGlyph.include(r250_CenterBottomSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                    r1813_currentGlyph['tag-contour']('serifLB');
                }
            }
            r250_xn$save$2Lrc5.call(r1813_currentGlyph, 'latinEta', 544);
            r250_dependencyProfile[r1813_currentGlyph.name] = r250_getDependencyProfile(r1813_currentGlyph);
            return r1813_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.175', r250_xn$donothing$2Lrc0b)));
        return function _r1736_t8() {
            var _r1830_t0 = this;
            var r1830_currentGlyph = _r1830_t0;
            if (!r1830_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.176')
                r250_glyphList.pop();
            r1830_currentGlyph.include(r250_markset.p);
            r1830_currentGlyph['set-anchor']('lf', r250_BASE, r250_SB + r250_HALFSTROKE, 0);
            r1830_currentGlyph.include(r250_nShoulder(new r250_xn$NamedParameterPair$2Lrc9b('left', r250_SB + r250_STROKE * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('right', r250_RIGHTSB), new r250_xn$NamedParameterPair$2Lrc9b('bottom', r250_DESCENDER)));
            r1830_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_XH));
            if (r250_SLAB) {
                r1830_currentGlyph.include(r250_LeftwardTopSerif(r250_SB, r250_XH, r250_SIDEJUT));
                r1830_currentGlyph['tag-contour']('serifLT');
                if (r250_para.isItalic)
                    r1830_currentGlyph.include(r250_tagged('serifRB', r250_RightwardBottomSerif(r250_RIGHTSB, r250_DESCENDER, r250_SIDEJUT)));
                else
                    r1830_currentGlyph.include(r250_tagged('serifRB', r250_CenterBottomSerif(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, r250_DESCENDER, r250_JUT)));
                if (!r250_para.isItalic) {
                    r1830_currentGlyph.include(r250_CenterBottomSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                    r1830_currentGlyph['tag-contour']('serifLB');
                }
            }
            r250_xn$save$2Lrc5.call(r1830_currentGlyph, 'latineta', 414);
            r250_dependencyProfile[r1830_currentGlyph.name] = r250_getDependencyProfile(r1830_currentGlyph);
            return r1830_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.176', r250_xn$donothing$2Lrc0b));
    }());
    var _r250_t14 = function () {
        var r1846_UShape = function _r1846_t0(r1847_top, r1847_bottom, r1847_stroke, r1847_oper) {
            return function _r1847_t2() {
                var _r1849_t0 = this;
                var r1849_currentGlyph = _r1849_t0;
                r1849_currentGlyph.include(r250_dispiro(r250_widths.lhs(r1847_stroke), r250_flat(r250_SB, r1847_top, r250_heading(r250_DOWNWARD)), r250_curl(r250_SB, r1847_bottom + r250_SMOOTHB), r250_arcvh(), r250_g4(r250_MIDDLE + r250_CORRECTION_OMIDS, r1847_bottom + r250_O), r250_archv(), r250_flat(r250_RIGHTSB, r1847_bottom + r250_SMOOTHA), r250_curl(r250_RIGHTSB, r1847_top, r250_heading(r250_UPWARD))));
                if (!r1847_oper)
                    r1849_currentGlyph.include(r250_AIVSerifs(r1847_top));
                return void 0;
            };
        };
        (function _r1846_t1() {
            var _r1853_t0 = this;
            var r1853_currentGlyph = _r1853_t0;
            if (!r1853_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.177')
                r250_glyphList.pop();
            r1853_currentGlyph['set-width'](r250_WIDTH);
            r1853_currentGlyph.include(r250_markset.capital);
            r1853_currentGlyph.include(r1846_UShape(r250_CAP, 0));
            r250_xn$save$2Lrc5.call(r1853_currentGlyph, 'U', 'U');
            r250_dependencyProfile[r1853_currentGlyph.name] = r250_getDependencyProfile(r1853_currentGlyph);
            return r1853_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.177', r250_xn$donothing$2Lrc0b)));
        (function _r1846_t2() {
            var _r1859_t0 = this;
            var r1859_currentGlyph = _r1859_t0;
            if (!r1859_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.178')
                r250_glyphList.pop();
            r1859_currentGlyph.include(r250_markset.e);
            r1859_currentGlyph.include(r1846_UShape(r250_XH, 0));
            r250_xn$save$2Lrc5.call(r1859_currentGlyph, 'smcpU', 7452);
            r250_dependencyProfile[r1859_currentGlyph.name] = r250_getDependencyProfile(r1859_currentGlyph);
            return r1859_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.178', r250_xn$donothing$2Lrc0b)));
        return [r1846_UShape];
    }();
    var r250_UShape = _r250_t14[0];
    (function () {
        (function _r1864_t0() {
            var _r1866_t0 = this;
            var r1866_currentGlyph = _r1866_t0;
            if (!r1866_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.179')
                r250_glyphList.pop();
            r1866_currentGlyph['set-width'](r250_WIDTH);
            r1866_currentGlyph.include(r250_markset.e);
            r1866_currentGlyph['set-anchor']('trailing', r250_BASE, r250_RIGHTSB - r250_markHalfStroke, 0);
            r250_includeGlyphPart(r1866_currentGlyph, r250_glyphs, 'n');
            r1866_currentGlyph['eject-contour']('serifRB');
            r1866_currentGlyph['eject-contour']('serifLB');
            r1866_currentGlyph['retag-contour']('serifLT', 'serifRB');
            r1866_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_XH / 2));
            if (r250_SLAB) {
                r1866_currentGlyph.include(r250_LeftwardTopSerif(r250_RIGHTSB - r250_STROKE * r250_HVCONTRAST, r250_XH, r250_SIDEJUT));
                r1866_currentGlyph.include(r250_LeftwardTopSerif(r250_SB, r250_XH, r250_SIDEJUT));
            }
            r250_xn$save$2Lrc5.call(r1866_currentGlyph, 'u', 'u');
            r250_dependencyProfile[r1866_currentGlyph.name] = r250_getDependencyProfile(r1866_currentGlyph);
            return r1866_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.179', r250_xn$donothing$2Lrc0b)));
        (function _r1864_t1() {
            var _r1879_t0 = this;
            var r1879_currentGlyph = _r1879_t0;
            if (!r1879_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.180')
                r250_glyphList.pop();
            r1879_currentGlyph.include(r250_markset.e);
            r1879_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r250_SB + r250_OX - r250_O, r250_XH, r250_heading(r250_DOWNWARD)), r250_curl(r250_SB + r250_OX - r250_O, r250_SMALLSMOOTHB), r250_arcvh(), r250_g4(r250_MIDDLE + r250_CORRECTION_OMIDS, r250_O), r250_archv(), r250_flat(r250_RIGHTSB - r250_OX + r250_O, r250_SMALLSMOOTHA), r250_curl(r250_RIGHTSB - r250_OX + r250_O, r250_XH, r250_heading(r250_UPWARD))));
            r250_xn$save$2Lrc5.call(r1879_currentGlyph, 'upsilon', 965);
            r250_dependencyProfile[r1879_currentGlyph.name] = r250_getDependencyProfile(r1879_currentGlyph);
            return r1879_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.180', r250_xn$donothing$2Lrc0b)));
        var r1864_LatinUpsilon2Shape = function _r1864_t2(r1883_top, r1883_sma, r1883_smb) {
            return function _r1883_t2() {
                var _r1885_t0 = this;
                var r1885_currentGlyph = _r1885_t0;
                r1885_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r250_SB, r1883_top, r250_heading(r250_DOWNWARD)), r250_curl(r250_SB, r1883_smb), r250_arcvh(), r250_g4(r250_MIDDLE + r250_CORRECTION_OMIDS, r250_O), r250_archv(), r250_flat(r250_RIGHTSB, r1883_sma), r250_curl(r250_RIGHTSB, r1883_top - r250_HOOK - r250_HALFSTROKE, r250_heading(r250_UPWARD))));
                r1885_currentGlyph.include(r250_VerticalHook(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, r1883_top - r250_HOOK - r250_HALFSTROKE, -(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST - r250_MIDDLE), -r250_HOOK));
                return void 0;
            };
        };
        (function _r1864_t3() {
            var _r1889_t0 = this;
            var r1889_currentGlyph = _r1889_t0;
            if (!r1889_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.181')
                r250_glyphList.pop();
            r1889_currentGlyph.include(r250_markset.e);
            r1889_currentGlyph.include(r1864_LatinUpsilon2Shape(r250_CAP, r250_SMOOTHA, r250_SMOOTHB));
            r250_xn$save$2Lrc5.call(r1889_currentGlyph, 'latinUpsilon2', 434);
            r250_dependencyProfile[r1889_currentGlyph.name] = r250_getDependencyProfile(r1889_currentGlyph);
            return r1889_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.181', r250_xn$donothing$2Lrc0b)));
        return function _r1864_t4() {
            var _r1894_t0 = this;
            var r1894_currentGlyph = _r1894_t0;
            if (!r1894_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.182')
                r250_glyphList.pop();
            r1894_currentGlyph.include(r250_markset.e);
            r1894_currentGlyph.include(r1864_LatinUpsilon2Shape(r250_XH, r250_SMALLSMOOTHA, r250_SMALLSMOOTHB));
            r250_xn$save$2Lrc5.call(r1894_currentGlyph, 'latinupsilon2', 651);
            r250_dependencyProfile[r1894_currentGlyph.name] = r250_getDependencyProfile(r1894_currentGlyph);
            return r1894_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.182', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r1899_MShape = function _r1899_t0(r1900_top, r1900__div) {
            return function _r1900_t2() {
                var _r1902_t0 = this;
                var r1902_currentGlyph = _r1902_t0;
                var r1902_div = r1_fallback(r1900__div, 1);
                var r1902_rightSB = r250_WIDTH * r1902_div - r250_SB;
                var r1902_middle = r250_MIDDLE * r1902_div;
                var r1902_topstroke = r250_adviceBlackness(5, r1902_div);
                var r1902_halftopstroke = r1902_topstroke / 2;
                var r1902_middleY = r1900_top * 0.3 / r1902_div;
                r1902_currentGlyph.include(r250_dispiro(r250_flat(r250_SB, 0, r250_widths.heading(0, r250_STROKE, r250_UPWARD)), r250_curl(r250_SB, r1900_top * 0.2, r250_heading(r250_UPWARD)), r250_straight.up.end(r250_SB, r1900_top, r250_widths.heading(0, r1902_topstroke, r250_UPWARD))));
                r1902_currentGlyph.include(r250_dispiro(r250_flat(r1902_rightSB, 0, r250_widths.heading(r250_STROKE, 0, r250_UPWARD)), r250_curl(r1902_rightSB, r1900_top * 0.2, r250_heading(r250_UPWARD)), r250_straight.up.end(r1902_rightSB, r1900_top, r250_widths.heading(r1902_topstroke, 0, r250_UPWARD))));
                r1902_currentGlyph.include(r250_dispiro(r250_flat(r250_SB + r1902_halftopstroke, r1900_top, r250_widths.heading(r1902_topstroke, 0, r250_DOWNWARD)), r250_curl(r1902_middle, r1902_middleY, r250_widths.heading(r1902_topstroke / 2, r1902_topstroke / 2, r250_DOWNWARD))));
                r1902_currentGlyph.include(r250_dispiro(r250_flat(r1902_rightSB - r1902_halftopstroke, r1900_top, r250_widths.heading(0, r1902_topstroke, r250_DOWNWARD)), r250_curl(r1902_middle, r1902_middleY, r250_widths.heading(r1902_topstroke / 2, r1902_topstroke / 2, r250_DOWNWARD))));
                r1902_currentGlyph.include(r250_AIMSerifs(r1900_top, r250_SB, r1902_rightSB));
                return void 0;
            };
        };
        (function _r1899_t1() {
            var _r1909_t0 = this;
            var r1909_currentGlyph = _r1909_t0;
            if (!r1909_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.183')
                r250_glyphList.pop();
            var r1909_df = r250_DivFrame(r250_para.diversityM);
            r1909_currentGlyph.include(r1909_df.markSet.capital);
            r1909_currentGlyph['set-width'](r1909_df.width);
            r1909_currentGlyph.include(r1899_MShape(r250_CAP, r1909_df.div));
            r250_xn$save$2Lrc5.call(r1909_currentGlyph, 'M', 'M');
            r250_xn$save$2Lrc5.call(r1909_currentGlyph, 'Mu', 924);
            r250_xn$save$2Lrc5.call(r1909_currentGlyph, 'cyrEm', 1052);
            r250_dependencyProfile[r1909_currentGlyph.name] = r250_getDependencyProfile(r1909_currentGlyph);
            return r1909_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.183', r250_xn$donothing$2Lrc0b)));
        return function _r1899_t2() {
            var _r1917_t0 = this;
            var r1917_currentGlyph = _r1917_t0;
            if (!r1917_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.184')
                r250_glyphList.pop();
            var r1917_df = r250_DivFrame(r250_para.diversityM);
            r1917_currentGlyph.include(r1917_df.markSet.e);
            r1917_currentGlyph['set-width'](r1917_df.width);
            r1917_currentGlyph.include(r1899_MShape(r250_XH, r1917_df.div));
            r250_xn$save$2Lrc5.call(r1917_currentGlyph, 'cyrem', 1084);
            r250_dependencyProfile[r1917_currentGlyph.name] = r250_getDependencyProfile(r1917_currentGlyph);
            return r1917_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.184', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r1923_dfM = function _r1923_t0() {
            return r250_DivFrame(r250_para.diversityM, 3);
        };
        var r1923_SmallMShape = function _r1923_t1(r1925_top, r1925_bot, r1925_mbot, r1925_df) {
            return function _r1925_t2() {
                var r1927_jut;
                var _r1927_t0 = this;
                var r1927_currentGlyph = _r1927_t0;
                var r1927_m1 = r1_mix(r1925_df.leftSB, r1925_df.middle + r1925_df.mvs / 2 * r250_HVCONTRAST, 0.5);
                var r1927_m2 = r1_mix(r1925_df.rightSB, r1925_df.middle - r1925_df.mvs / 2 * r250_HVCONTRAST, 0.5);
                r1927_currentGlyph.include(r250_mShoulderSpiro(new r250_xn$NamedParameterPair$2Lrc9b('left', r1925_df.leftSB + r1925_df.mvs * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('right', r1925_df.middle + r1925_df.mvs / 2 * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('top', r1925_top), new r250_xn$NamedParameterPair$2Lrc9b('bottom', r1925_mbot), new r250_xn$NamedParameterPair$2Lrc9b('width', r1925_df.mvs), new r250_xn$NamedParameterPair$2Lrc9b('fine', r1925_df.mvs * r250_SHOULDERFINE / r250_STROKE), new r250_xn$NamedParameterPair$2Lrc9b('diversity', r1925_df.div)));
                r1927_currentGlyph.include(r250_mShoulderSpiro(new r250_xn$NamedParameterPair$2Lrc9b('left', r1925_df.middle + r1925_df.mvs * 0.5 * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('right', r1925_df.rightSB), new r250_xn$NamedParameterPair$2Lrc9b('top', r1925_top), new r250_xn$NamedParameterPair$2Lrc9b('bottom', r1925_bot), new r250_xn$NamedParameterPair$2Lrc9b('width', r1925_df.mvs), new r250_xn$NamedParameterPair$2Lrc9b('fine', r1925_df.mvs * r250_SHOULDERFINE / r250_STROKE), new r250_xn$NamedParameterPair$2Lrc9b('diversity', r1925_df.div)));
                r1927_currentGlyph.include(r250_VBarLeft(r1925_df.leftSB, r1925_bot, r1925_top, r1925_df.mvs));
                if (r250_SLAB) {
                    r1927_jut = r250_JUT * r1925_df.mvs / r250_STROKE + r250_O;
                    if (r250_WIDTH * r1925_df.div > r1927_jut * 3.5) {
                        r1927_currentGlyph.include(r250_intersection(r250_CenterTopSerif(r1925_df.leftSB + 0.5 * r1925_df.mvs * r250_HVCONTRAST, r1925_top, r1927_jut, r1925_df.mvs), r250_xn$spirooutline$1aao(r250_corner(r250_SB, r1925_bot), r250_corner(r250_SB, r1925_top), r250_corner(0, r1925_top), r250_corner(0, r1925_bot))));
                        r1927_currentGlyph['tag-contour']('serifLT');
                        if (!r250_para.isItalic) {
                            r1927_currentGlyph.include(r250_CenterBottomSerif(r1925_df.leftSB + 0.5 * r1925_df.mvs * r250_HVCONTRAST, r1925_bot, r1927_jut, r1925_df.mvs));
                            r1927_currentGlyph.include(r250_CenterBottomSerif(r1925_df.middle, r1925_bot, r1927_jut, r1925_df.mvs));
                            r1927_currentGlyph.include(r250_CenterBottomSerif(r1925_df.rightSB - 0.5 * r1925_df.mvs * r250_HVCONTRAST, r1925_bot, r1927_jut, r1925_df.mvs));
                            r1927_currentGlyph['tag-contour']('serifRB');
                        } else {
                            r1927_currentGlyph.include(r250_intersection(r250_RightwardBottomSerif(r1925_df.rightSB + r250_O, r1925_bot, r1927_jut / 2, r1925_df.mvs), r250_xn$spirooutline$1aao(r250_corner(r1925_df.rightSB + r250_O, r1925_bot), r250_corner(r1925_df.rightSB + r250_O, r1925_top), r250_corner(r1925_df.width, r1925_top), r250_corner(r1925_df.width, r1925_bot))));
                            r1927_currentGlyph['tag-contour']('serifRB');
                        }
                    } else {
                        r1927_currentGlyph.include(r250_LeftwardTopSerif(r1925_df.leftSB, r1925_top, r250_SIDEJUT, r1925_df.mvs));
                        r1927_currentGlyph['tag-contour']('serifLT');
                        if (!r250_para.isItalic)
                            r1927_currentGlyph.include(r250_LeftwardBottomSerif(r1925_df.leftSB, r1925_bot, r250_SIDEJUT, r1925_df.mvs));
                        r1927_currentGlyph.include(r250_RightwardBottomSerif(r1925_df.rightSB, r1925_bot, r250_SIDEJUT, r1925_df.mvs));
                        r1927_currentGlyph['tag-contour']('serifRB');
                    }
                }
                return void 0;
            };
        };
        (function _r1923_t2() {
            var _r1959_t0 = this;
            var r1959_currentGlyph = _r1959_t0;
            if (!r1959_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.185')
                r250_glyphList.pop();
            var r1959_df = r1923_dfM();
            r1959_currentGlyph['set-width'](r1959_df.width);
            r1959_currentGlyph.include(r1959_df.markSet.e);
            r1959_currentGlyph.include(r1923_SmallMShape(r250_XH, 0, 0, r1959_df));
            r250_xn$save$2Lrc5.call(r1959_currentGlyph, 'm.longleg');
            r250_xn$save$2Lrc5.call(r1959_currentGlyph, 'cyrte.italic');
            r250_dependencyProfile[r1959_currentGlyph.name] = r250_getDependencyProfile(r1959_currentGlyph);
            return r1959_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.185', r250_xn$donothing$2Lrc0b)));
        (function _r1923_t3() {
            var _r1966_t0 = this;
            var r1966_currentGlyph = _r1966_t0;
            if (!r1966_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.186')
                r250_glyphList.pop();
            var r1966_df = r1923_dfM();
            r1966_currentGlyph['set-width'](r1966_df.width);
            r1966_currentGlyph.include(r1966_df.markSet.e);
            r1966_currentGlyph.include(r1923_SmallMShape(r250_XH, 0, r250_XH * 0.2, r1966_df));
            r250_xn$save$2Lrc5.call(r1966_currentGlyph, 'm.shortleg');
            r250_dependencyProfile[r1966_currentGlyph.name] = r250_getDependencyProfile(r1966_currentGlyph);
            return r1966_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.186', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('m', 'm');
        r250_composite('cyrtedescender.italic', r250_glyphs['cyrte.italic'], r250_CyrDescender(r250_WIDTH * r250_para.diversityM - r250_SB), r250_markset.e);
        (function _r1923_t4() {
            var _r1972_t0 = this;
            var r1972_currentGlyph = _r1972_t0;
            if (!r1972_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.187')
                r250_glyphList.pop();
            var r1972_df = r1923_dfM();
            r1972_currentGlyph.include(r1972_df.markSet.p);
            r250_includeGlyphPart(r1972_currentGlyph, r250_glyphs, 'm');
            r1972_currentGlyph['eject-contour']('serifRB');
            r1972_currentGlyph.include(r250_VerticalHook(r1972_df.rightSB - r1972_df.mvs / 2 * r250_HVCONTRAST, 0, -r250_HOOKX, r250_HOOK, r1972_df.mvs));
            r250_xn$save$2Lrc5.call(r1972_currentGlyph, 'mltail', 625);
            r250_dependencyProfile[r1972_currentGlyph.name] = r250_getDependencyProfile(r1972_currentGlyph);
            return r1972_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.187', r250_xn$donothing$2Lrc0b)));
        r250_turned(void 0, 623, 'm', r1923_dfM().middle, r250_XH / 2);
        (function _r1923_t5() {
            var _r1979_t0 = this;
            var r1979_currentGlyph = _r1979_t0;
            if (!r1979_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.188')
                r250_glyphList.pop();
            var r1979_df = r1923_dfM();
            r1979_currentGlyph['set-width'](r1979_df.width);
            r1979_currentGlyph.include(r1979_df.markSet.capital);
            r1979_currentGlyph.include(r1923_SmallMShape(r250_CAP, 0, 0, r1979_df));
            r1979_currentGlyph.include(r250_FlipAround(r1979_df.middle, r250_CAP / 2));
            r250_xn$save$2Lrc5.call(r1979_currentGlyph, 'capitalTurnm', 412);
            r250_dependencyProfile[r1979_currentGlyph.name] = r250_getDependencyProfile(r1979_currentGlyph);
            return r1979_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.188', r250_xn$donothing$2Lrc0b)));
        return function _r1923_t6() {
            var _r1986_t0 = this;
            var r1986_currentGlyph = _r1986_t0;
            if (!r1986_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.189')
                r250_glyphList.pop();
            var r1986_df = r1923_dfM();
            r1986_currentGlyph['set-width'](r1986_df.width);
            r1986_currentGlyph.include(r1986_df.markSet.p);
            r250_includeGlyphPart(r1986_currentGlyph, r250_glyphs, 'm');
            r1986_currentGlyph['eject-contour']('serifLT');
            r1986_currentGlyph.include(r250_FlipAround(r1986_df.middle, r250_XH / 2));
            r1986_currentGlyph.include(r250_VBarRight(r1986_df.rightSB, r250_DESCENDER, 0, r1986_df.mvs));
            r250_xn$save$2Lrc5.call(r1986_currentGlyph, 'turnmleg', 624);
            r250_dependencyProfile[r1986_currentGlyph.name] = r250_getDependencyProfile(r1986_currentGlyph);
            return r1986_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.189', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r1995_HShape = function _r1995_t0(r1996_top) {
            return function _r1996_t2() {
                var _r1998_t0 = this;
                var r1998_currentGlyph = _r1998_t0;
                r1998_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r1996_top));
                r1998_currentGlyph.include(r250_VBarRight(r250_RIGHTSB, 0, r1996_top));
                r1998_currentGlyph.include(r250_HBar(r250_SB - r250_O, r250_RIGHTSB + r250_O, r1996_top * r250_BARPOS));
                r1998_currentGlyph.include(r250_AIHSerifs(r1996_top));
                return void 0;
            };
        };
        (function _r1995_t1() {
            var _r2004_t0 = this;
            var r2004_currentGlyph = _r2004_t0;
            if (!r2004_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.190')
                r250_glyphList.pop();
            r2004_currentGlyph['set-width'](r250_WIDTH);
            r2004_currentGlyph.include(r250_markset.capital);
            r2004_currentGlyph.include(r1995_HShape(r250_CAP));
            r250_xn$save$2Lrc5.call(r2004_currentGlyph, 'H', 'H');
            r250_xn$save$2Lrc5.call(r2004_currentGlyph, 'Eta', 919);
            r250_xn$save$2Lrc5.call(r2004_currentGlyph, 'cyrEn', 1053);
            r250_dependencyProfile[r2004_currentGlyph.name] = r250_getDependencyProfile(r2004_currentGlyph);
            return r2004_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.190', r250_xn$donothing$2Lrc0b)));
        r250_composite(r250_glyphs.cyrEn, r250_CyrDescender(r250_RIGHTSB), r250_xn$intounicode$5sIl(1186));
        (function _r1995_t2() {
            var _r2012_t0 = this;
            var r2012_currentGlyph = _r2012_t0;
            if (!r2012_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.191')
                r250_glyphList.pop();
            r2012_currentGlyph.include(r250_markset.e);
            r2012_currentGlyph.include(r1995_HShape(r250_XH));
            r250_xn$save$2Lrc5.call(r2012_currentGlyph, 'cyren', 1085);
            r250_xn$save$2Lrc5.call(r2012_currentGlyph, 'smcpH', 668);
            r250_dependencyProfile[r2012_currentGlyph.name] = r250_getDependencyProfile(r2012_currentGlyph);
            return r2012_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.191', r250_xn$donothing$2Lrc0b)));
        r250_composite(r250_glyphs.cyren, r250_CyrDescender(r250_RIGHTSB), r250_xn$intounicode$5sIl(1187));
        return function _r1995_t3() {
            var _r2018_t0 = this;
            var r2018_currentGlyph = _r2018_t0;
            if (!r2018_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.192')
                r250_glyphList.pop();
            r250_includeGlyphPart(r2018_currentGlyph, r250_glyphs, 'H', r250_AS_BASE);
            r2018_currentGlyph.include(r250_HOverlayBar(r1_mix(r250_SB, 0, 0.7), r1_mix(r250_RIGHTSB, r250_WIDTH, 0.7), r1_mix(r250_CAPMIDDLE, r250_CAP, 0.45)));
            r250_xn$save$2Lrc5.call(r2018_currentGlyph, 'Hbar', 294);
            r250_dependencyProfile[r2018_currentGlyph.name] = r250_getDependencyProfile(r2018_currentGlyph);
            return r2018_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.192', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r2023_t0() {
            var _r2025_t0 = this;
            var r2025_currentGlyph = _r2025_t0;
            if (!r2025_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.193')
                r250_glyphList.pop();
            r2025_currentGlyph['set-width'](r250_WIDTH);
            r2025_currentGlyph.include(r250_markset.b);
            r2025_currentGlyph.include(r250_nShoulder(new r250_xn$NamedParameterPair$2Lrc9b('left', r250_SB + r250_STROKE * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('right', r250_RIGHTSB)));
            r2025_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_CAP));
            if (r250_SLAB) {
                r2025_currentGlyph.include(r250_LeftwardTopSerif(r250_SB, r250_CAP, r250_SIDEJUT));
                if (r250_para.isItalic)
                    r2025_currentGlyph.include(r250_RightwardBottomSerif(r250_RIGHTSB, 0, r250_SIDEJUT));
                else
                    r2025_currentGlyph.include(r250_CenterBottomSerif(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                r2025_currentGlyph['tag-contour']('serifRB');
                if (!r250_para.isItalic) {
                    r2025_currentGlyph.include(r250_CenterBottomSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                    r2025_currentGlyph['tag-contour']('serifLB');
                }
            }
            r250_xn$save$2Lrc5.call(r2025_currentGlyph, 'h', 'h');
            r250_xn$save$2Lrc5.call(r2025_currentGlyph, 'cyrshha', 1211);
            r250_dependencyProfile[r2025_currentGlyph.name] = r250_getDependencyProfile(r2025_currentGlyph);
            return r2025_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.193', r250_xn$donothing$2Lrc0b)));
        (function _r2023_t1() {
            var _r2041_t0 = this;
            var r2041_currentGlyph = _r2041_t0;
            if (!r2041_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.194')
                r250_glyphList.pop();
            r2041_currentGlyph.include(r250_markset.b);
            r2041_currentGlyph.include(r250_nShoulder(new r250_xn$NamedParameterPair$2Lrc9b('left', r250_SB + r250_STROKE * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('right', r250_RIGHTSB)));
            r2041_currentGlyph.include(r250_HooktopLeftBar());
            if (r250_SLAB) {
                if (r250_para.isItalic)
                    r2041_currentGlyph.include(r250_RightwardBottomSerif(r250_RIGHTSB, 0, r250_SIDEJUT));
                else
                    r2041_currentGlyph.include(r250_CenterBottomSerif(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                r2041_currentGlyph['tag-contour']('serifRB');
                if (!r250_para.isItalic) {
                    r2041_currentGlyph.include(r250_CenterBottomSerif(r250_SB + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                    r2041_currentGlyph['tag-contour']('serifLB');
                }
            }
            r250_xn$save$2Lrc5.call(r2041_currentGlyph, 'hhooktop', 614);
            r250_dependencyProfile[r2041_currentGlyph.name] = r250_getDependencyProfile(r2041_currentGlyph);
            return r2041_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.194', r250_xn$donothing$2Lrc0b)));
        (function _r2023_t2() {
            var _r2054_t0 = this;
            var r2054_currentGlyph = _r2054_t0;
            if (!r2054_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.195')
                r250_glyphList.pop();
            r2054_currentGlyph.include(r250_markset.p);
            r250_includeGlyphPart(r2054_currentGlyph, r250_glyphs, 'hhooktop');
            r2054_currentGlyph['eject-contour']('serifRB');
            r2054_currentGlyph.include(r250_VerticalHook(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, 0, -r250_HOOKX, r250_HOOK));
            r250_xn$save$2Lrc5.call(r2054_currentGlyph, 'hhooktopltail', 615);
            r250_dependencyProfile[r2054_currentGlyph.name] = r250_getDependencyProfile(r2054_currentGlyph);
            return r2054_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.195', r250_xn$donothing$2Lrc0b)));
        (function _r2023_t3() {
            var _r2061_t0 = this;
            var r2061_currentGlyph = _r2061_t0;
            if (!r2061_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.196')
                r250_glyphList.pop();
            r2061_currentGlyph.include(r250_markset.p);
            r250_includeGlyphPart(r2061_currentGlyph, r250_glyphs, 'h');
            r2061_currentGlyph['eject-contour']('serifRB');
            r2061_currentGlyph.include(r250_VerticalHook(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, 0, -r250_HOOKX, r250_HOOK));
            r250_xn$save$2Lrc5.call(r2061_currentGlyph, 'hltail', 42791);
            r250_dependencyProfile[r2061_currentGlyph.name] = r250_getDependencyProfile(r2061_currentGlyph);
            return r2061_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.196', r250_xn$donothing$2Lrc0b)));
        r250_turned(void 0, 613, 'h', r250_MIDDLE, r250_XH / 2, r250_markset.p);
        (function _r2023_t4() {
            var _r2068_t0 = this;
            var r2068_currentGlyph = _r2068_t0;
            if (!r2068_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.197')
                r250_glyphList.pop();
            r2068_currentGlyph.include(r250_nShoulder(new r250_xn$NamedParameterPair$2Lrc9b('left', r250_SB + r250_STROKE * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('right', r250_RIGHTSB), new r250_xn$NamedParameterPair$2Lrc9b('bottom', r250_HOOK + r250_HALFSTROKE + 1)));
            r2068_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_CAP));
            r2068_currentGlyph.include(r250_xn$createglyph$7Hrq(function _r2068_t2() {
                var _r2076_t0 = this;
                var r2076_currentGlyph = _r2076_t0;
                r250_includeGlyphPart(r2076_currentGlyph, r250_glyphs, 'rtailBR');
                r2076_currentGlyph['apply-transform'](r250_Upright());
                r2076_currentGlyph['apply-transform'](r250_Translate(r250_RIGHTSB, r250_HOOK + r250_HALFSTROKE));
                r2076_currentGlyph['apply-transform'](r250_Italify());
                return void 0;
            }));
            r2068_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_XH / 2));
            r2068_currentGlyph.include(r250_markset.p);
            if (r250_SLAB) {
                r2068_currentGlyph.include(r250_LeftwardTopSerif(r250_RIGHTSB - r250_STROKE * r250_HVCONTRAST, r250_XH, r250_SIDEJUT));
                r2068_currentGlyph.include(r250_CenterBottomSerif(r250_RIGHTSB - r250_HALFSTROKE * r250_HVCONTRAST, r250_DESCENDER, r250_JUT));
            }
            r250_xn$save$2Lrc5.call(r2068_currentGlyph, 'hookturnh', 686);
            r250_dependencyProfile[r2068_currentGlyph.name] = r250_getDependencyProfile(r2068_currentGlyph);
            return r2068_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.197', r250_xn$donothing$2Lrc0b)));
        (function _r2023_t5() {
            var _r2087_t0 = this;
            var r2087_currentGlyph = _r2087_t0;
            if (!r2087_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.198')
                r250_glyphList.pop();
            r2087_currentGlyph.include(r250_nShoulder(new r250_xn$NamedParameterPair$2Lrc9b('left', r250_SB + r250_STROKE * r250_HVCONTRAST), new r250_xn$NamedParameterPair$2Lrc9b('right', r250_RIGHTSB), new r250_xn$NamedParameterPair$2Lrc9b('bottom', r250_HOOK + r250_HALFSTROKE + 1)));
            r2087_currentGlyph.include(r250_VBarLeft(r250_SB, 0, r250_XH - 1));
            r2087_currentGlyph.include(r250_xn$createglyph$7Hrq(function _r2087_t2() {
                var _r2095_t0 = this;
                var r2095_currentGlyph = _r2095_t0;
                r250_includeGlyphPart(r2095_currentGlyph, r250_glyphs, 'rtailBR');
                r2095_currentGlyph['apply-transform'](r250_Upright());
                r2095_currentGlyph['apply-transform'](r250_Translate(r250_RIGHTSB, r250_HOOK + r250_HALFSTROKE));
                r2095_currentGlyph['apply-transform'](r250_Italify());
                return void 0;
            }));
            r2087_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_XH / 2));
            r2087_currentGlyph.include(r250_xn$createglyph$7Hrq(function _r2087_t3() {
                var _r2103_t0 = this;
                var r2103_currentGlyph = _r2103_t0;
                r250_includeGlyphPart(r2103_currentGlyph, r250_glyphs, 'rtailBR');
                r2103_currentGlyph['apply-transform'](r250_Upright());
                r2103_currentGlyph['apply-transform'](r250_Translate(r250_RIGHTSB, 0));
                r2103_currentGlyph['apply-transform'](r250_Italify());
                return void 0;
            }));
            r2087_currentGlyph.include(r250_markset.p);
            if (r250_SLAB)
                r2087_currentGlyph.include(r250_LeftwardTopSerif(r250_RIGHTSB - r250_STROKE * r250_HVCONTRAST, r250_XH, r250_SIDEJUT));
            r250_xn$save$2Lrc5.call(r2087_currentGlyph, 'hookturnhrtail', 687);
            r250_dependencyProfile[r2087_currentGlyph.name] = r250_getDependencyProfile(r2087_currentGlyph);
            return r2087_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.198', r250_xn$donothing$2Lrc0b)));
        return function _r2023_t6() {
            var _r2112_t0 = this;
            var r2112_currentGlyph = _r2112_t0;
            if (!r2112_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.199')
                r250_glyphList.pop();
            r250_includeGlyphPart(r2112_currentGlyph, r250_glyphs, 'h', r250_AS_BASE);
            r2112_currentGlyph.include(r250_HOverlayBar(r1_mix(r250_SB, 0, 0.7), r1_mix(r250_SB, r250_RIGHTSB, 0.5), r1_mix(r250_XH, r250_CAP, 0.45)));
            r250_xn$save$2Lrc5.call(r2112_currentGlyph, 'hbar', 295);
            r250_xn$save$2Lrc5.call(r2112_currentGlyph, 'cyrtshe', 1115);
            r250_dependencyProfile[r2112_currentGlyph.name] = r250_getDependencyProfile(r2112_currentGlyph);
            return r2112_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.199', r250_xn$donothing$2Lrc0b));
    }());
    var _r250_t15 = function () {
        var r2118_FShape = function _r2118_t0(r2119_top, r2119_y, r2119_noserif) {
            return function _r2119_t2() {
                var _r2121_t0 = this;
                var r2121_currentGlyph = _r2121_t0;
                var r2121_stroke = r250_adviceBlackness2(2.875, 2, r250_CAP);
                r2121_currentGlyph.include(r250_VBarLeft(r250_SB * 1.5, 0, r1_fallback(r2119_top, r250_CAP), r2121_stroke));
                r2121_currentGlyph.include(r250_HBarTop(r250_SB * 1.5 - r250_O, r250_RIGHTSB, r1_fallback(r2119_top, r250_CAP), r2121_stroke));
                r2121_currentGlyph.include(r250_HBar(r250_SB * 1.5 - r250_O, r250_RIGHTSB - Math.max(r250_HALFSTROKE, (r250_RIGHTSB - r250_SB) * 0.15) - (r250_SLAB ? r250_STROKE * 0.25 : 0), r1_fallback(r2119_top, r250_CAP) * r1_fallback(r2119_y, r250_SLAB ? 0.52 : 0.54), r2121_stroke));
                if (r250_SLAB && !r2119_noserif) {
                    r2121_currentGlyph.include(r250_LeftwardTopSerif(r250_SB * 1.5, r1_fallback(r2119_top, r250_CAP), r250_SIDEJUT));
                    r2121_currentGlyph.include(r250_CenterBottomSerif(r250_SB * 1.5 + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                    r2121_currentGlyph['tag-contour']('serifBottom');
                    r2121_currentGlyph.include(r250_DownwardRightSerif(r250_RIGHTSB, r1_fallback(r2119_top, r250_CAP), r250_VJUT));
                }
                return void 0;
            };
        };
        (function _r2118_t1() {
            var _r2130_t0 = this;
            var r2130_currentGlyph = _r2130_t0;
            if (!r2130_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.200')
                r250_glyphList.pop();
            r2130_currentGlyph['set-width'](r250_WIDTH);
            r2130_currentGlyph.include(r250_markset.capital);
            r2130_currentGlyph.include(r2118_FShape());
            r250_xn$save$2Lrc5.call(r2130_currentGlyph, 'F', 'F');
            r250_dependencyProfile[r2130_currentGlyph.name] = r250_getDependencyProfile(r2130_currentGlyph);
            return r2130_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.200', r250_xn$donothing$2Lrc0b)));
        (function _r2118_t2() {
            var _r2136_t0 = this;
            var r2136_currentGlyph = _r2136_t0;
            if (!r2136_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.201')
                r250_glyphList.pop();
            r250_includeGlyphPart(r2136_currentGlyph, r250_glyphs, 'F', r250_AS_BASE);
            r2136_currentGlyph['eject-contour']('serifBottom');
            r2136_currentGlyph.include(r250_VerticalHook(r250_SB * 1.5 + r250_HALFSTROKE * r250_HVCONTRAST, 0, -r250_HOOKX, r250_HOOK));
            r250_xn$save$2Lrc5.call(r2136_currentGlyph, 'Fltail', 401);
            r250_dependencyProfile[r2136_currentGlyph.name] = r250_getDependencyProfile(r2136_currentGlyph);
            return r2136_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.201', r250_xn$donothing$2Lrc0b)));
        return [r2118_FShape];
    }();
    var r250_FShape = _r250_t15[0];
    var _r250_t16 = function () {
        var r2142_fovershoot = r1_fallback(r250_para.fovershoot, r250_O * 6);
        (function _r2142_t0() {
            var _r2144_t0 = this;
            var r2144_currentGlyph = _r2144_t0;
            if (!r2144_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.202')
                r250_glyphList.pop();
            r2144_currentGlyph['set-width'](r250_WIDTH);
            r2144_currentGlyph.include(r250_markset.b);
            r2144_currentGlyph.include(r250_dispiro(r250_widths.center(), r250_flat(r250_MIDDLE - r250_FBALANCE, 0, r250_heading(r250_UPWARD)), r250_curl(r250_MIDDLE - r250_FBALANCE, r250_CAP - r250_FHOOK), r250_arcvh(), r250_straight.right.end(r250_MIDDLE - r250_FBALANCE + r250_HOOKX, r250_CAP - r250_HALFSTROKE - r2142_fovershoot)));
            r2144_currentGlyph['set-anchor']('overlay', r250_BASE, r250_MIDDLE - r250_FBALANCE + r250_STROKE * 0.5 * r250_HVCONTRAST, r250_CAP * r250_OVERLAYPOS);
            if (r250_SLAB) {
                r2144_currentGlyph.include(r250_CenterBottomSerif(r250_MIDDLE - r250_FBALANCE, 0, r250_JUT));
                r2144_currentGlyph['tag-contour']('serifMB');
            }
            r250_xn$save$2Lrc5.call(r2144_currentGlyph, 'longs.straight');
            r250_dependencyProfile[r2144_currentGlyph.name] = r250_getDependencyProfile(r2144_currentGlyph);
            return r2144_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.202', r250_xn$donothing$2Lrc0b)));
        (function _r2142_t1() {
            var _r2153_t0 = this;
            var r2153_currentGlyph = _r2153_t0;
            if (!r2153_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.203')
                r250_glyphList.pop();
            r2153_currentGlyph.include(r250_markset.b);
            var r2153_m = r250_MIDDLE - r250_JBALANCE - r250_HALFSTROKE * r250_HVCONTRAST;
            var r2153_r = r2153_m + r250_WIDTH * 0.5 + r250_STROKE * r250_HVCONTRAST - r250_OXHOOK;
            r2153_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_g4(r2153_r, r250_CAP - r250_HOOK), r250_hookstart(r250_CAP - r250_O), r250_flat(r2153_m, r250_CAP - r250_SMOOTHA), r250_curl(r2153_m, 0, r250_heading(r250_DOWNWARD))));
            r2153_currentGlyph['set-anchor']('overlay', r250_BASE, r2153_m + r250_STROKE * 0.65 * r250_HVCONTRAST, r250_CAP * r250_OVERLAYPOS);
            if (r250_SLAB)
                r2153_currentGlyph.include(r250_tagged('serifLB', r250_CenterBottomSerif(r2153_m + r250_HALFSTROKE * r250_HVCONTRAST + r250_RBALANCE * 0.35, 0, r250_JUT + r250_RBALANCE * 0.65)));
            r250_xn$save$2Lrc5.call(r2153_currentGlyph, 'longs.upright');
            r250_dependencyProfile[r2153_currentGlyph.name] = r250_getDependencyProfile(r2153_currentGlyph);
            return r2153_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.203', r250_xn$donothing$2Lrc0b)));
        var r2142_LongSShape = function _r2142_t2(r2159_top, r2159_bottom, r2159_hookx, r2159_hooky, r2159_fine) {
            return function _r2159_t2() {
                var _r2161_t0 = this;
                var r2161_currentGlyph = _r2161_t0;
                var r2161_w = r1_fallback(r2159_fine, r250_STROKE);
                r2161_currentGlyph.include(r250_dispiro(r250_widths.center(r2161_w), r250_straight.right.start(r250_MIDDLE - r2159_hookx, r2159_bottom + r2161_w / 2 + r2142_fovershoot), r250_flat(r250_MIDDLE, r2159_bottom + r2159_hooky), r250_curl(r250_MIDDLE, r2159_top - r2159_hooky), r250_straight.right.end(r250_MIDDLE + r2159_hookx, r2159_top - r2161_w / 2 - r2142_fovershoot)));
                return void 0;
            };
        };
        (function _r2142_t3() {
            var _r2164_t0 = this;
            var r2164_currentGlyph = _r2164_t0;
            if (!r2164_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.204')
                r250_glyphList.pop();
            r2164_currentGlyph.include(r250_markset.if);
            r2164_currentGlyph.include(r2142_LongSShape(r250_CAP, -r250_HOOK, r250_HOOKX, r250_HOOK));
            (function _r2164_t2() {
                var _r2168_t0 = this;
                var r2168_currentGlyph = _r2168_t0;
                if (!r2168_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.205')
                    r250_glyphList.pop();
                r250_xn$save$2Lrc5.call(r2168_currentGlyph, 'longs.italic');
                r250_xn$save$2Lrc5.call(r2168_currentGlyph, 'esh', 643);
                r250_dependencyProfile[r2168_currentGlyph.name] = r250_getDependencyProfile(r2168_currentGlyph);
                return r2168_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.205', function _r2164_t3() {
                var _r2171_t0 = this;
                _r2171_t0.include(r2164_currentGlyph, true);
                return _r2171_t0.advanceWidth = r2164_currentGlyph.advanceWidth;
            })));
            (function _r2164_t4() {
                var _r2173_t0 = this;
                var r2173_currentGlyph = _r2173_t0;
                if (!r2173_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.206')
                    r250_glyphList.pop();
                r2173_currentGlyph.include(r250_HOverlayBar(r250_MIDDLE - r250_LONGJUT * 0.6, r250_MIDDLE + r250_LONGJUT * 0.6, r250_XH * 0.25));
                r250_xn$save$2Lrc5.call(r2173_currentGlyph, 'eshbar', 644);
                r250_dependencyProfile[r2173_currentGlyph.name] = r250_getDependencyProfile(r2173_currentGlyph);
                return r2173_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.206', function _r2164_t5() {
                var _r2176_t0 = this;
                _r2176_t0.include(r2164_currentGlyph, true);
                return _r2176_t0.advanceWidth = r2164_currentGlyph.advanceWidth;
            })));
            r250_dependencyProfile[r2164_currentGlyph.name] = r250_getDependencyProfile(r2164_currentGlyph);
            return r2164_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.204', r250_xn$donothing$2Lrc0b)));
        (function _r2142_t4() {
            var _r2178_t0 = this;
            var r2178_currentGlyph = _r2178_t0;
            if (!r2178_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.207')
                r250_glyphList.pop();
            r2178_currentGlyph['set-width'](r250_WIDTH);
            if (r250_para.isItalic)
                r250_includeGlyphPart(r2178_currentGlyph, r250_glyphs, 'longs.italic', r250_AS_BASE);
            else
                r250_includeGlyphPart(r2178_currentGlyph, r250_glyphs, 'longs.upright', r250_AS_BASE);
            r250_xn$save$2Lrc5.call(r2178_currentGlyph, 'longs', 383);
            r250_dependencyProfile[r2178_currentGlyph.name] = r250_getDependencyProfile(r2178_currentGlyph);
            return r2178_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.207', r250_xn$donothing$2Lrc0b)));
        (function _r2142_t5() {
            var _r2184_t0 = this;
            var r2184_currentGlyph = _r2184_t0;
            if (!r2184_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.208')
                r250_glyphList.pop();
            r2184_currentGlyph.include(r250_markset.if);
            var r2184_fine = r250_adviceBlackness(3.5);
            var r2184_rinner = r250_LONGJUT / 2 - r2184_fine / 2;
            var r2184_m1 = r250_MIDDLE - r250_HALFSTROKE * r250_HVCONTRAST - r250_FBALANCE;
            var r2184_x2 = r1_mix(r250_RIGHTSB, r2184_m1, 0.25);
            var r2184_y2 = r250_DESCENDER + r250_O;
            r250_includeGlyphPart(r2184_currentGlyph, r250_glyphs, 'longs.straight', false);
            r2184_currentGlyph['eject-contour']('serifMB');
            r2184_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r2184_m1, r250_XH, r250_heading(r250_DOWNWARD)), r250_curl(r2184_m1, r250_DESCENDER + r2184_fine + r2184_rinner * 2), r250_CurlyTail(new r250_xn$NamedParameterPair$2Lrc9b('fine', r2184_fine), new r250_xn$NamedParameterPair$2Lrc9b('rinner', r2184_rinner), new r250_xn$NamedParameterPair$2Lrc9b('xleft', r2184_m1), new r250_xn$NamedParameterPair$2Lrc9b('bottom', r250_DESCENDER), new r250_xn$NamedParameterPair$2Lrc9b('right', r2184_m1 - r250_LONGJUT), new r250_xn$NamedParameterPair$2Lrc9b('x2', r2184_x2), new r250_xn$NamedParameterPair$2Lrc9b('y2', r2184_y2))));
            r250_xn$save$2Lrc5.call(r2184_currentGlyph, 'eshcurlytail', 646);
            r250_dependencyProfile[r2184_currentGlyph.name] = r250_getDependencyProfile(r2184_currentGlyph);
            return r2184_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.208', r250_xn$donothing$2Lrc0b)));
        (function _r2142_t6() {
            var _r2198_t0 = this;
            var r2198_currentGlyph = _r2198_t0;
            if (!r2198_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.209')
                r250_glyphList.pop();
            r2198_currentGlyph.include(r250_markset.p);
            r2198_currentGlyph.include(r250_VBar(r250_MIDDLE, r250_DESCENDER, r250_XH - r250_HOOK));
            r2198_currentGlyph.include(r250_VerticalHook(r250_MIDDLE, r250_XH - r250_HOOK, -r250_LONGJUT + r250_LBALANCE, -r250_HOOK + r250_HALFSTROKE));
            r2198_currentGlyph['apply-transform'](r250_Translate(r250_LBALANCE, 0));
            if (r250_SLAB)
                r2198_currentGlyph.include(r250_CenterBottomSerif(r250_MIDDLE, r250_DESCENDER, r250_JUT));
            r250_xn$save$2Lrc5.call(r2198_currentGlyph, 'ifishhook', 639);
            r250_dependencyProfile[r2198_currentGlyph.name] = r250_getDependencyProfile(r2198_currentGlyph);
            return r2198_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.209', r250_xn$donothing$2Lrc0b)));
        (function _r2142_t7() {
            var _r2206_t0 = this;
            var r2206_currentGlyph = _r2206_t0;
            if (!r2206_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.210')
                r250_glyphList.pop();
            r2206_currentGlyph.include(r250_markset.p);
            r2206_currentGlyph.include(r250_VBar(r250_MIDDLE, 0, r250_XH - r250_HOOK - r250_HALFSTROKE));
            r2206_currentGlyph.include(r250_VerticalHook(r250_MIDDLE, r250_XH - r250_HOOK - r250_HALFSTROKE, -r250_LONGJUT, -r250_HOOK));
            r2206_currentGlyph.include(r250_VerticalHook(r250_MIDDLE, 0, r250_LONGJUT, r250_HOOK));
            r250_xn$save$2Lrc5.call(r2206_currentGlyph, 'iviby', 645);
            r250_dependencyProfile[r2206_currentGlyph.name] = r250_getDependencyProfile(r2206_currentGlyph);
            return r2206_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.210', r250_xn$donothing$2Lrc0b)));
        var r2142_fbar = r250_XH * r250_para.fbarpos + r250_STROKE * r250_para.fbarStrokeAdj;
        (function _r2142_t8() {
            var _r2213_t0 = this;
            var r2213_currentGlyph = _r2213_t0;
            if (!r2213_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.211')
                r250_glyphList.pop();
            var r2213_fovershoot2 = r250_O * 2;
            r2213_currentGlyph.include(r250_markset.b);
            var r2213_barleft = r1_mix(r250_SB, r250_RIGHTSB, 0.35) - r250_STROKE * 0.25 * r250_HVCONTRAST;
            r2213_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_g4(r250_RIGHTSB + r250_RBALANCE2 - r250_OXE, r250_CAP - r250_HOOK * 0.75 - r2213_fovershoot2), r250_hookstart(r250_CAP - r250_O - r2213_fovershoot2, {
                'shift': 0.1,
                'skew': 0.5
            }), r250_flat(r2213_barleft, r250_CAP - r250_SMOOTHA * 0.8 - r2213_fovershoot2), r250_curl(r2213_barleft, 0, r250_heading(r250_DOWNWARD))));
            r2213_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r1_mix(r250_SB, r250_RIGHTSB, 0) - r250_HALFSTROKE * r250_TANSLANT, r2142_fbar), r250_curl(r1_mix(r250_SB, r250_RIGHTSB, 0.95) - r250_HALFSTROKE * r250_TANSLANT, r2142_fbar)));
            if (r250_SLAB)
                r2213_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r1_mix(r250_SB, r250_RIGHTSB, 0.02) + r250_HALFSTROKE * r250_TANSLANT, 0), r250_curl(r1_mix(r250_SB, r250_RIGHTSB, 0.875) + r250_HALFSTROKE * r250_TANSLANT, 0)));
            r250_xn$save$2Lrc5.call(r2213_currentGlyph, 'f.straight');
            r250_xn$save$2Lrc5.call(r2213_currentGlyph, 'lenisf', 43829);
            r250_dependencyProfile[r2213_currentGlyph.name] = r250_getDependencyProfile(r2213_currentGlyph);
            return r2213_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.211', r250_xn$donothing$2Lrc0b)));
        var r2142_dfNarrowF = r250_DivFrame(r250_para.diversityF);
        (function _r2142_t9() {
            var _r2221_t0 = this;
            var r2221_currentGlyph = _r2221_t0;
            if (!r2221_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.212')
                r250_glyphList.pop();
            var r2221_df = r250_DivFrame(r250_para.diversityF);
            r2221_currentGlyph['set-width'](r2221_df.width);
            r2221_currentGlyph.include(r2221_df.markSet.b);
            var r2221_crossLeft = r1_mix(0, r250_SB, 1 / 2);
            var r2221_crossRight = r1_mix(r2221_df.width, r2221_df.rightSB, 1 / 2);
            var r2221_barleft = r1_mix(r2221_crossLeft, r2221_crossRight, 0.42) - r250_STROKE * 0.375 * r250_HVCONTRAST;
            var r2221_tTurn = Math.max(r250_HOOK * 0.9, r250_STROKE * 1.375, Math.min(r250_HOOK, r250_STROKE * 1.75));
            r2221_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r2221_crossRight, r250_CAP), r250_curl(Math.min(r2221_barleft + r2221_tTurn, r2221_crossRight - 1), r250_CAP), r250_archv(), r250_flat(r2221_barleft, Math.max(r250_XH, r250_CAP - r2221_tTurn)), r250_curl(r2221_barleft, 0, r250_heading(r250_DOWNWARD))));
            r2221_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r2221_crossLeft - r250_HALFSTROKE * r250_TANSLANT, r2142_fbar), r250_curl(r2221_crossRight - r250_HALFSTROKE * r250_TANSLANT, r2142_fbar)));
            r250_xn$save$2Lrc5.call(r2221_currentGlyph, 'f.narrow');
            r250_dependencyProfile[r2221_currentGlyph.name] = r250_getDependencyProfile(r2221_currentGlyph);
            return r2221_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.212', r250_xn$donothing$2Lrc0b)));
        (function _r2142_t10() {
            var _r2228_t0 = this;
            var r2228_currentGlyph = _r2228_t0;
            if (!r2228_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.213')
                r250_glyphList.pop();
            r250_includeGlyphPart(r2228_currentGlyph, r250_glyphs, 'longs.italic', r250_AS_BASE);
            r2228_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r250_MIDDLE - r250_LONGJUT - r250_HALFSTROKE * r250_TANSLANT, r2142_fbar), r250_curl(r250_MIDDLE + r250_LONGJUT - r250_HALFSTROKE * r250_TANSLANT, r2142_fbar)));
            r250_xn$save$2Lrc5.call(r2228_currentGlyph, 'f.tailed');
            r250_xn$save$2Lrc5.call(r2228_currentGlyph, 'fltail', 402);
            r250_dependencyProfile[r2228_currentGlyph.name] = r250_getDependencyProfile(r2228_currentGlyph);
            return r2228_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.213', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('f', 'f');
        r250_turned('turnf.straight', void 0, 'f.straight', r250_MIDDLE, r250_XH / 2, r250_markset.p);
        r250_turned('turnf.narrow', void 0, 'f.narrow', r2142_dfNarrowF.middle, r250_XH / 2, r2142_dfNarrowF.markSet.p);
        r250_turned('turnf.tailed', void 0, 'f.tailed', r250_MIDDLE, r250_XH / 2, r250_markset.p);
        r250_xn$selectvariant$7Hrq('turnf', 607, new r250_xn$NamedParameterPair$2Lrc9b('follow', 'f'));
        (function () {
            var r2235_shift = -(r250_WIDTH * 0.055 + r250_SB * 0.5);
            var r2235_barr = r250_RIGHTSB;
            var r2235_hbarleft = r250_SB + r2235_shift + r250_STROKE * (r250_para.slantAngle ? 0.5 : 0.25);
            (function _r2235_t0() {
                var _r2237_t0 = this;
                var r2237_currentGlyph = _r2237_t0;
                if (!r2237_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.214')
                    r250_glyphList.pop();
                r2237_currentGlyph.include(r250_markset.b);
                r2237_currentGlyph.include(r250_xn$createglyph$7Hrq(function _r2237_t2() {
                    var _r2241_t0 = this;
                    var r2241_currentGlyph = _r2241_t0;
                    r250_includeGlyphPart(r2241_currentGlyph, r250_glyphs, 'longs');
                    r2241_currentGlyph['apply-transform'](r250_Translate(r2235_shift, 0));
                    return void 0;
                }));
                r2237_currentGlyph.include(r250_VBarRight(r2235_barr, 0, r2142_fbar));
                r2237_currentGlyph.include(r250_HBarTop(r2235_hbarleft, r2235_barr, r2142_fbar));
                if (r250_SLAB)
                    if (r250_para.isItalic)
                        r2237_currentGlyph.include(r250_tagged('serifRB', r250_RightwardBottomSerif(r2235_barr, 0, r250_SIDEJUT)));
                    else
                        r2237_currentGlyph.include(r250_tagged('serifRB', r250_CenterBottomSerif(r2235_barr - r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT)));
                r250_xn$save$2Lrc5.call(r2237_currentGlyph, 'f_i', 64257);
                r250_dependencyProfile[r2237_currentGlyph.name] = r250_getDependencyProfile(r2237_currentGlyph);
                return r2237_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.214', r250_xn$donothing$2Lrc0b)));
            (function _r2235_t1() {
                var _r2250_t0 = this;
                var r2250_currentGlyph = _r2250_t0;
                if (!r2250_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.215')
                    r250_glyphList.pop();
                var r2250_m = r250_MIDDLE - r250_JBALANCE - r250_HALFSTROKE * r250_HVCONTRAST + r2235_shift;
                r2250_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r2250_m, 0, r250_heading(r250_UPWARD)), r250_curl(r2250_m, r250_CAP - r250_SMOOTHA), r250_hookend(r250_CAP - r250_O), r250_g4(r2235_barr + r250_OXHOOK, r250_CAP - r250_HOOK)));
                r2250_currentGlyph.include(r250_VBarRight(r2235_barr, 0, r250_CAP - r250_HOOK));
                r2250_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(Math.min(r2250_m - r250_STROKE * 0.3, r2235_hbarleft) - r250_TANSLANT * r250_HALFSTROKE, r2142_fbar), r250_curl(r1_mix(r250_SB, r2235_barr, 0.6) - r250_TANSLANT * r250_HALFSTROKE, r2142_fbar)));
                if (r250_SLAB) {
                    r2250_currentGlyph.include(r250_tagged('serifLB', r250_CenterBottomSerif(r2250_m + r250_HALFSTROKE * r250_HVCONTRAST + r250_RBALANCE * 0.35, 0, r250_JUT + r250_RBALANCE * 0.65)));
                    r2250_currentGlyph.include(r250_tagged('serifRB', r250_CenterBottomSerif(r2235_barr - r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT)));
                }
                r250_xn$save$2Lrc5.call(r2250_currentGlyph, 'f_l.upright');
                r250_dependencyProfile[r2250_currentGlyph.name] = r250_getDependencyProfile(r2250_currentGlyph);
                return r2250_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.215', r250_xn$donothing$2Lrc0b)));
            (function _r2235_t2() {
                var _r2258_t0 = this;
                var r2258_currentGlyph = _r2258_t0;
                if (!r2258_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.216')
                    r250_glyphList.pop();
                r2258_currentGlyph.include(r250_xn$createglyph$7Hrq(function _r2258_t2() {
                    var _r2261_t0 = this;
                    var r2261_currentGlyph = _r2261_t0;
                    r250_includeGlyphPart(r2261_currentGlyph, r250_glyphs, 'longs.italic', r250_AS_BASE);
                    r2261_currentGlyph['apply-transform'](r250_Translate(r2235_shift, 0));
                    return void 0;
                }));
                r2258_currentGlyph.include(r250_VBarRight(r2235_barr, 0, r250_CAP));
                r2258_currentGlyph.include(r250_HBarTop(r2235_hbarleft, r1_mix(r250_SB, r2235_barr, 0.65), r2142_fbar));
                if (r250_SLAB)
                    r2258_currentGlyph.include(r250_tagged('serifRB', r250_RightwardBottomSerif(r2235_barr, 0, r250_SIDEJUT)));
                r250_xn$save$2Lrc5.call(r2258_currentGlyph, 'f_l.italic');
                r250_dependencyProfile[r2258_currentGlyph.name] = r250_getDependencyProfile(r2258_currentGlyph);
                return r2258_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.216', r250_xn$donothing$2Lrc0b)));
            return r250_xn$italicvariant$7Hrq('f_l', 64258);
        }());
        return [r2142_LongSShape];
    }();
    var r250_LongSShape = _r250_t16[0];
    var _r250_t17 = function () {
        var r2269_EShape = function _r2269_t0(r2270_top) {
            return function _r2270_t2() {
                var _r2272_t0 = this;
                var r2272_currentGlyph = _r2272_t0;
                var r2272_stroke = r250_adviceBlackness2(2.875, 2, r250_CAP);
                r2272_currentGlyph.include(r250_FShape(r2270_top, void 0, true));
                r2272_currentGlyph.include(r250_HBarBottom(r250_SB * 1.5 - r250_O, r250_RIGHTSB, 0, r2272_stroke));
                if (r250_SLAB) {
                    r2272_currentGlyph.include(r250_LeftwardTopSerif(r250_SB * 1.5, r1_fallback(r2270_top, r250_CAP), r250_SIDEJUT));
                    r2272_currentGlyph.include(r250_CenterBottomSerif(r250_SB * 1.5 + r250_HALFSTROKE * r250_HVCONTRAST, 0, r250_JUT));
                    r2272_currentGlyph['tag-contour']('serifBottom');
                    r2272_currentGlyph.include(r250_DownwardRightSerif(r250_RIGHTSB, r1_fallback(r2270_top, r250_CAP), r250_VJUT));
                    r2272_currentGlyph.include(r250_LeftwardBottomSerif(r250_SB * 1.5, 0, r250_SIDEJUT));
                    r2272_currentGlyph.include(r250_UpwardRightSerif(r250_RIGHTSB, 0, r250_VJUT));
                }
                return void 0;
            };
        };
        (function _r2269_t1() {
            var _r2282_t0 = this;
            var r2282_currentGlyph = _r2282_t0;
            if (!r2282_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.217')
                r250_glyphList.pop();
            r2282_currentGlyph['set-width'](r250_WIDTH);
            r2282_currentGlyph.include(r250_markset.capital);
            r2282_currentGlyph.include(r2269_EShape(r250_CAP));
            r250_xn$save$2Lrc5.call(r2282_currentGlyph, 'E', 'E');
            r250_xn$save$2Lrc5.call(r2282_currentGlyph, 'Epsilon', 917);
            r250_xn$save$2Lrc5.call(r2282_currentGlyph, 'cyrIe', 1045);
            r2282_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_CAP / 2));
            r250_xn$save$2Lrc5.call(r2282_currentGlyph, 'turnE', 398);
            r250_dependencyProfile[r2282_currentGlyph.name] = r250_getDependencyProfile(r2282_currentGlyph);
            return r2282_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.217', r250_xn$donothing$2Lrc0b)));
        (function _r2269_t2() {
            var _r2292_t0 = this;
            var r2292_currentGlyph = _r2292_t0;
            if (!r2292_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.218')
                r250_glyphList.pop();
            r2292_currentGlyph.include(r250_markset.e);
            r2292_currentGlyph.include(r2269_EShape(r250_XH));
            r2292_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_XH / 2));
            r250_xn$save$2Lrc5.call(r2292_currentGlyph, 'smcpturnE', 11387);
            r250_dependencyProfile[r2292_currentGlyph.name] = r250_getDependencyProfile(r2292_currentGlyph);
            return r2292_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.218', r250_xn$donothing$2Lrc0b)));
        return [r2269_EShape];
    }();
    var r250_EShape = _r250_t17[0];
    var _r250_t18 = function () {
        var r2298_SmallEShape = function _r2298_t0(r2299_top, r2299_stroke, r2299_barpos, r2299_curly) {
            return function _r2299_t2() {
                var _r2301_t0 = this;
                var r2301_currentGlyph = _r2301_t0;
                var r2301_barbottom = r2299_top * r1_fallback(r2299_barpos, r250_EBARPOS) - r250_HALFSTROKE;
                var r2301_hookx = r250_RIGHTSB - r250_OXHOOK + r250_TAILADJX * r250_TANSLANT;
                var r2301_hookmiddle = r1_mix(r250_SB + r250_O, r2301_hookx, 0.55) + r250_CORRECTION_OMIDS;
                r2301_currentGlyph.include(r250_dispiro(r250_widths.lhs(r2299_stroke), r250_flat(r250_RIGHTSB - r250_OX, r2301_barbottom, r250_heading(r250_UPWARD)), r250_curl(r250_RIGHTSB - r250_OX, r2299_top - r250_SMALLSMOOTHB), r250_arcvh(), r250_g4(r250_MIDDLE - r250_CORRECTION_OMIDS, r2299_top - r250_O), r250_archv(), ((r250_SMALLSMOOTHA + r250_SMALLSMOOTHB) / r2299_top > 0.75 ? r250_flat.ai : r250_flat)(r250_SB + r250_OX, r2299_top - r250_SMALLSMOOTHA), ((r250_SMALLSMOOTHA + r250_SMALLSMOOTHB) / r2299_top > 0.75 ? r250_curl.ai : r250_curl)(r250_SB + r250_OX, 0 + r250_SMALLSMOOTHB), r250_hookend(r250_O, void 0, r2299_stroke), r250_g4(r250_RIGHTSB - r250_OX * (r250_para.isItalic ? 0 : 0.5), r250_AHOOK)));
                r2301_currentGlyph.include(r250_HBarBottom(r250_SB + r2299_stroke / 2 + r250_OX, r250_RIGHTSB - r2299_stroke / 2 - r250_OX, r2301_barbottom, r2299_stroke));
                return void 0;
            };
        };
        (function _r2298_t1() {
            var _r2305_t0 = this;
            var r2305_currentGlyph = _r2305_t0;
            if (!r2305_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.219')
                r250_glyphList.pop();
            r2305_currentGlyph.include(r250_markset.e);
            r2305_currentGlyph.include(r2298_SmallEShape(r250_XH, r250_adviceBlackness2(2.875, 2, r250_XH)));
            r250_xn$save$2Lrc5.call(r2305_currentGlyph, 'e', 'e');
            r250_xn$save$2Lrc5.call(r2305_currentGlyph, 'cyrie', 1077);
            r2305_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_XH / 2));
            r250_xn$save$2Lrc5.call(r2305_currentGlyph, 'turne', 477);
            r250_xn$save$2Lrc5.call(r2305_currentGlyph, 'schwa', 601);
            r250_xn$save$2Lrc5.call(r2305_currentGlyph, 'cyrschwa', 1241);
            r250_dependencyProfile[r2305_currentGlyph.name] = r250_getDependencyProfile(r2305_currentGlyph);
            return r2305_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.219', r250_xn$donothing$2Lrc0b)));
        (function _r2298_t2() {
            var _r2315_t0 = this;
            var r2315_currentGlyph = _r2315_t0;
            if (!r2315_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.220')
                r250_glyphList.pop();
            r2315_currentGlyph.include(r250_markset.capital);
            r2315_currentGlyph.include(r2298_SmallEShape(r250_CAP, r250_adviceBlackness2(2.875, 2, r250_CAP)));
            r2315_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_CAP / 2));
            r250_xn$save$2Lrc5.call(r2315_currentGlyph, 'turnSmallE', 399);
            r250_xn$save$2Lrc5.call(r2315_currentGlyph, 'cyrSchwa', 1240);
            r250_dependencyProfile[r2315_currentGlyph.name] = r250_getDependencyProfile(r2315_currentGlyph);
            return r2315_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.220', r250_xn$donothing$2Lrc0b)));
        var r2298_RevSmallEShape = function _r2298_t3(r2321_top, r2321_stroke, r2321_barpos) {
            return function _r2321_t2() {
                var _r2323_t0 = this;
                var r2323_currentGlyph = _r2323_t0;
                var r2323_barbottom = r2321_top * r1_fallback(r2321_barpos, r250_EBARPOS) - r250_HALFSTROKE;
                var r2323_hookx = r250_SB;
                var r2323_hookmiddle = r1_mix(r250_RIGHTSB - r250_O, r2323_hookx, 0.55) + r250_CORRECTION_OMIDS;
                r2323_currentGlyph.include(r250_dispiro(r250_widths.rhs(r2321_stroke), r250_flat(r250_SB + r250_OX, r2323_barbottom, r250_heading(r250_UPWARD)), r250_curl(r250_SB + r250_OX, r2321_top - r250_SMALLSMOOTHA), r250_arcvh(), r250_g4(r250_MIDDLE, r2321_top - r250_O), r250_archv(), ((r250_SMALLSMOOTHA + r250_SMALLSMOOTHB) / r2321_top > 0.75 ? r250_flat.ai : r250_flat)(r250_RIGHTSB - r250_OX, r2321_top - r250_SMALLSMOOTHB), ((r250_SMALLSMOOTHA + r250_SMALLSMOOTHB) / r2321_top > 0.75 ? r250_curl.ai : r250_curl)(r250_RIGHTSB - r250_OX, r250_SMALLSMOOTHA), r250_hookend(r250_O, void 0, r2321_stroke), r250_g4(r250_SB + r250_O, r250_AHOOK)));
                r2323_currentGlyph.include(r250_HBarBottom(r250_SB + r2321_stroke / 2, r250_RIGHTSB - r2321_stroke / 2, r2323_barbottom, r2321_stroke));
                return void 0;
            };
        };
        (function _r2298_t4() {
            var _r2327_t0 = this;
            var r2327_currentGlyph = _r2327_t0;
            if (!r2327_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.221')
                r250_glyphList.pop();
            r2327_currentGlyph.include(r250_markset.e);
            r2327_currentGlyph.include(r2298_RevSmallEShape(r250_XH, r250_adviceBlackness2(2.875, 2, r250_XH)));
            r250_xn$save$2Lrc5.call(r2327_currentGlyph, 'reve', 600);
            r250_dependencyProfile[r2327_currentGlyph.name] = r250_getDependencyProfile(r2327_currentGlyph);
            return r2327_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.221', r250_xn$donothing$2Lrc0b)));
        return [
            r2298_SmallEShape,
            r2298_RevSmallEShape
        ];
    }();
    var r250_SmallEShape = _r250_t18[0];
    var r250_RevSmallEShape = _r250_t18[1];
    (function () {
        var r2332_TShape = function _r2332_t0(r2333_top) {
            return function _r2333_t2() {
                var _r2335_t0 = this;
                var r2335_currentGlyph = _r2335_t0;
                r2335_currentGlyph.include(r250_VBar(r250_MIDDLE, 0, r2333_top));
                var r2335_l = r250_SB + r250_OX * 1.5;
                var r2335_r = r250_RIGHTSB - r250_OX * 1.5;
                r2335_currentGlyph.include(r250_tagged('strokeLT', r250_HBarTop(r2335_l, r250_MIDDLE, r2333_top)));
                r2335_currentGlyph.include(r250_tagged('strokeRT', r250_HBarTop(r250_MIDDLE, r2335_r, r2333_top)));
                if (r250_SLAB) {
                    r2335_currentGlyph.include(r250_tagged('serifRT', r250_DownwardRightSerif(r2335_r, r2333_top, r250_VJUT, r250_MVERTSTROKE)));
                    r2335_currentGlyph.include(r250_tagged('serifLT', r250_DownwardLeftSerif(r2335_l, r2333_top, r250_VJUT, r250_MVERTSTROKE)));
                    r2335_currentGlyph.include(r250_tagged('serifRB', r250_RightwardBottomSerif(r250_MIDDLE, 0, r250_LONGJUT * 0.6)));
                    r2335_currentGlyph.include(r250_tagged('serifRB', r250_LeftwardBottomSerif(r250_MIDDLE, 0, r250_LONGJUT * 0.6)));
                }
                return void 0;
            };
        };
        (function _r2332_t1() {
            var _r2344_t0 = this;
            var r2344_currentGlyph = _r2344_t0;
            if (!r2344_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.222')
                r250_glyphList.pop();
            r2344_currentGlyph.include(r250_markset.capital);
            r2344_currentGlyph['set-anchor']('bottomright', r250_BASE, r250_MIDDLE + r250_HALFSTROKE * r250_HVCONTRAST, 0);
            r2344_currentGlyph.include(r2332_TShape(r250_CAP));
            r250_xn$save$2Lrc5.call(r2344_currentGlyph, 'T', 'T');
            r250_xn$save$2Lrc5.call(r2344_currentGlyph, 'Tau', 932);
            r250_xn$save$2Lrc5.call(r2344_currentGlyph, 'cyrTe', 1058);
            (function _r2344_t2() {
                var _r2352_t0 = this;
                var r2352_currentGlyph = _r2352_t0;
                if (!r2352_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.223')
                    r250_glyphList.pop();
                r2352_currentGlyph.include(r250_CyrDescender(r250_MIDDLE + r250_HALFSTROKE * r250_HVCONTRAST));
                r2352_currentGlyph.include(r250_markset.if);
                r250_xn$save$2Lrc5.call(r2352_currentGlyph, 'cyrTedescender', 1196);
                r250_dependencyProfile[r2352_currentGlyph.name] = r250_getDependencyProfile(r2352_currentGlyph);
                return r2352_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.223', function _r2344_t3() {
                var _r2356_t0 = this;
                _r2356_t0.include(r2344_currentGlyph, true);
                return _r2356_t0.advanceWidth = r2344_currentGlyph.advanceWidth;
            })));
            (function _r2344_t4() {
                var _r2358_t0 = this;
                var r2358_currentGlyph = _r2358_t0;
                if (!r2358_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.224')
                    r250_glyphList.pop();
                r2358_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r250_CAP / 2));
                r250_xn$save$2Lrc5.call(r2358_currentGlyph, 'turnT', 42929);
                r250_dependencyProfile[r2358_currentGlyph.name] = r250_getDependencyProfile(r2358_currentGlyph);
                return r2358_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.224', function _r2344_t5() {
                var _r2361_t0 = this;
                _r2361_t0.include(r2344_currentGlyph, true);
                return _r2361_t0.advanceWidth = r2344_currentGlyph.advanceWidth;
            })));
            (function _r2344_t6() {
                var _r2363_t0 = this;
                var r2363_currentGlyph = _r2363_t0;
                if (!r2363_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.225')
                    r250_glyphList.pop();
                r2363_currentGlyph.include(r250_HOverlayBar(r1_mix(r250_MIDDLE, r250_SB, 0.8), r1_mix(r250_MIDDLE, r250_RIGHTSB, 0.8), r1_mix(0, r250_CAP, 0.45)));
                r250_xn$save$2Lrc5.call(r2363_currentGlyph, 'Tbar', 358);
                r250_dependencyProfile[r2363_currentGlyph.name] = r250_getDependencyProfile(r2363_currentGlyph);
                return r2363_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.225', function _r2344_t7() {
                var _r2366_t0 = this;
                _r2366_t0.include(r2344_currentGlyph, true);
                return _r2366_t0.advanceWidth = r2344_currentGlyph.advanceWidth;
            })));
            (function _r2344_t8() {
                var _r2368_t0 = this;
                var r2368_currentGlyph = _r2368_t0;
                if (!r2368_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.226')
                    r250_glyphList.pop();
                r2368_currentGlyph['eject-contour']('serifLT');
                r2368_currentGlyph['eject-contour']('strokeLT');
                r2368_currentGlyph.include(r250_LeftHook(r250_SB + r250_LeftHook.extension, r250_CAP, r250_MIDDLE));
                r250_xn$save$2Lrc5.call(r2368_currentGlyph, 'Thookleft', 428);
                r250_dependencyProfile[r2368_currentGlyph.name] = r250_getDependencyProfile(r2368_currentGlyph);
                return r2368_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.226', function _r2344_t9() {
                var _r2373_t0 = this;
                _r2373_t0.include(r2344_currentGlyph, true);
                return _r2373_t0.advanceWidth = r2344_currentGlyph.advanceWidth;
            })));
            r250_dependencyProfile[r2344_currentGlyph.name] = r250_getDependencyProfile(r2344_currentGlyph);
            return r2344_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.222', r250_xn$donothing$2Lrc0b)));
        (function _r2332_t2() {
            var _r2375_t0 = this;
            var r2375_currentGlyph = _r2375_t0;
            if (!r2375_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.227')
                r250_glyphList.pop();
            r2375_currentGlyph.include(r250_markset.e);
            r2375_currentGlyph.include(r2332_TShape(r250_XH));
            r250_xn$save$2Lrc5.call(r2375_currentGlyph, 'cyrte.upright');
            r2375_currentGlyph.include(r250_CyrDescender(r250_MIDDLE + r250_HALFSTROKE * r250_HVCONTRAST));
            r2375_currentGlyph.include(r250_markset.p);
            r250_xn$save$2Lrc5.call(r2375_currentGlyph, 'cyrtedescender.upright');
            r250_dependencyProfile[r2375_currentGlyph.name] = r250_getDependencyProfile(r2375_currentGlyph);
            return r2375_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.227', r250_xn$donothing$2Lrc0b)));
        r250_xn$italicvariant$7Hrq('cyrtedescender', 1197);
        return function _r2332_t3() {
            var _r2383_t0 = this;
            var r2383_currentGlyph = _r2383_t0;
            if (!r2383_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.228')
                r250_glyphList.pop();
            r2383_currentGlyph.include(r250_markset.e);
            r2383_currentGlyph.include(r250_HBar(r250_SB, r250_RIGHTSB, r250_XH - r250_HALFSTROKE));
            r2383_currentGlyph.include(r250_VBar(r250_MIDDLE, 0, r250_XH));
            r250_xn$save$2Lrc5.call(r2383_currentGlyph, 'tau', 964);
            r250_dependencyProfile[r2383_currentGlyph.name] = r250_getDependencyProfile(r2383_currentGlyph);
            return r2383_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.228', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r2389_tcenter = r250_MIDDLE - r250_TBALANCE - r250_STROKE * 0.5 * r250_HVCONTRAST;
        var r2389_dfNarrowT = r250_DivFrame(r250_para.diversityF);
        var r2389_SmallTShape = function _r2389_t0(r2390_top, r2390_bot) {
            return function _r2390_t2() {
                var _r2392_t0 = this;
                var r2392_currentGlyph = _r2392_t0;
                var r2392_hookx = r2389_tcenter + (r250_WIDTH - r250_SB * 2) * 0.8 + r250_STROKE * 0.25 * r250_HVCONTRAST;
                var r2392_turn = r1_mix(r2389_tcenter, r2392_hookx, 0.5) + r250_CORRECTION_OMIDS;
                var r2392_smb = Math.max(r250_HOOK, (r2392_turn - r2389_tcenter) * 1.2);
                var r2392_G = r250_dispiro(r250_widths.lhs(), r250_flat(r2389_tcenter, r2390_top, r250_heading(r250_DOWNWARD)), r250_curl(r2389_tcenter, r2390_bot + r2392_smb), r250_hookend(r2390_bot + r250_O), r250_g4(r2392_hookx, r2390_bot + r250_HOOK));
                var r2392_g = r2392_G.call(r2392_currentGlyph);
                r2392_currentGlyph['set-anchor']('bottomright', r250_BASE, r2392_g.knots[r2392_g.knots.length - 1].x, r2392_g.knots[r2392_g.knots.length - 1].y);
                r2392_currentGlyph['set-anchor']('below', r250_BASE, r1_mix(r2389_tcenter, r2392_g.knots[r2392_g.knots.length - 1].x, r1_linreg(18, 0.375, 126, 0.5, r250_STROKE)), r2390_bot);
                r2392_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r2389_tcenter + r250_HALFSTROKE - r250_LONGJUT + r250_TBALANCE2 - r250_HALFSTROKE * r250_TANSLANT, r250_XH), r250_curl(r2389_tcenter + r250_HALFSTROKE + r250_LONGJUT + r250_TBALANCE2 - r250_HALFSTROKE * r250_TANSLANT, r250_XH)));
                return void 0;
            };
        };
        (function _r2389_t1() {
            var _r2397_t0 = this;
            var r2397_currentGlyph = _r2397_t0;
            if (!r2397_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.229')
                r250_glyphList.pop();
            r2397_currentGlyph['set-width'](r250_WIDTH);
            r2397_currentGlyph.include(r250_markset.b);
            r2397_currentGlyph.include(r2389_SmallTShape(r250_CAP, 0));
            r250_xn$save$2Lrc5.call(r2397_currentGlyph, 't.standard');
            r250_dependencyProfile[r2397_currentGlyph.name] = r250_getDependencyProfile(r2397_currentGlyph);
            return r2397_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.229', r250_xn$donothing$2Lrc0b)));
        (function _r2389_t2() {
            var _r2403_t0 = this;
            var r2403_currentGlyph = _r2403_t0;
            if (!r2403_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.230')
                r250_glyphList.pop();
            var r2403_df = r250_DivFrame(r250_para.diversityF);
            r2403_currentGlyph['set-width'](r2403_df.width);
            r2403_currentGlyph.include(r2403_df.markSet.b);
            var r2403_crossLeft = r1_mix(0, r250_SB, 1 / 2);
            var r2403_crossRight = r1_mix(r2403_df.width, r2403_df.rightSB, 1 / 2);
            var r2403_barleft = r1_mix(r2403_crossLeft, r2403_crossRight, 0.42) - r250_STROKE * 0.375 * r250_HVCONTRAST;
            var r2403_tTurn = Math.max(r250_HOOK * 0.9, r250_STROKE * 1.375, Math.min(r250_HOOK, r250_STROKE * 1.75));
            r2403_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r2403_crossRight, 0), r250_curl(Math.min(r2403_barleft + r2403_tTurn, r2403_crossRight - 1), 0), r250_archv(), r250_flat(r2403_barleft, r2403_tTurn), r250_curl(r2403_barleft, r250_CAP, r250_heading(r250_UPWARD))));
            r2403_currentGlyph.include(r250_dispiro(r250_widths.rhs(), r250_flat(r2403_crossLeft - r250_HALFSTROKE * r250_TANSLANT, r250_XH), r250_curl(r2403_crossRight - r250_HALFSTROKE * r250_TANSLANT, r250_XH)));
            r2403_currentGlyph['set-anchor']('topright', r250_BASE, r2403_crossRight, r250_CAP);
            r250_xn$save$2Lrc5.call(r2403_currentGlyph, 't.narrow');
            r250_dependencyProfile[r2403_currentGlyph.name] = r250_getDependencyProfile(r2403_currentGlyph);
            return r2403_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.230', r250_xn$donothing$2Lrc0b)));
        (function _r2389_t3() {
            var _r2411_t0 = this;
            var r2411_currentGlyph = _r2411_t0;
            if (!r2411_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.231')
                r250_glyphList.pop();
            r2411_currentGlyph['set-width'](r250_WIDTH);
            r2411_currentGlyph.include(r250_markset.b);
            r2411_currentGlyph.include(r250_VBar(r250_MIDDLE, 0, r250_CAP));
            r2411_currentGlyph.include(r250_HBarTop(r250_MIDDLE - r250_LONGJUT, r250_MIDDLE + r250_LONGJUT, r250_XH));
            r250_xn$save$2Lrc5.call(r2411_currentGlyph, 't.cross');
            r250_dependencyProfile[r2411_currentGlyph.name] = r250_getDependencyProfile(r2411_currentGlyph);
            return r2411_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.231', r250_xn$donothing$2Lrc0b)));
        r250_xn$selectvariant$7Hrq('t', 't');
        r250_turned('turnt.standard', void 0, 't.standard', r250_MIDDLE, r250_XH / 2, r250_markset.p);
        r250_turned('turnt.cross', void 0, 't.cross', r250_MIDDLE, r250_XH / 2, r250_markset.p);
        r250_turned('turnt.narrow', void 0, 't.narrow', r2389_dfNarrowT.middle, r250_XH / 2, r2389_dfNarrowT.markSet.p);
        r250_xn$selectvariant$7Hrq('turnt', 647, new r250_xn$NamedParameterPair$2Lrc9b('follow', 't'));
        (function _r2389_t4() {
            var _r2419_t0 = this;
            var r2419_currentGlyph = _r2419_t0;
            if (!r2419_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.232')
                r250_glyphList.pop();
            r2419_currentGlyph.include(r250_markset.if);
            r250_includeGlyphPart(r2419_currentGlyph, r250_glyphs, 't.standard');
            var r2419_attach = r1_utp(r2419_currentGlyph.gizmo, r250_glyphs['t.standard'].anchors.bottomright);
            r2419_currentGlyph.include(r250_VBarRight(r2419_attach.x, 0, r2419_attach.y));
            r2419_currentGlyph.include(r250_VerticalHook(r2419_attach.x - r250_HALFSTROKE * r250_HVCONTRAST, 0, -r250_HOOKX, r250_HOOK));
            r250_xn$save$2Lrc5.call(r2419_currentGlyph, 'tltail', 427);
            r250_dependencyProfile[r2419_currentGlyph.name] = r250_getDependencyProfile(r2419_currentGlyph);
            return r2419_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.232', r250_xn$donothing$2Lrc0b)));
        (function _r2389_t5() {
            var _r2426_t0 = this;
            var r2426_currentGlyph = _r2426_t0;
            if (!r2426_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.233')
                r250_glyphList.pop();
            r2426_currentGlyph.include(r250_markset.e);
            r2426_currentGlyph.include(r2389_SmallTShape(r250_XH - r250_HALFSTROKE, 0));
            r2426_currentGlyph.include(r250_VerticalHook(r2389_tcenter + r250_HALFSTROKE * r250_HVCONTRAST, r250_XH, r250_HOOKX, -r250_HOOK));
            r250_xn$save$2Lrc5.call(r2426_currentGlyph, 'thooktop', 429);
            r250_dependencyProfile[r2426_currentGlyph.name] = r250_getDependencyProfile(r2426_currentGlyph);
            return r2426_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.233', r250_xn$donothing$2Lrc0b)));
        (function _r2389_t6() {
            var _r2432_t0 = this;
            var r2432_currentGlyph = _r2432_t0;
            if (!r2432_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.234')
                r250_glyphList.pop();
            r2432_currentGlyph.include(r250_markset.if);
            r2432_currentGlyph.include(r2389_SmallTShape(r250_CAP, r250_DESCENDER));
            r250_xn$save$2Lrc5.call(r2432_currentGlyph, 'trtail', 648);
            r250_dependencyProfile[r2432_currentGlyph.name] = r250_getDependencyProfile(r2432_currentGlyph);
            return r2432_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.234', r250_xn$donothing$2Lrc0b)));
        (function _r2389_t7() {
            var _r2437_t0 = this;
            var r2437_currentGlyph = _r2437_t0;
            if (!r2437_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.235')
                r250_glyphList.pop();
            r2437_currentGlyph.include(r250_markset.b);
            var r2437_fine = r250_adviceBlackness(3.5);
            var r2437_rinner = r250_LONGJUT / 2 - r2437_fine / 2;
            var r2437_x2 = r1_mix(r250_SB, r2389_tcenter, 0.4);
            var r2437_y2 = -r2437_fine;
            r2437_currentGlyph.include(r250_HBarTop(r2389_tcenter + r250_HALFSTROKE - r250_LONGJUT + r250_TBALANCE2, r2389_tcenter + r250_HALFSTROKE + r250_LONGJUT + r250_TBALANCE2, r250_XH));
            r2437_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r2389_tcenter, r250_CAP, r250_heading(r250_DOWNWARD)), r250_curl(r2389_tcenter, r2437_fine + r2437_rinner * 2), r250_CurlyTail(r2437_fine, r2437_rinner, r2389_tcenter + r250_STROKE * r250_HVCONTRAST, 0, r2389_tcenter + r250_STROKE * r250_HVCONTRAST + r250_LONGJUT, r2437_x2, r2437_y2)));
            r250_xn$save$2Lrc5.call(r2437_currentGlyph, 'tcurlytail', 566);
            r250_dependencyProfile[r2437_currentGlyph.name] = r250_getDependencyProfile(r2437_currentGlyph);
            return r2437_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.235', r250_xn$donothing$2Lrc0b)));
        return function _r2389_t8() {
            var _r2443_t0 = this;
            var r2443_currentGlyph = _r2443_t0;
            if (!r2443_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.236')
                r250_glyphList.pop();
            r250_includeGlyphPart(r2443_currentGlyph, r250_glyphs, 't.standard', r250_AS_BASE);
            r2443_currentGlyph.include(r250_HOverlayBar(r1_mix(r250_MIDDLE, r250_SB, 0.7) - r250_TBALANCE * 0.5 - r250_STROKE * 0.25 * r250_HVCONTRAST, r1_mix(r250_MIDDLE, r250_RIGHTSB, 0.7) - r250_TBALANCE * 0.5 - r250_STROKE * 0.25 * r250_HVCONTRAST, r1_mix(0, r250_XH, 0.6)));
            r250_xn$save$2Lrc5.call(r2443_currentGlyph, 'tbar', 359);
            r250_dependencyProfile[r2443_currentGlyph.name] = r250_getDependencyProfile(r2443_currentGlyph);
            return r2443_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.236', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r2448_t0() {
            var _r2450_t0 = this;
            var r2450_currentGlyph = _r2450_t0;
            if (!r2450_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.237')
                r250_glyphList.pop();
            r2450_currentGlyph['set-width'](r250_WIDTH);
            r2450_currentGlyph.include(r250_markset.capital);
            var r2450_stroke = r250_adviceBlackness2(2.875, 2, r250_CAP);
            var r2450_ess = r250_ESS * r2450_stroke / r250_STROKE;
            var r2450_smooth = r250_adviceSSmooth(r250_CAP, -1, r2450_stroke);
            r2450_currentGlyph.include(r250_dispiro(r250_widths.lhs(r2450_stroke), r250_g4(r250_RIGHTSB, r250_CAP - r250_HOOK), r250_hookstart(r250_CAPO, new r250_xn$NamedParameterPair$2Lrc9b('sw', r2450_stroke)), r250_g4(r250_SB, r250_CAP - r2450_smooth), r250_alsothru(0.5, 0.5, r250_widths.center(r2450_ess)), r250_g4(r250_RIGHTSB, r2450_smooth, r250_widths(0, r2450_stroke)), r250_hookend(r250_O, new r250_xn$NamedParameterPair$2Lrc9b('sw', r2450_stroke)), r250_g4(r250_SB, r250_HOOK)));
            r250_xn$save$2Lrc5.call(r2450_currentGlyph, 'S', 'S');
            r250_xn$save$2Lrc5.call(r2450_currentGlyph, 'cyrDze', 1029);
            r250_dependencyProfile[r2450_currentGlyph.name] = r250_getDependencyProfile(r2450_currentGlyph);
            return r2450_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.237', r250_xn$donothing$2Lrc0b)));
        (function _r2448_t1() {
            var _r2459_t0 = this;
            var r2459_currentGlyph = _r2459_t0;
            if (!r2459_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.238')
                r250_glyphList.pop();
            r2459_currentGlyph['set-width'](r250_WIDTH);
            r2459_currentGlyph.include(r250_markset.e);
            var r2459_stroke = r250_adviceBlackness2(2.875, 2, r250_XH);
            var r2459_ess = r250_ESS * r2459_stroke / r250_STROKE;
            var r2459_smooth = r250_adviceSSmooth(r250_XH, -1 - r1_linreg(18, 0, 126, 1, r2459_stroke) * (3 - r250_WIDTH / 500 * 2.5 * r1_linreg(18, 0, 126, 1, r2459_stroke)), r2459_stroke);
            r2459_currentGlyph.include(r250_dispiro(r250_widths.lhs(r2459_stroke), r250_g4(r250_RIGHTSB + r250_OX / 4, r250_XH - r250_SHOOK), r250_hookstart(r250_XO, new r250_xn$NamedParameterPair$2Lrc9b('sw', r2459_stroke)), r250_g4.down.mid(r250_SB + r250_OX / 8, r250_XH - r2459_smooth), r250_alsothru(0.5, 0.5, r250_widths.center(r2459_ess)), r250_g4.down.mid(r250_RIGHTSB - r250_OX / 8, r2459_smooth, r250_widths(0, r2459_stroke)), r250_hookend(r250_O, new r250_xn$NamedParameterPair$2Lrc9b('sw', r2459_stroke)), r250_g4(r250_SB - r250_OX / 4, r250_SHOOK)));
            r250_xn$save$2Lrc5.call(r2459_currentGlyph, 's', 's');
            r250_xn$save$2Lrc5.call(r2459_currentGlyph, 'cyrdze', 1109);
            r250_dependencyProfile[r2459_currentGlyph.name] = r250_getDependencyProfile(r2459_currentGlyph);
            return r2459_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.238', r250_xn$donothing$2Lrc0b)));
        (function _r2448_t2() {
            var _r2468_t0 = this;
            var r2468_currentGlyph = _r2468_t0;
            if (!r2468_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.239')
                r250_glyphList.pop();
            r2468_currentGlyph.include(r250_markset.capital);
            var r2468_stroke = r250_adviceBlackness2(2.875, 2, r250_CAP);
            var r2468_ess = r250_ESS * r2468_stroke / r250_STROKE;
            var r2468_smooth = r250_adviceSSmooth(r250_CAP, 1, r2468_stroke);
            r2468_currentGlyph.include(r250_dispiro(r250_widths.rhs(r2468_stroke), r250_g4(r250_SB, r250_CAP - r250_HOOK), r250_hookstart(r250_CAPO, new r250_xn$NamedParameterPair$2Lrc9b('sw', r2468_stroke)), r250_g4(r250_RIGHTSB, r250_CAP - r2468_smooth), r250_alsothru(0.5, 0.5, r250_widths.center(r2468_ess)), r250_g4(r250_SB, r2468_smooth, r250_widths(r2468_stroke, 0)), r250_hookend(r250_O, new r250_xn$NamedParameterPair$2Lrc9b('sw', r2468_stroke)), r250_g4(r250_RIGHTSB, r250_HOOK)));
            r250_xn$save$2Lrc5.call(r2468_currentGlyph, 'revS', 423);
            r250_dependencyProfile[r2468_currentGlyph.name] = r250_getDependencyProfile(r2468_currentGlyph);
            return r2468_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.239', r250_xn$donothing$2Lrc0b)));
        (function _r2448_t3() {
            var _r2475_t0 = this;
            var r2475_currentGlyph = _r2475_t0;
            if (!r2475_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.240')
                r250_glyphList.pop();
            r2475_currentGlyph.include(r250_markset.e);
            var r2475_stroke = r250_adviceBlackness2(2.875, 2, r250_XH);
            var r2475_ess = r250_ESS * r2475_stroke / r250_STROKE;
            var r2475_smooth = r250_adviceSSmooth(r250_XH, 1 + r1_linreg(18, 0, 126, 1, r2475_stroke) * (3.25 - r250_WIDTH / 500 * 2 * r1_linreg(18, 0, 126, 1, r2475_stroke)), r2475_stroke);
            r2475_currentGlyph.include(r250_dispiro(r250_widths.rhs(r2475_stroke), r250_g4(r250_SB, r250_XH - r250_SHOOK), r250_hookstart(r250_XO, new r250_xn$NamedParameterPair$2Lrc9b('sw', r2475_stroke)), r250_g4(r250_RIGHTSB, r250_XH - r2475_smooth), r250_alsothru(0.5, 0.5, r250_widths.center(r2475_ess)), r250_g4(r250_SB, r2475_smooth, r250_widths(r2475_stroke, 0)), r250_hookend(r250_O, new r250_xn$NamedParameterPair$2Lrc9b('sw', r2475_stroke)), r250_g4(r250_RIGHTSB, r250_SHOOK)));
            r250_xn$save$2Lrc5.call(r2475_currentGlyph, 'revs', 424);
            r250_xn$save$2Lrc5.call(r2475_currentGlyph, 'cyrghe.italic');
            r250_dependencyProfile[r2475_currentGlyph.name] = r250_getDependencyProfile(r2475_currentGlyph);
            return r2475_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.240', r250_xn$donothing$2Lrc0b)));
        (function _r2448_t4() {
            var _r2483_t0 = this;
            var r2483_currentGlyph = _r2483_t0;
            if (!r2483_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.241')
                r250_glyphList.pop();
            r250_includeGlyphPart(r2483_currentGlyph, r250_glyphs, 'rtailBR');
            var r2483_stroke = r250_adviceBlackness2(2.875, 2, r250_XH);
            r2483_currentGlyph['apply-transform'](r250_Upright());
            r2483_currentGlyph['apply-transform'](r250_Translate(r250_SB + r2483_stroke * r250_HVCONTRAST + r250_OXHOOK, 0));
            r2483_currentGlyph['apply-transform'](r250_Italify());
            r2483_currentGlyph.include(r250_markset.p);
            r250_includeGlyphPart(r2483_currentGlyph, r250_glyphs, 's');
            r2483_currentGlyph.include(r250_VBarLeft(r250_SB + r250_OXHOOK, 0, r250_SHOOK));
            r250_xn$save$2Lrc5.call(r2483_currentGlyph, 'srtail', 642);
            r250_dependencyProfile[r2483_currentGlyph.name] = r250_getDependencyProfile(r2483_currentGlyph);
            return r2483_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.241', r250_xn$donothing$2Lrc0b)));
        (function _r2448_t5() {
            var _r2493_t0 = this;
            var r2493_currentGlyph = _r2493_t0;
            if (!r2493_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.242')
                r250_glyphList.pop();
            r2493_currentGlyph.include(r250_markset.if);
            r250_includeGlyphPart(r2493_currentGlyph, r250_glyphs, 'S');
            var r2493_stroke = r250_adviceBlackness2(2.875, 2, r250_CAP);
            r2493_currentGlyph.include(r250_dispiro(r250_widths.lhs(r250_adviceBlackness(4.5)), r250_g4(r250_SB + r250_OXHOOK, r250_HOOK), r250_alsothru(0.15, 0.6, r250_important), r250_flat(r250_RIGHTSB - 1, r250_DESCENDER, r250_widths(r2493_stroke, 0)), r250_curl(r250_RIGHTSB, r250_DESCENDER)));
            r250_xn$save$2Lrc5.call(r2493_currentGlyph, 'Sswash', 11390);
            r250_dependencyProfile[r2493_currentGlyph.name] = r250_getDependencyProfile(r2493_currentGlyph);
            return r2493_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.242', r250_xn$donothing$2Lrc0b)));
        return function _r2448_t6() {
            var _r2499_t0 = this;
            var r2499_currentGlyph = _r2499_t0;
            if (!r2499_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.243')
                r250_glyphList.pop();
            r2499_currentGlyph.include(r250_markset.p);
            r250_includeGlyphPart(r2499_currentGlyph, r250_glyphs, 's');
            var r2499_stroke = r250_adviceBlackness2(2.875, 2, r250_XH);
            r2499_currentGlyph.include(r250_dispiro(r250_widths.lhs(r250_adviceBlackness(4.5)), r250_g4(r250_SB + r250_OXHOOK, r250_SHOOK), r250_alsothru(0.2, 0.6, r250_important), r250_flat(r250_RIGHTSB - 1, r250_DESCENDER, r250_widths(r2499_stroke, 0)), r250_curl(r250_RIGHTSB, r250_DESCENDER)));
            r250_xn$save$2Lrc5.call(r2499_currentGlyph, 'sswash', 575);
            r250_dependencyProfile[r2499_currentGlyph.name] = r250_getDependencyProfile(r2499_currentGlyph);
            return r2499_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.243', r250_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r2505_t0() {
            var _r2507_t0 = this;
            var r2507_currentGlyph = _r2507_t0;
            if (!r2507_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.244')
                r250_glyphList.pop();
            r2507_currentGlyph['set-width'](r250_WIDTH);
            r2507_currentGlyph.include(r250_markset.capital);
            var r2507_cor = 1.15 * r250_HVCONTRAST;
            r2507_currentGlyph.include(r250_HBarTop(r250_SB, r250_RIGHTSB, r250_CAP));
            r2507_currentGlyph['start-from'](r250_SB, r250_STROKE);
            r2507_currentGlyph['line-to'](r250_SB + r250_STROKE * r2507_cor, r250_STROKE);
            r2507_currentGlyph['line-to'](r250_RIGHTSB, r250_CAP - r250_STROKE);
            r2507_currentGlyph['line-to'](r250_RIGHTSB - r250_STROKE * r2507_cor, r250_CAP - r250_STROKE);
            r2507_currentGlyph['reverse-last']();
            r2507_currentGlyph.include(r250_HBarBottom(r250_SB, r250_RIGHTSB, 0));
            r2507_currentGlyph['tag-contour']('strokeBottom');
            if (r250_SLAB) {
                r2507_currentGlyph.include(r250_DownwardLeftSerif(r250_SB, r250_CAP, r250_VJUT));
                r2507_currentGlyph.include(r250_UpwardRightSerif(r250_RIGHTSB, 0, r250_VJUT));
                r2507_currentGlyph['tag-contour']('serifRB');
            }
            r250_xn$save$2Lrc5.call(r2507_currentGlyph, 'Z', 'Z');
            r250_xn$save$2Lrc5.call(r2507_currentGlyph, 'Zeta', 918);
            r250_dependencyProfile[r2507_currentGlyph.name] = r250_getDependencyProfile(r2507_currentGlyph);
            return r2507_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.244', r250_xn$donothing$2Lrc0b)));
        (function _r2505_t1() {
            var _r2524_t0 = this;
            var r2524_currentGlyph = _r2524_t0;
            if (!r2524_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.245')
                r250_glyphList.pop();
            r2524_currentGlyph['set-width'](r250_WIDTH);
            r2524_currentGlyph.include(r250_markset.e);
            var r2524_cor = 1.2 * r250_HVCONTRAST;
            r2524_currentGlyph.include(r250_HBarTop(r250_SB, r250_RIGHTSB, r250_XH));
            r2524_currentGlyph['start-from'](r250_SB, r250_STROKE);
            r2524_currentGlyph['line-to'](r250_SB + r250_STROKE * r2524_cor, r250_STROKE);
            r2524_currentGlyph['line-to'](r250_RIGHTSB, r250_XH - r250_STROKE);
            r2524_currentGlyph['line-to'](r250_RIGHTSB - r250_STROKE * r2524_cor, r250_XH - r250_STROKE);
            r2524_currentGlyph['reverse-last']();
            r2524_currentGlyph.include(r250_HBarBottom(r250_SB, r250_RIGHTSB, 0));
            r2524_currentGlyph['tag-contour']('strokeBottom');
            if (r250_SLAB) {
                r2524_currentGlyph.include(r250_DownwardLeftSerif(r250_SB, r250_XH, r250_VJUT));
                r2524_currentGlyph.include(r250_UpwardRightSerif(r250_RIGHTSB, 0, r250_VJUT));
                r2524_currentGlyph['tag-contour']('serifRB');
            }
            r250_xn$save$2Lrc5.call(r2524_currentGlyph, 'z', 'z');
            r250_dependencyProfile[r2524_currentGlyph.name] = r250_getDependencyProfile(r2524_currentGlyph);
            return r2524_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.245', r250_xn$donothing$2Lrc0b)));
        (function _r2505_t2() {
            var _r2540_t0 = this;
            var r2540_currentGlyph = _r2540_t0;
            if (!r2540_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.246')
                r250_glyphList.pop();
            r250_includeGlyphPart(r2540_currentGlyph, r250_glyphs, 'Z', r250_AS_BASE);
            r2540_currentGlyph['eject-contour']('strokeBottom');
            r2540_currentGlyph['eject-contour']('serifRB');
            r2540_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r250_SB, 0, r250_heading(r250_RIGHTWARD)), r250_curl(r250_RIGHTSB - r250_HOOKX, 0), r250_archv(), r250_straight.down.end(r250_RIGHTSB, -r250_HOOK, r250_widths.heading(0, r250_STROKE, r250_DOWNWARD))));
            r250_xn$save$2Lrc5.call(r2540_currentGlyph, 'Zdtail', 548);
            r250_dependencyProfile[r2540_currentGlyph.name] = r250_getDependencyProfile(r2540_currentGlyph);
            return r2540_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.246', r250_xn$donothing$2Lrc0b)));
        (function _r2505_t3() {
            var _r2547_t0 = this;
            var r2547_currentGlyph = _r2547_t0;
            if (!r2547_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.247')
                r250_glyphList.pop();
            r250_includeGlyphPart(r2547_currentGlyph, r250_glyphs, 'z', r250_AS_BASE);
            r2547_currentGlyph['eject-contour']('strokeBottom');
            r2547_currentGlyph['eject-contour']('serifRB');
            r2547_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_flat(r250_SB, 0, r250_heading(r250_RIGHTWARD)), r250_curl(r250_RIGHTSB - r250_HOOKX, 0), r250_archv(), r250_straight.down.end(r250_RIGHTSB, -r250_HOOK, r250_widths.heading(0, r250_STROKE, r250_DOWNWARD))));
            r250_xn$save$2Lrc5.call(r2547_currentGlyph, 'zdtail', 549);
            r250_dependencyProfile[r2547_currentGlyph.name] = r250_getDependencyProfile(r2547_currentGlyph);
            return r2547_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.247', r250_xn$donothing$2Lrc0b)));
        (function _r2505_t4() {
            var _r2554_t0 = this;
            var r2554_currentGlyph = _r2554_t0;
            if (!r2554_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.248')
                r250_glyphList.pop();
            r2554_currentGlyph.include(r250_markset.if);
            var r2554_cor = 1.15;
            r2554_currentGlyph.include(r250_HBarTop(r250_SB, r250_RIGHTSB, r250_CAP));
            r2554_currentGlyph['start-from'](r250_SB, 0);
            r2554_currentGlyph['line-to'](r250_SB + r250_STROKE * r2554_cor, 0);
            r2554_currentGlyph['line-to'](r250_RIGHTSB, r250_CAP - r250_STROKE);
            r2554_currentGlyph['line-to'](r250_RIGHTSB - r250_STROKE * r2554_cor, r250_CAP - r250_STROKE);
            r2554_currentGlyph['reverse-last']();
            r2554_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_g4(r250_SB, 0), r250_alsothru(0.36, 0.6, r250_important), r250_flat(r250_RIGHTSB - 1, r250_DESCENDER), r250_curl(r250_RIGHTSB, r250_DESCENDER)));
            if (r250_SLAB)
                r2554_currentGlyph.include(r250_DownwardLeftSerif(r250_SB, r250_CAP, r250_VJUT));
            r250_xn$save$2Lrc5.call(r2554_currentGlyph, 'Zswash', 11391);
            r250_dependencyProfile[r2554_currentGlyph.name] = r250_getDependencyProfile(r2554_currentGlyph);
            return r2554_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.248', r250_xn$donothing$2Lrc0b)));
        (function _r2505_t5() {
            var _r2566_t0 = this;
            var r2566_currentGlyph = _r2566_t0;
            if (!r2566_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.249')
                r250_glyphList.pop();
            r2566_currentGlyph.include(r250_markset.p);
            r2566_currentGlyph.include(r250_HBarTop(r250_SB, r250_RIGHTSB, r250_XH));
            var r2566_cor = 1.2;
            r2566_currentGlyph['start-from'](r250_SB, 0);
            r2566_currentGlyph['line-to'](r250_SB + r250_STROKE * r2566_cor, 0);
            r2566_currentGlyph['line-to'](r250_RIGHTSB, r250_XH - r250_STROKE);
            r2566_currentGlyph['line-to'](r250_RIGHTSB - r250_STROKE * r2566_cor, r250_XH - r250_STROKE);
            r2566_currentGlyph['reverse-last']();
            r2566_currentGlyph.include(r250_dispiro(r250_widths.lhs(), r250_g4(r250_SB - r250_OXHOOK, 0), r250_alsothru(0.36, 0.6, r250_important), r250_flat(r250_RIGHTSB - 1, r250_DESCENDER), r250_curl(r250_RIGHTSB, r250_DESCENDER)));
            if (r250_SLAB)
                r2566_currentGlyph.include(r250_DownwardLeftSerif(r250_SB, r250_XH, r250_VJUT));
            r250_xn$save$2Lrc5.call(r2566_currentGlyph, 'zswash', 576);
            r250_dependencyProfile[r2566_currentGlyph.name] = r250_getDependencyProfile(r2566_currentGlyph);
            return r2566_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.249', r250_xn$donothing$2Lrc0b)));
        (function _r2505_t6() {
            var _r2578_t0 = this;
            var r2578_currentGlyph = _r2578_t0;
            if (!r2578_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.250')
                r250_glyphList.pop();
            r250_includeGlyphPart(r2578_currentGlyph, r250_glyphs, 'Z', r250_AS_BASE);
            r2578_currentGlyph['eject-contour']('serifRB');
            r2578_currentGlyph.include(r250_VBarRight(r1_mix(r250_SB, r250_RIGHTSB, 1.05), r250_HALFSTROKE - r250_LONGJUT, r250_STROKE));
            r250_xn$save$2Lrc5.call(r2578_currentGlyph, 'Zdesc', 11371);
            r250_dependencyProfile[r2578_currentGlyph.name] = r250_getDependencyProfile(r2578_currentGlyph);
            return r2578_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.250', r250_xn$donothing$2Lrc0b)));
        (function _r2505_t7() {
            var _r2584_t0 = this;
            var r2584_currentGlyph = _r2584_t0;
            if (!r2584_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.251')
                r250_glyphList.pop();
            r250_includeGlyphPart(r2584_currentGlyph, r250_glyphs, 'z', r250_AS_BASE);
            r2584_currentGlyph['eject-contour']('serifRB');
            r2584_currentGlyph.include(r250_VBarRight(r1_mix(r250_SB, r250_RIGHTSB, 1.05), r250_HALFSTROKE - r250_LONGJUT, r250_STROKE));
            r250_xn$save$2Lrc5.call(r2584_currentGlyph, 'zdesc', 11372);
            r250_dependencyProfile[r2584_currentGlyph.name] = r250_getDependencyProfile(r2584_currentGlyph);
            return r2584_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.251', r250_xn$donothing$2Lrc0b)));
        return function _r2505_t8() {
            var _r2590_t0 = this;
            var r2590_currentGlyph = _r2590_t0;
            if (!r2590_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/letters-unified-basic.ptl.252')
                r250_glyphList.pop();
            r2590_currentGlyph.include(r250_markset.e);
            var r2590_fine = r250_adviceBlackness(4);
            var r2590_rinner = Math.max(r250_XH * 0.04, r2590_fine * 0.3);
            var r2590_x2 = r1_mix(r250_SB + r250_STROKE, r250_RIGHTSB, 0.3);
            var r2590_x1 = r1_mix(r2590_x2, r250_RIGHTSB - r2590_fine - r2590_rinner * 1.5, 0.45);
            var r2590_y2 = -r250_XH * 0.2;
            var r2590_m1 = r250_RIGHTSB - r2590_fine / 2 - r2590_rinner * 1.5 + r250_O;
            r2590_currentGlyph.include(r250_HCurlyTail(r2590_fine, r250_STROKE, r2590_rinner, r250_SB, r2590_m1, r250_RIGHTSB + r2590_fine / 2, r2590_x1, r2590_x2, r2590_y2));
            r250_includeGlyphPart(r2590_currentGlyph, r250_glyphs, 'z');
            r2590_currentGlyph['eject-contour']('strokeBottom');
            r2590_currentGlyph['eject-contour']('serifRB');
            r250_xn$save$2Lrc5.call(r2590_currentGlyph, 'zcurlytail', 657);
            r250_dependencyProfile[r2590_currentGlyph.name] = r250_getDependencyProfile(r2590_currentGlyph);
            return r2590_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-basic.ptl.252', r250_xn$donothing$2Lrc0b));
    }());
    return {
        'ISerifShape': r250_ISerifShape,
        'IotaShape': r250_IotaShape,
        'LShape': r250_LShape,
        'VShape': r250_VShape,
        'YShape': r250_YShape,
        'yBaseKnots': r250_yBaseKnots,
        'SmallYShape': r250_SmallYShape,
        'KShape': r250_KShape,
        'PShape': r250_PShape,
        'NShape': r250_NShape,
        'UShape': r250_UShape,
        'FShape': r250_FShape,
        'LongSShape': r250_LongSShape,
        'EShape': r250_EShape,
        'SmallEShape': r250_SmallEShape,
        'RevSmallEShape': r250_RevSmallEShape
    };
};
