/*!
      * WebYes Accessibility Widget v2.0.0
      * (c) 2025 webyes
      * License: MIT
      * Home Page: https://accessibility-widget.pages.dev/
      * Repository: git+https://github.com/bennyluk/WebYes-Accessibility-Widget.git
      */
"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __glob = (map) => (path) => {
    var fn = map[path];
    if (fn) return fn();
    throw new Error("Module not found in bundle: " + path);
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/locales/am.json
  var require_am = __commonJS({
    "src/locales/am.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u12E8\u1270\u12F0\u122B\u123D\u1290\u1275 \u121D\u1293\u120C",
        "Reset settings": "\u1245\u1295\u1265\u122E\u127D\u1295 \u12F3\u130D\u121D \u12A0\u1235\u1300\u121D\u122D",
        Close: "\u12DD\u130B",
        "Content adjustments": "\u12E8\u12ED\u12D8\u1275 \u121B\u1235\u1270\u12AB\u12A8\u12EB\u12CE\u127D",
        "Navigation adjustments": "\u12E8\u12A0\u12F0\u122B\u12F3\u122A \u121B\u1235\u1270\u12AB\u12A8\u12EB\u12CE\u127D",
        "Align Left": "\u130D\u122B \u12A0\u1230\u120B\u120D\u120D",
        "Adjust Font Size": "\u12E8\u134A\u12F0\u120D \u1218\u1320\u1295 \u12A0\u1235\u1270\u12AB\u12AD\u120D",
        "Highlight Title": "\u122D\u12D5\u1235 \u12A0\u1309\u120D\u1270\u12CD \u12A0\u1233\u12ED",
        "Highlight Links": "\u12A0\u1308\u1293\u129E\u127D\u1295 \u12A0\u1309\u120D\u1270\u12CD \u12A0\u1233\u12ED",
        "Readable Font": "\u1208\u1218\u1295\u1260\u1265 \u1240\u120B\u120D \u134A\u12F0\u120D",
        "Colour adjustments": "\u12E8\u1240\u1208\u121D \u121B\u1235\u1270\u12AB\u12A8\u12EB\u12CE\u127D",
        "Dark Contrast": "\u1328\u1208\u121B \u1295\u133D\u133D\u122D",
        "Light Contrast": "\u1265\u122D\u1203\u1293\u12CA \u1295\u133D\u133D\u122D",
        "High Contrast": "\u12A8\u134D\u1270\u129B \u1295\u133D\u133D\u122D",
        "High Saturation": "\u12A8\u134D\u1270\u129B \u1265\u120D\u132D\u1273",
        "Low Saturation": "\u12DD\u1245\u1270\u129B \u1265\u120D\u132D\u1273",
        Monochrome: "\u1290\u1320\u120B \u1240\u1208\u121D",
        Tools: "\u1218\u1233\u122A\u12EB\u12CE\u127D",
        "Reading Guide": "\u12E8\u1295\u1263\u1265 \u1218\u1218\u122A\u12EB",
        "Stop Animations": "\u12A0\u1292\u121C\u123D\u1296\u127D\u1295 \u12A0\u1241\u121D",
        "Big Cursor": "\u1275\u120D\u120D\u1245 \u12A0\u121D\u1233\u12EB",
        "Increase Font Size": "\u12E8\u134A\u12F0\u120D \u1218\u1320\u1295 \u1328\u121D\u122D",
        "Decrease Font Size": "\u12E8\u134A\u12F0\u120D \u1218\u1320\u1295 \u12A0\u1233\u1295\u1235",
        "Letter Spacing": "\u12E8\u134A\u12F0\u120D \u12AD\u134D\u1270\u1275",
        "Line Height": "\u12E8\u1218\u1235\u1218\u122D \u1241\u1218\u1275",
        "Font Weight": "\u12E8\u134A\u12F0\u120D \u12CD\u134D\u1228\u1275",
        "Dyslexia Font": "\u12E8\u12F2\u1235\u120C\u12AD\u1232\u12EB \u134A\u12F0\u120D",
        Language: "\u124B\u1295\u124B",
        "Accessibility widget": "\u12E8\u1270\u12F0\u122B\u123D\u1290\u1275 \u121D\u1293\u120C\u1295 \u12AD\u1348\u1275",
        "Accessibility Profiles": "\u12E8\u1270\u12F0\u122B\u123D\u1290\u1275 \u1218\u1308\u1208\u132B\u12CE\u127D",
        "Cognitive Disability": "\u12E8\u12A0\u12A5\u121D\u122E \u12A0\u12AB\u120D \u1309\u12F5\u1208\u1275",
        "Seizure Safe": "\u12E8\u121D\u1273\u1295\u1235 \u12E8\u121B\u12ED\u1290\u12AB",
        "Accessibility statement": "\u12E8\u1270\u12F0\u122B\u123D\u1290\u1275 \u1218\u130D\u1208\u132B"
      };
    }
  });

  // src/locales/ar.json
  var require_ar = __commonJS({
    "src/locales/ar.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0642\u0627\u0626\u0645\u0629 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
        "Reset settings": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
        Close: "\u0625\u063A\u0644\u0627\u0642",
        "Content adjustments": "\u062A\u0639\u062F\u064A\u0644\u0627\u062A \u0627\u0644\u0645\u062D\u062A\u0648\u0649",
        "Navigation adjustments": "\u062A\u0639\u062F\u064A\u0644\u0627\u062A \u0627\u0644\u062A\u0646\u0642\u0644",
        "Align Left": "\u0645\u062D\u0627\u0630\u0627\u0629 \u0644\u0644\u064A\u0633\u0627\u0631",
        "Adjust Font Size": "\u0636\u0628\u0637 \u062D\u062C\u0645 \u0627\u0644\u062E\u0637",
        "Highlight Title": "\u062A\u0645\u064A\u064A\u0632 \u0627\u0644\u0639\u0646\u0648\u0627\u0646",
        "Highlight Links": "\u062A\u0645\u064A\u064A\u0632 \u0627\u0644\u0631\u0648\u0627\u0628\u0637",
        "Readable Font": "\u062E\u0637 \u0645\u0642\u0631\u0648\u0621",
        "Colour adjustments": "\u062A\u0639\u062F\u064A\u0644\u0627\u062A \u0627\u0644\u0623\u0644\u0648\u0627\u0646",
        "Dark Contrast": "\u062A\u0628\u0627\u064A\u0646 \u062F\u0627\u0643\u0646",
        "Light Contrast": "\u062A\u0628\u0627\u064A\u0646 \u0641\u0627\u062A\u062D",
        "High Contrast": "\u062A\u0628\u0627\u064A\u0646 \u0639\u0627\u0644\u064A",
        "High Saturation": "\u062A\u0634\u0628\u0639 \u0639\u0627\u0644\u064A",
        "Low Saturation": "\u062A\u0634\u0628\u0639 \u0645\u0646\u062E\u0641\u0636",
        Monochrome: "\u0623\u062D\u0627\u062F\u064A \u0627\u0644\u0644\u0648\u0646",
        Tools: "\u0627\u0644\u0623\u062F\u0648\u0627\u062A",
        "Reading Guide": "\u062F\u0644\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",
        "Stop Animations": "\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0645\u062A\u062D\u0631\u0643\u0629",
        "Big Cursor": "\u0645\u0624\u0634\u0631 \u0643\u0628\u064A\u0631",
        "Increase Font Size": "\u0632\u064A\u0627\u062F\u0629 \u062D\u062C\u0645 \u0627\u0644\u062E\u0637",
        "Decrease Font Size": "\u062A\u0642\u0644\u064A\u0644 \u062D\u062C\u0645 \u0627\u0644\u062E\u0637",
        "Letter Spacing": "\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0628\u064A\u0646 \u0627\u0644\u062D\u0631\u0648\u0641",
        "Line Height": "\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0633\u0637\u0631",
        "Font Weight": "\u0633\u0645\u0643 \u0627\u0644\u062E\u0637",
        "Dyslexia Font": "\u062E\u0637 \u0639\u0633\u0631 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",
        Language: "\u0627\u0644\u0644\u063A\u0629",
        "Accessibility widget": "\u0641\u062A\u062D \u0642\u0627\u0626\u0645\u0629 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
        "Accessibility Profiles": "\u0645\u0644\u0641\u0627\u062A \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",
        "Cognitive Disability": "\u0627\u0644\u0625\u0639\u0627\u0642\u0629 \u0627\u0644\u0645\u0639\u0631\u0641\u064A\u0629",
        "Seizure Safe": "\u0622\u0645\u0646 \u0645\u0646 \u0627\u0644\u0646\u0648\u0628\u0627\u062A",
        "Accessibility statement": "\u0628\u064A\u0627\u0646 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644"
      };
    }
  });

  // src/locales/bg.json
  var require_bg = __commonJS({
    "src/locales/bg.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u041C\u0435\u043D\u044E \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442",
        "Reset settings": "\u041D\u0443\u043B\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\u0442\u0435",
        Close: "\u0417\u0430\u0442\u0432\u043E\u0440\u0438",
        "Content adjustments": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E",
        "Navigation adjustments": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0430 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F\u0442\u0430",
        "Align Left": "\u041F\u043E\u0434\u0440\u0430\u0432\u043D\u0438 \u0432\u043B\u044F\u0432\u043E",
        "Adjust Font Size": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043D\u0430 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Highlight Title": "\u041E\u0442\u043A\u0440\u043E\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435\u0442\u043E",
        "Highlight Links": "\u041E\u0442\u043A\u0440\u043E\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0438\u0442\u0435",
        "Readable Font": "\u0427\u0435\u0442\u0438\u043C \u0448\u0440\u0438\u0444\u0442",
        "Colour adjustments": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0430 \u0446\u0432\u0435\u0442\u043E\u0432\u0435\u0442\u0435",
        "Dark Contrast": "\u0422\u044A\u043C\u0435\u043D \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "Light Contrast": "\u0421\u0432\u0435\u0442\u044A\u043B \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "High Contrast": "\u0412\u0438\u0441\u043E\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "High Saturation": "\u0412\u0438\u0441\u043E\u043A\u0430 \u043D\u0430\u0441\u0438\u0442\u0435\u043D\u043E\u0441\u0442",
        "Low Saturation": "\u041D\u0438\u0441\u043A\u0430 \u043D\u0430\u0441\u0438\u0442\u0435\u043D\u043E\u0441\u0442",
        Monochrome: "\u041C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u0435\u043D",
        Tools: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438",
        "Reading Guide": "\u0420\u044A\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0437\u0430 \u0447\u0435\u0442\u0435\u043D\u0435",
        "Stop Animations": "\u0421\u043F\u0440\u0438 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438\u0442\u0435",
        "Big Cursor": "\u0413\u043E\u043B\u044F\u043C \u043A\u0443\u0440\u0441\u043E\u0440",
        "Increase Font Size": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Decrease Font Size": "\u041D\u0430\u043C\u0430\u043B\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Letter Spacing": "\u0420\u0430\u0437\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0431\u0443\u043A\u0432\u0438\u0442\u0435",
        "Line Height": "\u0412\u0438\u0441\u043E\u0447\u0438\u043D\u0430 \u043D\u0430 \u0440\u0435\u0434\u0430",
        "Font Weight": "\u0414\u0435\u0431\u0435\u043B\u0438\u043D\u0430 \u043D\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Dyslexia Font": "\u0428\u0440\u0438\u0444\u0442 \u0437\u0430 \u0434\u0438\u0441\u043B\u0435\u043A\u0441\u0438\u044F",
        Language: "\u0415\u0437\u0438\u043A",
        "Accessibility widget": "\u041E\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442",
        "Accessibility Profiles": "\u041F\u0440\u043E\u0444\u0438\u043B\u0438 \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442",
        "Cognitive Disability": "\u041A\u043E\u0433\u043D\u0438\u0442\u0438\u0432\u043D\u0430 \u0443\u0432\u0440\u0435\u0434\u0435\u043D\u043E\u0441\u0442",
        "Seizure Safe": "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u0437\u0430 \u0435\u043F\u0438\u043B\u0435\u043F\u0441\u0438\u044F",
        "Accessibility statement": "\u0414\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u044F \u0437\u0430 \u0434\u043E\u0441\u0442\u044A\u043F\u043D\u043E\u0441\u0442"
      };
    }
  });

  // src/locales/bn.json
  var require_bn = __commonJS({
    "src/locales/bn.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0985\u09AD\u09BF\u0997\u09AE\u09CD\u09AF\u09A4\u09BE \u09AE\u09C7\u09A8\u09C1",
        "Reset settings": "\u09A8\u09BF\u09B0\u09CD\u09A7\u09BE\u09B0\u09A3 \u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u09B8\u09C7\u099F \u0995\u09B0\u09C1\u09A8",
        Close: "\u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
        "Content adjustments": "\u0995\u09A8\u09CD\u099F\u09C7\u09A8\u09CD\u099F \u09B8\u0982\u09B6\u09CB\u09A7\u09A8",
        "Navigation adjustments": "\u09A8\u09C7\u09AD\u09BF\u0997\u09C7\u09B6\u09A8 \u09B8\u0982\u09B6\u09CB\u09A7\u09A8",
        "Align Left": "\u09AC\u09BE\u09AE \u09A6\u09BF\u0995\u09C7 \u09B8\u09BE\u09B0\u09BF\u09AC\u09A6\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
        "Adjust Font Size": "\u09AB\u09A8\u09CD\u099F \u09B8\u09BE\u0987\u099C \u09B8\u0982\u09B6\u09CB\u09A7\u09A8",
        "Highlight Title": "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE \u0989\u099C\u09CD\u099C\u09CD\u09AC\u09B2 \u0995\u09B0\u09C1\u09A8",
        "Highlight Links": "\u09B2\u09BF\u0999\u09CD\u0995\u0997\u09C1\u09B2\u09BF \u0989\u099C\u09CD\u099C\u09CD\u09AC\u09B2 \u0995\u09B0\u09C1\u09A8",
        "Readable Font": "\u09AA\u09A0\u09A8\u09C0\u09AF\u09BC \u09AB\u09A8\u09CD\u099F",
        "Colour adjustments": "\u09B0\u0999 \u09B8\u0982\u09B6\u09CB\u09A7\u09A8",
        "Dark Contrast": "\u0985\u09A8\u09CD\u09A7\u0995\u09BE\u09B0\u09C0 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09BF\u09AE\u09CD\u09AC",
        "Light Contrast": "\u0986\u09B2\u09CB\u0995\u09BF\u09A4 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09BF\u09AE\u09CD\u09AC",
        "High Contrast": "\u0989\u099A\u09CD\u099A \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09BF\u09AE\u09CD\u09AC",
        "High Saturation": "\u0989\u099A\u09CD\u099A \u09B8\u09A4\u09CD\u09B0\u09BE\u099C\u09A8",
        "Low Saturation": "\u09A8\u09BF\u09AE\u09CD\u09A8 \u09B8\u09A4\u09CD\u09B0\u09BE\u099C\u09A8",
        Monochrome: "\u098F\u0995\u09B0\u0999",
        Tools: "\u09B8\u09B0\u099E\u09CD\u099C\u09BE\u09AE",
        "Reading Guide": "\u09AA\u09A1\u09BC\u09BE\u09B0 \u0997\u09BE\u0987\u09A1",
        "Stop Animations": "\u0985\u09CD\u09AF\u09BE\u09A8\u09BF\u09AE\u09C7\u09B6\u09A8 \u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
        "Big Cursor": "\u09AC\u09A1\u09BC \u0995\u09BE\u09B0\u09CD\u09B8\u09B0",
        "Increase Font Size": "\u09AB\u09A8\u09CD\u099F \u09B8\u09BE\u0987\u099C \u09AC\u09BE\u09A1\u09BC\u09BE\u09A8",
        "Decrease Font Size": "\u09AB\u09A8\u09CD\u099F \u09B8\u09BE\u0987\u099C \u0995\u09AE\u09BE\u09A8",
        "Letter Spacing": "\u0985\u0995\u09CD\u09B7\u09B0 \u09AC\u09BF\u09B0\u09BE\u099F\u09BF",
        "Line Height": "\u09B2\u09BE\u0987\u09A8 \u0989\u099A\u09CD\u099A\u09A4\u09BE",
        "Font Weight": "\u09AB\u09A8\u09CD\u099F \u0993\u099C\u09A8",
        "Dyslexia Font": "\u09A1\u09BE\u0987\u09B8\u09B2\u09C7\u0995\u09CD\u09B8\u09BF\u09AF\u09BC\u09BE \u09AB\u09A8\u09CD\u099F",
        Language: "\u09AD\u09BE\u09B7\u09BE",
        "Accessibility widget": "\u0985\u09AD\u09BF\u0997\u09AE\u09CD\u09AF\u09A4\u09BE \u09AE\u09C7\u09A8\u09C1 \u0996\u09CB\u09B2\u09C1\u09A8",
        "Accessibility Profiles": "\u0985\u09AD\u09BF\u0997\u09AE\u09CD\u09AF\u09A4\u09BE \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2",
        "Cognitive Disability": "\u099C\u09CD\u099E\u09BE\u09A8\u09C0\u09AF\u09BC \u0985\u0995\u09CD\u09B7\u09AE\u09A4\u09BE",
        "Seizure Safe": "\u09AE\u09C3\u0997\u09C0\u09B0\u09CB\u0997\u09C0\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6",
        "Accessibility statement": "\u0985\u09AD\u09BF\u0997\u09AE\u09CD\u09AF\u09A4\u09BE \u09AC\u09BF\u09AC\u09C3\u09A4\u09BF"
      };
    }
  });

  // src/locales/ca.json
  var require_ca = __commonJS({
    "src/locales/ca.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Men\xFA d'accessibilitat",
        "Reset settings": "Restablir configuraci\xF3",
        Close: "Tancar",
        "Content adjustments": "Ajustos de contingut",
        "Navigation adjustments": "Ajustos de navegaci\xF3",
        "Align Left": "Alinea a l'esquerra",
        "Adjust Font Size": "Ajustar la mida de la font",
        "Highlight Title": "Destacar t\xEDtol",
        "Highlight Links": "Destacar enlla\xE7os",
        "Readable Font": "Font llegible",
        "Colour adjustments": "Ajustos de color",
        "Dark Contrast": "Contrast fosc",
        "Light Contrast": "Contrast clar",
        "High Contrast": "Alt contrast",
        "High Saturation": "Alta saturaci\xF3",
        "Low Saturation": "Baixa saturaci\xF3",
        Monochrome: "Monocrom",
        Tools: "Eines",
        "Reading Guide": "Guia de lectura",
        "Stop Animations": "Aturar animacions",
        "Big Cursor": "Cursor gran",
        "Increase Font Size": "Augmentar mida de la font",
        "Decrease Font Size": "Reduir mida de la font",
        "Letter Spacing": "Espaiat entre lletres",
        "Line Height": "Al\xE7ada de l\xEDnia",
        "Font Weight": "Gruix de la font",
        "Dyslexia Font": "Font per a disl\xE8xia",
        Language: "Idioma",
        "Accessibility widget": "Obrir men\xFA d'accessibilitat",
        "Accessibility Profiles": "Perfils d'accessibilitat",
        "Cognitive Disability": "Discapacitat cognitiva",
        "Seizure Safe": "Segur per a epil\xE8psia",
        "Accessibility statement": "Declaraci\xF3 d'accessibilitat"
      };
    }
  });

  // src/locales/cs.json
  var require_cs = __commonJS({
    "src/locales/cs.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "P\u0159\xEDstupnostn\xED menu",
        "Reset settings": "Obnovit nastaven\xED",
        Close: "Zav\u0159\xEDt",
        "Content adjustments": "\xDApravy obsahu",
        "Navigation adjustments": "\xDApravy navigace",
        "Align Left": "Zarovnat vlevo",
        "Adjust Font Size": "Nastavit velikost p\xEDsma",
        "Highlight Title": "Zv\xFDraznit nadpis",
        "Highlight Links": "Zv\xFDraznit odkazy",
        "Readable Font": "\u010Citeln\xFD font",
        "Colour adjustments": "Nastaven\xED barev",
        "Dark Contrast": "Tmav\xFD kontrast",
        "Light Contrast": "Sv\u011Btl\xFD kontrast",
        "High Contrast": "Vysok\xFD kontrast",
        "High Saturation": "Vysok\xE1 saturace",
        "Low Saturation": "N\xEDzk\xE1 saturace",
        Monochrome: "Monochromatick\xFD",
        Tools: "N\xE1stroje",
        "Reading Guide": "Pr\u016Fvodce \u010Dten\xEDm",
        "Stop Animations": "Zastavit animace",
        "Big Cursor": "Velk\xFD kurzor",
        "Increase Font Size": "Zv\u011Bt\u0161it velikost p\xEDsma",
        "Decrease Font Size": "Zmen\u0161it velikost p\xEDsma",
        "Letter Spacing": "Mezery mezi p\xEDsmeny",
        "Line Height": "V\xFD\u0161ka \u0159\xE1dku",
        "Font Weight": "Tlou\u0161\u0165ka p\xEDsma",
        "Dyslexia Font": "Dyslexick\xFD font",
        Language: "Jazyk",
        "Accessibility widget": "Otev\u0159\xEDt p\u0159\xEDstupnostn\xED menu",
        "Accessibility Profiles": "P\u0159\xEDstupnostn\xED profily",
        "Cognitive Disability": "Kognitivn\xED posti\u017Een\xED",
        "Seizure Safe": "Bezpe\u010Dn\xE9 pro epilepsii",
        "Accessibility statement": "Prohl\xE1\u0161en\xED o p\u0159\xEDstupnosti"
      };
    }
  });

  // src/locales/da.json
  var require_da = __commonJS({
    "src/locales/da.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Tilg\xE6ngelighedsmenu",
        "Reset settings": "Nulstil indstillinger",
        Close: "Luk",
        "Content adjustments": "Indholdsjusteringer",
        "Navigation adjustments": "Navigationsjusteringer",
        "Align Left": "Venstrejuster",
        "Adjust Font Size": "Juster skriftst\xF8rrelse",
        "Highlight Title": "Fremh\xE6v titel",
        "Highlight Links": "Fremh\xE6v links",
        "Readable Font": "L\xE6sbar skrifttype",
        "Colour adjustments": "Farvejusteringer",
        "Dark Contrast": "M\xF8rk kontrast",
        "Light Contrast": "Lys kontrast",
        "High Contrast": "H\xF8j kontrast",
        "High Saturation": "H\xF8j m\xE6tning",
        "Low Saturation": "Lav m\xE6tning",
        Monochrome: "Monokrom",
        Tools: "V\xE6rkt\xF8jer",
        "Reading Guide": "L\xE6seguide",
        "Stop Animations": "Stop animationer",
        "Big Cursor": "Stor mark\xF8r",
        "Increase Font Size": "For\xF8g skriftst\xF8rrelse",
        "Decrease Font Size": "Formindsk skriftst\xF8rrelse",
        "Letter Spacing": "Bogstavafstand",
        "Line Height": "Linjeh\xF8jde",
        "Font Weight": "Skrifttykkelse",
        "Dyslexia Font": "Skrifttype til ordblindhed",
        Language: "Sprog",
        "Accessibility widget": "\xC5bn tilg\xE6ngelighedsmenu",
        "Accessibility Profiles": "Tilg\xE6ngelighedsprofiler",
        "Cognitive Disability": "Kognitiv handicap",
        "Seizure Safe": "Anfaldsikker",
        "Accessibility statement": "Tilg\xE6ngelighedserkl\xE6ring"
      };
    }
  });

  // src/locales/de.json
  var require_de = __commonJS({
    "src/locales/de.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "barrierefreiheits-men\xFC",
        "Reset settings": "Einstellungen Zur\xFCcksetzen",
        Close: "Schlie\xDFen",
        "Content adjustments": "Inhaltsanpassungen",
        "Navigation adjustments": "Navigationsanpassungen",
        "Align Left": "Links ausrichten",
        "Adjust Font Size": "Schriftgr\xF6\xDFe anpassen",
        "Highlight Title": "Titel hervorheben",
        "Highlight Links": "Links hervorheben",
        "Readable Font": "Lesbare Schriftart",
        "Colour adjustments": "Farbanpassungen",
        "Dark Contrast": "Dunkler Kontrast",
        "Light Contrast": "Heller Kontrast",
        "High Contrast": "Hoher Kontrast",
        "High Saturation": "Hohe S\xE4ttigung",
        "Low Saturation": "Niedrige S\xE4ttigung",
        Monochrome: "Monochrom",
        Tools: "Werkzeuge",
        "Reading Guide": "Lesef\xFChrung",
        "Stop Animations": "Animationen stoppen",
        "Big Cursor": "Gro\xDFer Cursor",
        "Increase Font Size": "Schriftgr\xF6\xDFe vergr\xF6\xDFern",
        "Decrease Font Size": "Schriftgr\xF6\xDFe verkleinern",
        "Letter Spacing": "Buchstabenabstand",
        "Line Height": "Zeilenh\xF6he",
        "Font Weight": "Schriftschnitt",
        "Dyslexia Font": "Legasthenie-Schriftart",
        Language: "Sprache",
        "Accessibility widget": "barrierefreiheits-men\xFC \xF6ffnen",
        "Accessibility Profiles": "Barrierefreiheits-Profile",
        "Cognitive Disability": "Kognitive Beeintr\xE4chtigung",
        "Seizure Safe": "Anfallssicher",
        "Accessibility statement": "Barrierefreiheits-Erkl\xE4rung"
      };
    }
  });

  // src/locales/el.json
  var require_el = __commonJS({
    "src/locales/el.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u039C\u03B5\u03BD\u03BF\u03CD \u03A0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2",
        "Reset settings": "\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03C9\u03BD",
        Close: "\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF",
        "Content adjustments": "\u03A0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03AD\u03C2 \u03A0\u03B5\u03C1\u03B9\u03B5\u03C7\u03BF\u03BC\u03AD\u03BD\u03BF\u03C5",
        "Navigation adjustments": "\u03A0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03AD\u03C2 \u03A0\u03BB\u03BF\u03AE\u03B3\u03B7\u03C3\u03B7\u03C2",
        "Align Left": "\u03A3\u03C4\u03BF\u03AF\u03C7\u03B9\u03C3\u03B7 \u0391\u03C1\u03B9\u03C3\u03C4\u03B5\u03C1\u03AC",
        "Adjust Font Size": "\u03A0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE \u039C\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2 \u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
        "Highlight Title": "\u0395\u03C0\u03B9\u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7 \u03A4\u03AF\u03C4\u03BB\u03BF\u03C5",
        "Highlight Links": "\u0395\u03C0\u03B9\u03C3\u03AE\u03BC\u03B1\u03BD\u03C3\u03B7 \u03A3\u03C5\u03BD\u03B4\u03AD\u03C3\u03BC\u03C9\u03BD",
        "Readable Font": "\u0391\u03BD\u03B1\u03B3\u03BD\u03CE\u03C3\u03B9\u03BC\u03B7 \u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC",
        "Colour adjustments": "\u03A0\u03C1\u03BF\u03C3\u03B1\u03C1\u03BC\u03BF\u03B3\u03AD\u03C2 \u03A7\u03C1\u03CE\u03BC\u03B1\u03C4\u03BF\u03C2",
        "Dark Contrast": "\u03A3\u03BA\u03BF\u03CD\u03C1\u03B7 \u0391\u03BD\u03C4\u03AF\u03B8\u03B5\u03C3\u03B7",
        "Light Contrast": "\u0391\u03BD\u03BF\u03B9\u03C7\u03C4\u03AE \u0391\u03BD\u03C4\u03AF\u03B8\u03B5\u03C3\u03B7",
        "High Contrast": "\u03A5\u03C8\u03B7\u03BB\u03AE \u0391\u03BD\u03C4\u03AF\u03B8\u03B5\u03C3\u03B7",
        "High Saturation": "\u03A5\u03C8\u03B7\u03BB\u03AE \u039A\u03BF\u03C1\u03B5\u03C3\u03BC\u03CC\u03C2",
        "Low Saturation": "\u03A7\u03B1\u03BC\u03B7\u03BB\u03CC\u03C2 \u039A\u03BF\u03C1\u03B5\u03C3\u03BC\u03CC\u03C2",
        Monochrome: "\u039C\u03BF\u03BD\u03CC\u03C7\u03C1\u03C9\u03BC\u03BF",
        Tools: "\u0395\u03C1\u03B3\u03B1\u03BB\u03B5\u03AF\u03B1",
        "Reading Guide": "\u039F\u03B4\u03B7\u03B3\u03CC\u03C2 \u0391\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7\u03C2",
        "Stop Animations": "\u0394\u03B9\u03B1\u03BA\u03BF\u03C0\u03AE \u039A\u03B9\u03BD\u03BF\u03CD\u03BC\u03B5\u03BD\u03C9\u03BD \u0395\u03B9\u03BA\u03CC\u03BD\u03C9\u03BD",
        "Big Cursor": "\u039C\u03B5\u03B3\u03AC\u03BB\u03BF\u03C2 \u0394\u03C1\u03BF\u03BC\u03AD\u03B1\u03C2",
        "Increase Font Size": "\u0391\u03CD\u03BE\u03B7\u03C3\u03B7 \u039C\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2 \u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
        "Decrease Font Size": "\u039C\u03B5\u03AF\u03C9\u03C3\u03B7 \u039C\u03B5\u03B3\u03AD\u03B8\u03BF\u03C5\u03C2 \u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
        "Letter Spacing": "\u0394\u03B9\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1 \u0393\u03C1\u03B1\u03BC\u03BC\u03AC\u03C4\u03C9\u03BD",
        "Line Height": "\u038E\u03C8\u03BF\u03C2 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE\u03C2",
        "Font Weight": "\u03A0\u03AC\u03C7\u03BF\u03C2 \u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC\u03C2",
        "Dyslexia Font": "\u0393\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03B3\u03B9\u03B1 \u0394\u03C5\u03C3\u03BB\u03B5\u03BE\u03AF\u03B1",
        Language: "\u0393\u03BB\u03CE\u03C3\u03C3\u03B1",
        "Accessibility widget": "\u0386\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1 \u039C\u03B5\u03BD\u03BF\u03CD \u03A0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2",
        "Accessibility Profiles": "\u03A0\u03C1\u03BF\u03C6\u03AF\u03BB \u03A0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2",
        "Cognitive Disability": "\u0393\u03BD\u03C9\u03C3\u03C4\u03B9\u03BA\u03AE \u0391\u03BD\u03B1\u03C0\u03B7\u03C1\u03AF\u03B1",
        "Seizure Safe": "\u0391\u03C3\u03C6\u03B1\u03BB\u03AD\u03C2 \u03B3\u03B9\u03B1 \u0395\u03C0\u03B9\u03BB\u03B7\u03C8\u03AF\u03B1",
        "Accessibility statement": "\u0394\u03AE\u03BB\u03C9\u03C3\u03B7 \u03A0\u03C1\u03BF\u03C3\u03B2\u03B1\u03C3\u03B9\u03BC\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2"
      };
    }
  });

  // src/locales/en.json
  var require_en = __commonJS({
    "src/locales/en.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Accessibility menu",
        "Reset settings": "Reset settings",
        Close: "Close",
        "Content adjustments": "Content adjustments",
        "Navigation adjustments": "Navigation adjustments",
        "Align Left": "Align Left",
        "Adjust Font Size": "Adjust Font Size",
        "Highlight Title": "Highlight Title",
        "Highlight Links": "Highlight Links",
        "Readable Font": "Readable Font",
        "Colour adjustments": "Colour adjustments",
        "Dark Contrast": "Dark Contrast",
        "Light Contrast": "Light Contrast",
        "High Contrast": "High Contrast",
        "High Saturation": "High Saturation",
        "Low Saturation": "Low Saturation",
        Monochrome: "Monochrome",
        Tools: "Tools",
        "Reading Guide": "Reading Guide",
        "Stop Animations": "Stop Animations",
        "Big Cursor": "Big Cursor",
        "Increase Font Size": "Increase Font Size",
        "Decrease Font Size": "Decrease Font Size",
        "Letter Spacing": "Letter Spacing",
        "Line Height": "Line Height",
        "Font Weight": "Font Weight",
        "Dyslexia Font": "Dyslexia Font",
        Language: "Language",
        "Accessibility widget": "Accessibility widget",
        "Accessibility Profiles": "Accessibility Profiles",
        "Cognitive Disability": "Cognitive Disability",
        "Seizure Safe": "Seizure Safe",
        "Accessibility statement": "Accessibility statement"
      };
    }
  });

  // src/locales/es.json
  var require_es = __commonJS({
    "src/locales/es.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "men\xFA de accesibilidad",
        "Reset settings": "Restablecer Configuraci\xF3n",
        Close: "Cerrar",
        "Content adjustments": "Ajustes de Contenido",
        "Navigation adjustments": "Ajustes de Navegaci\xF3n",
        "Align Left": "Alinear a la Izquierda",
        "Adjust Font Size": "Ajustar Tama\xF1o de Fuente",
        "Highlight Title": "Resaltar T\xEDtulo",
        "Highlight Links": "Resaltar Enlaces",
        "Readable Font": "Fuente Legible",
        "Colour adjustments": "Ajustes de Color",
        "Dark Contrast": "Contraste Oscuro",
        "Light Contrast": "Contraste Claro",
        "High Contrast": "Alto Contraste",
        "High Saturation": "Alta Saturaci\xF3n",
        "Low Saturation": "Baja Saturaci\xF3n",
        Monochrome: "Monocromo",
        Tools: "Herramientas",
        "Reading Guide": "Gu\xEDa de Lectura",
        "Stop Animations": "Detener Animaciones",
        "Big Cursor": "Cursor Grande",
        "Increase Font Size": "Aumentar Tama\xF1o de Fuente",
        "Decrease Font Size": "Disminuir Tama\xF1o de Fuente",
        "Letter Spacing": "Espaciado entre Letras",
        "Line Height": "Altura de L\xEDnea",
        "Font Weight": "Peso de Fuente",
        "Dyslexia Font": "Fuente para Dislexia",
        Language: "Idioma",
        "Accessibility widget": "Abrir men\xFA de accesibilidad",
        "Accessibility Profiles": "Perfiles de Accesibilidad",
        "Cognitive Disability": "Discapacidad Cognitiva",
        "Seizure Safe": "Seguro para Epilepsia",
        "Accessibility statement": "Declaraci\xF3n de Accesibilidad"
      };
    }
  });

  // src/locales/fa.json
  var require_fa = __commonJS({
    "src/locales/fa.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0645\u0646\u0648\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC",
        "Reset settings": "\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
        Close: "\u0628\u0633\u062A\u0646",
        "Content adjustments": "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u062D\u062A\u0648\u0627",
        "Navigation adjustments": "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0646\u0627\u0648\u0628\u0631\u06CC",
        "Align Left": "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0686\u067E",
        "Adjust Font Size": "\u062A\u0646\u0638\u06CC\u0645 \u0627\u0646\u062F\u0627\u0632\u0647 \u0641\u0648\u0646\u062A",
        "Highlight Title": "\u0628\u0631\u062C\u0633\u062A\u0647 \u06A9\u0631\u062F\u0646 \u0639\u0646\u0648\u0627\u0646",
        "Highlight Links": "\u0628\u0631\u062C\u0633\u062A\u0647 \u06A9\u0631\u062F\u0646 \u0644\u06CC\u0646\u06A9\u200C\u0647\u0627",
        "Readable Font": "\u0641\u0648\u0646\u062A \u062E\u0648\u0627\u0646\u0627",
        "Colour adjustments": "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0631\u0646\u06AF",
        "Dark Contrast": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u062A\u0627\u0631\u06CC\u06A9",
        "Light Contrast": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0631\u0648\u0634\u0646",
        "High Contrast": "\u06A9\u0646\u062A\u0631\u0627\u0633\u062A \u0628\u0627\u0644\u0627",
        "High Saturation": "\u0627\u0634\u0628\u0627\u0639 \u0628\u0627\u0644\u0627",
        "Low Saturation": "\u0627\u0634\u0628\u0627\u0639 \u067E\u0627\u06CC\u06CC\u0646",
        Monochrome: "\u062A\u06A9\u200C\u0631\u0646\u06AF",
        Tools: "\u0627\u0628\u0632\u0627\u0631\u0647\u0627",
        "Reading Guide": "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u062E\u0648\u0627\u0646\u062F\u0646",
        "Stop Animations": "\u062A\u0648\u0642\u0641 \u0627\u0646\u06CC\u0645\u06CC\u0634\u0646\u200C\u0647\u0627",
        "Big Cursor": "\u0645\u0624\u0634\u0631 \u0628\u0632\u0631\u06AF",
        "Increase Font Size": "\u0627\u0641\u0632\u0627\u06CC\u0634 \u0627\u0646\u062F\u0627\u0632\u0647 \u0641\u0648\u0646\u062A",
        "Decrease Font Size": "\u06A9\u0627\u0647\u0634 \u0627\u0646\u062F\u0627\u0632\u0647 \u0641\u0648\u0646\u062A",
        "Letter Spacing": "\u0641\u0627\u0635\u0644\u0647 \u0628\u06CC\u0646 \u062D\u0631\u0648\u0641",
        "Line Height": "\u0627\u0631\u062A\u0641\u0627\u0639 \u062E\u0637",
        "Font Weight": "\u0648\u0632\u0646 \u0641\u0648\u0646\u062A",
        "Dyslexia Font": "\u0641\u0648\u0646\u062A \u062F\u06CC\u0633\u0644\u06A9\u0633\u06CC\u0627",
        Language: "\u0632\u0628\u0627\u0646",
        "Accessibility widget": "\u0628\u0627\u0632\u06A9\u0631\u062F\u0646 \u0645\u0646\u0648\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC",
        "Accessibility Profiles": "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC",
        "Cognitive Disability": "\u0646\u0627\u062A\u0648\u0627\u0646\u06CC \u0634\u0646\u0627\u062E\u062A\u06CC",
        "Seizure Safe": "\u0627\u06CC\u0645\u0646 \u0628\u0631\u0627\u06CC \u0635\u0631\u0639",
        "Accessibility statement": "\u0628\u06CC\u0627\u0646\u06CC\u0647 \u062F\u0633\u062A\u0631\u0633\u06CC"
      };
    }
  });

  // src/locales/fi.json
  var require_fi = __commonJS({
    "src/locales/fi.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Saavutettavuusvalikko",
        "Reset settings": "Palauta asetukset",
        Close: "Sulje",
        "Content adjustments": "Sis\xE4ll\xF6n s\xE4\xE4d\xF6t",
        "Navigation adjustments": "Navigoinnin s\xE4\xE4d\xF6t",
        "Align Left": "Tasaa vasemmalle",
        "Adjust Font Size": "S\xE4\xE4d\xE4 fonttikokoa",
        "Highlight Title": "Korosta otsikko",
        "Highlight Links": "Korosta linkit",
        "Readable Font": "Helposti luettava fontti",
        "Colour adjustments": "V\xE4rien s\xE4\xE4d\xF6t",
        "Dark Contrast": "Tumma kontrasti",
        "Light Contrast": "Vaalea kontrasti",
        "High Contrast": "Korkea kontrasti",
        "High Saturation": "Korkea kyll\xE4isyys",
        "Low Saturation": "Matala kyll\xE4isyys",
        Monochrome: "Yksiv\xE4rinen",
        Tools: "Ty\xF6kalut",
        "Reading Guide": "Lukemisopas",
        "Stop Animations": "Pys\xE4yt\xE4 animaatiot",
        "Big Cursor": "Iso kohdistin",
        "Increase Font Size": "Suurenna fonttikokoa",
        "Decrease Font Size": "Pienenn\xE4 fonttikokoa",
        "Letter Spacing": "Kirjainten v\xE4listys",
        "Line Height": "Rivin korkeus",
        "Font Weight": "Fontin paksuus",
        "Dyslexia Font": "Dysleksiafontti",
        Language: "Kieli",
        "Accessibility widget": "Avaa saavutettavuusvalikko",
        "Accessibility Profiles": "Saavutettavuusprofiilit",
        "Cognitive Disability": "Kognitiivinen vamma",
        "Seizure Safe": "Turvallinen epilepsialle",
        "Accessibility statement": "Saavutettavuusseloste"
      };
    }
  });

  // src/locales/fil.json
  var require_fil = __commonJS({
    "src/locales/fil.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu ng Accessibility",
        "Reset settings": "I-reset ang mga setting",
        Close: "Isara",
        "Content adjustments": "Ayusin ang Nilalaman",
        "Navigation adjustments": "Ayusin ang Pag-navigate",
        "Align Left": "I-align sa Kaliwa",
        "Adjust Font Size": "I-adjust ang Laki ng Font",
        "Highlight Title": "I-highlight ang Pamagat",
        "Highlight Links": "I-highlight ang mga Link",
        "Readable Font": "Madaling Basahing Font",
        "Colour adjustments": "Ayusin ang Kulay",
        "Dark Contrast": "Madilim na Pagkakaiba",
        "Light Contrast": "Maliwanag na Pagkakaiba",
        "High Contrast": "Mataas na Pagkakaiba",
        "High Saturation": "Mataas na Saturation",
        "Low Saturation": "Mababang Saturation",
        Monochrome: "Monokrom",
        Tools: "Mga Kasangkapan",
        "Reading Guide": "Gabay sa Pagbabasa",
        "Stop Animations": "Itigil ang Mga Animasyon",
        "Big Cursor": "Malaking Cursor",
        "Increase Font Size": "Palakihin ang Laki ng Font",
        "Decrease Font Size": "Bawasan ang Laki ng Font",
        "Letter Spacing": "Espasyo ng mga Titik",
        "Line Height": "Taas ng Linya",
        "Font Weight": "Bigat ng Font",
        "Dyslexia Font": "Font para sa Dyslexia",
        Language: "Wika",
        "Accessibility widget": "Buksan ang Menu ng Accessibility",
        "Accessibility Profiles": "Mga Profile ng Accessibility",
        "Cognitive Disability": "Kapansanan sa Kognitibo",
        "Seizure Safe": "Ligtas sa Seizure",
        "Accessibility statement": "Pahayag ng Accessibility"
      };
    }
  });

  // src/locales/fr.json
  var require_fr = __commonJS({
    "src/locales/fr.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "menu d'accessibilit\xE9",
        "Reset settings": "R\xE9initialiser les Param\xE8tres",
        Close: "Fermer",
        "Content adjustments": "Ajustements du Contenu",
        "Navigation adjustments": "Ajustements de Navigation",
        "Align Left": "Aligner \xE0 Gauche",
        "Adjust Font Size": "Ajuster la Taille de Police",
        "Highlight Title": "Mettre en \xC9vidence le Titre",
        "Highlight Links": "Mettre en \xC9vidence les Liens",
        "Readable Font": "Police Lisible",
        "Colour adjustments": "Ajustements de Couleur",
        "Dark Contrast": "Contraste Sombre",
        "Light Contrast": "Contraste Clair",
        "High Contrast": "Contraste \xC9lev\xE9",
        "High Saturation": "Saturation \xC9lev\xE9e",
        "Low Saturation": "Saturation Faible",
        Monochrome: "Monochrome",
        Tools: "Outils",
        "Reading Guide": "Guide de Lecture",
        "Stop Animations": "Arr\xEAter les Animations",
        "Big Cursor": "Curseur Agrandi",
        "Increase Font Size": "Augmenter la Taille de Police",
        "Decrease Font Size": "Diminuer la Taille de Police",
        "Letter Spacing": "Espacement des Lettres",
        "Line Height": "Hauteur de Ligne",
        "Font Weight": "\xC9paisseur de Police",
        "Dyslexia Font": "Police pour Dyslexie",
        Language: "Langue",
        "Accessibility widget": "Ouvrir le menu d'accessibilit\xE9",
        "Accessibility Profiles": "Profils d'Accessibilit\xE9",
        "Cognitive Disability": "Handicap Cognitif",
        "Seizure Safe": "S\xFBr pour l'\xC9pilepsie",
        "Accessibility statement": "D\xE9claration d'Accessibilit\xE9"
      };
    }
  });

  // src/locales/he.json
  var require_he = __commonJS({
    "src/locales/he.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
        "Reset settings": "\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA",
        Close: "\u05E1\u05D2\u05D5\u05E8",
        "Content adjustments": "\u05D4\u05EA\u05D0\u05DE\u05D5\u05EA \u05EA\u05D5\u05DB\u05DF",
        "Navigation adjustments": "\u05D4\u05EA\u05D0\u05DE\u05D5\u05EA \u05E0\u05D9\u05D5\u05D5\u05D8",
        "Align Left": "\u05D9\u05D9\u05E9\u05D5\u05E8 \u05DC\u05E9\u05DE\u05D0\u05DC",
        "Adjust Font Size": "\u05D4\u05EA\u05D0\u05DD \u05D2\u05D5\u05D3\u05DC \u05E4\u05D5\u05E0\u05D8",
        "Highlight Title": "\u05D4\u05D3\u05D2\u05E9 \u05DB\u05D5\u05EA\u05E8\u05EA",
        "Highlight Links": "\u05D4\u05D3\u05D2\u05E9 \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",
        "Readable Font": "\u05E4\u05D5\u05E0\u05D8 \u05E7\u05E8\u05D9\u05D0",
        "Colour adjustments": "\u05D4\u05EA\u05D0\u05DE\u05D5\u05EA \u05E6\u05D1\u05E2",
        "Dark Contrast": "\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05DB\u05D4\u05D4",
        "Light Contrast": "\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D1\u05D4\u05D9\u05E8\u05D4",
        "High Contrast": "\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4",
        "High Saturation": "\u05E8\u05D5\u05D5\u05D9 \u05E6\u05D1\u05E2 \u05D2\u05D1\u05D5\u05D4",
        "Low Saturation": "\u05E8\u05D5\u05D5\u05D9 \u05E6\u05D1\u05E2 \u05E0\u05DE\u05D5\u05DA",
        Monochrome: "\u05DE\u05D5\u05E0\u05D5\u05DB\u05E8\u05D5\u05DD",
        Tools: "\u05DB\u05DC\u05D9\u05DD",
        "Reading Guide": "\u05DE\u05D3\u05E8\u05D9\u05DA \u05E7\u05E8\u05D9\u05D0\u05D4",
        "Stop Animations": "\u05E2\u05E6\u05D9\u05E8\u05EA \u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D5\u05EA",
        "Big Cursor": "\u05E1\u05DE\u05DF \u05D2\u05D3\u05D5\u05DC",
        "Increase Font Size": "\u05D4\u05D2\u05D3\u05DC \u05D2\u05D5\u05D3\u05DC \u05E4\u05D5\u05E0\u05D8",
        "Decrease Font Size": "\u05D4\u05E7\u05D8\u05DF \u05D2\u05D5\u05D3\u05DC \u05E4\u05D5\u05E0\u05D8",
        "Letter Spacing": "\u05DE\u05E8\u05D5\u05D5\u05D7 \u05D1\u05D9\u05DF \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA",
        "Line Height": "\u05D2\u05D5\u05D1\u05D4 \u05E9\u05D5\u05E8\u05D4",
        "Font Weight": "\u05DE\u05E9\u05E7\u05DC \u05D4\u05E4\u05D5\u05E0\u05D8",
        "Dyslexia Font": "\u05E4\u05D5\u05E0\u05D8 \u05DC\u05D3\u05D9\u05E1\u05DC\u05E7\u05D8\u05D9\u05DD",
        Language: "\u05E9\u05E4\u05D4",
        "Accessibility widget": "\u05E4\u05EA\u05D7 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
        "Accessibility Profiles": "\u05E4\u05E8\u05D5\u05E4\u05D9\u05DC\u05D9 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
        "Cognitive Disability": "\u05DE\u05D5\u05D2\u05D1\u05DC\u05D5\u05EA \u05E7\u05D5\u05D2\u05E0\u05D9\u05D8\u05D9\u05D1\u05D9\u05EA",
        "Seizure Safe": "\u05D1\u05D8\u05D5\u05D7 \u05DC\u05D0\u05E4\u05D9\u05DC\u05E4\u05E1\u05D9\u05D4",
        "Accessibility statement": "\u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA"
      };
    }
  });

  // src/locales/hi.json
  var require_hi = __commonJS({
    "src/locales/hi.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u092A\u0939\u0941\u0902\u091A \u092E\u0947\u0928\u0942",
        "Reset settings": "\u0938\u0947\u091F\u093F\u0902\u0917\u094D\u0938 \u0930\u0940\u0938\u0947\u091F \u0915\u0930\u0947\u0902",
        Close: "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
        "Content adjustments": "\u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u0938\u092E\u093E\u092F\u094B\u091C\u0928",
        "Navigation adjustments": "\u0928\u0947\u0935\u093F\u0917\u0947\u0936\u0928 \u0938\u092E\u093E\u092F\u094B\u091C\u0928",
        "Align Left": "\u092C\u093E\u0908\u0902 \u0913\u0930 \u0938\u0902\u0930\u0947\u0916\u093F\u0924 \u0915\u0930\u0947\u0902",
        "Adjust Font Size": "\u092B\u0949\u0928\u094D\u091F \u0906\u0915\u093E\u0930 \u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u0915\u0930\u0947\u0902",
        "Highlight Title": "\u0936\u0940\u0930\u094D\u0937\u0915 \u0939\u093E\u0907\u0932\u093E\u0907\u091F \u0915\u0930\u0947\u0902",
        "Highlight Links": "\u0932\u093F\u0902\u0915 \u0939\u093E\u0907\u0932\u093E\u0907\u091F \u0915\u0930\u0947\u0902",
        "Readable Font": "\u092A\u0920\u0928\u0940\u092F \u092B\u0949\u0928\u094D\u091F",
        "Colour adjustments": "\u0930\u0902\u0917 \u0938\u092E\u093E\u092F\u094B\u091C\u0928",
        "Dark Contrast": "\u0917\u0939\u0930\u093E \u0915\u0902\u091F\u094D\u0930\u093E\u0938\u094D\u091F",
        "Light Contrast": "\u0939\u0932\u094D\u0915\u093E \u0915\u0902\u091F\u094D\u0930\u093E\u0938\u094D\u091F",
        "High Contrast": "\u0909\u091A\u094D\u091A \u0915\u0902\u091F\u094D\u0930\u093E\u0938\u094D\u091F",
        "High Saturation": "\u0909\u091A\u094D\u091A \u0938\u0902\u0924\u0943\u092A\u094D\u0924\u093F",
        "Low Saturation": "\u0915\u092E \u0938\u0902\u0924\u0943\u092A\u094D\u0924\u093F",
        Monochrome: "\u092E\u094B\u0928\u094B\u0915\u094D\u0930\u094B\u092E",
        Tools: "\u0909\u092A\u0915\u0930\u0923",
        "Reading Guide": "\u092A\u0920\u0928 \u092E\u093E\u0930\u094D\u0917\u0926\u0930\u094D\u0936\u093F\u0915\u093E",
        "Stop Animations": "\u090F\u0928\u093F\u092E\u0947\u0936\u0928 \u0930\u094B\u0915\u0947\u0902",
        "Big Cursor": "\u092C\u0921\u093C\u093E \u0915\u0930\u094D\u0938\u0930",
        "Increase Font Size": "\u092B\u0949\u0928\u094D\u091F \u0906\u0915\u093E\u0930 \u092C\u0922\u093C\u093E\u090F\u0902",
        "Decrease Font Size": "\u092B\u0949\u0928\u094D\u091F \u0906\u0915\u093E\u0930 \u0918\u091F\u093E\u090F\u0902",
        "Letter Spacing": "\u0905\u0915\u094D\u0937\u0930 \u0930\u093F\u0915\u094D\u0924\u093F",
        "Line Height": "\u092A\u0902\u0915\u094D\u0924\u093F \u090A\u0902\u091A\u093E\u0908",
        "Font Weight": "\u092B\u0949\u0928\u094D\u091F \u0935\u091C\u0928",
        "Dyslexia Font": "\u0921\u093F\u0938\u094D\u0932\u0947\u0915\u094D\u0938\u093F\u092F\u093E \u092B\u0949\u0928\u094D\u091F",
        Language: "\u092D\u093E\u0937\u093E",
        "Accessibility widget": "\u092A\u0939\u0941\u0902\u091A \u092E\u0947\u0928\u0942 \u0916\u094B\u0932\u0947\u0902",
        "Accessibility Profiles": "\u092A\u0939\u0941\u0902\u091A \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932",
        "Cognitive Disability": "\u0938\u0902\u091C\u094D\u091E\u093E\u0928\u093E\u0924\u094D\u092E\u0915 \u0935\u093F\u0915\u0932\u093E\u0902\u0917\u0924\u093E",
        "Seizure Safe": "\u092E\u093F\u0930\u094D\u0917\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924",
        "Accessibility statement": "\u092A\u0939\u0941\u0902\u091A \u0935\u093F\u0935\u0930\u0923"
      };
    }
  });

  // src/locales/hr.json
  var require_hr = __commonJS({
    "src/locales/hr.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Izbornik Pristupa\u010Dnosti",
        "Reset settings": "Resetiraj postavke",
        Close: "Zatvori",
        "Content adjustments": "Prilagodbe Sadr\u017Eaja",
        "Navigation adjustments": "Prilagodbe Navigacije",
        "Align Left": "Poravnaj Lijevo",
        "Adjust Font Size": "Prilagodi Veli\u010Dinu Fonta",
        "Highlight Title": "Istakni Naslove",
        "Highlight Links": "Istakni Poveznice",
        "Readable Font": "\u010Citljiv Font",
        "Colour adjustments": "Prilagodbe Boja",
        "Dark Contrast": "Tamni Kontrast",
        "Light Contrast": "Svijetli Kontrast",
        "High Contrast": "Visoki Kontrast",
        "High Saturation": "Visoka Zasi\u0107enost",
        "Low Saturation": "Niska Zasi\u0107enost",
        Monochrome: "Jednobojno",
        Tools: "Alati",
        "Reading Guide": "Vodi\u010D Za \u010Citanje",
        "Stop Animations": "Zaustavi Animacije",
        "Big Cursor": "Veliki Kursor",
        "Increase Font Size": "Pove\u0107aj Veli\u010Dinu Fonta",
        "Decrease Font Size": "Smanji Veli\u010Dinu Fonta",
        "Letter Spacing": "Razmak Izme\u0111u Slova",
        "Line Height": "Visina Linije",
        "Font Weight": "Debljina Fonta",
        "Dyslexia Font": "Font Za Disleksiju",
        Language: "Jezik",
        "Accessibility widget": "Otvori Izbornik Pristupa\u010Dnosti",
        "Accessibility Profiles": "Profil Pristupa\u010Dnosti",
        "Cognitive Disability": "Kognitivni Invaliditet",
        "Seizure Safe": "Sigurno Za Epilepsiju",
        "Accessibility statement": "Izjava O Pristupa\u010Dnosti"
      };
    }
  });

  // src/locales/hu.json
  var require_hu = __commonJS({
    "src/locales/hu.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Hozz\xE1f\xE9rhet\u0151s\xE9gi men\xFC",
        "Reset settings": "Be\xE1ll\xEDt\xE1sok vissza\xE1ll\xEDt\xE1sa",
        Close: "Bez\xE1r\xE1s",
        "Content adjustments": "Tartalom be\xE1ll\xEDt\xE1sai",
        "Navigation adjustments": "Navig\xE1ci\xF3 be\xE1ll\xEDt\xE1sai",
        "Align Left": "Balra igaz\xEDt\xE1s",
        "Adjust Font Size": "Bet\u0171m\xE9ret be\xE1ll\xEDt\xE1sa",
        "Highlight Title": "C\xEDm kiemel\xE9se",
        "Highlight Links": "Linkek kiemel\xE9se",
        "Readable Font": "Olvashat\xF3 bet\u0171t\xEDpus",
        "Colour adjustments": "Sz\xEDnbe\xE1ll\xEDt\xE1sok",
        "Dark Contrast": "S\xF6t\xE9t kontraszt",
        "Light Contrast": "Vil\xE1gos kontraszt",
        "High Contrast": "Magas kontraszt",
        "High Saturation": "Magas tel\xEDtetts\xE9g",
        "Low Saturation": "Alacsony tel\xEDtetts\xE9g",
        Monochrome: "Monokr\xF3m",
        Tools: "Eszk\xF6z\xF6k",
        "Reading Guide": "Olvas\xE1si \xFAtmutat\xF3",
        "Stop Animations": "Anim\xE1ci\xF3k le\xE1ll\xEDt\xE1sa",
        "Big Cursor": "Nagy kurzor",
        "Increase Font Size": "Bet\u0171m\xE9ret n\xF6vel\xE9se",
        "Decrease Font Size": "Bet\u0171m\xE9ret cs\xF6kkent\xE9se",
        "Letter Spacing": "Bet\u0171t\xE1vols\xE1g",
        "Line Height": "Sor magass\xE1g",
        "Font Weight": "Bet\u0171t\xEDpus vastags\xE1ga",
        "Dyslexia Font": "Dyslexia bet\u0171t\xEDpus",
        Language: "Nyelv",
        "Accessibility widget": "Hozz\xE1f\xE9rhet\u0151s\xE9gi men\xFC megnyit\xE1sa",
        "Accessibility Profiles": "Hozz\xE1f\xE9rhet\u0151s\xE9gi profilok",
        "Cognitive Disability": "Kognit\xEDv fogyat\xE9koss\xE1g",
        "Seizure Safe": "Epilepszi\xE1s rohamokra biztons\xE1gos",
        "Accessibility statement": "Hozz\xE1f\xE9rhet\u0151s\xE9gi nyilatkozat"
      };
    }
  });

  // src/locales/id.json
  var require_id = __commonJS({
    "src/locales/id.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu Aksesibilitas",
        "Reset settings": "Atur Ulang Pengaturan",
        Close: "Tutup",
        "Content adjustments": "Penyesuaian Konten",
        "Navigation adjustments": "Penyesuaian Navigasi",
        "Align Left": "Rata Kiri",
        "Adjust Font Size": "Sesuaikan Ukuran Font",
        "Highlight Title": "Sorot Judul",
        "Highlight Links": "Sorot Tautan",
        "Readable Font": "Font Mudah Dibaca",
        "Colour adjustments": "Penyesuaian Warna",
        "Dark Contrast": "Kontras Gelap",
        "Light Contrast": "Kontras Terang",
        "High Contrast": "Kontras Tinggi",
        "High Saturation": "Saturasi Tinggi",
        "Low Saturation": "Saturasi Rendah",
        Monochrome: "Monokrom",
        Tools: "Alat",
        "Reading Guide": "Panduan Membaca",
        "Stop Animations": "Hentikan Animasi",
        "Big Cursor": "Kursor Besar",
        "Increase Font Size": "Perbesar Ukuran Font",
        "Decrease Font Size": "Perkecil Ukuran Font",
        "Letter Spacing": "Jarak Huruf",
        "Line Height": "Tinggi Baris",
        "Font Weight": "Ketebalan Font",
        "Dyslexia Font": "Font Disleksia",
        Language: "Bahasa",
        "Accessibility widget": "Buka menu aksesibilitas",
        "Accessibility Profiles": "Profil Aksesibilitas",
        "Cognitive Disability": "Disabilitas Kognitif",
        "Seizure Safe": "Aman untuk Epilepsi",
        "Accessibility statement": "Pernyataan Aksesibilitas"
      };
    }
  });

  // src/locales/it.json
  var require_it = __commonJS({
    "src/locales/it.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "menu accessibilit\xE0",
        "Reset settings": "Ripristina impostazioni",
        Close: "Chiudi",
        "Content adjustments": "Regolazioni Contenuto",
        "Navigation adjustments": "Regolazioni Navigazione",
        "Align Left": "Allinea a Sinistra",
        "Adjust Font Size": "Regola Dimensione Carattere",
        "Highlight Title": "Evidenzia Titolo",
        "Highlight Links": "Evidenzia Collegamenti",
        "Readable Font": "Carattere Leggibile",
        "Colour adjustments": "Regolazioni Colore",
        "Dark Contrast": "Contrasto Scuro",
        "Light Contrast": "Contrasto Chiaro",
        "High Contrast": "Alto Contrasto",
        "High Saturation": "Alta Saturazione",
        "Low Saturation": "Bassa Saturazione",
        Monochrome: "Monocromatico",
        Tools: "Strumenti",
        "Reading Guide": "Guida alla Lettura",
        "Stop Animations": "Ferma Animazioni",
        "Big Cursor": "Cursore Grande",
        "Increase Font Size": "Aumenta Dimensione Carattere",
        "Decrease Font Size": "Diminuisci Dimensione Carattere",
        "Letter Spacing": "Spaziatura Lettere",
        "Line Height": "Altezza Riga",
        "Font Weight": "Spessore Carattere",
        "Dyslexia Font": "Carattere per Dislessia",
        Language: "Lingua",
        "Accessibility widget": "Apri menu accessibilit\xE0",
        "Accessibility Profiles": "Profili di Accessibilit\xE0",
        "Cognitive Disability": "Disabilit\xE0 Cognitiva",
        "Seizure Safe": "Sicuro per Epilessia",
        "Accessibility statement": "Dichiarazione di Accessibilit\xE0"
      };
    }
  });

  // src/locales/ja.json
  var require_ja = __commonJS({
    "src/locales/ja.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u30E1\u30CB\u30E5\u30FC",
        "Reset settings": "\u8A2D\u5B9A\u3092\u30EA\u30BB\u30C3\u30C8",
        Close: "\u9589\u3058\u308B",
        "Content adjustments": "\u30B3\u30F3\u30C6\u30F3\u30C4\u8ABF\u6574",
        "Navigation adjustments": "\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u8ABF\u6574",
        "Align Left": "\u5DE6\u63C3\u3048",
        "Adjust Font Size": "\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u8ABF\u6574",
        "Highlight Title": "\u30BF\u30A4\u30C8\u30EB\u3092\u5F37\u8ABF",
        "Highlight Links": "\u30EA\u30F3\u30AF\u3092\u5F37\u8ABF",
        "Readable Font": "\u8AAD\u307F\u3084\u3059\u3044\u30D5\u30A9\u30F3\u30C8",
        "Colour adjustments": "\u8272\u8ABF\u6574",
        "Dark Contrast": "\u6697\u3044\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8",
        "Light Contrast": "\u660E\u308B\u3044\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8",
        "High Contrast": "\u9AD8\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8",
        "High Saturation": "\u9AD8\u5F69\u5EA6",
        "Low Saturation": "\u4F4E\u5F69\u5EA6",
        Monochrome: "\u30E2\u30CE\u30AF\u30ED",
        Tools: "\u30C4\u30FC\u30EB",
        "Reading Guide": "\u30EA\u30FC\u30C7\u30A3\u30F3\u30B0\u30AC\u30A4\u30C9",
        "Stop Animations": "\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u505C\u6B62",
        "Big Cursor": "\u5927\u304D\u306A\u30AB\u30FC\u30BD\u30EB",
        "Increase Font Size": "\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u62E1\u5927",
        "Decrease Font Size": "\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u7E2E\u5C0F",
        "Letter Spacing": "\u6587\u5B57\u9593\u9694",
        "Line Height": "\u884C\u306E\u9AD8\u3055",
        "Font Weight": "\u30D5\u30A9\u30F3\u30C8\u306E\u592A\u3055",
        "Dyslexia Font": "\u30C7\u30A3\u30B9\u30EC\u30AF\u30B7\u30A2\u7528\u30D5\u30A9\u30F3\u30C8",
        Language: "\u8A00\u8A9E",
        "Accessibility widget": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F",
        "Accessibility Profiles": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB",
        "Cognitive Disability": "\u8A8D\u77E5\u969C\u5BB3",
        "Seizure Safe": "\u767A\u4F5C\u5B89\u5168",
        "Accessibility statement": "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8"
      };
    }
  });

  // src/locales/ka.json
  var require_ka = __commonJS({
    "src/locales/ka.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u10D0\u10D3\u10D0\u10DE\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DB\u10D4\u10DC\u10D8\u10E3",
        "Reset settings": "\u10DE\u10D0\u10E0\u10D0\u10DB\u10D4\u10E2\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D3\u10D0\u10D1\u10E0\u10E3\u10DC\u10D4\u10D1\u10D0",
        Close: "\u10D3\u10D0\u10EE\u10E3\u10E0\u10D5\u10D0",
        "Content adjustments": "\u10E8\u10D8\u10D2\u10D7\u10D0\u10D5\u10E1\u10D8\u10E1 \u10DB\u10DD\u10E0\u10D2\u10D4\u10D1\u10D0",
        "Navigation adjustments": "\u10DC\u10D0\u10D5\u10D8\u10D2\u10D0\u10EA\u10D8\u10D8\u10E1 \u10DB\u10DD\u10E0\u10D2\u10D4\u10D1\u10D0",
        "Align Left": "\u10DB\u10D0\u10E0\u10EA\u10EE\u10DC\u10D8\u10D5 \u10D2\u10D0\u10E1\u10EC\u10DD\u10E0\u10D4\u10D1\u10D0",
        "Adjust Font Size": "\u10E4\u10DD\u10DC\u10E2\u10D8\u10E1 \u10D6\u10DD\u10DB\u10D8\u10E1 \u10DB\u10DD\u10E0\u10D2\u10D4\u10D1\u10D0",
        "Highlight Title": "\u10E1\u10D0\u10D7\u10D0\u10E3\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10DB\u10DD\u10E7\u10DD\u10E4\u10D0",
        "Highlight Links": "\u10D1\u10DB\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10DB\u10DD\u10E7\u10DD\u10E4\u10D0",
        "Readable Font": "\u10EC\u10D0\u10D9\u10D8\u10D7\u10EE\u10D5\u10D0\u10D3\u10D8 \u10E2\u10D4\u10E5\u10E1\u10E2\u10D4\u10D1\u10D8",
        "Colour adjustments": "\u10E4\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10DB\u10DD\u10E0\u10D2\u10D4\u10D1\u10D0",
        "Dark Contrast": "\u10D1\u10DC\u10D4\u10DA\u10D8 \u10D4\u10DA\u10E4\u10D4\u10E0\u10D8",
        "Light Contrast": "\u10DC\u10D0\u10D7\u10D4\u10DA\u10D8 \u10D4\u10DA\u10E4\u10D4\u10E0\u10D8",
        "High Contrast": "\u10DB\u10D0\u10E6\u10D0\u10DA\u10D8 \u10D4\u10DA\u10E4\u10D4\u10E0\u10D8",
        "High Saturation": "\u10DB\u10D0\u10E6\u10D0\u10DA\u10D8 \u10D2\u10D0\u10EF\u10D4\u10E0\u10D4\u10D1\u10D0",
        "Low Saturation": "\u10D3\u10D0\u10D1\u10D0\u10DA\u10D8 \u10D2\u10D0\u10EF\u10D4\u10E0\u10D4\u10D1\u10D0",
        Monochrome: "\u10D4\u10E0\u10D7\u10E4\u10D4\u10E0\u10DD\u10D5\u10D0\u10DC\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E1\u10D0\u10EE\u10E3\u10DA\u10D4\u10D1\u10D0",
        Tools: "\u10EE\u10D4\u10DA\u10E1\u10D0\u10EC\u10E7\u10DD\u10D4\u10D1\u10D8",
        "Reading Guide": "\u10D9\u10D8\u10D7\u10EE\u10D5\u10D8\u10E1 \u10D2\u10D0\u10DB\u10E7\u10DD\u10DA\u10D8 \u10D6\u10DD\u10DA\u10D8",
        "Stop Animations": "\u10D0\u10DC\u10D8\u10DB\u10D0\u10EA\u10D8\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E9\u10D4\u10E0\u10D4\u10D1\u10D0",
        "Big Cursor": "\u10D3\u10D8\u10D3\u10D8 \u10D9\u10E3\u10E0\u10E1\u10DD\u10E0\u10D8",
        "Increase Font Size": "\u10E4\u10DD\u10DC\u10E2\u10D8\u10E1 \u10D6\u10DD\u10DB\u10D8\u10E1 \u10D2\u10D0\u10D6\u10E0\u10D3\u10D0",
        "Decrease Font Size": "\u10E4\u10DD\u10DC\u10E2\u10D8\u10E1 \u10D6\u10DD\u10DB\u10D8\u10E1 \u10E8\u10D4\u10DB\u10EA\u10D8\u10E0\u10D4\u10D1\u10D0",
        "Letter Spacing": "\u10D0\u10E1\u10DD\u10D4\u10D1\u10E1 \u10E8\u10DD\u10E0\u10D8\u10E1 \u10D3\u10D0\u10E8\u10DD\u10E0\u10D4\u10D1\u10D0",
        "Line Height": "\u10EE\u10D0\u10D6\u10D8\u10E1 \u10E1\u10D8\u10DB\u10D0\u10E6\u10DA\u10D4",
        "Font Weight": "\u10E4\u10DD\u10DC\u10E2\u10D8\u10E1 \u10EC\u10DD\u10DC\u10D0",
        "Dyslexia Font": "\u10D3\u10D8\u10E1\u10DA\u10D4\u10E5\u10E1\u10D8\u10E3\u10E0\u10D8 \u10E4\u10DD\u10DC\u10E2\u10D8",
        Language: "\u10D4\u10DC\u10D0",
        "Accessibility widget": "\u10D2\u10D0\u10EE\u10E1\u10D4\u10DC\u10D8 \u10D0\u10D3\u10D0\u10DE\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DB\u10D4\u10DC\u10D8\u10E3",
        "Accessibility Profiles": "\u10D0\u10D3\u10D0\u10DE\u10E2\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DE\u10E0\u10DD\u10E4\u10D8\u10DA\u10D4\u10D1\u10D8",
        "Cognitive Disability": "\u10D9\u10DD\u10D2\u10DC\u10D8\u10E2\u10D8\u10E3\u10E0\u10D8 \u10E8\u10D4\u10D6\u10E6\u10E3\u10D3\u10D5\u10D0",
        "Seizure Safe": "\u10E3\u10E1\u10D0\u10E4\u10E0\u10D7\u10EE\u10DD \u10D4\u10DE\u10D8\u10DA\u10D4\u10E4\u10E1\u10D8\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1",
        "Accessibility statement": "\u10D0\u10D3\u10D0\u10DE\u10E2\u10D8\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D3\u10D4\u10D9\u10DA\u10D0\u10E0\u10D0\u10EA\u10D8\u10D0"
      };
    }
  });

  // src/locales/kn.json
  var require_kn = __commonJS({
    "src/locales/kn.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CAE\u0CBE\u0CA1\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CAE\u0CC6\u0CA8\u0CC1",
        "Reset settings": "\u0CB8\u0CC6\u0C9F\u0CCD\u0C9F\u0CBF\u0C82\u0C97\u0CCD\u200C\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CAE\u0CB0\u0CC1\u0CB9\u0CCA\u0C82\u0CA6\u0CBF\u0CB8\u0CBF",
        Close: "\u0CAE\u0CC1\u0C9A\u0CCD\u0C9A\u0CBF",
        "Content adjustments": "\u0CB5\u0CBF\u0CB7\u0CAF\u0CA6 \u0CB9\u0CCA\u0C82\u0CA6\u0CBE\u0CA3\u0CBF\u0C95\u0CC6\u0C97\u0CB3\u0CC1",
        "Navigation adjustments": "\u0CA8\u0CCD\u0CAF\u0CBE\u0CB5\u0CBF\u0C97\u0CC7\u0CB6\u0CA8\u0CCD \u0CB9\u0CCA\u0C82\u0CA6\u0CBE\u0CA3\u0CBF\u0C95\u0CC6\u0C97\u0CB3\u0CC1",
        "Align Left": "\u0C8E\u0CA1\u0C95\u0CCD\u0C95\u0CC6 \u0C9C\u0CCB\u0CA1\u0CBF\u0CB8\u0CBF",
        "Adjust Font Size": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CA6 \u0C97\u0CBE\u0CA4\u0CCD\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CCA\u0C82\u0CA6\u0CBF\u0CB8\u0CBF",
        "Highlight Title": "\u0CB6\u0CC0\u0CB0\u0CCD\u0CB7\u0CBF\u0C95\u0CC6\u0CAF\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CC8\u0CB2\u0CC8\u0C9F\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
        "Highlight Links": "\u0CB2\u0CBF\u0C82\u0C95\u0CCD\u200C\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CC8\u0CB2\u0CC8\u0C9F\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
        "Readable Font": "\u0C93\u0CA6\u0CB2\u0CC1 \u0CB8\u0CC1\u0CB2\u0CAD\u0CB5\u0CBE\u0CA6 \u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CB6\u0CC8\u0CB2\u0CBF",
        "Colour adjustments": "\u0CAC\u0CA3\u0CCD\u0CA3 \u0CB9\u0CCA\u0C82\u0CA6\u0CBE\u0CA3\u0CBF\u0C95\u0CC6\u0C97\u0CB3\u0CC1",
        "Dark Contrast": "\u0C95\u0CA4\u0CCD\u0CA4\u0CB2\u0CC6 \u0CB5\u0CCD\u0CAF\u0CA4\u0CCD\u0CAF\u0CBE\u0CB8",
        "Light Contrast": "\u0CB9\u0C97\u0CC1\u0CB0 \u0CB5\u0CCD\u0CAF\u0CA4\u0CCD\u0CAF\u0CBE\u0CB8",
        "High Contrast": "\u0CB9\u0CC6\u0C9A\u0CCD\u0C9A\u0CC1 \u0CB5\u0CCD\u0CAF\u0CA4\u0CCD\u0CAF\u0CBE\u0CB8",
        "High Saturation": "\u0CB9\u0CC6\u0C9A\u0CCD\u0C9A\u0CC1 \u0CB8\u0CBE\u0CA4\u0CC1\u0CB0\u0CCD\u0CA8\u0CA4\u0CC6",
        "Low Saturation": "\u0C95\u0CA1\u0CBF\u0CAE\u0CC6 \u0CB8\u0CBE\u0CA4\u0CC1\u0CB0\u0CCD\u0CA8\u0CA4\u0CC6",
        Monochrome: "\u0C8F\u0C95\u0CB5\u0CB0\u0CCD\u0CA3",
        Tools: "\u0C89\u0CAA\u0C95\u0CB0\u0CA3\u0C97\u0CB3\u0CC1",
        "Reading Guide": "\u0C93\u0CA6\u0CC1\u0CB5 \u0CAE\u0CBE\u0CB0\u0CCD\u0C97\u0CA6\u0CB0\u0CCD\u0CB6\u0CBF",
        "Stop Animations": "\u0C85\u0CA8\u0CBF\u0CAE\u0CC7\u0CB6\u0CA8\u0CCD\u200C\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CA8\u0CBF\u0CB2\u0CCD\u0CB2\u0CBF\u0CB8\u0CBF",
        "Big Cursor": "\u0CA6\u0CCA\u0CA1\u0CCD\u0CA1 \u0C95\u0CB0\u0CCD\u0CB8\u0CB0\u0CCD",
        "Increase Font Size": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CA6 \u0C97\u0CBE\u0CA4\u0CCD\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB9\u0CC6\u0C9A\u0CCD\u0C9A\u0CBF\u0CB8\u0CBF",
        "Decrease Font Size": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CA6 \u0C97\u0CBE\u0CA4\u0CCD\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6 \u0CAE\u0CBE\u0CA1\u0CBF",
        "Letter Spacing": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0C97\u0CB3 \u0CA8\u0CA1\u0CC1\u0CB5\u0CBF\u0CA8 \u0C85\u0C82\u0CA4\u0CB0",
        "Line Height": "\u0CB8\u0CBE\u0CB2\u0CBF\u0CA8 \u0C8E\u0CA4\u0CCD\u0CA4\u0CB0",
        "Font Weight": "\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CA6 \u0CA4\u0CC2\u0C95",
        "Dyslexia Font": "\u0CA1\u0CBF\u0CB8\u0CCD\u0CB2\u0CC6\u0C95\u0CCD\u0CB8\u0CBF\u0CAF\u0CBE \u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CB6\u0CC8\u0CB2\u0CBF",
        Language: "\u0CAD\u0CBE\u0CB7\u0CC6",
        "Accessibility widget": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CAE\u0CBE\u0CA1\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CAE\u0CC6\u0CA8\u0CC1 \u0C85\u0CA8\u0CCD\u0CA8\u0CC1 \u0CA4\u0CC6\u0CB0\u0CC6\u0CAF\u0CBF\u0CB0\u0CBF",
        "Accessibility Profiles": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CAE\u0CBE\u0CA1\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CAA\u0CCD\u0CB0\u0CCA\u0CAB\u0CC8\u0CB2\u0CCD\u200C\u0C97\u0CB3\u0CC1",
        "Cognitive Disability": "\u0C9C\u0CCD\u0C9E\u0CBE\u0CA8\u0CBE\u0CA4\u0CCD\u0CAE\u0C95 \u0C85\u0C82\u0C97\u0CB5\u0CC8\u0C95\u0CB2\u0CCD\u0CAF",
        "Seizure Safe": "\u0C85\u0CAA\u0CB8\u0CCD\u0CAE\u0CBE\u0CB0\u0C95\u0CCD\u0C95\u0CC6 \u0CB8\u0CC1\u0CB0\u0C95\u0CCD\u0CB7\u0CBF\u0CA4",
        "Accessibility statement": "\u0CAA\u0CCD\u0CB0\u0CB5\u0CC7\u0CB6\u0CAE\u0CBE\u0CA1\u0CC1\u0CB5\u0CBF\u0C95\u0CC6 \u0CB9\u0CC7\u0CB3\u0CBF\u0C95\u0CC6"
      };
    }
  });

  // src/locales/ko.json
  var require_ko = __commonJS({
    "src/locales/ko.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\uC811\uADFC\uC131 \uBA54\uB274",
        "Reset settings": "\uC124\uC815 \uCD08\uAE30\uD654",
        Close: "\uB2EB\uAE30",
        "Content adjustments": "\uCF58\uD150\uCE20 \uC870\uC815",
        "Navigation adjustments": "\uD0D0\uC0C9 \uC870\uC815",
        "Align Left": "\uC67C\uCABD \uC815\uB82C",
        "Adjust Font Size": "\uAE00\uAF34 \uD06C\uAE30 \uC870\uC815",
        "Highlight Title": "\uC81C\uBAA9 \uAC15\uC870",
        "Highlight Links": "\uB9C1\uD06C \uAC15\uC870",
        "Readable Font": "\uAC00\uB3C5\uC131 \uC88B\uC740 \uAE00\uAF34",
        "Colour adjustments": "\uC0C9\uC0C1 \uC870\uC815",
        "Dark Contrast": "\uC5B4\uB450\uC6B4 \uB300\uBE44",
        "Light Contrast": "\uBC1D\uC740 \uB300\uBE44",
        "High Contrast": "\uB192\uC740 \uB300\uBE44",
        "High Saturation": "\uB192\uC740 \uCC44\uB3C4",
        "Low Saturation": "\uB0AE\uC740 \uCC44\uB3C4",
        Monochrome: "\uB2E8\uC0C9",
        Tools: "\uB3C4\uAD6C",
        "Reading Guide": "\uC77D\uAE30 \uAC00\uC774\uB4DC",
        "Stop Animations": "\uC560\uB2C8\uBA54\uC774\uC158 \uC911\uC9C0",
        "Big Cursor": "\uD070 \uCEE4\uC11C",
        "Increase Font Size": "\uAE00\uAF34 \uD06C\uAE30 \uC99D\uAC00",
        "Decrease Font Size": "\uAE00\uAF34 \uD06C\uAE30 \uAC10\uC18C",
        "Letter Spacing": "\uC790\uAC04",
        "Line Height": "\uC904 \uAC04\uACA9",
        "Font Weight": "\uAE00\uAF34 \uB450\uAED8",
        "Dyslexia Font": "\uB09C\uB3C5\uC99D\uC6A9 \uAE00\uAF34",
        Language: "\uC5B8\uC5B4",
        "Accessibility widget": "\uC811\uADFC\uC131 \uBA54\uB274 \uC5F4\uAE30",
        "Accessibility Profiles": "\uC811\uADFC\uC131 \uD504\uB85C\uD544",
        "Cognitive Disability": "\uC778\uC9C0 \uC7A5\uC560",
        "Seizure Safe": "\uBC1C\uC791 \uC548\uC804",
        "Accessibility statement": "\uC811\uADFC\uC131 \uC131\uBA85"
      };
    }
  });

  // src/locales/ku.json
  var require_ku = __commonJS({
    "src/locales/ku.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menuya Gih\xEE\u015Ftin\xEA",
        "Reset settings": "M\xEEheng\xEAn vegerandin\xEA",
        Close: "Bigire",
        "Content adjustments": "Guhertin\xEAn Naverok\xEA",
        "Navigation adjustments": "Guhertin\xEAn Nav\xEEgasyon\xEA",
        "Align Left": "\xC7ep\xEA Rast Bike",
        "Adjust Font Size": "Mezinahiya Font\xEA biguher\xEEne",
        "Highlight Title": "Sernav\xEA n\xEE\u015Fan bide",
        "Highlight Links": "Gir\xEAdan\xEAn n\xEE\u015Fan bide",
        "Readable Font": "Fonta Xwendin\xEA",
        "Colour adjustments": "Guhertin\xEAn Reng\xEA",
        "Dark Contrast": "P\xEAvajoya Tar\xEE",
        "Light Contrast": "P\xEAvajoya Ronah\xEE",
        "High Contrast": "P\xEAvajoya Bilind",
        "High Saturation": "Tevgeriya Bilind",
        "Low Saturation": "Tevgeriya Nizm",
        Monochrome: "Reng\xEA Yekane",
        Tools: "Am\xFBr",
        "Reading Guide": "Rehbera Xwendin\xEA",
        "Stop Animations": "An\xEEmasyonan Rawest\xEEne",
        "Big Cursor": "Kursor\xEA Mezin",
        "Increase Font Size": "Mezinahiya Font\xEA Mezinkirin",
        "Decrease Font Size": "Mezinahiya Font\xEA K\xEAmkirin",
        "Letter Spacing": "D\xFBrahiya T\xEEpan",
        "Line Height": "Bilindahiya R\xEAz\xEA",
        "Font Weight": "Giraniya Font\xEA",
        "Dyslexia Font": "Fonta Disleksiya",
        Language: "Ziman",
        "Accessibility widget": "Menuya Gih\xEE\u015Ftin\xEA Vekir\xEE",
        "Accessibility Profiles": "Prof\xEEl\xEAn Gih\xEE\u015Ftin\xEA",
        "Cognitive Disability": "Seqetiya Zan\xEEn\xEE",
        "Seizure Safe": "Ji bo Epileps\xEE Ewle",
        "Accessibility statement": "Daxuyaniya Gih\xEE\u015Ftin\xEA"
      };
    }
  });

  // src/locales/lb.json
  var require_lb = __commonJS({
    "src/locales/lb.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Accessibility menu",
        "Reset settings": "Astellungen zr\xE9cksetzen",
        Close: "Zoumaachen",
        "Content adjustments": "Inhalt Unpassungen",
        "Navigation adjustments": "Navigatioun Unpassungen",
        "Align Left": "L\xE9nks ausriichten",
        "Adjust Font Size": "Schr\xEBftgr\xE9isst unpassen",
        "Highlight Title": "Titel mark\xE9ieren",
        "Highlight Links": "Links mark\xE9ieren",
        "Readable Font": "Liesbar Schr\xEBft",
        "Colour adjustments": "Faarfleg Unpassungen",
        "Dark Contrast": "D\xE4ischteren Kontrast",
        "Light Contrast": "Hellen Kontrast",
        "High Contrast": "H\xE9ijen Kontrast",
        "High Saturation": "H\xE9ij S\xE4ttigung",
        "Low Saturation": "Niddr\xE9g S\xE4ttigung",
        Monochrome: "Monochrom",
        Tools: "Tools",
        "Reading Guide": "Guide fir ze liesen",
        "Stop Animations": "Animatiounen stoppen",
        "Big Cursor": "Groussen Cursor",
        "Increase Font Size": "Schr\xEBftgr\xE9isst erh\xE9ijen",
        "Decrease Font Size": "Schr\xEBftgr\xE9isst ernidderegen",
        "Letter Spacing": "Zeechenofstand",
        "Line Height": "Linn H\xE9icht",
        "Font Weight": "Schr\xEBftgewiicht",
        "Dyslexia Font": "Schr\xEBft fir Dyslexie",
        Language: "Sprooch",
        "Accessibility widget": "Accessibility menu opmaachen",
        "Accessibility Profiles": "Accessibility Profiler",
        "Cognitive Disability": "Kognitiv Beh\xEBnnerung",
        "Seizure Safe": "S\xE9cher fir Epilepsie",
        "Accessibility statement": "Accessibility Erkl\xE4rung"
      };
    }
  });

  // src/locales/ml.json
  var require_ml = __commonJS({
    "src/locales/ml.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D2F\u0D4B\u0D17\u0D4D\u0D2F\u0D24 \u0D2E\u0D46\u0D28\u0D41",
        "Reset settings": "\u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E \u0D2A\u0D41\u0D28\u0D03\u0D38\u0D1C\u0D4D\u0D1C\u0D2E\u0D3E\u0D15\u0D4D\u0D15\u0D41\u0D15",
        Close: "\u0D05\u0D1F\u0D2F\u0D4D\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Content adjustments": "\u0D09\u0D33\u0D4D\u0D33\u0D1F\u0D15\u0D4D\u0D15 \u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E",
        "Navigation adjustments": "\u0D28\u0D3E\u0D35\u0D3F\u0D17\u0D47\u0D37\u0D7B \u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E",
        "Align Left": "\u0D07\u0D1F\u0D24\u0D4D \u0D35\u0D3F\u0D28\u0D4D\u0D2F\u0D38\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Adjust Font Size": "\u0D05\u0D15\u0D4D\u0D37\u0D30\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D4D\u0D31\u0D46 \u0D35\u0D32\u0D41\u0D2A\u0D4D\u0D2A\u0D02 \u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Highlight Title": "\u0D36\u0D40\u0D7C\u0D37\u0D15\u0D02 \u0D39\u0D48\u0D32\u0D48\u0D31\u0D4D\u0D31\u0D4D \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15",
        "Highlight Links": "\u0D32\u0D3F\u0D19\u0D4D\u0D15\u0D41\u0D15\u0D7E \u0D39\u0D48\u0D32\u0D48\u0D31\u0D4D\u0D31\u0D4D \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15",
        "Readable Font": "\u0D35\u0D3E\u0D2F\u0D3F\u0D15\u0D4D\u0D15\u0D3E\u0D7B \u0D0E\u0D33\u0D41\u0D2A\u0D4D\u0D2A\u0D2E\u0D41\u0D33\u0D4D\u0D33 \u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D",
        "Colour adjustments": "\u0D28\u0D3F\u0D31 \u0D15\u0D4D\u0D30\u0D2E\u0D40\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E",
        "Dark Contrast": "\u0D07\u0D30\u0D41\u0D23\u0D4D\u0D1F \u0D15\u0D4B\u0D7A\u0D1F\u0D4D\u0D30\u0D3E\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D",
        "Light Contrast": "\u0D07\u0D33\u0D02 \u0D15\u0D4B\u0D7A\u0D1F\u0D4D\u0D30\u0D3E\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D",
        "High Contrast": "\u0D09\u0D2F\u0D7C\u0D28\u0D4D\u0D28 \u0D15\u0D4B\u0D7A\u0D1F\u0D4D\u0D30\u0D3E\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D",
        "High Saturation": "\u0D09\u0D2F\u0D7C\u0D28\u0D4D\u0D28 \u0D38\u0D3E\u0D1A\u0D41\u0D30\u0D47\u0D37\u0D7B",
        "Low Saturation": "\u0D15\u0D41\u0D31\u0D1E\u0D4D\u0D1E \u0D38\u0D3E\u0D1A\u0D41\u0D30\u0D47\u0D37\u0D7B",
        Monochrome: "\u0D2E\u0D4B\u0D28\u0D4B\u0D15\u0D4D\u0D30\u0D4B\u0D02",
        Tools: "\u0D09\u0D2A\u0D15\u0D30\u0D23\u0D19\u0D4D\u0D19\u0D7E",
        "Reading Guide": "\u0D35\u0D3E\u0D2F\u0D28\u0D3E \u0D17\u0D48\u0D21\u0D4D",
        "Stop Animations": "\u0D06\u0D28\u0D3F\u0D2E\u0D47\u0D37\u0D28\u0D41\u0D15\u0D7E \u0D28\u0D3F\u0D7C\u0D24\u0D4D\u0D24\u0D41\u0D15",
        "Big Cursor": "\u0D35\u0D32\u0D3F\u0D2F \u0D15\u0D7C\u0D38\u0D7C",
        "Increase Font Size": "\u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D \u0D35\u0D32\u0D41\u0D2A\u0D4D\u0D2A\u0D02 \u0D35\u0D7C\u0D26\u0D4D\u0D27\u0D3F\u0D2A\u0D4D\u0D2A\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Decrease Font Size": "\u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D \u0D35\u0D32\u0D41\u0D2A\u0D4D\u0D2A\u0D02 \u0D15\u0D41\u0D31\u0D2F\u0D4D\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Letter Spacing": "\u0D05\u0D15\u0D4D\u0D37\u0D30\u0D19\u0D4D\u0D19\u0D7E\u0D15\u0D4D\u0D15\u0D3F\u0D1F\u0D2F\u0D3F\u0D32\u0D46 \u0D07\u0D1F\u0D35\u0D4D",
        "Line Height": "\u0D32\u0D48\u0D7B \u0D09\u0D2F\u0D30\u0D02",
        "Font Weight": "\u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D \u0D2D\u0D3E\u0D30\u0D02",
        "Dyslexia Font": "\u0D21\u0D3F\u0D38\u0D4D\u0D32\u0D46\u0D15\u0D4D\u0D38\u0D3F\u0D2F \u0D2B\u0D4B\u0D23\u0D4D\u0D1F\u0D4D",
        Language: "\u0D2D\u0D3E\u0D37",
        "Accessibility widget": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D2F\u0D4B\u0D17\u0D4D\u0D2F\u0D24 \u0D2E\u0D46\u0D28\u0D41 \u0D24\u0D41\u0D31\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "Accessibility Profiles": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D2F\u0D4B\u0D17\u0D4D\u0D2F\u0D24 \u0D2A\u0D4D\u0D30\u0D4A\u0D2B\u0D48\u0D32\u0D41\u0D15\u0D7E",
        "Cognitive Disability": "\u0D1C\u0D4D\u0D1E\u0D3E\u0D28\u0D2A\u0D30\u0D2E\u0D3E\u0D2F \u0D35\u0D48\u0D15\u0D32\u0D4D\u0D2F\u0D02",
        "Seizure Safe": "\u0D05\u0D2A\u0D38\u0D4D\u0D2E\u0D3E\u0D30\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D4D \u0D38\u0D41\u0D30\u0D15\u0D4D\u0D37\u0D3F\u0D24\u0D02",
        "Accessibility statement": "\u0D2A\u0D4D\u0D30\u0D35\u0D47\u0D36\u0D2F\u0D4B\u0D17\u0D4D\u0D2F\u0D24 \u0D2A\u0D4D\u0D30\u0D38\u0D4D\u0D24\u0D3E\u0D35\u0D28"
      };
    }
  });

  // src/locales/mn.json
  var require_mn = __commonJS({
    "src/locales/mn.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0425\u0430\u043D\u0434\u0430\u043B\u0442\u044B\u043D \u0446\u044D\u0441",
        "Reset settings": "\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E\u0433 \u0434\u0430\u0445\u0438\u043D \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445",
        Close: "\u0425\u0430\u0430\u0445",
        "Content adjustments": "\u0410\u0433\u0443\u0443\u043B\u0433\u044B\u043D \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0433\u0430",
        "Navigation adjustments": "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0439\u043D \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0433\u0430",
        "Align Left": "\u0417\u04AF\u04AF\u043D \u0442\u0430\u043B\u0434 \u0437\u044D\u0440\u044D\u0433\u0446\u04AF\u04AF\u043B\u044D\u0445",
        "Adjust Font Size": "\u0424\u043E\u043D\u0442\u044B\u043D \u0445\u044D\u043C\u0436\u044D\u044D\u0433 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445",
        "Highlight Title": "\u0413\u0430\u0440\u0447\u0433\u0438\u0439\u0433 \u043E\u043D\u0446\u043B\u043E\u0445",
        "Highlight Links": "\u0425\u043E\u043B\u0431\u043E\u043E\u0441\u0443\u0443\u0434\u044B\u0433 \u043E\u043D\u0446\u043B\u043E\u0445",
        "Readable Font": "\u0423\u043D\u0448\u0438\u0445\u0430\u0434 \u0445\u044F\u043B\u0431\u0430\u0440 \u0444\u043E\u043D\u0442",
        "Colour adjustments": "\u04E8\u043D\u0433\u04E9\u043D\u0438\u0439 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0433\u0430",
        "Dark Contrast": "\u0425\u0430\u0440\u0430\u043D\u0445\u0443\u0439 \u044F\u043B\u0433\u0430\u0440\u0430\u043B",
        "Light Contrast": "\u0413\u044D\u0440\u044D\u043B\u0442\u044D\u0439 \u044F\u043B\u0433\u0430\u0440\u0430\u043B",
        "High Contrast": "\u04E8\u043D\u0434\u04E9\u0440 \u044F\u043B\u0433\u0430\u0440\u0430\u043B",
        "High Saturation": "\u04E8\u043D\u0434\u04E9\u0440 \u0445\u0430\u043D\u0430\u043B\u0442",
        "Low Saturation": "\u0411\u0430\u0433\u0430 \u0445\u0430\u043D\u0430\u043B\u0442",
        Monochrome: "\u041D\u044D\u0433 \u04E9\u043D\u0433\u04E9",
        Tools: "\u0425\u044D\u0440\u044D\u0433\u0441\u043B\u04AF\u04AF\u0434",
        "Reading Guide": "\u0423\u043D\u0448\u0438\u0445 \u0433\u0430\u0440\u044B\u043D \u0430\u0432\u043B\u0430\u0433\u0430",
        "Stop Animations": "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u0439\u0433 \u0437\u043E\u0433\u0441\u043E\u043E\u0445",
        "Big Cursor": "\u0422\u043E\u043C \u043A\u0443\u0440\u0441\u043E\u0440",
        "Increase Font Size": "\u0424\u043E\u043D\u0442\u044B\u043D \u0445\u044D\u043C\u0436\u044D\u044D\u0433 \u043D\u044D\u043C\u044D\u0433\u0434\u04AF\u04AF\u043B\u044D\u0445",
        "Decrease Font Size": "\u0424\u043E\u043D\u0442\u044B\u043D \u0445\u044D\u043C\u0436\u044D\u044D\u0433 \u0431\u0430\u0433\u0430\u0441\u0433\u0430\u0445",
        "Letter Spacing": "\u04AE\u0441\u0433\u0438\u0439\u043D \u0445\u043E\u043E\u0440\u043E\u043D\u0434\u044B\u043D \u0437\u0430\u0439",
        "Line Height": "\u041C\u04E9\u0440\u0438\u0439\u043D \u04E9\u043D\u0434\u04E9\u0440",
        "Font Weight": "\u0424\u043E\u043D\u0442\u044B\u043D \u0436\u0438\u043D",
        "Dyslexia Font": "\u0414\u0438\u0441\u043B\u0435\u043A\u0441\u0438 \u0444\u043E\u043D\u0442",
        Language: "\u0425\u044D\u043B",
        "Accessibility widget": "\u0425\u0430\u043D\u0434\u0430\u043B\u0442\u044B\u043D \u0446\u044D\u0441\u0438\u0439\u0433 \u043D\u044D\u044D\u0445",
        "Accessibility Profiles": "\u0425\u0430\u043D\u0434\u0430\u043B\u0442\u044B\u043D \u043F\u0440\u043E\u0444\u0430\u0439\u043B\u0443\u0443\u0434",
        "Cognitive Disability": "\u0422\u0430\u043D\u0438\u043D \u043C\u044D\u0434\u044D\u0445\u04AF\u0439\u043D \u0445\u04E9\u0433\u0436\u043B\u0438\u0439\u043D \u0431\u044D\u0440\u0445\u0448\u044D\u044D\u043B",
        "Seizure Safe": "\u0422\u0430\u0440\u0445\u0438\u043D\u044B \u0446\u043E\u0447\u0440\u043E\u043B\u0434 \u0430\u044E\u0443\u043B\u0433\u04AF\u0439",
        "Accessibility statement": "\u0425\u0430\u043D\u0434\u0430\u043B\u0442\u044B\u043D \u043C\u044D\u0434\u044D\u0433\u0434\u044D\u043B"
      };
    }
  });

  // src/locales/ms.json
  var require_ms = __commonJS({
    "src/locales/ms.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu Aksesibiliti",
        "Reset settings": "Tetapkan semula tetapan",
        Close: "Tutup",
        "Content adjustments": "Penyesuaian Kandungan",
        "Navigation adjustments": "Penyesuaian Navigasi",
        "Align Left": "Jajar ke Kiri",
        "Adjust Font Size": "Laraskan Saiz Fon",
        "Highlight Title": "Serlahkan Tajuk",
        "Highlight Links": "Serlahkan Pautan",
        "Readable Font": "Fon Mudah Baca",
        "Colour adjustments": "Penyesuaian Warna",
        "Dark Contrast": "Kontras Gelap",
        "Light Contrast": "Kontras Terang",
        "High Contrast": "Kontras Tinggi",
        "High Saturation": "Saturasi Tinggi",
        "Low Saturation": "Saturasi Rendah",
        Monochrome: "Monokrom",
        Tools: "Peralatan",
        "Reading Guide": "Panduan Membaca",
        "Stop Animations": "Hentikan Animasi",
        "Big Cursor": "Kursor Besar",
        "Increase Font Size": "Besarkan Saiz Fon",
        "Decrease Font Size": "Kecilkan Saiz Fon",
        "Letter Spacing": "Ruangan Huruf",
        "Line Height": "Ketinggian Garis",
        "Font Weight": "Ketebalan Fon",
        "Dyslexia Font": "Fon Dyslexia",
        Language: "Bahasa",
        "Accessibility widget": "Buka menu kebolehcapaian",
        "Accessibility Profiles": "Profil Kebolehcapaian",
        "Cognitive Disability": "Kecacatan Kognitif",
        "Seizure Safe": "Selamat untuk Epilepsi",
        "Accessibility statement": "Pernyataan Kebolehcapaian"
      };
    }
  });

  // src/locales/my.json
  var require_my = __commonJS({
    "src/locales/my.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u1019\u100A\u103A\u101E\u1030\u1019\u1006\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C \u1019\u102E\u1014\u1030\u1038",
        "Reset settings": "\u1006\u1000\u103A\u1010\u1004\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1015\u103C\u1014\u103A\u101C\u100A\u103A\u101E\u1010\u103A\u1019\u103E\u1010\u103A\u1015\u102B",
        Close: "\u1015\u102D\u1010\u103A\u1015\u102B",
        "Content adjustments": "\u1021\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u1021\u101B\u102C \u1001\u103B\u102D\u1014\u103A\u100A\u103E\u102D\u1019\u103E\u102F\u1019\u103B\u102C\u1038",
        "Navigation adjustments": "\u101C\u1019\u103A\u1038\u100A\u103D\u103E\u1014\u103A\u1001\u103B\u102D\u1014\u103A\u100A\u103E\u102D\u1019\u103E\u102F\u1019\u103B\u102C\u1038",
        "Align Left": "\u1018\u101A\u103A\u1018\u1000\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u1015\u102B",
        "Adjust Font Size": "\u1016\u1031\u102C\u1004\u1037\u103A\u1021\u101B\u103D\u101A\u103A\u1021\u1005\u102C\u1038\u1000\u102D\u102F \u1001\u103B\u102D\u1014\u103A\u100A\u103E\u102D\u1015\u102B",
        "Highlight Title": "\u1001\u1031\u102B\u1004\u103A\u1038\u1005\u1009\u103A\u1000\u102D\u102F \u1021\u1011\u1030\u1038\u1015\u103C\u102F\u1015\u102B",
        "Highlight Links": "\u101C\u1004\u1037\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1021\u1011\u1030\u1038\u1015\u103C\u102F\u1015\u102B",
        "Readable Font": "\u1016\u1010\u103A\u101B\u1014\u103A\u101C\u103D\u101A\u103A\u1000\u1030\u101E\u1031\u102C \u1016\u1031\u102C\u1004\u1037\u103A",
        "Colour adjustments": "\u1021\u101B\u1031\u102C\u1004\u103A \u1001\u103B\u102D\u1014\u103A\u100A\u103E\u102D\u1019\u103E\u102F\u1019\u103B\u102C\u1038",
        "Dark Contrast": "\u1019\u103E\u1031\u102C\u1004\u103A\u1019\u102D\u102F\u1000\u103A\u101E\u1031\u102C \u1000\u103D\u102C\u1001\u103C\u102C\u1038\u1019\u103E\u102F",
        "Light Contrast": "\u1021\u101C\u1004\u103A\u1038\u101B\u1031\u102C\u1004\u103A \u1000\u103D\u102C\u1001\u103C\u102C\u1038\u1019\u103E\u102F",
        "High Contrast": "\u1019\u103C\u1004\u1037\u103A\u1019\u102C\u1038\u101E\u1031\u102C \u1000\u103D\u102C\u1001\u103C\u102C\u1038\u1019\u103E\u102F",
        "High Saturation": "\u1019\u103C\u1004\u1037\u103A\u1019\u102C\u1038\u101E\u1031\u102C \u1021\u101B\u1031\u102C\u1004\u103A\u1005\u103D\u1032\u1019\u103E\u102F",
        "Low Saturation": "\u1014\u102D\u1019\u1037\u103A\u101E\u1031\u102C \u1021\u101B\u1031\u102C\u1004\u103A\u1005\u103D\u1032\u1019\u103E\u102F",
        Monochrome: "\u1010\u1005\u103A\u101B\u1031\u102C\u1004\u103A\u1010\u100A\u103A\u1038",
        Tools: "\u1000\u102D\u101B\u102D\u101A\u102C\u1019\u103B\u102C\u1038",
        "Reading Guide": "\u1016\u1010\u103A\u101B\u103E\u102F\u101B\u1014\u103A \u101C\u1019\u103A\u1038\u100A\u103D\u103E\u1014\u103A",
        "Stop Animations": "\u1021\u1014\u103A\u1014\u102E\u1019\u1031\u1038\u101B\u103E\u1004\u103A\u1038\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u101B\u1015\u103A\u1015\u102B",
        "Big Cursor": "\u1000\u103C\u102E\u1038\u1019\u102C\u1038\u101E\u1031\u102C \u1000\u102C\u1006\u102C",
        "Increase Font Size": "\u1016\u1031\u102C\u1004\u1037\u103A\u1021\u101B\u103D\u101A\u103A\u1021\u1005\u102C\u1038\u1000\u102D\u102F \u1010\u102D\u102F\u1038\u1001\u103B\u1032\u1037\u1015\u102B",
        "Decrease Font Size": "\u1016\u1031\u102C\u1004\u1037\u103A\u1021\u101B\u103D\u101A\u103A\u1021\u1005\u102C\u1038\u1000\u102D\u102F \u101C\u103B\u103E\u1031\u102C\u1037\u1001\u103B\u1015\u102B",
        "Letter Spacing": "\u1021\u1000\u1039\u1001\u101B\u102C\u1021\u1000\u103C\u102C\u1038 \u1021\u1000\u103D\u102C\u1021\u101D\u1031\u1038",
        "Line Height": "\u1005\u102C\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u1021\u1019\u103C\u1004\u1037\u103A",
        "Font Weight": "\u1016\u1031\u102C\u1004\u1037\u103A\u1021\u101C\u1031\u1038\u1001\u103B\u102D\u1014\u103A",
        "Dyslexia Font": "Dyslexia \u1016\u1031\u102C\u1004\u1037\u103A",
        Language: "\u1018\u102C\u101E\u102C\u1005\u1000\u102C\u1038",
        "Accessibility widget": "\u1019\u100A\u103A\u101E\u1030\u1019\u1006\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C \u1019\u102E\u1014\u1030\u1038\u1000\u102D\u102F \u1016\u103D\u1004\u1037\u103A\u1015\u102B",
        "Accessibility Profiles": "\u1019\u100A\u103A\u101E\u1030\u1019\u1006\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C \u1015\u101B\u102D\u102F\u1016\u102D\u102F\u1004\u103A\u1019\u103B\u102C\u1038",
        "Cognitive Disability": "\u101E\u102D\u1019\u103C\u1004\u103A\u1019\u103E\u102F\u1006\u102D\u102F\u1004\u103A\u101B\u102C \u1019\u101E\u1014\u103A\u1005\u103D\u1019\u103A\u1038\u1019\u103E\u102F",
        "Seizure Safe": "\u1021\u1010\u1000\u103A\u101B\u1031\u102C\u1002\u102B\u1021\u1010\u103D\u1000\u103A \u1018\u1031\u1038\u1000\u1004\u103A\u1038\u101C\u102F\u1036\u1001\u103C\u102F\u1036\u101E\u1031\u102C",
        "Accessibility statement": "\u1019\u100A\u103A\u101E\u1030\u1019\u1006\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C \u1000\u103C\u1031\u100A\u102C\u1001\u103B\u1000\u103A"
      };
    }
  });

  // src/locales/nl.json
  var require_nl = __commonJS({
    "src/locales/nl.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Toegankelijkheidsmenu",
        "Reset settings": "Instellingen resetten",
        Close: "Sluiten",
        "Content adjustments": "Inhoudsaanpassingen",
        "Navigation adjustments": "Navigatieaanpassingen",
        "Align Left": "Links uitlijnen",
        "Adjust Font Size": "Lettergrootte aanpassen",
        "Highlight Title": "Titel markeren",
        "Highlight Links": "Links markeren",
        "Readable Font": "Leesbaar lettertype",
        "Colour adjustments": "Kleuraanpassingen",
        "Dark Contrast": "Donker contrast",
        "Light Contrast": "Licht contrast",
        "High Contrast": "Hoog contrast",
        "High Saturation": "Hoge verzadiging",
        "Low Saturation": "Lage verzadiging",
        Monochrome: "Monochroom",
        Tools: "Hulpmiddelen",
        "Reading Guide": "Leesgids",
        "Stop Animations": "Stop animaties",
        "Big Cursor": "Grote cursor",
        "Increase Font Size": "Lettergrootte vergroten",
        "Decrease Font Size": "Lettergrootte verkleinen",
        "Letter Spacing": "Letterafstand",
        "Line Height": "Regelhoogte",
        "Font Weight": "Lettergewicht",
        "Dyslexia Font": "Dyslexie lettertype",
        Language: "Taal",
        "Accessibility widget": "Toegankelijkheidsmenu openen",
        "Accessibility Profiles": "Toegankelijkheidsprofielen",
        "Cognitive Disability": "Cognitieve beperking",
        "Seizure Safe": "Epilepsie veilig",
        "Accessibility statement": "Toegankelijkheidsverklaring"
      };
    }
  });

  // src/locales/no.json
  var require_no = __commonJS({
    "src/locales/no.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Tilgjengelighetsmeny",
        "Reset settings": "Tilbakestill innstillinger",
        Close: "Lukk",
        "Content adjustments": "Innholdsjusteringer",
        "Navigation adjustments": "Navigasjonsjusteringer",
        "Align Left": "Venstrejuster",
        "Adjust Font Size": "Juster tekstst\xF8rrelse",
        "Highlight Title": "Fremhev tittel",
        "Highlight Links": "Fremhev lenker",
        "Readable Font": "Lesbar skrift",
        "Colour adjustments": "Fargejusteringer",
        "Dark Contrast": "M\xF8rk kontrast",
        "Light Contrast": "Lys kontrast",
        "High Contrast": "H\xF8y kontrast",
        "High Saturation": "H\xF8y metning",
        "Low Saturation": "Lav metning",
        Monochrome: "Monokrom",
        Tools: "Verkt\xF8y",
        "Reading Guide": "Leseguide",
        "Stop Animations": "Stopp animasjoner",
        "Big Cursor": "Stor mark\xF8r",
        "Increase Font Size": "\xD8k tekstst\xF8rrelse",
        "Decrease Font Size": "Reduser tekstst\xF8rrelse",
        "Letter Spacing": "Bokstavavstand",
        "Line Height": "Linjeh\xF8yde",
        "Font Weight": "Skriftvekt",
        "Dyslexia Font": "Dysleksiskrift",
        Language: "Spr\xE5k",
        "Accessibility widget": "\xC5pne tilgjengelighetsmeny",
        "Accessibility Profiles": "Tilgjengelighetsprofiler",
        "Cognitive Disability": "Kognitiv funksjonshemming",
        "Seizure Safe": "Anfallssikker",
        "Accessibility statement": "Tilgjengelighetserkl\xE6ring"
      };
    }
  });

  // src/locales/pa.json
  var require_pa = __commonJS({
    "src/locales/pa.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0A2A\u0A39\u0A41\u0A70\u0A1A \u0A2E\u0A47\u0A28\u0A42",
        "Reset settings": "\u0A38\u0A48\u0A1F\u0A3F\u0A70\u0A17\u0A3E\u0A02 \u0A30\u0A40\u0A38\u0A48\u0A1F \u0A15\u0A30\u0A4B",
        Close: "\u0A2C\u0A70\u0A26 \u0A15\u0A30\u0A4B",
        "Content adjustments": "\u0A38\u0A2E\u0A71\u0A17\u0A30\u0A40 \u0A38\u0A70\u0A38\u0A3C\u0A4B\u0A27\u0A28",
        "Navigation adjustments": "\u0A28\u0A47\u0A35\u0A40\u0A17\u0A47\u0A38\u0A3C\u0A28 \u0A38\u0A70\u0A38\u0A3C\u0A4B\u0A27\u0A28",
        "Align Left": "\u0A16\u0A71\u0A2C\u0A47 \u0A2A\u0A3E\u0A38\u0A47 \u0A38\u0A70\u0A2F\u0A4B\u0A1C\u0A3F\u0A24 \u0A15\u0A30\u0A4B",
        "Adjust Font Size": "\u0A2B\u0A4B\u0A02\u0A1F \u0A06\u0A15\u0A3E\u0A30 \u0A05\u0A28\u0A41\u0A15\u0A42\u0A32\u0A3F\u0A24 \u0A15\u0A30\u0A4B",
        "Highlight Title": "\u0A38\u0A3F\u0A30\u0A32\u0A47\u0A16 \u0A39\u0A3E\u0A08\u0A32\u0A3E\u0A08\u0A1F \u0A15\u0A30\u0A4B",
        "Highlight Links": "\u0A32\u0A3F\u0A70\u0A15 \u0A39\u0A3E\u0A08\u0A32\u0A3E\u0A08\u0A1F \u0A15\u0A30\u0A4B",
        "Readable Font": "\u0A2A\u0A5C\u0A4D\u0A39\u0A28\u0A2F\u0A4B\u0A17 \u0A2B\u0A4B\u0A02\u0A1F",
        "Colour adjustments": "\u0A30\u0A70\u0A17 \u0A38\u0A70\u0A38\u0A3C\u0A4B\u0A27\u0A28",
        "Dark Contrast": "\u0A17\u0A42\u0A5C\u0A4D\u0A39\u0A3E \u0A35\u0A3F\u0A30\u0A4B\u0A27",
        "Light Contrast": "\u0A39\u0A32\u0A15\u0A3E \u0A35\u0A3F\u0A30\u0A4B\u0A27",
        "High Contrast": "\u0A09\u0A71\u0A1A\u0A3E \u0A35\u0A3F\u0A30\u0A4B\u0A27",
        "High Saturation": "\u0A09\u0A71\u0A1A\u0A3E \u0A38\u0A70\u0A24\u0A4D\u0A30\u0A3F\u0A2A\u0A24\u0A40",
        "Low Saturation": "\u0A18\u0A71\u0A1F \u0A38\u0A70\u0A24\u0A4D\u0A30\u0A3F\u0A2A\u0A24\u0A40",
        Monochrome: "\u0A07\u0A15 \u0A30\u0A70\u0A17\u0A40",
        Tools: "\u0A09\u0A2A\u0A15\u0A30\u0A28",
        "Reading Guide": "\u0A2A\u0A5C\u0A4D\u0A39\u0A28 \u0A17\u0A3E\u0A08\u0A21",
        "Stop Animations": "\u0A10\u0A28\u0A40\u0A2E\u0A47\u0A38\u0A3C\u0A28 \u0A30\u0A4B\u0A15\u0A4B",
        "Big Cursor": "\u0A35\u0A71\u0A21\u0A3E \u0A15\u0A30\u0A38\u0A30",
        "Increase Font Size": "\u0A2B\u0A4B\u0A02\u0A1F \u0A06\u0A15\u0A3E\u0A30 \u0A35\u0A27\u0A3E\u0A13",
        "Decrease Font Size": "\u0A2B\u0A4B\u0A02\u0A1F \u0A06\u0A15\u0A3E\u0A30 \u0A18\u0A1F\u0A3E\u0A13",
        "Letter Spacing": "\u0A05\u0A71\u0A16\u0A30\u0A3E\u0A02 \u0A26\u0A40 \u0A26\u0A42\u0A30\u0A40",
        "Line Height": "\u0A32\u0A3E\u0A08\u0A28 \u0A26\u0A40 \u0A09\u0A1A\u0A3E\u0A08",
        "Font Weight": "\u0A2B\u0A4B\u0A02\u0A1F \u0A2D\u0A3E\u0A30",
        "Dyslexia Font": "\u0A21\u0A3F\u0A38\u0A32\u0A48\u0A15\u0A38\u0A40\u0A06 \u0A2B\u0A4B\u0A02\u0A1F",
        Language: "\u0A2D\u0A3E\u0A38\u0A3C\u0A3E",
        "Accessibility widget": "\u0A2A\u0A39\u0A41\u0A70\u0A1A \u0A2E\u0A47\u0A28\u0A42 \u0A16\u0A4B\u0A32\u0A4D\u0A39\u0A4B",
        "Accessibility Profiles": "\u0A2A\u0A39\u0A41\u0A70\u0A1A \u0A2A\u0A4D\u0A30\u0A4B\u0A2B\u0A3E\u0A08\u0A32",
        "Cognitive Disability": "\u0A1C\u0A3E\u0A23\u0A15\u0A3E\u0A30\u0A40 \u0A38\u0A70\u0A2C\u0A70\u0A27\u0A40 \u0A05\u0A38\u0A2E\u0A30\u0A71\u0A25\u0A3E",
        "Seizure Safe": "\u0A26\u0A4C\u0A30\u0A3E \u0A38\u0A41\u0A30\u0A71\u0A16\u0A3F\u0A05\u0A24",
        "Accessibility statement": "\u0A2A\u0A39\u0A41\u0A70\u0A1A \u0A2C\u0A3F\u0A06\u0A28"
      };
    }
  });

  // src/locales/pl.json
  var require_pl = __commonJS({
    "src/locales/pl.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "menu dost\u0119pno\u015Bci",
        "Reset settings": "Resetuj ustawienia",
        Close: "Zamknij",
        "Content adjustments": "Dostosowania Tre\u015Bci",
        "Navigation adjustments": "Dostosowania Nawigacji",
        "Align Left": "cya11yr\xF3wnaj do Lewej",
        "Adjust Font Size": "Dostosuj Rozmiar Czcionki",
        "Highlight Title": "Pod\u015Bwietl Tytu\u0142",
        "Highlight Links": "Pod\u015Bwietl Linki",
        "Readable Font": "Czytelna Czcionka",
        "Colour adjustments": "Dostosowania Kolor\xF3w",
        "Dark Contrast": "Ciemny Kontrast",
        "Light Contrast": "Jasny Kontrast",
        "High Contrast": "cya11ysoki Kontrast",
        "High Saturation": "cya11ysoka Nasycenie",
        "Low Saturation": "Niskie Nasycenie",
        Monochrome: "Monochromatyczny",
        Tools: "Narz\u0119dzia",
        "Reading Guide": "Przewodnik Czytania",
        "Stop Animations": "Zatrzymaj Animacje",
        "Big Cursor": "Du\u017Cy Kursor",
        "Increase Font Size": "Zwi\u0119ksz Rozmiar Czcionki",
        "Decrease Font Size": "Zmniejsz Rozmiar Czcionki",
        "Letter Spacing": "Odst\u0119p Liter",
        "Line Height": "cya11ysoko\u015B\u0107 Linii",
        "Font Weight": "Grubo\u015B\u0107 Czcionki",
        "Dyslexia Font": "Czcionka dla Dysleksji",
        Language: "J\u0119zyk",
        "Accessibility widget": "Otw\xF3rz menu dost\u0119pno\u015Bci",
        "Accessibility Profiles": "Profile Dost\u0119pno\u015Bci",
        "Cognitive Disability": "Niepe\u0142nosprawno\u015B\u0107 Poznawcza",
        "Seizure Safe": "Bezpieczny dla Padaczki",
        "Accessibility statement": "O\u015Bwiadczenie o Dost\u0119pno\u015Bci"
      };
    }
  });

  // src/locales/pt.json
  var require_pt = __commonJS({
    "src/locales/pt.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "menu de acessibilidade",
        "Reset settings": "Redefinir configura\xE7\xF5es",
        Close: "Fechar",
        "Content adjustments": "Ajustes de Conte\xFAdo",
        "Navigation adjustments": "Ajustes de Navega\xE7\xE3o",
        "Align Left": "Alinhar \xE0 Esquerda",
        "Adjust Font Size": "Ajustar Tamanho da Fonte",
        "Highlight Title": "Destacar T\xEDtulo",
        "Highlight Links": "Destacar Links",
        "Readable Font": "Fonte Leg\xEDvel",
        "Colour adjustments": "Ajustes de Cor",
        "Dark Contrast": "Contraste Escuro",
        "Light Contrast": "Contraste Claro",
        "High Contrast": "Alto Contraste",
        "High Saturation": "Alta Satura\xE7\xE3o",
        "Low Saturation": "Baixa Satura\xE7\xE3o",
        Monochrome: "Monocrom\xE1tico",
        Tools: "Ferramentas",
        "Reading Guide": "Guia de Leitura",
        "Stop Animations": "Parar Anima\xE7\xF5es",
        "Big Cursor": "Cursor Grande",
        "Increase Font Size": "Aumentar Tamanho da Fonte",
        "Decrease Font Size": "Diminuir Tamanho da Fonte",
        "Letter Spacing": "Espa\xE7amento entre Letras",
        "Line Height": "Altura da Linha",
        "Font Weight": "Peso da Fonte",
        "Dyslexia Font": "Fonte para Dislexia",
        Language: "Idioma",
        "Accessibility widget": "Abrir menu de acessibilidade",
        "Accessibility Profiles": "Perfis de Acessibilidade",
        "Cognitive Disability": "Defici\xEAncia Cognitiva",
        "Seizure Safe": "Seguro para Epilepsia",
        "Accessibility statement": "Declara\xE7\xE3o de Acessibilidade"
      };
    }
  });

  // src/locales/ro.json
  var require_ro = __commonJS({
    "src/locales/ro.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Meniu Accesibilitate",
        "Reset settings": "Reseteaz\u0103 set\u0103rile",
        Close: "\xCEnchide",
        "Content adjustments": "Ajust\u0103ri Con\u021Binut",
        "Navigation adjustments": "Ajust\u0103ri Navigare",
        "Align Left": "Aliniere la St\xE2nga",
        "Adjust Font Size": "Ajusteaz\u0103 Dimensiunea Fontului",
        "Highlight Title": "Eviden\u021Biaz\u0103 Titlul",
        "Highlight Links": "Eviden\u021Biaz\u0103 Link-urile",
        "Readable Font": "Font Lizibil",
        "Colour adjustments": "Ajust\u0103ri Culoare",
        "Dark Contrast": "Contrast \xCEntunecat",
        "Light Contrast": "Contrast Deschis",
        "High Contrast": "Contrast Ridicat",
        "High Saturation": "Satura\u021Bie Ridicat\u0103",
        "Low Saturation": "Satura\u021Bie Sc\u0103zut\u0103",
        Monochrome: "Monocrom",
        Tools: "Instrumente",
        "Reading Guide": "Ghid de Citire",
        "Stop Animations": "Opre\u0219te Anima\u021Biile",
        "Big Cursor": "Cursor Mare",
        "Increase Font Size": "M\u0103re\u0219te Dimensiunea Fontului",
        "Decrease Font Size": "Mic\u0219oreaz\u0103 Dimensiunea Fontului",
        "Letter Spacing": "Spa\u021Biere Litere",
        "Line Height": "\xCEn\u0103l\u021Bime Linie",
        "Font Weight": "Grosime Font",
        "Dyslexia Font": "Font pentru Dislexie",
        Language: "Limb\u0103",
        "Accessibility widget": "Deschide Meniul de Accesibilitate",
        "Accessibility Profiles": "Profiluri de Accesibilitate",
        "Cognitive Disability": "Dizabilitate Cognitiv\u0103",
        "Seizure Safe": "Sigur pentru Epilepsie",
        "Accessibility statement": "Declara\u021Bie de Accesibilitate"
      };
    }
  });

  // src/locales/ru.json
  var require_ru = __commonJS({
    "src/locales/ru.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u041C\u0435\u043D\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438",
        "Reset settings": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        Close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        "Content adjustments": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430",
        "Navigation adjustments": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438",
        "Align Left": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
        "Adjust Font Size": "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Highlight Title": "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        "Highlight Links": "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0438",
        "Readable Font": "\u0427\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0448\u0440\u0438\u0444\u0442",
        "Colour adjustments": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0446\u0432\u0435\u0442\u0430",
        "Dark Contrast": "\u0422\u0435\u043C\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "Light Contrast": "\u0421\u0432\u0435\u0442\u043B\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "High Contrast": "\u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "High Saturation": "\u0412\u044B\u0441\u043E\u043A\u0430\u044F \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
        "Low Saturation": "\u041D\u0438\u0437\u043A\u0430\u044F \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
        Monochrome: "\u041C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u043D\u044B\u0439",
        Tools: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
        "Reading Guide": "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E \u0447\u0442\u0435\u043D\u0438\u044E",
        "Stop Animations": "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438",
        "Big Cursor": "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043A\u0443\u0440\u0441\u043E\u0440",
        "Increase Font Size": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Decrease Font Size": "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
        "Letter Spacing": "\u041C\u0435\u0436\u0431\u0443\u043A\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
        "Line Height": "\u0412\u044B\u0441\u043E\u0442\u0430 \u0441\u0442\u0440\u043E\u043A\u0438",
        "Font Weight": "\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0448\u0440\u0438\u0444\u0442\u0430",
        "Dyslexia Font": "\u0428\u0440\u0438\u0444\u0442 \u0434\u043B\u044F \u0434\u0438\u0441\u043B\u0435\u043A\u0441\u0438\u0438",
        Language: "\u042F\u0437\u044B\u043A",
        "Accessibility widget": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438",
        "Accessibility Profiles": "\u041F\u0440\u043E\u0444\u0438\u043B\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438",
        "Cognitive Disability": "\u041A\u043E\u0433\u043D\u0438\u0442\u0438\u0432\u043D\u044B\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F",
        "Seizure Safe": "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u043F\u0440\u0438 \u044D\u043F\u0438\u043B\u0435\u043F\u0441\u0438\u0438",
        "Accessibility statement": "\u0417\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438"
      };
    }
  });

  // src/locales/si.json
  var require_si = __commonJS({
    "src/locales/si.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1\u0DB1\u0DD3\u0DBA \u0DB8\u0DD9\u0DB1\u0DD4\u0DC0",
        "Reset settings": "\u0DC3\u0DD0\u0D9A\u0DC3\u0DD4\u0DB8\u0DCA \u0DBA\u0DC5\u0DD2 \u0DB4\u0DD2\u0DC4\u0DD2\u0DA7\u0DD4\u0DC0\u0DB1\u0DCA\u0DB1",
        Close: "\u0DC0\u0DC3\u0DB1\u0DCA\u0DB1",
        "Content adjustments": "\u0D85\u0DB1\u0DCA\u0DAD\u0DBB\u0DCA\u0D9C\u0DAD \u0DC3\u0D9A\u0DC3\u0DCA\u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DCA",
        "Navigation adjustments": "\u0DBA\u0DCF\u0DAD\u0DCA\u200D\u0DBB\u0DAB \u0DC3\u0D9A\u0DC3\u0DCA\u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DCA",
        "Align Left": "\u0DC0\u0DB8\u0DA7 \u0DC3\u0DB8\u0DB4\u0DCF\u0DAD \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Adjust Font Size": "\u0D85\u0D9A\u0DD4\u0DBB\u0DD4 \u0DB4\u0DCA\u200D\u0DBB\u0DB8\u0DCF\u0DAB\u0DBA \u0DC3\u0D9A\u0DC3\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Highlight Title": "\u0DC1\u0DD3\u0DBB\u0DCA\u0DC2\u0DBA \u0D8B\u0DAF\u0DCA\u0DAF\u0DD3\u0DB4\u0DB1\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Highlight Links": "\u0DC3\u0DB6\u0DD0\u0DB3\u0DD2 \u0D8B\u0DAF\u0DCA\u0DAF\u0DD3\u0DB4\u0DB1\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Readable Font": "\u0D9A\u0DD2\u0DBA\u0DC0\u0DD2\u0DBA \u0DC4\u0DD0\u0D9A\u0DD2 \u0D85\u0D9A\u0DD4\u0DBB\u0DD4",
        "Colour adjustments": "\u0DC0\u0DBB\u0DCA\u0DAB \u0DC3\u0D9A\u0DC3\u0DCA\u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DCA",
        "Dark Contrast": "\u0D85\u0DB3\u0DD4\u0DBB\u0DD4 \u0DC0\u0DD2\u0DBB\u0DDD\u0DB0\u0DD3\u0DAD\u0DCF\u0DC0\u0DBA",
        "Light Contrast": "\u0DB6\u0DD0\u0DB6\u0DC5\u0DD9\u0DB1 \u0DC0\u0DD2\u0DBB\u0DDD\u0DB0\u0DD3\u0DAD\u0DCF\u0DC0\u0DBA",
        "High Contrast": "\u0D89\u0DC4\u0DC5 \u0DC0\u0DD2\u0DBB\u0DDD\u0DB0\u0DD3\u0DAD\u0DCF\u0DC0\u0DBA",
        "High Saturation": "\u0D89\u0DC4\u0DC5 \u0DC3\u0D82\u0DAD\u0DD8\u0DB4\u0DCA\u0DAD\u0DAD\u0DCF\u0DC0\u0DBA",
        "Low Saturation": "\u0D85\u0DA9\u0DD4 \u0DC3\u0D82\u0DAD\u0DD8\u0DB4\u0DCA\u0DAD\u0DAD\u0DCF\u0DC0\u0DBA",
        Monochrome: "\u0D92\u0D9A\u0DC0\u0DBB\u0DCA\u0DAB",
        Tools: "\u0DB8\u0DD9\u0DC0\u0DBD\u0DB8\u0DCA",
        "Reading Guide": "\u0D9A\u0DD2\u0DBA\u0DC0\u0DD3\u0DB8\u0DDA \u0DB8\u0DCF\u0DBB\u0DCA\u0D9C\u0DDD\u0DB4\u0DAF\u0DDA\u0DC1\u0D9A\u0DBA",
        "Stop Animations": "\u0DC3\u0DA2\u0DD3\u0DC0\u0DD2\u0D9A\u0DBB\u0DAB \u0DB1\u0DC0\u0DAD\u0DCA\u0DC0\u0DB1\u0DCA\u0DB1",
        "Big Cursor": "\u0DC0\u0DD2\u0DC1\u0DCF\u0DBD \u0D9A\u0DBB\u0DCA\u0DC3\u0DBB\u0DBA",
        "Increase Font Size": "\u0D85\u0D9A\u0DD4\u0DBB\u0DD4 \u0DB4\u0DCA\u200D\u0DBB\u0DB8\u0DCF\u0DAB\u0DBA \u0DC0\u0DD0\u0DA9\u0DD2 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Decrease Font Size": "\u0D85\u0D9A\u0DD4\u0DBB\u0DD4 \u0DB4\u0DCA\u200D\u0DBB\u0DB8\u0DCF\u0DAB\u0DBA \u0D85\u0DA9\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Letter Spacing": "\u0D85\u0D9A\u0DD4\u0DBB\u0DD4 \u0D85\u0DAD\u0DBB \u0D85\u0DC0\u0D9A\u0DCF\u0DC1\u0DBA",
        "Line Height": "\u0DB4\u0DDA\u0DC5\u0DD2 \u0D8B\u0DC3",
        "Font Weight": "\u0D85\u0D9A\u0DD4\u0DBB\u0DD4 \u0DB6\u0DBB",
        "Dyslexia Font": "\u0DA9\u0DD2\u0DC3\u0DCA\u0DBD\u0DD9\u0D9A\u0DCA\u0DC3\u0DD2\u0DBA\u0DCF \u0D85\u0D9A\u0DD4\u0DBB\u0DD4",
        Language: "\u0DB7\u0DCF\u0DC2\u0DCF\u0DC0",
        "Accessibility widget": "\u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1\u0DB1\u0DD3\u0DBA \u0DB8\u0DD9\u0DB1\u0DD4\u0DC0 \u0DC0\u0DD2\u0DC0\u0DD8\u0DAD \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "Accessibility Profiles": "\u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1\u0DB1\u0DD3\u0DBA \u0DB4\u0DD0\u0DAD\u0DD2\u0D9A\u0DA9",
        "Cognitive Disability": "\u0DA5\u0DCF\u0DB1\u0DCF\u0DAD\u0DCA\u0DB8\u0D9A \u0D86\u0DB6\u0DCF\u0DB0\u0DBA",
        "Seizure Safe": "\u0D86\u0D9A\u0DCA\u200D\u0DBB\u0DB8\u0DAB\u0DD2\u0D9A \u0D86\u0DBB\u0D9A\u0DCA\u0DC2\u0DD2\u0DAD",
        "Accessibility statement": "\u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1\u0DB1\u0DD3\u0DBA \u0DB4\u0DCA\u200D\u0DBB\u0D9A\u0DCF\u0DC1\u0DB1\u0DBA"
      };
    }
  });

  // src/locales/sk.json
  var require_sk = __commonJS({
    "src/locales/sk.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu pr\xEDstupnosti",
        "Reset settings": "Obnovi\u0165 nastavenia",
        Close: "Zavrie\u0165",
        "Content adjustments": "\xDApravy obsahu",
        "Navigation adjustments": "\xDApravy navig\xE1cie",
        "Align Left": "Zarovna\u0165 do\u013Eava",
        "Adjust Font Size": "Upravi\u0165 ve\u013Ekos\u0165 p\xEDsma",
        "Highlight Title": "Zv\xFDrazni\u0165 nadpis",
        "Highlight Links": "Zv\xFDrazni\u0165 odkazy",
        "Readable Font": "\u010Citate\u013En\xE9 p\xEDsmo",
        "Colour adjustments": "\xDApravy farieb",
        "Dark Contrast": "Tmav\xFD kontrast",
        "Light Contrast": "Svetl\xFD kontrast",
        "High Contrast": "Vysok\xFD kontrast",
        "High Saturation": "Vysok\xE1 s\xFDtos\u0165",
        "Low Saturation": "N\xEDzka s\xFDtos\u0165",
        Monochrome: "Monochr\xF3m",
        Tools: "N\xE1stroje",
        "Reading Guide": "\u010C\xEDta\u010Dsk\xFD sprievodca",
        "Stop Animations": "Zastavi\u0165 anim\xE1cie",
        "Big Cursor": "Ve\u013Ek\xFD kurzor",
        "Increase Font Size": "Zv\xE4\u010D\u0161i\u0165 p\xEDsmo",
        "Decrease Font Size": "Zmen\u0161i\u0165 p\xEDsmo",
        "Letter Spacing": "Medzera medzi p\xEDsmenami",
        "Line Height": "V\xFD\u0161ka riadku",
        "Font Weight": "Hr\xFAbka p\xEDsma",
        "Dyslexia Font": "P\xEDsmo pre dyslexiu",
        Language: "Jazyk",
        "Accessibility widget": "Otvori\u0165 menu pr\xEDstupnosti",
        "Accessibility Profiles": "Profil pr\xEDstupnosti",
        "Cognitive Disability": "Kognit\xEDvne postihnutie",
        "Seizure Safe": "Bezpe\u010Dn\xE9 pre z\xE1chvaty",
        "Accessibility statement": "Vyhl\xE1senie o pr\xEDstupnosti"
      };
    }
  });

  // src/locales/sl.json
  var require_sl = __commonJS({
    "src/locales/sl.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Meni dostopnosti",
        "Reset settings": "Ponastavi nastavitve",
        Close: "Zapri",
        "Content adjustments": "Prilagoditve vsebine",
        "Navigation adjustments": "Prilagoditve navigacije",
        "Align Left": "Poravnaj levo",
        "Adjust Font Size": "Prilagodi velikost pisave",
        "Highlight Title": "Ozna\u010Di naslov",
        "Highlight Links": "Ozna\u010Di povezave",
        "Readable Font": "Bralna pisava",
        "Colour adjustments": "Prilagoditve barv",
        "Dark Contrast": "Temni kontrast",
        "Light Contrast": "Svetli kontrast",
        "High Contrast": "Visoki kontrast",
        "High Saturation": "Visoka nasi\u010Denost",
        "Low Saturation": "Nizka nasi\u010Denost",
        Monochrome: "Monokromno",
        Tools: "Orodja",
        "Reading Guide": "Bralni vodnik",
        "Stop Animations": "Ustavi animacije",
        "Big Cursor": "Velik kazalec",
        "Increase Font Size": "Pove\u010Daj velikost pisave",
        "Decrease Font Size": "Zmanj\u0161aj velikost pisave",
        "Letter Spacing": "Razmik med \u010Drkami",
        "Line Height": "Vi\u0161ina vrstice",
        "Font Weight": "Debelina pisave",
        "Dyslexia Font": "Pisava za disleksijo",
        Language: "Jezik",
        "Accessibility widget": "Odpri meni dostopnosti",
        "Accessibility Profiles": "Profili dostopnosti",
        "Cognitive Disability": "Kognitivna oviranost",
        "Seizure Safe": "Varno za napade",
        "Accessibility statement": "Izjava o dostopnosti"
      };
    }
  });

  // src/locales/sr.json
  var require_sr = __commonJS({
    "src/locales/sr.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u041C\u0435\u043D\u0438 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442\u0438",
        "Reset settings": "\u0420\u0435\u0441\u0435\u0442\u0443\u0458 \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430",
        Close: "\u0417\u0430\u0442\u0432\u043E\u0440\u0438",
        "Content adjustments": "\u041F\u0440\u0438\u043B\u0430\u0433\u043E\u0452\u0430\u0432\u0430\u045A\u0430 \u0441\u0430\u0434\u0440\u0436\u0430\u0458\u0430",
        "Navigation adjustments": "\u041F\u0440\u0438\u043B\u0430\u0433\u043E\u0452\u0430\u0432\u0430\u045A\u0430 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0458\u0435",
        "Align Left": "\u041F\u043E\u0440\u0430\u0432\u043D\u0430\u0458 \u043B\u0435\u0432\u043E",
        "Adjust Font Size": "\u041F\u043E\u0434\u0435\u0441\u0438 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0443 \u0444\u043E\u043D\u0442\u0430",
        "Highlight Title": "\u0418\u0441\u0442\u0430\u043A\u043D\u0438 \u043D\u0430\u0441\u043B\u043E\u0432",
        "Highlight Links": "\u0418\u0441\u0442\u0430\u043A\u043D\u0438 \u043B\u0438\u043D\u043A\u043E\u0432\u0435",
        "Readable Font": "\u0427\u0438\u0442\u0459\u0438\u0432 \u0444\u043E\u043D\u0442",
        "Colour adjustments": "\u041F\u0440\u0438\u043B\u0430\u0433\u043E\u0452\u0430\u0432\u0430\u045A\u0430 \u0431\u043E\u0458\u0430",
        "Dark Contrast": "\u0422\u0430\u043C\u043D\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "Light Contrast": "\u0421\u0432\u0435\u0442\u043B\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "High Contrast": "\u0412\u0438\u0441\u043E\u043A\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442",
        "High Saturation": "\u0412\u0438\u0441\u043E\u043A\u0430 \u0437\u0430\u0441\u0438\u045B\u0435\u043D\u043E\u0441\u0442",
        "Low Saturation": "\u041D\u0438\u0441\u043A\u0430 \u0437\u0430\u0441\u0438\u045B\u0435\u043D\u043E\u0441\u0442",
        Monochrome: "\u041C\u043E\u043D\u043E\u0445\u0440\u043E\u043C\u0430\u0442\u0441\u043A\u0438",
        Tools: "\u0410\u043B\u0430\u0442\u0438",
        "Reading Guide": "\u0412\u043E\u0434\u0438\u0447 \u0437\u0430 \u0447\u0438\u0442\u0430\u045A\u0435",
        "Stop Animations": "\u0417\u0430\u0443\u0441\u0442\u0430\u0432\u0438 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0458\u0435",
        "Big Cursor": "\u0412\u0435\u043B\u0438\u043A\u0438 \u043A\u0443\u0440\u0441\u043E\u0440",
        "Increase Font Size": "\u041F\u043E\u0432\u0435\u045B\u0430\u0458 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0443 \u0444\u043E\u043D\u0442\u0430",
        "Decrease Font Size": "\u0421\u043C\u0430\u045A\u0438 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0443 \u0444\u043E\u043D\u0442\u0430",
        "Letter Spacing": "\u0420\u0430\u0437\u043C\u0430\u043A \u0438\u0437\u043C\u0435\u0452\u0443 \u0441\u043B\u043E\u0432\u0430",
        "Line Height": "\u0412\u0438\u0441\u0438\u043D\u0430 \u043B\u0438\u043D\u0438\u0458\u0435",
        "Font Weight": "\u0414\u0435\u0431\u0459\u0438\u043D\u0430 \u0444\u043E\u043D\u0442\u0430",
        "Dyslexia Font": "\u0424\u043E\u043D\u0442 \u0437\u0430 \u0434\u0438\u0441\u043B\u0435\u043A\u0441\u0438\u0458\u0443",
        Language: "\u0408\u0435\u0437\u0438\u043A",
        "Accessibility widget": "\u041E\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u0438 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442\u0438",
        "Accessibility Profiles": "\u041F\u0440\u043E\u0444\u0438\u043B\u0438 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442\u0438",
        "Cognitive Disability": "\u041A\u043E\u0433\u043D\u0438\u0442\u0438\u0432\u043D\u0430 \u0438\u043D\u0432\u0430\u043B\u0438\u0434\u043D\u043E\u0441\u0442",
        "Seizure Safe": "\u0411\u0435\u0437\u0431\u0435\u0434\u043D\u043E \u0437\u0430 \u043D\u0430\u043F\u0430\u0434\u0435",
        "Accessibility statement": "\u0418\u0437\u0458\u0430\u0432\u0430 \u043E \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0447\u043D\u043E\u0441\u0442\u0438"
      };
    }
  });

  // src/locales/sv.json
  var require_sv = __commonJS({
    "src/locales/sv.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Tillg\xE4nglighetsmeny",
        "Reset settings": "Nollst\xE4ll inst\xE4llningar",
        Close: "St\xE4ng",
        "Content adjustments": "Anpassa inneh\xE5ll",
        "Navigation adjustments": "Anpassa navigering",
        "Align Left": "V\xE4nsterjustera",
        "Adjust Font Size": "Justera textstorlek",
        "Highlight Title": "Framh\xE4v titel",
        "Highlight Links": "Framh\xE4v l\xE4nkar",
        "Readable Font": "L\xE4sbart teckensnitt",
        "Colour adjustments": "Anpassa f\xE4rger",
        "Dark Contrast": "M\xF6rk kontrast",
        "Light Contrast": "Ljus kontrast",
        "High Contrast": "H\xF6g kontrast",
        "High Saturation": "H\xF6g m\xE4ttnad",
        "Low Saturation": "L\xE5g m\xE4ttnad",
        Monochrome: "Monokrom",
        Tools: "Verktyg",
        "Reading Guide": "L\xE4slinjal",
        "Stop Animations": "Hindra animationer",
        "Big Cursor": "Stor muspekare",
        "Increase Font Size": "\xD6ka textstorlek",
        "Decrease Font Size": "Minska textstorlek",
        "Letter Spacing": "Teckenavst\xE5nd",
        "Line Height": "Radh\xF6jd",
        "Font Weight": "Teckensnitt tjocklek",
        "Dyslexia Font": "Dyslektiskt teckensnitt",
        Language: "Spr\xE5k",
        "Accessibility widget": "\xD6ppna tillg\xE4nglighetsmeny",
        "Accessibility Profiles": "Tillg\xE4nglighetsprofiler",
        "Cognitive Disability": "Kognitiv funktionsneds\xE4ttning",
        "Seizure Safe": "Anfallss\xE4ker",
        "Accessibility statement": "Tillg\xE4nglighetsutl\xE5tande"
      };
    }
  });

  // src/locales/sw.json
  var require_sw = __commonJS({
    "src/locales/sw.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menyu ya Ufikivu",
        "Reset settings": "Weka upya mipangilio",
        Close: "Funga",
        "Content adjustments": "Marekebisho ya Maudhui",
        "Navigation adjustments": "Marekebisho ya Uelekezaji",
        "Align Left": "Panga Kushoto",
        "Adjust Font Size": "Rekebisha Ukubwa wa Herufi",
        "Highlight Title": "Onesha Kichwa",
        "Highlight Links": "Onesha Viungo",
        "Readable Font": "Herufi Zinazosomeka",
        "Colour adjustments": "Marekebisho ya Rangi",
        "Dark Contrast": "Tofauti ya Giza",
        "Light Contrast": "Tofauti ya Mwangaza",
        "High Contrast": "Tofauti ya Juu",
        "High Saturation": "Ujazaji wa Juu",
        "Low Saturation": "Ujazaji wa Chini",
        Monochrome: "Rangi Moja",
        Tools: "Vifaa",
        "Reading Guide": "Mwongozo wa Kusoma",
        "Stop Animations": "Simamisha Animations",
        "Big Cursor": "Kishika Mkubwa",
        "Increase Font Size": "Ongeza Ukubwa wa Herufi",
        "Decrease Font Size": "Punguza Ukubwa wa Herufi",
        "Letter Spacing": "Nafasi ya Herufi",
        "Line Height": "Urefu wa Mstari",
        "Font Weight": "Uzito wa Herufi",
        "Dyslexia Font": "Herufi za Dyslexia",
        Language: "Lugha",
        "Accessibility widget": "Fungua Menyu ya Ufikivu",
        "Accessibility Profiles": "Wasifu wa Ufikivu",
        "Cognitive Disability": "Ulemavu wa Akili",
        "Seizure Safe": "Salama kwa Mashambulizi",
        "Accessibility statement": "Taarifa ya Ufikivu"
      };
    }
  });

  // src/locales/ta.json
  var require_ta = __commonJS({
    "src/locales/ta.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0BAE\u0BC6\u0BA9\u0BC1",
        "Reset settings": "\u0B85\u0BAE\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC8 \u0BAE\u0BC0\u0B9F\u0BCD\u0B9F\u0BAE\u0BC8",
        Close: "\u0BAE\u0BC2\u0B9F\u0BC1",
        "Content adjustments": "\u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0B9A\u0BB0\u0BBF\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BB2\u0BCD\u0B95\u0BB3\u0BCD",
        "Navigation adjustments": "\u0BB5\u0BB4\u0BBF\u0B9A\u0BC6\u0BB2\u0BC1\u0BA4\u0BCD\u0BA4\u0BB2\u0BCD \u0B9A\u0BB0\u0BBF\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BB2\u0BCD\u0B95\u0BB3\u0BCD",
        "Align Left": "\u0B87\u0B9F\u0BA4\u0BC1 \u0B9A\u0BC0\u0BB0\u0BAE\u0BC8",
        "Adjust Font Size": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0B85\u0BB3\u0BB5\u0BC8 \u0B9A\u0BB0\u0BBF\u0B9A\u0BC6\u0BAF\u0BCD",
        "Highlight Title": "\u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0BAE\u0BC1\u0BA9\u0BCD\u0BA9\u0BBF\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        "Highlight Links": "\u0B87\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC8 \u0BAE\u0BC1\u0BA9\u0BCD\u0BA9\u0BBF\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        "Readable Font": "\u0BAA\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0B95\u0BCD\u0B95\u0BC2\u0B9F\u0BBF\u0BAF \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        "Colour adjustments": "\u0BA8\u0BBF\u0BB1 \u0B9A\u0BB0\u0BBF\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BB2\u0BCD\u0B95\u0BB3\u0BCD",
        "Dark Contrast": "\u0B95\u0BB0\u0BC1\u0BAE\u0BC8 \u0BB5\u0BC7\u0BB1\u0BC1\u0BAA\u0BBE\u0B9F\u0BC1",
        "Light Contrast": "\u0BB5\u0BC6\u0BB3\u0BBF\u0B9A\u0BCD\u0B9A \u0BB5\u0BC7\u0BB1\u0BC1\u0BAA\u0BBE\u0B9F\u0BC1",
        "High Contrast": "\u0B89\u0BAF\u0BB0\u0BCD \u0BB5\u0BC7\u0BB1\u0BC1\u0BAA\u0BBE\u0B9F\u0BC1",
        "High Saturation": "\u0B89\u0BAF\u0BB0\u0BCD \u0B9A\u0BC6\u0BB1\u0BBF\u0BB5\u0BC1",
        "Low Saturation": "\u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4 \u0B9A\u0BC6\u0BB1\u0BBF\u0BB5\u0BC1",
        Monochrome: "\u0B92\u0BB1\u0BCD\u0BB1\u0BC8 \u0BA8\u0BBF\u0BB1\u0BAE\u0BCD",
        Tools: "\u0B95\u0BB0\u0BC1\u0BB5\u0BBF\u0B95\u0BB3\u0BCD",
        "Reading Guide": "\u0BAA\u0B9F\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0BB5\u0BB4\u0BBF\u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BBF",
        "Stop Animations": "\u0B85\u0BA9\u0BBF\u0BAE\u0BC7\u0BB7\u0BA9\u0BCD\u0B95\u0BB3\u0BC8 \u0BA8\u0BBF\u0BB1\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        "Big Cursor": "\u0BAA\u0BC6\u0BB0\u0BBF\u0BAF \u0B95\u0BB0\u0BCD\u0B9A\u0BB0\u0BCD",
        "Increase Font Size": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0B85\u0BB3\u0BB5\u0BC8 \u0B85\u0BA4\u0BBF\u0B95\u0BB0\u0BBF",
        "Decrease Font Size": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0B85\u0BB3\u0BB5\u0BC8 \u0B95\u0BC1\u0BB1\u0BC8",
        "Letter Spacing": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0B87\u0B9F\u0BC8\u0BB5\u0BC6\u0BB3\u0BBF",
        "Line Height": "\u0BB5\u0BB0\u0BBF \u0B89\u0BAF\u0BB0\u0BAE\u0BCD",
        "Font Weight": "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0BA4\u0B9F\u0BBF\u0BAE\u0BA9\u0BCD",
        "Dyslexia Font": "\u0B9F\u0BBF\u0BB8\u0BCD\u0BB2\u0BC6\u0B95\u0BCD\u0BB8\u0BBF\u0BAF\u0BBE \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
        Language: "\u0BAE\u0BCA\u0BB4\u0BBF",
        "Accessibility widget": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0BAE\u0BC6\u0BA9\u0BC1\u0BB5\u0BC8 \u0BA4\u0BBF\u0BB1",
        "Accessibility Profiles": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0B9A\u0BC1\u0BAF\u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
        "Cognitive Disability": "\u0B85\u0BB1\u0BBF\u0BB5\u0BBE\u0BB1\u0BCD\u0BB1\u0BB2\u0BCD \u0B95\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BC1",
        "Seizure Safe": "\u0BB5\u0BB2\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0BAA\u0BBE\u0BA4\u0BC1\u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0BC1",
        "Accessibility statement": "\u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD \u0B85\u0BB1\u0BBF\u0B95\u0BCD\u0B95\u0BC8"
      };
    }
  });

  // src/locales/te.json
  var require_te = __commonJS({
    "src/locales/te.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0C05\u0C02\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C2E\u0C46\u0C28\u0C42",
        "Reset settings": "\u0C38\u0C46\u0C1F\u0C4D\u0C1F\u0C3F\u0C02\u0C17\u0C4D\u200C\u0C32\u0C28\u0C41 \u0C30\u0C40\u0C38\u0C46\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        Close: "\u0C2E\u0C42\u0C38\u0C3F\u0C35\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        "Content adjustments": "\u0C35\u0C3F\u0C37\u0C2F \u0C38\u0C30\u0C4D\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C4D\u0C32\u0C41",
        "Navigation adjustments": "\u0C28\u0C3E\u0C35\u0C3F\u0C17\u0C47\u0C37\u0C28\u0C4D \u0C38\u0C30\u0C4D\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C4D\u0C32\u0C41",
        "Align Left": "\u0C0E\u0C21\u0C2E\u0C35\u0C48\u0C2A\u0C41 \u0C38\u0C30\u0C3F\u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        "Adjust Font Size": "\u0C2B\u0C3E\u0C02\u0C1F\u0C4D \u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C38\u0C30\u0C4D\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        "Highlight Title": "\u0C36\u0C40\u0C30\u0C4D\u0C37\u0C3F\u0C15\u0C28\u0C41 \u0C39\u0C48\u0C32\u0C48\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        "Highlight Links": "\u0C32\u0C3F\u0C02\u0C15\u0C4D\u200C\u0C32\u0C28\u0C41 \u0C39\u0C48\u0C32\u0C48\u0C1F\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        "Readable Font": "\u0C1A\u0C26\u0C35\u0C17\u0C32\u0C3F\u0C17\u0C47 \u0C2B\u0C3E\u0C02\u0C1F\u0C4D",
        "Colour adjustments": "\u0C30\u0C02\u0C17\u0C41 \u0C38\u0C30\u0C4D\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C4D\u0C32\u0C41",
        "Dark Contrast": "\u0C1A\u0C40\u0C15\u0C1F\u0C3F \u0C35\u0C4D\u0C2F\u0C24\u0C4D\u0C2F\u0C3E\u0C38\u0C02",
        "Light Contrast": "\u0C24\u0C47\u0C32\u0C3F\u0C15 \u0C35\u0C4D\u0C2F\u0C24\u0C4D\u0C2F\u0C3E\u0C38\u0C02",
        "High Contrast": "\u0C0E\u0C15\u0C4D\u0C15\u0C41\u0C35 \u0C35\u0C4D\u0C2F\u0C24\u0C4D\u0C2F\u0C3E\u0C38\u0C02",
        "High Saturation": "\u0C0E\u0C15\u0C4D\u0C15\u0C41\u0C35 \u0C38\u0C02\u0C24\u0C43\u0C2A\u0C4D\u0C24\u0C3F",
        "Low Saturation": "\u0C24\u0C15\u0C4D\u0C15\u0C41\u0C35 \u0C38\u0C02\u0C24\u0C43\u0C2A\u0C4D\u0C24\u0C3F",
        Monochrome: "\u0C0F\u0C15\u0C30\u0C02\u0C17\u0C41",
        Tools: "\u0C38\u0C3E\u0C27\u0C28\u0C3E\u0C32\u0C41",
        "Reading Guide": "\u0C1A\u0C26\u0C35\u0C21\u0C02 \u0C17\u0C48\u0C21\u0C4D",
        "Stop Animations": "\u0C2F\u0C3E\u0C28\u0C3F\u0C2E\u0C47\u0C37\u0C28\u0C4D\u200C\u0C32\u0C28\u0C41 \u0C06\u0C2A\u0C02\u0C21\u0C3F",
        "Big Cursor": "\u0C2A\u0C46\u0C26\u0C4D\u0C26 \u0C15\u0C30\u0C4D\u0C38\u0C30\u0C4D",
        "Increase Font Size": "\u0C2B\u0C3E\u0C02\u0C1F\u0C4D \u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C2A\u0C46\u0C02\u0C1A\u0C02\u0C21\u0C3F",
        "Decrease Font Size": "\u0C2B\u0C3E\u0C02\u0C1F\u0C4D \u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C24\u0C17\u0C4D\u0C17\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
        "Letter Spacing": "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C32 \u0C2E\u0C27\u0C4D\u0C2F \u0C16\u0C3E\u0C33\u0C40",
        "Line Height": "\u0C2A\u0C02\u0C15\u0C4D\u0C24\u0C3F \u0C0E\u0C24\u0C4D\u0C24\u0C41",
        "Font Weight": "\u0C2B\u0C3E\u0C02\u0C1F\u0C4D \u0C2C\u0C30\u0C41\u0C35\u0C41",
        "Dyslexia Font": "\u0C21\u0C3F\u0C38\u0C4D\u0C32\u0C46\u0C15\u0C4D\u0C38\u0C3F\u0C2F\u0C3E \u0C2B\u0C3E\u0C02\u0C1F\u0C4D",
        Language: "\u0C2D\u0C3E\u0C37",
        "Accessibility widget": "\u0C05\u0C02\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C2E\u0C46\u0C28\u0C42\u0C28\u0C3F \u0C24\u0C46\u0C30\u0C35\u0C02\u0C21\u0C3F",
        "Accessibility Profiles": "\u0C05\u0C02\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C2A\u0C4D\u0C30\u0C4A\u0C2B\u0C48\u0C32\u0C4D\u200C\u0C32\u0C41",
        "Cognitive Disability": "\u0C1C\u0C4D\u0C1E\u0C3E\u0C28 \u0C38\u0C02\u0C2C\u0C02\u0C27\u0C3F\u0C24 \u0C35\u0C48\u0C15\u0C32\u0C4D\u0C2F\u0C02",
        "Seizure Safe": "\u0C2A\u0C1F\u0C4D\u0C1F\u0C41 \u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24\u0C02",
        "Accessibility statement": "\u0C05\u0C02\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C2A\u0C4D\u0C30\u0C15\u0C1F\u0C28"
      };
    }
  });

  // src/locales/th.json
  var require_th = __commonJS({
    "src/locales/th.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0E40\u0E21\u0E19\u0E39\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07",
        "Reset settings": "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
        Close: "\u0E1B\u0E34\u0E14",
        "Content adjustments": "\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E31\u0E1A\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32",
        "Navigation adjustments": "\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E19\u0E33\u0E17\u0E32\u0E07",
        "Adjust Font Size": "\u0E1B\u0E23\u0E31\u0E1A\u0E02\u0E19\u0E32\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
        "Highlight Title": "\u0E40\u0E19\u0E49\u0E19\u0E2B\u0E31\u0E27\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07",
        "Highlight Links": "\u0E40\u0E19\u0E49\u0E19\u0E25\u0E34\u0E07\u0E01\u0E4C",
        "Readable Font": "\u0E41\u0E1A\u0E1A\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E17\u0E35\u0E48\u0E2D\u0E48\u0E32\u0E19\u0E07\u0E48\u0E32\u0E22",
        "Colour adjustments": "\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E31\u0E1A\u0E2A\u0E35",
        "Dark Contrast": "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E15\u0E48\u0E32\u0E07\u0E40\u0E02\u0E49\u0E21",
        "Light Contrast": "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E15\u0E48\u0E32\u0E07\u0E2A\u0E27\u0E48\u0E32\u0E07",
        "High Contrast": "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E15\u0E48\u0E32\u0E07\u0E2A\u0E39\u0E07",
        "High Saturation": "\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E2A\u0E35\u0E2A\u0E39\u0E07",
        "Low Saturation": "\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E2A\u0E35\u0E15\u0E48\u0E33",
        Monochrome: "\u0E42\u0E21\u0E42\u0E19\u0E42\u0E04\u0E23\u0E21",
        Tools: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D",
        "Reading Guide": "\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19",
        "Stop Animations": "\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27",
        "Big Cursor": "\u0E40\u0E04\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48",
        "Increase Font Size": "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E19\u0E32\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
        "Decrease Font Size": "\u0E25\u0E14\u0E02\u0E19\u0E32\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
        "Letter Spacing": "\u0E23\u0E30\u0E22\u0E30\u0E2B\u0E48\u0E32\u0E07\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
        "Line Height": "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E02\u0E2D\u0E07\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14",
        "Font Weight": "\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
        "Dyslexia Font": "\u0E41\u0E1A\u0E1A\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E14\u0E34\u0E2A\u0E40\u0E25\u0E47\u0E01\u0E40\u0E0B\u0E35\u0E22",
        Language: "\u0E20\u0E32\u0E29\u0E32",
        "Accessibility widget": "\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07",
        "Accessibility Profiles": "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07",
        "Cognitive Disability": "\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E01\u0E1E\u0E23\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E2A\u0E15\u0E34\u0E1B\u0E31\u0E0D\u0E0D\u0E32",
        "Seizure Safe": "\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E42\u0E23\u0E04\u0E25\u0E21\u0E0A\u0E31\u0E01",
        "Accessibility statement": "\u0E04\u0E33\u0E41\u0E16\u0E25\u0E07\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07"
      };
    }
  });

  // src/locales/tr.json
  var require_tr = __commonJS({
    "src/locales/tr.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Eri\u015Filebilirlik Men\xFCs\xFC",
        "Reset settings": "Ayarlar\u0131 S\u0131f\u0131rla",
        Close: "Kapat",
        "Content adjustments": "\u0130\xE7erik Ayarlar\u0131",
        "Navigation adjustments": "Gezinme Ayarlar\u0131",
        "Align Left": "Sola Hizala",
        "Adjust Font Size": "Yaz\u0131 Tipi Boyutunu Ayarla",
        "Highlight Title": "Ba\u015Fl\u0131\u011F\u0131 Vurgula",
        "Highlight Links": "Ba\u011Flant\u0131lar\u0131 Vurgula",
        "Readable Font": "Okunakl\u0131 Yaz\u0131 Tipi",
        "Colour adjustments": "Renk Ayarlar\u0131",
        "Dark Contrast": "Koyu Kontrast",
        "Light Contrast": "A\xE7\u0131k Kontrast",
        "High Contrast": "Y\xFCksek Kontrast",
        "High Saturation": "Y\xFCksek Doygunluk",
        "Low Saturation": "D\xFC\u015F\xFCk Doygunluk",
        Monochrome: "Tek Renkli",
        Tools: "Ara\xE7lar",
        "Reading Guide": "Okuma Rehberi",
        "Stop Animations": "Animasyonlar\u0131 Durdur",
        "Big Cursor": "B\xFCy\xFCk \u0130mle\xE7",
        "Increase Font Size": "Yaz\u0131 Tipi Boyutunu Art\u0131r",
        "Decrease Font Size": "Yaz\u0131 Tipi Boyutunu Azalt",
        "Letter Spacing": "Harf Aral\u0131\u011F\u0131",
        "Line Height": "Sat\u0131r Y\xFCksekli\u011Fi",
        "Font Weight": "Yaz\u0131 Tipi Kal\u0131nl\u0131\u011F\u0131",
        "Dyslexia Font": "Disleksi Yaz\u0131 Tipi",
        Language: "Dil",
        "Accessibility widget": "Eri\u015Filebilirlik men\xFCs\xFCn\xFC a\xE7",
        "Accessibility Profiles": "Eri\u015Filebilirlik Profilleri",
        "Cognitive Disability": "Bili\u015Fsel Engellilik",
        "Seizure Safe": "N\xF6bet G\xFCvenli",
        "Accessibility statement": "Eri\u015Filebilirlik Beyan\u0131"
      };
    }
  });

  // src/locales/ur.json
  var require_ur = __commonJS({
    "src/locales/ur.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u0631\u0633\u0627\u0626\u06CC \u0645\u06CC\u0646\u0648",
        "Reset settings": "\u062A\u0631\u062A\u06CC\u0628\u0627\u062A \u0631\u06CC \u0633\u06CC\u0679 \u06A9\u0631\u06CC\u06BA",
        Close: "\u0628\u0646\u062F \u06A9\u0631\u06CC\u06BA",
        "Content adjustments": "\u0645\u0648\u0627\u062F \u06A9\u06CC \u0627\u06CC\u0688\u062C\u0633\u0679\u0645\u0646\u0679",
        "Navigation adjustments": "\u0646\u06CC\u0648\u06CC\u06AF\u06CC\u0634\u0646 \u06A9\u06CC \u0627\u06CC\u0688\u062C\u0633\u0679\u0645\u0646\u0679",
        "Align Left": "\u0628\u0627\u0626\u06CC\u06BA \u062C\u0627\u0646\u0628 \u062A\u0631\u062A\u06CC\u0628 \u062F\u06CC\u06BA",
        "Adjust Font Size": "\u0641\u0648\u0646\u0679 \u0633\u0627\u0626\u0632 \u0627\u06CC\u0688\u062C\u0633\u0679 \u06A9\u0631\u06CC\u06BA",
        "Highlight Title": "\u0639\u0646\u0648\u0627\u0646 \u06A9\u0648 \u0646\u0645\u0627\u06CC\u0627\u06BA \u06A9\u0631\u06CC\u06BA",
        "Highlight Links": "\u0644\u0646\u06A9\u0633 \u06A9\u0648 \u0646\u0645\u0627\u06CC\u0627\u06BA \u06A9\u0631\u06CC\u06BA",
        "Readable Font": "\u0642\u0627\u0628\u0644\u0650 \u0645\u0637\u0627\u0644\u0639\u06C1 \u0641\u0648\u0646\u0679",
        "Colour adjustments": "\u0631\u0646\u06AF \u06A9\u06CC \u0627\u06CC\u0688\u062C\u0633\u0679\u0645\u0646\u0679",
        "Dark Contrast": "\u06AF\u06C1\u0631\u0627 \u062A\u0636\u0627\u062F",
        "Light Contrast": "\u06C1\u0644\u06A9\u0627 \u062A\u0636\u0627\u062F",
        "High Contrast": "\u0632\u06CC\u0627\u062F\u06C1 \u062A\u0636\u0627\u062F",
        "High Saturation": "\u0632\u06CC\u0627\u062F\u06C1 \u0633\u06CC\u0686\u0648\u0631\u06CC\u0634\u0646",
        "Low Saturation": "\u06A9\u0645 \u0633\u06CC\u0686\u0648\u0631\u06CC\u0634\u0646",
        Monochrome: "\u0645\u0648\u0646\u0648\u06A9\u0631\u0648\u0645",
        Tools: "\u0627\u0648\u0632\u0627\u0631",
        "Reading Guide": "\u0645\u0637\u0627\u0644\u0639\u06C1 \u06AF\u0627\u0626\u06CC\u0688",
        "Stop Animations": "\u062D\u0631\u06A9\u0627\u062A \u0631\u0648\u06A9\u06CC\u06BA",
        "Big Cursor": "\u0628\u0691\u0627 \u06A9\u0631\u0633\u0631",
        "Increase Font Size": "\u0641\u0648\u0646\u0679 \u0633\u0627\u0626\u0632 \u0628\u0691\u06BE\u0627\u0626\u06CC\u06BA",
        "Decrease Font Size": "\u0641\u0648\u0646\u0679 \u0633\u0627\u0626\u0632 \u06A9\u0645 \u06A9\u0631\u06CC\u06BA",
        "Letter Spacing": "\u062D\u0631\u0648\u0641 \u06A9\u0627 \u0641\u0627\u0635\u0644\u06C1",
        "Line Height": "\u0644\u0627\u0626\u0646 \u06A9\u06CC \u0627\u0648\u0646\u0686\u0627\u0626\u06CC",
        "Font Weight": "\u0641\u0648\u0646\u0679 \u06A9\u0627 \u0648\u0632\u0646",
        "Dyslexia Font": "\u0688\u0633\u0644\u06CC\u06A9\u0633\u06CC\u0627 \u0641\u0648\u0646\u0679",
        Language: "\u0632\u0628\u0627\u0646",
        "Accessibility widget": "\u0631\u0633\u0627\u0626\u06CC \u0645\u06CC\u0646\u0648 \u06A9\u06BE\u0648\u0644\u06CC\u06BA",
        "Accessibility Profiles": "\u0631\u0633\u0627\u0626\u06CC \u067E\u0631\u0648\u0641\u0627\u0626\u0644\u0632",
        "Cognitive Disability": "\u0627\u062F\u0631\u0627\u06A9\u06CC \u0645\u0639\u0630\u0648\u0631\u06CC",
        "Seizure Safe": "\u062F\u0648\u0631\u06D2 \u0633\u06D2 \u0645\u062D\u0641\u0648\u0638",
        "Accessibility statement": "\u0631\u0633\u0627\u0626\u06CC \u06A9\u0627 \u0628\u06CC\u0627\u0646"
      };
    }
  });

  // src/locales/vi.json
  var require_vi = __commonJS({
    "src/locales/vi.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "Menu Tr\u1EE3 N\u0103ng",
        "Reset settings": "\u0110\u1EB7t l\u1EA1i c\xE0i \u0111\u1EB7t",
        Close: "\u0110\xF3ng",
        "Content adjustments": "\u0110i\u1EC1u Ch\u1EC9nh N\u1ED9i Dung",
        "Navigation adjustments": "\u0110i\u1EC1u Ch\u1EC9nh \u0110i\u1EC1u H\u01B0\u1EDBng",
        "Align Left": "C\u0103n Tr\xE1i",
        "Adjust Font Size": "\u0110i\u1EC1u Ch\u1EC9nh C\u1EE1 Ch\u1EEF",
        "Highlight Title": "\u0110\xE1nh D\u1EA5u Ti\xEAu \u0110\u1EC1",
        "Highlight Links": "\u0110\xE1nh D\u1EA5u Li\xEAn K\u1EBFt",
        "Readable Font": "Ph\xF4ng Ch\u1EEF D\u1EC5 \u0110\u1ECDc",
        "Colour adjustments": "\u0110i\u1EC1u Ch\u1EC9nh M\xE0u S\u1EAFc",
        "Dark Contrast": "T\u01B0\u01A1ng Ph\u1EA3n T\u1ED1i",
        "Light Contrast": "T\u01B0\u01A1ng Ph\u1EA3n S\xE1ng",
        "High Contrast": "T\u01B0\u01A1ng Ph\u1EA3n Cao",
        "High Saturation": "B\xE3o H\xF2a Cao",
        "Low Saturation": "B\xE3o H\xF2a Th\u1EA5p",
        Monochrome: "\u0110\u01A1n S\u1EAFc",
        Tools: "C\xF4ng C\u1EE5",
        "Reading Guide": "H\u01B0\u1EDBng D\u1EABn \u0110\u1ECDc",
        "Stop Animations": "D\u1EEBng Ho\u1EA1t \u1EA2nh",
        "Big Cursor": "Con Tr\u1ECF L\u1EDBn",
        "Increase Font Size": "T\u0103ng C\u1EE1 Ch\u1EEF",
        "Decrease Font Size": "Gi\u1EA3m C\u1EE1 Ch\u1EEF",
        "Letter Spacing": "Kho\u1EA3ng C\xE1ch Ch\u1EEF",
        "Line Height": "Chi\u1EC1u Cao D\xF2ng",
        "Font Weight": "\u0110\u1ED9 \u0110\u1EADm Ch\u1EEF",
        "Dyslexia Font": "Ph\xF4ng Ch\u1EEF Cho Ch\u1EE9ng Kh\xF3 \u0110\u1ECDc",
        Language: "Ng\xF4n Ng\u1EEF",
        "Accessibility widget": "M\u1EDF Menu Tr\u1EE3 N\u0103ng",
        "Accessibility Profiles": "H\u1ED3 S\u01A1 Tr\u1EE3 N\u0103ng",
        "Cognitive Disability": "Khuy\u1EBFt T\u1EADt Nh\u1EADn Th\u1EE9c",
        "Seizure Safe": "An To\xE0n Cho \u0110\u1ED9ng Kinh",
        "Accessibility statement": "Tuy\xEAn B\u1ED1 Tr\u1EE3 N\u0103ng"
      };
    }
  });

  // src/locales/zh.json
  var require_zh = __commonJS({
    "src/locales/zh.json"(exports, module) {
      module.exports = {
        "Accessibility menu": "\u65E0\u969C\u788D\u83DC\u5355",
        "Reset settings": "\u91CD\u7F6E\u8BBE\u7F6E",
        Close: "\u5173\u95ED",
        "Content adjustments": "\u5185\u5BB9\u8C03\u6574",
        "Navigation adjustments": "\u5BFC\u822A\u8C03\u6574",
        "Align Left": "\u5DE6\u5BF9\u9F50",
        "Adjust Font Size": "\u8C03\u6574\u5B57\u4F53\u5927\u5C0F",
        "Highlight Title": "\u7A81\u51FA\u663E\u793A\u6807\u9898",
        "Highlight Links": "\u7A81\u51FA\u663E\u793A\u94FE\u63A5",
        "Readable Font": "\u6613\u8BFB\u5B57\u4F53",
        "Colour adjustments": "\u989C\u8272\u8C03\u6574",
        "Dark Contrast": "\u6DF1\u8272\u5BF9\u6BD4\u5EA6",
        "Light Contrast": "\u6D45\u8272\u5BF9\u6BD4\u5EA6",
        "High Contrast": "\u9AD8\u5BF9\u6BD4\u5EA6",
        "High Saturation": "\u9AD8\u9971\u548C\u5EA6",
        "Low Saturation": "\u4F4E\u9971\u548C\u5EA6",
        Monochrome: "\u5355\u8272",
        Tools: "\u5DE5\u5177",
        "Reading Guide": "\u9605\u8BFB\u6307\u5357",
        "Stop Animations": "\u505C\u6B62\u52A8\u753B",
        "Big Cursor": "\u5927\u5149\u6807",
        "Increase Font Size": "\u589E\u5927\u5B57\u4F53",
        "Decrease Font Size": "\u51CF\u5C0F\u5B57\u4F53",
        "Letter Spacing": "\u5B57\u95F4\u8DDD",
        "Line Height": "\u884C\u9AD8",
        "Font Weight": "\u5B57\u4F53\u7C97\u7EC6",
        "Dyslexia Font": "\u9605\u8BFB\u969C\u788D\u5B57\u4F53",
        Language: "\u8BED\u8A00",
        "Accessibility widget": "\u6253\u5F00\u65E0\u969C\u788D\u83DC\u5355",
        "Accessibility Profiles": "\u65E0\u969C\u788D\u914D\u7F6E\u6587\u4EF6",
        "Cognitive Disability": "\u8BA4\u77E5\u969C\u788D",
        "Seizure Safe": "\u766B\u75EB\u5B89\u5168",
        "Accessibility statement": "\u65E0\u969C\u788D\u58F0\u660E"
      };
    }
  });

  // src/utils/cookies.ts
  function getCookie(cookieName) {
    const name = `${cookieName}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) == " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }
  function setCookie(cookieName, cookieValue, expirationDays) {
    const date = /* @__PURE__ */ new Date();
    if (expirationDays) {
      date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1e3);
    }
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
  }

  // src/storage.ts
  function saveStorageData(key, value) {
    const jsonValue = JSON.stringify(value);
    try {
      localStorage.setItem(key, jsonValue);
    } catch (error) {
      console.warn("localStorage not available, falling back to cookies:", error);
      setCookie(key, jsonValue);
    }
  }
  function getStorageData(key) {
    let data = null;
    try {
      data = localStorage.getItem(key);
    } catch (error) {
      console.warn("localStorage not available, falling back to cookies:", error);
      data = getCookie(key);
    }
    try {
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error("Failed to parse stored data:", error);
      return {};
    }
  }

  // src/globals/userSettings.ts
  var DEFAULT_USER_SETTINGS = {
    lang: void 0,
    position: void 0,
    states: {}
  };
  var userSettings = { ...DEFAULT_USER_SETTINGS };
  var STORAGE_KEY = "cya11y-user-settings";
  function saveUserSettings() {
    try {
      saveStorageData(STORAGE_KEY, userSettings);
    } catch (error) {
      console.error("Failed to save user settings:", error);
    }
  }
  function getSavedUserSettings() {
    try {
      const savedSettings = getStorageData(STORAGE_KEY);
      if (savedSettings && typeof savedSettings === "object") {
        return {
          ...DEFAULT_USER_SETTINGS,
          ...savedSettings,
          states: {
            ...DEFAULT_USER_SETTINGS.states,
            ...savedSettings.states
          }
        };
      }
    } catch (error) {
      console.error("Failed to load saved user settings:", error);
    }
    return { ...DEFAULT_USER_SETTINGS };
  }

  // src/enum/Selectors.ts
  var ICON_SELECTOR = [
    "material-icons",
    // Google Material Icons
    "fa",
    // Font Awesome (general)
    "fa-solid",
    // Font Awesome solid icons
    "fa-regular",
    // Font Awesome regular icons
    "fa-brands",
    // Font Awesome brand icons
    "glyphicon",
    // Bootstrap Glyphicons
    "icon",
    // Common class for older icon sets
    "mdi",
    // Material Design Icons
    "ion",
    // Ionicons
    "svg-icon",
    // Custom SVG icons
    "iconfont",
    // Icon fonts from other libraries
    "emoji-icon",
    // Emoji icon class
    "bi",
    // Bootstrap Icons
    "octicon",
    // GitHub Octicons
    "feather",
    // Feather Icons
    "heroicon",
    // Heroicons
    "bx",
    // Boxicons
    "ri"
    // Remix Icon
  ];
  var NOT_ICON_SELECTORS = `*:not(${ICON_SELECTOR.map((s) => `.${s}`).join(",")})`;
  var ALL_ELEMENT_SELECTORS = ["", NOT_ICON_SELECTORS];
  var LINKS_SELECTORS = ["a[href]"];
  var HEADER_SELECTORS = ["h1", "h2", "h3", "h4", "h5", "h6"];
  var TEXT_SELECTORS = [
    ...HEADER_SELECTORS,
    "img",
    "p",
    "i",
    "a",
    "button:not(.cya11y-btn)",
    "label",
    "li",
    "ol"
  ];
  var DARK_CONTRAST_SELECTORS = [
    ...TEXT_SELECTORS,
    "div",
    "span",
    "p",
    "a",
    "button",
    "input",
    "textarea",
    "select",
    "label",
    "li",
    "ol",
    "img",
    "i",
    "section",
    "body",
    "header",
    "footer"
  ];

  // src/tools/adjustFontSize.ts
  var FONT_SIZE_SELECTOR = "h1,h2,h3,h4,h5,h6,p,a,dl,dt,li,ol,th,td,span,blockquote,.cya11y-text,div,button";
  var ICON_SELECTOR_SET = new Set(ICON_SELECTOR);
  var ORIGINAL_FONT_SIZE_ATTR = "cya11yOrgFontSize";
  function adjustFontSize(multiply = 1) {
    try {
      if (typeof multiply !== "number" || multiply <= 0) {
        console.warn("Invalid font size multiplier:", multiply);
        return;
      }
      const elements = document.querySelectorAll(FONT_SIZE_SELECTOR);
      elements.forEach((element) => {
        try {
          if (Array.from(element.classList).some((cls) => ICON_SELECTOR_SET.has(cls))) {
            return;
          }
          let originalFontSize = Number(element.dataset[ORIGINAL_FONT_SIZE_ATTR]) || parseInt(window.getComputedStyle(element).fontSize);
          if (isNaN(originalFontSize) || originalFontSize <= 0) {
            console.warn("Invalid original font size for element:", element);
            return;
          }
          if (!element.dataset[ORIGINAL_FONT_SIZE_ATTR]) {
            element.dataset[ORIGINAL_FONT_SIZE_ATTR] = String(originalFontSize);
          }
          const newFontSize = originalFontSize * multiply;
          element.style.fontSize = `${newFontSize.toFixed(0)}px`;
        } catch (elementError) {
          console.warn("Failed to adjust font size for element:", element, elementError);
        }
      });
    } catch (error) {
      console.error("Failed to adjust font size:", error);
    }
  }

  // src/utils/addStylesheet.ts
  function addStylesheet({
    id,
    css
  }) {
    try {
      if (!css || typeof css !== "string") {
        console.warn("Invalid CSS provided to addStylesheet");
        return;
      }
      if (!id || typeof id !== "string") {
        console.warn("Invalid ID provided to addStylesheet");
        return;
      }
      let styleElement = document.getElementById(id);
      if (!styleElement) {
        styleElement = document.createElement("style");
        styleElement.id = id;
        document.head.appendChild(styleElement);
      }
      styleElement.innerHTML = css;
    } catch (error) {
      console.error("Failed to add stylesheet:", error);
    }
  }

  // src/utils/cssGenerator.ts
  var BROWSER_PREFIXES = ["-o-", "-ms-", "-moz-", "-webkit-", ""];
  var PROPERTIES_NEEDING_PREFIX = ["filter"];
  function generateCSS(styles) {
    if (!styles || typeof styles !== "object") {
      return "";
    }
    let css = "";
    for (const [property, value] of Object.entries(styles)) {
      const prefixes = PROPERTIES_NEEDING_PREFIX.includes(property) ? BROWSER_PREFIXES : [""];
      prefixes.forEach((prefix) => {
        css += `${prefix}${property}:${value} !important;`;
      });
    }
    return css;
  }
  function wrapCSSToSelector({
    selector,
    childrenSelector = [""],
    css
  }) {
    if (!selector || !css) {
      return "";
    }
    let output = "";
    childrenSelector.forEach((childSelector) => {
      output += `${selector} ${childSelector}{${css}}`;
    });
    return output;
  }
  function generateCSSFromConfig(config) {
    if (!config) {
      return "";
    }
    let output = "";
    output += generateCSS(config.styles || {});
    if (output.length && config.selector) {
      output = wrapCSSToSelector({
        selector: config.selector,
        childrenSelector: config.childrenSelector,
        css: output
      });
    }
    if (config.css) {
      output += config.css;
    }
    return output;
  }
  function injectToolCSS(config) {
    if (!config) {
      console.warn("No configuration provided to injectToolCSS");
      return;
    }
    const { id = "", enable = false } = config;
    const toolId = `cya11y-${id}`;
    if (enable) {
      try {
        const css = generateCSSFromConfig(config);
        if (css) {
          addStylesheet({
            css,
            id: toolId
          });
        }
      } catch (error) {
        console.error(`Failed to inject CSS for tool ${id}:`, error);
      }
    } else {
      const existingStylesheet = document.getElementById(toolId);
      if (existingStylesheet) {
        existingStylesheet.remove();
      }
    }
    document.documentElement.classList.toggle(toolId, enable);
  }

  // src/tools/stopAnimations.ts
  var stopAnimationsConfig = {
    id: "stop-animations",
    selector: `html`,
    childrenSelector: ["*"],
    styles: {
      "transition": "none",
      "animation-fill-mode": "forwards",
      "animation-iteration-count": "1",
      "animation-duration": ".01s"
    }
  };
  function stopAnimations(enable = false) {
    injectToolCSS({
      ...stopAnimationsConfig,
      enable
    });
  }

  // src/tools/readableFont.ts
  var readableFontConfig = {
    id: "readable-font",
    selector: `html`,
    childrenSelector: [...ALL_ELEMENT_SELECTORS, ...TEXT_SELECTORS],
    styles: {
      "font-family": "OpenDyslexic3,Comic Sans MS,Arial,Helvetica,sans-serif"
    },
    css: `@font-face {font-family: OpenDyslexic3;src: url("https://website-widgets.pages.dev/fonts/OpenDyslexic3-Regular.woff") format("woff"), url("https://website-widgets.pages.dev/fonts/OpenDyslexic3-Regular.ttf") format("truetype");}`
  };
  function readableFont(enable = false) {
    injectToolCSS({
      ...readableFontConfig,
      enable
    });
  }

  // src/tools/bigCursor.ts
  var bigCursorConfig = {
    id: "big-cursor",
    selector: `body`,
    childrenSelector: ["*"],
    styles: {
      "cursor": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='98px' height='98px' viewBox='0 0 48 48'%3E%3Cpath fill='%23E0E0E0' d='M27.8 39.7c-.1 0-.2 0-.4-.1s-.4-.3-.6-.5l-3.7-8.6-4.5 4.2c-.1.2-.3.3-.6.3-.1 0-.3 0-.4-.1-.3-.1-.6-.5-.6-.9V12c0-.4.2-.8.6-.9.1-.1.3-.1.4-.1.2 0 .5.1.7.3l16 15c.3.3.4.7.3 1.1-.1.4-.5.6-.9.7l-6.3.6 3.9 8.5c.1.2.1.5 0 .8-.1.2-.3.5-.5.6l-2.9 1.3c-.2-.2-.4-.2-.5-.2z'/%3E%3Cpath fill='%23212121' d='m18 12 16 15-7.7.7 4.5 9.8-2.9 1.3-4.3-9.9L18 34V12m0-2c-.3 0-.5.1-.8.2-.7.3-1.2 1-1.2 1.8v22c0 .8.5 1.5 1.2 1.8.3.2.6.2.8.2.5 0 1-.2 1.4-.5l3.4-3.2 3.1 7.3c.2.5.6.9 1.1 1.1.2.1.5.1.7.1.3 0 .5-.1.8-.2l2.9-1.3c.5-.2.9-.6 1.1-1.1.2-.5.2-1.1 0-1.5l-3.3-7.2 4.9-.4c.8-.1 1.5-.6 1.7-1.3.3-.7.1-1.6-.5-2.1l-16-15c-.3-.5-.8-.7-1.3-.7z'/%3E%3C/svg%3E") 40 15, auto`
    }
  };
  function bigCursor(enable = false) {
    injectToolCSS({
      ...bigCursorConfig,
      enable
    });
  }

  // src/tools/highlightTitle.ts
  var highlightTitleConfig = {
    id: "highlight-title",
    selector: `html`,
    childrenSelector: HEADER_SELECTORS,
    styles: {
      "outline": "2px solid #0048ff",
      "outline-offset": "2px"
    }
  };
  function highlightTitle(enable = false) {
    injectToolCSS({
      ...highlightTitleConfig,
      enable
    });
  }

  // src/tools/readingGuide.html
  var readingGuide_default = '<div class="cya11y-rg cya11y-rg-top"></div><div class="cya11y-rg cya11y-rg-bottom" style=top:auto;bottom:0></div>';

  // src/tools/readingGuide.css
  var readingGuide_default2 = ".cya11y-rg{position:fixed;top:0;left:0;right:0;width:100%;height:0;pointer-events:none;background-color:#000c;z-index:1000000}\n";

  // src/tools/readingGuide.ts
  function readingGuide(enable = false) {
    let guide = document.querySelector(".cya11y-rg-container");
    if (enable) {
      if (!guide) {
        guide = document.createElement("div");
        guide.classList.add("cya11y-rg-container");
        guide.innerHTML = `<style>${readingGuide_default2}</style>${readingGuide_default}`;
        const rgTop = guide.querySelector(".cya11y-rg-top");
        const rgBottom = guide.querySelector(".cya11y-rg-bottom");
        const margin = 20;
        window.__cya11y__onScrollReadableGuide = (event) => {
          rgTop.style.height = `${event.clientY - margin}px`;
          rgBottom.style.height = `${window.innerHeight - event.clientY - margin * 5}px`;
        };
        document.addEventListener("mousemove", window.__cya11y__onScrollReadableGuide, { passive: false });
        document.body.appendChild(guide);
      }
    } else {
      guide?.remove();
      if (window.__cya11y__onScrollReadableGuide) {
        document.removeEventListener("mousemove", window.__cya11y__onScrollReadableGuide);
        delete window.__cya11y__onScrollReadableGuide;
      }
    }
  }

  // src/tools/highlightLinks.ts
  var highlightLinksConfig = {
    id: "highlight-links",
    selector: `html`,
    childrenSelector: LINKS_SELECTORS,
    styles: {
      "outline": "2px solid #0048ff",
      "outline-offset": "2px"
    }
  };
  function highlightLinks(enable = false) {
    injectToolCSS({
      ...highlightLinksConfig,
      enable
    });
  }

  // src/tools/adjustLetterSpacing.ts
  var adjustLetterSpacingConfig = {
    id: "letter-spacing",
    selector: `html`,
    childrenSelector: ALL_ELEMENT_SELECTORS,
    styles: {
      "letter-spacing": "2px"
    }
  };
  function adjustLetterSpacing(enable = false) {
    injectToolCSS({
      ...adjustLetterSpacingConfig,
      enable
    });
  }

  // src/tools/adjustLineHeight.ts
  var adjustLineHeightConfig = {
    id: "line-height",
    selector: `html`,
    childrenSelector: ALL_ELEMENT_SELECTORS,
    styles: {
      "line-height": "3"
    }
  };
  function adjustLineHeight(enable = false) {
    injectToolCSS({
      ...adjustLineHeightConfig,
      enable
    });
  }

  // src/tools/adjustFontWeight.ts
  var adjustFontWeightConfig = {
    id: "font-weight",
    selector: `html`,
    childrenSelector: ALL_ELEMENT_SELECTORS,
    styles: {
      "font-weight": "700"
    }
  };
  function adjustFontWeight(enable = false) {
    injectToolCSS({
      ...adjustFontWeightConfig,
      enable
    });
  }

  // src/tools/alignLeft.ts
  var alignLeftConfig = {
    id: "align-left",
    selector: `html`,
    childrenSelector: TEXT_SELECTORS,
    styles: {
      "text-align": "left"
    }
  };
  function alignLeft(enable = false) {
    injectToolCSS({
      ...alignLeftConfig,
      enable
    });
  }

  // src/views/menu/renderTools.ts
  function renderTools() {
    const states = userSettings?.states;
    highlightTitle(states["highlight-title"]);
    highlightLinks(states["highlight-links"]);
    const fontSize = Number(states?.fontSize) || 1;
    adjustFontSize(fontSize);
    adjustLetterSpacing(states["letter-spacing"]);
    adjustLineHeight(states["line-height"]);
    adjustFontWeight(states["font-weight"]);
    readableFont(states["readable-font"]);
    readingGuide(states["readable-guide"]);
    stopAnimations(states["stop-animations"]);
    bigCursor(states["big-cursor"]);
    alignLeft(states["align-left"]);
  }

  // src/enum/Filters.ts
  var FILTERS = {
    "dark-contrast": {
      styles: {
        "color": "#FFF",
        "fill": "#FFF",
        "background-color": "#181818"
      },
      childrenSelector: DARK_CONTRAST_SELECTORS
    },
    "light-contrast": {
      styles: {
        "color": "#000",
        "fill": "#000",
        "background-color": "#FFF"
      },
      childrenSelector: TEXT_SELECTORS
    },
    "high-contrast": {
      styles: {
        "filter": "contrast(125%)"
      }
    },
    "high-saturation": {
      styles: {
        "filter": "saturate(200%)"
      }
    },
    "low-saturation": {
      styles: {
        "filter": "saturate(50%)"
      }
    },
    "monochrome": {
      styles: {
        "filter": "grayscale(100%)"
      }
    }
  };

  // src/tools/enableContrast.ts
  function enableContrast(contrast) {
    const filter = FILTERS[contrast];
    if (!filter) {
      document.getElementById("cya11y-filter-style")?.remove();
      document.documentElement.classList.remove("cya11y-filter");
      return;
    }
    const css = generateCSSFromConfig({
      ...filter,
      selector: "html.cya11y-filter"
    });
    addStylesheet({ css, id: "cya11y-filter-style" });
    document.documentElement.classList.add("cya11y-filter");
  }

  // src/views/menu/runAccessibility.ts
  function runAccessibility() {
    adjustFontSize(userSettings?.fontSize);
    renderTools();
    enableContrast(userSettings?.states?.contrast);
  }

  // src/views/widget/widget.css
  var widget_default = '.cya11y-widget,.cya11y-menu{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:400;-webkit-font-smoothing:antialiased}.cya11y-widget *,.cya11y-menu *{box-sizing:border-box!important}.cya11y-sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.cya11y-menu-title-container{display:flex;align-items:center;gap:5px}.cya11y-tooltip{position:absolute;background:#000000e6;color:#fff;padding:8px 10px;border-radius:6px;font-size:12px;font-weight:500;white-space:nowrap;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease;z-index:500001;max-width:200px;text-align:center;box-shadow:0 2px 8px #0000004d}.cya11y-tooltip:before{content:"";position:absolute;width:0;height:0;border:6px solid transparent}.cya11y-widget[data-position=bottom-right] .cya11y-tooltip{top:50%;right:calc(100% + 10px);transform:translateY(-50%)}.cya11y-widget[data-position=bottom-right] .cya11y-tooltip:before{top:50%;right:-10px;transform:translateY(-50%);border-left-color:#000000e6}.cya11y-widget[data-position=bottom-left] .cya11y-tooltip{top:50%;left:calc(100% + 10px);transform:translateY(-50%)}.cya11y-widget[data-position=bottom-left] .cya11y-tooltip:before{top:50%;left:-10px;transform:translateY(-50%);border-right-color:#000000e6}.cya11y-widget[data-position=top-right] .cya11y-tooltip{top:50%;right:calc(100% + 10px);transform:translateY(-50%)}.cya11y-widget[data-position=top-right] .cya11y-tooltip:before{top:50%;right:-10px;transform:translateY(-50%);border-left-color:#000000e6}.cya11y-widget[data-position=top-left] .cya11y-tooltip{top:50%;left:calc(100% + 10px);transform:translateY(-50%)}.cya11y-widget[data-position=top-left] .cya11y-tooltip:before{top:50%;left:-10px;transform:translateY(-50%);border-right-color:#000000e6}.cya11y-widget:hover .cya11y-tooltip,.cya11y-widget:focus-within .cya11y-tooltip{opacity:1;visibility:visible}.cya11y-menu-btn{position:fixed;z-index:500000;right:30px;bottom:30px;box-shadow:0 5px 15px #252c6126,0 2px 4px #5d649433;transition:transform .2s ease,box-shadow .2s ease;border-radius:50%;align-items:center;justify-content:center;width:var(--cya11y-size, 44px);height:var(--cya11y-size, 44px);display:flex;cursor:pointer;text-decoration:none!important;background:var(--cya11y-primary-color, #1863DC);border:2px solid white!important;outline:none;color:#fff;outline:5px solid var(--cya11y-primary-color, #1863DC)}.cya11y-menu-btn:focus{box-shadow:0 5px 15px #252c6140,0 2px 4px #5d64944d}.cya11y-menu-btn svg{width:80%;max-width:80%;background:transparent!important}.cya11y-menu-btn:hover{transform:scale(1.05);box-shadow:0 6px 20px #252c6133,0 3px 6px #5d649440}.cya11y-menu-btn:active{transform:scale(.98)}.cya11y-widget-icon{width:var(--cya11y-size, 44px);height:var(--cya11y-size, 44px);position:fixed;z-index:500000}@media (prefers-contrast: high){.cya11y-menu-btn{border:3px solid white!important;box-shadow:0 0 0 2px #000,0 5px 15px #252c614d}.cya11y-menu-btn:focus{outline:4px solid white;outline-offset:1px}.cya11y-tooltip{background:#000;border:2px solid white}}@media (prefers-reduced-motion: reduce){.cya11y-menu-btn,.cya11y-tooltip{transition:none}.cya11y-menu-btn:hover{transform:none}}@media only screen and (max-width: 768px){.cya11y-menu-btn{width:42px;height:42px}.cya11y-menu-btn svg{width:26px;height:26px;min-height:26px;min-width:26px;max-width:26px;max-height:26px}.cya11y-tooltip{font-size:12px;padding:6px 10px}}\n';

  // src/views/menu/menu.html
  var menu_default = '<div aria-labelledby=cya11y-menu-title aria-modal=true class=cya11y-menu id=cya11y-accessibility-menu role=dialog><div aria-atomic=true aria-live=polite class=cya11y-sr-only id=cya11y-menu-announcements></div><header class=cya11y-menu-header><div class=cya11y-menu-title-container><div aria-hidden=true class=cya11y-menu-title-icon><svg viewbox="0 0 28 28" fill=none height=28 width=28 xmlns=http://www.w3.org/2000/svg><path d="M14.1009 19.5167L14.0943 19.5102L14.064 19.5405L14.0705 19.547L14.1009 19.5167Z" fill=white /><path d="M13.957 7.7588C16.0735 7.7588 17.7899 6.04796 17.7899 3.93836V3.82044C17.7899 1.71084 16.0735 0 13.957 0C11.8406 0 10.1241 1.71084 10.1241 3.82044V3.93836C10.1241 6.04796 11.8406 7.7588 13.957 7.7588Z" fill=white /><path d="M2.65871 24.1362C2.19047 24.6548 2.23269 25.4551 2.7529 25.9216L4.7109 27.6775C5.22857 28.1417 6.02418 28.0998 6.49023 27.5837L13.3518 19.9865L9.54467 16.5091L2.65871 24.1362Z" fill=white /><path d="M25.5243 8.37116C26.0208 7.88495 26.0308 7.08893 25.5468 6.59033L23.715 4.70324C23.2281 4.20155 22.426 4.19133 21.9264 4.68046L13.9283 12.5108L9.55938 8.35834C9.05541 7.87934 8.25896 7.89812 7.77814 8.40036L5.98803 10.2702C5.5013 10.7786 5.52445 11.5869 6.03948 12.0666L14.0638 19.5407L14.0939 19.5107L14.1003 19.5171L17.0213 16.6164L14.4595 19.9438L20.8258 27.4911C21.2742 28.0228 22.0683 28.0914 22.6014 27.6445L24.618 25.954C25.1534 25.5052 25.2223 24.7068 24.7719 24.1729L17.8128 15.9239L25.5243 8.37116Z" fill=white /></svg></div><h2 class="cya11y-menu-title cya11y-translate" id=cya11y-menu-title>Accessibility menu</h2></div><div class=cya11y-menu-actions style=gap:15px><button aria-label="Reset all accessibility settings to default" title="Reset settings" class=cya11y-menu-reset role=button><svg viewbox="0 0 24 24" aria-hidden=true fill=none height=24 width=24 xmlns=http://www.w3.org/2000/svg><path d="M3.06006 13C3.30547 15.1939 4.34865 17.221 5.9912 18.696C7.63374 20.1709 9.76108 20.9907 11.9686 20.9994C14.1762 21.0081 16.3099 20.2052 17.9641 18.7434C19.6183 17.2815 20.6775 15.2627 20.9403 13.0708C21.2031 10.879 20.6511 8.66696 19.3894 6.85551C18.1276 5.04406 16.2441 3.75951 14.0971 3.24618C11.95 2.73284 9.68922 3.02652 7.74457 4.07135C5.79993 5.11619 4.30712 6.83931 3.55006 8.913" fill=none stroke=#FFFFFF stroke-linecap=round stroke-linejoin=round stroke-width=2 /><path d="M3 4.00098V9.00098H8" fill=none stroke=#FFFFFF stroke-linecap=round stroke-linejoin=round stroke-width=2 /></svg> <span class=cya11y-sr-only>Reset settings</span></button><button aria-label="Close accessibility menu" title="Close accessibility menu" class=cya11y-menu-close role=button><svg viewbox="0 0 14 14" aria-hidden=true fill=none height=14 width=14 xmlns=http://www.w3.org/2000/svg><path d="M13 1L1 13M1 1L13 13" stroke=#FFFFFF stroke-linecap=round stroke-linejoin=round stroke-width=2 /></svg> <span class=cya11y-sr-only>Close</span></button></div></header><main class=cya11y-menu-content><section aria-labelledby=cya11y-language-section class=cya11y-card><h2 class=cya11y-sr-only id=cya11y-language-section>Language Selection</h2><div id=cya11y-language-dropdown></div></section><section class="cya11y-card cya11y-profile-card" aria-labelledby=cya11y-profile-section><div class=cya11y-profile-title-container><div aria-hidden=true><svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill=#E9EAEC /><path d="M7 16C7 17.1819 7.23279 18.3522 7.68508 19.4442C8.13738 20.5361 8.80031 21.5282 9.63604 22.364C10.4718 23.1997 11.4639 23.8626 12.5558 24.3149C13.6478 24.7672 14.8181 25 16 25C17.1819 25 18.3522 24.7672 19.4442 24.3149C20.5361 23.8626 21.5282 23.1997 22.364 22.364C23.1997 21.5282 23.8626 20.5361 24.3149 19.4442C24.7672 18.3522 25 17.1819 25 16C25 14.8181 24.7672 13.6478 24.3149 12.5558C23.8626 11.4639 23.1997 10.4718 22.364 9.63604C21.5282 8.80031 20.5361 8.13738 19.4442 7.68508C18.3522 7.23279 17.1819 7 16 7C14.8181 7 13.6478 7.23279 12.5558 7.68508C11.4639 8.13738 10.4718 8.80031 9.63604 9.63604C8.80031 10.4718 8.13738 11.4639 7.68508 12.5558C7.23279 13.6478 7 14.8181 7 16Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M14 20.5L16 17.5M16 17.5L18 20.5M16 17.5V15.5M16 15.5L19 14.5M16 15.5L13 14.5" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M16 12C16.2761 12 16.5 11.7761 16.5 11.5C16.5 11.2239 16.2761 11 16 11C15.7239 11 15.5 11.2239 15.5 11.5C15.5 11.7761 15.7239 12 16 12Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg></div><button class="cya11y-card-title cya11y-profile-title" aria-controls=cya11y-profile-items aria-expanded=false id=cya11y-profile-section role=button>Accessibility Profiles</button><div aria-hidden=true class=cya11y-arrow><svg viewbox="0 0 24 24" fill=none height=24 width=24 xmlns=http://www.w3.org/2000/svg><path d="M18 9L12 15L6 9" stroke=black stroke-linecap=round stroke-linejoin=round stroke-width=2 /></svg></div></div><div class="cya11y-profile-items profiles" aria-labelledby=cya11y-profile-section id=cya11y-profile-items role=region></div></section><section aria-labelledby=cya11y-content-section class=cya11y-card><h2 class=cya11y-card-title id=cya11y-content-section>Content adjustments</h2><div class="cya11y-items content" aria-labelledby=cya11y-content-section role=group></div></section><section aria-labelledby=cya11y-color-section class=cya11y-card><h2 class=cya11y-card-title id=cya11y-color-section>Colour adjustments</h2><div class="cya11y-items contrast" aria-labelledby=cya11y-color-section role=group></div></section><section aria-labelledby=cya11y-navigation-section class=cya11y-card><h2 class=cya11y-card-title id=cya11y-navigation-section>Navigation adjustments</h2><div class="cya11y-items tools" aria-labelledby=cya11y-navigation-section role=group></div></section><section class=cya11y-card><div class=cya11y-menu-reset-footer><button aria-label="Reset all accessibility settings to default" class="cya11y-menu-reset cya11y-menu-reset-footer-btn cya11y-translate" title="Reset settings" type=button>Reset settings</button><a aria-label="View accessibility statement (opens in new window)" class="cya11y-menu-reset-footer-link cya11y-translate cya11y-accessibility-statement-link" rel="noopener noreferrer" href=# target=_blank> Accessibility statement </a></div></section></main><footer class=cya11y-footer><div style="text-align:right;color:#293c5b;direction:ltr;border-radius:0 0 6px 6px;justify-content:center;align-items:center;font-size:12px;font-weight:400;line-height:20px;display:flex">Powered by <a aria-label="Visit CookieYes website (opens in new window)" href="https://www.cookieyes.com/product/accessibility-widget/?ref=cypbcyaw&utm_source=accessibility-widget&utm_medium=powered-by-cookieyes" rel=noopener style=margin-left:5px;line-height:0 target=_blank> <svg viewbox="0 0 427 50" fill=none height=23 width=200 xmlns=http://www.w3.org/2000/svg><path d="M19.7261 14.4084C23.3179 14.4084 26.2308 11.505 26.2308 7.92486V7.72475C26.2308 4.14462 23.3179 1.24122 19.7261 1.24122C16.1343 1.24122 13.2214 4.14462 13.2214 7.72475V7.92486C13.2214 11.505 16.1343 14.4084 19.7261 14.4084Z" fill=black /><path d="M0.552115 42.2015C-0.242515 43.0816 -0.170862 44.4399 0.71196 45.2316L4.03481 48.2113C4.91333 48.9991 6.26354 48.928 7.05445 48.0523L18.6989 35.1593L12.238 29.2579L0.552115 42.2015Z" fill=#1863DC /><path d="M39.3569 15.4473C40.1994 14.6222 40.2164 13.2713 39.3951 12.4251L36.2864 9.22259C35.46 8.37119 34.0989 8.35385 33.251 9.18393L19.6776 22.4726L12.2633 15.4255C11.4081 14.6126 10.0565 14.6445 9.24047 15.4968L6.20254 18.67C5.37652 19.5329 5.41581 20.9046 6.28985 21.7187L19.9076 34.4027L19.9587 34.3518L19.9697 34.3627L24.9266 29.44L20.5792 35.0867L31.3831 47.895C32.1442 48.7973 33.4919 48.9138 34.3965 48.1555L37.8188 45.2865C38.7274 44.5248 38.8444 43.17 38.0799 42.2638L26.2699 28.2648L39.3569 15.4473Z" fill=#1863DC /><path d="M61.928 22.808H55.256L54.152 26H50.624L56.648 9.224H60.56L66.584 26H63.032L61.928 22.808ZM61.016 20.12L58.592 13.112L56.168 20.12H61.016ZM67.7217 19.352C67.7217 17.976 68.0017 16.776 68.5617 15.752C69.1217 14.712 69.8977 13.912 70.8897 13.352C71.8817 12.776 73.0177 12.488 74.2977 12.488C75.9457 12.488 77.3057 12.904 78.3777 13.736C79.4657 14.552 80.1937 15.704 80.5617 17.192H76.9377C76.7457 16.616 76.4177 16.168 75.9537 15.848C75.5057 15.512 74.9457 15.344 74.2737 15.344C73.3137 15.344 72.5537 15.696 71.9937 16.4C71.4337 17.088 71.1537 18.072 71.1537 19.352C71.1537 20.616 71.4337 21.6 71.9937 22.304C72.5537 22.992 73.3137 23.336 74.2737 23.336C75.6337 23.336 76.5217 22.728 76.9377 21.512H80.5617C80.1937 22.952 79.4657 24.096 78.3777 24.944C77.2897 25.792 75.9297 26.216 74.2977 26.216C73.0177 26.216 71.8817 25.936 70.8897 25.376C69.8977 24.8 69.1217 24 68.5617 22.976C68.0017 21.936 67.7217 20.728 67.7217 19.352ZM81.9092 19.352C81.9092 17.976 82.1892 16.776 82.7492 15.752C83.3092 14.712 84.0852 13.912 85.0772 13.352C86.0692 12.776 87.2052 12.488 88.4852 12.488C90.1332 12.488 91.4932 12.904 92.5652 13.736C93.6532 14.552 94.3812 15.704 94.7492 17.192H91.1252C90.9332 16.616 90.6052 16.168 90.1412 15.848C89.6932 15.512 89.1332 15.344 88.4612 15.344C87.5012 15.344 86.7412 15.696 86.1812 16.4C85.6212 17.088 85.3412 18.072 85.3412 19.352C85.3412 20.616 85.6212 21.6 86.1812 22.304C86.7412 22.992 87.5012 23.336 88.4612 23.336C89.8212 23.336 90.7092 22.728 91.1252 21.512H94.7492C94.3812 22.952 93.6532 24.096 92.5652 24.944C91.4772 25.792 90.1172 26.216 88.4852 26.216C87.2052 26.216 86.0692 25.936 85.0772 25.376C84.0852 24.8 83.3092 24 82.7492 22.976C82.1892 21.936 81.9092 20.728 81.9092 19.352ZM109.321 19.064C109.321 19.544 109.289 19.976 109.225 20.36H99.5047C99.5847 21.32 99.9207 22.072 100.513 22.616C101.105 23.16 101.833 23.432 102.697 23.432C103.945 23.432 104.833 22.896 105.361 21.824H108.985C108.601 23.104 107.865 24.16 106.777 24.992C105.689 25.808 104.353 26.216 102.769 26.216C101.489 26.216 100.337 25.936 99.3127 25.376C98.3047 24.8 97.5127 23.992 96.9367 22.952C96.3767 21.912 96.0967 20.712 96.0967 19.352C96.0967 17.976 96.3767 16.768 96.9367 15.728C97.4967 14.688 98.2807 13.888 99.2887 13.328C100.297 12.768 101.457 12.488 102.769 12.488C104.033 12.488 105.161 12.76 106.153 13.304C107.161 13.848 107.937 14.624 108.481 15.632C109.041 16.624 109.321 17.768 109.321 19.064ZM105.841 18.104C105.825 17.24 105.513 16.552 104.905 16.04C104.297 15.512 103.553 15.248 102.673 15.248C101.841 15.248 101.137 15.504 100.561 16.016C100.001 16.512 99.6567 17.208 99.5287 18.104H105.841ZM116.611 26.216C115.523 26.216 114.547 26.024 113.683 25.64C112.819 25.24 112.131 24.704 111.619 24.032C111.123 23.36 110.851 22.616 110.803 21.8H114.187C114.251 22.312 114.499 22.736 114.931 23.072C115.379 23.408 115.931 23.576 116.587 23.576C117.227 23.576 117.723 23.448 118.075 23.192C118.443 22.936 118.627 22.608 118.627 22.208C118.627 21.776 118.403 21.456 117.955 21.248C117.523 21.024 116.827 20.784 115.867 20.528C114.875 20.288 114.059 20.04 113.419 19.784C112.795 19.528 112.251 19.136 111.787 18.608C111.339 18.08 111.115 17.368 111.115 16.472C111.115 15.736 111.323 15.064 111.739 14.456C112.171 13.848 112.779 13.368 113.563 13.016C114.363 12.664 115.299 12.488 116.371 12.488C117.955 12.488 119.219 12.888 120.163 13.688C121.107 14.472 121.627 15.536 121.723 16.88H118.507C118.459 16.352 118.235 15.936 117.835 15.632C117.451 15.312 116.931 15.152 116.275 15.152C115.667 15.152 115.195 15.264 114.859 15.488C114.539 15.712 114.379 16.024 114.379 16.424C114.379 16.872 114.603 17.216 115.051 17.456C115.499 17.68 116.195 17.912 117.139 18.152C118.099 18.392 118.891 18.64 119.515 18.896C120.139 19.152 120.675 19.552 121.123 20.096C121.587 20.624 121.827 21.328 121.843 22.208C121.843 22.976 121.627 23.664 121.195 24.272C120.779 24.88 120.171 25.36 119.371 25.712C118.587 26.048 117.667 26.216 116.611 26.216ZM129.439 26.216C128.351 26.216 127.375 26.024 126.511 25.64C125.647 25.24 124.959 24.704 124.447 24.032C123.951 23.36 123.679 22.616 123.631 21.8H127.015C127.079 22.312 127.327 22.736 127.759 23.072C128.207 23.408 128.759 23.576 129.415 23.576C130.055 23.576 130.551 23.448 130.903 23.192C131.271 22.936 131.455 22.608 131.455 22.208C131.455 21.776 131.231 21.456 130.783 21.248C130.351 21.024 129.655 20.784 128.695 20.528C127.703 20.288 126.887 20.04 126.247 19.784C125.623 19.528 125.079 19.136 124.615 18.608C124.167 18.08 123.943 17.368 123.943 16.472C123.943 15.736 124.151 15.064 124.567 14.456C124.999 13.848 125.607 13.368 126.391 13.016C127.191 12.664 128.127 12.488 129.199 12.488C130.783 12.488 132.047 12.888 132.991 13.688C133.935 14.472 134.455 15.536 134.551 16.88H131.335C131.287 16.352 131.063 15.936 130.663 15.632C130.279 15.312 129.759 15.152 129.103 15.152C128.495 15.152 128.023 15.264 127.687 15.488C127.367 15.712 127.207 16.024 127.207 16.424C127.207 16.872 127.431 17.216 127.879 17.456C128.327 17.68 129.023 17.912 129.967 18.152C130.927 18.392 131.719 18.64 132.343 18.896C132.967 19.152 133.503 19.552 133.951 20.096C134.415 20.624 134.655 21.328 134.671 22.208C134.671 22.976 134.455 23.664 134.023 24.272C133.607 24.88 132.999 25.36 132.199 25.712C131.415 26.048 130.495 26.216 129.439 26.216ZM150.499 9.248L144.835 20.168V26H141.475V20.168L135.787 9.248H139.579L143.179 16.904L146.755 9.248H150.499ZM164.547 19.064C164.547 19.544 164.515 19.976 164.451 20.36H154.731C154.811 21.32 155.147 22.072 155.739 22.616C156.331 23.16 157.059 23.432 157.923 23.432C159.171 23.432 160.059 22.896 160.587 21.824H164.211C163.827 23.104 163.091 24.16 162.003 24.992C160.915 25.808 159.579 26.216 157.995 26.216C156.715 26.216 155.563 25.936 154.539 25.376C153.531 24.8 152.739 23.992 152.163 22.952C151.603 21.912 151.323 20.712 151.323 19.352C151.323 17.976 151.603 16.768 152.163 15.728C152.723 14.688 153.507 13.888 154.515 13.328C155.523 12.768 156.683 12.488 157.995 12.488C159.259 12.488 160.387 12.76 161.379 13.304C162.387 13.848 163.163 14.624 163.707 15.632C164.267 16.624 164.547 17.768 164.547 19.064ZM161.067 18.104C161.051 17.24 160.739 16.552 160.131 16.04C159.523 15.512 158.779 15.248 157.899 15.248C157.067 15.248 156.363 15.504 155.787 16.016C155.227 16.512 154.883 17.208 154.755 18.104H161.067ZM171.838 26.216C170.75 26.216 169.774 26.024 168.91 25.64C168.046 25.24 167.358 24.704 166.846 24.032C166.35 23.36 166.078 22.616 166.03 21.8H169.414C169.478 22.312 169.726 22.736 170.158 23.072C170.606 23.408 171.158 23.576 171.814 23.576C172.454 23.576 172.95 23.448 173.302 23.192C173.67 22.936 173.854 22.608 173.854 22.208C173.854 21.776 173.63 21.456 173.182 21.248C172.75 21.024 172.054 20.784 171.094 20.528C170.102 20.288 169.286 20.04 168.646 19.784C168.022 19.528 167.478 19.136 167.014 18.608C166.566 18.08 166.342 17.368 166.342 16.472C166.342 15.736 166.55 15.064 166.966 14.456C167.398 13.848 168.006 13.368 168.79 13.016C169.59 12.664 170.526 12.488 171.598 12.488C173.182 12.488 174.446 12.888 175.39 13.688C176.334 14.472 176.854 15.536 176.95 16.88H173.734C173.686 16.352 173.462 15.936 173.062 15.632C172.678 15.312 172.158 15.152 171.502 15.152C170.894 15.152 170.422 15.264 170.086 15.488C169.766 15.712 169.606 16.024 169.606 16.424C169.606 16.872 169.83 17.216 170.278 17.456C170.726 17.68 171.422 17.912 172.366 18.152C173.326 18.392 174.118 18.64 174.742 18.896C175.366 19.152 175.902 19.552 176.35 20.096C176.814 20.624 177.054 21.328 177.07 22.208C177.07 22.976 176.854 23.664 176.422 24.272C176.006 24.88 175.398 25.36 174.598 25.712C173.814 26.048 172.894 26.216 171.838 26.216ZM195.319 22.808H188.647L187.543 26H184.015L190.039 9.224H193.951L199.975 26H196.423L195.319 22.808ZM194.407 20.12L191.983 13.112L189.559 20.12H194.407ZM201.112 19.352C201.112 17.976 201.392 16.776 201.952 15.752C202.512 14.712 203.288 13.912 204.28 13.352C205.272 12.776 206.408 12.488 207.688 12.488C209.336 12.488 210.696 12.904 211.768 13.736C212.856 14.552 213.584 15.704 213.952 17.192H210.328C210.136 16.616 209.808 16.168 209.344 15.848C208.896 15.512 208.336 15.344 207.664 15.344C206.704 15.344 205.944 15.696 205.384 16.4C204.824 17.088 204.544 18.072 204.544 19.352C204.544 20.616 204.824 21.6 205.384 22.304C205.944 22.992 206.704 23.336 207.664 23.336C209.024 23.336 209.912 22.728 210.328 21.512H213.952C213.584 22.952 212.856 24.096 211.768 24.944C210.68 25.792 209.32 26.216 207.688 26.216C206.408 26.216 205.272 25.936 204.28 25.376C203.288 24.8 202.512 24 201.952 22.976C201.392 21.936 201.112 20.728 201.112 19.352ZM215.3 19.352C215.3 17.976 215.58 16.776 216.14 15.752C216.7 14.712 217.476 13.912 218.468 13.352C219.46 12.776 220.596 12.488 221.876 12.488C223.524 12.488 224.884 12.904 225.956 13.736C227.044 14.552 227.772 15.704 228.14 17.192H224.516C224.324 16.616 223.996 16.168 223.532 15.848C223.084 15.512 222.524 15.344 221.852 15.344C220.892 15.344 220.132 15.696 219.572 16.4C219.012 17.088 218.732 18.072 218.732 19.352C218.732 20.616 219.012 21.6 219.572 22.304C220.132 22.992 220.892 23.336 221.852 23.336C223.212 23.336 224.1 22.728 224.516 21.512H228.14C227.772 22.952 227.044 24.096 225.956 24.944C224.868 25.792 223.508 26.216 221.876 26.216C220.596 26.216 219.46 25.936 218.468 25.376C217.476 24.8 216.7 24 216.14 22.976C215.58 21.936 215.3 20.728 215.3 19.352ZM242.711 19.064C242.711 19.544 242.679 19.976 242.615 20.36H232.895C232.975 21.32 233.311 22.072 233.903 22.616C234.495 23.16 235.223 23.432 236.087 23.432C237.335 23.432 238.223 22.896 238.751 21.824H242.375C241.991 23.104 241.255 24.16 240.167 24.992C239.079 25.808 237.743 26.216 236.159 26.216C234.879 26.216 233.727 25.936 232.703 25.376C231.695 24.8 230.903 23.992 230.327 22.952C229.767 21.912 229.487 20.712 229.487 19.352C229.487 17.976 229.767 16.768 230.327 15.728C230.887 14.688 231.671 13.888 232.679 13.328C233.687 12.768 234.847 12.488 236.159 12.488C237.423 12.488 238.551 12.76 239.543 13.304C240.551 13.848 241.327 14.624 241.871 15.632C242.431 16.624 242.711 17.768 242.711 19.064ZM239.231 18.104C239.215 17.24 238.903 16.552 238.295 16.04C237.687 15.512 236.943 15.248 236.063 15.248C235.231 15.248 234.527 15.504 233.951 16.016C233.391 16.512 233.047 17.208 232.919 18.104H239.231ZM250.002 26.216C248.914 26.216 247.938 26.024 247.074 25.64C246.21 25.24 245.522 24.704 245.01 24.032C244.514 23.36 244.242 22.616 244.194 21.8H247.578C247.642 22.312 247.89 22.736 248.322 23.072C248.77 23.408 249.322 23.576 249.978 23.576C250.618 23.576 251.114 23.448 251.466 23.192C251.834 22.936 252.018 22.608 252.018 22.208C252.018 21.776 251.794 21.456 251.346 21.248C250.914 21.024 250.218 20.784 249.258 20.528C248.266 20.288 247.45 20.04 246.81 19.784C246.186 19.528 245.642 19.136 245.178 18.608C244.73 18.08 244.506 17.368 244.506 16.472C244.506 15.736 244.714 15.064 245.13 14.456C245.562 13.848 246.17 13.368 246.954 13.016C247.754 12.664 248.69 12.488 249.762 12.488C251.346 12.488 252.61 12.888 253.554 13.688C254.498 14.472 255.018 15.536 255.114 16.88H251.898C251.85 16.352 251.626 15.936 251.226 15.632C250.842 15.312 250.322 15.152 249.666 15.152C249.058 15.152 248.586 15.264 248.25 15.488C247.93 15.712 247.77 16.024 247.77 16.424C247.77 16.872 247.994 17.216 248.442 17.456C248.89 17.68 249.586 17.912 250.53 18.152C251.49 18.392 252.282 18.64 252.906 18.896C253.53 19.152 254.066 19.552 254.514 20.096C254.978 20.624 255.218 21.328 255.234 22.208C255.234 22.976 255.018 23.664 254.586 24.272C254.17 24.88 253.562 25.36 252.762 25.712C251.978 26.048 251.058 26.216 250.002 26.216ZM262.83 26.216C261.742 26.216 260.766 26.024 259.902 25.64C259.038 25.24 258.35 24.704 257.838 24.032C257.342 23.36 257.07 22.616 257.022 21.8H260.406C260.47 22.312 260.718 22.736 261.15 23.072C261.598 23.408 262.15 23.576 262.806 23.576C263.446 23.576 263.942 23.448 264.294 23.192C264.662 22.936 264.846 22.608 264.846 22.208C264.846 21.776 264.622 21.456 264.174 21.248C263.742 21.024 263.046 20.784 262.086 20.528C261.094 20.288 260.278 20.04 259.638 19.784C259.014 19.528 258.47 19.136 258.006 18.608C257.558 18.08 257.334 17.368 257.334 16.472C257.334 15.736 257.542 15.064 257.958 14.456C258.39 13.848 258.998 13.368 259.782 13.016C260.582 12.664 261.518 12.488 262.59 12.488C264.174 12.488 265.438 12.888 266.382 13.688C267.326 14.472 267.846 15.536 267.942 16.88H264.726C264.678 16.352 264.454 15.936 264.054 15.632C263.67 15.312 263.15 15.152 262.494 15.152C261.886 15.152 261.414 15.264 261.078 15.488C260.758 15.712 260.598 16.024 260.598 16.424C260.598 16.872 260.822 17.216 261.27 17.456C261.718 17.68 262.414 17.912 263.358 18.152C264.318 18.392 265.11 18.64 265.734 18.896C266.358 19.152 266.894 19.552 267.342 20.096C267.806 20.624 268.046 21.328 268.062 22.208C268.062 22.976 267.846 23.664 267.414 24.272C266.998 24.88 266.39 25.36 265.59 25.712C264.806 26.048 263.886 26.216 262.83 26.216ZM272.274 11.12C271.682 11.12 271.186 10.936 270.786 10.568C270.402 10.184 270.21 9.712 270.21 9.152C270.21 8.592 270.402 8.128 270.786 7.76C271.186 7.376 271.682 7.184 272.274 7.184C272.866 7.184 273.354 7.376 273.738 7.76C274.138 8.128 274.338 8.592 274.338 9.152C274.338 9.712 274.138 10.184 273.738 10.568C273.354 10.936 272.866 11.12 272.274 11.12ZM273.93 12.704V26H270.57V12.704H273.93ZM280.36 14.648C280.792 14.008 281.384 13.488 282.136 13.088C282.904 12.688 283.776 12.488 284.752 12.488C285.888 12.488 286.912 12.768 287.824 13.328C288.752 13.888 289.48 14.688 290.008 15.728C290.552 16.752 290.824 17.944 290.824 19.304C290.824 20.664 290.552 21.872 290.008 22.928C289.48 23.968 288.752 24.776 287.824 25.352C286.912 25.928 285.888 26.216 284.752 26.216C283.76 26.216 282.888 26.024 282.136 25.64C281.4 25.24 280.808 24.728 280.36 24.104V26H277V8.24H280.36V14.648ZM287.392 19.304C287.392 18.504 287.224 17.816 286.888 17.24C286.568 16.648 286.136 16.2 285.592 15.896C285.064 15.592 284.488 15.44 283.864 15.44C283.256 15.44 282.68 15.6 282.136 15.92C281.608 16.224 281.176 16.672 280.84 17.264C280.52 17.856 280.36 18.552 280.36 19.352C280.36 20.152 280.52 20.848 280.84 21.44C281.176 22.032 281.608 22.488 282.136 22.808C282.68 23.112 283.256 23.264 283.864 23.264C284.488 23.264 285.064 23.104 285.592 22.784C286.136 22.464 286.568 22.008 286.888 21.416C287.224 20.824 287.392 20.12 287.392 19.304ZM294.719 11.12C294.127 11.12 293.631 10.936 293.231 10.568C292.847 10.184 292.655 9.712 292.655 9.152C292.655 8.592 292.847 8.128 293.231 7.76C293.631 7.376 294.127 7.184 294.719 7.184C295.311 7.184 295.799 7.376 296.183 7.76C296.583 8.128 296.783 8.592 296.783 9.152C296.783 9.712 296.583 10.184 296.183 10.568C295.799 10.936 295.311 11.12 294.719 11.12ZM296.375 12.704V26H293.015V12.704H296.375ZM302.805 8.24V26H299.445V8.24H302.805ZM307.579 11.12C306.987 11.12 306.491 10.936 306.091 10.568C305.707 10.184 305.515 9.712 305.515 9.152C305.515 8.592 305.707 8.128 306.091 7.76C306.491 7.376 306.987 7.184 307.579 7.184C308.171 7.184 308.659 7.376 309.043 7.76C309.443 8.128 309.643 8.592 309.643 9.152C309.643 9.712 309.443 10.184 309.043 10.568C308.659 10.936 308.171 11.12 307.579 11.12ZM309.235 12.704V26H305.875V12.704H309.235ZM316.216 15.464V21.896C316.216 22.344 316.32 22.672 316.528 22.88C316.752 23.072 317.12 23.168 317.632 23.168H319.192V26H317.08C314.248 26 312.832 24.624 312.832 21.872V15.464H311.248V12.704H312.832V9.416H316.216V12.704H319.192V15.464H316.216ZM334.079 12.704L325.847 32.288H322.271L325.151 25.664L319.823 12.704H323.591L327.023 21.992L330.503 12.704H334.079ZM363.501 9.248L358.821 26H354.861L351.717 14.072L348.429 26L344.493 26.024L339.981 9.248H343.581L346.533 22.256L349.941 9.248H353.685L356.901 22.184L359.877 9.248H363.501ZM367.149 11.12C366.557 11.12 366.061 10.936 365.661 10.568C365.277 10.184 365.085 9.712 365.085 9.152C365.085 8.592 365.277 8.128 365.661 7.76C366.061 7.376 366.557 7.184 367.149 7.184C367.741 7.184 368.229 7.376 368.613 7.76C369.013 8.128 369.213 8.592 369.213 9.152C369.213 9.712 369.013 10.184 368.613 10.568C368.229 10.936 367.741 11.12 367.149 11.12ZM368.805 12.704V26H365.445V12.704H368.805ZM371.011 19.304C371.011 17.96 371.275 16.768 371.803 15.728C372.347 14.688 373.083 13.888 374.011 13.328C374.939 12.768 375.971 12.488 377.107 12.488C377.971 12.488 378.795 12.68 379.579 13.064C380.363 13.432 380.987 13.928 381.451 14.552V8.24H384.859V26H381.451V24.032C381.035 24.688 380.451 25.216 379.699 25.616C378.947 26.016 378.075 26.216 377.083 26.216C375.963 26.216 374.939 25.928 374.011 25.352C373.083 24.776 372.347 23.968 371.803 22.928C371.275 21.872 371.011 20.664 371.011 19.304ZM381.475 19.352C381.475 18.536 381.315 17.84 380.995 17.264C380.675 16.672 380.243 16.224 379.699 15.92C379.155 15.6 378.571 15.44 377.947 15.44C377.323 15.44 376.747 15.592 376.219 15.896C375.691 16.2 375.259 16.648 374.923 17.24C374.603 17.816 374.443 18.504 374.443 19.304C374.443 20.104 374.603 20.808 374.923 21.416C375.259 22.008 375.691 22.464 376.219 22.784C376.763 23.104 377.339 23.264 377.947 23.264C378.571 23.264 379.155 23.112 379.699 22.808C380.243 22.488 380.675 22.04 380.995 21.464C381.315 20.872 381.475 20.168 381.475 19.352ZM393.098 12.488C394.09 12.488 394.962 12.688 395.714 13.088C396.466 13.472 397.058 13.976 397.49 14.6V12.704H400.874V26.096C400.874 27.328 400.626 28.424 400.13 29.384C399.634 30.36 398.89 31.128 397.898 31.688C396.906 32.264 395.706 32.552 394.298 32.552C392.41 32.552 390.858 32.112 389.642 31.232C388.442 30.352 387.762 29.152 387.602 27.632H390.938C391.114 28.24 391.49 28.72 392.066 29.072C392.658 29.44 393.37 29.624 394.202 29.624C395.178 29.624 395.97 29.328 396.578 28.736C397.186 28.16 397.49 27.28 397.49 26.096V24.032C397.058 24.656 396.458 25.176 395.69 25.592C394.938 26.008 394.074 26.216 393.098 26.216C391.978 26.216 390.954 25.928 390.026 25.352C389.098 24.776 388.362 23.968 387.818 22.928C387.29 21.872 387.026 20.664 387.026 19.304C387.026 17.96 387.29 16.768 387.818 15.728C388.362 14.688 389.09 13.888 390.002 13.328C390.93 12.768 391.962 12.488 393.098 12.488ZM397.49 19.352C397.49 18.536 397.33 17.84 397.01 17.264C396.69 16.672 396.258 16.224 395.714 15.92C395.17 15.6 394.586 15.44 393.962 15.44C393.338 15.44 392.762 15.592 392.234 15.896C391.706 16.2 391.274 16.648 390.938 17.24C390.618 17.816 390.458 18.504 390.458 19.304C390.458 20.104 390.618 20.808 390.938 21.416C391.274 22.008 391.706 22.464 392.234 22.784C392.778 23.104 393.354 23.264 393.962 23.264C394.586 23.264 395.17 23.112 395.714 22.808C396.258 22.488 396.69 22.04 397.01 21.464C397.33 20.872 397.49 20.168 397.49 19.352ZM416.266 19.064C416.266 19.544 416.234 19.976 416.17 20.36H406.45C406.53 21.32 406.866 22.072 407.458 22.616C408.05 23.16 408.778 23.432 409.642 23.432C410.89 23.432 411.778 22.896 412.306 21.824H415.93C415.546 23.104 414.81 24.16 413.722 24.992C412.634 25.808 411.298 26.216 409.714 26.216C408.434 26.216 407.282 25.936 406.258 25.376C405.25 24.8 404.458 23.992 403.882 22.952C403.322 21.912 403.042 20.712 403.042 19.352C403.042 17.976 403.322 16.768 403.882 15.728C404.442 14.688 405.226 13.888 406.234 13.328C407.242 12.768 408.402 12.488 409.714 12.488C410.978 12.488 412.106 12.76 413.098 13.304C414.106 13.848 414.882 14.624 415.426 15.632C415.986 16.624 416.266 17.768 416.266 19.064ZM412.786 18.104C412.77 17.24 412.458 16.552 411.85 16.04C411.242 15.512 410.498 15.248 409.618 15.248C408.786 15.248 408.082 15.504 407.506 16.016C406.946 16.512 406.602 17.208 406.474 18.104H412.786ZM422.381 15.464V21.896C422.381 22.344 422.485 22.672 422.693 22.88C422.917 23.072 423.285 23.168 423.797 23.168H425.357V26H423.245C420.413 26 418.997 24.624 418.997 21.872V15.464H417.413V12.704H418.997V9.416H422.381V12.704H425.357V15.464H422.381Z" fill=#14142A /><path d="M52.1772 37.0458C52.4512 36.683 52.8066 36.3868 53.2435 36.1572C53.6804 35.9276 54.1544 35.8129 54.6653 35.8129C55.3911 35.8129 55.9724 36.0313 56.4093 36.4682C56.8536 36.9051 57.0758 37.4976 57.0758 38.2455C57.0758 38.4603 57.0536 38.6898 57.0091 38.9342C56.898 39.5488 56.6722 40.0968 56.3315 40.5782C55.9983 41.0595 55.5873 41.4335 55.0986 41.7001C54.6172 41.9667 54.1062 42.1 53.5657 42.1C53.0399 42.1 52.5993 41.9852 52.2438 41.7556C51.8884 41.5261 51.6403 41.2336 51.4996 40.8781L51.2996 42H50.2888L51.744 33.7801H52.7548L52.1772 37.0458ZM55.9761 38.9342C56.0057 38.7787 56.0205 38.6084 56.0205 38.4232C56.0205 37.8826 55.8613 37.4605 55.5429 37.1569C55.2244 36.8459 54.8135 36.6904 54.3099 36.6904C53.9396 36.6904 53.5805 36.783 53.2324 36.9681C52.8844 37.1458 52.5845 37.4087 52.3327 37.7568C52.0883 38.0974 51.9254 38.4936 51.8439 38.9453C51.8143 39.1008 51.7995 39.2711 51.7995 39.4563C51.7995 39.9969 51.9587 40.4264 52.2771 40.7448C52.603 41.0558 53.014 41.2113 53.5101 41.2113C53.8878 41.2113 54.2469 41.1225 54.5876 40.9447C54.9356 40.7596 55.2319 40.4967 55.4762 40.1561C55.728 39.808 55.8946 39.4007 55.9761 38.9342ZM59.3939 35.9128L60.4269 40.8226L63.1928 35.9128H64.237L58.994 44.8659H57.9388L59.6605 41.9334L58.272 35.9128H59.3939Z" fill=#14142A /><g clip-path=url(#clip0_524_1223)><path d="M70.3732 34.4454C72.4257 34.4454 73.96 35.6236 74.4576 37.5514H72.1562C71.8038 36.7803 71.1403 36.4161 70.3524 36.4161C69.067 36.4161 68.1754 37.4014 68.1754 38.9865C68.1754 40.5716 69.067 41.557 70.3524 41.557C71.1403 41.557 71.8038 41.1714 72.1562 40.4217H74.4576C73.96 42.3495 72.4257 43.5276 70.3732 43.5276C67.823 43.5062 66.0399 41.6427 66.0399 38.9651C66.0399 36.2876 67.823 34.4454 70.3732 34.4454Z" fill=#404041 /><path d="M78.6455 43.549C76.6344 43.549 75.1208 42.1567 75.1208 39.9076C75.1208 37.6584 76.6758 36.2661 78.687 36.2661C80.6981 36.2661 82.2531 37.6584 82.2531 39.9076C82.2531 42.1567 80.6566 43.549 78.6455 43.549ZM78.6455 41.664C79.3919 41.664 80.0968 41.0857 80.0968 39.9076C80.0968 38.708 79.4126 38.1511 78.6662 38.1511C77.8991 38.1511 77.2357 38.708 77.2357 39.9076C77.2564 41.0857 77.8784 41.664 78.6455 41.664Z" fill=#404041 /><path d="M86.4208 43.549C84.4096 43.549 82.8961 42.1567 82.8961 39.9076C82.8961 37.6584 84.4511 36.2661 86.4622 36.2661C88.4734 36.2661 90.0284 37.6584 90.0284 39.9076C90.0284 42.1567 88.4319 43.549 86.4208 43.549ZM86.4208 41.664C87.1672 41.664 87.8721 41.0857 87.8721 39.9076C87.8721 38.708 87.1879 38.1511 86.4415 38.1511C85.6744 38.1511 85.0109 38.708 85.0109 39.9076C85.0109 41.0857 85.6536 41.664 86.4208 41.664Z" fill=#404041 /><path d="M90.7745 34.4454H92.8686V39.2436L94.9419 36.3733H97.5336L94.6931 39.9076L97.575 43.4419H94.9834L92.8893 40.4645V43.4419H90.7953V34.4454H90.7745Z" fill=#404041 /><path d="M98.0311 34.4668C98.0311 33.8028 98.5287 33.2887 99.2753 33.2887C100.022 33.2887 100.519 33.8028 100.519 34.4668C100.519 35.1094 100.022 35.6235 99.2753 35.6235C98.5287 35.6235 98.0311 35.1094 98.0311 34.4668ZM98.2385 36.3518H100.333V43.4205H98.2385V36.3518Z" fill=#404041 /><path d="M104.563 43.549C102.551 43.549 101.1 42.1567 101.1 39.9076C101.1 37.6584 102.531 36.2661 104.563 36.2661C106.553 36.2661 107.983 37.637 107.983 39.8005C107.983 39.9933 107.963 40.2289 107.942 40.4431H103.194C103.277 41.3642 103.816 41.7926 104.5 41.7926C105.081 41.7926 105.413 41.4927 105.599 41.1071H107.838C107.486 42.478 106.283 43.549 104.563 43.549ZM103.215 39.2221H105.848C105.848 38.451 105.267 38.0012 104.563 38.0012C103.858 38.0012 103.339 38.4296 103.215 39.2221Z" fill=#404041 /><path d="M117.666 43.549C115.655 43.549 114.203 42.1567 114.203 39.9076C114.203 37.6584 115.634 36.2661 117.666 36.2661C119.656 36.2661 121.087 37.637 121.087 39.8005C121.087 39.9933 121.066 40.2289 121.045 40.4431H116.297C116.38 41.3642 116.919 41.7926 117.604 41.7926C118.184 41.7926 118.516 41.4927 118.702 41.1071H120.942C120.589 42.478 119.366 43.549 117.666 43.549ZM116.297 39.2221H118.93C118.93 38.451 118.35 38.0012 117.645 38.0012C116.961 38.0012 116.422 38.4296 116.297 39.2221Z" fill=#404041 /><path d="M124.881 43.549C123.057 43.549 121.833 42.4994 121.73 41.1285H123.803C123.844 41.6212 124.28 41.9425 124.86 41.9425C125.399 41.9425 125.69 41.6854 125.69 41.3642C125.69 40.2289 121.958 41.0428 121.958 38.451C121.958 37.2514 122.953 36.2661 124.736 36.2661C126.498 36.2661 127.493 37.2729 127.618 38.6652H125.669C125.607 38.1939 125.254 37.8727 124.653 37.8727C124.155 37.8727 123.886 38.0654 123.886 38.4082C123.886 39.5434 127.597 38.7294 127.639 41.3856C127.659 42.6065 126.602 43.549 124.881 43.549Z" fill=#404041 /><path d="M110.161 36.4804H107.983L109.974 40.2932H112.151L110.161 36.4804Z" fill=#0056A7 /><path d="M109.932 40.1861L109.994 40.2932H112.172L110.741 37.6157L109.932 40.1861Z" fill=#2E3191 /><path d="M113.913 33.2673L109.994 40.2931H112.171L116.09 33.2673H113.913Z" fill=#0056A7 /><path d="M109.994 41.3428H112.109V43.5491H109.994V41.3428Z" fill=#0056A7 /></g><defs><clippath id=clip0_524_1223><rect transform="translate(66.04 33.4509)" fill=white height=10.0982 width=61.5987 /></clippath></defs></svg> </a></div></footer></div><div aria-hidden=true class=cya11y-overlay></div>';

  // src/icons/monochromeIcon.svg
  var monochromeIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M25.6979 13.3045C24.8535 11.6744 23.689 9.95099 22.2223 8.20208C19.7423 5.23063 17.2979 3.19306 17.2001 3.10816L16.6668 2.66669L16.1246 3.10816C16.0179 3.19306 13.5735 5.17969 11.0935 8.12567C9.62678 9.86609 8.45345 11.581 7.6179 13.2281C6.54234 15.3251 6.00012 17.3117 6.00012 19.1455C6.00012 24.7658 10.7823 29.3334 16.6668 29.3334C22.5512 29.3334 27.3335 24.7658 27.3335 19.1455C27.3335 17.3626 26.7912 15.4015 25.7068 13.313L25.6979 13.3045Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M24.6668 19.0242C24.6668 17.6893 24.2578 16.2139 23.448 14.6526C22.8181 13.427 21.9347 12.139 20.8386 10.8197C18.9817 8.59487 17.1412 7.06481 17.0676 7.00236L16.6668 6.66669V26.6667C21.0758 26.6667 24.6668 23.2397 24.6668 19.0242Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/lowSaturationIcon.svg
  var lowSaturationIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M25.0312 13.3045C24.1867 11.6744 23.0223 9.95099 21.5556 8.20208C19.0756 5.23063 16.6312 3.19306 16.5334 3.10816L16 2.66669L15.4578 3.10816C15.3512 3.19306 12.9067 5.17969 10.4267 8.12567C8.96004 9.86609 7.78671 11.581 6.95115 13.2281C5.8756 15.3251 5.33337 17.3117 5.33337 19.1455C5.33337 24.7658 10.1156 29.3334 16 29.3334C21.8845 29.3334 26.6667 24.7658 26.6667 19.1455C26.6667 17.3626 26.1245 15.4015 25.04 13.313L25.0312 13.3045Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M22.2765 20C15.9739 20 15.9739 23.157 9.67976 23.157C9.55304 23.157 9.45165 23.157 9.33337 23.1482C10.8372 25.2734 13.2535 26.6667 15.9824 26.6667C19.8603 26.6667 23.1129 23.8625 24 20.097C23.4762 20.0353 22.9186 20 22.2765 20Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/highSaturationIcon.svg
  var highSaturationIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M25.3645 13.3045L24.6986 13.6495C24.7367 13.723 24.7867 13.7897 24.8465 13.8469L25.3645 13.3045ZM21.889 8.20208L21.3132 8.68265L21.3143 8.68401L21.889 8.20208ZM16.8667 3.10816L17.3585 2.54185C17.354 2.53798 17.3495 2.53417 17.345 2.53041L16.8667 3.10816ZM16.3334 2.66669L16.8117 2.08894C16.536 1.86073 16.1374 1.85911 15.8599 2.08508L16.3334 2.66669ZM15.7912 3.10816L16.2583 3.69501L16.2647 3.68976L15.7912 3.10816ZM10.7601 8.12567L11.3336 8.60897L11.3338 8.60868L10.7601 8.12567ZM7.28453 13.2281L7.95187 13.5704L7.95338 13.5674L7.28453 13.2281ZM25.3734 13.313L26.039 12.9674C26.001 12.8941 25.9511 12.8276 25.8914 12.7706L25.3734 13.313ZM9.86968 13.7457L10.0428 13.0159L9.47997 12.8824L9.20784 13.3929L9.86968 13.7457ZM9.55098 14.3355L10.2205 14.6736L10.2239 14.6667L9.55098 14.3355ZM23.1158 14.3993L22.447 14.7385L22.447 14.7387L23.1158 14.3993ZM21.694 12.0638L22.3092 11.6349L22.1083 11.3467L21.7583 11.3166L21.694 12.0638ZM25.3645 13.3045L26.0305 12.9595C25.1567 11.2728 23.9595 9.50392 22.4636 7.72015L21.889 8.20208L21.3143 8.68401C22.7517 10.3981 23.8835 12.0761 24.6986 13.6495L25.3645 13.3045ZM21.889 8.20208L22.4648 7.72151C21.2021 6.20865 19.9504 4.9356 19.0025 4.0303C18.5282 3.57724 18.1289 3.21531 17.8411 2.96051C17.6972 2.83308 17.5812 2.73247 17.4977 2.66072C17.456 2.62484 17.4225 2.59629 17.398 2.57543C17.3866 2.56574 17.375 2.55589 17.3686 2.55045C17.3601 2.54322 17.358 2.54142 17.3585 2.54185L16.8667 3.10816L16.375 3.67447C16.4724 3.75898 18.8756 5.76204 21.3132 8.68265L21.889 8.20208ZM16.8667 3.10816L17.345 2.53041L16.8117 2.08894L16.3334 2.66669L15.8552 3.24443L16.3885 3.68591L16.8667 3.10816ZM16.3334 2.66669L15.8599 2.08508L15.3177 2.52656L15.7912 3.10816L16.2647 3.68976L16.807 3.24829L16.3334 2.66669ZM15.7912 3.10816L15.3241 2.52134C15.1947 2.62434 12.7094 4.64553 10.1863 7.64266L10.7601 8.12567L11.3338 8.60868C13.7708 5.71385 16.1743 3.76178 16.2583 3.69498L15.7912 3.10816ZM10.7601 8.12567L10.1866 7.64237C8.69204 9.41585 7.4832 11.1787 6.61567 12.8888L7.28453 13.2281L7.95338 13.5674C8.75696 11.9834 9.89479 10.3163 11.3336 8.60897L10.7601 8.12567ZM7.28453 13.2281L6.61718 12.8858C5.50216 15.0598 4.91675 17.1639 4.91675 19.1455H5.66675H6.41675C6.41675 17.4595 6.91578 15.5904 7.95187 13.5704L7.28453 13.2281ZM5.66675 19.1455H4.91675C4.91675 25.2121 10.0676 30.0834 16.3334 30.0834V29.3334V28.5834C10.8303 28.5834 6.41675 24.3195 6.41675 19.1455H5.66675ZM16.3334 29.3334V30.0834C22.5992 30.0834 27.7501 25.2121 27.7501 19.1455H27.0001H26.2501C26.2501 24.3195 21.8365 28.5834 16.3334 28.5834V29.3334ZM27.0001 19.1455H27.7501C27.7501 17.2116 27.1628 15.1315 26.039 12.9674L25.3734 13.313L24.7078 13.6586C25.7529 15.6714 26.2501 17.5137 26.2501 19.1455H27.0001ZM25.3734 13.313L25.8914 12.7706L25.8825 12.7621L25.3645 13.3045L24.8465 13.8469L24.8554 13.8554L25.3734 13.313ZM20.5826 12V11.25C18.303 11.25 17.1263 11.7971 16.0237 12.3131C15.0057 12.7895 14.0619 13.2348 12.1005 13.2348V13.9848V14.7348C14.3802 14.7348 15.5569 14.1877 16.6595 13.6717C17.6774 13.1953 18.6213 12.75 20.5826 12.75V12ZM12.1005 13.9848V13.2348C11.2404 13.2348 10.5877 13.1452 10.0428 13.0159L9.86968 13.7457L9.69653 14.4754C10.361 14.6331 11.1302 14.7348 12.1005 14.7348V13.9848ZM9.86968 13.7457L9.20784 13.3929C9.12867 13.5414 8.97958 13.798 8.87804 14.0044L9.55098 14.3355L10.2239 14.6667C10.3185 14.4745 10.3982 14.3485 10.5315 14.0985L9.86968 13.7457ZM9.55098 14.3355L8.88149 13.9975C8.03354 15.6768 7.58341 17.3232 7.58341 18.8631H8.33341H9.08341C9.08341 17.6131 9.45045 16.1986 10.2205 14.6736L9.55098 14.3355ZM8.33341 18.8631H7.58341C7.58341 23.5991 11.5242 27.4167 16.3334 27.4167V26.6667V25.9167C12.3173 25.9167 9.08341 22.7357 9.08341 18.8631H8.33341ZM16.3334 26.6667V27.4167C21.1426 27.4167 25.0834 23.5991 25.0834 18.8631H24.3334H23.5834C23.5834 22.7357 20.3495 25.9167 16.3334 25.9167V26.6667ZM24.3334 18.8631H25.0834C25.0834 17.3522 24.6316 15.7289 23.7847 14.0599L23.1158 14.3993L22.447 14.7387C23.2181 16.2581 23.5834 17.6479 23.5834 18.8631H24.3334ZM23.1158 14.3993L23.7847 14.06C23.381 13.2639 22.8792 12.4524 22.3092 11.6349L21.694 12.0638L21.0787 12.4927C21.6202 13.2694 22.0826 14.0202 22.447 14.7385L23.1158 14.3993ZM21.694 12.0638C21.7583 11.3166 21.7583 11.3166 21.7583 11.3166C21.7583 11.3166 21.7583 11.3165 21.7583 11.3165C21.7582 11.3165 21.7582 11.3165 21.7581 11.3165C21.758 11.3165 21.7578 11.3165 21.7576 11.3165C21.7571 11.3164 21.7565 11.3164 21.7557 11.3163C21.7541 11.3162 21.7518 11.316 21.7489 11.3157C21.743 11.3153 21.7345 11.3145 21.7236 11.3136C21.7018 11.3118 21.6706 11.3093 21.6319 11.3062C21.5548 11.3001 21.448 11.2919 21.329 11.2837C21.0983 11.2678 20.7969 11.25 20.5826 11.25V12V12.75C20.7394 12.75 20.9937 12.7641 21.2259 12.7801C21.3384 12.7879 21.4398 12.7956 21.5131 12.8015C21.5497 12.8044 21.5791 12.8068 21.5993 12.8085C21.6094 12.8093 21.6171 12.81 21.6223 12.8104C21.6248 12.8106 21.6268 12.8108 21.628 12.8109C21.6286 12.8109 21.6291 12.811 21.6293 12.811C21.6295 12.811 21.6296 12.811 21.6296 12.811C21.6296 12.811 21.6296 12.811 21.6297 12.811C21.6297 12.811 21.6296 12.811 21.6296 12.811C21.6296 12.811 21.6296 12.811 21.694 12.0638Z" fill=#27283C /></svg>';

  // src/icons/lightContrastIcon.svg
  var lightContrastIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_66_173)><path d="M29.3334 16.0001H30.6667M16 2.66672V1.33339M16 30.6667V29.3334M26.6667 26.6667L25.3334 25.3334M26.6667 5.33339L25.3334 6.66672M5.33337 26.6667L6.66671 25.3334M5.33337 5.33339L6.66671 6.66672M1.33337 16.0001H2.66671M16 24.0001C18.1218 24.0001 20.1566 23.1572 21.6569 21.6569C23.1572 20.1566 24 18.1218 24 16.0001C24 13.8783 23.1572 11.8435 21.6569 10.3432C20.1566 8.84291 18.1218 8.00006 16 8.00006C13.8783 8.00006 11.8435 8.84291 10.3432 10.3432C8.8429 11.8435 8.00004 13.8783 8.00004 16.0001C8.00004 18.1218 8.8429 20.1566 10.3432 21.6569C11.8435 23.1572 13.8783 24.0001 16 24.0001Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></g><defs><clippath id=clip0_66_173><rect fill=white height=32 width=32 /></clippath></defs></svg>';

  // src/icons/darkContrastIcon.svg
  var darkContrastIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M29.6667 18.9166C27.3948 20.129 24.7933 20.579 22.2462 20.2003C19.699 19.8216 17.341 18.6342 15.5201 16.8133C13.6992 14.9924 12.5118 12.6344 12.1331 10.0872C11.7544 7.54007 12.2044 4.93863 13.4168 2.66673C7.44632 4.06603 3 9.42463 3 15.8218C3 19.4053 4.42354 22.842 6.95745 25.3759C9.49136 27.9099 12.9281 29.3334 16.5116 29.3334C22.9088 29.3334 28.2674 24.8871 29.6667 18.9166Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/highContrastIcon.svg
  var highContrastIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M16.6667 2.66673C9.30271 2.66673 3.33337 8.63607 3.33337 16.0001C3.33337 23.3641 9.30271 29.3334 16.6667 29.3334M16.6667 2.66673V29.3334M16.6667 2.66673C24.0307 2.66673 30 8.63607 30 16.0001C30 23.3641 24.0307 29.3334 16.6667 29.3334M16.6667 24.0001H6.66671M16.6667 18.6667H4.00004M16.6667 13.3334H4.00004M16.6667 8.00007H6.66671" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/views/menu/FilterButtons.ts
  var FilterButtons_default = [
    {
      label: "Monochrome",
      key: "monochrome",
      icon: monochromeIcon_default
    },
    {
      label: "Low Saturation",
      key: "low-saturation",
      icon: lowSaturationIcon_default
    },
    {
      label: "High Saturation",
      key: "high-saturation",
      icon: highSaturationIcon_default
    },
    {
      label: "High Contrast",
      key: "high-contrast",
      icon: highContrastIcon_default
    },
    {
      label: "Light Contrast",
      key: "light-contrast",
      icon: lightContrastIcon_default
    },
    {
      label: "Dark Contrast",
      key: "dark-contrast",
      icon: darkContrastIcon_default
    }
  ];

  // src/icons/highlightTitleIcon.svg
  var highlightTitleIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M12.2223 10.4445H16.6667M16.6667 10.4445H21.1112M16.6667 10.4445V22.2963M3.33337 12.1482C3.33337 8.82968 3.33337 7.17042 3.9793 5.90227C4.54743 4.78729 5.45394 3.88077 6.56893 3.31264C7.83708 2.66672 9.49634 2.66672 12.8149 2.66672H20.5186C23.8371 2.66672 25.4963 2.66672 26.7645 3.31264C27.8795 3.88077 28.786 4.78729 29.3541 5.90227C30 7.17042 30 8.82968 30 12.1482V19.8519C30 23.1704 30 24.8297 29.3541 26.0978C28.786 27.2128 27.8795 28.1193 26.7645 28.6875C25.4963 29.3334 23.8371 29.3334 20.5186 29.3334H12.8149C9.49634 29.3334 7.83708 29.3334 6.56893 28.6875C5.45394 28.1193 4.54743 27.2128 3.9793 26.0978C3.33337 24.8297 3.33337 23.1704 3.33337 19.8519V12.1482Z" stroke=black stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/formatBoldIcon.svg
  var formatBoldIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M16.6667 2.66673V22.3158M16.6667 22.3158H13.2099M16.6667 22.3158H20.1235M27.0371 5.94158V2.66673H6.29634V5.94158M30 25.8246L3.33337 25.8246M30 25.8246L25.4023 29.3334M30 25.8246L25.4023 22.3158M3.33337 25.8246L7.01153 29.3334M3.33337 25.8246L7.01153 22.3158" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/lineHeightIcon.svg
  var lineHeightIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M2.66663 9.90481L7.37251 5.33338M7.37251 5.33338L12.0784 9.90481M7.37251 5.33338V26.6667M2.66663 22.0953L7.37251 26.6667M7.37251 26.6667L12.0784 22.0953M18.3529 6.85719H29.3333M18.3529 16.0001H29.3333M18.3529 25.1429H29.3333" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/letterSpacingIcon.svg
  var letterSpacingIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M4.33337 16.0001V6.83338C4.33337 5.72832 4.7849 4.66851 5.58863 3.88711C6.39236 3.1057 7.48245 2.66672 8.61909 2.66672C9.75573 2.66672 10.8458 3.1057 11.6495 3.88711C12.4533 4.66851 12.9048 5.72832 12.9048 6.83338V16.0001M12.9048 9.33338H4.33337M18.0477 2.66672L23.1905 16.0001L28.3334 2.66672M4.33337 26.0001H28.3334M4.33337 26.0001L7.76195 22.6667M4.33337 26.0001L7.76195 29.3334M28.3334 26.0001L24.9048 29.3334M28.3334 26.0001L24.9048 22.6667" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/dyslexiaFontIcon.svg
  var dyslexiaFontIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M1.33337 3.87083V28.0001H8.25371C14.9222 28.0001 19.5761 23.0288 19.5761 15.9116C19.5761 8.79443 14.9121 3.87083 8.25371 3.87083H1.33337ZM17.8435 14.636C17.8435 20.0842 13.9854 23.756 8.25371 23.756H3.03576V5.56369H8.25371C13.9955 5.56369 17.8435 9.21169 17.8435 14.6479V14.636Z" fill=#27283C /><path d="M26.5367 7.03002C26.5367 6.18359 26.7784 5.43254 27.2216 4.89606C28.0074 3.96618 29.2867 4.10924 30.0925 4.74108L30.6667 3.54893C29.9515 2.97669 29.1356 2.66673 28.3398 2.66673C26.4359 2.66673 25.0559 4.46689 24.9854 7.04195L24.8947 10.0581H22.326V11.6079H24.7839L24.24 28.0001H27.0202L26.5467 11.6079H30.5861V10.0581H26.5467V7.03002H26.5367Z" fill=#27283C /></svg>';

  // src/icons/highlightLinksIcon.svg
  var highlightLinksIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M11.8335 20.4995L20.8336 11.4983M14.8335 6.99767L15.528 6.19356C16.9348 4.78687 18.8426 3.99667 20.8319 3.99681C22.8212 3.99695 24.7289 4.78742 26.1354 6.19431C27.5419 7.60121 28.3321 9.50929 28.3319 11.4988C28.3318 13.4883 27.5414 15.3963 26.1347 16.803L25.3337 17.4991M17.8336 25.0001L17.2381 25.8012C15.8145 27.2079 13.894 27.9968 11.8927 27.9968C9.89152 27.9968 7.97094 27.2079 6.54742 25.8012C5.84558 25.1077 5.28836 24.2818 4.90805 23.3713C4.52774 22.4608 4.33191 21.4839 4.33191 20.4972C4.33191 19.5105 4.52774 18.5336 4.90805 17.6231C5.28836 16.7127 5.84558 15.8867 6.54742 15.1933L7.33343 14.4987" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/fontSizeIcon.svg
  var fontSizeIcon_default = '<svg viewbox="0 0 27 22" fill=none height=22 width=27 xmlns=http://www.w3.org/2000/svg><path d="M1.66663 4.33329V1.66663H19V4.33329M11 1.66663V20.3333M13.6666 20.3333H8.33329M17.6666 12.3333V11H25.6666V12.3333M21.6666 11V20.3333M20.3333 20.3333H23" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=2 /></svg>';

  // src/icons/alignLeftIcon.svg
  var alignLeftIcon_default = '<svg viewbox="0 0 29 23" fill=none height=23 width=29 xmlns=http://www.w3.org/2000/svg><path d="M1.33337 1.33338H28M1.33337 11.3334H28M1.33337 21.3334H21.3334" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/views/menu/ContentButtons.ts
  var ContentButtons_default = [
    {
      label: "Align Left",
      key: "align-left",
      icon: alignLeftIcon_default
    },
    {
      label: "Font Weight",
      key: "font-weight",
      icon: formatBoldIcon_default
    },
    {
      label: "Line Height",
      key: "line-height",
      icon: lineHeightIcon_default
    },
    {
      label: "Letter Spacing",
      key: "letter-spacing",
      icon: letterSpacingIcon_default
    },
    {
      label: "Dyslexia Font",
      key: "readable-font",
      icon: dyslexiaFontIcon_default
    },
    {
      label: "Highlight Links",
      key: "highlight-links",
      icon: highlightLinksIcon_default
    },
    {
      label: "Highlight Title",
      key: "highlight-title",
      icon: highlightTitleIcon_default
    },
    {
      label: "Adjust Font Size",
      key: "font-size",
      icon: fontSizeIcon_default
    }
  ];

  // src/icons/bigCursorIcon.svg
  var bigCursorIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M28.5311 11.3834C30.4853 12.1771 30.336 14.9931 28.3087 15.5758L18.0752 18.5185L13.4007 28.0865C12.4739 29.9823 9.6741 29.6398 9.231 27.5769L4.46724 5.35687C4.38211 4.96192 4.40628 4.55123 4.53714 4.16899C4.668 3.78675 4.90061 3.44742 5.20993 3.18751C5.51925 2.9276 5.89358 2.75694 6.29266 2.6939C6.69173 2.63086 7.10044 2.67782 7.47482 2.82973L28.5311 11.3834Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/stopAnimationsIcon.svg
  var stopAnimationsIcon_default = '<svg viewbox="0 0 30 29" fill=none height=29 width=30 xmlns=http://www.w3.org/2000/svg><path d="M17.1333 16.6V8.06669M12.8666 16.6V8.06669M1.66663 26.0476H6.66663M6.66663 26.0476H28.3333M6.66663 26.0476V24.3334M6.66663 26.0476V27.7619M25.6666 12.3334C25.6666 18.2244 20.891 23 15 23C9.10892 23 4.33329 18.2244 4.33329 12.3334C4.33329 6.44232 9.10892 1.66669 15 1.66669C20.891 1.66669 25.6666 6.44232 25.6666 12.3334Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/readingGuideIcon.svg
  var readingGuideIcon_default = '<svg viewbox="0 0 33 32" fill=none height=32 width=33 xmlns=http://www.w3.org/2000/svg><path d="M5.66667 12.2667V2.66669H27L26.9998 12.2667M5.66667 20V29.3334H26.9998V20M13.6667 20H3V13.3334H29.6667V20H22.3333M22.493 20.3842C23.2083 20.662 23.1536 21.6476 22.4116 21.8515L18.6658 22.8815L16.9548 26.2303C16.6156 26.8938 15.5908 26.774 15.4286 26.0519L13.6849 18.2749C13.6538 18.1367 13.6626 17.9929 13.7105 17.8592C13.7584 17.7254 13.8435 17.6066 13.9568 17.5156C14.07 17.4247 14.207 17.3649 14.3531 17.3429C14.4992 17.3208 14.6488 17.3373 14.7858 17.3904L22.493 20.3842Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/enum/TOOL_PRESETS.ts
  var TOOL_PRESETS = [
    {
      label: "Big Cursor",
      key: "big-cursor",
      icon: bigCursorIcon_default
    },
    {
      label: "Stop Animations",
      key: "stop-animations",
      icon: stopAnimationsIcon_default
    },
    {
      label: "Reading Guide",
      key: "readable-guide",
      icon: readingGuideIcon_default
    }
  ];
  var TOOL_PRESETS_default = TOOL_PRESETS;

  // src/icons/seizureSafeIcon.svg
  var seizureSafeIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M9.21208 30.4224V24.9678H4.84844C4.26979 24.9678 3.71484 24.7379 3.30567 24.3288C2.8965 23.9196 2.66663 23.3646 2.66663 22.786V14.0587C2.66702 11.9261 3.23577 9.83202 4.31433 7.99218C5.39288 6.15235 6.94227 4.63319 8.803 3.59109C10.6637 2.549 12.7686 2.02161 14.9008 2.06323C16.6928 2.09821 18.4497 2.53401 20.0444 3.33341M26.6576 14.527C26.5747 16.6581 25.9255 18.7286 24.7766 20.5253C23.6277 22.3221 22.0208 23.7802 20.1212 24.7496V30.4224M21.0725 16.7033C20.8107 17.4342 20.0252 17.8007 19.2747 17.6022C15.4849 16.5985 11.6274 13.8822 9.28195 11.7658C8.66013 11.2051 8.53359 10.2669 9.08559 9.63853C10.1687 8.41409 11.6416 7.60149 13.2551 7.33829C14.8685 7.07508 16.5233 7.37743 17.9394 8.19417C18.8573 8.72498 19.6377 9.45078 20.2306 10.3122M27.8537 1.95526L21.2436 5.39951L27.7229 10.0919L21.1129 13.5362" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/adhdIcon.svg
  var adhdIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><path d="M14.5185 16.0001C14.5185 16.393 14.6746 16.7698 14.9524 17.0477C15.2302 17.3255 15.6071 17.4816 16 17.4816C16.3929 17.4816 16.7697 17.3255 17.0475 17.0477C17.3254 16.7698 17.4815 16.393 17.4815 16.0001C17.4815 15.6072 17.3254 15.2304 17.0475 14.9525C16.7697 14.6747 16.3929 14.5186 16 14.5186C15.6071 14.5186 15.2302 14.6747 14.9524 14.9525C14.6746 15.2304 14.5185 15.6072 14.5185 16.0001Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M8.59248 16C8.59248 17.9646 9.3729 19.8487 10.7621 21.2378C12.1512 22.627 14.0353 23.4074 15.9999 23.4074C17.9645 23.4074 19.8486 22.627 21.2377 21.2378C22.6269 19.8487 23.4073 17.9646 23.4073 16C23.4073 14.0354 22.6269 12.1513 21.2377 10.7622C19.8486 9.37302 17.9645 8.5926 15.9999 8.5926C14.0353 8.5926 12.1512 9.37302 10.7621 10.7622C9.3729 12.1513 8.59248 14.0354 8.59248 16Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M2.66663 16.0001C2.66663 17.751 3.0115 19.4849 3.68157 21.1025C4.35163 22.7202 5.33375 24.1901 6.57187 25.4282C7.80998 26.6663 9.27984 27.6484 10.8975 28.3185C12.5152 28.9885 14.249 29.3334 16 29.3334C17.7509 29.3334 19.4847 28.9885 21.1024 28.3185C22.7201 27.6484 24.1899 26.6663 25.4281 25.4282C26.6662 24.1901 27.6483 22.7202 28.3184 21.1025C28.9884 19.4849 29.3333 17.751 29.3333 16.0001C29.3333 14.2491 28.9884 12.5153 28.3184 10.8976C27.6483 9.27996 26.6662 7.81011 25.4281 6.57199C24.1899 5.33388 22.7201 4.35175 21.1024 3.68169C19.4847 3.01163 17.7509 2.66675 16 2.66675C14.249 2.66675 12.5152 3.01163 10.8975 3.68169C9.27984 4.35175 7.80998 5.33388 6.57187 6.57199C5.33375 7.81011 4.35163 9.27996 3.68157 10.8976C3.0115 12.5153 2.66663 14.2491 2.66663 16.0001Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></svg>';

  // src/icons/cognitiveDisabilityIcon.svg
  var cognitiveDisabilityIcon_default = '<svg viewbox="0 0 32 32" fill=none height=32 width=32 xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_66_1494)><path d="M15.9701 12.6494H15.475C15.2623 12.6494 15.0899 12.4854 15.0899 12.2831V10.6486C15.0899 9.22499 13.9081 8.0314 12.4119 8.00066C11.2154 7.9761 10.1897 8.68201 9.79124 9.68164C9.70813 9.89024 9.50003 10.0315 9.2655 10.0292C6.84473 10.0054 5.02222 12.1202 5.46852 14.3493C5.51594 14.586 5.39432 14.8276 5.16491 14.9299C3.6891 15.5882 2.66663 17.0135 2.66663 18.6667H8.37904C8.59172 18.6667 8.76414 18.5027 8.76414 18.3004V17.8294C8.76414 17.1428 9.3255 16.5579 10.0469 16.5335C10.8043 16.508 11.4267 17.0844 11.4267 17.7991V18.3004C11.4267 18.5027 11.5991 18.6667 11.8118 18.6667H15.0899V15.5485C15.0899 15.3461 15.2623 15.1821 15.475 15.1821H16.002C16.7534 15.1821 17.3593 14.5901 17.3324 13.8696C17.3069 13.1834 16.692 12.6494 15.9701 12.6494Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M13.8163 23.1857H14.2945C14.5 23.1857 14.6665 23.0149 14.6665 22.8041V19.5561H11.5001C11.2947 19.5561 11.1282 19.3853 11.1282 19.1746V18.684C11.1282 17.9688 10.586 17.3597 9.88918 17.3342C9.15762 17.3076 8.55638 17.908 8.55638 18.6524V19.1746C8.55638 19.3853 8.38984 19.5561 8.18441 19.5561H2.66663C2.66663 21.2781 3.65425 22.7627 5.07988 23.4485C5.30147 23.5551 5.41889 23.8067 5.37314 24.0533C4.942 26.3755 6.70379 28.5776 9.04072 28.553C9.26725 28.5506 9.46821 28.6978 9.54854 28.9151C9.93336 29.9564 10.9241 30.6916 12.0799 30.6661C13.5251 30.6341 14.6666 29.3908 14.6666 27.908V26.2055C14.6666 25.9948 14.5001 25.8239 14.2947 25.8239H13.7856C13.0599 25.8239 12.4746 25.2072 12.5005 24.4568C12.5252 23.7419 13.119 23.1857 13.8163 23.1857Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M29.0017 11.3329C29.195 11.3329 29.3501 11.1616 29.3318 10.962C29.2043 9.57205 28.3671 8.39715 27.2006 7.82974C27.0033 7.73379 26.8987 7.50743 26.9395 7.28546C27.3233 5.19584 25.7562 3.21332 23.6747 3.23565C23.473 3.2378 23.2942 3.10535 23.2226 2.90979C22.8801 1.97268 21.9981 1.31093 20.9693 1.33396C19.6828 1.36272 18.6666 2.4817 18.6666 3.81626V5.34851C18.6666 5.53817 18.8149 5.69192 18.9977 5.69192H19.4235C20.0442 5.69192 20.5728 6.19251 20.5948 6.83585C20.618 7.51124 20.0969 8.0663 19.4509 8.0663H18.9977C18.8149 8.0663 18.6666 8.22005 18.6666 8.4097V10.9895C18.6666 11.1792 18.8149 11.3329 18.9977 11.3329H21.4853C21.6681 11.3329 21.8164 11.4867 21.8164 11.6763V12.1178C21.8164 12.7615 22.299 13.3097 22.9194 13.3326C23.5706 13.3566 24.1058 12.8162 24.1058 12.1462V11.6763C24.1058 11.4866 24.254 11.3329 24.4369 11.3329L29.0017 11.3329Z" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /><path d="M24.7718 26.3109C25.2075 25.4976 25.3902 24.5213 25.2125 23.5239C25.1651 23.2575 25.2868 22.9859 25.5165 22.8707C26.8749 22.1898 27.8497 20.7799 27.9982 19.1119C28.0196 18.8723 27.8389 18.6667 27.6138 18.6667H22.2985C22.0856 18.6667 21.913 18.8512 21.913 19.0788V19.6086C21.913 20.3811 21.351 21.039 20.6287 21.0665C19.8704 21.0953 19.2472 20.4468 19.2472 19.6428V19.0788C19.2472 18.8512 19.0745 18.6667 18.8616 18.6667H15.5794V22.1747C15.5794 22.4023 15.4068 22.5869 15.1939 22.5869H14.6981C13.9753 22.5869 13.3598 23.1876 13.3342 23.9596C13.3072 24.7701 13.9139 25.4362 14.6662 25.4362H15.1939C15.4068 25.4362 15.5794 25.6207 15.5794 25.8483V27.6871C15.5794 29.2886 16.7627 30.6315 18.2608 30.666C19.4587 30.6936 20.4858 29.8995 20.8847 28.7748C20.9679 28.5402 21.1762 28.3813 21.411 28.3838C22.0889 28.3912 22.7199 28.2101 23.2677 27.8907" stroke=#27283C stroke-linecap=round stroke-linejoin=round stroke-width=1.5 /></g><defs><clippath id=clip0_66_1494><rect fill=white height=32 width=32 /></clippath></defs></svg>';

  // src/views/menu/ProfileButtons.ts
  var ProfileButtons_default = [
    {
      label: "Seizure Safe",
      key: "seizure-safe-profile",
      icon: seizureSafeIcon_default
    },
    {
      label: "ADHD",
      key: "adhd-profile",
      icon: adhdIcon_default
    },
    {
      label: "Cognitive Disability",
      key: "cognitive-disabilities-profile",
      icon: cognitiveDisabilityIcon_default
    }
  ];

  // src/views/menu/renderButtons.ts
  function renderButtons(buttons, btnClass) {
    let _html = "";
    for (var i = buttons.length; i--; ) {
      let x = buttons[i];
      if (x.key === "font-size") {
        _html += `
            <div class="cya11y-adjust-font ${btnClass || ""}" role="group" aria-labelledby="font-size-control">
                <div class="cya11y-label" id="font-size-control">
                    ${x.icon}
                    <span class="cya11y-translate">${x.label}</span>
                </div>
                <div class="cya11y-font-controls">
                    <button class="cya11y-minus" type="button" aria-label="Decrease font size" aria-describedby="font-size-control">
                        <svg viewBox="0 0 24 24" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <rect x="5" y="11" width="14" height="2" rx="1" fill="white"/>
                        </svg>
                        <span class="cya11y-sr-only">Decrease font size</span>
                    </button>
                    <span class="cya11y-amount" aria-live="polite" aria-atomic="true">100%</span>
                    <button class="cya11y-plus" type="button" aria-label="Increase font size" aria-describedby="font-size-control">
                        <svg viewBox="0 0 24 24" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <rect x="11" y="5" width="2" height="14" rx="1" fill="white"/>
                            <rect x="5" y="11" width="14" height="2" rx="1" fill="white"/>
                        </svg>
                        <span class="cya11y-sr-only">Increase font size</span>
                    </button>
                </div>
            </div>
            `;
      } else {
        _html += `<button class="cya11y-btn ${btnClass || ""}" type="button" data-key="${x.key}" title="${x.label}" aria-pressed="false" aria-describedby="${x.key}-description">${x.icon}<span class="cya11y-translate">${x.label}</span><span class="cya11y-sr-only" id="${x.key}-description">Toggle ${x.label.toLowerCase()} setting</span></button>`;
      }
    }
    return _html;
  }

  // src/views/menu/reset.ts
  function reset($menu2) {
    $menu2?.querySelectorAll(".cya11y-selected")?.forEach((el) => el?.classList?.remove("cya11y-selected"));
    $menu2.querySelector(".cya11y-amount").textContent = `100%`;
    userSettings.states = {};
    runAccessibility();
    saveUserSettings();
  }

  // src/views/menu/menu.css
  var menu_default2 = `:root{--cya11y-primary-color: #1863DC;--cya11y-primary-light: #D1E0F8;--cya11y-primary-hover: #2563eb;--cya11y-bg-primary: #eff1f5;--cya11y-bg-secondary: #f2f2f4;--cya11y-bg-white: #fff;--cya11y-bg-overlay: rgba(0, 0, 0, .3);--cya11y-text-primary: #27283C;--cya11y-text-secondary: #293C5B;--cya11y-text-muted: #3D3E50;--cya11y-text-white: #fff;--cya11y-border-light: #E9EAEC;--cya11y-border-focus: #dbeafe;--cya11y-spacing-xs: 8px;--cya11y-spacing-sm: 12px;--cya11y-spacing-md: 16px;--cya11y-spacing-lg: 20px;--cya11y-spacing-xl: 30px;--cya11y-radius-sm: 8px;--cya11y-radius-md: 12px;--cya11y-radius-lg: 45px;--cya11y-radius-full: 50%;--cya11y-shadow-sm: 0px 8px 26px -4px #27283C33;--cya11y-shadow-md: 0 8px 24px rgba(41, 60, 91, .08);--cya11y-shadow-focus: 0px 0px 0px 6px #1863DC24;--cya11y-transition-fast: .15s;--cya11y-transition-normal: .2s;--cya11y-transition-slow: .3s;--cya11y-z-overlay: 10000;--cya11y-z-menu: 500000;--cya11y-z-dropdown: 100}.cya11y-widget{--cya11y-primary-color: #1863DC;--cya11y-primary-light: #D1E0F8;--cya11y-primary-hover: #2563eb;--cya11y-bg-primary: #eff1f5;--cya11y-bg-secondary: #f2f2f4;--cya11y-bg-white: #fff;--cya11y-bg-overlay: rgba(0, 0, 0, .3);--cya11y-text-primary: #333;--cya11y-text-secondary: #293C5B;--cya11y-text-muted: #000000 ;--cya11y-text-white: #fff;--cya11y-border-light: #E9EAEC;--cya11y-border-focus: #dbeafe;--cya11y-spacing-xs: 8px;--cya11y-spacing-sm: 12px;--cya11y-spacing-md: 16px;--cya11y-spacing-lg: 20px;--cya11y-spacing-xl: 30px;--cya11y-radius-sm: 8px;--cya11y-radius-md: 12px;--cya11y-radius-lg: 45px;--cya11y-radius-full: 50%;--cya11y-shadow-sm: 0px 8px 26px -4px #27283C33;--cya11y-shadow-md: 0 8px 24px rgba(41, 60, 91, .08);--cya11y-shadow-focus: 0px 0px 0px 6px #1863DC24;--cya11y-transition-fast: .15s;--cya11y-transition-normal: .2s;--cya11y-transition-slow: .3s;--cya11y-z-overlay: 10000;--cya11y-z-menu: 500000;--cya11y-z-dropdown: 100}.cya11y-menu *{color:inherit;font-family:inherit;padding:0;margin:0;letter-spacing:normal}.cya11y-menu{position:fixed;display:flex;flex-direction:column;top:30px;width:462px;height:calc(100% - 30px);background:var(--cya11y-bg-primary, #eff1f5);box-shadow:var(--cya11y-shadow-sm, 0px 8px 26px -4px #27283C33);opacity:1;transition:var(--cya11y-transition-slow, .3s);z-index:var(--cya11y-z-menu, 500000);overflow:auto;line-height:1;font-size:16px;letter-spacing:.015em;color:#000}.cya11y-menu[data-position=bottom-right],.cya11y-menu[data-position=top-right]{right:0;left:auto;border-radius:var(--cya11y-radius-md, 12px) var(--cya11y-radius-md, 12px) 0 0}.cya11y-menu[data-position=bottom-left],.cya11y-menu[data-position=top-left]{left:0;right:auto;border-radius:var(--cya11y-radius-md, 12px) var(--cya11y-radius-md, 12px) 0 0}.cya11y-menu-header{display:flex;align-items:center;justify-content:space-between;padding:var(--cya11y-spacing-md, 16px) 15px;font-weight:700;background-color:var(--cya11y-primary-color, #1863DC)}.cya11y-menu-title{font-size:20px;font-weight:500;color:var(--cya11y-text-white, #fff)!important}.cya11y-menu-header>div{display:flex}.cya11y-menu-reset,.cya11y-menu-close{width:32px;height:32px;display:flex;padding:10px;align-items:center;justify-content:center;margin:0;background:var(--cya11y-bg-overlay, rgba(0, 0, 0, .3));cursor:pointer;border-radius:var(--cya11y-radius-full, 50%);transition:opacity var(--cya11y-transition-slow, .3s) ease;border:0;box-shadow:none;outline:none}.cya11y-menu-reset{padding:7px}.cya11y-menu-reset-footer{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:20px 0}.cya11y-menu-reset-footer-btn{display:flex;align-items:center;justify-content:center;gap:8px;border-radius:var(--cya11y-radius-md, 12px);width:auto;min-width:160px;height:48px;font-size:15px;font-weight:500;color:var(--cya11y-text-white, #fff);background:var(--cya11y-primary-color, #1863DC);border:2px solid transparent;cursor:pointer;transition:all var(--cya11y-transition-normal, .2s) ease;padding:0 20px;text-decoration:none;outline:none}.cya11y-menu-reset-footer-btn:hover{background:var(--cya11y-primary-hover, #2563eb);transform:translateY(-1px);box-shadow:0 4px 12px #1863dc4d}.cya11y-menu-reset-footer-btn:focus{outline:3px solid rgba(24,99,220,.4);outline-offset:2px}.cya11y-menu-reset-footer-btn:active{transform:translateY(0);box-shadow:0 2px 6px #1863dc33}.cya11y-menu-reset-footer-btn svg{width:20px;height:20px;flex-shrink:0}.cya11y-reset-text{font-weight:500;white-space:nowrap}.cya11y-menu-reset-footer-link{font-size:14px;font-weight:500;color:var(--cya11y-primary-color, #1863DC);text-decoration:none;text-align:center;transition:color var(--cya11y-transition-normal, .2s) ease}.cya11y-menu-reset-footer-link:hover{color:var(--cya11y-primary-hover, #2563eb);text-decoration:underline}.cya11y-menu-reset:hover:not(.cya11y-menu-reset-footer-btn),.cya11y-menu-close:hover,.cya11y-menu-reset:focus:not(.cya11y-menu-reset-footer-btn),.cya11y-menu-close:focus{outline:3px solid hsla(0,0%,100%,.4)}.cya11y-menu-content{flex:1;overflow-y:scroll;overflow-x:auto;padding:var(--cya11y-spacing-xl, 30px) 0 15px;background-color:var(--cya11y-bg-secondary, #f2f2f4);max-height:calc(100vh - 146px)}.cya11y-card{margin:0 15px var(--cya11y-spacing-lg, 20px)}.cya11y-card-title{font-size:16px;padding:15px 0;font-weight:600;opacity:.8}.cya11y-profile-card{background-color:var(--cya11y-bg-white, #fff);border-radius:var(--cya11y-radius-md, 12px)}.cya11y-profile-card .cya11y-card-title{font-size:16px;font-weight:500;color:var(--cya11y-text-secondary, #293C5B);background-color:var(--cya11y-bg-white, #fff);border:none;text-align:left}.cya11y-profile-items{display:none;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;padding:0 var(--cya11y-spacing-md, 16px) var(--cya11y-spacing-md, 16px) var(--cya11y-spacing-md, 16px);margin-top:var(--cya11y-spacing-md, 16px)}.cya11y-profile-items .cya11y-btn{display:flex;gap:10px;align-items:center;flex-direction:row;justify-content:start;text-align:left;width:190px;height:64px;padding:var(--cya11y-spacing-sm, 12px);border-radius:var(--cya11y-radius-md, 12px);background:var(--cya11y-bg-white, #fff);border:1px solid var(--cya11y-border-light, #E9EAEC)}.cya11y-profile-items .cya11y-btn.cya11y-selected{background:var(--cya11y-primary-color, #1863DC);color:var(--cya11y-text-white, #fff);fill:var(--cya11y-text-white, #fff);stroke:var(--cya11y-text-white, #fff)}.cya11y-profile-items .cya11y-btn.cya11y-selected:after{content:"";display:inline-block;background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.0002 1.34001C16.5085 2.21087 17.7632 3.46054 18.6401 4.96531C19.5169 6.47009 19.9856 8.17779 19.9997 9.91935C20.0137 11.6609 19.5727 13.376 18.7203 14.8947C17.8678 16.4135 16.6335 17.6832 15.1395 18.5783C13.6455 19.4734 11.9436 19.9628 10.2023 19.9981C8.46107 20.0333 6.74079 19.6132 5.2118 18.7793C3.6828 17.9453 2.39812 16.7265 1.48491 15.2435C0.571706 13.7605 0.0616534 12.0647 0.00524426 10.324L0.000244141 10L0.00524426 9.67601C0.0612473 7.94901 0.563792 6.26598 1.46388 4.79101C2.36398 3.31604 3.6309 2.09947 5.14114 1.2599C6.65137 0.420327 8.35339 -0.0135887 10.0813 0.000452316C11.8091 0.0144933 13.5038 0.476012 15.0002 1.34001ZM13.7072 7.29302C13.5351 7.12084 13.306 7.01741 13.0629 7.00213C12.8199 6.98685 12.5796 7.06076 12.3872 7.21001L12.2932 7.29302L9.00024 10.585L7.70724 9.29301L7.61324 9.21001C7.42083 9.06087 7.18062 8.98704 6.93765 9.00237C6.69468 9.0177 6.46565 9.12113 6.29351 9.29328C6.12136 9.46542 6.01793 9.69445 6.0026 9.93742C5.98727 10.1804 6.0611 10.4206 6.21024 10.613L6.29324 10.707L8.29324 12.707L8.38724 12.79C8.56262 12.9261 8.77828 12.9999 9.00024 12.9999C9.22221 12.9999 9.43787 12.9261 9.61324 12.79L9.70724 12.707L13.7072 8.70701L13.7902 8.61301C13.9395 8.42061 14.0134 8.18036 13.9981 7.93733C13.9829 7.69431 13.8794 7.46521 13.7072 7.29302Z' fill='%23D1E0F8'/%3E%3C/svg%3E%0A");fill:var(--cya11y-text-white, #fff);stroke:var(--cya11y-text-white, #fff);position:absolute;top:10px;right:10px;color:var(--cya11y-text-white, #fff);font-size:10px;width:20px;height:20px;line-height:6px}.cya11y-profile-items .cya11y-btn.cya11y-selected span,.cya11y-profile-items .cya11y-btn.cya11y-selected svg path{color:var(--cya11y-text-white, #fff);stroke:var(--cya11y-text-white, #fff)}.cya11y-profile-title-container{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding-left:var(--cya11y-spacing-md, 16px);padding-right:var(--cya11y-spacing-md, 16px);gap:var(--cya11y-spacing-sm, 12px)}.cya11y-profile-title{width:100%;height:64px;border-radius:var(--cya11y-radius-md, 12px)}.cya11y-arrow{margin-left:auto;font-size:18px;color:var(--cya11y-primary-hover, #2563eb);transition:transform var(--cya11y-transition-normal, .2s) ease-in-out;rotate:270deg}.cya11y-arrow-rotate{transform:rotate(90deg)}.cya11y-items{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem}.cya11y-btn{aspect-ratio:6 / 5;border-radius:var(--cya11y-radius-md, 12px);padding:0 12px;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:var(--cya11y-text-primary, #333);font-size:16px;background:var(--cya11y-bg-white, #fff);border:1px solid var(--cya11y-border-light, #E9EAEC);transition:border-color var(--cya11y-transition-normal, .2s) ease;cursor:pointer;word-break:break-word;gap:10px;position:relative;width:auto;height:auto}.cya11y-btn .cya11y-translate,.cya11y-adjust-font .cya11y-label div{font-size:14px;font-weight:500;line-height:22px}.cya11y-btn svg{width:34px;height:34px;min-width:34px;min-height:34px;max-width:34px;max-height:34px}.cya11y-btn:hover,.cya11y-btn.cya11y-selected{border:2px solid var(--cya11y-primary-color, #1863DC)}.cya11y-btn.cya11y-selected{box-shadow:var(--cya11y-shadow-focus, 0px 0px 0px 6px #1863DC24)}.cya11y-btn.cya11y-selected svg,.cya11y-btn.cya11y-selected svg path,.cya11y-btn.cya11y-selected span{stroke:var(--cya11y-primary-color, #1863DC);color:var(--cya11y-primary-color, #1863DC)}.cya11y-btn.cya11y-selected:after{content:"";display:inline-block;background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.0002 1.34014C16.5085 2.21099 17.7632 3.46066 18.6401 4.96544C19.5169 6.47021 19.9856 8.17791 19.9997 9.91948C20.0137 11.661 19.5727 13.3761 18.7203 14.8948C17.8678 16.4136 16.6335 17.6834 15.1395 18.5785C13.6455 19.4736 11.9436 19.963 10.2023 19.9982C8.46107 20.0334 6.74079 19.6133 5.2118 18.7794C3.6828 17.9455 2.39812 16.7267 1.48491 15.2437C0.571706 13.7606 0.0616534 12.0648 0.00524426 10.3241L0.000244141 10.0001L0.00524426 9.67614C0.0612473 7.94913 0.563792 6.2661 1.46388 4.79113C2.36398 3.31616 3.6309 2.09959 5.14114 1.26002C6.65137 0.420449 8.35339 -0.0134666 10.0813 0.000574386C11.8091 0.0146154 13.5038 0.476134 15.0002 1.34014ZM13.7072 7.29314C13.5351 7.12096 13.306 7.01753 13.0629 7.00225C12.8199 6.98697 12.5796 7.06089 12.3872 7.21014L12.2932 7.29314L9.00024 10.5851L7.70724 9.29314L7.61324 9.21014C7.42083 9.06099 7.18062 8.98716 6.93765 9.00249C6.69468 9.01782 6.46565 9.12125 6.29351 9.2934C6.12136 9.46554 6.01793 9.69457 6.0026 9.93754C5.98727 10.1805 6.0611 10.4207 6.21024 10.6131L6.29324 10.7071L8.29324 12.7071L8.38724 12.7901C8.56262 12.9262 8.77828 13.0001 9.00024 13.0001C9.22221 13.0001 9.43787 12.9262 9.61324 12.7901L9.70724 12.7071L13.7072 8.70714L13.7902 8.61314C13.9395 8.42073 14.0134 8.18048 13.9981 7.93746C13.9829 7.69443 13.8794 7.46533 13.7072 7.29314Z' fill='%231863DC'/%3E%3C/svg%3E%0A");background-repeat:no-repeat;fill:var(--cya11y-text-white, #fff);stroke:var(--cya11y-text-white, #fff);position:absolute;top:10px;right:10px;color:var(--cya11y-text-white, #fff);font-size:10px;width:20px;height:20px;line-height:6px}.cya11y-adjust-font{background:var(--cya11y-bg-white, #fff);padding-top:10px;padding-bottom:13px;border:1px solid var(--cya11y-border-light, #E9EAEC);border-radius:var(--cya11y-radius-md, 12px);box-shadow:none;transition:outline var(--cya11y-transition-normal, .2s) ease;grid-column:span 2}.cya11y-adjust-font .cya11y-label{display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500;color:var(--cya11y-text-secondary, #293C5B);margin-bottom:10px}.cya11y-adjust-font .cya11y-label svg{margin-right:var(--cya11y-spacing-sm, 12px);width:36px;height:36px;min-width:36px;min-height:36px;max-width:36px;max-height:36px;fill:var(--cya11y-text-secondary, #293C5B)}.cya11y-adjust-font>div:last-child{display:flex;justify-content:center;align-items:center;gap:10px;margin-top:var(--cya11y-spacing-sm, 12px)}.cya11y-adjust-font svg{width:24px;height:24px;min-width:24px;min-height:24px;max-width:24px;max-height:24px}.cya11y-plus,.cya11y-minus{background-color:var(--cya11y-bg-primary, #eff1f5);border:2px solid transparent;transition:border var(--cya11y-transition-normal, .2s) ease}.cya11y-plus:hover,.cya11y-minus:hover{border-color:var(--cya11y-primary-color, #1863DC)}.cya11y-adjust-font .cya11y-minus,.cya11y-adjust-font .cya11y-plus{background:var(--cya11y-primary-color, #1863DC);border-radius:var(--cya11y-radius-full, 50%);width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;box-shadow:none;transition:background var(--cya11y-transition-normal, .2s)}.cya11y-adjust-font .cya11y-minus svg,.cya11y-adjust-font .cya11y-plus svg{fill:var(--cya11y-text-white, #fff);width:38px;height:38px}.cya11y-adjust-font .cya11y-minus:hover,.cya11y-adjust-font .cya11y-plus:hover{background:var(--cya11y-primary-color, #1863DC)}.cya11y-adjust-font:hover{outline:2px solid var(--cya11y-primary-color, #1863DC)}.cya11y-amount{font-size:14px;font-weight:400;color:var(--cya11y-primary-color, #1863DC)}.cya11y-adjust-font .cya11y-amount{background:#e9eaec;color:var(--cya11y-primary-color, #1863DC);font-size:14px;font-weight:400;border-radius:40px;min-width:100px;min-height:40px;display:flex;align-items:center;justify-content:center;margin:0 10px;box-shadow:none;letter-spacing:.01em}.cya11y-footer{bottom:0;left:0;right:0;background:var(--cya11y-bg-white, #fff);padding:14px;text-align:center;border-top:2px solid var(--cya11y-bg-primary, #eff1f5)}.cya11y-footer a{font-size:16px;text-decoration:none;color:var(--cya11y-text-primary, #333);background:transparent;font-weight:600}.cya11y-footer a:hover,.cya11y-footer a:hover span{color:var(--cya11y-primary-color, #1863DC)}.cya11y-menu-reset-footer{display:grid;grid-template-columns:1fr 1fr;align-items:center;justify-content:center;gap:10px;padding:16px 0}.cya11y-custom-select{position:relative;width:100%;font-family:inherit;font-size:16px}.cya11y-selected-lang{display:flex;align-items:center;gap:var(--cya11y-spacing-sm, 12px);background:var(--cya11y-bg-white, #fff);border-radius:var(--cya11y-radius-md, 12px);padding:15px;cursor:pointer;user-select:none;transition:border var(--cya11y-transition-normal, .2s);border:1.5px solid transparent}.cya11y-selected-lang:focus,.cya11y-selected-lang:hover{border:1.5px solid var(--cya11y-primary-hover, #2563eb)}.cya11y-lang-code{display:inline-flex;align-items:center;justify-content:center;background:var(--cya11y-border-light, #E9EAEC);color:var(--cya11y-text-muted, #3D3E50);font-weight:400;border-radius:var(--cya11y-radius-full, 50%);width:32px;height:32px;font-size:14px;text-transform:uppercase}.cya11y-dropdown-list{position:absolute;top:110%;left:0;width:100%;background:var(--cya11y-bg-white, #fff);border:1px solid var(--cya11y-border-focus, #dbeafe);border-radius:var(--cya11y-radius-md, 12px);box-shadow:var(--cya11y-shadow-md, 0 8px 24px rgba(41, 60, 91, .08));z-index:var(--cya11y-z-dropdown, 100);padding:var(--cya11y-spacing-xs, 8px) 0 0 0;max-height:320px;overflow:auto;transition:box-shadow var(--cya11y-transition-normal, .2s)}.cya11y-lang-search{height:48px;width:80%;margin:0 5%;margin-bottom:var(--cya11y-spacing-xs, 8px);padding:0 var(--cya11y-spacing-md, 16px);border:1px solid var(--cya11y-border-focus, #dbeafe);border-radius:4px;font-size:15px;outline:none}.cya11y-lang-options{max-height:240px;overflow-y:auto}.cya11y-lang-option{display:flex;align-items:center;gap:var(--cya11y-spacing-sm, 12px);padding:var(--cya11y-spacing-xs, 8px) var(--cya11y-spacing-md, 16px);cursor:pointer;transition:background var(--cya11y-transition-fast, .15s)}.cya11y-lang-option.selected{background:var(--cya11y-primary-light, #D1E0F8)}.cya11y-lang-option:hover{background:#f1f6fd}.cya11y-lang-label{color:inherit;font-size:15px;font-weight:500}.cya11y-menu .cya11y-select{width:100%;padding:0 15px;font-size:16px;font-family:inherit;font-weight:600;border-radius:var(--cya11y-radius-lg, 45px);background:var(--cya11y-bg-white, #fff);border:none;min-height:45px;max-height:45px;height:45px;color:inherit}.cya11y-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:var(--cya11y-z-overlay, 10000)}@media only screen and (max-width: 560px){.cya11y-menu{width:100%}.cya11y-profile-items{grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;padding:0 var(--cya11y-spacing-sm, 12px) var(--cya11y-spacing-sm, 12px) var(--cya11y-spacing-sm, 12px)}}@media only screen and (max-width: 420px){.cya11y-items{grid-template-columns:repeat(2,minmax(0,1fr));gap:.5rem}.cya11y-profile-items{grid-template-columns:1fr;gap:.5rem;padding:0 var(--cya11y-spacing-xs, 8px) var(--cya11y-spacing-xs, 8px) var(--cya11y-spacing-xs, 8px);justify-items:center}}
`;

  // src/globals/pluginConfig.ts
  var defaultConfig = {
    status: {
      mobile: true,
      desktop: true
    },
    iconId: "accessibility",
    iconSize: 48,
    label: "Accessibility widget",
    heading: "Accessibility menu",
    position: {
      mobile: "bottom-right",
      desktop: "bottom-right"
    },
    language: {
      default: "en",
      selected: []
    },
    margins: {
      desktop: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
      },
      mobile: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
      }
    },
    primaryColor: "#1863DC",
    modules: {
      color: {
        darkContrast: { enabled: false },
        lightContrast: { enabled: false },
        highContrast: { enabled: false },
        highSaturation: { enabled: false },
        lightSaturation: { enabled: false },
        monochrome: { enabled: false }
      },
      content: {
        highlightText: { enabled: false },
        highlightLinks: { enabled: false },
        dyslexicFont: { enabled: true },
        letterSpacing: { enabled: false },
        lineHeight: { enabled: true },
        fontWeight: { enabled: false }
      },
      statement: {
        enabled: false,
        url: ""
      }
    }
  };
  var pluginConfig = window._cyA11yConfig || defaultConfig;

  // src/views/menu/toggleMenu.ts
  function toggleMenu() {
    const isVisible = $menu.style.display !== "none";
    const shadowRoot = $menu.getRootNode();
    const $overlay = shadowRoot.querySelector(".cya11y-overlay");
    if (String($menu.style.display) !== "none" || isVisible) {
      $menu.style.display = "none";
      $overlay.style.display = "none";
      if ($menu._escapeKeyHandler) {
        document.removeEventListener("keydown", $menu._escapeKeyHandler);
        delete $menu._escapeKeyHandler;
      }
      const widgetContainer = document.querySelector(".cya11y-container");
      if (widgetContainer) {
        const widgetShadowRoot = widgetContainer.shadowRoot;
        if (widgetShadowRoot) {
          const widgetButton = widgetShadowRoot.querySelector(".cya11y-menu-btn");
          if (widgetButton) {
            widgetButton.setAttribute("aria-expanded", "false");
          }
        }
      }
    } else {
      $menu.style.display = "block";
      $overlay.style.display = "block";
      const widgetContainer = document.querySelector(".cya11y-container");
      if (widgetContainer) {
        const widgetShadowRoot = widgetContainer.shadowRoot;
        if (widgetShadowRoot) {
          const widgetButton = widgetShadowRoot.querySelector(".cya11y-menu-btn");
          if (widgetButton) {
            widgetButton.setAttribute("aria-expanded", "true");
          }
        }
      }
    }
  }

  // src/enum/Profiles.ts
  var PROFILES = {
    "seizure-safe-profile": {
      "contrast": "low-saturation",
      "tools": ["stop-animations"]
    },
    "adhd-profile": {
      "contrast": "high-saturation",
      "tools": ["stop-animations", "readable-guide"]
    },
    "cognitive-disabilities-profile": {
      "tools": ["stop-animations", "highlight-links", "highlight-title"]
    }
  };

  // src/tools/selectButtons.ts
  function selectButtons($menu2) {
    const states = userSettings.states;
    if (states) {
      const buttons = Array.from(
        $menu2.querySelectorAll(".cya11y-btn")
      );
      Object.entries(states).forEach(([key, value]) => {
        if (value && key !== "fontSize") {
          const selector = key === "contrast" ? states[key] : key;
          const btn = buttons.find((b) => b.dataset.key === selector);
          if (btn) btn.classList.add("cya11y-selected");
        } else {
          const btn = buttons.find((b) => b.dataset.key === key);
          if (btn) btn.classList.remove("cya11y-selected");
          if (key === "contrast") {
            const filterBtn = $menu2.querySelectorAll(".cya11y-filter");
            filterBtn.forEach((btn2) => {
              btn2.classList.remove("cya11y-selected");
            });
          }
        }
      });
    }
  }

  // src/tools/enableProfile.ts
  function enableProfile(profile, $menu2) {
    const profileConfig = PROFILES[profile];
    if (!profileConfig) {
      return;
    }
    userSettings.states.contrast = profileConfig.contrast;
    enableContrast(profileConfig.contrast);
    profileConfig.tools.forEach((tool) => {
      userSettings.states[tool] = true;
    });
    saveUserSettings();
    renderTools();
    selectButtons($menu2);
  }

  // src/tools/disableContrast.ts
  function disableContrast() {
    document.getElementById("cya11y-filter-style")?.remove();
    document.documentElement.classList.remove("cya11y-filter");
  }

  // src/tools/disableProfile.ts
  function disableProfile(profile, $menu2) {
    const profileConfig = PROFILES[profile];
    disableContrast();
    userSettings.states.contrast = false;
    profileConfig.tools.forEach((tool) => {
      userSettings.states[tool] = false;
      saveUserSettings();
    });
    renderTools();
    selectButtons($menu2);
  }

  // import("../locales/**/*.json") in src/i18n/Languages.ts
  var globImport_locales_json = __glob({
    "../locales/am.json": () => Promise.resolve().then(() => __toESM(require_am())),
    "../locales/ar.json": () => Promise.resolve().then(() => __toESM(require_ar())),
    "../locales/bg.json": () => Promise.resolve().then(() => __toESM(require_bg())),
    "../locales/bn.json": () => Promise.resolve().then(() => __toESM(require_bn())),
    "../locales/ca.json": () => Promise.resolve().then(() => __toESM(require_ca())),
    "../locales/cs.json": () => Promise.resolve().then(() => __toESM(require_cs())),
    "../locales/da.json": () => Promise.resolve().then(() => __toESM(require_da())),
    "../locales/de.json": () => Promise.resolve().then(() => __toESM(require_de())),
    "../locales/el.json": () => Promise.resolve().then(() => __toESM(require_el())),
    "../locales/en.json": () => Promise.resolve().then(() => __toESM(require_en())),
    "../locales/es.json": () => Promise.resolve().then(() => __toESM(require_es())),
    "../locales/fa.json": () => Promise.resolve().then(() => __toESM(require_fa())),
    "../locales/fi.json": () => Promise.resolve().then(() => __toESM(require_fi())),
    "../locales/fil.json": () => Promise.resolve().then(() => __toESM(require_fil())),
    "../locales/fr.json": () => Promise.resolve().then(() => __toESM(require_fr())),
    "../locales/he.json": () => Promise.resolve().then(() => __toESM(require_he())),
    "../locales/hi.json": () => Promise.resolve().then(() => __toESM(require_hi())),
    "../locales/hr.json": () => Promise.resolve().then(() => __toESM(require_hr())),
    "../locales/hu.json": () => Promise.resolve().then(() => __toESM(require_hu())),
    "../locales/id.json": () => Promise.resolve().then(() => __toESM(require_id())),
    "../locales/it.json": () => Promise.resolve().then(() => __toESM(require_it())),
    "../locales/ja.json": () => Promise.resolve().then(() => __toESM(require_ja())),
    "../locales/ka.json": () => Promise.resolve().then(() => __toESM(require_ka())),
    "../locales/kn.json": () => Promise.resolve().then(() => __toESM(require_kn())),
    "../locales/ko.json": () => Promise.resolve().then(() => __toESM(require_ko())),
    "../locales/ku.json": () => Promise.resolve().then(() => __toESM(require_ku())),
    "../locales/lb.json": () => Promise.resolve().then(() => __toESM(require_lb())),
    "../locales/ml.json": () => Promise.resolve().then(() => __toESM(require_ml())),
    "../locales/mn.json": () => Promise.resolve().then(() => __toESM(require_mn())),
    "../locales/ms.json": () => Promise.resolve().then(() => __toESM(require_ms())),
    "../locales/my.json": () => Promise.resolve().then(() => __toESM(require_my())),
    "../locales/nl.json": () => Promise.resolve().then(() => __toESM(require_nl())),
    "../locales/no.json": () => Promise.resolve().then(() => __toESM(require_no())),
    "../locales/pa.json": () => Promise.resolve().then(() => __toESM(require_pa())),
    "../locales/pl.json": () => Promise.resolve().then(() => __toESM(require_pl())),
    "../locales/pt.json": () => Promise.resolve().then(() => __toESM(require_pt())),
    "../locales/ro.json": () => Promise.resolve().then(() => __toESM(require_ro())),
    "../locales/ru.json": () => Promise.resolve().then(() => __toESM(require_ru())),
    "../locales/si.json": () => Promise.resolve().then(() => __toESM(require_si())),
    "../locales/sk.json": () => Promise.resolve().then(() => __toESM(require_sk())),
    "../locales/sl.json": () => Promise.resolve().then(() => __toESM(require_sl())),
    "../locales/sr.json": () => Promise.resolve().then(() => __toESM(require_sr())),
    "../locales/sv.json": () => Promise.resolve().then(() => __toESM(require_sv())),
    "../locales/sw.json": () => Promise.resolve().then(() => __toESM(require_sw())),
    "../locales/ta.json": () => Promise.resolve().then(() => __toESM(require_ta())),
    "../locales/te.json": () => Promise.resolve().then(() => __toESM(require_te())),
    "../locales/th.json": () => Promise.resolve().then(() => __toESM(require_th())),
    "../locales/tr.json": () => Promise.resolve().then(() => __toESM(require_tr())),
    "../locales/ur.json": () => Promise.resolve().then(() => __toESM(require_ur())),
    "../locales/vi.json": () => Promise.resolve().then(() => __toESM(require_vi())),
    "../locales/zh.json": () => Promise.resolve().then(() => __toESM(require_zh()))
  });

  // src/i18n/Languages.ts
  var LANGUAGES = [
    { code: "am", label: "\u12A0\u121B\u122D\u129B (Amharic)" },
    { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (Arabic)" },
    { code: "bg", label: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 (Bulgarian)" },
    { code: "bn", label: "\u09AC\u09BE\u0982\u09B2\u09BE (Bengali)" },
    { code: "ca", label: "Catal\xE0 (Catalan)" },
    { code: "cs", label: "\u010De\u0161tina (Czech)" },
    { code: "da", label: "Danish (Denmark)" },
    { code: "de", label: "Deutsch (German)" },
    { code: "el", label: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC (Greek)" },
    { code: "en", label: "English (English)" },
    { code: "es", label: "Espa\xF1ol (Spanish)" },
    { code: "fa", label: "\u0641\u0627\u0631\u0633\u06CC (Persian)" },
    { code: "fi", label: "suomi (Finnish)" },
    { code: "fil", label: "Tagalog (Filipno)" },
    { code: "fr", label: "Fran\xE7ais (French)" },
    { code: "he", label: "\u05E2\u05D1\u05E8\u05D9\u05EA (Hebrew)" },
    { code: "hi", label: "\u0939\u093F\u0928\u094D\u0926\u0940 (Hindi)" },
    { code: "hr", label: "Hrvatski (Croatian)" },
    { code: "hu", label: "Magyar (Hungarian)" },
    { code: "id", label: "Bahasa Indonesia (Indonesian)" },
    { code: "it", label: "Italiano (Italian)" },
    { code: "ja", label: "\u65E5\u672C\u8A9E (Japanese)" },
    { code: "ka", label: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8 (Georgian)" },
    { code: "kn", label: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1 (Kannada)" },
    { code: "ko", label: "\uD55C\uAD6D\uC5B4 (Korean)" },
    { code: "ku", label: "Kurd\xEE (Kurdish)" },
    { code: "lb", label: "L\xEBtzebuergesch (Luxembourgish)" },
    { code: "ml", label: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02 (Malayalam)" },
    { code: "mn", label: "\u041C\u043E\u043D\u0433\u043E\u043B (Mongolian)" },
    { code: "ms", label: "Bahasa Malaysia (Malay)" },
    { code: "my", label: "\u1019\u103C\u1014\u103A\u1019\u102C (Burmese)" },
    { code: "nl", label: "Nederlands (Dutch)" },
    { code: "no", label: "Norsk (Norwegian)" },
    { code: "pa", label: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 (Punjabi)" },
    { code: "pl", label: "Polski (Polish)" },
    { code: "pt", label: "Portugu\xEAs (Portuguese)" },
    { code: "ro", label: "Rom\xE2n\u0103 (Romanian)" },
    { code: "ru", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (Russian)" },
    { code: "si", label: "Sloven\u0161\u010Dina (Slovene)" },
    { code: "sk", label: "sloven\u010Dina (Slovak)" },
    { code: "sl", label: "sloven\u0161\u010Dina (Slovenian)" },
    { code: "sr", label: "Srpski (Serbian)" },
    { code: "sv", label: "Svenska (Swedish)" },
    { code: "sw", label: "Kiswahili (Swahili)" },
    { code: "ta", label: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD (Tamil)" },
    { code: "te", label: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 (Telugu)" },
    { code: "th", label: "\u0E44\u0E17\u0E22 (Thai)" },
    { code: "tr", label: "T\xFCrk\xE7e (Turkish)" },
    { code: "ur", label: "\u0627\u0631\u062F\u0648 (Urdu)" },
    { code: "vi", label: "Ti\u1EBFng Vi\u1EC7t (Vietnamese)" }
  ];
  var locales = LANGUAGES.map((lang) => lang.code);
  var LANGUAGE_DICTIONARY = {};
  async function loadLanguages() {
    for (const locale of locales) {
      LANGUAGE_DICTIONARY[locale] = (await globImport_locales_json(`../locales/${locale}.json`)).default;
    }
  }
  loadLanguages();

  // src/i18n/translate.ts
  function t(label) {
    const dictionary = LANGUAGE_DICTIONARY[userSettings.lang] ?? LANGUAGE_DICTIONARY[pluginConfig.language.default];
    return dictionary[label] ?? label;
  }

  // src/views/menu/translateWidget.ts
  function getTranslatedLabel(el, defaultValue) {
    const key = el.getAttribute("data-translate") || defaultValue;
    if (!el.hasAttribute("data-translate") && defaultValue) {
      el.setAttribute("data-translate", key);
    }
    return t(key);
  }
  function translateWidget($menu2) {
    $menu2.querySelectorAll(".cya11y-card-title, .cya11y-translate").forEach((el) => {
      const text = el.textContent?.trim() || "";
      el.textContent = getTranslatedLabel(el, text);
    });
    $widget.querySelectorAll("[title]").forEach((el) => {
      const title = el.getAttribute("title") || "";
      el.setAttribute("title", getTranslatedLabel(el, title));
    });
  }

  // src/i18n/changeLanguage.ts
  function changeLanguage(newLang, $menu2) {
    newLang = String(newLang || "").toLowerCase();
    if (!LANGUAGES.some((lang) => lang.code === newLang)) {
      newLang = pluginConfig.language.default;
    }
    if (userSettings.lang !== newLang) {
      userSettings.lang = newLang;
      const $lang = $menu2.querySelector("#cya11y-language");
      if ($lang) {
        $lang.value = newLang;
      }
      translateWidget($menu2);
      saveUserSettings();
    }
  }

  // src/icons/arrowIcon.svg
  var arrowIcon_default = '<svg viewbox="0 0 24 24" fill=none height=24 width=24 xmlns=http://www.w3.org/2000/svg><path d="M18 9L12 15L6 9" stroke=black stroke-linecap=round stroke-linejoin=round stroke-width=2 /></svg>';

  // src/utils/getScriptDataAttribute.ts
  function getScriptDataAttribute(attr) {
    if (!attr || typeof attr !== "string") {
      console.warn("Invalid attribute name provided to getScriptDataAttribute:", attr);
      return null;
    }
    const key = `data-cya11y-${attr}`;
    try {
      const script = document.currentScript;
      if (script?.hasAttribute(key)) {
        return script.getAttribute(key);
      }
      const element = document.querySelector(`[${key}]`);
      return element?.getAttribute(key) || null;
    } catch (error) {
      console.error("Error getting script data attribute:", error);
      return null;
    }
  }

  // src/i18n/getDefaultLanguage.ts
  function getDefaultLanguage() {
    const detectedLanguage = getScriptDataAttribute("lang") || document.documentElement?.lang || navigator?.language || document.querySelector('meta[http-equiv="Content-Language"]')?.content;
    const languageCode = detectedLanguage?.split(/[-_]/)?.[0]?.trim() || pluginConfig.language.default;
    const isLanguageSupported = LANGUAGES.some((lang) => lang.code === languageCode);
    if (isLanguageSupported) {
      return languageCode;
    } else {
      return pluginConfig.language.default;
    }
  }

  // src/views/menu/renderLanguageDropdown.ts
  if (!LANGUAGES.some((lang) => lang.code === userSettings.lang)) {
    userSettings.lang = getDefaultLanguage();
  }
  var dropdownOpen = false;
  var outsideClickHandler = null;
  function renderLanguageDropdown($menu2, filter = "") {
    const $langDropdown = $menu2.querySelector("#cya11y-language-dropdown");
    const filteredLangs = LANGUAGES.filter(
      (lang) => lang.label.toLowerCase().includes(filter.toLowerCase()) || lang.code.toLowerCase().includes(filter.toLowerCase())
    );
    const selectedIndex = filteredLangs.findIndex((l) => l.code === userSettings.lang);
    $langDropdown.innerHTML = `
    <div class="cya11y-custom-select" role="combobox" aria-haspopup="listbox" aria-expanded="${dropdownOpen}">
      <div class="cya11y-selected-lang" id="cya11y-selected-lang" aria-label="Selected language" aria-controls="cya11y-lang-list" aria-haspopup="listbox" tabindex="0">
        <span class="cya11y-lang-code">${userSettings.lang.toUpperCase()}</span>
        <span class="cya11y-lang-label">${LANGUAGES.find((l) => l.code === userSettings.lang)?.label}</span>
        <span class="cya11y-arrow" aria-hidden="true">
          ${arrowIcon_default}
        </span>
      </div>
      <div class="cya11y-dropdown-list" id="cya11y-lang-list" role="listbox" style="display:${dropdownOpen ? "block" : "none"};">
        <input type="text" id="cya11y-lang-search" class="cya11y-lang-search" placeholder="Search languages" value="${filter}" aria-label="Search languages" />
        <div class="cya11y-lang-options">
          ${filteredLangs.map((lang, i) => `
            <div class="cya11y-lang-option${lang.code === userSettings.lang ? " selected" : ""}" role="option" aria-selected="${lang.code === userSettings.lang}" data-code="${lang.code}" tabindex="-1" data-index="${i}">
              <span class="cya11y-lang-code">${lang.code.toUpperCase()}</span>
              <span class="cya11y-lang-label">${lang.label}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
    const $selected = $langDropdown.querySelector(".cya11y-selected-lang");
    const $dropdown = $langDropdown.querySelector(".cya11y-dropdown-list");
    const $search = $langDropdown.querySelector(".cya11y-lang-search");
    const $optionsContainer = $dropdown.querySelector(".cya11y-lang-options");
    let focusedOption = selectedIndex >= 0 ? selectedIndex : 0;
    $selected.onclick = (e) => {
      e.stopPropagation();
      if (dropdownOpen) {
        closeDropdown($langDropdown);
        $selected.querySelector(".cya11y-arrow")?.classList.remove("cya11y-arrow-rotate");
      } else {
        openDropdown($langDropdown);
        $selected.querySelector(".cya11y-arrow")?.classList.add("cya11y-arrow-rotate");
        $search?.focus();
      }
    };
    $selected.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        openDropdown($langDropdown);
        $selected.querySelector(".cya11y-arrow")?.classList.add("cya11y-arrow-rotate");
        setTimeout(() => $search?.focus(), 0);
      }
    };
    $search?.addEventListener("input", (e) => {
      const searchValue = $search.value;
      const $dropdown2 = $langDropdown.querySelector(".cya11y-dropdown-list");
      const $optionsContainer2 = $dropdown2.querySelector(".cya11y-lang-options");
      const filteredLangs2 = LANGUAGES.filter(
        (lang) => lang.label.toLowerCase().includes(searchValue.toLowerCase()) || lang.code.toLowerCase().includes(searchValue.toLowerCase())
      );
      $optionsContainer2.innerHTML = filteredLangs2.map((lang, i) => `
      <div class="cya11y-lang-option${lang.code === userSettings.lang ? " selected" : ""}" role="option" aria-selected="${lang.code === userSettings.lang}" data-code="${lang.code}" tabindex="-1" data-index="${i}">
        <span class="cya11y-lang-code">${lang.code.toUpperCase()}</span>
        <span class="cya11y-lang-label">${lang.label}</span>
      </div>
    `).join("");
      const $newOptions = Array.from($optionsContainer2.querySelectorAll(".cya11y-lang-option"));
      $newOptions.forEach(($option, i) => {
        $option.onclick = (e2) => {
          e2.stopPropagation();
          changeLanguage($option.dataset.code, $menu2);
          closeDropdown($langDropdown);
          renderLanguageDropdown($menu2);
          $selected.focus();
        };
      });
    });
    $search?.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const $filteredOptions = Array.from($langDropdown.querySelectorAll(".cya11y-lang-option"));
        $filteredOptions[0].focus();
        $filteredOptions.forEach((option, index) => {
          option.addEventListener("keydown", (e2) => {
            if (e2.key === "ArrowDown") {
              e2.preventDefault();
              if (index < $filteredOptions.length - 1) {
                $filteredOptions[index + 1].focus();
              }
            } else if (e2.key === "ArrowUp") {
              e2.preventDefault();
              if (index > 0) {
                $filteredOptions[index - 1].focus();
              } else {
                $search.focus();
              }
            } else if (e2.key === "Enter" || e2.key === " ") {
              e2.preventDefault();
              changeLanguage(option.dataset.code, $menu2);
              closeDropdown($langDropdown);
              renderLanguageDropdown($menu2);
              $selected.focus();
            } else if (e2.key === "Escape") {
              closeDropdown($langDropdown);
              $selected.focus();
            }
          });
        });
      }
    });
    const $allOptions = Array.from($langDropdown.querySelectorAll(".cya11y-lang-option"));
    $allOptions.forEach(($option, index) => {
      $option.addEventListener("focus", () => {
        $option.setAttribute("aria-selected", "true");
        $allOptions.forEach((opt) => {
          if (opt !== $option) {
            opt.setAttribute("aria-selected", "false");
          }
        });
      });
      $option.addEventListener("click", () => {
        changeLanguage($option.dataset.code, $menu2);
        closeDropdown($langDropdown);
        renderLanguageDropdown($menu2);
        $selected.focus();
      });
      $option.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          if (index < $allOptions.length - 1) {
            $allOptions[index + 1].focus();
          }
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (index > 0) {
            $allOptions[index - 1].focus();
          } else {
            $search.focus();
          }
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          changeLanguage($option.dataset.code, $menu2);
          closeDropdown($langDropdown);
          renderLanguageDropdown($menu2);
          $selected.focus();
        } else if (e.key === "Escape") {
          closeDropdown($langDropdown);
          $selected.focus();
        }
      });
    });
    $search?.addEventListener("focus", () => {
      openDropdown($langDropdown);
    });
  }
  function closeDropdown($langDropdown) {
    const $dropdown = $langDropdown.querySelector(".cya11y-dropdown-list");
    const $selected = $langDropdown.querySelector(".cya11y-selected-lang");
    if ($dropdown) $dropdown.style.display = "none";
    $selected.querySelector(".cya11y-arrow")?.classList.remove("cya11y-arrow-rotate");
    dropdownOpen = false;
    if (outsideClickHandler) {
      document.removeEventListener("mousedown", outsideClickHandler);
      outsideClickHandler = null;
    }
  }
  function openDropdown($langDropdown) {
    const $dropdown = $langDropdown.querySelector(".cya11y-dropdown-list");
    const $selected = $langDropdown.querySelector(".cya11y-selected-lang");
    if ($dropdown) $dropdown.style.display = "block";
    $selected.querySelector(".cya11y-arrow")?.classList.add("cya11y-arrow-rotate");
    dropdownOpen = true;
    if (!outsideClickHandler) {
      outsideClickHandler = (e) => {
        if (!$langDropdown.contains(e.target)) {
        }
      };
      document.addEventListener("mousedown", outsideClickHandler);
    }
  }

  // src/utils/device.ts
  var MOBILE_BREAKPOINT = 768;
  function isMobileDevice() {
    return window.innerWidth < MOBILE_BREAKPOINT;
  }
  function getCurrentDevice() {
    return isMobileDevice() ? "mobile" : "desktop";
  }

  // src/utils/trapFocus.ts
  function trapFocus(container) {
    const focusableElements = container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];
    const getActiveElement = () => {
      const rootNode = container.getRootNode();
      if (rootNode instanceof ShadowRoot) {
        return rootNode.activeElement;
      }
      return document.activeElement;
    };
    container.addEventListener("keydown", function(e) {
      if (e.key === "Tab") {
        const activeElement = getActiveElement();
        if (e.shiftKey) {
          if (activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });
  }

  // src/views/menu/renderMenu.ts
  function announceToScreenReader(message) {
    const announcements = document.getElementById("cya11y-menu-announcements");
    if (announcements) {
      announcements.textContent = message;
      setTimeout(() => {
        announcements.textContent = "";
      }, 1e3);
    }
  }
  function updateButtonAriaState(button, isPressed) {
    button.setAttribute("aria-pressed", isPressed.toString());
    if (isPressed) {
      button.classList.add("cya11y-selected");
    } else {
      button.classList.remove("cya11y-selected");
    }
  }
  function handleMenuKeyboardNavigation(event, currentButton) {
    const buttons = Array.from(currentButton.parentElement?.querySelectorAll(".cya11y-btn") || []);
    const currentIndex = buttons.indexOf(currentButton);
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % buttons.length;
        buttons[nextIndex]?.focus();
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        const prevIndex = currentIndex === 0 ? buttons.length - 1 : currentIndex - 1;
        buttons[prevIndex]?.focus();
        break;
      case "Home":
        event.preventDefault();
        buttons[0]?.focus();
        break;
      case "End":
        event.preventDefault();
        buttons[buttons.length - 1]?.focus();
        break;
    }
  }
  function renderMenu() {
    const device = getCurrentDevice();
    const $container = document.createElement("div");
    $container.innerHTML = `<style id="cya11y-menu-css">${menu_default2}</style>` + menu_default;
    const $menu2 = $container.querySelector(".cya11y-menu");
    const currentPosition = pluginConfig?.position[device];
    if (currentPosition) {
      $menu2.setAttribute("data-position", currentPosition);
      if (currentPosition.includes("right")) {
        $menu2.style.right = "0px";
        $menu2.style.left = "auto";
      } else if (currentPosition.includes("left")) {
        $menu2.style.left = "0px";
        $menu2.style.right = "auto";
      }
    }
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        toggleMenu();
        document.removeEventListener("keydown", handleEscapeKey);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    $menu2._escapeKeyHandler = handleEscapeKey;
    const contentElement = $menu2.querySelector(".content");
    const toolsElement = $menu2.querySelector(".tools");
    const contrastElement = $menu2.querySelector(".contrast");
    const profilesElement = $menu2.querySelector(".profiles");
    if (contentElement) {
      contentElement.innerHTML = renderButtons(ContentButtons_default);
    }
    if (toolsElement) {
      toolsElement.innerHTML = renderButtons(
        TOOL_PRESETS_default,
        "cya11y-tools"
      );
    }
    if (contrastElement) {
      contrastElement.innerHTML = renderButtons(
        FilterButtons_default,
        "cya11y-filter"
      );
    }
    if (profilesElement) {
      profilesElement.innerHTML = renderButtons(
        ProfileButtons_default,
        "cya11y-profile"
      );
    }
    const $profileCard = $menu2.querySelector(".cya11y-profile-card");
    const $profileTitle = $menu2.querySelector(".cya11y-profile-title");
    const $profileItems = $menu2.querySelector(".cya11y-profile-items");
    if ($profileItems) {
      $profileItems.style.display = "none";
    }
    if ($profileTitle) {
      $profileTitle.addEventListener("click", () => {
        const $profileItems2 = $menu2.querySelector(".cya11y-profile-items");
        const isExpanded = $profileItems2.style.display !== "none";
        $profileItems2.style.display = isExpanded ? "none" : "grid";
        $profileTitle.setAttribute("aria-expanded", (!isExpanded).toString());
        $profileCard.querySelector(".cya11y-arrow")?.classList.toggle("cya11y-arrow-rotate");
        announceToScreenReader(isExpanded ? "Accessibility profiles collapsed" : "Accessibility profiles expanded");
      });
    }
    $profileCard.remove();
    const states = userSettings?.states;
    const fontSize = Number(states?.fontSize) || 1;
    if (fontSize != 1) {
      const amountElement = $menu2.querySelector(".cya11y-amount");
      if (amountElement) {
        amountElement.innerHTML = `${(fontSize * 100).toFixed(0)}%`;
      }
    }
    selectButtons($menu2);
    renderLanguageDropdown($menu2);
    const $statementLink = $container.querySelector(".cya11y-accessibility-statement-link");
    if ($statementLink) {
      if (pluginConfig.modules.statement.enabled) {
        $statementLink.href = pluginConfig.modules.statement.url || "#";
        $statementLink.style.display = "block";
      } else {
        $statementLink.style.display = "none";
      }
    }
    $container.querySelectorAll(".cya11y-menu-close, .cya11y-overlay").forEach((el) => el.addEventListener("click", toggleMenu));
    $container.querySelectorAll(".cya11y-menu-reset").forEach((el) => el.addEventListener("click", () => {
      reset($menu2);
      announceToScreenReader("All accessibility settings have been reset to default");
    }));
    $menu2.querySelectorAll(".cya11y-plus, .cya11y-minus").forEach((el) => {
      const element = el;
      element.addEventListener("click", () => {
        const difference = 0.1;
        let fontSize2 = userSettings?.states?.fontSize || 1;
        if (element.classList.contains("cya11y-minus")) {
          fontSize2 -= difference;
        } else {
          fontSize2 += difference;
        }
        fontSize2 = Math.max(fontSize2, 0.1);
        fontSize2 = Math.min(fontSize2, 2);
        fontSize2 = Number(fontSize2.toFixed(2));
        const amountElement = $container.querySelector(".cya11y-amount");
        if (amountElement) {
          amountElement.textContent = `${(fontSize2 * 100).toFixed(0)}%`;
        }
        adjustFontSize(fontSize2);
        userSettings.states.fontSize = fontSize2;
        saveUserSettings();
        announceToScreenReader(`Font size set to ${(fontSize2 * 100).toFixed(0)}%`);
      });
    });
    $menu2.querySelectorAll(".cya11y-btn").forEach((el) => {
      const element = el;
      element.addEventListener("keydown", (event) => {
        handleMenuKeyboardNavigation(event, element);
      });
      element.addEventListener("click", () => {
        const key = element.dataset.key;
        if (!key) return;
        const isSelected = !element.classList.contains("cya11y-selected");
        if (element.classList.contains("cya11y-filter")) {
          $menu2.querySelectorAll(".cya11y-filter").forEach((el2) => {
            const filterElement = el2;
            updateButtonAriaState(filterElement, false);
          });
          if (isSelected) {
            updateButtonAriaState(element, true);
          }
          if (userSettings.states.contrast === key) {
            userSettings.states.contrast = false;
            saveUserSettings();
            disableContrast();
            announceToScreenReader("Contrast filter disabled");
            return;
          }
          userSettings.states.contrast = isSelected ? key : false;
          enableContrast(userSettings.states.contrast);
          saveUserSettings();
          renderTools();
          updateButtonAriaState(element, isSelected);
          const contrastLabel = element.querySelector(".cya11y-translate")?.textContent || key;
          announceToScreenReader(`${contrastLabel} contrast enabled`);
          return;
        }
        if (element.classList.contains("cya11y-profile")) {
          $menu2.querySelectorAll(".cya11y-profile").forEach((el2) => {
            const profileElement = el2;
            updateButtonAriaState(profileElement, false);
          });
          if (isSelected) {
            updateButtonAriaState(element, true);
          }
          if (userSettings.states[key]) {
            userSettings.states[key] = false;
            saveUserSettings();
            disableProfile(key, $menu2);
            announceToScreenReader(`${key} profile disabled`);
            return;
          }
          Object.keys(userSettings.states).forEach((stateKey) => {
            if (stateKey.includes("profile")) {
              userSettings.states[stateKey] = false;
              saveUserSettings();
              disableProfile(stateKey, $menu2);
            }
          });
          saveUserSettings();
          userSettings.states[key] = true;
          enableProfile(key, $menu2);
          saveUserSettings();
          renderTools();
          updateButtonAriaState(element, isSelected);
          const profileLabel = element.querySelector(".cya11y-translate")?.textContent || key;
          announceToScreenReader(`${profileLabel} profile enabled`);
        }
        updateButtonAriaState(element, isSelected);
        userSettings.states[key] = isSelected;
        renderTools();
        saveUserSettings();
        const settingLabel = element.querySelector(".cya11y-translate")?.textContent || key;
        announceToScreenReader(`${settingLabel} ${isSelected ? "enabled" : "disabled"}`);
      });
    });
    if ($widget) {
      $widget.appendChild($container);
    }
    trapFocus($menu2);
    return $menu2;
  }

  // src/views/menu/menu.ts
  var $menu;
  function openMenu() {
    if ($menu) {
      toggleMenu();
    } else {
      $menu = renderMenu();
    }
    translateWidget($menu);
  }

  // src/icons/accessibility.ts
  var Accessibility = `
   <svg viewBox="0 0 24 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
     <path
       d="M11.8001 20.032L11.1521 26.206C11.1245 26.4672 11.0457 26.7204 10.9203 26.9512C10.7949 27.1819 10.6252 27.3857 10.421 27.5509C10.2168 27.7161 9.98208 27.8395 9.73021 27.914C9.47834 27.9884 9.21427 28.0126 8.95307 27.985C8.69187 27.9574 8.43866 27.8787 8.2079 27.7532C7.97714 27.6278 7.77334 27.4581 7.60814 27.2539C7.44295 27.0497 7.31959 26.815 7.24511 26.5631C7.17063 26.3113 7.14649 26.0472 7.17407 25.786L8.62007 12.02H2.00007C1.46884 12.02 0.959371 11.809 0.583735 11.4333C0.2081 11.0577 -0.00292969 10.5482 -0.00292969 10.017C-0.00292969 9.48577 0.2081 8.9763 0.583735 8.60067C0.959371 8.22503 1.46884 8.014 2.00007 8.014H22.0001C22.5313 8.014 23.0408 8.22503 23.4164 8.60067C23.792 8.9763 24.0031 9.48577 24.0031 10.017C24.0031 10.5482 23.792 11.0577 23.4164 11.4333C23.0408 11.809 22.5313 12.02 22.0001 12.02H15.3801L16.8261 25.79C16.8628 26.0559 16.8456 26.3264 16.7756 26.5855C16.7057 26.8446 16.5844 27.087 16.4189 27.2982C16.2533 27.5095 16.0471 27.6853 15.8122 27.8153C15.5774 27.9452 15.3189 28.0266 15.052 28.0547C14.7851 28.0827 14.5152 28.0568 14.2585 27.9785C14.0019 27.9001 13.7635 27.771 13.5577 27.5987C13.352 27.4264 13.1829 27.2146 13.0607 26.9756C12.9384 26.7367 12.8654 26.4757 12.8461 26.208L12.2001 20.032H11.8001ZM12.0001 8.012C9.79007 8.012 8.00007 6.218 8.00007 4.006C8.00007 1.794 9.79007 0 12.0001 0C14.2101 0 16.0001 1.794 16.0001 4.006C16.0009 4.53179 15.898 5.05258 15.6973 5.53858C15.4966 6.02457 15.2021 6.46624 14.8306 6.83831C14.4591 7.21038 14.0179 7.50555 13.5322 7.70695C13.0465 7.90834 12.5259 8.012 12.0001 8.012Z"
       fill="currentColor" />
   </svg>
   `;

  // src/icons/assist.ts
  var Assist = `<svg viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.456055 15.2607C0.456063 19.7696 4.11123 23.4248 8.62012 23.4248C12.0774 23.4248 15.0296 21.2763 16.2207 18.2451L16.3301 17.9492L16.3633 17.8379C16.4953 17.2835 16.1883 16.7084 15.6387 16.5166C15.0886 16.3248 14.4901 16.5848 14.249 17.1016L14.2061 17.208L14.126 17.4228C13.2621 19.621 11.1214 21.1748 8.62012 21.1748C5.35387 21.1748 2.70606 18.527 2.70605 15.2607C2.70605 12.5025 4.59543 10.183 7.15137 9.53027L7.40039 9.47265L7.51172 9.44336C8.05538 9.27083 8.39091 8.71087 8.27148 8.14062C8.15202 7.57074 7.62056 7.19323 7.05371 7.25293L6.93945 7.2705L6.5957 7.35058C3.06643 8.25152 0.456055 11.4497 0.456055 15.2607Z" fill="currentColor"/>
<path d="M10.3848 2.5752C10.3848 3.61071 9.54527 4.4502 8.50976 4.4502C7.47424 4.4502 6.63476 3.61071 6.63476 2.5752C6.63476 1.53968 7.47424 0.700195 8.50976 0.700195C9.54527 0.700195 10.3848 1.53968 10.3848 2.5752Z" fill="currentColor"/>
<path d="M20.0073 19.3406L14.9273 14.2605H9.9834V11.4127H14.9655C15.7421 11.4127 16.3718 10.7831 16.3718 10.0064C16.3718 9.22982 15.7421 8.60019 14.9655 8.60019H9.9834V7.25853C9.9834 6.49227 9.3826 5.84455 8.61666 5.82355C7.82194 5.8018 7.1709 6.43949 7.1709 7.22928V16.1355C7.1709 16.6533 7.59062 17.073 8.1084 17.073H13.7623L18.0186 21.3294C18.5678 21.8785 19.4581 21.8785 20.0073 21.3294C20.5565 20.7802 20.5565 19.8898 20.0073 19.3406Z" fill="currentColor"/>
<path d="M18.8955 5C18.8955 4.4201 19.3654 3.95019 19.9453 3.95019C20.5252 3.95019 20.9951 4.4201 20.9951 5V12.4883C20.9951 13.0682 20.5252 13.5381 19.9453 13.5381H12C11.4201 13.5381 10.9502 13.0682 10.9502 12.4883C10.9502 11.9084 11.4201 11.4385 12 11.4385H18.8955V5Z" fill="currentColor"/>
</svg>
`;

  // src/icons/default.ts
  var DefaultIcon = `
   <svg
    viewBox="0 0 21 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.4978 6.3987C11.2129 6.3987 12.6039 4.98777 12.6039 3.24797V3.15073C12.6039 1.41093 11.2129 0 9.4978 0C7.78266 0 6.39172 1.41093 6.39172 3.15073V3.24797C6.39172 4.98777 7.78266 6.3987 9.4978 6.3987Z"
      fill="currentColor"
    />
    <path
      d="M0 21.1605L3.10956 23.9983L9.35134 16.963L6.26793 14.0952L0 21.1605Z"
      fill="currentColor"
    />
    <path
      d="M21 5.72695L18.0909 2.677L9.81848 10.7978L5.54109 6.65873L2.66858 9.71222L9.92834 16.5953L9.95449 16.5706L9.95798 16.5759L12.2709 14.2403L10.4059 17.0763L16.0672 23.9453L19.2692 21.2136L12.9681 13.6126L21 5.72695Z"
      fill="currentColor"
    />
  </svg>
   `;

  // src/icons/wheel.ts
  var wheel = `<svg  viewBox="0 0 20 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3572 19.3372L14.2778 14.2578H9.33459V11.4104H14.316C15.0926 11.4104 15.7221 10.7809 15.7221 10.0043C15.7221 9.22779 15.0926 8.59825 14.316 8.59825H9.33459V7.25677C9.33459 6.49061 8.73387 5.84298 7.96804 5.82198C7.17342 5.80019 6.52246 6.43783 6.52246 7.22753V16.1326C6.52246 16.6503 6.94212 17.07 7.45984 17.07H13.113L17.3687 21.3257C17.9179 21.8748 18.8081 21.8748 19.3572 21.3257C19.9063 20.7766 19.9063 19.8864 19.3572 19.3372Z" fill="currentColor"/>
<path d="M10.1749 2.73937C10.4575 1.54389 9.71744 0.345677 8.52196 0.0630863C7.32648 -0.219504 6.12827 0.52054 5.84568 1.71602C5.56309 2.9115 6.30313 4.10971 7.49861 4.3923C8.69409 4.67489 9.8923 3.93485 10.1749 2.73937Z" fill="currentColor"/>
<path d="M13.4658 19.4113C12.371 21.3118 10.3186 22.5939 7.97225 22.5939C4.47908 22.5939 1.63714 19.752 1.63714 16.2589C1.63714 13.7925 3.05403 11.651 5.1164 10.605V9.06375C2.25722 10.2027 0.231079 12.9985 0.231079 16.2589C0.231079 20.5273 3.70377 24 7.97225 24C10.7043 24 13.1103 22.5773 14.4884 20.4339L13.4658 19.4113Z" fill="currentColor"/>
</svg>
`;

  // src/views/widget/widget.ts
  var ICON_LIBRARY = [
    { id: "default", icon: DefaultIcon },
    { id: "accessibility", icon: Accessibility },
    { id: "assist", icon: Assist },
    { id: "wheel", icon: wheel }
  ];
  var $widget = null;
  var POSITION_STYLES = {
    "bottom-right": (margins) => ({
      bottom: `${margins.bottom}px`,
      right: `${margins.right}px`,
      left: "auto"
    }),
    "top-left": (margins) => ({
      top: `${margins.top}px`,
      left: `${margins.left}px`,
      bottom: "auto"
    }),
    "top-right": (margins) => ({
      top: `${margins.top}px`,
      right: `${margins.right}px`,
      left: "auto",
      bottom: "auto"
    }),
    "bottom-left": (margins) => ({
      bottom: `${margins.bottom}px`,
      left: `${margins.left}px`
    })
  };
  function getButtonStyle() {
    const device = getCurrentDevice();
    const { position, margins } = pluginConfig;
    const currentPosition = position[device];
    const currentMargins = margins[device];
    const positionStyle = POSITION_STYLES[currentPosition];
    return positionStyle ? positionStyle(currentMargins) : POSITION_STYLES["bottom-left"](currentMargins);
  }
  function handleWidgetKeyboardNavigation(event, button) {
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        openMenu();
        break;
      case "Escape":
        const widgetContainer = document.querySelector(".cya11y-container");
        if (widgetContainer) {
          const shadowRoot = widgetContainer.shadowRoot;
          if (shadowRoot) {
            const menu = shadowRoot.querySelector(".cya11y-menu");
            if (menu && menu.style.display !== "none") {
              const closeButton = menu.querySelector(".cya11y-menu-close");
              if (closeButton) {
                closeButton.click();
                button.setAttribute("aria-expanded", "false");
              }
            }
          }
        }
        break;
    }
  }
  function renderWidget() {
    try {
      const device = getCurrentDevice();
      const deviceStatus = device === "mobile" ? pluginConfig.status.mobile : pluginConfig.status.desktop;
      if (!deviceStatus) {
        console.log(`Widget disabled for ${device} device`);
        return null;
      }
      const $container = document.createElement("div");
      $container.classList.add("cya11y-container");
      const shadow = $container.attachShadow({ mode: "open" });
      const currentPosition = pluginConfig.position[device];
      const selectedIcon = ICON_LIBRARY.find(
        (icon) => icon.id === pluginConfig.iconId
      );
      shadow.innerHTML = `
      <style id="cya11y-widget-css">${widget_default}</style>
      <div class="cya11y-widget" data-position="${currentPosition}">
        <div class="cya11y-widget-icon">
          <div class="cya11y-tooltip" role="tooltip" aria-hidden="true">
            <div class="cya11y-tooltip-arrow"></div>
            ${pluginConfig.label}
          </div>
          <button 
             class="cya11y-menu-btn" 
             aria-label="${pluginConfig.label || "Accessibility menu"}"
             aria-expanded="false"
             aria-haspopup="dialog"
             aria-controls="cya11y-accessibility-menu"
             role="button" 
             type="button"
             tabindex="0">
            <span class="cya11y-btn-content" aria-hidden="true">
              ${selectedIcon?.icon || DefaultIcon}
            </span>
            <span class="cya11y-sr-only">Open accessibility menu</span>
          </button>
        </div>
      </div>
    `;
      $widget = shadow.querySelector(".cya11y-widget");
      if (!$widget) {
        throw new Error("Failed to find widget element");
      }
      $widget.style.setProperty(
        "--cya11y-primary-color",
        pluginConfig.primaryColor
      );
      $widget.style.setProperty("--cya11y-size", `${pluginConfig.iconSize}px`);
      const $btn = $widget.querySelector(".cya11y-menu-btn");
      const $icon = $widget.querySelector(".cya11y-widget-icon");
      if ($btn && $icon) {
        Object.assign($btn.style, getButtonStyle());
        Object.assign($icon.style, getButtonStyle());
        $btn.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          openMenu();
          setTimeout(() => {
            const widgetContainer = document.querySelector(".cya11y-container");
            if (widgetContainer) {
              const widgetShadowRoot = widgetContainer.shadowRoot;
              if (widgetShadowRoot) {
                const menu = widgetShadowRoot.querySelector(".cya11y-menu");
                if (menu) {
                  const isExpanded = menu.style.display !== "none";
                  $btn.setAttribute("aria-expanded", isExpanded.toString());
                }
              }
            }
          }, 10);
        });
        $btn.addEventListener("keydown", (event) => {
          handleWidgetKeyboardNavigation(event, $btn);
        });
        $btn.addEventListener("focus", () => {
          $btn.classList.add("cya11y-focus-visible");
        });
        $btn.addEventListener("blur", () => {
          $btn.classList.remove("cya11y-focus-visible");
        });
      }
      document.body.insertBefore($container, document.body.firstChild);
      return $widget;
    } catch (error) {
      console.error("Failed to render widget:", error);
      return null;
    }
  }

  // src/widget.ts
  function accessibilityWidget() {
    try {
      const savedSettings = getSavedUserSettings();
      console.log("Default language:", getDefaultLanguage());
      Object.assign(userSettings, savedSettings);
      if (!userSettings.lang) {
        userSettings.lang = getDefaultLanguage();
      }
      runAccessibility();
      renderWidget();
      return {
        changeLanguage
      };
    } catch (error) {
      console.error("Failed to initialize accessibility widget:", error);
      return {
        changeLanguage
      };
    }
  }

  // src/utils/observeHTMLLang.ts
  function observeHTMLLang() {
    try {
      const htmlElement = document.documentElement;
      if (!htmlElement) {
        console.warn("HTML element not found, cannot observe lang attribute");
        return;
      }
      const observer = new MutationObserver((mutations) => {
        try {
          for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "lang") {
              const newLanguage = getDefaultLanguage();
              changeLanguage(newLanguage, true);
            }
          }
        } catch (error) {
          console.error("Error handling lang attribute mutation:", error);
        }
      });
      observer.observe(htmlElement, {
        attributes: true,
        attributeFilter: ["lang"]
      });
      window.__cya11y__langObserver = observer;
    } catch (error) {
      console.error("Failed to observe HTML lang attribute:", error);
    }
  }

  // src/entry.ts
  function initialize() {
    try {
      if (document.readyState === "complete" || document.readyState === "interactive") {
        document.removeEventListener("readystatechange", initialize);
        accessibilityWidget();
        if (!getScriptDataAttribute("disableObserveLang")) {
          observeHTMLLang();
        }
      }
    } catch (error) {
      console.error("Failed to initialize accessibility widget:", error);
    }
  }
  document.addEventListener("readystatechange", initialize);
  if (document.readyState === "complete" || document.readyState === "interactive") {
    initialize();
  }
})();
//# sourceMappingURL=widget.js.map
