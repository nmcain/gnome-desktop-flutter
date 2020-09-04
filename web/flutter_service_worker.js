'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b28a4fa667aecc6a81ce7156a87c6bca",
"/": "b28a4fa667aecc6a81ce7156a87c6bca",
"main.dart.js": "fca7e8a9095f73c69f2ad117c2588fc9",
"favicon.png": "0bbb275c3be676f24451e7680147c8a2",
"icons/Icon-192.png": "0bbb275c3be676f24451e7680147c8a2",
"icons/Icon-512.png": "0bbb275c3be676f24451e7680147c8a2",
"manifest.json": "8ff5fe849411d088c5084cdf099d07cf",
"assets/AssetManifest.json": "456b6d9cb572242922468c36d3a6faa6",
"assets/NOTICES": "e53ca29e92cd19fa426270eb51346056",
"assets/FontManifest.json": "c0a95f5c2b7c46e71f94228addbbfeb4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/lib/images/notes.svg": "bfc3be24a1be5e6bfebe8631e5b5ea59",
"assets/lib/images/gallery.png": "5259483d1365c9b825bd6947cd85c016",
"assets/lib/images/wallpaper.png": "5d490931a734ec44fd88bdc9b947d9ab",
"assets/lib/images/settings.png": "ff6396d14363cf9951455a79b36ae35b",
"assets/lib/images/dahlia.png": "d96e5a6eb23a7eb042d83777e7151f58",
"assets/lib/images/maximize.svg": "ba29473f37ab194a01c241d5daf7d550",
"assets/lib/images/def.jpg": "24bc69b19e663f4c8174bb27b88bee87",
"assets/lib/images/def.png": "4a9154fbf35a6772da8fe15819d76881",
"assets/lib/images/minimize.svg": "02136894edcb5f8ffff640ddda3d0c10",
"assets/lib/images/calc.png": "be34c099a9a4c15b40692c0610873d3f",
"assets/lib/images/music.png": "545d9a70d4d7c5f525610b8e1c84801c",
"assets/lib/images/Desktop/Dahlia/dahlia_material_background-1.jpg": "db3112225aaa7aa16dfe2dc5b060465f",
"assets/lib/images/Desktop/Dahlia/forest.jpg": "bb9971fadf446779b9f29204180bcf72",
"assets/lib/images/Desktop/Dahlia/mountain.jpg": "7fca0b04f5582bd15144f8ede952aa17",
"assets/lib/images/Desktop/Dahlia/dahlia_material_background.jpg": "eb83b6fae9d42765e4c4446c675d4c11",
"assets/lib/images/Desktop/Dahlia/Brick-Wall.jpg": "0b04e08e5ea10b738aa73291c38b24c9",
"assets/lib/images/Desktop/Dahlia/Sunset.png": "0c90e0b1fd118334e32f7f186813567b",
"assets/lib/images/Desktop/Dahlia/mac.jpeg": "01b465af0d74989ac75317becc195c70",
"assets/lib/images/Desktop/Cityscapes/stairs.png": "d4b0a0eaad1f0017fcc9d73e3a922994",
"assets/lib/images/notes.png": "50ce947efebd3bf7d0d87d2de28286cf",
"assets/lib/images/close.svg": "7ef4ba2fef8ceac03c3960499de3f8bc",
"assets/lib/images/test.jpg": "57020cf201710a061e4a67ef79bc3ebe",
"assets/lib/images/menu.png": "e824461dd4c3e943b4b1da1817290f73",
"assets/lib/images/zucc.jpg": "80fca56b8121335ef576b10238bdd7eb",
"assets/lib/images/google_logo.png": "9b224c9884c2bb081d4ac92b23675c2e",
"assets/lib/images/icons/v2/notes.svg": "766b05b07affbf7a09079e4023a99823",
"assets/lib/images/icons/v2/compiled/fuchsia.png": "687e3a9bac810885c97028229adf3ac2",
"assets/lib/images/icons/v2/compiled/News.png": "eab37760516e92aa87d3bc1d8b411fcf",
"assets/lib/images/icons/v2/compiled/Disk%2520Utility.png": "b969d77b508bb32a0d58b72b9008a117",
"assets/lib/images/icons/v2/compiled/Migration%2520Assistant.png": "ffc68ec9c23619c19a96875e25f919c9",
"assets/lib/images/icons/v2/compiled/Dictionary%2520Beta%25203.png": "34d2db5d25d2575185b766254ae2d581",
"assets/lib/images/icons/v2/compiled/TextEdit.png": "69ef588ba1c2f9ef3901ff6230385e28",
"assets/lib/images/icons/v2/compiled/macos_big_sur_icons__icon_pack__by_bbrandis_de0jgbh.zip": "f85ad95010643bd01006afc02f3ee540",
"assets/lib/images/icons/v2/compiled/Finder.png": "f38df761404019e890371be0d4913776",
"assets/lib/images/icons/v2/compiled/welcome-info.png": "cf9e894cfddbcd39a5efaf9f29186ba9",
"assets/lib/images/icons/v2/compiled/macos-11-all-icons-tld/terminal.png": "589117b7c0310d95571ecce4fea4d7e4",
"assets/lib/images/icons/v2/compiled/macos-11-all-icons-tld/music.png": "9a44a1ef2521de8e3789b28670663259",
"assets/lib/images/icons/v2/compiled/macos-11-all-icons-tld/notes.png": "835f789666aad5e766b268c8e9b43cbe",
"assets/lib/images/icons/v2/compiled/macos-11-all-icons-tld/calculator.png": "52655f0c6ddd5c3dc405bfe7df7c1f68",
"assets/lib/images/icons/v2/compiled/macos-11-all-icons-tld/photos.png": "54356351c822a49487e5b8b80664cd94",
"assets/lib/images/icons/v2/compiled/macos-11-all-icons-tld/messages.png": "dea760bf42c8fc2e75ad89077772cfe4",
"assets/lib/images/icons/v2/compiled/telegram.png": "36218d3af50dbc1d0240879a5f966fc4",
"assets/lib/images/icons/v2/compiled/Mission%2520Control%2520Beta%25203.png": "ca39586d8a300f9ec77693a18ee6fc4e",
"assets/lib/images/icons/v2/compiled/Preview.png": "a19e15ebb17ad6943a1aacc327fd708c",
"assets/lib/images/icons/v2/compiled/Mission%2520Control.png": "2134febbfed24c300751d52b9a0a291c",
"assets/lib/images/icons/v2/compiled/launcher.png": "aebed269e28bea7377468184abfdc029",
"assets/lib/images/icons/v2/compiled/Folder%2520Actions%2520Setup.png": "4f2cd2f3a962ce6fff5159a2a7d2633d",
"assets/lib/images/icons/v2/compiled/Stocks.png": "718136a277c14cd5c3d74b8c3669192b",
"assets/lib/images/icons/v2/compiled/Mail.png": "54ce55df925bc0d3b77796be7203d643",
"assets/lib/images/icons/v2/compiled/Digital%2520Color%2520Meter.png": "3820e840854283950c4cdf641c5410ef",
"assets/lib/images/icons/v2/compiled/Safari.png": "d0b926be219a3366f9fa20ae03b6df06",
"assets/lib/images/icons/v2/compiled/ColorSync%2520Utility.png": "d52d86e54c638860bfae9d65c39d1e8b",
"assets/lib/images/icons/v2/compiled/Dictionary.png": "eb7f01d410c016c9f0970875e9d96a6d",
"assets/lib/images/icons/v2/compiled/QuickTime%2520Player.png": "77373ceb659abca03a6df899d4ec1137",
"assets/lib/images/icons/v2/compiled/settings.png": "cae19ca521ae216efa64163f94669e68",
"assets/lib/images/icons/v2/compiled/Script%2520Editor.png": "ecfcfff8b9afcb0999d6bac4a728d9f8",
"assets/lib/images/icons/v2/compiled/Podcasts.png": "851939fbe559102dd2ea79c33a0ce883",
"assets/lib/images/icons/v2/compiled/instagram.png": "167d43e215d131aee95b797a0bc8578e",
"assets/lib/images/icons/v2/compiled/Screen%2520Sharing.png": "943beead642211dbadda5cc316354435",
"assets/lib/images/icons/v2/compiled/logs.png": "f8514d709014f2d4837abf490554f15d",
"assets/lib/images/icons/v2/compiled/grey-drag.png": "5cd67288c96842c01f379559adb73487",
"assets/lib/images/icons/v2/compiled/Chess.png": "042a40c1a3538e409e3a6a9ea3e2f487",
"assets/lib/images/icons/v2/compiled/terminal.png": "46d6176f469998c22f32a0528f137435",
"assets/lib/images/icons/v2/compiled/files.png": "d4e8c92b9329dae296dbf5729cfcdcb5",
"assets/lib/images/icons/v2/compiled/Help%2520Viewer.png": "747cf1ae1a3915ae8a4db789ac0ef7ae",
"assets/lib/images/icons/v2/compiled/Books.png": "6e6895f4a41e909d95d3b428df0d5e68",
"assets/lib/images/icons/v2/compiled/AppleTV.png": "ef4b3aa06faf9eb0d026ac39ee9bdc11",
"assets/lib/images/icons/v2/compiled/Downloads.png": "186309b04ea0b4d06427e5451fc687de",
"assets/lib/images/icons/v2/compiled/Ticket%2520Viewer.png": "89a44802ccf7aebc01fa409e89e2a7db",
"assets/lib/images/icons/v2/compiled/github.png": "bd64ef0f18cf6b627dc8390a96aed2bd",
"assets/lib/images/icons/v2/compiled/theme.png": "15a8a424c5c86a52f0d816b04d71893f",
"assets/lib/images/icons/v2/compiled/Siri.png": "0dae339f45b8c4f6bbb425575de97d82",
"assets/lib/images/icons/v2/compiled/Setup%2520Assistant.png": "8578a51ffbed34a72a6ce325b1fdd29e",
"assets/lib/images/icons/v2/compiled/music.png": "f12b95ccff64115c40e2614087e62ebd",
"assets/lib/images/icons/v2/compiled/android.png": "27a703eacba2bbfed57346b32b7af9b1",
"assets/lib/images/icons/v2/compiled/Screenshot.png": "926436933edbca3b2807cbf1f763cc6e",
"assets/lib/images/icons/v2/compiled/bigsur.png": "c1df8f7062fab7f9036cc2c49ac1acfa",
"assets/lib/images/icons/v2/compiled/Home.png": "b8b24e9b3a394d4ea3e67e2ae24eaa5a",
"assets/lib/images/icons/v2/compiled/trashempty.png": "548db0f1b161483382295f35435f5c81",
"assets/lib/images/icons/v2/compiled/Grapher.png": "b1f43e6eb687092d3cb79a36ed6537ea",
"assets/lib/images/icons/v2/compiled/trashfull.png": "2c0a14f70e4eea9019fbebf0720b4af7",
"assets/lib/images/icons/v2/compiled/software-shared.png": "868fe8e3d80b189e934220391a09dfaa",
"assets/lib/images/icons/v2/compiled/Font%2520Book.png": "e95836360f12817ab40499d4261eb396",
"assets/lib/images/icons/v2/compiled/demo.png": "9ecb35c861cada64a9650e4844bf858f",
"assets/lib/images/icons/v2/compiled/Directory%2520Utility.png": "f67d8b0af969ea395653c5856c993613",
"assets/lib/images/icons/v2/compiled/Activity%2520Monitor.png": "c5f1ad1144e4adf62235df09aa9fe3fc",
"assets/lib/images/icons/v2/compiled/Voice%2520Memos.png": "36c52c14463d2815d347d0f2c4a6e058",
"assets/lib/images/icons/v2/compiled/os_x_yosemite___trash_icon_by_johanchalibert-d7kvkbp/trashempty.png": "548db0f1b161483382295f35435f5c81",
"assets/lib/images/icons/v2/compiled/os_x_yosemite___trash_icon_by_johanchalibert-d7kvkbp/trashfull.png": "2c0a14f70e4eea9019fbebf0720b4af7",
"assets/lib/images/icons/v2/compiled/AppStore.png": "7ed991f9dc99a9e41b27e575626a6403",
"assets/lib/images/icons/v2/compiled/Archive%2520Utility.png": "bedd584e30a87bee0704760a75cff347",
"assets/lib/images/icons/v2/compiled/task.png": "cbe0adb03858a592be8cc8ff9f0f8778",
"assets/lib/images/icons/v2/compiled/notes.png": "43876cc48048a2c19e28c311c17010ef",
"assets/lib/images/icons/v2/compiled/AddressBook.png": "002461a054e0d525adf5ad34253989d3",
"assets/lib/images/icons/v2/compiled/developer.png": "2534f18906e91789798a4b78cce342f8",
"assets/lib/images/icons/v2/compiled/Audio%2520MIDI%2520Setup.png": "d93428a0c28a678500f626783e940951",
"assets/lib/images/icons/v2/compiled/os_x_yosemite___trash_icon_by_johanchalibert-d7kvkbp.zip": "20b6b5cbb3bcd289fef07419316927ab",
"assets/lib/images/icons/v2/compiled/Launchpad.png": "f17a58487fa21f1008c4bec8499426c4",
"assets/lib/images/icons/v2/compiled/calculator.png": "8ba2631c49010fc2a1a0b762865c63f7",
"assets/lib/images/icons/v2/compiled/containers.png": "9bc804fe540229392a62707a9377ab7c",
"assets/lib/images/icons/v2/compiled/help.png": "7a5c20194d46ccadbe86b089c887b230",
"assets/lib/images/icons/v2/compiled/Music%2520Beta%25203.png": "3573b0e895086ff7ce4d49ec9999a647",
"assets/lib/images/icons/v2/compiled/Console.png": "a57675e3ea89ccfbcd96d1a2b0daf905",
"assets/lib/images/icons/v2/compiled/Generic%2520App%2520Icon.png": "79a3a9e31558d9cc10a0b24a15425560",
"assets/lib/images/icons/v2/compiled/debian.png": "527552dd24e4cd27bfb4be63b2c454c4",
"assets/lib/images/icons/v2/compiled/Automator.png": "21571d6be1a96eed6acb1cdbb4756e22",
"assets/lib/images/icons/v2/compiled/macos.png": "2799296e4d4831c96c2b1b205d0ae796",
"assets/lib/images/icons/v2/compiled/twitter.png": "60240fc14b7a7282a59050308aeeebed",
"assets/lib/images/icons/v2/compiled/Calendar.png": "6263bb5a6fa04e836c891223f6ecd7d0",
"assets/lib/images/icons/v2/compiled/discord.png": "103e593c79206b9cd16fef562cc7ac32",
"assets/lib/images/icons/v2/compiled/Reminders.png": "64350c446b55a542a7ab764c40726f0d",
"assets/lib/images/icons/v2/compiled/Screen%2520Time.png": "bbf7a469082ec3a021fd8b424cef58f3",
"assets/lib/images/icons/v2/compiled/web.png": "5267e96f07d0952b4e388a7b9f9df00a",
"assets/lib/images/icons/v2/compiled/root.png": "46d6176f469998c22f32a0528f137435",
"assets/lib/images/icons/v2/compiled/Boot%2520Camp%2520Assistant.png": "b6bae9e1c819132d105552bf6ef86038",
"assets/lib/images/icons/v2/compiled/clock.png": "678516f33e51ff14d1763f63b07e100e",
"assets/lib/images/icons/v2/compiled/reddit.png": "55c518a20a303e09e31c370190a62728",
"assets/lib/images/icons/v2/compiled/System%2520Profiler.png": "7371470cb4842a16c718017e42169873",
"assets/lib/images/icons/v2/compiled/Game%2520Center.png": "0e2c4b9bd3ee84685222be65981f25e8",
"assets/lib/images/icons/v2/compiled/VoiceOver%2520Utility.png": "152f1a4259d0d615a6e0b4218691896e",
"assets/lib/images/icons/v2/compiled/disks.png": "d33d10a35aa3c2624e09d931549a4be0",
"assets/lib/images/icons/v2/compiled/credits.png": "8eb3c439b19df88fb7643c395bc983b2",
"assets/lib/images/icons/v2/compiled/note_mobile.png": "8d93adf119a03065de766f2a86a94429",
"assets/lib/images/icons/v2/compiled/Installer.png": "fe20a80bb083faddbbe6fc300a90d12d",
"assets/lib/images/icons/v2/compiled/Find%2520My.png": "42d60bb66c579f1ba7d2e1e9bd57dbe9",
"assets/lib/images/icons/v2/compiled/Photo%2520Booth.png": "3d939571bb66732ed1303b5fd1b7c56f",
"assets/lib/images/icons/v2/compiled/discord.svg": "f8389ca1a741a115313bede9ac02e2c0",
"assets/lib/images/icons/v2/compiled/Wireless%2520Diagnostics.png": "60bf0e31feff35817e7ba85d6da1970a",
"assets/lib/images/icons/v2/compiled/FaceTime.png": "bcc5827d07d22a841670f25abaffc195",
"assets/lib/images/icons/v2/compiled/Bluetooth%2520File%2520Exchange.png": "449b9c967a306c4354d6b0f327bc39e7",
"assets/lib/images/icons/v2/compiled/Screenshot%2520Beta%25203.png": "2ffb067d15d9127fa65a6a8960b9bff4",
"assets/lib/images/icons/v2/compiled/DVD%2520Player.png": "502129602850218bc01ffe8a7cd37f5e",
"assets/lib/images/icons/v2/compiled/facebook.png": "d54e509f31d051140eca9e8d7b34ec40",
"assets/lib/images/icons/v2/compiled/Image%2520Capture.png": "da600d94b8dfb0bb35f817148d2e005c",
"assets/lib/images/icons/v2/compiled/Feedback.png": "6dec93fa86850c0f4429889658cbfead",
"assets/lib/images/icons/v2/compiled/photos.png": "8bba0221ba65784d54ca8fd4ff523109",
"assets/lib/images/icons/v2/compiled/Stickies.png": "477deaa03076ab3ee88f990a82f77c31",
"assets/lib/images/icons/v2/compiled/messages.png": "fae65f6a2d7c9c91bc1c723fe349d202",
"assets/lib/images/icons/v2/compiled/ubuntu.png": "dc5596b1ded46cc5b61f74b860e98964",
"assets/lib/images/icons/v2/compiled/Time%2520Machine.png": "5a6d928e280669681ab5c55b73c6ea44",
"assets/lib/images/icons/v2/compiled/AirPort%2520Utility.png": "ceac2cb43e9b49e48295627285cbdb4f",
"assets/lib/images/icons/v2/compiled/System%2520Preferences.png": "9ecb35c861cada64a9650e4844bf858f",
"assets/lib/images/icons/v2/compiled/Keychain%2520Access.png": "93b7da2995d2b1d781a9508bcef503c5",
"assets/lib/images/icons/v2/compiled/Maps.png": "d86b6acb125092eee46aabde89a4edfb",
"assets/lib/images/icons/v2/compiled/social.png": "e0f4fcf882cc23ed646290fbfc859986",
"assets/lib/images/icons/v2/compiled/software.png": "960cdf38b0daacbf2d3316355c3f78f1",
"assets/lib/images/icons/v2/compiled/macos-11-all-icons-tld.zip": "c4c3f3b877735d8c921f1152644f15eb",
"assets/lib/images/people/funeoz.jpeg": "d522359a4cebc56c1b010d045841842e",
"assets/lib/images/people/haru.jpeg": "8b9b2dc7e5860d2ed1dcbc6caf91e4f8",
"assets/lib/images/people/horus.png": "0954704c21a5dd4b9e1c1d3002731d93",
"assets/lib/images/people/subspace.png": "0951d9906bf56e0c894cdb8a6af132f6",
"assets/lib/images/people/nobody.png": "8ac80de1e2063e5db0fdc2f682635a40",
"assets/lib/images/people/vanzh.png": "b010c6f5739d6582e4dd0222ceb82d99",
"assets/lib/images/people/hexa.png": "471b6963aad7aaa33001f93931db82f9",
"assets/lib/images/people/lars.jpeg": "9f6e9c8f4065e27be8610c33cddfaacc",
"assets/lib/images/people/x7.jpeg": "0a7fb010e70ddeb807a6b0cd45ed89c1",
"assets/lib/images/people/bleonard.png": "7a774ad7d57b711273cba62eeefb0b5e",
"assets/lib/images/people/fristover.png": "d77e781c46f9030f9fce4905c851f320",
"assets/lib/images/people/camden.jpeg": "b2deaec16dec8fed29fb9b9ce34ff028",
"assets/lib/images/people/noah.jpeg": "c548542b5b181616bd48d4076e664b58",
"assets/lib/images/people/faust.png": "85391c85d4fb7379905cd045ab1d5606",
"assets/lib/images/phone.png": "de209128b7b3241f65b8b5c117c10190",
"assets/lib/images/clock.png": "d947514d9e25f18c4fbd72e9ad833195",
"assets/lib/images/Gmail-icon.png": "dfcbd586c56f73e343b25b3af12491c1",
"assets/lib/images/logo-color.png": "6748a20704842170e7a87088d98d2f22",
"assets/lib/images/preferences-activities.svg": "15717bcbc9d293352bb05ad3bae48cb8",
"assets/lib/application.json": "d77a88179cab3c0105595fdc9dbef771",
"assets/lib/localization/languages/nl.json": "b6b85796b913416b9a899a9ebf5f9f3c",
"assets/lib/localization/languages/de.json": "44276b5369cefaccd0a7e9115c8aea95",
"assets/lib/localization/languages/pl.json": "747184bb81dd7bb45b0ccb7db222e52c",
"assets/lib/localization/languages/pt.json": "e1d87b859bf61e72f1837bf4d31ee980",
"assets/lib/localization/languages/en.json": "a81f7b6d7ac002ece9987e866c8cd916",
"assets/lib/localization/languages/hr.json": "a4f4a4c5cf1caa2d98f190292c3bfe15",
"assets/lib/localization/languages/fr.json": "346ab8ac49cf0a550497c6585f2cde26",
"assets/lib/localization/languages/id.json": "fa99f073eaf3ffab79f1bc779d6c27d3",
"assets/lib/localization/languages/es.json": "e6c9d63ede584416768d1e9d93f7e96f",
"assets/fonts/Source_Code_Pro/SourceCodePro-LightItalic.ttf": "ac76390ae8518be5c0a0bd1f3b088b4b",
"assets/fonts/Source_Code_Pro/SourceCodePro-SemiBold.ttf": "420d3580f5b6e63ba1eabb8555b5f6cf",
"assets/fonts/Source_Code_Pro/SourceCodePro-Medium.ttf": "f621c504d70317ff13774e27d643ba21",
"assets/fonts/Source_Code_Pro/SourceCodePro-SemiBoldItalic.ttf": "6406c55397f0f20723d6b2c2f6515348",
"assets/fonts/Source_Code_Pro/SourceCodePro-MediumItalic.ttf": "0b54cce890a75c2227718eaf473068ba",
"assets/fonts/Source_Code_Pro/SourceCodePro-Light.ttf": "a8d6f8bb989fc3c860ad2eeac21f9daa",
"assets/fonts/Source_Code_Pro/SourceCodePro-BlackItalic.ttf": "fb68d27992feaf97dab1e5640a6f5812",
"assets/fonts/Source_Code_Pro/SourceCodePro-BoldItalic.ttf": "c8066b7adaa839e5f0590da2d34723be",
"assets/fonts/Source_Code_Pro/SourceCodePro-Black.ttf": "efa63de0d44af1e7de9e01a4467dd423",
"assets/fonts/Source_Code_Pro/SourceCodePro-ExtraLight.ttf": "cba7ccef6b4071f76245cc0c5e659aa9",
"assets/fonts/Source_Code_Pro/SourceCodePro-Regular.ttf": "b484b32fcec981a533e3b9694953103b",
"assets/fonts/Source_Code_Pro/SourceCodePro-ExtraLightItalic.ttf": "b98dab96118c3500d0e8c3f887fcfb26",
"assets/fonts/Source_Code_Pro/SourceCodePro-Italic.ttf": "c088801620ae4d69924da74e879170a9",
"assets/fonts/Source_Code_Pro/SourceCodePro-Bold.ttf": "03c11f6b0c0f707075d6483a78824c60",
"assets/fonts/SulphurPoint/SulphurPoint-Bold.ttf": "f7c4253323e6d736b886bd813230a5f1",
"assets/fonts/SulphurPoint/SulphurPoint-Light.ttf": "45985fd198cf37666bb19a61e15f429c",
"assets/fonts/SulphurPoint/SulphurPoint-Regular.ttf": "fe32d30b047837c9d2af053e9f6539f9",
"assets/fonts/Cousine/Cousine-BoldItalic.ttf": "1038b5579146b28e9e4dc98c8fc5d1d9",
"assets/fonts/Cousine/Cousine-Bold.ttf": "06dae6a1a3247bd76125cfe3b3480557",
"assets/fonts/Cousine/Cousine-Italic.ttf": "177a3d2157da07498e805683e8cdaa8d",
"assets/fonts/Cousine/Cousine-Regular.ttf": "64a889644e439ac4806c8e41bc9d1c83",
"assets/fonts/Roboto/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/fonts/Roboto/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"assets/fonts/Roboto/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/fonts/Roboto/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/fonts/Roboto/Roboto-Thin.ttf": "89e2666c24d37055bcb60e9d2d9f7e35",
"assets/fonts/Roboto/Roboto-Black.ttf": "ec4c9962ba54eb91787aa93d361c10a8",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
