// Copyright 2017 The Fuchsia Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

import 'apps.dart';
import 'widgets/toggle.dart';

/// A toggle button for the launcher.
class LauncherToggleWidget extends StatelessWidget {
  final ValueChanged<bool> _callback;
  final GlobalKey<ToggleState> _toggleKey;

  final Tween<double> _backgroundOpacityTween =
      new Tween<double>(begin: 0.0, end: 0.33);

  /// Constructor.
  LauncherToggleWidget({
    GlobalKey<ToggleState> toggleKey,
    ValueChanged<bool> callback,
  })  : _toggleKey = toggleKey,
        _callback = callback;

  @override
  Widget build(BuildContext context) => new Container(
        width: 45,
        height: 45,
        child: Toggle(
          key: _toggleKey,
          callback: _callback,
          builder: (Animation<double> animation) => new AnimatedBuilder(
            animation: animation,
            builder: (BuildContext context, Widget child) => new Stack(
              children: <Widget>[
                new Positioned(
                  //top: 0,
                  bottom: -4,
                  left: -3,
                  child: new Image.asset(
                    "lib/images/icons/v2/compiled/launcher.png",
                    width: 50,
                    height: 50,
                  ),
                )
              ],
            ),
          ),
        ),
      );
}
