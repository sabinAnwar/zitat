// Database of French proverbs with translations and categories
const proverbs = [
    {
        french: "L'habit ne fait pas le moine.",
        translations: {
            en: "The habit does not make the monk.",
            de: "Die Kleidung macht nicht den Mönch.",
            ar: "اللباس لا يصنع الراهب"
        },
        category: "wisdom",
        meanings: {
            en: "Appearances can be deceiving. Don't judge people by their outward appearance.",
            de: "Der Schein trügt. Beurteile Menschen nicht nach ihrem äußeren Erscheinungsbild.",
            ar: "المظاهر خادعة. لا تحكم على الناس من مظهرهم الخارجي"
        }
    },
    {
        french: "Qui vivra verra.",
        translations: {
            en: "Time will tell.",
            de: "Die Zeit wird es zeigen.",
            ar: "الوقت سيخبرنا"
        },
        category: "life",
        meanings: {
            en: "The future will reveal the truth. We must be patient to see how things unfold.",
            de: "Die Zukunft wird die Wahrheit enthüllen. Wir müssen geduldig sein, um zu sehen, wie sich die Dinge entwickeln.",
            ar: "المستقبل سيكشف الحقيقة. يجب أن نكون صبورين لنرى كيف تتطور الأمور"
        }
    },
    {
        french: "Petit à petit, l'oiseau fait son nid.",
        translations: {
            en: "Little by little, the bird builds its nest.",
            de: "Kleinvieh macht auch Mist.",
            ar: "قليلاً قليلاً، يبني الطائر عشه"
        },
        category: "success",
        meanings: {
            en: "Success comes through steady, consistent effort. Every small step counts towards your goal.",
            de: "Erfolg kommt durch stetige, konsequente Anstrengung. Jeder kleine Schritt zählt zu deinem Ziel.",
            ar: "النجاح يأتي من خلال الجهد المستمر والثابت. كل خطوة صغيرة تساهم في تحقيق هدفك"
        }
    },
    {
        french: "L'amour est aveugle.",
        translations: {
            en: "Love is blind.",
            de: "Die Liebe ist blind.",
            ar: "الحب أعمى"
        },
        category: "love",
        meanings: {
            en: "When in love, people often overlook flaws and make irrational decisions.",
            de: "Wenn man verliebt ist, übersieht man oft Fehler und trifft irrationale Entscheidungen.",
            ar: "عندما يكون الشخص في حالة حب، فإنه غالباً ما يتغاضى عن العيوب ويتخذ قرارات غير عقلانية"
        }
    },
    {
        french: "Il n'y a pas de fumée sans feu.",
        translations: {
            en: "There's no smoke without fire.",
            de: "Wo Rauch ist, ist auch Feuer.",
            ar: "لا دخان بدون نار"
        }
    },
    {
        french: "Qui sème le vent récolte la tempête.",
        translations: {
            en: "He who sows the wind reaps the storm.",
            de: "Wer Wind sät, wird Sturm ernten.",
            ar: "من يزرع الريح يحصد العاصفة"
        }
    },
    {
        french: "L'argent ne fait pas le bonheur.",
        translations: {
            en: "Money doesn't buy happiness.",
            de: "Geld macht nicht glücklich.",
            ar: "المال لا يجلب السعادة"
        }
    },
    {
        french: "Qui ne dit mot consent.",
        translations: {
            en: "Silence means consent.",
            de: "Wer schweigt, stimmt zu.",
            ar: "من يسكت يوافق"
        }
    },
    {
        french: "La vérité sort de la bouche des enfants.",
        translations: {
            en: "Truth comes out of children's mouths.",
            de: "Kinder und Narren sagen die Wahrheit.",
            ar: "الحقيقة تخرج من أفواه الأطفال"
        }
    },
    {
        french: "À bon chat, bon rat.",
        translations: {
            en: "A good cat deserves a good rat.",
            de: "Wie der Herr, so's Gescherr.",
            ar: "القط الجيد يستحق فأراً جيداً"
        }
    },
    {
        french: "Après la pluie, le beau temps.",
        translations: {
            en: "After the rain comes fair weather.",
            de: "Nach dem Regen kommt die Sonne.",
            ar: "بعد المطر يأتي الطقس الجميل"
        }
    },
    {
        french: "Battre le fer pendant qu'il est chaud.",
        translations: {
            en: "Strike while the iron is hot.",
            de: "Das Eisen schmieden, solange es heiß ist.",
            ar: "اضرب الحديد وهو ساخن"
        }
    },
    {
        french: "C'est en forgeant qu'on devient forgeron.",
        translations: {
            en: "Practice makes perfect.",
            de: "Übung macht den Meister.",
            ar: "الممارسة تصنع الكمال"
        }
    },
    {
        french: "Chacun voit midi à sa porte.",
        translations: {
            en: "Everyone sees noon at their own door.",
            de: "Jeder sieht die Mittagsstunde an seiner eigenen Tür.",
            ar: "كل شخص يرى الظهيرة عند بابه"
        }
    },
    {
        french: "Chacun son métier, les vaches seront bien gardées.",
        translations: {
            en: "To each his own trade, the cows will be well kept.",
            de: "Jeder sein Handwerk, die Kühe werden gut gehütet.",
            ar: "كل شخص في مهنته، البقر سيكون محروساً جيداً"
        }
    },
    {
        french: "Charbonnier est maître chez lui.",
        translations: {
            en: "A man's home is his castle.",
            de: "Jeder ist Herr in seinem eigenen Haus.",
            ar: "كل شخص سيد في بيته"
        }
    },
    {
        french: "Chat échaudé craint l'eau froide.",
        translations: {
            en: "A scalded cat fears cold water.",
            de: "Ein verbrühter Kater fürchtet kaltes Wasser.",
            ar: "القط المحروق يخاف الماء البارد"
        }
    },
    {
        french: "Comme on fait son lit, on se couche.",
        translations: {
            en: "As you make your bed, so you must lie in it.",
            de: "Wie man sich bettet, so liegt man.",
            ar: "كما تصنع فراشك، كذلك تنام عليه"
        }
    },
    {
        french: "Comparaison n'est pas raison.",
        translations: {
            en: "Comparisons are odious.",
            de: "Vergleiche sind nicht immer angebracht.",
            ar: "المقارنة ليست سبباً"
        }
    },
    {
        french: "Dans le doute, abstiens-toi.",
        translations: {
            en: "When in doubt, abstain.",
            de: "Im Zweifelsfall, enthalte dich.",
            ar: "في حالة الشك، امتنع"
        }
    },
    {
        french: "De la discussion jaillit la lumière.",
        translations: {
            en: "Truth comes out in discussion.",
            de: "Aus der Diskussion entsteht das Licht.",
            ar: "من النقاش يخرج النور"
        }
    },
    {
        french: "Deux précautions valent mieux qu'une.",
        translations: {
            en: "Two precautions are better than one.",
            de: "Zwei Vorsichtsmaßnahmen sind besser als eine.",
            ar: "احتياطان أفضل من واحد"
        }
    },
    {
        french: "Dis-moi qui tu fréquentes, je te dirai qui tu es.",
        translations: {
            en: "Tell me who you associate with, and I'll tell you who you are.",
            de: "Sag mir, mit wem du verkehrst, und ich sage dir, wer du bist.",
            ar: "قل لي من تصاحب، أقول لك من أنت"
        }
    },
    {
        french: "Donner c'est donner, reprendre c'est voler.",
        translations: {
            en: "To give is to give, to take back is to steal.",
            de: "Geben ist geben, Zurücknehmen ist stehlen.",
            ar: "العطاء هو العطاء، الأخذ هو السرقة"
        }
    },
    {
        french: "Du sublime au ridicule il n'y a qu'un pas.",
        translations: {
            en: "From the sublime to the ridiculous is but a step.",
            de: "Vom Erhabenen zum Lächerlichen ist es nur ein Schritt.",
            ar: "من السامي إلى المضحك خطوة واحدة"
        }
    },
    {
        french: "En avril, ne te découvre pas d'un fil.",
        translations: {
            en: "In April, don't shed a thread.",
            de: "Im April, zieh dich nicht zu leicht an.",
            ar: "في أبريل، لا تخلع خيطاً"
        }
    },
    {
        french: "En forgeant on devient forgeron.",
        translations: {
            en: "Practice makes perfect.",
            de: "Übung macht den Meister.",
            ar: "الممارسة تصنع الكمال"
        }
    },
    {
        french: "Entre l'arbre et l'écorce il ne faut pas mettre le doigt.",
        translations: {
            en: "Don't put your finger between the tree and the bark.",
            de: "Zwischen Baum und Rinde soll man nicht den Finger stecken.",
            ar: "لا تضع إصبعك بين الشجرة واللحاء"
        }
    },
    {
        french: "Erreur n'est pas compte.",
        translations: {
            en: "Error is not account.",
            de: "Irrtum ist kein Konto.",
            ar: "الخطأ ليس حساباً"
        }
    },
    {
        french: "Fais ce que dois, advienne que pourra.",
        translations: {
            en: "Do what you must, come what may.",
            de: "Tu, was du musst, komme was wolle.",
            ar: "افعل ما يجب، مهما كان"
        }
    },
    {
        french: "Faute avouée est à moitié pardonnée.",
        translations: {
            en: "A fault confessed is half redressed.",
            de: "Ein gestandener Fehler ist halb vergeben.",
            ar: "الخطأ المعترف به نصف مغفور"
        }
    },
    {
        french: "Femme qui rit, à moitié dans ton lit.",
        translations: {
            en: "A woman who laughs is half in your bed.",
            de: "Eine lachende Frau ist halb in deinem Bett.",
            ar: "المرأة التي تضحك نصفها في سريرك"
        }
    },
    {
        french: "Fin contre fin.",
        translations: {
            en: "Fine against fine.",
            de: "Fein gegen fein.",
            ar: "دقيق ضد دقيق"
        }
    },
    {
        french: "Il faut tourner sept fois sa langue dans sa bouche avant de parler.",
        translations: {
            en: "Think before you speak.",
            de: "Überlege erst, bevor du sprichst.",
            ar: "فكر قبل أن تتكلم"
        }
    },
    {
        french: "L'erreur est humaine.",
        translations: {
            en: "To err is human.",
            de: "Irren ist menschlich.",
            ar: "الخطأ من طبيعة البشر"
        }
    },
    {
        french: "La nuit porte conseil.",
        translations: {
            en: "Sleep on it.",
            de: "Die Nacht bringt Rat.",
            ar: "الليل يحمل النصيحة"
        }
    },
    {
        french: "Les murs ont des oreilles.",
        translations: {
            en: "Walls have ears.",
            de: "Die Wände haben Ohren.",
            ar: "الجدران لها آذان"
        }
    },
    {
        french: "Mieux vaut tard que jamais.",
        translations: {
            en: "Better late than never.",
            de: "Besser spät als nie.",
            ar: "متأخر خير من أبداً"
        }
    },
    {
        french: "Nul n'est prophète en son pays.",
        translations: {
            en: "No one is a prophet in their own country.",
            de: "Niemand ist ein Prophet im eigenen Land.",
            ar: "لا أحد نبي في بلده"
        }
    },
    {
        french: "On ne peut pas avoir le beurre et l'argent du beurre.",
        translations: {
            en: "You can't have your cake and eat it too.",
            de: "Man kann nicht auf zwei Hochzeiten gleichzeitig tanzen.",
            ar: "لا يمكنك أن تأكل الكعكة وتحتفظ بها"
        }
    },
    {
        french: "Quand le chat n'est pas là, les souris dansent.",
        translations: {
            en: "When the cat's away, the mice will play.",
            de: "Wenn die Katze aus dem Haus ist, tanzen die Mäuse.",
            ar: "عندما يغيب القط، ترقص الفئران"
        }
    },
    {
        french: "Rien ne sert de courir, il faut partir à point.",
        translations: {
            en: "There's no point in rushing, you need to start at the right time.",
            de: "Eile mit Weile.",
            ar: "لا فائدة من العجلة، يجب أن تبدأ في الوقت المناسب"
        }
    },
    {
        french: "Tout vient à point à qui sait attendre.",
        translations: {
            en: "All things come to those who wait.",
            de: "Geduld bringt Rosen.",
            ar: "كل شيء يأتي في وقته لمن يعرف الانتظار"
        }
    },
    {
        french: "Un tiens vaut mieux que deux tu l'auras.",
        translations: {
            en: "A bird in the hand is worth two in the bush.",
            de: "Ein Spatz in der Hand ist besser als eine Taube auf dem Dach.",
            ar: "عصفور في اليد خير من عشرة على الشجرة"
        }
    },
    {
        french: "Vouloir, c'est pouvoir.",
        translations: {
            en: "Where there's a will, there's a way.",
            de: "Wo ein Wille ist, ist auch ein Weg.",
            ar: "حيث توجد الإرادة، توجد الطريقة"
        }
    },
    {
        french: "À chaque jour suffit sa peine.",
        translations: {
            en: "Each day has enough trouble of its own.",
            de: "Jeder Tag hat seine eigene Plage.",
            ar: "كل يوم يكفيه شره"
        }
    },
    {
        french: "À cœur vaillant rien d'impossible.",
        translations: {
            en: "Nothing is impossible for a willing heart.",
            de: "Dem mutigen Herzen ist nichts unmöglich.",
            ar: "لا شيء مستحيل للقلب الشجاع"
        }
    },
    {
        french: "À l'impossible nul n'est tenu.",
        translations: {
            en: "No one is bound to do the impossible.",
            de: "Niemand ist verpflichtet, das Unmögliche zu tun.",
            ar: "لا أحد ملزم بفعل المستحيل"
        }
    },
    {
        french: "À la guerre comme à la guerre.",
        translations: {
            en: "In war as in war.",
            de: "Im Krieg wie im Krieg.",
            ar: "في الحرب كما في الحرب"
        }
    },
    {
        french: "À la queue leu leu.",
        translations: {
            en: "In single file.",
            de: "In einer Reihe.",
            ar: "في صف واحد"
        }
    },
    {
        french: "À l'œuvre on connaît l'artisan.",
        translations: {
            en: "The work shows the craftsman.",
            de: "An der Arbeit erkennt man den Handwerker.",
            ar: "من العمل يعرف الحرفي"
        }
    },
    {
        french: "À malin, malin et demi.",
        translations: {
            en: "Set a thief to catch a thief.",
            de: "Gegen einen Schurken hilft nur ein anderer Schurke.",
            ar: "للسارق سارق ونصف"
        }
    },
    {
        french: "À père avare, fils prodigue.",
        translations: {
            en: "A miserly father makes a prodigal son.",
            de: "Ein geiziger Vater macht einen verschwenderischen Sohn.",
            ar: "الأب البخيل يصنع ابناً مسرفاً"
        }
    },
    {
        french: "À quelque chose malheur est bon.",
        translations: {
            en: "Every cloud has a silver lining.",
            de: "Jedes Unglück hat auch sein Gutes.",
            ar: "في كل مصيبة خير"
        }
    },
    {
        french: "À qui se lève matin, Dieu aide et prête la main.",
        translations: {
            en: "God helps those who rise early.",
            de: "Gott hilft denen, die früh aufstehen.",
            ar: "الله يساعد من يستيقظ مبكراً"
        }
    },
    {
        french: "À qui sait attendre, le temps ouvre ses portes.",
        translations: {
            en: "Time opens its doors to those who know how to wait.",
            de: "Die Zeit öffnet ihre Türen für diejenigen, die zu warten wissen.",
            ar: "الوقت يفتح أبوابه لمن يعرف الانتظار"
        }
    },
    {
        french: "À tout seigneur, tout honneur.",
        translations: {
            en: "To each his due.",
            de: "Jedem das Seine.",
            ar: "لكل سيد كل التكريم"
        }
    },
    {
        french: "À vaincre sans péril, on triomphe sans gloire.",
        translations: {
            en: "To win without risk is to triumph without glory.",
            de: "Ohne Gefahr zu siegen ist ein Triumph ohne Ruhm.",
            ar: "الانتصار بدون مخاطرة هو انتصار بدون مجد"
        }
    },
    {
        french: "Abondance de biens ne nuit pas.",
        translations: {
            en: "Plenty is no plague.",
            de: "Überfluss schadet nicht.",
            ar: "الوفرة لا تضر"
        }
    },
    {
        french: "Adieu paniers, vendanges sont faites.",
        translations: {
            en: "The game is up.",
            de: "Das Spiel ist aus.",
            ar: "انتهت اللعبة"
        }
    },
    {
        french: "Aide-toi, le Ciel t'aidera.",
        translations: {
            en: "Help yourself and Heaven will help you.",
            de: "Hilf dir selbst, dann hilft dir der Himmel.",
            ar: "ساعد نفسك وسيساعدك السماء"
        }
    },
    {
        french: "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
        translations: {
            en: "Love is not looking at each other, it's looking together in the same direction.",
            de: "Lieben bedeutet nicht, sich gegenseitig anzusehen, sondern gemeinsam in die gleiche Richtung zu schauen.",
            ar: "الحب ليس أن تنظر إلى بعضكما، بل أن تنظرا معاً في نفس الاتجاه"
        }
    },
    {
        french: "Ainsi va le monde.",
        translations: {
            en: "That's the way the world goes.",
            de: "So geht die Welt.",
            ar: "هكذا تسير الدنيا"
        }
    },
    {
        french: "Ami de tous, ami de personne.",
        translations: {
            en: "A friend to all is a friend to none.",
            de: "Ein Freund aller ist ein Freund keines.",
            ar: "صديق الجميع ليس صديقاً لأحد"
        }
    },
    {
        french: "Amour, toux et fumée ne peuvent être cachés.",
        translations: {
            en: "Love, cough, and smoke cannot be hidden.",
            de: "Liebe, Husten und Rauch können nicht verborgen werden.",
            ar: "الحب والسعال والدخان لا يمكن إخفاؤها"
        }
    },
    {
        french: "Après la pluie le beau temps.",
        translations: {
            en: "After rain comes fair weather.",
            de: "Nach dem Regen kommt die Sonne.",
            ar: "بعد المطر يأتي الطقس الجميل"
        }
    },
    {
        french: "Après nous le déluge.",
        translations: {
            en: "After us, the flood.",
            de: "Nach uns die Sintflut.",
            ar: "بعدنا الطوفان"
        }
    },
    {
        french: "Au bout du fossé la culbute.",
        translations: {
            en: "At the end of the ditch, the fall.",
            de: "Am Ende des Grabens der Sturz.",
            ar: "في نهاية الخندق السقوط"
        }
    },
    {
        french: "Au pays des aveugles les borgnes sont rois.",
        translations: {
            en: "In the land of the blind, the one-eyed man is king.",
            de: "Im Land der Blinden ist der Einäugige König.",
            ar: "في بلاد العميان، الأعرج ملك"
        }
    },
    {
        french: "Aucun chemin de fleurs ne conduit à la gloire.",
        translations: {
            en: "No path of flowers leads to glory.",
            de: "Kein Blumenweg führt zum Ruhm.",
            ar: "لا طريق من الزهور يؤدي إلى المجد"
        }
    },
    {
        french: "Aujourd'hui en fleurs, demain en pleurs.",
        translations: {
            en: "Today in flowers, tomorrow in tears.",
            de: "Heute in Blumen, morgen in Tränen.",
            ar: "اليوم في الزهور، غداً في الدموع"
        }
    },
    {
        french: "Avec des si on mettrait Paris en bouteille.",
        translations: {
            en: "With ifs you could put Paris in a bottle.",
            de: "Mit Wenn könnte man Paris in eine Flasche stecken.",
            ar: "بالـ 'لو' يمكن وضع باريس في زجاجة"
        }
    },
    {
        french: "Avoir le cœur sur la main.",
        translations: {
            en: "To wear one's heart on one's sleeve.",
            de: "Das Herz auf der Zunge tragen.",
            ar: "أن يكون القلب على اليد"
        }
    },
    {
        french: "Bien faire et laisser dire.",
        translations: {
            en: "Do well and let them talk.",
            de: "Tue Gutes und lass sie reden.",
            ar: "افعل الخير ودعهم يتحدثون"
        }
    },
    {
        french: "Bonne renommée vaut mieux que ceinture dorée.",
        translations: {
            en: "A good reputation is better than a golden belt.",
            de: "Ein guter Ruf ist besser als ein goldener Gürtel.",
            ar: "السمعة الحسنة أفضل من الحزام الذهبي"
        }
    },
    {
        french: "C'est au pied du mur qu'on voit le maçon.",
        translations: {
            en: "It's at the foot of the wall that you see the mason.",
            de: "Am Fuß der Mauer sieht man den Maurer.",
            ar: "عند قدم الجدار ترى البنّاء"
        }
    },
    {
        french: "C'est la goutte d'eau qui fait déborder le vase.",
        translations: {
            en: "It's the last straw that breaks the camel's back.",
            de: "Der Tropfen, der das Fass zum Überlaufen bringt.",
            ar: "إنها القطرة التي تجعل الإناء يفيض"
        }
    },
    {
        french: "C'est le ton qui fait la musique.",
        translations: {
            en: "It's the tone that makes the music.",
            de: "Der Ton macht die Musik.",
            ar: "النغمة هي التي تصنع الموسيقى"
        }
    },
    {
        french: "C'est toujours la même chanson.",
        translations: {
            en: "It's always the same old song.",
            de: "Es ist immer das gleiche Lied.",
            ar: "إنها دائماً نفس الأغنية"
        }
    },
    {
        french: "Ce n'est pas la mer à boire.",
        translations: {
            en: "It's not the end of the world.",
            de: "Es ist nicht das Ende der Welt.",
            ar: "إنها ليست نهاية العالم"
        }
    },
    {
        french: "Ce qui est fait n'est plus à faire.",
        translations: {
            en: "What's done is done.",
            de: "Was getan ist, ist getan.",
            ar: "ما تم لا يمكن إعادته"
        }
    },
    {
        french: "Ce qui vient de la flûte s'en va au tambour.",
        translations: {
            en: "What goes around comes around.",
            de: "Wie man in den Wald hineinruft, so schallt es heraus.",
            ar: "ما يأتي من المزمار يذهب إلى الطبل"
        }
    },
    {
        french: "Il faut laver son linge sale en famille.",
        translations: {
            en: "Dirty laundry should be washed at home.",
            de: "Schmutzige Wäsche wäscht man in der Familie.",
            ar: "يجب غسل الملابس القذرة في العائلة"
        }
    },
    {
        french: "Il faut qu'une porte soit ouverte ou fermée.",
        translations: {
            en: "A door must be either open or closed.",
            de: "Eine Tür muss entweder offen oder geschlossen sein.",
            ar: "يجب أن تكون الباب مفتوحة أو مغلقة"
        }
    },
    {
        french: "Il faut réfléchir avant d'agir.",
        translations: {
            en: "Think before you act.",
            de: "Denke nach, bevor du handelst.",
            ar: "يجب التفكير قبل التصرف"
        }
    },
    {
        french: "Il n'est pire eau que l'eau qui dort.",
        translations: {
            en: "Still waters run deep.",
            de: "Stille Wasser sind tief.",
            ar: "لا ماء أسوأ من الماء الراكد"
        }
    },
    {
        french: "Il n'est pire sourd que celui qui ne veut pas entendre.",
        translations: {
            en: "None so deaf as those who will not hear.",
            de: "Keiner ist so taub wie der, der nicht hören will.",
            ar: "لا أشد صمماً ممن لا يريد أن يسمع"
        }
    },
    {
        french: "Il n'y a pas de rose sans épines.",
        translations: {
            en: "There's no rose without thorns.",
            de: "Keine Rose ohne Dornen.",
            ar: "لا وردة بدون أشواك"
        }
    },
    {
        french: "Il n'y a que le premier pas qui coûte.",
        translations: {
            en: "The first step is the hardest.",
            de: "Nur der erste Schritt kostet Überwindung.",
            ar: "الخطوة الأولى هي الأصعب"
        }
    },
    {
        french: "Il vaut mieux prévenir que guérir.",
        translations: {
            en: "Prevention is better than cure.",
            de: "Vorbeugen ist besser als heilen.",
            ar: "الوقاية خير من العلاج"
        }
    },
    {
        french: "L'appétit vient en mangeant.",
        translations: {
            en: "Appetite comes with eating.",
            de: "Der Appetit kommt beim Essen.",
            ar: "الشهية تأتي مع الأكل"
        }
    },
    {
        french: "L'arbre cache souvent la forêt.",
        translations: {
            en: "The tree often hides the forest.",
            de: "Der Baum versteckt oft den Wald.",
            ar: "الشجرة تخفي الغابة غالباً"
        }
    },
    {
        french: "L'argent est un bon serviteur mais un mauvais maître.",
        translations: {
            en: "Money is a good servant but a bad master.",
            de: "Geld ist ein guter Diener, aber ein schlechter Herr.",
            ar: "المال خادم جيد لكن سيد سيء"
        }
    },
    {
        french: "L'erreur est humaine.",
        translations: {
            en: "To err is human.",
            de: "Irren ist menschlich.",
            ar: "الخطأ إنساني"
        }
    },
    {
        french: "L'herbe est toujours plus verte ailleurs.",
        translations: {
            en: "The grass is always greener on the other side.",
            de: "Das Gras ist immer grüner auf der anderen Seite.",
            ar: "العشب دائماً أكثر اخضراراً في مكان آخر"
        }
    },
    {
        french: "L'oisiveté est la mère de tous les vices.",
        translations: {
            en: "Idleness is the mother of all vices.",
            de: "Müßiggang ist aller Laster Anfang.",
            ar: "الكسل أم كل الرذائل"
        }
    },
    {
        french: "L'union fait la force.",
        translations: {
            en: "Unity is strength.",
            de: "Einigkeit macht stark.",
            ar: "الاتحاد قوة"
        }
    },
    {
        french: "La beauté est dans l'œil de celui qui regarde.",
        translations: {
            en: "Beauty is in the eye of the beholder.",
            de: "Schönheit liegt im Auge des Betrachters.",
            ar: "الجمال في عين الناظر"
        }
    },
    {
        french: "La fin justifie les moyens.",
        translations: {
            en: "The end justifies the means.",
            de: "Der Zweck heiligt die Mittel.",
            ar: "الغاية تبرر الوسيلة"
        }
    },
    {
        french: "La fortune sourit aux audacieux.",
        translations: {
            en: "Fortune smiles on the bold.",
            de: "Das Glück lächelt den Mutigen.",
            ar: "الحظ يبتسم للجرئين"
        }
    },
    {
        french: "La parole est d'argent, le silence est d'or.",
        translations: {
            en: "Speech is silver, silence is gold.",
            de: "Reden ist Silber, Schweigen ist Gold.",
            ar: "الكلام فضة، الصمت ذهب"
        }
    },
    {
        french: "La patience est amère, mais son fruit est doux.",
        translations: {
            en: "Patience is bitter, but its fruit is sweet.",
            de: "Geduld ist bitter, aber ihre Frucht ist süß.",
            ar: "الصبر مر لكن ثمرته حلوة"
        }
    },
    {
        french: "La plus belle fille du monde ne peut donner que ce qu'elle a.",
        translations: {
            en: "The most beautiful girl in the world can only give what she has.",
            de: "Das schönste Mädchen der Welt kann nur geben, was es hat.",
            ar: "أجمل فتاة في العالم لا تستطيع أن تعطي إلا ما لديها"
        }
    },
    {
        french: "La raison du plus fort est toujours la meilleure.",
        translations: {
            en: "Might makes right.",
            de: "Die Vernunft des Stärkeren ist immer die beste.",
            ar: "حجة الأقوى هي دائماً الأفضل"
        }
    },
    {
        french: "Le mieux est l'ennemi du bien.",
        translations: {
            en: "The best is the enemy of the good.",
            de: "Das Bessere ist der Feind des Guten.",
            ar: "الأفضل هو عدو الجيد"
        }
    },
    {
        french: "Le temps est un grand maître.",
        translations: {
            en: "Time is a great teacher.",
            de: "Die Zeit ist ein großer Lehrer.",
            ar: "الوقت معلم عظيم"
        }
    },
    {
        french: "Le temps perdu ne se rattrape jamais.",
        translations: {
            en: "Lost time is never found again.",
            de: "Verlorene Zeit wird nie wieder gefunden.",
            ar: "الوقت الضائع لا يعود أبداً"
        }
    },
    {
        french: "Les absents ont toujours tort.",
        translations: {
            en: "The absent are always wrong.",
            de: "Die Abwesenden haben immer Unrecht.",
            ar: "الغائبون دائماً على خطأ"
        }
    },
    {
        french: "Les bons comptes font les bons amis.",
        translations: {
            en: "Good accounts make good friends.",
            de: "Gute Rechnung macht gute Freunde.",
            ar: "الحسابات الجيدة تصنع أصدقاء جيدين"
        }
    },
    {
        french: "Les cordonniers sont toujours les plus mal chaussés.",
        translations: {
            en: "Cobblers' children are always the worst shod.",
            de: "Schuster haben immer die schlechtesten Schuhe.",
            ar: "الإسكافيون دائماً أسوأ من يلبس الأحذية"
        }
    },
    {
        french: "Les petits ruisseaux font les grandes rivières.",
        translations: {
            en: "Little streams make great rivers.",
            de: "Kleine Bäche machen große Flüsse.",
            ar: "التيارات الصغيرة تصنع الأنهار الكبيرة"
        }
    },
    {
        french: "Loin des yeux, loin du cœur.",
        translations: {
            en: "Out of sight, out of mind.",
            de: "Aus den Augen, aus dem Sinn.",
            ar: "بعيد عن العين، بعيد عن القلب"
        }
    },
    {
        french: "Mieux vaut prévenir que guérir.",
        translations: {
            en: "Prevention is better than cure.",
            de: "Vorbeugen ist besser als heilen.",
            ar: "الوقاية خير من العلاج"
        }
    },
    {
        french: "Nécessité fait loi.",
        translations: {
            en: "Necessity knows no law.",
            de: "Not kennt kein Gebot.",
            ar: "الضرورة تقتضي القانون"
        }
    },
    {
        french: "Nul n'est prophète en son pays.",
        translations: {
            en: "No man is a prophet in his own country.",
            de: "Niemand ist Prophet im eigenen Land.",
            ar: "لا أحد نبي في بلده"
        }
    },
    {
        french: "On ne fait pas d'omelette sans casser des œufs.",
        translations: {
            en: "You can't make an omelette without breaking eggs.",
            de: "Man kann kein Omelett machen, ohne Eier zu zerbrechen.",
            ar: "لا يمكن صنع عجة بدون كسر البيض"
        }
    },
    {
        french: "On ne peut pas avoir le beurre et l'argent du beurre.",
        translations: {
            en: "You can't have your cake and eat it too.",
            de: "Man kann nicht den Kuchen haben und ihn auch essen.",
            ar: "لا يمكن أن يكون لديك الزبدة ومال الزبدة"
        }
    }
];

// DOM Elements
const frenchProverbElement = document.getElementById('french-proverb');
const translationElement = document.getElementById('translation');
const newProverbButton = document.getElementById('new-proverb');
const languageButtons = document.querySelectorAll('.lang-btn');
const themeSwitch = document.getElementById('checkbox');
const favoriteButton = document.getElementById('favorite-btn');
const favoritesList = document.getElementById('favorites-list');
const favoritesContainer = document.querySelector('.favorites-container');
const notification = document.getElementById('notification');
const copyButtons = document.querySelectorAll('.copy-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const historyBtn = document.getElementById('history-btn');
const historyContainer = document.querySelector('.history-container');
const historyList = document.getElementById('history-list');
const shareModal = document.getElementById('share-modal');
const shareButtons = document.querySelectorAll('.share-btn');
const closeModal = document.querySelector('.close-modal');
const categoryTags = document.querySelectorAll('.category-tag');

// Current state
let currentLang = 'en';
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let proverbHistory = JSON.parse(localStorage.getItem('proverbHistory')) || [];
let currentProverb = null;
let currentCategory = 'all';

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeSwitch.checked = savedTheme === 'dark';

// Theme switch event listener
themeSwitch.addEventListener('change', (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// Function to show notification
function showNotification(message, type = 'success') {
    notification.textContent = message;
    notification.className = 'notification show';
    if (type === 'error') {
        notification.classList.add('error');
    }
    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.remove('error');
    }, 3000);
}

// Function to get a random proverb
function getRandomProverb() {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    return proverbs[randomIndex];
}

// Function to display a proverb
function displayProverb(proverb) {
    currentProverb = proverb;
    frenchProverbElement.textContent = proverb.french;
    translationElement.textContent = proverb.translations[currentLang];
    
    // Add fade-in animation
    frenchProverbElement.style.opacity = '0';
    translationElement.style.opacity = '0';
    
    setTimeout(() => {
        frenchProverbElement.style.opacity = '1';
        translationElement.style.opacity = '1';
    }, 100);

    // Update favorite button state
    updateFavoriteButton(proverb);
    
    // Add to history
    addToHistory(proverb);
    
    // Show meaning if available
    if (proverb.meanings) {
        showProverbMeaning(proverb);
    }
}

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    if (currentProverb) {
        translationElement.textContent = currentProverb.translations[lang];
        if (currentProverb.meanings) {
            showProverbMeaning(currentProverb);
        }
    }
    updateFavoritesList();
    updateHistoryDisplay();
}

// Function to update favorite button state
function updateFavoriteButton(proverb) {
    const isFavorite = favorites.some(fav => fav.french === proverb.french);
    favoriteButton.classList.toggle('active', isFavorite);
    favoriteButton.innerHTML = isFavorite ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
}

// Function to toggle favorite
function toggleFavorite() {
    if (!currentProverb) return;

    const index = favorites.findIndex(fav => fav.french === currentProverb.french);
    if (index === -1) {
        favorites.push(currentProverb);
        showNotification('Added to favorites!');
    } else {
        favorites.splice(index, 1);
        showNotification('Removed from favorites!');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButton(currentProverb);
    updateFavoritesList();
}

// Function to update favorites list
function updateFavoritesList() {
    if (favorites.length === 0) {
        favoritesContainer.classList.remove('active');
        return;
    }

    favoritesContainer.classList.add('active');
    favoritesList.innerHTML = favorites.map(proverb => `
        <div class="favorite-item" data-proverb="${proverb.french}">
            <div class="favorite-content">
                <p>${proverb.french}</p>
                <small>${proverb.translations[currentLang]}</small>
            </div>
            <div class="favorite-actions">
                <button class="action-btn copy-btn" data-copy-french="${proverb.french}" data-copy-translation="${proverb.translations[currentLang]}" title="Copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button class="action-btn remove-favorite-btn" title="Remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `).join('');

    // Add event listeners to new buttons
    document.querySelectorAll('.favorite-item .copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const text = e.target.closest('.copy-btn').dataset.copyTranslation;
            navigator.clipboard.writeText(text);
            showNotification('Copied to clipboard!');
        });
    });

    // Add event listeners for remove buttons
    document.querySelectorAll('.favorite-item .remove-favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const favoriteItem = e.target.closest('.favorite-item');
            const proverbText = favoriteItem.dataset.proverb;
            const index = favorites.findIndex(fav => fav.french === proverbText);
            if (index !== -1) {
                favorites.splice(index, 1);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                updateFavoritesList();
                showNotification('Removed from favorites');
            }
        });
    });
}

// Function to add to history
function addToHistory(proverb) {
    const existingIndex = proverbHistory.findIndex(p => p.french === proverb.french);
    if (existingIndex !== -1) {
        proverbHistory.splice(existingIndex, 1);
    }
    
    proverbHistory.unshift(proverb);
    if (proverbHistory.length > 10) {
        proverbHistory.pop();
    }
    localStorage.setItem('proverbHistory', JSON.stringify(proverbHistory));
    updateHistoryDisplay();
}

// Function to update history display
function updateHistoryDisplay() {
    if (proverbHistory.length === 0) {
        historyContainer.classList.remove('active');
        return;
    }

    historyContainer.classList.add('active');
    historyList.innerHTML = proverbHistory.map(proverb => `
        <div class="history-item">
            <p>${proverb.french}</p>
            <small>${proverb.translations[currentLang]}</small>
        </div>
    `).join('');

    // Add click event listeners to history items
    document.querySelectorAll('.history-item').forEach(item => {
        item.addEventListener('click', () => {
            const proverbText = item.querySelector('p').textContent;
            const proverb = proverbHistory.find(p => p.french === proverbText);
            if (proverb) {
                displayProverb(proverb);
                historyContainer.classList.remove('active');
            }
        });
    });
}

// Search functionality
function searchProverbs(query) {
    if (!query.trim()) {
        showNotification('Please enter a search term', 'error');
        return;
    }

    query = query.toLowerCase().trim();
    const results = proverbs.filter(proverb => 
        proverb.french.toLowerCase().includes(query) ||
        proverb.translations.en.toLowerCase().includes(query) ||
        proverb.translations.de.toLowerCase().includes(query) ||
        proverb.translations.ar.includes(query)
    );
    
    if (results.length > 0) {
        const randomResult = results[Math.floor(Math.random() * results.length)];
        displayProverb(randomResult);
        showNotification(`${results.length} proverb(s) found!`);
        highlightSearchTerm(query);
    } else {
        showNotification('No proverbs found', 'error');
    }
}

// Function to highlight search terms
function highlightSearchTerm(query) {
    const frenchText = frenchProverbElement.textContent;
    const translationText = translationElement.textContent;
    
    const highlightedFrench = frenchText.replace(
        new RegExp(query, 'gi'),
        match => `<span class="highlight">${match}</span>`
    );
    
    const highlightedTranslation = translationText.replace(
        new RegExp(query, 'gi'),
        match => `<span class="highlight">${match}</span>`
    );
    
    frenchProverbElement.innerHTML = highlightedFrench;
    translationElement.innerHTML = highlightedTranslation;
}

// Share functionality
function openShareModal() {
    shareModal.classList.add('active');
}

function closeShareModal() {
    shareModal.classList.remove('active');
}

// Category functionality
function filterProverbs(category) {
    currentCategory = category;
    if (category === 'all') {
        displayProverb(getRandomProverb());
    } else {
        const filteredProverbs = proverbs.filter(p => p.category === category);
        if (filteredProverbs.length > 0) {
            const randomProverb = filteredProverbs[Math.floor(Math.random() * filteredProverbs.length)];
            displayProverb(randomProverb);
        } else {
            showNotification('No proverbs in this category', 'error');
        }
    }
}

// Function to show proverb meaning
function showProverbMeaning(proverb) {
    if (!proverb.meanings) return;
    
    const meaningContainer = document.createElement('div');
    meaningContainer.className = 'proverb-meaning';
    meaningContainer.innerHTML = `
        <h4><i class="fas fa-lightbulb"></i> Meaning</h4>
        <p>${proverb.meanings[currentLang]}</p>
    `;
    
    const existingMeaning = document.querySelector('.proverb-meaning');
    if (existingMeaning) {
        existingMeaning.remove();
    }
    
    document.querySelector('.proverb-card').appendChild(meaningContainer);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize with a random proverb
    displayProverb(getRandomProverb());
    updateFavoritesList();
    updateHistoryDisplay();

    // New proverb button
    newProverbButton.addEventListener('click', () => {
        filterProverbs(currentCategory);
    });

    // Language buttons
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            languageButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            changeLanguage(button.dataset.lang);
        });
    });

    // Favorite button
    favoriteButton.addEventListener('click', toggleFavorite);

    // History button
    historyBtn.addEventListener('click', () => {
        historyContainer.classList.toggle('active');
        if (historyContainer.classList.contains('active')) {
            updateHistoryDisplay();
        }
    });

    // Search functionality
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchProverbs(query);
        } else {
            showNotification('Please enter a search term', 'error');
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                searchProverbs(query);
            } else {
                showNotification('Please enter a search term', 'error');
            }
        }
    });

    // Category tags
    categoryTags.forEach(tag => {
        tag.addEventListener('click', () => {
            categoryTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            filterProverbs(tag.dataset.category);
        });
    });

    // Share modal
    shareButtons.forEach(btn => {
        btn.addEventListener('click', openShareModal);
    });

    closeModal.addEventListener('click', closeShareModal);
    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) {
            closeShareModal();
        }
    });

    // Share options
    document.querySelectorAll('.share-option').forEach(option => {
        option.addEventListener('click', () => {
            if (!currentProverb) return;
            
            const platform = option.dataset.platform;
            const text = `${currentProverb.french}\n\n${currentProverb.translations[currentLang]}`;
            let url = '';
            
            switch (platform) {
                case 'twitter':
                    url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
                    break;
                case 'facebook':
                    url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(text)}`;
                    break;
                case 'whatsapp':
                    url = `https://wa.me/?text=${encodeURIComponent(text)}`;
                    break;
                case 'telegram':
                    url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
                    break;
            }
            
            window.open(url, '_blank');
            closeShareModal();
            showNotification('Sharing...');
        });
    });

    // Copy buttons
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const text = button.dataset.copy === 'french' ? 
                frenchProverbElement.textContent : 
                translationElement.textContent;
            navigator.clipboard.writeText(text);
            showNotification('Copied to clipboard!');
        });
    });

    // Audio buttons
    document.querySelectorAll('.audio-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!currentProverb) return;
            
            const text = btn.closest('.proverb-french') ? 
                currentProverb.french : 
                currentProverb.translations[currentLang];
            
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = btn.closest('.proverb-french') ? 'fr-FR' : 
                    currentLang === 'en' ? 'en-US' : 
                    currentLang === 'de' ? 'de-DE' : 'ar-SA';
                
                window.speechSynthesis.speak(utterance);
                showNotification('Playing audio...');
            } else {
                showNotification('Speech synthesis is not supported in your browser', 'error');
            }
        });
    });
}); 