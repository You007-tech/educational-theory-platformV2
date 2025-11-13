import React, { useState } from 'react';
import { PaperSection, LifeExample, KeyConcept } from '../data/paperContent';
import { quizQuestions, advancedQuizQuestions, getChapterQuiz } from '../data/quizData';
import InteractiveQuiz from './InteractiveQuiz';
import LearningProgress from './LearningProgress';
import CriticalAnalysis from './CriticalAnalysis';
import KnowledgeTimeline from './KnowledgeTimeline';
import KnowledgeMindMap from './KnowledgeMindMap';
import PolanyiTheoryDemo from './PolanyiTheoryDemo';
import KnowledgeTreeDemo from './KnowledgeTreeDemo';
import QuineTheoryDemo from './QuineTheoryDemo';
import AdvancedTheoryDashboard from './AdvancedTheoryDashboard';
import SociologyKnowledgeDemo from './SociologyKnowledgeDemo';
import CriticalThinkingDemo from './CriticalThinkingDemo';
import InterdisciplinaryResearchDemo from './InterdisciplinaryResearchDemo';
import CurriculumReformDemo from './CurriculumReformDemo';
import ArtScienceIntegrationDemo from './ArtScienceIntegrationDemo';
import InterdisciplinaryDesignDemo from './InterdisciplinaryDesignDemo';
import KnowledgeStoryTeaching from './KnowledgeStoryTeaching';
import TeachingActivityReform from './TeachingActivityReform';
import StudentRoleTransformation from './StudentRoleTransformation';
import ReflectiveTeaching from './ReflectiveTeaching';
import CollaborativeTeaching from './CollaborativeTeaching';
import DialogueTeachingArt from './DialogueTeachingArt';
import ActiveLearningPromotion from './ActiveLearningPromotion';
import { ChevronLeft, ChevronRight, Lightbulb, BookOpen, HelpCircle, ArrowLeft, ArrowRight, Brain, Trophy, Book, Target, BarChart3, Clock, BrainCircuit, Heart, Zap, Users, Puzzle, RefreshCw, GraduationCap, Palette, Layers, BookOpenText, Presentation, User, Search, MessageCircle, Handshake, Eye, Volume2 } from 'lucide-react';

interface PaperReaderProps {
  sections: PaperSection[];
  onBackToSelection?: () => void;
}

const PaperReader: React.FC<PaperReaderProps> = ({ sections, onBackToSelection }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showExamples, setShowExamples] = useState(false);
  const [showConcepts, setShowConcepts] = useState(false);
  const [selectedExample, setSelectedExample] = useState<LifeExample | null>(null);
  const [selectedConcept, setSelectedConcept] = useState<KeyConcept | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showAdvancedQuiz, setShowAdvancedQuiz] = useState(false);
  const [showChapterQuiz, setShowChapterQuiz] = useState(false);
  const [showCriticalAnalysis, setShowCriticalAnalysis] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showMindMap, setShowMindMap] = useState(false);
  const [showAdvancedTheories, setShowAdvancedTheories] = useState(false);
  const [showPolanyi, setShowPolanyi] = useState(false);
  const [showKnowledgeTree, setShowKnowledgeTree] = useState(false);
  const [showQuine, setShowQuine] = useState(false);
  const [showSociologyKnowledge, setShowSociologyKnowledge] = useState(false);
  const [showCriticalThinking, setShowCriticalThinking] = useState(false);
  const [showInterdisciplinaryResearch, setShowInterdisciplinaryResearch] = useState(false);
  const [showCurriculumReform, setShowCurriculumReform] = useState(false);
  const [showArtScienceIntegration, setShowArtScienceIntegration] = useState(false);
  const [showInterdisciplinaryDesign, setShowInterdisciplinaryDesign] = useState(false);
  const [showKnowledgeStory, setShowKnowledgeStory] = useState(false);
  const [showTeachingActivity, setShowTeachingActivity] = useState(false);
  const [showStudentRole, setShowStudentRole] = useState(false);
  const [showReflectiveTeaching, setShowReflectiveTeaching] = useState(false);
  const [showCollaborativeTeaching, setShowCollaborativeTeaching] = useState(false);
  const [showDialogueTeaching, setShowDialogueTeaching] = useState(false);
  const [showActiveLearning, setShowActiveLearning] = useState(false);

  const currentSection = sections[currentSectionIndex];

  const nextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setShowExamples(false);
      setShowConcepts(false);
      setSelectedExample(null);
      setSelectedConcept(null);
    }
  };

  const prevSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setShowExamples(false);
      setShowConcepts(false);
      setSelectedExample(null);
      setSelectedConcept(null);
    }
  };

  const goToSection = (index: number) => {
    setCurrentSectionIndex(index);
    setShowExamples(false);
    setShowConcepts(false);
    setShowQuiz(false);
    setShowAdvancedQuiz(false);
    setShowChapterQuiz(false);
    setShowCriticalAnalysis(false);
    setShowTimeline(false);
    setShowMindMap(false);
    setShowAdvancedTheories(false);
    setShowPolanyi(false);
    setShowKnowledgeTree(false);
    setShowQuine(false);
    setShowSociologyKnowledge(false);
    setShowCriticalThinking(false);
    setShowInterdisciplinaryResearch(false);
    setShowCurriculumReform(false);
    setShowArtScienceIntegration(false);
    setShowInterdisciplinaryDesign(false);
    setShowKnowledgeStory(false);
    setShowTeachingActivity(false);
    setShowStudentRole(false);
    setShowReflectiveTeaching(false);
    setShowCollaborativeTeaching(false);
    setShowDialogueTeaching(false);
    setShowActiveLearning(false);
    setSelectedExample(null);
    setSelectedConcept(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-800">
              教育理论学习平台
            </h1>
            {onBackToSelection && (
              <button
                onClick={onBackToSelection}
                className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <ArrowLeft size={16} />
                返回选择
              </button>
            )}
          </div>
          <p className="text-lg text-gray-600">全面版 - 深入探索教育理论</p>
          <p className="text-sm text-gray-500">基于现代教育理念构建的知识体系</p>
        </div>

        {/* Learning Progress */}
        <LearningProgress
          totalSections={sections.length}
          currentSection={currentSectionIndex}
          onSectionClick={goToSection}
        />

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">章节导航</h2>
            <div className="text-sm text-gray-500">
              {currentSectionIndex + 1} / {sections.length}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => goToSection(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  index === currentSectionIndex
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {index + 1}. {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {currentSection.title}
              </h2>
              
              {/* Summary Card */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <h3 className="font-semibold text-blue-800 mb-2">核心要点</h3>
                <p className="text-blue-700">{currentSection.summary}</p>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                <p>{currentSection.content}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => setShowExamples(!showExamples)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Lightbulb size={20} />
                  生活化例子
                </button>
                <button
                  onClick={() => setShowConcepts(!showConcepts)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <BookOpen size={20} />
                  核心概念
                </button>
                <button
                  onClick={() => setShowCriticalAnalysis(!showCriticalAnalysis)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <BarChart3 size={20} />
                  批判分析
                </button>
                <button
                  onClick={() => setShowTimeline(!showTimeline)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Clock size={20} />
                  时间线
                </button>
                <button
                  onClick={() => setShowMindMap(!showMindMap)}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  <BrainCircuit size={20} />
                  思维导图
                </button>
                <button
                  onClick={() => setShowChapterQuiz(!showChapterQuiz)}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  <Book size={20} />
                  章节测验
                </button>
                <button
                  onClick={() => setShowQuiz(!showQuiz)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Brain size={20} />
                  基础测验
                </button>
                <button
                  onClick={() => setShowAdvancedTheories(!showAdvancedTheories)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <Heart size={20} />
                  深度理论
                </button>
                <button
                  onClick={() => setShowAdvancedQuiz(!showAdvancedQuiz)}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Trophy size={20} />
                  进阶测验
                </button>
                <button
                  onClick={() => setShowSociologyKnowledge(!showSociologyKnowledge)}
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  <Users size={20} />
                  知识社会学
                </button>
                <button
                  onClick={() => setShowCriticalThinking(!showCriticalThinking)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <RefreshCw size={20} />
                  批判思维
                </button>
                <button
                  onClick={() => setShowInterdisciplinaryResearch(!showInterdisciplinaryResearch)}
                  className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                >
                  <Puzzle size={20} />
                  跨学科研究
                </button>
                <button
                  onClick={() => setShowCurriculumReform(!showCurriculumReform)}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  <GraduationCap size={20} />
                  课程结构改革
                </button>
                <button
                  onClick={() => setShowArtScienceIntegration(!showArtScienceIntegration)}
                  className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
                >
                  <Palette size={20} />
                  艺术科学融合
                </button>
                <button
                  onClick={() => setShowInterdisciplinaryDesign(!showInterdisciplinaryDesign)}
                  className="flex items-center gap-2 px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors"
                >
                  <Layers size={20} />
                  跨学科设计
                </button>
                <button
                  onClick={() => setShowKnowledgeStory(!showKnowledgeStory)}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  <BookOpenText size={20} />
                  知识故事化
                </button>
                <button
                  onClick={() => setShowTeachingActivity(!showTeachingActivity)}
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  <Presentation size={20} />
                  教学活动改革
                </button>
                <button
                  onClick={() => setShowStudentRole(!showStudentRole)}
                  className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <User size={20} />
                  学生角色转变
                </button>
                <button
                  onClick={() => setShowReflectiveTeaching(!showReflectiveTeaching)}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  <Search size={20} />
                  反思性教学
                </button>
                <button
                  onClick={() => setShowCollaborativeTeaching(!showCollaborativeTeaching)}
                  className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                >
                  <Handshake size={20} />
                  合作性教学
                </button>
                <button
                  onClick={() => setShowDialogueTeaching(!showDialogueTeaching)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <MessageCircle size={20} />
                  对话教学艺术
                </button>
                <button
                  onClick={() => setShowActiveLearning(!showActiveLearning)}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  <Eye size={20} />
                  主动学习促进
                </button>
              </div>

              {/* Examples Section */}
              {showExamples && (
                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">生活化例子</h3>
                  <div className="grid gap-4">
                    {currentSection.examples.map((example) => (
                      <div
                        key={example.id}
                        className="bg-white rounded-lg p-4 border border-green-200 cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => setSelectedExample(selectedExample?.id === example.id ? null : example)}
                      >
                        <h4 className="font-semibold text-green-800 mb-2">{example.title}</h4>
                        <p className="text-green-700 text-sm mb-2">{example.description}</p>
                        {selectedExample?.id === example.id && (
                          <div className="mt-3 pt-3 border-t border-green-200">
                            <div className="bg-green-100 p-3 rounded mb-2">
                              <p className="text-sm text-green-800">
                                <strong>类比：</strong> {example.analogy}
                              </p>
                            </div>
                            <p className="text-sm text-green-700">
                              <strong>相关意义：</strong> {example.relevance}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Concepts Section */}
              {showConcepts && (
                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">核心概念解析</h3>
                  <div className="grid gap-4">
                    {currentSection.keyConcepts.map((concept) => (
                      <div
                        key={concept.id}
                        className="bg-white rounded-lg p-4 border border-purple-200 cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => setSelectedConcept(selectedConcept?.id === concept.id ? null : concept)}
                      >
                        <div className="flex items-start gap-2">
                          <HelpCircle size={20} className="text-purple-500 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-purple-800 mb-1">{concept.term}</h4>
                            <p className="text-sm text-purple-700 mb-2">{concept.definition}</p>
                            {selectedConcept?.id === concept.id && (
                              <div className="mt-2 pt-2 border-t border-purple-200">
                                <p className="text-sm text-purple-600">
                                  <strong>简单理解：</strong> {concept.simpleExplanation}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quiz Section */}
              {showQuiz && (
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">基础测验</h3>
                  <InteractiveQuiz questions={quizQuestions} title="论文理解基础测验" />
                </div>
              )}

              {/* Chapter Quiz Section */}
              {showChapterQuiz && (
                <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-4">
                    章节专项测验 - {currentSection.title}
                  </h3>
                  {getChapterQuiz(currentSection.id).length > 0 ? (
                    <InteractiveQuiz 
                      questions={getChapterQuiz(currentSection.id)} 
                      title={`${currentSection.title}专项测验`} 
                    />
                  ) : (
                    <div className="text-center py-8">
                      <Target className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                      <p className="text-indigo-600">本章暂无专项测验，请使用基础或进阶测验来检验学习效果。</p>
                    </div>
                  )}
                </div>
              )}

              {/* Advanced Quiz Section */}
              {showAdvancedQuiz && (
                <div className="bg-orange-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">进阶测验</h3>
                  <InteractiveQuiz questions={advancedQuizQuestions} title="深度理解进阶测验" />
                </div>
              )}

              {/* Critical Analysis Section */}
              {showCriticalAnalysis && (
                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">现代知识增长方式批判分析</h3>
                  <CriticalAnalysis onComponentSelect={(component) => {
                    if (component === 'timeline') setShowTimeline(true);
                    if (component === 'mindmap') setShowMindMap(true);
                  }} />
                </div>
              )}

              {/* Knowledge Timeline Section */}
              {showTimeline && (
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">知识增长方式演变时间线</h3>
                  <KnowledgeTimeline />
                </div>
              )}

              {/* Knowledge Mind Map Section */}
              {showMindMap && (
                <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-4">知识观思维导图</h3>
                  <KnowledgeMindMap />
                </div>
              )}

              {/* Advanced Theories Dashboard */}
              {showAdvancedTheories && (
                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">第三页深度理论解析</h3>
                  <AdvancedTheoryDashboard onComponentSelect={(component) => {
                    if (component === 'polanyi') setShowPolanyi(true);
                    if (component === 'popper-tree') setShowKnowledgeTree(true);
                    if (component === 'quine') setShowQuine(true);
                  }} />
                </div>
              )}

              {/* Polanyi Theory */}
              {showPolanyi && (
                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">波兰尼"个人知识"理论</h3>
                  <PolanyiTheoryDemo />
                </div>
              )}

              {/* Knowledge Tree Demo */}
              {showKnowledgeTree && (
                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">波普尔"知识之树"理论</h3>
                  <KnowledgeTreeDemo />
                </div>
              )}

              {/* Quine Theory */}
              {showQuine && (
                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">奎因"知识基础不稳定性"理论</h3>
                  <QuineTheoryDemo />
                </div>
              )}

              {/* Sociology Knowledge */}
              {showSociologyKnowledge && (
                <div className="bg-cyan-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-cyan-800 mb-4">知识社会学理论</h3>
                  <SociologyKnowledgeDemo />
                </div>
              )}

              {/* Critical Thinking */}
              {showCriticalThinking && (
                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">批判性思维与知识增长</h3>
                  <CriticalThinkingDemo />
                </div>
              )}

              {/* Interdisciplinary Research */}
              {showInterdisciplinaryResearch && (
                <div className="bg-teal-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-teal-800 mb-4">跨学科合作研究模式</h3>
                  <InterdisciplinaryResearchDemo />
                </div>
              )}

              {/* Curriculum Reform */}
              {showCurriculumReform && (
                <div className="bg-emerald-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-4">课程结构改革</h3>
                  <CurriculumReformDemo />
                </div>
              )}

              {/* Art-Science Integration */}
              {showArtScienceIntegration && (
                <div className="bg-rose-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-rose-800 mb-4">艺术教育与科学教育融合</h3>
                  <ArtScienceIntegrationDemo />
                </div>
              )}

              {/* Interdisciplinary Design */}
              {showInterdisciplinaryDesign && (
                <div className="bg-violet-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-violet-800 mb-4">跨学科课程设计</h3>
                  <InterdisciplinaryDesignDemo />
                </div>
              )}

              {/* Knowledge Story Teaching */}
              {showKnowledgeStory && (
                <div className="bg-amber-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-amber-800 mb-4">知识故事化教学</h3>
                  <KnowledgeStoryTeaching />
                </div>
              )}

              {/* Teaching Activity Reform */}
              {showTeachingActivity && (
                <div className="bg-cyan-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-cyan-800 mb-4">教学活动改革</h3>
                  <TeachingActivityReform />
                </div>
              )}

              {/* Student Role Transformation */}
              {showStudentRole && (
                <div className="bg-pink-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-pink-800 mb-4">学生角色转变</h3>
                  <StudentRoleTransformation />
                </div>
              )}

              {/* Reflective Teaching */}
              {showReflectiveTeaching && (
                <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-4">反思性教学模式</h3>
                  <ReflectiveTeaching />
                </div>
              )}

              {/* Collaborative Teaching */}
              {showCollaborativeTeaching && (
                <div className="bg-teal-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-teal-800 mb-4">合作性教学模式</h3>
                  <CollaborativeTeaching />
                </div>
              )}

              {/* Dialogue Teaching Art */}
              {showDialogueTeaching && (
                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">对话式教学艺术</h3>
                  <DialogueTeachingArt />
                </div>
              )}

              {/* Active Learning Promotion */}
              {showActiveLearning && (
                <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">学生主动学习促进</h3>
                  <ActiveLearningPromotion />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevSection}
            disabled={currentSectionIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              currentSectionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <ArrowLeft size={20} />
            上一节
          </button>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">当前章节</p>
            <p className="font-semibold text-gray-800">{currentSection.title}</p>
          </div>

          <button
            onClick={nextSection}
            disabled={currentSectionIndex === sections.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              currentSectionIndex === sections.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            下一节
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaperReader;