export const dummyData = [
  {
    title: '山田太郎',
    instruments: ['ギター', 'バイオリン', 'ピアノ'],
    skill: 1,
    residence: 1,
    description: 'よろしくお願いします',
    iconUrl: '',
  },
  {
    title: '徳島太郎',
    instruments: ['ウクレレ', 'ピアノ'],
    skill: 1,
    residence: 1,
    description: '初心者歓迎中!',
    iconUrl: '',
  },
  {
    title: '無職やめ太郎',
    instruments: ['バイオリン', 'プログラミング'],
    skill: 2,
    residence: 1,
    description: 'バイオリンができる人が足りません！',
    iconUrl: '',
  },
  {
    title: '山田太郎',
    instruments: ['ギター', 'バイオリン', 'ピアノ'],
    skill: 1,
    residence: 1,
    description: 'よろしくお願いします',
    iconUrl: '',
  },
  {
    title: '岡山広島',
    instruments: ['チェンバロ', 'バイオリン', 'ピアノ', 'チェロ'],
    skill: 3,
    residence: 3,
    description: 'プロオケです。初心者不可。',
    iconUrl: '',
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
