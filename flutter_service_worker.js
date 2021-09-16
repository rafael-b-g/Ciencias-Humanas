'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "6b0c26aab86bfdf5772134962ffb10e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "54f15ba4dd6531730c1b0d879e6abaa3",
"assets/imagens/burca2.jpg": "e704042e3896c56cbcce91ae5767c1a9",
"assets/imagens/burcaCapa.jpeg": "a002bec57c7ffd75db2ad29de4e42e90",
"assets/imagens/burcaExplicadaCapa.jpg": "87223459b01f0c375868423dba0d4d6d",
"assets/imagens/burca1.jpg": "7445e80351f82c95f58748320d833b0f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
".git/index": "e8feeba8bb40a0052501e16d7a1ad43c",
".git/objects/51/4d7b26c6ac164e399dcedeab32c246d37712fb": "053667682e33db5332e6992d158cb670",
".git/objects/5d/7b3c0e59be6cc041ecc833c16981850399e4e8": "e6116a1e781c93d7cb92613a5c55d78e",
".git/objects/5d/deea602047f3ffcf68114093ea6514ceadf1b3": "d76cd8c2e79fd26ef10027b9a013494b",
".git/objects/f4/911ceae7cf004fc9b3868dcc3b8d0f6834ba6c": "b080dc445aa04857f9dfa4aac5bb2d6d",
".git/objects/ea/aa40e3c885aba0b140fe87f0c89484cec65b6f": "b76e4292a4a1a32e71b379d8c8249b34",
".git/objects/3c/80c276b64e35c9c085e8d76d90c3454030969c": "63e04113149290313f0a7524e6df8144",
".git/objects/3c/99cbcd7354dbfd864b2bfccdb84b9f2e596dfd": "594001e24a1d327c14a43bda7c656b71",
".git/objects/f3/594b49f586c0a1a38bc9fb331513877b810aad": "fcb97dfeae66b8186878718bcdf341bc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/bd06b1737d67e5cce7a5e35747f8dd0e370b0c": "89531fdf1767ff568409cb8c8f8cee48",
".git/objects/a8/6d43efaed69f9c6ed03af024aa9025c6fbd3ce": "9784a3389acce27e38f66f5acd25dd47",
".git/objects/d0/8107bf3512069e7a4663bedd56f5968c4d935f": "d8fd860d667461cf2c1ee996bf4935b8",
".git/objects/11/2975d6805f68c8b771d19b8ebd5f28407ed13e": "a014ce2779d6b232e9fa121ca73644f4",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/ec/7990608bd0b6c1935b554520f843f60f81a86c": "4b533d2c1b1c87337702d6a59b91a340",
".git/objects/29/5bf944d6d852ebc03064a82776d96a338280a8": "cfff0dcbb812b46bd5a7e2fb93e8189e",
".git/objects/a4/d0df903fbce13324132052c2df41670c085d47": "79cf927e72062e8753ac0d2b2220d0b8",
".git/objects/a2/a6e9a4b29b6a211eb0a132c4fd0f7213ba6660": "81ba85464a4377e2c35afb925db3163e",
".git/objects/6d/c9fc895a4010387feca92a1c3009422bc3d739": "2640dfbe63a5467e792eda89b1b6f170",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/c1ba19828febc4b23c82e3dade2baf502c492e": "7bb98746c971a5c5a87de63dc31abe59",
".git/objects/f2/5803f47680b9a39c136e1f0d6c0bd550b7cf81": "29b7ce6a489d9deca7d6b936014bf0cd",
".git/objects/75/1d4489f7d4dce03dbbcd0f6c30109efd1a3552": "2fe0392bb7994255f45405bb475e852a",
".git/objects/75/8fe5e3784dba5858765b5a8b6101a04cd69db9": "8319a5564b15eaef436d758cc6ed3687",
".git/objects/c9/02b3776c2f62901887d7ef4823ecb8d73f6f51": "3d173178ae6e2d44f389d85e22d9e802",
".git/objects/c9/f1cd9f9e3fd032e7d3497c2761189b0220a724": "2ceb848e8f5b0b79aaede782a551c727",
".git/objects/41/3c882e87aa34f9108b40345f61e6ccfa62462c": "391e14d94306fc86fc1b825d7512df7a",
".git/objects/41/e0ec6064744d56cf861b8e937eeec5027a5858": "d6df544c7ff67cdb91cfb3d8826c0cb3",
".git/objects/d1/2936811d27a02b2b3765cb81406dcbcb4f976e": "99695268996045a2571e3828e53fbf4f",
".git/objects/59/78d32c05eef010576d38a3f3ac2e4d5e9cbcb2": "38ef4036f1f1f7b4811832150a603281",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/be/c250903399ec6fcdfb150e87ed1a52cb792e82": "66c5d5ede7e28a8d32557b47855f6c47",
".git/objects/f1/dce381a3666591e58cd6bd49322a8d6807e8fb": "9e8ccbc4d9d0e128937f53cb63c1e851",
".git/objects/f1/e220b203ac9e27880e1456f2ce6cfd5a7839f1": "a5d8bb91387b589a4b60bd17c5bdf8a7",
".git/objects/6a/b8d1718a3b9a5bfbf81785c733d90f58a06738": "d4962f88d7433d7ca49841f27a0093f5",
".git/objects/50/b80d7827ddca34553d4edf8b41c9a8a973bb00": "f1dabac5c67cbe066d8b6cd95395df40",
".git/objects/40/10f1c5b412401d17ff2f28080426d8429bb536": "7c240fb5ab38092a180b453c31b020ff",
".git/objects/ca/b49bb746cd2b0db71af58cd2587f90c9445b3d": "054789b2585cea01018ec8605e101758",
".git/objects/71/86b1d44170ea60fa10950fc21dcb4cc452f84f": "6066d8094889292e72c610b1e8c49fd9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/c3/13ada8e59e79de617f6fc3ada3de28b87bf207": "ac3d6383f7465ae4e3fc9dc9d2a13525",
".git/objects/f5/0127570378d6bdb98946ccabc7d0b80be5be61": "b28f09bbe8f32dbbf234dff7ec053255",
".git/objects/3a/5878b99aa7198a171522f949a9fd9886ce49be": "9cef356a811ba5e359f70269c52f87d1",
".git/objects/86/d536d5778f2c1d81421264bd1a6011b297f3cb": "7fdd1e5049341afcf58320b6994fba35",
".git/objects/2b/e2a639d514ed81a7e80fd9c048527a297ff021": "df9e10086855f05ba48afed8cdccaa3b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/3b/36ac79280609e1e00203085b6f71847078a7bc": "e9394f8d3895328ed34dc3ea3c5f14df",
".git/objects/98/786abfa50688b5d096973a0f6ac6168d838918": "e9b88f94a8933593cab0c663bea5cd25",
".git/objects/08/dbbff43c962476ceaafbf1613573648a742245": "138a9a573961b1cbcca7559f34e599f9",
".git/objects/37/a97d27aaff5cd5af729caf65e835b8ed4cb81b": "89aeb5d8190e16fc3c6fb13717a19049",
".git/objects/37/906e2d03e9fbd4cee784246f1e1aabe8893904": "c095fb9c924eacbbf884a45bd5e1ced2",
".git/objects/76/c402d11c25daa551f97b061ee1388f0a8085d1": "ba11102be7a70d22bd42bba78c3568da",
".git/objects/76/8cd06a734bbd6e06babf18b3584de33e6e4b87": "6714395eb6aee4abe271b16fdfaa51ff",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/42f58734edd8d6d905a43fa0153816f2c94b68": "8c75f6601b59ef45841d9361ab95f143",
".git/objects/dc/ae7b38f37dde8b320dd8bd27f74561f2f99e3c": "41ea1b2be0e00ae1cfc396a6179aa5ae",
".git/objects/97/75a1ffd771edf8e9c2b4a3c9e88d18b7f2e1f4": "70e3afb86702d70f6d6b2c04eab42f16",
".git/objects/94/b486230db40f0ab5a8a708a77997ab16626875": "2e2effc0eaab9980450e9a8bc73b648f",
".git/objects/26/8f4642536d17dc31a7b031f783c04c5a01d7e4": "3470fcff3b2cb5cd6a5de8f907092476",
".git/objects/83/5cd9f31ed4e94a482834ecbe3e0184cbbb955e": "9b747dd0b7db240f2151666fe55f70ff",
".git/objects/2c/4f0a6495df58fada157caa9e020fcd2ed0ebea": "a1968e419d043588ebba75c7d7fa854d",
".git/objects/2c/2ee18b9a393a6f962373fa687048eb8d2c95fe": "5d366807451c035d37b8d0b126950677",
".git/objects/9f/0781e5e4b5f9e65744db91bf7568af4d5a425c": "e67268edccfd394ddfd9841ce9edd6ef",
".git/objects/eb/70f49efdc74abae28677bd3a99dfaaa034d298": "a7b94ef34990cd468dc1fd5c336d66f0",
".git/objects/7e/83a8c607d3f48b8cc138240ae951cb6ff84cfc": "684467165c96efad6f62f88aea994809",
".git/objects/32/a4eb9b55b8056f6c268e7db648232f9de61421": "b0a3af30e8c378373d84668cd22f7059",
".git/objects/32/ed1193026a0e758a981beb4136b70bd821405f": "a3a10615fa35d432421777a7eac20f45",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/28/d85627e22483b5e4fccfd3ab4d0cf0a1792da7": "bb2be32d88b8e3fb28cca95100ac2e58",
".git/objects/4c/d3f8bbb7e3264141e5705b5ec963caf78b8224": "7a84341ce591b7933464c4c7b0c40333",
".git/objects/14/d69f10a81915707319fd7ee6a78a93d8980607": "f82a9bfc6ac3b770ef32a5be8de9ae38",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/bf1d3a5fda7d2d7fa4b3d74826d6a251519f47": "79a7fdd8ff901cfb07e019bd0bdab8ac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/04946c6f58dc12e79fbd9073670d925556ec76": "2608e188a8927668601424de85feeac9",
".git/objects/d6/a1ba8156df90902e4e97ccea57e41c2f768e6e": "3a92ec87f7a08deb6263ebe22ffdb5ee",
".git/objects/ce/dfd29e5675972b8eee122cd27bc2e854a73479": "fc255961452082eabf315bdf9fe22d53",
".git/objects/ce/189575f01f637bf8a4f79ce3ea56e7cdfcfb0e": "7a2a2a754f0972e837fdc8e5cb59ed24",
".git/objects/d8/f4fa32f2ec79ffb9ceed8053f3364a80ce06eb": "1cd156a1bcc3af2af7f7b4b89a556b92",
".git/objects/3e/a337e5eac4d28e99a9b6df91e04fd4902b24ad": "2715d0bb7c68da0c6c8654eb9cc111bb",
".git/objects/3e/6c0d48141c296170045ead7d61c0cd9b330cdb": "068ceefa6e4bda0b8f85e0904f4ba64b",
".git/objects/e6/3a8627060c5a24577bf6490477f7287e8f4277": "ca88db26e2fec9a66bc1bd6a01f7c4ba",
".git/objects/84/a5676b70f60f2e69ff11c0e795b13c2c147df4": "45ee5515fc90a14a36d484cca3c9ac97",
".git/objects/84/ca3548f1619e61d7c2bac1d32adc583276276e": "d805856f00c127df902a033e00ad9255",
".git/objects/84/8536f6f244643c977aeb39eb0250e3d3160042": "85bb47e8458162793cb41344619d043b",
".git/objects/8d/c9c25aac217b598aaaf6d38acacfdd75fcfa39": "5390ee70c7ec5e2aea619e482fea6f44",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ee/04fc2636d2eaee1e5875342a03d34bbd58fa21": "fbd7bdb06d05ef9eaaf78a3a21260aaa",
".git/objects/61/549e1a8e4dc5885610699ca7dcd87b9b0ced00": "96569b4ef429890d6bec8d8c6b996dad",
".git/objects/61/b1f4309f8692477a0b07d49534ad889c39fba4": "584d71e2741d5ca0451b38b83fe2fac1",
".git/objects/f0/d87ecd4842441721d5f77c0746ee7203207ae9": "e7e25f60f6995aeb65aaec0c7aa41c56",
".git/objects/8f/129ca9c1cd128448c7255b2770e5e7c6891ca0": "256c0d22739277979e307c8eea931db8",
".git/objects/c8/eb1487a507c4bfcd6d990fc0670c88ffaacb1e": "8ae0df852d4b34799ebe0e5cfb95f35c",
".git/objects/c8/12f620b26ec5ffcc3e648aba9f8046622c352e": "53e21a2d06c25601dcdca21983c8bf9f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/69ccab9bfaed4e3cb4b7a05f8a579eb89b7bbd": "cdc19bb47d7065b4177ca847c8e57875",
".git/objects/bb/b8291e0db70de7d1a4abdc45daf29ae581cc4c": "50c33bf66bb4114da5bc3b492417f0ee",
".git/objects/85/1203bec414f1ab1c52d7934c559f55f691c78b": "d672123e7d2907e570a1f7f440ae1b7c",
".git/objects/b5/2ea7b285784850fc48620491b716b2008aa2ad": "fc2cf33b983d47d20c742661e8d4dfd9",
".git/objects/c2/d9fc830b1123f2e0a96eac19ba5621503f6915": "ee36bc1f80b6c50c6c5b5383b293ea23",
".git/objects/e1/5a16bd3348391696ab0c7e2d2eb58b5b28f65a": "65551106ce4d081c5b8c87c0c3339f24",
".git/objects/22/c4265ffd8d51b2184d9340bb08578aa8f500e4": "1d02a09cd3bc55d9c018aeb9c1667157",
".git/objects/c6/1172b87341bd87e2539abbd48c7f6861b8be47": "10b724df39db929fb44a3988854532da",
".git/objects/9b/b5a4025f85bd8747224e54dfd142d65457be8a": "3404f3ef0ca77a4c1f442ed218de809f",
".git/objects/db/8b784e3c3ca0ff3595471cf70309d36849343b": "72136b30ad27f04cd983518aea2d4801",
".git/objects/60/ff4995720ff4c487ef35c1dfc3faeef129f565": "db3d39dd16dbaa5c5b8f2b439c94ca1c",
".git/objects/7d/c79f37491864ce22f6f1a9fdea9b7d67d31cfc": "6056a7b81f0962e60682c671874acacd",
".git/objects/1b/b07191275014e1452bf5bcad6a6e9cc68aa1a6": "39cd795e211727d014bfb4e74b0caff7",
".git/objects/a3/f14b03e491aa2d6dd559f98e035d97ca6e48bb": "3216fa6c1436b7b2c3bbfa27e71d8251",
".git/logs/HEAD": "0a1cd39b31cb04047c998fdbbc92bd5e",
".git/logs/refs/remotes/origin/master": "33e19672fdcc8a0906a904b22f747fbb",
".git/logs/refs/heads/master": "0a1cd39b31cb04047c998fdbbc92bd5e",
".git/ORIG_HEAD": "673d6b4f53547b4f6de9e7013dbd84fa",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/FETCH_HEAD": "f6a934c1df0c5e5620dea464a3ba29d3",
".git/refs/remotes/origin/master": "673d6b4f53547b4f6de9e7013dbd84fa",
".git/refs/heads/master": "673d6b4f53547b4f6de9e7013dbd84fa",
".git/COMMIT_EDITMSG": "29bb140c5fda68ea198d3b7ccaf5cd0d",
".git/config": "d040ac1933bed8f47ee5cb85f6f41502",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"manifest.json": "7c44d1b221eaf682b8177c041a0f2c41",
"index.html": "ca3225dd2dd18d25ff7c017cb76e8bda",
"/": "ca3225dd2dd18d25ff7c017cb76e8bda",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/apple-icon-60x60.png": "da22b6bcca0a9c6de09760a4b58d660b",
"icons/android-icon-72x72.png": "48934c3b63e4fd8fc489a191d234d3b0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/apple-icon-57x57.png": "fd571bb60476e82242aea93cbec6fb3f",
"icons/apple-icon-114x114.png": "12b6187bbf23a233ad447ce17a98a07c",
"icons/favicon.ico": "9417979eea462b38517a5889587fea71",
"icons/favicon-32x32.png": "d8d8327a11b313b4e0d455c277a54513",
"icons/favicon-16x16.png": "fb58b5b71c5c966338135ba5a445b7b8",
"icons/android-icon-144x144.png": "8e3c608c7679d4b2e59824b71da466b7",
"icons/android-icon-192x192.png": "727ed6f3587962585dc5d72203099c33",
"icons/android-icon-96x96.png": "b4d649f7cd31aa42fbd6bc1445e93956",
"icons/favicon-96x96.png": "b4d649f7cd31aa42fbd6bc1445e93956",
"icons/android-icon-36x36.png": "a112d681acc4617e2bc6326dbf731f71",
"icons/apple-icon-120x120.png": "db19c949355beae3b06276f6bb91900b",
"icons/ms-icon-144x144.png": "8e3c608c7679d4b2e59824b71da466b7",
"icons/apple-icon-72x72.png": "48934c3b63e4fd8fc489a191d234d3b0",
"icons/ms-icon-310x310.png": "e1e56d89b7e74c38e5abb0515bc15747",
"icons/ms-icon-150x150.png": "0a794862543f8473cf7a57955a926b6e",
"icons/apple-icon-152x152.png": "73abee462ae3be4565191fdd62d94a1b",
"icons/apple-icon-precomposed.png": "4a5ffdcb0bde44f5e4e6651092f6e9d2",
"icons/android-icon-48x48.png": "e582ecac02b3a05a7d75c050ac4f125f",
"icons/apple-icon-144x144.png": "8e3c608c7679d4b2e59824b71da466b7",
"icons/ms-icon-70x70.png": "0654eba82a61f7b9f95aa8caad3f592a",
"icons/apple-icon-180x180.png": "1654bb23d0a67aa296496bd66659b040",
"icons/apple-icon.png": "4a5ffdcb0bde44f5e4e6651092f6e9d2",
"icons/apple-icon-76x76.png": "df53eb072285c8be63944bcb8f48d5e8",
"version.json": "11c7a99527ebb2c5486877c8b9763332",
"main.dart.js": "369154df5443c6e133512c8a79c0374f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
