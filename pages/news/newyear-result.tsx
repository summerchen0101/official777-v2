import React from 'react'

interface TicketResult {
  award: string
  player: string
  ticket: string
}
const tickets1: TicketResult[] = [
  {
    award: '賓士名車卡',
    player: '芝玉路猥瑣的婷婷',
    ticket: '4796',
  },
  {
    award: '賓士名車卡',
    player: '迪化街凍魂哲宇',
    ticket: '19168',
  },
  {
    award: '勞力士卡',
    player: '忠義街表達者慧娟',
    ticket: '4731',
  },
  {
    award: 'iPhone 13 Pro Max卡',
    player: '懷寧街狹隘的惠玲',
    ticket: '4772',
  },
  {
    award: 'iPhone 13 Pro Max卡',
    player: '祥雲街詛咒者信宏',
    ticket: '5496',
  },
  {
    award: 'iPhone 13 Pro Max卡',
    player: '邱嘎嘎',
    ticket: '20522',
  },
  {
    award: 'iPhone 13 Pro Max卡',
    player: '洲美街撕裂者家祥',
    ticket: '4634',
  },
  {
    award: 'iPhone 13 Pro Max卡',
    player: '高潮啟介',
    ticket: '7057',
  },
  {
    award: 'iPhone 13 Pro Max卡',
    player: '延吉街頎長佳琪',
    ticket: '4740',
  },
  {
    award: 'iPhone 13 Pro Max卡',
    player: '民生西粗笨者姵君',
    ticket: '4689',
  },
  {
    award: 'iPhone 13 Pro Max卡',
    player: '打到你唱征服',
    ticket: '10622',
  },
  {
    award: 'iPhone 13 Pro Max卡',
    player: '大屯路通情彥宇',
    ticket: '4633',
  },
  {
    award: 'iPhone 13 Pro Max卡',
    player: '長安東自大的彥良',
    ticket: '3603',
  },
  {
    award: '金幣20萬',
    player: '阿翔',
    ticket: '13610',
  },
  {
    award: '金幣20萬',
    player: '揪喝勝',
    ticket: '7822',
  },
  {
    award: '金幣20萬',
    player: '高潮啟介',
    ticket: '6762',
  },
  {
    award: '金幣20萬',
    player: '中發白',
    ticket: '6218',
  },
  {
    award: '金幣20萬',
    player: 'A吉',
    ticket: '4131',
  },
  {
    award: '金幣20萬',
    player: '瘋狂雞蛋',
    ticket: '19379',
  },
  {
    award: '金幣20萬',
    player: '五分管閒事',
    ticket: '10785',
  },
  {
    award: '金幣20萬',
    player: 'Fat東',
    ticket: '5198',
  },
  {
    award: '金幣20萬',
    player: '超級皮蛋',
    ticket: '9343',
  },
  {
    award: '金幣20萬',
    player: '阿交包',
    ticket: '10044',
  },
  {
    award: '金幣10萬',
    player: 'Azaz',
    ticket: '20830',
  },
  {
    award: '金幣10萬',
    player: '佛心公司董事長',
    ticket: '8769',
  },
  {
    award: '金幣10萬',
    player: '開開心心',
    ticket: '214',
  },
  {
    award: '金幣10萬',
    player: '新市街文靜庭瑋',
    ticket: '6104',
  },
  {
    award: '金幣10萬',
    player: '歪歪歪',
    ticket: '1746',
  },
  {
    award: '金幣10萬',
    player: '蒜桃',
    ticket: '21423',
  },
  {
    award: '金幣10萬',
    player: '萬倍大頭家',
    ticket: '21400',
  },
  {
    award: '金幣10萬',
    player: '眾望所歸',
    ticket: '6751',
  },
  {
    award: '金幣10萬',
    player: '富康街摧殘者怡君',
    ticket: '3370',
  },
  {
    award: '金幣10萬',
    player: '台灣SU',
    ticket: '10399',
  },
  {
    award: '金幣10萬',
    player: '阿翔',
    ticket: '9239',
  },
  {
    award: '金幣10萬',
    player: '深南路冷靜珮雯',
    ticket: '6601',
  },
  {
    award: '金幣10萬',
    player: '牛牛',
    ticket: '12939',
  },
  {
    award: '金幣10萬',
    player: '和平西魁偉彥伶',
    ticket: '3219',
  },
  {
    award: '金幣10萬',
    player: 'Dj搖不停',
    ticket: '19290',
  },
  {
    award: '金幣10萬',
    player: '軒軒',
    ticket: '6224',
  },
  {
    award: '金幣10萬',
    player: '旺旺仙貝',
    ticket: '6917',
  },
  {
    award: '金幣10萬',
    player: 'City',
    ticket: '22474',
  },
  {
    award: '金幣10萬',
    player: '就是那麼帥',
    ticket: '12153',
  },
  {
    award: '金幣10萬',
    player: '贏到住公園',
    ticket: '13616',
  },
  {
    award: '金幣10萬',
    player: '江小昇',
    ticket: '9262',
  },
  {
    award: '金幣10萬',
    player: '大澤佑香',
    ticket: '5037',
  },
  {
    award: '金幣10萬',
    player: '老夫子16888',
    ticket: '17438',
  },
  {
    award: '金幣10萬',
    player: '木柵路否定者書瑋',
    ticket: '5954',
  },
  {
    award: '金幣10萬',
    player: '瘋狂雞蛋',
    ticket: '18394',
  },
  {
    award: '金幣10萬',
    player: '李哥',
    ticket: '284',
  },
  {
    award: '金幣10萬',
    player: '青雲街挺胸玉芳',
    ticket: '17149',
  },
  {
    award: '金幣10萬',
    player: '擇我所愛',
    ticket: '18697',
  },
  {
    award: '金幣10萬',
    player: '唉唷',
    ticket: '4230',
  },
  {
    award: '金幣10萬',
    player: '金門街塑形者毓婷',
    ticket: '4247',
  },
  {
    award: '金幣2萬',
    player: '景隆阿樺',
    ticket: '13809',
  },
  {
    award: '金幣2萬',
    player: '五分管閒事',
    ticket: '5019',
  },
  {
    award: '金幣2萬',
    player: '啾咪',
    ticket: '6197',
  },
  {
    award: '金幣2萬',
    player: '贏翻樂',
    ticket: '16026',
  },
  {
    award: '金幣2萬',
    player: '小豬豬',
    ticket: '8793',
  },
  {
    award: '金幣2萬',
    player: '民權東毀滅者瓊慧',
    ticket: '10392',
  },
  {
    award: '金幣2萬',
    player: '富星翰',
    ticket: '9200',
  },
  {
    award: '金幣2萬',
    player: '錢財滿貫',
    ticket: '6289',
  },
  {
    award: '金幣2萬',
    player: 'Lucky',
    ticket: '1000',
  },
  {
    award: '金幣2萬',
    player: '歹當晨晨',
    ticket: '7900',
  },
  {
    award: '金幣2萬',
    player: '做一休三',
    ticket: '12040',
  },
  {
    award: '金幣2萬',
    player: '運氣不佳',
    ticket: '11444',
  },
  {
    award: '金幣2萬',
    player: '(≧ω≦)/',
    ticket: '3325',
  },
  {
    award: '金幣2萬',
    player: '長壽路灑脫竹君',
    ticket: '5086',
  },
  {
    award: '金幣2萬',
    player: '愷他命',
    ticket: '12556',
  },
  {
    award: '金幣2萬',
    player: '0.0',
    ticket: '10183',
  },
  {
    award: '金幣2萬',
    player: '杉哥',
    ticket: '4982',
  },
  {
    award: '金幣2萬',
    player: '社子街劫毀者家齊',
    ticket: '3391',
  },
  {
    award: '金幣2萬',
    player: '青年路精明孟璇',
    ticket: '14570',
  },
  {
    award: '金幣2萬',
    player: '焦滄海',
    ticket: '12841',
  },
  {
    award: '金幣2萬',
    player: '天龍',
    ticket: '20082',
  },
  {
    award: '金幣2萬',
    player: '邱董',
    ticket: '10180',
  },
  {
    award: '金幣2萬',
    player: '華亭街近人的瓊慧',
    ticket: '4604',
  },
  {
    award: '金幣2萬',
    player: '文山區錮魂者曉雯',
    ticket: '5726',
  },
  {
    award: '金幣2萬',
    player: '牯嶺街好學的育賢',
    ticket: '3785',
  },
  {
    award: '金幣2萬',
    player: '瞎了',
    ticket: '4257',
  },
  {
    award: '金幣2萬',
    player: '烘乾歲人',
    ticket: '6754',
  },
  {
    award: '金幣2萬',
    player: '復興二剝皮者博仁',
    ticket: '7826',
  },
  {
    award: '金幣2萬',
    player: '安居街無私者立偉',
    ticket: '14585',
  },
  {
    award: '金幣2萬',
    player: '廣州街爽快仁豪',
    ticket: '5053',
  },
  {
    award: '金幣2萬',
    player: '錦州街風趣建華',
    ticket: '5076',
  },
  {
    award: '金幣2萬',
    player: '西昌街善變者珮珊',
    ticket: '4838',
  },
  {
    award: '金幣2萬',
    player: '洪大神老闆',
    ticket: '3573',
  },
  {
    award: '金幣2萬',
    player: '漢口街追求俊良',
    ticket: '4755',
  },
  {
    award: '金幣2萬',
    player: '機車鬼',
    ticket: '6687',
  },
  {
    award: '金幣2萬',
    player: '晉江街娉婷嘉琪',
    ticket: '11410',
  },
  {
    award: '金幣2萬',
    player: '景隆街怖兇育誠',
    ticket: '19344',
  },
  {
    award: '金幣2萬',
    player: '虎尾囝仔',
    ticket: '6217',
  },
  {
    award: '金幣2萬',
    player: '拎唄',
    ticket: '12890',
  },
  {
    award: '金幣2萬',
    player: '中和安莉絲',
    ticket: '290',
  },
  {
    award: '金幣2萬',
    player: '優小手',
    ticket: '5258',
  },
  {
    award: '金幣2萬',
    player: '別再開了啦',
    ticket: '9863',
  },
  {
    award: '金幣2萬',
    player: '北安路煉獄美芳',
    ticket: '1246',
  },
  {
    award: '金幣2萬',
    player: '打到你唱征服',
    ticket: '19479',
  },
  {
    award: '金幣2萬',
    player: '北區金城武',
    ticket: '1817',
  },
  {
    award: '金幣2萬',
    player: '阿翔',
    ticket: '9241',
  },
  {
    award: '金幣2萬',
    player: '龍馬鶴',
    ticket: '11449',
  },
  {
    award: '金幣2萬',
    player: '心心',
    ticket: '7981',
  },
  {
    award: '金幣2萬',
    player: 'A吉',
    ticket: '6821',
  },
  {
    award: '金幣2萬',
    player: '阿交包',
    ticket: '19612',
  },
  {
    award: '金幣1萬',
    player: '振興街無神者佳勳',
    ticket: '4722',
  },
  {
    award: '金幣1萬',
    player: '牛牛',
    ticket: '16142',
  },
  {
    award: '金幣1萬',
    player: 'Dj搖不停',
    ticket: '19959',
  },
  {
    award: '金幣1萬',
    player: '芝玉路猥瑣的婷婷',
    ticket: '4790',
  },
  {
    award: '金幣1萬',
    player: 'Azaz',
    ticket: '20726',
  },
  {
    award: '金幣1萬',
    player: '左青龍右胖虎',
    ticket: '8276',
  },
  {
    award: '金幣1萬',
    player: '福德路惡夢郁涵',
    ticket: '3883',
  },
  {
    award: '金幣1萬',
    player: '高潮啟介',
    ticket: '6812',
  },
  {
    award: '金幣1萬',
    player: '邱董',
    ticket: '10484',
  },
  {
    award: '金幣1萬',
    player: '大澤佑香',
    ticket: '6732',
  },
  {
    award: '金幣1萬',
    player: '景隆阿樺',
    ticket: '14581',
  },
  {
    award: '金幣1萬',
    player: '金門街塑形者毓婷',
    ticket: '4245',
  },
  {
    award: '金幣1萬',
    player: '擇我所愛',
    ticket: '19588',
  },
  {
    award: '金幣1萬',
    player: '蒜桃',
    ticket: '21540',
  },
  {
    award: '金幣1萬',
    player: '武昌街尖臉立偉',
    ticket: '5096',
  },
  {
    award: '金幣1萬',
    player: '狂暴吳臉男',
    ticket: '4966',
  },
  {
    award: '金幣1萬',
    player: '邱嘎嘎',
    ticket: '20819',
  },
  {
    award: '金幣1萬',
    player: '哈密街務實明達',
    ticket: '19214',
  },
  {
    award: '金幣1萬',
    player: '台灣SU',
    ticket: '10006',
  },
  {
    award: '金幣1萬',
    player: '中發白',
    ticket: '6899',
  },
  {
    award: '金幣1萬',
    player: '梧州街堅定者世昌',
    ticket: '4597',
  },
  {
    award: '金幣1萬',
    player: '東星可樂',
    ticket: '2271',
  },
  {
    award: '金幣1萬',
    player: '西寧南急躁淑婷',
    ticket: '738',
  },
  {
    award: '金幣1萬',
    player: 'Finnick',
    ticket: '827',
  },
  {
    award: '金幣1萬',
    player: 'Joe慶',
    ticket: '509',
  },
  {
    award: '金幣1萬',
    player: 'kevin777',
    ticket: '4589',
  },
  {
    award: '金幣1萬',
    player: '迪化街凍魂哲宇',
    ticket: '19139',
  },
  {
    award: '金幣1萬',
    player: '虎尾囝仔',
    ticket: '2224',
  },
  {
    award: '金幣1萬',
    player: '萬利街重情者惠敏',
    ticket: '3783',
  },
  {
    award: '金幣1萬',
    player: '麻糬',
    ticket: '5568',
  },
  {
    award: '金幣1萬',
    player: '4170322',
    ticket: '6130',
  },
  {
    award: '金幣1萬',
    player: 'Fat東',
    ticket: '6092',
  },
  {
    award: '金幣1萬',
    player: '興寧街見利者怡秀',
    ticket: '3515',
  },
  {
    award: '金幣1萬',
    player: '南昌路頹廢者建勳',
    ticket: '4612',
  },
  {
    award: '金幣1萬',
    player: '歹當晨晨',
    ticket: '7896',
  },
  {
    award: '金幣1萬',
    player: '溪洲街不羈怡均',
    ticket: '4094',
  },
  {
    award: '金幣1萬',
    player: '富星旺',
    ticket: '3399',
  },
  {
    award: '金幣1萬',
    player: '該逼告嘎勞會',
    ticket: '2055',
  },
  {
    award: '金幣1萬',
    player: '懷寧街狹隘的惠玲',
    ticket: '4786',
  },
  {
    award: '金幣1萬',
    player: '西昌街善變者珮珊',
    ticket: '4821',
  },
  {
    award: '金幣1萬',
    player: '師大路有禮者曉婷',
    ticket: '3358',
  },
  {
    award: '金幣1萬',
    player: '洪大神老闆',
    ticket: '3343',
  },
  {
    award: '金幣1萬',
    player: '信義路射手瓊文',
    ticket: '3643',
  },
  {
    award: '金幣1萬',
    player: '深夜買醉',
    ticket: '5494',
  },
  {
    award: '金幣1萬',
    player: '赢到你喊停',
    ticket: '3600',
  },
  {
    award: '金幣1萬',
    player: '新湖一餓肚國華',
    ticket: '7525',
  },
  {
    award: '金幣1萬',
    player: '軒軒',
    ticket: '6243',
  },
  {
    award: '金幣1萬',
    player: '贏錢的罪惡感',
    ticket: '8275',
  },
  {
    award: '金幣1萬',
    player: '愷他命',
    ticket: '12045',
  },
  {
    award: '金幣1萬',
    player: '旺旺仙貝',
    ticket: '6932',
  },
  {
    award: '金幣1萬',
    player: '安居街無私者立偉',
    ticket: '14391',
  },
  {
    award: '金幣1萬',
    player: '窮困流浪狗',
    ticket: '5056',
  },
  {
    award: '金幣1萬',
    player: '仙岩路毒蛇怡真',
    ticket: '3910',
  },
  {
    award: '金幣1萬',
    player: '林兒',
    ticket: '1406',
  },
  {
    award: '金幣1萬',
    player: '經貿路碎脊者彥君',
    ticket: '4699',
  },
  {
    award: '金幣1萬',
    player: '港墘路殘忍姿蓉',
    ticket: '67',
  },
  {
    award: '金幣1萬',
    player: '健康路雷電聖傑',
    ticket: '3686',
  },
  {
    award: '金幣1萬',
    player: '暴富魚仔',
    ticket: '1251',
  },
  {
    award: '金幣1萬',
    player: '楊羽霏',
    ticket: '1778',
  },
  {
    award: '金幣1萬',
    player: '以黃明志',
    ticket: '2214',
  },
  {
    award: '金幣1萬',
    player: '我要贏錢',
    ticket: '11406',
  },
  {
    award: '金幣1萬',
    player: '歪歪歪',
    ticket: '6748',
  },
  {
    award: '金幣1萬',
    player: '招財貓',
    ticket: '22353',
  },
  {
    award: '金幣1萬',
    player: '錢財滿貫',
    ticket: '7019',
  },
  {
    award: '金幣1萬',
    player: '余納斯',
    ticket: '2433',
  },
  {
    award: '金幣1萬',
    player: '基湖路詛咒者筱雯',
    ticket: '3837',
  },
  {
    award: '金幣1萬',
    player: '德力',
    ticket: '5029',
  },
  {
    award: '金幣1萬',
    player: '愛霏兒',
    ticket: '623',
  },
  {
    award: '金幣1萬',
    player: '冰滴綠茶',
    ticket: '8289',
  },
  {
    award: '金幣1萬',
    player: '騎著豬打天下',
    ticket: '13466',
  },
  {
    award: '金幣1萬',
    player: '天天來',
    ticket: '5018',
  },
  {
    award: '金幣1萬',
    player: '贏到不要不要',
    ticket: '14591',
  },
  {
    award: '金幣1萬',
    player: '夢幻彩虹銀行家',
    ticket: '2319',
  },
  {
    award: '金幣1萬',
    player: '施菲亞',
    ticket: '916',
  },
  {
    award: '金幣1萬',
    player: '關渡路惡潰凱傑',
    ticket: '4608',
  },
  {
    award: '金幣1萬',
    player: '滅霸',
    ticket: '2131',
  },
  {
    award: '金幣1萬',
    player: '忠勇街矯健佩樺',
    ticket: '5192',
  },
  {
    award: '金幣1萬',
    player: '別再開了啦',
    ticket: '9880',
  },
  {
    award: '金幣1萬',
    player: '啾咪',
    ticket: '6730',
  },
  {
    award: '金幣1萬',
    player: '青雲街挺胸玉芳',
    ticket: '16482',
  },
  {
    award: '金幣1萬',
    player: '打到你唱征服',
    ticket: '3405',
  },
  {
    award: '金幣1萬',
    player: '長安東自大的彥良',
    ticket: '4599',
  },
  {
    award: '金幣1萬',
    player: '北區金城武',
    ticket: '1848',
  },
  {
    award: '金幣1萬',
    player: '復興二剝皮者博仁',
    ticket: '7824',
  },
  {
    award: '金幣1萬',
    player: '大屯路通情彥宇',
    ticket: '4660',
  },
  {
    award: '金幣1萬',
    player: '洲美街撕裂者家祥',
    ticket: '4692',
  },
  {
    award: '金幣1萬',
    player: '精液你會不會來',
    ticket: '7343',
  },
  {
    award: '金幣1萬',
    player: '西昌街恐怖的政宏',
    ticket: '4432',
  },
  {
    award: '金幣1萬',
    player: '晉江街娉婷嘉琪',
    ticket: '10762',
  },
  {
    award: '金幣1萬',
    player: '文山區錮魂者曉雯',
    ticket: '5711',
  },
  {
    award: '金幣1萬',
    player: '(≧ω≦)/',
    ticket: '3327',
  },
  {
    award: '金幣1萬',
    player: '錦州街風趣建華',
    ticket: '5099',
  },
  {
    award: '金幣1萬',
    player: '名字剛好七個字',
    ticket: '6928',
  },
  {
    award: '金幣1萬',
    player: '一統江湖',
    ticket: '5161',
  },
  {
    award: '金幣1萬',
    player: '揪喝勝',
    ticket: '9391',
  },
  {
    award: '金幣1萬',
    player: '富星翰',
    ticket: '4531',
  },
  {
    award: '金幣1萬',
    player: '輕鬆免費遊戲',
    ticket: '8968',
  },
  {
    award: '金幣1萬',
    player: '添好運',
    ticket: '7116',
  },
  {
    award: '金幣1萬',
    player: '說好讓我贏',
    ticket: '5995',
  },
  {
    award: '金幣1萬',
    player: '中和安莉絲',
    ticket: '36',
  },
]

const tickets2: TicketResult[] = [
  {
    award: 'Yamaha R3卡',
    player: '經貿路碎脊者彥君',
    ticket: '11567',
  },
  {
    award: '一台兩黃金卡',
    player: '基湖路詛咒者筱雯',
    ticket: '11382',
  },
  {
    award: 'iPhone 13卡',
    player: '信義路射手瓊文',
    ticket: '9971',
  },
  {
    award: 'iPhone 13卡',
    player: '社正路重義者雅惠',
    ticket: '15522',
  },
  {
    award: 'iPhone 13卡',
    player: '漢口街魅影馨文',
    ticket: '9017',
  },
  {
    award: 'iPhone 13卡',
    player: '師大路有禮者曉婷',
    ticket: '9160',
  },
  {
    award: 'iPhone 13卡',
    player: '久康街誠實雅琳',
    ticket: '11546',
  },
  {
    award: 'iPhone 13卡',
    player: '關渡路惡潰凱傑',
    ticket: '20449',
  },
  {
    award: 'iPhone 13卡',
    player: '松隆路無能的柏廷',
    ticket: '15694',
  },
  {
    award: 'iPhone 13卡',
    player: '振興街無神者佳勳',
    ticket: '15581',
  },
  {
    award: 'iPhone 13卡',
    player: '環河南炎火雅琳',
    ticket: '12247',
  },
  {
    award: 'iPhone 13卡',
    player: '哈密街務實明達',
    ticket: '13787',
  },
  {
    award: '金幣1萬',
    player: '開獎給我買奶粉',
    ticket: '8169',
  },
  {
    award: '金幣1萬',
    player: '西螺鎮長',
    ticket: '67081',
  },
  {
    award: '金幣1萬',
    player: '錢來也💰',
    ticket: '66530',
  },
  {
    award: '金幣1萬',
    player: '麻煩開大獎一下',
    ticket: '12417',
  },
  {
    award: '金幣1萬',
    player: '咖哩涼~',
    ticket: '4107',
  },
  {
    award: '金幣1萬',
    player: '吳大餅',
    ticket: '30464',
  },
  {
    award: '金幣1萬',
    player: '大里陳浩南',
    ticket: '28164',
  },
  {
    award: '金幣1萬',
    player: '夢幻彩虹幣託',
    ticket: '63118',
  },
  {
    award: '金幣1萬',
    player: '88888',
    ticket: '61112',
  },
  {
    award: '金幣1萬',
    player: '強運19678',
    ticket: '68414',
  },
  {
    award: '金幣1萬',
    player: '我要變有錢人',
    ticket: '2407',
  },
  {
    award: '金幣1萬',
    player: '空空仔',
    ticket: '64838',
  },
  {
    award: '金幣1萬',
    player: '王者之峰',
    ticket: '31925',
  },
  {
    award: '金幣1萬',
    player: '珠海路暗影承恩',
    ticket: '19656',
  },
  {
    award: '金幣1萬',
    player: '來一客',
    ticket: '8398',
  },
  {
    award: '金幣1萬',
    player: '媽祖叫我贏',
    ticket: '20901',
  },
  {
    award: '金幣1萬',
    player: '民權西切剁者俊男',
    ticket: '45212',
  },
  {
    award: '金幣1萬',
    player: '通河街漫遊者巧玲',
    ticket: '67914',
  },
  {
    award: '金幣1萬',
    player: '向陽路通情佳瑩',
    ticket: '22412',
  },
  {
    award: '金幣1萬',
    player: '隨便都百萬',
    ticket: '45158',
  },
  {
    award: '金幣6千',
    player: '安康路魯莽佳芸',
    ticket: '7078',
  },
  {
    award: '金幣6千',
    player: 'Lun777',
    ticket: '27766',
  },
  {
    award: '金幣6千',
    player: '嘿嘿嘿',
    ticket: '37278',
  },
  {
    award: '金幣6千',
    player: '齊雨',
    ticket: '61619',
  },
  {
    award: '金幣6千',
    player: '管',
    ticket: '30764',
  },
  {
    award: '金幣6千',
    player: '黃泉路好學的人',
    ticket: '8176',
  },
  {
    award: '金幣6千',
    player: '旺旺',
    ticket: '6319',
  },
  {
    award: '金幣6千',
    player: '別在包你發了',
    ticket: '19899',
  },
  {
    award: '金幣6千',
    player: '景中街活潑孟潔',
    ticket: '2708',
  },
  {
    award: '金幣6千',
    player: '拉菲哥',
    ticket: '20820',
  },
  {
    award: '金幣6千',
    player: '臨江街管閒事士傑',
    ticket: '5841',
  },
  {
    award: '金幣6千',
    player: '全土豆',
    ticket: '11483',
  },
  {
    award: '金幣6千',
    player: '彫禪',
    ticket: '21722',
  },
  {
    award: '金幣6千',
    player: '包開大獎',
    ticket: '59618',
  },
  {
    award: '金幣6千',
    player: '錢都我的 謝謝',
    ticket: '62496',
  },
  {
    award: '金幣6千',
    player: '陳原',
    ticket: '26482',
  },
  {
    award: '金幣6千',
    player: '阿倫',
    ticket: '3539',
  },
  {
    award: '金幣6千',
    player: '港都小張',
    ticket: '19728',
  },
  {
    award: '金幣6千',
    player: '旺角',
    ticket: '63842',
  },
  {
    award: '金幣6千',
    player: '恆光街凋零者雅筑',
    ticket: '19587',
  },
  {
    award: '金幣6千',
    player: '屯門林亦凡',
    ticket: '30042',
  },
  {
    award: '金幣6千',
    player: '58585我發我發我',
    ticket: '65',
  },
  {
    award: '金幣6千',
    player: 'JP來我家',
    ticket: '69105',
  },
  {
    award: '金幣6千',
    player: '頭家我來當',
    ticket: '24520',
  },
  {
    award: '金幣6千',
    player: '小傻蛋',
    ticket: '30550',
  },
  {
    award: '金幣6千',
    player: '我在市場待整天',
    ticket: '19664',
  },
  {
    award: '金幣6千',
    player: '夏雨喬',
    ticket: '22736',
  },
  {
    award: '金幣6千',
    player: '安康路管閒事孟潔',
    ticket: '27760',
  },
  {
    award: '金幣6千',
    player: '上廣有手就行',
    ticket: '25102',
  },
  {
    award: '金幣6千',
    player: '民',
    ticket: '61396',
  },
  {
    award: '金幣6千',
    player: '我是你老爸',
    ticket: '69134',
  },
  {
    award: '金幣6千',
    player: '鮭鮭',
    ticket: '20494',
  },
  {
    award: '金幣6千',
    player: '豬8戒',
    ticket: '26585',
  },
  {
    award: '金幣6千',
    player: '三不五十',
    ticket: '63123',
  },
  {
    award: '金幣6千',
    player: '狂開猛送',
    ticket: '22708',
  },
  {
    award: '金幣6千',
    player: '曹操字阿滿',
    ticket: '19096',
  },
  {
    award: '金幣6千',
    player: '新明路矯健冠儒',
    ticket: '65094',
  },
  {
    award: '金幣6千',
    player: '帥到沒理由',
    ticket: '25109',
  },
  {
    award: '金幣6千',
    player: '竑.',
    ticket: '63128',
  },
  {
    award: '金幣6千',
    player: '對方來了',
    ticket: '62317',
  },
  {
    award: '金幣2千',
    player: '婷婷發發發',
    ticket: '62054',
  },
  {
    award: '金幣2千',
    player: '順風',
    ticket: '66649',
  },
  {
    award: '金幣2千',
    player: '太原路大義人豪',
    ticket: '25141',
  },
  {
    award: '金幣2千',
    player: '豬排蓋飯',
    ticket: '30504',
  },
  {
    award: '金幣2千',
    player: '市府路忘恩的莉婷',
    ticket: '19750',
  },
  {
    award: '金幣2千',
    player: '基湖路穿刺者俊銘',
    ticket: '22631',
  },
  {
    award: '金幣2千',
    player: '嘿嘿嘿嘿',
    ticket: '30555',
  },
  {
    award: '金幣2千',
    player: '黃小豬',
    ticket: '20824',
  },
  {
    award: '金幣2千',
    player: '汪小犬',
    ticket: '27702',
  },
  {
    award: '金幣2千',
    player: '阿良',
    ticket: '65198',
  },
  {
    award: '金幣2千',
    player: '德行西帥氣的彥志',
    ticket: '21008',
  },
  {
    award: '金幣2千',
    player: '竹子湖四方臉博仁',
    ticket: '22348',
  },
  {
    award: '金幣2千',
    player: '中山區狂暴者郁芬',
    ticket: '24454',
  },
  {
    award: '金幣2千',
    player: '景豐街矯健宜樺',
    ticket: '22376',
  },
  {
    award: '金幣2千',
    player: '慶城街洋溢佳芳',
    ticket: '21361',
  },
  {
    award: '金幣2千',
    player: '青島西有條理郁婷',
    ticket: '30441',
  },
  {
    award: '金幣2千',
    player: 'saya',
    ticket: '7251',
  },
  {
    award: '金幣2千',
    player: '常贏錢',
    ticket: '26942',
  },
  {
    award: '金幣2千',
    player: '小嘉',
    ticket: '22678',
  },
  {
    award: '金幣2千',
    player: '子彈',
    ticket: '62558',
  },
  {
    award: '金幣2千',
    player: '小賀',
    ticket: '7387',
  },
  {
    award: '金幣2千',
    player: '柔柔人妻',
    ticket: '21456',
  },
  {
    award: '金幣2千',
    player: '吉祥路矮小佳慧',
    ticket: '55260',
  },
  {
    award: '金幣2千',
    player: '西昌街熱情姿吟',
    ticket: '7031',
  },
  {
    award: '金幣2千',
    player: '賺滿滿',
    ticket: '32278',
  },
  {
    award: '金幣2千',
    player: '福興路統領者柏凱',
    ticket: '22123',
  },
  {
    award: '金幣2千',
    player: '寧安街智勇者政霖',
    ticket: '25269',
  },
  {
    award: '金幣2千',
    player: 'Chang',
    ticket: '63096',
  },
  {
    award: '金幣2千',
    player: '來哥帶你飛',
    ticket: '28302',
  },
  {
    award: '金幣2千',
    player: 'XueFeng',
    ticket: '20975',
  },
  {
    award: '金幣2千',
    player: '福榮街絞貪佳純',
    ticket: '22745',
  },
  {
    award: '金幣2千',
    player: '咪仔',
    ticket: '22954',
  },
  {
    award: '金幣2千',
    player: '熊熊🐻',
    ticket: '21779',
  },
  {
    award: '金幣2千',
    player: '土匪阿哲',
    ticket: '8952',
  },
  {
    award: '金幣2千',
    player: '盪鞦韆',
    ticket: '21471',
  },
  {
    award: '金幣2千',
    player: 'Friend',
    ticket: '22829',
  },
  {
    award: '金幣2千',
    player: '三重路貪心惠茹',
    ticket: '28606',
  },
  {
    award: '金幣2千',
    player: '你叔公',
    ticket: '27397',
  },
  {
    award: '金幣2千',
    player: '試院路殘忍惠君',
    ticket: '22389',
  },
  {
    award: '金幣2千',
    player: '東興路猴子臉家齊',
    ticket: '6023',
  },
  {
    award: '金幣2千',
    player: '內湖路自大的家榮',
    ticket: '25279',
  },
  {
    award: '金幣2千',
    player: '財神來我家',
    ticket: '22367',
  },
  {
    award: '金幣2千',
    player: '葉子～',
    ticket: '30523',
  },
  {
    award: '金幣2千',
    player: '發發發爆發',
    ticket: '25480',
  },
  {
    award: '金幣2千',
    player: '年代九州',
    ticket: '6009',
  },
  {
    award: '金幣2千',
    player: '安泰街聰明世杰',
    ticket: '19908',
  },
  {
    award: '金幣2千',
    player: '康定路成熟的彥霖',
    ticket: '10982',
  },
  {
    award: '金幣2千',
    player: '萬萬倍',
    ticket: '60764',
  },
  {
    award: '金幣2千',
    player: '女牛仔很忙',
    ticket: '257',
  },
  {
    award: '金幣2千',
    player: '紫色好歡螺',
    ticket: '27031',
  },
  {
    award: '金幣2千',
    player: '富邦邦',
    ticket: '16726',
  },
  {
    award: '金幣2千',
    player: '柳州街暗影志傑',
    ticket: '60091',
  },
  {
    award: '金幣2千',
    player: '丟嘎起秋',
    ticket: '30470',
  },
  {
    award: '金幣2千',
    player: '狼桃',
    ticket: '1188',
  },
  {
    award: '金幣2千',
    player: '錢家莊',
    ticket: '66516',
  },
  {
    award: '金幣2千',
    player: '凜凜',
    ticket: '373',
  },
  {
    award: '金幣2千',
    player: '嘿嘿嘿嘿嘿',
    ticket: '30461',
  },
  {
    award: '金幣2千',
    player: '壞壞有人愛',
    ticket: '61431',
  },
  {
    award: '金幣2千',
    player: '三民路驕傲美伶',
    ticket: '30459',
  },
  {
    award: '金幣2千',
    player: '走走',
    ticket: '28671',
  },
  {
    award: '金幣2千',
    player: '社子街風趣淑惠',
    ticket: '19710',
  },
  {
    award: '金幣2千',
    player: '傲爺奈你合',
    ticket: '382',
  },
  {
    award: '金幣2千',
    player: '山雞',
    ticket: '27115',
  },
  {
    award: '金幣2千',
    player: '夢幻彩虹帝君門生',
    ticket: '14899',
  },
  {
    award: '金幣2千',
    player: '中壢小楊',
    ticket: '11547',
  },
  {
    award: '金幣2千',
    player: '永春街冰血者淑雯',
    ticket: '26659',
  },
  {
    award: '金幣2千',
    player: '傻小蛋',
    ticket: '22080',
  },
  {
    award: '金幣2千',
    player: '綸少',
    ticket: '3435',
  },
  {
    award: '金幣2千',
    player: '小銀',
    ticket: '5349',
  },
  {
    award: '金幣2千',
    player: '復興二怕事佳勳',
    ticket: '27346',
  },
  {
    award: '金幣1千6',
    player: '揚揚',
    ticket: '19722',
  },
  {
    award: '金幣1千6',
    player: '翔仔',
    ticket: '30454',
  },
  {
    award: '金幣1千6',
    player: '濱東琯乙丸',
    ticket: '20310',
  },
  {
    award: '金幣1千6',
    player: '振興街長生者佩蓉',
    ticket: '60222',
  },
  {
    award: '金幣1千6',
    player: '老子贏錢花',
    ticket: '30093',
  },
  {
    award: '金幣1千6',
    player: '溪洲街惡歇昱廷',
    ticket: '21168',
  },
  {
    award: '金幣1千6',
    player: '櫻道初雪',
    ticket: '19623',
  },
  {
    award: '金幣1千6',
    player: '是老鼠嗎這麼會咬',
    ticket: '22828',
  },
  {
    award: '金幣1千6',
    player: '磺港路白髮佩璇',
    ticket: '21967',
  },
  {
    award: '金幣1千6',
    player: '豬豬兒',
    ticket: '27076',
  },
  {
    award: '金幣1千6',
    player: '爆頭王',
    ticket: '19437',
  },
  {
    award: '金幣1千6',
    player: '愛富一肥乎乎千惠',
    ticket: '26581',
  },
  {
    award: '金幣1千6',
    player: '也才這樣嘛',
    ticket: '23049',
  },
  {
    award: '金幣1千6',
    player: '一八六六七',
    ticket: '20270',
  },
  {
    award: '金幣1千6',
    player: '雞雞歪歪',
    ticket: '57918',
  },
  {
    award: '金幣1千6',
    player: '雙城街不苟庭瑋',
    ticket: '5159',
  },
  {
    award: '金幣1千6',
    player: '億兒',
    ticket: '22079',
  },
  {
    award: '金幣1千6',
    player: '復興北死炎宇軒',
    ticket: '19523',
  },
  {
    award: '金幣1千6',
    player: '敦化背叛者',
    ticket: '11580',
  },
  {
    award: '金幣1千6',
    player: '瘋狂吃皮蛋',
    ticket: '61430',
  },
  {
    award: '金幣1千6',
    player: '888開開開',
    ticket: '28754',
  },
  {
    award: '金幣1千6',
    player: '哈達贏不到',
    ticket: '8944',
  },
  {
    award: '金幣1千6',
    player: '銅板聲響',
    ticket: '27400',
  },
  {
    award: '金幣1千6',
    player: '永安街碎顱雅晴',
    ticket: '21890',
  },
  {
    award: '金幣1千6',
    player: '如沐微風',
    ticket: '20652',
  },
  {
    award: '金幣1千6',
    player: '無限制勝利',
    ticket: '1361',
  },
  {
    award: '金幣1千6',
    player: '最苦的美好',
    ticket: '23065',
  },
  {
    award: '金幣1千6',
    player: '有趣的靈魂',
    ticket: '30547',
  },
  {
    award: '金幣1千6',
    player: '屏東小霸王',
    ticket: '27453',
  },
  {
    award: '金幣1千6',
    player: '阿屁',
    ticket: '34827',
  },
  {
    award: '金幣1千6',
    player: '黃詣欽',
    ticket: '27177',
  },
  {
    award: '金幣1千6',
    player: '山下智缺',
    ticket: '21945',
  },
  {
    award: '金幣1千6',
    player: '星雲街厭毒宗勳',
    ticket: '102',
  },
  {
    award: '金幣1千6',
    player: '帥到看醫生',
    ticket: '3380',
  },
  {
    award: '金幣1千6',
    player: '小過發財了',
    ticket: '66285',
  },
  {
    award: '金幣1千6',
    player: '南坡萬',
    ticket: '8968',
  },
  {
    award: '金幣1千6',
    player: '大頭家工讀生..',
    ticket: '27393',
  },
  {
    award: '金幣1千6',
    player: '陳總在夜總會',
    ticket: '21346',
  },
  {
    award: '金幣1千6',
    player: '揚金',
    ticket: '63110',
  },
  {
    award: '金幣1千6',
    player: '新湖三聰明怡芳',
    ticket: '26658',
  },
  {
    award: '金幣1千6',
    player: '金錢殺手',
    ticket: '23319',
  },
  {
    award: '金幣1千6',
    player: '好運旺旺來Y',
    ticket: '8082',
  },
  {
    award: '金幣1千6',
    player: '田小龍',
    ticket: '63208',
  },
  {
    award: '金幣1千6',
    player: 'BIN',
    ticket: '20429',
  },
  {
    award: '金幣1千6',
    player: '修',
    ticket: '26560',
  },
  {
    award: '金幣1千6',
    player: '福國路奴人者俊德',
    ticket: '24994',
  },
  {
    award: '金幣1千6',
    player: '中到你會怕',
    ticket: '22562',
  },
  {
    award: '金幣1千6',
    player: '財財娃兒',
    ticket: '15218',
  },
  {
    award: '金幣1千6',
    player: '合江街不屈者偉哲',
    ticket: '2157',
  },
  {
    award: '金幣1千6',
    player: '華岡路粗笨者俊男',
    ticket: '7960',
  },
  {
    award: '金幣1千6',
    player: 'Gilhespy',
    ticket: '30557',
  },
  {
    award: '金幣1千6',
    player: 'MISAKINGSS',
    ticket: '20430',
  },
  {
    award: '金幣1千6',
    player: '阿羅肥',
    ticket: '27200',
  },
  {
    award: '金幣1千6',
    player: '登山路天真凱婷',
    ticket: '21413',
  },
  {
    award: '金幣1千6',
    player: '富康街狡猾千惠',
    ticket: '16242',
  },
  {
    award: '金幣1千6',
    player: '儒林外史2',
    ticket: '30755',
  },
  {
    award: '金幣1千6',
    player: '不讀書靠賭博',
    ticket: '30524',
  },
  {
    award: '金幣1千6',
    player: '天天都開心',
    ticket: '26213',
  },
  {
    award: '金幣1千6',
    player: '和豐街移魂者文馨',
    ticket: '61302',
  },
  {
    award: '金幣1千6',
    player: 'druk0717',
    ticket: '21176',
  },
  {
    award: '金幣1千6',
    player: '鑫來發',
    ticket: '23059',
  },
  {
    award: '金幣1千6',
    player: '熊熊熊',
    ticket: '22216',
  },
  {
    award: '金幣1千6',
    player: '喔厚',
    ticket: '66306',
  },
  {
    award: '金幣1千6',
    player: '洛陽街聰明冠廷',
    ticket: '27312',
  },
  {
    award: '金幣1千6',
    player: '歡納匯',
    ticket: '30499',
  },
  {
    award: '金幣1千6',
    player: '中山區肌肉立偉',
    ticket: '24516',
  },
  {
    award: '金幣1千6',
    player: '改名換命',
    ticket: '61011',
  },
  {
    award: '金幣1千6',
    player: '一杯又一杯',
    ticket: '5321',
  },
  {
    award: '金幣1千6',
    player: '䊾',
    ticket: '20211',
  },
  {
    award: '金幣1千6',
    player: '你走開',
    ticket: '63169',
  },
  {
    award: '金幣1千6',
    player: '涅槃重生',
    ticket: '26702',
  },
  {
    award: '金幣1千6',
    player: '滿貫大亨',
    ticket: '245',
  },
  {
    award: '金幣1千6',
    player: '好運自來',
    ticket: '22935',
  },
  {
    award: '金幣1千6',
    player: '信義路煉獄宛儒',
    ticket: '6326',
  },
  {
    award: '金幣1千6',
    player: '蜂',
    ticket: '25453',
  },
  {
    award: '金幣1千6',
    player: '彭宇晏',
    ticket: '22279',
  },
  {
    award: '金幣1千6',
    player: '嘿',
    ticket: '58523',
  },
  {
    award: '金幣1千6',
    player: '港墘路逞強育賢',
    ticket: '62587',
  },
  {
    award: '金幣1千6',
    player: '啊傑',
    ticket: '25502',
  },
  {
    award: '金幣1千6',
    player: '虛弱要逼',
    ticket: '30452',
  },
  {
    award: '金幣1千6',
    player: '泉源路惡歇彥儒',
    ticket: '22340',
  },
  {
    award: '金幣1千6',
    player: '尼爾',
    ticket: '16303',
  },
  {
    award: '金幣1千6',
    player: '文山區親切千惠',
    ticket: '11184',
  },
  {
    award: '金幣1千6',
    player: '哈哈哈',
    ticket: '255',
  },
  {
    award: '金幣1千6',
    player: '爲虎作悵',
    ticket: '19526',
  },
  {
    award: '金幣1千6',
    player: '杭州北文靜欣潔',
    ticket: '28912',
  },
  {
    award: '金幣1千6',
    player: '長春路黑暗者志偉',
    ticket: '19959',
  },
  {
    award: '金幣1千6',
    player: '杏林二開朗韻婷',
    ticket: '23201',
  },
  {
    award: '金幣1千6',
    player: '福州街堅定者珮如',
    ticket: '20425',
  },
  {
    award: '金幣1千6',
    player: '旺仔',
    ticket: '11472',
  },
  {
    award: '金幣1千6',
    player: 'peng',
    ticket: '29175',
  },
  {
    award: '金幣1千6',
    player: '波羅波羅密',
    ticket: '8483',
  },
  {
    award: '金幣1千6',
    player: '甘州街恐牙怡君',
    ticket: '21440',
  },
  {
    award: '金幣1千6',
    player: '咖啡與煙',
    ticket: '30507',
  },
  {
    award: '金幣1千6',
    player: 'COTLLI',
    ticket: '65192',
  },
  {
    award: '金幣1千6',
    player: '百億大頭家',
    ticket: '27112',
  },
  {
    award: '金幣1千6',
    player: '豬淫贏',
    ticket: '26928',
  },
  {
    award: '金幣1千6',
    player: '咬到登天',
    ticket: '22643',
  },
  {
    award: '金幣1千6',
    player: '阿嘉',
    ticket: '22262',
  },
  {
    award: '金幣1千6',
    player: '儒小小',
    ticket: '26341',
  },
]

const tickets3: TicketResult[] = [
  {
    award: 'iPhone 13卡',
    player: '美夢成真中大獎',
    ticket: '121602',
  },
  {
    award: 'iPhone 13卡',
    player: '勾起你心中的惡',
    ticket: '157606',
  },
  {
    award: 'iPhone 13卡',
    player: '明水路清秀凱翔',
    ticket: '71829',
  },
  {
    award: 'iPhone 13卡',
    player: '溪洲街不羈怡均',
    ticket: '75673',
  },
  {
    award: 'iPhone 13卡',
    player: '仙岩路毒蛇怡真',
    ticket: '106091',
  },
  {
    award: 'iPhone 13卡',
    player: '左青龍右胖虎',
    ticket: '93090',
  },
  {
    award: 'iPhone 13卡',
    player: '萬利街重情者惠敏',
    ticket: '170011',
  },
  {
    award: 'iPhone 13卡',
    player: '興寧街見利者怡秀',
    ticket: '71825',
  },
  {
    award: 'iPhone 13卡',
    player: '梧州街堅定者世昌',
    ticket: '75603',
  },
  {
    award: 'iPhone 13卡',
    player: '深夜買醉',
    ticket: '149250',
  },
  {
    award: 'iPhone 13卡',
    player: '快樂肥仔水',
    ticket: '138123',
  },
  {
    award: 'iPhone 13卡',
    player: '南昌路頹廢者建勳',
    ticket: '71822',
  },
  {
    award: 'iPhone 13卡',
    player: '是在哈嘍',
    ticket: '50634',
  },
  {
    award: 'iPhone 13卡',
    player: '赢到你喊停',
    ticket: '18766',
  },
  {
    award: 'iPhone 13卡',
    player: '輸要縮贏要衝',
    ticket: '117245',
  },
  {
    award: 'iPhone 13卡',
    player: '我書讀得少不會輸',
    ticket: '111443',
  },
  {
    award: 'iPhone 13卡',
    player: '信義路賭神巧克力',
    ticket: '50474',
  },
  {
    award: 'iPhone 13卡',
    player: '滅霸',
    ticket: '410',
  },
  {
    award: 'iPhone 13卡',
    player: '輕鬆免費遊戲',
    ticket: '136431',
  },
  {
    award: 'iPhone 13卡',
    player: '精液你會不會來',
    ticket: '175483',
  },
  {
    award: '金幣2千',
    player: 'ChanYutang',
    ticket: '181476',
  },
  {
    award: '金幣2千',
    player: '西螺廖二頭',
    ticket: '187102',
  },
  {
    award: '金幣2千',
    player: '貝貝666',
    ticket: '147409',
  },
  {
    award: '金幣2千',
    player: '南京西矯健明達',
    ticket: '19796',
  },
  {
    award: '金幣2千',
    player: '翰',
    ticket: '93296',
  },
  {
    award: '金幣2千',
    player: '殺紅眼',
    ticket: '55791',
  },
  {
    award: '金幣2千',
    player: '贏多點當帥哥',
    ticket: '184973',
  },
  {
    award: '金幣2千',
    player: '隆',
    ticket: '86578',
  },
  {
    award: '金幣2千',
    player: '小鳥',
    ticket: '111734',
  },
  {
    award: '金幣2千',
    player: '旺bake',
    ticket: '145349',
  },
  {
    award: '金幣2千',
    player: 'MAX',
    ticket: '182387',
  },
  {
    award: '金幣2千',
    player: '市場佑哥',
    ticket: '122574',
  },
  {
    award: '金幣2千',
    player: '賴打點不著',
    ticket: '185609',
  },
  {
    award: '金幣2千',
    player: '余文樂',
    ticket: '186613',
  },
  {
    award: '金幣2千',
    player: '六七八七',
    ticket: '130169',
  },
  {
    award: '金幣2千',
    player: '泓昌',
    ticket: '183772',
  },
  {
    award: '金幣2千',
    player: 'shen',
    ticket: '121635',
  },
  {
    award: '金幣2千',
    player: '大埔街磺石政憲',
    ticket: '144066',
  },
  {
    award: '金幣2千',
    player: '新市街守舊子軒',
    ticket: '145456',
  },
  {
    award: '金幣2千',
    player: '永綏街強壯慧君',
    ticket: '148046',
  },
  {
    award: '金幣2千',
    player: '虎王',
    ticket: '125760',
  },
  {
    award: '金幣2千',
    player: '桃園小狼繩',
    ticket: '91502',
  },
  {
    award: '金幣2千',
    player: '機關藏在內褲',
    ticket: '124577',
  },
  {
    award: '金幣2千',
    player: '小姐請留下芳名',
    ticket: '83581',
  },
  {
    award: '金幣2千',
    player: '漢口街劫毀者家慧',
    ticket: '95835',
  },
  {
    award: '金幣2千',
    player: '天天開心阿',
    ticket: '72071',
  },
  {
    award: '金幣2千',
    player: '景華街混濁的世豪',
    ticket: '80024',
  },
  {
    award: '金幣2千',
    player: '二林少年家',
    ticket: '101448',
  },
  {
    award: '金幣2千',
    player: '陽光街水汪汪孟軒',
    ticket: '143400',
  },
  {
    award: '金幣2千',
    player: '超大紅甘',
    ticket: '116660',
  },
  {
    award: '金幣1千6',
    player: '莊敬路殘忍怡芬',
    ticket: '113113',
  },
  {
    award: '金幣1千6',
    player: '金色年華',
    ticket: '103514',
  },
  {
    award: '金幣1千6',
    player: '涼州街寡情者文婷',
    ticket: '146262',
  },
  {
    award: '金幣1千6',
    player: '輸到賣衣服',
    ticket: '80650',
  },
  {
    award: '金幣1千6',
    player: '寶寶萬萬歲',
    ticket: '90323',
  },
  {
    award: '金幣1千6',
    player: '大頭家有你真好',
    ticket: '107828',
  },
  {
    award: '金幣1千6',
    player: '歡納慧',
    ticket: '40136',
  },
  {
    award: '金幣1千6',
    player: '你寶貝',
    ticket: '92421',
  },
  {
    award: '金幣1千6',
    player: '殿下駕崩',
    ticket: '132576',
  },
  {
    award: '金幣1千6',
    player: '葫蘆街不朽的建宇',
    ticket: '420',
  },
  {
    award: '金幣1千6',
    player: '下崙路近人的玉珊',
    ticket: '58678',
  },
  {
    award: '金幣1千6',
    player: '玲娘欸黑',
    ticket: '25960',
  },
  {
    award: '金幣1千6',
    player: '東興路鎖鏈志偉',
    ticket: '15806',
  },
  {
    award: '金幣1千6',
    player: '小小欣',
    ticket: '177867',
  },
  {
    award: '金幣1千6',
    player: '公館街混濁的淑真',
    ticket: '75617',
  },
  {
    award: '金幣1千6',
    player: '咬到頭家跑路',
    ticket: '104032',
  },
  {
    award: '金幣1千6',
    player: '長安東織狂者柏毅',
    ticket: '115489',
  },
  {
    award: '金幣1千6',
    player: '帥兄',
    ticket: '104441',
  },
  {
    award: '金幣1千6',
    player: '達丟使',
    ticket: '125257',
  },
  {
    award: '金幣1千6',
    player: '新市街正義乃文',
    ticket: '116682',
  },
  {
    award: '金幣1千6',
    player: '讓我拉彩我就儲值',
    ticket: '144964',
  },
  {
    award: '金幣1千6',
    player: '景後街修長柏鈞',
    ticket: '119782',
  },
  {
    award: '金幣1千6',
    player: '洲美街解人意人豪',
    ticket: '89690',
  },
  {
    award: '金幣1千6',
    player: '青田街決算者雅如',
    ticket: '77230',
  },
  {
    award: '金幣1千6',
    player: '吃貨一直吃',
    ticket: '131049',
  },
  {
    award: '金幣1千6',
    player: '阿哲',
    ticket: '134299',
  },
  {
    award: '金幣1千6',
    player: '青島西好逸的乃文',
    ticket: '99634',
  },
  {
    award: '金幣1千6',
    player: '勝利街強壯佳琳',
    ticket: '184549',
  },
  {
    award: '金幣1千6',
    player: '德惠街怖兇宜靜',
    ticket: '129006',
  },
  {
    award: '金幣1千6',
    player: '潮州街圓溜溜明哲',
    ticket: '147433',
  },
  {
    award: '金幣1千6',
    player: '康樂街鏡相者珮琪',
    ticket: '97738',
  },
  {
    award: '金幣1千6',
    player: 'vivi',
    ticket: '99619',
  },
  {
    award: '金幣1千6',
    player: '浦城街扭曲者明峰',
    ticket: '25168',
  },
  {
    award: '金幣1千6',
    player: '愛一個人好難',
    ticket: '167355',
  },
  {
    award: '金幣1千6',
    player: '震宇',
    ticket: '179482',
  },
  {
    award: '金幣1千6',
    player: '恭喜發財小蟲',
    ticket: '82764',
  },
  {
    award: '金幣1千6',
    player: '加藤鷹',
    ticket: '86936',
  },
  {
    award: '金幣1千6',
    player: '打死你的東東',
    ticket: '97049',
  },
  {
    award: '金幣1千6',
    player: '興雅路油污的詩婷',
    ticket: '141345',
  },
  {
    award: '金幣1千6',
    player: '金山南誠實明峰',
    ticket: '102023',
  },
  {
    award: '金幣1千6',
    player: '社子帥氣的惠如',
    ticket: '76693',
  },
  {
    award: '金幣1千6',
    player: '123789',
    ticket: '90402',
  },
  {
    award: '金幣1千6',
    player: '水源路無魂者凱文',
    ticket: '102105',
  },
  {
    award: '金幣1千6',
    player: '五權路醜陋的思潔',
    ticket: '73951',
  },
  {
    award: '金幣1千6',
    player: '包你發開開開開',
    ticket: '117781',
  },
  {
    award: '金幣1千6',
    player: 'Allen',
    ticket: '86971',
  },
  {
    award: '金幣1千6',
    player: '武昌街乖舛者嘉慧',
    ticket: '84365',
  },
  {
    award: '金幣1千6',
    player: '小花生',
    ticket: '82814',
  },
  {
    award: '金幣1千6',
    player: '贏錢換台幣',
    ticket: '19946',
  },
  {
    award: '金幣1千6',
    player: '敬業四無名心怡',
    ticket: '79614',
  },
  {
    award: '金幣1千',
    player: '芝玉路有條理慧萍',
    ticket: '23859',
  },
  {
    award: '金幣1千',
    player: '大吉手',
    ticket: '120589',
  },
  {
    award: '金幣1千',
    player: '你以為你是誰o',
    ticket: '125243',
  },
  {
    award: '金幣1千',
    player: '這比較好玩',
    ticket: '87224',
  },
  {
    award: '金幣1千',
    player: '環山路霸主佳君',
    ticket: '92136',
  },
  {
    award: '金幣1千',
    player: '東新街凋零者佳欣',
    ticket: '119930',
  },
  {
    award: '金幣1千',
    player: '長興街血腥的志文',
    ticket: '80640',
  },
  {
    award: '金幣1千',
    player: '四維路巫術雅玲',
    ticket: '136775',
  },
  {
    award: '金幣1千',
    player: '遺失的小幸運',
    ticket: '98107',
  },
  {
    award: '金幣1千',
    player: '幸運777',
    ticket: '92877',
  },
  {
    award: '金幣1千',
    player: '長壽路無私者珮珊',
    ticket: '93289',
  },
  {
    award: '金幣1千',
    player: '瑛傑',
    ticket: '126350',
  },
  {
    award: '金幣1千',
    player: '美崙街臃腫家賢',
    ticket: '89516',
  },
  {
    award: '金幣1千',
    player: 'Yanggg',
    ticket: '119358',
  },
  {
    award: '金幣1千',
    player: '樂群一冰之王威廷',
    ticket: '145254',
  },
  {
    award: '金幣1千',
    player: '紅紅',
    ticket: '35573',
  },
  {
    award: '金幣1千',
    player: '海派',
    ticket: '24648',
  },
  {
    award: '金幣1千',
    player: '旗旗77',
    ticket: '108368',
  },
  {
    award: '金幣1千',
    player: '泰斯特',
    ticket: '148',
  },
  {
    award: '金幣1千',
    player: '成功路熱情雅如',
    ticket: '138954',
  },
  {
    award: '金幣1千',
    player: '這遊戲騙錢',
    ticket: '80581',
  },
  {
    award: '金幣1千',
    player: '忠孝東路',
    ticket: '58814',
  },
  {
    award: '金幣1千',
    player: '學園路凍禍玉芬',
    ticket: '13888',
  },
  {
    award: '金幣1千',
    player: '浪漫城市',
    ticket: '88557',
  },
  {
    award: '金幣1千',
    player: '老闆不在家',
    ticket: '88636',
  },
  {
    award: '金幣1千',
    player: '華興街冷靜珮綺',
    ticket: '81340',
  },
  {
    award: '金幣1千',
    player: '榮華三九蛇宜蓁',
    ticket: '8860',
  },
  {
    award: '金幣1千',
    player: '花了發',
    ticket: '31078',
  },
  {
    award: '金幣1千',
    player: '緯',
    ticket: '149120',
  },
  {
    award: '金幣1千',
    player: '水刀神',
    ticket: '64878',
  },
  {
    award: '金幣1千',
    player: '浪子小刀',
    ticket: '38810',
  },
  {
    award: '金幣1千',
    player: '天天被帥醒',
    ticket: '79671',
  },
  {
    award: '金幣1千',
    player: '明水路洞虛士豪',
    ticket: '83791',
  },
  {
    award: '金幣1千',
    player: '你不是對手',
    ticket: '139538',
  },
  {
    award: '金幣1千',
    player: '好運降臨',
    ticket: '145374',
  },
  {
    award: '金幣1千',
    player: '有種一直中',
    ticket: '40086',
  },
  {
    award: '金幣1千',
    player: '摳啊',
    ticket: '115527',
  },
  {
    award: '金幣1千',
    player: '萬全街無空志傑',
    ticket: '77170',
  },
  {
    award: '金幣1千',
    player: '每天都在贏',
    ticket: '94835',
  },
  {
    award: '金幣1千',
    player: '久康街精明柏霖',
    ticket: '147137',
  },
  {
    award: '金幣1千',
    player: 'Yoyoyo',
    ticket: '146233',
  },
  {
    award: '金幣1千',
    player: '二頭開全盤',
    ticket: '90693',
  },
  {
    award: '金幣1千',
    player: '寶興街肌肉婉君',
    ticket: '93028',
  },
  {
    award: '金幣1千',
    player: '後港街威武俊宏',
    ticket: '146313',
  },
  {
    award: '金幣1千',
    player: '旺旺進財',
    ticket: '84576',
  },
  {
    award: '金幣1千',
    player: '景華街帥氣的國豪',
    ticket: '145118',
  },
  {
    award: '金幣1千',
    player: '甘谷街雷斯建良',
    ticket: '14630',
  },
  {
    award: '金幣1千',
    player: '銅山街不朽者子翔',
    ticket: '26474',
  },
  {
    award: '金幣1千',
    player: '藏神秘',
    ticket: '79849',
  },
  {
    award: '金幣1千',
    player: '只愛喝幾杯',
    ticket: '18296',
  },
  {
    award: '金幣1千',
    player: '阿傑一直開',
    ticket: '180649',
  },
  {
    award: '金幣1千',
    player: '冷冷的',
    ticket: '79311',
  },
  {
    award: '金幣1千',
    player: '五分街背叛者孟璇',
    ticket: '100588',
  },
  {
    award: '金幣1千',
    player: '農安街黑髮家弘',
    ticket: '177687',
  },
  {
    award: '金幣1千',
    player: '郝嫚',
    ticket: '97782',
  },
  {
    award: '金幣1千',
    player: '萬安街尊師者志龍',
    ticket: '20284',
  },
  {
    award: '金幣1千',
    player: '蘇凱17',
    ticket: '187462',
  },
  {
    award: '金幣1千',
    player: '港墘路魔妖怡萍',
    ticket: '89032',
  },
  {
    award: '金幣1千',
    player: '陽明路報恩的智凱',
    ticket: '103701',
  },
  {
    award: '金幣1千',
    player: '阿公拿手菜',
    ticket: '127298',
  },
  {
    award: '金幣1千',
    player: '999',
    ticket: '145594',
  },
  {
    award: '金幣1千',
    player: '師大路銳利的雅茹',
    ticket: '103556',
  },
  {
    award: '金幣1千',
    player: '信陽街殘暴的俊宇',
    ticket: '177075',
  },
  {
    award: '金幣1千',
    player: '8957',
    ticket: '139415',
  },
  {
    award: '金幣1千',
    player: '忠順街黑眼偉倫',
    ticket: '40557',
  },
  {
    award: '金幣1千',
    player: 'ATT莊',
    ticket: '19790',
  },
  {
    award: '金幣1千',
    player: '華聲街飲焰者佩樺',
    ticket: '135331',
  },
  {
    award: '金幣1千',
    player: '龍江路爆吐建成',
    ticket: '102124',
  },
  {
    award: '金幣1千',
    player: '莊頂路高聳志傑',
    ticket: '146847',
  },
  {
    award: '金幣1千',
    player: '深坑小霸王',
    ticket: '118364',
  },
  {
    award: '金幣1千',
    player: '陽投公三角眼慧珊',
    ticket: '89283',
  },
  {
    award: '金幣1千',
    player: 'BabyHan',
    ticket: '142492',
  },
  {
    award: '金幣1千',
    player: '嘉興街撕裂者俊銘',
    ticket: '133970',
  },
  {
    award: '金幣1千',
    player: '德昌街巫術淑雯',
    ticket: '63187',
  },
  {
    award: '金幣1千',
    player: '豪煙火',
    ticket: '128849',
  },
  {
    award: '金幣1千',
    player: '小老闆',
    ticket: '145226',
  },
  {
    award: '金幣1千',
    player: '型男崔',
    ticket: '146840',
  },
  {
    award: '金幣1千',
    player: '寧波西敏捷馨慧',
    ticket: '126280',
  },
  {
    award: '金幣1千',
    player: '東興路瘦臉佩璇',
    ticket: '101831',
  },
  {
    award: '金幣1千',
    player: '士商路鷹眼靜儀',
    ticket: '3117',
  },
  {
    award: '金幣6百',
    player: '華陰街大義欣宜',
    ticket: '169548',
  },
  {
    award: '金幣6百',
    player: '富爺',
    ticket: '168789',
  },
  {
    award: '金幣6百',
    player: '敦南街稚氣慧如',
    ticket: '93512',
  },
  {
    award: '金幣6百',
    player: '長壽路健碩彥宏',
    ticket: '94543',
  },
  {
    award: '金幣6百',
    player: '經貿路玫瑰乃文',
    ticket: '14898',
  },
  {
    award: '金幣6百',
    player: '松廉路巨兇者靜如',
    ticket: '143288',
  },
  {
    award: '金幣6百',
    player: '西藏路豐腴淑惠',
    ticket: '118755',
  },
  {
    award: '金幣6百',
    player: '不要霆',
    ticket: '98522',
  },
  {
    award: '金幣6百',
    player: '胡搞瞎搞',
    ticket: '145600',
  },
  {
    award: '金幣6百',
    player: '綠茶',
    ticket: '179810',
  },
  {
    award: '金幣6百',
    player: '大龍街卑鄙雅馨',
    ticket: '89604',
  },
  {
    award: '金幣6百',
    player: '輸到賣褲子',
    ticket: '71005',
  },
  {
    award: '金幣6百',
    player: '民族路神氣者育如',
    ticket: '110035',
  },
  {
    award: '金幣6百',
    player: '人在江湖飄',
    ticket: '128201',
  },
  {
    award: '金幣6百',
    player: '緣投儒',
    ticket: '188038',
  },
  {
    award: '金幣6百',
    player: '小五',
    ticket: '174000',
  },
  {
    award: '金幣6百',
    player: '天津街帥氣的姿伶',
    ticket: '119078',
  },
  {
    award: '金幣6百',
    player: '狼逃',
    ticket: '15621',
  },
  {
    award: '金幣6百',
    player: '致遠二和藹的嘉玲',
    ticket: '183435',
  },
  {
    award: '金幣6百',
    player: '大富豪',
    ticket: '133761',
  },
  {
    award: '金幣6百',
    player: '愛富三固執文馨',
    ticket: '479',
  },
  {
    award: '金幣6百',
    player: '長春路狂襲者威宇',
    ticket: '127372',
  },
  {
    award: '金幣6百',
    player: '庫倫街大方玉珊',
    ticket: '80208',
  },
  {
    award: '金幣6百',
    player: '皮爾卡箱',
    ticket: '88833',
  },
  {
    award: '金幣6百',
    player: '林大a',
    ticket: '96271',
  },
  {
    award: '金幣6百',
    player: '金龍路腐膽建勳',
    ticket: '88478',
  },
  {
    award: '金幣6百',
    player: '謎心殤',
    ticket: '77897',
  },
  {
    award: '金幣6百',
    player: '陳景崽',
    ticket: '120376',
  },
  {
    award: '金幣6百',
    player: '康寧路招戰者聖傑',
    ticket: '31890',
  },
  {
    award: '金幣6百',
    player: '喵兒',
    ticket: '145416',
  },
  {
    award: '金幣6百',
    player: '南港路否定者明哲',
    ticket: '40224',
  },
  {
    award: '金幣6百',
    player: '四平街扭石麗君',
    ticket: '95657',
  },
  {
    award: '金幣6百',
    player: '嘴張開',
    ticket: '109314',
  },
  {
    award: '金幣6百',
    player: 'Ming',
    ticket: '112033',
  },
  {
    award: '金幣6百',
    player: '保持微醺',
    ticket: '40242',
  },
  {
    award: '金幣6百',
    player: '左岸',
    ticket: '9553',
  },
  {
    award: '金幣6百',
    player: '斯巴達國王',
    ticket: '133234',
  },
  {
    award: '金幣6百',
    player: '大頭家狂開獎',
    ticket: '95819',
  },
  {
    award: '金幣6百',
    player: '太子葆',
    ticket: '86008',
  },
  {
    award: '金幣6百',
    player: '張聖美',
    ticket: '50503',
  },
  {
    award: '金幣6百',
    player: '勇哥很照顧我',
    ticket: '158961',
  },
  {
    award: '金幣6百',
    player: '大龍街清白琬婷',
    ticket: '119459',
  },
  {
    award: '金幣6百',
    player: '补龍共',
    ticket: '130087',
  },
  {
    award: '金幣6百',
    player: '莊頂路活潑俊豪',
    ticket: '134531',
  },
  {
    award: '金幣6百',
    player: '喵阿公',
    ticket: '194',
  },
  {
    award: '金幣6百',
    player: '復興南魅影宇翔',
    ticket: '14612',
  },
  {
    award: '金幣6百',
    player: '萬全街重義者婷婷',
    ticket: '116977',
  },
  {
    award: '金幣6百',
    player: 'MM',
    ticket: '92787',
  },
  {
    award: '金幣6百',
    player: '松江路圓臉育如',
    ticket: '150732',
  },
  {
    award: '金幣6百',
    player: '雯小妞',
    ticket: '39226',
  },
  {
    award: '金幣6百',
    player: '巧菲斯',
    ticket: '71084',
  },
  {
    award: '金幣6百',
    player: '社中街勇敢宜芳',
    ticket: '101039',
  },
  {
    award: '金幣6百',
    player: '3組辦案',
    ticket: '144285',
  },
  {
    award: '金幣6百',
    player: '熊臻',
    ticket: '97920',
  },
  {
    award: '金幣6百',
    player: '莫忘初衷 ...',
    ticket: '168521',
  },
  {
    award: '金幣6百',
    player: 'joyce',
    ticket: '98719',
  },
  {
    award: '金幣6百',
    player: '吳軒NO1',
    ticket: '107239',
  },
  {
    award: '金幣6百',
    player: '蓮旭宗初',
    ticket: '157050',
  },
  {
    award: '金幣6百',
    player: '萬芳路守規矩姿穎',
    ticket: '48511',
  },
  {
    award: '金幣6百',
    player: '榮華一矮小靜儀',
    ticket: '154777',
  },
  {
    award: '金幣6百',
    player: '敦化南焦烙者孟君',
    ticket: '108744',
  },
  {
    award: '金幣6百',
    player: '金山南乞苦者靜怡',
    ticket: '134176',
  },
  {
    award: '金幣6百',
    player: '溫泉路挺胸俊達',
    ticket: '182405',
  },
  {
    award: '金幣6百',
    player: '莎莎莎',
    ticket: '119093',
  },
  {
    award: '金幣6百',
    player: '韓少',
    ticket: '45313',
  },
  {
    award: '金幣6百',
    player: '社正路瘦嶙嶙俊瑋',
    ticket: '116614',
  },
  {
    award: '金幣6百',
    player: '煙鬼',
    ticket: '110880',
  },
  {
    award: '金幣6百',
    player: '都是因為你',
    ticket: '140637',
  },
  {
    award: '金幣6百',
    player: '興義街竊密者宇軒',
    ticket: '165589',
  },
  {
    award: '金幣6百',
    player: '下港a小天使萱萱',
    ticket: '64776',
  },
  {
    award: '金幣6百',
    player: '神隱',
    ticket: '167776',
  },
  {
    award: '金幣6百',
    player: '翠華街魁梧雅慧',
    ticket: '81146',
  },
  {
    award: '金幣6百',
    player: '莿桐發大財',
    ticket: '107219',
  },
  {
    award: '金幣6百',
    player: '都不開',
    ticket: '122889',
  },
  {
    award: '金幣6百',
    player: '草莓家族',
    ticket: '167138',
  },
  {
    award: '金幣6百',
    player: '士商路淡泊文傑',
    ticket: '50036',
  },
  {
    award: '金幣6百',
    player: '頭家嬤',
    ticket: '124024',
  },
  {
    award: '金幣6百',
    player: '小鹿斑比',
    ticket: '98849',
  },
  {
    award: '金幣6百',
    player: '氣再來',
    ticket: '108404',
  },
  {
    award: '金幣6百',
    player: '瀟灑的放生',
    ticket: '168623',
  },
  {
    award: '金幣6百',
    player: '天津街平視者佳蓉',
    ticket: '132821',
  },
  {
    award: '金幣6百',
    player: '大雅杰尼龜',
    ticket: '27813',
  },
  {
    award: '金幣6百',
    player: '成功路不苟慧君',
    ticket: '38109',
  },
  {
    award: '金幣6百',
    player: '天地良心',
    ticket: '132873',
  },
  {
    award: '金幣6百',
    player: '萌小新',
    ticket: '87891',
  },
  {
    award: '金幣6百',
    player: '丹陽街洋溢姿儀',
    ticket: '101050',
  },
  {
    award: '金幣6百',
    player: '王小羊',
    ticket: '163147',
  },
  {
    award: '金幣6百',
    player: '愛國東瘦嶙嶙雅欣',
    ticket: '135992',
  },
  {
    award: '金幣6百',
    player: '敬業四焦烙者郁文',
    ticket: '103141',
  },
  {
    award: '金幣6百',
    player: '詹昭來來',
    ticket: '185210',
  },
  {
    award: '金幣6百',
    player: '小宗',
    ticket: '107424',
  },
  {
    award: '金幣6百',
    player: '博愛路奸詐師智偉',
    ticket: '183778',
  },
  {
    award: '金幣6百',
    player: '家誠一直開',
    ticket: '181076',
  },
  {
    award: '金幣6百',
    player: '雞巴毛炒韭菜',
    ticket: '139973',
  },
  {
    award: '金幣6百',
    player: '你家報紙',
    ticket: '146123',
  },
  {
    award: '金幣6百',
    player: '穩贏千萬',
    ticket: '118237',
  },
  {
    award: '金幣6百',
    player: '咬咬虎',
    ticket: '114521',
  },
  {
    award: '金幣6百',
    player: '我開馬三啦',
    ticket: '85820',
  },
  {
    award: '金幣6百',
    player: '阿咖V',
    ticket: '137084',
  },
  {
    award: '金幣6百',
    player: '可可',
    ticket: '95163',
  },
  {
    award: '金幣6百',
    player: '來福',
    ticket: '131044',
  },
  {
    award: '金幣6百',
    player: '莊豆花',
    ticket: '153998',
  },
  {
    award: '金幣6百',
    player: '小張牛肉麵',
    ticket: '96114',
  },
  {
    award: '金幣6百',
    player: '林小禾',
    ticket: '163030',
  },
  {
    award: '金幣6百',
    player: '發發ㄈ',
    ticket: '185100',
  },
  {
    award: '金幣6百',
    player: '我要發大財',
    ticket: '111418',
  },
  {
    award: '金幣6百',
    player: '行善路病膚瓊慧',
    ticket: '103126',
  },
  {
    award: '金幣6百',
    player: '咖啡一直補',
    ticket: '184743',
  },
  {
    award: '金幣6百',
    player: '中崙路刻薄子軒',
    ticket: '147274',
  },
  {
    award: '金幣6百',
    player: '無雙',
    ticket: '132681',
  },
  {
    award: '金幣6百',
    player: '愛國東切剁者姿君',
    ticket: '10706',
  },
  {
    award: '金幣6百',
    player: '敬業二四方臉嘉宏',
    ticket: '26973',
  },
  {
    award: '金幣6百',
    player: '淫水濕源',
    ticket: '138732',
  },
  {
    award: '金幣6百',
    player: '陳小宇',
    ticket: '99330',
  },
  {
    award: '金幣6百',
    player: '《夢幻彩虹金庫》',
    ticket: '87828',
  },
  {
    award: '金幣6百',
    player: '麥格蒙瓦骨桃',
    ticket: '176639',
  },
  {
    award: '金幣6百',
    player: '許昌街陰險佳真',
    ticket: '177617',
  },
  {
    award: '金幣6百',
    player: '大獎由我開',
    ticket: '77829',
  },
  {
    award: '金幣6百',
    player: '大頭家找港都尚讚',
    ticket: '129384',
  },
  {
    award: '金幣6百',
    player: '喜八樂',
    ticket: '113302',
  },
]
const tickets4: TicketResult[] = [
  {
    award: 'iPhone 13卡',
    player: '添好運',
    ticket: '177661',
  },
  {
    award: 'iPhone 13卡',
    player: '說好讓我贏',
    ticket: '138959',
  },
  {
    award: 'iPhone 13卡',
    player: '西昌街恐怖的政宏',
    ticket: '169911',
  },
  {
    award: 'iPhone 13卡',
    player: '一統江湖',
    ticket: '109773',
  },
  {
    award: 'iPhone 13卡',
    player: '新湖一餓肚國華',
    ticket: '77609',
  },
  {
    award: 'iPhone 13卡',
    player: '福德路惡夢郁涵',
    ticket: '78485',
  },
  {
    award: 'iPhone 13卡',
    player: '贏錢的罪惡感',
    ticket: '165807',
  },
  {
    award: 'iPhone 13卡',
    player: '忠勇街矯健佩樺',
    ticket: '170148',
  },
  {
    award: 'iPhone 13卡',
    player: '招財貓',
    ticket: '185839',
  },
  {
    award: 'iPhone 13卡',
    player: '捕魚捕到美人魚',
    ticket: '114905',
  },
]

const ticketTypeMap: Record<number, string> = {
  1: '金券獎項',
  2: '銀券獎項',
  3: '銅券獎項',
  4: '加碼抽',
}
const ticketListMap: Record<number, TicketResult[]> = {
  1: tickets1,
  2: tickets2,
  3: tickets3,
  4: tickets4,
}

function NewyearResult() {
  return (
    <div className="text-white sm:p-6">
      <div className="mb-5">
        親愛的頭家：
        <br />
        <br />
        領獎注意
        <br />
        1.虛擬金幣獎項將於今日18:00前發送
        <br />
        2.中獎玩家請於2022/5/10(二) 23:59前與客服確認其中獎資格
        <br />
        3.中獎玩家請於2022/5/19(四)
        23:59前提供領獎確認單由客服協助核資完成，如未於該指定期間完成則視為放棄。
        <br />
        4.獎項將於玩家完成領獎後依採購到貨日陸續發送，如遇例假日或不可抗力之因素將會延後至最近工作日寄送。
        <br />※ 領獎單下載位置：大頭家官方網站→客服中心→表單下載→領獎單
        <br />
        <br />
        大頭家娛樂城營運團隊 敬上
      </div>
      <div className="space-y-5">
        {Object.entries(ticketTypeMap).map(([key, ticketName]) => (
          <div key={key}>
            <h1 className="text-yellow-400 text-xl mb-3">《{ticketName}》</h1>
            <table className="w-full sm:w-2/3">
              <thead className="bg-yellow-300 text-yellow-900">
                <tr>
                  <th>獎項</th>
                  <th>得獎玩家</th>
                  <th>中獎號碼</th>
                </tr>
              </thead>
              <tbody className="bg-black/50 text-gray-100 text-sm sm:text-base">
                {ticketListMap[+key].map((t) => (
                  <tr key={t.ticket} className="border-b border-gray-700">
                    <td className="px-1">{t.award}</td>
                    <td className="px-1">{t.player}</td>
                    <td className="px-1">{t.ticket.padStart(7, '0')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewyearResult
