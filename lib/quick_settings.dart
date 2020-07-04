/*
Copyright 2019 The dahliaOS Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import 'dart:ui';
import 'dart:io';
import 'package:GeneratedApp/localization/localization.dart';
import 'package:flutter/material.dart';
import 'package:hive/hive.dart';
import 'package:intl/intl.dart';
import 'dart:async';
import 'main.dart';
import 'themes/dynamic_theme.dart';

class QuickSettings extends StatefulWidget {
  @override
  QuickSettingsState createState() => QuickSettingsState();
}

class QuickSettingsState extends State<QuickSettings> {
  double brightness = 0.8;
  double volume = 0.5;

  String _dateString;
  String _timeString;

  @override
  void initState() {
    Pangolin.settingsBox = Hive.box("settings");
    _timeString = _formatDateTime(DateTime.now(), 'hh:mm');
    _dateString = _formatDateTime(DateTime.now(), 'E, d MMMM yyyy');
    Timer.periodic(Duration(milliseconds: 100), (Timer t) => _getTime(context));
    super.initState();
  }

  void _getTime(BuildContext context) {
    final DateTime now = DateTime.now();
    final String formattedTime = _formatDateTime(now, 'hh:mm');
    final String formattedDate = _formatLocaleDate(now);
    setState(() {
      _timeString = formattedTime;
      _dateString = formattedDate;
    });
  }

  //Default date format
  String _formatDateTime(DateTime dateTime, String pattern) {
    return DateFormat(pattern).format(dateTime);
  }

  //Format date using language
  String _formatLocaleDate(DateTime dateTime) {
    return DateFormat.yMMMMd(Localizations.localeOf(context).languageCode)
        .format(dateTime);
  }

  MaterialButton buildPowerItem(
      IconData icon, String label, String function, String subARG) {
    return MaterialButton(
      onPressed: () {
        Process.run(
          function,
          [subARG],
        );
      },
      child: Column(
        //mainAxisSize: MainAxisSize.min,
        //mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Icon(
            icon,
            color: Colors.grey[900],
            size: 25.0,
            semanticLabel: 'Power off',
          ),
          Container(
            margin: EdgeInsets.only(top: 8),
            child: Text(
              label,
              style: TextStyle(
                fontSize: 15.0,
                color: Colors.grey[900],
              ),
              textAlign: TextAlign.center,
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    Localization local = Localization.of(context);
    const biggerFont = TextStyle(
      fontSize: 15.0,
      fontWeight: FontWeight.w400,
      color: Colors.white,
    );
    Widget topSection = Container(
      padding: EdgeInsets.all(10.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          /*Expanded(
            child:*/
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(_timeString, style: biggerFont),
                //Icon(Icons.brightness_1, size: 10.0,color: Colors.white),
                Text('  •  ', style: biggerFont),
                Text(_dateString, style: biggerFont),
              ],
            ),
          ),
          Spacer(),
          //),
          new IconButton(
            icon: const Icon(Icons.power_settings_new),
            onPressed: () {
              showGeneralDialog(
                barrierLabel: "Barrier",
                barrierDismissible: true,
                barrierColor: Colors.black.withOpacity(0.5),
                transitionDuration: Duration(milliseconds: 200),
                context: context,
                pageBuilder: (_, __, ___) {
                  return Align(
                    alignment: Alignment.center,
                    child: Container(
                      height: 90,
                      width: 400,
                      child: SizedBox.expand(
                        child: new Center(
                            child: new Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Padding(
                              padding: EdgeInsets.only(top: 20.0, right: 20),
                              child: buildPowerItem(Icons.power_settings_new,
                                  'Power off', 'shutdown', '-h now'),
                            ),
                            Padding(
                              padding: EdgeInsets.only(top: 20.0, right: 20),
                              child: buildPowerItem(
                                  Icons.refresh, 'Restart', 'reboot', ''),
                            ),
                            Padding(
                              padding: EdgeInsets.only(top: 20.0, right: 20),
                              child: buildPowerItem(Icons.developer_mode,
                                  'Terminal', 'killall', 'pangolin_desktop'),
                            ),
                          ],
                        )),
                      ),
                      margin: EdgeInsets.only(bottom: 75, left: 12, right: 12),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  );
                },
                transitionBuilder: (_, anim, __, child) {
                  return FadeTransition(
                    opacity: anim,
                    child: child,
                  );
                },
              );
            },
            color: const Color(0xFFffffff),
          ),

          new IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {
              notImplemented(context);
            },
            color: const Color(0xFFffffff),
          ),
        ],
      ),
    );

    void changeColor() {
      DynamicTheme.of(context).setThemeData(
        ThemeData(
          primaryColor: Theme.of(context).primaryColor == Colors.indigo
              ? Colors.red
              : Colors.indigo,
        ),
      );
    }

    Widget sliderSection = Container(
        margin: EdgeInsets.fromLTRB(25, 0, 25, 10),
        child: Column(
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Icon(
                  Icons.brightness_6,
                  color: Colors.white,
                ),
                Expanded(
                  child: Slider(
                      value: brightness,
                      divisions: 10,
                      onChanged: (newBrightness) {
                        setState(() {
                          brightness = newBrightness;
                        });
                      }),
                ),
                Container(
                  width: 35,
                  child: Center(
                    child: Text(
                      "${(brightness * 100).toInt().toString()}",
                      style: TextStyle(
                        color: Colors.white,
                        letterSpacing: 1.2,
                        fontSize: 15.0,
                      ),
                    ),
                  ),
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                Icon(
                  Icons.volume_up,
                  color: Colors.white,
                ),
                Expanded(
                  child: Slider(
                    value: volume,
                    divisions: 20,
                    onChanged: (newVolume) {
                      setState(() {
                        volume = newVolume;
                      });
                    },
                  ),
                ),
                Container(
                  width: 35,
                  child: Center(
                    child: Text(
                      "${(volume * 100).toInt().toString()}",
                      style: TextStyle(
                        color: Colors.white,
                        letterSpacing: 1.2,
                        fontSize: 15.0,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ));

    Column buildTile(IconData icon, String label, Function onClick) {
      return Column(
        //mainAxisSize: MainAxisSize.min,
        //mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          FloatingActionButton(
            onPressed: onClick,
            elevation: 0.0,
            child: Icon(icon, color: Colors.white, size: 30.0),
          ),
          Container(
            margin: EdgeInsets.only(top: 10),
            child: Text(
              label,
              style: biggerFont,
              textAlign: TextAlign.center,
            ),
          ),
        ],
      );
    }

    Widget tileSection = Expanded(
      child: Container(
          padding: EdgeInsets.all(10.0),
          child: GridView.count(
              physics: BouncingScrollPhysics(),
              crossAxisCount: 4,
              childAspectRatio: 2.5 / 4,
              children: [
                buildTile(
                    Icons.network_wifi, local.get("qs_wifi"), changeColor),
                buildTile(Icons.palette, local.get("qs_theme"), changeColor),
                buildTile(Icons.battery_full, '85%', changeColor),
                buildTile(
                    Icons.do_not_disturb_off, local.get("qs_dnd"), changeColor),
                buildTile(Icons.lightbulb_outline, local.get("qs_flashlight"),
                    changeColor),
                buildTile(Icons.screen_lock_rotation,
                    local.get("qs_autorotate"), changeColor),
                buildTile(
                    Icons.bluetooth, local.get("qs_bluetooth"), changeColor),
                buildTile(Icons.airplanemode_inactive,
                    local.get("qs_airplanemode"), changeColor),
                buildTile(Icons.invert_colors_off, local.get("qs_invertcolors"),
                    changeColor),
                buildTile(Icons.language, local.get("qs_changelanguage"), () {
                  /*if (Localizations.localeOf(context).toString() == "en") {
                    Pangolin.setLocale(context, Locale("de"));
                    Pangolin.settingsBox.put("language", "de");
                  }
                  if (Localizations.localeOf(context).toString() == "de") {
                    Pangolin.setLocale(context, Locale("en"));
                    Pangolin.settingsBox.put("language", "en");
                  }*/
                  switch (Localizations.localeOf(context).toString()) {
                    case "en_US":
                      Pangolin.setLocale(context, Locale("de", "DE"));
                      Pangolin.settingsBox.put("language", "de_DE");
                      break;
                    case "de_DE":
                      Pangolin.setLocale(context, Locale("fr", "FR"));
                      Pangolin.settingsBox.put("language", "fr_FR");
                      break;
                    case "fr_FR":
                      Pangolin.setLocale(context, Locale("pl", "PL"));
                      Pangolin.settingsBox.put("language", "pl_PL");
                      break;
                    case "pl_PL":
                      Pangolin.setLocale(context, Locale("hr", "HR"));
                      Pangolin.settingsBox.put("language", "hr_HR");
                      break;
                    case "hr_HR":
                      Pangolin.setLocale(context, Locale("nl", "BE"));
                      Pangolin.settingsBox.put("language", "nl_BE");
                      break;
                    case "nl_BE":
                      Pangolin.setLocale(context, Locale("nl", "NL"));
                      Pangolin.settingsBox.put("language", "nl_NL");
                      break;
                    case "nl_NL":
                      Pangolin.setLocale(context, Locale("en", "US"));
                      Pangolin.settingsBox.put("language", "en_US");
                      break;
                    default:
                      Pangolin.setLocale(context, Locale("en", "US"));
                      Pangolin.settingsBox.put("language", "en_US");
                      break;
                  }
                }),
              ])),
    );

    return Container(
      color: Colors.black.withOpacity(0.0),
      //original color was 29353a, migrated to 2D2D2D
      //padding: const EdgeInsets.all(10.0),
      //alignment: Alignment.centerLeft,
      margin: EdgeInsets.all(15.0),
      width: 375,
      height: 600,
      child: Column(
        children: [topSection, sliderSection, tileSection],
      ),
    );
  }
}

void notImplemented(BuildContext context) {
  showDialog(
    context: context,
    builder: (BuildContext context) {
      // return object of type Dialog
      return AlertDialog(
        title: new Text(
            Localization.of(context).get("featurenotimplemented_title")),
        content: new Text(
            Localization.of(context).get("featurenotimplemented_value")),
        actions: <Widget>[
          // usually buttons at the bottom of the dialog
          new FlatButton(
            child: new Text("OK"),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
        ],
      );
    },
  );
}
