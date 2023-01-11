let arr = [
  {
    name: '幽兰·兰幽幽',
    desc: '幽兰·兰幽幽官网',
    type: 1,
    date: '2022.01',
    logo: './assets/images/lzyy_logo.jpg',
    tags: ['Swiper', 'AOS'],
    imgs: [
      './assets/images/lzyy_pc_01.webp',
    ]
  },
  {
    name: '兰之幽幽 2.0',
    desc: '幽兰·兰幽幽连锁门店服务预约',
    type: 5,
    date: '2020.03 - 04',
    logo: './assets/images/lzyy_logo.jpg',
    tags: ['微信小程序'],
    imgs: [
      './assets/images/lzyy2_01.jpg',
      './assets/images/lzyy2_02.jpg',
      './assets/images/lzyy2_03.jpg',
      './assets/images/lzyy2_04.jpg',
      './assets/images/lzyy2_05.jpg',
    ]
  },
  {
    name: '兰之幽幽 1.0',
    desc: '幽兰·兰幽幽美容美体门店销售小程序，主要提供服务预约、商品售卖等功能',
    type: 5,
    date: '2019.02 - 04',
    logo: './assets/images/lzyy_logo.jpg',
    tags: ['微信小程序'],
    imgs: [
      './assets/images/lzyy_xcx_01.webp',
      './assets/images/lzyy_xcx_02.webp',
      './assets/images/lzyy_xcx_03.webp',
      './assets/images/lzyy_xcx_04.webp',
    ]
  },
  {
    name: '脱壳发型',
    desc: '项目为脱壳发型微信小程序端，功能主要包含各类发型风格百科展示、发型推荐、发型视频教程等功能',
    type: 5,
    date: '2018.10 - 2019.02',
    logo: './assets/images/tkfx_logo.jpg',
    tags: ['微信小程序'],
    imgs: [
      './assets/images/tkfx_xcx_01.jpg',
      './assets/images/tkfx_xcx_02.jpg',
      './assets/images/tkfx_xcx_03.jpg',
      './assets/images/tkfx_xcx_04.jpg',
      './assets/images/tkfx_xcx_05.jpg',
    ]
  },
  {
    name: '民航招飞（管理端）',
    desc: '为更好地方便招飞主管使用民航招飞系统完成招飞业务流程，提供招飞主管手机APP，同web平台共用数据中心保持数据同步。主管使用该APP完成民航招飞初检、体检、背景调查、合格名单等业务处理功能。',
    type: 3,
    date: '2018.11 - 12',
    logo: './assets/images/mhzfgl_logo.webp',
    tags: ['MUI', 'H5Plus', 'HBuilder'],
    imgs: [
      './assets/images/mhzfgl_app_01.webp',
      './assets/images/mhzfgl_app_02.webp',
      './assets/images/mhzfgl_app_03.webp',
      './assets/images/mhzfgl_app_04.webp',
    ]
  },
  {
    name: '途络销售端',
    desc: '项目为途络平台订货系统销售端APP，主要功能为客户管理、代下单、数据统计分析可视化展示、采购、订单管理。',
    type: 3,
    date: '2018.08 - 09',
    logo: './assets/images/tl_logo.png',
    tags: ['MUI', 'H5Plus', 'HBuilder', 'AntV'],
  },
  {
    name: '仓储管理PDA',
    desc: '项目为遂宁威斯腾物流园针对仓储管理系统扫码PDA端开发，主要功能为收货、上架、拣货、复核、交接、盘点，适配的设备为销邦X8和霍尼韦尔手持扫描器。',
    type: 3,
    date: '2018.08 - 09',
    logo: './assets/images/tl_logo.png',
    tags: ['MUI', 'H5Plus', 'HBuilder'],
  },
  {
    name: '民航招飞（考生端）',
    desc: '民航招飞考生平台APP提供了同民航招飞信息系统同样的功能，考生使用本APP可以完成考生帐号注册、个人信息完善、既有病史核实、招飞志愿填报、报考结果查询等功能。',
    type: 3,
    date: '2018.07 - 08',
    logo: './assets/images/mhzf_logo.webp',
    tags: ['MUI', 'H5Plus', 'HBuilder'],
    imgs: [
      './assets/images/mhzf_01.webp',
      './assets/images/mhzf_02.webp',
      './assets/images/mhzf_03.webp',
    ]
  },
  {
    name: '集托网',
    desc: '项目为集托网针对铁路物流托盘承租商、供应商开发的平台APP，功能包含：托盘租赁、托盘管理、托盘账单、保证金系统等',
    type: 3,
    date: '2018.06 - 07',
    logo: './assets/images/jtw_logo.png',
    tags: ['MUI', 'H5Plus', 'HBuilder']
  },
  {
    name: '途络小程序',
    desc: '项目为途络针对遂宁铁路物流园司机、供应商、收货人三个主体开发的微信小程序服务，终端含：途络司机端、途络供应端、途络收货端',
    type: 5,
    date: '2018.05 - 06',
    logo: './assets/images/tl_logo.png',
    tags: ['微信小程序'],
    imgs: [
      './assets/images/tl_xcx_01.jpg',
      './assets/images/tl_xcx_02.jpg',
      './assets/images/tl_xcx_03.jpg',
    ]
  },
  {
    name: '平行车交易',
    desc: '项目为公司有意针对国外进口平行车开发的汽车交易平台，功能包含：进口平行车发布、搜索、订单管理、仓储管理、汽车供应商查询等',
    type: 3,
    date: '2018.03 - 05',
    logo: './assets/images/tl_logo.png',
    tags: ['MUI', 'H5Plus', 'HBuilder'],
  },
  {
    name: '途络管理系统桌面应用',
    desc: '项目为途络管理系统构建为桌面应用（避免浏览器兼容问题），并通过NSIS再打包实现一键安装包功能',
    type: 4,
    date: '2018.01',
    logo: './assets/images/tl_logo.png',
    tags: ['Electron', 'NSIS'],
  },
  {
    name: '途络',
    desc: '项目为遂宁维斯滕物流园对外提供物流服务APP，功能包含：采购商品、物流配送、发货、商品及物流订单管理',
    type: 3,
    date: '2017.09 - 12',
    logo: './assets/images/tl_logo.png',
    tags: ['MUI', 'H5Plus', 'HBuilder'],
    imgs: [
      './assets/images/tl_app_01.png',
      './assets/images/tl_app_02.png',
      './assets/images/tl_app_03.png',
      './assets/images/tl_app_04.png',
      './assets/images/tl_app_05.png',
    ]
  },
  {
    name: '会诊系统',
    desc: '项目为会诊系统适配pad界面开发，模块包含：医院列表界面、医生聊天界面、远程预约会诊',
    type: 6,
    date: '2017.07',
    logo: './assets/images/hzxt_logo.png',
    tags: ['MUI', 'H5Plus', 'HBuilder'],
    imgs: [
      './assets/images/hzxt_app_01.png',
      './assets/images/hzxt_app_02.png',
      './assets/images/hzxt_app_03.png',
      './assets/images/hzxt_app_04.png',
    ]
  },
  {
    name: '兵匠',
    desc: '项目为浙江兵匠线下店铺使用线上APP采购物资商城，功能包含：到店扫码、添加商品、订单管理等。',
    type: 3,
    date: '2017.04 - 05',
    logo: './assets/images/bj_logo.png',
    tags: ['MUI', 'H5Plus', 'HBuilder'],
    imgs: [
      './assets/images/bj_app_01.png',
    ]
  },
  {
    name: '南台月',
    desc: '项目为成都南台月月饼H5线上微信商城部分功能，功能为提供在线下单、兑换券核销',
    type: 2,
    date: '2017.01 - 02',
    logo: './assets/images/nty_logo.jpg',
    tags: ['WeUI'],
    imgs: [
      './assets/images/nty_01.jpg',
    ]
  },
  {
    name: '香果农',
    desc: '项目为攀枝花水果电商购物APP应用，香果农APP汇集了众多的水果商品信息，用户可随时在线购买，轻松便利。',
    type: 3,
    date: '2016.08 - 10',
    logo: './assets/images/xgn_logo.png',
    tags: ['MUI', 'H5Plus', 'HBuilder', 'Vue'],
    imgs: [
      './assets/images/xgn_app_01.png',
      './assets/images/xgn_app_02.png',
      './assets/images/xgn_app_03.png',
      './assets/images/xgn_app_04.png',
    ]
  },
  {
    name: '洋兜兜云商',
    desc: '项目为B2C保健品微信商城+APP，以用户店铺的形式进行分销',
    type: 3,
    date: '2016.11 - 12',
    logo: './assets/images/yddys_logo.png',
    tags: ['WeUI'],
    imgs: [
      './assets/images/yddys_app_01.jpg',
      './assets/images/yddys_app_02.jpg',
      './assets/images/yddys_app_03.jpg',
      './assets/images/yddys_app_04.jpg',
    ]
  },
  {
    name: '洋兜兜',
    desc: '项目为洋兜兜海淘商城APP形式，同时发布iOS、Android版本。',
    type: 3,
    date: '2016.04 - 07',
    logo: './assets/images/ydd_logo.png',
    tags: ['MUI', 'H5Plus', 'HBuilder'],
    imgs: [
      './assets/images/ydd_app_01.jpg',
      './assets/images/ydd_app_02.png',
      './assets/images/ydd_app_03.jpg',
      './assets/images/ydd_app_04.jpg',
    ]
  },
  {
    name: '洋兜兜官网商城',
    desc: '项目为B2C电子商务平台，结合保税区与直邮为用户提供一键直购的日淘服务，主营产品为日本化妆品、保健品等。',
    type: 1,
    date: '2015.09 - 11',
    logo: './assets/images/ydd_logo.png',
    tags: ['JQuery'],
  }
]


function renderList() {
  //type项目类型 1=PC 2=H5 3=APP  4=windows桌面应用 5=微信小程序 6=Pad
  let str = ''
  for (let i in arr) {
    let item = arr[i]
    str += `
      <div class="card-item">
        <div class="img-wrap"><span class="type type-${item.type}"></span>`
    if (item.imgs && item.imgs.length) {
      for (let l in item.imgs) {
        str += `<img src="${item.imgs[l]}">`
        if ((item.type == 1 || item.type == 4 || item.type == 6) && l >= 0 || l >= 2) break
      }
    }
    str += `</div>
        <div class="title">`
    if (item.logo) {
      str += `<img class="logo" src="${item.logo}">`
    }
    str += `<span class="name">${item.name}</span>
          <span class="date">${item.date}</span>
        </div>
        <div class="desc">
          ${item.desc}
        </div>
        <ul class="tag-wrap">
        `
    if (item.tags && item.tags.length) {
      for (let m in item.tags) {
        str += `<li>${item.tags[m]}</li>`
      }
    }
    str += `
        </ul>
      </div>
    `
  }
  if (arr.length % 3 == 2) {
    str += '<div class="empty-item"></div>'
  }
  document.getElementById('list').innerHTML = str
}

renderList()