import React, { useState, useEffect } from 'react';

// タイマーが呼び出される周期を1秒にする
const UPDATE_CYCLE = 1000;

// localstorageで使用するキー
const KEY_LOCAL_STORAGE = 'KEY_LOCAL';

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (locale: string): Locale => {
  switch (locale) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    default:
      return Locale.US;
  }
}

export const Clock: React.FC = () => {
  const [timestamp, setTimeStemp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  // タイマーをセットするための副作用
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeStemp(new Date());
    }, UPDATE_CYCLE);
    // クリーンアップ関数を渡し、アンマウント時にタイマーをクリアする
    return () => {
      clearInterval(timer);
    }
  // 依存配列に空の配列を渡すことで、初回のレンダリング時のみタイマーをセットする
  }, []);

  // localstorageから値を読み込むため副作用
  useEffect(() => {
    const locale = localStorage.getItem(KEY_LOCAL_STORAGE);
    if (locale) {
      setLocale(getLocaleFromString(locale));
    }
  }, []);

  return (
    <div>
      <p>
        <span id="curent-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select 
          value={locale} 
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
          <option value={Locale.US}>英語</option>
          <option value={Locale.JP}>日本語</option>
          </select>
      </p>
    </div>
  )
}
