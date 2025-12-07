
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

// Content Definitions
const CONTENT = {
  hu: {
    nav: {
      brand: 'care-ai.eu',
      home: 'Kezdőlap',
      research: 'Kutatás',
      team: 'Csapat',
      ethics: 'Etika & Hatás',
      contact: 'Kapcsolat',
      switchText: 'English 🇬🇧',
      switchLink: 'index_en.html'
    },
    hero: {
      titlePre: 'A',
      titleHighlight: 'Care-AI Projekt',
      titlePost: ': Trauma-Érzékeny Tanulás Európa Legsebezhetőbb Gyermekeiért.',
      description: 'Úttörő etikus MI integráció a magyar gyermekvédelemben – a kognitív túlterhelés és az újra-traumatizáció csökkentése az állami gondozásban élő gyermekek számára.',
      cta: 'Kutatási Menetrend',
      metrics: [
        { value: '~23,000+', label: 'Érintett gyermek (Magyarország)' },
        { value: '3+', label: 'Fő szakterület (Tech, Pszicho, Pedagógia)' },
        { value: '26', label: 'Intézményi partner (Hálózat)' }
      ]
    },
    research: {
      title: 'Egyedülálló Kutatási Megközelítésünk',
      intro: 'A **Care-AI Projekt** a **Nash-Alicia Kutatási Kezdeményezés (NARI)** kiemelt projektje, amely az állami gondozásban élő fiatalok digitális szakadékának áthidalására fókuszál.',
      problemTitle: 'A Probléma és a Megoldás',
      problemDesc: 'Az összetett traumát átélt gyermekek kognitív túlterhelést tapasztalnak, ami gátolja a hagyományos tanulást. Megoldásunk egy egyedi, kontrollált MI ügynök tervezése, amely etikus LLM elveken (Claude/Gemini) alapul, adaptív támogatást nyújtva anélkül, hogy újra-traumatizálná őket.',
      roadmapTitle: 'Kutatási Menetrend (Főbb Fázisok)',
      roadmapPoints: [
        { bold: '1. Fázis: Ügynök Tervezés & Etika (6 Hónap):', text: 'Egyedi MI fejlesztés (no-code G-AI Studio), klinikai adatok alapján kidolgozott **Trigger Katalógus** meghatározása.' },
        { bold: '2. Fázis: Pilot Tanulmány (N=20-30):', text: 'Vegyes módszertan (kvantitatív használati logok, kvalitatív tanári/pszichológusi visszajelzések, Jólét mérés).' },
        { bold: '3. Fázis: Disszemináció & Skálázás:', text: 'Nemzetközi folyóirat publikációk és szakpolitikai javaslatok az európai gyermekvédelmi szektor számára.' }
      ]
    },
    team: {
      title: 'A Multidiszciplináris NARI Csapat',
      desc: 'A tudományos szigor, a gyakorlati gyermekvédelmi szakértelem, a technológiai fejlesztés és a klinikai pszichológia egyedülálló kombinációja.',
      members: [
        { name: 'Somogyi Péter', role: 'Kezdeményezés Vezető / Tech Implementátor', tag: 'Tech & Projekt Koordináció', img: 'https://placehold.co/200x200/004d99/ffffff?text=SP' },
        { name: 'Balla Gyula', role: 'Klinikai & Etikai Vezető', tag: 'Trauma Pszichológia / Vétó Jog', img: 'https://placehold.co/200x200/004d99/ffffff?text=BG' },
        { name: 'Bessenyei Gyula Attila', role: 'Gyakorlati Partner / Igazgató', tag: '26 Telephely Hálózat / Gyermekvédelem', img: 'https://placehold.co/200x200/004d99/ffffff?text=BGA' },
        { name: 'Dr. habil. Horváth László', role: 'Akadémiai Témavezető', tag: 'ELTE MIOL Lab / Metodológia', img: 'https://placehold.co/200x200/004d99/ffffff?text=HL' },
        { name: 'Dr. Cseszregi Tamás', role: 'Infrastruktúra Koordinátor', tag: 'ELTE DOKK / Pályázati Háttér', img: 'https://placehold.co/200x200/004d99/ffffff?text=CT' }
      ],
      footer: 'A Nash-Alicia Kutatási Kezdeményezést (NARI) Dr. John Forbes Nash és Alicia Nash kitartása inspirálja.'
    },
    ethics: {
      title: 'Etika, Biztonság és Globális Hatás',
      sections: [
        { title: 'Etika az Első: A Klinikai Biztonsági Protokoll', text: 'Elkötelezettségünk az **újra-traumatizáció elkerülése**. Az MI ügynök szigorú klinikai korlátozások mellett működik, folyamatosan figyelemmel kísérve pszichológusunk által. Az **MI kifejezetten tiltott pszichológiai tanácsot adni**, és be van programozva arra, hogy trauma-trigger aktiválódásakor emberi szakemberekhez forduljon.' },
        { title: 'Finanszírozás és Partnerség', text: 'Aktívan keresünk kezdő finanszírozást a pilot fázishoz az **UNICEF Innovation Fund**, az **AI for Social Good Grants** révén, és a **Horizon Europe** Cluster 2 célterületet célozzuk a skálázáshoz.' },
        { title: 'Felhívás Együttműködésre', text: 'Szívesen fogadunk nemzetközi akadémiai és intézményi partnereket, hogy csatlakozzanak hozzánk egy javaslat közös kidolgozásához, melynek célja e trauma-érzékeny megközelítés kiterjesztése egész Európára. Vegye fel velünk a kapcsolatot lent.', bold: true }
      ]
    },
    footer: {
      project: 'Care-AI Projekt',
      sub: 'A Nash-Alicia Kutatási Kezdeményezés (NARI) projektje.',
      contact: 'Kapcsolat: research [kukac] care-ai.eu (Helyőrző E-mail)',
      rights: '© 2025 Care-AI Projekt. Minden jog fenntartva.'
    }
  },
  en: {
    nav: {
      brand: 'care-ai.eu',
      home: 'Home',
      research: 'Research',
      team: 'The Team',
      ethics: 'Ethics & Impact',
      contact: 'Contact',
      switchText: 'Hungarian HUN',
      switchLink: 'index.html'
    },
    hero: {
      titlePre: 'The',
      titleHighlight: 'Care-AI Project',
      titlePost: ': Trauma-Informed Learning for Europe\'s Most Vulnerable Children.',
      description: 'Pioneering ethical AI integration in Hungarian child welfare – reducing cognitive load and re-traumatization for children in state care.',
      cta: 'Explore the Research Roadmap',
      metrics: [
        { value: '~23,000+', label: 'Children Impacted (Hungary)' },
        { value: '3+', label: 'Core Disciplines (Tech, Psycho, Pedagogy)' },
        { value: '26', label: 'Institutional Partners (Network)' }
      ]
    },
    research: {
      title: 'Our Unique Research Approach',
      intro: 'The **Care-AI Project** is the flagship initiative of the **Nash-Alicia Research Initiative (NARI)**, focused on bridging the digital divide for youth in state care.',
      problemTitle: 'The Problem & Our Solution',
      problemDesc: 'Children affected by complex trauma experience cognitive overload, which inhibits traditional learning. Our solution designs a custom, controlled AI agent built on ethical LLM principles (Claude/Gemini) to provide adaptive support without causing re-traumatization.',
      roadmapTitle: 'Research Roadmap (Key Phases)',
      roadmapPoints: [
        { bold: 'Phase 1: Agent Design & Ethics (6 months):', text: 'Custom AI development (no-code G-AI Studio), defining **Trigger Catalogs** based on clinical input.' },
        { bold: 'Phase 2: Pilot Study (N=20-30):', text: 'Mixed-Methods approach (quantitative usage logs, qualitative teacher/psychologist feedback, Wellbeing assessment).' },
        { bold: 'Phase 3: Dissemination & Scaling:', text: 'International journal publications and policy recommendations for the European Child Welfare sector.' }
      ]
    },
    team: {
      title: 'The Multidisciplinary NARI Team',
      desc: 'A unique combination of academic rigor, practical child welfare expertise, technological development, and clinical psychology.',
      members: [
        { name: 'Péter Somogyi', role: 'Initiative Lead / Tech Implementer', tag: 'Tech & Project Orchestration', img: 'https://placehold.co/200x200/004d99/ffffff?text=PS' },
        { name: 'Gyula Balla', role: 'Clinical & Ethical Lead', tag: 'Trauma Psychology / Veto Right', img: 'https://placehold.co/200x200/004d99/ffffff?text=GB' },
        { name: 'Gyula Bessenyei Attila', role: 'Practice Partner / Director', tag: '26 Site Network / Child Welfare', img: 'https://placehold.co/200x200/004d99/ffffff?text=GBA' },
        { name: 'Dr. habil. Horváth László', role: 'Academic Supervisor', tag: 'ELTE MIOL Lab / Methodology', img: 'https://placehold.co/200x200/004d99/ffffff?text=HL' },
        { name: 'Dr. Cseszregi Tamás', role: 'Infrastructure Coordinator', tag: 'ELTE DOKK / Grant Support', img: 'https://placehold.co/200x200/004d99/ffffff?text=CT' }
      ],
      footer: 'The Nash-Alicia Research Initiative (NARI) is inspired by the perseverance of Dr. John Forbes Nash and Alicia Nash.'
    },
    ethics: {
      title: 'Ethics, Safety, and Global Impact',
      sections: [
        { title: 'Ethics First: The Clinical Safety Protocol', text: 'Our commitment is **non-re-traumatization**. The AI agent operates under strict clinical constraints, continuously monitored by our psychologist, Gyula Balla. The **AI is explicitly forbidden from giving psychological advice** and is programmed to defer to human professionals upon activation of a trauma trigger.' },
        { title: 'Funding & Partnership', text: 'We are actively seeking seed funding for the pilot phase through **UNICEF Innovation Fund**, **AI for Social Good Grants**, and targeting the **EU Horizon Europe** Cluster 2 for scale-up.' },
        { title: 'Call for Collaboration', text: 'We welcome international academic and institutional partners to join us in co-developing a proposal to scale this trauma-informed approach across Europe. Contact us below.', bold: true }
      ]
    },
    footer: {
      project: 'The Care-AI Project',
      sub: 'A Nash-Alicia Research Initiative (NARI) project.',
      contact: 'Contact: research [at] care-ai.eu (Placeholder E-mail)',
      rights: '© 2025 Care-AI Project. All rights reserved.'
    }
  }
};

const App: React.FC = () => {
  // Determine language based on URL, using includes for robustness
  const isEnglish = typeof window !== 'undefined' && window.location.pathname.includes('index_en.html');
  const lang = isEnglish ? 'en' : 'hu';
  const t = CONTENT[lang];

  // Safe markdown-like bold parsing
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{t.nav.brand}</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="menu">
                <a href="#home">{t.nav.home}</a>
                <a href="#research">{t.nav.research}</a>
                <a href="#team">{t.nav.team}</a>
                <a href="#ethics">{t.nav.ethics}</a>
                <a href="#contact">{t.nav.contact}</a>
              </div>
              <div className="lang-switcher">
                <a href={t.nav.switchLink}>{t.nav.switchText}</a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section id="home">
        <div className="container">
          <h1>
            {t.hero.titlePre} <span className="highlight">{t.hero.titleHighlight}</span>{t.hero.titlePost}
          </h1>
          <p>{t.hero.description}</p>
          <a href="#research" style={{ display: 'inline-block', backgroundColor: 'var(--primary-color)', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', marginTop: '20px', fontWeight: 'bold' }}>
            {t.hero.cta}
          </a>
          
          <div className="metric-boxes">
            {t.hero.metrics.map((metric, i) => (
              <div key={i} className="metric-box">
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research">
        <div className="container">
          <h2>{t.research.title}</h2>
          <p>{renderText(t.research.intro)}</p>

          <h3>{t.research.problemTitle}</h3>
          <p>{renderText(t.research.problemDesc)}</p>

          <h3>{t.research.roadmapTitle}</h3>
          <ul>
            {t.research.roadmapPoints.map((point, i) => (
              <li key={i}>
                <strong>{point.bold}</strong> {renderText(point.text)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="team">
        <div className="container">
          <h2>{t.team.title}</h2>
          <p style={{ textAlign: 'center', marginBottom: '2em' }}>
            {t.team.desc}
          </p>
          
          <div className="team-grid">
            {t.team.members.map((member, i) => (
              <div key={i} className="team-member">
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <p><strong>{member.role}</strong></p>
                <span className="role-tag">{member.tag}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2em', fontStyle: 'italic' }}>
            {t.team.footer}
          </p>
        </div>
      </section>

      <section id="ethics">
        <div className="container">
          <h2>{t.ethics.title}</h2>
          
          {t.ethics.sections.map((sec, i) => (
            <div key={i}>
              <h3>{sec.title}</h3>
              <p style={sec.bold ? { fontWeight: 'bold' } : {}}>{renderText(sec.text)}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="container">
          <p><strong>{t.footer.project}</strong> | {t.footer.sub}</p>
          <p>{t.footer.contact}</p>
          <p>{t.footer.rights}</p>
        </div>
      </footer>
    </>
  );
};

export default App;
