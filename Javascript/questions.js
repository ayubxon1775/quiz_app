// Array of questions grouped by category (25 questions each)

const questions = [
  {
    category: "HTML",
    questions: [
      // 1
      {
        question: "HTML nima?",
        options: ["Dasturlash tili", "HyperText Markup Language", 'Style yaratish tili', "Ma'lumotlar bazasi tili"],
        correctAnswer: 1,
      },
      // 2
      {
        question: "<h1> tegining vazifasi nima?",
        options: ["Havolalar yaratish", "Eng katta sarlavha yaratish", 'Paragraf yaratish', "Rasm qo'shish"],
        correctAnswer: 1,
      },
      // 3
      {
        question: "<a> tegi nimani anglatadi?",
        options: ["Audio", "Video", "Havola (link)", "Rasmlar"],
        correctAnswer: 2,
      },
      // 4
      {
        question: "HTMLda matnni qalin ko'rinishda qilish uchun qaysi teg ishlatiladi?",
        options: ["<b>", "<i>", "<u>", "<p>"],
        correctAnswer: 0,
      },
      // 5
      {
        question: "HTMLda tasvirni qo'shish uchun qaysi teg ishlatiladi?",
        options: ["<img>", "<image>", "<picture>", "<photo>"],
        correctAnswer: 0,
      },
      // 6
      {
        question: "HTMLda qaysi teg jadval yaratish uchun ishlatiladi?",
        options: ["<tr>", "<td>", "<th>", "<table>"],
        correctAnswer: 3,
      },
      // 7
      {
        question: "HTMLda qaysi atribut havola manzilini ko'rsatadi?",
        options: ["href", "src", "alt", "title"],
        correctAnswer: 0,
      },
      // 8
      {
        question: "<ul> tegi nimani anglatadi?",
        options: ["Belgili ro'yxat", "Jadval", "Belgisiz ro'yxat", "Havola"],
        correctAnswer: 2,
      },
      // 9
      {
        question: "HTMLda yangi qatorga o'tish uchun qaysi teg ishlatiladi?",
        options: ["<p>", "<br>", "<hr>", "<div>"],
        correctAnswer: 1,
      },
      // 10
      {
        question: "HTMLda bo'sh joyni ko'rsatish uchun qaysi teg ishlatiladi?",
        options: ["&nbsp;", "<space>", "<tab>", "&br;"],
        correctAnswer: 0,
      },
      // 11
      {
        question: "HTMLda <!DOCTYPE> nimani anglatadi?",
        options: ["CSS ulash", "Rasm yuklash", "Faylni bosma shaklda chiqarish", "HTML faylning versiyasini aniqlash"],
        correctAnswer: 3,
      },
      // 12
      {
        question: "HTML hujjati qaysi teg bilan boshlanadi?",
        options: ["<html>", "<body>", "<head>", "<meta>"],
        correctAnswer: 0,
      },
      // 13
      {
        question: "Qaysi teg matnni qiyshaytirib yozadi?",
        options: ["<u>", "<b>", "<i>", "<p>"],
        correctAnswer: 2,
      },
      // 14
      {
        question: "HTMLda rasmning alternativ matnini ko'rsatish uchun qaysi atribut ishlatiladi?",
        options: ["src", "alt", "title", "href"],
        correctAnswer: 1,
      },
      // 15
      {
        question: "HTMLda qaysi teg gorizontal chiziq chizadi?",
        options: ["<hr>", "<br>", "<div>", "<h>"],
        correctAnswer: 0,
      },
      // 16
      {
        question: "<title> tegi qayerda ishlatiladi?",
        options: ["Body ichida", "Head ichida", "Footer ichida", "Jadval ichida"],
        correctAnswer: 1,
      },
      // 17
      {
        question: "HTML hujjatida qaysi teg kontentni ajratib turadi?",
        options: ["<div>", "<span>", "<section>", "Barchasi"],
        correctAnswer: 3,
      },
      // 18
      {
        question: "<meta> tegi qayerda ishlatiladi?",
        options: ["Body", "Head", "Footer", "Rasm tagida"],
        correctAnswer: 1,
      },
      // 19
      {
        question: "HTMLda qaysi teg oddiy matn sarlavhasini aniqlaydi?",
        options: ["<h>", "<header>", "<h1>", "<head>"],
        correctAnswer: 2,
      },
      // 20
      
      // 21
      {
        question: "HTML hujjatining asosiy qismi qaysi teg ichida yoziladi?",
        options: ["<body>", "<main>", "<article>", "<section>"],
        correctAnswer: 0,
      },
      // 22
      {
        question: "Qaysi teg matnning ustiga o'qib bo'lmaydigan qilib chizib qo'yadi?",
        options: ["strike", "del", "text-decoration: line-through", "None"],
        correctAnswer: 1,
      },
      // 23
      {
        question: "Faviconni HTMLga qanday qo'shish mumkin?",
        options: ["<img> orqali", "<link> orqali", "<meta> orqali", "<title> orqali"],
        correctAnswer: 1,
      },
      // 24
      {
        question: "<iframe> tegi nimani anglatadi?",
        options: ["Rasmni qo'yish", "Hujjatni ichiga qo'yish", "Video yuklash", "Matn yozish"],
        correctAnswer: 2,
      },
      // 25
     
      // 26
      {
        question: "HTMLda qaysi atribut shaklning jo'natiladigan manzilini belgilaydi?",
        options: ["action", "method", "enctype", "name"],
        correctAnswer: 0,
      },
      // 27
      {
        question: "<strong> tegi HTMLda qanday vazifani bajaradi?",
        options: ["Matnni chiroyli qilish", "Matnni muhimligini ko'rsatish", "Matnni yon tomonga egish", "Matnni ustiga chizish"],
        correctAnswer: 1,
      },
      // 28
      
      // 29
      {
        question: "HTMLda qaysi atribut kiritilgan ma'lumotni cheklash uchun ishlatiladi?",
        options: ["minlength", "maxlength", "size", "placeholder"],
        correctAnswer: 1,
      },
      // 30
      {
        question: "HTMLda <mark> tegining vazifasi nima?",
        options: ["Matnni belgilash (ajratib ko'rsatish)", "Matnni yashirish", "Matnni katta qilish", "Matnni bo'sh joy bilan ajratish"],
        correctAnswer: 0,
      },
      // 31
      {
        question: "<nav> tegi HTMLda qanday maqsadda ishlatiladi?",
        options: [" Sayt bo'ylab harakatlanish (navigatsiya)", "Matnni chiroyli ko'rsatish", "Videoni qo'yish", "Rasmlarni qo'shish"],
        correctAnswer: 0,
      },
      // 32
      {
        question: "HTMLda <fieldset> tegi nima uchun ishlatiladi?",
        options: ["Shaklni birlashtirish uchun", "Shakldagi elementlarni guruhlash uchun", "Ma'lumotlar bazasini ulash uchun", "Jadvalni sarlavhasini o'zgartirish uchun"],
        correctAnswer: 1,
      },
      // 33
      {
        question: "HTMLda <legend> tegi qayerda ishlatiladi?",
        options: ["<fieldset> ichida", "<form> ichida", "<table> ichida", "<section> ichida"],
        correctAnswer: 0,
      },
      // 34
      {
        question: "Qaysi teg audio faylni HTML sahifasida qo'shadi?",
        options: ["<audio>", "<sound>", "<music>", "<play>"],
        correctAnswer: 0,
      },
      // 35
      {
        question: "HTMLda <canvas> tegi nimani anglatadi?",
        options: ["Grafika chizish joyi", "Matnni o'zgartirish joyi", "Ma'lumotlar joyi", "Audio o'ynash"],
        correctAnswer: 0,
      },
      // 36
      {
        question: "HTMLda qanday qilib tugmani yaratish mumkin?",
        options: ["<btn>", "<button>", "<input>", "<click>"],
        correctAnswer: 1,
      },
      // 37
      {
        question: "HTMLda atributlar qayerda yoziladi?",
        options: ["Teg ichida", "Teg tashqarisida", "Body qismining ichida", "Faqat HTML5da mavjud"],
        correctAnswer: 0,
      },
      // 38
      {
        question: "HTMLda giperhavola yaratish uchun qaysi teg ishlatiladi?",
        options: ["<a>", "<link>", "<href>", "<nav>"],
        correctAnswer: 0,
      },
      // 39
      {
        question: "<a> tegi uchun target='_blank' atributining vazifasi nima?",
        options: ["Havolani shu sahifada yangilash", "Havolani yangi oynada ochish", "Havolani yashirish", "Havolani faqat mobil qurilmalarda ochish"],
        correctAnswer: 1,
      },
      // 40
      {
        question: "HTMLda sahifa ichidagi ma'lum bir joyga havola qilish uchun nima ishlatiladi?",
        options: ['<a href="#id">', '<a id="id">', '<a link="id">', '<a name="id">'],
        correctAnswer: 0,
      },
      // 41
      {
        question: "<link> tegi odatda nimani belgilash uchun ishlatiladi?",
        options: ["Sahifadagi havolani", "Tashqi resursni ulash", "Matnni qalin qilish", "JavaScript fayllarni ulash"],
        correctAnswer: 1,
      },
      // 42
      {
        question: "Tashqi CSS faylni ulash uchun qaysi teg ishlatiladi?",
        options: ["<style>", "<link>", "<a>", "<css>"],
        correctAnswer: 1,
      },
      // 43
      {
        question: "Media querylar qaysi CSS qoidasi uchun ishlatiladi?",
        options: ["Statik dizaynni yaratish uchun", "Sahifani bosib chiqarish uchun", "Turli qurilmalar uchun moslashuvchan dizayn yaratish uchun", "Matnni qalin qilish uchun"],
        correctAnswer: 2,
      },
      // 44
      {
        question: "Quyidagi media query qaysi ekran uchun ishlatiladi?@media (max-width: 480px) { ... } ",
        options: ["kompyuterlar", "Printerlar", "planshetlar", "Mobil qurilmalar"],
        correctAnswer: 3,
      },
        

    ],
  },

  {
    category: "CSS",
    questions: [
      // 1
      {
        question: "CSS qaysi maqsadda ishlatiladi?",
        options: ['HTML hujjatiga stil berish uchun', 'JavaScriptni bajarish uchun', 'Brauzerda fayllarni yuklash uchun', 'Boshqa saytlardan havola olish uchun'],
        correctAnswer: 0,
      },
      // 2
      {
        question: "Inline CSS qanday ishlatiladi?",
        options: ['<style> tegi ichida', 'HTML teglari uchun style atributida', '.css faylida', '<link> orqali'],
        correctAnswer: 1,
      },
      // 3
      {
        question: "CSS qoidasi qanday tuziladi?",
        options: ['<selector> { property: value; }', '<selector> { value: property; }', '{ selector: property; value;}', '{ value: selector; property; }'],
        correctAnswer: 0,
      },
      // 4
      {
        question: "Quyidagi kodni ko‘rib chiqing, nima noto‘g‘ri?  body {background-color blue;}",
        options: ['body noto‘g‘ri selector ishlatilgan', 'Property ishlatilmagan', 'Property va qiymat orasida : yetishmaydi', 'Tugatilmagan ; belgisi bor'],
        correctAnswer: 2,
      },
      // 5
      {
        question: "CSS qoidalarining ustuvorligi qanday tartibda?",
        options: ['Inline CSS > Ichki CSS > Tashqi CSS', 'Tashqi CSS > Ichki CSS > Inline CSS', 'Inline CSS > Tashqi CSS > Ichki CSS', 'Ichki CSS > Inline CSS > Tashqi CSS'],
        correctAnswer: 0,
      },
      // 6
      {
        question: "Matnni qalin qilish uchun qaysi property ishlatiladi?",
        options: ['font-weight', 'font-style', 'font-size', 'text-style'],
        correctAnswer: 0,
      },
      // 7
      {
        question: "Matnni markazga yo‘naltirish uchun qaysi property ishlatiladi?",
        options: ['align-content', 'justify-text', 'text-align', 'center-text'],
        correctAnswer: 2,
      },
      // 8
      {
        question: "Quyidagilardan qaysi biri shrift o‘lchamini o‘rnatadi?",
        options: ['font-size', 'font-height', 'text-height', 'text-size'],
        correctAnswer: 0,
      },
      // 9
      {
        question: "Matnga chiziq chizish uchun qaysi property ishlatiladi?",
        options: ['text-decoration', 'text-line', 'line-decoration', 'line-through'],
        correctAnswer: 0,
      },
      // 10
     
      // 11
       {
        question: "CSSda padding nima qiladi?",
        options: ['Tashqi bo‘shliqni belgilaydi', 'Ichki bo‘shliqni belgilaydi', 'Chegarani belgilaydi', 'Rasmni kengaytiradi'],
        correctAnswer: 1,
      },
      // 12
      {
        question: "Borderning kengligini belgilash uchun qaysi property ishlatiladi?",
        options: ['border-size', 'border-width', 'border-style', 'border-height'],
        correctAnswer: 1,
      },
      // 13
      {
        question: "Elementga qo‘shimcha tashqi bo‘shliq berish uchun qaysi property ishlatiladi?",
        options: ['margin', 'padding', 'border', 'gap'],
        correctAnswer: 0,
      },
      // 14
      {
        question: "Qaysi property yordamida elementning kengligi belgilanadi?",
        options: ['max-width', 'content-width', 'outer-width', 'width'],
        correctAnswer: 3,
      },
      // 15
      {
        question: "Quyidagi borderni belgilash uchun to‘g‘ri kodni toping: Qalin, qizil, chiziqli.",
        options: ['border: solid red 5px;', 'border: red solid 5px;', 'border: 5px solid red;', 'border: 5px red solid;'],
        correctAnswer: 2,
      },
      // 16
      {
        question: "Elementning fon rangi uchun qaysi property ishlatiladi?",
        options: ['color', 'background', 'background-color', 'color-background'],
        correctAnswer: 2,
      },
      // 17
      {
        question: "Quyidagi kod nima qiladi? color: #ffffff;",
        options: ['Matnni qora rangga o‘zgartiradi', 'Matnni oq rangga o‘zgartiradi', 'Matnni shaffof qiladi', 'Matn rangini o‘zgartirmaydi'],
        correctAnswer: 1,
      },
      // 18
      {
        question: "RGBAda alfa nimani ifodalaydi?",
        options: ['Rang darajasini', 'Rang shaffofligini', 'Rang kontrastini', 'Rang hajmini'],
        correctAnswer: 1,
      },
      // 19
      {
        question: "Fonga rasm qo‘shish uchun qaysi property ishlatiladi?",
        options: ['background-image', 'background-picture', 'image-background', 'picture-background'],
        correctAnswer: 0,
      },
      // 20
      {
        question: "Gradients uchun to‘g‘ri sintaksisni toping:",
        options: ['background-color: gradient(to right, red, blue);', 'background: linear-gradient(to right, red, blue);', 'gradient: linear-gradient(to right, red, blue);', 'color-gradient: linear-gradient(to right, red, blue);'],
        correctAnswer: 1,
      },
        // 21
      {
        question: "Flexboxda asosiy o‘qni belgilash uchun qaysi property ishlatiladi?",
        options: ['flex-direction', 'justify-content', 'align-items', 'order'],
        correctAnswer: 0,
      },
      // 22
      {
        question: "Flexboxda joylashishni markazlashtirish uchun to‘g‘ri kodni toping: display: flex; justify-content: center; align-items: ____ ; ",
        options: ['flex-start', 'center', 'baseline', 'flex-end'],
        correctAnswer: 1,
      },
      // 23
      {
        question: "Grid tizimida qatorlar orasidagi bo‘shliqni belgilash uchun qaysi property ishlatiladi?",
        options: ['grid-gap', 'row-gap', 'column-gap', 'grid-template-gap'],
        correctAnswer: 1,
      },
      // 24
      {
        question: "Quyidagi kodda nima noto‘g‘ri? display: grid; grid-template-columns: 100px, 200px",
        options: ['grid-template-columns noto‘g‘ri ishlatilgan', ', o‘rniga (bo‘sh joy) ishlatilishi kerak', 'Kengliklar noto‘g‘ri', 'Grid faollashtirilmagan'],
        correctAnswer: 1,
      },
      // 25
      {
        question: "Flexboxda elementlarni asosiy o‘q bo‘ylab bo‘lish uchun qaysi property ishlatiladi?",
        options: ['align-content', 'align-items', 'justify-content', 'flex-grow'],
        correctAnswer: 2,
      },
      // 26
      {
        question: "Static pozitsiya nima?",
        options: ['Elementning standart pozitsiyasi', 'Elementni absolyut joylashuvga o‘tkazadi', 'Elementni boshqa joyga siljitadi', 'Elementni markazlashtiradi'],
        correctAnswer: 0,
      },
      // 27
      {
        question: "position: relative qaysi holatda ishlatiladi?",
        options: ['Elementni boshqa elementga nisbatan joylashtirish uchun', 'Elementni standart joylashtirish uchun', 'Elementni asosiy o‘qqa bog‘lash uchun', 'Elementni boshqa elementdan ajratish uchun'],
        correctAnswer: 1,
      },
      // 28
      {
        question: "z-index qaysi maqsadda ishlatiladi?",
        options: ['Elementni boshqa element ustiga yoki ostiga joylashtirish uchun', 'Elementni markazlashtirish uchun', 'Rangni o‘zgartirish uchun', 'Elementning kengligini o‘zgartirish uchun'],
        correctAnswer: 0,
      },
      // 29
      {
        question: "Quyidagi kodda element qayerda joylashadi? position:fixed; top:10px; left:20px;",
        options: ['Sahifaning yuqori chap burchagida', 'Brauzerning yuqori chap burchagida', 'O‘rtada joylashadi', 'Hech qayerda ko‘rinmaydi'],
        correctAnswer: 1,
      },
      // 30
      {
        question: "absolute pozitsiyadagi element qaysi elementga nisbatan joylashadi?",
        options: ['relative bo‘lgan eng yaqin ajdodga', 'Hujjatning yuqori chap burchagiga', 'Brauzerning chap burchagiga', 'Har doim boshqa elementga bog‘liq emas'],
        correctAnswer: 0,
      },
       // 31
       {
        question: "Elementni aylantirish uchun qaysi property ishlatiladi?",
        options: ['transform', 'rotate', 'translate', 'scale'],
        correctAnswer: 0,
      },
      // 32
      {
        question: "Transformlar qaysi birliklarda ishlaydi?",
        options: ['Pixel yoki foiz', 'Faqat foiz', 'Gradus (deg), px, foiz', 'Faqat pixel'],
        correctAnswer: 2,
      },
      // 33
      {
        question: "CSS animatsiya yaratish uchun qaysi qoida ishlatiladi?",
        options: ['@animation', '@transition', '@transform', '@keyframes'],
        correctAnswer: 3,
      },
      // 34
      {
        question: "CSSda animatsiya davomiyligini belgilash uchun qaysi property ishlatiladi?",
        options: ['animation-time', 'animation-duration', 'transition-time', 'duration'],
        correctAnswer: 1,
      },
      // 35
      {
        question: "transition qachon ishlatiladi?",
        options: ['Bir elementdan boshqasiga o‘tishda', 'Elementni pozitsiyalash uchun', 'Faqat hover effekti uchun', 'Elementlar ustida o‘tish animatsiyalarini yaratish uchun'],
        correctAnswer: 3,
      },
      // 36
      {
        question: "Media query qanday maqsadda ishlatiladi?",
        options: ["Faqat ranglarni o'zgartirish uchun", "Faqat shrift o'lchamlarini belgilash uchun", "Har xil ekran o'lchamlari uchun stil yozish uchun", 'Animatsiyalar yaratish uchun'],
        correctAnswer: 2,
      },
      // 37
      {
        question: "Quyidagi kod nima qiladi? @media (max-width: 768px) { body  {background-color: lightblue; }}",
        options: ["Ekran kengligi 768px yoki kichik bo'lsa, fonni och ko‘k rangga o‘zgartiradi", "Ekran kengligi faqat 768px bo'lganda fonni o'zgartiradi", "Har doim fonni o'zgartiradi", "Ekran kengligi 768px dan katta bo'lsa, fonni o'zgartiradi"],
        correctAnswer: 0,
      },
      // 38
      {
        question: "Quyidagi media query uchun to‘g‘ri sintaksisni toping:",
        options: ['@media (max-screen: 500px)', '@media (max-width: 500px)', '@media [max-width: 500px]', '@media {max-width: 500px}'],
        correctAnswer: 1,
      },
      // 39
      {
        question: "@media (min-width: 1200px) kodi nimani anglatadi?",
        options: ['Ekran kengligi 1200px dan kichik bo‘lsa, kod ishlaydi', 'Faqat mobil qurilmalar uchun ishlaydi', 'Har doim ishlaydi', 'Ekran kengligi 1200px dan katta yoki teng bo‘lsa, kod ishlaydi'],
        correctAnswer: 3,
      },
      // 40
      {
        question: "Quyidagi kod nima uchun ishlatiladi? @media (orientation: landscape) { body {font-size: 18px;} }",
        options: ["Portret rejimida shrift o'lchamini o'zgartirish uchun", "Landshaft rejimida shrift o'lchamini o'zgartirish uchun", "Barcha qurilmalar uchun shrift o'lchamini belgilash uchun", "Landshaft rejimida fon rangini o'zgartirish uchun"],
        correctAnswer: 1,
      },  
    ],
  },

  {
    category: "JavaScript",
    questions: [
      {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
      },
      {
        question: "What is 15 × 13?",
        options: ["180", "185", "195", "200"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 8³?",
        options: ["512", "216", "256", "128"],
        correctAnswer: 0,
      },
      {
        question: "What is 48 ÷ 6?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 3 + 5 × 4?",
        options: ["20", "22", "24", "23"],
        correctAnswer: 3,
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["180°", "360°", "90°", "270°"],
        correctAnswer: 0,
      },
      {
        question: "What is the perimeter of a square with a side length of 4 cm?",
        options: ["12 cm", "16 cm", "20 cm", "24 cm"],
        correctAnswer: 1,
      },
      {
        question: "What is 11²?",
        options: ["121", "131", "141", "111"],
        correctAnswer: 3,
      },
      {
        question: "What is 9 × 12?",
        options: ["105", "110", "108", "120"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 16 ÷ 4?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
      },
      {
        question: "What is 25% of 200?",
        options: ["30", "40", "50", "60"],
        correctAnswer: 2,
      },
      {
        question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
        options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 10 ÷ 2 + 3?",
        options: ["8", "7", "9", "6"],
        correctAnswer: 1,
      },
      {
        question: "What is 3 × 7 + 2?",
        options: ["20", "21", "22", "23"],
        correctAnswer: 1,
      },
      {
        question: "What is the greatest common divisor (GCD) of 24 and 36?",
        options: ["4", "6", "8", "12"],
        correctAnswer: 3,
      },
      {
        question: "What is the least common multiple (LCM) of 6 and 8?",
        options: ["24", "32", "48", "56"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 2³ × 3?",
        options: ["12", "15", "18", "24"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 10 × (5 + 3)?",
        options: ["80", "70", "60", "50"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 14 × 14?",
        options: ["186", "196", "206", "216"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the first 10 positive integers?",
        options: ["50", "55", "60", "65"],
        correctAnswer: 1,
      },
      {
        question: "What is 12 × 15?",
        options: ["150", "160", "170", "180"],
        correctAnswer: 3,
      },
      {
        question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
        options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of (8 + 2) × 3?",
        options: ["30", "32", "34", "28"],
        correctAnswer: 3,
      },
      {
        question: "What is the value of 50% of 80?",
        options: ["30", "35", "40", "45"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 25 ÷ 5 × 3?",
        options: ["12", "15", "18", "20"],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "Umumiy",
    questions: [
      {
        question: "Who won the Academy Award for Best Actor in 2022?",
        options: ["Leonardo DiCaprio", "Will Smith", "Joaquin Phoenix", "Matthew McConaughey"],
        correctAnswer: 1,
      },
      {
        question: "Which movie won the Academy Award for Best Picture in 2021?",
        options: ["Parasite", "1917", "The Shape of Water", "Nomadland"],
        correctAnswer: 3,
      },
      {
        question: "Who played the character of Jack Dawson in the movie Titanic?",
        options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
        correctAnswer: 0,
      },
      {
        question: "Which TV show featured the characters Daenerys Targaryen and Jon Snow?",
        options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
        correctAnswer: 1,
      },
      {
        question: "Who is known as the 'King of Pop'?",
        options: ["Michael Jackson", "Prince", "Whitney Houston", "Elvis Presley"],
        correctAnswer: 0,
      },
      {
        question: "Which superhero is known for saying, 'I am Iron Man'?",
        options: ["Black Panther", "Captain America", "Thor", "Iron Man"],
        correctAnswer: 3,
      },
      {
        question: "Which movie franchise includes a character named Luke Skywalker?",
        options: ["Guardians of the Galaxy", "Star Wars", "The Matrix", "Star Trek"],
        correctAnswer: 1,
      },
      {
        question: "Who played the character of Hermione Granger in the Harry Potter film series?",
        options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the movie 'Inception'?",
        options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
        correctAnswer: 2,
      },
      {
        question: "Which artist released the album 'Lover' in 2019?",
        options: ["Billie Eilish", "Taylor Swift", "Ed Sheeran", "Ariana Grande"],
        correctAnswer: 1,
      },
      {
        question: "What was the first video game to feature Mario?",
        options: ["Mario Kart", "Super Mario Bros.", "Donkey Kong", "The Legend of Zelda"],
        correctAnswer: 2,
      },
      {
        question: "Which movie features the famous line, 'Here's looking at you, kid'?",
        options: ["Casablanca", "Citizen Kane", "The Godfather", "Gone with the Wind"],
        correctAnswer: 0,
      },
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["France", "Germany", "Argentina", "Brazil"],
        correctAnswer: 0,
      },
      {
        question: "Who created the comic book character Spider-Man?",
        options: ["Jack Kirby", "Stan Lee", "Steve Ditko", "John Romita"],
        correctAnswer: 1,
      },
      {
        question: "In which movie did Heath Ledger portray the Joker?",
        options: ["The Dark Knight", "Batman Begins", "The Dark Knight Rises", "Joker"],
        correctAnswer: 0,
      },
      {
        question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
        options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
        correctAnswer: 2,
      },
      {
        question: "Which actress starred as Katniss Everdeen in 'The Hunger Games'?",
        options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence", "Emma Stone"],
        correctAnswer: 2,
      },
      {
        question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
        options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
        correctAnswer: 2,
      },
      {
        question: "Which Disney animated film features the song 'A Whole New World'?",
        options: ["Cinderella", "Aladdin", "Beauty and the Beast", "The Little Mermaid"],
        correctAnswer: 1,
      },
      {
        question: "Which TV series features the characters of Walter White and Jesse Pinkman?",
        options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
        correctAnswer: 3,
      },
      {
        question: "Who sang the hit song 'Shape of You'?",
        options: ["Justin Bieber", "Ariana Grande", "Sam Smith", "Ed Sheeran"],
        correctAnswer: 3,
      },
      {
        question: "Which film won the Academy Award for Best Picture in 2020?",
        options: ["The Irishman", "Once Upon a Time in Hollywood", "Parasite", "1917"],
        correctAnswer: 2,
      },
      {
        question: "What year did the movie 'The Matrix' release?",
        options: ["1997", "1998", "2000", "1999"],
        correctAnswer: 3,
      },
      {
        question: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
        options: ["Mark Ruffalo", "Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
        correctAnswer: 2,
      },
      {
        question: "Which singer is known as the 'Queen of Pop'?",
        options: ["Mariah Carey", "Lady Gaga", "Whitney Houston", "Madonna"],
        correctAnswer: 3,
      },
    ],
  },
];
