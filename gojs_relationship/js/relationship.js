window.onload = function () {
  var id = 1
  var nodes = [
    {
      key: 1,
      tag: '本人',
      n: '1',
      s: 'MY',
      sex: 'M',
      f: 8,
      m: 9,
      code: '370999928282839593',
      dead: '否',
      love: 2,
      expanded: true
    },
    {
      tag: '妻子',
      key: 2,
      n: '2',
      s: 'F',
      sex: 'F',
      // f: 20,
      // m: 21,
      code: '370999928282839593',
      dead: '否',
      love: 1,
      expanded: false
    },
    {
      tag: '儿子',
      key: 3,
      n: '3',
      s: 'M',
      sex: 'M',
      f: 1,
      m: 2,
      code: '370999928282839593',
      dead: '否',
      expanded: false
    },
    {
      tag: '女儿',
      key: 4,
      n: '4',
      s: 'F',
      sex: 'F',
      f: 1,
      m: 2,
      code: '370999928282839593',
      dead: '否',
      expanded: false
    },
    {
      tag: '父亲',
      key: 8,
      n: '8',
      s: 'M',
      sex: 'M',
      // f: 13,
      // m: 14,
      code: '370999928282839593',
      dead: '否',
      love: 9,
      expanded: false
    },
    {
      tag: '母亲',
      key: 9,
      n: '9',
      s: 'F',
      sex: 'F',
      // f: 24,
      // m: 25,
      code: '370999928282839593',
      dead: '否',
      love: 8,
      expanded: false
    }
  ]
  var set = {
    8: [
      {
        tag: '父亲',
        key: 8,
        n: '8',
        s: 'M',
        sex: 'M',
        f: 13,
        m: 14,
        code: '370999928282839593',
        dead: '否',
        love: 9,
        expanded: false
      },
      {
        key: 1,
        tag: '本人',
        n: '1',
        s: 'M',
        sex: 'M',
        f: 8,
        m: 9,
        code: '370999928282839593',
        dead: '否',
        love: 2,
        expanded: false
      },
      {
        tag: '母亲',
        key: 9,
        n: '9',
        s: 'F',
        sex: 'F',
        // f: 26,
        // m: 27,
        code: '370999928282839593',
        dead: '否',
        love: 8,
        expanded: false
      },
      {
        tag: '弟弟',
        key: 10,
        n: '10',
        s: 'M',
        sex: 'M',
        f: 8,
        m: 9,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '妹妹',
        key: 11,
        n: '11',
        s: 'F',
        sex: 'F',
        f: 8,
        m: 9,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '爷爷',
        key: 13,
        n: '13',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 14,
        expanded: false
      },
      {
        tag: '奶奶',
        key: 14,
        n: '14',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 13,
        expanded: false
      },
    ],
    9: [
      {
        tag: '母亲',
        key: 9,
        n: '9',
        s: 'F',
        sex: 'F',
        f: 26,
        m: 27,
        code: '370999928282839593',
        dead: '否',
        love: 8,
        expanded: false
      },
      {
        key: 1,
        tag: '本人',
        n: '1',
        s: 'M',
        sex: 'M',
        f: 8,
        m: 9,
        code: '370999928282839593',
        dead: '否',
        love: 2,
        expanded: false
      },
      {
        tag: '父亲',
        key: 8,
        n: '8',
        s: 'M',
        sex: 'M',
        // f: 13,
        // m: 14,
        code: '370999928282839593',
        dead: '否',
        love: 9,
        expanded: false
      },
      {
        tag: '外公',
        key: 26,
        n: '26',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 27,
        expanded: false
      },
      {
        tag: '外婆',
        key: 27,
        n: '27',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 26,
        expanded: false
      },
    ],
    3: [
      {
        tag: '儿子',
        key: 3,
        n: '3',
        s: 'M',
        sex: 'M',
        f: 1,
        m: 2,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        key: 1,
        tag: '本人',
        n: '1',
        s: 'M',
        sex: 'M',
        // f: 8,
        // m: 9,
        code: '370999928282839593',
        dead: '否',
        love: 2,
        expanded: false
      },
      {
        tag: '妻子',
        key: 2,
        n: '2',
        s: 'F',
        sex: 'F',
        // f: 20,
        // m: 21,
        code: '370999928282839593',
        dead: '否',
        love: 1,
        expanded: false
      },
      {
        tag: '孙子',
        key: 6,
        n: '6',
        s: 'M',
        sex: 'M',
        f: 3,
        m: 5,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '孙女',
        key: 7,
        n: '7',
        s: 'F',
        sex: 'F',
        f: 3,
        m: 5,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '儿媳',
        key: 5,
        n: '5',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 3,
        expanded: false
      },
    ],
    2: [
      {
        tag: '妻子',
        key: 2,
        n: '2',
        s: 'F',
        sex: 'F',
        f: 20,
        m: 21,
        code: '370999928282839593',
        dead: '否',
        love: 1,
        expanded: false
      },
      {
        key: 1,
        tag: '本人',
        n: '1',
        s: 'M',
        sex: 'M',
        // f: 8,
        // m: 9,
        code: '370999928282839593',
        dead: '否',
        love: 2,
        expanded: false
      },
      {
        tag: '儿子',
        key: 3,
        n: '3',
        s: 'M',
        sex: 'M',
        f: 1,
        m: 2,
        code: '370999928282839593',
        dead: '否',
        love: 5
      },
      {
        tag: '女儿',
        key: 4,
        n: '4',
        s: 'F',
        sex: 'F',
        f: 1,
        m: 2,
        code: '370999928282839593',
        dead: '否'
      },
      {
        tag: '岳父',
        key: 20,
        n: '20',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 21,
        expanded: false
      },
      {
        tag: '岳母',
        key: 21,
        n: '21',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 20,
        expanded: false
      },
    ],
    10: [
      {
        tag: '弟弟',
        key: 10,
        n: '10',
        s: 'M',
        sex: 'M',
        f: 8,
        m: 9,
        code: '370999928282839593',
        dead: '否',
        love: 10
      },
      {
        tag: '父亲',
        key: 8,
        n: '8',
        s: 'M',
        sex: 'M',
        // f: 13,
        // m: 14,
        code: '370999928282839593',
        dead: '否',
        love: 9,
        expanded: false
      },
      {
        tag: '母亲',
        key: 9,
        n: '9',
        s: 'F',
        sex: 'F',
        // f: 26,
        // m: 27,
        code: '370999928282839593',
        dead: '否',
        love: 8,
        expanded: false
      },
      {
        tag: '弟媳',
        key: 12,
        n: '12',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 10,
        expanded: false
      },
    ],
    13: [
      {
        tag: '爷爷',
        key: 13,
        n: '13',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 14
      },
      {
        tag: '父亲',
        key: 8,
        n: '8',
        s: 'M',
        sex: 'M',
        f: 13,
        m: 14,
        code: '370999928282839593',
        dead: '否',
        love: 9,
        expanded: false
      },
      {
        tag: '奶奶',
        key: 14,
        n: '14',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 13,
        expanded: false
      },
      {
        tag: '伯伯',
        key: 15,
        n: '15',
        s: 'M',
        sex: 'M',
        f: 13,
        m: 14,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '叔叔',
        key: 16,
        n: '16',
        s: 'M',
        sex: 'M',
        f: 13,
        m: 14,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '姑姑',
        key: 17,
        n: '17',
        s: 'F',
        sex: 'F',
        f: 13,
        m: 14,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
    ],
    14: [
      {
        tag: '奶奶',
        key: 14,
        n: '14',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 13
      },
      {
        tag: '父亲',
        key: 8,
        n: '8',
        s: 'M',
        sex: 'M',
        f: 13,
        m: 14,
        code: '370999928282839593',
        dead: '否',
        love: 9,
        expanded: false
      },
      {
        tag: '爷爷',
        key: 13,
        n: '13',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 14,
        expanded: false
      },
      {
        tag: '伯伯',
        key: 15,
        n: '15',
        s: 'M',
        sex: 'M',
        f: 13,
        m: 14,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '叔叔',
        key: 16,
        n: '16',
        s: 'M',
        sex: 'M',
        f: 13,
        m: 14,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '姑姑',
        key: 17,
        n: '17',
        s: 'F',
        sex: 'F',
        f: 13,
        m: 14,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
    ],
    15: [
      {
        tag: '伯伯',
        key: 15,
        n: '15',
        s: 'M',
        sex: 'M',
        f: 13,
        m: 14,
        code: '370999928282839593',
        dead: '否',
        love: 18
      },
      {
        tag: '爷爷',
        key: 13,
        n: '13',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 14,
        expanded: false
      },
      {
        tag: '奶奶',
        key: 14,
        n: '14',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 13,
        expanded: false
      },
      {
        tag: '婶婶',
        key: 18,
        n: '18',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 15,
        expanded: false
      },
    ],
    17: [
      {
        tag: '姑姑',
        key: 17,
        n: '17',
        s: 'F',
        sex: 'F',
        f: 13,
        m: 14,
        code: '370999928282839593',
        dead: '否',
        love: 19
      },
      {
        tag: '爷爷',
        key: 13,
        n: '13',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 14,
        expanded: false
      },
      {
        tag: '奶奶',
        key: 14,
        n: '14',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 13,
        expanded: false
      },
      {
        tag: '姑父',
        key: 19,
        n: '19',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 17,
        expanded: false
      },
    ],
    26: [
      {
        tag: '外公',
        key: 26,
        n: '26',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 27
      },
      {
        tag: '外婆',
        key: 27,
        n: '27',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 26,
        expanded: false
      },
      {
        tag: '母亲',
        key: 9,
        n: '9',
        s: 'F',
        sex: 'F',
        f: 26,
        m: 27,
        code: '370999928282839593',
        dead: '否',
        love: 8,
        expanded: false
      },
      {
        tag: '姨母',
        key: 28,
        n: '28',
        s: 'F',
        sex: 'F',
        f: 26,
        m: 27,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '舅舅',
        key: 30,
        n: '30',
        s: 'M',
        sex: 'M',
        f: 26,
        m: 27,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
    ],
    27: [
      {
        tag: '外婆',
        key: 27,
        n: '27',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 26
      },
      {
        tag: '外公',
        key: 26,
        n: '26',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 27,
        expanded: false
      },
      {
        tag: '母亲',
        key: 9,
        n: '9',
        s: 'F',
        sex: 'F',
        f: 26,
        m: 27,
        code: '370999928282839593',
        dead: '否',
        love: 8,
        expanded: false
      },
      {
        tag: '姨母',
        key: 28,
        n: '28',
        s: 'F',
        sex: 'F',
        f: 26,
        m: 27,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '舅舅',
        key: 30,
        n: '30',
        s: 'M',
        sex: 'M',
        f: 26,
        m: 27,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
    ],
    28: [
      {
        tag: '姨母',
        key: 28,
        n: '28',
        s: 'F',
        sex: 'F',
        f: 26,
        m: 27,
        code: '370999928282839593',
        dead: '否',
        love: 29
      },
      {
        tag: '外公',
        key: 26,
        n: '26',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 27,
        expanded: false
      },
      {
        tag: '外婆',
        key: 27,
        n: '27',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 26,
        expanded: false
      },
      {
        tag: '姨夫',
        key: 29,
        n: '29',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 28,
        expanded: false
      },
    ],
    30: [
      {
        tag: '舅舅',
        key: 30,
        n: '30',
        s: 'M',
        sex: 'M',
        f: 26,
        m: 27,
        code: '370999928282839593',
        dead: '否',
        love: 31
      },
      {
        tag: '外公',
        key: 26,
        n: '26',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 27,
        expanded: false
      },
      {
        tag: '外婆',
        key: 27,
        n: '27',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 26,
        expanded: false
      },
      {
        tag: '舅母',
        key: 31,
        n: '31',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 30,
        expanded: false
      },
    ],
    20: [
      {
        tag: '岳父',
        key: 20,
        n: '20',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 21
      },
      {
        tag: '岳母',
        key: 21,
        n: '21',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 20,
        expanded: false
      },
      {
        tag: '妻子',
        key: 2,
        n: '2',
        s: 'F',
        sex: 'F',
        f: 20,
        m: 21,
        code: '370999928282839593',
        dead: '否',
        love: 1,
        expanded: false
      },
      {
        tag: '小舅子',
        key: 22,
        n: '22',
        s: 'F',
        sex: 'F',
        f: 20,
        m: 21,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '大舅哥',
        key: 23,
        n: '23',
        s: 'F',
        sex: 'F',
        f: 20,
        m: 21,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '小姨子',
        key: 24,
        n: '24',
        s: 'F',
        sex: 'F',
        f: 20,
        m: 21,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '大姨子',
        key: 25,
        n: '25',
        s: 'F',
        sex: 'F',
        f: 20,
        m: 21,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
    ],
    21: [
      {
        tag: '岳母',
        key: 21,
        n: '21',
        s: 'F',
        sex: 'F',
        code: '370999928282839593',
        dead: '否',
        love: 20
      },
      {
        tag: '岳父',
        key: 20,
        n: '20',
        s: 'M',
        sex: 'M',
        code: '370999928282839593',
        dead: '否',
        love: 21,
        expanded: false
      },
      {
        tag: '妻子',
        key: 2,
        n: '2',
        s: 'F',
        sex: 'F',
        f: 20,
        m: 21,
        code: '370999928282839593',
        dead: '否',
        love: 1,
        expanded: false
      },
      {
        tag: '小舅子',
        key: 22,
        n: '22',
        s: 'F',
        sex: 'F',
        f: 20,
        m: 21,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '大舅哥',
        key: 23,
        n: '23',
        s: 'F',
        sex: 'F',
        f: 20,
        m: 21,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '小姨子',
        key: 24,
        n: '24',
        s: 'F',
        sex: 'F',
        f: 20,
        m: 21,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
      {
        tag: '大姨子',
        key: 25,
        n: '25',
        s: 'F',
        sex: 'F',
        f: 20,
        m: 21,
        code: '370999928282839593',
        dead: '否',
        expanded: false
      },
    ]
  }
  var myDiagram = this.init(nodes, id, set)

  // 点击放大
  $('#scale-add').on('click', function () {
    myDiagram.scale += 0.1
  })

  // 点击缩小
  $('#scale-del').on('click', function () {
    myDiagram.scale -= 0.1
  })
	
  // 绑定全屏和缩小
  $('#scale-screen').on('click', function () {
    var screenOp = $(this).hasClass('scale-screen')
    if (screenOp) {
      requestFullScreen($('.wrapper')[0])
      $(this).removeClass('scale-screen')
      $(this).addClass('scale-normal')
    } else {
      exitFull()
      $(this).removeClass('scale-normal')
      $(this).addClass('scale-screen')
    }
    setTimeout(function () {
      myDiagram.commandHandler.zoomToFit()
    }, 500)
  })

}