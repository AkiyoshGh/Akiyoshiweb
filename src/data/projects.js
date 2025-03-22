// 定义过滤器数组
const filters = ['全部', '插画', 'App/Web', '宣传册和书籍', '动画和视频', 'Vi', '企业形象', '包装设计'];

// 项目数据
const projects = [
  {
    id: 1,
    title: '日本仓敷市井盖设计',
    category: '插画',
    date: '2020',
    description: '通过对日本仓敷市的文化考察而构思的一组井盖插画设计。其中有从一轮棉花开始的仓敷物语、因鲱鱼肥料交易而繁荣的历史、还有弥生后期神秘的楯築遗迹。这些文化的考察，加深了对仓敷这个城市的了解。',
    images: [
      '/portfolio/Illustration/project-1.jpg',
      '/portfolio/Illustration/project-1-2.jpg',
      '/portfolio/Illustration/project-1-3.jpg',
      '/portfolio/Illustration/project-1-4.jpg'
    ]
  },
  {
    id: 2,
    title: '加计美术馆App界面设计',
    category: 'App/Web',
    date: '2020-2021',
    description: '加计美术馆设计项目。以加计美术馆的三大支援概念，结合品牌视觉的设计，创作一个直观的界面，以展示美术馆的信息和各类展览信息',
    images: [
      '/portfolio/App_Web/project-1.jpg'
    ],
    video: '/portfolio/App_Web/project-1-2.mp4',
    preview_image: '/portfolio/App_Web/project-1-preview.jpg'
  },
  {
    id: 3,
    title: '折纸企划的品牌宣传册设计',
    category: '宣传册和书籍',
    date: '2019',
    description: '以折纸为课题，创造的折纸品牌纸指。用趣味和创意，以及想要折出独特的折纸作品并不难的方式，展现了折纸的独特魅力。另外本册大小为15x15cm，是折纸纸张的标准尺寸',
    images: [
      '/portfolio/Brochure_Book/project-1.jpg',
      '/portfolio/Brochure_Book/project-1-2.jpg',
      '/portfolio/Brochure_Book/project-1-3.jpg'
    ]
  },
  {
    id: 4,
    title: '奥多摩地域振兴活动项目',
    category: '宣传册和书籍',
    date: '2019',
    description: '为日本东京奥多摩地区的地域创新课题，经过几天考察而制作的宣传册。展现当地的饮食以及文化特色',
    images: [
      '/portfolio/Brochure_Book/project-2.jpg',
      '/portfolio/Brochure_Book/project-2-2.jpg',
      '/portfolio/Brochure_Book/project-2-3.jpg'
    ]
  },
  {
    id: 5,
    title: '加计美术馆宣传视频',
    category: '动画和视频',
    date: '2020-2021',
    description: '加计美术馆设计项目。创作了以三大核心概念为基础的概念。',
    video: '/portfolio/Animation_Video/project-1.mp4',
    preview_image: '/portfolio/Animation_Video/project-1-preview.jpg'
  },
  {
    id: 6,
    title: 'Oteam Logo设计提案',
    category: 'Vi',
    date: '2020',
    description: 'logo设计提案，包含多个应用场景的展示',
    images: [
      '/portfolio/Vi/project-4.jpg',
      '/portfolio/Vi/project-4-2.jpg',
      '/portfolio/Vi/project-4-3.jpg',
      '/portfolio/Vi/project-4-4.jpg',
      '/portfolio/Vi/project-4-5.jpg',
      '/portfolio/Vi/project-4-6.jpg',
      '/portfolio/Vi/project-4-7.jpg',
      '/portfolio/Vi/project-4-8.jpg',
      '/portfolio/Vi/project-4-9.jpg'
    ]
  },
  {
    id: 7,
    title: '加计美术馆Vi设计',
    category: 'Vi',
    date: '2020-2021',
    description: '加计美术馆设计项目。以加计美术馆的三大支援概念，而设计的一套Vi系统。通过品牌视觉识别系统的设计，展现美术馆的文化内涵和艺术价值。',
    images: [
      '/portfolio/Vi/project-5.jpg',
      '/portfolio/Vi/project-5-1.jpg',
      '/portfolio/Vi/project-5-2.jpg',
      '/portfolio/Vi/project-5-3.jpg',
      '/portfolio/Vi/project-5-4.jpg'
    ]
  },
  {
    id: 8,
    title: '黄山卡通形象设计方案提案',
    category: '企业形象',
    date: '2019',
    description: '为黄山形象设计招标而提出的方案。通过对黄山自然景观和文化特色的深入研究，设计了一套完整的品牌形象系统，包含多个应用场景展示。',
    images: [
      '/portfolio/Brand_Image/project-2.jpg',
      '/portfolio/Brand_Image/project-2-2.jpg',
      '/portfolio/Brand_Image/project-2-3.jpg',
      '/portfolio/Brand_Image/project-2-4.jpg'
    ]
  },
  {
    id: 9,
    title: '护发系列包装设计',
    category: '包装设计',
    date: '2023',
    description: '护发系列的包装设计方案。通过简约现代的设计风格，打造高端护发品牌形象。',
    images: [
      '/portfolio/Packaging/project-2.jpg'
    ]
  },
  {
    id: 10,
    title: '"七币"红包设计',
    category: '包装设计',
    date: '2022',
    description: '新年红包设计。该系列除了每封红包都有吉祥寓意外，结合红包起源故事，可从一系列图形中拼凑出包含"七"个钱包的样式。故称为"七币"红包。',
    images: [
      '/portfolio/Packaging/project-5.jpg',
      '/portfolio/Packaging/project-5-2.jpg'
    ]
  },
  {
    id: 11,
    title: 'Fab洗洁精包装设计',
    category: '包装设计',
    date: '2023',
    description: 'Fab洗洁精系列包装设计。以“0”为主视觉，而设计的瓶装以及补充袋装系列包装。',
    images: [
      '/portfolio/Packaging/project-1.jpg'
    ]
  },
  {
    id: 12,
    title: '洗发水&护发素组合装包装设计',
    category: '包装设计',
    date: '2023',
    description: '一组洗发水&护发组盒包装的设计方案。整体与产品的整体风格保持一致，大开窗口的设计，高端大气。',
    images: [
      '/portfolio/Packaging/project-3.jpg'
    ]
  },
  {
    id: 13,
    title: '千图网卡通形象设计提案',
    category: '企业形象',
    date: '2019',
    description: '以鸟带来第一颗种子而带来水稻为灵感，寓意灵感之站而设计的卡通形象设计提案。',
    images: [
      '/portfolio/Brand_Image/project-1.jpg',
      '/portfolio/Brand_Image/project-1-2.jpg'
    ]
  },
  {
    id: 14,
    title: '苏悦汇品牌设计Logo提案',
    category: 'Vi',
    date: '2018',
    description: '一组以苏式风格元素而设计的Logo方案',
    images: [
      '/portfolio/Vi/project-2.jpg',
      '/portfolio/Vi/project-2-2.jpg',
      '/portfolio/Vi/project-2-3.jpg'
    ]
  },
  {
    id: 15,
    title: '钱大妈Logo设计提案',
    category: 'Vi',
    date: '2019',
    description: '以锁住新鲜为主概念设计的Logo设计提案',
    images: [
      '/portfolio/Vi/project-3.jpg',
      '/portfolio/Vi/project-3-2.jpg'
    ]
  },
  {
    id: 16,
    title: '沐浴露香皂',
    category: '包装设计',
    date: '2023',
    description: '左侧的为初稿概念图。右侧的为经反复打样修改后的最终效果。',
    images: [
      '/portfolio/Packaging/project-4.jpg'
    ]
  },
  {
    id: 17,
    title: '绿叶品牌宣传册',
    category: '宣传册和书籍',
    date: '2023',
    description: '绿叶集团宣传册，展现了旗下规模、产品等一系列信息。',
    images: [
      '/portfolio/Brochure_Book/project-3.jpg'
    ]
  },
  {
    id: 18,
    title: '东庆童话Logo设计提案',
    category: 'Vi',
    date: '2018',
    description: '为一站式婚期服务平台品牌“东庆童话”设计的Logo提案。以首字母“d”“q”为主体，加上婚戒元素设计而成。整体高端大气。',
    images: [
      '/portfolio/Vi/project-1.jpg',
      '/portfolio/Vi/project-1-2.jpg',
      '/portfolio/Vi/project-1-3.jpg'
    ]
  }
];

// 导出过滤器数组和项目数据到window对象
window.filters = filters;
window.projects = projects;