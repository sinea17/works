let arr = [
  {
    name: "智场移动充电官网",
    desc: "项目为智场移动充电官网，主要提供设备展示、新闻资讯、商务咨询服务",
    type: 1,
    date: "2024.09 - 2024.09",
    logo: "",
    tags: ["Vue", "ElementPlus", "AOS", "UnoCSS"],
    imgs: [""],
  },
  {
    name: "智场移动充电运营监控中心",
    desc: "",
    type: 1,
    date: "2024.06 - 2024.07",
    logo: "",
    tags: ["Vue", "ECharts", "ElementPlus", "Video.js"],
    imgs: [""],
  },
  {
    name: "智场移动充电云管理系统",
    desc: "",
    type: 1,
    date: "2023.11 - 2023.12",
    logo: "",
    tags: ["Vue", "ECharts", "OpenLayers", "ElementPlus"],
    imgs: [""],
  },
  {
    name: "营商环境数据大屏",
    desc: "项目为江西省高安市政府营商环境可视化数据监控大屏",
    type: 1,
    date: "2022.12 - 2023.01",
    logo: "https://img.sinea.cn/works/yshj_logo.png",
    tags: ["ECharts"],
    imgs: ["https://img.sinea.cn/works/yshj_view_01.png"],
  },
  {
    name: "营商环境管理平台",
    desc: "项目为江西省高安市政府营商环境管理系统，功能包含政策管理、金融管理、企业管理等",
    type: 1,
    date: "2022.12 - 2023.01",
    logo: "https://img.sinea.cn/works/yshj_logo.png",
    tags: ["Vue", "ElementUI"],
    imgs: [
      "https://img.sinea.cn/works/yshj_01.png",
      "https://img.sinea.cn/works/yshj_02.png",
    ],
  },
  {
    name: "阳洋出行Web司机端",
    desc: "该项目为司机端Web版本，方便企业司机管理自有订单及车辆",
    type: 1,
    date: "2022.10 - 11",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["Vue3", "ElementPlus", "TS", "Vite", "AMap"],
    imgs: ["https://img.sinea.cn/works/yycx_admin_04.png"],
  },
  {
    name: "阳洋出行官网 2.0",
    desc: "阳洋出行官网 2.0",
    type: 1,
    date: "2021.03",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["Vue", "Nuxt", "nuxt-fullpage"],
    imgs: ["https://img.sinea.cn/works/yycx_01.png"],
  },
  {
    name: "阳洋出行维保系统",
    desc: "该项目为阳洋出行针对修理厂为车辆提供维保服务进行管理",
    type: 1,
    date: "2021.05",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["Vue", "ElementUI"],
    imgs: ["https://img.sinea.cn/works/yycx_admin_05.png"],
  },
  {
    name: "阳洋出行公务端",
    desc: "项目为阳洋出行政府单位公务用车端，通过webapp网页嵌入到原生中组成混合APP(Hybrid App)",
    type: 2,
    date: "2020.05 - 至今",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["Vue", "Vant"],
    imgs: [
      "https://img.sinea.cn/works/yycx_app_official_01.png",
      "https://img.sinea.cn/works/yycx_app_official_02.png",
      "https://img.sinea.cn/works/yycx_app_official_03.png",
    ],
  },
  {
    name: "阳洋出行乘客端",
    desc: "该项目为阳洋出行乘客端，通过webapp网页嵌入到原生中组成混合APP(Hybrid App)",
    type: 2,
    date: "2020.03 - 至今",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["Vue", "Vant"],
    imgs: [
      "https://img.sinea.cn/works/yycx_app_user_01.png",
      "https://img.sinea.cn/works/yycx_app_user_02.png",
      "https://img.sinea.cn/works/yycx_app_user_03.png",
    ],
  },
  {
    name: "阳洋出行司机端",
    desc: "该项目为阳洋出行司机端，通过webapp网页嵌入到原生中组成混合APP(Hybrid App)",
    type: 2,
    date: "2020.03 - 至今",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["Vue", "Vant"],
    imgs: [
      "https://img.sinea.cn/works/yycx_app_driver_01.png",
      "https://img.sinea.cn/works/yycx_app_driver_02.png",
      "https://img.sinea.cn/works/yycx_app_driver_03.png",
    ],
  },
  {
    name: "阳洋出行公务后台",
    desc: "项目为阳洋出行针对政府单位公务人员提供用车管理系统",
    type: 1,
    date: "2020.03 - 至今",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["Vue", "ElementUI", "ECharts", "AMapUI"],
    imgs: ["https://img.sinea.cn/works/yycx_admin_03.png"],
  },
  {
    name: "阳洋出行业务后台",
    desc: "项目为阳洋出行地区分公司管理系统，功能包含订单管理、车辆管理、乘客管理、司机管理等",
    type: 1,
    date: "2020.03 - 至今",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["Vue", "ElementUI", "ECharts", "wangEditor"],
    imgs: ["https://img.sinea.cn/works/yycx_admin_02.png"],
  },
  {
    name: "阳洋出行管理后台",
    desc: "项目为阳洋出行总公司管理系统，功能包含订单管理、车辆管理、乘客管理、司机管理、财务管理等",
    type: 1,
    date: "2020.02 - 至今",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["Vue", "ElementUI", "ECharts", "wangEditor"],
    imgs: ["https://img.sinea.cn/works/yycx_admin_01.png"],
  },
  {
    name: "会务用车系统（用车端）",
    desc: "阳洋出行针对大型会议用车开发的管理系统，功能包含实时调度监控、任务下达、车辆追踪",
    type: 1,
    date: "2019.07",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["Vue", "ElementUI", "AMap"],
    imgs: ["https://img.sinea.cn/works/yycx_hwyc_03.png"],
  },
  {
    name: "会务用车系统（供车端）",
    desc: "阳洋出行针对大型会议用车开发的管理系统，功能包含实时调度监控、任务下达、车辆追踪",
    type: 1,
    date: "2019.07",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["Vue", "ElementUI", "AMap"],
    imgs: ["https://img.sinea.cn/works/yycx_hwyc_02.png"],
  },
  {
    name: "会务用车系统（管理端）",
    desc: "阳洋出行针对大型会议用车开发的管理系统，功能包含实时调度监控、任务下达、车辆追踪",
    type: 1,
    date: "2019.07",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["Vue", "ElementUI", "AMap"],
    imgs: [
      "https://img.sinea.cn/works/yycx_hwyc_01.png",
      "https://img.sinea.cn/works/yycx_hwyc_04.png",
    ],
  },
  {
    name: "阳洋出行乘客端",
    desc: "阳洋出行针对用户提供包车、租车、跨城车等服务",
    type: 5,
    date: "2019.01 - 2020.01",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["微信小程序"],
    imgs: [
      "https://img.sinea.cn/works/yycx_ckd_01.jpg",
      "https://img.sinea.cn/works/yycx_ckd_02.jpg",
      "https://img.sinea.cn/works/yycx_ckd_03.jpg",
    ],
  },
  {
    name: "阳洋出行司机端",
    desc: "阳洋出行司机端",
    type: 5,
    date: "2019.01 - 2019.10",
    logo: "https://img.sinea.cn/works/yycx_logo.png",
    tags: ["微信小程序"],
    imgs: [
      "https://img.sinea.cn/works/yycx_sjd_01.jpg",
      "https://img.sinea.cn/works/yycx_sjd_02.jpg",
    ],
  },
  {
    name: "洗车机数据管理系统",
    desc: "项目为成都温江公交洗车机设备数据管理系统，主要通过设备数据管理及导出、分配公交车队",
    type: 4,
    date: "2021.12",
    logo: "https://img.sinea.cn/works/xcj_logo.png",
    tags: ["Vue", "ElementUI", "Electron"],
    imgs: ["https://img.sinea.cn/works/xcj_01.png"],
  },
  {
    name: "见山谷官网",
    desc: "项目为见山谷官网",
    type: 1,
    date: "2021.03",
    logo: "https://img.sinea.cn/works/jsg_logo.jpg",
    tags: ["HTML"],
    imgs: ["https://img.sinea.cn/works/jsg_01.png"],
  },
  {
    name: "见山谷",
    desc: "项目为见山谷泰式SPA连锁门店针对客户提供服务预约、会员积分、电子礼品卡等功能",
    type: 5,
    date: "2021.01 - 2021.03",
    logo: "https://img.sinea.cn/works/jsg_logo.jpg",
    tags: ["微信小程序"],
    imgs: [
      "https://img.sinea.cn/works/jsg_xcx_01.jpg",
      "https://img.sinea.cn/works/jsg_xcx_02.jpg",
      "https://img.sinea.cn/works/jsg_xcx_03.jpg",
    ],
  },
  {
    name: "熊猫秘书",
    desc: "项目为熊猫秘书针对企业提供定制化服务，功能包含公司注册、业务代办、税务处理等功能",
    type: 5,
    date: "2021.01 - 2021.03",
    logo: "https://img.sinea.cn/works/xmms_logo.jpg",
    tags: ["微信小程序"],
    imgs: [
      "https://img.sinea.cn/works/xmms_01.png",
      "https://img.sinea.cn/works/xmms_02.png",
      "https://img.sinea.cn/works/xmms_03.png",
      "https://img.sinea.cn/works/xmms_04.png",
      "https://img.sinea.cn/works/xmms_05.png",
      "https://img.sinea.cn/works/xmms_06.png",
    ],
  },
  {
    name: "贵州气候监测系统",
    desc: "项目为贵州智能气候监测与评价业务平台，提供数据查询、数据分享、GIS可视化制图等功能",
    type: 1,
    date: "2020.10 - 2021.02",
    logo: "https://img.sinea.cn/works/gzqh_logo.webp",
    tags: ["Vue", "ElementUI", "ECharts", "Mapbox"],
    imgs: [
      "https://img.sinea.cn/works/gzqh_01.png",
      "https://img.sinea.cn/works/gzqh_02.png",
      "https://img.sinea.cn/works/gzqh_03.png",
      "https://img.sinea.cn/works/gzqh_04.png",
    ],
  },
  {
    name: "鞋仓",
    desc: "项目为阿么供应商平台手机版H5",
    type: 2,
    date: "2020.09",
    logo: "https://img.sinea.cn/works/am_logo.webp",
    tags: ["uni-app", "HBuilderX"],
    imgs: [
      "https://img.sinea.cn/works/am_xch5_01.png",
      "https://img.sinea.cn/works/am_xch5_02.png",
    ],
  },
  {
    name: "阿么供应商平台（鞋仓）",
    desc: "项目为阿么针对供应商提供的生产鞋款线上选款管理系统",
    type: 1,
    date: "2020.06 - 08",
    logo: "https://img.sinea.cn/works/am_logo.webp",
    tags: ["Vue", "ElementUI"],
    imgs: ["https://img.sinea.cn/works/am_xc_01.png"],
  },
  {
    name: "阿么一体化管理系统",
    desc: "项目为成都阿么女鞋针对ERP仓储数据管理及销售数据统计分析开发的一体化系统",
    type: 1,
    date: "2020.03 - 09",
    logo: "https://img.sinea.cn/works/am_logo.webp",
    tags: ["Vue", "ElementUI"],
    imgs: [
      "https://img.sinea.cn/works/am_yth_01.png",
      "https://img.sinea.cn/works/am_yth_02.png",
      "https://img.sinea.cn/works/am_yth_03.png",
    ],
  },
  {
    name: "幽兰·兰幽幽",
    desc: "幽兰·兰幽幽官网",
    type: 1,
    date: "2022.01",
    logo: "https://img.sinea.cn/works/lzyy_logo.jpg",
    tags: ["Swiper", "AOS"],
    imgs: ["https://img.sinea.cn/works/lzyy_pc_01.webp"],
  },
  {
    name: "兰之幽幽 2.0",
    desc: "幽兰·兰幽幽连锁门店服务预约",
    type: 5,
    date: "2020.03 - 04",
    logo: "https://img.sinea.cn/works/lzyy_logo.jpg",
    tags: ["微信小程序"],
    imgs: [
      "https://img.sinea.cn/works/lzyy2_01.jpg",
      "https://img.sinea.cn/works/lzyy2_02.jpg",
      "https://img.sinea.cn/works/lzyy2_03.jpg",
      "https://img.sinea.cn/works/lzyy2_04.jpg",
      "https://img.sinea.cn/works/lzyy2_05.jpg",
    ],
  },
  {
    name: "剪刀侠男士发型",
    desc: '项目为美发连锁品牌"剪刀侠"针对男士发型展示发的微信小程序，功能包含男士发型推荐查询、理发教程视频等',
    type: 5,
    date: "2019.11 - 12",
    logo: "https://img.sinea.cn/works/jdx_logo.jpg",
    tags: ["微信小程序"],
    imgs: [
      "https://img.sinea.cn/works/jdx_01.png",
      "https://img.sinea.cn/works/jdx_02.png",
      "https://img.sinea.cn/works/jdx_03.png",
    ],
  },
  {
    name: "蓝萌",
    desc: "项目为蓝萌共享充电宝线上商城，提供商城购物、商品分销等功能",
    type: 3,
    date: "2019.07 - 10",
    logo: "https://img.sinea.cn/works/lm_logo.webp",
    tags: ["uni-app", "HBuilderX"],
    imgs: [
      "https://img.sinea.cn/works/lm_app_01.png",
      "https://img.sinea.cn/works/lm_app_02.png",
      "https://img.sinea.cn/works/lm_app_03.png",
      "https://img.sinea.cn/works/lm_app_04.png",
      "https://img.sinea.cn/works/lm_app_05.png",
      "https://img.sinea.cn/works/lm_app_06.png",
    ],
  },
  {
    name: "峰尚美",
    desc: "项目为峰尚美高端定制内衣订单进度查询系统",
    type: 5,
    date: "2019.09",
    logo: "https://img.sinea.cn/works/fsm_logo.jpg",
    tags: ["微信小程序"],
    imgs: [
      "https://img.sinea.cn/works/fsm_01.png",
      "https://img.sinea.cn/works/fsm_02.png",
      "https://img.sinea.cn/works/fsm_03.png",
      "https://img.sinea.cn/works/fsm_04.png",
    ],
  },
  {
    name: "歌蒂梵",
    desc: "项目为成都歌蒂梵美容连锁开发的线上购物服务预约的小程序，功能包含购物、预约、拼团秒杀等功能",
    type: 5,
    date: "2019.06 - 08",
    logo: "https://img.sinea.cn/works/gdf_logo.jpg",
    tags: ["微信小程序"],
    imgs: [
      "https://img.sinea.cn/works/gdf_01.jpg",
      "https://img.sinea.cn/works/gdf_02.jpg",
      "https://img.sinea.cn/works/gdf_03.jpg",
      "https://img.sinea.cn/works/gdf_04.jpg",
    ],
  },
  {
    name: "兰之幽幽 1.0",
    desc: "幽兰·兰幽幽美容美体门店销售小程序，主要提供服务预约、商品售卖等功能",
    type: 5,
    date: "2019.02 - 04",
    logo: "https://img.sinea.cn/works/lzyy_logo.jpg",
    tags: ["微信小程序"],
    imgs: [
      "https://img.sinea.cn/works/lzyy_xcx_01.webp",
      "https://img.sinea.cn/works/lzyy_xcx_02.webp",
      "https://img.sinea.cn/works/lzyy_xcx_03.webp",
      "https://img.sinea.cn/works/lzyy_xcx_04.webp",
    ],
  },
  {
    name: "脱壳发型",
    desc: "项目为脱壳发型微信小程序端，功能主要包含各类发型风格百科展示、发型推荐、发型视频教程等功能",
    type: 5,
    date: "2018.10 - 2019.02",
    logo: "https://img.sinea.cn/works/tkfx_logo.jpg",
    tags: ["微信小程序"],
    imgs: [
      "https://img.sinea.cn/works/tkfx_xcx_01.jpg",
      "https://img.sinea.cn/works/tkfx_xcx_02.jpg",
      "https://img.sinea.cn/works/tkfx_xcx_03.jpg",
      "https://img.sinea.cn/works/tkfx_xcx_04.jpg",
      "https://img.sinea.cn/works/tkfx_xcx_05.jpg",
    ],
  },
  {
    name: "民航招飞（管理端）",
    desc: "为更好地方便招飞主管使用民航招飞系统完成招飞业务流程，提供招飞主管手机APP，同web平台共用数据中心保持数据同步。主管使用该APP完成民航招飞初检、体检、背景调查、合格名单等业务处理功能。",
    type: 3,
    date: "2018.11 - 12",
    logo: "https://img.sinea.cn/works/mhzfgl_logo.webp",
    tags: ["MUI", "H5Plus", "HBuilder"],
    imgs: [
      "https://img.sinea.cn/works/mhzfgl_app_01.webp",
      "https://img.sinea.cn/works/mhzfgl_app_02.webp",
      "https://img.sinea.cn/works/mhzfgl_app_03.webp",
      "https://img.sinea.cn/works/mhzfgl_app_04.webp",
    ],
  },
  {
    name: "途络销售端",
    desc: "项目为途络平台订货系统销售端APP，主要功能为客户管理、代下单、数据统计分析可视化展示、采购、订单管理。",
    type: 3,
    date: "2018.08 - 09",
    logo: "https://img.sinea.cn/works/tl_logo.png",
    tags: ["MUI", "H5Plus", "HBuilder", "AntV"],
    imgs: ["https://img.sinea.cn/works/tl_logo.png"],
  },
  {
    name: "途络WMS（PDA）",
    desc: "项目为遂宁威斯腾物流园针对仓储管理系统扫码PDA端开发，主要功能为收货、上架、拣货、复核、交接、盘点，适配的设备为销邦X8和霍尼韦尔手持扫描器。",
    type: 3,
    date: "2018.08 - 09",
    logo: "https://img.sinea.cn/works/tl_logo.png",
    tags: ["MUI", "H5Plus", "HBuilder"],
    imgs: [
      "https://img.sinea.cn/works/tlwms_app_01.png",
      "https://img.sinea.cn/works/tlwms_app_02.png",
      "https://img.sinea.cn/works/tlwms_app_03.png",
      "https://img.sinea.cn/works/tlwms_app_04.png",
    ],
  },
  {
    name: "民航招飞（考生端）",
    desc: "民航招飞考生平台APP提供了同民航招飞信息系统同样的功能，考生使用本APP可以完成考生帐号注册、个人信息完善、既有病史核实、招飞志愿填报、报考结果查询等功能。",
    type: 3,
    date: "2018.07 - 08",
    logo: "https://img.sinea.cn/works/mhzf_logo.webp",
    tags: ["MUI", "H5Plus", "HBuilder"],
    imgs: [
      "https://img.sinea.cn/works/mhzf_01.webp",
      "https://img.sinea.cn/works/mhzf_02.webp",
      "https://img.sinea.cn/works/mhzf_03.webp",
    ],
  },
  {
    name: "集托网",
    desc: "项目为集托网针对铁路物流托盘承租商、供应商开发的平台APP，功能包含：托盘租赁、托盘管理、托盘账单、保证金系统等",
    type: 3,
    date: "2018.06 - 07",
    logo: "https://img.sinea.cn/works/jtw_logo.png",
    tags: ["MUI", "H5Plus", "HBuilder"],
    imgs: [
      "https://img.sinea.cn/works/tl_jt_01.png",
      "https://img.sinea.cn/works/tl_jt_02.png",
      "https://img.sinea.cn/works/tl_jt_03.png",
      "https://img.sinea.cn/works/tl_jt_04.png",
    ],
  },
  {
    name: "途络小程序",
    desc: "项目为途络针对遂宁铁路物流园司机、供应商、收货人三个主体开发的微信小程序服务，终端含：途络司机端、途络供应端、途络收货端",
    type: 5,
    date: "2018.05 - 06",
    logo: "https://img.sinea.cn/works/tl_logo.png",
    tags: ["微信小程序"],
    imgs: [
      "https://img.sinea.cn/works/tl_xcx_01.jpg",
      "https://img.sinea.cn/works/tl_xcx_02.jpg",
      "https://img.sinea.cn/works/tl_xcx_03.jpg",
    ],
  },
  {
    name: "途络汽车交易",
    desc: "项目为公司有意针对国外进口平行车开发的汽车交易平台，功能包含：进口平行车发布、搜索、订单管理、仓储管理、汽车供应商查询等",
    type: 3,
    date: "2018.03 - 05",
    logo: "https://img.sinea.cn/works/tl_logo.png",
    tags: ["MUI", "H5Plus", "HBuilder"],
    imgs: [
      "https://img.sinea.cn/works/tlqcjy_app_01.png",
      "https://img.sinea.cn/works/tlqcjy_app_02.png",
      "https://img.sinea.cn/works/tlqcjy_app_03.png",
    ],
  },
  {
    name: "途络管理系统桌面应用",
    desc: "项目为途络管理系统构建为桌面应用（避免浏览器兼容问题），并通过NSIS再打包实现一键安装包功能",
    type: 4,
    date: "2018.01",
    logo: "https://img.sinea.cn/works/tl_logo.png",
    tags: ["Electron", "NSIS"],
    imgs: ["https://img.sinea.cn/works/tl_logo.png"],
  },
  {
    name: "途络 2.0",
    desc: "项目为遂宁维斯滕物流园对外提供物流服务APP，功能包含：采购商品、物流配送、发货、商品及物流订单管理",
    type: 3,
    date: "2018.01 - 03",
    logo: "https://img.sinea.cn/works/tl_logo.png",
    tags: ["MUI", "H5Plus", "HBuilder"],
    imgs: [
      "https://img.sinea.cn/works/tl2_app_01.jpg",
      "https://img.sinea.cn/works/tl2_app_02.jpg",
      "https://img.sinea.cn/works/tl2_app_03.jpg",
      "https://img.sinea.cn/works/tl2_app_04.jpg",
    ],
  },
  {
    name: "途络 1.0",
    desc: "项目为遂宁维斯滕物流园对外提供物流服务APP，功能包含：采购商品、物流配送、发货、商品及物流订单管理",
    type: 3,
    date: "2017.09 - 12",
    logo: "https://img.sinea.cn/works/tl_logo.png",
    tags: ["MUI", "H5Plus", "HBuilder"],
    imgs: [
      "https://img.sinea.cn/works/tl_app_01.png",
      "https://img.sinea.cn/works/tl_app_02.png",
      "https://img.sinea.cn/works/tl_app_03.png",
      "https://img.sinea.cn/works/tl_app_04.png",
      "https://img.sinea.cn/works/tl_app_05.png",
    ],
  },
  {
    name: "会诊系统",
    desc: "项目为会诊系统适配pad界面开发，模块包含：医院列表界面、医生聊天界面、远程预约会诊",
    type: 6,
    date: "2017.07",
    logo: "https://img.sinea.cn/works/hzxt_logo.png",
    tags: ["MUI", "H5Plus", "HBuilder"],
    imgs: [
      "https://img.sinea.cn/works/hzxt_app_01.png",
      "https://img.sinea.cn/works/hzxt_app_02.png",
      "https://img.sinea.cn/works/hzxt_app_03.png",
      "https://img.sinea.cn/works/hzxt_app_04.png",
    ],
  },
  {
    name: "兵匠",
    desc: "项目为浙江兵匠线下店铺使用线上APP采购物资商城，功能包含：到店扫码、添加商品、订单管理等。",
    type: 3,
    date: "2017.04 - 05",
    logo: "https://img.sinea.cn/works/bj_logo.png",
    tags: ["MUI", "H5Plus", "HBuilder"],
    imgs: [
      "https://img.sinea.cn/works/bj_app_01.png",
      "https://img.sinea.cn/works/bj_app_02.png",
      "https://img.sinea.cn/works/bj_app_03.png",
      "https://img.sinea.cn/works/bj_app_04.png",
    ],
  },
  {
    name: "南台月",
    desc: "项目为成都南台月月饼H5线上微信商城部分功能，功能为提供在线下单、兑换券核销",
    type: 2,
    date: "2017.01 - 02",
    logo: "https://img.sinea.cn/works/nty_logo.jpg",
    tags: ["WeUI"],
    imgs: ["https://img.sinea.cn/works/nty_01.jpg"],
  },
  {
    name: "香果农",
    desc: "项目为攀枝花水果电商购物APP应用，香果农APP汇集了众多的水果商品信息，用户可随时在线购买，轻松便利。",
    type: 3,
    date: "2016.08 - 10",
    logo: "https://img.sinea.cn/works/xgn_logo.png",
    tags: ["MUI", "H5Plus", "HBuilder", "Vue"],
    imgs: [
      "https://img.sinea.cn/works/xgn_app_01.png",
      "https://img.sinea.cn/works/xgn_app_02.png",
      "https://img.sinea.cn/works/xgn_app_03.png",
      "https://img.sinea.cn/works/xgn_app_04.png",
    ],
  },
  {
    name: "洋兜兜云商",
    desc: "项目为B2C保健品微信商城+APP，以用户店铺的形式进行分销",
    type: 3,
    date: "2016.11 - 12",
    logo: "https://img.sinea.cn/works/yddys_logo.png",
    tags: ["WeUI"],
    imgs: [
      "https://img.sinea.cn/works/yddys_app_01.jpg",
      "https://img.sinea.cn/works/yddys_app_02.jpg",
      "https://img.sinea.cn/works/yddys_app_03.jpg",
      "https://img.sinea.cn/works/yddys_app_04.jpg",
    ],
  },
  {
    name: "洋兜兜",
    desc: "项目为洋兜兜海淘商城APP形式，同时发布iOS、Android版本。",
    type: 3,
    date: "2016.04 - 07",
    logo: "https://img.sinea.cn/works/ydd_logo.png",
    tags: ["MUI", "H5Plus", "HBuilder"],
    imgs: [
      "https://img.sinea.cn/works/ydd_app_01.jpg",
      "https://img.sinea.cn/works/ydd_app_02.png",
      "https://img.sinea.cn/works/ydd_app_03.jpg",
      "https://img.sinea.cn/works/ydd_app_04.jpg",
    ],
  },
  {
    name: "洋兜兜官网商城",
    desc: "项目为B2C电子商务平台，结合保税区与直邮为用户提供一键直购的日淘服务，主营产品为日本化妆品、保健品等。",
    type: 1,
    date: "2015.09 - 11",
    logo: "https://img.sinea.cn/works/ydd_logo.png",
    tags: ["JQuery"],
    imgs: ["https://img.sinea.cn/works/ydd_logo.png"],
  },
];

function renderList() {
  //type项目类型 1=PC 2=H5 3=APP 4=windows桌面应用 5=微信小程序 6=Pad
  let str = "";
  for (let i in arr) {
    let item = arr[i];
    str += `
      <div class="card-item">
        <div class="img-wrap"><span class="type type-${item.type}"></span>`;
    if (item.imgs && item.imgs.length) {
      for (let l in item.imgs) {
        let isShowOne = item.type == 1 || item.type == 4 || item.type == 6;
        str += `<img class="img-item ${isShowOne ? " cover" : ""}" src="${
          item.imgs[l]
        }">`;
        if ((isShowOne && l >= 0) || l >= 2) break;
      }
    }
    str += `</div>
        <div class="title">`;
    if (item.logo) {
      str += `<img class="logo" src="${item.logo}">`;
    }
    str += `<span class="name">${item.name}</span>
          <span class="date">${item.date}</span>
        </div>
        <div class="desc">
          ${item.desc}
        </div>
        <ul class="tag-wrap">
        `;
    if (item.tags && item.tags.length) {
      for (let m in item.tags) {
        str += `<li>${item.tags[m]}</li>`;
      }
    }
    str += `
        </ul>
      </div>
    `;
  }
  if (arr.length % 3 == 2) {
    str += '<div class="empty-item"></div>';
  }
  document.getElementById("list").innerHTML = str;
}

renderList();
