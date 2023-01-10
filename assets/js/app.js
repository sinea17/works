let arr = [
  {
    name: '民航招飞',
    desc: '民航招飞考生平台APP提供了同民航招飞信息系统同样的功能，考生使用本APP可以完成考生帐号注册、个人信息完善、既有病史核实、招飞志愿填报、报考结果查询等功能。',
    type: 1,//项目类型 1=PC 2=H5 3=APP  4=windows桌面应用 5=微信小程序 6=抖音小程序
    date: '2020',
    tags: ['APP', 'MUI', 'H5Plus', 'HBuilder'],
    imgs: [
      './assets/images/mhzf_01.webp',
      './assets/images/mhzf_02.webp',
      './assets/images/mhzf_03.webp',
    ]
  },
  {
    name: '洋兜兜',
    type: 'APP',
    date: '2015',
    tags: ['MUI', 'H5Plus', 'HBuilder'],
    imgs: [
      './assets/images/mhzf_01.webp',
      './assets/images/mhzf_02.webp',
      './assets/images/mhzf_03.webp',
    ]
  }
]


function renderList() {
  let str = ''
  for (let i in arr) {
    let item = arr[i]
    str += `
      <div class="card-item">
        <div class="img-wrap">
        `
    if (item.imgs && item.imgs.length) {
      for (let l in item.imgs) {
        str += `<img src="${item.imgs[l]}">`
      }
    }
    str += `
          </div>
        <div class="title">
          ${item.name}
          <span class="type-${item.type}">${item.type}</span>
          <span>${item.date}</span>
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
  document.getElementById('list').innerHTML = str
}

renderList()