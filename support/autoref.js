"use strict";

const Point = require("./point");

function delta(a, b) {
	return Math.round((a - b) * 32);
}

function contourHash(c) {
	if (!c || c.length < 2) return ".";
	let lx = c[0].x,
		ly = c[0].y;
	let buf = "";
	for (let j = 1; j < c.length; j++) {
		const z = c[j];
		buf += `${z.on ? "o" : "f"}${z.cubic ? "c" : "q"}${delta(z.x, lx)},${delta(z.y, ly)};`;
		(lx = z.x), (ly = z.y);
	}
	return buf;
}

function match(g1, g2, _n) {
	for (let j = 0; j + g1.contours.length <= g2.contours.length; j++) {
		let found = true;
		for (let k = j; k < g2.contours.length && k - j < g1.contours.length; k++) {
			if (
				g1.contours[k - j].hash !== g2.contours[k].hash ||
				!(
					k <= j ||
					(delta(g1.contours[k - j][0].x, g1.contours[k - j - 1][0].x) ===
						delta(g2.contours[k][0].x, g2.contours[k - 1][0].x) &&
						delta(g1.contours[k - j][0].y, g1.contours[k - j - 1][0].y) ===
							delta(g2.contours[k][0].y, g2.contours[k - 1][0].y))
				)
			) {
				found = false;
				break;
			}
		}
		if (found) {
			const refX = g2.contours[j][0].x - g1.contours[0][0].x || 0;
			const refY = g2.contours[j][0].y - g1.contours[0][0].y || 0;
			if (Math.abs(refY) > 1 && g1.advanceWidth > 1) {
				continue;
			}
			if (!g2.references) g2.references = [];
			g2.references.push({
				glyph: g1.name,
				_n: _n,
				x: refX,
				y: refY,
				roundToGrid: false
			});
			g2.contours.splice(j, g1.contours.length);
			return true;
		}
	}
	return false;
}

function unlinkRef(g, dx, dy, glyf) {
	let contours = g.contours.map(c => c.map(z => new Point(z.x + dx, z.y + dy, z.on, z.cubic)));
	if (g.references)
		for (let r of g.references) {
			contours = contours.concat(unlinkRef(glyf[r._n], r.x + dx, r.y + dy, glyf));
		}
	return contours;
}

function autoref(glyf, excludeUnicodes) {
	suppressNaN(glyf);

	for (let j = 0; j < glyf.length; j++) {
		const g = glyf[j];
		if (g.contours) {
			for (let k = 0; k < g.contours.length; k++) {
				const contour = g.contours[k];
				contour.hash = contourHash(contour);
			}
		}
	}

	// Refl-referencify, forward.
	for (let j = 0; j < glyf.length; j++) {
		if (!glyf[j].contours.length || (glyf[j].references && glyf[j].references.length)) continue;
		for (let k = j + 1; k < glyf.length; k++) {
			if (glyf[j].contours.length === glyf[k].contours.length) {
				match(glyf[j], glyf[k], j);
			}
		}
	}

	// referencify, backward
	for (let j = 0; j < glyf.length; j++) {
		if (glyf[j].cmpPriority < 0) continue;
		if (!glyf[j].contours.length) continue;
		if (glyf[j].references && glyf[j].references.length) continue;
		for (let k = glyf.length - 1; k >= 0; k--) {
			if (glyf[j].contours.length > glyf[k].contours.length) continue;
			if (
				glyf[j].contours.length === glyf[k].contours.length &&
				!(glyf[k].references && glyf[k].references.length)
			) {
				continue;
			}
			while (match(glyf[j], glyf[k], j)) "pass";
		}
	}

	// unlink composite
	for (let j = 0; j < glyf.length; j++) {
		if (!glyf[j].references || glyf[j].references.length === 0) continue;
		if (
			glyf[j].contours.length === 0 &&
			!(glyf[j].unicode && excludeUnicodes.has(glyf[j].unicode[0]))
		) {
			continue;
		}
		glyf[j].contours = unlinkRef(glyf[j], 0, 0, glyf);
		glyf[j].references = [];
	}
}

function suppressNaN(glyf) {
	for (let j = 0; j < glyf.length; j++) {
		let g = glyf[j];
		if (!g.contours) continue;
		for (let k = 0; k < g.contours.length; k++) {
			let contour = g.contours[k];
			for (let z of contour) {
				if (!isFinite(z.x)) z.x = 0;
				if (!isFinite(z.y)) z.y = 0;
			}
		}
	}
}

module.exports = autoref;
