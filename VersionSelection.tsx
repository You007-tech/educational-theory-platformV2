import React, { useState } from 'react';
import { BookOpen, Heart, Users, Sparkles, ArrowRight, GraduationCap, Clock, Target } from 'lucide-react';

interface VersionSelectionProps {
  onVersionSelect: (version: 'comprehensive' | 'beginner') => void;
}

const VersionSelection: React.FC<VersionSelectionProps> = ({ onVersionSelect }) => {
  const [selectedVersion, setSelectedVersion] = useState<'comprehensive' | 'beginner' | null>(null);

  const handleVersionSelect = (version: 'comprehensive' | 'beginner') => {
    setSelectedVersion(version);
    setTimeout(() => {
      onVersionSelect(version);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <GraduationCap className="w-12 h-12 text-purple-600" />
            <Sparkles className="w-10 h-10 text-yellow-500" />
            <BookOpen className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            教育理论学习平台
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            探索现代教育理念，理解知识本质，提升教育认知
            <br />
            <span className="text-lg text-purple-600 font-medium">
              选择适合你的学习方式，开启教育理论之旅
            </span>
          </p>
        </div>

        {/* Version Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Beginner Version */}
          <div 
            className={`bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
              selectedVersion === 'beginner' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => handleVersionSelect('beginner')}
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">精简版</h2>
              <p className="text-gray-600 text-sm mb-4">适合初学者和无专业背景人士</p>
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                推荐新手
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">生活化举例</h3>
                  <p className="text-gray-600 text-xs">用日常例子理解复杂概念</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">节省时间</h3>
                  <p className="text-gray-600 text-xs">精华内容，快速掌握要点</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">易于理解</h3>
                  <p className="text-gray-600 text-xs">避免专业术语，通俗易懂</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-green-600 font-medium">
                <span>开始学习</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Comprehensive Version */}
          <div 
            className={`bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
              selectedVersion === 'comprehensive' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => handleVersionSelect('comprehensive')}
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">全面版</h2>
              <p className="text-gray-600 text-sm mb-4">适合深入学习和专业研究</p>
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                内容全面
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">内容丰富</h3>
                  <p className="text-gray-600 text-xs">涵盖完整理论体系</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">深度分析</h3>
                  <p className="text-gray-600 text-xs">深入探讨理论内涵</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">互动体验</h3>
                  <p className="text-gray-600 text-xs">多种互动学习工具</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                <span>深入学习</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">平台特色</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">生活化教学</h4>
              <p className="text-gray-600 text-sm">用日常例子解释复杂概念，让学习更轻松</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">循序渐进</h4>
              <p className="text-gray-600 text-sm">从基础到深入，适合不同水平的学习者</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">互动体验</h4>
              <p className="text-gray-600 text-sm">丰富的互动工具，让学习更有趣</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>选择适合你的学习方式，开始教育理论探索之旅</p>
        </div>
      </div>
    </div>
  );
};

export default VersionSelection;