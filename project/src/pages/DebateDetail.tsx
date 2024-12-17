import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Users, Share2, Bookmark, ThumbsUp, ChevronDown, ChevronUp } from 'lucide-react';
import CommentSection from '../components/community/CommentSection';
import { Comment } from '../types/community';
import { debates } from '../data/debates';

const DebateDetail = () => {
  const { debateId } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Find the correct debate from our data
  const debate = debates.find(d => d.id === debateId);

  // If debate not found, redirect to community page
  if (!debate) {
    return <Navigate to="/community" replace />;
  }

  // Mock comments data specific to this debate
  const comments: Comment[] = [
    {
      id: '1',
      type: 'argument',
      content: `P1: 如果对某人提出道德指控，那么这种指控必须有证据支持

P2: 如果确实证据公开怀疑某人的道德品质，那么这种怀疑会对当事人造成实际伤害。

P3: 如果某种行为会造成伤害，且缺乏证据与正当理由，那么这种行为在道德上不能被允许

P4: 在现代社会，对女性的不尊重被认为是极其严重的道德过错

P5: 如果某个群体长期处于受压迫地位，那么相关议题会形成特定的社会预设

P6: 男性在历史上对女性进行了长期的性压迫

P7: 在当代社会语境下，如果某人被怀疑存在性骚扰等道德问题，那么即使缺乏证据也会受到社会惩罚

P8: 如果允许无证据的公开怀疑，那么任何人都可能成为被随意指控的对象

P9: 正义的实现应当以最小化整体社会伤害为准则

C1: 性侵害、性骚扰等行为被默认为男性对女性的伤害（由P5、P6推得）

C2: 在性骚扰相关指控中，男性往往被默认为施害者（由C1推得）

C3: 女权作为政治正确，可能被用作不容质疑的指控工具（由P4、C2推得）

C4: 公开怀疑等同于指控（由P2、P7推得）

C5: 无证据的公开怀疑在道德上不能被允许（由P1、P2、P3、C4推得）

C6: 虽然坚持要求证据可能导致部分受害者难以维权，但允许无证据指控会造成更大的社会伤害（由P8、P9推得）

C7: 没有证据，就不能怀疑（总结论，由C5、C6推得）`,
      author: {
        id: '2',
        name: '那纸ol',
        avatar: 'https://images.pexels.com/photos/18111149/pexels-photo-18111149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      createdAt: '2024-02-28T10:30:00Z',
      stance: 'against',
      likes: 15,
      replies: [
        {
          id: '1-1',
          type: 'rebuttal',
          content: `在女性（或者把受害群体放宽一点包括男性，统一称为可能受害者）在怀疑自己被偷拍的时候，是没有任何可能的可以获得的证据的。

她们怀疑自己被偷拍的原因，只来自对方举起的把摄像头对准他们的手机，在怀疑情境中，她们一无法确认对方是否确实在拍照，二无法确认对方的拍摄对象是否为她们自己，三无法确认这种拍摄到底是无意还是有意。

即使把拍照环境放在日本，人在公共场合拍照时必然会发出提示音，后两种存疑的情境依然存在。因此，可能受害者在面临自己可能被偷拍的问题时，怀疑只能作为怀疑存在，除非她们要求检查对方的手机以确认自己是否真的被偷拍。

所以如果遵循没有证据就不能怀疑的原则，在偷拍事件中，没有任何一个可能受害者可以采取任何措施以确认自己是否被偷拍并进一步索要赔偿。

进一步说，没有证据就不能怀疑的原则在偷拍事件中，完完全全杜绝了任何可能的维权方式，是对可能偷拍者的完全的妥协。为了降低偷拍诬告事件发生的概率，措施应该指向偷拍行为的发生者而不是可能受害者。

没有证据就不能怀疑的原则如果实施，确实能完全杜绝偷拍诬告事件的发生，但同时也完全封闭了真正受害者的生存空间，是一刀切式的解决方案。更合理的方式应该是对偷拍行为的发生者进行教育引导，并且这种教育引导应该在其幼年青年时期就已经完成，比如性教育的普及之类的，除此以外，日本法律中在公共场合拍照必须有提示音这一规定，事实上是在为可能受害者提供要求维权的证据，必须采取措施使可能受害者在偷拍事件中能够拥有更充足的理由提出对可能偷拍者的控诉。

最后进行一点小反驳，由于地铁偷拍事件和地铁偷拍诬告事件都在发生且后者的关注度由于性别冲突高于前者，所以在可能受害者公开宣布自己被偷拍时，旁观者的反应（尤其是与偷拍者为同一性别且可能做出偷拍行为的旁观者）很有可能为把可能受害者归为无病呻吟的范畴，忽视女性（被偷拍者高发于女性）被性骚扰的可能性高于男性的这一事实，因此说女性一旦宣告自己被偷拍就站在道德高点是不恰当的。`,
          author: {
            id: '3',
            name: 'Emily Rodriguez',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces',
          },
          createdAt: '2024-02-28T11:00:00Z',
          stance: 'for',
          likes: 8,
        },
      ],
    },
    {
      id: '2',
      type: 'rebuttal',
      content: `我认为在这个问题上需要平衡两个重要的价值：个人权益保护和社会秩序维护。

虽然AI确实能够辅助分析和推理，但我们不能完全依赖它来做出判断。人类的道德直觉和经验判断在处理复杂的伦理问题时仍然是不可或缺的。

我们需要建立一个更完善的机制，既能保护可能的受害者，又能防止无端指控对他人造成伤害。`,
      author: {
        id: '4',
        name: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces',
      },
      createdAt: '2024-02-28T12:00:00Z',
      stance: 'against',
      likes: 12,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
      >
        {/* Debate Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={debate.author.avatar}
              alt={debate.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-medium text-gray-900">{debate.author.name}</h3>
              <p className="text-sm text-gray-500">
                {new Date(debate.createdAt).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{debate.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {debate.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Toggle Details Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            {showDetails ? (
              <>
                <ChevronUp className="w-5 h-5" />
                隐藏详情
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5" />
                显示详情
              </>
            )}
          </button>
        </div>

        {/* Collapsible Debate Content */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6">
                <p className="text-gray-600 whitespace-pre-line">{debate.summary}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Bar */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 ${
                isLiked ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <ThumbsUp className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} />
              <span>赞</span>
            </button>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5" />
              <span>{debate.participantsCount} 参与者</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MessageSquare className="w-5 h-5" />
              <span>{debate.commentsCount} 思考</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center gap-2 ${
                isBookmarked ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Bookmark className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} />
              <span>收藏</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Share2 className="w-5 h-5" />
              <span>分享</span>
            </button>
          </div>
        </div>
      </motion.article>

      {/* Comments Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <CommentSection comments={comments} />
      </motion.div>
    </div>
  );
};

export default DebateDetail;