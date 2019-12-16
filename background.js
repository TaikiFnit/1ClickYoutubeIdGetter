// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function saveToClipboard(str) {
  // copy 用に textareaを作る
  var textArea = document.createElement("textarea");
  textArea.style.cssText = "position:absolute;left:-100%";

  document.body.appendChild(textArea);

  textArea.value = str;
  textArea.select();
  document.execCommand("copy");

  document.body.removeChild(textArea);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      saveToClipboard(request.text);
});