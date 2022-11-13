export const dummyData = [
  {
    title: '山田太郎',
    instruments: ['ギター', 'バイオリン', 'ピアノ'],
    skill: 1,
    residence: 1,
    description: 'よろしくお願いします',
    iconUrl:
      'https://zukan.pokemon.co.jp/zukan-api/up/images/index/21f11946586b7b199dbbd900a4a9119a.png',
  },
  {
    title: '徳島太郎',
    instruments: ['ウクレレ', 'ピアノ'],
    skill: 1,
    residence: 1,
    description: '初心者歓迎中!',
    iconUrl:
      'https://zukan.pokemon.co.jp/zukan-api/up/images/index/afa02eaba4c39820fc57f4e8abaeea80.png',
  },
  {
    title: '無職やめ太郎',
    instruments: ['バイオリン', 'プログラミング'],
    skill: 2,
    residence: 1,
    description: 'バイオリンができる人が足りません！',
    iconUrl:
      'https://zukan.pokemon.co.jp/zukan-api/up/images/index/f1a0d49b1c09f66333fcb4ec28f9ea16.png',
  },
  {
    title: '向　悠貴',
    instruments: ['ギター', 'バイオリン', 'ピアノ'],
    skill: 1,
    residence: 1,
    description: 'よろしくお願いします',
    iconUrl:
      'https://zukan.pokemon.co.jp/zukan-api/up/images/index/8c45cf85becf84af9de3df62bb84a767.png',
  },
  {
    title: '岡山広島',
    instruments: ['チェンバロ', 'ピアノ', 'チェロ'],
    skill: 3,
    residence: 3,
    description: 'プロオケです。初心者不可。',
    iconUrl:
      'https://zukan.pokemon.co.jp/zukan-api/up/images/index/4f8f7ac059b4b366f8d6e2875597e277.png',
  },
  {
    title: 'ユウキ',
    instruments: ['チェンバロ', 'バイオリン', 'ピアノ', 'チェロ'],
    skill: 3,
    residence: 3,
    description: 'プロオケです。初心者不可。',
    iconUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5m8-Wk35tPACGSlxh7RgvnfcWxx4XfHXp5pbO7AQNPXwALyeeBt8p7HOdzWGZSaqteyc&usqp=CAU',
  },
  {
    title: 'ムカイ',
    instruments: ['チェンバロ', 'バイオリン', 'ピアノ', 'チェロ'],
    skill: 3,
    residence: 3,
    description: 'プロオケです。初心者不可。',
    iconUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwDeKE3a-r4Ok7Uj1vDuOQM-1v3OCDFUu11_vFgb2SbmXd4ILo373y9hSwLWikBS7bu0k&usqp=CAU',
  },
  {
    title: 'ヨシキ',
    instruments: ['チェンバロ', 'ピアノ', 'チェロ'],
    skill: 1,
    residence: 2,
    description: 'プロオケです。初心者不可。',
    iconUrl:
      'https://ikarush.com/wp-content/uploads/2019/02/pose_syourai_man.png',
  },
  {
    title: 'X JAPON',
    instruments: ['チェンバロ', 'バイオリン', 'ピアノ'],
    skill: 1,
    residence: 3,
    description: 'fgfgfgfg',
    iconUrl: 'http://t3design.co.jp/data/blog/130/611dffc01122a.png',
  },
]

export function getRandomUserData(requireUserNum: number) {
  if (requireUserNum < 0) {
    return
  }
  var resultUsers = []
  // 必要な人数分だけ繰り返す
  for (var i = 0; i < requireUserNum; i++) {
    var dummyNum = dummyData.length
    var index = Math.floor(Math.random() * (dummyNum - 0) + 0)
    resultUsers.push(dummyData[index])
  }
  return resultUsers
}
