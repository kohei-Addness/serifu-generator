"use client";
import React, { useState } from 'react';

export default function Home() {
  const [character, setCharacter] = useState('');
  const [situation, setSituation] = useState('');
  const [serifu, setSerifu] = useState('');
  const [favorites, setFavorites] = useState([]);

  const generateSerifu = () => {
    const examples = {
      '熱血系': {
        '告白': 'おれの心は燃えているんだ！君と一緒にいたい！',
        '戦闘': 'このおれの熱い魂、受け止めてみろ！',
        '日常': '今日も全力で頑張るぜ！エネルギー満タンだ！',
        'お腹すいた': 'うおおお！メシだメシだ！全力で食うぜ！',
        '寝坊': 'なんてこった！でも、この俺の走りなら間に合う！',
        '雨の日': '雨も青春の一部だ！濡れるぜ！',
        '試験前': 'よーし！オレの熱い根性で全問正解してやる！'
      },
      'クール系': {
        '告白': 'ふん...これが恋というやつなのかもな',
        '戦闘': '無駄な抵抗はよしておけ',
        '日常': '...まあ、悪くない一日だな',
        'お腹すいた': 'ハンバーグ...か。悪くない選択だ',
        '寝坊': 'ふん、急ぐ必要もない。遅刻は覚悟の上だ',
        '雨の日': '傘か...面倒だが仕方あるまい',
        '試験前': '準備は完璧だ。あとは実力を見せるだけ...'
      },
      'お嬢様': {
        '告白': 'あなたのことを...お慕いしております！',
        '戦闘': 'わたくしに逆らうなんて...あら、おもしろいですわ！',
        '日常': 'まあ、素敵な一日ですわね',
        'お腹すいた': 'あら、お腹が空きましたわ。執事様、何か頂戴かしら？',
        '寝坊': 'まあ！こんな時間に...でも、慌てるのはお嬢様として相応しくございませんわ',
        '雨の日': 'あら、素敵な雨ですわ。メイド様、レースの傘をお願いいたします',
        '試験前': 'ふふ、わたくしにかかれば簡単なことですわ'
      },
      '猫': {
        '告白': 'にゃ〜ん♡（いつもゴハンをくれる君が好きだにゃ）',
        '戦闘': 'シャーッ！！（我が縄張りに入るとは何事かにゃ！）',
        '日常': 'ごろにゃ〜（日向ぼっこ気持ちいいにゃ）',
        'お腹すいた': 'にゃ〜にゃ〜！（はよゴハンくれにゃ！）',
        '寝坊': 'にゃ〜..ふにゃ〜...（まだ寝るにゃ...）',
        '雨の日': 'にゃぁ...（外に出たくないにゃ...）',
        '試験前': 'にゃ？（そんなの寝て忘れるにゃ）'
      },
      '犬': {
        '告白': 'ワンワン！（ご主人大好き！ずっと一緒だよ！）',
        '戦闘': 'ガルルル...（ご主人は渡さないよ！）',
        '日常': 'ワン！（お散歩行こう！行こう！）',
        'お腹すいた': 'クゥーン...（おやつちょうだい...）',
        '寝坊': 'ワンワン！（起きて！起きて！お散歩の時間だよ！）',
        '雨の日': 'クゥーン...（お散歩行きたいけど...）',
        '試験前': 'ワン！（僕が応援してるよ！）'
      },
      '赤ちゃん': {
        '告白': 'まんま〜♡（だいしゅき〜）',
        '戦闘': 'うえ〜ん！（おもちゃとられたー！）',
        '日常': 'きゃっきゃ！（たのしいね〜）',
        'お腹すいた': 'ぐすん...まんま！まんま！',
        '寝坊': 'すやすや...（まだねむいの）',
        '雨の日': 'あ〜！あ〜！（窓の雨さんきれい！）',
        '試験前': 'ばぶ？（そんなの知らないの！）'
      },
      'ヤンチャな小学生': {
        '告白': 'す...好きなわけじゃないからね！給食おかわりくれるだけ！',
        '戦闘': 'へへ、かかってこいよ！放課後、校庭で待ってるぜ！',
        '日常': '宿題なんて知らね〜！公園で遊ぶぜ！',
        'お腹すいた': '給食まだかよ〜！先生の分も食っちゃうぞ！',
        '寝坊': 'げっ！6時間目から出席すればバレないよな...',
        '雨の日': 'やった！掃除当番サボれる！',
        '試験前': '答え写させて〜！カンニングペーパーは完璧だぜ！'
      }
    };
    
    setSerifu(examples[character]?.[situation] || '');
  };

  const addToFavorites = () => {
    if (serifu && !favorites.some(f => f.serifu === serifu)) {
      setFavorites([...favorites, { character, situation, serifu }]);
    }
  };

  const shareOnTwitter = () => {
    const text = `${character}の${situation}のセリフ：「${serifu}」 #セリフジェネレーター`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-xl p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">セリフジェネレーター</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">キャラクター</label>
            <select 
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">選択してください</option>
              <option value="熱血系">熱血系</option>
              <option value="クール系">クール系</option>
              <option value="お嬢様">お嬢様</option>
              <option value="猫">猫</option>
              <option value="犬">犬</option>
              <option value="赤ちゃん">赤ちゃん</option>
              <option value="ヤンチャな小学生">ヤンチャな小学生</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">シチュエーション</label>
            <select 
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">選択してください</option>
              <option value="告白">告白</option>
              <option value="戦闘">戦闘</option>
              <option value="日常">日常</option>
              <option value="お腹すいた">お腹すいた</option>
              <option value="寝坊">寝坊</option>
              <option value="雨の日">雨の日</option>
              <option value="試験前">試験前</option>
            </select>
          </div>

          <button
            onClick={generateSerifu}
            disabled={!character || !situation}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            セリフを生成
          </button>

          {serifu && (
            <div className="mt-4 space-y-4">
              <div className="p-4 bg-gray-100 rounded">
                <p className="text-lg text-center">{serifu}</p>
              </div>
              
              <div className="flex gap-2 justify-center">
                <button
                  onClick={addToFavorites}
                  className="py-2 px-4 bg-pink-500 text-white rounded hover:bg-pink-600"
                >
                  お気に入りに追加
                </button>
                <button
                  onClick={shareOnTwitter}
                  className="py-2 px-4 bg-blue-400 text-white rounded hover:bg-blue-500"
                >
                  Twitterでシェア
                </button>
              </div>
            </div>
          )}

          {favorites.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">お気に入りセリフ</h2>
              <div className="space-y-2">
                {favorites.map((fav, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded border">
                    <p className="text-sm text-gray-600">{fav.character} / {fav.situation}</p>
                    <p className="text-md">{fav.serifu}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}