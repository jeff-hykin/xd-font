// // read font file
// const Font = require("fonteditor-core").Font
// const fs = require("fs")
// const glob = require("glob")

// let ttfFiles = glob.sync("**/*.ttf", {dot:true,nodir:false, ignore:[]})
// ttfFiles = [ttfFiles[0]] // DEBUGGING
// console.debug(`ttfFiles is:`,ttfFiles)
// for (let eachFont of ttfFiles) {
//     // 
//     // load the font
//     // 
//     let buffer = fs.readFileSync(eachFont)
//     // read font data
//     let font = Font.create(buffer, {
//         type: "ttf", // support ttf, woff, woff2, eot, otf, svg
//         hinting: true, // save font hinting
//         combinePath: false, // for svg path
//     })
//     let fontObject = font.get()
//     console.log(Object.keys(fontObject))
// }


// read font file
const opentype = require('./dist/opentype.js')
const fs = require("fs")
const glob = require("glob")

let ttfFiles = glob.sync("**/*.ttf", {dot:true,nodir:false, ignore:[]})
var font = opentype.loadSync(ttfFiles[0])
font.download("./testFont.otf") // error: Uncaught Error: lookup type 6 format 2 is not yet supported.

// /* => [ 'version',
//   'numTables',
//   'searchRenge',
//   'entrySelector',
//   'rengeShift',
//   'head',
//   'maxp',
//   'glyf',
//   'cmap',
//   'name',
//   'hhea',
//   'post',
//   'OS/2',
//   'fpgm',
//   'cvt',
//   'prep'
// ]
// */

// // write font file
// let buffer = font.write({
//     type: "woff", // support ttf, woff, woff2, eot, svg
//     hinting: true, // save font hinting
//     deflate: null, // deflate function for woff
//     support: { head: {}, hhea: {} }, // for user to overwrite head.xMin, head.xMax, head.yMin, head.yMax, hhea etc.
// })
// // fs.writeFileSync('font.woff', buffer)

// // to base64 str
// font.toBase64({
//     type: "ttf", // support ttf, woff, woff2, eot, svg
// })

// // optimize glyf
// font.optimize()

// // compound2simple
// font.compound2simple()

// // sort glyf
// font.sort()

// // find glyf
// let result = font.find({
//     unicode: [65],
// })
// let result = font.find({
//     filter: function (glyf) {
//         return glyf.name == "icon"
//     },
// })

// // merge another font object
// font.merge(font1, {
//     scale: 1,
// })
