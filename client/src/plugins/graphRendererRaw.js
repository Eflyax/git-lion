function o(t) {
	t = t && t.getBoundingClientRect();
	var e = Number(window.scrollX || window.pageXOffset || 0),
			r = Number(window.scrollY || window.pageYOffset || 0);
	return t && {
			left: t.left + e,
			top: t.top + r
	}
}

function i() {
	var e = document.getElementById("commits-table");
	if (e || (e = document.getElementById("compare-commits-table")), !e) {
		return null;
	}

	for (var r = e.getElementsByTagName("tr"), o = 0, t = r.item(o); t && !t.getAttribute("data-commitid");) {
		t = r.item(++o);
	}

	return t && [o, t, r, t.getAttribute("data-commitid")]
}

function n() {
	var e = document.getElementById("bit-booster");

	e || (
		e = document.createElementNS(r, "svg"),
		e.setAttribute("width", 60),
		e.setAttribute("height", 120),
		e.setAttribute("text-rendering", "optimizeLegibility"),
		e.id = "bit-booster"
		), t.svg = e;

	var o = document.getElementById("bit-booster-tbl");

	if (o) {
		t.tdL || (t.tdL = o.getElementsByTagName("td").item(0));
		t.tdL.appendChild(e);
	}
	else {
			var a = document.getElementsByClassName("commits-content").item(0);

			a || (a = document.getElementById("compare-content"));
			o = document.createElement("table");
			o.id = "bit-booster-tbl";
			o.style.width = "1%";

			var
				i = o.insertRow(),
				n = i.insertCell(-1),
				s = i.insertCell(-1),
				style = null;

			n.style.verticalAlign = "top", s.style.width = "99%", s.style.verticalAlign = "top", a.appendChild(o),
			style = document.createElement("style"), style.setAttribute("type", "text/css"), style.textContent = '\n        @font-face {\n            font-family: "Atlassian Icons";\n            src: url(http://aui-cdn.atlassian.com/aui-adg/5.9.6/css/fonts/atlassian-icons.eot);\n            src: url(http://aui-cdn.atlassian.com/aui-adg/5.9.6/css/fonts/atlassian-icons.eot?#iefix) format("embedded-opentype"), url(http://aui-cdn.atlassian.com/aui-adg/5.9.6/css/fonts/atlassian-icons.woff) format("woff"), url(http://aui-cdn.atlassian.com/aui-adg/5.9.6/css/fonts/atlassian-icons.ttf) format("truetype"), url(http://aui-cdn.atlassian.com/aui-adg/5.9.6/css/fonts/atlassian-icons.svg#atlassian-icons) format("svg");\n            font-weight: normal;\n            font-style: normal;\n        }\n        #bit-booster-tbl, #bit-booster-tbl * { line-height: 1.0; font-family: monospace; border-spacing: 0; margin:0; border: 0; padding: 0; font-size: 16px;}\n        #bit-booster-tbl span.icon { font-family: "Atlassian Icons"; font-size: 16px; padding-left: 2px; }\n        #bit-booster-tbl td.d { font-style: italic; color: darkgray; padding-left: 0.7em; white-space: nowrap; }\n        #bit-booster-tbl td.commit { padding: 4px 1px; }\n';
			n.appendChild(e);
			n.setAttribute("rowspan", 99999);
			t.tdL = n;
			t.style = style
	}
}

function a() {
	function f(t, e, r) {
			l[t] || (l[t] = []), l[t][e] = r
	}

	function u(t, e) {
			return l[t] && l[t][e]
	}

	function p(t) {
			return t.parents && t.parents.length > 1
	}

	function v(n) {
			var b = t.svg,
					g = o(b),
					l = t.commitsList,
					i = n;
			n.pathsDrawn = Object.create(null), n.drawPathTo = function(t) {
					if (!n.pathsDrawn[t.sha1]) {
							n.pathsDrawn[t.sha1] = !0;
							var s = t.col - n.col,
									r = n.col;
							s > 0 && (r += s);
							for (var w = t.row - n.row, f = !1, g = !1; !g;) {
									for (var b = !1, m = 1; w > m; m++) {
											var v = l[n.row + m];
											if (r === v.col) {
													f = !0, b = !0, r++;
													break
											}
											var c = u(n.row + m, r);
											if (c && c !== t) {
													f = !0, b = !0, r++;
													break
											}
									}
									b || (g = !0)
							}
							var o = n.pos(t);
							if (f) {
									d = Math.max(d, r), c = u(n.row, r);
									var h = n.prevParent(t),
											y = t.col;
									if (h) var y = h.col + 1;
									t == u(n.row, y) ? (o = n.pos(l[n.row + 1]), r = t.col, o.setColor(t.col), n.curveLeft(o, t.col - n.col, t), n.path(o, t.row + 1, t.col, t)) : (p(i) || c && c !== i ? (o.setColor(r), n.curveRight(o, r - n.col, t)) : (n.col = r, n.x = a + e * n.col, s = t.col - n.col, o = n.pos(t)), o.setColor(r), n.path(o, t.row - 1, r, t), n.curveLeft(o, t.col - r, t)), t.colorOverride = r
							} else s > 0 ? (n.curveRight(o, s, t), n.path(o, t.row, r, t)) : 0 > s ? (n.path(o, t.row - 1, r, t), n.curveLeft(o, s, t)) : n.path(o, t.row, r, t)
					}
			}, n.prevParent = function(e) {
					if (e && e.sha1 && n.parents && n.parents.length > 1)
							for (var t = 1; t < n.parents.length; t++)
									if (e.sha1 === n.parents[t]) return s[n.parents[t - 1]]
			}, n.plumb = function() {
					var h = t.commitsList;
					if (!n.isPlumbed) {
							var m = o(n.htmlElement);
							n.y = 11 + m.top - g.top;
							var u = void 0;
							if (n.parents && n.parents.length > 0)
									for (var r = 0; r < n.parents.length; r++) {
											var l = s[n.parents[r]];
											if (l && !l.isPlumbed) {
													0 == r ? u = l.plumb() : l.plumb();
													var m = l.col - n.col,
															v = l.row - n.row;
													if (0 === m && (m = r), m >= 0) var b = n.col + m;
													else b = n.col;
													for (var f = 1; v > f; f++) {
															var c = h[n.row + f];
															c && !c.isPlumbed && (c.col = b + 1, c.x = a + e * c.col, d = Math.max(c.col, d))
													}
											} else 0 == r && (u = i)
									} else u = i;
							return n.isPlumbed = !0, u
					}
			}, n.draw = function() {
					if (!n.isDone) {
							n.isDone = !0;
							for (var t = 0; n.parents && t < n.parents.length; t++) {
									var e = s[n.parents[t]];
									e ? (n.drawPathTo(e), e.draw()) : n.path(n.pos(), n.row + 1, n.col, void 0, !0)
							}
					}
			},
			n.pos = function(a) {
				var w = null;
					var o = t.commitsList,
							r = [n.x, n.y];
					return r.setColor = function(t) {
							Number(t) === t && (r.color = m[t % m.length], r.srcColor = r.color)
					},
					r.setColor(a && a.col), r.srcColor = m[n.col % m.length], r.color || (r.color = r.srcColor), n.colorOverride && 0 !== n.col && r.setColor(n.colorOverride), r.below = function(n) {
							var e = o[n],
									t = e && e.y;
							return t || (t = o[o.length - 1].y + c), [r[0], t]
					},
					r.right = function(t) {

							return w = [r[0] + e * t, r[1] + c], a && o.length > n.row + 1 && (w[1] = o[n.row + 1].y), [r[0] - 1, r[1] + .75 * c, r[0] + e * t + 1, r[1] + .25 * c, w[0], w[1]]
					},
					r.left = function(t) {
							return [r[0] + 1, r[1] + .75 * c, r[0] + e * t - 1, r[1] + .25 * c, r[0] + e * t, a.y]
					}, r
			}, n.curveRight = function(e, a, i) {
					i && f(n.row + 1, n.col + a, i);
					var o = e.right(a),
							t = document.createElementNS(r, "path");
					t.setAttribute("d", "M" + e.join(",") + "C" + o.join(",")), t.setAttribute("stroke-width", 2), t.setAttribute("stroke-opacity", 1), t.setAttribute("opacity", 1), t.setAttribute("fill", "none"), t.setAttribute("stroke", e.color), n.drawEarlier(t), e[0] = o[o.length - 2], e[1] = o[o.length - 1]
			}, n.curveLeft = function(e, a) {
					var o = e.left(a),
							t = document.createElementNS(r, "path");
					t.setAttribute("d", "M" + e.join(",") + "C" + o.join(",")), t.setAttribute("stroke-width", 2), t.setAttribute("stroke-opacity", 1), t.setAttribute("opacity", 1), t.setAttribute("fill", "none"), t.setAttribute("stroke", e.srcColor), n.drawEarlier(t), e[0] = o[o.length - 2], e[1] = o[o.length - 1]
			}, n.path = function(o, m, b, s, l) {
					var c = t.svg,
							u = t.commitsList;
					if (!l && s)
							for (var d = n.row + 1; m > d; d++) f(d, b, s);
					var a = document.createElementNS(r, "path"),
							i = o.below(m);
					l && n.row !== u.length - 1 && (i[0] = o[0] + 1.5 * e, i[1] = o[1] + .7 * (i[1] - o[1])), a.setAttribute("d", "M" + o.join(",") + "L" + i.join(",")), a.setAttribute("stroke-width", 2), a.setAttribute("stroke-opacity", 1), l && a.setAttribute("stroke-dasharray", "15,3,3,3,3,3,3,3,3,3,3"), a.setAttribute("opacity", 1), s && s.col && n.col < s.col ? a.setAttribute("stroke", o.color) : a.setAttribute("stroke", o.srcColor), c.appendChild(a), o[1] = i[1];
					var g = c.getAttribute("width");
					g < o[0] + 15 && c.setAttribute("width", o[0] + 15)
			}, n.drawEarlier = function(r) {
					var e = t.svg;
					e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r)
			}, n.circle = function() {
					var l = void 0,
							e = n.pos(),
							i = t.svg,
							h = i.getAttribute("width"),
							b = i.getAttribute("height"),
							o = document.createElementNS(r, "rect");
					o.id = "R_" + n.sha1, o.setAttribute("x", 0), o.setAttribute("y", Number(e[1] - 14)), o.setAttribute("width", "100%"), o.setAttribute("height", 28), o.setAttribute("stroke", "none"), o.setAttribute("stroke-width", 0), o.setAttribute("fill", "transparent"), i.appendChild(o);
					var a = document.createElementNS(r, "circle");
					a.id = "C_" + n.sha1, a.setAttribute("cx", e[0]), a.setAttribute("cy", e[1]), a.setAttribute("r", 4), a.setAttribute("fill", e.color), a.setAttribute("stroke", "none"), i.appendChild(a);
					var s = n.tags && n.tags.length > 0,
							m = n.branches && n.branches.length > 0,
							u = s && m,
							f = void 0;
					m && (f = n.insertTag(e, !1, u, l)), s && n.insertTag(e, !0, u, l, f);
					for (var d = document.getElementById("T_" + n.sha1), g = d.getElementsByTagName("td"), c = g.length - 1; 3 > c; c++) {
							var v = d.insertCell(-1);
							v.textContent = " "
					}
					h < e[0] && i.setAttribute("width", e[0] + 10), b < e[1] && i.setAttribute("height", e[1] + 10)
			}, n.insertTag = function(i, r, s, l, c) {
					var o = document.getElementById("T_" + n.sha1),
							a = r ? n.tags : n.branches,
							t = o.insertCell(-1);
					t.setAttribute("class", "d"), t.textContent = " " + a.join(", ");
					var e = document.createElement("span");
					return e.setAttribute("class", "icon"), e.textContent = r ? "\uf13b" : "\uf128", t.appendChild(e), {}
			}
	}

	function h(t) {
			function o(t) {
					return t.sort().filter(function(e, t, r) {
							return !t || e != r[t - 1]
					})
			}
			t = t.trim(), "(" === t.charAt(0) && (t = t.substr(1)), ")" === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), t = t.trim();
			for (var n = [], a = [], i = t.split(", "), r = 0; r < i.length; r++) {
					var e = i[r];
					0 == e.indexOf("tag: ") ? n.push(e.substr(5)) : e.indexOf("refs/pull-requests/") >= 0 || a.push(e)
			}
			return [o(n), o(a)]
	}

	function g(y) {
			function A(t) {
					if (t.branches && t.branches.length > 0)
							for (var r = 0; r < t.branches.length; r++) {
									var e = t.branches[r];
									if ("origin/master" === e || "master" === e || "HEAD" === e || e.startsWith("HEAD ")) return !0
							}
					return !1
			}
			var i = t.commitsList,
					b = y.trim().split("\n");
			n();

			for (var r = 0; r < b.length; r++) {
					var l = b[r];

					if ("" !== l.trim()) {
							l = l.split("|");
							var d = l[0],
									C = l[1] && "" !== l[1].trim(),
									w = document.getElementById("bit-booster-tbl"),
									m = w.insertRow(),
									u = m.insertCell(-1);
							m.id = "T_" + d, m.setAttribute("data-commitid", d);
							u.setAttribute("class", "commit"), u.textContent = d.substr(0, 6);
							var o = {
									isDone: !1,
									isPlumbed: !1,
									sha1: d,
									x: a,
									row: i.length,
									htmlElement: u,
									col: 0
							};
							if (i.push(o), s[o.sha1] = o, C && (o.parents = l[1].split(" ")), l[2] && "" !== l[2].trim()) {
									var g = h(l[2].trim());
									o.tags = g[0], o.branches = g[1]
							}
					}
			}
			for (r = 0; r < i.length; r++) v(i[r]);
			var c = void 0;
			for (r = 0; r < i.length; r++)
					if (o = i[r], A(o)) {
							c = o;
							break
					} for (c || (c = i[0]), r = 0; r < (c ? c.row : i.length); r++) o = i[r], o.col++, o.x = a + e * o.col, f(r, 0, c);

				if (c) {
					var p = c.plumb();
					if (p) {
						for (r = p.row + 1; r < i.length; r++) {
							o = i[r], 0 === o.col && (o.col++, o.x = a + e * o.col)
						}
					}
			}
			for (r = 0; r < i.length; r++) i[r].plumb();
			for (r = i.length - 1; r >= 0; r--) i[r].draw();
			for (r = i.length - 1; r >= 0; r--) i[r].circle()
	}
	var m = [
		"#298FB2", "#104EF4", "#7A00B5", "#CD005D", "#EB4624", "#BA9A25", "#58A927", "#b08e6a", "#91a8d0", "#f7cac9"
	],
			e = 15,
			c = 35,
			d = 0,
			l = [],
			s = Object.create(null),
			a = 9,
			b = function() {
					var n = t.commitsList;
					l = [];
					var e = i();
					if (e) {
							for (var m = e[2], f = e[0], u = 0, o = f; o < m.length; o++) {
									e = m.item(o);
									var c = e.getAttribute("data-commitid");
									if (c) {
											e.classList.remove("focused-commit");
											var r = n[u];
											if (!r || r.sha1 !== c) break;
											var d = e.getElementsByClassName("commit").item(0);
											d && (r.htmlElement = d.firstChild), r.isDone = !1, r.isPlumbed = !1, r.x = a, r.col = 0, delete r.colorOverride, u++
									}
							}
							for (u < n.length && n.splice(u, n.length - o); o < m.length; o++) e = m.item(o), e.classList.remove("focused-commit"), c = e.getAttribute("data-commitid"), c && (d = e.getElementsByClassName("commit").item(0), d && (e.id = "T_" + c, r = {
									isDone: !1,
									isPlumbed: !1,
									sha1: c,
									x: a,
									row: n.length,
									col: 0,
									htmlElement: d.firstChild
							}, n.push(r), s[r.sha1] = r))
					}
			};

	return b.g = g, b.commitsTable = s, b
}

function dg(l) {
	cg();
	var d = document.getElementById("data");
	d && (d.value = l);
	var b = a();
	b(), b.g(l);
	var f = t.svg;

	// e("#bit-booster-tbl").find("tr").mouseenter(function() {
	// 		var t = this.getAttribute("data-commitid");
	// 		if (e("#T_" + t).addClass("commitHover"), t) {
	// 				var r = f.getElementById("C_" + t);
	// 				r.setAttribute("class", "commitHover")
	// 		}
	// }).mouseleave(function() {
	// 		var t = this.getAttribute("data-commitid");
	// 		if (e("#T_" + t).removeClass("commitHover"), t) {
	// 				var r = f.getElementById("C_" + t);
	// 				r.removeAttribute("class")
	// 		}
	// });

	// e("#bit-booster").find("rect, circle").mouseenter(function() {
	// 		sha = this.id.substring(2), e("#T_" + sha).addClass("commitHover")
	// }).mouseleave(function() {
	// 		sha = this.id.substring(2), e("#T_" + sha).removeClass("commitHover")
	// });

	var g = t.style.outerHTML.toString(),
			r = document.getElementById("bit-booster-tbl");
	r = r.cloneNode(!0);
	for (var u = r.getElementsByTagName("rect"), i = u.length - 1; i >= 0; i--) {
			var m = u.item(i);
			m.parentNode.removeChild(m)
	}
	var c = r.outerHTML.toString(),
			s = r.getElementsByTagName("svg").item(0).outerHTML.toString();

			// s = vkbeautify.xml(s), c = '<meta charset="UTF-8">\n' + vkbeautify.xml(g) + "\n<!-- http://bit-booster.com/graph.html  DATA WAS:\n" + l + "\n-->\n" + vkbeautify.xml(c);

	var h = new Blob([s], {
					type: "image/svg+xml"
			}),
			n = document.createElement("a");
	n.href = URL.createObjectURL(h), n.download = "graph.svg", n.textContent = "graph.svg";

	// o.innerHTML = "Download Graph: &nbsp; &nbsp; &nbsp; " + n.outerHTML;
	// var v = document.getElementById("output");
	// v.value = c
}

function cg() {
	if (t.svg && t.svg.parentNode) {
			var s = t.svg;
			s.parentNode.removeChild(s), t.svg = void 0;
			var l = a();
			t.commitsList.length = 0;
			for (var c in l.commitsTable) delete l.commitsTable[c]
	}
	for (var r = document.getElementById("download"); r && r.firstChild;) r.removeChild(r.firstChild);
	var o = document.getElementById("bit-booster");
	o && o.parentNode.removeChild(o);
	var i = document.getElementById("bit-booster-tbl");
	i && i.parentNode.removeChild(i);
	var e = document.getElementById("data");
	e && (e.value = ""), e = document.getElementById("output"), e && (e.value = ""), n()
}

function rg() {
	cg();
	var e = document.getElementById("data"),
			n = "539495f|a9d6243|master\n        a9d6243|8e17cfd dba91e2 cdadcd7 c954c3e 658b04e 8efa6b6 a2d7854\n        a2d7854|9d95af8\n        8efa6b6|9d95af8|test_branch\n        9d95af8\n        658b04e|9317a9b\n        c954c3e|9317a9b|tag: tag1\n        9317a9b\n        cdadcd7|f4046fa\n        dba91e2|f4046fa|tag: tag5, tag: tag6\n        f4046fa\n        8e17cfd|e34b4d0\n        e34b4d0|5ff6ce7\n        5ff6ce7|d86e7ce|tag: tag2, tag: tag3, another_branch\n        d86e7ce|44f3ead f537ede 79e536a\n        f537ede|653a6f6\n        79e536a|653a6f6 a1a7ab4\n        44f3ead|f2e7f46 653a6f6\n        653a6f6|422dd3c d3c5150\n        a1a7ab4|649a524\n        d3c5150|649a524\n        f2e7f46|422dd3c\n        422dd3c|649a524\n        649a524|90cd17a\n        90cd17a|76092f0 f37def6 0f8187b c44a61f 0b6fd60 66537bf f9c5353 17f5428 3c52fb4\n        76092f0\n        3c52fb4\n        17f5428||tag: x, tag: y, tag: z\n        f9c5353\n        66537bf\n        0b6fd60\n        c44a61f\n        0f8187b\n        f37def6";
	if (e) {
			for (var r = n.split("\n"), o = "", t = 0; t < r.length; t++) o += r[t].trim() + "\n";
			e.value = o.trim()
	}
}
var
	r = "http://www.w3.org/2000/svg",
	s = "http://www.w3.org/1999/xlink",
	t = Object.create(null);
t.commitsList = [];

window.drawGraph = dg;
