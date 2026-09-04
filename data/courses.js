// Course/lesson content: translation-practice sentences (Vietnamese -> Chinese)
// Each sentence: { vi, hanzi, pinyin, segments } — segments are word-level chunks
// used by the "Ghép từ" (word-order assembly) exercise mode.
const COURSES = {
  hsk1: {
    id: "hsk1", title: "HSK 1", subtitle: "Cơ bản • ~150 từ vựng", color: "#22c07a", comingSoon: false,
    lessons: [
      {
        id: "hsk1-l1", title: "Chào hỏi & Giới thiệu bản thân",
        sentences: [
          { vi: "Xin chào!", hanzi: "你好！", pinyin: "Nǐ hǎo!", segments: ["你好！"] },
          { vi: "Bạn khỏe không?", hanzi: "你好吗？", pinyin: "Nǐ hǎo ma?", segments: ["你", "好", "吗？"] },
          { vi: "Tôi rất khỏe, cảm ơn bạn.", hanzi: "我很好，谢谢你。", pinyin: "Wǒ hěn hǎo, xièxie nǐ.", segments: ["我", "很好，", "谢谢", "你。"] },
          { vi: "Bạn tên là gì?", hanzi: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?", segments: ["你", "叫", "什么", "名字？"] },
          { vi: "Tôi tên là Lý Minh.", hanzi: "我叫李明。", pinyin: "Wǒ jiào Lǐ Míng.", segments: ["我", "叫", "李明。"] },
          { vi: "Rất vui được gặp bạn.", hanzi: "很高兴认识你。", pinyin: "Hěn gāoxìng rènshi nǐ.", segments: ["很高兴", "认识", "你。"] },
          { vi: "Tôi cũng rất vui được gặp bạn.", hanzi: "我也很高兴认识你。", pinyin: "Wǒ yě hěn gāoxìng rènshi nǐ.", segments: ["我", "也", "很高兴", "认识", "你。"] },
          { vi: "Bạn là người nước nào?", hanzi: "你是哪国人？", pinyin: "Nǐ shì nǎ guó rén?", segments: ["你", "是", "哪", "国人？"] },
          { vi: "Tôi là người Việt Nam.", hanzi: "我是越南人。", pinyin: "Wǒ shì Yuènán rén.", segments: ["我", "是", "越南人。"] },
          { vi: "Bạn là học sinh phải không?", hanzi: "你是学生吗？", pinyin: "Nǐ shì xuésheng ma?", segments: ["你", "是", "学生", "吗？"] },
          { vi: "Đúng vậy, tôi là học sinh.", hanzi: "对，我是学生。", pinyin: "Duì, wǒ shì xuésheng.", segments: ["对，", "我", "是", "学生。"] },
          { vi: "Anh ấy là giáo viên.", hanzi: "他是老师。", pinyin: "Tā shì lǎoshī.", segments: ["他", "是", "老师。"] },
          { vi: "Cô ấy không phải là bác sĩ.", hanzi: "她不是医生。", pinyin: "Tā bú shì yīshēng.", segments: ["她", "不是", "医生。"] },
          { vi: "Bạn năm nay bao nhiêu tuổi?", hanzi: "你今年多大？", pinyin: "Nǐ jīnnián duō dà?", segments: ["你", "今年", "多大？"] },
          { vi: "Tôi năm nay hai mươi tuổi.", hanzi: "我今年二十岁。", pinyin: "Wǒ jīnnián èrshí suì.", segments: ["我", "今年", "二十岁。"] },
          { vi: "Đây là bạn tôi.", hanzi: "这是我的朋友。", pinyin: "Zhè shì wǒ de péngyou.", segments: ["这", "是", "我的", "朋友。"] },
          { vi: "Đó là ai?", hanzi: "那是谁？", pinyin: "Nà shì shéi?", segments: ["那", "是", "谁？"] },
          { vi: "Đó là anh trai tôi.", hanzi: "那是我哥哥。", pinyin: "Nà shì wǒ gēge.", segments: ["那", "是", "我", "哥哥。"] },
          { vi: "Cảm ơn bạn rất nhiều.", hanzi: "非常感谢你。", pinyin: "Fēicháng gǎnxiè nǐ.", segments: ["非常", "感谢", "你。"] },
          { vi: "Không có gì.", hanzi: "不客气。", pinyin: "Bú kèqi.", segments: ["不客气。"] },
          { vi: "Xin lỗi, làm phiền bạn rồi.", hanzi: "对不起，打扰你了。", pinyin: "Duìbuqǐ, dǎrǎo nǐ le.", segments: ["对不起，", "打扰", "你", "了。"] },
          { vi: "Không sao đâu.", hanzi: "没关系。", pinyin: "Méi guānxi.", segments: ["没关系。"] },
          { vi: "Tạm biệt, hẹn gặp lại ngày mai.", hanzi: "再见，明天见。", pinyin: "Zàijiàn, míngtiān jiàn.", segments: ["再见，", "明天", "见。"] },
          { vi: "Chúc bạn ngủ ngon.", hanzi: "祝你晚安。", pinyin: "Zhù nǐ wǎn'ān.", segments: ["祝", "你", "晚安。"] },
          { vi: "Bạn ăn cơm chưa?", hanzi: "你吃饭了吗？", pinyin: "Nǐ chīfàn le ma?", segments: ["你", "吃饭", "了吗？"] },
          { vi: "Tôi ăn rồi.", hanzi: "我吃了。", pinyin: "Wǒ chī le.", segments: ["我", "吃", "了。"] },
          { vi: "Bạn đi đâu?", hanzi: "你去哪儿？", pinyin: "Nǐ qù nǎr?", segments: ["你", "去", "哪儿？"] },
          { vi: "Tôi đi học.", hanzi: "我去学校。", pinyin: "Wǒ qù xuéxiào.", segments: ["我", "去", "学校。"] },
          { vi: "Bạn có mấy anh chị em?", hanzi: "你有几个兄弟姐妹？", pinyin: "Nǐ yǒu jǐ ge xiōngdì jiěmèi?", segments: ["你", "有", "几个", "兄弟姐妹？"] },
          { vi: "Tôi có một em gái.", hanzi: "我有一个妹妹。", pinyin: "Wǒ yǒu yí ge mèimei.", segments: ["我", "有", "一个", "妹妹。"] }
        ]
      },
      {
        id: "hsk1-l2", title: "Gia đình, số đếm & sinh hoạt hàng ngày",
        sentences: [
          { vi: "Bây giờ mấy giờ rồi?", hanzi: "现在几点了？", pinyin: "Xiànzài jǐ diǎn le?", segments: ["现在", "几点", "了？"] },
          { vi: "Bây giờ ba giờ.", hanzi: "现在三点。", pinyin: "Xiànzài sān diǎn.", segments: ["现在", "三点。"] },
          { vi: "Hôm nay thứ mấy?", hanzi: "今天星期几？", pinyin: "Jīntiān xīngqī jǐ?", segments: ["今天", "星期几？"] },
          { vi: "Hôm nay thứ hai.", hanzi: "今天星期一。", pinyin: "Jīntiān xīngqīyī.", segments: ["今天", "星期一。"] },
          { vi: "Hôm nay là ngày mấy?", hanzi: "今天几号？", pinyin: "Jīntiān jǐ hào?", segments: ["今天", "几号？"] },
          { vi: "Hôm nay là mùng năm.", hanzi: "今天五号。", pinyin: "Jīntiān wǔ hào.", segments: ["今天", "五号。"] },
          { vi: "Tôi mỗi ngày bảy giờ dậy.", hanzi: "我每天七点起床。", pinyin: "Wǒ měitiān qī diǎn qǐchuáng.", segments: ["我", "每天", "七点", "起床。"] },
          { vi: "Tôi tám giờ đi học.", hanzi: "我八点去上学。", pinyin: "Wǒ bā diǎn qù shàngxué.", segments: ["我", "八点", "去", "上学。"] },
          { vi: "Buổi trưa tôi mười hai giờ ăn cơm.", hanzi: "中午我十二点吃饭。", pinyin: "Zhōngwǔ wǒ shí'èr diǎn chīfàn.", segments: ["中午", "我", "十二点", "吃饭。"] },
          { vi: "Buổi tối tôi mười giờ ngủ.", hanzi: "晚上我十点睡觉。", pinyin: "Wǎnshang wǒ shí diǎn shuìjiào.", segments: ["晚上", "我", "十点", "睡觉。"] },
          { vi: "Gia đình tôi có bốn người.", hanzi: "我家有四口人。", pinyin: "Wǒ jiā yǒu sì kǒu rén.", segments: ["我家", "有", "四口人。"] },
          { vi: "Bố tôi là bác sĩ.", hanzi: "我爸爸是医生。", pinyin: "Wǒ bàba shì yīshēng.", segments: ["我", "爸爸", "是", "医生。"] },
          { vi: "Mẹ tôi là giáo viên.", hanzi: "我妈妈是老师。", pinyin: "Wǒ māma shì lǎoshī.", segments: ["我", "妈妈", "是", "老师。"] },
          { vi: "Tôi có một anh trai và một em gái.", hanzi: "我有一个哥哥和一个妹妹。", pinyin: "Wǒ yǒu yí ge gēge hé yí ge mèimei.", segments: ["我", "有", "一个哥哥", "和", "一个妹妹。"] },
          { vi: "Anh trai tôi làm việc ở Bắc Kinh.", hanzi: "我哥哥在北京工作。", pinyin: "Wǒ gēge zài Běijīng gōngzuò.", segments: ["我", "哥哥", "在", "北京", "工作。"] },
          { vi: "Em gái tôi đang học đại học.", hanzi: "我妹妹在上大学。", pinyin: "Wǒ mèimei zài shàng dàxué.", segments: ["我", "妹妹", "在", "上", "大学。"] },
          { vi: "Nhà tôi có một con mèo.", hanzi: "我家有一只猫。", pinyin: "Wǒ jiā yǒu yì zhī māo.", segments: ["我家", "有", "一只猫。"] },
          { vi: "Tôi thích uống trà.", hanzi: "我喜欢喝茶。", pinyin: "Wǒ xǐhuan hē chá.", segments: ["我", "喜欢", "喝", "茶。"] },
          { vi: "Bạn thích ăn gì?", hanzi: "你喜欢吃什么？", pinyin: "Nǐ xǐhuan chī shénme?", segments: ["你", "喜欢", "吃", "什么？"] },
          { vi: "Tôi thích ăn cơm.", hanzi: "我喜欢吃米饭。", pinyin: "Wǒ xǐhuan chī mǐfàn.", segments: ["我", "喜欢", "吃", "米饭。"] },
          { vi: "Cái này bao nhiêu tiền?", hanzi: "这个多少钱？", pinyin: "Zhège duōshao qián?", segments: ["这个", "多少", "钱？"] },
          { vi: "Cái này mười tệ.", hanzi: "这个十块钱。", pinyin: "Zhège shí kuài qián.", segments: ["这个", "十块钱。"] },
          { vi: "Tôi muốn mua một cái áo.", hanzi: "我想买一件衣服。", pinyin: "Wǒ xiǎng mǎi yí jiàn yīfu.", segments: ["我", "想", "买", "一件", "衣服。"] },
          { vi: "Cửa hàng ở đâu?", hanzi: "商店在哪儿？", pinyin: "Shāngdiàn zài nǎr?", segments: ["商店", "在", "哪儿？"] },
          { vi: "Cửa hàng ở trước trường học.", hanzi: "商店在学校前面。", pinyin: "Shāngdiàn zài xuéxiào qiánmian.", segments: ["商店", "在", "学校", "前面。"] },
          { vi: "Hôm nay trời rất nóng.", hanzi: "今天天气很热。", pinyin: "Jīntiān tiānqì hěn rè.", segments: ["今天", "天气", "很热。"] },
          { vi: "Ngày mai sẽ trời mưa.", hanzi: "明天会下雨。", pinyin: "Míngtiān huì xiàyǔ.", segments: ["明天", "会", "下雨。"] },
          { vi: "Tôi không có thời gian.", hanzi: "我没有时间。", pinyin: "Wǒ méiyǒu shíjiān.", segments: ["我", "没有", "时间。"] },
          { vi: "Bạn có thể giúp tôi không?", hanzi: "你可以帮我吗？", pinyin: "Nǐ kěyǐ bāng wǒ ma?", segments: ["你", "可以", "帮", "我吗？"] },
          { vi: "Đương nhiên có thể.", hanzi: "当然可以。", pinyin: "Dāngrán kěyǐ.", segments: ["当然", "可以。"] }
        ]
      }
    ]
  },

  hsk2: {
    id: "hsk2", title: "HSK 2", subtitle: "Sơ cấp • ~300 từ vựng", color: "#00c2a8", comingSoon: false,
    lessons: [
      {
        id: "hsk2-l1", title: "Trường học, công việc & giao thông",
        sentences: [
          { vi: "Tôi đã học tiếng Trung được hai năm rồi.", hanzi: "我学汉语已经两年了。", pinyin: "Wǒ xué Hànyǔ yǐjīng liǎng nián le.", segments: ["我", "学", "汉语", "已经", "两年了。"] },
          { vi: "Bạn đã từng đi Trung Quốc chưa?", hanzi: "你去过中国吗？", pinyin: "Nǐ qùguo Zhōngguó ma?", segments: ["你", "去过", "中国吗？"] },
          { vi: "Tôi chưa từng đi qua.", hanzi: "我没去过。", pinyin: "Wǒ méi qùguo.", segments: ["我", "没", "去过。"] },
          { vi: "Anh ấy đang viết bài tập.", hanzi: "他正在写作业。", pinyin: "Tā zhèngzài xiě zuòyè.", segments: ["他", "正在", "写", "作业。"] },
          { vi: "Cô giáo nói tiếng Trung rất nhanh.", hanzi: "老师说汉语说得很快。", pinyin: "Lǎoshī shuō Hànyǔ shuō de hěn kuài.", segments: ["老师", "说", "汉语", "说得", "很快。"] },
          { vi: "Anh ấy chạy nhanh hơn tôi.", hanzi: "他跑得比我快。", pinyin: "Tā pǎo de bǐ wǒ kuài.", segments: ["他", "跑得", "比", "我", "快。"] },
          { vi: "Bài kiểm tra này khó hơn bài trước.", hanzi: "这次考试比上次难。", pinyin: "Zhè cì kǎoshì bǐ shàng cì nán.", segments: ["这次", "考试", "比", "上次", "难。"] },
          { vi: "Tôi cần phải hoàn thành báo cáo trước thứ Sáu.", hanzi: "我得在星期五以前完成报告。", pinyin: "Wǒ děi zài xīngqīwǔ yǐqián wánchéng bàogào.", segments: ["我", "得", "在", "星期五以前", "完成", "报告。"] },
          { vi: "Sếp yêu cầu chúng tôi tăng ca.", hanzi: "老板要求我们加班。", pinyin: "Lǎobǎn yāoqiú wǒmen jiābān.", segments: ["老板", "要求", "我们", "加班。"] },
          { vi: "Tôi hôm nay phải làm việc đến rất muộn.", hanzi: "我今天要工作到很晚。", pinyin: "Wǒ jīntiān yào gōngzuò dào hěn wǎn.", segments: ["我", "今天", "要", "工作到", "很晚。"] },
          { vi: "Bạn định đi bằng phương tiện gì?", hanzi: "你打算怎么去？", pinyin: "Nǐ dǎsuàn zěnme qù?", segments: ["你", "打算", "怎么", "去？"] },
          { vi: "Tôi định đi tàu điện ngầm.", hanzi: "我打算坐地铁去。", pinyin: "Wǒ dǎsuàn zuò dìtiě qù.", segments: ["我", "打算", "坐", "地铁去。"] },
          { vi: "Từ đây đến sân bay mất bao lâu?", hanzi: "从这儿到机场要多长时间？", pinyin: "Cóng zhèr dào jīchǎng yào duō cháng shíjiān?", segments: ["从这儿", "到", "机场", "要", "多长时间？"] },
          { vi: "Khoảng cần nửa tiếng.", hanzi: "大概需要半个小时。", pinyin: "Dàgài xūyào bàn ge xiǎoshí.", segments: ["大概", "需要", "半个小时。"] },
          { vi: "Xe buýt sắp đến rồi.", hanzi: "公共汽车快到了。", pinyin: "Gōnggòng qìchē kuài dào le.", segments: ["公共汽车", "快", "到了。"] },
          { vi: "Đường này thường xuyên bị tắc.", hanzi: "这条路常常堵车。", pinyin: "Zhè tiáo lù chángcháng dǔchē.", segments: ["这条路", "常常", "堵车。"] },
          { vi: "Xin hỏi ga tàu điện ngầm gần nhất ở đâu?", hanzi: "请问最近的地铁站在哪儿？", pinyin: "Qǐngwèn zuì jìn de dìtiězhàn zài nǎr?", segments: ["请问", "最近的", "地铁站", "在", "哪儿？"] },
          { vi: "Cứ đi thẳng rồi rẽ trái.", hanzi: "一直走然后往左拐。", pinyin: "Yìzhí zǒu ránhòu wǎng zuǒ guǎi.", segments: ["一直走", "然后", "往左", "拐。"] },
          { vi: "Tôi bị lạc đường rồi.", hanzi: "我迷路了。", pinyin: "Wǒ mílù le.", segments: ["我", "迷路了。"] },
          { vi: "Bạn có thể chỉ đường cho tôi không?", hanzi: "你能给我指路吗？", pinyin: "Nǐ néng gěi wǒ zhǐlù ma?", segments: ["你", "能", "给我", "指路吗？"] },
          { vi: "Cuối tuần này bạn có kế hoạch gì?", hanzi: "这个周末你有什么计划？", pinyin: "Zhège zhōumò nǐ yǒu shénme jìhuà?", segments: ["这个周末", "你", "有", "什么", "计划？"] },
          { vi: "Tôi định ở nhà nghỉ ngơi.", hanzi: "我打算在家休息。", pinyin: "Wǒ dǎsuàn zài jiā xiūxi.", segments: ["我", "打算", "在家", "休息。"] },
          { vi: "Chúng ta cùng đi xem phim nhé.", hanzi: "我们一起去看电影吧。", pinyin: "Wǒmen yìqǐ qù kàn diànyǐng ba.", segments: ["我们", "一起", "去", "看电影吧。"] },
          { vi: "Bộ phim này rất được yêu thích.", hanzi: "这部电影很受欢迎。", pinyin: "Zhè bù diànyǐng hěn shòu huānyíng.", segments: ["这部电影", "很", "受欢迎。"] },
          { vi: "Tôi cảm thấy hơi mệt.", hanzi: "我觉得有点儿累。", pinyin: "Wǒ juéde yǒudiǎnr lèi.", segments: ["我", "觉得", "有点儿", "累。"] },
          { vi: "Bạn nên nghỉ ngơi sớm một chút.", hanzi: "你应该早点儿休息。", pinyin: "Nǐ yīnggāi zǎodiǎnr xiūxi.", segments: ["你", "应该", "早点儿", "休息。"] },
          { vi: "Cảm ơn bạn đã quan tâm đến tôi.", hanzi: "谢谢你对我的关心。", pinyin: "Xièxie nǐ duì wǒ de guānxīn.", segments: ["谢谢", "你", "对我的", "关心。"] },
          { vi: "Đừng lo lắng, sẽ ổn thôi.", hanzi: "别担心，会没事的。", pinyin: "Bié dānxīn, huì méishì de.", segments: ["别担心，", "会", "没事的。"] },
          { vi: "Chúc bạn công việc thuận lợi.", hanzi: "祝你工作顺利。", pinyin: "Zhù nǐ gōngzuò shùnlì.", segments: ["祝", "你", "工作", "顺利。"] },
          { vi: "Chúng ta tuần sau liên lạc lại nhé.", hanzi: "我们下周再联系吧。", pinyin: "Wǒmen xiàzhōu zài liánxì ba.", segments: ["我们", "下周", "再", "联系吧。"] }
        ]
      }
    ]
  },

  hsk3: {
    id: "hsk3", title: "HSK 3", subtitle: "Trung cấp • ~600 từ vựng", color: "#2e7ef0", comingSoon: false,
    lessons: [
      {
        id: "hsk3-l1", title: "Du lịch, giao tiếp xã hội & cảm xúc",
        sentences: [
          { vi: "Mặc dù trời mưa nhưng chúng tôi vẫn quyết định ra ngoài.", hanzi: "虽然下雨了，但是我们还是决定出去。", pinyin: "Suīrán xiàyǔ le, dànshì wǒmen háishi juédìng chūqù.", segments: ["虽然", "下雨了，", "但是", "我们", "还是", "决定", "出去。"] },
          { vi: "Chỉ cần bạn cố gắng, nhất định sẽ thành công.", hanzi: "只要你努力，就一定会成功。", pinyin: "Zhǐyào nǐ nǔlì, jiù yídìng huì chénggōng.", segments: ["只要", "你", "努力，", "就", "一定会", "成功。"] },
          { vi: "Món ăn này vừa ngon vừa rẻ.", hanzi: "这道菜又好吃又便宜。", pinyin: "Zhè dào cài yòu hǎochī yòu piányi.", segments: ["这道菜", "又", "好吃", "又", "便宜。"] },
          { vi: "Xin hãy đặt hành lý lên giá để đồ.", hanzi: "请把行李放在行李架上。", pinyin: "Qǐng bǎ xíngli fàng zài xínglijià shàng.", segments: ["请", "把", "行李", "放在", "行李架上。"] },
          { vi: "Ví của tôi bị lấy trộm mất rồi.", hanzi: "我的钱包被偷走了。", pinyin: "Wǒ de qiánbāo bèi tōu zǒu le.", segments: ["我的", "钱包", "被", "偷走了。"] },
          { vi: "Tôi định đi du lịch Vân Nam vào kỳ nghỉ hè.", hanzi: "我打算暑假去云南旅游。", pinyin: "Wǒ dǎsuàn shǔjià qù Yúnnán lǚyóu.", segments: ["我", "打算", "暑假", "去", "云南", "旅游。"] },
          { vi: "Phong cảnh ở đó vô cùng đẹp.", hanzi: "那里的风景非常美丽。", pinyin: "Nàli de fēngjǐng fēicháng měilì.", segments: ["那里的", "风景", "非常", "美丽。"] },
          { vi: "Tôi muốn đặt trước một phòng khách sạn.", hanzi: "我想预订一间酒店房间。", pinyin: "Wǒ xiǎng yùdìng yì jiān jiǔdiàn fángjiān.", segments: ["我", "想", "预订", "一间", "酒店房间。"] },
          { vi: "Khách sạn này cách sân bay không xa.", hanzi: "这家酒店离机场不远。", pinyin: "Zhè jiā jiǔdiàn lí jīchǎng bù yuǎn.", segments: ["这家酒店", "离", "机场", "不远。"] },
          { vi: "Bạn có thể giới thiệu vài món ăn đặc sản không?", hanzi: "你能介绍几道特色菜吗？", pinyin: "Nǐ néng jièshào jǐ dào tèsè cài ma?", segments: ["你", "能", "介绍", "几道", "特色菜吗？"] },
          { vi: "Người dân địa phương rất nhiệt tình hiếu khách.", hanzi: "当地人非常热情好客。", pinyin: "Dāngdì rén fēicháng rèqíng hàokè.", segments: ["当地人", "非常", "热情", "好客。"] },
          { vi: "Tôi bị lạc đường trong khu phố cổ.", hanzi: "我在古城里迷路了。", pinyin: "Wǒ zài gǔchéng lǐ mílù le.", segments: ["我", "在", "古城里", "迷路了。"] },
          { vi: "May mà có người giúp tôi chỉ đường.", hanzi: "幸好有人帮我指路。", pinyin: "Xìnghǎo yǒu rén bāng wǒ zhǐlù.", segments: ["幸好", "有人", "帮", "我", "指路。"] },
          { vi: "Kỳ nghỉ này để lại cho tôi ấn tượng sâu sắc.", hanzi: "这次假期给我留下了深刻的印象。", pinyin: "Zhè cì jiàqī gěi wǒ liúxiàle shēnkè de yìnxiàng.", segments: ["这次假期", "给我", "留下了", "深刻的", "印象。"] },
          { vi: "Cuộc trò chuyện giữa hai người rất vui vẻ.", hanzi: "两个人的谈话很愉快。", pinyin: "Liǎng ge rén de tánhuà hěn yúkuài.", segments: ["两个人的", "谈话", "很", "愉快。"] },
          { vi: "Anh ấy luôn tôn trọng ý kiến của người khác.", hanzi: "他一直尊重别人的意见。", pinyin: "Tā yìzhí zūnzhòng biéren de yìjiàn.", segments: ["他", "一直", "尊重", "别人的", "意见。"] },
          { vi: "Chúng tôi vì một vấn đề nhỏ mà tranh cãi.", hanzi: "我们为了一个小问题吵架了。", pinyin: "Wǒmen wèile yí ge xiǎo wèntí chǎojià le.", segments: ["我们", "为了", "一个", "小问题", "吵架了。"] },
          { vi: "Sau đó chúng tôi đã hòa giải.", hanzi: "后来我们和好了。", pinyin: "Hòulái wǒmen héhǎo le.", segments: ["后来", "我们", "和好了。"] },
          { vi: "Tình bạn của chúng tôi càng ngày càng sâu sắc.", hanzi: "我们的友谊越来越深厚。", pinyin: "Wǒmen de yǒuyì yuè lái yuè shēnhòu.", segments: ["我们的", "友谊", "越来越", "深厚。"] },
          { vi: "Tôi rất cảm động vì sự giúp đỡ của bạn.", hanzi: "我被你的帮助感动了。", pinyin: "Wǒ bèi nǐ de bāngzhù gǎndòng le.", segments: ["我", "被", "你的", "帮助", "感动了。"] },
          { vi: "Đừng buồn nữa, mọi chuyện sẽ tốt hơn thôi.", hanzi: "别难过了，一切都会好起来的。", pinyin: "Bié nánguò le, yíqiè dōu huì hǎo qǐlai de.", segments: ["别难过了，", "一切", "都会", "好起来的。"] },
          { vi: "Tôi vừa lo lắng vừa hồi hộp.", hanzi: "我又紧张又担心。", pinyin: "Wǒ yòu jǐnzhāng yòu dānxīn.", segments: ["我", "又", "紧张", "又", "担心。"] },
          { vi: "Kết quả khiến mọi người đều rất hài lòng.", hanzi: "结果让大家都很满意。", pinyin: "Jiéguǒ ràng dàjiā dōu hěn mǎnyì.", segments: ["结果", "让", "大家", "都很", "满意。"] },
          { vi: "Chỉ cần chúng ta đoàn kết, việc gì cũng có thể giải quyết.", hanzi: "只要我们团结，什么事都能解决。", pinyin: "Zhǐyào wǒmen tuánjié, shénme shì dōu néng jiějué.", segments: ["只要", "我们", "团结，", "什么事", "都能", "解决。"] },
          { vi: "Anh ấy đã chuẩn bị sẵn sàng mọi thứ.", hanzi: "他已经把东西准备好了。", pinyin: "Tā yǐjīng bǎ dōngxi zhǔnbèi hǎo le.", segments: ["他", "已经", "把", "东西", "准备好了。"] },
          { vi: "Kế hoạch bị anh ấy thay đổi.", hanzi: "计划被他改变了。", pinyin: "Jìhuà bèi tā gǎibiàn le.", segments: ["计划", "被", "他", "改变了。"] },
          { vi: "Dù công việc bận rộn nhưng anh ấy vẫn thường xuyên tập thể dục.", hanzi: "虽然工作很忙，但是他还是经常锻炼。", pinyin: "Suīrán gōngzuò hěn máng, dànshì tā háishi jīngcháng duànliàn.", segments: ["虽然", "工作很忙，", "但是", "他", "还是", "经常", "锻炼。"] },
          { vi: "Chỉ cần có quyết tâm, không việc gì là không thể.", hanzi: "只要有决心，没有什么是不可能的。", pinyin: "Zhǐyào yǒu juéxīn, méiyǒu shénme shì bù kěnéng de.", segments: ["只要", "有", "决心，", "没有什么", "是", "不可能的。"] },
          { vi: "Anh ấy vừa thông minh vừa chăm chỉ.", hanzi: "他又聪明又努力。", pinyin: "Tā yòu cōngmíng yòu nǔlì.", segments: ["他", "又", "聪明", "又", "努力。"] },
          { vi: "Hãy đóng cửa sổ lại giúp tôi.", hanzi: "请把窗户关上。", pinyin: "Qǐng bǎ chuānghu guān shàng.", segments: ["请", "把", "窗户", "关上。"] }
        ]
      }
    ]
  },

  hsk4: {
    id: "hsk4", title: "HSK 4", subtitle: "Trung cao cấp • ~1200 từ vựng", color: "#6c5ce7", comingSoon: false,
    lessons: [
      {
        id: "hsk4-l1", title: "Quan điểm, công nghệ & kinh doanh",
        sentences: [
          { vi: "Với sự phát triển của khoa học công nghệ, cuộc sống con người ngày càng tiện lợi.", hanzi: "随着科技的发展，人们的生活越来越方便。", pinyin: "Suízhe kējì de fāzhǎn, rénmen de shēnghuó yuè lái yuè fāngbiàn.", segments: ["随着", "科技的", "发展，", "人们的", "生活", "越来越", "方便。"] },
          { vi: "Quyết định này có ý nghĩa vô cùng quan trọng đối với sự phát triển tương lai của công ty.", hanzi: "这个决定对公司未来的发展至关重要。", pinyin: "Zhège juédìng duì gōngsī wèilái de fāzhǎn zhìguān zhòngyào.", segments: ["这个决定", "对", "公司未来的", "发展", "至关重要。"] },
          { vi: "Dù gặp khó khăn gì, chúng ta cũng không được bỏ cuộc.", hanzi: "无论遇到什么困难，我们都不能放弃。", pinyin: "Wúlùn yùdào shénme kùnnan, wǒmen dōu bùnéng fàngqì.", segments: ["无论", "遇到", "什么困难，", "我们", "都不能", "放弃。"] },
          { vi: "Chính phủ đã áp dụng một loạt biện pháp để bảo vệ môi trường.", hanzi: "政府采取了一系列措施来保护环境。", pinyin: "Zhèngfǔ cǎiqǔle yíxìliè cuòshī lái bǎohù huánjìng.", segments: ["政府", "采取了", "一系列", "措施", "来", "保护环境。"] },
          { vi: "Chỉ có không ngừng học tập mới có thể theo kịp bước tiến của thời đại.", hanzi: "只有不断学习，才能跟上时代的步伐。", pinyin: "Zhǐyǒu búduàn xuéxí, cái néng gēnshàng shídài de bùfá.", segments: ["只有", "不断", "学习，", "才能", "跟上", "时代的", "步伐。"] },
          { vi: "Kết quả nghiên cứu này đã thu hút sự chú ý rộng rãi.", hanzi: "这项研究结果引起了广泛关注。", pinyin: "Zhè xiàng yánjiū jiéguǒ yǐnqǐle guǎngfàn guānzhù.", segments: ["这项", "研究结果", "引起了", "广泛", "关注。"] },
          { vi: "Đối mặt với thử thách, chúng ta cần giữ thái độ tích cực.", hanzi: "面对挑战，我们要保持积极的心态。", pinyin: "Miànduì tiǎozhàn, wǒmen yào bǎochí jījí de xīntài.", segments: ["面对挑战，", "我们", "要", "保持", "积极的", "心态。"] },
          { vi: "Doanh nghiệp muốn phát triển lâu dài thì phải chú trọng đổi mới.", hanzi: "企业要想长远发展，必须注重创新。", pinyin: "Qǐyè yào xiǎng chángyuǎn fāzhǎn, bìxū zhùzhòng chuàngxīn.", segments: ["企业", "要想", "长远发展，", "必须", "注重", "创新。"] },
          { vi: "Sản phẩm này rất được người tiêu dùng trẻ ưa chuộng.", hanzi: "这款产品很受年轻消费者的欢迎。", pinyin: "Zhè kuǎn chǎnpǐn hěn shòu niánqīng xiāofèizhě de huānyíng.", segments: ["这款产品", "很", "受", "年轻消费者的", "欢迎。"] },
          { vi: "Công ty quyết định mở rộng thị trường ra nước ngoài.", hanzi: "公司决定把市场扩展到国外。", pinyin: "Gōngsī juédìng bǎ shìchǎng kuòzhǎn dào guówài.", segments: ["公司", "决定", "把", "市场", "扩展到", "国外。"] },
          { vi: "Chúng ta phải cân nhắc lợi và hại rồi mới đưa ra quyết định sáng suốt.", hanzi: "我们必须权衡利弊，做出明智的选择。", pinyin: "Wǒmen bìxū quánhéng lìbì, zuòchū míngzhì de xuǎnzé.", segments: ["我们", "必须", "权衡", "利弊，", "做出", "明智的", "选择。"] },
          { vi: "Sự tiến bộ của khoa học kỹ thuật đã thay đổi phương thức sống của con người.", hanzi: "科技的进步改变了人们的生活方式。", pinyin: "Kējì de jìnbù gǎibiànle rénmen de shēnghuó fāngshì.", segments: ["科技的", "进步", "改变了", "人们的", "生活方式。"] },
          { vi: "Trí tuệ nhân tạo đang được ứng dụng rộng rãi trong nhiều lĩnh vực.", hanzi: "人工智能正在多个领域被广泛应用。", pinyin: "Réngōng zhìnéng zhèngzài duō ge lǐngyù bèi guǎngfàn yìngyòng.", segments: ["人工智能", "正在", "多个领域", "被", "广泛", "应用。"] },
          { vi: "Chúng ta nên nhìn nhận vấn đề này một cách khách quan.", hanzi: "我们应该客观地看待这个问题。", pinyin: "Wǒmen yīnggāi kèguān de kàndài zhège wèntí.", segments: ["我们", "应该", "客观地", "看待", "这个问题。"] },
          { vi: "Anh ấy đối với công việc luôn có thái độ nghiêm túc.", hanzi: "他对工作一直抱有认真的态度。", pinyin: "Tā duì gōngzuò yìzhí bàoyǒu rènzhēn de tàidu.", segments: ["他", "对工作", "一直", "抱有", "认真的", "态度。"] },
          { vi: "Việc học ngoại ngữ đòi hỏi sự kiên trì lâu dài.", hanzi: "学习外语需要长期的坚持。", pinyin: "Xuéxí wàiyǔ xūyào chángqī de jiānchí.", segments: ["学习外语", "需要", "长期的", "坚持。"] },
          { vi: "Nhiều bậc phụ huynh rất coi trọng việc giáo dục con cái.", hanzi: "很多家长非常重视孩子的教育。", pinyin: "Hěnduō jiāzhǎng fēicháng zhòngshì háizi de jiàoyù.", segments: ["很多", "家长", "非常", "重视", "孩子的", "教育。"] },
          { vi: "Hệ thống giáo dục cần phải không ngừng cải cách.", hanzi: "教育制度需要不断改革。", pinyin: "Jiàoyù zhìdù xūyào búduàn gǎigé.", segments: ["教育制度", "需要", "不断", "改革。"] },
          { vi: "Cạnh tranh trên thị trường ngày càng gay gắt.", hanzi: "市场竞争越来越激烈。", pinyin: "Shìchǎng jìngzhēng yuè lái yuè jīliè.", segments: ["市场竞争", "越来越", "激烈。"] },
          { vi: "Công ty này đang phải đối mặt với áp lực tài chính rất lớn.", hanzi: "这家公司正面临巨大的财务压力。", pinyin: "Zhè jiā gōngsī zhèng miànlín jùdà de cáiwù yālì.", segments: ["这家公司", "正", "面临", "巨大的", "财务压力。"] },
          { vi: "Nhân viên nên chủ động đề xuất ý kiến của mình.", hanzi: "员工应该主动提出自己的意见。", pinyin: "Yuángōng yīnggāi zhǔdòng tíchū zìjǐ de yìjiàn.", segments: ["员工", "应该", "主动", "提出", "自己的", "意见。"] },
          { vi: "Một nhà lãnh đạo giỏi phải biết lắng nghe ý kiến của nhân viên.", hanzi: "一个好领导必须懂得倾听员工的意见。", pinyin: "Yí ge hǎo lǐngdǎo bìxū dǒngde qīngtīng yuángōng de yìjiàn.", segments: ["一个好领导", "必须", "懂得", "倾听", "员工的", "意见。"] },
          { vi: "Việc này liên quan đến lợi ích của rất nhiều người.", hanzi: "这件事涉及到很多人的利益。", pinyin: "Zhè jiàn shì shèjí dào hěnduō rén de lìyì.", segments: ["这件事", "涉及到", "很多人的", "利益。"] },
          { vi: "Chúng tôi hy vọng đạt được sự hợp tác đôi bên cùng có lợi.", hanzi: "我们希望达成互利共赢的合作。", pinyin: "Wǒmen xīwàng dáchéng hùlì gòngyíng de hézuò.", segments: ["我们", "希望", "达成", "互利共赢的", "合作。"] },
          { vi: "Sự phổ biến của mạng internet đã thay đổi phương thức con người giao tiếp.", hanzi: "互联网的普及改变了人们的交流方式。", pinyin: "Hùliánwǎng de pǔjí gǎibiànle rénmen de jiāoliú fāngshì.", segments: ["互联网的", "普及", "改变了", "人们的", "交流方式。"] },
          { vi: "Chúng ta cần bảo vệ thông tin cá nhân của mình trên mạng.", hanzi: "我们需要在网上保护自己的个人信息。", pinyin: "Wǒmen xūyào zài wǎngshàng bǎohù zìjǐ de gèrén xìnxī.", segments: ["我们", "需要", "在网上", "保护", "自己的", "个人信息。"] },
          { vi: "Hiện tượng này trong xã hội hiện nay khá phổ biến.", hanzi: "这种现象在当今社会相当普遍。", pinyin: "Zhè zhǒng xiànxiàng zài dāngjīn shèhuì xiāngdāng pǔbiàn.", segments: ["这种现象", "在", "当今社会", "相当", "普遍。"] },
          { vi: "Anh ấy nhờ vào kiến thức chuyên môn vững vàng mà giành được lòng tin của mọi người.", hanzi: "他凭借扎实的专业知识赢得了大家的信任。", pinyin: "Tā píngjiè zhāshi de zhuānyè zhīshi yíngdéle dàjiā de xìnrèn.", segments: ["他", "凭借", "扎实的", "专业知识", "赢得了", "大家的", "信任。"] },
          { vi: "Việc thực thi chính sách này sẽ ảnh hưởng sâu rộng đến thị trường.", hanzi: "这项政策的实施将对市场产生深远的影响。", pinyin: "Zhè xiàng zhèngcè de shíshī jiāng duì shìchǎng chǎnshēng shēnyuǎn de yǐngxiǎng.", segments: ["这项政策的", "实施", "将", "对", "市场", "产生", "深远的", "影响。"] },
          { vi: "Chỉ khi đứng ở tầm cao của lịch sử, ta mới thực sự hiểu được ý nghĩa của sự thay đổi này.", hanzi: "只有站在历史的高度，才能真正理解这一变革的意义。", pinyin: "Zhǐyǒu zhàn zài lìshǐ de gāodù, cái néng zhēnzhèng lǐjiě zhè yī biàngé de yìyì.", segments: ["只有", "站在", "历史的", "高度，", "才能", "真正", "理解", "这一", "变革的", "意义。"] }
        ]
      }
    ]
  },

  hsk5: { id: "hsk5", title: "HSK 5", subtitle: "Cao cấp • ~2500 từ vựng", color: "#f2a33d", comingSoon: true, lessons: [] },
  hsk6: { id: "hsk6", title: "HSK 6", subtitle: "Thông thạo • ~5000 từ vựng", color: "#ff5d8f", comingSoon: true, lessons: [] }
};
