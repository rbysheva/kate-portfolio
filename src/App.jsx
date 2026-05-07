//React Hooks для анимации печати текста
import { useEffect, useState } from 'react'

//главный компонент сайта-резюме
export default function CodingResumeWebsite() {
  const [aboutText, setAboutText] = useState('') // Состояние для текста с эффектом печати

//полный текст который печатается по буквам
  const aboutFullText = `Hallo, ich bin Kateryna█
  Motivierte Auszubildende im Bereich Anwendungsentwicklung mit Leidenschaft für Software- und Webentwicklung. Ich habe bereits einen Bachelorabschluss in Computerwissenschaften sowie eine Ausbildung als Programmiertechnikerin abgeschlossen. Besonders interessiere ich mich für Frontend-Design, moderne Benutzeroberflächen und praktische Softwarelösungen. Ich arbeite gerne an kreativen Projekten und lerne ständig neue Technologien. Aktuell verbessere ich meine Kenntnisse in React.js, APIs und moderner Webentwicklung, um mich langfristig als Entwicklerin weiterzuentwickeln.`

  useEffect(() => {       //эффект печати текста как в терминале
    let index = 0

    const interval = setInterval(() => {
      setAboutText(aboutFullText.slice(0, index + 1))
      index++

      if (index === aboutFullText.length) {
        clearInterval(interval)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [])

  //список навыков и заполнение 
  const skills = [
    { name: 'JavaScript', level: '60%', width: '60%' },
    { name: 'Python', level: '60%', width: '60%' },
    { name: 'HTML/CSS', level: '60%', width: '60%' },
    { name: 'PHP', level: '50%', width: '50%' },
    { name: 'SQL', level: '50%', width: '50%' },
    { name: 'C/C++', level: '50%', width: '50%' }
  ]

  //основная структура сайта
  return (
    <div className="min-h-screen bg-black text-green-300 font-mono overflow-x-hidden">

      {/*эффект старого CRT монитора*/}
      <div className="fixed inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.15)_51%)] bg-[length:100%_4px]"></div>

      {/*неоновое зелёное свечение*/}
      <div className="fixed inset-0 pointer-events-none bg-green-500/10 blur-3xl opacity-20"></div>

      {/*верхняя навигационная панель*/}
      <header className="border-b border-green-500/40 px-6 py-4 sticky top-0 bg-black z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <h1 className="text-2xl text-green-300 tracking-widest">
            ausbildung.exe
          </h1>

          <nav className="hidden md:flex gap-8 text-sm uppercase">
            <a href="#about" className="hover:text-white transition">
              /about
            </a>

            <a href="#skills" className="hover:text-white transition">
              /skills
            </a>

            <a href="#education" className="hover:text-white transition">
              /education
            </a>

            <a href="#experience" className="hover:text-white transition">
              /experience
            </a>

            <a href="#projects" className="hover:text-white transition">
              /projects
            </a>
          </nav>

        </div>
      </header>

      <main className="max-w-7xl mx-auto grid lg:grid-cols-[320px_1fr] gap-6 p-6">

        {/*левая боковая панель*/}
        <aside className="space-y-6">

          {/*retro terminal блок со статусом*/}
          <div className="border border-green-500/40 bg-[#031003] p-5 rounded-sm shadow-[0_0_25px_rgba(0,255,0,0.15)]">

            <p className="mb-5 text-green-300">
              &gt; SYSTEM.STATUS
            </p>

            <div className="space-y-3 text-sm leading-7">

              <p>
                <span className="text-green-500">
                  STATUS:
                </span>{' '}
                ONLINE
              </p>

              <p>
                <span className="text-green-500">
                  ROLE:
                </span>{' '}
                JUNIOR DEVELOPER
              </p>

              <p>
                <span className="text-green-500">
                  LOCATION:
                </span>{' '}
                KAMEN, DE
              </p>

              <p>
                <span className="text-green-500">
                  SYSTEM:
                </span>{' '}
                ACTIVE
              </p>

            </div>

          </div>

          {/*личная информация*/}
          <div className="border border-green-500/40 bg-[#031003] p-5 rounded-sm">

            <p className="mb-5 text-green-300">
              &gt; PERSONAL_INFO
            </p>

            <div className="space-y-3 text-sm leading-7">

              <p>
                <span className="text-green-500">
                  name:
                </span>{' '}
                Kateryna Riabysheva
              </p>

              <p>
                <span className="text-green-500">
                  email:
                </span>{' '}
                kata.ryabsheva@gmail.com
              </p>

              <p>
                <span className="text-green-500">
                  languages:
                </span>{' '}
                DE / EN / UA / RU
              </p>

            </div>

          </div>

          {/*навыки с анимированными полосками*/}
          <div
            id="skills"
            className="border border-green-500/40 bg-[#031003] p-5 rounded-sm"
          >

            <p className="mb-5 text-green-300">
              &gt; SKILLS.SET
            </p>

            <div className="space-y-6 text-sm">

              {skills.map((skill) => (

                <div key={skill.name}>

                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>

                  <div className="w-full border border-green-500/30 h-6 bg-black overflow-hidden relative rounded-sm">

                    <div
                      className="h-full bg-gradient-to-r from-green-700 via-green-500 to-green-300 animate-pulse"
                      style={{
                        width: skill.width
                      }}
                    ></div>

                    <span className="absolute inset-0 flex items-center justify-center text-xs text-black font-bold tracking-widest">
                      {skill.level}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/*технологии которые изучаются сейчас*/}
          <div className="border border-green-500/40 bg-[#031003] p-5 rounded-sm">

            <p className="mb-5 text-green-300">
              &gt; CURRENTLY_LEARNING
            </p>

            <div className="space-y-3 text-sm leading-7">
              <p>▸ React.js</p>
              <p>▸ REST APIs</p>
              <p>▸ UI/UX Design</p>
              <p>▸ SQL & Databases</p>
            </div>

          </div>

        </aside>

        {/*основной контент*/}
        <section className="space-y-6">

          {/*блок About Me с эффектом печати*/}
          <div
            id="about"
            className="border border-green-500/40 bg-[#031003] p-8 rounded-sm"
          >

            <p className="text-green-300 mb-5">
              &gt; ABOUT_ME.txt
            </p>

            <div className="min-h-[360px] border border-green-500/20 bg-black/30 p-6 rounded-sm shadow-[0_0_20px_rgba(0,255,0,0.08)]">

              <p className="text-green-500 mb-4">
                system@portfolio:~$ cat about.txt
              </p>

              <p className="leading-9 text-lg text-green-100 whitespace-pre-wrap">
                {aboutText}
              </p>

            </div>

          </div>

          {/*образование*/}
          <div
            id="education"
            className="border border-green-500/40 bg-[#031003] p-8 rounded-sm"
          >

            <p className="text-green-300 mb-6">
              &gt; EDUCATION.log
            </p>

            <div className="space-y-8">

              <div className="border-l-2 border-green-500 pl-5">

                <p className="text-green-500 mb-2">
                  09/2019 — 06/2021
                </p>

                <h3 className="text-white text-xl mb-2">
                  Bachelor of Computer Science
                </h3>

                <p className="text-green-100 leading-7">
                  Donbass Staatliche Ingenieurakademie,
                  Kramatorsk, Ukraine
                </p>

                <p className="text-green-400 mt-3 text-sm">
                  Programmierung, Datenbanken,
                  Webentwicklung und Softwareentwicklung
                </p>

              </div>

              <div className="border-l-2 border-green-500 pl-5">

                <p className="text-green-500 mb-2">
                  01/2017 — 06/2019
                </p>

                <h3 className="text-white text-xl mb-2">
                  Ausbildung als Programmiertechnikerin
                </h3>

                <p className="text-green-100 leading-7">
                  Berufskolleg von Donbass,
                  Kramatorsk, Ukraine
                </p>

                <p className="text-green-400 mt-3 text-sm">
                  Grundlagen der Softwareentwicklung,
                  HTML/CSS, Datenbanken und IT-Systeme
                </p>

              </div>

              <div className="border-l-2 border-green-500 pl-5">

                <p className="text-green-500 mb-2">
                  2023 — 2024
                </p>

                <h3 className="text-white text-xl mb-2">
                  Deutsch Sprachkurse
                </h3>

                <p className="text-green-100 leading-7">
                  VHS Kamen-Bönen
                </p>

                <p className="text-green-400 mt-3 text-sm">
                  Sprachlevel A1, A2, B1 und B2
                </p>

              </div>

            </div>

          </div>

          {/*опыт работы*/}
          <div
            id="experience"
            className="border border-green-500/40 bg-[#031003] p-8 rounded-sm"
          >

            <p className="text-green-300 mb-6">
              &gt; EXPERIENCE.log
            </p>

            <div className="space-y-8">

              <div className="border-l-2 border-green-500 pl-5">

                <p className="text-green-500 mb-2">
                  02/2025 — heute
                </p>

                <h3 className="text-white text-xl mb-2">
                  Küchenmitarbeiterin — L'Osteria
                </h3>

                <p className="text-green-100 leading-7">
                  Kamen, Deutschland
                </p>

                <p className="text-green-400 mt-3 text-sm">
                  Teamarbeit, Organisation,
                  schnelles Arbeiten unter Zeitdruck
                </p>

              </div>

              <div className="border-l-2 border-green-500 pl-5">

                <p className="text-green-500 mb-2">
                  10/2019 — 07/2020
                </p>

                <h3 className="text-white text-xl mb-2">
                  Kassiererin — Silpo
                </h3>

                <p className="text-green-100 leading-7">
                  Kramatorsk, Ukraine
                </p>

                <p className="text-green-400 mt-3 text-sm">
                  Kundenservice,
                  Kommunikation und Verantwortung
                </p>

              </div>

            </div>

          </div>

          {/*проекты и направления разработки*/}
          <div
            id="projects"
            className="border border-green-500/40 bg-[#031003] p-8 rounded-sm"
          >

            <p className="text-green-300 mb-6">
              &gt; PROJECTS.exe
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="border border-green-500/30 p-5 hover:bg-green-500/5 transition">

                <h3 className="text-white text-xl mb-4">
                  Webseiten-Projekte
                </h3>

                <p className="text-green-100 leading-7">
                  Eigene kleine Projekte mit HTML, CSS und JavaScript.
                  Entwicklung moderner Webseiten mit Fokus auf
                  Design und Benutzeroberflächen.
                </p>

              </div>

              <div className="border border-green-500/30 p-5 hover:bg-green-500/5 transition">

                <h3 className="text-white text-xl mb-4">
                  Python Lernprojekte
                </h3>

                <p className="text-green-100 leading-7">
                  Kleine Programme zur Automatisierung,
                  Problemlösung und praktische Übungen
                  zur Verbesserung meiner Programmierkenntnisse.
                </p>

              </div>

              <div className="border border-green-500/30 p-5 hover:bg-green-500/5 transition">

                <h3 className="text-white text-xl mb-4">
                  SQL & Datenbanken
                </h3>

                <p className="text-green-100 leading-7">
                  Arbeit mit Datenbanken,
                  grundlegende SQL-Abfragen,
                  Tabellenverwaltung und Datenorganisation.
                </p>

              </div>

              <div className="border border-green-500/30 p-5 hover:bg-green-500/5 transition">

                <h3 className="text-white text-xl mb-4">
                  UI / Frontend Design
                </h3>

                <p className="text-green-100 leading-7">
                  Interesse an modernen Benutzeroberflächen,
                  kreativen Layouts und retro/cyberpunk
                  Webdesign-Konzepten.
                </p>

              </div>

            </div>

          </div>

          {/*финальный блок с характеристиками*/}
          <div
            id="contact"
            className="border border-green-500/40 bg-[#031003] p-8 rounded-sm text-center"
          >

            <p className="text-green-300 mb-5">
              &gt; STATUS.log
            </p>

            <p className="text-3xl text-[#9dff9d] mb-5">
              "Code. Learn. Improve. Repeat."
            </p>

            <div className="space-y-2 text-left max-w-md mx-auto text-sm text-green-400 mb-6">

              <p>[OK] Motivation loaded</p>
              <p>[OK] Creativity loaded</p>
              <p>[OK] Problem solving loaded</p>
              <p>[OK] Teamwork loaded</p>
              <p>[OK] Developer mode activated</p>

            </div>

            <div className="border border-green-500/20 bg-black/30 p-5 rounded-sm max-w-xl mx-auto">

              <p className="text-green-500 mb-3">
                system.skills()
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm text-green-100 text-left">

                <p>▸ Analytisches Denken</p>
                <p>▸ Kreativität</p>
                <p>▸ Teamfähigkeit</p>
                <p>▸ Lernbereitschaft</p>
                <p>▸ Problemlösung</p>
                <p>▸ Motivation</p>

              </div>

            </div>

            <p className="text-green-600 mt-6">
              guest@kateryna:~$
            </p>

          </div>

        </section>

      </main>
    </div>
  )
}