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
    ],
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
    preview_image: '/portfolio/App_Web/project-1-preview.jpg',
    client: '加计美术馆',
    role: '界面设计师',
    tools: ['Adobe XD', 'Adobe Illustrator', 'Adobe After Effects']
  },
  {
    id: 3,
    title: '千图网卡通形象设计',
    category: '企业形象',
    date: '2019',
    description: '为千图网的品牌形象设计',
    images: [
      '/portfolio/Brand_Image/project-1.jpg',
      '/portfolio/Brand_Image/project-1-2.jpg'
    ],
  },
  {
    id: 4,
    title: '折纸企划的品牌宣传册设计',
    category: '宣传册和书籍',
    date: '2019',
    description: '以折纸为课题，创造的折纸品牌纸指。用趣味和创意，以及想要折出独特的折纸作品并不难的方式，展现了折纸的独特魅力。另外本册大小为15x15cm，是折纸纸张的标准尺寸',
    images: [
      '/portfolio/Brochure_Book/project-1.jpg',
      '/portfolio/Brochure_Book/project-1-2.jpg',
      '/portfolio/Brochure_Book/project-1-3.jpg'
    ],
  },
  {
    id: 5,
    title: '奥多摩地域振兴活动项目',
    category: '宣传册和书籍',
    date: '2019',
    description: '为日本东京奥多摩地区的地域创新课题，经过几天考察而制作的宣传册。展现当地的饮食以及文化特色',
    images: [
      '/portfolio/Brochure_Book/project-2.jpg',
      '/portfolio/Brochure_Book/project-2-2.jpg',
      '/portfolio/Brochure_Book/project-2-3.jpg'
    ],
  },
  {
    id: 6,
    title: '加计美术馆宣传视频',
    category: '动画和视频',
    date: '2020-2021',
    description: '加计美术馆设计项目。创作了以三大核心概念为基础的概念。',
    video: '/portfolio/Animation_Video/project-1.mp4',
    preview_image: '/portfolio/Animation_Video/project-1-preview.jpg',
  },
  {
    id: 7,
    title: '品牌Logo设计',
    category: 'Vi',
    date: '2018',
    description: '该项目品牌为一站式婚庆服务品牌。以品牌名称首字母"d""q"为主而设计的Logo',
    images: [
      '/portfolio/Vi/project-1.jpg',
      '/portfolio/Vi/project-1-2.jpg',
      '/portfolio/Vi/project-1-3.jpg'
    ],
  },
  {
    id: 8,
    title: '苏悦汇Logo设计',
    category: 'Vi',
    date: '2018',
    description: '以苏式为风格设计的一组Logo提案',
    images: [
      '/portfolio/Vi/project-2.jpg',
      '/portfolio/Vi/project-2-2.jpg',
      '/portfolio/Vi/project-2-3.jpg'
    ],
  },
  {
    id: 9,
    title: '钱大妈Logo设计',
    category: 'Vi',
    date: '2019',
    description: '以锁住新鲜为主概念设计的Logo提案',
    images: [
      '/portfolio/Vi/project-3.jpg',
      '/portfolio/Vi/project-3-2.jpg'
    ],
  },
  {
    id: 10,
    title: '沐浴肥皂',
    category: '包装设计',
    date: '2024',
    description: '左边为产品设计的最初概念版。经反复打磨后右边的为最终版本。',
    images: [
      '/portfolio/Packaging/project-4.jpg'
    ],
  },
  {
    id: 11,
    title: '洗护系列外盒包装设计',
    category: '包装设计',
    date: '2024',
    description: '洗护系列外盒包装设计方案',
    images: [
      '/portfolio/Packaging/project-3.jpg'
    ],
  },
  {
    id: 12,
    title: 'Fab洗洁精包装设计',
    category: '包装设计',
    date: '2024',
    description: '以"0"添加为主视觉概念，设计的一系列洗洁精保证',
    images: [
      '/portfolio/Packaging/project-1.jpg'
    ],
  },
  {
    id: 13,
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
    ],
  },
  {
    id: 14,
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
    ],
    client: '加计美术馆',
    role: '视觉设计师',
    tools: ['Adobe Illustrator', 'Adobe Photoshop']
  },
  {
    id: 15,
    title: '黄山卡通形象设计方案提案',
    category: '企业形象',
    date: '2019',
    description: '为黄山形象设计招标而提出的方案。通过对黄山自然景观和文化特色的深入研究，设计了一套完整的品牌形象系统，包含多个应用场景展示。',
    images: [
      '/portfolio/Brand_Image/project-2.jpg',
      '/portfolio/Brand_Image/project-2-2.jpg',
      '/portfolio/Brand_Image/project-2-3.jpg',
      '/portfolio/Brand_Image/project-2-4.jpg'
    ],
    client: '黄山旅游发展公司',
    role: '品牌设计师',
    tools: ['Adobe Illustrator', 'Adobe Photoshop']
  },
  {
    id: 16,
    title: '护发系列包装设计',
    category: '包装设计',
    date: '2023',
    description: '护发系列的包装设计方案。通过简约现代的设计风格，突出产品的天然和专业护理特性，打造高端护发品牌形象。',
    images: [
      '/portfolio/Packaging/project-2.jpg'
    ],
    client: '美妆品牌',
    role: '包装设计师',
    tools: ['Adobe Illustrator', 'Adobe Photoshop']
  },
  {
    id: 17,
    title: '化妆品包装设计',
    category: '包装设计',
    date: '2024',
    description: '精致化妆品包装设计方案，通过简约优雅的设计语言，展现产品的高端品质和独特魅力。',
    images: [
      '/portfolio/Packaging/project-5.jpg',
      '/portfolio/Packaging/project-5-2.jpg'
    ],
    client: '美妆品牌',
    role: '包装设计师',
    tools: ['Adobe Illustrator', 'Adobe Photoshop']
  },
  {
    id: 18,
    title: '绿叶宣传册设计',
    category: '宣传册和书籍',
    date: '2019',
    description: '企业宣传册设计方案。通过清新自然的设计风格，展现品牌的环保理念和产品特色，突出企业在可持续发展方面的努力。',
    images: [
      '/portfolio/Brochure_Book/project-3.jpg'
    ],
    client: '绿叶集团',
    role: '平面设计师',
    tools: ['Adobe InDesign', 'Adobe Illustrator']
  }
];


// 导出项目数据
window.projects = projects;

// 导出过滤器选项
window.filters = ['全部', '插画', 'App/Web', 'Vi', '动画和视频', '宣传册和书籍', '企业形象', '包装设计'];