// Sentence bank for Chinese dictation practice, organized by HSK level.
// Each entry: { hanzi, pinyin, english }
const SENTENCE_BANK = {
  1: [
    { hanzi: "你好吗？", pinyin: "Nǐ hǎo ma?", english: "How are you?" },
    { hanzi: "我是学生。", pinyin: "Wǒ shì xué shēng.", english: "I am a student." },
    { hanzi: "谢谢你。", pinyin: "Xiè xie nǐ.", english: "Thank you." },
    { hanzi: "现在几点？", pinyin: "Xiàn zài jǐ diǎn?", english: "What time is it now?" },
    { hanzi: "我喜欢喝茶。", pinyin: "Wǒ xǐ huan hē chá.", english: "I like to drink tea." },
    { hanzi: "他是我的朋友。", pinyin: "Tā shì wǒ de péng you.", english: "He is my friend." },
    { hanzi: "今天天气很好。", pinyin: "Jīn tiān tiān qì hěn hǎo.", english: "The weather is very good today." },
    { hanzi: "我们去学校。", pinyin: "Wǒ men qù xué xiào.", english: "We are going to school." },
    { hanzi: "这是我的书。", pinyin: "Zhè shì wǒ de shū.", english: "This is my book." },
    { hanzi: "我很高兴认识你。", pinyin: "Wǒ hěn gāo xìng rèn shi nǐ.", english: "I'm very happy to meet you." }
  ],
  2: [
    { hanzi: "我每天都去公司上班。", pinyin: "Wǒ měi tiān dōu qù gōng sī shàng bān.", english: "I go to work at the company every day." },
    { hanzi: "你能帮我一下吗？", pinyin: "Nǐ néng bāng wǒ yí xià ma?", english: "Can you help me for a moment?" },
    { hanzi: "昨天晚上我看了一部电影。", pinyin: "Zuó tiān wǎn shang wǒ kàn le yí bù diàn yǐng.", english: "Last night I watched a movie." },
    { hanzi: "请把窗户打开。", pinyin: "Qǐng bǎ chuāng hu dǎ kāi.", english: "Please open the window." },
    { hanzi: "他比我高一点儿。", pinyin: "Tā bǐ wǒ gāo yì diǎnr.", english: "He is a bit taller than me." },
    { hanzi: "我想买一件新衣服。", pinyin: "Wǒ xiǎng mǎi yí jiàn xīn yī fu.", english: "I want to buy a new piece of clothing." },
    { hanzi: "从这里到火车站要多长时间？", pinyin: "Cóng zhè lǐ dào huǒ chē zhàn yào duō cháng shí jiān?", english: "How long does it take from here to the train station?" },
    { hanzi: "她正在厨房做饭。", pinyin: "Tā zhèng zài chú fáng zuò fàn.", english: "She is cooking in the kitchen." },
    { hanzi: "我觉得这个问题很有意思。", pinyin: "Wǒ jué de zhè ge wèn tí hěn yǒu yì si.", english: "I think this question is very interesting." },
    { hanzi: "周末我们一起去爬山吧。", pinyin: "Zhōu mò wǒ men yì qǐ qù pá shān ba.", english: "Let's go hiking together this weekend." }
  ],
  3: [
    { hanzi: "虽然外面下雨了，但是我们还是决定出去。", pinyin: "Suī rán wài miàn xià yǔ le, dàn shì wǒ men hái shi jué dìng chū qù.", english: "Although it's raining outside, we still decided to go out." },
    { hanzi: "你最好把这些资料准备好。", pinyin: "Nǐ zuì hǎo bǎ zhè xiē zī liào zhǔn bèi hǎo.", english: "You'd better get these materials ready." },
    { hanzi: "他对中国历史很感兴趣。", pinyin: "Tā duì zhōng guó lì shǐ hěn gǎn xìng qù.", english: "He is very interested in Chinese history." },
    { hanzi: "这家餐厅的服务态度非常好。", pinyin: "Zhè jiā cān tīng de fú wù tài du fēi cháng hǎo.", english: "This restaurant's service attitude is very good." },
    { hanzi: "我们应该按照计划完成任务。", pinyin: "Wǒ men yīng gāi àn zhào jì huà wán chéng rèn wu.", english: "We should complete the task according to the plan." },
    { hanzi: "由于交通堵塞，他迟到了半个小时。", pinyin: "Yóu yú jiāo tōng dǔ sè, tā chí dào le bàn ge xiǎo shí.", english: "Due to the traffic jam, he was half an hour late." },
    { hanzi: "请大家保持安静。", pinyin: "Qǐng dà jiā bǎo chí ān jìng.", english: "Please everyone keep quiet." },
    { hanzi: "那部电影让我印象深刻。", pinyin: "Nà bù diàn yǐng ràng wǒ yìn xiàng shēn kè.", english: "That movie left a deep impression on me." },
    { hanzi: "经过努力，他终于成功了。", pinyin: "Jīng guò nǔ lì, tā zhōng yú chéng gōng le.", english: "After much effort, he finally succeeded." },
    { hanzi: "你放心，我一定会准时到的。", pinyin: "Nǐ fàng xīn, wǒ yí dìng huì zhǔn shí dào de.", english: "Don't worry, I will definitely arrive on time." }
  ],
  4: [
    { hanzi: "随着科技的发展，人们的生活越来越方便。", pinyin: "Suí zhe kē jì de fā zhǎn, rén men de shēng huó yuè lái yuè fāng biàn.", english: "With the development of technology, people's lives are becoming more and more convenient." },
    { hanzi: "这个决定对公司未来的发展至关重要。", pinyin: "Zhè ge jué dìng duì gōng sī wèi lái de fā zhǎn zhì guān zhòng yào.", english: "This decision is crucial to the company's future development." },
    { hanzi: "无论遇到什么困难，我们都不能放弃。", pinyin: "Wú lùn yù dào shén me kùn nan, wǒ men dōu bù néng fàng qì.", english: "No matter what difficulties we encounter, we cannot give up." },
    { hanzi: "他从小就对音乐表现出浓厚的兴趣。", pinyin: "Tā cóng xiǎo jiù duì yīn yuè biǎo xiàn chū nóng hòu de xìng qù.", english: "He has shown a strong interest in music since he was young." },
    { hanzi: "政府采取了一系列措施来保护环境。", pinyin: "Zhèng fǔ cǎi qǔ le yí xì liè cuò shī lái bǎo hù huán jìng.", english: "The government has taken a series of measures to protect the environment." },
    { hanzi: "只有不断学习，才能跟上时代的步伐。", pinyin: "Zhǐ yǒu bú duàn xué xí, cái néng gēn shàng shí dài de bù fá.", english: "Only by constantly learning can one keep up with the pace of the times." },
    { hanzi: "这项研究结果引起了广泛关注。", pinyin: "Zhè xiàng yán jiū jié guǒ yǐn qǐ le guǎng fàn guān zhù.", english: "This research result has attracted widespread attention." },
    { hanzi: "她把工作和家庭都安排得井井有条。", pinyin: "Tā bǎ gōng zuò hé jiā tíng dōu ān pái de jǐng jǐng yǒu tiáo.", english: "She has organized both work and family in an orderly manner." },
    { hanzi: "面对挑战，我们要保持积极的心态。", pinyin: "Miàn duì tiǎo zhàn, wǒ men yào bǎo chí jī jí de xīn tài.", english: "Facing challenges, we should maintain a positive attitude." },
    { hanzi: "这本书详细介绍了中国的传统文化。", pinyin: "Zhè běn shū xiáng xì jiè shào le zhōng guó de chuán tǒng wén huà.", english: "This book introduces Chinese traditional culture in detail." }
  ],
  5: [
    { hanzi: "在全球化的背景下，各国之间的联系日益紧密。", pinyin: "Zài quán qiú huà de bèi jǐng xià, gè guó zhī jiān de lián xì rì yì jǐn mì.", english: "In the context of globalization, the connections between countries are becoming increasingly close." },
    { hanzi: "他的观点虽然新颖，却缺乏足够的证据支持。", pinyin: "Tā de guān diǎn suī rán xīn yǐng, què quē fá zú gòu de zhèng jù zhī chí.", english: "Although his viewpoint is novel, it lacks sufficient evidence to support it." },
    { hanzi: "这场辩论涉及到许多复杂的社会问题。", pinyin: "Zhè chǎng biàn lùn shè jí dào xǔ duō fù zá de shè huì wèn tí.", english: "This debate involves many complex social issues." },
    { hanzi: "企业要想长远发展，必须注重创新。", pinyin: "Qǐ yè yào xiǎng cháng yuǎn fā zhǎn, bì xū zhù zhòng chuàng xīn.", english: "If an enterprise wants long-term development, it must focus on innovation." },
    { hanzi: "这种现象在当今社会中十分普遍。", pinyin: "Zhè zhǒng xiàn xiàng zài dāng jīn shè huì zhōng shí fēn pǔ biàn.", english: "This phenomenon is very common in today's society." },
    { hanzi: "他凭借扎实的专业知识赢得了大家的信任。", pinyin: "Tā píng jiè zhā shi de zhuān yè zhī shi yíng dé le dà jiā de xìn rèn.", english: "He earned everyone's trust with his solid professional knowledge." },
    { hanzi: "我们必须权衡利弊，做出明智的选择。", pinyin: "Wǒ men bì xū quán héng lì bì, zuò chū míng zhì de xuǎn zé.", english: "We must weigh the pros and cons and make a wise choice." },
    { hanzi: "这项政策的实施将对市场产生深远的影响。", pinyin: "Zhè xiàng zhèng cè de shí shī jiāng duì shì chǎng chǎn shēng shēn yuǎn de yǐng xiǎng.", english: "The implementation of this policy will have a profound impact on the market." },
    { hanzi: "尽管条件艰苦，科研人员依然坚持不懈。", pinyin: "Jǐn guǎn tiáo jiàn jiān kǔ, kē yán rén yuán yī rán jiān chí bú xiè.", english: "Despite the harsh conditions, the researchers still persevered." },
    { hanzi: "他在演讲中巧妙地引用了许多历史典故。", pinyin: "Tā zài yǎn jiǎng zhōng qiǎo miào de yǐn yòng le xǔ duō lì shǐ diǎn gù.", english: "He skillfully cited many historical allusions in his speech." }
  ],
  6: [
    { hanzi: "改革开放以来，中国经济取得了举世瞩目的成就。", pinyin: "Gǎi gé kāi fàng yǐ lái, zhōng guó jīng jì qǔ dé le jǔ shì zhǔ mù de chéng jiù.", english: "Since the reform and opening up, China's economy has achieved remarkable achievements." },
    { hanzi: "面对错综复杂的国际形势，各国需要加强合作。", pinyin: "Miàn duì cuò zōng fù zá de guó jì xíng shì, gè guó xū yào jiā qiáng hé zuò.", english: "Facing the complex international situation, countries need to strengthen cooperation." },
    { hanzi: "这部作品以其深刻的思想内涵而广受赞誉。", pinyin: "Zhè bù zuò pǐn yǐ qí shēn kè de sī xiǎng nèi hán ér guǎng shòu zàn yù.", english: "This work is widely praised for its profound ideological connotation." },
    { hanzi: "科学家们经过反复验证，最终得出了可靠的结论。", pinyin: "Kē xué jiā men jīng guò fǎn fù yàn zhèng, zuì zhōng dé chū le kě kào de jié lùn.", english: "After repeated verification, the scientists finally reached a reliable conclusion." },
    { hanzi: "人类社会的进步离不开一代又一代人的不懈努力。", pinyin: "Rén lèi shè huì de jìn bù lí bu kāi yí dài yòu yí dài rén de bú xiè nǔ lì.", english: "The progress of human society cannot be separated from the unremitting efforts of generation after generation." },
    { hanzi: "他的这番言论在网络上引发了轩然大波。", pinyin: "Tā de zhè fān yán lùn zài wǎng luò shàng yǐn fā le xuān rán dà bō.", english: "His remarks caused a huge uproar online." },
    { hanzi: "我们应当以辩证的眼光看待问题的两面性。", pinyin: "Wǒ men yīng dāng yǐ biàn zhèng de yǎn guāng kàn dài wèn tí de liǎng miàn xìng.", english: "We should view the duality of problems with a dialectical perspective." },
    { hanzi: "这场危机暴露出该行业长期存在的深层次矛盾。", pinyin: "Zhè chǎng wēi jī bào lù chū gāi háng yè cháng qī cún zài de shēn céng cì máo dùn.", english: "This crisis exposed the deep-seated contradictions that have long existed in the industry." },
    { hanzi: "只有站在历史的高度，才能真正理解这一变革的意义。", pinyin: "Zhǐ yǒu zhàn zài lì shǐ de gāo dù, cái néng zhēn zhèng lǐ jiě zhè yī biàn gé de yì yì.", english: "Only by standing at the height of history can one truly understand the significance of this transformation." },
    { hanzi: "他始终秉持严谨求实的态度对待学术研究。", pinyin: "Tā shǐ zhōng bǐng chí yán jǐn qiú shí de tài du duì dài xué shù yán jiū.", english: "He has always maintained a rigorous and pragmatic attitude towards academic research." }
  ]
};
