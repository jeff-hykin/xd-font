'use strict';
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t12, _r1_t13;
var _r1_class8 = function _r1_t12(r150_x, r150_y) {
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
exports.apply = r1_apply = function _r1_t13() {
    var _r250_t6 = this;
    var r250_xn$capture$2Lrc = _r250_t6;
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
        var r253_arrowHeight = r250_operTop - r250_operBot;
        var r253_arrowWidth = Math.min(r250_FULLWIDTH2, r253_arrowHeight);
        var r253_arrowMidX = r253_arrowWidth / 2;
        var r253_arrowSB = r250_SB / 2;
        var r253_arrowRSB = r253_arrowWidth - r253_arrowSB;
        var r253_hwArrowRSB = r250_WIDTH - r253_arrowSB;
        var r253_hwArrowMidX = r250_WIDTH / 2;
        var r253_o = r250_O * 2;
        var r253_arrowSize = (r250_RIGHTSB - r253_arrowSB) * r1_designParameters.arrow_size * Math.pow(r253_arrowWidth / r250_WIDTH, 0.4);
        var r253_halfstroke = r250_OPERATORSTROKE / 2;
        var r253_fine = r250_adviceBlackness(4);
        var r253_terminal = r250_adviceBlackness(6);
        var r253_arrowTop = r1_mix(r250_operBot, r250_operTop, 1 / 2) + r253_arrowHeight / 2;
        var r253_arrowBot = r1_mix(r250_operBot, r250_operTop, 1 / 2) - r253_arrowHeight / 2;
        var r253_doubleArrowStemWidth = r253_arrowSize * 1.1;
        var r253_ArrowBar = function _r253_t2(r254_x1, r254_y1, r254_x2, r254_y2, r254_halfstroke, r254_w) {
            return function _r254_t2() {
                var _r256_t0 = this;
                var r256_currentGlyph = _r256_t0;
                var r256_mag = Math.hypot(r254_y2 - r254_y1, r254_x2 - r254_x1);
                var r256_p = (r256_mag - r253_o - r254_halfstroke * r1_fallback(r254_w, 1.1)) / r256_mag;
                r256_currentGlyph.include(r250_dispiro(r250_widths.center(r254_halfstroke * 2), r250_flat(r254_x1, r254_y1), r250_curl(r1_mix(r254_x1, r254_x2, r256_p), r1_mix(r254_y1, r254_y2, r256_p)), r250_end(function _r256_t2() {
                    var _r258_t0 = this;
                    return _r258_t0.contrast = 1;
                })));
                return void 0;
            };
        };
        var r253_DashArrowBar = function _r253_t3(r259_x1, r259_y1, r259_x2, r259_y2, r259_halfstroke, r259_gap, r259_stop, r259_w) {
            return function _r259_t2() {
                var _r261_t0 = this;
                var r261_currentGlyph = _r261_t0;
                var r261_mag = Math.hypot(r259_y2 - r259_y1, r259_x2 - r259_x1);
                var r261_p = (r261_mag - r253_o - r259_halfstroke * r1_fallback(r259_w, 1.1)) / r261_mag;
                var r261_deltaT = (r259_gap + r259_stop) / r261_mag;
                var r261_t = 0;
                for (; r261_t < r261_p; r261_t = r261_t + r261_deltaT)
                    r261_currentGlyph.include(r250_dispiro(r250_widths.center(r259_halfstroke * 2), r250_flat(r1_mix(r259_x1, r259_x2, r261_t), r1_mix(r259_y1, r259_y2, r261_t)), r250_curl(r1_mix(r259_x1, r259_x2, Math.min(r261_p, r261_t + r259_stop / r261_mag)), r1_mix(r259_y1, r259_y2, Math.min(r261_p, r261_t + r259_stop / r261_mag))), r250_end(function _r261_t2() {
                        var _r263_t0 = this;
                        return _r263_t0.contrast = 1;
                    })));
                return void 0;
            };
        };
        var r253_HookArrowBar = function _r253_t4(r264_x1, r264_y1, r264_x2, r264_y2, r264_halfstroke, r264_s, r264_w) {
            return function _r264_t2() {
                var _r266_t0 = this;
                var r266_currentGlyph = _r266_t0;
                var r266_mag = Math.hypot(r264_y2 - r264_y1, r264_x2 - r264_x1);
                var r266_p = (r266_mag - r253_o - r264_halfstroke * r1_fallback(r264_w, 1.1)) / r266_mag;
                r266_currentGlyph.include(r250_dispiro(r250_widths.center(r264_halfstroke * 2), r250_g4(r266_mag - Math.abs(r264_s) / 2 - 0.1, r264_s), r250_g4(r266_mag - Math.abs(r264_s) / 2, r264_s), r250_archv(), r250_g4(r266_mag - r250_O, r264_s / 2), r250_arcvh(), r250_flat(r266_mag - Math.abs(r264_s) / 2, 0), r250_curl(r1_mix(r266_mag, 0, r266_p), 0), r250_end(function _r266_t2() {
                    var _r268_t0 = this;
                    return _r268_t0.contrast = 1;
                })));
                return void 0;
            };
        };
        var r253_PointingTo = function _r253_t5(r269_x1, r269_y1, r269_x2, r269_y2, r269_oo, r269_F) {
            return function _r269_t2() {
                var _r271_t0 = this;
                var r271_currentGlyph = _r271_t0;
                var r271_giz = _r271_t0.gizmo;
                var r271_g = r250_xn$createglyph$7Hrq(function _r271_t2() {
                    var _r273_t2 = this;
                    var r273_currentGlyph = _r273_t2;
                    _r273_t2.gizmo = r250_Translate(0, 0);
                    r273_currentGlyph.include(r269_F);
                    r273_currentGlyph['apply-transform'](r250_Translate(r269_oo, 0));
                    var _r273_t0 = r1_tp(r271_giz, {
                        'x': r269_x1,
                        'y': r269_y1
                    });
                    var r273_xo = _r273_t0.x;
                    var r273_yo = _r273_t0.y;
                    var _r273_t1 = r1_tp(r271_giz, {
                        'x': r269_x2,
                        'y': r269_y2
                    });
                    var r273_xt = _r273_t1.x;
                    var r273_yt = _r273_t1.y;
                    r273_currentGlyph['apply-transform'](r250_Rotate(Math.atan2(r273_yo - r273_yt, r273_xo - r273_xt)));
                    r273_currentGlyph['apply-transform'](r250_Translate(r273_xt, r273_yt));
                    return void 0;
                });
                r271_currentGlyph.include(r271_g);
                return void 0;
            };
        };
        var r253_ArrowHead = function _r253_t6(r279_x1, r279_y1, r279_x2, r279_y2, r279__size) {
            return r250_xn$createglyph$7Hrq(function _r279_t2() {
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                r281_currentGlyph.include(r253_LHSHalfArrowHead(r279_x1, r279_y1, r279_x2, r279_y2, 0, r279__size));
                r281_currentGlyph.include(r253_RHSHalfArrowHead(r279_x1, r279_y1, r279_x2, r279_y2, 0, r279__size));
                return void 0;
            });
        };
        var r253_RHSHalfArrowHead = function _r253_t7(r284_x1, r284_y1, r284_x2, r284_y2, r284_width, r284__size) {
            return r250_xn$createglyph$7Hrq(function _r284_t2() {
                var _r286_t0 = this;
                var r286_currentGlyph = _r286_t0;
                var r286_size = r1_fallback(r284__size, r253_arrowSize);
                r286_currentGlyph.include(r253_PointingTo(r284_x1, r284_y1, r284_x2, r284_y2, r250_O, r250_dispiro(function _r286_t2() {
                    var _r288_t0 = this;
                    return _r288_t0.gizmo = r1_Transform.Id();
                }, r250_widths.rhs(r253_fine), r250_flat(r253_o, -r284_width / 2, r250_heading(r250_UPWARD)), r250_curl(r253_o + r286_size, r286_size, r250_widths.rhs(r253_terminal)), r250_end(function _r286_t3() {
                    var _r289_t0 = this;
                    return _r289_t0.contrast = 1;
                }))));
                return void 0;
            });
        };
        var r253_LHSHalfArrowHead = function _r253_t8(r290_x1, r290_y1, r290_x2, r290_y2, r290_width, r290__size) {
            return r250_xn$createglyph$7Hrq(function _r290_t2() {
                var _r292_t0 = this;
                var r292_currentGlyph = _r292_t0;
                var r292_size = r1_fallback(r290__size, r253_arrowSize);
                r292_currentGlyph.include(r253_PointingTo(r290_x1, r290_y1, r290_x2, r290_y2, r250_O, r250_dispiro(function _r292_t2() {
                    var _r294_t0 = this;
                    return _r294_t0.gizmo = r1_Transform.Id();
                }, r250_widths.lhs(r253_fine), r250_flat(r253_o, r290_width / 2, r250_heading(r250_DOWNWARD)), r250_curl(r253_o + r292_size, -r292_size, r250_widths.lhs(r253_terminal)), r250_end(function _r292_t3() {
                    var _r295_t0 = this;
                    return _r295_t0.contrast = 1;
                }))));
                return void 0;
            });
        };
        var r253_TriangleArrowHead = function _r253_t9(r296_x1, r296_y1, r296_x2, r296_y2, r296_width, r296_length) {
            return r250_xn$createglyph$7Hrq(function _r296_t2() {
                var _r298_t0 = this;
                var r298_currentGlyph = _r298_t0;
                r298_currentGlyph.include(r253_PointingTo(r296_x1, r296_y1, r296_x2, r296_y2, r250_O, r250_xn$spirooutline$1aao(r250_corner(r253_o, 0), r250_corner(r296_length, r296_width - r253_o), r250_corner(r296_length, -r296_width + r253_o))));
                return void 0;
            });
        };
        var r253_ArrowShape = function _r253_t10(r300_x1, r300_y1, r300_x2, r300_y2, r300_size) {
            return function _r300_t2() {
                var _r302_t0 = this;
                var r302_currentGlyph = _r302_t0;
                r302_currentGlyph.include(r253_ArrowHead(r300_x1, r300_y1, r300_x2, r300_y2, r300_size));
                r302_currentGlyph.include(r253_ArrowBar(r300_x1, r300_y1, r300_x2, r300_y2, r253_halfstroke));
                return void 0;
            };
        };
        var r253_DashArrowShape = function _r253_t11(r305_x1, r305_y1, r305_x2, r305_y2, r305_size) {
            return function _r305_t2() {
                var _r307_t0 = this;
                var r307_currentGlyph = _r307_t0;
                var r307_gap = r250_adviceBlackness(6);
                r307_currentGlyph.include(r253_ArrowHead(r305_x1, r305_y1, r305_x2, r305_y2, r305_size));
                r307_currentGlyph.include(r253_DashArrowBar(r305_x1, r305_y1, r305_x2, r305_y2, r253_halfstroke, r307_gap, Math.max(r250_WIDTH / 5, r307_gap * 3)));
                return void 0;
            };
        };
        var r253_HookArrowShape = function _r253_t12(r310_mul) {
            return function _r310_t2(r311_x1, r311_y1, r311_x2, r311_y2, r311_size) {
                return function _r311_t2() {
                    var _r313_t0 = this;
                    var r313_currentGlyph = _r313_t0;
                    r313_currentGlyph.include(r253_ArrowHead(r311_x1, r311_y1, r311_x2, r311_y2, r311_size));
                    r313_currentGlyph.include(r253_PointingTo(r311_x1, r311_y1, r311_x2, r311_y2, 0, r253_HookArrowBar(r311_x1, r311_y1, r311_x2, r311_y2, r253_halfstroke, r253_arrowSize * r310_mul)));
                    return void 0;
                };
            };
        };
        var r253_ThickArrowShape = function _r253_t13(r316_color) {
            return function _r316_t2(r317_x1, r317_y1, r317_x2, r317_y2) {
                return function _r317_t2() {
                    var _r319_t0 = this;
                    var r319_currentGlyph = _r319_t0;
                    var r319_headLen = r250_WIDTH * 0.4;
                    var r319_halfBarWidth = r319_headLen / 3;
                    var r319_headWidth = r319_halfBarWidth * 2;
                    var r319_fine = Math.min(r250_adviceBlackness(5), r319_halfBarWidth * 0.4);
                    var r319_mag = Math.hypot(r317_y2 - r317_y1, r317_x2 - r317_x1);
                    var r319_p = (r319_mag - r319_fine) / r319_mag;
                    var r319_p2 = (r319_mag - r319_fine * Math.sqrt(13) / 2) / r319_mag;
                    var r319_innerHeaderLengthShrink = r319_fine * (1 + Math.sqrt(13) / 2);
                    var r319_x1a = r1_mix(r317_x1, r317_x2, 1 - r319_p);
                    var r319_y1a = r1_mix(r317_y1, r317_y2, 1 - r319_p);
                    var r319_x2a = r1_mix(r317_x1, r317_x2, r319_p2);
                    var r319_y2a = r1_mix(r317_y1, r317_y2, r319_p2);
                    if (r316_color === 'white')
                        r319_currentGlyph.include(r250_difference(r250_union(r253_TriangleArrowHead(r317_x1, r317_y1, r317_x2, r317_y2, r319_headWidth, r319_headLen), r253_ArrowBar(r317_x1, r317_y1, r317_x2, r317_y2, r319_halfBarWidth, 2)), r250_union(r253_TriangleArrowHead(r319_x1a, r319_y1a, r319_x2a, r319_y2a, r319_headWidth - r319_innerHeaderLengthShrink * r319_headWidth / r319_headLen, r319_headLen - r319_innerHeaderLengthShrink), r253_ArrowBar(r319_x1a, r319_y1a, r319_x2a, r319_y2a, r319_halfBarWidth - r319_fine, 2))));
                    if (r316_color === 'black')
                        r319_currentGlyph.include(r250_union(r253_TriangleArrowHead(r317_x1, r317_y1, r317_x2, r317_y2, r319_headWidth, r319_headLen), r253_ArrowBar(r317_x1, r317_y1, r317_x2, r317_y2, r319_halfBarWidth, 2)));
                    return void 0;
                };
            };
        };
        var r253_HalfArrowShape = function _r253_t14(r322_side) {
            return function _r322_t2(r323_x1, r323_y1, r323_x2, r323_y2, r323_size) {
                return function _r323_t2() {
                    var _r325_t0 = this;
                    var r325_currentGlyph = _r325_t0;
                    r325_currentGlyph.include(r322_side(r323_x1, r323_y1, r323_x2, r323_y2, r253_halfstroke * 2, r323_size));
                    r325_currentGlyph.include(r253_ArrowBar(r323_x1, r323_y1, r323_x2, r323_y2, r253_halfstroke, 1.5));
                    return void 0;
                };
            };
        };
        var r253_DoubleArrowShape = function _r253_t15(r328_w) {
            return function _r328_t2(r329_x1, r329_y1, r329_x2, r329_y2, r329_size) {
                return function _r329_t2() {
                    var _r331_t2 = this;
                    var r331_currentGlyph = _r331_t2;
                    r331_currentGlyph.include(r253_ArrowHead(r329_x1, r329_y1, r329_x2, r329_y2, r329_size));
                    var r331_giz = _r331_t2.gizmo;
                    var _r331_t0 = r1_tp(r331_giz, {
                        'x': r329_x1,
                        'y': r329_y1
                    });
                    var r331_xo = _r331_t0.x;
                    var r331_yo = _r331_t0.y;
                    var _r331_t1 = r1_tp(r331_giz, {
                        'x': r329_x2,
                        'y': r329_y2
                    });
                    var r331_xt = _r331_t1.x;
                    var r331_yt = _r331_t1.y;
                    var r331_mag = Math.hypot(r331_yt - r331_yo, r331_xt - r331_xo);
                    var r331_p = (r331_mag - r253_o - r328_w / 2 + r250_O) / r331_mag;
                    var r331_fine = Math.min(r328_w / 3, r253_halfstroke * 2);
                    var r331_coFine = r328_w / 2 - r331_fine / 2;
                    var r331_G = r250_dispiro(r250_xn$disablegizmo$3qIs(), r250_xn$disablecontrast$3qIs(), r250_widths.center(r331_fine), r250_flat(r331_xo, r331_yo), r250_curl(r1_mix(r331_xo, r331_xt, r331_p), r1_mix(r331_yo, r331_yt, r331_p)), r250_end());
                    var r331_g = r331_G.call(r331_currentGlyph, 'don\'t include');
                    r331_g.include(r250_Translate(-r331_xo, -r331_yo));
                    r331_g.include(r250_Rotate(-Math.atan2(r331_yt - r331_yo, r331_xt - r331_xo)));
                    r331_currentGlyph.include(r250_Translate(-r331_xo, -r331_yo));
                    r331_currentGlyph.include(r250_Rotate(-Math.atan2(r331_yt - r331_yo, r331_xt - r331_xo)));
                    r331_currentGlyph.include(r250_Translate(0, -r331_coFine));
                    r331_currentGlyph.include(r331_g);
                    r331_currentGlyph.include(r250_Translate(0, 2 * r331_coFine));
                    r331_currentGlyph.include(r331_g);
                    r331_currentGlyph.include(r250_Translate(0, -r331_coFine));
                    r331_currentGlyph.include(r250_Rotate(Math.atan2(r331_yt - r331_yo, r331_xt - r331_xo)));
                    r331_currentGlyph.include(r250_Translate(r331_xo, r331_yo));
                    return void 0;
                };
            };
        };
        var r253_dhArrowShape = function _r253_t16(r342_x1, r342_y1, r342_x2, r342_y2, r342_size) {
            return function _r342_t2() {
                var _r344_t0 = this;
                var r344_currentGlyph = _r344_t0;
                var r344_mag = Math.hypot(r342_y2 - r342_y1, r342_x2 - r342_x1);
                var r344_p = (r344_mag - r253_o - r342_size) / r344_mag;
                r344_currentGlyph.include(r253_ArrowShape(r342_x1, r342_y1, r342_x2, r342_y2, r342_size));
                r344_currentGlyph.include(r253_ArrowHead(r342_x1, r342_y1, r1_mix(r342_x1, r342_x2, r344_p), r1_mix(r342_y1, r342_y2, r344_p), r342_size));
                return void 0;
            };
        };
        var r253_htArrowShape = function _r253_t17(r347_x1, r347_y1, r347_x2, r347_y2, r347_size) {
            return function _r347_t2() {
                var _r349_t0 = this;
                var r349_currentGlyph = _r349_t0;
                var r349_mag = Math.hypot(r347_y2 - r347_y1, r347_x2 - r347_x1);
                var r349_p1 = (r347_size - r253_o - r253_halfstroke * 1.1) / r349_mag;
                var r349_p2 = r347_size / r349_mag;
                r349_currentGlyph.include(r253_ArrowShape(r1_mix(r347_x1, r347_x2, r349_p1), r1_mix(r347_y1, r347_y2, r349_p1), r347_x2, r347_y2, r347_size));
                r349_currentGlyph.include(r253_ArrowHead(r347_x1, r347_y1, r1_mix(r347_x1, r347_x2, r349_p2), r1_mix(r347_y1, r347_y2, r349_p2), r347_size));
                return void 0;
            };
        };
        var r253_arrow = function _r253_t18(r352_shape, r352_id, r352_unicode, r352_x1, r352_y1, r352_x2, r352_y2, r352_width) {
            return function _r352_t2() {
                var _r354_t0 = this;
                var r354_currentGlyph = _r354_t0;
                if (!r354_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.1')
                    r250_glyphList.pop();
                r354_currentGlyph['set-width'](r1_fallback(r352_width, r253_arrowWidth));
                r354_currentGlyph['set-anchor']('slash', r250_BASE, r1_mix(r352_x1, r352_x2, 2 / 5), r1_mix(r352_y1, r352_y2, 2 / 5));
                r354_currentGlyph.include(r352_shape(r352_x1, r352_y1, r352_x2, r352_y2, r253_arrowSize));
                r250_xn$save$2Lrc5.call(r354_currentGlyph, r352_id, r352_unicode);
                r250_dependencyProfile[r354_currentGlyph.name] = r250_getDependencyProfile(r354_currentGlyph);
                return r354_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.1', r250_xn$donothing$2Lrc0b));
        };
        var r253_doublearrow = function _r253_t19(r359_shape, r359_id, r359_unicode, r359_x1, r359_y1, r359_x2, r359_y2) {
            return function _r359_t2() {
                var _r361_t0 = this;
                var r361_currentGlyph = _r361_t0;
                if (!r361_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.2')
                    r250_glyphList.pop();
                r361_currentGlyph['set-width'](r253_arrowWidth);
                r361_currentGlyph['set-anchor']('slash', r250_BASE, r1_mix(r359_x1, r359_x2, 1 / 2), r1_mix(r359_y1, r359_y2, 1 / 2));
                var r361_xm = r1_mix(r359_x1, r359_x2, 0.5);
                var r361_ym = r1_mix(r359_y1, r359_y2, 0.5);
                r361_currentGlyph.include(r359_shape(r361_xm, r361_ym, r359_x1, r359_y1, r253_arrowSize));
                r361_currentGlyph.include(r359_shape(r361_xm, r361_ym, r359_x2, r359_y2, r253_arrowSize));
                r250_xn$save$2Lrc5.call(r361_currentGlyph, r359_id, r359_unicode);
                r250_dependencyProfile[r361_currentGlyph.name] = r250_getDependencyProfile(r361_currentGlyph);
                return r361_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.2', r250_xn$donothing$2Lrc0b));
        };
        var r253_anglearrow = function _r253_t20(r367_shape, r367_bar, r367_id, r367_unicode, r367_x1, r367_y1, r367_x2, r367_y2, r367_x3, r367_y3) {
            return function _r367_t2() {
                var _r369_t0 = this;
                var r369_currentGlyph = _r369_t0;
                if (!r369_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.3')
                    r250_glyphList.pop();
                r369_currentGlyph['set-width'](r253_arrowWidth);
                r369_currentGlyph.include(r367_shape(r367_x2, r367_y2, r367_x3, r367_y3, r253_arrowSize));
                r369_currentGlyph.include(r367_bar(r367_x1, r367_y1, r367_x2, r367_y2));
                r250_xn$save$2Lrc5.call(r369_currentGlyph, r367_id, r367_unicode);
                r250_dependencyProfile[r369_currentGlyph.name] = r250_getDependencyProfile(r369_currentGlyph);
                return r369_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.3', r250_xn$donothing$2Lrc0b));
        };
        r253_arrow(r253_ArrowShape, 'arrowleft', 8592, r253_arrowRSB, r250_symbolMid, r253_arrowSB, r250_symbolMid);
        r253_arrow(r253_ArrowShape, 'arrowup', 8593, r253_arrowMidX, r253_arrowBot, r253_arrowMidX, r253_arrowTop);
        r253_arrow(r253_ArrowShape, 'arrowright', 8594, r253_arrowSB, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
        r253_arrow(r253_ArrowShape, 'arrowdown', 8595, r253_arrowMidX, r253_arrowTop, r253_arrowMidX, r253_arrowBot);
        r253_arrow(r253_DashArrowShape, 'dasharrowleft', 8672, r253_arrowRSB, r250_symbolMid, r253_arrowSB, r250_symbolMid);
        r253_arrow(r253_DashArrowShape, 'dasharrowup', 8673, r253_arrowMidX, r253_arrowBot, r253_arrowMidX, r253_arrowTop);
        r253_arrow(r253_DashArrowShape, 'dasharrowright', 8674, r253_arrowSB, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
        r253_arrow(r253_DashArrowShape, 'dasharrowdown', 8675, r253_arrowMidX, r253_arrowTop, r253_arrowMidX, r253_arrowBot);
        r253_arrow(r253_HookArrowShape(1), 'hookarrowleft', 8617, r253_arrowRSB, r250_symbolMid, r253_arrowSB, r250_symbolMid);
        r253_arrow(r253_HookArrowShape(-1), 'hookarrowright', 8618, r253_arrowSB, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
        r253_arrow(r253_HookArrowShape(-1), 'hookarrowupleft', 10531, r253_arrowRSB, r253_arrowBot, r253_arrowSB, r253_arrowTop);
        r253_arrow(r253_HookArrowShape(1), 'hookarrowupright', 10532, r253_arrowSB, r253_arrowBot, r253_arrowRSB, r253_arrowTop);
        r253_arrow(r253_HookArrowShape(-1), 'hookarrowdownright', 10533, r253_arrowSB, r253_arrowTop, r253_arrowRSB, r253_arrowBot);
        r253_arrow(r253_HookArrowShape(1), 'hookarrowdownleft', 10534, r253_arrowRSB, r253_arrowTop, r253_arrowSB, r253_arrowBot);
        r253_anglearrow(r253_ArrowShape, function _r253_t21(r374_x1, r374_y1, r374_x2, r374_y2) {
            return r250_VBarLeft(r374_x1, r374_y1, r374_y2);
        }, 'arrow-up-angle-right', 8625, r253_arrowSB, r253_arrowBot, r253_arrowSB, r253_arrowTop - r253_arrowSize, r253_arrowRSB, r253_arrowTop - r253_arrowSize);
        r253_anglearrow(r253_ArrowShape, function _r253_t22(r375_x1, r375_y1, r375_x2, r375_y2) {
            return r250_VBarRight(r375_x1, r375_y1, r375_y2);
        }, 'arrow-up-angle-left', 8624, r253_arrowRSB, r253_arrowBot, r253_arrowRSB, r253_arrowTop - r253_arrowSize, r253_arrowSB, r253_arrowTop - r253_arrowSize);
        r253_anglearrow(r253_ArrowShape, function _r253_t23(r376_x1, r376_y1, r376_x2, r376_y2) {
            return r250_VBarLeft(r376_x1, r376_y1, r376_y2);
        }, 'arrow-down-angle-right', 8627, r253_arrowSB, r253_arrowTop, r253_arrowSB, r253_arrowBot + r253_arrowSize, r253_arrowRSB, r253_arrowBot + r253_arrowSize);
        r253_anglearrow(r253_ArrowShape, function _r253_t24(r377_x1, r377_y1, r377_x2, r377_y2) {
            return r250_VBarRight(r377_x1, r377_y1, r377_y2);
        }, 'arrow-down-angle-left', 8626, r253_arrowRSB, r253_arrowTop, r253_arrowRSB, r253_arrowBot + r253_arrowSize, r253_arrowSB, r253_arrowBot + r253_arrowSize);
        r253_arrow(r253_ArrowShape, 'hwarrowleft', null, r253_hwArrowRSB, r250_symbolMid, r253_arrowSB, r250_symbolMid, r250_WIDTH);
        r253_arrow(r253_ArrowShape, 'hwarrowright', null, r253_arrowSB, r250_symbolMid, r253_hwArrowRSB, r250_symbolMid, r250_WIDTH);
        r253_arrow(r253_ArrowShape, 'hwarrowup', null, r253_hwArrowMidX, r253_arrowBot, r253_hwArrowMidX, r253_arrowTop, r250_WIDTH);
        r253_arrow(r253_ArrowShape, 'hwarrowdown', null, r253_hwArrowMidX, r253_arrowTop, r253_hwArrowMidX, r253_arrowBot, r250_WIDTH);
        r253_arrow(r253_ArrowShape, 'arrowupleft', 8598, r253_arrowRSB, r253_arrowBot, r253_arrowSB, r253_arrowTop);
        r253_arrow(r253_ArrowShape, 'arrowupright', 8599, r253_arrowSB, r253_arrowBot, r253_arrowRSB, r253_arrowTop);
        r253_arrow(r253_ArrowShape, 'arrowdownright', 8600, r253_arrowSB, r253_arrowTop, r253_arrowRSB, r253_arrowBot);
        r253_arrow(r253_ArrowShape, 'arrowdownleft', 8601, r253_arrowRSB, r253_arrowTop, r253_arrowSB, r253_arrowBot);
        r253_arrow(r253_HalfArrowShape(r253_RHSHalfArrowHead), 'arrowleftHR', 8636, r253_arrowRSB, r250_symbolMid, r253_arrowSB, r250_symbolMid);
        r253_arrow(r253_HalfArrowShape(r253_LHSHalfArrowHead), 'arrowleftHL', 8637, r253_arrowRSB, r250_symbolMid, r253_arrowSB, r250_symbolMid);
        r253_arrow(r253_HalfArrowShape(r253_RHSHalfArrowHead), 'arrowupHR', 8638, r253_arrowMidX, r253_arrowBot, r253_arrowMidX, r253_arrowTop);
        r253_arrow(r253_HalfArrowShape(r253_LHSHalfArrowHead), 'arrowupHL', 8639, r253_arrowMidX, r253_arrowBot, r253_arrowMidX, r253_arrowTop);
        r253_arrow(r253_HalfArrowShape(r253_LHSHalfArrowHead), 'arrowrightHL', 8640, r253_arrowSB, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
        r253_arrow(r253_HalfArrowShape(r253_RHSHalfArrowHead), 'arrowrightHR', 8641, r253_arrowSB, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
        r253_arrow(r253_HalfArrowShape(r253_LHSHalfArrowHead), 'arrowdownHL', 8642, r253_arrowMidX, r253_arrowTop, r253_arrowMidX, r253_arrowBot);
        r253_arrow(r253_HalfArrowShape(r253_RHSHalfArrowHead), 'arrowdownHR', 8643, r253_arrowMidX, r253_arrowTop, r253_arrowMidX, r253_arrowBot);
        r253_arrow(r253_ThickArrowShape('white'), null, 8678, r253_arrowRSB, r250_symbolMid, r253_arrowSB, r250_symbolMid);
        r253_arrow(r253_ThickArrowShape('white'), null, 8679, r253_arrowMidX, r253_arrowBot, r253_arrowMidX, r253_arrowTop);
        r253_arrow(r253_ThickArrowShape('white'), null, 8680, r253_arrowSB, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
        r253_arrow(r253_ThickArrowShape('white'), null, 8681, r253_arrowMidX, r253_arrowTop, r253_arrowMidX, r253_arrowBot);
        r253_arrow(r253_ThickArrowShape('white'), null, 11008, r253_arrowSB, r253_arrowBot, r253_arrowRSB, r253_arrowTop);
        r253_arrow(r253_ThickArrowShape('white'), null, 11009, r253_arrowRSB, r253_arrowBot, r253_arrowSB, r253_arrowTop);
        r253_arrow(r253_ThickArrowShape('white'), null, 11010, r253_arrowSB, r253_arrowTop, r253_arrowRSB, r253_arrowBot);
        r253_arrow(r253_ThickArrowShape('white'), null, 11011, r253_arrowRSB, r253_arrowTop, r253_arrowSB, r253_arrowBot);
        r253_arrow(r253_ThickArrowShape('black'), null, 11013, r253_arrowRSB, r250_symbolMid, r253_arrowSB, r250_symbolMid);
        r253_arrow(r253_ThickArrowShape('black'), null, 11014, r253_arrowMidX, r253_arrowBot, r253_arrowMidX, r253_arrowTop);
        r253_arrow(r253_ThickArrowShape('black'), null, 10145, r253_arrowSB, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
        r253_arrow(r253_ThickArrowShape('black'), null, 11015, r253_arrowMidX, r253_arrowTop, r253_arrowMidX, r253_arrowBot);
        r253_arrow(r253_ThickArrowShape('black'), null, 11016, r253_arrowSB, r253_arrowBot, r253_arrowRSB, r253_arrowTop);
        r253_arrow(r253_ThickArrowShape('black'), null, 11017, r253_arrowRSB, r253_arrowBot, r253_arrowSB, r253_arrowTop);
        r253_arrow(r253_ThickArrowShape('black'), null, 11018, r253_arrowSB, r253_arrowTop, r253_arrowRSB, r253_arrowBot);
        r253_arrow(r253_ThickArrowShape('black'), null, 11019, r253_arrowRSB, r253_arrowTop, r253_arrowSB, r253_arrowBot);
        r253_arrow(r253_ArrowShape, 'arrowleftK', null, r253_arrowRSB, r250_symbolMid, r253_arrowSB + r253_fine, r250_symbolMid);
        r253_arrow(r253_ArrowShape, 'arrowrightK', null, r253_arrowSB, r250_symbolMid, r253_arrowRSB - r253_fine, r250_symbolMid);
        r253_arrow(r253_ArrowShape, 'arrowupK', null, r253_arrowMidX, r253_arrowBot, r253_arrowMidX, r253_arrowTop - r253_fine);
        r253_arrow(r253_ArrowShape, 'arrowdownK', null, r253_arrowMidX, r253_arrowTop, r253_arrowMidX, r253_arrowBot + r253_fine);
        r253_arrow(r253_ArrowShape, 'arrowleftSK', null, r253_arrowRSB - r253_fine / 2, r250_symbolMid, r253_arrowSB, r250_symbolMid);
        r253_arrow(r253_ArrowShape, 'arrowrightSK', null, r253_arrowSB + r253_fine / 2, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
        r253_arrow(r253_ArrowShape, 'arrowupSK', null, r253_arrowMidX, r253_arrowBot + r253_fine / 2, r253_arrowMidX, r253_arrowTop);
        r253_arrow(r253_ArrowShape, 'arrowdownSK', null, r253_arrowMidX, r253_arrowTop - r253_fine / 2, r253_arrowMidX, r253_arrowBot);
        r253_arrow(r253_ArrowShape, 'arrowupleftTK', null, r253_arrowRSB, r253_arrowBot, r253_arrowSB, r253_arrowTop - Math.max(r253_arrowWidth / 8, r253_fine * 1.5));
        r250_composite('arrowbarleft', r250_glyphs.arrowleftK, r250_VBar(r253_arrowSB, r250_symbolMid - r253_arrowSize, r250_symbolMid + r253_arrowSize, r253_fine), r250_xn$intounicode$5sIl(8676));
        r250_composite('arrowbarright', r250_glyphs.arrowrightK, r250_VBar(r253_arrowRSB, r250_symbolMid - r253_arrowSize, r250_symbolMid + r253_arrowSize, r253_fine), r250_xn$intounicode$5sIl(8677));
        r250_composite('arrowbarup', r250_glyphs.arrowupK, r250_HBar(r253_arrowMidX - r253_arrowSize, r253_arrowMidX + r253_arrowSize, r253_arrowTop, r253_fine), r250_xn$intounicode$5sIl(10514));
        r250_composite('arrowbardown', r250_glyphs.arrowdownK, r250_HBar(r253_arrowMidX - r253_arrowSize, r253_arrowMidX + r253_arrowSize, r253_arrowBot, r253_fine), r250_xn$intounicode$5sIl(10515));
        r250_composite('bararrowleft', r250_glyphs.arrowleftSK, r250_VBar(r253_arrowRSB, r250_symbolMid - r253_arrowSize, r250_symbolMid + r253_arrowSize, r253_fine), r250_xn$intounicode$5sIl(8612));
        r250_composite('bararrowright', r250_glyphs.arrowrightSK, r250_VBar(r253_arrowSB, r250_symbolMid - r253_arrowSize, r250_symbolMid + r253_arrowSize, r253_fine), r250_xn$intounicode$5sIl(8614));
        r250_composite('bararrowup', r250_glyphs.arrowupSK, r250_HBar(r253_arrowMidX - r253_arrowSize, r253_arrowMidX + r253_arrowSize, r253_arrowBot, r253_fine), r250_xn$intounicode$5sIl(8613));
        r250_composite('bararrowdown', r250_glyphs.arrowdownSK, r250_HBar(r253_arrowMidX - r253_arrowSize, r253_arrowMidX + r253_arrowSize, r253_arrowTop, r253_fine), r250_xn$intounicode$5sIl(8615));
        r250_composite(r250_glyphs.arrowupleftTK, r250_HBar(r253_arrowSB - r253_arrowSize / 2, r253_arrowRSB + r253_arrowSize / 2, r253_arrowTop, r253_fine), r250_xn$intounicode$5sIl(8632));
        var _r253_t25 = r253_doubleArrowStemWidth;
        (function (_r253_leti0) {
            var r378_dasw = _r253_leti0;
            return function () {
                r253_arrow(r253_DoubleArrowShape(r378_dasw), 'dblarrowleft', 8656, r253_arrowRSB, r250_symbolMid, r253_arrowSB, r250_symbolMid);
                r253_arrow(r253_DoubleArrowShape(r378_dasw), 'dblarrowright', 8658, r253_arrowSB, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
                r253_arrow(r253_DoubleArrowShape(r378_dasw), 'dblarrowup', 8657, r253_arrowMidX, r253_arrowBot, r253_arrowMidX, r253_arrowTop);
                r253_arrow(r253_DoubleArrowShape(r378_dasw), 'dblarrowdown', 8659, r253_arrowMidX, r253_arrowTop, r253_arrowMidX, r253_arrowBot);
                r253_arrow(r253_DoubleArrowShape(r378_dasw), 'dblhwarrowleft', null, r253_hwArrowRSB, r250_symbolMid, r253_arrowSB, r250_symbolMid, r250_WIDTH);
                r253_arrow(r253_DoubleArrowShape(r378_dasw), 'dblhwarrowright', null, r253_arrowSB, r250_symbolMid, r253_hwArrowRSB, r250_symbolMid, r250_WIDTH);
                r253_arrow(r253_DoubleArrowShape(r378_dasw), 'dblhwarrowup', null, r253_hwArrowMidX, r253_arrowBot, r253_hwArrowMidX, r253_arrowTop, r250_WIDTH);
                r253_arrow(r253_DoubleArrowShape(r378_dasw), 'dblhwarrowdown', null, r253_hwArrowMidX, r253_arrowTop, r253_hwArrowMidX, r253_arrowBot, r250_WIDTH);
                r253_arrow(r253_DoubleArrowShape(r378_dasw), 'dblarrowupleft', 8662, r253_arrowRSB, r253_arrowBot, r253_arrowSB, r253_arrowTop);
                r253_arrow(r253_DoubleArrowShape(r378_dasw), 'dblarrowupright', 8663, r253_arrowSB, r253_arrowBot, r253_arrowRSB, r253_arrowTop);
                r253_arrow(r253_DoubleArrowShape(r378_dasw), 'dblarrowdownright', 8664, r253_arrowSB, r253_arrowTop, r253_arrowRSB, r253_arrowBot);
                return r253_arrow(r253_DoubleArrowShape(r378_dasw), 'dblarrowdownleft', 8665, r253_arrowRSB, r253_arrowTop, r253_arrowSB, r253_arrowBot);
            }();
        }(_r253_t25));
        r253_doublearrow(r253_ArrowShape, 'arrowleftright', 8596, r253_arrowSB, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
        r253_doublearrow(r253_ArrowShape, 'arrowupdown', 8597, r253_arrowMidX, r253_arrowTop, r253_arrowMidX, r253_arrowBot);
        r253_doublearrow(r253_ArrowShape, 'arrowupleftdownright', 10529, r253_arrowSB, r253_arrowTop, r253_arrowRSB, r253_arrowBot);
        r253_doublearrow(r253_ArrowShape, 'arrowuprightdownleft', 10530, r253_arrowRSB, r253_arrowTop, r253_arrowSB, r253_arrowBot);
        var _r253_t28 = r253_doubleArrowStemWidth;
        (function (_r253_leti1) {
            var r381_dasw = _r253_leti1;
            return function () {
                r253_doublearrow(r253_DoubleArrowShape(r381_dasw), 'dblarrowleftright', 8660, r253_arrowSB, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
                return r253_doublearrow(r253_DoubleArrowShape(r381_dasw), 'dblarrowupdown', 8661, r253_arrowMidX, r253_arrowTop, r253_arrowMidX, r253_arrowBot);
            }();
        }(_r253_t28));
        r253_arrow(r253_dhArrowShape, 'dharrowleft', 8606, r253_arrowRSB, r250_symbolMid, r253_arrowSB, r250_symbolMid);
        r253_arrow(r253_dhArrowShape, 'dharrowright', 8608, r253_arrowSB, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
        r253_arrow(r253_dhArrowShape, 'dharrowup', 8607, r253_arrowMidX, r253_arrowBot, r253_arrowMidX, r253_arrowTop);
        r253_arrow(r253_dhArrowShape, 'dharrowdown', 8609, r253_arrowMidX, r253_arrowTop, r253_arrowMidX, r253_arrowBot);
        r253_arrow(r253_htArrowShape, 'htarrowleft', 8610, r253_arrowRSB, r250_symbolMid, r253_arrowSB, r250_symbolMid);
        r253_arrow(r253_htArrowShape, 'htarrowright', 8611, r253_arrowSB, r250_symbolMid, r253_arrowRSB, r250_symbolMid);
        r250_composite(r250_glyphs.arrowleft, r250_glyphs.arrSlashOver, r250_xn$intounicode$5sIl(8602));
        r250_composite(r250_glyphs.arrowright, r250_glyphs.arrSlashOver, r250_xn$intounicode$5sIl(8603));
        r250_composite(r250_glyphs.arrowleftright, r250_glyphs.arrSlashOver, r250_xn$intounicode$5sIl(8622));
        r250_composite(r250_glyphs.arrowleft, r250_glyphs.arrVStrokeOver, r250_xn$intounicode$5sIl(8695));
        r250_composite(r250_glyphs.arrowright, r250_glyphs.arrVStrokeOver, r250_xn$intounicode$5sIl(8696));
        r250_composite(r250_glyphs.arrowleftright, r250_glyphs.arrVStrokeOver, r250_xn$intounicode$5sIl(8697));
        r250_composite(r250_glyphs.arrowleft, r250_glyphs.arrDblVStrokeOver, r250_xn$intounicode$5sIl(8698));
        r250_composite(r250_glyphs.arrowright, r250_glyphs.arrDblVStrokeOver, r250_xn$intounicode$5sIl(8699));
        r250_composite(r250_glyphs.arrowleftright, r250_glyphs.arrDblVStrokeOver, r250_xn$intounicode$5sIl(8700));
        r250_composite(r250_glyphs.dblarrowleft, r250_glyphs.arrSlashOver, r250_xn$intounicode$5sIl(8653));
        r250_composite(r250_glyphs.dblarrowleftright, r250_glyphs.arrSlashOver, r250_xn$intounicode$5sIl(8654));
        r250_composite(r250_glyphs.dblarrowright, r250_glyphs.arrSlashOver, r250_xn$intounicode$5sIl(8655));
        (function () {
            var r385_hcDist = Math.max(r253_halfstroke * 5, r253_arrowWidth / 2);
            r250_vcombine(void 0, 8644, 'arrowright', 'arrowleft', r253_arrowSize * 1.75);
            r250_hcombine(void 0, 8645, 'arrowup', 'arrowdown', r385_hcDist);
            r250_vcombine(void 0, 8646, 'arrowleft', 'arrowright', r253_arrowSize * 1.75);
            r250_vcombine(void 0, 8647, 'arrowleft', 'arrowleft', r253_arrowSize * 1.75);
            r250_hcombine(void 0, 8648, 'arrowup', 'arrowup', r385_hcDist);
            r250_vcombine(void 0, 8649, 'arrowright', 'arrowright', r253_arrowSize * 1.75);
            r250_hcombine(void 0, 8650, 'arrowdown', 'arrowdown', r385_hcDist);
            r250_hcombine(void 0, 8693, 'arrowdown', 'arrowup', r385_hcDist);
            r250_vcombine(void 0, 8651, 'arrowleftHR', 'arrowrightHR', r253_arrowSize);
            r250_vcombine(void 0, 8652, 'arrowrightHL', 'arrowleftHL', r253_arrowSize);
            return r250_vcombine(void 0, 8633, 'arrowbarright', 'arrowbarleft', r253_arrowSize * 1.75);
        }());
        return [r253_ArrowShape];
    }();
    var r250_ArrowShape = _r250_t5[0];
    (function () {
        var r387_u, r387_LT, r387_LB, r387_RT, r387_RB, _r387_t6, _r387_t56;
        var r387_shapeWidth = r250_FULLWIDTH2;
        var r387_middleFW = r387_shapeWidth / 2;
        var r387_left = r1_mix(r250_MIDDLE, r250_SB, 1.1);
        var r387_right = r1_mix(r250_MIDDLE, r250_RIGHTSB, 1.1);
        var r387_squareRadius = (r387_right - r387_left) / 2;
        var r387_leftFW = r387_shapeWidth / 2 - (r250_MIDDLE - r387_left) * (r387_shapeWidth / r250_WIDTH);
        var r387_rightFW = r387_shapeWidth / 2 + (r250_MIDDLE - r387_left) * (r387_shapeWidth / r250_WIDTH);
        var r387_squareRadiusFW = (r387_rightFW - r387_leftFW) / 2;
        var r387_topFW = r250_symbolMid + r387_squareRadiusFW;
        var r387_bottomFW = r250_symbolMid - r387_squareRadiusFW;
        var r387_hollowScale = function _r387_t7(r388_w, r388_d, r388_s) {
            return (r388_w - r1_fallback(r388_s, r250_GEOMETRYSTROKE) * r1_fallback(r388_d, r250_WIDTH / r387_shapeWidth)) / r388_w;
        };
        var r387_hollow = function _r387_t8(r389_newid, r389_unicode, r389_oldid, r389_zx, r389_zy, r389_cx, r389_cy) {
            return r250_xn$createglyph$7Hrq(r389_newid, function _r389_t2() {
                var _r391_t0 = this;
                var r391_currentGlyph = _r391_t0;
                r391_currentGlyph['depends-on'](r250_glyphs[r389_oldid]);
                var r391_isWide = r250_glyphs[r389_oldid].advanceWidth > r250_WIDTH;
                var r391_zoom = r387_hollowScale(r387_squareRadius, r250_WIDTH / r250_glyphs[r389_oldid].advanceWidth);
                r391_currentGlyph.include(r250_difference(r250_xn$createglyph$7Hrq(function _r391_t2() {
                    var _r395_t0 = this;
                    var r395_currentGlyph = _r395_t0;
                    r250_includeGlyphPart(r395_currentGlyph, r250_glyphs, r389_oldid);
                    if (r391_isWide)
                        r395_currentGlyph.include(r387_UnFullWidthify);
                    return void 0;
                }), r250_xn$createglyph$7Hrq(function _r391_t3() {
                    var _r399_t0 = this;
                    var r399_currentGlyph = _r399_t0;
                    r250_includeGlyphPart(r399_currentGlyph, r250_glyphs, r389_oldid);
                    if (r391_isWide)
                        r399_currentGlyph.include(r387_UnFullWidthify);
                    r399_currentGlyph.include(r250_FlipAround(r1_fallback(r389_cx, r250_MIDDLE), r1_fallback(r389_cy, r250_symbolMid), r1_fallback(r389_zx, r391_zoom), r1_fallback(r389_zy, r389_zx, r391_zoom)));
                    return void 0;
                })));
                if (r391_isWide)
                    r391_currentGlyph.include(r387_FullWidthify);
                r391_currentGlyph.include(r250_xn$intounicode$5sIl(r389_unicode));
                return void 0;
            });
        };
        var r387_hollowWithCenter = function _r387_t9(r405_newid, r405_unicode, r405_oldid, r405_zx, r405_zy, r405_cx, r405_cy) {
            return r250_xn$createglyph$7Hrq(r405_newid, function _r405_t2() {
                var _r407_t0 = this;
                var r407_currentGlyph = _r407_t0;
                r407_currentGlyph['depends-on'](r250_glyphs[r405_oldid]);
                var r407_isWide = r250_glyphs[r405_oldid].advanceWidth > r250_WIDTH;
                var r407_zoom = r387_hollowScale(r387_squareRadius, r250_WIDTH / r250_glyphs[r405_oldid].advanceWidth);
                var r407_zx1 = r1_mix(r1_fallback(r405_zx, r407_zoom), 1, 0.25);
                var r407_zx2 = r1_mix(r407_zx1, 0, 0.5);
                var r407_zy1 = r1_mix(r1_fallback(r405_zy, r405_zx, r407_zoom), 1, 0.25);
                var r407_zy2 = r1_mix(r407_zy1, 0, 0.5);
                r407_currentGlyph.include(r250_union(r250_difference(r250_xn$createglyph$7Hrq(function _r407_t2() {
                    var _r411_t0 = this;
                    var r411_currentGlyph = _r411_t0;
                    r250_includeGlyphPart(r411_currentGlyph, r250_glyphs, r405_oldid);
                    if (r407_isWide)
                        r411_currentGlyph.include(r387_UnFullWidthify);
                    return void 0;
                }), r250_xn$createglyph$7Hrq(function _r407_t3() {
                    var _r415_t0 = this;
                    var r415_currentGlyph = _r415_t0;
                    r250_includeGlyphPart(r415_currentGlyph, r250_glyphs, r405_oldid);
                    if (r407_isWide)
                        r415_currentGlyph.include(r387_UnFullWidthify);
                    r415_currentGlyph.include(r250_FlipAround(r1_fallback(r405_cx, r250_MIDDLE), r1_fallback(r405_cy, r250_symbolMid), r407_zx1, r407_zy1));
                    return void 0;
                })), r250_xn$createglyph$7Hrq(function _r407_t4() {
                    var _r420_t0 = this;
                    var r420_currentGlyph = _r420_t0;
                    r250_includeGlyphPart(r420_currentGlyph, r250_glyphs, r405_oldid);
                    if (r407_isWide)
                        r420_currentGlyph.include(r387_UnFullWidthify);
                    r420_currentGlyph.include(r250_FlipAround(r1_fallback(r405_cx, r250_MIDDLE), r1_fallback(r405_cy, r250_symbolMid), r407_zx2, r407_zy2));
                    return void 0;
                })));
                if (r407_isWide)
                    r407_currentGlyph.include(r387_FullWidthify);
                r407_currentGlyph.include(r250_xn$intounicode$5sIl(r405_unicode));
                return void 0;
            });
        };
        var r387_doubleHollow = function _r387_t10(r426_newid, r426_unicode, r426_oldid, r426_zx, r426_zy, r426_cx, r426_cy) {
            return r250_xn$createglyph$7Hrq(r426_newid, function _r426_t2() {
                var _r428_t0 = this;
                var r428_currentGlyph = _r428_t0;
                r428_currentGlyph['depends-on'](r250_glyphs[r426_oldid]);
                var r428_isWide = r250_glyphs[r426_oldid].advanceWidth > r250_WIDTH;
                var r428_zoom = r387_hollowScale(r387_squareRadius, r250_WIDTH / r250_glyphs[r426_oldid].advanceWidth);
                var r428_zx1 = r1_mix(r1_fallback(r426_zx, r428_zoom), 1, 0.25);
                var r428_zx2 = r1_mix(r428_zx1, 0, 0.5) + (1 - r428_zx1) / 2;
                var r428_zx3 = r428_zx2 - (1 - r428_zx1);
                var r428_zy1 = r1_mix(r1_fallback(r426_zy, r426_zx, r428_zoom), 1, 0.25);
                var r428_zy2 = r1_mix(r428_zy1, 0, 0.5) + (1 - r428_zy1) / 2;
                var r428_zy3 = r428_zy2 - (1 - r428_zy1);
                r428_currentGlyph.include(r250_union(r250_difference(r250_xn$createglyph$7Hrq(function _r428_t2() {
                    var _r432_t0 = this;
                    var r432_currentGlyph = _r432_t0;
                    r250_includeGlyphPart(r432_currentGlyph, r250_glyphs, r426_oldid);
                    if (r428_isWide)
                        r432_currentGlyph.include(r387_UnFullWidthify);
                    return void 0;
                }), r250_xn$createglyph$7Hrq(function _r428_t3() {
                    var _r436_t0 = this;
                    var r436_currentGlyph = _r436_t0;
                    r250_includeGlyphPart(r436_currentGlyph, r250_glyphs, r426_oldid);
                    if (r428_isWide)
                        r436_currentGlyph.include(r387_UnFullWidthify);
                    r436_currentGlyph.include(r250_FlipAround(r1_fallback(r426_cx, r250_MIDDLE), r1_fallback(r426_cy, r250_symbolMid), r428_zx1, r428_zy1));
                    return void 0;
                })), r250_difference(r250_xn$createglyph$7Hrq(function _r428_t4() {
                    var _r441_t0 = this;
                    var r441_currentGlyph = _r441_t0;
                    r250_includeGlyphPart(r441_currentGlyph, r250_glyphs, r426_oldid);
                    if (r428_isWide)
                        r441_currentGlyph.include(r387_UnFullWidthify);
                    r441_currentGlyph.include(r250_FlipAround(r1_fallback(r426_cx, r250_MIDDLE), r1_fallback(r426_cy, r250_symbolMid), r428_zx2, r428_zy2));
                    return void 0;
                }), r250_xn$createglyph$7Hrq(function _r428_t5() {
                    var _r446_t0 = this;
                    var r446_currentGlyph = _r446_t0;
                    r250_includeGlyphPart(r446_currentGlyph, r250_glyphs, r426_oldid);
                    if (r428_isWide)
                        r446_currentGlyph.include(r387_UnFullWidthify);
                    r446_currentGlyph.include(r250_FlipAround(r1_fallback(r426_cx, r250_MIDDLE), r1_fallback(r426_cy, r250_symbolMid), r428_zx3, r428_zy3));
                    return void 0;
                }))));
                if (r428_isWide)
                    r428_currentGlyph.include(r387_FullWidthify);
                r428_currentGlyph.include(r250_xn$intounicode$5sIl(r426_unicode));
                return void 0;
            });
        };
        var r387_resized = function _r387_t11(r452_newid, r452_unicode, r452_id, r452_x, r452_y, r452_s, r452_sy) {
            return r250_xn$createglyph$7Hrq(r452_newid, function _r452_t2() {
                var _r454_t0 = this;
                var r454_currentGlyph = _r454_t0;
                r250_includeGlyphPart(r454_currentGlyph, r250_glyphs, r452_id, r250_AS_BASE);
                r454_currentGlyph.include(r387_UnFullWidthify);
                r454_currentGlyph.include(r250_FlipAround(r452_x, r452_y, r452_s, r1_fallback(r452_sy, r452_s)));
                r454_currentGlyph.include(r387_FullWidthify);
                r250_xn$save$2Lrc5.call(r454_currentGlyph, r1_fallback(r452_newid, (r452_s < 1 ? 'small' : 'large') + r452_id), r452_unicode);
                return void 0;
            });
        };
        var r387_FullWidthify = function _r387_t12() {
            var _r461_t0 = this;
            var r461_currentGlyph = _r461_t0;
            r461_currentGlyph['apply-transform'](r250_Upright(), true);
            r461_currentGlyph['apply-transform'](r250_Translate(-r250_MIDDLE, -r250_symbolMid), true);
            r461_currentGlyph['apply-transform'](r250_Scale(r387_shapeWidth / r250_WIDTH), true);
            r461_currentGlyph['apply-transform'](r250_Translate(r387_shapeWidth / 2, r250_symbolMid), true);
            r461_currentGlyph['apply-transform'](r250_Italify(), true);
            r461_currentGlyph['set-width'](r387_shapeWidth);
            return void 0;
        };
        var r387_UnFullWidthify = function _r387_t13() {
            var _r469_t0 = this;
            var r469_currentGlyph = _r469_t0;
            r469_currentGlyph['apply-transform'](r250_Upright(), true);
            r469_currentGlyph['apply-transform'](r250_Translate(-r387_shapeWidth / 2, -r250_symbolMid), true);
            r469_currentGlyph['apply-transform'](r250_Scale(r250_WIDTH / r387_shapeWidth), true);
            r469_currentGlyph['apply-transform'](r250_Translate(r250_MIDDLE, r250_symbolMid), true);
            r469_currentGlyph['apply-transform'](r250_Italify(), true);
            r469_currentGlyph['set-width'](r250_WIDTH);
            return void 0;
        };
        (function _r387_t14() {
            var _r477_t0 = this;
            var r477_currentGlyph = _r477_t0;
            if (!r477_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.4')
                r250_glyphList.pop();
            r477_currentGlyph['start-from'](r387_left, r250_symbolMid + r387_squareRadius);
            r477_currentGlyph['line-to'](r387_right, r250_symbolMid + r387_squareRadius);
            r477_currentGlyph['line-to'](r387_right, r250_symbolMid - r387_squareRadius);
            r477_currentGlyph['line-to'](r387_left, r250_symbolMid - r387_squareRadius);
            r477_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r477_currentGlyph, 'blacksquare', 9632);
            r250_dependencyProfile[r477_currentGlyph.name] = r250_getDependencyProfile(r477_currentGlyph);
            return r477_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.4', r250_xn$donothing$2Lrc0b)));
        (function _r387_t15() {
            var _r485_t0 = this;
            var r485_currentGlyph = _r485_t0;
            if (!r485_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.5')
                r250_glyphList.pop();
            var r485_r = r387_squareRadius * r1_designParameters.geometric_small_x;
            r485_currentGlyph['start-from'](r250_MIDDLE - r485_r, r250_symbolMid + r485_r);
            r485_currentGlyph['line-to'](r250_MIDDLE + r485_r, r250_symbolMid + r485_r);
            r485_currentGlyph['line-to'](r250_MIDDLE + r485_r, r250_symbolMid - r485_r);
            r485_currentGlyph['line-to'](r250_MIDDLE - r485_r, r250_symbolMid - r485_r);
            r485_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r485_currentGlyph, 'smallblacksquare', 9642);
            r250_dependencyProfile[r485_currentGlyph.name] = r250_getDependencyProfile(r485_currentGlyph);
            return r485_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.5', r250_xn$donothing$2Lrc0b)));
        (function _r387_t16() {
            var _r493_t0 = this;
            var r493_currentGlyph = _r493_t0;
            if (!r493_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.6')
                r250_glyphList.pop();
            r493_currentGlyph['start-from'](r387_right, r250_symbolMid + r387_squareRadius);
            r493_currentGlyph['line-to'](r387_right, r250_symbolMid - r387_squareRadius);
            r493_currentGlyph['line-to'](r387_left, r250_symbolMid - r387_squareRadius);
            r493_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r493_currentGlyph, 'blacktrianglerb', 9698);
            r250_dependencyProfile[r493_currentGlyph.name] = r250_getDependencyProfile(r493_currentGlyph);
            return r493_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.6', r250_xn$donothing$2Lrc0b)));
        (function _r387_t17() {
            var _r500_t0 = this;
            var r500_currentGlyph = _r500_t0;
            if (!r500_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.7')
                r250_glyphList.pop();
            r500_currentGlyph['start-from'](r387_left, r250_symbolMid + r387_squareRadius);
            r500_currentGlyph['line-to'](r387_right, r250_symbolMid - r387_squareRadius);
            r500_currentGlyph['line-to'](r387_left, r250_symbolMid - r387_squareRadius);
            r500_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r500_currentGlyph, 'blacktrianglelb', 9699);
            r250_dependencyProfile[r500_currentGlyph.name] = r250_getDependencyProfile(r500_currentGlyph);
            return r500_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.7', r250_xn$donothing$2Lrc0b)));
        (function _r387_t18() {
            var _r507_t0 = this;
            var r507_currentGlyph = _r507_t0;
            if (!r507_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.8')
                r250_glyphList.pop();
            r507_currentGlyph['start-from'](r387_left, r250_symbolMid + r387_squareRadius);
            r507_currentGlyph['line-to'](r387_right, r250_symbolMid + r387_squareRadius);
            r507_currentGlyph['line-to'](r387_left, r250_symbolMid - r387_squareRadius);
            r507_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r507_currentGlyph, 'blacktrianglelt', 9700);
            r250_dependencyProfile[r507_currentGlyph.name] = r250_getDependencyProfile(r507_currentGlyph);
            return r507_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.8', r250_xn$donothing$2Lrc0b)));
        (function _r387_t19() {
            var _r514_t0 = this;
            var r514_currentGlyph = _r514_t0;
            if (!r514_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.9')
                r250_glyphList.pop();
            r514_currentGlyph['start-from'](r387_left, r250_symbolMid + r387_squareRadius);
            r514_currentGlyph['line-to'](r387_right, r250_symbolMid + r387_squareRadius);
            r514_currentGlyph['line-to'](r387_right, r250_symbolMid - r387_squareRadius);
            r514_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r514_currentGlyph, 'blacktrianglert', 9701);
            r250_dependencyProfile[r514_currentGlyph.name] = r250_getDependencyProfile(r514_currentGlyph);
            return r514_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.9', r250_xn$donothing$2Lrc0b)));
        (function _r387_t20() {
            var _r521_t0 = this;
            var r521_currentGlyph = _r521_t0;
            if (!r521_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.10')
                r250_glyphList.pop();
            r521_currentGlyph['start-from'](r387_left, r250_symbolMid + r387_squareRadius / 1.5);
            r521_currentGlyph['line-to'](r387_right, r250_symbolMid + r387_squareRadius / 1.5);
            r521_currentGlyph['line-to'](r387_right, r250_symbolMid - r387_squareRadius / 1.5);
            r521_currentGlyph['line-to'](r387_left, r250_symbolMid - r387_squareRadius / 1.5);
            r521_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r521_currentGlyph, 'blackrectangle', 9644);
            r250_dependencyProfile[r521_currentGlyph.name] = r250_getDependencyProfile(r521_currentGlyph);
            return r521_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.10', r250_xn$donothing$2Lrc0b)));
        (function _r387_t21() {
            var _r529_t0 = this;
            var r529_currentGlyph = _r529_t0;
            if (!r529_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.11')
                r250_glyphList.pop();
            var r529_skew = r387_squareRadius * 1 / 4;
            r529_currentGlyph['start-from'](r387_left + r529_skew, r250_symbolMid + r387_squareRadius / 1.5);
            r529_currentGlyph['line-to'](r387_right + r529_skew, r250_symbolMid + r387_squareRadius / 1.5);
            r529_currentGlyph['line-to'](r387_right - r529_skew, r250_symbolMid - r387_squareRadius / 1.5);
            r529_currentGlyph['line-to'](r387_left - r529_skew, r250_symbolMid - r387_squareRadius / 1.5);
            r529_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r529_currentGlyph, 'blackparallelogram', 9648);
            r250_dependencyProfile[r529_currentGlyph.name] = r250_getDependencyProfile(r529_currentGlyph);
            return r529_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.11', r250_xn$donothing$2Lrc0b)));
        (function _r387_t22() {
            var _r537_t0 = this;
            var r537_currentGlyph = _r537_t0;
            if (!r537_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.12')
                r250_glyphList.pop();
            var r537_skew = r387_squareRadius * 1 / 4;
            var r537_w = r250_GEOMETRYSTROKE * (r250_WIDTH / r387_shapeWidth);
            r537_currentGlyph['set-width'](r387_shapeWidth);
            r537_currentGlyph.include(r250_intersection(r250_glyphs.blackparallelogram, r250_xn$createglyph$7Hrq(function _r537_t2() {
                var _r541_t0 = this;
                var r541_currentGlyph = _r541_t0;
                r541_currentGlyph.include(r250_dispiro(r250_widths.rhs(r537_w), r250_flat(r387_left + r537_skew, r250_symbolMid + r387_squareRadius / 1.5), r250_curl(r387_right + r537_skew, r250_symbolMid + r387_squareRadius / 1.5)));
                r541_currentGlyph.include(r250_dispiro(r250_widths.rhs(r537_w), r250_flat(r387_right + r537_skew, r250_symbolMid + r387_squareRadius / 1.5), r250_curl(r387_right - r537_skew, r250_symbolMid - r387_squareRadius / 1.5)));
                r541_currentGlyph.include(r250_dispiro(r250_widths.rhs(r537_w), r250_flat(r387_right - r537_skew, r250_symbolMid - r387_squareRadius / 1.5), r250_curl(r387_left - r537_skew, r250_symbolMid - r387_squareRadius / 1.5)));
                r541_currentGlyph.include(r250_dispiro(r250_widths.rhs(r537_w), r250_flat(r387_left - r537_skew, r250_symbolMid - r387_squareRadius / 1.5), r250_curl(r387_left + r537_skew, r250_symbolMid + r387_squareRadius / 1.5)));
                r541_currentGlyph.include(r387_FullWidthify);
                return void 0;
            })));
            r250_xn$save$2Lrc5.call(r537_currentGlyph, 'whiteparallelogram', 9649);
            r250_dependencyProfile[r537_currentGlyph.name] = r250_getDependencyProfile(r537_currentGlyph);
            return r537_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.12', r250_xn$donothing$2Lrc0b)));
        (function _r387_t23() {
            var _r549_t0 = this;
            var r549_currentGlyph = _r549_t0;
            if (!r549_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.13')
                r250_glyphList.pop();
            r549_currentGlyph['start-from'](r387_left, r250_symbolMid + r387_squareRadius * 1.5);
            r549_currentGlyph['line-to'](r387_right, r250_symbolMid + r387_squareRadius * 1.5);
            r549_currentGlyph['line-to'](r387_right, r250_symbolMid - r387_squareRadius * 1.5);
            r549_currentGlyph['line-to'](r387_left, r250_symbolMid - r387_squareRadius * 1.5);
            r549_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r549_currentGlyph, 'blacklongrectangle', 9646);
            r250_dependencyProfile[r549_currentGlyph.name] = r250_getDependencyProfile(r549_currentGlyph);
            return r549_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.13', r250_xn$donothing$2Lrc0b)));
        var r387_triangleOvershoot = 2 / Math.sqrt(3);
        (function _r387_t24() {
            var _r557_t0 = this;
            var r557_currentGlyph = _r557_t0;
            if (!r557_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.14')
                r250_glyphList.pop();
            r557_currentGlyph['start-from'](r250_MIDDLE, r250_symbolMid + r387_squareRadius);
            r557_currentGlyph['line-to'](r1_mix(r250_MIDDLE, r387_right, r387_triangleOvershoot), r250_symbolMid - r387_squareRadius);
            r557_currentGlyph['line-to'](r1_mix(r250_MIDDLE, r387_left, r387_triangleOvershoot), r250_symbolMid - r387_squareRadius);
            r557_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r557_currentGlyph, 'blacktriangleup', 9650);
            r250_dependencyProfile[r557_currentGlyph.name] = r250_getDependencyProfile(r557_currentGlyph);
            return r557_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.14', r250_xn$donothing$2Lrc0b)));
        (function _r387_t25() {
            var _r564_t0 = this;
            var r564_currentGlyph = _r564_t0;
            if (!r564_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.15')
                r250_glyphList.pop();
            r564_currentGlyph['start-from'](r250_MIDDLE, r250_symbolMid - r387_squareRadius);
            r564_currentGlyph['line-to'](r1_mix(r250_MIDDLE, r387_left, r387_triangleOvershoot), r250_symbolMid + r387_squareRadius);
            r564_currentGlyph['line-to'](r1_mix(r250_MIDDLE, r387_right, r387_triangleOvershoot), r250_symbolMid + r387_squareRadius);
            r564_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r564_currentGlyph, 'blacktriangledown', 9660);
            r250_dependencyProfile[r564_currentGlyph.name] = r250_getDependencyProfile(r564_currentGlyph);
            return r564_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.15', r250_xn$donothing$2Lrc0b)));
        (function _r387_t26() {
            var _r571_t0 = this;
            var r571_currentGlyph = _r571_t0;
            if (!r571_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.16')
                r250_glyphList.pop();
            r571_currentGlyph['start-from'](r387_left, r250_symbolMid);
            r571_currentGlyph['line-to'](r387_right, r250_symbolMid - r387_squareRadius * r387_triangleOvershoot);
            r571_currentGlyph['line-to'](r387_right, r250_symbolMid + r387_squareRadius * r387_triangleOvershoot);
            r571_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r571_currentGlyph, 'blacktriangleleft', 9664);
            r250_dependencyProfile[r571_currentGlyph.name] = r250_getDependencyProfile(r571_currentGlyph);
            return r571_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.16', r250_xn$donothing$2Lrc0b)));
        (function _r387_t27() {
            var _r578_t0 = this;
            var r578_currentGlyph = _r578_t0;
            if (!r578_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.17')
                r250_glyphList.pop();
            r578_currentGlyph['start-from'](r387_right, r250_symbolMid);
            r578_currentGlyph['line-to'](r387_left, r250_symbolMid + r387_squareRadius * r387_triangleOvershoot);
            r578_currentGlyph['line-to'](r387_left, r250_symbolMid - r387_squareRadius * r387_triangleOvershoot);
            r578_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r578_currentGlyph, 'blacktriangleright', 9654);
            r250_dependencyProfile[r578_currentGlyph.name] = r250_getDependencyProfile(r578_currentGlyph);
            return r578_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.17', r250_xn$donothing$2Lrc0b)));
        (function _r387_t28() {
            var _r585_t0 = this;
            var r585_currentGlyph = _r585_t0;
            if (!r585_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.18')
                r250_glyphList.pop();
            r585_currentGlyph['start-from'](r387_left, r250_symbolMid);
            r585_currentGlyph['line-to'](r387_right, r250_symbolMid - r387_squareRadius * r387_triangleOvershoot * 0.618);
            r585_currentGlyph['line-to'](r387_right, r250_symbolMid + r387_squareRadius * r387_triangleOvershoot * 0.618);
            r585_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r585_currentGlyph, 'thinblacktriangleleft', 9668);
            r250_dependencyProfile[r585_currentGlyph.name] = r250_getDependencyProfile(r585_currentGlyph);
            return r585_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.18', r250_xn$donothing$2Lrc0b)));
        (function _r387_t29() {
            var _r592_t0 = this;
            var r592_currentGlyph = _r592_t0;
            if (!r592_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.19')
                r250_glyphList.pop();
            r592_currentGlyph['start-from'](r387_right, r250_symbolMid);
            r592_currentGlyph['line-to'](r387_left, r250_symbolMid + r387_squareRadius * r387_triangleOvershoot * 0.618);
            r592_currentGlyph['line-to'](r387_left, r250_symbolMid - r387_squareRadius * r387_triangleOvershoot * 0.618);
            r592_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r592_currentGlyph, 'thinblacktriangleright', 9658);
            r250_dependencyProfile[r592_currentGlyph.name] = r250_getDependencyProfile(r592_currentGlyph);
            return r592_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.19', r250_xn$donothing$2Lrc0b)));
        (function _r387_t30() {
            var _r599_t0 = this;
            var r599_currentGlyph = _r599_t0;
            if (!r599_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.20')
                r250_glyphList.pop();
            r599_currentGlyph['start-from'](r250_MIDDLE, r250_symbolMid + r387_squareRadius);
            r599_currentGlyph['line-to'](r387_right, r250_symbolMid);
            r599_currentGlyph['line-to'](r250_MIDDLE, r250_symbolMid - r387_squareRadius);
            r599_currentGlyph['line-to'](r387_left, r250_symbolMid);
            r250_xn$save$2Lrc5.call(r599_currentGlyph, 'hwblackdiamond');
            r599_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r599_currentGlyph, 'blackdiamond', 9670);
            r250_dependencyProfile[r599_currentGlyph.name] = r250_getDependencyProfile(r599_currentGlyph);
            return r599_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.20', r250_xn$donothing$2Lrc0b)));
        (function _r387_t31() {
            var _r608_t0 = this;
            var r608_currentGlyph = _r608_t0;
            if (!r608_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.21')
                r250_glyphList.pop();
            r608_currentGlyph['start-from'](r250_MIDDLE, r250_symbolMid + r387_squareRadius);
            r608_currentGlyph['line-to'](r1_mix(r250_MIDDLE, r387_right, 2 / 3), r250_symbolMid);
            r608_currentGlyph['line-to'](r250_MIDDLE, r250_symbolMid - r387_squareRadius);
            r608_currentGlyph['line-to'](r1_mix(r250_MIDDLE, r387_left, 2 / 3), r250_symbolMid);
            r250_xn$save$2Lrc5.call(r608_currentGlyph, 'hwBlackLonzenge');
            r608_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r608_currentGlyph, 'blackLonzenge', 10731);
            r250_dependencyProfile[r608_currentGlyph.name] = r250_getDependencyProfile(r608_currentGlyph);
            return r608_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.21', r250_xn$donothing$2Lrc0b)));
        (function _r387_t32() {
            var _r617_t0 = this;
            var r617_currentGlyph = _r617_t0;
            if (!r617_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.22')
                r250_glyphList.pop();
            var r617_w = r250_GEOMETRYSTROKE * (r250_WIDTH / r387_shapeWidth);
            r617_currentGlyph['set-width'](r387_shapeWidth);
            r617_currentGlyph.include(r250_intersection(r250_glyphs.blackLonzenge, r250_xn$createglyph$7Hrq(function _r617_t2() {
                var _r621_t0 = this;
                var r621_currentGlyph = _r621_t0;
                r621_currentGlyph.include(r250_dispiro(r250_widths.rhs(r617_w), r250_flat(r250_MIDDLE, r250_symbolMid + r387_squareRadius), r250_curl(r1_mix(r250_MIDDLE, r387_right, 2 / 3), r250_symbolMid)));
                r621_currentGlyph.include(r250_dispiro(r250_widths.rhs(r617_w), r250_flat(r1_mix(r250_MIDDLE, r387_right, 2 / 3), r250_symbolMid), r250_curl(r250_MIDDLE, r250_symbolMid - r387_squareRadius)));
                r621_currentGlyph.include(r250_dispiro(r250_widths.rhs(r617_w), r250_flat(r250_MIDDLE, r250_symbolMid - r387_squareRadius), r250_curl(r1_mix(r250_MIDDLE, r387_left, 2 / 3), r250_symbolMid)));
                r621_currentGlyph.include(r250_dispiro(r250_widths.rhs(r617_w), r250_flat(r1_mix(r250_MIDDLE, r387_left, 2 / 3), r250_symbolMid), r250_curl(r250_MIDDLE, r250_symbolMid + r387_squareRadius)));
                r621_currentGlyph.include(r387_FullWidthify);
                return void 0;
            })));
            r250_xn$save$2Lrc5.call(r617_currentGlyph, 'whiteLonzenge', 9674);
            r250_dependencyProfile[r617_currentGlyph.name] = r250_getDependencyProfile(r617_currentGlyph);
            return r617_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.22', r250_xn$donothing$2Lrc0b)));
        (function _r387_t33() {
            var _r629_t0 = this;
            var r629_currentGlyph = _r629_t0;
            if (!r629_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.23')
                r250_glyphList.pop();
            r629_currentGlyph.include(r250_markset.plus);
            r629_currentGlyph.include(r250_xn$spirooutline$1aao(r250_g4(r250_MIDDLE, r250_symbolMid + r387_squareRadius + r250_O), r250_g4(r387_left - r250_O, r250_symbolMid), r250_g4(r250_MIDDLE, r250_symbolMid - r387_squareRadius - r250_O), r250_g4(r387_right + r250_O, r250_symbolMid), r250_close()));
            r629_currentGlyph['reverse-last']();
            r250_xn$save$2Lrc5.call(r629_currentGlyph, 'hwblackcircleO');
            r250_dependencyProfile[r629_currentGlyph.name] = r250_getDependencyProfile(r629_currentGlyph);
            return r629_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.23', r250_xn$donothing$2Lrc0b)));
        (function _r387_t34() {
            var _r635_t0 = this;
            var r635_currentGlyph = _r635_t0;
            if (!r635_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.24')
                r250_glyphList.pop();
            r635_currentGlyph.include(r250_markset.plus);
            r635_currentGlyph.include(r250_xn$spirooutline$1aao(r250_g4(r250_MIDDLE, r250_symbolMid + r387_squareRadius), r250_g4(r387_left, r250_symbolMid), r250_g4(r250_MIDDLE, r250_symbolMid - r387_squareRadius), r250_g4(r387_right, r250_symbolMid), r250_close()));
            r635_currentGlyph['reverse-last']();
            r250_xn$save$2Lrc5.call(r635_currentGlyph, 'hwblackcircle');
            r635_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r635_currentGlyph, 'blackcircle', 9679);
            r250_dependencyProfile[r635_currentGlyph.name] = r250_getDependencyProfile(r635_currentGlyph);
            return r635_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.24', r250_xn$donothing$2Lrc0b)));
        (function _r387_t35() {
            var _r643_t0 = this;
            var r643_currentGlyph = _r643_t0;
            if (!r643_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.25')
                r250_glyphList.pop();
            r643_currentGlyph.include(r250_xn$spirooutline$1aao(r250_g4(r250_MIDDLE, r250_symbolMid + r387_squareRadius * r1_designParameters.geometric_small_x), r250_g4(r250_MIDDLE - r387_squareRadius * r1_designParameters.geometric_small_x, r250_symbolMid), r250_g4(r250_MIDDLE, r250_symbolMid - r387_squareRadius * r1_designParameters.geometric_small_x), r250_g4(r250_MIDDLE + r387_squareRadius * r1_designParameters.geometric_small_x, r250_symbolMid), r250_close()));
            r643_currentGlyph['reverse-last']();
            r250_xn$save$2Lrc5.call(r643_currentGlyph, 'hwsmallblackcircle');
            r643_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r643_currentGlyph, 'smallblackcircle');
            r250_dependencyProfile[r643_currentGlyph.name] = r250_getDependencyProfile(r643_currentGlyph);
            return r643_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.25', r250_xn$donothing$2Lrc0b)));
        (function _r387_t36() {
            var _r650_t0 = this;
            var r650_currentGlyph = _r650_t0;
            if (!r650_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.26')
                r250_glyphList.pop();
            r650_currentGlyph.include(r250_xn$spirooutline$1aao(r250_g4(r250_MIDDLE, r250_symbolMid + r387_squareRadius * r1_designParameters.geometric_large_x), r250_g4(r250_MIDDLE - r387_squareRadius * r1_designParameters.geometric_large_x, r250_symbolMid), r250_g4(r250_MIDDLE, r250_symbolMid - r387_squareRadius * r1_designParameters.geometric_large_x), r250_g4(r250_MIDDLE + r387_squareRadius * r1_designParameters.geometric_large_x, r250_symbolMid), r250_close()));
            r650_currentGlyph['reverse-last']();
            r250_xn$save$2Lrc5.call(r650_currentGlyph, 'hwbigblackcircle');
            r650_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r650_currentGlyph, 'bigblackcircle');
            r250_dependencyProfile[r650_currentGlyph.name] = r250_getDependencyProfile(r650_currentGlyph);
            return r650_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.26', r250_xn$donothing$2Lrc0b)));
        var _r387_t37 = [
            {
                'sides': 5,
                'skip': 2,
                'name': 'blackstar',
                'unicode': 9733,
                'overflow': 1.1,
                'phase': 0
            },
            {
                'sides': 5,
                'skip': 1,
                'name': 'blackpentagon',
                'unicode': 11039,
                'overflow': 1.05,
                'phase': 0
            },
            {
                'sides': 6,
                'skip': 1,
                'name': 'blackhexagon',
                'unicode': 11042,
                'overflow': 1.05,
                'phase': 0
            },
            {
                'sides': 5,
                'skip': 1,
                'name': 'rhblackpentagon',
                'unicode': 11091,
                'overflow': 1.05,
                'phase': -Math.PI / 2
            },
            {
                'sides': 6,
                'skip': 1,
                'name': 'hblackhexagon',
                'unicode': 11043,
                'overflow': 1.05,
                'phase': Math.PI / 2
            }
        ];
        (function (_r387_leti0) {
            var r656_sides, r656_skip, r656_name, r656_unicode, r656_overflow, r656_phase, _r656_t3, _r656_t5;
            var r656_configurations = _r387_leti0;
            var _r656_t0 = r656_configurations;
            var _r656_t1 = _r656_t0.length;
            var _r656_t2 = 0;
            var _r656_t4 = _r656_t2 < _r656_t1;
            for (; _r656_t4; _r656_t4 = _r656_t2 < _r656_t1)
                _r656_t5 = (_r656_t3 = _r656_t0[_r656_t2], r656_sides = _r656_t3.sides, r656_skip = _r656_t3.skip, r656_name = _r656_t3.name, r656_unicode = _r656_t3.unicode, r656_overflow = _r656_t3.overflow, r656_phase = _r656_t3.phase, function _r656_t6() {
                    var r660_angle;
                    var _r660_t2 = this;
                    var r660_currentGlyph = _r660_t2;
                    if (!r660_currentGlyph)
                        return void 0;
                    if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.27')
                        r250_glyphList.pop();
                    r660_currentGlyph.include(r250_markset.plus);
                    var _r660_t0 = 0;
                    var _r660_t1 = r656_sides;
                    var r660_j = _r660_t0;
                    for (; r660_j < _r660_t1; r660_j = r660_j + 1) {
                        r660_angle = 2 * Math.PI * r660_j * r656_skip / r656_sides + r656_phase;
                        r660_currentGlyph[r660_j ? 'line-to' : 'start-from'](r1_mix(r387_left, r387_right, 0.5 - 0.5 * r656_overflow * Math.sin(r660_angle)), r250_symbolMid + r387_squareRadius * Math.cos(r660_angle) * r656_overflow);
                    }
                    r250_xn$save$2Lrc5.call(r660_currentGlyph, 'hw' + r656_name);
                    r660_currentGlyph.include(r387_FullWidthify);
                    r250_xn$save$2Lrc5.call(r660_currentGlyph, r656_name, r656_unicode);
                    r250_dependencyProfile[r660_currentGlyph.name] = r250_getDependencyProfile(r660_currentGlyph);
                    return r660_currentGlyph;
                }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.27', r250_xn$donothing$2Lrc0b)), _r656_t2 = _r656_t2 + 1);
            return _r656_t5;
        }(_r387_t37));
        (function _r387_t40() {
            var r668_angle, r668_cx, r668_cy;
            var _r668_t2 = this;
            var r668_currentGlyph = _r668_t2;
            if (!r668_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.28')
                r250_glyphList.pop();
            var r668_n = 12;
            var r668_fine = r250_adviceBlackness(10);
            var _r668_t0 = 0;
            var _r668_t1 = r668_n;
            var r668_j = _r668_t0;
            for (; r668_j < _r668_t1; r668_j = r668_j + 1) {
                r668_angle = Math.PI * 2 * r668_j / r668_n;
                r668_cx = r250_MIDDLE + (r387_right - r250_MIDDLE) * Math.cos(r668_angle);
                r668_cy = r250_XH / 2 + (r387_right - r250_MIDDLE) * Math.sin(r668_angle);
                r668_currentGlyph.include(r250_xn$spirooutline$1aao(r250_g4(r668_cx, r668_cy + r668_fine), r250_g4(r668_cx + r668_fine, r668_cy), r250_g4(r668_cx, r668_cy - r668_fine), r250_g4(r668_cx - r668_fine, r668_cy), r250_close()));
            }
            r668_currentGlyph.include(r250_markset.e);
            r668_currentGlyph['apply-transform'](r250_Upright(), true);
            r668_currentGlyph['apply-transform'](r250_Translate(0, r250_symbolMid - r250_XH / 2), true);
            r668_currentGlyph['apply-transform'](r250_Italify(), true);
            r668_currentGlyph.include(r387_FullWidthify);
            r250_xn$save$2Lrc5.call(r668_currentGlyph, 'dottedcircle', 9676);
            r250_dependencyProfile[r668_currentGlyph.name] = r250_getDependencyProfile(r668_currentGlyph);
            return r668_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.28', r250_xn$donothing$2Lrc0b)));
        r387_hollow('whitesquare', 9633, 'blacksquare');
        r387_hollowWithCenter('whitesquareWithCenter', 9635, 'blacksquare');
        r387_hollow('whitehexagon', 11041, 'blackhexagon');
        r387_hollow('whitepentagon', 11040, 'blackpentagon');
        r387_hollow('rhwhitepentagon', 11092, 'rhblackpentagon');
        r387_hollow('whiterectangle', 9645, 'blackrectangle', r387_hollowScale(r387_squareRadius), r387_hollowScale(r387_squareRadius / 1.5));
        r387_hollow('whitelongrectangle', 9647, 'blacklongrectangle', r387_hollowScale(r387_squareRadius), r387_hollowScale(r387_squareRadius * 1.5));
        r387_hollow('whitecircle', 9675, 'blackcircle');
        r387_hollowWithCenter('whitecircleWithCenter', 9673, 'blackcircle');
        r387_doubleHollow('doubleWhitecircle', 9678, 'blackcircle');
        r387_hollow('bigwhitecircle', 9711, 'bigblackcircle', r387_hollowScale(r387_squareRadius * r1_designParameters.geometric_large_x));
        r387_hollow('hwbigwhitecircle', null, 'hwbigblackcircle', r387_hollowScale(r387_squareRadius * r1_designParameters.geometric_large_x, 1));
        r387_hollow('smallwhitecircle', null, 'smallblackcircle', r387_hollowScale(r387_squareRadius * r1_designParameters.geometric_small_x));
        r387_hollow('hwsmallwhitecircle', null, 'hwsmallblackcircle', r387_hollowScale(r387_squareRadius * r1_designParameters.geometric_small_x, 1));
        r387_hollow('smallwhitesquare', 9643, 'smallblacksquare', r387_hollowScale(r387_squareRadius * r1_designParameters.geometric_small_x));
        r387_hollow('hwwhitecircle', null, 'hwblackcircle');
        var _r387_t41 = r387_hollowScale(r387_squareRadius, void 0, r250_GEOMETRYSTROKE * Math.sqrt(2));
        (function (_r387_leti1) {
            var r677_s = _r387_leti1;
            r387_hollow('hwwhitediamond', 8900, 'hwblackdiamond', r677_s);
            r387_hollow('whitediamond', 9671, 'blackdiamond', r677_s);
            return r387_hollowWithCenter('whitediamondWithCenter', 9672, 'blackdiamond', r677_s);
        }(_r387_t41));
        var _r387_t44 = 0.75;
        (function (_r387_leti2) {
            var r678_sts = _r387_leti2;
            r387_resized('smallblacktriangleup', 9652, 'blacktriangleup', r250_MIDDLE, r250_symbolMid, 0.75);
            r387_resized('smallblacktriangleright', 9656, 'blacktriangleright', r250_MIDDLE, r250_symbolMid, 0.75);
            r387_resized('smallblacktriangledown', 9662, 'blacktriangledown', r250_MIDDLE, r250_symbolMid, 0.75);
            r387_resized('smallblacktriangleleft', 9666, 'blacktriangleleft', r250_MIDDLE, r250_symbolMid, 0.75);
            var _r678_t3 = r387_hollowScale(r387_squareRadius * 2 / Math.sqrt(3), void 0, r250_GEOMETRYSTROKE * Math.sqrt(3));
            var _r678_t4 = r387_hollowScale(r387_squareRadius * 2 / Math.sqrt(3), void 0, r250_GEOMETRYSTROKE * Math.sqrt(3));
            var _r678_t5 = r387_hollowScale(r387_squareRadius * r678_sts * 2 / Math.sqrt(3), void 0, r250_GEOMETRYSTROKE * Math.sqrt(3));
            return function (_r678_leti0, _r678_leti1, _r678_leti2) {
                var r679_sl = _r678_leti0;
                var r679_ss = _r678_leti2;
                r387_hollow('whitetriangleup', 9651, 'blacktriangleup', r679_sl, void 0, r250_MIDDLE, r250_symbolMid - r387_squareRadius / 3);
                r387_hollow('whitetriangledown', 9661, 'blacktriangledown', r679_sl, void 0, r250_MIDDLE, r250_symbolMid + r387_squareRadius / 3);
                r387_hollow('whitetriangleleft', 9665, 'blacktriangleleft', r679_sl, void 0, r1_mix(r250_MIDDLE, r387_right, 1 / 3), r250_symbolMid);
                r387_hollow('whitetriangleright', 9655, 'blacktriangleright', r679_sl, void 0, r1_mix(r250_MIDDLE, r387_left, 1 / 3), r250_symbolMid);
                r387_hollow('smallwhitetriangleup', 9653, 'smallblacktriangleup', r679_ss, void 0, r250_MIDDLE, r250_symbolMid - r387_squareRadius / 3 * r678_sts);
                r387_hollow('smallwhitetriangledown', 9663, 'smallblacktriangledown', r679_ss, void 0, r250_MIDDLE, r250_symbolMid + r387_squareRadius / 3 * r678_sts);
                r387_hollow('smallwhitetriangleleft', 9667, 'smallblacktriangleleft', r679_ss, void 0, r1_mix(r250_MIDDLE, r387_right, r678_sts / 3), r250_symbolMid);
                r387_hollow('smallwhitetriangleright', 9657, 'smallblacktriangleright', r679_ss, void 0, r1_mix(r250_MIDDLE, r387_left, r678_sts / 3), r250_symbolMid);
                r387_hollow('thinwhitetriangleleft', 9669, 'thinblacktriangleleft', r679_sl, void 0, r1_mix(r250_MIDDLE, r387_right, 1 / 3), r250_symbolMid);
                r387_hollow('thinwhitetriangleright', 9659, 'thinblacktriangleright', r679_sl, void 0, r1_mix(r250_MIDDLE, r387_left, 1 / 3), r250_symbolMid);
                return r387_hollow('whitestar', 9734, 'blackstar', r679_sl);
            }(_r678_t3, _r678_t4, _r678_t5);
        }(_r387_t44));
        (function _r387_t47() {
            var _r681_t0 = this;
            var r681_currentGlyph = _r681_t0;
            if (!r681_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.29')
                r250_glyphList.pop();
            r681_currentGlyph.include(r250_markset.e);
            r681_currentGlyph.include(r250_xn$spirooutline$1aao(r250_g4(r250_MIDDLE, r250_XH), r250_g4(r250_MIDDLE - r250_XH / 2, r250_XH / 2), r250_g4(r250_MIDDLE, 0), r250_close()));
            r681_currentGlyph.include(r250_xn$spirooutline$1aao(r250_g4(r250_MIDDLE, r250_XH * 0.9), r250_g4(r250_MIDDLE + r250_XH * 0.4, r250_XH * 0.5), r250_g4(r250_MIDDLE, r250_XH * 0.1), r250_close()));
            r250_xn$save$2Lrc5.call(r681_currentGlyph, 'marksampler', 57502);
            r250_dependencyProfile[r681_currentGlyph.name] = r250_getDependencyProfile(r681_currentGlyph);
            return r681_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.29', r250_xn$donothing$2Lrc0b)));
        (function _r387_t48() {
            var _r687_t0 = this;
            var r687_currentGlyph = _r687_t0;
            if (!r687_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.30')
                r250_glyphList.pop();
            r687_currentGlyph['set-width'](r387_shapeWidth);
            var r687_cr = r387_squareRadiusFW - r250_GEOMETRYSTROKE * 2;
            r687_currentGlyph.include(r250_dispiro(r250_widths.lhs(r250_GEOMETRYSTROKE), r250_flat(r387_middleFW + 1, r250_symbolMid + r387_squareRadiusFW, r250_heading(r250_LEFTWARD)), r250_curl(r387_middleFW - r687_cr, r250_symbolMid + r387_squareRadiusFW, r250_heading(r250_LEFTWARD)), r250_archv(), r250_flat(r387_middleFW - r387_squareRadiusFW, r250_symbolMid + r687_cr, r250_heading(r250_DOWNWARD)), r250_curl(r387_middleFW - r387_squareRadiusFW, r250_symbolMid - r687_cr, r250_heading(r250_DOWNWARD)), r250_arcvh(), r250_flat(r387_middleFW - r687_cr, r250_symbolMid - r387_squareRadiusFW, r250_heading(r250_RIGHTWARD)), r250_curl(r387_middleFW + r687_cr, r250_symbolMid - r387_squareRadiusFW, r250_heading(r250_RIGHTWARD)), r250_archv(), r250_flat(r387_middleFW + r387_squareRadiusFW, r250_symbolMid - r687_cr, r250_heading(r250_UPWARD)), r250_curl(r387_middleFW + r387_squareRadiusFW, r250_symbolMid + r687_cr, r250_heading(r250_UPWARD)), r250_arcvh(), r250_flat(r387_middleFW + r687_cr, r250_symbolMid + r387_squareRadiusFW, r250_heading(r250_LEFTWARD)), r250_curl(r387_middleFW - 1, r250_symbolMid + r387_squareRadiusFW, r250_heading(r250_LEFTWARD))));
            r250_xn$save$2Lrc5.call(r687_currentGlyph, 'roundwhitesquare', 9634);
            r250_dependencyProfile[r687_currentGlyph.name] = r250_getDependencyProfile(r687_currentGlyph);
            return r687_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.30', r250_xn$donothing$2Lrc0b)));
        (function _r387_t49() {
            var _r692_t0 = this;
            var r692_currentGlyph = _r692_t0;
            if (!r692_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.31')
                r250_glyphList.pop();
            var r692_lineWidth = Math.min(r250_GEOMETRYSTROKE, (r387_squareRadiusFW * 2 - r250_GEOMETRYSTROKE * 2) * 1 / 11);
            var r692_top = r250_symbolMid + r387_squareRadiusFW - r250_GEOMETRYSTROKE + r692_lineWidth / 2;
            var r692_bot = r250_symbolMid - (r692_top - r250_symbolMid);
            r692_currentGlyph['set-width'](r387_shapeWidth);
            r692_currentGlyph.include(r250_union(r250_glyphs.whitesquare, r250_intersection(r250_glyphs.blacksquare, r250_xn$createglyph$7Hrq(function _r692_t2() {
                var _r696_t0 = this;
                var r696_currentGlyph = _r696_t0;
                r696_currentGlyph.include(r250_dispiro(r250_widths.center(r692_lineWidth), r250_flat(r387_leftFW, r1_mix(r692_top, r692_bot, 0.25), r250_heading(r250_RIGHTWARD)), r250_curl(r387_rightFW, r1_mix(r692_top, r692_bot, 0.25), r250_heading(r250_RIGHTWARD))));
                r696_currentGlyph.include(r250_dispiro(r250_widths.center(r692_lineWidth), r250_flat(r387_leftFW, r1_mix(r692_top, r692_bot, 0.5), r250_heading(r250_RIGHTWARD)), r250_curl(r387_rightFW, r1_mix(r692_top, r692_bot, 0.5), r250_heading(r250_RIGHTWARD))));
                r696_currentGlyph.include(r250_dispiro(r250_widths.center(r692_lineWidth), r250_flat(r387_leftFW, r1_mix(r692_top, r692_bot, 0.75), r250_heading(r250_RIGHTWARD)), r250_curl(r387_rightFW, r1_mix(r692_top, r692_bot, 0.75), r250_heading(r250_RIGHTWARD))));
                return void 0;
            }))));
            r250_xn$save$2Lrc5.call(r692_currentGlyph, 'hshadesquare', 9636);
            r250_dependencyProfile[r692_currentGlyph.name] = r250_getDependencyProfile(r692_currentGlyph);
            return r692_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.31', r250_xn$donothing$2Lrc0b)));
        (function _r387_t50() {
            var _r702_t0 = this;
            var r702_currentGlyph = _r702_t0;
            if (!r702_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.32')
                r250_glyphList.pop();
            var r702_lineWidth = Math.min(r250_GEOMETRYSTROKE, (r387_squareRadiusFW * 2 - r250_GEOMETRYSTROKE * 2) * 1 / 11);
            var r702_r = r387_shapeWidth / 2 + r387_squareRadiusFW - r250_GEOMETRYSTROKE + r702_lineWidth / 2;
            var r702_l = r387_shapeWidth / 2 - (r702_r - r387_shapeWidth / 2);
            r702_currentGlyph['set-width'](r387_shapeWidth);
            r702_currentGlyph.include(r250_union(r250_glyphs.whitesquare, r250_intersection(r250_glyphs.blacksquare, r250_xn$createglyph$7Hrq(function _r702_t2() {
                var _r706_t0 = this;
                var r706_currentGlyph = _r706_t0;
                r706_currentGlyph.include(r250_dispiro(r250_widths.center(r702_lineWidth), r250_flat(r1_mix(r702_l, r702_r, 0.25), r387_topFW, r250_heading(r250_DOWNWARD)), r250_curl(r1_mix(r702_l, r702_r, 0.25), r387_bottomFW, r250_heading(r250_DOWNWARD))));
                r706_currentGlyph.include(r250_dispiro(r250_widths.center(r702_lineWidth), r250_flat(r1_mix(r702_l, r702_r, 0.5), r387_topFW, r250_heading(r250_DOWNWARD)), r250_curl(r1_mix(r702_l, r702_r, 0.5), r387_bottomFW, r250_heading(r250_DOWNWARD))));
                r706_currentGlyph.include(r250_dispiro(r250_widths.center(r702_lineWidth), r250_flat(r1_mix(r702_l, r702_r, 0.75), r387_topFW, r250_heading(r250_DOWNWARD)), r250_curl(r1_mix(r702_l, r702_r, 0.75), r387_bottomFW, r250_heading(r250_DOWNWARD))));
                return void 0;
            }))));
            r250_xn$save$2Lrc5.call(r702_currentGlyph, 'vshadesquare', 9637);
            r250_dependencyProfile[r702_currentGlyph.name] = r250_getDependencyProfile(r702_currentGlyph);
            return r702_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.32', r250_xn$donothing$2Lrc0b)));
        (function _r387_t51() {
            var _r712_t0 = this;
            var r712_currentGlyph = _r712_t0;
            if (!r712_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.33')
                r250_glyphList.pop();
            r712_currentGlyph['set-width'](r387_shapeWidth);
            r712_currentGlyph.include(r250_union(r250_glyphs.hshadesquare, r250_glyphs.vshadesquare));
            r250_xn$save$2Lrc5.call(r712_currentGlyph, 'hvshadesquare', 9638);
            r250_dependencyProfile[r712_currentGlyph.name] = r250_getDependencyProfile(r712_currentGlyph);
            return r712_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.33', r250_xn$donothing$2Lrc0b)));
        (function _r387_t52() {
            var _r717_t0 = this;
            var r717_currentGlyph = _r717_t0;
            if (!r717_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.34')
                r250_glyphList.pop();
            var r717_lineWidth = Math.min(r250_GEOMETRYSTROKE, (r387_squareRadiusFW * 2 - r250_GEOMETRYSTROKE * 2) * 1 / 11);
            var r717_top = r250_symbolMid + r387_squareRadiusFW;
            var r717_bot = r250_symbolMid - (r717_top - r250_symbolMid);
            r717_currentGlyph['set-width'](r387_shapeWidth);
            r717_currentGlyph.include(r250_union(r250_glyphs.whitesquare, r250_intersection(r250_glyphs.blacksquare, r250_xn$createglyph$7Hrq(function _r717_t2() {
                var _r721_t2 = this;
                var r721_currentGlyph = _r721_t2;
                var _r721_t0 = -10;
                var _r721_t1 = 10;
                var r721_j = _r721_t0;
                for (; r721_j <= _r721_t1; r721_j = r721_j + 1)
                    r721_currentGlyph.include(r250_dispiro(r250_widths.center(r717_lineWidth), r250_flat(r387_leftFW, r1_mix(r717_top, r717_bot, r721_j / 4), r250_heading(r250_RIGHTWARD)), r250_curl(r387_rightFW, r1_mix(r717_top, r717_bot, r721_j / 4 + 1), r250_heading(r250_RIGHTWARD))));
                return void 0;
            }))));
            r250_xn$save$2Lrc5.call(r717_currentGlyph, 'ddiagshadesquare', 9639);
            r250_dependencyProfile[r717_currentGlyph.name] = r250_getDependencyProfile(r717_currentGlyph);
            return r717_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.34', r250_xn$donothing$2Lrc0b)));
        (function _r387_t53() {
            var _r727_t0 = this;
            var r727_currentGlyph = _r727_t0;
            if (!r727_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.35')
                r250_glyphList.pop();
            var r727_lineWidth = Math.min(r250_GEOMETRYSTROKE, (r387_squareRadiusFW * 2 - r250_GEOMETRYSTROKE * 2) * 1 / 11);
            var r727_top = r250_symbolMid + r387_squareRadiusFW;
            var r727_bot = r250_symbolMid - (r727_top - r250_symbolMid);
            r727_currentGlyph['set-width'](r387_shapeWidth);
            r727_currentGlyph.include(r250_union(r250_glyphs.whitesquare, r250_intersection(r250_glyphs.blacksquare, r250_xn$createglyph$7Hrq(function _r727_t2() {
                var _r731_t2 = this;
                var r731_currentGlyph = _r731_t2;
                var _r731_t0 = -10;
                var _r731_t1 = 10;
                var r731_j = _r731_t0;
                for (; r731_j <= _r731_t1; r731_j = r731_j + 1)
                    r731_currentGlyph.include(r250_dispiro(r250_widths.center(r727_lineWidth), r250_flat(r387_leftFW, r1_mix(r727_top, r727_bot, r731_j / 4), r250_heading(r250_RIGHTWARD)), r250_curl(r387_rightFW, r1_mix(r727_top, r727_bot, r731_j / 4 - 1), r250_heading(r250_RIGHTWARD))));
                return void 0;
            }))));
            r250_xn$save$2Lrc5.call(r727_currentGlyph, 'udiagshadesquare', 9640);
            r250_dependencyProfile[r727_currentGlyph.name] = r250_getDependencyProfile(r727_currentGlyph);
            return r727_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.35', r250_xn$donothing$2Lrc0b)));
        (function _r387_t54() {
            var _r737_t0 = this;
            var r737_currentGlyph = _r737_t0;
            if (!r737_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.36')
                r250_glyphList.pop();
            r737_currentGlyph['set-width'](r387_shapeWidth);
            r737_currentGlyph.include(r250_union(r250_glyphs.ddiagshadesquare, r250_glyphs.udiagshadesquare));
            r250_xn$save$2Lrc5.call(r737_currentGlyph, 'uddiagshadesquare', 9641);
            r250_dependencyProfile[r737_currentGlyph.name] = r250_getDependencyProfile(r737_currentGlyph);
            return r737_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.36', r250_xn$donothing$2Lrc0b)));
        var r387_quarters = [
            [
                9680,
                1,
                1,
                0,
                0
            ],
            [
                9681,
                0,
                0,
                1,
                1
            ],
            [
                9682,
                0,
                1,
                0,
                1
            ],
            [
                9683,
                1,
                0,
                1,
                0
            ],
            [
                9684,
                0,
                0,
                1,
                0
            ],
            [
                9685,
                0,
                1,
                1,
                1
            ]
        ];
        var _r387_t3 = r387_quarters;
        var _r387_t4 = _r387_t3.length;
        var _r387_t5 = 0;
        var _r387_t55 = _r387_t5 < _r387_t4;
        for (; _r387_t55; _r387_t55 = _r387_t5 < _r387_t4)
            _r387_t56 = (_r387_t6 = _r387_t3[_r387_t5], r387_u = _r387_t6[0], r387_LT = _r387_t6[1], r387_LB = _r387_t6[2], r387_RT = _r387_t6[3], r387_RB = _r387_t6[4], function _r387_t57() {
                var _r744_t0 = this;
                var r744_currentGlyph = _r744_t0;
                if (!r744_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.37')
                    r250_glyphList.pop();
                var r744_r = r387_squareRadiusFW - r250_GEOMETRYSTROKE / 2;
                r744_currentGlyph['set-width'](r387_shapeWidth);
                r744_currentGlyph.include(r250_union(r250_glyphs.whitecircle, r250_intersection(r250_xn$spirooutline$1aao(r250_g4(r387_middleFW, r250_symbolMid + r744_r), r250_g4(r387_middleFW - r744_r, r250_symbolMid), r250_g4(r387_middleFW, r250_symbolMid - r744_r), r250_g4(r387_middleFW + r744_r, r250_symbolMid), r250_close()), r250_xn$createglyph$7Hrq(function _r744_t2() {
                    var _r748_t0 = this;
                    var r748_currentGlyph = _r748_t0;
                    if (r387_LT)
                        r748_currentGlyph.include(r250_xn$spirooutline$1aao(r250_corner(r387_middleFW, r250_symbolMid), r250_corner(r387_middleFW, r250_symbolMid + r387_squareRadiusFW), r250_corner(r387_middleFW - r387_squareRadiusFW, r250_symbolMid + r387_squareRadiusFW), r250_corner(r387_middleFW - r387_squareRadiusFW, r250_symbolMid)));
                    if (r387_LB)
                        r748_currentGlyph.include(r250_xn$spirooutline$1aao(r250_corner(r387_middleFW, r250_symbolMid), r250_corner(r387_middleFW, r250_symbolMid - r387_squareRadiusFW), r250_corner(r387_middleFW - r387_squareRadiusFW, r250_symbolMid - r387_squareRadiusFW), r250_corner(r387_middleFW - r387_squareRadiusFW, r250_symbolMid)));
                    if (r387_RT)
                        r748_currentGlyph.include(r250_xn$spirooutline$1aao(r250_corner(r387_middleFW, r250_symbolMid), r250_corner(r387_middleFW, r250_symbolMid + r387_squareRadiusFW), r250_corner(r387_middleFW + r387_squareRadiusFW, r250_symbolMid + r387_squareRadiusFW), r250_corner(r387_middleFW + r387_squareRadiusFW, r250_symbolMid)));
                    if (r387_RB)
                        r748_currentGlyph.include(r250_xn$spirooutline$1aao(r250_corner(r387_middleFW, r250_symbolMid), r250_corner(r387_middleFW, r250_symbolMid - r387_squareRadiusFW), r250_corner(r387_middleFW + r387_squareRadiusFW, r250_symbolMid - r387_squareRadiusFW), r250_corner(r387_middleFW + r387_squareRadiusFW, r250_symbolMid)));
                    return void 0;
                }))));
                r250_xn$save$2Lrc5.call(r744_currentGlyph, 'uni' + r387_u, r387_u);
                r250_dependencyProfile[r744_currentGlyph.name] = r250_getDependencyProfile(r744_currentGlyph);
                return r744_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.37', r250_xn$donothing$2Lrc0b)), _r387_t5 = _r387_t5 + 1);
        return _r387_t56;
    }());
    (function () {
        var r755_unicode, r755_lt, r755_rt, r755_lb, r755_rb, _r755_t5, _r755_t18;
        (function _r755_t6() {
            var _r757_t0 = this;
            var r757_currentGlyph = _r757_t0;
            if (!r757_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.38')
                r250_glyphList.pop();
            r757_currentGlyph['set-width'](r250_FULLWIDTH);
            r757_currentGlyph.include(r250_ForceUpright());
            r757_currentGlyph['start-from'](0, r250_font.OS_2.usWinAscent);
            r757_currentGlyph['line-to'](r250_FULLWIDTH, r250_font.OS_2.usWinAscent);
            r757_currentGlyph['line-to'](r250_FULLWIDTH, -r250_font.OS_2.usWinDescent);
            r757_currentGlyph['line-to'](0, -r250_font.OS_2.usWinDescent);
            r250_xn$save$2Lrc5.call(r757_currentGlyph, 'fullblock', 9608);
            r250_dependencyProfile[r757_currentGlyph.name] = r250_getDependencyProfile(r757_currentGlyph);
            return r757_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.38', r250_xn$donothing$2Lrc0b)));
        var r755_Shade = function _r755_t7(r765_steps, r765_fill) {
            return function _r765_t2() {
                var _r767_t0 = this;
                var r767_currentGlyph = _r767_t0;
                var r767_top = r250_font.OS_2.usWinAscent;
                var r767_bottom = -r250_font.OS_2.usWinDescent;
                var r767_sw = (r767_top - r767_bottom) / r765_steps * r765_fill;
                r767_currentGlyph.include(r250_ForceUpright());
                r767_currentGlyph.include(r250_intersection(function _r767_t2() {
                    var r771_y0, r771_y1;
                    var _r771_t2 = this;
                    var r771_currentGlyph = _r771_t2;
                    var _r771_t0 = 0;
                    var _r771_t1 = r765_steps * 2 + 2;
                    var r771_j = _r771_t0;
                    for (; r771_j < _r771_t1; r771_j = r771_j + 1) {
                        r771_y0 = r1_mix(r767_top, r767_bottom, r771_j / r765_steps);
                        r771_y1 = r771_y0 + r767_top - r767_bottom;
                        r771_currentGlyph['start-from'](0, r771_y0 - r767_sw / 2);
                        r771_currentGlyph['line-to'](r250_FULLWIDTH, r771_y1 - r767_sw / 2);
                        r771_currentGlyph['line-to'](r250_FULLWIDTH, r771_y1 + r767_sw / 2);
                        r771_currentGlyph['line-to'](0, r771_y0 + r767_sw / 2);
                    }
                    return void 0;
                }, r250_xn$spirooutline$1aao(r250_corner(0, r767_bottom), r250_corner(0, r767_top), r250_corner(r250_FULLWIDTH, r767_top), r250_corner(r250_FULLWIDTH, r767_bottom))));
                return void 0;
            };
        };
        (function _r755_t8() {
            var _r778_t0 = this;
            var r778_currentGlyph = _r778_t0;
            if (!r778_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.39')
                r250_glyphList.pop();
            r778_currentGlyph['set-width'](r250_FULLWIDTH);
            r778_currentGlyph.include(r755_Shade(4, 1 / 8));
            r250_xn$save$2Lrc5.call(r778_currentGlyph, 'lightshade', 9617);
            r250_dependencyProfile[r778_currentGlyph.name] = r250_getDependencyProfile(r778_currentGlyph);
            return r778_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.39', r250_xn$donothing$2Lrc0b)));
        (function _r755_t9() {
            var _r783_t0 = this;
            var r783_currentGlyph = _r783_t0;
            if (!r783_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.40')
                r250_glyphList.pop();
            r783_currentGlyph['set-width'](r250_FULLWIDTH);
            r783_currentGlyph.include(r755_Shade(8, 1 / 4));
            r250_xn$save$2Lrc5.call(r783_currentGlyph, 'mediumshade', 9618);
            r250_dependencyProfile[r783_currentGlyph.name] = r250_getDependencyProfile(r783_currentGlyph);
            return r783_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.40', r250_xn$donothing$2Lrc0b)));
        (function _r755_t10() {
            var _r788_t0 = this;
            var r788_currentGlyph = _r788_t0;
            if (!r788_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.41')
                r250_glyphList.pop();
            r788_currentGlyph['set-width'](r250_FULLWIDTH);
            r788_currentGlyph.include(r755_Shade(8, 1 / 2));
            r250_xn$save$2Lrc5.call(r788_currentGlyph, 'heavyshade', 9619);
            r250_dependencyProfile[r788_currentGlyph.name] = r250_getDependencyProfile(r788_currentGlyph);
            return r788_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.41', r250_xn$donothing$2Lrc0b)));
        var _r755_t0 = 1;
        var _r755_t1 = 8;
        var r755_fill = _r755_t0;
        for (; r755_fill < _r755_t1; r755_fill = r755_fill + 1) {
            (function _r755_t11() {
                var _r795_t0 = this;
                var r795_currentGlyph = _r795_t0;
                if (!r795_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.42')
                    r250_glyphList.pop();
                r795_currentGlyph['set-width'](r250_FULLWIDTH);
                r795_currentGlyph.include(r250_ForceUpright());
                r795_currentGlyph['start-from'](0, r1_mix(-r250_font.OS_2.usWinDescent, r250_font.OS_2.usWinAscent, r755_fill / 8));
                r795_currentGlyph['line-to'](r250_FULLWIDTH, r1_mix(-r250_font.OS_2.usWinDescent, r250_font.OS_2.usWinAscent, r755_fill / 8));
                r795_currentGlyph['line-to'](r250_FULLWIDTH, -r250_font.OS_2.usWinDescent);
                r795_currentGlyph['line-to'](0, -r250_font.OS_2.usWinDescent);
                r250_xn$save$2Lrc5.call(r795_currentGlyph, 'vfill' + r755_fill, 9600 + r755_fill);
                r250_dependencyProfile[r795_currentGlyph.name] = r250_getDependencyProfile(r795_currentGlyph);
                return r795_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.42', r250_xn$donothing$2Lrc0b)));
            (function _r755_t12() {
                var _r804_t0 = this;
                var r804_currentGlyph = _r804_t0;
                if (!r804_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.43')
                    r250_glyphList.pop();
                r804_currentGlyph['set-width'](r250_FULLWIDTH);
                r804_currentGlyph.include(r250_ForceUpright());
                r804_currentGlyph['start-from'](0, r250_font.OS_2.usWinAscent);
                r804_currentGlyph['line-to'](r250_FULLWIDTH * r755_fill / 8, r250_font.OS_2.usWinAscent);
                r804_currentGlyph['line-to'](r250_FULLWIDTH * r755_fill / 8, -r250_font.OS_2.usWinDescent);
                r804_currentGlyph['line-to'](0, -r250_font.OS_2.usWinDescent);
                r250_xn$save$2Lrc5.call(r804_currentGlyph, 'hfill' + r755_fill, 9616 - r755_fill);
                r250_dependencyProfile[r804_currentGlyph.name] = r250_getDependencyProfile(r804_currentGlyph);
                return r804_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.43', r250_xn$donothing$2Lrc0b)));
        }
        (function _r755_t13() {
            var _r813_t0 = this;
            var r813_currentGlyph = _r813_t0;
            if (!r813_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.44')
                r250_glyphList.pop();
            r813_currentGlyph['set-width'](r250_FULLWIDTH);
            r813_currentGlyph.include(r250_ForceUpright());
            r813_currentGlyph['start-from'](0, r250_font.OS_2.usWinAscent);
            r813_currentGlyph['line-to'](r250_FULLWIDTH, r250_font.OS_2.usWinAscent);
            r813_currentGlyph['line-to'](r250_FULLWIDTH, r1_mix(-r250_font.OS_2.usWinDescent, r250_font.OS_2.usWinAscent, 0.5));
            r813_currentGlyph['line-to'](0, r1_mix(-r250_font.OS_2.usWinDescent, r250_font.OS_2.usWinAscent, 0.5));
            r250_xn$save$2Lrc5.call(r813_currentGlyph, 'upHalfblock', 9600);
            r250_dependencyProfile[r813_currentGlyph.name] = r250_getDependencyProfile(r813_currentGlyph);
            return r813_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.44', r250_xn$donothing$2Lrc0b)));
        (function _r755_t14() {
            var _r822_t0 = this;
            var r822_currentGlyph = _r822_t0;
            if (!r822_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.45')
                r250_glyphList.pop();
            r822_currentGlyph['set-width'](r250_FULLWIDTH);
            r822_currentGlyph.include(r250_ForceUpright());
            r822_currentGlyph['start-from'](0, r250_font.OS_2.usWinAscent);
            r822_currentGlyph['line-to'](r250_FULLWIDTH, r250_font.OS_2.usWinAscent);
            r822_currentGlyph['line-to'](r250_FULLWIDTH, r1_mix(-r250_font.OS_2.usWinDescent, r250_font.OS_2.usWinAscent, 7 / 8));
            r822_currentGlyph['line-to'](0, r1_mix(-r250_font.OS_2.usWinDescent, r250_font.OS_2.usWinAscent, 7 / 8));
            r250_xn$save$2Lrc5.call(r822_currentGlyph, 'up8thblock', 9620);
            r250_dependencyProfile[r822_currentGlyph.name] = r250_getDependencyProfile(r822_currentGlyph);
            return r822_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.45', r250_xn$donothing$2Lrc0b)));
        (function _r755_t15() {
            var _r831_t0 = this;
            var r831_currentGlyph = _r831_t0;
            if (!r831_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.46')
                r250_glyphList.pop();
            r831_currentGlyph['set-width'](r250_FULLWIDTH);
            r831_currentGlyph.include(r250_ForceUpright());
            r831_currentGlyph['start-from'](r250_FULLWIDTH * 0.5, r250_font.OS_2.usWinAscent);
            r831_currentGlyph['line-to'](r250_FULLWIDTH, r250_font.OS_2.usWinAscent);
            r831_currentGlyph['line-to'](r250_FULLWIDTH, -r250_font.OS_2.usWinDescent);
            r831_currentGlyph['line-to'](r250_FULLWIDTH * 0.5, -r250_font.OS_2.usWinDescent);
            r250_xn$save$2Lrc5.call(r831_currentGlyph, 'rightHalfBlock', 9616);
            r250_dependencyProfile[r831_currentGlyph.name] = r250_getDependencyProfile(r831_currentGlyph);
            return r831_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.46', r250_xn$donothing$2Lrc0b)));
        (function _r755_t16() {
            var _r840_t0 = this;
            var r840_currentGlyph = _r840_t0;
            if (!r840_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.47')
                r250_glyphList.pop();
            r840_currentGlyph['set-width'](r250_FULLWIDTH);
            r840_currentGlyph.include(r250_ForceUpright());
            r840_currentGlyph['start-from'](r250_FULLWIDTH * 7 / 8, r250_font.OS_2.usWinAscent);
            r840_currentGlyph['line-to'](r250_FULLWIDTH, r250_font.OS_2.usWinAscent);
            r840_currentGlyph['line-to'](r250_FULLWIDTH, -r250_font.OS_2.usWinDescent);
            r840_currentGlyph['line-to'](r250_FULLWIDTH * 7 / 8, -r250_font.OS_2.usWinDescent);
            r250_xn$save$2Lrc5.call(r840_currentGlyph, 'right8thBlock', 9621);
            r250_dependencyProfile[r840_currentGlyph.name] = r250_getDependencyProfile(r840_currentGlyph);
            return r840_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.47', r250_xn$donothing$2Lrc0b)));
        var r755_filldata = [
            [
                9622,
                0,
                0,
                1,
                0
            ],
            [
                9623,
                0,
                0,
                0,
                1
            ],
            [
                9624,
                1,
                0,
                0,
                0
            ],
            [
                9625,
                1,
                0,
                1,
                1
            ],
            [
                9626,
                1,
                0,
                0,
                1
            ],
            [
                9627,
                1,
                1,
                1,
                0
            ],
            [
                9628,
                1,
                1,
                0,
                1
            ],
            [
                9629,
                0,
                1,
                0,
                0
            ],
            [
                9630,
                0,
                1,
                1,
                0
            ],
            [
                9631,
                0,
                1,
                1,
                1
            ]
        ];
        var _r755_t2 = r755_filldata;
        var _r755_t3 = _r755_t2.length;
        var _r755_t4 = 0;
        var _r755_t17 = _r755_t4 < _r755_t3;
        for (; _r755_t17; _r755_t17 = _r755_t4 < _r755_t3)
            _r755_t18 = (_r755_t5 = _r755_t2[_r755_t4], r755_unicode = _r755_t5[0], r755_lt = _r755_t5[1], r755_rt = _r755_t5[2], r755_lb = _r755_t5[3], r755_rb = _r755_t5[4], function _r755_t19() {
                var _r851_t0 = this;
                var r851_currentGlyph = _r851_t0;
                if (!r851_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.48')
                    r250_glyphList.pop();
                r851_currentGlyph['set-width'](r250_FULLWIDTH);
                r851_currentGlyph.include(r250_ForceUpright());
                var r851_t = r250_font.OS_2.usWinAscent;
                var r851_b = -r250_font.OS_2.usWinDescent;
                var r851_l = 0;
                var r851_r = r250_FULLWIDTH;
                var r851_mx = r1_mix(r851_l, r851_r, 0.5);
                var r851_my = r1_mix(r851_b, r851_t, 0.5);
                if (r755_lt) {
                    r851_currentGlyph['start-from'](r851_l, r851_t);
                    r851_currentGlyph['line-to'](r851_l, r851_my);
                    r851_currentGlyph['line-to'](r851_mx, r851_my);
                    r851_currentGlyph['line-to'](r851_mx, r851_t);
                }
                if (r755_rt) {
                    r851_currentGlyph['start-from'](r851_mx, r851_t);
                    r851_currentGlyph['line-to'](r851_mx, r851_my);
                    r851_currentGlyph['line-to'](r851_r, r851_my);
                    r851_currentGlyph['line-to'](r851_r, r851_t);
                }
                if (r755_lb) {
                    r851_currentGlyph['start-from'](r851_l, r851_my);
                    r851_currentGlyph['line-to'](r851_l, r851_b);
                    r851_currentGlyph['line-to'](r851_mx, r851_b);
                    r851_currentGlyph['line-to'](r851_mx, r851_my);
                }
                if (r755_rb) {
                    r851_currentGlyph['start-from'](r851_mx, r851_my);
                    r851_currentGlyph['line-to'](r851_mx, r851_b);
                    r851_currentGlyph['line-to'](r851_r, r851_b);
                    r851_currentGlyph['line-to'](r851_r, r851_my);
                }
                r250_xn$save$2Lrc5.call(r851_currentGlyph, 'fillblk' + r755_unicode, r755_unicode);
                r250_dependencyProfile[r851_currentGlyph.name] = r250_getDependencyProfile(r851_currentGlyph);
                return r851_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.48', r250_xn$donothing$2Lrc0b)), _r755_t4 = _r755_t4 + 1);
        return _r755_t18;
    }());
    (function () {
        var r872_light = r250_adviceBlackness(3.5);
        var r872_heavy = Math.max(r872_light * 2, r250_WIDTH * 0.15);
        var r872_width = r250_FULLWIDTH;
        var r872_midx = r250_FULLWIDTH / 2;
        var r872_topy = r250_font.OS_2.usWinAscent;
        var r872_boty = -r250_font.OS_2.usWinDescent;
        var r872_midy = r1_mix(r872_boty, r872_topy, 0.5);
        var r872_boxdraw = function _r872_t0(r873_unicode, r873_u, r873_d, r873_l, r873_r) {
            return function _r873_t2() {
                var _r875_t0 = this;
                var r875_currentGlyph = _r875_t0;
                if (!r875_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.49')
                    r250_glyphList.pop();
                r875_currentGlyph['set-width'](r872_width);
                r875_currentGlyph.include(r250_ForceUpright());
                var r875_stopH = Math.max(r873_u, r873_d) / 2;
                var r875_stopV = Math.max(r873_l, r873_r) / 2;
                if (r873_l)
                    r875_currentGlyph.include(r250_HBar(0, r872_midx + r875_stopH, r872_midy, r873_l));
                if (r873_r)
                    r875_currentGlyph.include(r250_HBar(r872_midx - r875_stopH, r872_width, r872_midy, r873_r));
                if (r873_d)
                    r875_currentGlyph.include(r250_VBar(r872_midx, -r250_font.OS_2.usWinDescent, r872_midy + r875_stopV, r873_d));
                if (r873_u)
                    r875_currentGlyph.include(r250_VBar(r872_midx, r872_midy - r875_stopV, r250_font.OS_2.usWinAscent, r873_u));
                r250_xn$save$2Lrc5.call(r875_currentGlyph, 'bd' + r873_unicode.toString(16).toUpperCase(), r873_unicode);
                r250_dependencyProfile[r875_currentGlyph.name] = r250_getDependencyProfile(r875_currentGlyph);
                return r875_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.49', r250_xn$donothing$2Lrc0b));
        };
        var r872_dlboxdraw = function _r872_t1(r883_unicode, r883_u, r883_d, r883_l, r883_r) {
            return function _r883_t2() {
                var _r885_t0 = this;
                var r885_currentGlyph = _r885_t0;
                if (!r885_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.50')
                    r250_glyphList.pop();
                r885_currentGlyph['set-width'](r872_width);
                r885_currentGlyph.include(r250_ForceUpright());
                var r885_stopH = Math.max(r883_u, r883_d) - r872_light * 1 - r872_light * 0.5 * r250_HVCONTRAST;
                var r885_stopV = Math.max(r883_l, r883_r) - r872_light * 1.5;
                var r885_capH = Math.max(r883_u, r883_d) - r872_light * 1;
                var r885_capV = Math.max(r883_l, r883_r) - r872_light * 1;
                if (r883_l) {
                    r885_currentGlyph.include(r250_HBar(0, r872_midx - r885_stopH, r872_midy + (r883_l - r872_light), r872_light));
                    if (r883_l > r872_light)
                        r885_currentGlyph.include(r250_HBar(0, r872_midx - r885_stopH, r872_midy - (r883_l - r872_light), r872_light));
                }
                if (r883_r) {
                    r885_currentGlyph.include(r250_HBar(r872_midx + r885_stopH, r872_width, r872_midy + (r883_r - r872_light), r872_light));
                    if (r883_r > r872_light)
                        r885_currentGlyph.include(r250_HBar(r872_midx + r885_stopH, r872_width, r872_midy - (r883_r - r872_light), r872_light));
                }
                if (r883_d) {
                    r885_currentGlyph.include(r250_VBar(r872_midx + (r883_d - r872_light), -r250_font.OS_2.usWinDescent, r872_midy - r885_stopV, r872_light));
                    if (r883_d > r872_light)
                        r885_currentGlyph.include(r250_VBar(r872_midx - (r883_d - r872_light), -r250_font.OS_2.usWinDescent, r872_midy - r885_stopV, r872_light));
                }
                if (r883_u) {
                    r885_currentGlyph.include(r250_VBar(r872_midx + (r883_u - r872_light), r872_midy + r885_stopV, r250_font.OS_2.usWinAscent, r872_light));
                    if (r883_u > r872_light)
                        r885_currentGlyph.include(r250_VBar(r872_midx - (r883_u - r872_light), r872_midy + r885_stopV, r250_font.OS_2.usWinAscent, r872_light));
                }
                if (r885_stopH > 0 && !r883_u)
                    r885_currentGlyph.include(r250_HBar(r872_midx - r885_stopH - r872_light * r250_HVCONTRAST, r872_midx + r885_stopH + r872_light * r250_HVCONTRAST, r872_midy + r885_capV, r872_light));
                if (r885_stopH > 0 && !r883_d)
                    r885_currentGlyph.include(r250_HBar(r872_midx - r885_stopH - r872_light * r250_HVCONTRAST, r872_midx + r885_stopH + r872_light * r250_HVCONTRAST, r872_midy - r885_capV, r872_light));
                if (r885_stopV > 0 && !r883_l)
                    r885_currentGlyph.include(r250_VBar(r872_midx - r885_capH, r872_midy - r885_stopV - r872_light, r872_midy + r885_stopV + r872_light, r872_light));
                if (r885_stopV > 0 && !r883_r)
                    r885_currentGlyph.include(r250_VBar(r872_midx + r885_capH, r872_midy - r885_stopV - r872_light, r872_midy + r885_stopV + r872_light, r872_light));
                r250_xn$save$2Lrc5.call(r885_currentGlyph, 'bd' + r883_unicode.toString(16).toUpperCase(), r883_unicode);
                r250_dependencyProfile[r885_currentGlyph.name] = r250_getDependencyProfile(r885_currentGlyph);
                return r885_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.50', r250_xn$donothing$2Lrc0b));
        };
        var r872_complexBoxDraw = function _r872_t2(r901_unicodeStart, r901_U, r901_D, r901_L, r901_R, r901_fn, r901_dl) {
            var r901_u, r901_d, r901_l, r901_r, r901_newcome, r901_masked, r901_existing, _r901_t3, _r901_t4, _r901_t5, _r901_t6, _r901_t10;
            var r901_order = [
                [
                    r872_light,
                    r872_light,
                    r872_light,
                    r872_light
                ],
                [
                    r872_light,
                    r872_light,
                    r872_heavy,
                    r872_light
                ],
                [
                    r872_light,
                    r872_light,
                    r872_light,
                    r872_heavy
                ],
                [
                    r872_light,
                    r872_light,
                    r872_heavy,
                    r872_heavy
                ],
                [
                    r872_heavy,
                    r872_light,
                    r872_light,
                    r872_light
                ],
                [
                    r872_light,
                    r872_heavy,
                    r872_light,
                    r872_light
                ],
                [
                    r872_heavy,
                    r872_heavy,
                    r872_light,
                    r872_light
                ],
                [
                    r872_heavy,
                    r872_light,
                    r872_heavy,
                    r872_light
                ],
                [
                    r872_heavy,
                    r872_light,
                    r872_light,
                    r872_heavy
                ],
                [
                    r872_light,
                    r872_heavy,
                    r872_heavy,
                    r872_light
                ],
                [
                    r872_light,
                    r872_heavy,
                    r872_light,
                    r872_heavy
                ],
                [
                    r872_heavy,
                    r872_light,
                    r872_heavy,
                    r872_heavy
                ],
                [
                    r872_light,
                    r872_heavy,
                    r872_heavy,
                    r872_heavy
                ],
                [
                    r872_heavy,
                    r872_heavy,
                    r872_heavy,
                    r872_light
                ],
                [
                    r872_heavy,
                    r872_heavy,
                    r872_light,
                    r872_heavy
                ],
                [
                    r872_heavy,
                    r872_heavy,
                    r872_heavy,
                    r872_heavy
                ]
            ];
            var r901_existings = [];
            var r901_n = 0;
            var _r901_t0 = r901_order;
            var _r901_t1 = _r901_t0.length;
            var _r901_t2 = 0;
            var _r901_t9 = _r901_t2 < _r901_t1;
            for (; _r901_t9; _r901_t9 = _r901_t2 < _r901_t1) {
                _r901_t3 = _r901_t0[_r901_t2];
                r901_u = _r901_t3[0];
                r901_d = _r901_t3[1];
                r901_l = _r901_t3[2];
                r901_r = _r901_t3[3];
                r901_newcome = true;
                r901_masked = [
                    r901_U * r901_u,
                    r901_D * r901_d,
                    r901_L * r901_l,
                    r901_R * r901_r
                ];
                _r901_t4 = r901_existings;
                _r901_t5 = _r901_t4.length;
                _r901_t6 = 0;
                for (; _r901_t6 < _r901_t5; _r901_t6 = _r901_t6 + 1) {
                    r901_existing = _r901_t4[_r901_t6];
                    if ('' + r901_existing === '' + r901_masked)
                        r901_newcome = false;
                }
                if (r901_newcome) {
                    if (!r901_dl || (!r901_masked[0] || !r901_masked[1] || r901_masked[0] === r901_masked[1]) && (!r901_masked[2] || !r901_masked[3] || r901_masked[2] === r901_masked[3]) && (r901_masked[0] > r872_light || r901_masked[1] > r872_light || r901_masked[2] > r872_light || r901_masked[3] > r872_light)) {
                        r1_fallback(r901_fn, r872_boxdraw).apply(null, [r901_unicodeStart + r901_n].concat(r901_masked));
                        r901_n = r901_n + 1;
                    }
                    r901_existings.push(r901_masked);
                }
                _r901_t10 = _r901_t2 = _r901_t2 + 1;
            }
            return _r901_t10;
        };
        r872_boxdraw(9472, 0, 0, r872_light, r872_light);
        r872_boxdraw(9473, 0, 0, r872_heavy, r872_heavy);
        r872_boxdraw(9474, r872_light, r872_light, 0, 0);
        r872_boxdraw(9475, r872_heavy, r872_heavy, 0, 0);
        r872_boxdraw(9588, 0, 0, r872_light, 0);
        r872_boxdraw(9589, r872_light, 0, 0, 0);
        r872_boxdraw(9590, 0, 0, 0, r872_light);
        r872_boxdraw(9591, 0, r872_light, 0, 0);
        r872_boxdraw(9592, 0, 0, r872_heavy, 0);
        r872_boxdraw(9593, r872_heavy, 0, 0, 0);
        r872_boxdraw(9594, 0, 0, 0, r872_heavy);
        r872_boxdraw(9595, 0, r872_heavy, 0, 0);
        r872_boxdraw(9596, 0, 0, r872_light, r872_heavy);
        r872_boxdraw(9597, r872_light, r872_heavy, 0, 0);
        r872_boxdraw(9598, 0, 0, r872_heavy, r872_light);
        r872_boxdraw(9599, r872_heavy, r872_light, 0, 0);
        r872_dlboxdraw(9552, 0, 0, r872_heavy, r872_heavy);
        r872_dlboxdraw(9553, r872_heavy, r872_heavy, 0, 0);
        r872_complexBoxDraw(9484, 0, 1, 0, 1);
        r872_complexBoxDraw(9488, 0, 1, 1, 0);
        r872_complexBoxDraw(9492, 1, 0, 0, 1);
        r872_complexBoxDraw(9496, 1, 0, 1, 0);
        r872_complexBoxDraw(9500, 1, 1, 0, 1);
        r872_complexBoxDraw(9508, 1, 1, 1, 0);
        r872_complexBoxDraw(9516, 0, 1, 1, 1);
        r872_complexBoxDraw(9524, 1, 0, 1, 1);
        r872_complexBoxDraw(9532, 1, 1, 1, 1);
        r872_complexBoxDraw(9554, 0, 1, 0, 1, r872_dlboxdraw, 1);
        r872_complexBoxDraw(9557, 0, 1, 1, 0, r872_dlboxdraw, 1);
        r872_complexBoxDraw(9560, 1, 0, 0, 1, r872_dlboxdraw, 1);
        r872_complexBoxDraw(9563, 1, 0, 1, 0, r872_dlboxdraw, 1);
        r872_complexBoxDraw(9566, 1, 1, 0, 1, r872_dlboxdraw, 1);
        r872_complexBoxDraw(9569, 1, 1, 1, 0, r872_dlboxdraw, 1);
        r872_complexBoxDraw(9572, 0, 1, 1, 1, r872_dlboxdraw, 1);
        r872_complexBoxDraw(9575, 1, 0, 1, 1, r872_dlboxdraw, 1);
        r872_complexBoxDraw(9578, 1, 1, 1, 1, r872_dlboxdraw, 1);
        var r872_hDashed = function _r872_t3(r904_unicode, r904_segments, r904_weight) {
            return function _r904_t2() {
                var _r906_t2 = this;
                var r906_currentGlyph = _r906_t2;
                if (!r906_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.51')
                    r250_glyphList.pop();
                r906_currentGlyph['set-width'](r872_width);
                r906_currentGlyph.include(r250_ForceUpright());
                var _r906_t0 = 0;
                var _r906_t1 = r904_segments;
                var r906_j = _r906_t0;
                for (; r906_j < _r906_t1; r906_j = r906_j + 1)
                    r906_currentGlyph.include(r250_HBar(r1_mix(r872_width * r906_j / r904_segments, r872_width * (r906_j + 1) / r904_segments, 0.2), r1_mix(r872_width * r906_j / r904_segments, r872_width * (r906_j + 1) / r904_segments, 0.8), r872_midy, r904_weight));
                r250_xn$save$2Lrc5.call(r906_currentGlyph, 'bd' + r904_unicode.toString(16).toUpperCase(), r904_unicode);
                r250_dependencyProfile[r906_currentGlyph.name] = r250_getDependencyProfile(r906_currentGlyph);
                return r906_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.51', r250_xn$donothing$2Lrc0b));
        };
        var r872_vDashed = function _r872_t4(r912_unicode, r912_segments, r912_weight) {
            return function _r912_t2() {
                var _r914_t2 = this;
                var r914_currentGlyph = _r914_t2;
                if (!r914_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.52')
                    r250_glyphList.pop();
                r914_currentGlyph['set-width'](r872_width);
                r914_currentGlyph.include(r250_ForceUpright());
                var _r914_t0 = 0;
                var _r914_t1 = r912_segments;
                var r914_j = _r914_t0;
                for (; r914_j < _r914_t1; r914_j = r914_j + 1)
                    r914_currentGlyph.include(r250_VBar(r872_midx, r1_mix(r1_mix(-r250_font.OS_2.usWinDescent, r250_font.OS_2.usWinAscent, r914_j / r912_segments), r1_mix(-r250_font.OS_2.usWinDescent, r250_font.OS_2.usWinAscent, (r914_j + 1) / r912_segments), 0.2), r1_mix(r1_mix(-r250_font.OS_2.usWinDescent, r250_font.OS_2.usWinAscent, r914_j / r912_segments), r1_mix(-r250_font.OS_2.usWinDescent, r250_font.OS_2.usWinAscent, (r914_j + 1) / r912_segments), 0.8), r912_weight));
                r250_xn$save$2Lrc5.call(r914_currentGlyph, 'bd' + r912_unicode.toString(16).toUpperCase(), r912_unicode);
                r250_dependencyProfile[r914_currentGlyph.name] = r250_getDependencyProfile(r914_currentGlyph);
                return r914_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.52', r250_xn$donothing$2Lrc0b));
        };
        r872_hDashed(9476, 3, r872_light);
        r872_hDashed(9477, 3, r872_heavy);
        r872_hDashed(9480, 4, r872_light);
        r872_hDashed(9481, 4, r872_heavy);
        r872_hDashed(9548, 2, r872_light);
        r872_hDashed(9549, 2, r872_heavy);
        r872_vDashed(9478, 3, r872_light);
        r872_vDashed(9479, 3, r872_heavy);
        r872_vDashed(9482, 4, r872_light);
        r872_vDashed(9483, 4, r872_heavy);
        r872_vDashed(9550, 2, r872_light);
        r872_vDashed(9551, 2, r872_heavy);
        var r872_bdArcRadius = Math.min(r872_midx + r250_O * 2, (r872_midy - r872_boty) / 2);
        (function _r872_t5() {
            var _r921_t0 = this;
            var r921_currentGlyph = _r921_t0;
            if (!r921_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.53')
                r250_glyphList.pop();
            r921_currentGlyph['set-width'](r872_width);
            r921_currentGlyph.include(r250_ForceUpright());
            r921_currentGlyph.include(r250_dispiro(r250_widths.center(r872_light), r250_flat(r872_midx, r872_boty, r250_heading(r250_UPWARD)), r250_curl(r872_midx, r872_midy - r872_bdArcRadius, r250_heading(r250_UPWARD)), r250_arcvh(), r250_flat(r872_midx + r872_bdArcRadius, r872_midy, r250_heading(r250_RIGHTWARD)), r250_curl(r872_width, r872_midy, r250_heading(r250_RIGHTWARD))));
            r250_xn$save$2Lrc5.call(r921_currentGlyph, 'bd256D', 9581);
            r250_dependencyProfile[r921_currentGlyph.name] = r250_getDependencyProfile(r921_currentGlyph);
            return r921_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.53', r250_xn$donothing$2Lrc0b)));
        (function _r872_t6() {
            var _r927_t0 = this;
            var r927_currentGlyph = _r927_t0;
            if (!r927_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.54')
                r250_glyphList.pop();
            r927_currentGlyph['set-width'](r872_width);
            r927_currentGlyph.include(r250_ForceUpright());
            r927_currentGlyph.include(r250_dispiro(r250_widths.center(r872_light), r250_flat(r872_midx, r872_boty, r250_heading(r250_UPWARD)), r250_curl(r872_midx, r872_midy - r872_bdArcRadius, r250_heading(r250_UPWARD)), r250_arcvh(), r250_flat(r872_midx - r872_bdArcRadius, r872_midy, r250_heading(r250_LEFTWARD)), r250_curl(0, r872_midy, r250_heading(r250_LEFTWARD))));
            r250_xn$save$2Lrc5.call(r927_currentGlyph, 'bd256E', 9582);
            r250_dependencyProfile[r927_currentGlyph.name] = r250_getDependencyProfile(r927_currentGlyph);
            return r927_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.54', r250_xn$donothing$2Lrc0b)));
        (function _r872_t7() {
            var _r933_t0 = this;
            var r933_currentGlyph = _r933_t0;
            if (!r933_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.55')
                r250_glyphList.pop();
            r933_currentGlyph['set-width'](r872_width);
            r933_currentGlyph.include(r250_ForceUpright());
            r933_currentGlyph.include(r250_dispiro(r250_widths.center(r872_light), r250_flat(r872_midx, r872_topy, r250_heading(r250_DOWNWARD)), r250_curl(r872_midx, r872_midy + r872_bdArcRadius, r250_heading(r250_DOWNWARD)), r250_arcvh(), r250_flat(r872_midx - r872_bdArcRadius, r872_midy, r250_heading(r250_LEFTWARD)), r250_curl(0, r872_midy, r250_heading(r250_LEFTWARD))));
            r250_xn$save$2Lrc5.call(r933_currentGlyph, 'bd256F', 9583);
            r250_dependencyProfile[r933_currentGlyph.name] = r250_getDependencyProfile(r933_currentGlyph);
            return r933_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.55', r250_xn$donothing$2Lrc0b)));
        (function _r872_t8() {
            var _r939_t0 = this;
            var r939_currentGlyph = _r939_t0;
            if (!r939_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.56')
                r250_glyphList.pop();
            r939_currentGlyph['set-width'](r872_width);
            r939_currentGlyph.include(r250_ForceUpright());
            r939_currentGlyph.include(r250_dispiro(r250_widths.center(r872_light), r250_flat(r872_midx, r872_topy, r250_heading(r250_DOWNWARD)), r250_curl(r872_midx, r872_midy + r872_bdArcRadius, r250_heading(r250_DOWNWARD)), r250_arcvh(), r250_flat(r872_midx + r872_bdArcRadius, r872_midy, r250_heading(r250_RIGHTWARD)), r250_curl(r872_width, r872_midy, r250_heading(r250_RIGHTWARD))));
            r250_xn$save$2Lrc5.call(r939_currentGlyph, 'bd2570', 9584);
            r250_dependencyProfile[r939_currentGlyph.name] = r250_getDependencyProfile(r939_currentGlyph);
            return r939_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.56', r250_xn$donothing$2Lrc0b)));
        (function _r872_t9() {
            var _r945_t0 = this;
            var r945_currentGlyph = _r945_t0;
            if (!r945_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.57')
                r250_glyphList.pop();
            r945_currentGlyph['set-width'](r872_width);
            r945_currentGlyph.include(r250_ForceUpright());
            r945_currentGlyph.include(r250_dispiro(r250_widths.center(r872_light), r250_flat(r872_width, r250_font.OS_2.usWinAscent), r250_curl(0, -r250_font.OS_2.usWinDescent)));
            r250_xn$save$2Lrc5.call(r945_currentGlyph, 'bd2571', 9585);
            r250_dependencyProfile[r945_currentGlyph.name] = r250_getDependencyProfile(r945_currentGlyph);
            return r945_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.57', r250_xn$donothing$2Lrc0b)));
        (function _r872_t10() {
            var _r951_t0 = this;
            var r951_currentGlyph = _r951_t0;
            if (!r951_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.58')
                r250_glyphList.pop();
            r951_currentGlyph['set-width'](r872_width);
            r951_currentGlyph.include(r250_ForceUpright());
            r951_currentGlyph.include(r250_dispiro(r250_widths.center(r872_light), r250_flat(0, r250_font.OS_2.usWinAscent), r250_curl(r872_width, -r250_font.OS_2.usWinDescent)));
            r250_xn$save$2Lrc5.call(r951_currentGlyph, 'bd2572', 9586);
            r250_dependencyProfile[r951_currentGlyph.name] = r250_getDependencyProfile(r951_currentGlyph);
            return r951_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.58', r250_xn$donothing$2Lrc0b)));
        return function _r872_t11() {
            var _r957_t0 = this;
            var r957_currentGlyph = _r957_t0;
            if (!r957_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.59')
                r250_glyphList.pop();
            r957_currentGlyph['set-width'](r872_width);
            r957_currentGlyph.include(r250_ForceUpright());
            r250_includeGlyphPart(r957_currentGlyph, r250_glyphs, 'bd2571');
            r250_includeGlyphPart(r957_currentGlyph, r250_glyphs, 'bd2572');
            r250_xn$save$2Lrc5.call(r957_currentGlyph, 'bd2573', 9587);
            r250_dependencyProfile[r957_currentGlyph.name] = r250_getDependencyProfile(r957_currentGlyph);
            return r957_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.59', r250_xn$donothing$2Lrc0b));
    }());
    (function _r250_t16() {
        var _r964_t0 = this;
        var r964_currentGlyph = _r964_t0;
        if (!r964_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.60')
            r250_glyphList.pop();
        var r964_fine = r250_adviceBlackness(3.5);
        var r964_y1 = r1_mix(r250_parenBot, r250_parenTop, 0.8);
        var r964_y2 = r1_mix(r250_parenBot, r250_parenTop, 0.2);
        r964_currentGlyph.include(r250_VBarLeft(r250_SB, r250_parenBot, r250_parenTop, r964_fine));
        r964_currentGlyph.include(r250_dispiro(r250_widths.rhs(r964_fine), r250_flat(r250_RIGHTSB, r964_y1), r250_curl(r250_RIGHTSB, r1_mix(r964_y1, r964_y2, 0.4)), r250_g4(r250_SB + r964_fine * r250_HVCONTRAST, r964_y2, r250_heading(r250_LEFTWARD))));
        r964_currentGlyph.include(r250_DotAt(r250_RIGHTSB - r964_fine * r250_HVCONTRAST / 2, r964_y1, Math.max(r964_fine * 1.5, r250_PERIODRADIUS)));
        r250_xn$save$2Lrc5.call(r964_currentGlyph, 'branch', 57504);
        r250_dependencyProfile[r964_currentGlyph.name] = r250_getDependencyProfile(r964_currentGlyph);
        return r964_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.60', r250_xn$donothing$2Lrc0b)));
    var r250_pwlMid = (r250_font.OS_2.usWinAscent - r250_font.OS_2.usWinDescent) / 2;
    var r250_pwlTop = (r250_font.OS_2.usWinAscent - r250_pwlMid) * r250_para.powerlineScaleY + r250_para.powerlineShiftY + r250_pwlMid;
    var r250_pwlBot = (-r250_font.OS_2.usWinDescent - r250_pwlMid) * r250_para.powerlineScaleY + r250_para.powerlineShiftY + r250_pwlMid;
    var r250_pwlNear = 0 * r250_para.powerlineScaleX + r250_para.powerlineShiftX;
    var r250_pwlFar = r250_WIDTH * r250_para.powerlineScaleX + r250_para.powerlineShiftX;
    (function _r250_t17() {
        var _r970_t0 = this;
        var r970_currentGlyph = _r970_t0;
        if (!r970_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.61')
            r250_glyphList.pop();
        r970_currentGlyph.include(r250_ForceUpright());
        r970_currentGlyph['start-from'](r250_pwlNear + r250_O, r250_pwlTop);
        r970_currentGlyph['line-to'](r250_pwlNear, r250_pwlTop);
        r970_currentGlyph['line-to'](r250_pwlFar, r1_mix(r250_pwlTop, r250_pwlBot, 0.5));
        r970_currentGlyph['line-to'](r250_pwlNear, r250_pwlBot);
        r970_currentGlyph['line-to'](r250_pwlNear + r250_O, r250_pwlBot);
        r250_xn$save$2Lrc5.call(r970_currentGlyph, 'pwlTriangleRight', 57520);
        r250_dependencyProfile[r970_currentGlyph.name] = r250_getDependencyProfile(r970_currentGlyph);
        return r970_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.61', r250_xn$donothing$2Lrc0b)));
    (function _r250_t18() {
        var _r979_t0 = this;
        var r979_currentGlyph = _r979_t0;
        if (!r979_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.62')
            r250_glyphList.pop();
        r979_currentGlyph.include(r250_ForceUpright());
        var r979_fine = r250_adviceBlackness(4);
        r979_currentGlyph.include(r250_dispiro(r250_widths.rhs(r979_fine), r250_flat(r250_pwlNear, r250_pwlTop), r250_curl(r250_pwlFar, r1_mix(r250_pwlTop, r250_pwlBot, 0.5))));
        r979_currentGlyph.include(r250_dispiro(r250_widths.rhs(r979_fine), r250_flat(r250_pwlFar, r1_mix(r250_pwlTop, r250_pwlBot, 0.5)), r250_curl(r250_pwlNear, r250_pwlBot)));
        r250_xn$save$2Lrc5.call(r979_currentGlyph, 'pwlAngleRight', 57521);
        r250_dependencyProfile[r979_currentGlyph.name] = r250_getDependencyProfile(r979_currentGlyph);
        return r979_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.62', r250_xn$donothing$2Lrc0b)));
    (function _r250_t19() {
        var _r985_t0 = this;
        var r985_currentGlyph = _r985_t0;
        if (!r985_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.63')
            r250_glyphList.pop();
        r985_currentGlyph.include(r250_ForceUpright());
        r250_includeGlyphPart(r985_currentGlyph, r250_glyphs, 'pwlTriangleRight');
        r985_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r1_mix(r250_pwlTop, r250_pwlBot, 0.5)));
        r250_xn$save$2Lrc5.call(r985_currentGlyph, 'pwlTriangleLeft', 57522);
        r250_dependencyProfile[r985_currentGlyph.name] = r250_getDependencyProfile(r985_currentGlyph);
        return r985_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.63', r250_xn$donothing$2Lrc0b)));
    (function _r250_t20() {
        var _r991_t0 = this;
        var r991_currentGlyph = _r991_t0;
        if (!r991_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.64')
            r250_glyphList.pop();
        r991_currentGlyph.include(r250_ForceUpright());
        r250_includeGlyphPart(r991_currentGlyph, r250_glyphs, 'pwlAngleRight');
        r991_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r1_mix(r250_pwlTop, r250_pwlBot, 0.5)));
        r250_xn$save$2Lrc5.call(r991_currentGlyph, 'pwlAngleLeft', 57523);
        r250_dependencyProfile[r991_currentGlyph.name] = r250_getDependencyProfile(r991_currentGlyph);
        return r991_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.64', r250_xn$donothing$2Lrc0b)));
    (function _r250_t21() {
        var _r997_t0 = this;
        var r997_currentGlyph = _r997_t0;
        if (!r997_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.65')
            r250_glyphList.pop();
        r997_currentGlyph.include(r250_ForceUpright());
        var r997_fine = r250_adviceBlackness(4);
        r997_currentGlyph.include(r250_HBarBottom(0, r250_WIDTH, r250_pwlBot));
        r250_xn$save$2Lrc5.call(r997_currentGlyph, 'pwlUnderline', 57518);
        r250_dependencyProfile[r997_currentGlyph.name] = r250_getDependencyProfile(r997_currentGlyph);
        return r997_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.65', r250_xn$donothing$2Lrc0b)));
    (function _r250_t22() {
        var _r1002_t0 = this;
        var r1002_currentGlyph = _r1002_t0;
        if (!r1002_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.66')
            r250_glyphList.pop();
        r1002_currentGlyph.include(r250_ForceUpright());
        var r1002_fine = r250_adviceBlackness(4);
        r1002_currentGlyph.include(r250_HBarTop(0, r250_WIDTH, r250_pwlTop));
        r250_xn$save$2Lrc5.call(r1002_currentGlyph, 'pwlOverline', 57519);
        r250_dependencyProfile[r1002_currentGlyph.name] = r250_getDependencyProfile(r1002_currentGlyph);
        return r1002_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.66', r250_xn$donothing$2Lrc0b)));
    (function _r250_t23() {
        var _r1007_t0 = this;
        var r1007_currentGlyph = _r1007_t0;
        if (!r1007_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.67')
            r250_glyphList.pop();
        var r1007_fine = r250_adviceBlackness(3.5);
        var r1007_y1 = r1_mix(r250_parenBot, r250_parenTop, 0.95);
        var r1007_y2 = r1_mix(r250_parenBot, r250_parenTop, 0.05);
        var r1007_lockTop = r1_mix(r1007_y2, r1007_y1, 0.6);
        var r1007_lockLeft = r250_SB / 2;
        var r1007_lockRight = r250_WIDTH - r250_SB / 2;
        var r1007_lockHoleWidth = 1 / 5;
        var r1007_lockHoleLeft = r1_mix(r1007_lockLeft, r1007_lockRight, 1 / 2 - r1007_lockHoleWidth / 2);
        var r1007_lockHoleRight = r1_mix(r1007_lockLeft, r1007_lockRight, 1 / 2 + r1007_lockHoleWidth / 2);
        var r1007_lockHoleTop = r1_mix(r1007_y2, r1007_lockTop, 0.75);
        var r1007_lockHoleBottom = r1_mix(r1007_y2, r1007_lockTop, 0.25);
        r1007_currentGlyph.include(r250_union(r250_intersection(r250_xn$spirooutline$1aao(r250_corner(0, 2 * r1007_y1), r250_corner(r250_WIDTH, 2 * r1007_y1), r250_corner(r250_WIDTH, r1007_lockTop - 1), r250_corner(0, r1007_lockTop - 1), r250_close()), r250_OShape(r1007_y1, r1007_y2, r250_SB, r250_RIGHTSB, r1007_fine, r250_SMALLSMOOTHA, r250_SMALLSMOOTHB)), r250_difference(r250_xn$spirooutline$1aao(r250_corner(r1007_lockLeft, r1007_lockTop), r250_corner(r1007_lockRight, r1007_lockTop), r250_corner(r1007_lockRight, r1007_y2), r250_corner(r1007_lockLeft, r1007_y2), r250_close()), r250_OShapeOutline(r1007_lockHoleTop, r1007_lockHoleBottom, r1007_lockHoleLeft, r1007_lockHoleRight, r1007_fine, r250_SMALLSMOOTHA * r1007_lockHoleWidth, r250_SMALLSMOOTHB * r1007_lockHoleWidth))));
        r250_xn$save$2Lrc5.call(r1007_currentGlyph, 'pwlLock', 57506);
        r250_dependencyProfile[r1007_currentGlyph.name] = r250_getDependencyProfile(r1007_currentGlyph);
        return r1007_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.67', r250_xn$donothing$2Lrc0b)));
    (function _r250_t24() {
        var _r1011_t0 = this;
        var r1011_currentGlyph = _r1011_t0;
        if (!r1011_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.68')
            r250_glyphList.pop();
        r1011_currentGlyph.include(r250_ForceUpright());
        r1011_currentGlyph['start-from'](r250_pwlNear + r250_O, r250_pwlTop);
        r1011_currentGlyph['line-to'](r250_pwlNear, r250_pwlTop);
        r1011_currentGlyph['line-to'](r250_pwlFar, r250_pwlBot);
        r1011_currentGlyph['line-to'](r250_pwlNear + r250_O, r250_pwlBot);
        r250_xn$save$2Lrc5.call(r1011_currentGlyph, 'pwlCornerBottomLeft', 57528);
        r250_dependencyProfile[r1011_currentGlyph.name] = r250_getDependencyProfile(r1011_currentGlyph);
        return r1011_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.68', r250_xn$donothing$2Lrc0b)));
    (function _r250_t25() {
        var _r1019_t0 = this;
        var r1019_currentGlyph = _r1019_t0;
        if (!r1019_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.69')
            r250_glyphList.pop();
        r1019_currentGlyph.include(r250_ForceUpright());
        var r1019_fine = r250_adviceBlackness(4);
        r1019_currentGlyph.include(r250_dispiro(r250_widths.rhs(r1019_fine), r250_flat(r250_pwlNear, r250_pwlTop), r250_curl(r250_pwlFar, r250_pwlBot)));
        r250_xn$save$2Lrc5.call(r1019_currentGlyph, 'pwlSlashBottomLeft', 57529);
        r250_dependencyProfile[r1019_currentGlyph.name] = r250_getDependencyProfile(r1019_currentGlyph);
        return r1019_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.69', r250_xn$donothing$2Lrc0b)));
    (function _r250_t26() {
        var _r1024_t0 = this;
        var r1024_currentGlyph = _r1024_t0;
        if (!r1024_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.70')
            r250_glyphList.pop();
        r1024_currentGlyph.include(r250_ForceUpright());
        r250_includeGlyphPart(r1024_currentGlyph, r250_glyphs, 'pwlCornerBottomLeft');
        r1024_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r1_mix(r250_pwlTop, r250_pwlBot, 0.5)));
        r250_xn$save$2Lrc5.call(r1024_currentGlyph, 'pwlCornerBottomRight', 57530);
        r250_dependencyProfile[r1024_currentGlyph.name] = r250_getDependencyProfile(r1024_currentGlyph);
        return r1024_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.70', r250_xn$donothing$2Lrc0b)));
    (function _r250_t27() {
        var _r1030_t0 = this;
        var r1030_currentGlyph = _r1030_t0;
        if (!r1030_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.71')
            r250_glyphList.pop();
        r1030_currentGlyph.include(r250_ForceUpright());
        r250_includeGlyphPart(r1030_currentGlyph, r250_glyphs, 'pwlSlashBottomLeft');
        r1030_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r1_mix(r250_pwlTop, r250_pwlBot, 0.5)));
        r250_xn$save$2Lrc5.call(r1030_currentGlyph, 'pwlSlashBottomRight', 57531);
        r250_dependencyProfile[r1030_currentGlyph.name] = r250_getDependencyProfile(r1030_currentGlyph);
        return r1030_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.71', r250_xn$donothing$2Lrc0b)));
    (function _r250_t28() {
        var _r1036_t0 = this;
        var r1036_currentGlyph = _r1036_t0;
        if (!r1036_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.72')
            r250_glyphList.pop();
        r1036_currentGlyph.include(r250_ForceUpright());
        r1036_currentGlyph['start-from'](r250_pwlNear + r250_O, r250_pwlTop);
        r1036_currentGlyph['line-to'](r250_pwlNear, r250_pwlTop);
        r1036_currentGlyph['line-to'](r250_pwlFar, r250_pwlTop);
        r1036_currentGlyph['line-to'](r250_pwlNear + r250_O, r250_pwlBot);
        r250_xn$save$2Lrc5.call(r1036_currentGlyph, 'pwlCornerTopLeft', 57532);
        r250_dependencyProfile[r1036_currentGlyph.name] = r250_getDependencyProfile(r1036_currentGlyph);
        return r1036_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.72', r250_xn$donothing$2Lrc0b)));
    (function _r250_t29() {
        var _r1044_t0 = this;
        var r1044_currentGlyph = _r1044_t0;
        if (!r1044_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.73')
            r250_glyphList.pop();
        r1044_currentGlyph.include(r250_ForceUpright());
        var r1044_fine = r250_adviceBlackness(4);
        r1044_currentGlyph.include(r250_dispiro(r250_widths.rhs(r1044_fine), r250_flat(r250_pwlNear, r250_pwlBot), r250_curl(r250_pwlFar, r250_pwlTop)));
        r250_xn$save$2Lrc5.call(r1044_currentGlyph, 'pwlSlashTopLeft', 57533);
        r250_dependencyProfile[r1044_currentGlyph.name] = r250_getDependencyProfile(r1044_currentGlyph);
        return r1044_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.73', r250_xn$donothing$2Lrc0b)));
    (function _r250_t30() {
        var _r1049_t0 = this;
        var r1049_currentGlyph = _r1049_t0;
        if (!r1049_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.74')
            r250_glyphList.pop();
        r1049_currentGlyph.include(r250_ForceUpright());
        r250_includeGlyphPart(r1049_currentGlyph, r250_glyphs, 'pwlCornerBottomLeft');
        r1049_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r1_mix(r250_pwlTop, r250_pwlBot, 0.5)));
        r250_xn$save$2Lrc5.call(r1049_currentGlyph, 'pwlCornerTopRight', 57534);
        r250_dependencyProfile[r1049_currentGlyph.name] = r250_getDependencyProfile(r1049_currentGlyph);
        return r1049_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.74', r250_xn$donothing$2Lrc0b)));
    (function _r250_t31() {
        var _r1055_t0 = this;
        var r1055_currentGlyph = _r1055_t0;
        if (!r1055_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-geometric.ptl.75')
            r250_glyphList.pop();
        r1055_currentGlyph.include(r250_ForceUpright());
        r250_includeGlyphPart(r1055_currentGlyph, r250_glyphs, 'pwlSlashBottomLeft');
        r1055_currentGlyph.include(r250_FlipAround(r250_MIDDLE, r1_mix(r250_pwlTop, r250_pwlBot, 0.5)));
        r250_xn$save$2Lrc5.call(r1055_currentGlyph, 'pwlSlashTopRight', 57535);
        r250_dependencyProfile[r1055_currentGlyph.name] = r250_getDependencyProfile(r1055_currentGlyph);
        return r1055_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-geometric.ptl.75', r250_xn$donothing$2Lrc0b)));
    return { 'ArrowShape': r250_ArrowShape };
};
