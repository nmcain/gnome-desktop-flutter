import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

void main() {
  runApp(new Settings());
}

class Settings extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Generated App',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
        primaryColor: const Color(0xFF2196f3),
        accentColor: const Color(0xFF2196f3),
        canvasColor: const Color(0xFFf6f6f6),
      ),
      home: new MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key}) : super(key: key);
  @override
  _MyHomePageState createState() => new _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int segmentedControlGroupValue = 0;
  final Map<int, Widget> myTabs = const <int, Widget>{
    0: Text("Overview"),
    1: Text("Displays"),
    2: Text("Storage"),
    3: Text("Support"),
    4: Text("Service"),
  };
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        body: new Column(
            mainAxisAlignment: MainAxisAlignment.start,
            mainAxisSize: MainAxisSize.max,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
          new Container(
              color: Colors.white,
              width: 100000,
              height: 50,
              child: new Center(
                child: CupertinoSlidingSegmentedControl(
                    groupValue: segmentedControlGroupValue,
                    children: myTabs,
                    onValueChanged: (i) {
                      setState(() {
                        segmentedControlGroupValue = i;
                      });
                    }),
              )),
          new Row(
            children: [
              new Container(
                  width: 256,
                  height: 256,
                  child: Center(
                    child: new Image.asset(
                      "lib/images/icons/v2/compiled/bigsur.png",
                      height: 147,
                      width: 147,
                    ),
                  )),
              new Column(
                mainAxisAlignment: MainAxisAlignment.start,
                mainAxisSize: MainAxisSize.max,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  new Row(
                    children: [
                      new Text("NOT macOS",
                          style: new TextStyle(
                              fontSize: 24, fontWeight: FontWeight.w500)),
                      new Text(" Big Sur",
                          style: new TextStyle(
                              fontSize: 24, fontWeight: FontWeight.w300)),
                    ],
                  ),
                  new Text("Version 11.0 Beta (20A4299v)",
                      style: new TextStyle(
                          fontSize: 12, fontWeight: FontWeight.w500)),
                  new Container(
                    width: 100,
                    height: 16,
                  ),
                  new Row(
                    children: [
                      new Text("MacBook Pro (15-inch, Mid 2012)",
                          style: new TextStyle(
                              fontSize: 12, fontWeight: FontWeight.w600)),
                    ],
                  ),
                  new Row(
                    children: [
                      new Text("Processor",
                          style: new TextStyle(
                              fontSize: 12, fontWeight: FontWeight.w600)),
                      new Text("  A14X",
                          style: new TextStyle(
                              fontSize: 12, fontWeight: FontWeight.w500)),
                    ],
                  ),
                  new Row(
                    children: [
                      new Text("Memory",
                          style: new TextStyle(
                              fontSize: 12, fontWeight: FontWeight.w600)),
                      new Text("  16 GB 1600 MHz DDR3",
                          style: new TextStyle(
                              fontSize: 12, fontWeight: FontWeight.w500)),
                    ],
                  ),
                  new Row(
                    children: [
                      new Text("Startup Disk",
                          style: new TextStyle(
                              fontSize: 12, fontWeight: FontWeight.w600)),
                      new Text("  Macintosh SSD",
                          style: new TextStyle(
                              fontSize: 12, fontWeight: FontWeight.w500)),
                    ],
                  ),
                  new Row(
                    children: [
                      new Text("Graphics",
                          style: new TextStyle(
                              fontSize: 12, fontWeight: FontWeight.w600)),
                      new Text("  AMD Radeon Pro 5600M 8GB",
                          style: new TextStyle(
                              fontSize: 12, fontWeight: FontWeight.w500)),
                    ],
                  ),
                  new Row(
                    children: [
                      new Text("Serial Number",
                          style: new TextStyle(
                              fontSize: 12, fontWeight: FontWeight.w600)),
                      new Text("  B13KH6ULEW44",
                          style: new TextStyle(
                              fontSize: 12, fontWeight: FontWeight.w500)),
                    ],
                  ),
                ],
              )
            ],
          )
        ]));
  }
}
