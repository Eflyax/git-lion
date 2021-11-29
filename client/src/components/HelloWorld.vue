<template>
		<table width="100%">
			<tbody>
				<tr>
					<td rowspan="2" style="padding-right: 75px; vertical-align: top">
						<!-- <v-btn @click="startDrawing">Draw Commit Graph</v-btn> -->
						<br />
						<textarea rows="35" cols="60" id="data" wrap="soft">
76d70c7|f8a96b4| (HEAD -> feature/ci, origin/feature/ci)
f8a96b4|f071907|
c2384fc|636d87e 1c77e10| (refs/stash)
1c77e10|636d87e|
ee78e2e|fea8cdf| (origin/backup/jhruby)
efb9f53|15c30e3| (origin/feature/pages)
fea8cdf|15c30e3|
15c30e3|43e2c7e|
636d87e|43e2c7e| (origin/feature/snippets, feature/snippets)
43e2c7e|0a6dd75 a9493da| (origin/master, origin/HEAD, master)
a9493da|0a6dd75|
b6df712|5ad5971| (origin/feature/docs, feature/docs)
5ad5971|5aa2cf0|
5aa2cf0|176c52e 0a6dd75|
0a6dd75|11a2f51 88c491e|
88c491e|11a2f51|
176c52e|cfbb88d|
cfbb88d|4d10cb3|
4d10cb3|c06beeb|
c06beeb|7f428d8|
7f428d8|280bfd6 11a2f51|
11a2f51|d61114e 3cbac0a|
3cbac0a|d61114e|
d61114e|19a8f67 b904a84|
b904a84|19a8f67|
280bfd6|91435b8 72819c2|
91435b8|8289656|
8289656|b832ade|
b832ade|bf3c185|
bf3c185|ab17d7f|
ab17d7f|7b84362|
7b84362|a82eb15|
a82eb15|25cd73d|
72819c2|b9bbd7c|
25cd73d|9fc0b1a|
9fc0b1a|8d537c5|
b9bbd7c|c0cdc9d|
c0cdc9d|d925bf1|
8d537c5|852f0ad|
852f0ad|6cac926|
6cac926|cbfff21|
cbfff21|da68f82|
da68f82|dd7c02d d925bf1|
dd7c02d|cdd5b68|
cdd5b68|b5b8b2c|
b5b8b2c|3a4b1d1|
3a4b1d1|19a8f67|
d925bf1|b6945c5|
b6945c5|4911eab|
4911eab|af1301d|
af1301d|95c5a26|
95c5a26|446bfba|
f071907|6d2117a|
446bfba|f04e07d|
f04e07d|975d1b7|
975d1b7|2538677|
2538677|0603ae6|
0603ae6|313c6fd|
313c6fd|4cb0a5a 2bf777b|
4cb0a5a|f1777c8|
2bf777b|f1777c8|
f1777c8|71f29d6|
71f29d6|a36c3ab|
a36c3ab|d00b475 ba4ff6b|
d00b475|f678af7|
ba4ff6b|f678af7|
f678af7|1321bb8|
1321bb8|35c03cb|
35c03cb|f411748|
f411748|8162ea2|
8162ea2|a596e26|
a596e26|c77fa31|
c77fa31|8b54b15 a55fbc5|
8b54b15|95a7310|
95a7310|2d4eb98|
2d4eb98|9533d2e|
6d2117a|9b9a768|
9b9a768|5c3b9cc|
9533d2e|a92fa27|
a55fbc5|60dcd3f|
5c3b9cc|b4a781f|
a92fa27|b59a948|
60dcd3f|14b29ef b59a948|
b59a948|74270f7 a41861e|
a41861e|d31cc03|
b4a781f|19a8f67|
74270f7|c4da603|
c4da603|89fe285 14b29ef|
89fe285|19a8f67 d31cc03|
14b29ef|b5e935b|
d31cc03|b99b9ce|
b5e935b|3c71fa1|
3c71fa1|661ab65|
b99b9ce|19a8f67|
661ab65|2a2d99a|
2a2d99a|c172f86|
c172f86|7341468|
7341468|19a8f67|
19a8f67|719f24a b3a549f|
b3a549f|719f24a|
719f24a|e520296 59e72b5|
59e72b5|e520296|
e520296|c9a0b6b c0f80d1|
c0f80d1|c9a0b6b|
c9a0b6b|ec7986e 884f7ff|
884f7ff|ec7986e|
ec7986e|02d30e8 65358e1|
65358e1|02d30e8|
02d30e8|71e4ef1 0a3cf35|
0a3cf35|71e4ef1|
71e4ef1|29e85f3 8124e2e|
8124e2e|29e85f3|
29e85f3|3a0e1c7 92581af|
92581af|3a0e1c7|
3a0e1c7|31f5813 7f530c8|
7f530c8|31f5813|
31f5813|abc01e4 2c210fd| (origin/master-v1)
2c210fd|abc01e4|
aa90f7c|ce53465 d485dad| (origin/feature/seo)
d485dad|a83c00c|
ce53465|5fa4da8 a83c00c|
a83c00c|c752c31|
5fa4da8|bf61a92 c752c31|
c752c31|8edf34f|
bf61a92|aeb0b53 8edf34f|
8edf34f|b68cdee|
aeb0b53|91acae4 b68cdee|
b68cdee|b64932c|
91acae4|94ab485 b64932c|
b64932c|48864cc|
94ab485|b629d3d 48864cc|
b629d3d|4cbf4cc abc01e4|
48864cc|abc01e4|
abc01e4|2352d49 1af9a5e|
1af9a5e|2352d49|
2352d49|178a536 86a30cc|
4cbf4cc|73eef6c|
73eef6c|9b44d8a|
9b44d8a|25d28a8|
25d28a8|079a5ef|
079a5ef|0717516|
0717516|0f87326|
0f87326|d04aaad|
d04aaad|5c668ad|
5c668ad|4c726f2|
4c726f2|b03bc77|
86a30cc|178a536|
178a536|436ea0f e43e7b9|
e43e7b9|436ea0f|
436ea0f|3b922f6 d1dd193|
d1dd193|3b922f6|
3b922f6|72d021e 5a34da2|
5a34da2|72d021e|
72d021e|8935fa3 819afdd|
819afdd|8935fa3|
8935fa3|d50680d 8a41023|
9e3a715|62a4e4b| (tag: 0.3.0)
62a4e4b|0c938c7| (tag: 0.2.0)
0c938c7|39babb4| (tag: 0.1.0)
39babb4|d50680d|
8a41023|d50680d|
d50680d|c984a96 2647bbb|
2647bbb|c984a96|
c984a96|358a487 6e77abe|
6e77abe|358a487|
358a487|663b5ad c9c6744|
c9c6744|663b5ad|
b03bc77|b6c8e12 663b5ad|
663b5ad|f316490 26f0cc1|
26f0cc1|f316490|
f316490|b998202 c3f2353|
c3f2353|b998202|
b998202|9e55fbb e6e3cce|
e6e3cce|9e55fbb|
9e55fbb|f4bfafe 4b18be1|
4b18be1|f4bfafe|
b6c8e12|ee04260 f4bfafe|
ee04260|2d7c4fa|
f4bfafe|991b777 85f27cb|
85f27cb|991b777|
2d7c4fa|52ebba1|
52ebba1|0aff208|
0aff208|b68872f|
b68872f|ab13506|
ab13506|47dc3cc|
991b777|4d5b01f 69c67dc|
69c67dc|4d5b01f|
4d5b01f|c5120f8 9283e05|
9283e05|c5120f8|
c5120f8|3b7ab91 342bb18|
342bb18|3b7ab91|
3b7ab91|1aedc7e dcfc52b|
dcfc52b|1aedc7e|
1aedc7e|37c1e74 957bf7c|
957bf7c|37c1e74|
47dc3cc|ff74979|
ff74979|67375c1 37c1e74|
37c1e74|5a1d24a b158b06|
b158b06|5a1d24a|
67375c1|175588e|
175588e|c251722 5a1d24a|
5a1d24a|5ed5e0a cdb6b3f|
cdb6b3f|5ed5e0a|
c251722|1284cb8|
1284cb8|4b2739b|
4b2739b|d5f9f01|
d5f9f01|2029888|
2029888|d4467f5 5ed5e0a|
5ed5e0a|f148985 af61ec6|
d4467f5|1c0e587|
1c0e587|868399f|
868399f|0558245|
0558245|448a6d4 f148985|
af61ec6|f148985|
448a6d4|34514bb|
f148985|3363ab3 4fadcdd|
4fadcdd|3363ab3|
34514bb|9ec1f3d|
9ec1f3d|64f0463 3363ab3|
3363ab3|6d2246a 3a281f8|
3a281f8|6d2246a|
6d2246a|2b5776e 1dd1035|
1dd1035|2b5776e|
64f0463|e14aaaa|
e14aaaa|0903376 2b5776e|
2b5776e|1f76ce5 a976854|
a976854|1f76ce5|
0903376|9dd851a|
9dd851a|31eb6a1|
31eb6a1|761f6d1 1f76ce5|
1f76ce5|ae3f802 f33685d|
f33685d|ae3f802|
761f6d1|378d6b2 d9bde4c|
d9bde4c|3fa4694|
378d6b2|c5fcf2b 3fa4694|
3fa4694|ae3f802|
c5fcf2b|999a6b4 ae3f802|
ae3f802|4753d15 1df633d|
1df633d|4753d15|
999a6b4|5f789bf 4753d15|
4753d15|86064ca 971c309|
971c309|fcf345c|
86064ca|fcf345c 1645e80|
1645e80|417e45f|
fcf345c|417e45f 4eb1579|
5f789bf|4c3dd87 4eb1579|
4c3dd87|9bce451 79833d4|
79833d4|0888ae5|
4eb1579|417e45f|
9bce451|c0d504d 0888ae5|
0888ae5|d43ebe7|
c0d504d|0a201aa|
d43ebe7|393d52f 417e45f|
393d52f|12b7619|
0a201aa|02837c9 417e45f|
417e45f|f1b71ca 27698c6|
27698c6|f1b71ca|
02837c9|2ba6abe 12b7619|
12b7619|c06b795|
2ba6abe|614f761|
614f761|b188b46 c06b795|
c06b795|5fdca4c|
b188b46|db71e4e 5fdca4c|
5fdca4c|6f050c4|
db71e4e|1f8bd13 6f050c4|
6f050c4|33c2262|
1f8bd13|54fdd97 33c2262|
33c2262|35d46a3|
54fdd97|1caf01f 35d46a3|
1caf01f|fd68cc7 f1b71ca|
35d46a3|19d01b5|
19d01b5|f1b71ca|
f1b71ca|96937d5 56c2f9e|
56c2f9e|96937d5|
96937d5|01e768d ea7f15f|
ea7f15f|01e768d|
01e768d|d6945b8 f580255|
f580255|2cc9de5|
fd68cc7|b223eab d6945b8|
d6945b8|bc688f4 9e49557|
9e49557|494f408|
b223eab|9fb25a6 bc688f4|
bc688f4|2cc9de5 494f408|
494f408|2cc9de5|
9fb25a6|b49a5dd 2cc9de5|
2cc9de5|5a0c049 dd4b9e9|
dd4b9e9|5a0c049|
b49a5dd|86b7f99 24cb182|
24cb182|0669f7f|
0669f7f|18d092e|
5a0c049|04f5a24 18d092e|
18d092e|04f5a24|
86b7f99|ed8063b|
04f5a24|bd3dba4 a7997a6|
a7997a6|bd3dba4|
ed8063b|634f697|
634f697|c702fe3|
c702fe3|a0631bb|
a0631bb|bd3dba4|
bd3dba4|c297b88 77bea18|
77bea18|c297b88|
c297b88|54dd483 e8d899a|
e8d899a|54dd483|
54dd483|142494a a1221d2|
a1221d2|142494a|
142494a|98df31e f984eda|
f984eda|98df31e|
98df31e|799fa82 2ac8d87|
2ac8d87|799fa82|
799fa82|ead1729 adfd60e|
adfd60e|ead1729|
ead1729|57144e9 b68db28|
b68db28|57144e9|
57144e9|0e3df24 7b7c2ca|
7b7c2ca|0e3df24|
0e3df24|b88d045 1ff8a57|
1ff8a57|b88d045|
b88d045|bd31e35 fe934b3|
fe934b3|bd31e35|
bd31e35||
						</textarea>
						<br />&nbsp;<br /><br />
					</td>
					<td width="60%" class="commits-content">
						<table id="bit-booster-tbl" style="width: 1%"></table>
					</td>
				</tr>
			</tbody>
		</table>
</template>

<script>
import * as renderer from "./../plugins/graphRendererRaw.js";
import {loadData} from './gitlog.js';

export default {
	name: "HelloWorld",
	mounted() {
		this.startDrawing();
	},
	methods: {
		startDrawing() {
			window.drawGraph(loadData());
		},
	},
};
</script>

<style>
* {
	color: gray;
}
.d {
	font-style: italic;
	color: darkgray;
	padding-left: 0.7em;
	white-space: nowrap;
}
</style>
