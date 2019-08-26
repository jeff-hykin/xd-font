'use strict';
var r1_buildCCMP, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, r131_s;
var r131_xs = module.exports;
module.exports = r1_buildCCMP = function _r1_t8(r132_xn$chainrule$1aao, r132_markGlyphs, r132_commonList, r132_features, r132_lookups) {
    r132_commonList.push('ccmp');
    r132_features.ccmp = [
        'ccmp1',
        'ccmp2'
    ];
    var _r132_t3 = [
        'A',
        'a',
        'u',
        'cyrA',
        'cyra'
    ];
    (function (_r132_leti0) {
        var r133_groupA = _r132_leti0;
        return r132_lookups.ccmp1 = {
            'type': 'gsub_chaining',
            'subtables': [
                r132_xn$chainrule$1aao({
                    'left': [
                        'i',
                        'cyrUkrainiani',
                        'j',
                        'cyrje',
                        'iogonekBelow'
                    ],
                    'right': [
                        'dotlessi',
                        'dotlessi',
                        'dotlessj',
                        'dotlessj',
                        'iogonek.dotless'
                    ]
                }, {
                    'left': r132_markGlyphs.above,
                    'right': null
                }),
                r132_xn$chainrule$1aao(['eta'], {
                    'left': ['iotaBelow'],
                    'right': ['iotaLF']
                }),
                r132_xn$chainrule$1aao(['eta'], r132_markGlyphs.all, {
                    'left': ['iotaBelow'],
                    'right': ['iotaLF']
                }),
                r132_xn$chainrule$1aao(['eta'], r132_markGlyphs.all, r132_markGlyphs.all, {
                    'left': ['iotaBelow'],
                    'right': ['iotaLF']
                }),
                r132_xn$chainrule$1aao(['eta'], r132_markGlyphs.all, r132_markGlyphs.all, r132_markGlyphs.all, {
                    'left': ['iotaBelow'],
                    'right': ['iotaLF']
                }),
                r132_xn$chainrule$1aao(r133_groupA, {
                    'left': ['ogonekBelow'],
                    'right': ['ogonekTR']
                }),
                r132_xn$chainrule$1aao(r133_groupA, r132_markGlyphs.all, {
                    'left': ['ogonekBelow'],
                    'right': ['ogonekTR']
                }),
                r132_xn$chainrule$1aao(r133_groupA, r132_markGlyphs.all, r132_markGlyphs.all, {
                    'left': ['ogonekBelow'],
                    'right': ['ogonekTR']
                }),
                r132_xn$chainrule$1aao(r133_groupA, r132_markGlyphs.all, r132_markGlyphs.all, r132_markGlyphs.all, {
                    'left': ['ogonekBelow'],
                    'right': ['ogonekTR']
                })
            ]
        };
    }(_r132_t3));
    return r132_lookups.ccmp2 = {
        'type': 'gsub_ligature',
        'subtables': [{
                'psilivaria': [
                    'commaAbove',
                    'graveAbove'
                ],
                'psilioxia': [
                    'commaAbove',
                    'acuteAbove'
                ],
                'psiliperispomeni': [
                    'commaAbove',
                    'perispomeniAbove'
                ],
                'dasiavaria': [
                    'revCommaAbove',
                    'graveAbove'
                ],
                'dasiaoxia': [
                    'revCommaAbove',
                    'acuteAbove'
                ],
                'dasiaperispomeni': [
                    'revCommaAbove',
                    'perispomeniAbove'
                ]
            }]
    };
};
var _r131_t0 = Object.keys(r131_xs);
var _r131_t1 = _r131_t0.length;
var _r131_t2 = 0;
for (; _r131_t2 < _r131_t1; _r131_t2 = _r131_t2 + 1) {
    r131_s = _r131_t0[_r131_t2];
    module.exports[r131_s] = r131_xs[r131_s];
}
