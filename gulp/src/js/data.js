/**
CONST.race = 種族
    id,name

CONST.job = 職業
    id,en,name

CONST.nickName = 二つ名
    id,en,name

CONST.skills = スキル表
    race
        id
        raceId
        skill
            lv,name,comment,type,count,isLarning,id"
    basic
        id
        jobId
        skill
            name,comment,comment2,skillType,valid,maxLv,info,id
    advance
        id
        jobId
        skill
            name,comment,comment2,skillType,valid,maxLv,info,id

*/

var CONST = {
    race:[
        {
            id:0,
            name:'アースラン'
        },{
            id:1,
            name:'ルナリア'
        },{
            id:2,
            name:'セリアン'
        },{
            id:3,
            name:'ブラニー'
        }],
        job:[{
            id:0,
            en:'Fencer',
            ja:'フェンサー'
        },{
            id:1,
            en:'Dragoon',
            ja:'ドラグーン'

        },{
            id:2,
            en:'Cestus',
            ja:'セスタス'

        },{
            id:3,
            en:'Reaper',
            ja:'リーパー'
        },{
            id:4,
            en:'Warlock',
            ja:'ウォーロック'

        },{
            id:5,
            en:'Necromancer',
            ja:'ネクロマンサー'

        },{
            id:6,
            en:'Hound',
            ja:'ハウンド'

        },{
            id:7,
            en:'Masurao',
            ja:'マスラオ'

        },{
            id:8,
            en:'Shaman',
            ja:'シャーマン'

        },{
            id:9,
            en:'Herbalist',
            ja:'ハーバリスト'

        }
    ],
    nickName:[{}],
    skills:{
        race:[
            {
                id:0,
                raceId:0,
                skill:[
                    {
                        "lv": 0,
                        "name": "アナライズ",
                        "comment": "敵単体の情報を一時的にモンスター図鑑に登録する",
                        "type": "ユニオンスキル",
                        "count": "1",
                        "isLarning": true,
                        "id": 0
                    },{
                        "lv": 0,
                        "name": "ダブルアタック",
                        "comment": "敵単体にスキル参加者が所持武器で合計2回攻撃する",
                        "type": "ユニオンスキル",
                        "count": "2",
                        "isLarning": true,
                        "id": 1
                    },{
                        "lv": 0,
                        "name": "全力逃走",
                        "comment": "戦闘から高確率で逃走し来た道を戻る",
                        "type": "ユニオンスキル",
                        "count": "3",
                        "isLarning": true,
                        "id": 2
                    },{
                        "lv": 0,
                        "name": "マジックヒール",
                        "comment": "味方全体のTPが少し回復する",
                        "type": "ユニオンスキル",
                        "count": "4",
                        "isLarning": true,
                        "id": 3
                    },{
                        "lv": 0,
                        "name": "祝福の光",
                        "comment": "このターン終了時味方全体のHPを少し回復する",
                        "type": "ユニオンスキル",
                        "count": "1",
                        "isLarning": false,
                        "id": 4
                    },{
                        "lv": 0,
                        "name": "大地の恩寵",
                        "comment": "戦闘中にベーシックスキル使用時、一定確率でTPが少量回復する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 5
                    },{
                        "lv": 0,
                        "name": "フィッシング",
                        "comment": "樹海の釣り場で魚を釣る能力",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 6
                    },{
                        "lv": 0,
                        "name": "樹海探索術",
                        "comment": "周囲を探索し、異変や目ぼしい物を発見する さらにAGIが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 7
                    },{
                        "lv": 5,
                        "name": "簡易蘇生",
                        "comment": "味方一人の戦闘不能を回復する",
                        "type": "ユニオンスキル",
                        "count": "2",
                        "isLarning": false,
                        "id": 8
                    },{
                        "lv": 5,
                        "name": "整頓術",
                        "comment": "アイテムの最大所持数がスキル所有者1名につき+5される さらにVITが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 9
                    },{
                        "lv": 5,
                        "name": "樹海採集術",
                        "comment": "採取、伐採、採掘時に追加で素材を入手可能",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 10
                    },{
                        "lv": 5,
                        "name": "飼育術",
                        "comment": "イベントで入手する家畜を飼育することができる",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 11
                    },{
                        "lv": 10,
                        "name": "トライシールド",
                        "comment": "このターン、敵の攻撃を3回まで無効化する",
                        "type": "ユニオンスキル",
                        "count": "3",
                        "isLarning": false,
                        "id": 12
                    },{
                        "lv": 10,
                        "name": "体術",
                        "comment": "自身の頭封じ、腕封じ、脚封じ耐性が少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 13
                    },{
                        "lv": 10,
                        "name": "セービングパワー",
                        "comment": "自身の石化、呪い、睡眠、混乱、麻痺、毒、盲目耐性が少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 14
                    },{
                        "lv": 10,
                        "name": "重装マスタリー",
                        "comment": "自身の斬・突・壊耐性が少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 15
                    },{
                        "lv": 15,
                        "name": "黒霧",
                        "comment": "このターン、敵の封じ・状態異常耐性を下げる",
                        "type": "ユニオンスキル",
                        "count": "4",
                        "isLarning": false,
                        "id": 16
                    },{
                        "lv": 15,
                        "name": "肉体強化",
                        "comment": "STRとVITが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 17
                    },{
                        "lv": 15,
                        "name": "走力鍛錬",
                        "comment": "AGIとLUCが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 18
                    },{
                        "lv": 15,
                        "name": "自学自習",
                        "comment": "INTとWISが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 19
                    },{
                        "lv": 20,
                        "name": "不屈の闘志",
                        "comment": "このターン、封じ・状態異常を無効化し致死ダメージ時一定の確率で耐える",
                        "type": "ユニオンスキル",
                        "count": "5",
                        "isLarning": false,
                        "id": 20
                    },{
                        "lv": 20,
                        "name": "大地の寵愛",
                        "comment": "戦闘中にマスタースキル使用時、一定確率でTPが少量回復する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 21
                    },{
                        "lv": 20,
                        "name": "解剖学",
                        "comment": "敵の素材ドロップ率がスキル所持者の人数に応じ上昇する　さらにINTが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 22
                    },{
                        "lv": 20,
                        "name": "グルメ",
                        "comment": "自身に対する食材のHPTP回復量が2倍になる",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 23
                    }
                ],
            },{
                id:1,
                raceId:1,
                skill:[
                    {
                        "lv": 0,
                        "name": "アナライズ",
                        "comment": "敵単体の情報を一時的にモンスター図鑑に登録する",
                        "type": "ユニオンスキル",
                        "count": "1",
                        "isLarning": true,
                        "id": 0
                    },{
                        "lv": 0,
                        "name": "ダブルアタック",
                        "comment": "敵単体にスキル参加者が所持武器で合計2回攻撃する",
                        "type": "ユニオンスキル",
                        "count": "2",
                        "isLarning": true,
                        "id": 1
                    },{
                        "lv": 0,
                        "name": "全力逃走",
                        "comment": "戦闘から高確率で逃走し来た道を戻る",
                        "type": "ユニオンスキル",
                        "count": "3",
                        "isLarning": true,
                        "id": 2
                    },{
                        "lv": 0,
                        "name": "マジックヒール",
                        "comment": "味方全体のTPが少し回復する",
                        "type": "ユニオンスキル",
                        "count": "4",
                        "isLarning": true,
                        "id": 3
                    },{
                        "lv": 0,
                        "name": "エンチャント",
                        "comment": "このターン、味方全体の武器属性に炎・氷・雷属性を追加する",
                        "type": "ユニオンスキル",
                        "count": "1",
                        "isLarning": false,
                        "id": 4
                    },{
                        "lv": 0,
                        "name": "月の恩寵",
                        "comment": "戦闘中にベーシックスキル使用時、一定確率でTPが少量回復する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 5
                    },{
                        "lv": 0,
                        "name": "伐採",
                        "comment": "伐採時に追加で素材を入手可能",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 6
                    },{
                        "lv": 0,
                        "name": "魔力感知",
                        "comment": "周囲に魔力のかかった物があれば発見するさらにINTが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 7
                    },{
                        "lv": 5,
                        "name": "パラダイムシフト",
                        "comment": "味方一人の状態異常・封じを敵全体に移す",
                        "type": "ユニオンスキル",
                        "count": "2",
                        "isLarning": false,
                        "id": 8
                    },{
                        "lv": 5,
                        "name": "解剖学",
                        "comment": "敵の素材ドロップ率がスキル所持者の人数に応じ上昇する　さらにINTが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 9
                    },{
                        "lv": 5,
                        "name": "ナイトビジョン",
                        "comment": "暗闇を見通せるようになるさらに攻撃命中率が少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 10
                    },{
                        "lv": 5,
                        "name": "グルメ",
                        "comment": "自身に対する食材のHPTP回復量が2倍になる",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 11
                    },{
                        "lv": 10,
                        "name": "カースマジック",
                        "comment": "このターン、炎・氷・雷属性のダメージ時一定の確率でいずれかの状態異常にする",
                        "type": "ユニオンスキル",
                        "count": "3",
                        "isLarning": false,
                        "id": 12
                    },{
                        "lv": 10,
                        "name": "魔力付与",
                        "comment": "戦闘用の攻撃アイテムのダメージが上昇するさらにLUCが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 13
                    },{
                        "lv": 10,
                        "name": "セービングパワー",
                        "comment": "自身の石化、呪い、睡眠、混乱、麻痺、毒、盲目耐性が少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 14
                    },{
                        "lv": 10,
                        "name": "無我の結界",
                        "comment": "自身の炎・氷・雷耐性が少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 15
                    },{
                        "lv": 15,
                        "name": "トリプルマジック",
                        "comment": "敵全体に遠隔炎と氷と雷属性攻撃",
                        "type": "ユニオンスキル",
                        "count": "4",
                        "isLarning": false,
                        "id": 16
                    },{
                        "lv": 15,
                        "name": "肉体強化",
                        "comment": "STRとVITが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 17
                    },{
                        "lv": 15,
                        "name": "走力鍛錬",
                        "comment": "AGIとLUCが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 18
                    },{
                        "lv": 15,
                        "name": "自学自習",
                        "comment": "INTとWISが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 19
                    },{
                        "lv": 20,
                        "name": "チェーンブラスト",
                        "comment": "敵全体に遠隔無属性攻撃＋全封じ",
                        "type": "ユニオンスキル",
                        "count": "5",
                        "isLarning": false,
                        "id": 20
                    },{
                        "lv": 20,
                        "name": "月の寵愛",
                        "comment": "戦闘中にマスタースキル使用時、一定確率でTPが少量回復する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 21
                    },{
                        "lv": 20,
                        "name": "飼育術",
                        "comment": "イベントで入手する家畜を飼育することができる",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 22
                    },{
                        "lv": 20,
                        "name": "集中",
                        "comment": "自身への睡眠の付着を一定確率で無効化する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 23
                    }
                ]
            },{
                id:2,
                raceId:2,
                skill:[
                    {
                        "lv": 0,
                        "name": "アナライズ",
                        "comment": "敵単体の情報を一時的にモンスター図鑑に登録する",
                        "type": "ユニオンスキル",
                        "count": "1",
                        "isLarning": true,
                        "id": 0
                    },{
                        "lv": 0,
                        "name": "ダブルアタック",
                        "comment": "敵単体にスキル参加者が所持武器で合計2回攻撃する",
                        "type": "ユニオンスキル",
                        "count": "2",
                        "isLarning": true,
                        "id": 1
                    },{
                        "lv": 0,
                        "name": "全力逃走",
                        "comment": "戦闘から高確率で逃走し来た道を戻る",
                        "type": "ユニオンスキル",
                        "count": "3",
                        "isLarning": true,
                        "id": 2
                    },{
                        "lv": 0,
                        "name": "マジックヒール",
                        "comment": "味方全体のTPが少し回復する",
                        "type": "ユニオンスキル",
                        "count": "4",
                        "isLarning": true,
                        "id": 3
                    },{
                        "lv": 0,
                        "name": "大振り",
                        "comment": "敵全体に使用者が所有武器で攻撃する",
                        "type": "ユニオンスキル",
                        "count": "1",
                        "isLarning": false,
                        "id": 4
                    },{
                        "lv": 0,
                        "name": "戦塵の恩寵",
                        "comment": "戦闘中にベーシックスキル使用時、一定確率でTPが少量回復する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 5
                    },{
                        "lv": 0,
                        "name": "狩猟術",
                        "comment": "樹海で食用となる獣が入手することが可能となるさらにSTRが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 6
                    },{
                        "lv": 0,
                        "name": "採掘",
                        "comment": "採掘時に追加で素材を入手可能",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 7
                    },{
                        "lv": 5,
                        "name": "気魄の楔",
                        "comment": "このターン、斬・突・壊属性のダメージ時一定の確率でいずれかを封じる",
                        "type": "ユニオンスキル",
                        "count": "3",
                        "isLarning": false,
                        "id": 8
                    },{
                        "lv": 5,
                        "name": "軽業",
                        "comment": "身のこなしで対応可能な危機に対処できるまた攻撃回避率が少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 9
                    },{
                        "lv": 5,
                        "name": "警戒",
                        "comment": "先制攻撃の発生率がスキル所持者の数に応じて上昇する　さらにWISが少し上がる",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 10
                    },{
                        "lv": 5,
                        "name": "力技",
                        "comment": "樹海で何かを動かしたり運ぶことができるさらにSTRが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 11
                    },{
                        "lv": 10,
                        "name": "アタックヒール",
                        "comment": "このターン、ダメージを与えると味方全体のHPを回復する",
                        "type": "ユニオンスキル",
                        "count": "3",
                        "isLarning": false,
                        "id": 12
                    },{
                        "lv": 10,
                        "name": "樹海探索術",
                        "comment": "周囲を探索し、異変や目ぼしい物を発見する　さらにAGIが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 13
                    },{
                        "lv": 10,
                        "name": "フィッシング",
                        "comment": "樹海の釣り場で魚を釣る能力",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 14
                    },{
                        "lv": 10,
                        "name": "心眼",
                        "comment": "自身への盲目の付着を一定確率で無効化するさらにAGIが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 15
                    },{
                        "lv": 15,
                        "name": "トリプルアタック",
                        "comment": "敵単体に遠隔斬と壊と突属性攻撃",
                        "type": "ユニオンスキル",
                        "count": "4",
                        "isLarning": false,
                        "id": 16
                    },{
                        "lv": 15,
                        "name": "肉体強化",
                        "comment": "STRとVITが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 17
                    },{
                        "lv": 15,
                        "name": "走力鍛錬",
                        "comment": "AGIとLUCが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 18
                    },{
                        "lv": 15,
                        "name": "自学自習",
                        "comment": "INTとWISが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 19
                    },{
                        "lv": 20,
                        "name": "一斉攻撃",
                        "comment": "敵単体に参加者が所有武器で合計5回攻撃＋スタン",
                        "type": "ユニオンスキル",
                        "count": "5",
                        "isLarning": false,
                        "id": 20
                    },{
                        "lv": 20,
                        "name": "戦塵の寵愛",
                        "comment": "戦闘中にマスタースキル使用時、一定確率でTPが少量回復する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 21
                    },{
                        "lv": 20,
                        "name": "重装マスタリー",
                        "comment": "自身の斬・突・壊耐性が少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 22
                    },{
                        "lv": 20,
                        "name": "整頓術",
                        "comment": "アイテムの最大所持数がスキル所有者1名につき+5される　さらにVITが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 23
                    }
                ]
            },{
                id:3,
                raceId:3,
                skill:[
                    {
                        "lv": 0,
                        "name": "アナライズ",
                        "comment": "敵単体の情報を一時的にモンスター図鑑に登録する",
                        "type": "ユニオンスキル",
                        "count": "1",
                        "isLarning": true,
                        "id": 0
                    },{
                        "lv": 0,
                        "name": "ダブルアタック",
                        "comment": "敵単体にスキル参加者が所持武器で合計2回攻撃する",
                        "type": "ユニオンスキル",
                        "count": "2",
                        "isLarning": true,
                        "id": 1
                    },{
                        "lv": 0,
                        "name": "全力逃走",
                        "comment": "戦闘から高確率で逃走し来た道を戻る",
                        "type": "ユニオンスキル",
                        "count": "3",
                        "isLarning": true,
                        "id": 2
                    },{
                        "lv": 0,
                        "name": "マジックヒール",
                        "comment": "味方全体のTPが少し回復する",
                        "type": "ユニオンスキル",
                        "count": "4",
                        "isLarning": true,
                        "id": 3
                    },{
                        "lv": 0,
                        "name": "守備の号令",
                        "comment": "このターン、味方全体への全ての攻撃を軽減する",
                        "type": "ユニオンスキル",
                        "count": "2",
                        "isLarning": false,
                        "id": 4
                    },{
                        "lv": 0,
                        "name": "風の恩寵",
                        "comment": "戦闘中にベーシックスキル使用時、一定確率でTPが少量回復する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 5
                    },{
                        "lv": 0,
                        "name": "採取",
                        "comment": "採取時に追加で素材を入手可能",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 6
                    },{
                        "lv": 0,
                        "name": "飼育術",
                        "comment": "イベントで入手する家畜を飼育する能力",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 7
                    },{
                        "lv": 5,
                        "name": "電光石火",
                        "comment": "このターン、味方全体の行動速度を上昇させる",
                        "type": "ユニオンスキル",
                        "count": "3",
                        "isLarning": false,
                        "id": 8
                    },{
                        "lv": 5,
                        "name": "セービングパワー",
                        "comment": "自身の石化、呪い、睡眠、混乱、麻痺、毒、盲目耐性が少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 9
                    },{
                        "lv": 5,
                        "name": "フィッシング>ブラニー#skill-]]",
                        "comment": "樹海の釣り場で魚を釣る能力",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 10
                    },{
                        "lv": 5,
                        "name": "薬草学",
                        "comment": "戦闘中に自身が使用した回復アイテムのHP回復効果が上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 11
                    },{
                        "lv": 10,
                        "name": "禁忌の法",
                        "comment": "敵味方全体の全ての強化弱体を1ターン伸ばす",
                        "type": "ユニオンスキル",
                        "count": "3",
                        "isLarning": false,
                        "id": 12
                    },{
                        "lv": 10,
                        "name": "整頓術",
                        "comment": "アイテムの最大所持数がスキル所有者1名につき+5される　さらにVITが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 13
                    },{
                        "lv": 10,
                        "name": "無我の結界",
                        "comment": "自身の炎・氷・雷耐性が少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 14
                    },{
                        "lv": 10,
                        "name": "軽業",
                        "comment": "身のこなしで対応可能な危機に対処できるまた攻撃回避率が少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 15
                    },{
                        "lv": 15,
                        "name": "ヒギエイアの杯",
                        "comment": "味方全体のHPと戦闘不能・封じ・状態異常を回復する",
                        "type": "ユニオンスキル",
                        "count": "4",
                        "isLarning": false,
                        "id": 16
                    },{
                        "lv": 15,
                        "name": "肉体強化",
                        "comment": "STRとVITが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 17
                    },{
                        "lv": 15,
                        "name": "走力鍛錬",
                        "comment": "AGIとLUCが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 18
                    },{
                        "lv": 15,
                        "name": "自学自習",
                        "comment": "INTとWISが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 19
                    },{
                        "lv": 20,
                        "name": "イージスの盾",
                        "comment": "このターン、味方全体への全ての攻撃を無効化する",
                        "type": "ユニオンスキル",
                        "count": "5",
                        "isLarning": false,
                        "id": 20
                    },{
                        "lv": 20,
                        "name": "風の寵愛",
                        "comment": "戦闘中にマスタースキル使用時、一定確率でTPが少量回復する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 21
                    },{
                        "lv": 20,
                        "name": "値切り",
                        "comment": "販売アイテムの売値を5％減少させるさらにWISが少し上昇する",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": true,
                        "id": 22
                    },{
                        "lv": 20,
                        "name": "グルメ",
                        "comment": "自身に対する食材のHPTP回復量が2倍になる",
                        "type": "種族スキル",
                        "count": "-",
                        "isLarning": false,
                        "id": 23
                    }
                ]
            }
        ],
        basic:[{
            id:0,
            jobId:0,
            skill:[
                {
                    "name": "突剣マスタリー",
                    "comment": "剣装備時の物理攻撃力が上昇し剣による通常攻撃が突属性になる",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 0
                },{
                    "name": "チェインファイア",
                    "comment": "このターン、指定した敵1体が突・炎属性攻撃を受けた時に追撃を行う",
                    "comment2": "追撃するたびに追撃率は低下する",
                    "skillType": "剣・チェインスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 2
                },{
                    "name": "チェインフリーズ",
                    "comment": "このターン、指定した敵1体が突・氷属性攻撃を受けた時に追撃を行う",
                    "comment2": "追撃するたびに追撃率は低下する",
                    "skillType": "剣・チェインスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 3
                },{
                    "name": "チェインショック",
                    "comment": "このターン、指定した敵1体が突・雷属性攻撃を受けた時に追撃を行う",
                    "comment2": "追撃するたびに追撃率は低下する",
                    "skillType": "剣・チェインスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 4
                },{
                    "name": "チェインブースト",
                    "comment": "チェインスキルを発動させる度に与えるダメージが増加する",
                    "comment2": "増加したダメージは次ターンに引き継げない",
                    "skillType": "パッシブスキル",
                    "valid": [
                        "チェインファイア2",
                        "チェインフリーズ2",
                        "チェインショック2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 5
                },{
                    "name": "チェインバースト",
                    "comment": "チェインスキルで敵に止めを刺した時同属性で別の敵に攻撃する",
                    "comment2": "レベルの上昇で最大発動数が増加",
                    "skillType": "パッシブスキル",
                    "valid": [
                        "チェインファイア2",
                        "チェインフリーズ2",
                        "チェインショック2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 6
                },{
                    "name": "プレディクト",
                    "comment": "このターン、全防御力を犠牲に狙われ率と回避率を大きく上昇させる",
                    "comment2": "回避するたびに狙われ率と回避率が減少する",
                    "skillType": "補助スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 8
                },{
                    "name": "ウィンドカーテン",
                    "comment": "1ターンの間、味方1列への物理属性攻撃を一度だけ回避させる",
                    "comment2": "レベル上昇で効果ターン数が増加",
                    "skillType": "補助スキル",
                    "valid": [
                        "プロディクト3"
                    ],
                    "maxLv": 5,
                    "info": [],
                    "id": 9
                },{
                    "name": "ビジョンスラスト",
                    "comment": "敵1体に近接突攻撃一定確率で盲目効果が発動する",
                    "comment2": "",
                    "skillType": "剣スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 10
                },{
                    "name": "シルフィード",
                    "comment": "敵の攻撃を回避した際、一定確率で所持武器でカウンターを行う",
                    "comment2": "反撃するたびに反撃率は低下する",
                    "skillType": "パッシブスキル",
                    "valid": [
                        ""
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 11
                }
            ]
        },{
            id:1,
            jobId:1,
            skill:[
                {
                    "name": "盾マスタリー",
                    "comment": "盾装備時の物理属性防御力が上昇する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 0
                },{
                    "name": "重砲マスタリー",
                    "comment": "重砲装備時の物理属性攻撃力が上昇する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 1
                },{
                    "name": "ラインガード",
                    "comment": "このターン、味方1列への物理属性攻撃を軽減する",
                    "comment2": "",
                    "skillType": "盾・ガードスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 3
                },{
                    "name": "マテリアルガード",
                    "comment": "このターン、味方全体への魔法属性攻撃を軽減する",
                    "comment2": "",
                    "skillType": "盾・ガードスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 4
                },{
                    "name": "ヒーリングガード",
                    "comment": "このターン、自身への物理属性攻撃を軽減しダメージを受ける度にHPを回復する",
                    "comment2": "",
                    "skillType": "盾・ガードスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 5
                },{
                    "name": "ガンマウント",
                    "comment": "前ターンのガードスキルの効果を維持し敵一体に遠隔壊攻撃",
                    "comment2": "",
                    "skillType": "重砲スキル",
                    "valid": [
                        "ラインガード2",
                        "マテリアルガード2",
                        "ヒーリングガード2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 6
                },{
                    "name": "バラージウォール",
                    "comment": "敵全体に遠隔壊攻撃3ターンの間、物理属性攻撃力を低下させる",
                    "comment2": "レベル上昇で効果ターン数が増加",
                    "skillType": "重砲スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 8
                },{
                    "name": "竜の咆哮",
                    "comment": "3ターンの間、味方1人の狙われ率と全防御力を上昇させる",
                    "comment2": "レベル上昇で効果ターン数が増加",
                    "skillType": "補助スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 9
                },{
                    "name": "バンカー",
                    "comment": "バンカーを設置し攻撃を引きつける",
                    "comment2": "",
                    "skillType": "補助スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 11
                },{
                    "name": "防衛陣地",
                    "comment": "3ターンの間、味方全体の物理属性防御力を上昇させる",
                    "comment2": "バンカーを設置していないと使用不可できないレベル上昇で効果ターン数が増加",
                    "skillType": "補助スキル",
                    "valid": [
                        "バンカー2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 12
                }
            ]
        },{
            id:2,
            jobId:2,
            skill:[
                {
                    "name": "拳甲マスタリー",
                    "comment": "拳甲装備時の物理属性攻撃力が上昇する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 0
                },{
                    "name": "物理攻撃ブースト",
                    "comment": "物理属性攻撃力が上昇する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 1
                },{
                    "name": "フリッカー",
                    "comment": "敵1体に近接壊攻撃一定確率で頭封じ効果が発動する",
                    "comment2": "",
                    "skillType": "拳甲スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 3
                },{
                    "name": "アームブレイク",
                    "comment": "敵1体に近接壊攻撃一定確率で腕封じ効果が発動する",
                    "comment2": "",
                    "skillType": "拳甲スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 4
                },{
                    "name": "リバーブロー",
                    "comment": "敵1体に近接壊攻撃一定確率で脚封じ効果が発動する",
                    "comment2": "",
                    "skillType": "拳甲スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 5
                },{
                    "name": "ワンツー",
                    "comment": "敵1体に近接壊攻撃。一定確率で封じられていない部位を封じるスキルが追加発動する",
                    "comment2": "",
                    "skillType": "拳甲スキル",
                    "valid": [
                        "フリッカー3",
                        "アームブレイク3",
                        "リバーブロー3"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 6
                },{
                    "name": "血の暴走",
                    "comment": "自身のHPが減少する度に一定確率で敵に武器属性攻撃を行う",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 8
                },{
                    "name": "粉骨砕身",
                    "comment": "3ターンの間、味方1人は行動時にHPを消費する代わりに物理属性攻撃力が上昇する",
                    "comment2": "",
                    "skillType": "補助スキル",
                    "valid": [
                        "血の暴走1"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 9
                },{
                    "name": "雷神拳",
                    "comment": "敵1体に近接雷＋壊の複合属性攻撃。対象を倒せなかった場合、自身もダメージを受ける",
                    "comment2": "",
                    "skillType": "拳甲スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 10
                },{
                    "name": "鬼人拳",
                    "comment": "自身のHPを消費して敵1体から左右に拡散する近接壊攻撃",
                    "comment2": "",
                    "skillType": "拳甲スキル",
                    "valid": [
                        "雷神拳2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 11
                }
            ]
        },{
            id:3,
            jobId:3,
            skill:[
                {
                    "name": "鎌マスタリー",
                    "comment": "鎌装備時の物理属性攻撃力が上昇する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 0
                },{
                    "name": "魂寄せ",
                    "comment": "一定歩数の間、エンカウント率を上昇させ戦闘で得られる経験値を上昇させる",
                    "comment2": "",
                    "skillType": "探索スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 1
                },{
                    "name": "瘴気の兵装",
                    "comment": "自身のHPを消費して3ターンの間、「瘴気兵装」状態をとる",
                    "comment2": "",
                    "skillType": "補助スキル",
                    "valid": [],
                    "maxLv": 5,
                    "info": [],
                    "id": 3
                },{
                    "name": "先制兵装",
                    "comment": "戦闘開始時一定確率で「瘴気の兵装」を使用する",
                    "comment2": "パーティ内の誰かが発動した場合発動しない",
                    "skillType": "パッシブスキル",
                    "valid": [
                        "瘴気の兵装2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 4
                },{
                    "name": "終わりなき衣",
                    "comment": "弱体スキル使用時、一定の確率で「瘴気の兵装」を使用する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [
                        "瘴気の兵装2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 5
                },{
                    "name": "死の審判",
                    "comment": "瘴気兵装時、自身のHPが減少するたびに一定確率で敵1体に睡眠効果が発動する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [
                        "瘴気の兵装2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 6
                },{
                    "name": "繊弱の瘴気",
                    "comment": "3ターンの間、敵全体の全攻撃力を低下させる",
                    "comment2": "レベル上昇で効果ターンが増加",
                    "skillType": "補助スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 8
                },{
                    "name": "虚弱の瘴気",
                    "comment": "3ターンの間、敵全体の封じ・状態異常耐性を低下させる",
                    "comment2": "レベル上昇で効果ターンが増加",
                    "skillType": "補助スキル",
                    "valid": [
                        "繊弱の瘴気3"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 9
                },{
                    "name": "痺止の鎌",
                    "comment": "敵1列に近接斬攻撃瘴気兵装時、一定確率で麻痺効果が発動する",
                    "comment2": "",
                    "skillType": "鎌スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 10
                },{
                    "name": "呪禁の鎌",
                    "comment": "敵1列に近接斬攻撃瘴気兵装時、一定確率で呪い効果が発動する",
                    "comment2": "",
                    "skillType": "鎌スキル",
                    "valid": [
                        "痺止の鎌3"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 11
                }
            ]
        },{
            id:4,
            jobId:4,
            skill:[
                {
                    "name": "マギマスタリー",
                    "comment": "マギスキルの威力が上昇する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 0
                },{
                    "name": "高速詠唱",
                    "comment": "詠唱スキルがターンを消費せずに使用可能になるが詠唱スキルの消費TPが増加する",
                    "comment2": "習得すると自動的に効果が発揮され詠唱コストが増加する",
                    "skillType": "パッシブスキル",
                    "valid": [
                        "マギマスタリー5"
                    ],
                    "maxLv": 5,
                    "info": [],
                    "id": 1
                },{
                    "name": "ファイアボール",
                    "comment": "敵1体から左右に拡散する遠隔炎属性攻撃",
                    "comment2": "",
                    "skillType": "マギスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 3
                },{
                    "name": "アイシクルランス",
                    "comment": "前後の敵2体を貫通する遠隔氷属性攻撃",
                    "comment2": "",
                    "skillType": "マギスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 4
                },{
                    "name": "ライトニング",
                    "comment": "敵1列に遠隔雷属性攻撃",
                    "comment2": "",
                    "skillType": "マギスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 5
                },{
                    "name": "アンプリファー",
                    "comment": "3ターンの間、味方1列の魔法属性攻撃力を上昇させる",
                    "comment2": "レベル上昇で効果ターン数が増加",
                    "skillType": "補助スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 7
                },{
                    "name": "マジックシールド",
                    "comment": "このターン、味方全体への魔法属性攻撃を軽減する",
                    "comment2": "",
                    "skillType": "補助スキル",
                    "valid": [
                        "アンプリファー2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 8
                },{
                    "name": "詠唱：圧縮術式",
                    "comment": "次の行動時に使用するマギスキルの範囲が敵一体になる代わりに威力が上昇する",
                    "comment2": "",
                    "skillType": "詠唱スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 9
                },{
                    "name": "レビテーション",
                    "comment": "一定歩数の間、フィールド上で発生するダメージ全般を軽減し、先制率を上昇させる",
                    "comment2": "ダメージ床に対してはダメージを完全に無効化できる",
                    "skillType": "探索スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 11
                },{
                    "name": "インビジブル",
                    "comment": "一定歩数の間、エンカウント率を低下させる",
                    "comment2": "",
                    "skillType": "探索スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 12
                }
            ]
        },{
            id:5,
            jobId:5,
            skill:[
                {
                    "name": "死霊マスタリー",
                    "comment": "死霊の攻撃力と状態異常成功率が上昇する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 0
                },{
                    "name": "死霊召喚",
                    "comment": "自身のHPを消費して空き枠にHPボーナスを得た死霊を呼び出す",
                    "comment2": "ダンジョンを移動中にも呼び出せる",
                    "skillType": "補助スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 2
                },{
                    "name": "生の代償",
                    "comment": "死霊1体を消滅させ味方全体のHPを回復する",
                    "comment2": "",
                    "skillType": "死霊スキル",
                    "valid": [
                        "死霊召喚2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 3
                },{
                    "name": "死霊の呻き",
                    "comment": "死霊1体を消滅させ、3ターンの間敵1体の全防御力を低下させる",
                    "comment2": "レベル上昇で効果ターン数が増加",
                    "skillType": "死霊スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 4
                },{
                    "name": "魂の糧",
                    "comment": "死霊1体を消滅させ、3ターンの間味方全体の魔法属性防御力を上昇させる",
                    "comment2": "レベル上昇で効果ターン数が増加",
                    "skillType": "死霊スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 5
                },{
                    "name": "無慈悲な盾",
                    "comment": "使用したターン、指定した死霊一体に味方全体への攻撃を庇わせる",
                    "comment2": "",
                    "skillType": "スキル",
                    "valid": [
                        "死霊の呻き2",
                        "魂の糧2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 6
                },{
                    "name": "墓守の心得",
                    "comment": "ダメージを受けなかったターン終了時一定確率で死霊を召喚する",
                    "comment2": "戦闘中の死霊召喚でHPを消費しても発動する",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 8
                },{
                    "name": "死霊転生",
                    "comment": "戦闘中に死霊が消滅した時一定確率で死霊を召喚する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [
                        "墓守の心得3"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 9
                },{
                    "name": "炎爆弾",
                    "comment": "死霊1体を消滅させ、敵全体に遠隔炎攻撃",
                    "comment2": "",
                    "skillType": "死霊スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 11
                },{
                    "name": "毒爆弾",
                    "comment": "死霊1体を消滅させ、敵全体を一定確率で毒状態にする",
                    "comment2": "",
                    "skillType": "死霊スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 12
                }
            ]
        },{
            id:6,
            jobId:6,
            skill:[
                {
                    "name": "弓マスタリー",
                    "comment": "弓装備時の物理属性攻撃力が上昇する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 0
                },{
                    "name": "獣の癒し",
                    "comment": "猟犬・鷹が生存していた場合ターン終了時に味方全体のHPが回復する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 1
                },{
                    "name": "鷹笛",
                    "comment": "鷹を呼び出す",
                    "comment2": "ダンジョンを移動中にも呼び出せる",
                    "skillType": "補助スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 3
                },{
                    "name": "ホークアロー",
                    "comment": "敵1体に遠隔突攻撃その後、その左右の敵に鷹が遠隔斬攻撃",
                    "comment2": "自分の攻撃で敵を倒した場合は鷹の追撃は発生しない",
                    "skillType": "弓・鷹スキル",
                    "valid": [
                        "鷹笛3"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 4
                },{
                    "name": "双翼閃",
                    "comment": "敵1体に最速で遠隔突攻撃その後、攻撃対象の列に鷹が斬攻撃",
                    "comment2": "",
                    "skillType": "弓・鷹スキル",
                    "valid": [
                        "鷹笛3"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 5
                },{
                    "name": "犬笛",
                    "comment": "猟犬を呼び出す",
                    "comment2": "ダンジョンを移動中にも呼び出せる",
                    "skillType": "補助スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 6
                },{
                    "name": "救護指示",
                    "comment": "猟犬が味方1体の状態異常とHPを回復する",
                    "comment2": "",
                    "skillType": "猟犬スキル",
                    "valid": [
                        "犬笛3"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 7
                },{
                    "name": "ハンターショット",
                    "comment": "敵1体に遠隔突攻撃その後猟犬が一定確率で腕＋脚封じ",
                    "comment2": "自身の攻撃で敵を倒した場合は猟犬の追撃は発生しない",
                    "skillType": "弓・猟犬スキル",
                    "valid": [
                        "犬笛3"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 8
                },{
                    "name": "ブラッシング",
                    "comment": "ターン終了時、猟犬・鷹のHPを回復させる",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 10
                },{
                    "name": "ターゲットアロー",
                    "comment": "敵1体に遠隔突＋3ターンの間敵をターゲットにし物理属性防御力を下げる",
                    "comment2": "ターゲットアローの弱体がついている間猟犬と鷹の攻撃を集中させる",
                    "skillType": "弓スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 11
                }
            ]
        },{
            id:7,
            jobId:7,
            skill:[
                {
                    "name": "刀マスタリー",
                    "comment": "刀装備時の物理属性攻撃力が上昇する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 0
                },{
                    "name": "鬼無双",
                    "comment": "複数回攻撃するスキルを使用時、後発のヒットほどダメージが増加",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 1
                },{
                    "name": "果し合い",
                    "comment": "前ターンと同じ対象に攻撃する時与えるダメージが増加する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 3
                },{
                    "name": "飛燕",
                    "comment": "敵1体に最速で近接斬攻撃対象の行動後にもう一度近接斬攻撃",
                    "comment2": "",
                    "skillType": "刀スキル",
                    "valid": [
                        "果し合い3"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 4
                },{
                    "name": "鎧通し",
                    "comment": "敵1体に近接突攻撃3ターンの間、物理属性防御力を低下させる",
                    "comment2": "",
                    "skillType": "刀スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 5
                },{
                    "name": "霞斬り",
                    "comment": "敵1体に近接斬攻撃一定確率で睡眠効果が発動する",
                    "comment2": "",
                    "skillType": "刀スキル",
                    "valid": [
                        "鎧通し2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 6
                },{
                    "name": "空刃",
                    "comment": "敵1体に遠隔斬攻撃",
                    "comment2": "",
                    "skillType": "刀スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 7
                },{
                    "name": "鎌鼬",
                    "comment": "敵全体へランダムに2～4回近接斬攻撃",
                    "comment2": "同じ敵に複数回当たることはない",
                    "skillType": "刀スキル",
                    "valid": [
                        "空刃3"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 8
                },{
                    "name": "新たな強敵",
                    "comment": "敵を呼び寄せ戦闘を行う希少個体の出現率が上がり、一定確率で再度戦闘が発生する",
                    "comment2": "周囲に敵がいないところでは失敗する",
                    "skillType": "探索スキル",
                    "valid": [],
                    "maxLv": 5,
                    "info": [],
                    "id": 10
                },{
                    "name": "地の利",
                    "comment": "3ターンの間、自身と同列の味方の物理属性攻撃力を上昇させる",
                    "comment2": "レベル上昇で効果ターンが増加",
                    "skillType": "補助スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 11
                }
            ]
        },{
            id:8,
            jobId:8,
            skill:[
                {
                    "name": "祈祷マスタリー",
                    "comment": "祈祷スキルの行動速度が上昇し消費TPが減少する",
                    "comment2": "消費TPはLv1、Lv5、Lv10でそれぞれ減少",
                    "skillType": "パッシブスキル",
                    "valid": [
                        ""
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 0
                },{
                    "name": "福音",
                    "comment": "強化スキルをかけた際、対象になった味方のHPを回復する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 1
                },{
                    "name": "祈祷：討滅",
                    "comment": "3ターンの間、味方全体の全攻撃力を上げる",
                    "comment2": "レベル上昇で効果ターンが増加",
                    "skillType": "祈祷スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 3
                },{
                    "name": "祈祷：鎮守",
                    "comment": "3ターンの間、味方全体の全防御力を上げる",
                    "comment2": "レベル上昇で効果ターンが増加",
                    "skillType": "祈祷スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 4
                },{
                    "name": "祈祷：適中",
                    "comment": "3ターンの間、味方全体の命中率を上げる",
                    "comment2": "レベル上昇で効果ターンが増加",
                    "skillType": "祈祷スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 5
                },{
                    "name": "天恵",
                    "comment": "味方1人の強化と弱体を1つずつ解除し対象のHPを回復、行動速度を上昇させる",
                    "comment2": "強化弱体のどちらかがついていれば使用でき両方を解除した場合は回復量が増加",
                    "skillType": "回復スキル",
                    "valid": [
                        "祈祷：討滅2",
                        "祈祷：鎮守2",
                        "祈祷：適中2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 6
                },{
                    "name": "祈祷：焔",
                    "comment": "3ターンの間、味方全体の炎耐性を上昇させ武器属性に炎属性を追加する",
                    "comment2": "レベル上昇で効果ターンが増加",
                    "skillType": "祈祷スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 8
                },{
                    "name": "祈祷：氷雨",
                    "comment": "3ターンの間、味方全体の氷耐性を上昇させ武器属性に氷属性を追加する",
                    "comment2": "レベル上昇で効果ターンが増加",
                    "skillType": "祈祷スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 9
                },{
                    "name": "祈祷：紫電",
                    "comment": "3ターンの間、味方全体の雷耐性を上昇させ武器属性に雷属性を追加する",
                    "comment2": "レベル上昇で効果ターンが増加",
                    "skillType": "祈祷スキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 10
                },{
                    "name": "神託：乱舞",
                    "comment": "自身の祈祷：焔、氷雨、紫電を解除し敵全体に遠隔攻撃。同属性耐性を低下させる",
                    "comment2": "敵への耐性低下効果はターン終了時まで解除したスキルによって攻撃属性が変化する",
                    "skillType": "攻撃スキル",
                    "valid": [
                        "祈祷：焔3",
                        "祈祷：氷雨3",
                        "祈祷：紫電3"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 11
                }
            ]
        },{
            id:9,
            jobId:9,
            skill:[
                {
                    "name": "ハーブマスタリー",
                    "comment": "戦闘中のハーブスキルの回復量が上昇する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 0
                },{
                    "name": "キュアハーブ",
                    "comment": "味方1人のHPを回復する",
                    "comment2": "",
                    "skillType": "ハーブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 2
                },{
                    "name": "ラインハーブ",
                    "comment": "味方1列のHPを回復する",
                    "comment2": "",
                    "skillType": "ハーブスキル",
                    "valid": [
                        "キュアハーブ5"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 3
                },{
                    "name": "リフレシュハーブ",
                    "comment": "味方1人に付着した状態異常を回復する",
                    "comment2": "レベル5で対象が1体から1列へ変化",
                    "skillType": "ハーブスキル",
                    "valid": [],
                    "maxLv": 5,
                    "info": [],
                    "id": 4
                },{
                    "name": "リザレクトハーブ",
                    "comment": "味方1人を戦闘不能から回復する",
                    "comment2": "",
                    "skillType": "ハーブスキル",
                    "valid": [
                        "リフレシュハーブ3"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 5
                },{
                    "name": "抗体",
                    "comment": "封じ・状態異常の自然回復率が上昇する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 7
                },{
                    "name": "薬草知識",
                    "comment": "採取、伐採、採掘時に味方全体のHPとTPが回復する",
                    "comment2": "",
                    "skillType": "パッシブスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 8
                },{
                    "name": "ポイズンスモーク",
                    "comment": "敵1列に一定確率で毒効果が発動し3ターンの間、毒耐性を低下させる",
                    "comment2": "",
                    "skillType": "スモークスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 10
                },{
                    "name": "ダークスモーク",
                    "comment": "敵1列に一定確率で盲目効果が発動し3ターンの間、盲目耐性を低下させる",
                    "comment2": "",
                    "skillType": "スモークスキル",
                    "valid": [],
                    "maxLv": 10,
                    "info": [],
                    "id": 11
                },{
                    "name": "スモークロット",
                    "comment": "3ターンの間敵1列の魔法属性防御力を低下させる",
                    "comment2": "煙に反応させないと効能が大幅に薄れる",
                    "skillType": "スキル",
                    "valid": [
                        "ポイズンスモーク2",
                        "ダークスモーク2"
                    ],
                    "maxLv": 10,
                    "info": [],
                    "id": 12
                }
            ]
        }],
        advance:[]
    }
}


/*
------------------------------------------
種族別スキル
------------------------------------------
var data = [];
var _tmpLv = 0;
var _idIndex = 0;
$('#skills tr').each(function(index,elem){
    if(index == 0 || index== 1){return true}
    if($(this).find('td').eq(0).attr('colspan') == 5){
        _tmpLv +=5 ;
        return true;
    }
    data.push({
        lv:_tmpLv,
        name:$(this).find('td').eq(0).text().trim(),
        comment:$(this).find('td').eq(1).text().trim(),
        type:$(this).find('td').eq(2).text().trim(),
        count:$(this).find('td').eq(3).text().trim(),
        isLarning:$(this).find('td').eq(4).text().trim() != '' ?true:false,
        id:_idIndex
    });
    _idIndex++;
});
$('body').append('<pre>'+JSON.stringify(data,null,'\t')+'</pre>')

------------------------------------------
ベーシックスキル
------------------------------------------
var data = [];
$('#skills tbody tr').each(function(index,elem){
    if($(this).find('td').eq(0).attr('colspan') == 9){
        return true;
    }
    var _valid = $(this).find('td').eq(3).html().trim().split('<br>')
    if(_valid[0] == '-'){
        _valid = [];
    }
    data.push({
        name:$(this).find('td').eq(0).text().trim(),
        comment:$(this).find('td').eq(1).text().trim(),
        comment2:$(this).find('td').eq(8).text().trim(),
        skillType:$(this).find('td').eq(2).text().trim(),
        valid:_valid,
        maxLv:parseInt($(this).find('td').eq(4).text().trim()),
        info:[],
        id:index
    });
});
$('body').append('<pre>'+JSON.stringify(data,null,'\t')+'</pre>')

*/