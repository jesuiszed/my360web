'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "98da464e724a96b1fa6047e1b7b91327",
"version.json": "389a6e6e6f34312743ca5f36467c84b5",
"index.html": "e1431e674759fce692d8538a68b77433",
"/": "e1431e674759fce692d8538a68b77433",
"main.dart.js": "24b7e10665c353d0e1d7e143112f6ee8",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "56128fc6ec7568b99d6fc24cfa34a218",
".git/ORIG_HEAD": "0524426a7e5c5d41f3150270e55779c5",
".git/config": "7a79bcd4f9861ce09b514127a5637b85",
".git/objects/3e/de97e83919095233942952f8bcc1985a256ee6": "e34808cd4132e657a72e99629756a4ca",
".git/objects/50/bf109899b4309e7cdab6faf4570058c31d0761": "5c3620ee8dab564a442acb60b9d444aa",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/04/2e9ab6e243a412c55f2d88af6c6f605e1a4a88": "6af315359ee2c5dfcd0776dcfc277203",
".git/objects/6a/3e30eabc1ad4dc597eea400bbfe785db23cd9f": "bb8bc81597175b3d0953af8740a50d17",
".git/objects/6a/c751a952f4202bba9d2f20c3696c64ce902fba": "5efdbbd71f15bd0570140a77c004af35",
".git/objects/58/c84ab72648624468716d13ffeca3cc16f65abf": "40018cde910c6b4813de953f6612ab25",
".git/objects/58/97b8abada8206afd57db098d6718a01900c072": "6e58312493237835755f4c24e7c17fc8",
".git/objects/58/f7f0e5a1a653630fa9a0c42da0d2d35f0338df": "1a95475020411673116c5d98af7a5471",
".git/objects/67/1738d5b1279856c06bc50ded147b1dc40da4e6": "e2222580b5458094f6cd39d56dc65465",
".git/objects/60/998d2047d67149bae03791cf097f53b6cd4938": "344c609185c891f5320b785ed3918c47",
".git/objects/05/ec45912f4841308c559f2267679df241dcc13a": "2465073a97d92e58a14ee580fcf6ab09",
".git/objects/05/0bfa8ceb40cdf2fa91c67ed6d2f1a32c00e679": "b6efccc47ce160e35aaa6dc20c981386",
".git/objects/02/72fbec0e322f8c175909fefcee3088382c32d4": "8f801e7dd726550aed193aab8522e68c",
".git/objects/a3/d1e33649597acf629983faef3ff1542ca23296": "cd5b86a402289d8d66104140e7720819",
".git/objects/ac/5074635d2e85ad7a3e3e4141f2f90335a8947e": "1f0d12cf1ca9d31c4e6ef7b87445d7ef",
".git/objects/ad/564728ec01b6fc65a65d5e488626205a1ec444": "a7afefaa11d7e91557be9c92b1eb5784",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/d7/658e6236b8296b770e873afaec26a34f6c8038": "774b7d4e091de06cecc7561ace91ecfe",
".git/objects/d0/f712f07324b9e09b778a7220280f8891976e78": "d1a87926cfd61e01fe72d2ffc53b468f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/a03adb18ef48edfd9edb3d0137e0a9aec8e5d7": "1c83f6c4561f3104c0f2d1275d835f94",
".git/objects/e5/ae4de179cf272f9b401d757cc43bc2d2b14afc": "a23091cd5cec36a5914e7da7eda8485a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/c23cf32a47fcac572a59eb9e19ff633021e368": "fae1af306222832ab7e75b81e480da8d",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/fc/ca3904187b756f888874399960ec461168fba2": "c5a37ac16a1831cc0acc394016d91e7f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c8/6fbc97bcd2c3c2b1c45f6b12a2feec5d18ec48": "8e31d304d39b88da23e5f6cf08997cf7",
".git/objects/c8/815cc15a61380a8c31b906a0a7124e059c501a": "68d4039390aa2d72e5e42e526188ac09",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/27/0fde7a25afe91f11e1cbaa222cc3b810935abc": "9b90aa96cd8468460e0d987a36231415",
".git/objects/27/ad52d711a683d4d17aa5ebe1d5813a22e1d982": "aaf0c36423b004239e6aa5798768aaaf",
".git/objects/4b/52222136772c6642c4f3a1363940df3b860455": "20437a39d02e8785bbdd542d974e5c10",
".git/objects/11/0ec1250d0290ab785bdff864e6bc5faeff66e9": "b4c2ca3647d1598179a9ecff7e4a15bc",
".git/objects/89/1197fa11d93ebfd4dee4c8818234a1f9ebfa38": "526a750c48dd53f30f30904cb8ac570e",
".git/objects/45/d48d18d673a66058403854a4fb89fe5b133e56": "1202ee5dbac143cdbdf0f47aa4e9461b",
".git/objects/73/7e8d5d9a2fcf491835471dd0512ec770602e49": "7ff05ea98768e0c9c16edc37c94a05bb",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/80/1954502b89b631a45a131b29ebbe765d293cef": "8ab5041cd6c4aa4d272586db6fb8d6a7",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/8f/e64d7930d3ae617ce837442c8c2b5e57984595": "b9fc82eb98035ff914ab7ab68ac76d3a",
".git/objects/8a/33f7089fadce179b23f91e7439c3a2b5793f0f": "6dd0a06a89e7283ef9c62ba5465df6db",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/6f59714b6a4f52834cdf9cc3285456bd3b88a9": "469a272b25e9f744c2c62cc257e4b007",
".git/objects/4c/9e191c244b9327e7ebe0592b0ba5037811deb1": "977b577f08d9406d862c98e5d2d9a06a",
".git/objects/4d/d083adcb2119be94facefb8ef14a12fdea79f8": "ca15868bb1137041232c30e503bcbcf1",
".git/objects/2a/19abf057f97056a500146d4f92d94f9bd6b77f": "5cff7e5e42d91a210e670aefcebc65e3",
".git/objects/2f/782e1f1ee869ba0ede28ab52748d9191756d16": "3d62440196cc9e1511de21f885b7a7a1",
".git/objects/43/e602cb3fe0f53ad3eedc0d27d6264d720d4445": "06b786c4cf6da7aab37871ff44d92bdc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/1e0d5a7c50edf9b5c7ea7c4a731a357187632c": "35107d7e196e2e9107e203cb29ae68e8",
".git/objects/5c/9b139c8466aa600d4765d04d9238eb6a2d322e": "51545239169151eb602831259daa58e8",
".git/objects/62/26e69fed0a7f236781e744cf207f5379254b82": "0cf2be9d8f9270be1b7ec92be520f591",
".git/objects/62/00e67e3678b63fb7650068697d4f78b655dc28": "bbf2e5023aa390b93979e43d29393d47",
".git/objects/62/f7f3fa47f855fce2b8fbca0816a2578416f2a5": "1c8312320ea675a897491f77fd9ee246",
".git/objects/62/6eb12754f7bdf79c749013e558545377e22513": "83d18fdc1016b78f0d9695bfea55f61e",
".git/objects/96/7df5ea82696915abda6b80823823260ec78690": "a82421fc39508ac564596ea5a8375493",
".git/objects/53/993805eb7e76d4226552f90c927c64d1a198cb": "a12089806638463df336aa4aa2cec255",
".git/objects/53/be289b7072c9bda9c58c7889dbae2d5463335d": "ee16639db55afef5b682502e7e3700c7",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5e/e0aa9514c4b5ce0de7c4a94a661b521a7bc652": "e6aae24e6d4dcd32421a4c8c60ffcc7b",
".git/objects/37/5e47b74fb4968b1e258a3d09a863e68be5463e": "ec9e3a3e66233e6240f07cfd6df96510",
".git/objects/6c/0cba9d27dd516ffb89a0f6aef3aae7930233f3": "d255d9f31cb8d5f2bf81d46ea6144a95",
".git/objects/39/aa6d126fbe3c3596e7574b6523f0608f337ba5": "c3198d60dff018cf042c28e59a181f77",
".git/objects/55/e7ce652aa3c8985a6f10e29b24b03c93fa9e9e": "1ada6a921fb6b52ed187a640e6fdbc0f",
".git/objects/97/8515402cf789ad681890ca4e45e971c602afda": "650ad2fe167f9fb94520f88ddeefc2f7",
".git/objects/63/cee97acce0c4e6ef6b02c5e33b811f2d555ee9": "0abc6174a7492ce0f20820359a5de843",
".git/objects/63/71526abf5ed2f7ed19273baf7d052b346dee7e": "c7c513ee105f99f182402c90a9f5471b",
".git/objects/64/9436d5f819ed2baa9a90d847cbaa0452f60cb2": "b7491edf9e23e87523801b83b16843c7",
".git/objects/64/a3be0b8b875e5737063a543002d8ca9c9c4fd8": "2d826f291224a42348141e2ba0fe9639",
".git/objects/d3/100a6fc888314c256d76a1d930fa12cebfcfe6": "d9f4ed053a937a86404d290c1a5ba119",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/a9/1ff74d3cc0ac8255c76f3f8722325f63094425": "abe0fa25f360f2c3ce530d5debba5eba",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/68dbc550cfe579ce77e4586086fae7bd10d4e4": "164bdeadbd501169040bfdefa76272a4",
".git/objects/a8/2b20f5e2cd645bafd8684b49dff4386c9534ad": "18041b9a058ab395c70883b2606095ce",
".git/objects/de/1517683ec326c0c09dd2f3142d0a552a80fae7": "06b59dca0e286d2bc175c8051dd47b53",
".git/objects/a6/5308cc965e64c0a24bd32eceea4f7db270858c": "c8835bfdc1875d57b7dff5bc2e9d8b62",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c4/365b9496cc060af804d311bd879da5072d8ea0": "3daddd9beb9633fdd0eda519be3f8dd0",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e8/9374a0ac6376d170faf8faeb8a415f5658f485": "06b3b53d0dca39e801871a7c8e803d7a",
".git/objects/ff/753aa8251cb82e013a0ebe159fa52a48c734c8": "30668cfe0a6235a7b435d939b0ed462d",
".git/objects/c2/64f2c02c90f6c400875bf9bbb57b8cfd00505f": "15b579d95ef25af5ae716e3b43b6bfa7",
".git/objects/e9/85853ed84acf10f62f639a4733083229c5a55d": "0fa4c11ffb67d2134def6bc8d43a77d3",
".git/objects/e0/aac96a556bfdc95dfb0f385cee6c1508279c46": "f55797d1ccf6bfcc28b672ca6606100b",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/79/6237d84aa89d18de78e489efe7bb9284696ce2": "da3265befcc1441831fa5ce5d8f54af7",
".git/objects/77/fb05391cc14a87e0850dce48b97095046d2f4e": "7d304cd2d9368e9b4c13bc8a48847fdc",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/24/c6c20debf0238af42ef0882eaf0141ee070586": "b551b908aba7f05f32b37913ef617e81",
".git/objects/12/2abd153abbcb863e9a74b0329f74044b3dae91": "f989a8deb2bc4a37059c567b04eca87a",
".git/objects/85/ee29850c127c9a4cf619ed717bbc132143d6d7": "befbf8bb79d81023e9daff2a92224e28",
".git/objects/1d/19a742e193a4f729ddc98f3c481eeca99f2a54": "99b494abb325acaeda47202650de689d",
".git/objects/49/970647b80f3ccc4ab7855a52af7e59c850ce29": "87c7acdd49932100fa2b69d26c48c080",
".git/objects/49/bd2cbf754094d70ecec5bb802ae5694bb03a57": "ffbdde0be683958c005300751b10b44b",
".git/objects/40/97353ead87267f58503f81cabf368668ad9966": "cc54a838333f58bb5755ba55a171235d",
".git/objects/40/19cf1914dcfec514dc2db789bbc7d42292d0a1": "527e5dee9bd05b94a8ecf689cb3a4a2e",
".git/objects/8b/b0101c37c8c09143d0425030fb7ba51feaded1": "02964ba1afd02e42b0d79c8772c92c80",
".git/objects/7f/453881e3d758ffeb89af6d363b4480d3183f22": "a1ae61b6e38d98de6ea2f34ed4d4b891",
".git/objects/7f/80d69fd675e01178df4e36fca88bcbd5c66cc8": "6088e8cfcee0bfc47f4a244bc90addeb",
".git/objects/14/dd9283a516bfacc623449072e8be6a0715614c": "cf98806fc21dbeec0eb2866565ae0570",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2d10452b32df4e8724a412436e894c77",
".git/logs/refs/heads/main": "0cc3f3709224fea6fb0ff7b5b9b367f9",
".git/logs/refs/remotes/origin/main": "f3ae1f3db9ce89c1338dd838f4fcd2f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5c9aaac8dfc29e9d7be6855b38cf39eb",
".git/refs/remotes/origin/main": "5c9aaac8dfc29e9d7be6855b38cf39eb",
".git/index": "538a3c75833c1b5f346baa71e2c3df34",
".git/COMMIT_EDITMSG": "e2cc51984ca81806512c5590e7402218",
".git/FETCH_HEAD": "13ce019c2c86ea5902ea6c34192859cc",
"assets/images/auth_bg_collage.png": "42235fe8a41b843d2321fde3c0038f54",
"assets/lotties/chatbot_icon.json": "2a44049cca11df876688a4a0cf12021e",
"assets/lotties/vr_loading.json": "1e78e48e5463453e825de8785de9a68e",
"assets/lotties/info_animation.json": "417b1f52422f49199a5be9f10937fdc5",
"assets/lotties/chatbot_welcome.json": "6ff44f33d88ae94b119926ed93592ece",
"assets/lotties/loading_dots.json": "f5381165ea473f792913d7aaa421dd99",
"assets/lotties/loading_animation.json": "7b3eddfa65c176b0c339b8c736aea490",
"assets/lotties/speaking_animation.json": "c7edb53a2538e12d9de7f16035340224",
"assets/AssetManifest.json": "f14ba449f5c508028182781e6e56f83b",
"assets/NOTICES": "a15a984c0db4f716808f493fb454d08b",
"assets/FontManifest.json": "db8f453ee5bd623ef9ffbe9d7a009cf7",
"assets/AssetManifest.bin.json": "fe834674b751db4ff0b9a27935ef6071",
"assets/icons/search.svg": "17c5bc71e358a76ca02d65c207af33c8",
"assets/icons/stream.svg": "071ccf4f08884432ccb37477e65b6a38",
"assets/icons/assistant.svg": "b0183ed5e2cac2a76381df4055932d77",
"assets/icons/home.svg": "4b28899f03c099254f81e023d2d6cefc",
"assets/icons/views.svg": "65b8bb538888e81e7d401888995aa9ab",
"assets/icons/search1.svg": "fa9fe5aad99c0cb11224bf3aa0b52f97",
"assets/icons/vr_3601.svg": "16dd52af13adad73fe91515d24e3e819",
"assets/icons/expand.svg": "76680c13ad066889545035993415e61d",
"assets/icons/vr_3602.svg": "485cf2593c92a7e45ecb4f109dfdce0a",
"assets/icons/assistant1.svg": "caf14b79b4bd2e28c2c81fef82ace7db",
"assets/icons/duration.svg": "73bff7913469e8c8e91188088f3d7790",
"assets/icons/profile1.svg": "f81a3e0892445aa2f99eccf6ce0de1ae",
"assets/icons/favorite.svg": "62b12f2c8685645dee43ec224df93c8c",
"assets/icons/play1.svg": "7ef41f25d72c7aad686520572e17d023",
"assets/icons/play.svg": "4cd3cc49423be858c4684ac3b072ea02",
"assets/icons/premium.svg": "e5dfb684110e0b5378c36f1d0c05ddd4",
"assets/icons/home1.svg": "d5e153a4f3151718a99e9884c8ebb3c8",
"assets/icons/trending.svg": "0ff30bd9d5ce39cd3ec53f21fef41360",
"assets/icons/star.svg": "4066a3a9f0d7463e3147bc316dac8ade",
"assets/icons/idea.svg": "99cca4cf25d16179b45a09e09240218b",
"assets/icons/vr_360.svg": "223bf25cdd51c97b74043040812fe379",
"assets/icons/profile.svg": "8989d0b20031c73137526d92d7dfb24c",
"assets/icons/error.svg": "1f2da2a83453fa65517c1493a4b02515",
"assets/icons/bookmark.svg": "0c1d803fca522a375ad32b0884ecf285",
"assets/icons/history.svg": "262016f61f63cd2ce959b5c98135f078",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b483d364beef8092ff4fe58adc8787be",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "f315afa1e4da74bb6b69c2a90a5a3b3b",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "6dbe862ca85ee7cac6bf700f52cb804d",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "ae52b4ad53ee1d2215ae862f76b6dd2b",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "04d6b35842876ceb2c455f28c8e7d144",
"assets/fonts/MaterialIcons-Regular.otf": "6d9885788682af8f17e2aa0d556dd9d9",
"assets/assets/images/auth_bg_collage.png": "42235fe8a41b843d2321fde3c0038f54",
"assets/assets/lotties/chatbot_icon.json": "2a44049cca11df876688a4a0cf12021e",
"assets/assets/lotties/vr_loading.json": "1e78e48e5463453e825de8785de9a68e",
"assets/assets/lotties/info_animation.json": "417b1f52422f49199a5be9f10937fdc5",
"assets/assets/lotties/chatbot_welcome.json": "6ff44f33d88ae94b119926ed93592ece",
"assets/assets/lotties/loading_dots.json": "f5381165ea473f792913d7aaa421dd99",
"assets/assets/lotties/loading_animation.json": "7b3eddfa65c176b0c339b8c736aea490",
"assets/assets/lotties/speaking_animation.json": "c7edb53a2538e12d9de7f16035340224",
"assets/assets/icons/search.svg": "17c5bc71e358a76ca02d65c207af33c8",
"assets/assets/icons/stream.svg": "071ccf4f08884432ccb37477e65b6a38",
"assets/assets/icons/assistant.svg": "b0183ed5e2cac2a76381df4055932d77",
"assets/assets/icons/home.svg": "4b28899f03c099254f81e023d2d6cefc",
"assets/assets/icons/views.svg": "65b8bb538888e81e7d401888995aa9ab",
"assets/assets/icons/search1.svg": "fa9fe5aad99c0cb11224bf3aa0b52f97",
"assets/assets/icons/vr_3601.svg": "16dd52af13adad73fe91515d24e3e819",
"assets/assets/icons/expand.svg": "76680c13ad066889545035993415e61d",
"assets/assets/icons/vr_3602.svg": "485cf2593c92a7e45ecb4f109dfdce0a",
"assets/assets/icons/assistant1.svg": "caf14b79b4bd2e28c2c81fef82ace7db",
"assets/assets/icons/duration.svg": "73bff7913469e8c8e91188088f3d7790",
"assets/assets/icons/profile1.svg": "f81a3e0892445aa2f99eccf6ce0de1ae",
"assets/assets/icons/favorite.svg": "62b12f2c8685645dee43ec224df93c8c",
"assets/assets/icons/play1.svg": "7ef41f25d72c7aad686520572e17d023",
"assets/assets/icons/play.svg": "4cd3cc49423be858c4684ac3b072ea02",
"assets/assets/icons/premium.svg": "e5dfb684110e0b5378c36f1d0c05ddd4",
"assets/assets/icons/home1.svg": "d5e153a4f3151718a99e9884c8ebb3c8",
"assets/assets/icons/trending.svg": "0ff30bd9d5ce39cd3ec53f21fef41360",
"assets/assets/icons/star.svg": "4066a3a9f0d7463e3147bc316dac8ade",
"assets/assets/icons/idea.svg": "99cca4cf25d16179b45a09e09240218b",
"assets/assets/icons/vr_360.svg": "223bf25cdd51c97b74043040812fe379",
"assets/assets/icons/profile.svg": "8989d0b20031c73137526d92d7dfb24c",
"assets/assets/icons/error.svg": "1f2da2a83453fa65517c1493a4b02515",
"assets/assets/icons/bookmark.svg": "0c1d803fca522a375ad32b0884ecf285",
"assets/assets/icons/history.svg": "262016f61f63cd2ce959b5c98135f078",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
