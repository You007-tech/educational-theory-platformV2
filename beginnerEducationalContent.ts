export interface SimpleExample {
  id: string;
  title: string;
  everydayExample: string;
  educationalInsight: string;
  keyTakeaway: string;
}

export interface CoreIdea {
  id: string;
  concept: string;
  simpleExplanation: string;
  whyItMatters: string;
  practicalApplication: string;
}

export interface BeginnerSection {
  id: string;
  title: string;
  mainIdea: string;
  simpleSummary: string;
  examples: SimpleExample[];
  coreIdeas: CoreIdea[];
}

export const beginnerEducationalContent: BeginnerSection[] = [
  {
    id: 'what-is-knowledge',
    title: '什么是知识？',
    mainIdea: '知识不是一成不变的真理，而是随着人类认知不断发展的理解。',
    simpleSummary: '想象一下，如果你有一部手机，十年前它只能打电话发短信，现在却能上网、拍照、导航。知识也是这样，它随着时代发展而不断更新。今天的"真理"，明天可能被新的发现所补充或修正。',
    examples: [
      {
        id: 'map-example',
        title: '地图的演变',
        everydayExample: '你用手机导航时，会发现路线经常更新，因为道路在变化，地图信息也在更新。',
        educationalInsight: '这说明知识是动态的，需要不断更新和完善。',
        keyTakeaway: '学习不是记住固定答案，而是学会如何适应变化。'
      },
      {
        id: 'medical-example',
        title: '医学的进步',
        everydayExample: '过去人们认为感冒要"捂汗"，现在我们知道要多喝水、适当休息。',
        educationalInsight: '随着科学进步，我们对健康的认识也在不断更新。',
        keyTakeaway: '保持开放心态，接受新的知识和观点。'
      },
      {
        id: 'weather-example',
        title: '天气预报',
        everydayExample: '天气预报有时会不准，因为大气变化很复杂，预测模型需要不断改进。',
        educationalInsight: '复杂问题的知识总是在不断完善中。',
        keyTakeaway: '面对不确定性，要学会灵活应对。'
      }
    ],
    coreIdeas: [
      {
        id: 'knowledge-changes',
        concept: '知识会变化',
        simpleExplanation: '就像软件需要更新，知识也会随着新发现而更新。',
        whyItMatters: '如果认为知识是固定不变的，就可能拒绝接受新观点。',
        practicalApplication: '在学习中保持好奇心，关注学科的最新发展。'
      },
      {
        id: 'cultural-influence',
        concept: '文化影响知识',
        simpleExplanation: '不同文化背景的人可能对同一事物有不同理解。',
        whyItMatters: '理解这一点有助于我们尊重不同观点，避免偏见。',
        practicalApplication: '在学习中考虑不同文化视角，培养包容心态。'
      },
      {
        id: 'context-matters',
        concept: '情境很重要',
        simpleExplanation: '同一知识在不同情况下可能有不同应用。',
        whyItMatters: '避免生搬硬套，要学会根据具体情况灵活运用。',
        practicalApplication: '学习时思考知识的适用条件和局限性。'
      }
    ]
  },
  {
    id: 'learning-challenges',
    title: '现代学习的挑战',
    mainIdea: '信息爆炸时代，我们需要新的学习策略来应对复杂多变的世界。',
    simpleSummary: '想象你在一个巨大的图书馆里，书太多了，你不可能读完所有的书。现代社会就像这个图书馆，信息太多，专业化程度很高。我们需要学会如何有效学习，如何在不同领域之间建立联系。',
    examples: [
      {
        id: 'specialization-example',
        title: '专业化现象',
        everydayExample: '医院里有很多专科医生，眼科医生不看牙科，牙科医生不治疗心脏病。',
        educationalInsight: '专业化提高了效率，但也可能造成知识割裂。',
        keyTakeaway: '要在专业深度和知识广度之间找到平衡。'
      },
      {
        id: 'information-overload',
        title: '信息过载',
        everydayExample: '你在网上搜索一个问题，会得到成千上万个答案，不知道相信哪个。',
        educationalInsight: '需要培养辨别信息真伪和价值的能力。',
        keyTakeaway: '学会筛选和判断信息，而不是被动接受所有信息。'
      },
      {
        id: 'intuition-role',
        title: '直觉的作用',
        everydayExample: '有时候你会"感觉"某个决定是对的，虽然说不清楚原因。',
        educationalInsight: '除了理性分析，直觉和情感也是重要的认知方式。',
        keyTakeaway: '在学习中既要运用理性思维，也要重视直觉感受。'
      }
    ],
    coreIdeas: [
      {
        id: 'balance-specialization',
        concept: '平衡专业化',
        simpleExplanation: '既要深入学习某个领域，也要了解其他相关领域。',
        whyItMatters: '现实世界的问题往往涉及多个领域，需要综合知识。',
        practicalApplication: '选择主修专业的同时，也学习一些跨学科课程。'
      },
      {
        id: 'critical-thinking',
        concept: '培养批判思维',
        simpleExplanation: '不盲目相信所有信息，要学会质疑和分析。',
        whyItMatters: '在信息泛滥的时代，批判思维帮助我们辨别真伪。',
        practicalApplication: '阅读时思考作者的观点是否有根据，是否有偏见。'
      },
      {
        id: 'whole-brain-learning',
        concept: '全脑学习',
        simpleExplanation: '同时运用逻辑思维和创造性思维。',
        whyItMatters: '复杂问题需要多种思维方式才能解决。',
        practicalApplication: '学习时既要用逻辑分析，也要发挥想象力和创造力。'
      }
    ]
  },
  {
    id: 'new-education-ideas',
    title: '新的教育理念',
    mainIdea: '为应对挑战，教育界提出了许多创新理念，让学习更加有效和有趣。',
    simpleSummary: '想象学习不再是死记硬背，而是像探险一样有趣。新的教育理念强调从多个角度理解问题，考虑不同的文化背景，在真实情境中学习。这就像学习游泳，最好的方式是在水里练习，而不是只在岸上看书。',
    examples: [
      {
        id: 'cultural-learning',
        title: '文化视角学习',
        everydayExample: '学习历史时，了解同一事件在不同国家的教科书中可能有不同描述。',
        educationalInsight: '理解知识的文化背景，培养多元视角。',
        keyTakeaway: '学会从多个角度看待问题，避免单一视角的局限。'
      },
      {
        id: 'contextual-learning',
        title: '情境化学习',
        everydayExample: '学数学时，用超市购物、烹饪等生活场景来理解数学概念。',
        educationalInsight: '在真实情境中学习，知识更容易理解和记忆。',
        keyTakeaway: '将抽象概念与具体情境联系起来，提高学习效果。'
      },
      {
        id: 'multiple-intelligences',
        title: '多元智能',
        everydayExample: '有些人擅长数学，有些人擅长音乐，有些人擅长运动。',
        educationalInsight: '每个人都有不同的学习风格和能力特点。',
        keyTakeaway: '找到适合自己的学习方式，发挥自己的优势。'
      }
    ],
    coreIdeas: [
      {
        id: 'respect-diversity',
        concept: '尊重多样性',
        simpleExplanation: '接受和欣赏不同的观点和方法。',
        whyItMatters: '多元化思维有助于创新和问题解决。',
        practicalApplication: '在小组讨论中倾听不同意见，学习他人观点。'
      },
      {
        id: 'learn-by-doing',
        concept: '做中学',
        simpleExplanation: '通过实践和体验来学习，而不仅仅是理论学习。',
        whyItMatters: '实践中的学习更深刻，更容易应用到实际中。',
        practicalApplication: '参加实验、实习、项目等实践活动。'
      },
      {
        id: 'personalized-learning',
        concept: '个性化学习',
        simpleExplanation: '根据自己的特点和需求来调整学习方式。',
        whyItMatters: '每个人的学习风格不同，找到适合自己的方法很重要。',
        practicalApplication: '了解自己的学习偏好，选择适合自己的学习策略。'
      }
    ]
  },
  {
    id: 'future-education-trends',
    title: '教育的未来方向',
    mainIdea: '未来教育将更加注重培养批判性思维、创新能力和合作精神。',
    simpleSummary: '想象未来的学校，不再是老师讲课学生听课，而是学生主动探索，老师作为引导者。学习不再是记忆标准答案，而是学会提出问题、寻找答案、与他人合作解决真实问题。这就像从观众变成演员，从被动接受变成主动创造。',
    examples: [
      {
        id: 'question-learning',
        title: '问题驱动学习',
        everydayExample: '不是先学知识再解决问题，而是先有问题，再学习解决它需要的知识。',
        educationalInsight: '真实的问题能激发学习动机和探索欲望。',
        keyTakeaway: '学会提出问题比记住答案更重要。'
      },
      {
        id: 'collaborative-problem-solving',
        title: '协作解决问题',
        everydayExample: '像维基百科一样，很多人一起合作创造知识。',
        educationalInsight: '通过合作，可以产生比个人更丰富的成果。',
        keyTakeaway: '学会与他人合作，共同创造知识。'
      },
      {
        id: 'creative-expression',
        title: '创造性表达',
        everydayExample: '用视频、音乐、绘画等多种方式来表达学到的知识。',
        educationalInsight: '不同的表达方式有助于深化理解和创新。',
        keyTakeaway: '找到适合自己和他人的方式来表达和分享知识。'
      }
    ],
    coreIdeas: [
      {
        id: 'problem-first',
        concept: '问题优先',
        simpleExplanation: '从真实问题出发，学习解决问题所需的知识。',
        whyItMatters: '这样学习更有目的性，也更容易记住和应用。',
        practicalApplication: '在学习中主动寻找和提出有意义的问题。'
      },
      {
        id: 'collaboration-skills',
        concept: '协作技能',
        simpleExplanation: '学会与他人一起工作，发挥各自的优势。',
        whyItMatters: '现代社会复杂问题需要团队合作才能解决。',
        practicalApplication: '参与小组项目，学习沟通、协调、合作。'
      },
      {
        id: 'innovation-mindset',
        concept: '创新心态',
        simpleExplanation: '敢于尝试新方法，不怕失败。',
        whyItMatters: '创新是推动社会进步的重要力量。',
        practicalApplication: '在学习中尝试不同的方法，勇于实验和探索。'
      }
    ]
  }
];