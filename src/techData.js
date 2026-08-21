// Requisitos técnicos do evento — perguntas e respostas para a TI do local.
// Mesmo padrão de conteúdo do checklistData.js: cada campo traduzível é { pt, en, es }.
// Os blocos são renderizados em HTML com as classes já usadas no playbook
// (col-block, plain-list, chip) mais um punhado de classes .tech-* / .tq-*.

export const TECH_CALLOUT = {
  tone: 'r',
  title: {
    pt: 'Problema conhecido — CAPTCHA no login simultâneo',
    en: 'Known issue — CAPTCHA on simultaneous login',
    es: 'Problema conocido — CAPTCHA en el inicio de sesión simultáneo',
  },
  text: {
    pt: 'Ao fazer login em várias máquinas ao mesmo tempo usando o mesmo IP público, o Roblox identifica o padrão como atividade suspeita e exige CAPTCHA. <strong>Solução atual: usar o Cloudflare WARP</strong> em cada máquina antes de abrir o Roblox Studio, o que rotaciona o DNS/IP de saída e evita o bloqueio. Recomendamos ativar o WARP em todas as máquinas <em>antes</em> de iniciar o evento e mantê-lo ativado durante toda a sessão de login.',
    en: 'When logging in on several machines at the same time using the same public IP, Roblox identifies the pattern as suspicious activity and requires a CAPTCHA. <strong>Current solution: use Cloudflare WARP</strong> on each machine before opening Roblox Studio, which rotates the outgoing DNS/IP and avoids the block. We recommend enabling WARP on all machines <em>before</em> the event starts and keeping it on throughout the login session.',
    es: 'Al iniciar sesión en varias máquinas al mismo tiempo usando la misma IP pública, Roblox identifica el patrón como actividad sospechosa y exige CAPTCHA. <strong>Solución actual: usar Cloudflare WARP</strong> en cada máquina antes de abrir Roblox Studio, lo que rota el DNS/IP de salida y evita el bloqueo. Recomendamos activar WARP en todas las máquinas <em>antes</em> de iniciar el evento y mantenerlo activado durante toda la sesión de inicio de sesión.',
  },
};

const LBL = {
  q: (n) => ({ pt: `Pergunta ${n}`, en: `Question ${n}`, es: `Pregunta ${n}` }),
  min: { pt: 'Mínimo', en: 'Minimum', es: 'Mínimo' },
  rec: { pt: 'Recomendado', en: 'Recommended', es: 'Recomendado' },
  storage: { pt: 'Armazenamento', en: 'Storage', es: 'Almacenamiento' },
  disk: { pt: 'Disco', en: 'Disk', es: 'Disco' },
};

const plain = (s) => ({ pt: s, en: s, es: s });

export const TECH_SECTIONS = [
  {
    n: '01',
    title: {
      pt: 'Software e computadores',
      en: 'Software and computers',
      es: 'Software y computadoras',
    },
    items: [
      {
        label: LBL.q('1.1'),
        q: {
          pt: 'Quais são as especificações mínimas e recomendadas dos computadores para executar o software com bom desempenho?',
          en: 'What are the minimum and recommended computer specifications to run the software with good performance?',
          es: '¿Cuáles son las especificaciones mínimas y recomendadas de las computadoras para ejecutar el software con buen rendimiento?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: 'O plugin roda <strong>dentro do Roblox Studio</strong>, então os requisitos são os do próprio Studio. O plugin em si é leve — scripts Lua com interface de UI — e não impõe carga extra significativa.',
              en: 'The plugin runs <strong>inside Roblox Studio</strong>, so the requirements are those of Studio itself. The plugin itself is lightweight — Lua scripts with a UI — and doesn’t add significant extra load.',
              es: 'El plugin se ejecuta <strong>dentro de Roblox Studio</strong>, por lo que los requisitos son los del propio Studio. El plugin en sí es liviano — scripts Lua con interfaz de usuario — y no impone una carga adicional significativa.',
            },
          },
          {
            type: 'cols',
            cols: [
              {
                tone: 'b',
                label: LBL.min,
                rows: [
                  { k: plain('CPU'), v: { pt: 'Intel Core i3 / AMD Ryzen 3 (4ª geração+)', en: 'Intel Core i3 / AMD Ryzen 3 (4th gen+)', es: 'Intel Core i3 / AMD Ryzen 3 (4ª generación o superior)' } },
                  { k: plain('RAM'), v: plain('4 GB') },
                  { k: plain('GPU'), v: { pt: 'Integrada (Intel HD 4000+)', en: 'Integrated (Intel HD 4000+)', es: 'Integrada (Intel HD 4000+)' } },
                  { k: LBL.storage, v: { pt: '~2 GB livres', en: '~2 GB free', es: '~2 GB libres' } },
                  { k: plain('OS'), v: plain('Windows 10 64-bit / macOS 10.14+') },
                ],
              },
              {
                tone: 'a',
                label: LBL.rec,
                rows: [
                  { k: plain('CPU'), v: { pt: 'Intel Core i5 / Ryzen 5 (8ª geração+)', en: 'Intel Core i5 / Ryzen 5 (8th gen+)', es: 'Intel Core i5 / Ryzen 5 (8ª generación o superior)' } },
                  { k: plain('RAM'), v: plain('8 GB+') },
                  { k: plain('GPU'), v: { pt: 'Dedicada (qualquer NVIDIA/AMD moderna)', en: 'Dedicated (any modern NVIDIA/AMD)', es: 'Dedicada (cualquier NVIDIA/AMD moderna)' } },
                  { k: LBL.storage, v: { pt: 'SSD com 5 GB livres', en: 'SSD with 5 GB free', es: 'SSD con 5 GB libres' } },
                  { k: plain('OS'), v: plain('Windows 11 64-bit') },
                ],
              },
            ],
          },
        ],
      },
      {
        label: LBL.q('1.2'),
        q: {
          pt: 'Existe alguma configuração específica de computador que vocês já tenham utilizado com sucesso em eventos ou workshops semelhantes?',
          en: 'Is there a specific computer configuration you’ve already used successfully in similar events or workshops?',
          es: '¿Existe alguna configuración específica de computadora que ya hayan utilizado con éxito en eventos o talleres similares?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: 'Não há registro específico de hardware de eventos anteriores nos repositórios. Com base no comportamento do sistema, computadores com <strong>Intel Core i5, 8 GB de RAM e SSD</strong> oferecem uma experiência fluida. Máquinas com HD mecânico e 4 GB de RAM tendem a ser lentas na abertura inicial do Roblox Studio e no carregamento de templates de projeto.',
              en: 'There’s no specific hardware record from previous events in the repositories. Based on system behavior, computers with <strong>Intel Core i5, 8 GB of RAM and an SSD</strong> offer a smooth experience. Machines with a mechanical hard drive and 4 GB of RAM tend to be slow when first opening Roblox Studio and loading project templates.',
              es: 'No hay un registro específico de hardware de eventos anteriores en los repositorios. Con base en el comportamiento del sistema, las computadoras con <strong>Intel Core i5, 8 GB de RAM y SSD</strong> ofrecen una experiencia fluida. Las máquinas con disco duro mecánico y 4 GB de RAM tienden a ser lentas en la apertura inicial de Roblox Studio y en la carga de plantillas de proyecto.',
            },
          },
        ],
      },
      {
        label: LBL.q('1.3'),
        q: {
          pt: 'Se precisarmos priorizar um componente de hardware, qual seria o mais importante: RAM, CPU, GPU ou outro?',
          en: 'If we had to prioritize one hardware component, which would be the most important: RAM, CPU, GPU or something else?',
          es: '¿Si tuviéramos que priorizar un componente de hardware, cuál sería el más importante: RAM, CPU, GPU u otro?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: '<strong>RAM é o componente mais crítico.</strong> O Roblox Studio usa em torno de 500 MB a 1,5 GB sozinho; o sistema operacional ocupa mais 2–3 GB. Em uma máquina com 4 GB no total, pouco sobra — qualquer template 3D maior (Racing, Platformer) pode engasgar. Com 8 GB, o Studio respira bem e ainda há margem para o navegador aberto.',
              en: '<strong>RAM is the most critical component.</strong> Roblox Studio alone uses around 500 MB to 1.5 GB; the operating system takes up another 2–3 GB. On a machine with 4 GB total, little is left over — any larger 3D template (Racing, Platformer) can stutter. With 8 GB, Studio runs comfortably and there’s still room for a browser open alongside it.',
              es: '<strong>La RAM es el componente más crítico.</strong> Roblox Studio usa entre 500 MB y 1,5 GB por sí solo; el sistema operativo ocupa otros 2–3 GB. En una máquina con 4 GB en total, queda poco margen — cualquier plantilla 3D más grande (Racing, Platformer) puede trabar. Con 8 GB, Studio funciona con soltura y aún queda margen para el navegador abierto.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'A GPU fica em segundo lugar: afeta diretamente a fluidez da viewport 3D durante edição de terreno e modelos. Para tutoriais mais simples (UI, scripts), a GPU integrada é suficiente; para cenários com terrain e iluminação, uma GPU dedicada faz diferença perceptível.',
              en: 'The GPU comes second: it directly affects how smooth the 3D viewport feels when editing terrain and models. For simpler tutorials (UI, scripts), an integrated GPU is enough; for scenes with terrain and lighting, a dedicated GPU makes a noticeable difference.',
              es: 'La GPU queda en segundo lugar: afecta directamente la fluidez del viewport 3D al editar terreno y modelos. Para tutoriales más simples (UI, scripts), la GPU integrada es suficiente; para escenarios con terreno e iluminación, una GPU dedicada marca una diferencia perceptible.',
            },
          },
        ],
      },
      {
        label: LBL.q('1.4'),
        q: {
          pt: 'Qual seria uma boa configuração básica para o evento em termos de CPU, RAM e GPU?',
          en: 'What would be a good baseline configuration for the event in terms of CPU, RAM and GPU?',
          es: '¿Cuál sería una buena configuración básica para el evento en cuanto a CPU, RAM y GPU?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: 'Configuração equilibrada e factível para laboratórios de eventos:',
              en: 'A balanced, achievable configuration for event labs:',
              es: 'Configuración equilibrada y factible para laboratorios de eventos:',
            },
          },
          {
            type: 'kv',
            rows: [
              { k: plain('CPU'), v: { pt: 'Intel Core i5-8xxx / AMD Ryzen 5 3xxx ou superior', en: 'Intel Core i5-8xxx / AMD Ryzen 5 3xxx or higher', es: 'Intel Core i5-8xxx / AMD Ryzen 5 3xxx o superior' } },
              { k: plain('RAM'), v: { pt: '8 GB DDR4 (16 GB se disponível)', en: '8 GB DDR4 (16 GB if available)', es: '8 GB DDR4 (16 GB si está disponible)' } },
              { k: plain('GPU'), v: { pt: 'Integrada Intel UHD 620 / AMD Vega 8 — ou qualquer dedicada', en: 'Integrated Intel UHD 620 / AMD Vega 8 — or any dedicated GPU', es: 'Integrada Intel UHD 620 / AMD Vega 8 — o cualquier GPU dedicada' } },
              { k: LBL.disk, v: { pt: 'SSD com ao menos 5 GB livres', en: 'SSD with at least 5 GB free', es: 'SSD con al menos 5 GB libres' } },
            ],
          },
          {
            type: 'p',
            text: {
              pt: 'Mínimo aceitável com risco de lentidão: i3 / 4 GB / HD mecânico. Se o lote de máquinas for heterogêneo, priorize instalar o Roblox Studio antecipadamente nas máquinas mais fracas e faça um teste de abertura de template.',
              en: 'Minimum acceptable with a risk of slowness: i3 / 4 GB / mechanical hard drive. If the batch of machines is mixed, prioritize installing Roblox Studio ahead of time on the weaker machines and run a test opening a template.',
              es: 'Mínimo aceptable con riesgo de lentitud: i3 / 4 GB / disco duro mecánico. Si el lote de máquinas es heterogéneo, priorice instalar Roblox Studio con anticipación en las máquinas más débiles y haga una prueba de apertura de plantilla.',
            },
          },
        ],
      },
    ],
  },
  {
    n: '02',
    title: {
      pt: 'Instalação e configuração',
      en: 'Installation and setup',
      es: 'Instalación y configuración',
    },
    items: [
      {
        label: LBL.q('2.1'),
        q: {
          pt: 'As atualizações automáticas podem ser desativadas ou controladas durante o evento?',
          en: 'Can automatic updates be disabled or controlled during the event?',
          es: '¿Se pueden desactivar o controlar las actualizaciones automáticas durante el evento?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: 'O Roblox Studio verifica atualizações automaticamente toda vez que é aberto. <strong>Não existe uma opção oficial para desativar esse comportamento.</strong>',
              en: 'Roblox Studio checks for updates automatically every time it’s opened. <strong>There’s no official option to disable this behavior.</strong>',
              es: 'Roblox Studio verifica actualizaciones automáticamente cada vez que se abre. <strong>No existe una opción oficial para desactivar este comportamiento.</strong>',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'A prática recomendada é <strong>abrir o Roblox Studio em todas as máquinas no dia anterior ao evento</strong>, deixar que ele se atualize, e então não fechá-lo até o início das atividades (ou reabri-lo uma vez na manhã do evento). Assim, no horário crítico, ele já está atualizado e não baixa nada inesperado.',
              en: 'The recommended practice is to <strong>open Roblox Studio on all machines the day before the event</strong>, let it update, and then not close it until activities begin (or reopen it once on the morning of the event). That way, at the critical moment, it’s already up to date and won’t download anything unexpected.',
              es: 'La práctica recomendada es <strong>abrir Roblox Studio en todas las máquinas el día anterior al evento</strong>, dejar que se actualice y luego no cerrarlo hasta el inicio de las actividades (o volver a abrirlo una vez en la mañana del evento). Así, en el horario crítico, ya está actualizado y no descarga nada inesperado.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'O plugin propriamente dito (o arquivo <code>.rbxmx</code> instalado manualmente na pasta <code>Plugins</code>) <strong>não se atualiza automaticamente</strong> — ele permanece na versão que foi copiada para a máquina, o que dá controle total sobre qual versão será usada no evento.',
              en: 'The plugin itself (the <code>.rbxmx</code> file manually installed in the <code>Plugins</code> folder) <strong>does not update automatically</strong> — it stays on the version that was copied to the machine, giving full control over which version is used at the event.',
              es: 'El propio plugin (el archivo <code>.rbxmx</code> instalado manualmente en la carpeta <code>Plugins</code>) <strong>no se actualiza automáticamente</strong> — permanece en la versión que fue copiada a la máquina, lo que da control total sobre qué versión se usará en el evento.',
            },
          },
        ],
      },
      {
        label: LBL.q('2.2'),
        q: {
          pt: 'O plugin exige uma versão específica do Roblox Studio? Como garantir compatibilidade entre todas as máquinas?',
          en: 'Does the plugin require a specific version of Roblox Studio? How can compatibility be guaranteed across all machines?',
          es: '¿El plugin exige una versión específica de Roblox Studio? ¿Cómo garantizar la compatibilidad entre todas las máquinas?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: 'O plugin não trava em uma versão específica do Studio — ele usa APIs padrão do Roblox (UI, HttpService, StudioService) que são estáveis entre versões recentes. <strong>Qualquer versão do Studio dos últimos 12 meses deve funcionar.</strong>',
              en: 'The plugin isn’t locked to a specific Studio version — it uses standard Roblox APIs (UI, HttpService, StudioService) that are stable across recent versions. <strong>Any Studio version from the last 12 months should work.</strong>',
              es: 'El plugin no depende de una versión específica de Studio — usa APIs estándar de Roblox (UI, HttpService, StudioService) que son estables entre versiones recientes. <strong>Cualquier versión de Studio de los últimos 12 meses debería funcionar.</strong>',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'Para garantir uniformidade: instale o Studio em todas as máquinas com antecedência mínima de 1 dia, deixe-o atualizar uma vez, e copie o arquivo do plugin (<code>ExpedicaoGamesCom.rbxmx</code>) para a pasta de plugins de cada máquina:',
              en: 'To ensure uniformity: install Studio on all machines at least 1 day in advance, let it update once, and copy the plugin file (<code>ExpedicaoGamesCom.rbxmx</code>) to each machine’s plugins folder:',
              es: 'Para garantizar uniformidad: instale Studio en todas las máquinas con al menos 1 día de antelación, déjelo actualizarse una vez y copie el archivo del plugin (<code>ExpedicaoGamesCom.rbxmx</code>) a la carpeta de plugins de cada máquina:',
            },
          },
          {
            type: 'domains',
            tone: 'b',
            items: [
              { name: 'Windows', note: plain('%LOCALAPPDATA%\\Roblox\\Plugins\\') },
              { name: 'macOS', note: plain('~/Documents/Roblox/Plugins/') },
            ],
          },
          {
            type: 'p',
            text: {
              pt: 'Reinicie o Studio após copiar. Em seguida, confirme que o botão do plugin aparece na barra de ferramentas antes de liberar a máquina.',
              en: 'Restart Studio after copying. Then confirm the plugin button appears in the toolbar before releasing the machine.',
              es: 'Reinicie Studio después de copiar. Luego, confirme que el botón del plugin aparece en la barra de herramientas antes de liberar la máquina.',
            },
          },
        ],
      },
    ],
  },
  {
    n: '03',
    title: {
      pt: 'Contas, licenças e acesso',
      en: 'Accounts, licenses and access',
      es: 'Cuentas, licencias y acceso',
    },
    items: [
      {
        label: LBL.q('3.1'),
        q: {
          pt: 'Pode haver algum problema se muitos participantes fizerem login ao mesmo tempo usando a mesma rede ou o mesmo endereço IP público?',
          en: 'Can there be a problem if many participants log in at the same time using the same network or public IP address?',
          es: '¿Puede haber algún problema si muchos participantes inician sesión al mismo tiempo usando la misma red o la misma dirección IP pública?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: '<strong>Sim — e esse é o problema que já vivenciamos.</strong> O Roblox detecta múltiplos logins simultâneos a partir do mesmo IP público como comportamento de bot ou credential stuffing e aciona CAPTCHA ou bloqueio temporário da autenticação.',
              en: '<strong>Yes — and this is the problem we’ve already run into.</strong> Roblox detects multiple simultaneous logins from the same public IP as bot behavior or credential stuffing, and triggers a CAPTCHA or a temporary authentication block.',
              es: '<strong>Sí — y este es el problema que ya hemos vivido.</strong> Roblox detecta múltiples inicios de sesión simultáneos desde la misma IP pública como comportamiento de bot o credential stuffing, y activa CAPTCHA o un bloqueo temporal de la autenticación.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'Estratégias para mitigar:',
              en: 'Strategies to mitigate:',
              es: 'Estrategias para mitigar:',
            },
          },
          {
            type: 'steps',
            items: [
              {
                pt: '<strong>Cloudflare WARP (solução já validada):</strong> instalar e ativar o WARP antes do login rotaciona o IP/DNS de saída de cada máquina, reduzindo a chance de correlação. Ative antes do horário de login coletivo.',
                en: '<strong>Cloudflare WARP (already validated solution):</strong> installing and enabling WARP before login rotates each machine’s outgoing IP/DNS, reducing the chance of correlation. Enable it before the collective login time.',
                es: '<strong>Cloudflare WARP (solución ya validada):</strong> instalar y activar WARP antes del inicio de sesión rota la IP/DNS de salida de cada máquina, reduciendo la posibilidad de correlación. Actívelo antes del horario de inicio de sesión colectivo.',
              },
              {
                pt: '<strong>Escalonar os logins:</strong> ao invés de todos entrarem no mesmo minuto, dividir em grupos de 5–8 máquinas em intervalos de 2–3 minutos reduz o pico de requisições ao mesmo IP.',
                en: '<strong>Stagger the logins:</strong> instead of everyone logging in at the same minute, splitting into groups of 5–8 machines at 2–3 minute intervals reduces the spike of requests to the same IP.',
                es: '<strong>Escalonar los inicios de sesión:</strong> en lugar de que todos entren en el mismo minuto, dividir en grupos de 5–8 máquinas con intervalos de 2–3 minutos reduce el pico de solicitudes hacia la misma IP.',
              },
              {
                pt: '<strong>Pré-autenticar antes do evento:</strong> se possível, fazer o login nas contas com antecedência (1–2 horas antes), quando a rede ainda não está sob carga. O Studio mantém a sessão ativa enquanto não é fechado.',
                en: '<strong>Pre-authenticate before the event:</strong> if possible, log into the accounts ahead of time (1–2 hours before), when the network isn’t under load yet. Studio keeps the session active as long as it isn’t closed.',
                es: '<strong>Preautenticar antes del evento:</strong> si es posible, inicie sesión en las cuentas con antelación (1–2 horas antes), cuando la red aún no está bajo carga. Studio mantiene la sesión activa mientras no se cierre.',
              },
              {
                pt: '<strong>Contas pré-aquecidas:</strong> contas com histórico de uso regular (não recém-criadas) recebem menos CAPTCHA. Evite criar todas as contas dos participantes no mesmo dia do evento.',
                en: '<strong>Warmed-up accounts:</strong> accounts with a history of regular use (not freshly created) receive fewer CAPTCHAs. Avoid creating all participant accounts on the same day as the event.',
                es: '<strong>Cuentas ya calentadas:</strong> las cuentas con historial de uso regular (no recién creadas) reciben menos CAPTCHA. Evite crear todas las cuentas de los participantes el mismo día del evento.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    n: '04',
    title: {
      pt: 'Requisitos de internet',
      en: 'Internet requirements',
      es: 'Requisitos de internet',
    },
    items: [
      {
        label: LBL.q('4.1'),
        q: {
          pt: 'Qual largura de banda recomendada por usuário e no total para o evento?',
          en: 'What bandwidth is recommended per user and in total for the event?',
          es: '¿Qué ancho de banda se recomienda por usuario y en total para el evento?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: 'Baseado no comportamento do sistema — Studio + plugin fazendo chamadas HTTP ao servidor Django:',
              en: 'Based on system behavior — Studio + plugin making HTTP calls to the Django server:',
              es: 'Según el comportamiento del sistema — Studio + plugin haciendo llamadas HTTP al servidor Django:',
            },
          },
          {
            type: 'kv',
            rows: [
              { k: { pt: 'Download por usuário (uso ativo)', en: 'Download per user (active use)', es: 'Descarga por usuario (uso activo)' }, v: plain('2–5 Mbps') },
              { k: { pt: 'Upload por usuário (uso ativo)', en: 'Upload per user (active use)', es: 'Subida por usuario (uso activo)' }, v: plain('1–2 Mbps') },
              { k: { pt: 'Pico de download (abertura + login)', en: 'Download peak (launch + login)', es: 'Pico de descarga (apertura + inicio de sesión)' }, v: { pt: '5–15 Mbps por máquina', en: '5–15 Mbps per machine', es: '5–15 Mbps por máquina' } },
            ],
          },
          {
            type: 'p',
            text: {
              pt: 'Para 20 participantes simultâneos, recomendamos <strong>100 Mbps de download e 40 Mbps de upload</strong> como piso. O pico de abertura é o momento mais intenso — todo mundo baixando assets do Roblox CDN ao mesmo tempo. Uma conexão de 200 Mbps eliminaria esse gargalo.',
              en: 'For 20 simultaneous participants, we recommend <strong>100 Mbps download and 40 Mbps upload</strong> as a floor. The launch peak is the most intense moment — everyone downloading assets from the Roblox CDN at the same time. A 200 Mbps connection would eliminate that bottleneck.',
              es: 'Para 20 participantes simultáneos, recomendamos <strong>100 Mbps de descarga y 40 Mbps de subida</strong> como mínimo. El pico de apertura es el momento más intenso — todos descargando assets del CDN de Roblox al mismo tiempo. Una conexión de 200 Mbps eliminaría ese cuello de botella.',
            },
          },
        ],
      },
      {
        label: LBL.q('4.2'),
        q: {
          pt: 'Quais atividades geram o maior consumo de internet?',
          en: 'Which activities generate the most internet usage?',
          es: '¿Qué actividades generan el mayor consumo de internet?',
        },
        blocks: [
          {
            type: 'table',
            head: [
              { pt: 'Atividade', en: 'Activity', es: 'Actividad' },
              { pt: 'Consumo', en: 'Usage', es: 'Consumo' },
              { pt: 'Frequência', en: 'Frequency', es: 'Frecuencia' },
              { pt: 'Impacto', en: 'Impact', es: 'Impacto' },
            ],
            rows: [
              {
                cells: [
                  { pt: 'Login no Roblox Studio', en: 'Roblox Studio login', es: 'Inicio de sesión en Roblox Studio' },
                  plain('~20–50 MB'),
                  { pt: 'Uma vez', en: 'Once', es: 'Una vez' },
                ],
                tag: { tone: 'r', text: { pt: 'Alto no pico', en: 'High at peak', es: 'Alto en el pico' } },
              },
              {
                cells: [
                  { pt: 'Abertura de template de projeto', en: 'Opening a project template', es: 'Apertura de plantilla de proyecto' },
                  plain('~30–100 MB'),
                  { pt: 'Por sessão', en: 'Per session', es: 'Por sesión' },
                ],
                tag: { tone: 'r', text: { pt: 'Alto no pico', en: 'High at peak', es: 'Alto en el pico' } },
              },
              {
                cells: [
                  { pt: 'Download de assets / modelos do catálogo', en: 'Downloading assets / catalog models', es: 'Descarga de assets / modelos del catálogo' },
                  { pt: 'Variável', en: 'Variable', es: 'Variable' },
                  { pt: 'Sob demanda', en: 'On demand', es: 'Bajo demanda' },
                ],
                tag: { tone: 'a', text: { pt: 'Médio', en: 'Medium', es: 'Medio' } },
              },
              {
                cells: [
                  { pt: 'Salvamento do projeto (Roblox cloud)', en: 'Saving the project (Roblox cloud)', es: 'Guardado del proyecto (nube de Roblox)' },
                  plain('~1–10 MB'),
                  { pt: 'Periódico', en: 'Periodic', es: 'Periódico' },
                ],
                tag: { tone: 'b', text: { pt: 'Baixo', en: 'Low', es: 'Bajo' } },
              },
              {
                cells: [
                  { pt: 'Chamadas ao servidor do plugin (categorias, chatbot)', en: 'Calls to the plugin server (categories, chatbot)', es: 'Llamadas al servidor del plugin (categorías, chatbot)' },
                  plain('&lt; 100 KB'),
                  { pt: 'Esporádico', en: 'Sporadic', es: 'Esporádico' },
                ],
                tag: { tone: 'b', text: { pt: 'Mínimo', en: 'Minimal', es: 'Mínimo' } },
              },
              {
                cells: [
                  { pt: 'Envio de analytics de conclusão de tutorial', en: 'Sending tutorial-completion analytics', es: 'Envío de analíticas de finalización de tutorial' },
                  plain('&lt; 10 KB'),
                  { pt: 'Por conclusão', en: 'Per completion', es: 'Por finalización' },
                ],
                tag: { tone: 'b', text: { pt: 'Mínimo', en: 'Minimal', es: 'Mínimo' } },
              },
            ],
          },
          {
            type: 'p',
            text: {
              pt: 'O plugin em si tem consumo de rede muito baixo — faz apenas requisições JSON pequenas para o servidor de analytics e para buscar o fluxo do chatbot. O grosso do tráfego vem do próprio Roblox Studio (CDN de assets, save na nuvem).',
              en: 'The plugin itself has very low network usage — it only makes small JSON requests to the analytics server and to fetch the chatbot flow. Most of the traffic comes from Roblox Studio itself (asset CDN, cloud save).',
              es: 'El plugin en sí tiene un consumo de red muy bajo — hace solo pequeñas solicitudes JSON al servidor de analíticas y para obtener el flujo del chatbot. La mayor parte del tráfico proviene del propio Roblox Studio (CDN de assets, guardado en la nube).',
            },
          },
        ],
      },
      {
        label: LBL.q('4.3'),
        q: {
          pt: 'O software possui algum requisito de latência?',
          en: 'Does the software have any latency requirement?',
          es: '¿El software tiene algún requisito de latencia?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: 'Não existe um requisito formal de latência. Na prática:',
              en: 'There’s no formal latency requirement. In practice:',
              es: 'No existe un requisito formal de latencia. En la práctica:',
            },
          },
          {
            type: 'p',
            text: {
              pt: '<strong>Roblox Studio (edição):</strong> funciona bem com qualquer latência até ~300 ms. O Studio é uma ferramenta local; a latência só afeta salvar na nuvem e baixar assets, não a edição em si.',
              en: '<strong>Roblox Studio (editing):</strong> works well with any latency up to ~300 ms. Studio is a local tool; latency only affects cloud saving and asset downloads, not editing itself.',
              es: '<strong>Roblox Studio (edición):</strong> funciona bien con cualquier latencia hasta ~300 ms. Studio es una herramienta local; la latencia solo afecta el guardado en la nube y la descarga de assets, no la edición en sí.',
            },
          },
          {
            type: 'p',
            text: {
              pt: '<strong>Servidor do plugin (Django):</strong> as chamadas são pontuais (buscar flow, enviar analytics). Latências de até 1–2 segundos são toleradas silenciosamente pelo plugin, que tem retries configurados. Não é um sistema em tempo real.',
              en: '<strong>Plugin server (Django):</strong> calls are one-off (fetch the flow, send analytics). Latencies of up to 1–2 seconds are silently tolerated by the plugin, which has retries configured. It isn’t a real-time system.',
              es: '<strong>Servidor del plugin (Django):</strong> las llamadas son puntuales (obtener el flow, enviar analíticas). Latencias de hasta 1–2 segundos son toleradas silenciosamente por el plugin, que tiene reintentos configurados. No es un sistema en tiempo real.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'Conexões com latência acima de 500 ms para os servidores do Roblox podem deixar o carregamento de assets lento e o salvamento demorado, mas não quebram o funcionamento.',
              en: 'Connections with latency above 500 ms to Roblox’s servers can make asset loading slow and saving take longer, but they don’t break functionality.',
              es: 'Conexiones con latencia superior a 500 ms hacia los servidores de Roblox pueden hacer que la carga de assets sea lenta y el guardado demore, pero no rompen el funcionamiento.',
            },
          },
        ],
      },
      {
        label: LBL.q('4.4'),
        q: {
          pt: 'O software exige conexão constante? O que acontece se a internet cair temporariamente?',
          en: 'Does the software require a constant connection? What happens if the internet drops temporarily?',
          es: '¿El software exige conexión constante? ¿Qué pasa si la internet se cae temporalmente?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: '<strong>O Roblox Studio funciona offline para edição.</strong> Se a internet cair durante o trabalho, o participante pode continuar editando normalmente. O problema ocorre no momento de <em>salvar na nuvem</em> — o Studio vai tentar e falhar silenciosamente ou avisar o usuário.',
              en: '<strong>Roblox Studio works offline for editing.</strong> If the internet drops while working, the participant can keep editing normally. The problem happens at the moment of <em>saving to the cloud</em> — Studio will try and fail silently, or warn the user.',
              es: '<strong>Roblox Studio funciona sin conexión para la edición.</strong> Si la internet se cae durante el trabajo, el participante puede seguir editando normalmente. El problema ocurre en el momento de <em>guardar en la nube</em> — Studio intentará y fallará silenciosamente, o avisará al usuario.',
            },
          },
          {
            type: 'p',
            text: {
              pt: '<strong>O plugin foi projetado com degradação graciosa:</strong> se o servidor de analytics estiver inacessível, o plugin apenas registra o erro internamente (sem travar ou mostrar erro ao usuário). As chamadas de analytics têm 3 retries automáticos com delay de 2 segundos entre eles; após isso, descarta sem impactar a experiência do tutorial.',
              en: '<strong>The plugin was designed with graceful degradation:</strong> if the analytics server is unreachable, the plugin just logs the error internally (without crashing or showing an error to the user). Analytics calls have 3 automatic retries with a 2-second delay between them; after that, they’re discarded without affecting the tutorial experience.',
              es: '<strong>El plugin fue diseñado con degradación elegante:</strong> si el servidor de analíticas no está accesible, el plugin solo registra el error internamente (sin bloquearse ni mostrar un error al usuario). Las llamadas de analíticas tienen 3 reintentos automáticos con 2 segundos de espera entre ellos; después de eso, se descartan sin afectar la experiencia del tutorial.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'O chatbot (Bilde) precisa buscar o fluxo do servidor uma vez na abertura. Se a internet estiver fora nesse momento, o plugin exibe o estado de erro e aguarda reconexão — não quebra o Studio, mas o chatbot fica indisponível até a conexão voltar.',
              en: 'The chatbot (Bilde) needs to fetch the flow from the server once on open. If the internet is down at that moment, the plugin shows an error state and waits for reconnection — it doesn’t break Studio, but the chatbot stays unavailable until the connection comes back.',
              es: 'El chatbot (Bilde) necesita obtener el flujo del servidor una vez al abrirse. Si la internet está fuera en ese momento, el plugin muestra el estado de error y espera la reconexión — no rompe Studio, pero el chatbot queda indisponible hasta que la conexión vuelva.',
            },
          },
          {
            type: 'p',
            text: {
              pt: '<strong>Risco real de perda de trabalho:</strong> médio. O Studio tem auto-save, mas se a queda ocorrer exatamente entre um save automático e o próximo, mudanças feitas nesse intervalo podem não ter sido salvas na nuvem. O Studio avisa quando a reconexão acontece e tenta re-sincronizar.',
              en: '<strong>Real risk of losing work:</strong> medium. Studio has auto-save, but if the outage happens right between one automatic save and the next, changes made in that window may not have been saved to the cloud. Studio notifies you when reconnection happens and attempts to re-sync.',
              es: '<strong>Riesgo real de pérdida de trabajo:</strong> medio. Studio tiene autoguardado, pero si la caída ocurre justo entre un guardado automático y el siguiente, los cambios hechos en ese intervalo podrían no haberse guardado en la nube. Studio avisa cuando la reconexión ocurre e intenta resincronizar.',
            },
          },
        ],
      },
    ],
  },
  {
    n: '05',
    title: {
      pt: 'Assistente de IA e uso simultâneo',
      en: 'AI assistant and concurrent use',
      es: 'Asistente de IA y uso simultáneo',
    },
    note: {
      tone: 'b',
      title: {
        pt: 'Esclarecimento sobre o “assistente de IA”',
        en: 'Clarification about the “AI assistant”',
        es: 'Aclaración sobre el “asistente de IA”',
      },
      text: {
        pt: 'O chatbot do plugin (<strong>Bilde</strong>) <strong>não é um modelo de linguagem (LLM)</strong> como GPT ou Claude. É um fluxo de decisão pré-definido armazenado no servidor Django — uma árvore de nós e escolhas, não geração de texto em tempo real. Isso muda significativamente as respostas sobre consumo de banda e limites de uso simultâneo.',
        en: 'The plugin’s chatbot (<strong>Bilde</strong>) <strong>is not a language model (LLM)</strong> like GPT or Claude. It’s a predefined decision flow stored on the Django server — a tree of nodes and choices, not real-time text generation. This significantly changes the answers about bandwidth usage and concurrent-use limits.',
        es: 'El chatbot del plugin (<strong>Bilde</strong>) <strong>no es un modelo de lenguaje (LLM)</strong> como GPT o Claude. Es un flujo de decisión predefinido almacenado en el servidor Django — un árbol de nodos y opciones, no generación de texto en tiempo real. Esto cambia significativamente las respuestas sobre consumo de ancho de banda y límites de uso simultáneo.',
      },
    },
    items: [
      {
        label: LBL.q('5.1'),
        q: {
          pt: 'O uso das funcionalidades de IA aumenta significativamente o consumo de largura de banda?',
          en: 'Does using the AI features significantly increase bandwidth usage?',
          es: '¿El uso de las funcionalidades de IA aumenta significativamente el consumo de ancho de banda?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: '<strong>Não.</strong> O chatbot Bilde é um fluxo estático: ao abrir a tela, o plugin faz <em>uma única requisição GET</em> ao servidor para buscar o JSON do fluxo (alguns kilobytes). Cada escolha do usuário faz uma requisição POST com o estado atual da sessão — também poucos kilobytes. Não há chamadas a APIs de LLM externas.',
              en: '<strong>No.</strong> The Bilde chatbot is a static flow: when the screen opens, the plugin makes <em>a single GET request</em> to the server to fetch the flow’s JSON (a few kilobytes). Each user choice makes a POST request with the current session state — also just a few kilobytes. There are no calls to external LLM APIs.',
              es: '<strong>No.</strong> El chatbot Bilde es un flujo estático: al abrir la pantalla, el plugin hace <em>una única solicitud GET</em> al servidor para obtener el JSON del flujo (algunos kilobytes). Cada elección del usuario hace una solicitud POST con el estado actual de la sesión — también unos pocos kilobytes. No hay llamadas a APIs de LLM externas.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'Todo o tráfego do plugin somado é equivalente a carregar uma página web simples por participante.',
              en: 'All of the plugin’s traffic combined is equivalent to loading a simple web page per participant.',
              es: 'Todo el tráfico del plugin sumado equivale a cargar una página web simple por participante.',
            },
          },
        ],
      },
      {
        label: LBL.q('5.2'),
        q: {
          pt: 'O que acontece se todos os participantes enviarem uma solicitação à IA aproximadamente ao mesmo tempo?',
          en: 'What happens if all participants send a request to the AI at roughly the same time?',
          es: '¿Qué pasa si todos los participantes envían una solicitud a la IA aproximadamente al mismo tiempo?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: 'Como o chatbot é um fluxo pré-definido (não um LLM), o servidor Django lida com as requisições como simples leituras de banco de dados. <strong>20–30 requisições simultâneas não representam carga significativa</strong> para o servidor — é uma operação de banco de dados extremamente leve comparada a processar texto com um modelo de linguagem.',
              en: 'Since the chatbot is a predefined flow (not an LLM), the Django server treats requests as simple database reads. <strong>20–30 simultaneous requests are not a significant load</strong> for the server — it’s an extremely lightweight database operation compared to processing text with a language model.',
              es: 'Como el chatbot es un flujo predefinido (no un LLM), el servidor Django trata las solicitudes como simples lecturas de base de datos. <strong>20–30 solicitudes simultáneas no representan una carga significativa</strong> para el servidor — es una operación de base de datos extremadamente liviana comparada con procesar texto con un modelo de lenguaje.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'O servidor consegue responder a centenas de requisições por segundo nesse modelo. Para um evento com dezenas de participantes, não há risco de gargalo no chatbot.',
              en: 'The server can respond to hundreds of requests per second in this model. For an event with dozens of participants, there’s no risk of a bottleneck in the chatbot.',
              es: 'El servidor puede responder a cientos de solicitudes por segundo en este modelo. Para un evento con decenas de participantes, no hay riesgo de cuello de botella en el chatbot.',
            },
          },
        ],
      },
      {
        label: { pt: 'Pergunta 5.3 + 5.4', en: 'Question 5.3 + 5.4', es: 'Pregunta 5.3 + 5.4' },
        q: {
          pt: 'Existem limites de taxa ou restrições para solicitações por minuto, por usuário ou por IP?',
          en: 'Are there rate limits or restrictions on requests per minute, per user, or per IP?',
          es: '¿Existen límites de tasa o restricciones de solicitudes por minuto, por usuario o por IP?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: 'O servidor Django <strong>não tem rate limiting configurado</strong> nos endpoints do plugin (categorias, chatbot, analytics). O código define <code>CORS_ALLOW_ALL_ORIGINS = True</code> e não há middleware de throttling aplicado. Para o volume de um evento, isso é adequado.',
              en: 'The Django server <strong>has no rate limiting configured</strong> on the plugin’s endpoints (categories, chatbot, analytics). The code sets <code>CORS_ALLOW_ALL_ORIGINS = True</code> and no throttling middleware is applied. For an event’s volume, this is adequate.',
              es: 'El servidor Django <strong>no tiene rate limiting configurado</strong> en los endpoints del plugin (categorías, chatbot, analíticas). El código define <code>CORS_ALLOW_ALL_ORIGINS = True</code> y no hay middleware de throttling aplicado. Para el volumen de un evento, esto es adecuado.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'Não há ajuste necessário de nossa parte para o evento — o servidor está preparado para uso simultâneo de dezenas de participantes sem configuração especial.',
              en: 'No adjustment is needed on our end for the event — the server is ready for simultaneous use by dozens of participants without any special configuration.',
              es: 'No es necesario ningún ajuste de nuestra parte para el evento — el servidor está preparado para el uso simultáneo de decenas de participantes sin configuración especial.',
            },
          },
        ],
      },
    ],
  },
  {
    n: '06',
    title: {
      pt: 'Configuração de rede',
      en: 'Network configuration',
      es: 'Configuración de red',
    },
    items: [
      {
        label: LBL.q('6.1'),
        q: {
          pt: 'Quais domínios ou serviços precisam estar acessíveis? Existe uma allowlist para compartilhar com a TI do local?',
          en: 'Which domains or services need to be reachable? Is there an allowlist to share with the venue’s IT team?',
          es: '¿Qué dominios o servicios deben estar accesibles? ¿Existe una lista de permitidos para compartir con el equipo de TI del lugar?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: 'A lista abaixo cobre o Roblox Studio e o plugin. Compartilhe com a equipe de TI do local:',
              en: 'The list below covers Roblox Studio and the plugin. Share it with the venue’s IT team:',
              es: 'La siguiente lista cubre Roblox Studio y el plugin. Compártala con el equipo de TI del lugar:',
            },
          },
          {
            type: 'domains',
            tone: 'b',
            label: {
              pt: 'Roblox — obrigatório para o Studio funcionar',
              en: 'Roblox — required for Studio to work',
              es: 'Roblox — obligatorio para que Studio funcione',
            },
            items: [
              { name: '*.roblox.com', note: { pt: 'Autenticação, projetos, API', en: 'Authentication, projects, API', es: 'Autenticación, proyectos, API' } },
              { name: '*.rbxcdn.com', note: { pt: 'CDN de assets e modelos', en: 'Asset and model CDN', es: 'CDN de assets y modelos' } },
              { name: '*.robloxlabs.com', note: { pt: 'APIs internas do Studio', en: 'Studio’s internal APIs', es: 'APIs internas de Studio' } },
              { name: '*.rbxcs.com', note: { pt: 'Infraestrutura Roblox', en: 'Roblox infrastructure', es: 'Infraestructura de Roblox' } },
            ],
          },
          {
            type: 'domains',
            tone: 'a',
            label: {
              pt: 'Servidor do plugin — nosso servidor Django',
              en: 'Plugin server — our Django server',
              es: 'Servidor del plugin — nuestro servidor Django',
            },
            items: [
              { name: 'roblox-api.mastertech.com.br', note: { pt: 'API de analytics e chatbot — porta 443 (HTTPS)', en: 'Analytics and chatbot API — port 443 (HTTPS)', es: 'API de analíticas y chatbot — puerto 443 (HTTPS)' } },
            ],
          },
          {
            type: 'domains',
            tone: 'r',
            label: {
              pt: 'Cloudflare WARP — para mitigar o CAPTCHA',
              en: 'Cloudflare WARP — to mitigate CAPTCHA',
              es: 'Cloudflare WARP — para mitigar el CAPTCHA',
            },
            items: [
              { name: '*.cloudflare.com', note: { pt: 'Necessário para o WARP funcionar', en: 'Required for WARP to work', es: 'Necesario para que WARP funcione' } },
              { name: '1.1.1.1 / 1.0.0.1', note: { pt: 'DNS do Cloudflare — portas 53 e 443', en: 'Cloudflare DNS — ports 53 and 443', es: 'DNS de Cloudflare — puertos 53 y 443' } },
            ],
          },
        ],
      },
      {
        label: LBL.q('6.2'),
        q: {
          pt: 'O software usa WebSockets ou conexões persistentes que podem ser bloqueadas por firewalls corporativos?',
          en: 'Does the software use WebSockets or persistent connections that could be blocked by corporate firewalls?',
          es: '¿El software usa WebSockets o conexiones persistentes que puedan ser bloqueadas por firewalls corporativos?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: '<strong>O plugin não usa WebSockets.</strong> Toda comunicação com o servidor Django é HTTP REST puro (GET e POST) — requisições curtas e sem estado. Não há conexões persistentes nem long-polling.',
              en: '<strong>The plugin doesn’t use WebSockets.</strong> All communication with the Django server is pure HTTP REST (GET and POST) — short, stateless requests. There are no persistent connections or long-polling.',
              es: '<strong>El plugin no usa WebSockets.</strong> Toda la comunicación con el servidor Django es HTTP REST puro (GET y POST) — solicitudes cortas y sin estado. No hay conexiones persistentes ni long-polling.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'O Roblox Studio em si pode usar WebSockets para funcionalidades de colaboração em tempo real, mas essas não fazem parte dos tutoriais do plugin e podem ser ignoradas para fins deste evento.',
              en: 'Roblox Studio itself may use WebSockets for real-time collaboration features, but those aren’t part of the plugin’s tutorials and can be ignored for the purposes of this event.',
              es: 'El propio Roblox Studio puede usar WebSockets para funcionalidades de colaboración en tiempo real, pero esas no forman parte de los tutoriales del plugin y pueden ignorarse a los efectos de este evento.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'Firewalls que permitem tráfego HTTPS padrão (porta 443) não terão problema algum com o plugin.',
              en: 'Firewalls that allow standard HTTPS traffic (port 443) will have no problem with the plugin.',
              es: 'Los firewalls que permiten tráfico HTTPS estándar (puerto 443) no tendrán ningún problema con el plugin.',
            },
          },
        ],
      },
      {
        label: LBL.q('6.3'),
        q: {
          pt: 'Existem problemas conhecidos com firewall, proxy, NAT ou IP compartilhado?',
          en: 'Are there known issues with firewalls, proxies, NAT, or shared IPs?',
          es: '¿Existen problemas conocidos con firewall, proxy, NAT o IP compartida?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: '<strong>O problema de CAPTCHA no NAT compartilhado</strong> já está documentado (ver aviso no topo da página). Para o plugin em si, não há problemas conhecidos com proxy ou NAT — as requisições são HTTP simples e funcionam atrás de qualquer proxy que permita HTTPS.',
              en: '<strong>The CAPTCHA issue with shared NAT</strong> is already documented (see the note at the top of the page). For the plugin itself, there are no known issues with proxies or NAT — the requests are simple HTTP and work behind any proxy that allows HTTPS.',
              es: '<strong>El problema del CAPTCHA con NAT compartida</strong> ya está documentado (ver el aviso al inicio de la página). Para el plugin en sí, no hay problemas conocidos con proxy o NAT — las solicitudes son HTTP simples y funcionan detrás de cualquier proxy que permita HTTPS.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'Se o local usar <strong>proxy com inspeção SSL</strong> (man-in-the-middle corporativo), pode causar falhas nas requisições HTTPS do Roblox Studio. Nesse caso, peça à TI que adicione os domínios <code>*.roblox.com</code> e <code>*.rbxcdn.com</code> à lista de bypass de inspeção SSL.',
              en: 'If the venue uses an <strong>SSL-inspecting proxy</strong> (corporate man-in-the-middle), it can cause Roblox Studio’s HTTPS requests to fail. In that case, ask IT to add the domains <code>*.roblox.com</code> and <code>*.rbxcdn.com</code> to the SSL inspection bypass list.',
              es: 'Si el lugar usa <strong>proxy con inspección SSL</strong> (man-in-the-middle corporativo), puede causar fallos en las solicitudes HTTPS de Roblox Studio. En ese caso, pida a TI que agregue los dominios <code>*.roblox.com</code> y <code>*.rbxcdn.com</code> a la lista de exclusión de la inspección SSL.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'Firewalls que bloqueiam portas não-padrão não são problema — o plugin usa apenas a porta 443 (HTTPS).',
              en: 'Firewalls that block non-standard ports aren’t an issue — the plugin only uses port 443 (HTTPS).',
              es: 'Los firewalls que bloquean puertos no estándar no son un problema — el plugin usa solamente el puerto 443 (HTTPS).',
            },
          },
        ],
      },
    ],
  },
  {
    n: '07',
    title: {
      pt: 'Projetos e dados',
      en: 'Projects and data',
      es: 'Proyectos y datos',
    },
    items: [
      {
        label: LBL.q('7.1'),
        q: {
          pt: 'Onde os projetos dos participantes são armazenados: localmente, na nuvem ou na conta do usuário?',
          en: 'Where are participants’ projects stored: locally, in the cloud, or in the user’s account?',
          es: '¿Dónde se almacenan los proyectos de los participantes: localmente, en la nube o en la cuenta del usuario?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: 'Os projetos do Roblox Studio são salvos <strong>na nuvem do Roblox, vinculados à conta do usuário</strong>. O participante pode acessar o projeto de qualquer computador desde que faça login com a mesma conta.',
              en: 'Roblox Studio projects are saved <strong>in Roblox’s cloud, linked to the user’s account</strong>. The participant can access the project from any computer as long as they log in with the same account.',
              es: 'Los proyectos de Roblox Studio se guardan <strong>en la nube de Roblox, vinculados a la cuenta del usuario</strong>. El participante puede acceder al proyecto desde cualquier computadora siempre que inicie sesión con la misma cuenta.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'O plugin em si não armazena o conteúdo dos projetos — ele armazena apenas <strong>progresso nos tutoriais e analytics</strong> (quais steps foram completados, pontuação, tempo) no servidor Django, também vinculados ao ID Roblox do usuário.',
              en: 'The plugin itself doesn’t store the projects’ content — it only stores <strong>tutorial progress and analytics</strong> (which steps were completed, score, time) on the Django server, also linked to the user’s Roblox ID.',
              es: 'El plugin en sí no almacena el contenido de los proyectos — solo guarda <strong>el progreso en los tutoriales y las analíticas</strong> (qué pasos se completaron, puntuación, tiempo) en el servidor Django, también vinculados al ID de Roblox del usuario.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'Os projetos também podem ser salvos localmente como arquivos <code>.rbxl</code> ou <code>.rbxlx</code> — o Studio oferece essa opção no menu Arquivo. Para um evento, salvar na nuvem (padrão) é mais seguro pois não depende do computador específico.',
              en: 'Projects can also be saved locally as <code>.rbxl</code> or <code>.rbxlx</code> files — Studio offers that option in the File menu. For an event, saving to the cloud (the default) is safer since it doesn’t depend on a specific computer.',
              es: 'Los proyectos también pueden guardarse localmente como archivos <code>.rbxl</code> o <code>.rbxlx</code> — Studio ofrece esa opción en el menú Archivo. Para un evento, guardar en la nube (predeterminado) es más seguro porque no depende de una computadora específica.',
            },
          },
        ],
      },
      {
        label: LBL.q('7.2'),
        q: {
          pt: 'Os projetos são salvos automaticamente ou os participantes precisam salvar manualmente?',
          en: 'Are projects saved automatically, or do participants need to save manually?',
          es: '¿Los proyectos se guardan automáticamente o los participantes deben guardarlos manualmente?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: '<strong>O Roblox Studio tem auto-save.</strong> Por padrão, salva automaticamente a cada 5 minutos (configurável nas Settings do Studio). Além disso, os participantes podem salvar manualmente com <code>Ctrl+S</code> (Windows) ou <code>Cmd+S</code> (macOS) a qualquer momento.',
              en: '<strong>Roblox Studio has auto-save.</strong> By default, it saves automatically every 5 minutes (configurable in Studio’s Settings). In addition, participants can save manually with <code>Ctrl+S</code> (Windows) or <code>Cmd+S</code> (macOS) at any time.',
              es: '<strong>Roblox Studio tiene autoguardado.</strong> De forma predeterminada, guarda automáticamente cada 5 minutos (configurable en los Settings de Studio). Además, los participantes pueden guardar manualmente con <code>Ctrl+S</code> (Windows) o <code>Cmd+S</code> (macOS) en cualquier momento.',
            },
          },
          {
            type: 'p',
            text: {
              pt: 'Recomendamos orientar os participantes a salvar manualmente ao final de cada etapa significativa, especialmente antes de intervalos ou antes de encerrar o Studio. O auto-save é um seguro, não um substituto ao hábito de salvar.',
              en: 'We recommend telling participants to save manually at the end of each significant step, especially before breaks or before closing Studio. Auto-save is a safety net, not a substitute for the habit of saving.',
              es: 'Recomendamos indicar a los participantes que guarden manualmente al final de cada etapa importante, especialmente antes de los descansos o antes de cerrar Studio. El autoguardado es un respaldo, no un sustituto del hábito de guardar.',
            },
          },
        ],
      },
    ],
  },
  {
    n: '08',
    title: {
      pt: 'Experiência em eventos anteriores',
      en: 'Experience from previous events',
      es: 'Experiencia en eventos anteriores',
    },
    items: [
      {
        label: LBL.q('8.1'),
        q: {
          pt: 'Quais são os problemas técnicos mais comuns observados em workshops com muitos usuários simultâneos?',
          en: 'What are the most common technical problems seen in workshops with many simultaneous users?',
          es: '¿Cuáles son los problemas técnicos más comunes observados en talleres con muchos usuarios simultáneos?',
        },
        blocks: [
          {
            type: 'steps',
            items: [
              {
                pt: '<strong>CAPTCHA no login simultâneo</strong> — o problema mais recorrente, documentado no evento anterior. Solução: Cloudflare WARP + login escalonado.',
                en: '<strong>CAPTCHA on simultaneous login</strong> — the most recurring problem, documented from the previous event. Solution: Cloudflare WARP + staggered logins.',
                es: '<strong>CAPTCHA en el inicio de sesión simultáneo</strong> — el problema más recurrente, documentado en el evento anterior. Solución: Cloudflare WARP + inicio de sesión escalonado.',
              },
              {
                pt: '<strong>Lentidão no carregamento inicial</strong> — quando muitas máquinas abrem o Studio ao mesmo tempo e todas baixam assets do CDN Roblox simultaneamente. Isso satura o link de saída por 2–5 minutos. Solução: escalonar as aberturas, ou abrir o Studio e carregar os templates com antecedência.',
                en: '<strong>Slow initial loading</strong> — when many machines open Studio at the same time and all download assets from the Roblox CDN simultaneously. This saturates the outbound link for 2–5 minutes. Solution: stagger the launches, or open Studio and load the templates ahead of time.',
                es: '<strong>Lentitud en la carga inicial</strong> — cuando muchas máquinas abren Studio al mismo tiempo y todas descargan assets del CDN de Roblox simultáneamente. Esto satura el enlace de salida durante 2–5 minutos. Solución: escalonar las aperturas, o abrir Studio y cargar las plantillas con anticipación.',
              },
              {
                pt: '<strong>Plugin não aparece na barra de ferramentas</strong> — geralmente por falha na instalação (arquivo copiado no local errado ou Studio não reiniciado após a cópia). Solução: verificar cada máquina individualmente antes do evento.',
                en: '<strong>The plugin doesn’t appear in the toolbar</strong> — usually due to an installation failure (file copied to the wrong place, or Studio not restarted after copying). Solution: check each machine individually before the event.',
                es: '<strong>El plugin no aparece en la barra de herramientas</strong> — generalmente por un fallo en la instalación (archivo copiado en el lugar equivocado o Studio no reiniciado tras la copia). Solución: verificar cada máquina individualmente antes del evento.',
              },
              {
                pt: '<strong>Projetos não salvos ao encerrar o Studio</strong> — participantes fecham o Studio sem salvar na nuvem. Solução: orientar o hábito de salvar e configurar auto-save para 2 minutos.',
                en: '<strong>Projects not saved when closing Studio</strong> — participants close Studio without saving to the cloud. Solution: encourage the habit of saving and set auto-save to 2 minutes.',
                es: '<strong>Proyectos no guardados al cerrar Studio</strong> — los participantes cierran Studio sin guardar en la nube. Solución: fomentar el hábito de guardar y configurar el autoguardado a 2 minutos.',
              },
            ],
          },
        ],
      },
      {
        label: LBL.q('8.2'),
        q: {
          pt: 'O que vocês recomendam testar antes do evento para garantir que tudo funcione no dia?',
          en: 'What do you recommend testing before the event to make sure everything works on the day?',
          es: '¿Qué recomiendan probar antes del evento para garantizar que todo funcione el día indicado?',
        },
        blocks: [
          {
            type: 'p',
            text: {
              pt: '<strong>Checklist de pré-evento (1–2 dias antes):</strong>',
              en: '<strong>Pre-event checklist (1–2 days before):</strong>',
              es: '<strong>Lista de verificación previa al evento (1–2 días antes):</strong>',
            },
          },
          {
            type: 'list',
            tone: 'blue',
            items: [
              {
                pt: '<strong>Abrir o Roblox Studio em todas as máquinas</strong> e deixar atualizar. Confirmar que abre sem erro.',
                en: '<strong>Open Roblox Studio on all machines</strong> and let it update. Confirm it opens without errors.',
                es: '<strong>Abrir Roblox Studio en todas las máquinas</strong> y dejar que se actualice. Confirmar que abre sin errores.',
              },
              {
                pt: '<strong>Instalar o plugin em todas as máquinas</strong> (copiar <code>.rbxmx</code> para a pasta Plugins). Abrir o Studio e confirmar que o botão aparece na barra de Plugins.',
                en: '<strong>Install the plugin on all machines</strong> (copy the <code>.rbxmx</code> file to the Plugins folder). Open Studio and confirm the button appears in the Plugins toolbar.',
                es: '<strong>Instalar el plugin en todas las máquinas</strong> (copiar el <code>.rbxmx</code> a la carpeta Plugins). Abrir Studio y confirmar que el botón aparece en la barra de Plugins.',
              },
              {
                pt: '<strong>Fazer login com uma conta de teste</strong> em cada máquina para verificar se o CAPTCHA aparece. Se aparecer, ativar o WARP e testar novamente.',
                en: '<strong>Log in with a test account</strong> on each machine to check whether the CAPTCHA appears. If it does, enable WARP and test again.',
                es: '<strong>Iniciar sesión con una cuenta de prueba</strong> en cada máquina para verificar si aparece el CAPTCHA. Si aparece, activar WARP y probar de nuevo.',
              },
              {
                pt: '<strong>Abrir um template de projeto</strong> (ex: Platformer) para confirmar que os templates carregam sem erro.',
                en: '<strong>Open a project template</strong> (e.g., Platformer) to confirm the templates load without errors.',
                es: '<strong>Abrir una plantilla de proyecto</strong> (por ej., Platformer) para confirmar que las plantillas cargan sin errores.',
              },
              {
                pt: '<strong>Testar a conectividade com o servidor do plugin</strong> — o plugin mostra um indicador de conexão ao abrir. Verificar se está verde em todas as máquinas.',
                en: '<strong>Test connectivity with the plugin server</strong> — the plugin shows a connection indicator on open. Check that it’s green on all machines.',
                es: '<strong>Probar la conectividad con el servidor del plugin</strong> — el plugin muestra un indicador de conexión al abrirse. Verificar que esté en verde en todas las máquinas.',
              },
              {
                pt: '<strong>Verificar a velocidade real da rede do local</strong> (speedtest em 2–3 máquinas ao mesmo tempo) para confirmar se a banda está dentro do esperado.',
                en: '<strong>Check the venue’s actual network speed</strong> (speedtest on 2–3 machines at the same time) to confirm bandwidth is within expectations.',
                es: '<strong>Verificar la velocidad real de la red del lugar</strong> (speedtest en 2–3 máquinas al mismo tiempo) para confirmar que el ancho de banda está dentro de lo esperado.',
              },
              {
                pt: '<strong>Testar o WARP:</strong> instalar o Cloudflare WARP em todas as máquinas, ativar, e confirmar que a internet continua funcionando normalmente com ele ativo.',
                en: '<strong>Test WARP:</strong> install Cloudflare WARP on all machines, enable it, and confirm the internet keeps working normally with it on.',
                es: '<strong>Probar WARP:</strong> instalar Cloudflare WARP en todas las máquinas, activarlo y confirmar que internet sigue funcionando con normalidad con él activo.',
              },
              {
                pt: '<strong>Simular o momento de login coletivo:</strong> testar 5–10 logins simultâneos para ver se o CAPTCHA ainda aparece. Se sim, ajustar a estratégia de escalonamento.',
                en: '<strong>Simulate the collective login moment:</strong> test 5–10 simultaneous logins to see if the CAPTCHA still appears. If so, adjust the staggering strategy.',
                es: '<strong>Simular el momento de inicio de sesión colectivo:</strong> probar 5–10 inicios de sesión simultáneos para ver si el CAPTCHA sigue apareciendo. Si es así, ajustar la estrategia de escalonamiento.',
              },
            ],
          },
        ],
      },
    ],
  },
];

// ═══════════════════════════════════════
// RENDER — usa as classes do playbook (col-block, exp-step, plain-list)
// mais um conjunto mínimo de classes .tech-* / .tq-* definido em styles.css
// ═══════════════════════════════════════
const L = (value, lang) => (value && (value[lang] ?? value.pt)) || '';

function renderRows(rows, lang, accent) {
  return rows
    .map(
      (row) => `<div class="tech-row">
        <span class="tech-row-k">${L(row.k, lang)}</span>
        <span class="tech-row-v${accent ? ' accent' : ''}">${L(row.v, lang)}</span>
      </div>`,
    )
    .join('');
}

function renderBlock(block, lang) {
  switch (block.type) {
    case 'p':
      return `<p class="tq-p">${L(block.text, lang)}</p>`;

    case 'cols':
      return `<div class="tech-cols">${block.cols
        .map(
          (col) => `<div class="col-block ${col.tone || ''}">
            <div class="col-block-title">${L(col.label, lang)}</div>
            ${renderRows(col.rows, lang, col.accent)}
          </div>`,
        )
        .join('')}</div>`;

    case 'kv':
      return `<div class="tech-kv">${renderRows(block.rows, lang)}</div>`;

    case 'table':
      return `<div class="tech-table-wrap"><table class="tech-table">
        <thead><tr>${block.head.map((h) => `<th>${L(h, lang)}</th>`).join('')}</tr></thead>
        <tbody>${block.rows
          .map(
            (row) => `<tr>${row.cells.map((c) => `<td>${L(c, lang)}</td>`).join('')}<td><span class="tech-tag ${
              row.tag.tone
            }">${L(row.tag.text, lang)}</span></td></tr>`,
          )
          .join('')}</tbody>
      </table></div>`;

    case 'domains':
      return `${block.label ? `<div class="tech-sub">${L(block.label, lang)}</div>` : ''}
        <div class="tech-doms">${block.items
          .map(
            (item) => `<div class="tech-dom">
              <span class="tech-dom-dot ${block.tone || ''}"></span>
              <span class="tech-dom-name">${item.name}</span>
              <span class="tech-dom-note">${L(item.note, lang)}</span>
            </div>`,
          )
          .join('')}</div>`;

    case 'steps':
      return `<div class="exp-steps tech-steps">${block.items
        .map(
          (item, i) => `<div class="exp-step">
            <div class="exp-step-num">${String(i + 1).padStart(2, '0')}</div>
            <div class="exp-step-text">${L(item, lang)}</div>
          </div>`,
        )
        .join('')}</div>`;

    case 'list':
      return `<ul class="plain-list ${block.tone || ''} tech-list">${block.items
        .map((item) => `<li>${L(item, lang)}</li>`)
        .join('')}</ul>`;

    default:
      return '';
  }
}

function renderNote(note, lang) {
  return `<div class="tq-note ${note.tone || ''}">
    <div class="tq-note-title">${L(note.title, lang)}</div>
    <p class="tq-p">${L(note.text, lang)}</p>
  </div>`;
}

export function renderTechBody(lang) {
  return `${renderNote(TECH_CALLOUT, lang)}
    ${TECH_SECTIONS.map(
      (section) => `<section class="tech-sec">
        <div class="tech-sec-head">
          <span class="tech-sec-num">${section.n}</span>
          <span class="tech-sec-title">${L(section.title, lang)}</span>
        </div>
        ${section.note ? renderNote(section.note, lang) : ''}
        ${section.items
          .map(
            (item) => `<article class="tq">
              <div class="tq-label">${L(item.label, lang)}</div>
              <div class="tq-q">${L(item.q, lang)}</div>
              <div class="tq-a">${item.blocks.map((b) => renderBlock(b, lang)).join('')}</div>
            </article>`,
          )
          .join('')}
      </section>`,
    ).join('')}`;
}
