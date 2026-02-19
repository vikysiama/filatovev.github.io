import { 
  Brain, 
  Sparkles, 
  Zap, 
  MessageSquare, 
  Heart, 
  Users, 
  BookOpen, 
  Target, 
  Lightbulb,
  TrendingUp,
  HandshakeIcon,
  CheckCircle2
} from "lucide-react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { FeatureCard } from "./components/FeatureCard";
import { ComparisonTable } from "./components/ComparisonTable";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import aiStudentImage from "figma:asset/19b0380ec0ce50145a9f010477e9dc10d1729a7b.png";
import teacherStudentImage from "figma:asset/5822aa609afbb3ce6b96ccde71f49e96ad8f93e3.png";
import collaborationImage from "figma:asset/93e2a6cb5e0ba6512d001b3dcaa1d4b71b502f81.png";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Section 1: Введение - Что такое ИИ */}
      <Section
        id="ai-intro"
        title="Что такое искусственный интеллект?"
        subtitle="И как он уже изменил современное образование"
      >
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl leading-relaxed">
            <strong>Искусственный интеллект (ИИ, AI - Artificial Intelligence)</strong> — это передовая 
            область компьютерных наук и технологий, которая позволяет машинам и программным системам 
            выполнять задачи, традиционно требующие человеческого интеллекта и когнитивных способностей: 
            <strong>машинное обучение</strong> (Machine Learning), <strong>глубокое обучение</strong> (Deep Learning), 
            <strong>обработку естественного языка</strong> (NLP - Natural Language Processing), 
            <strong>компьютерное зрение</strong>, анализ больших данных (<strong>Big Data</strong>), 
            распознавание образов и принятие решений на основе <strong>алгоритмов</strong> и <strong>нейронных сетей</strong>.
          </p>

          <p className="text-xl leading-relaxed mt-6">
            Современные <strong>генеративные нейросети</strong> (такие как ChatGPT, Claude, Gemini, YandexGPT) 
            основаны на архитектуре <strong>трансформеров</strong> (Transformers) и используют 
            <strong>большие языковые модели</strong> (LLM - Large Language Models), обученные на 
            миллиардах параметров. Эти системы применяют <strong>supervised learning</strong> 
            (обучение с учителем), <strong>reinforcement learning</strong> (обучение с подкреплением) 
            и <strong>transfer learning</strong> (трансферное обучение) для достижения высокой 
            точности в решении разнообразных задач.
          </p>

          <p className="text-xl leading-relaxed mt-6">
            В образовательной сфере ИИ реализует принципы <strong>адаптивного обучения</strong> 
            (Adaptive Learning), <strong>персонализированного образования</strong>, <strong>интеллектуального 
            тьюторинга</strong> (Intelligent Tutoring Systems) и <strong>предиктивной аналитики</strong> 
            (Predictive Analytics). Технологии ИИ включают <strong>рекомендательные системы</strong>, 
            <strong>автоматизированную оценку знаний</strong>, <strong>чат-боты для обучения</strong> 
            и <strong>системы управления обучением</strong> (LMS - Learning Management Systems) 
            с элементами искусственного интеллекта.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
            <p className="text-lg italic text-blue-900">
              По данным UNESCO и исследованиям <strong>EdTech</strong>-индустрии, более <strong>50% образовательных 
              учреждений</strong> по всему миру уже интегрировали элементы ИИ в учебный процесс — 
              от <strong>адаптивных платформ</strong> и <strong>систем LMS</strong> до автоматической 
              проверки заданий через <strong>алгоритмы NLP</strong> и <strong>компьютерного зрения</strong>. 
              Глобальный рынок <strong>AI в образовании</strong> оценивается в десятки миллиардов долларов 
              и продолжает экспоненциально расти.
            </p>
          </div>

          <p className="text-lg leading-relaxed">
            Сегодня <strong>нейросети</strong> и <strong>AI-ассистенты</strong> помогают школьникам 
            решать сложные математические задачи через <strong>символьные вычисления</strong>, 
            переводить тексты с применением <strong>нейронного машинного перевода</strong> (NMT), 
            создавать презентации и инфографику, генерировать эссе и сочинения через 
            <strong>генеративный AI</strong>, анализировать научные статьи и даже программировать 
            с помощью <strong>GitHub Copilot</strong> и подобных инструментов <strong>code generation</strong>. 
            Но значит ли это, что скоро учителя станут не нужны? Может ли <strong>алгоритм</strong> 
            заменить живого <strong>педагога</strong> с его эмпатией, интуицией и человечностью?
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200 mt-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Ключевые технологии ИИ в образовании:</h4>
            <ul className="space-y-2 text-lg text-gray-800">
              <li>• <strong>NLP</strong> (Natural Language Processing) — обработка и понимание текста</li>
              <li>• <strong>Machine Learning</strong> — обучение на данных и выявление паттернов</li>
              <li>• <strong>Computer Vision</strong> — распознавание изображений и видео</li>
              <li>• <strong>Speech Recognition</strong> — распознавание и синтез речи</li>
              <li>• <strong>Recommendation Systems</strong> — персонализированные рекомендации</li>
              <li>• <strong>Neural Networks</strong> — нейронные сети для сложных вычислений</li>
              <li>• <strong>Data Mining</strong> — анализ больших объемов образовательных данных</li>
            </ul>
          </div>
        </div>

        {/* AI Capabilities */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Возможности ИИ в образовании
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="Персонализация"
              description="ИИ анализирует успеваемость и адаптирует материал под уровень каждого ученика"
              color="blue"
            />
            <FeatureCard
              icon={MessageSquare}
              title="Мгновенные ответы"
              description="Чат-боты и ассистенты отвечают на вопросы учеников 24/7 без ожидания"
              color="green"
            />
            <FeatureCard
              icon={BookOpen}
              title="Автопроверка"
              description="Автоматическая проверка тестов и заданий экономит время учителя"
              color="purple"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Аналитика прогресса"
              description="Детальная статистика успеваемости и выявление пробелов в знаниях"
              color="orange"
            />
            <FeatureCard
              icon={Sparkles}
              title="Генерация материалов"
              description="Создание упражнений, тестов и учебных материалов за секунды"
              color="pink"
            />
            <FeatureCard
              icon={Brain}
              title="Обучающие игры"
              description="Интерактивные симуляции и игры для увлекательного обучения"
              color="cyan"
            />
          </div>
        </div>

        {/* Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback 
            src={aiStudentImage} 
            alt="Современное обучение с ИИ"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </Section>

      {/* Section 2: Что такое реальное обучение */}
      <Section
        id="real-education"
        title="Что же такое настоящее образование?"
        subtitle="Обучение — это не просто передача информации"
        dark={true}
      >
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-gray-300">
            Образование — это сложный <strong>многоуровневый процесс</strong>, который включает не только получение знаний, 
            но и всестороннее <strong>развитие личности</strong>, формирование <strong>ценностных ориентиров</strong>, 
            <strong>soft skills</strong> (гибких навыков), <strong>эмоционального интеллекта</strong> и <strong>критического мышления</strong>.
          </p>

          <p className="text-xl leading-relaxed text-gray-300 mt-6">
            Согласно современным педагогическим концепциям, таким как <strong>конструктивизм</strong> и <strong>гуманистический подход</strong>, 
            образование должно строиться не на механическом запоминании фактов, а на формировании <strong>компетенций</strong> — 
            способности применять знания на практике. Это включает развитие <strong>коммуникативных навыков</strong>, 
            <strong>креативного мышления</strong>, <strong>эмпатии</strong>, <strong>рефлексии</strong> и умения работать в команде.
          </p>

          <p className="text-xl leading-relaxed text-gray-300 mt-6">
            <strong>Социализация</strong> и <strong>инкультурация</strong> — важнейшие функции образования. 
            Через взаимодействие с учителем и сверстниками ученики осваивают <strong>социальные роли</strong>, 
            учатся разрешать <strong>конфликты</strong>, развивают <strong>эмоциональную регуляцию</strong> и формируют 
            свою <strong>идентичность</strong>. Эти процессы невозможно заменить алгоритмами.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 my-8 rounded-2xl">
            <h4 className="text-2xl font-bold text-white mb-4">Ключевые компоненты образования:</h4>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-white mb-2">Эмоциональная связь</h5>
                  <p className="text-gray-300 text-base">
                    Учитель понимает эмоциональное состояние ученика через <strong>эмпатию</strong> и 
                    <strong>педагогическую интуицию</strong>, может поддержать в трудную минуту и вдохновить на достижения. 
                    Эта <strong>аффективная связь</strong> стимулирует внутреннюю мотивацию к обучению.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-white mb-2">Социализация</h5>
                  <p className="text-gray-300 text-base">
                    В школе дети осваивают <strong>социальные компетенции</strong>: учатся работать в команде, 
                    применять <strong>стратегии медиации</strong> при решении конфликтов, развивают 
                    <strong>коллаборативные навыки</strong>, строят межличностные отношения и формируют 
                    <strong>культуру диалога</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-white mb-2">Креативность и инновационное мышление</h5>
                  <p className="text-gray-300 text-base">
                    Учитель развивает <strong>дивергентное мышление</strong>, <strong>латеральное мышление</strong> 
                    и способность к <strong>инновациям</strong>. Он учит смотреть на проблему с разных сторон, 
                    применять <strong>метод синектики</strong>, находить нестандартные решения и генерировать 
                    <strong>оригинальные идеи</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-white mb-2">Мотивация и целеполагание</h5>
                  <p className="text-gray-300 text-base">
                    Личный пример учителя, его энтузиазм и вера в учеников формируют 
                    <strong>внутреннюю мотивацию</strong> (<strong>интринсивную мотивацию</strong>), 
                    помогают в <strong>целеполагании</strong>, развивают <strong>академическую самоэффективность</strong> 
                    и вдохновляют на <strong>непрерывное саморазвитие</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-gray-300">
            Учитель — это не просто источник информации и не <strong>ретранслятор знаний</strong>. 
            Это <strong>фасилитатор</strong>, <strong>ментор</strong> и <strong>тьютор</strong>, который формирует 
            личность через <strong>педагогическое взаимодействие</strong>, учит <strong>метакогнитивным стратегиям</strong> 
            (умению учиться), развивает <strong>рефлексивное мышление</strong> и помогает ученикам 
            взаимодействовать с миром через призму <strong>критического анализа</strong> и <strong>этических ценностей</strong>. 
            Это тот, кто замечает уникальность каждого ребенка через <strong>индивидуальный подход</strong> 
            и помогает раскрыть его <strong>потенциал</strong> и <strong>таланты</strong>.
          </p>
        </div>

        {/* Teacher Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback 
            src={teacherStudentImage} 
            alt="Учитель и ученики"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-400/30 p-6 rounded-xl mt-8">
          <p className="text-lg italic text-white">
            <strong>По исследованиям McKinsey:</strong> эмоциональная вовлеченность учителя 
            повышает успеваемость учеников на 23% и их мотивацию к обучению на 31%.
          </p>
        </div>

        {/* Expert Opinion Video */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">Экспертное мнение</h3>
          <a 
            href="https://yandex.ru/video/preview/920911868037396964"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          >
            <div className="relative w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white text-lg font-semibold">Смотреть видео</p>
                <p className="text-gray-300 text-sm mt-2">Экспертное мнение о роли ИИ в образовании</p>
              </div>
            </div>
          </a>
        </div>
      </Section>

      {/* Section 3: Сравнение */}
      <Section
        id="comparison"
        title="ИИ vs Учитель: Кто лучше?"
        subtitle="Давайте честно сравним возможности"
      >
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl leading-relaxed text-gray-700">
            У искусственного интеллекта и живого учителя есть свои сильные и слабые стороны. 
            Вместо того чтобы решать, кто из них «лучше», давайте посмотрим, 
            в чём каждый из них действительно силён.
          </p>
        </div>

        <ComparisonTable />

        <div className="mt-12 bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-200">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Важный вывод</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Как видно из таблицы, <strong>нейросеть и учитель дополняют друг друга</strong>. 
                ИИ силён в обработке данных, доступности и персонализации контента, 
                а учитель незаменим в эмоциональной поддержке, развитии креативности 
                и социальных навыков.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: Тандем - лучшее решение */}
      <Section
        id="tandem"
        title="Тандем: Сила объединения"
        subtitle="Когда ИИ и учитель работают вместе"
        dark={true}
      >
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-gray-300">
            Будущее образования — это не замена учителей на машины, а их эффективное 
            сотрудничество. Когда ИИ берёт на себя рутинные задачи, у учителя появляется 
            больше времени для того, что действительно важно — для работы с детьми.
          </p>
        </div>

        {/* Collaboration Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback 
            src={collaborationImage} 
            alt="Сотрудничество ИИ и учителя"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <HandshakeIcon className="w-7 h-7 text-blue-400" />
              <h4 className="text-xl font-bold text-white">Что делает ИИ</h4>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Проверяет домашние задания и тесты</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Создаёт персонализированные упражнения</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Отвечает на стандартные вопросы</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Анализирует прогресс и выявляет пробелы</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Предоставляет дополнительные материалы</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-7 h-7 text-pink-400" />
              <h4 className="text-xl font-bold text-white">Что делает учитель</h4>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Вдохновляет и мотивирует учеников</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Развивает критическое мышление</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Поддерживает эмоционально</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Учит работать в команде</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Раскрывает таланты каждого ребёнка</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-2xl text-white shadow-2xl">
          <div className="flex items-start gap-4">
            <Sparkles className="w-10 h-10 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-2xl font-bold mb-4">Результат тандема</h4>
              <p className="text-lg leading-relaxed mb-4">
                Когда учитель использует ИИ как инструмент, он получает возможность:
              </p>
              <ul className="space-y-2 text-lg">
                <li>Уделять больше внимания каждому ученику</li>
                <li>Быстрее выявлять проблемы в обучении</li>
                <li>Фокусироваться на развитии навыков, а не на проверке тетрадей</li>
                <li>Делать уроки более интерактивными и увлекательными</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: Заключение */}
      <Section
        id="conclusion"
        title="Вывод"
        subtitle="Нейросеть — помощник, а не замена"
      >
        <div className="prose prose-lg max-w-none">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-3xl border-2 border-blue-200 shadow-xl">
              <p className="text-2xl leading-relaxed text-gray-900 mb-6">
                <strong>Нейросеть не может заменить школьного учителя</strong>, потому что образование — 
                это не только знания, но и развитие личности, эмоций, социальных навыков и ценностей.
              </p>
              
              <p className="text-xl leading-relaxed text-gray-800 mb-6">
                ИИ может быть невероятно полезным инструментом: он помогает персонализировать обучение, 
                экономит время учителя на рутинных задачах и предоставляет доступ к знаниям 24/7.
              </p>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200 mb-6">
                <p className="text-xl leading-relaxed text-gray-900 font-semibold">
                  Но только живой учитель может вдохновить, поддержать, научить думать критически, 
                  работать в команде и верить в себя. Только учитель видит в ребёнке не просто ученика, 
                  а личность с уникальными способностями и потенциалом.
                </p>
              </div>

              <p className="text-2xl leading-relaxed text-gray-900 font-bold text-center">
                Будущее образования — это учитель и ИИ, работающие вместе 
                для достижения наилучших результатов!
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 p-8 rounded-3xl border-2 border-green-200 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Д.А. Иванченко считает что:</h4>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-green-200">
                <p className="text-lg leading-relaxed text-gray-800">
                  Понимание возможностей и ограничений технологий искусственного интеллекта, 
                  использование критического подхода и навыков промт-инжиниринга, внедрение 
                  этических и правовых норм в деятельность образовательных организаций позволит 
                  снизить риски при внедрении нейросетевых технологий и использовать их потенциал 
                  более эффективно.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-teal-200 mt-6">
                <p className="text-lg leading-relaxed text-gray-800">
                  Административно-управленческий персонал и педагоги должны быть готовы к осознанному 
                  и ответственному использованию новых технологий, соблюдая нормы и правила, 
                  регулирующие данную область.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
            <p className="text-gray-700">учителей считают ИИ полезным помощником</p>
            <a 
              href="https://skillbox.ru/media/education/okolo-80-uchiteley-schitayut-chto-neyroseti-pomogayut-ekonomit-rabochee-vremya/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-800 underline mt-2 inline-block"
            >
              Источник исследования
            </a>
          </div>
          <div className="bg-green-50 p-6 rounded-xl text-center border border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
            <p className="text-gray-700">учеников хотят, чтобы у них был живой учитель</p>
            <a 
              href="https://www.edutopia.org/article/student-teacher-relationships/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-green-600 hover:text-green-800 underline mt-2 inline-block"
            >
              Источник исследования
            </a>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl text-center border border-purple-200">
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <p className="text-gray-700">эффективности при работе ИИ и учителя в тандеме</p>
            <a 
              href="https://www.mckinsey.com/industries/education/our-insights/how-artificial-intelligence-will-impact-k-12-teachers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-purple-600 hover:text-purple-800 underline mt-2 inline-block"
            >
              Источник исследования
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;