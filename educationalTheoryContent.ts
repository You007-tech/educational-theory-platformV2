export interface LifeExample {
  id: string;
  title: string;
  description: string;
  analogy: string;
  relevance: string;
}

export interface KeyConcept {
  id: string;
  term: string;
  definition: string;
  simpleExplanation: string;
}

export interface TheorySection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: LifeExample[];
  keyConcepts: KeyConcept[];
}

export const educationalTheoryContent: TheorySection[] = [
  {
    id: 'knowledge-evolution',
    title: '知识观念的演变历程',
    summary: '从传统到现代，人类对知识的理解经历了深刻的变革，这种变革影响着教育理念和实践方式。',
    content: '人类对知识的理解并非一成不变，而是随着时代发展不断演进。传统观念将知识视为固定不变的真理，而现代观点则强调知识的动态性、文化性和情境性。这种转变不仅改变了我们对知识本质的理解，也对教育实践产生了深远影响。在教育领域，这种转变要求我们从简单的知识传递转向培养学生的批判性思维和创新能力。',
    examples: [
      {
        id: 'navigation-evolution',
        title: '导航技术的演变',
        description: '从纸质地图到智能导航，技术的发展改变了我们获取位置信息的方式。',
        analogy: '就像我们从问路到现在用手机导航，获取知识的方式也在不断进步。',
        relevance: '说明知识获取方式随着技术发展而不断革新，教育也需要与时俱进。'
      },
      {
        id: 'medical-progress',
        title: '医学认知的进步',
        description: '从经验医学到循证医学，医学知识的积累和发展体现了人类认知的深化。',
        analogy: '就像从土方子到现代医疗，知识的精确性和有效性不断提高。',
        relevance: '体现知识从经验性向科学性的发展，以及专业化进步的重要性。'
      }
    ],
    keyConcepts: [
      {
        id: 'dynamic-knowledge',
        term: '知识的动态性',
        definition: '知识不是静止不变的，而是随着人类认知和社会发展而不断更新。',
        simpleExplanation: '就像手机系统需要不断更新，知识也需要随着新发现而更新。'
      },
      {
        id: 'cultural-knowledge',
        term: '知识的文化性',
        definition: '知识的产生、传播和理解都受到文化背景的影响。',
        simpleExplanation: '就像不同地区有不同的饮食文化，知识也带有文化特色。'
      },
      {
        id: 'contextual-knowledge',
        term: '知识的情境性',
        definition: '知识的意义和价值会因具体情境而异，需要考虑应用环境。',
        simpleExplanation: '就像同一句话在不同场合意思不同，知识也要看具体情况。'
      }
    ]
  },
  {
    id: 'modern-education-challenges',
    title: '现代教育面临的挑战',
    summary: '专业化发展、学科分化等现代特征带来了新的教育挑战，需要我们重新审视教育模式。',
    content: '现代教育体系在取得巨大成就的同时，也面临着一些值得思考的问题。过度专业化导致了学科间的隔阂，学生难以形成整体性的认知框架。理性主义倾向可能忽视直觉、想象等非理性因素在学习中的作用。这些挑战促使我们探索更加综合、平衡的教育方式，培养学生的整体思维能力和创新精神。',
    examples: [
      {
        id: 'specialization-dilemma',
        title: '专业化的困境',
        description: '物理学家不懂生物学，社会学家不了解自然科学，学科壁垒日益明显。',
        analogy: '就像专科医生只看自己领域，缺乏整体的健康观念。',
        relevance: '说明过度专业化可能阻碍知识的整体性和综合性发展。'
      },
      {
        id: 'intuition-importance',
        title: '直觉的重要性',
        description: '许多科学发现都源于科学家的直觉和灵感，而不仅仅是逻辑推理。',
        analogy: '就像艺术家创作需要灵感，科学发现也需要直觉和想象。',
        relevance: '强调理性与非理性因素在知识发展中的互补作用。'
      }
    ],
    keyConcepts: [
      {
        id: 'interdisciplinary-integration',
        term: '跨学科整合',
        definition: '打破学科界限，整合不同领域知识和方法的思维方式。',
        simpleExplanation: '就像做一道复杂的菜，需要结合营养学、烹饪技巧和艺术审美。'
      },
      {
        id: 'holistic-thinking',
        term: '整体思维',
        definition: '从整体角度思考问题，关注各部分之间的联系和相互作用。',
        simpleExplanation: '就像看一幅画，不仅看局部，更要看整体效果和意境。'
      },
      {
        id: 'innovative-spirit',
        term: '创新精神',
        definition: '突破传统思维模式，提出新观点和新方法的意识和能力。',
        simpleExplanation: '就像用积木搭出新奇的作品，创新精神是用知识创造新事物。'
      }
    ]
  },
  {
    id: 'alternative-education-approaches',
    title: '创新教育理念的探索',
    summary: '为应对现代教育的挑战，教育界提出了多种创新理念，为教育发展提供新的可能性。',
    content: '面对传统教育模式的局限，教育工作者和学者们提出了多种创新性的教育理念。文化主义强调教育要考虑文化背景的影响，相对主义关注不同视角下的知识理解，多元化倡导多种认知方式并存，情境主义突出学习环境的重要性。这些新理念为构建更加包容、灵活的教育体系提供了理论支撑。',
    examples: [
      {
        id: 'cultural-diversity',
        title: '文化多样性的价值',
        description: '不同文化背景下的教育传统和方法各有特色，值得相互借鉴。',
        analogy: '就像中餐和西餐各有特色，不同教育体系也有各自的优势。',
        relevance: '说明教育要考虑文化背景，不能简单照搬他国模式。'
      },
      {
        id: 'multiple-perspectives',
        title: '多元视角的重要性',
        description: '同一问题从不同角度看会有不同理解，培养多元思维很重要。',
        analogy: '就像横看成岭侧成峰，从不同角度看问题会得到不同结论。',
        relevance: '强调培养学生从不同角度思考问题的能力。'
      }
    ],
    keyConcepts: [
      {
        id: 'cultural-sensitivity',
        term: '文化敏感性',
        definition: '在教育中考虑和尊重不同文化背景的能力和意识。',
        simpleExplanation: '就像去别人家做客要尊重主人的习惯，教育也要尊重学生的文化背景。'
      },
      {
        id: 'perspective-thinking',
        term: '视角思维',
        definition: '能够站在不同角度思考问题，理解不同观点的能力。',
        simpleExplanation: '就像换位思考，尝试理解别人的想法和感受。'
      },
      {
        id: 'contextual-learning',
        term: '情境化学习',
        definition: '将学习内容置于真实或模拟的情境中，提高学习的相关性和有效性。',
        simpleExplanation: '就像学游泳要在水里练习，真正的学习需要在具体情境中进行。'
      }
    ]
  },
  {
    id: 'educational-transformation-direction',
    title: '教育变革的方向指引',
    summary: '知识观的转变要求教育在目标、内容和方法上进行相应调整，培养适应新时代需求的人才。',
    content: '随着对知识本质认识的深化，教育变革成为必然趋势。在教育目标上，要从单纯的知识积累转向批判性思维和创新能力的培养；在内容选择上，要打破学科壁垒，重视知识的联系性和应用性；在教学过程中，要从单向传授转向互动交流，鼓励学生主动探索和合作学习。这种转变将重新定义教与学的方式。',
    examples: [
      {
        id: 'critical-thinking-cultivation',
        title: '批判性思维的培养',
        description: '不盲从权威，敢于质疑既有观点，这是创新人才的重要品质。',
        analogy: '就像不盲目相信广告，要学会辨别信息的真伪和价值。',
        relevance: '强调教育要培养学生的独立思考和判断能力。'
      },
      {
        id: 'integrated-problem-solving',
        title: '综合问题解决能力',
        description: '现实问题往往涉及多个领域，需要综合运用各种知识。',
        analogy: '就像治理环境污染，需要科学、经济、法律等多方面知识。',
        relevance: '说明培养学生跨学科综合思维能力的重要性。'
      }
    ],
    keyConcepts: [
      {
        id: 'critical-awareness',
        term: '批判意识',
        definition: '对既有观点和信息进行分析、评估和质疑的意识。',
        simpleExplanation: '就像侦探查案一样，不轻信表面现象，要深入分析证据。'
      },
      {
        id: 'innovative-ability',
        term: '创新能力',
        definition: '提出新观点、新方法，解决新问题的综合能力。',
        simpleExplanation: '就像发明家创造新东西，创新能力是用知识解决新问题的能力。'
      },
      {
        id: 'collaborative-learning',
        term: '协作学习',
        definition: '学习者通过小组合作，共同完成学习任务的学习方式。',
        simpleExplanation: '就像篮球队员相互配合才能赢球，学生合作能学得更好。'
      }
    ]
  }
];