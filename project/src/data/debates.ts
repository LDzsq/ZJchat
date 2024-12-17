import { DebatePost } from '../types/community';

export const debates: DebatePost[] = [
  {
    id: '1',
    title: "在没有充分证据的情况下，对他人进行涉及社会道德底线的身份指控或公开怀疑，是否应该被允许？",
    summary: "类似的案件还有张薇事件、清华学姐事件、朱军事件等。这些事件中，女性在缺乏确凿证据的情况下，对男性提出性骚扰或性侵害的指控，导致男性承受巨大的心理压力和网络暴力，甚至对其职业生涯造成严重打击。同样地，当男性毫无根据地指责女性为卖淫者时，也会对女性的身心健康造成严重伤害，令其承受巨大的心理压力。",
    author: {
      id: '1',
      name: '张三',
      avatar: 'https://images.pexels.com/photos/29696682/pexels-photo-29696682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    tags: ['法理辩', '性别议题', '伦理道德'],
    participantsCount: 24,
    commentsCount: 45,
    createdAt: '2024-02-28T10:00:00Z',
    isHot: true,
  }
];