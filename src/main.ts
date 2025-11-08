// main.js --- GenericApp スクリプト
// Author: katahiromz
// License: Apache-2.0

/////////////////////////////////////////////////////////////////////////
// (function(){
/////////////////////////////////////////////////////////////////////////

import type { AndroidAppFunction } from './android.d';
declare const android: AndroidAppFunction;

import {
  trans_standardize_language,
  trans_current_language,
  trans_get_text,
  dom_localize
} from './translation';

/////////////////////////////////////////////////////////////////////////
// グローバル変数。開発環境ではアクセスを容易にするためにここにさらす。
// 本番環境では無名関数などに囲って保護すること。

const GenericApp_VERSION = '1.0.0';
let my_button_1 = document.getElementById('my-button-1') as HTMLButtonElement;
let my_button_2 = document.getElementById('my-button-2') as HTMLButtonElement;
let my_button_3 = document.getElementById('my-button-3') as HTMLButtonElement;
let my_button_4 = document.getElementById('my-button-4') as HTMLButtonElement;
let my_button_5 = document.getElementById('my-button-5') as HTMLButtonElement;
let my_button_6 = document.getElementById('my-button-6') as HTMLButtonElement;
let my_button_7 = document.getElementById('my-button-7') as HTMLButtonElement;
let my_button_8 = document.getElementById('my-button-8') as HTMLButtonElement;
let my_button_9 = document.getElementById('my-button-9') as HTMLButtonElement;
let my_language_select = document.getElementById('my-language-select') as HTMLSelectElement;
let brightness = 'normal';
let vibrating = false;

try {
  /////////////////////////////////////////////////////////////////////////
  // ヘルパー関数

  // Androidか？
  function my_is_android_app() {
    return navigator.userAgent.indexOf('Android') != -1;
  }

  // Androidのネイティブアプリか？
  function my_is_android_native_app() {
    return navigator.userAgent.indexOf('/GenericApp/Android/') != -1;
  }

  // Androidのブラウザアプリか？
  function my_is_android_browser_app() {
    return my_is_android_app() && !my_is_android_native_app();
  }

  // Androidネイティブアプリならバージョン番号を取得する。
  function my_get_android_native_app_version() {
    let results = navigator.userAgent.match(/\/GenericApp\/Android\/([\d\.]+)\//);
    if(results)
      return results[1];
    return undefined;
  }

  // アプリのバージョン番号を取得する。
  function my_get_app_version() {
    let version = my_get_android_native_app_version();
    if (version) return version;
    return GenericApp_VERSION;
  }

  // HTMLの特殊文字を置換。
  function my_htmlspecialchars(str: string){
    return (str + '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#039;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); 
  }

  // 設定を消す。
  function my_clear_settings() {
    localStorage.clear();
    try {
      android.clearSettings();
    } catch (err) { }
  }

  // アプリ終了。
  function my_finish_app() {
    try {
      android.finishApp();
    } catch (err) {
      location.href = "https://www.yahoo.co.jp/";
    }
  }

  // Toastを表示する
  function my_show_toast(text: string) {
    try {
      android.showToast(text);
    } catch (err) {
      alert('Toast is not available!');
    }
  }

  // Snackbarを表示する
  function my_show_snackbar(text: string) {
    try {
      android.showSnackbar(text);
    } catch (err) {
      alert('Snackbar is not available!');
    }
  }

  // 明るさを切り替え。
  // @param bright 'brighter' or 'normal'
  function my_set_brightness(bright: string) {
    try {
      android.setBrightness(bright);
    } catch (err) {
      alert('Brightness is not available!');
    }
  }

  // バイブレーターを切り替える。
  function my_set_vibrating(do_start: boolean) {
    const length = 20 * 60 * 1000; // 20分間。
    try {
      if (do_start) {
        android.startvibrating(parseFloat(length.toString()));
      } else {
        android.stopvibrating();
      }
    } catch (err) {
      if (my_is_android_browser_app()) {
        alert('vibrating is not available!');
      } else {
        if ('vibrate' in navigator) {
          if (do_start) {
            navigator.vibrate([length]);
          } else {
            navigator.vibrate([]);
          }
        } else {
          alert('vibrating is not available!');
        }
      }
    }
  }

  // 音声合成で音声出力する。
  function my_start_speech(text: string) {
    let volume = parseFloat("1.0");
    try {
      if (!android.startSpeech(text, volume)) {
        alert('Text-to-speech is not available!');
      }
    } catch (err) {
      if (window.speechSynthesis) { // 音声合成に対応していれば
        let speech = new SpeechSynthesisUtterance(text);
        speech.pitch = 0.6; // 音声の高さ。
        speech.rate = 0.6; // 音声の速さ。
        speech.volume = volume; // 音量。
        let lang = trans_standardize_language(trans_current_language);
        speech.lang = lang;
        // 実際にスピーチを開始する。
        window.speechSynthesis.speak(speech);
      } else {
        alert('Text-to-speech is not available! ' + err);
      }
    }
  }

  /////////////////////////////////////////////////////////////////////////
  // ローカライズ
  dom_localize();

  /////////////////////////////////////////////////////////////////////////
  // イベントハンドラーを登録。

  my_button_1.addEventListener('click', (event) => {
    alert('Hello, GenericApp');
  });
  my_button_2.addEventListener('click', (event) => {
    my_show_toast('This is Toast');
  });
  my_button_3.addEventListener('click', (event) => {
    my_show_snackbar('This is Snackbar!');
  });
  my_button_4.addEventListener('click', (event) => {
    brightness = (brightness == 'normal') ? 'brighter' : 'normal';
    my_set_brightness(brightness);
  });
  my_button_5.addEventListener('click', (event) => {
    vibrating = !vibrating;
    my_set_vibrating(vibrating);
  });
  my_button_6.addEventListener('click', (event) => {
    my_start_speech(trans_get_text('TEXT_SAMPLE_TEXT'));
  });
  my_button_7.addEventListener('click', (event) => {
    let my_paragraph = document.getElementById('my-paragraph') as HTMLElement;
    my_paragraph.innerHTML = 'my_button_7 is clicked.';
  });
  my_button_8.addEventListener('click', (event) => {
    if (confirm('Are you OK to clear settings?')) {
      my_clear_settings();
    }
  });
  my_button_9.addEventListener('click', (event) => {
    my_finish_app();
  });
  my_language_select.addEventListener('change', (event) => {
    dom_localize(my_language_select.value);
  });

  /////////////////////////////////////////////////////////////////////////
} catch (err) {
  alert(err);
}

/////////////////////////////////////////////////////////////////////////
// })();
/////////////////////////////////////////////////////////////////////////
