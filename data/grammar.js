// Grammar points per HSK level, each with explanation, examples, and quiz exercises.
const GRAMMAR = {
  hsk1: [
    {
      id: "hsk1-g1", title: "Câu khẳng định với “是” (A là B)",
      explanation: "Cấu trúc: Chủ ngữ + 是 + Danh từ, dùng để nói A là B. Phủ định thêm 不 trước 是: 不是.",
      examples: [
        { hanzi: "我是学生。", pinyin: "Wǒ shì xuésheng.", vi: "Tôi là học sinh." },
        { hanzi: "他不是老师。", pinyin: "Tā bú shì lǎoshī.", vi: "Anh ấy không phải là giáo viên." }
      ],
      exercises: [
        { prompt: "Cô ấy ___ bác sĩ. (là)", choices: ["是", "不", "吗", "很"], answer: "是" },
        { prompt: "他 ___ 是学生，他是老师。 (không phải)", choices: ["很", "不", "是", "都"], answer: "不" }
      ]
    },
    {
      id: "hsk1-g2", title: "Câu hỏi Có/Không với “吗”",
      explanation: "Thêm trợ từ 吗 vào cuối câu trần thuật để biến nó thành câu hỏi Có/Không, không cần đảo trật tự từ.",
      examples: [
        { hanzi: "你是学生吗？", pinyin: "Nǐ shì xuésheng ma?", vi: "Bạn là học sinh phải không?" },
        { hanzi: "他喜欢喝茶吗？", pinyin: "Tā xǐhuan hē chá ma?", vi: "Anh ấy có thích uống trà không?" }
      ],
      exercises: [
        { prompt: "你好___？ (thêm để hỏi \"bạn khỏe không\")", choices: ["吗", "呢", "了", "的"], answer: "吗" },
        { prompt: "Câu nào là câu hỏi đúng ngữ pháp?", choices: ["你是学生吗？", "吗你是学生？", "你吗是学生？", "你是吗学生？"], answer: "你是学生吗？" }
      ]
    },
    {
      id: "hsk1-g3", title: "Phó từ mức độ “很” trước tính từ",
      explanation: "Khi tính từ làm vị ngữ, thường thêm 很 phía trước (dù không nhấn mạnh \"rất\") để câu tự nhiên hơn: Chủ ngữ + 很 + Tính từ.",
      examples: [
        { hanzi: "我很好。", pinyin: "Wǒ hěn hǎo.", vi: "Tôi khỏe." },
        { hanzi: "这个很贵。", pinyin: "Zhège hěn guì.", vi: "Cái này rất đắt." }
      ],
      exercises: [
        { prompt: "今天天气___热。 (rất)", choices: ["很", "是", "吗", "不"], answer: "很" },
        { prompt: "我___高兴认识你。 (rất)", choices: ["很", "不", "吗", "了"], answer: "很" }
      ]
    }
  ],
  hsk2: [
    {
      id: "hsk2-g1", title: "Trợ từ “了” chỉ hành động đã hoàn thành",
      explanation: "Đặt 了 ngay sau động từ để diễn tả hành động đã xảy ra/hoàn thành: Động từ + 了 (+ Tân ngữ).",
      examples: [
        { hanzi: "我吃了。", pinyin: "Wǒ chī le.", vi: "Tôi ăn rồi." },
        { hanzi: "他去了学校。", pinyin: "Tā qùle xuéxiào.", vi: "Anh ấy đã đi đến trường." }
      ],
      exercises: [
        { prompt: "我已经吃___饭了。 (rồi)", choices: ["了", "过", "着", "的"], answer: "了" },
        { prompt: "他昨天买___一件衣服。", choices: ["了", "吗", "很", "不"], answer: "了" }
      ]
    },
    {
      id: "hsk2-g2", title: "Trợ từ động thái “过” chỉ kinh nghiệm",
      explanation: "Đặt 过 sau động từ để diễn tả một kinh nghiệm đã từng trải qua: Động từ + 过. Phủ định dùng 没 + Động từ + 过.",
      examples: [
        { hanzi: "我去过中国。", pinyin: "Wǒ qùguo Zhōngguó.", vi: "Tôi đã từng đi Trung Quốc." },
        { hanzi: "我没吃过这道菜。", pinyin: "Wǒ méi chīguo zhè dào cài.", vi: "Tôi chưa từng ăn món này." }
      ],
      exercises: [
        { prompt: "你去___中国吗？ (đã từng)", choices: ["过", "了", "着", "得"], answer: "过" },
        { prompt: "我没看___这部电影。 (chưa từng)", choices: ["过", "了", "吗", "很"], answer: "过" }
      ]
    },
    {
      id: "hsk2-g3", title: "Câu so sánh với “比”",
      explanation: "Cấu trúc: A + 比 + B + Tính từ, diễn tả A hơn B ở đặc điểm nào đó.",
      examples: [
        { hanzi: "他比我高。", pinyin: "Tā bǐ wǒ gāo.", vi: "Anh ấy cao hơn tôi." },
        { hanzi: "这次考试比上次难。", pinyin: "Zhè cì kǎoshì bǐ shàng cì nán.", vi: "Bài thi này khó hơn lần trước." }
      ],
      exercises: [
        { prompt: "他跑得___我快。 (so với)", choices: ["比", "是", "了", "很"], answer: "比" },
        { prompt: "今天___昨天热。 (nóng hơn)", choices: ["比", "把", "被", "的"], answer: "比" }
      ]
    }
  ],
  hsk3: [
    {
      id: "hsk3-g1", title: "Câu chữ “把” (xử trí)",
      explanation: "Cấu trúc: Chủ ngữ + 把 + Tân ngữ + Động từ + thành phần khác, nhấn mạnh tác động/xử lý lên tân ngữ đã xác định.",
      examples: [
        { hanzi: "请把窗户关上。", pinyin: "Qǐng bǎ chuānghu guān shàng.", vi: "Hãy đóng cửa sổ lại giúp tôi." },
        { hanzi: "他把书放在桌子上。", pinyin: "Tā bǎ shū fàng zài zhuōzi shàng.", vi: "Anh ấy đặt quyển sách lên bàn." }
      ],
      exercises: [
        { prompt: "请___行李放在架子上。 (chữ xử trí)", choices: ["把", "被", "比", "了"], answer: "把" },
        { prompt: "他已经___东西准备好了。", choices: ["把", "被", "很", "在"], answer: "把" }
      ]
    },
    {
      id: "hsk3-g2", title: "Câu bị động “被”",
      explanation: "Cấu trúc: Chủ ngữ (bị tác động) + 被 + (Tác nhân) + Động từ + thành phần khác.",
      examples: [
        { hanzi: "钱包被偷走了。", pinyin: "Qiánbāo bèi tōu zǒu le.", vi: "Ví bị lấy trộm mất rồi." },
        { hanzi: "我被他的话感动了。", pinyin: "Wǒ bèi tā de huà gǎndòng le.", vi: "Tôi bị/được lời nói của anh ấy làm cảm động." }
      ],
      exercises: [
        { prompt: "计划___他改变了。 (bị)", choices: ["被", "把", "比", "了"], answer: "被" },
        { prompt: "我___你的帮助感动了。", choices: ["被", "把", "在", "很"], answer: "被" }
      ]
    },
    {
      id: "hsk3-g3", title: "Liên từ “虽然…但是…”",
      explanation: "Diễn tả sự tương phản: Mặc dù A, nhưng B. 虽然 đứng trước vế nhượng bộ, 但是 đứng trước vế đối lập.",
      examples: [
        { hanzi: "虽然下雨了，但是我们还是出去了。", pinyin: "Suīrán xiàyǔ le, dànshì wǒmen háishi chūqù le.", vi: "Mặc dù trời mưa nhưng chúng tôi vẫn ra ngoài." },
        { hanzi: "虽然很忙，但是他还是来了。", pinyin: "Suīrán hěn máng, dànshì tā háishi lái le.", vi: "Mặc dù rất bận nhưng anh ấy vẫn đến." }
      ],
      exercises: [
        { prompt: "___他很累，但是他还是坚持工作。", choices: ["虽然", "只要", "因为", "把"], answer: "虽然" },
        { prompt: "虽然天气不好，___我们还是决定出发。", choices: ["但是", "所以", "而且", "还是"], answer: "但是" }
      ]
    }
  ],
  hsk4: [
    {
      id: "hsk4-g1", title: "Giới từ “随着” (theo cùng với)",
      explanation: "随着 + cụm danh từ chỉ sự việc/xu hướng, dùng để mở đầu câu, diễn tả một sự việc kéo theo sự thay đổi khác.",
      examples: [
        { hanzi: "随着科技的发展，生活越来越方便。", pinyin: "Suízhe kējì de fāzhǎn, shēnghuó yuè lái yuè fāngbiàn.", vi: "Cùng với sự phát triển của khoa học kỹ thuật, cuộc sống ngày càng tiện lợi." },
        { hanzi: "随着年龄的增长，他变得更成熟了。", pinyin: "Suízhe niánlíng de zēngzhǎng, tā biàn de gèng chéngshú le.", vi: "Cùng với tuổi tác tăng lên, anh ấy trở nên chín chắn hơn." }
      ],
      exercises: [
        { prompt: "___经济的发展，人们的生活水平提高了。", choices: ["随着", "无论", "只有", "把"], answer: "随着" },
        { prompt: "Từ nào diễn tả \"đi kèm theo sự thay đổi\"?", choices: ["随着", "但是", "而且", "因为"], answer: "随着" }
      ]
    },
    {
      id: "hsk4-g2", title: "Cấu trúc “无论…都…”",
      explanation: "Diễn tả: dù trong bất kỳ điều kiện/trường hợp nào thì kết quả vẫn không đổi. 无论 + điều kiện, 都/也 + kết quả.",
      examples: [
        { hanzi: "无论遇到什么困难，我们都不能放弃。", pinyin: "Wúlùn yùdào shénme kùnnan, wǒmen dōu bùnéng fàngqì.", vi: "Dù gặp khó khăn gì, chúng ta cũng không được bỏ cuộc." },
        { hanzi: "无论多忙，他都会锻炼身体。", pinyin: "Wúlùn duō máng, tā dōu huì duànliàn shēntǐ.", vi: "Dù bận đến đâu, anh ấy cũng đều tập thể dục." }
      ],
      exercises: [
        { prompt: "___天气怎么样，比赛都会照常进行。", choices: ["无论", "只有", "虽然", "把"], answer: "无论" },
        { prompt: "无论多难，我们___要完成任务。", choices: ["都", "被", "把", "很"], answer: "都" }
      ]
    },
    {
      id: "hsk4-g3", title: "Cấu trúc “只有…才…” (điều kiện duy nhất)",
      explanation: "Diễn tả điều kiện duy nhất để đạt kết quả: chỉ khi có A thì mới có B. 只有 + điều kiện, 才 + kết quả.",
      examples: [
        { hanzi: "只有不断学习，才能跟上时代的步伐。", pinyin: "Zhǐyǒu búduàn xuéxí, cái néng gēnshàng shídài de bùfá.", vi: "Chỉ có không ngừng học tập mới có thể theo kịp bước tiến của thời đại." },
        { hanzi: "只有努力，才能成功。", pinyin: "Zhǐyǒu nǔlì, cái néng chénggōng.", vi: "Chỉ có nỗ lực mới có thể thành công." }
      ],
      exercises: [
        { prompt: "___你亲自尝试，才能明白其中的道理。", choices: ["只有", "无论", "虽然", "把"], answer: "只有" },
        { prompt: "只有掌握扎实的基础，___能取得更大的进步。", choices: ["才", "都", "被", "很"], answer: "才" }
      ]
    }
  ]
};
