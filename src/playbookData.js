import { renderTechBody } from './techData';

export const PAGES = [
  {
    id: 'visao',
    group: { pt:'Diretrizes do projeto', en:'Project Guidelines', es:'Directrices del proyecto' },
    title: { pt:'Visão geral', en:'Overview', es:'Visión general' },
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop',
    caputEyebrow: { pt:'O programa em uma página', en:'The program on one page', es:'El programa en una página' },
    caputTitle: { pt:'O programa em uma página', en:'The program in one page', es:'El programa en una página' },
    caputDesc: { pt:'A Expedição Roblox leva criação digital a novos territórios por meio de eventos práticos conduzidos por parceiros locais.', en:'Roblox Expedition brings digital creation to new territories through practical events led by local partners.', es:'La Expedición Roblox lleva la creación digital a nuevos territorios a través de eventos prácticos conducidos por socios locales.' },
    body: 'visao',
    aside: 'visao'
  },
  {
    id: 'pilares',
    group: { pt:'Diretrizes do projeto', en:'Project Guidelines', es:'Directrices del proyecto' },
    title: { pt:'Pilares', en:'Pillars', es:'Pilares' },
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop',
    caputEyebrow: { pt:'Três frentes, uma experiência', en:'Three fronts, one experience', es:'Tres frentes, una experiencia' },
    caputTitle: { pt:'Três frentes, uma experiência', en:'Three fronts, one experience', es:'Tres frentes, una experiencia' },
    caputDesc: { pt:'Cada frente do programa atua em um momento distinto da jornada e pede um tipo próprio de preparo. A leitura em sequência mostra onde o parceiro investe energia em cada etapa.', en:'Each front of the program acts at a distinct moment of the journey and requires its own type of preparation.', es:'Cada frente del programa actúa en un momento distinto del recorrido y requiere su propio tipo de preparación.' },
    body: 'pilares',
    aside: 'empty'
  },
  {
    id: 'gov',
    group: { pt:'Diretrizes do projeto', en:'Project Guidelines', es:'Directrices del proyecto' },
    title: { pt:'Governança', en:'Governance', es:'Gobernanza' },
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&auto=format&fit=crop',
    caputEyebrow: { pt:'Centro e território em equilíbrio', en:'Center and territory in balance', es:'Centro y territorio en equilibrio' },
    caputTitle: { pt:'Centro e território em equilíbrio', en:'Center and territory in balance', es:'Centro y territorio en equilibrio' },
    caputDesc: { pt:'A equipe central responde pela consistência pedagógica e o parceiro local pela mobilização do território. Os quadros abaixo delimitam papéis e o alcance da autonomia de cada lado.', en:'The central team is responsible for pedagogical consistency and the local partner for territory mobilization.', es:'El equipo central responde por la consistencia pedagógica y el socio local por la movilización del territorio.' },
    body: 'gov',
    aside: 'empty'
  },
  {
    id: 'setup',
    group: { pt:'Planning & Execution', en:'Planning & Execution', es:'Planificación & Ejecución' },
    title: { pt:'Setup México', en:'Setup Mexico', es:'Setup México' },
    img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&auto=format&fit=crop',
    caputEyebrow: { pt:'Checklist pré-operacional — Parceiro Local', en:'Pre-operational checklist — Local Partner', es:'Checklist preoperativo — Socio Local' },
    caputTitle: { pt:'Uma base comum, aberta à adaptação local', en:'A common base, open to local adaptation', es:'Una base común, abierta a la adaptación local' },
    caputDesc: { pt:'Esta primeira visão reúne boas práticas que recomendamos como base comum para a realização do programa. Ela orienta a operação inicial, pode ser ajustada ao contexto, às capacidades locais e às escolhas do parceiro, e prevê reuniões de trabalho semanais nesta etapa.', en:'This first view brings together best practices that we recommend as a common base for delivering the program. It guides the initial operation, can be adjusted to the context, local capacities and the partner’s choices, and includes weekly working meetings at this stage.', es:'Esta primera visión reúne buenas prácticas que recomendamos como base común para la realización del programa. Orienta la operación inicial, puede ajustarse al contexto, a las capacidades locales y a las decisiones del socio, y prevé reuniones de trabajo semanales en esta etapa.' },
    body: 'setup',
    aside: 'empty'
  },
  {
    id: 'evento',
    group: { pt:'Planning & Execution', en:'Planning & Execution', es:'Planificación & Ejecución' },
    title: { pt:'Evento presencial', en:'In-person Event', es:'Evento presencial' },
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop',
    caputEyebrow: { pt:'Um dia em blocos', en:'One day in blocks', es:'Un día en bloques' },
    caputTitle: { pt:'Um dia em blocos', en:'One day in blocks', es:'Un día en bloques' },
    caputDesc: { pt:'A agenda oficial distribui quatro horas de experiência em cinco blocos, com o tempo de criação como núcleo protegido. As durações servem de referência e admitem ajuste fino ao contexto local.', en:'The official agenda distributes four hours of experience into five blocks, with creation time as the protected core.', es:'La agenda oficial distribuye cuatro horas de experiencia en cinco bloques, con el tiempo de creación como núcleo protegido.' },
    body: 'evento',
    aside: 'empty'
  },
  {
    id: 'infra',
    group: { pt:'Planning & Execution', en:'Planning & Execution', es:'Planificación & Ejecución' },
    title: { pt:'Infraestrutura', en:'Infrastructure', es:'Infraestructura' },
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop',
    caputEyebrow: { pt:'Condições de replicação', en:'Replication conditions', es:'Condiciones de replicación' },
    caputTitle: { pt:'O mínimo que sustenta o evento', en:'The minimum that sustains the event', es:'El mínimo que sostiene el evento' },
    caputDesc: { pt:'Três listas de verificação descrevem as condições que tornam o evento viável em qualquer território. Quando todas fecham, a operação avança com segurança.', en:'Three checklists describe the conditions that make the event viable in any territory. When all are met, the operation moves forward safely.', es:'Tres listas de verificación describen las condiciones que hacen viable el evento en cualquier territorio.' },
    body: 'infra',
    aside: 'infra'
  },
  {
    id: 'tecnico',
    group: { pt:'Planning & Execution', en:'Planning & Execution', es:'Planificación & Ejecución' },
    title: { pt:'Requisitos técnicos', en:'Technical Requirements', es:'Requisitos técnicos' },
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop',
    caputEyebrow: { pt:'Perguntas da TI, respondidas', en:'IT questions, answered', es:'Preguntas de TI, respondidas' },
    caputTitle: { pt:'Perguntas da TI, respondidas', en:'IT questions, answered', es:'Preguntas de TI, respondidas' },
    caputDesc: { pt:'Especificações de máquina, banda, allowlist de domínios e problemas conhecidos, em formato de pergunta e resposta para compartilhar com a equipe técnica do local antes do evento.', en:'Machine specs, bandwidth, domain allowlist and known issues, as questions and answers to share with the venue’s technical team before the event.', es:'Especificaciones de máquina, ancho de banda, lista de dominios permitidos y problemas conocidos, en formato de pregunta y respuesta para compartir con el equipo técnico del lugar antes del evento.' },
    body: 'tecnico',
    aside: 'tecnico'
  },
  {
    id: 'metodo',
    group: { pt:'Planning & Execution', en:'Planning & Execution', es:'Planificación & Ejecución' },
    title: { pt:'Metodologia', en:'Methodology', es:'Metodología' },
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop',
    caputEyebrow: { pt:'A mesma experiência em qualquer território', en:'The same experience in any territory', es:'La misma experiencia en cualquier territorio' },
    caputTitle: { pt:'A mesma experiência em qualquer território', en:'The same experience in any territory', es:'La misma experiencia en cualquier territorio' },
    caputDesc: { pt:'Os materiais oficiais carregam a pedagogia do programa e chegam prontos para uso. Com o kit em mãos, o facilitador dedica atenção integral às pessoas.', en:'The official materials carry the program pedagogy and arrive ready for use. With the kit in hand, the facilitator dedicates full attention to people.', es:'Los materiales oficiales llevan la pedagogía del programa y llegan listos para usar.' },
    body: 'metodo',
    aside: 'empty'
  },
  {
    id: 'ferramentas',
    group: { pt:'Planning & Execution', en:'Planning & Execution', es:'Planificación & Ejecución' },
    title: { pt:'Recursos Tecnológicos', en:'Technology Resources', es:'Recursos Tecnológicos' },
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop',
    caputEyebrow: { pt:'A camada digital da jornada', en:'The digital layer of the journey', es:'La capa digital del recorrido' },
    caputTitle: { pt:'A camada digital da jornada', en:'The digital layer of the journey', es:'La capa digital del recorrido' },
    caputDesc: { pt:'Quatro ferramentas acompanham o participante antes, durante e depois do evento. Cada uma cumpre um papel específico e reduz a barreira de entrada de quem está começando.', en:'Four tools accompany the participant before, during and after the event. Each plays a specific role and reduces the barrier for those just starting.', es:'Cuatro herramientas acompañan al participante antes, durante y después del evento.' },
    body: 'ferramentas',
    aside: 'empty'
  },
  {
    id: 'comunidade',
    group: { pt:'Outcomes', en:'Outcomes', es:'Resultados' },
    title: { pt:'Continuidade', en:'Continuity', es:'Continuidad' },
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop',
    caputEyebrow: { pt:'O que permanece depois do evento', en:'What remains after the event', es:'Lo que permanece después del evento' },
    caputTitle: { pt:'O que permanece depois do evento', en:'What remains after the event', es:'Lo que permanece después del evento' },
    caputDesc: { pt:'A comunidade amadurece em fases sucessivas e cada fase pede do parceiro um tipo diferente de cuidado. O evento é o ponto de partida dessa construção.', en:'The community matures in successive phases and each phase demands a different type of care from the partner.', es:'La comunidad madura en fases sucesivas y cada fase exige un tipo diferente de atención del socio.' },
    body: 'comunidade',
    aside: 'empty'
  },
  {
    id: 'aval',
    group: { pt:'Outcomes', en:'Outcomes', es:'Resultados' },
    title: { pt:'Avaliação', en:'Evaluation', es:'Evaluación' },
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop',
    caputEyebrow: { pt:'Execução que vira aprendizado', en:'Execution that becomes learning', es:'Ejecución que se convierte en aprendizaje' },
    caputTitle: { pt:'Execução que vira aprendizado', en:'Execution that becomes learning', es:'Ejecución que se convierte en aprendizaje' },
    caputDesc: { pt:'Indicadores e relatório devolvem ao parceiro um retrato fiel do que funcionou e alimentam a equipe central com evidências para evoluir o programa.', en:'Indicators and reports give the partner a faithful picture of what worked and feed the central team with evidence to evolve the program.', es:'Los indicadores y el informe devuelven al socio un retrato fiel de lo que funcionó.' },
    body: 'aval',
    aside: 'aval'
  },
  {
    id: 'expansao',
    group: { pt:'Outcomes', en:'Outcomes', es:'Resultados' },
    title: { pt:'Expansão', en:'Expansion', es:'Expansión' },
    img: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&auto=format&fit=crop',
    caputEyebrow: { pt:'Escala com consistência e rede', en:'Scale with consistency and network', es:'Escala con consistencia y red' },
    caputTitle: { pt:'Escala com consistência e rede', en:'Scale with consistency and network', es:'Escala con consistencia y red' },
    caputDesc: { pt:'A Expedição Roblox foi desenhada para crescer por uma rede de parceiros comprometidos com a democratização da criação digital através do Roblox Studio. O modelo combina excelência pedagógica centralizada com mobilização local distribuída. No México, o piloto prevê cinco ativações locais, com duas visitas presenciais da equipe central para supervisão de qualidade e calibração in loco.', en:'Roblox Expedition was designed to grow through a network of partners committed to the democratization of digital creation through Roblox Studio. The model combines centralized pedagogical excellence with distributed local mobilization. In Mexico, the pilot foresees five local activations, with two in-person visits from the central team for quality oversight and on-site calibration.', es:'La Expedición Roblox fue diseñada para crecer a través de una red de socios comprometidos con la democratización de la creación digital a través de Roblox Studio. El modelo combina excelencia pedagógica centralizada con movilización local distribuida. En México, el piloto prevé cinco activaciones locales, con dos visitas presenciales del equipo central para supervisión de calidad y calibración in situ.' },
    body: 'expansao',
    aside: 'expansao'
  }
];

// ═══════════════════════════════════════
// BODY BUILDERS
;

const BODIES = {
  visao: () => `
    <div class="body-h">${t('b.visao.pub')}</div>
    <div class="audience-grid">
      <div class="audience-card"><div class="audience-card-title">${t('b.visao.p1t')}</div><div class="audience-card-desc">${t('b.visao.p1d')}</div></div>
      <div class="audience-card"><div class="audience-card-title">${t('b.visao.p2t')}</div><div class="audience-card-desc">${t('b.visao.p2d')}</div></div>
      <div class="audience-card"><div class="audience-card-title">${t('b.visao.p3t')}</div><div class="audience-card-desc">${t('b.visao.p3d')}</div></div>
      <div class="audience-card"><div class="audience-card-title">${t('b.visao.p4t')}</div><div class="audience-card-desc">${t('b.visao.p4d')}</div></div>
    </div>
    <div class="body-divider"></div>
    <div class="body-h">${t('b.visao.eco')}</div>
    <div class="eco-row">
      <div class="eco-item"><div class="eco-bar b"></div><div><div class="eco-title">Roblox</div><div class="eco-desc">${t('b.visao.r1')}</div></div></div>
      <div class="eco-item"><div class="eco-bar a"></div><div><div class="eco-title">Roblox Studio</div><div class="eco-desc">${t('b.visao.r2')}</div></div></div>
    </div>`,

  pilares: () => `
    <div class="pillar-row">
      <div class="pillar-item"><div class="pillar-bar b"></div><div><div class="pillar-content-title">${t('b.pil.t1')}</div><div class="pillar-content-desc">${t('b.pil.d1')}</div></div></div>
      <div class="pillar-item"><div class="pillar-bar a"></div><div><div class="pillar-content-title">${t('b.pil.t2')}</div><div class="pillar-content-desc">${t('b.pil.d2')}</div></div></div>
      <div class="pillar-item"><div class="pillar-bar r"></div><div><div class="pillar-content-title">${t('b.pil.t3')}</div><div class="pillar-content-desc">${t('b.pil.d3')}</div></div></div>
    </div>`,

  teoria: () => `
    <div class="toc-chain">
      <div class="toc-node"><div class="toc-index" style="color:var(--blue)">01</div><div><div class="toc-title">${t('b.toc.t1')}</div><div class="toc-desc">${t('b.toc.d1')}</div></div></div>
      <div class="toc-node"><div class="toc-index" style="color:var(--amber)">02</div><div><div class="toc-title">${t('b.toc.t2')}</div><div class="toc-desc">${t('b.toc.d2')}</div></div></div>
      <div class="toc-node"><div class="toc-index" style="color:var(--red)">03</div><div><div class="toc-title">${t('b.toc.t3')}</div><div class="toc-desc">${t('b.toc.d3')}</div></div></div>
    </div>`,

  gov: () => `
    <div class="gov-board">
      <div class="gov-track central">
        <div class="gov-track-head">
          <span class="gov-track-kicker">${t('b.gov.ck')}</span>
          <div class="gov-track-title">${t('b.gov.ct')}</div>
        </div>
        <div class="gov-card-stack">
          <div class="gov-card">
            <div class="gov-card-title">${t('b.gov.ch1')}</div>
            <div class="gov-card-desc">${t('b.gov.c1')}</div>
          </div>
          <div class="gov-card">
            <div class="gov-card-title">${t('b.gov.ch2')}</div>
            <div class="gov-card-desc">${t('b.gov.c2')}</div>
          </div>
          <div class="gov-card">
            <div class="gov-card-title">${t('b.gov.ch3')}</div>
            <div class="gov-card-desc">${t('b.gov.c3')} ${t('b.gov.c4')}</div>
          </div>
          <div class="gov-card">
            <div class="gov-card-title">${t('b.gov.ch4')}</div>
            <div class="gov-card-desc">${t('b.gov.c5')} ${t('b.gov.c6')}</div>
          </div>
        </div>
      </div>
      <div class="gov-track local">
        <div class="gov-track-head">
          <span class="gov-track-kicker">${t('b.gov.lk')}</span>
          <div class="gov-track-title">${t('b.gov.lt')}</div>
        </div>
        <div class="gov-card-stack">
          <div class="gov-card">
            <div class="gov-card-title">${t('b.gov.lh1')}</div>
            <div class="gov-card-desc">${t('b.gov.l1')}</div>
          </div>
          <div class="gov-card">
            <div class="gov-card-title">${t('b.gov.lh2')}</div>
            <div class="gov-card-desc">${t('b.gov.l2')} ${t('b.gov.l4')}</div>
          </div>
          <div class="gov-card">
            <div class="gov-card-title">${t('b.gov.lh3')}</div>
            <div class="gov-card-desc">${t('b.gov.l3')} ${t('b.gov.l5')}</div>
          </div>
          <div class="gov-card">
            <div class="gov-card-title">${t('b.gov.lh4')}</div>
            <div class="gov-card-desc">${t('b.gov.l6')}</div>
          </div>
        </div>
      </div>
    </div>`,

  setup: () => {
    const steps = [
      {w:'b.setup.w1',t:'b.setup.t1',c:'var(--blue)'},
      {w:'b.setup.w2',t:'b.setup.t2',c:'var(--amber)'},
      {w:'b.setup.w3',t:'b.setup.t3',c:'var(--amber)'},
      {w:'b.setup.w4',t:'b.setup.t4',c:'var(--red)'},
      {w:'b.setup.w5',t:'b.setup.t5',c:'var(--red)'},
    ];
    return `<div style="display:flex;flex-direction:column;gap:0">
      ${steps.map((s,i)=>`
        <div style="display:grid;grid-template-columns:110px 40px 1fr;align-items:center;padding:20px 0;border-bottom:1px solid var(--border)${i===0?';border-top:1px solid var(--border)':''}">
          <div style="font-family:'Space Grotesk',sans-serif;font-size:11.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-align:right;padding-right:20px;line-height:1.3">${t(s.w)}</div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:0;height:100%">
            <div style="width:10px;height:10px;border-radius:50%;background:${s.c};border:2px solid var(--bg);box-shadow:0 0 0 1px ${s.c};flex-shrink:0"></div>
            ${i<4?`<div style="width:1px;flex:1;background:var(--border);min-height:12px;margin-top:4px"></div>`:''}
          </div>
          <div style="padding-left:20px"><div style="font-family:'Space Grotesk',sans-serif;font-size:16.1px;font-weight:600;color:var(--text);line-height:1.35">${t(s.t)}</div></div>
        </div>`).join('')}
    </div>`;
  },

  evento: () => {
    const keys = ['b.ev.a1','b.ev.a2','b.ev.a3','b.ev.a5','b.ev.a6'];
    const mins  = [30,30,120,45,15];
    const cols  = ['var(--blue)','var(--muted)','var(--amber)','var(--red)','var(--muted)'];
    const total = mins.reduce((s,m)=>s+m,0);
    const fmt   = m => `${Math.floor(m/60)}h${String(m%60).padStart(2,'0')}`;
    let cursor  = 0;
    const rows  = keys.map((k,i)=>{ const s=cursor; cursor+=mins[i]; return {k,mins:mins[i],col:cols[i],start:s,pct:(mins[i]/total*100).toFixed(1),startPct:(s/total*100).toFixed(1)}; });
    return `<div style="display:flex;flex-direction:column;gap:0;margin-top:4px">
      ${rows.map((r,i)=>`
        <div style="display:grid;grid-template-columns:52px 1fr 52px;gap:0 16px;align-items:center;padding:14px 0;border-bottom:1px solid var(--border)${i===0?';border-top:1px solid var(--border)':''}">
          <div style="font-family:'Space Grotesk',sans-serif;font-size:12.6px;font-weight:700;color:var(--muted);text-align:right">${fmt(r.start)}</div>
          <div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:15.5px;font-weight:500;color:var(--text);margin-bottom:8px">${t(r.k)}</div>
            <div style="height:5px;border-radius:3px;background:var(--border);overflow:hidden;position:relative">
              <div style="position:absolute;left:${r.startPct}%;width:${r.pct}%;height:100%;background:${r.col};opacity:.85;border-radius:3px"></div>
            </div>
          </div>
          <div style="font-family:'Space Grotesk',sans-serif;font-size:11.5px;font-weight:500;color:var(--muted);white-space:nowrap">${r.mins} min</div>
        </div>`).join('')}
      <div style="display:grid;grid-template-columns:52px 1fr 52px;gap:0 16px;align-items:center;padding:12px 0">
        <div style="font-family:'Space Grotesk',sans-serif;font-size:12.6px;font-weight:700;color:var(--text);text-align:right">${fmt(total)}</div>
        <div style="font-family:'Space Grotesk',sans-serif;font-size:12.6px;font-weight:500;color:var(--muted)">${t('b.ev.total')}</div>
        <div></div>
      </div>
    </div>`;
  },

  infra: () => `
    <div class="check-cols">
      <div>
        <div class="check-col-head"><svg class="check-col-icon b" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span class="check-col-title">${t('b.infra.t1')}</span></div>
        <ul class="plain-list blue"><li>${t('b.infra.e1')}</li><li>${t('b.infra.e2')}</li><li>${t('b.infra.e3')}</li><li>${t('b.infra.e4')}</li></ul>
      </div>
      <div>
        <div class="check-col-head"><svg class="check-col-icon a" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg><span class="check-col-title">${t('b.infra.t2')}</span></div>
        <ul class="plain-list amber"><li>${t('b.infra.f5')}</li><li>${t('b.infra.f1')}</li><li>${t('b.infra.f2')}</li><li>${t('b.infra.f3')}</li><li>${t('b.infra.f4')}</li></ul>
      </div>
      <div>
        <div class="check-col-head"><svg class="check-col-icon r" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg><span class="check-col-title">${t('b.infra.t3')}</span></div>
        <ul class="plain-list red"><li>${t('b.infra.p1')}</li><li>${t('b.infra.p2')}</li><li>${t('b.infra.p3')}</li><li>${t('b.infra.p4')}</li></ul>
      </div>
    </div>`,

  tecnico: () => renderTechBody(renderLang),

  metodo: () => `
    <div class="mat-grid">
      <a class="mat-item" href="https://drive.google.com/file/d/1EaHJOZxpAPiSbZ055daWjcMb3cVUWyv0/view?usp=sharing" target="_blank" rel="noopener"><svg class="mat-item-icon" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 13h6M9 17h4"/></svg><div class="mat-item-title">${t('b.mat.t1')}</div><div class="mat-item-desc">${t('b.mat.d1')}</div></a>
      <div class="mat-item"><svg class="mat-item-icon" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><div class="mat-item-title">${t('b.mat.t2')} <span class="mat-tbd">TBD</span></div><div class="mat-item-desc">${t('b.mat.d2')}</div></div>
      <a class="mat-item" href="https://drive.google.com/drive/folders/1oShpkMGoY33Sm0pZIWwH0iFNr6OY85AV?usp=sharing" target="_blank" rel="noopener"><svg class="mat-item-icon" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg><div class="mat-item-title">${t('b.mat.t3')}</div><div class="mat-item-desc">${t('b.mat.d3')}</div></a>
    </div>`,

  ferramentas: () => `
    <div class="tool-list">
      <a class="tool-item" href="https://discord.gg/exproblox" target="_blank" rel="noopener"><div class="tool-accent b"></div><div><div class="tool-title">Discord Oficial</div><div class="tool-desc">${t('b.ferr.d1')}</div></div></a>
      <a class="tool-item" href="https://create.roblox.com/store/asset/125743081126783/Expedio-Roblox" target="_blank" rel="noopener"><div class="tool-accent a"></div><div><div class="tool-title">Plugin Oficial</div><div class="tool-desc">${t('b.ferr.d2')}</div></div></a>
      <a class="tool-item" href="https://exproblox.studio" target="_blank" rel="noopener"><div class="tool-accent r"></div><div><div class="tool-title">Roblox Studio Web <span class="tool-badge">${t('b.ferr.dev')}</span></div><div class="tool-desc">${t('b.ferr.d3')}</div></div></a>
      <div class="tool-item"><div class="tool-accent m"></div><div>
        <div class="tool-title">${t('b.ferr.t4')} <span class="tool-badge">${t('b.ferr.local')}</span></div>
        <div class="tool-desc">${t('b.ferr.d4')}</div>
        <div class="biblio-cards">
          <a class="biblio-card" href="https://roblox.mastertech.com.br/biblioteca/pais" target="_blank" rel="noopener"><img src="/media/biblioteca/pais.jpg" alt="${t('b.ferr.bib1')}" loading="lazy"><span class="biblio-card-label">${t('b.ferr.bib1')}</span></a>
          <a class="biblio-card" href="https://roblox.mastertech.com.br/biblioteca/educadores" target="_blank" rel="noopener"><img src="/media/biblioteca/educadores.jpg" alt="${t('b.ferr.bib2')}" loading="lazy"><span class="biblio-card-label">${t('b.ferr.bib2')}</span></a>
          <a class="biblio-card" href="https://roblox.mastertech.com.br/biblioteca/criadores" target="_blank" rel="noopener"><img src="/media/biblioteca/criadores.jpg" alt="${t('b.ferr.bib3')}" loading="lazy"><span class="biblio-card-label">${t('b.ferr.bib3')}</span></a>
        </div>
      </div></div>
    </div>`,

  partic: () => `
    <div class="body-h">${t('b.partic.fh')}</div>
    <div class="form-preview">
      <div class="form-field"><div class="form-field-label">${t('b.partic.f1')}</div><div class="form-field-value">—</div></div>
      <div class="form-field"><div class="form-field-label">${t('b.partic.f2')}</div><div class="form-field-value">—</div></div>
      <div class="form-field"><div class="form-field-label">${t('b.partic.f3')}</div><div class="form-field-value">—</div></div>
      <div class="form-field"><div class="form-field-label">${t('b.partic.f4')}</div><div class="form-field-value">—</div></div>
      <div class="form-field"><div class="form-field-label">E-mail</div><div class="form-field-value">—</div></div>
      <div class="form-field"><div class="form-field-label">${t('b.partic.f5')}</div><div class="form-field-value">—</div></div>
      <div class="form-field"><div class="form-field-label">${t('b.partic.f6')}</div><div class="form-field-value">—</div></div>
      <div class="form-field"><div class="form-field-label">${t('b.partic.f7')}</div><div class="form-field-value">—</div></div>
    </div>
    <div class="body-divider"></div>
    <div class="body-h">${t('b.partic.mh')}</div>
    <div class="chip-grid">
      <span class="chip blue">${t('b.partic.m1')}</span>
      <span class="chip amber">${t('b.partic.m2')}</span>
      <span class="chip">${t('b.partic.m3')}</span>
      <span class="chip">${t('b.partic.m4')}</span>
      <span class="chip red">${t('b.partic.m5')}</span>
    </div>`,

  comunidade: () => `
    <div class="phase-row">
      <div class="phase-card f1"><div class="phase-label">${t('b.com.l1')}</div><div class="phase-title">${t('b.com.t1')}</div>
        <ul class="plain-list blue"><li>${t('b.com.c1')}</li><li>${t('b.com.c2')}</li><li>${t('b.com.c3')}</li></ul>
      </div>
      <div class="phase-card f2"><div class="phase-label">${t('b.com.l2')}</div><div class="phase-title">${t('b.com.t2')}</div>
        <ul class="plain-list amber"><li>${t('b.com.e1')}</li><li>${t('b.com.e2')}</li></ul>
      </div>
      <div class="phase-card f3"><div class="phase-label">${t('b.com.l3')}</div><div class="phase-title">${t('b.com.t3')}</div>
        <ul class="plain-list red"><li>${t('b.com.s1')}</li><li>${t('b.com.s2')}</li><li>${t('b.com.s3')}</li><li>${t('b.com.s4')}</li></ul>
      </div>
    </div>`,

  aval: () => `
    <div class="eval-row">
      <div class="eval-card"><svg class="eval-card-icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><div class="eval-card-title">${t('b.aval.t1')}</div><div class="eval-card-desc">${t('b.aval.d1')}</div></div>
      <div class="eval-card"><svg class="eval-card-icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg><div class="eval-card-title">${t('b.aval.t2')}</div><div class="eval-card-desc">${t('b.aval.d2')}</div></div>
      <div class="eval-card"><svg class="eval-card-icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg><div class="eval-card-title">${t('b.aval.t3')}</div><div class="eval-card-desc">${t('b.aval.d3')}</div></div>
    </div>`,

  expansao: () => `
    <div class="exp-heading">${t('b.exp.head')}</div>
    <div class="exp-steps">
      ${[1,2,3,4,5].map(i=>`
        <div class="exp-step">
          <div class="exp-step-num">${String(i).padStart(2,'0')}</div>
          <div class="exp-step-text">${t('b.exp.s'+i)}${i===1?`<ul class="exp-step-sub">${['m1','m2','m3','m4','m5','m6'].map(m=>`<li>${t('b.exp.'+m)}</li>`).join('')}</ul>`:''}</div>
        </div>`).join('')}
    </div>`
};

// ═══════════════════════════════════════
// ASIDE BUILDERS
// ═══════════════════════════════════════
function asideItem(icon, titleKey, tagKey, tagClass, href) {
  const title = t(titleKey) || titleKey;
  const tag = tagKey ? t(tagKey) || tagKey : '';
  const link = href ? `href="${href}" target="_blank" rel="noopener"` : 'href="#"';
  return `<a class="aside-item" ${link}>
    ${icon}
    <div class="aside-item-body">
      <span class="aside-item-title">${title}</span>
      ${tag ? `<span class="aside-tag ${tagClass}">${tag}</span>` : ''}
    </div>
  </a>`;
}
const docIcon = `<svg class="aside-item-icon" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
const linkIcon = `<svg class="aside-item-icon" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
const dashIcon = `<svg class="aside-item-icon" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`;

const ASIDES = {
  visao: () => `<div class="aside-group"><span class="aside-label">${t('a.ref')}</span>
    ${asideItem(linkIcon,'a.ref.site','a.tag.link','link','https://roblox.mastertech.com.br')}
    ${asideItem(linkIcon,'a.ref.video','a.tag.video','video','/media/video/VideoManifestoENG.mp4')}
    ${asideItem(dashIcon,'a.ref.report','a.tag.dash','dash','https://exproblox.report')}
    ${asideItem(docIcon,'a.ref.miv','a.tag.doc','doc','https://drive.google.com/file/d/1L-vTGaYITo3n6SfQadoRHGuGuQCHRg8Z/view?usp=share_link')}
    ${asideItem(docIcon,'a.ref.notes','a.tag.doc','doc','https://docs.google.com/document/d/17LDUxsMbd444f21Hai72h7PLry_duqtPUtxOyv7OPTk/edit?tab=t.0#heading=h.kh3vzpv9qeld')}
  </div>`,
  teoria: () => `<div class="aside-group"><span class="aside-label">${t('a.ref')}</span>
    ${[1,2,3,4,5,6,7,8,9,10].map(i=>asideItem(docIcon,'a.ins.'+i,'','doc')).join('')}
  </div>`,
  gov: () => `<div class="aside-group"><span class="aside-label">${t('a.ref')}</span>
    ${[1,2,3,4,5].map(i=>asideItem(docIcon,'a.lim.'+i,'a.tag.fora','tip')).join('')}
  </div>`,
  setup: () => `<div class="aside-group"><span class="aside-label">${t('a.ref')}</span>
    ${asideItem(docIcon,'a.setup.1','a.tag.doc','doc')}
    ${asideItem(linkIcon,'a.setup.2','a.tag.link','link')}
  </div>`,
  infra: () => `<div class="aside-group"><span class="aside-label">${t('a.ref')}</span>
    ${asideItem(linkIcon,'a.infra.1','a.tag.link','link','https://create.roblox.com/docs/pt-br/studio/setup')}
  </div>`,
  tecnico: () => `<div class="aside-group"><span class="aside-label">${t('a.ref')}</span>
    ${asideItem(linkIcon,'a.tec.1','a.tag.link','link','https://one.one.one.one/')}
    ${asideItem(linkIcon,'a.tec.2','a.tag.link','link','https://create.roblox.com/docs/pt-br/studio/setup')}
    ${asideItem(linkIcon,'a.tec.3','a.tag.link','link','https://create.roblox.com/store/asset/125743081126783/Expedio-Roblox')}
  </div>`,
  metodo: () => `<div class="aside-group"><span class="aside-label">${t('a.ref')}</span>
    ${[1,2,3,4,5].map(i=>asideItem(docIcon,'a.metodo.'+i,'a.tag.doc','doc')).join('')}
  </div>`,
  ferramentas: () => `<div class="aside-group"><span class="aside-label">${t('a.ref')}</span>
    ${asideItem(linkIcon,'a.ferr.1','a.tag.link','link')}
    ${asideItem(linkIcon,'a.ferr.2','a.tag.link','link')}
  </div>`,
  partic: () => `<div class="aside-group"><span class="aside-label">${t('a.ref')}</span>
    ${asideItem(docIcon,'a.partic.1','a.tag.doc','doc')}
    ${asideItem(docIcon,'a.partic.2','a.tag.doc','doc')}
  </div>`,
  aval: () => `<div class="aside-group"><span class="aside-label">${t('a.ref')}</span>
    ${asideItem(docIcon,'a.aval.1','a.tag.doc','doc','https://docs.google.com/spreadsheets/d/14mSsSjDgUqkGaCFk4A3PUFcpyBWJLY28/edit?gid=1997125456#gid=1997125456')}
    ${asideItem(dashIcon,'a.aval.2','a.tag.dash','dash','https://exproblox.report')}
    ${asideItem(docIcon,'a.aval.3','a.tag.doc','doc','https://docs.google.com/spreadsheets/d/1564MpGH7p1I8ROJpOthbbZh_kSN3JY3M/edit?gid=1467062020#gid=1467062020')}
  </div>`,
  expansao: () => `<div class="aside-group"><span class="aside-label">${t('a.ref')}</span>
    ${asideItem(linkIcon,'a.exp.1','a.tag.link','link','https://drive.google.com/drive/folders/1UBY7qMsBdpHJ8YTZv7HTWcZLEUu4ILQs?usp=share_link')}
  </div>`,
  empty: () => ''
};

// ═══════════════════════════════════════
// TRANSLATIONS
// ═══════════════════════════════════════
const TRANSLATIONS = {
  pt: {
    // Rail groups
    'g.dir':'Diretrizes do projeto','g.plan':'Planning & Execution','g.out':'Outcomes',
    // Rail items
    'n.visao':'Visão geral','n.pilares':'Pilares','n.teoria':'Teoria da mudança',
    'n.gov':'Governança','n.setup':'Setup México','n.evento':'Evento presencial',
    'n.infra':'Infraestrutura','n.tecnico':'Requisitos técnicos','n.metodo':'Metodologia','n.ferr':'Recursos Tecnológicos',
    'n.partic':'Participantes','n.com':'Continuidade','n.aval':'Avaliação','n.exp':'Expansão',
    // Footer
    'foot.brand':'Expedição Roblox 2026','foot.note':'Área de relacionamento com parceiros',
    // Theme/lang labels
    'theme.tolight':'Modo claro','theme.todark':'Modo escuro',
    // Visão geral
    'b.visao.pub':'Públicos envolvidos','b.visao.eco':'Ecossistema Roblox',
    'b.visao.p1t':'Jovens e estudantes','b.visao.p1d':'Participantes diretos das experiências práticas de criação digital.',
    'b.visao.p2t':'Escolas e instituições','b.visao.p2d':'Espaços que abrigam os eventos e conectam o programa ao território.',
    'b.visao.p3t':'Organizações sociais','b.visao.p3d':'Parceiros que mobilizam comunidades e ampliam o alcance do programa.',
    'b.visao.p4t':'Comunidades de tecnologia','b.visao.p4d':'Ecossistemas locais de inovação que fortalecem o ambiente de aprendizagem.',
    'b.visao.r1':'Ambiente onde os participantes exploram, testam e publicam experiências.',
    'b.visao.r2':'Ferramenta de criação usada para construir, editar e iterar nos projetos.',
    // Pilares
    'b.pil.t1':'Eventos presenciais','b.pil.d1':'Experiências práticas conduzidas por parceiros locais para aprendizagem baseada em projetos, desenvolvimento de experiências Roblox e integração entre participantes.',
    'b.pil.t2':'Recursos Tecnológicos','b.pil.d2':'Discord oficial, Plugin Oficial da Expedição, Roblox Studio Web e biblioteca de conteúdo em vídeo sustentam a jornada de aprendizagem.',
    'b.pil.t3':'Comunidade e engajamento','b.pil.d3':'Estratégias para manter participantes ativos antes, durante e depois dos eventos, incluindo desafios criativos e futuras Game Jams.',
    // Teoria
    'b.toc.t1':'Premissa','b.toc.d1':'Jovens aprendem melhor quando possuem ferramentas adequadas, experiências práticas, apoio de facilitadores e pertencimento a uma comunidade.',
    'b.toc.t2':'Resultados imediatos','b.toc.d2':'Participantes desenvolvem projetos e ganham confiança para continuar criando. Facilitadores ampliam a capacidade de conduzir experiências práticas. Comunidades formam redes locais de aprendizagem.',
    'b.toc.t3':'Impacto esperado','b.toc.d3':'Democratização da criação digital em novos territórios, formação de uma geração de criadores e expansão do ecossistema Roblox na América Latina.',
    // Governança
    'b.gov.ct':'Equipe Central','b.gov.lt':'Parceiro Local',
    'b.gov.ck':'Desenha o sistema','b.gov.lk':'Ativa o território',
    'b.gov.ch1':'Arquitetura e conteúdo','b.gov.ch2':'Qualidade pedagógica','b.gov.ch3':'Ferramentas e acompanhamento','b.gov.ch4':'Supervisão e impacto',
    'b.gov.lh1':'Mobilização da comunidade','b.gov.lh2':'Articulação institucional','b.gov.lh3':'Público e operação','b.gov.lh4':'Facilitadores e dados',
    'b.gov.c1':'Adaptar arquitetura pedagógica, plugins, conteúdo web e materiais ao contexto local, com pipeline de IA e validação por especialistas',
    'b.gov.c2':'Definir diretrizes de execução, padrões de avaliação e rubricas de qualidade para atividades locais e Game Jams',
    'b.gov.c3':'Hospedar e distribuir o Learning Environment (plugin oficial) e os fluxos de aprendizagem guiados',
    'b.gov.c4':'Gerir o roadmap do projeto, com monitoramento remoto contínuo, syncs periódicos e acompanhamento de indicadores',
    'b.gov.c5':'Enviar um facilitador central a dois eventos presenciais para supervisão de qualidade e calibração in loco',
    'b.gov.c6':'Consolidar dados de campo, métricas e indicadores em um relatório global de impacto unificado',
    'b.gov.l1':'Liderar recrutamento, mobilização de participantes e engajamento da comunidade (13–18 anos, famílias e educadores)',
    'b.gov.l2':'Ativar escolas, instituições técnicas e redes públicas de educação (como PILARES e UTOPÍAS)',
    'b.gov.l3':'Garantir o público mínimo por evento (≥50 na Cidade do México e ≥25 em sedes regionais) nas cinco ativações locais',
    'b.gov.l4':'Mapear e articular instituições e gestores públicos (SEP, SEDECO e comissões locais de educação)',
    'b.gov.l5':'Executar logística, operação das sedes e sessões de engajamento das famílias',
    'b.gov.l6':'Recrutar e treinar facilitadores locais e coletar dados de presença, perfil e "net new creators" para a equipe central',
    // Setup
    'b.setup.w1':'60 dias antes','b.setup.t1':'Definição do local, data e planejamento de comunicação',
    'b.setup.w2':'30 dias antes','b.setup.t2':'Abertura das inscrições e divulgação local',
    'b.setup.w3':'15 dias antes','b.setup.t3':'Confirmação dos participantes e testes de infraestrutura',
    'b.setup.w4':'7 dias antes','b.setup.t4':'Formação dos facilitadores e revisão operacional',
    'b.setup.w5':'1 dia antes','b.setup.t5':'Montagem do espaço e testes finais',
    // Evento
    'b.ev.a1':'Recepção e credenciamento','b.ev.a2':'Abertura','b.ev.a3':'Mão na massa',
    'b.ev.a4':'Mentorias','b.ev.a5':'Apresentações','b.ev.a6':'Encerramento e brindes',
    'b.ev.total':'Encerramento',
    // Infra
    'b.infra.t1':'Espaço','b.infra.t2':'Tecnologia','b.infra.t3':'Participantes',
    'b.infra.e1':'Sala com os computadores','b.infra.e2':'Área de apresentações','b.infra.e3':'Ambiente seguro e silencioso','b.infra.e4':'Acessibilidade',
    'b.infra.f1':'Internet funcionando','b.infra.f2':'Projetor ou TV','b.infra.f3':'Sistema de som','b.infra.f4':'Extensões elétricas','b.infra.f5':'Computadores com Roblox Studio',
    'b.infra.p1':'Lista confirmada','b.infra.p2':'Formulários preenchidos','b.infra.p3':'Autorizações coletadas','b.infra.p4':'Contas Roblox configuradas',
    // Metodologia
    'b.mat.t1':'Canvas Oficial','b.mat.d1':'Estrutura visual para mapear o projeto de cada participante durante o evento.',
    'b.mat.t2':'Guia do Facilitador','b.mat.d2':'Passo a passo da condução do evento, com orientações para cada bloco da agenda.',
    'b.mat.t3':'Slides Oficiais','b.mat.d3':'Apresentação pronta para uso, com narrativa, atividades e exemplos visuais.',
    'b.mat.t4':'Exemplos preenchidos','b.mat.d4':'Modelos completos para o facilitador mostrar como o resultado final se parece.',
    'b.mat.t5':'Arquivos editáveis','b.mat.d5':'Versões abertas para adaptação contextual dentro dos limites da marca.',
    // Ferramentas
    'b.ferr.d1':'Ambiente principal de comunidade, com canais locais dentro da comunidade global ou comunidades independentes por país.',
    'b.ferr.d2':'Disponível em português, inglês e espanhol, com interface simplificada, componentes educacionais e apoio ao participante.',
    'b.ferr.d3':'Disponível em português, inglês e espanhol, reduz dependência técnica e aumenta acessibilidade.',
    'b.ferr.t4':'Biblioteca de conteúdo','b.ferr.d4':'Conteúdos em vídeo e recursos adicionais de aprendizagem.',
    'b.ferr.dev':'Em desenvolvimento','b.ferr.local':'Adaptar localmente',
    'b.ferr.bib1':'Responsáveis','b.ferr.bib2':'Educadores','b.ferr.bib3':'Jovens',
    // Participantes
    'b.partic.fh':'Formulário de inscrição','b.partic.mh':'Materiais de comunicação',
    'b.partic.f1':'Nome','b.partic.f2':'Idade','b.partic.f3':'Cidade','b.partic.f4':'Escola',
    'b.partic.f5':'Telefone','b.partic.f6':'Experiência prévia','b.partic.f7':'Uso de imagem',
    'b.partic.m1':'Logos oficiais','b.partic.m2':'Manual de marca','b.partic.m3':'Artes','b.partic.m4':'Textos padrão','b.partic.m5':'Hashtags oficiais',
    // Comunidade
    'b.com.l1':'Fase 1','b.com.t1':'Construção','b.com.l2':'Fase 2','b.com.t2':'Experimentação','b.com.l3':'Fase 3','b.com.t3':'Escala',
    'b.com.c1':'Eventos presenciais','b.com.c2':'Discord ativo','b.com.c3':'Formação de facilitadores','b.com.c4':'Hábitos de participação',
    'b.com.e1':'Desafios mensais','b.com.e2':'Eventos online','b.com.e3':'Pilotos de Game Jams',
    'b.com.s1':'Engajamento no plugin','b.com.s2':'Uso do Builder como porta de entrada no universo da criação','b.com.s3':'Adaptação para uso do Expedição Roblox Studio','b.com.s4':'Sustentação de parcerias',
    // Avaliação
    'b.aval.t1':'Pesquisa de Feedback','b.aval.d1':'Coleta a percepção dos participantes sobre experiência, clareza, satisfação e valor percebido ao final do evento.',
    'b.aval.t2':'Relatório Pós-Evento','b.aval.d2':'Consolida o retrato narrativo e operacional da edição, com contexto, destaques, evidências e principais aprendizados.',
    'b.aval.t3':'Planilha de Indicadores','b.aval.d3':'Organiza os dados quantitativos obrigatórios da edição e serve como base objetiva para leitura de desempenho e comparação.',
    // Expansão
    'b.exp.head':'Próximos passos para a expansão no México',
    'b.exp.s1':'Revisão e adaptação dos materiais pedagógicos, comunicacionais e ferramentas',
    'b.exp.m1':'Site','b.exp.m2':'Discord','b.exp.m3':'Plugin Oficial',
    'b.exp.m4':'Roblox Studio Web','b.exp.m5':'Conteúdo audiovisual','b.exp.m6':'Material de comunicação',
    'b.exp.s2':'Definir datas e locais de mobilização',
    'b.exp.s3':'Formar facilitadores',
    'b.exp.s4':'Execução dos pilotos locais',
    'b.exp.s5':'Consolidar aprendizados da primeira empreitada',
    // Aside labels
    'a.ref':'Referências',
    'a.ref.site':'Site da Expedição (Brasil)','a.ref.video':'Vídeo manifesto','a.ref.report':'Relatório Brasil','a.ref.miv':'Manual da marca (MIV)','a.ref.notes':'Notas de reunião',
    'a.tag.video':'Vídeo',
    'a.res':'Resultados esperados','a.ins':'Insumos da equipe central','a.lim':'Limites do parceiro',
    'a.ent':'Entregas relacionadas','a.mat':'Materiais oficiais',
    // Aside items
    'a.res.1':'Introdução à criação digital','a.res.2':'Desenvolvimento de projetos Roblox',
    'a.res.3':'Formação de comunidades locais','a.res.4':'Ampliação do interesse por tecnologia','a.res.5':'Competências criativas e digitais',
    'a.ins.1':'Jornada pedagógica','a.ins.2':'Canvas oficial','a.ins.3':'Guias metodológicos',
    'a.ins.4':'Trilhas de aprendizagem','a.ins.5':'Framework de facilitação','a.ins.6':'Plugin Oficial',
    'a.ins.7':'Discord','a.ins.8':'Roblox Studio Web','a.ins.9':'Biblioteca de conteúdos','a.ins.10':'Capacitação de facilitadores',
    'a.lim.1':'Criar ou alterar a metodologia','a.lim.2':'Desenvolver materiais pedagógicos paralelos',
    'a.lim.3':'Produzir versões não oficiais dos conteúdos','a.lim.4':'Desenvolver ferramentas tecnológicas','a.lim.5':'Alterar o framework sem a Equipe Central',
    'a.tag.doc':'Documento','a.tag.link':'Link externo','a.tag.result':'Resultado','a.tag.fora':'Fora do escopo','a.tag.dash':'Dashboard',
    'a.exp.1':'Repositório México',
    'a.setup.1':'Guia de Operação do Evento','a.setup.2':'Modelo de Agenda',
    'a.ferr.1':'Plugin Oficial e documentação','a.ferr.2':'Biblioteca de conteúdo',
    'a.partic.1':'Materiais de Comunicação','a.partic.2':'Materiais de Divulgação',
    'a.aval.1':'Pesquisa de Feedback','a.aval.2':'Relatório','a.aval.3':'Planilha de Indicadores',
    'a.infra.1':'Requisitos básicos para o Studio',
    'a.tec.1':'Cloudflare WARP (1.1.1.1)','a.tec.2':'Instalação do Roblox Studio','a.tec.3':'Plugin Oficial da Expedição',
    'a.metodo.1':'Canvas Oficial','a.metodo.2':'Guia do Facilitador','a.metodo.3':'Slides Oficiais','a.metodo.4':'Exemplos preenchidos','a.metodo.5':'Arquivos editáveis',
  },
  en: {
    'g.dir':'Project Guidelines','g.plan':'Planning & Execution','g.out':'Outcomes',
    'n.visao':'Overview','n.pilares':'Pillars','n.teoria':'Theory of Change',
    'n.gov':'Governance','n.setup':'Setup Mexico','n.evento':'In-person Event',
    'n.infra':'Infrastructure','n.tecnico':'Technical Requirements','n.metodo':'Methodology','n.ferr':'Technology Resources',
    'n.partic':'Participants','n.com':'Continuity','n.aval':'Evaluation','n.exp':'Expansion',
    'foot.brand':'Roblox Expedition 2026','foot.note':'Partner relations area',
    'theme.tolight':'Light mode','theme.todark':'Dark mode',
    'b.visao.pub':'Audiences involved','b.visao.eco':'Roblox Ecosystem',
    'b.visao.p1t':'Youth and students','b.visao.p1d':'Direct participants in practical digital creation experiences.',
    'b.visao.p2t':'Schools and institutions','b.visao.p2d':'Spaces that host events and connect the program to the territory.',
    'b.visao.p3t':'Social organizations','b.visao.p3d':'Partners that mobilize communities and extend the program reach.',
    'b.visao.p4t':'Tech communities','b.visao.p4d':'Local innovation ecosystems that strengthen the learning environment.',
    'b.visao.r1':'Environment where participants explore, test and publish experiences.',
    'b.visao.r2':'Creation tool used to build, edit and iterate on projects.',
    'b.pil.t1':'In-person events','b.pil.d1':'Practical experiences led by local partners for project-based learning, Roblox experience development and participant integration.',
    'b.pil.t2':'Technology Resources','b.pil.d2':'Official Discord, Official Expedition Plugin, Roblox Studio Web and video content library sustain the learning journey.',
    'b.pil.t3':'Community and engagement','b.pil.d3':'Strategies to keep participants active before, during and after events, including creative challenges and future Game Jams.',
    'b.toc.t1':'Premise','b.toc.d1':'Young people learn better when they have adequate tools, practical experiences, facilitator support and community belonging.',
    'b.toc.t2':'Immediate results','b.toc.d2':'Participants develop projects and gain confidence to keep creating. Facilitators expand capacity to lead practical experiences. Communities form local learning networks.',
    'b.toc.t3':'Expected impact','b.toc.d3':'Democratization of digital creation in new territories, formation of a generation of creators and expansion of the Roblox ecosystem in Latin America.',
    'b.gov.ct':'Central Team','b.gov.lt':'Local Partner',
    'b.gov.ck':'Designs the system','b.gov.lk':'Activates the territory',
    'b.gov.ch1':'Architecture and content','b.gov.ch2':'Pedagogical quality','b.gov.ch3':'Tools and follow-up','b.gov.ch4':'Oversight and impact',
    'b.gov.lh1':'Community mobilization','b.gov.lh2':'Institutional articulation','b.gov.lh3':'Attendance and operations','b.gov.lh4':'Facilitators and data',
    'b.gov.c1':'Adapt pedagogical architecture, plugins, web content and materials to the local context, with an AI pipeline and specialist validation',
    'b.gov.c2':'Define execution guidelines, evaluation standards and quality rubrics for local activities and Game Jams',
    'b.gov.c3':'Host and distribute the Learning Environment (official plugin) and the guided learning pathways',
    'b.gov.c4':'Manage the project roadmap, with ongoing remote monitoring, periodic syncs and indicator tracking',
    'b.gov.c5':'Deploy a central facilitator to two in-person events for quality oversight and on-site calibration',
    'b.gov.c6':'Consolidate field data, metrics and indicators into a single unified global impact report',
    'b.gov.l1':'Lead recruitment, participant mobilization and community outreach (ages 13–18, families and educators)',
    'b.gov.l2':'Activate schools, technical institutions and public education networks (such as PILARES and UTOPÍAS)',
    'b.gov.l3':'Ensure minimum attendance per event (≥50 in Mexico City and ≥25 at regional venues) across the five local activations',
    'b.gov.l4':'Map and engage institutions and policymakers (SEP, SEDECO and local education commissions)',
    'b.gov.l5':'Execute logistics, venue operations and family engagement sessions',
    'b.gov.l6':'Recruit and train local facilitators and collect attendance, demographic and "net new creator" data for the central team',
    'b.setup.w1':'60 days before','b.setup.t1':'Venue, date and communication planning',
    'b.setup.w2':'30 days before','b.setup.t2':'Registration opening and local promotion',
    'b.setup.w3':'15 days before','b.setup.t3':'Participant confirmation and infrastructure tests',
    'b.setup.w4':'7 days before','b.setup.t4':'Facilitator training and operational review',
    'b.setup.w5':'1 day before','b.setup.t5':'Space setup and final tests',
    'b.ev.a1':'Reception and accreditation','b.ev.a2':'Opening','b.ev.a3':'Hands-on',
    'b.ev.a4':'Mentoring','b.ev.a5':'Presentations','b.ev.a6':'Closing and giveaways','b.ev.total':'End',
    'b.infra.t1':'Space','b.infra.t2':'Technology','b.infra.t3':'Participants',
    'b.infra.e1':'Room with the computers','b.infra.e2':'Presentation area','b.infra.e3':'Safe and quiet environment','b.infra.e4':'Accessibility',
    'b.infra.f1':'Working internet','b.infra.f2':'Projector or TV','b.infra.f3':'Sound system','b.infra.f4':'Power extensions','b.infra.f5':'Computers with Roblox Studio',
    'b.infra.p1':'Confirmed list','b.infra.p2':'Completed forms','b.infra.p3':'Collected authorizations','b.infra.p4':'Roblox accounts configured',
    'b.mat.t1':'Official Canvas','b.mat.d1':'Visual structure to map each participant\'s project during the event.',
    'b.mat.t2':'Facilitator Guide','b.mat.d2':'Step-by-step event facilitation guide with instructions for each agenda block.',
    'b.mat.t3':'Official Slides','b.mat.d3':'Ready-to-use presentation with narrative, activities and visual examples.',
    'b.mat.t4':'Filled examples','b.mat.d4':'Complete models for the facilitator to show what the final result looks like.',
    'b.mat.t5':'Editable files','b.mat.d5':'Open versions for contextual adaptation within brand guidelines.',
    'b.ferr.d1':'Main community environment, with local channels inside the global community or independent country communities.',
    'b.ferr.d2':'Available in Portuguese, English and Spanish, with simplified interface, educational components and participant support.',
    'b.ferr.d3':'Available in Portuguese, English and Spanish, reduces technical dependency and increases accessibility.',
    'b.ferr.t4':'Content library','b.ferr.d4':'Video content and additional learning resources.',
    'b.ferr.dev':'In development','b.ferr.local':'Adapt locally',
    'b.ferr.bib1':'Guardians','b.ferr.bib2':'Educators','b.ferr.bib3':'Youth',
    'b.partic.fh':'Registration form','b.partic.mh':'Communication materials',
    'b.partic.f1':'Name','b.partic.f2':'Age','b.partic.f3':'City','b.partic.f4':'School',
    'b.partic.f5':'Phone','b.partic.f6':'Prior experience','b.partic.f7':'Image consent',
    'b.partic.m1':'Official logos','b.partic.m2':'Brand manual','b.partic.m3':'Artwork','b.partic.m4':'Standard texts','b.partic.m5':'Official hashtags',
    'b.com.l1':'Phase 1','b.com.t1':'Building','b.com.l2':'Phase 2','b.com.t2':'Experimentation','b.com.l3':'Phase 3','b.com.t3':'Scale',
    'b.com.c1':'In-person events','b.com.c2':'Active Discord','b.com.c3':'Facilitator training','b.com.c4':'Participation habits',
    'b.com.e1':'Monthly challenges','b.com.e2':'Online events','b.com.e3':'Game Jam pilots',
    'b.com.s1':'Plugin engagement','b.com.s2':'Using the Builder as a gateway to the creation universe','b.com.s3':'Adaptation for using Expedição Roblox Studio','b.com.s4':'Sustaining partnerships',
    'b.aval.t1':'Feedback Survey','b.aval.d1':'Collects participants\' perception of experience, clarity, satisfaction and perceived value at the end of the event.',
    'b.aval.t2':'Post-Event Report','b.aval.d2':'Consolidates the narrative and operational portrait of the edition, with context, highlights, evidence and key learnings.',
    'b.aval.t3':'Indicators Spreadsheet','b.aval.d3':'Organizes the mandatory quantitative data of the edition and serves as an objective basis for performance reading and comparison.',
    'b.exp.head':'Next steps for the expansion in Mexico',
    'b.exp.s1':'Review and adaptation of pedagogical and communication materials and tools',
    'b.exp.m1':'Site','b.exp.m2':'Discord','b.exp.m3':'Official Plugin',
    'b.exp.m4':'Roblox Studio Web','b.exp.m5':'Audiovisual content','b.exp.m6':'Communication material',
    'b.exp.s2':'Define mobilization dates and locations',
    'b.exp.s3':'Train facilitators',
    'b.exp.s4':'Run the local pilots',
    'b.exp.s5':'Consolidate learnings from the first endeavor',
    'a.ref':'References',
    'a.ref.site':'Expedition site (Brazil)','a.ref.video':'Manifesto video','a.ref.report':'Brazil report','a.ref.miv':'Brand manual (MIV)','a.ref.notes':'Meeting notes',
    'a.tag.video':'Video',
    'a.res':'Expected results','a.ins':'Central team inputs','a.lim':'Partner limits',
    'a.ent':'Related deliverables','a.mat':'Official materials',
    'a.res.1':'Introduction to digital creation','a.res.2':'Roblox project development',
    'a.res.3':'Local community formation','a.res.4':'Increased interest in technology','a.res.5':'Creative and digital skills',
    'a.ins.1':'Pedagogical journey','a.ins.2':'Official canvas','a.ins.3':'Methodological guides',
    'a.ins.4':'Learning tracks','a.ins.5':'Facilitation framework','a.ins.6':'Official Plugin',
    'a.ins.7':'Discord','a.ins.8':'Roblox Studio Web','a.ins.9':'Content library','a.ins.10':'Facilitator training',
    'a.lim.1':'Create or alter the methodology','a.lim.2':'Develop parallel pedagogical materials',
    'a.lim.3':'Produce unofficial content versions','a.lim.4':'Develop technology tools','a.lim.5':'Alter the framework without the Central Team',
    'a.tag.doc':'Document','a.tag.link':'External link','a.tag.result':'Result','a.tag.fora':'Out of scope','a.tag.dash':'Dashboard',
    'a.exp.1':'Mexico Repository',
    'a.setup.1':'Event Operations Guide','a.setup.2':'Agenda Template',
    'a.ferr.1':'Official Plugin and documentation','a.ferr.2':'Content library',
    'a.partic.1':'Communication Materials','a.partic.2':'Promotional Materials',
    'a.aval.1':'Feedback Survey','a.aval.2':'Report','a.aval.3':'Indicators Spreadsheet',
    'a.infra.1':'Studio basic requirements',
    'a.tec.1':'Cloudflare WARP (1.1.1.1)','a.tec.2':'Roblox Studio installation','a.tec.3':'Official Expedition plugin',
    'a.metodo.1':'Official Canvas','a.metodo.2':'Facilitator Guide','a.metodo.3':'Official Slides','a.metodo.4':'Filled examples','a.metodo.5':'Editable files',
  },
  es: {
    'g.dir':'Directrices del proyecto','g.plan':'Planificación & Ejecución','g.out':'Resultados',
    'n.visao':'Visión general','n.pilares':'Pilares','n.teoria':'Teoría del cambio',
    'n.gov':'Gobernanza','n.setup':'Setup México','n.evento':'Evento presencial',
    'n.infra':'Infraestructura','n.tecnico':'Requisitos técnicos','n.metodo':'Metodología','n.ferr':'Recursos Tecnológicos',
    'n.partic':'Participantes','n.com':'Continuidad','n.aval':'Evaluación','n.exp':'Expansión',
    'foot.brand':'Expedición Roblox 2026','foot.note':'Área de relación con socios',
    'theme.tolight':'Modo claro','theme.todark':'Modo oscuro',
    'b.visao.pub':'Públicos involucrados','b.visao.eco':'Ecosistema Roblox',
    'b.visao.p1t':'Jóvenes y estudiantes','b.visao.p1d':'Participantes directos de las experiencias prácticas de creación digital.',
    'b.visao.p2t':'Escuelas e instituciones','b.visao.p2d':'Espacios que albergan los eventos y conectan el programa al territorio.',
    'b.visao.p3t':'Organizaciones sociales','b.visao.p3d':'Socios que movilizan comunidades y amplían el alcance del programa.',
    'b.visao.p4t':'Comunidades de tecnología','b.visao.p4d':'Ecosistemas locales de innovación que fortalecen el ambiente de aprendizaje.',
    'b.visao.r1':'Entorno donde los participantes exploran, prueban y publican experiencias.',
    'b.visao.r2':'Herramienta de creación usada para construir, editar e iterar en los proyectos.',
    'b.pil.t1':'Eventos presenciales','b.pil.d1':'Experiencias prácticas conducidas por socios locales para aprendizaje basado en proyectos, desarrollo de experiencias Roblox e integración entre participantes.',
    'b.pil.t2':'Recursos Tecnológicos','b.pil.d2':'Discord oficial, Plugin Oficial de la Expedición, Roblox Studio Web y biblioteca de contenido en video sostienen el recorrido de aprendizaje.',
    'b.pil.t3':'Comunidad y compromiso','b.pil.d3':'Estrategias para mantener participantes activos antes, durante y después de los eventos, incluyendo desafíos creativos y futuras Game Jams.',
    'b.toc.t1':'Premisa','b.toc.d1':'Los jóvenes aprenden mejor cuando tienen herramientas adecuadas, experiencias prácticas, apoyo de facilitadores y pertenencia a una comunidad.',
    'b.toc.t2':'Resultados inmediatos','b.toc.d2':'Los participantes desarrollan proyectos y ganan confianza para seguir creando. Los facilitadores amplían la capacidad de conducir experiencias prácticas. Las comunidades forman redes locales de aprendizaje.',
    'b.toc.t3':'Impacto esperado','b.toc.d3':'Democratización de la creación digital en nuevos territorios, formación de una generación de creadores y expansión del ecosistema Roblox en América Latina.',
    'b.gov.ct':'Equipo Central','b.gov.lt':'Socio Local',
    'b.gov.ck':'Diseña el sistema','b.gov.lk':'Activa el territorio',
    'b.gov.ch1':'Arquitectura y contenido','b.gov.ch2':'Calidad pedagógica','b.gov.ch3':'Herramientas y seguimiento','b.gov.ch4':'Supervisión e impacto',
    'b.gov.lh1':'Movilización de la comunidad','b.gov.lh2':'Articulación institucional','b.gov.lh3':'Asistencia y operación','b.gov.lh4':'Facilitadores y datos',
    'b.gov.c1':'Adaptar la arquitectura pedagógica, plugins, contenido web y materiales al contexto local, con pipeline de IA y validación por especialistas',
    'b.gov.c2':'Definir directrices de ejecución, estándares de evaluación y rúbricas de calidad para actividades locales y Game Jams',
    'b.gov.c3':'Alojar y distribuir el Learning Environment (plugin oficial) y las rutas de aprendizaje guiadas',
    'b.gov.c4':'Gestionar el roadmap del proyecto, con monitoreo remoto continuo, syncs periódicos y seguimiento de indicadores',
    'b.gov.c5':'Enviar un facilitador central a dos eventos presenciales para supervisión de calidad y calibración in situ',
    'b.gov.c6':'Consolidar datos de campo, métricas e indicadores en un informe global de impacto unificado',
    'b.gov.l1':'Liderar el reclutamiento, la movilización de participantes y el alcance comunitario (13–18 años, familias y educadores)',
    'b.gov.l2':'Activar escuelas, instituciones técnicas y redes públicas de educación (como PILARES y UTOPÍAS)',
    'b.gov.l3':'Garantizar la asistencia mínima por evento (≥50 en Ciudad de México y ≥25 en sedes regionales) en las cinco activaciones locales',
    'b.gov.l4':'Mapear y articular instituciones y responsables públicos (SEP, SEDECO y comisiones locales de educación)',
    'b.gov.l5':'Ejecutar logística, operación de sedes y sesiones de involucramiento de las familias',
    'b.gov.l6':'Reclutar y capacitar facilitadores locales y recopilar datos de asistencia, perfil y "net new creators" para el equipo central',
    'b.setup.w1':'60 días antes','b.setup.t1':'Definición del lugar, fecha y planificación de comunicación',
    'b.setup.w2':'30 días antes','b.setup.t2':'Apertura de inscripciones y difusión local',
    'b.setup.w3':'15 días antes','b.setup.t3':'Confirmación de participantes y pruebas de infraestructura',
    'b.setup.w4':'7 días antes','b.setup.t4':'Formación de facilitadores y revisión operacional',
    'b.setup.w5':'1 día antes','b.setup.t5':'Montaje del espacio y pruebas finales',
    'b.ev.a1':'Recepción y acreditación','b.ev.a2':'Apertura','b.ev.a3':'Manos a la obra',
    'b.ev.a4':'Mentorías','b.ev.a5':'Presentaciones','b.ev.a6':'Cierre y obsequios','b.ev.total':'Fin',
    'b.infra.t1':'Espacio','b.infra.t2':'Tecnología','b.infra.t3':'Participantes',
    'b.infra.e1':'Sala con las computadoras','b.infra.e2':'Área de presentaciones','b.infra.e3':'Ambiente seguro y silencioso','b.infra.e4':'Accesibilidad',
    'b.infra.f1':'Internet funcionando','b.infra.f2':'Proyector o TV','b.infra.f3':'Sistema de sonido','b.infra.f4':'Extensiones eléctricas','b.infra.f5':'Computadoras con Roblox Studio',
    'b.infra.p1':'Lista confirmada','b.infra.p2':'Formularios completados','b.infra.p3':'Autorizaciones recopiladas','b.infra.p4':'Cuentas Roblox configuradas',
    'b.mat.t1':'Canvas Oficial','b.mat.d1':'Estructura visual para mapear el proyecto de cada participante durante el evento.',
    'b.mat.t2':'Guía del Facilitador','b.mat.d2':'Paso a paso de la conducción del evento, con orientaciones para cada bloque de la agenda.',
    'b.mat.t3':'Diapositivas Oficiales','b.mat.d3':'Presentación lista para usar, con narrativa, actividades y ejemplos visuales.',
    'b.mat.t4':'Ejemplos completados','b.mat.d4':'Modelos completos para que el facilitador muestre cómo se ve el resultado final.',
    'b.mat.t5':'Archivos editables','b.mat.d5':'Versiones abiertas para adaptación contextual dentro de los límites de marca.',
    'b.ferr.d1':'Ambiente principal de comunidad, con canales locales dentro de la comunidad global o comunidades independientes por país.',
    'b.ferr.d2':'Disponible en portugués, inglés y español, con interfaz simplificada, componentes educativos y apoyo al participante.',
    'b.ferr.d3':'Disponible en portugués, inglés y español, reduce la dependencia técnica y aumenta la accesibilidad.',
    'b.ferr.t4':'Biblioteca de contenido','b.ferr.d4':'Contenidos en video y recursos adicionales de aprendizaje.',
    'b.ferr.dev':'En desarrollo','b.ferr.local':'Adaptar localmente',
    'b.ferr.bib1':'Responsables','b.ferr.bib2':'Educadores','b.ferr.bib3':'Jóvenes',
    'b.partic.fh':'Formulario de inscripción','b.partic.mh':'Materiales de comunicación',
    'b.partic.f1':'Nombre','b.partic.f2':'Edad','b.partic.f3':'Ciudad','b.partic.f4':'Escuela',
    'b.partic.f5':'Teléfono','b.partic.f6':'Experiencia previa','b.partic.f7':'Uso de imagen',
    'b.partic.m1':'Logos oficiales','b.partic.m2':'Manual de marca','b.partic.m3':'Artes','b.partic.m4':'Textos estándar','b.partic.m5':'Hashtags oficiales',
    'b.com.l1':'Fase 1','b.com.t1':'Construcción','b.com.l2':'Fase 2','b.com.t2':'Experimentación','b.com.l3':'Fase 3','b.com.t3':'Escala',
    'b.com.c1':'Eventos presenciales','b.com.c2':'Discord activo','b.com.c3':'Formación de facilitadores','b.com.c4':'Hábitos de participación',
    'b.com.e1':'Desafíos mensuales','b.com.e2':'Eventos en línea','b.com.e3':'Pilotos de Game Jams',
    'b.com.s1':'Participación en el plugin','b.com.s2':'Uso del Builder como puerta de entrada al universo de la creación','b.com.s3':'Adaptación para el uso de Expedición Roblox Studio','b.com.s4':'Sostenimiento de alianzas',
    'b.aval.t1':'Encuesta de Retroalimentación','b.aval.d1':'Recoge la percepción de los participantes sobre experiencia, claridad, satisfacción y valor percibido al final del evento.',
    'b.aval.t2':'Informe Post-Evento','b.aval.d2':'Consolida el retrato narrativo y operacional de la edición, con contexto, destacados, evidencias y principales aprendizajes.',
    'b.aval.t3':'Planilla de Indicadores','b.aval.d3':'Organiza los datos cuantitativos obligatorios de la edición y sirve como base objetiva para lectura de desempeño y comparación.',
    'b.exp.head':'Próximos pasos para la expansión en México',
    'b.exp.s1':'Revisión y adaptación de los materiales pedagógicos, comunicacionales y herramientas',
    'b.exp.m1':'Sitio','b.exp.m2':'Discord','b.exp.m3':'Plugin Oficial',
    'b.exp.m4':'Roblox Studio Web','b.exp.m5':'Contenido audiovisual','b.exp.m6':'Material de comunicación',
    'b.exp.s2':'Definir fechas y lugares de movilización',
    'b.exp.s3':'Formar facilitadores',
    'b.exp.s4':'Ejecución de los pilotos locales',
    'b.exp.s5':'Consolidar aprendizajes de la primera iniciativa',
    'a.ref':'Referencias',
    'a.ref.site':'Sitio de la Expedición (Brasil)','a.ref.video':'Video manifiesto','a.ref.report':'Informe Brasil','a.ref.miv':'Manual de marca (MIV)','a.ref.notes':'Notas de reunión',
    'a.tag.video':'Video',
    'a.res':'Resultados esperados','a.ins':'Insumos del equipo central','a.lim':'Límites del socio',
    'a.ent':'Entregas relacionadas','a.mat':'Materiales oficiales',
    'a.res.1':'Introducción a la creación digital','a.res.2':'Desarrollo de proyectos Roblox',
    'a.res.3':'Formación de comunidades locales','a.res.4':'Mayor interés en tecnología','a.res.5':'Competencias creativas y digitales',
    'a.ins.1':'Recorrido pedagógico','a.ins.2':'Canvas oficial','a.ins.3':'Guías metodológicas',
    'a.ins.4':'Rutas de aprendizaje','a.ins.5':'Framework de facilitación','a.ins.6':'Plugin Oficial',
    'a.ins.7':'Discord','a.ins.8':'Roblox Studio Web','a.ins.9':'Biblioteca de contenidos','a.ins.10':'Capacitación de facilitadores',
    'a.lim.1':'Crear o alterar la metodología','a.lim.2':'Desarrollar materiales pedagógicos paralelos',
    'a.lim.3':'Producir versiones no oficiales de los contenidos','a.lim.4':'Desarrollar herramientas tecnológicas','a.lim.5':'Alterar el framework sin el Equipo Central',
    'a.tag.doc':'Documento','a.tag.link':'Enlace externo','a.tag.result':'Resultado','a.tag.fora':'Fuera del alcance','a.tag.dash':'Dashboard',
    'a.exp.1':'Repositorio México',
    'a.setup.1':'Guía de Operación del Evento','a.setup.2':'Modelo de Agenda',
    'a.ferr.1':'Plugin Oficial y documentación','a.ferr.2':'Biblioteca de contenido',
    'a.partic.1':'Materiales de Comunicación','a.partic.2':'Materiales de Divulgación',
    'a.aval.1':'Encuesta de Retroalimentación','a.aval.2':'Informe','a.aval.3':'Planilla de Indicadores',
    'a.infra.1':'Requisitos básicos para el Studio',
    'a.tec.1':'Cloudflare WARP (1.1.1.1)','a.tec.2':'Instalación de Roblox Studio','a.tec.3':'Plugin Oficial de la Expedición',
    'a.metodo.1':'Canvas Oficial','a.metodo.2':'Guía del Facilitador','a.metodo.3':'Diapositivas Oficiales','a.metodo.4':'Ejemplos completados','a.metodo.5':'Archivos editables',
  }
};

const ORDER = PAGES.map((page) => page.id);
let renderLang = "pt";

function t(key) {
  return (TRANSLATIONS[renderLang] && TRANSLATIONS[renderLang][key]) || TRANSLATIONS.pt[key] || key;
}

export { ORDER, TRANSLATIONS };

export function getTranslation(lang, key) {
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.pt[key] || key;
}

export function renderBody(bodyKey, lang) {
  renderLang = lang;
  return BODIES[bodyKey] ? BODIES[bodyKey]() : "";
}

export function renderAside(asideKey, lang) {
  renderLang = lang;
  return ASIDES[asideKey] ? ASIDES[asideKey]() : "";
}
