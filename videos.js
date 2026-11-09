// Al Bonian FM — Management Academy video library
// ---------------------------------------------------------------------
// index.html loads this file. Every entry below appears in the portal.
// To add a video, append a NEW entry at the end of the array with a
// unique id and these fields:
//   department : "Finance" | "Leadership" | "Procurement" | "HR"
//                | "Quality & HSE" | "Business Development" | "IT"
//                | "Facilities Management" | "Property Inspection & Valuation"
//                | "AI News"
//   id prefix  : fin- | lead- | proc- | hr- | qhse- | bd- | it- | fm- | pv- | ai-
//   level      : "Foundation" | "Practitioner" | "Executive"
//   source     : "TED Talk" | "Professional Body" | "Training Academy"
//                | "Industry Expert" | "Regulator"
//   embedUrl   : "https://www.youtube.com/embed/<VIDEO_ID>"
//   publishDate: "YYYY-MM-DD" (date the video was posted to the portal)
//   duration   : "m:ss" or "" if unknown
//   takeaways  : exactly 3 short points
//   format     : optional — "Process" | "On-the-job" (used for Property Inspection & Valuation)
//   videoDate  : optional — "YYYY-MM-DD" the video aired on YouTube (used for AI News)
//   applyIt    : 1 sentence on applying the idea at Al Bonian FM
// Keep valid JavaScript: commas between entries, quotes around text.
// =====================================================================
window.ALBONIAN_MGMT_VIDEOS = [
  {
    "id": "fin-002",
    "title": "Cash Flow Management: Strategy, Forecasting and Liquidity",
    "department": "Finance",
    "topic": "Cash Flow",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "Corporate Finance Institute",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/8ngZ0zS73lg",
    "isNew": false,
    "summary": "Explains why profit alone does not keep a company solvent, and how forecasting, working capital and scenario planning protect liquidity, using well-known company examples.",
    "takeaways": [
      "Profitable companies can still fail when cash runs out.",
      "Rolling cash forecasts and scenarios expose gaps before they hit.",
      "Working capital discipline (collections, payables, stock) funds growth."
    ],
    "applyIt": "Build a 13-week cash forecast that flags overdue client invoices against upcoming subcontractor and payroll payments."
  },
  {
    "id": "lead-001",
    "title": "How Great Leaders Inspire Action — The Golden Circle",
    "department": "Leadership",
    "topic": "Vision & Purpose",
    "level": "Foundation",
    "source": "TED Talk",
    "channel": "TED (Simon Sinek)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/qp0HIF3SfI4",
    "isNew": false,
    "summary": "Simon Sinek's model of why some leaders and organisations inspire people: start with why you do something, then how, then what.",
    "takeaways": [
      "People commit to the purpose behind a decision, not just the decision.",
      "Communicate why → how → what, not the other way round.",
      "A clear purpose makes priorities easier for teams to judge."
    ],
    "applyIt": "Open your next team briefing on a new contract by explaining why it matters to the company before assigning tasks."
  },
  {
    "id": "lead-002",
    "title": "Why Good Leaders Make You Feel Safe",
    "department": "Leadership",
    "topic": "Trust & Culture",
    "level": "Practitioner",
    "source": "TED Talk",
    "channel": "TED (Simon Sinek)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/lmyZMtPVodo",
    "isNew": false,
    "summary": "Sinek argues that great leaders create a circle of safety and trust, so people protect each other and the organisation instead of themselves.",
    "takeaways": [
      "Trust grows when people feel their leader has their back.",
      "Leaders eat last: they put the team's interests before their own.",
      "Safety inside the team frees energy for outside challenges."
    ],
    "applyIt": "When a site issue escalates, take the client conversation yourself and debrief the team privately to learn, not blame."
  },
  {
    "id": "lead-003",
    "title": "How to Turn a Group of Strangers into a Team",
    "department": "Leadership",
    "topic": "Teamwork",
    "level": "Executive",
    "source": "TED Talk",
    "channel": "TED (Amy Edmondson)",
    "publishDate": "2026-10-24",
    "duration": "13:07",
    "embedUrl": "https://www.youtube.com/embed/3boKz0Exros",
    "isNew": false,
    "summary": "Harvard professor Amy Edmondson explains how people who have never worked together can team up fast on urgent, unfamiliar problems, drawing on the 2010 Chilean mine rescue.",
    "takeaways": [
      "Teaming is a skill: situational humility, curiosity and fast learning.",
      "Psychological safety lets people speak up early with problems.",
      "Leaders frame the challenge and keep the group adaptive."
    ],
    "applyIt": "At mobilisation of a new site, run a short kick-off where every trade lead states one risk they see before work starts."
  },
  {
    "id": "proc-002",
    "title": "8 Supplier Relationship Management Tactics",
    "department": "Procurement",
    "topic": "Supplier Management",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Procurement Tactics",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/tKez1btVrPo",
    "isNew": false,
    "summary": "Eight practical SRM strategies, from segmenting suppliers with the Kraljic Matrix to contract standards, performance tracking, audits and knowing when to exit a supplier.",
    "takeaways": [
      "Segment suppliers so effort matches spend and risk.",
      "Track supplier performance against agreed measures.",
      "Plan audits and exit routes before a supplier fails."
    ],
    "applyIt": "Score your top subcontractors quarterly on response time, quality and cost, and review the bottom two with them."
  },
  {
    "id": "hr-001",
    "title": "Human Resource Management Explained",
    "department": "HR",
    "topic": "HR Fundamentals",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "AIHR - Academy to Innovate HR",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/aPEUKLxxh_k",
    "isNew": false,
    "summary": "An overview of what HRM is, how it developed, its core activities and how it contributes to business performance and future trends.",
    "takeaways": [
      "HRM covers the full employee cycle: hire, develop, retain, exit.",
      "Good HR practice links people decisions to business results.",
      "HR is shifting from administration to strategic partnership."
    ],
    "applyIt": "Map one department's employee journey from offer letter to first-90-day review and note where new hires drop off."
  },
  {
    "id": "hr-002",
    "title": "The Puzzle of Motivation",
    "department": "HR",
    "topic": "Motivation & Engagement",
    "level": "Practitioner",
    "source": "TED Talk",
    "channel": "TED (Dan Pink)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/rrkrvAUbU9Y",
    "isNew": false,
    "summary": "Dan Pink examines why traditional rewards often fail to motivate people for complex work, and proposes autonomy, mastery and purpose instead.",
    "takeaways": [
      "If-then rewards work for simple tasks but can hurt creative work.",
      "Autonomy, mastery and purpose drive lasting motivation.",
      "Design roles so people own outcomes, not just tasks."
    ],
    "applyIt": "Give supervisors ownership of a site KPI and let them choose how to improve it, then recognise the result publicly."
  },
  {
    "id": "qhse-001",
    "title": "What is ISO 9001? Explained in 5 Minutes",
    "department": "Quality & HSE",
    "topic": "Quality Management",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "The Knowledge Academy",
    "publishDate": "2026-10-24",
    "duration": "5:41",
    "embedUrl": "https://www.youtube.com/embed/kRvaXGWz4iY",
    "isNew": false,
    "summary": "Introduces ISO 9001 as the international quality management framework: its history, seven quality principles and the operational benefits for businesses that adopt it.",
    "takeaways": [
      "ISO 9001 rests on seven quality management principles.",
      "Customer focus and process approach sit at the core.",
      "Certification builds client trust and consistent operations."
    ],
    "applyIt": "Pick one recurring client complaint and trace it through your process map to find the step that needs a control."
  },
  {
    "id": "qhse-002",
    "title": "Health and Safety Risk Assessment and Management",
    "department": "Quality & HSE",
    "topic": "Risk Assessment",
    "level": "Foundation",
    "source": "Regulator",
    "channel": "Health and Safety Executive (UK)",
    "publishDate": "2026-10-24",
    "duration": "2:29",
    "embedUrl": "https://www.youtube.com/embed/xyANahuhGs0",
    "isNew": false,
    "summary": "An animated guide from the UK HSE on the steps employers take to protect workers: identify hazards, assess the risks and control them.",
    "takeaways": [
      "Identify hazards before deciding on controls.",
      "Assess who could be harmed and how badly.",
      "Record findings and review them when work changes."
    ],
    "applyIt": "Check that every high-risk activity on your sites (work at height, hot work, confined space) has a current, signed risk assessment."
  },
  {
    "id": "bd-002",
    "title": "The Walk from \"No\" to \"Yes\" — Negotiation",
    "department": "Business Development",
    "topic": "Negotiation",
    "level": "Executive",
    "source": "TED Talk",
    "channel": "TED (William Ury)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/Hc6yi_FtoNo",
    "isNew": false,
    "summary": "William Ury, co-author of Getting to Yes, shares a simple but demanding approach to reaching agreement in even the most contentious situations.",
    "takeaways": [
      "Step back to see the wider context before reacting.",
      "Focus on underlying interests, not stated positions.",
      "Involve third parties to widen the options."
    ],
    "applyIt": "Before your next contract renewal or deduction dispute, write down the client's underlying interests, not just their demands."
  },
  {
    "id": "fin-004",
    "title": "Cash Flow Forecasting: Short-Term, 13-Week and Long-Term",
    "department": "Finance",
    "topic": "Cash Flow",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "Corporate Finance Institute",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/dUEDS4w3p28",
    "isNew": false,
    "summary": "Explains how profit, EBITDA and cash differ, and how short-term, 13-week and long-range cash forecasts reveal timing gaps and funding needs before a liquidity crunch.",
    "takeaways": [
      "Profit and EBITDA are not cash in the bank.",
      "A 13-week forecast exposes near-term timing gaps.",
      "Long-range forecasts show future funding needs early."
    ],
    "applyIt": "Add a weekly cash line to the management meeting showing expected collections against payroll and supplier payments for the next 13 weeks."
  },
  {
    "id": "fin-005",
    "title": "Working Capital Management: Optimising Liquidity",
    "department": "Finance",
    "topic": "Working Capital",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "Corporate Finance Institute",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/Z2iSy4nnYZI",
    "isNew": false,
    "summary": "Covers the cash conversion cycle and practical working-capital strategies such as tighter receivable terms, centralised treasury and stress testing, with examples from large companies.",
    "takeaways": [
      "The cash conversion cycle shows how long cash is tied up.",
      "Faster collections free cash without new borrowing.",
      "Stress-test liquidity before it is needed."
    ],
    "applyIt": "Measure days sales outstanding per major client and agree a collection target for the three slowest payers."
  },
  {
    "id": "lead-004",
    "title": "Everyday Leadership",
    "department": "Leadership",
    "topic": "Leadership Mindset",
    "level": "Foundation",
    "source": "TED Talk",
    "channel": "TED-Ed (Drew Dudley)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/uAy6EawKKME",
    "isNew": false,
    "summary": "Drew Dudley argues that leadership is found in small, everyday acts that change someone's day, not only in grand achievements.",
    "takeaways": [
      "Small acts of leadership happen every day.",
      "People often don't know the impact they had on others.",
      "Recognising others' impact builds a leadership culture."
    ],
    "applyIt": "Ask each supervisor to recognise one team member's specific contribution in the weekly site meeting."
  },
  {
    "id": "lead-005",
    "title": "Delegating: Why It Matters for Managers",
    "department": "Leadership",
    "topic": "Delegation",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "Harvard Business Impact",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/i41cFYIMQlw",
    "isNew": false,
    "summary": "Introduces why delegation is essential to management, and how to assess a task, match it to an employee's skills and support them to completion.",
    "takeaways": [
      "Delegation is a core management skill, not a favour.",
      "Match the task to the person's skills and growth goals.",
      "Stay available for support without taking the work back."
    ],
    "applyIt": "List three recurring tasks you still do yourself each week and hand one over to a direct report with a clear deadline."
  },
  {
    "id": "lead-006",
    "title": "How to Delegate When You Can't Let Go",
    "department": "Leadership",
    "topic": "Delegation",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "David Burkus",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/UkLyv5Juq68",
    "isNew": false,
    "summary": "Common delegation mistakes such as hovering or handing off tasks without ownership, and fixes like matching responsibility to readiness, setting checkpoints and sharing real authority.",
    "takeaways": [
      "Delegate ownership of outcomes, not just tasks.",
      "Set checkpoints instead of hovering.",
      "Give authority to make decisions along with the work."
    ],
    "applyIt": "When assigning a new site mobilisation, agree two checkpoints and let the site lead decide everything in between."
  },
  {
    "id": "lead-007",
    "title": "How to Give Feedback, Especially When You're Dreading It",
    "department": "Leadership",
    "topic": "Feedback",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "Harvard Business Review",
    "publishDate": "2026-10-24",
    "duration": "10:54",
    "embedUrl": "https://www.youtube.com/embed/jhtwqK3iOV8",
    "isNew": false,
    "summary": "HBR's guide to delivering critical feedback with empathy and clarity: common mistakes, a simple recipe, handling disagreement and practising difficult conversations.",
    "takeaways": [
      "Prepare the message; don't improvise hard feedback.",
      "Be specific about behaviour and its impact.",
      "Invite the other person's view and agree next steps."
    ],
    "applyIt": "Before your next performance conversation, write down one specific example and the impact it had on the client or team."
  },
  {
    "id": "proc-005",
    "title": "Procurement Contracting: Commercial, Legal and Risk",
    "department": "Procurement",
    "topic": "Contract Management",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Professor Simon Croom",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/3VorbAZu2cU",
    "isNew": false,
    "summary": "Covers the full contract lifecycle from pre-award and scope design to performance monitoring, disputes, amendments and close-out, balancing commercial and legal goals.",
    "takeaways": [
      "Contract value is won or lost in the scope of work.",
      "Monitor performance during the contract, not only at renewal.",
      "The contract manager coordinates procurement, legal, finance and operations."
    ],
    "applyIt": "Assign a named owner for each major subcontract and review their scope, KPIs and variations quarterly."
  },
  {
    "id": "qhse-006",
    "title": "The ISO 9001 Internal Audit Process",
    "department": "Quality & HSE",
    "topic": "Audits",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "PECB",
    "publishDate": "2026-10-24",
    "duration": "1:11:39",
    "embedUrl": "https://www.youtube.com/embed/18Fua7om8OA",
    "isNew": false,
    "summary": "A webinar on planning and carrying out ISO 9001 internal audits, why they matter and what an internal audit programme must include.",
    "takeaways": [
      "Internal audits test whether the system works in practice.",
      "Plan an audit programme based on risk and past results.",
      "Follow up findings until corrective actions are verified."
    ],
    "applyIt": "Set a risk-based internal audit plan for next year that covers every contract at least once."
  },
  {
    "id": "bd-003",
    "title": "How to Write a Winning Tender",
    "department": "Business Development",
    "topic": "Tenders & Proposals",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "The Bid Expert",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/MBBrEBWxdVk",
    "isNew": false,
    "summary": "A six-step approach to tender responses that stand out: understand the client, follow instructions, involve the team, show capability, review and submit on time.",
    "takeaways": [
      "Understand the client's real needs before writing.",
      "Follow the tender instructions exactly.",
      "Review the full submission before it goes out."
    ],
    "applyIt": "Introduce a bid/no-bid checklist and a final compliance review for every FM tender."
  },
  {
    "id": "bd-004",
    "title": "Introduction to Tender Writing",
    "department": "Business Development",
    "topic": "Tenders & Proposals",
    "level": "Practitioner",
    "source": "Regulator",
    "channel": "business.gov.au",
    "publishDate": "2026-10-24",
    "duration": "1:21:46",
    "embedUrl": "https://www.youtube.com/embed/9xT9F5_KSDQ",
    "isNew": false,
    "summary": "A government-run session on preparing tender submissions that are more likely to succeed, with tested methods to improve win rates.",
    "takeaways": [
      "Read evaluation criteria first and answer to them.",
      "Give evidence, not claims, for each capability.",
      "Learn from debriefs on lost bids."
    ],
    "applyIt": "Request a debrief on the last two lost tenders and log the lessons for the BD team."
  },
  {
    "id": "bd-005",
    "title": "Negotiate Better Deals Without Burning Bridges",
    "department": "Business Development",
    "topic": "Negotiation",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Behind the Brand (Chris Voss)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/7_VpQawHawo",
    "isNew": false,
    "summary": "Former FBI negotiator Chris Voss on collaborative negotiation, spotting when you are only being used for price comparison, and building lasting client relationships.",
    "takeaways": [
      "Treat negotiation as collaboration, not a fight.",
      "Ask the client why they chose to talk to you.",
      "Spot when you're only a benchmark quote."
    ],
    "applyIt": "Before pricing the next quotation, ask the client what made them invite Al Bonian and what success looks like to them."
  },
  {
    "id": "bd-006",
    "title": "The Four Components of Strategic Account Management",
    "department": "Business Development",
    "topic": "Key Account Management",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Drift (Greg Callahan, Bain & Company)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/Ec2UspaZHSg",
    "isNew": false,
    "summary": "A Bain partner outlines four keys to strategic account management: choosing focus accounts, setting a cadence, developing plays and keeping it simple.",
    "takeaways": [
      "Focus effort on the accounts with most potential.",
      "Set a regular cadence of contact and review.",
      "Develop repeatable plays to grow each account."
    ],
    "applyIt": "Pick your top five clients and agree a quarterly review meeting and growth plan for each."
  },
  {
    "id": "bd-007",
    "title": "How to Make Key Account Management Work",
    "department": "Business Development",
    "topic": "Key Account Management",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Account Management Secrets (AMplify)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/wXOy82cSgcg",
    "isNew": false,
    "summary": "Why key account programmes fail when treated as ordinary sales, and how to study a client's strategy, segment accounts and reach senior decision-makers.",
    "takeaways": [
      "Key accounts need a long-term business plan, not a sales push.",
      "Understand the client's strategy and financial priorities.",
      "Secure executive sponsorship inside your own company."
    ],
    "applyIt": "Assign a senior executive sponsor to each of the top clients and meet their leadership at least twice a year."
  },
  {
    "id": "it-001",
    "title": "What Is ITIL? IT Service Management Explained",
    "department": "IT",
    "topic": "IT Service Management",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "The Knowledge Academy",
    "publishDate": "2026-10-24",
    "duration": "3:48",
    "embedUrl": "https://www.youtube.com/embed/Md0c86PnhXo",
    "isNew": false,
    "summary": "A beginner's introduction to ITIL, the framework for running IT services that meet business needs, covering the Service Value System and the Four Dimensions Model.",
    "takeaways": [
      "ITIL treats IT as a service delivered to the business.",
      "The Service Value System links IT activity to business value.",
      "Clear processes make IT support predictable and measurable."
    ],
    "applyIt": "Set up a simple IT ticket log with priority levels and target response times for head-office and site users."
  },
  {
    "id": "it-002",
    "title": "Zero Trust Security Explained",
    "department": "IT",
    "topic": "Cybersecurity",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "IBM Technology",
    "publishDate": "2026-10-24",
    "duration": "3:42",
    "embedUrl": "https://www.youtube.com/embed/yn6CPQ9RioA",
    "isNew": false,
    "summary": "IBM explains the zero trust model: treat every user, device and connection as untrusted and verify each one continuously, supported by integrated security tools.",
    "takeaways": [
      "Never trust by default; always verify.",
      "Grant users only the access they need.",
      "Integrated tools give a clearer view of threats."
    ],
    "applyIt": "Review who has admin access to email, finance and CAFM systems and remove any rights that aren't needed."
  },
  {
    "id": "it-003",
    "title": "What Is a CMMS?",
    "department": "IT",
    "topic": "FM Technology",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Facilio",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/GqNbuwfLkzc",
    "isNew": false,
    "summary": "A short explainer on computerised maintenance management systems: tracking work orders, assets and spare parts in one place, and using preventive schedules and building data to cut breakdowns.",
    "takeaways": [
      "A CMMS puts work orders, assets and spares in one system.",
      "Preventive schedules reduce reactive breakdowns.",
      "Connected data supports better maintenance decisions."
    ],
    "applyIt": "Check that every asset on your top contracts is registered in the system with a preventive maintenance schedule attached."
  },
  {
    "id": "it-004",
    "title": "How CAFM Software Transforms Facility Management",
    "department": "IT",
    "topic": "FM Technology",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "UpKeep",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/j7-maM24CmY",
    "isNew": false,
    "summary": "Introduces computer-aided facilities management software, its core modules such as space, asset and building administration, and how CAFM compares with CMMS and IWMS.",
    "takeaways": [
      "CAFM covers space, assets and building administration.",
      "CAFM, CMMS and IWMS solve different problems.",
      "Configure the system around your real workflows."
    ],
    "applyIt": "Map which FM workflows still run on paper or spreadsheets and rank them for moving into the CAFM/Zoho system."
  },
  {
    "id": "it-005",
    "title": "Introduction to AI for Leaders",
    "department": "IT",
    "topic": "Artificial Intelligence",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "HBS Online",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/9qkeU03QYjw",
    "isNew": false,
    "summary": "Harvard Business School Online on leading AI transformation responsibly and at scale: rethinking systems, empowering teams, setting an AI strategy and overcoming cultural barriers.",
    "takeaways": [
      "AI value comes from redesigning work, not just adding tools.",
      "Leaders set the strategy and the ethical guardrails.",
      "Culture and structure decide whether AI scales."
    ],
    "applyIt": "Pick one repetitive back-office process (e.g. report preparation or ticket triage) and pilot an AI tool on it for one month with clear success measures."
  },
  {
    "id": "fin-007",
    "title": "Margins Explained: EBITDA, EBIT and What They Really Tell You",
    "department": "Finance",
    "topic": "Financial KPIs",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "CNBC-TV18",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/1a2QxbHhTzk",
    "isNew": false,
    "summary": "Walks through the layers of profit margin, from gross margin to EBITDA, EBIT and net profit, and what each reveals about pricing power, cost control and efficiency.",
    "takeaways": [
      "Gross margin shows how well pricing covers direct costs",
      "EBITDA and EBIT separate operating performance from financing and accounting effects",
      "Track margin trends over time, not just one-off figures"
    ],
    "applyIt": "Report gross margin and EBITDA per maintenance contract monthly so managers can spot contracts where labour or subcontractor costs are eroding profit."
  },
  {
    "id": "lead-008",
    "title": "Kotter's 8 Steps for Leading Change",
    "department": "Leadership",
    "topic": "Change Management",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Kotter",
    "publishDate": "2026-10-25",
    "duration": "4:21",
    "embedUrl": "https://www.youtube.com/embed/SGYmPMcgDPg",
    "isNew": false,
    "summary": "Kotter's head of research explains John Kotter's eight-step model for leading organisational change and how it has evolved into a more agile set of accelerators.",
    "takeaways": [
      "Create a sense of urgency before launching change",
      "Build a guiding coalition to generate momentum",
      "Anchor new ways of working in the culture so they last"
    ],
    "applyIt": "Use the eight steps to plan a company-wide rollout such as a new CAFM workflow, starting with a clear case for urgency and a coalition of site and office leaders."
  },
  {
    "id": "qhse-007",
    "title": "What Is ISO 45001 and How Does It Help Businesses?",
    "department": "Quality & HSE",
    "topic": "ISO 45001",
    "level": "Executive",
    "source": "Training Academy",
    "channel": "Citation ISO Certification",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/jzZuKptPUMo",
    "isNew": false,
    "summary": "An explainer on the aims of ISO 45001:2018 and the business benefits of adopting an occupational health and safety management system.",
    "takeaways": [
      "ISO 45001 gives a recognised framework for managing OH&S risk",
      "Top management leadership and worker participation are central to the standard",
      "Certification can strengthen tenders and client confidence"
    ],
    "applyIt": "Use ISO 45001 as the backbone of the HSE system so leadership commitments, risk controls and site performance can be evidenced to government and property clients."
  },
  {
    "id": "bd-008",
    "title": "Sales Pipeline Management",
    "department": "Business Development",
    "topic": "CRM Pipelines",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Zoho CRM",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/95inJDS5u0s",
    "isNew": false,
    "summary": "Defines a sales pipeline as the sequence of stages a deal moves through from first lead assessment to close, and explains how to set up and track those stages.",
    "takeaways": [
      "Define clear stages that match how your deals actually progress",
      "Track how many deals sit at each stage and how long they stay",
      "Use pipeline data to forecast revenue and focus effort"
    ],
    "applyIt": "Map Al Bonian FM tender and enquiry stages into a Zoho pipeline so BD can see every opportunity, from site visit to award, in one view."
  },
  {
    "id": "it-006",
    "title": "Disaster Recovery vs. Backup: What is the Difference?",
    "department": "IT",
    "topic": "Backup & Business Continuity",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "IBM Technology",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/07EHsPuKXc0",
    "isNew": false,
    "summary": "An IBM Cloud specialist compares backup and disaster recovery, explaining how they differ and how each supports a business continuity plan.",
    "takeaways": [
      "Backups protect data; disaster recovery restores whole services",
      "Set recovery time and recovery point objectives for key systems",
      "Test restores regularly rather than assuming they work"
    ],
    "applyIt": "Define recovery targets for the CAFM system and Zoho Creator apps and test a restore so work orders can continue if a system fails."
  },
  {
    "id": "fm-001",
    "title": "What Is SFG20?",
    "department": "Facilities Management",
    "topic": "SFG20",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "SFG20",
    "publishDate": "2026-10-25",
    "duration": "2:59",
    "embedUrl": "https://www.youtube.com/embed/KIQdwKkg2V0",
    "isNew": false,
    "summary": "Introduces SFG20, the maintenance standard that sets which building maintenance tasks are needed, the skills they require and how often they should be done.",
    "takeaways": [
      "SFG20 defines what to maintain, who does it and how often.",
      "Standard schedules help keep buildings compliant and safe.",
      "Right-sizing tasks avoids over- and under-maintenance."
    ],
    "applyIt": "Compare the PPM schedule of one major contract against SFG20 frequencies and flag any tasks done too often or not at all."
  },
  {
    "id": "fm-002",
    "title": "The SFG20 Colour Coding System",
    "department": "Facilities Management",
    "topic": "SFG20",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "SFG20",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/tA6CsoTc0a4",
    "isNew": false,
    "summary": "How SFG20's red, amber and green codes classify maintenance tasks, with red for statutory and critical work, and how to use them to prioritise and prove compliance.",
    "takeaways": [
      "Red tasks are statutory or safety-critical: never skip them.",
      "Amber and green tasks can be planned around budget and use.",
      "Colour codes make compliance easy to report to clients."
    ],
    "applyIt": "Tag every PPM task in the CAFM system with its SFG20 colour and report red-task completion to clients monthly."
  },
  {
    "id": "fm-003",
    "title": "SFG20: The Engine of Modern Facilities Management",
    "department": "Facilities Management",
    "topic": "SFG20",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "SFG20",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/ol3bFkbWuFU",
    "isNew": false,
    "summary": "How SFG20 underpins planned preventive maintenance to cut costs, meet legislation and keep buildings safe, and how the Facilities-iQ platform delivers the schedules.",
    "takeaways": [
      "A recognised standard strengthens FM tenders and contracts.",
      "Standardised schedules make pricing and resourcing predictable.",
      "Compliance evidence protects both client and contractor."
    ],
    "applyIt": "Reference SFG20-aligned schedules in the next FM tender to show compliance and justify the PPM price."
  },
  {
    "id": "fm-006",
    "title": "Vibration Analysis for Predictive Maintenance",
    "department": "Facilities Management",
    "topic": "Predictive Maintenance",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "UpKeep",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/VfO3EvE3asc",
    "isNew": false,
    "summary": "How vibration sensors and analysis support predictive maintenance on rotating equipment such as bearings, motors, pumps, fans and compressors, with case studies.",
    "takeaways": [
      "Vibration reveals imbalance, misalignment and bearing wear.",
      "Trend data matters more than a single reading.",
      "Start with the assets whose failure costs most."
    ],
    "applyIt": "Pilot wireless vibration sensors on the chilled-water pumps of one large site and compare failures against last year."
  },
  {
    "id": "fm-007",
    "title": "RCM vs Preventive vs Predictive Maintenance",
    "department": "Facilities Management",
    "topic": "Maintenance Strategy",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Verdantis",
    "publishDate": "2026-10-25",
    "duration": "3:29",
    "embedUrl": "https://www.youtube.com/embed/S8l56GRFEi8",
    "isNew": false,
    "summary": "Compares scheduled preventive, condition-based predictive and reliability-centred maintenance on cost, complexity and risk, with a simple framework for choosing between them.",
    "takeaways": [
      "Not every asset needs the same strategy.",
      "RCM decides which strategy fits each asset.",
      "Match maintenance effort to the risk of failure."
    ],
    "applyIt": "Classify each contract's assets as run-to-fail, preventive or predictive based on criticality, and adjust the PPM plan."
  },
  {
    "id": "fm-008",
    "title": "Preventive vs Reliability-Centred Maintenance",
    "department": "Facilities Management",
    "topic": "Maintenance Strategy",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "UpKeep",
    "publishDate": "2026-10-25",
    "duration": "5:19",
    "embedUrl": "https://www.youtube.com/embed/EaXJF89TQqQ",
    "isNew": false,
    "summary": "Compares preventive and reliability-centred maintenance: definitions, implementation steps, costs, benefits, drawbacks and the resources each needs.",
    "takeaways": [
      "Preventive maintenance is simple but can over-maintain.",
      "RCM focuses effort on functions that matter most.",
      "RCM needs data, skills and management commitment."
    ],
    "applyIt": "Run an RCM-style review on the chiller plant of your largest contract and present the cost-risk trade-offs to the client."
  },
  {
    "id": "fm-009",
    "title": "What Is a BMS? Building Management Systems",
    "department": "Facilities Management",
    "topic": "Building Systems",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "eFIXX",
    "publishDate": "2026-10-25",
    "duration": "6:26",
    "embedUrl": "https://www.youtube.com/embed/8WWRJbhm5hU",
    "isNew": false,
    "summary": "Explains how a building management system monitors and controls temperature, lighting, airflow and energy, and its three levels: field devices, controllers and management software.",
    "takeaways": [
      "A BMS has field, automation and management levels.",
      "BMS data shows how plant is actually running.",
      "Alarms and trends support faster, smarter response."
    ],
    "applyIt": "Agree BMS alarm escalation rules with each client so critical alarms automatically raise a work order."
  },
  {
    "id": "fm-010",
    "title": "Maintenance Backlog Management",
    "department": "Facilities Management",
    "topic": "Operations Management",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "ManWinWin",
    "publishDate": "2026-10-25",
    "duration": "8:43",
    "embedUrl": "https://www.youtube.com/embed/jYnv9SV_H9Q",
    "isNew": false,
    "summary": "Treats a growing maintenance backlog as a sign of lost control and shows how to reduce it with KPIs, structured clean-up and better CMMS practice.",
    "takeaways": [
      "Backlog shows whether the team is in control.",
      "Measure backlog in weeks of work, not ticket count.",
      "Close or cancel outdated work orders regularly."
    ],
    "applyIt": "Report open reactive and PPM work orders per contract in weeks of labour at every monthly operations review."
  },
  {
    "id": "fm-011",
    "title": "Asset Lifecycle Management",
    "department": "Facilities Management",
    "topic": "Asset Management",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Limble",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/7cQlAWJuaCA",
    "isNew": false,
    "summary": "How tracking equipment usage and performance history guides maintenance decisions across an asset's life, from acquisition to disposal, to lower total cost of ownership.",
    "takeaways": [
      "Manage assets from purchase to disposal, not just repair.",
      "Performance history shows when to repair or replace.",
      "Lifecycle planning lowers total cost of ownership."
    ],
    "applyIt": "Build a 5-year replacement forecast for major plant on key contracts and share it with clients as a value-add."
  },
  {
    "id": "fm-012",
    "title": "ISO 55000 Explained: Asset Management",
    "department": "Facilities Management",
    "topic": "Asset Management",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "UpKeep",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/eFHq7HjU-Ew",
    "isNew": false,
    "summary": "Introduces the ISO 55000 asset management standards, the differences between 55000, 55001 and 55002, and how an asset management system and CMMS support compliance.",
    "takeaways": [
      "ISO 55000 links asset decisions to business goals.",
      "55001 sets the requirements for an asset management system.",
      "A CMMS provides the data the standard relies on."
    ],
    "applyIt": "Assess the company's asset register and maintenance data against ISO 55001 as a step toward stronger government tenders."
  },
  {
    "id": "pv-001",
    "title": "What a Building Condition Survey Involves",
    "department": "Property Inspection & Valuation",
    "topic": "Condition Surveys",
    "format": "Process",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "London Building Surveyors",
    "publishDate": "2026-10-25",
    "duration": "2:19",
    "embedUrl": "https://www.youtube.com/embed/y-o7DAH-uNo",
    "isNew": false,
    "summary": "A RICS chartered surveyor explains what a building condition inspection covers, so clients and new inspectors know what the process involves.",
    "takeaways": [
      "A condition survey records the state of each building element.",
      "Findings are rated by condition and urgency.",
      "The report guides repair budgets and priorities."
    ],
    "applyIt": "Use a standard condition-survey template (element, condition rating, action, cost) for every new FM contract mobilisation."
  },
  {
    "id": "pv-002",
    "title": "RICS Home Survey Levels Explained",
    "department": "Property Inspection & Valuation",
    "topic": "Survey Standards",
    "format": "Process",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "bValued (Arthur Bletchly)",
    "publishDate": "2026-10-25",
    "duration": "18:00",
    "embedUrl": "https://www.youtube.com/embed/kxOfw77EBeE",
    "isNew": false,
    "summary": "Explains the RICS Home Survey Standard, comparing the Level 1 Condition Report and Level 2 survey, with or without a valuation.",
    "takeaways": [
      "Survey level should match the client's need and risk.",
      "Each level sets what is and isn't inspected.",
      "Be clear on scope before quoting a survey."
    ],
    "applyIt": "Define three inspection service levels (basic, standard, detailed) with clear scope for Al Bonian's inspection clients."
  },
  {
    "id": "pv-003",
    "title": "Commercial Property Inspection: The Preliminary Walkthrough",
    "department": "Property Inspection & Valuation",
    "topic": "Inspection Process",
    "format": "Process",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "CCPIA",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/-JuAXaLQ4z4",
    "isNew": false,
    "summary": "Shows how to carry out the preliminary walkthrough, the first stage of a commercial property inspection, as a step-by-step process.",
    "takeaways": [
      "Start with a full walkthrough before detailed checks.",
      "Note access, hazards and areas needing specialists.",
      "The walkthrough shapes the inspection plan."
    ],
    "applyIt": "Add a 30-minute preliminary walkthrough step to every commercial inspection before the detailed MEP checks begin."
  },
  {
    "id": "pv-006",
    "title": "Cap Rate in Commercial Real Estate",
    "department": "Property Inspection & Valuation",
    "topic": "Income Valuation",
    "format": "Process",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Ryan O'Connell, CFA",
    "publishDate": "2026-10-25",
    "duration": "4:59",
    "embedUrl": "https://www.youtube.com/embed/CUjnjXzhdUQ",
    "isNew": false,
    "summary": "Defines the capitalisation rate, how to calculate net operating income and how cap rate links income to property value, with a worked example.",
    "takeaways": [
      "Value = net operating income ÷ cap rate.",
      "NOI excludes financing costs.",
      "Higher risk usually means a higher cap rate."
    ],
    "applyIt": "Show clients how lower FM operating costs raise NOI and therefore the capital value of their building."
  },
  {
    "id": "pv-007",
    "title": "RICS Red Book Valuation with a Savills Director",
    "department": "Property Inspection & Valuation",
    "topic": "Valuation Standards",
    "format": "Process",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Your Success Podcast (Ian Fowler, Savills)",
    "publishDate": "2026-10-25",
    "duration": "9:55",
    "embedUrl": "https://www.youtube.com/embed/HBvOQ-aznMg",
    "isNew": false,
    "summary": "A Savills director explains how a professional valuation is carried out under the RICS Red Book standard.",
    "takeaways": [
      "Red Book valuations follow strict RICS standards.",
      "Lenders and courts rely on them for consistency.",
      "Valuer independence and evidence are essential."
    ],
    "applyIt": "Reference RICS Red Book standards when partnering with valuers on client asset reports to strengthen credibility."
  },
  {
    "id": "pv-008",
    "title": "Preparing for a Dilapidations Survey",
    "department": "Property Inspection & Valuation",
    "topic": "Dilapidations",
    "format": "Process",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "Harrison Clarke Chartered Surveyors",
    "publishDate": "2026-10-25",
    "duration": "4:21",
    "embedUrl": "https://www.youtube.com/embed/kf2P7vVSOHE",
    "isNew": false,
    "summary": "Guides landlords through preparing for a dilapidations claim at lease end: reviewing lease obligations, appointing a surveyor and mitigating loss.",
    "takeaways": [
      "Read the lease repair obligations first.",
      "Record condition at lease start and end.",
      "Early communication speeds settlement."
    ],
    "applyIt": "Offer landlord clients a photographic condition record at tenant move-in and move-out as an FM service."
  },
  {
    "id": "pv-010",
    "title": "Performing a Home Inspection (InterNACHI)",
    "department": "Property Inspection & Valuation",
    "topic": "Residential Inspection",
    "format": "On-the-job",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "InterNACHI (Jeremiah Wheelersburg, CPI)",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/IXsl0b2JZPQ",
    "isNew": false,
    "summary": "Follows a certified inspector through a real house inspection under InterNACHI standards, showing how defects are identified and what to do when found.",
    "takeaways": [
      "Follow a fixed sequence so nothing is missed.",
      "Inspect against a published standard of practice.",
      "Report defects clearly with recommended action."
    ],
    "applyIt": "Have new inspectors shadow a senior inspector on three villa inspections using the same room-by-room sequence."
  },
  {
    "id": "pv-011",
    "title": "Commercial Property Inspection Training",
    "department": "Property Inspection & Valuation",
    "topic": "Commercial Inspection",
    "format": "On-the-job",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "InterNACHI (Dillon Winiecki, CPI)",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/U6fJKaqjBMQ",
    "isNew": false,
    "summary": "A training class where a certified commercial inspector teaches how commercial property inspections are carried out in practice.",
    "takeaways": [
      "Commercial inspections cover more systems and specialists.",
      "Agree scope and access with the client first.",
      "Coordinate MEP, roof and life-safety checks."
    ],
    "applyIt": "Create a commercial inspection scope template covering MEP, fire, roof, façade and lifts for building-owner clients."
  },
  {
    "id": "pv-012",
    "title": "Infrared Cameras and Moisture Meters for Leak Detection",
    "department": "Property Inspection & Valuation",
    "topic": "Inspection Tools",
    "format": "On-the-job",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Ben Gromicko (Peter Hopkins, United Infrared)",
    "publishDate": "2026-10-25",
    "duration": "35:41",
    "embedUrl": "https://www.youtube.com/embed/sP5SkBhFCIs",
    "isNew": false,
    "summary": "A practical demonstration of using infrared cameras together with moisture meters to investigate moisture problems and find leaks.",
    "takeaways": [
      "Thermal images show patterns, not proof of moisture.",
      "Confirm suspected moisture with a moisture meter.",
      "Use both tools together for reliable findings."
    ],
    "applyIt": "Equip inspection teams with a thermal camera and moisture meter, and require meter confirmation for every reported leak."
  },
  {
    "id": "pv-013",
    "title": "Thermal Imaging During a Building Survey",
    "department": "Property Inspection & Valuation",
    "topic": "Inspection Tools",
    "format": "On-the-job",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Domestic Surveys Bristol",
    "publishDate": "2026-10-25",
    "duration": "1:32",
    "embedUrl": "https://www.youtube.com/embed/Zex2VNP-P2Q",
    "isNew": false,
    "summary": "Short on-site examples of a surveyor using thermal imaging to reveal moisture and insulation issues in different building types.",
    "takeaways": [
      "Thermal imaging reveals hidden moisture and heat loss.",
      "Results vary with construction type.",
      "Use it to target where to inspect more closely."
    ],
    "applyIt": "Add a thermal-imaging sweep of roofs and wet areas to villa inspections, especially before summer."
  },
  {
    "id": "lead-009",
    "title": "Why Long Meetings Drain Productivity and How to Fix Them",
    "department": "Leadership",
    "topic": "Running Meetings",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "CBS Mornings (Steven Rogelberg)",
    "publishDate": "2026-10-26",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/D-x8iJieHjI",
    "isNew": false,
    "summary": "Meetings researcher Steven Rogelberg discusses research on the \"meeting hangover\" effect of poor meetings and practical ways managers can make meetings shorter and more useful.",
    "takeaways": [
      "Badly run meetings cost productivity long after they end",
      "Keep meetings short, with a clear purpose and only the people who need to be there",
      "Treat running meetings as a leadership skill you can improve"
    ],
    "applyIt": "Keep daily site coordination meetings to a fixed short slot with a set agenda (safety, priority work orders, blockers) and send actions through Zoho Creator instead of extending the meeting."
  },
  {
    "id": "it-007",
    "title": "Leading Digital Transformation",
    "department": "IT",
    "topic": "Digital Transformation",
    "level": "Executive",
    "source": "Training Academy",
    "channel": "MIT Sloan School of Management (George Westerman)",
    "publishDate": "2026-10-26",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/3OTu5KB7qNU",
    "isNew": false,
    "summary": "MIT researcher George Westerman explains why leadership, not technology alone, determines whether a company's digital transformation succeeds.",
    "takeaways": [
      "Digital transformation is a leadership challenge, not just an IT project",
      "Senior leaders must set a clear digital vision and drive it",
      "Technology delivers value only when processes and people change with it"
    ],
    "applyIt": "Treat the CAFM and Zoho Creator roll-out as a management-led change, with senior owners for each process so site teams actually change how they log and close work."
  },
  {
    "id": "fm-013",
    "title": "Top 3 Maintenance KPIs Explained: MTBF, MTTF and MTTR",
    "department": "Facilities Management",
    "topic": "Maintenance KPIs",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "eMaint",
    "publishDate": "2026-10-26",
    "duration": "3:24",
    "embedUrl": "https://www.youtube.com/embed/D64pb8-RDsU",
    "isNew": false,
    "summary": "Defines three core reliability metrics (MTBF, MTTF and MTTR) and shows how tracking them supports better preventive maintenance, spares planning and repair-or-replace decisions.",
    "takeaways": [
      "MTBF shows how long a repairable asset runs between failures",
      "MTTR shows how quickly your team restores an asset",
      "Use the trends to adjust PPM frequencies and spare-parts stock"
    ],
    "applyIt": "Report MTBF and MTTR for critical assets such as chillers, pumps and AHUs from CAFM work-order data each month and use them in client performance reviews."
  },
  {
    "id": "pv-014",
    "title": "Using Thermal Imaging to Find Plumbing Leaks",
    "department": "Property Inspection & Valuation",
    "topic": "Thermal Imaging",
    "level": "Practitioner",
    "format": "On-the-job",
    "source": "Industry Expert",
    "channel": "Hammer Home Inspections",
    "publishDate": "2026-10-26",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/SyEWK8be3zk",
    "isNew": false,
    "summary": "A working home inspector shows how he uses a thermal camera during real inspections to locate hidden plumbing leaks and spot moisture intrusion and other defects.",
    "takeaways": [
      "Thermal images reveal temperature patterns that point to hidden moisture",
      "Confirm suspected leaks with a moisture meter before reporting them",
      "Include annotated thermal images in the inspection report as evidence"
    ],
    "applyIt": "On villa and apartment snagging inspections, scan wet areas and ceilings below bathrooms with a thermal camera and confirm any anomalies with a moisture meter before adding them to the snag report."
  },
  {
    "id": "lead-010",
    "title": "The GROW Model for Coaching: Origins and Application",
    "department": "Leadership",
    "topic": "Coaching",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Performance Consultants International (Sir John Whitmore)",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/f2M1GuhilR0",
    "isNew": false,
    "summary": "Sir John Whitmore, co-creator of the GROW model, explains where the framework came from and how its four steps (Goal, Reality, Options, Will) structure coaching conversations that improve performance.",
    "takeaways": [
      "Start every coaching conversation by agreeing a clear goal",
      "Ask questions to explore the current reality before suggesting solutions",
      "Finish with a committed next step the person owns"
    ],
    "applyIt": "Supervisors can use GROW in short one-to-ones with technicians to solve recurring site problems, such as repeat call-outs, instead of simply giving instructions."
  },
  {
    "id": "qhse-009",
    "title": "Incident Investigation: Identifying Root Causes and Implementing Corrective Actions",
    "department": "Quality & HSE",
    "topic": "Incident Investigation",
    "level": "Practitioner",
    "source": "Training Academy",
    "channel": "Atlantic Training Online Safety Training",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/faVpisJCX9w",
    "isNew": false,
    "summary": "A safety training course on investigating near-misses, property damage and injuries without blame, finding root causes, setting corrective actions and communicating lessons learned.",
    "takeaways": [
      "Investigate near-misses as seriously as injuries",
      "Focus on root causes and system failures, not on blaming individuals",
      "Track corrective actions to closure and share the lessons"
    ],
    "applyIt": "After any site incident or near-miss, such as a fall from a ladder or an electrical flash, the HSE team should run a blame-free investigation and record corrective actions in the CAFM system until closed."
  },
  {
    "id": "it-008",
    "title": "How to Spot a Phishing Email",
    "department": "IT",
    "topic": "Phishing Awareness",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Keeper Security",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/iHetr8xTWIU",
    "isNew": false,
    "summary": "A quick awareness video showing the common warning signs of phishing emails, such as urgency and pressure, suspicious sender addresses and unexpected links, plus simple steps to stay protected.",
    "takeaways": [
      "Be suspicious of urgent requests to pay, log in or share details",
      "Check the real sender address and hover over links before clicking",
      "Report suspected phishing instead of deleting it quietly"
    ],
    "applyIt": "Share this with office and site staff who handle supplier invoices and client emails, and require that any request to change bank details is confirmed by phone."
  },
  {
    "id": "fm-014",
    "title": "Best Practices Webinar: Maintenance Planning and Scheduling",
    "department": "Facilities Management",
    "topic": "Planning & Scheduling",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "eMaint (Roy Rothwell)",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/hT_UHv2Jyvk",
    "isNew": false,
    "summary": "An eMaint webinar on why maintenance should be planned and scheduled, covering core planning principles, the tools and prerequisites needed, and practical steps to cut backlog and overtime.",
    "takeaways": [
      "Plan jobs fully (parts, tools, permits) before scheduling them",
      "Schedule against available labour hours to protect productivity",
      "Measure backlog and schedule compliance to improve over time"
    ],
    "applyIt": "Planners should prepare weekly PPM and corrective work packs in the CAFM system, with spares and permits ready, before allocating technicians across sites."
  },
  {
    "id": "fin-010",
    "title": "What Is Variance Analysis? Budget vs Actual Explained",
    "department": "Finance",
    "topic": "Cost Control",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Ryan O'Connell, CFA, FRM",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/4Qd97lqDdb0",
    "isNew": false,
    "summary": "Shows how to compare actual results with the budget and break the profit gap into volume, price and cost effects using a flexible budget and a profit bridge.",
    "takeaways": [
      "Use a flexible budget so you compare like with like at actual activity levels",
      "Split each gap into volume, price and cost effects before reacting",
      "A variance tells you where to look — confirm the root cause with evidence"
    ],
    "applyIt": "Run a monthly budget-vs-actual review for each MEP maintenance contract and separate labour, materials and subcontractor cost variances before deciding on corrective action."
  },
  {
    "id": "lead-011",
    "title": "How Leaders Make Good Decisions in a Crisis — Gary Klein",
    "department": "Leadership",
    "topic": "Decision-Making",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Lootok (Gary Klein)",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/DzErY5ynXXg",
    "isNew": false,
    "summary": "Psychologist Gary Klein explains how experienced decision-makers such as firefighters act fast under pressure by recognising patterns from past experience, and what leaders can learn from it.",
    "takeaways": [
      "Under time pressure experts match cues to past patterns rather than compare options",
      "Build experience deliberately so your team has patterns to draw on",
      "Mentally simulate a chosen action quickly to spot what could go wrong"
    ],
    "applyIt": "Use short scenario drills and post-incident debriefs with site supervisors so they build the experience to make fast, sound calls during critical breakdowns at client sites."
  },
  {
    "id": "qhse-010",
    "title": "Five Lean Transformation Tips for Leaders",
    "department": "Quality & HSE",
    "topic": "Continuous Improvement",
    "level": "Executive",
    "source": "Training Academy",
    "channel": "Gemba Academy",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/0nXY_g4TXZg",
    "isNew": false,
    "summary": "Gives leaders five practical tips for a lean transformation, from a blame-free culture and teaching people to solve problems to small PDCA improvements and daily stand-ups.",
    "takeaways": [
      "Model respect and build a blame-free environment",
      "Teach teams to spot waste and solve their own problems",
      "Make small, frequent PDCA improvements linked to goals through daily stand-ups"
    ],
    "applyIt": "Introduce short daily stand-ups on major sites where teams flag waste and safety issues, then track small improvements through the CAPA log in Zoho Creator."
  },
  {
    "id": "bd-011",
    "title": "Why Your B2B Pricing Strategy Is Hurting Your Margins",
    "department": "Business Development",
    "topic": "Pricing Strategy",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "ValueSellingAssoc",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/adtX8ifRdWs",
    "isNew": false,
    "summary": "A pricing executive discusses why B2B firms rely on reactive discounts and flat annual increases, and how a value-based, data-driven pricing approach protects margin.",
    "takeaways": [
      "Reactive discounting and blanket increases erode margin",
      "Price on the value delivered to each customer segment",
      "Pilot pricing changes in one market before rolling out widely"
    ],
    "applyIt": "When pricing FM tenders and renewals, build prices from the value delivered (uptime, compliance, response times) rather than discounting to match competitors."
  },
  {
    "id": "pv-016",
    "title": "Surveying Secrets: Master Your Moisture Meter",
    "department": "Property Inspection & Valuation",
    "topic": "Damp Investigation",
    "level": "Foundation",
    "format": "On-the-job",
    "source": "Industry Expert",
    "channel": "Residential Surveyor Academy (Geoff Hunt)",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/ggMuKVknsPw",
    "isNew": false,
    "summary": "Surveyor Geoff Hunt demonstrates how damp meters work, how to read them properly and what they cannot reliably tell you during a property inspection.",
    "takeaways": [
      "Moisture meters give relative readings, not absolute moisture content",
      "Readings can be misleading on salts, foil or dense materials",
      "Confirm suspected damp with other evidence before reporting"
    ],
    "applyIt": "Train snagging and inspection staff to use moisture meters correctly on bathroom walls, ceilings below wet areas and around AC drains, and to back up readings with photos and thermal images in reports."
  },
  {
    "id": "fin-011",
    "title": "What is NPV? Net Present Value Explained",
    "department": "Finance",
    "topic": "Investment Appraisal",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Ryan O'Connell, CFA, FRM",
    "publishDate": "2026-10-29",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/NJ2ajp9Nu4o",
    "isNew": false,
    "summary": "A CFA charterholder explains how net present value discounts future cash flows to today and uses a worked example to show how to judge whether an investment creates value.",
    "takeaways": [
      "Money received later is worth less than money today, so discount future cash flows",
      "A positive NPV at the right discount rate means the investment adds value",
      "NPV is only as good as the cash-flow and discount-rate assumptions behind it"
    ],
    "applyIt": "Use NPV when deciding on capex such as new CAFM modules, tools or vehicles, or when comparing multi-year MEP contract bids, and stress-test the cash-flow assumptions before approval."
  },
  {
    "id": "lead-012",
    "title": "Daniel Goleman Introduces Emotional Intelligence",
    "department": "Leadership",
    "topic": "Emotional Intelligence",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Big Think (Daniel Goleman)",
    "publishDate": "2026-10-29",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/Y7m9eNoB3NU",
    "isNew": false,
    "summary": "Psychologist Daniel Goleman outlines the core abilities that make up emotional intelligence and why they matter for how people work and lead.",
    "takeaways": [
      "Emotional intelligence rests on self-awareness, self-management, empathy and social skill",
      "Managing your own reactions under pressure is a learnable skill",
      "Empathy helps you read your team and respond to what they need"
    ],
    "applyIt": "Supervisors handling tense client complaints or overstretched site teams can pause, name their own reaction and listen first before deciding how to respond."
  },
  {
    "id": "proc-010",
    "title": "7 KPIs for Effective Supplier Relationship Management",
    "department": "Procurement",
    "topic": "Supplier Evaluation",
    "level": "Practitioner",
    "source": "Training Academy",
    "channel": "Procurement Tactics",
    "publishDate": "2026-10-29",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/8ppXU0hZ3xI",
    "isNew": false,
    "summary": "Procurement Tactics walks through seven practical KPIs, from lead time and defect rate to on-time delivery and procurement ROI, for measuring and improving supplier performance.",
    "takeaways": [
      "Track lead time, on-time delivery, defect rate and compliance for each key supplier",
      "Agree the KPIs with suppliers up front so expectations are clear",
      "Link supplier metrics to goals like cost savings and risk reduction"
    ],
    "applyIt": "Build a simple supplier scorecard in Zoho Creator for spare-parts suppliers and MEP subcontractors, reviewing on-time delivery and defects quarterly before renewing agreements."
  },
  {
    "id": "fm-016",
    "title": "Legionnaires' Disease: Hot Water Pipes Demonstration",
    "department": "Facilities Management",
    "topic": "Water Hygiene",
    "level": "Foundation",
    "source": "Regulator",
    "channel": "Health and Safety Executive",
    "publishDate": "2026-10-29",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/ZTTgeMBbR-w",
    "isNew": false,
    "summary": "A short UK HSE demonstration video on hot water pipework, showing why keeping water systems clean is central to controlling legionella risk.",
    "takeaways": [
      "Clean water systems are a basic legionella control",
      "Hot water pipework needs regular inspection and maintenance",
      "Legionella control needs routine checks, not one-off fixes"
    ],
    "applyIt": "Include temperature checks, flushing of little-used outlets and tank cleaning in PPM schedules for client buildings, with results recorded in the CAFM system as statutory compliance evidence."
  },
  {
    "id": "pv-017",
    "title": "Introduction to IPMS (International Property Measurement Standards)",
    "department": "Property Inspection & Valuation",
    "topic": "Measurement Standards",
    "level": "Practitioner",
    "format": "Process",
    "source": "Training Academy",
    "channel": "APC Expert Webinars",
    "publishDate": "2026-10-29",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/CTNjS3asb10",
    "isNew": false,
    "summary": "An APC training webinar introducing the International Property Measurement Standards and why consistent measurement matters for surveyors and valuers.",
    "takeaways": [
      "IPMS sets out a consistent, international way to measure buildings",
      "Always state which measurement basis was used in a report",
      "Consistent measurement makes comparisons and valuations more reliable"
    ],
    "applyIt": "State the measurement basis on every inspection and valuation report, and check developer-quoted areas against site measurements before relying on them."
  },
  {
    "id": "lead-013",
    "title": "Managing Conflict in Teams — Lindred Greer",
    "department": "Leadership",
    "topic": "Managing Conflict",
    "level": "Executive",
    "source": "Training Academy",
    "channel": "Stanford Graduate School of Business",
    "publishDate": "2026-10-31",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/YVWpipM-Rnw",
    "isNew": false,
    "summary": "Stanford professor Lindred Greer explains why unmanaged team conflict spreads and hurts productivity and retention, and how leaders can contain and resolve it.",
    "takeaways": [
      "Unaddressed conflict spreads across a team and drives turnover",
      "Step in early and separate task disagreements from personal friction",
      "Leaders set the norms for how disagreement is raised and resolved"
    ],
    "applyIt": "Set a clear escalation route for disputes between site teams, supervisors and subcontractors so conflicts are resolved within days rather than left to affect service delivery."
  },
  {
    "id": "hr-012",
    "title": "UAE Labour Law Updates and Implications for Employers (CIPD Webinar)",
    "department": "HR",
    "topic": "UAE Labour Law",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "CIPD Middle East",
    "publishDate": "2026-10-31",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/dCwcOhscDlY",
    "isNew": false,
    "summary": "CIPD Middle East and law firm Clyde & Co walk employers through the federal UAE labour law reforms, covering fixed-term contracts, new work models, leave and working-hours rules.",
    "takeaways": [
      "All employment contracts must now be fixed-term under the federal law",
      "New work models (part-time, flexible, temporary) are formally recognised",
      "Leave entitlements and working-hour rules need to be reflected in contracts and policies"
    ],
    "applyIt": "Review Al Bonian FM offer letters, shift patterns and leave policies for site technicians against the federal labour law requirements covered here."
  },
  {
    "id": "it-011",
    "title": "Low-Code/No-Code with Zoho Creator",
    "department": "IT",
    "topic": "Low-Code Platforms",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Zoho",
    "publishDate": "2026-10-31",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/F2TlSzmPmlc",
    "isNew": false,
    "summary": "Zoho introduces how Creator’s drag-and-drop builders, templates, code snippets and integrations let teams build custom business apps quickly.",
    "takeaways": [
      "Visual builders and templates speed up form and report creation",
      "Pre-built snippets and integrations reduce custom coding",
      "AI, analytics and process automation can be layered onto apps"
    ],
    "applyIt": "Identify one manual paper or spreadsheet process (e.g. site inspection checklists) and rebuild it as a Zoho Creator app linked to existing company data."
  },
  {
    "id": "lead-014",
    "title": "How to Take Blame Out of Leadership",
    "department": "Leadership",
    "topic": "Accountability",
    "level": "Executive",
    "source": "TED Talk",
    "channel": "TEDx Talks (Michael Timms)",
    "publishDate": "2026-11-01",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/-Tf-FhF1RVk",
    "isNew": false,
    "summary": "Michael Timms explains how blame cycles undermine results and outlines three personal-accountability habits that leaders can model to build ownership across an organisation.",
    "takeaways": [
      "Blame protects egos but stops learning and improvement",
      "Leaders set the tone by owning their part in problems first",
      "Ask 'what could I have done differently?' before looking at others"
    ],
    "applyIt": "In post-incident and missed-SLA reviews, have senior managers open by stating what they would change themselves before discussing site or subcontractor failures."
  },
  {
    "id": "qhse-013",
    "title": "Achieving Health and Safety Leadership Excellence in the Workplace",
    "department": "Quality & HSE",
    "topic": "Safety Leadership",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "NEBOSH",
    "publishDate": "2026-11-01",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/SDvC53j7vTU",
    "isNew": false,
    "summary": "A NEBOSH webinar on what effective health and safety leadership looks like in practice, drawing on the UK HSE's leadership model that underpins NEBOSH's leadership qualification.",
    "takeaways": [
      "Safety leadership is shown through visible behaviour, not slogans",
      "Leaders get the safety culture they role-model and reward",
      "Use a clear leadership model to coach managers and supervisors"
    ],
    "applyIt": "Have senior managers carry out scheduled site safety walks on MEP and inspection sites, recognising good practice and following up openly on unsafe conditions."
  },
  {
    "id": "it-012",
    "title": "Implementing a Building Automation System: Steps for Facility Managers",
    "department": "IT",
    "topic": "Smart Buildings & BMS",
    "level": "Practitioner",
    "source": "Training Academy",
    "channel": "Smart Buildings Academy",
    "publishDate": "2026-11-01",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/v2FUxirOFyA",
    "isNew": false,
    "summary": "A practical guide for facility managers on implementing a building automation system, from assessing needs and selecting a solution through commissioning, training and ongoing optimisation.",
    "takeaways": [
      "Define facility goals and needs before selecting a BAS",
      "Plan commissioning, testing and staff training as part of the project",
      "Keep monitoring and tuning the system after handover"
    ],
    "applyIt": "Use these steps when advising clients on BMS upgrades and link BMS alarms into our CAFM system so critical faults generate work orders automatically."
  },
  {
    "id": "pv-019",
    "title": "Reinstatement Costs: Ask the Insurance Experts (BCIS Webinar)",
    "department": "Property Inspection & Valuation",
    "topic": "Reinstatement Cost",
    "level": "Foundation",
    "format": "Process",
    "source": "Professional Body",
    "channel": "BCIS",
    "publishDate": "2026-11-01",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/Y9P2aSYu-vM",
    "isNew": false,
    "summary": "A BCIS expert panel explains underinsurance, why reinstatement cost differs from market value, and why rebuild cost assessments need regular updating for inflation and building changes.",
    "takeaways": [
      "Reinstatement cost is the rebuild cost, not market value",
      "Averaging clauses reduce payouts when sums insured are too low",
      "Reassess regularly for inflation, extensions and new features"
    ],
    "applyIt": "Offer reinstatement cost assessments alongside condition surveys for owners and developers, and flag clients whose declared values are outdated."
  },
  {
    "id": "ai-003",
    "title": "How AI Is Changing Strategy — and 4 Skills Leaders Need Next",
    "department": "AI News",
    "topic": "AI Strategy",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "Harvard Business Review (Ethan Mollick)",
    "publishDate": "2026-11-01",
    "videoDate": "2026-10-09",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/9f3qnX6aiIE",
    "isNew": false,
    "summary": "Wharton professor Ethan Mollick argues leaders should redesign their organisations around what AI makes possible, explains how AI agents change the manager's role, and names four capabilities leaders need: deep knowledge, wide knowledge, taste and agency.",
    "takeaways": [
      "Redesign work around AI, don't just automate old tasks.",
      "Agents change what managers supervise and how.",
      "Deep expertise and judgement stay valuable."
    ],
    "applyIt": "Ask each department head to propose one process to redesign around AI, not just speed up."
  },
  {
    "id": "ai-008",
    "title": "The Most Hopeful (and Concerning) Moment Yet in AI",
    "department": "AI News",
    "topic": "AI Safety",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Center for Humane Technology (Tristan Harris)",
    "publishDate": "2026-11-01",
    "videoDate": "2026-09-17",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/07JaHf4oW6I",
    "isNew": false,
    "summary": "Tristan Harris reviews a week of AI news including rogue-agent hacking incidents, researcher warnings about the pace of development and calls from AI leaders to slow down, and suggests practical steps to reduce risks.",
    "takeaways": [
      "AI risks are growing alongside AI capabilities.",
      "Agents acting on their own need clear limits.",
      "Leaders can shape safer adoption inside their organisations."
    ],
    "applyIt": "Set a rule that AI agents cannot send client communications or approve payments without human review."
  },
  {
    "id": "ai-009",
    "title": "Gartner's Top Strategic Technology Trends for 2026",
    "department": "AI News",
    "topic": "Tech Trends",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "Gartner",
    "publishDate": "2026-11-01",
    "videoDate": "2025-12-04",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/5dgpcQXq1eo",
    "isNew": false,
    "summary": "Gartner analysts present the top strategic technology trends for 2026 live from IT Symposium/Xpo, framed around building resilient foundations, orchestrating intelligent systems and protecting enterprise value.",
    "takeaways": [
      "Trends are grouped around foundations, intelligence and protection.",
      "AI orchestration is a core theme for 2026.",
      "Security and trust underpin every trend."
    ],
    "applyIt": "Use the Gartner trend list as a checklist when planning next year's IT and digital budget."
  },
  {
    "id": "lead-015",
    "title": "How to Give Constructive Feedback: Management Primer",
    "department": "Leadership",
    "topic": "Feedback",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "Management Courses (Mike Clayton)",
    "publishDate": "2026-11-02",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/2B2fyub1ZTY",
    "isNew": true,
    "summary": "A primer for managers on the principles of constructive feedback, using the Situation-Behaviour-Impact model and covering delivery and follow-up.",
    "takeaways": [
      "Describe the situation, the behaviour and its impact",
      "Aim feedback at helping the person develop",
      "Follow up after the conversation"
    ],
    "applyIt": "Have site supervisors use Situation-Behaviour-Impact when discussing a missed PPM or a poor client handover with a technician."
  },
  {
    "id": "hr-014",
    "title": "The New Rules of Talent Retention with Steve Cadigan",
    "department": "HR",
    "topic": "Retention",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "SME Strategy (Steve Cadigan)",
    "publishDate": "2026-11-02",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/EbTgFsKYYKo",
    "isNew": true,
    "summary": "Former LinkedIn CHRO Steve Cadigan argues that retention strategies built for longer careers need updating, and discusses shorter tenures, skills development and staying connected with former employees.",
    "takeaways": [
      "Plan talent strategy around shorter tenures",
      "Build skills so that people grow while they stay",
      "Keep former employees in your network"
    ],
    "applyIt": "Review how Al Bonian FM develops supervisors and engineers, and keep in touch with good leavers who may return to future contracts."
  },
  {
    "id": "pv-020",
    "title": "Commercial Property Roof Inspection Walkthrough",
    "department": "Property Inspection & Valuation",
    "topic": "Roof Inspection",
    "level": "Practitioner",
    "format": "On-the-job",
    "source": "Professional Body",
    "channel": "CCPIA (Rob Claus)",
    "publishDate": "2026-11-02",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/Gm2WQtskYwc",
    "isNew": true,
    "summary": "Certified inspector Rob Claus inspects a commercial roof, covering access and safety, the roof surface, water runoff, rooftop equipment openings, flashing and parapet walls.",
    "takeaways": [
      "Start with safe roof access",
      "Check surface, drainage and runoff paths",
      "Look closely at penetrations, flashing and parapets"
    ],
    "applyIt": "Use this sequence as a roof section in inspection checklists for villas and commercial buildings, recording drainage and flashing defects with photos."
  },
  {
    "id": "ai-010",
    "title": "Anthropic's IPO Filing and the AI Boom (Bloomberg Daybreak: Asia)",
    "department": "AI News",
    "topic": "AI Industry",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Bloomberg Podcasts",
    "publishDate": "2026-11-02",
    "videoDate": "2026-10-26",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/R4yyk8JJc80",
    "isNew": true,
    "summary": "The video reports on Anthropic's IPO filing, framing it as showing both rapid growth and uncertainty over AI demand and spending, and also covers wider markets and AI-driven debt.",
    "takeaways": [
      "The filing is a test of investor confidence in AI",
      "Growth comes with uncertain demand and heavy spending",
      "AI funding is now reaching debt markets"
    ],
    "applyIt": "Treat AI vendor pricing and roadmaps as still evolving, and avoid long lock-ins when choosing AI tools for FM operations."
  },
  {
    "id": "fin-015",
    "title": "Cash Flow Statement Basics Explained",
    "department": "Finance",
    "topic": "Cash Flow",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Leila Gharani",
    "publishDate": "2026-11-03",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/hMBN6yTIDb0",
    "isNew": true,
    "summary": "Walks through the three sections of the cash flow statement, the direct and indirect methods, and how the statement ties back to the balance sheet.",
    "takeaways": [
      "Separate cash from operations, investing and financing",
      "Profit under accrual accounting is not the same as cash",
      "Reconcile the statement to the balance sheet movement"
    ],
    "applyIt": "Review monthly operating cash flow alongside contract profit so that slow-paying MEP clients are spotted before they strain payroll and subcontractor payments."
  },
  {
    "id": "lead-016",
    "title": "How to Delegate: Delegation Strategies for People Leaders",
    "department": "Leadership",
    "topic": "Delegation",
    "level": "Practitioner",
    "source": "Training Academy",
    "channel": "GoSkills.com (Carol Parker Walsh)",
    "publishDate": "2026-11-03",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/__IruMEh7ZE",
    "isNew": true,
    "summary": "Shows people leaders how to delegate with clear expectations and follow-up, matching the approach to each person's skills and readiness while avoiding micromanagement.",
    "takeaways": [
      "Set clear expectations and agree how you will follow up",
      "Match delegation to skill and readiness",
      "Use delegation to develop people, not just to offload tasks"
    ],
    "applyIt": "Have site supervisors hand one recurring task, such as the weekly PPM report, to a technician with an agreed standard and check-in date."
  },
  {
    "id": "proc-014",
    "title": "Category Management: Cornerstone of Procurement Success",
    "department": "Procurement",
    "topic": "Category Management",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "CIPS (Daron Gibb)",
    "publishDate": "2026-11-03",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/fiXG9__L2Vk",
    "isNew": true,
    "summary": "National Grid's VP of global procurement argues that category management is the foundation of procurement and that strategic sourcing works best when it starts from deep category analysis.",
    "takeaways": [
      "Treat category management as the foundation of procurement",
      "Do deep category analysis before sourcing",
      "Sourcing and other value levers depend on that analysis"
    ],
    "applyIt": "Build a category view of major spend such as HVAC spares, chemicals and subcontracted labour before the next round of supplier tenders."
  },
  {
    "id": "bd-016",
    "title": "The Best Way to Win a Negotiation — Deepak Malhotra",
    "department": "Business Development",
    "topic": "Negotiation",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Inc. (Deepak Malhotra)",
    "publishDate": "2026-11-03",
    "duration": "46:25",
    "embedUrl": "https://www.youtube.com/embed/bUi5R54Oqig",
    "isNew": true,
    "summary": "Harvard Business School professor and Negotiation Genius co-author Deepak Malhotra sets out how to approach and win negotiations.",
    "takeaways": [
      "Prepare your approach before you negotiate",
      "Treat negotiation as a learnable discipline",
      "Apply a consistent approach to major deals"
    ],
    "applyIt": "Prepare a written negotiation plan before renewal talks on major FM contracts with developers and government clients."
  },
  {
    "id": "fm-020",
    "title": "Understanding MTBF and MTTR: Reliability Metrics for Maintenance Teams",
    "department": "Facilities Management",
    "topic": "Maintenance KPIs",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "UpKeep (Ryan Chan)",
    "publishDate": "2026-11-03",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/DtV5Ny50JMU",
    "isNew": true,
    "summary": "UpKeep's founder explains why MTBF and MTTR matter, how they vary, how to calculate them and how to improve them.",
    "takeaways": [
      "Track MTBF and MTTR to see reliability trends",
      "Calculate both consistently across assets",
      "Use the results to target improvement"
    ],
    "applyIt": "Pull MTBF and MTTR from CAFM work orders for critical assets such as chillers and report the trend in monthly client reviews."
  },
  {
    "id": "pv-021",
    "title": "Why ESG and Sustainability Matter in Commercial Property Valuation",
    "department": "Property Inspection & Valuation",
    "topic": "ESG in Valuation",
    "level": "Executive",
    "format": "Process",
    "source": "Training Academy",
    "channel": "APC Expert Webinars",
    "publishDate": "2026-11-03",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/wZ_XlcVSTRM",
    "isNew": true,
    "summary": "Explains the RICS professional standard on sustainability and ESG in commercial property valuation, including how these factors affect value and how it relates to Red Book and IVS compliance.",
    "takeaways": [
      "ESG factors can affect commercial property value",
      "The RICS standard took effect on 30 April 2026",
      "Consider ESG as part of Red Book and IVS compliance"
    ],
    "applyIt": "Add ESG data such as energy performance and plant condition to inspection reports so that valuers and property owners have the evidence they need."
  },
  {
    "id": "lead-017",
    "title": "5 Ways to Listen Better — Julian Treasure",
    "department": "Leadership",
    "topic": "Communication",
    "level": "Foundation",
    "source": "TED Talk",
    "channel": "TED (Julian Treasure)",
    "publishDate": "2026-11-05",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/cSohjlYQI2A",
    "isNew": true,
    "summary": "Sound expert Julian Treasure explains why people are losing the habit of careful listening and offers five simple exercises to rebuild it.",
    "takeaways": [
      "People retain only part of what they hear",
      "Filters and intention shape what we actually notice",
      "Listening improves with regular, deliberate practice"
    ],
    "applyIt": "Ask supervisors to open site toolbox talks by listening first, then summarising what technicians report before giving instructions."
  },
  {
    "id": "bd-017",
    "title": "Key Account Management Framework",
    "department": "Business Development",
    "topic": "Key Account Management",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "The KAM Club",
    "publishDate": "2026-11-05",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/TRogoqdBBfQ",
    "isNew": true,
    "summary": "The video presents a ten-part key account management model that follows the customer lifecycle from implementation to retention, built around mutual value and risk contingencies.",
    "takeaways": [
      "Treat key accounts as a full lifecycle, not one sale",
      "Build each account plan around mutual value",
      "Plan contingencies for account risks in advance"
    ],
    "applyIt": "Choose the top developer and government clients and give each an account plan covering contract delivery, renewal risk and the next service to offer."
  },
  {
    "id": "it-015",
    "title": "How to Tell the Right Cyber-Story to Executives and Board Members",
    "department": "IT",
    "topic": "Cybersecurity",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "RSAC Cybersecurity (Ian Yip)",
    "publishDate": "2026-11-05",
    "duration": "27:30",
    "embedUrl": "https://www.youtube.com/embed/OVRqrsR07dE",
    "isNew": true,
    "summary": "Avertro CEO Ian Yip uses real examples of cybersecurity reporting to show what executives and boards care about and which metrics answer their \"why\" and \"so what\" questions.",
    "takeaways": [
      "Report cyber risk in terms leaders care about",
      "Choose metrics that answer why and so what",
      "Use the story to justify strategy and investment"
    ],
    "applyIt": "Replace technical IT updates to senior management with a short cyber report showing the business impact of risks to CAFM, Zoho Creator and client data."
  },
  {
    "id": "pv-022",
    "title": "How We Undertake a Dilapidations Assessment",
    "department": "Property Inspection & Valuation",
    "topic": "Dilapidations",
    "level": "Practitioner",
    "format": "Process",
    "source": "Industry Expert",
    "channel": "West One Surveyors",
    "publishDate": "2026-11-05",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/QuL3GLwLaE4",
    "isNew": true,
    "summary": "A surveying firm walks through a terminal dilapidations assessment on a commercial lease, covering the lease, the schedule of dilapidations and the inspection.",
    "takeaways": [
      "Start with the lease and its repair obligations",
      "Link each schedule item to a lease clause",
      "Inspect systematically and record condition clearly"
    ],
    "applyIt": "Adapt the approach into an end-of-lease inspection service for property owners, tying every defect in the report to the relevant tenancy obligation."
  },
  {
    "id": "ai-012",
    "title": "Anthropic's S-1 Risk Warnings and AI at Work (Fortune AI Weekly)",
    "department": "AI News",
    "topic": "AI Risk & Governance",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Fortune Magazine",
    "publishDate": "2026-11-05",
    "videoDate": "2026-11-03",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/lbKCC6njCVc",
    "isNew": true,
    "summary": "The video reports on the financial figures and risk factors in Anthropic's S-1 filing, a lawsuit against OpenAI over chatbot medical advice, and research on how AI influences professional judgement.",
    "takeaways": [
      "Read vendor risk disclosures before relying on a tool",
      "Treat chatbot advice on safety or health as unverified",
      "Human review only helps if reviewers challenge AI output"
    ],
    "applyIt": "Require a named person to check any AI-assisted inspection report or compliance advice before it goes to a client, and record who reviewed it."
  },
  {
    "id": "lead-018",
    "title": "Kotter's 8-Step Change Model Explained",
    "department": "Leadership",
    "topic": "Change Management",
    "level": "Practitioner",
    "source": "Training Academy",
    "channel": "The Knowledge Academy",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/-MTsoOUsU0Y",
    "isNew": true,
    "summary": "Explains why change programmes fade after a confident launch and how Kotter's eight steps give leaders a structured way to guide people through change.",
    "takeaways": [
      "Build urgency before announcing the plan",
      "Form a coalition of respected people",
      "Anchor new habits so teams do not slip back"
    ],
    "applyIt": "Use the eight steps as the checklist for the next system or process rollout, such as moving site teams onto a new Zoho Creator or CAFM workflow."
  },
  {
    "id": "hr-017",
    "title": "How To Do Performance Management (AIHR Learning Bite)",
    "department": "HR",
    "topic": "Performance Management",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "AIHR - Academy to Innovate HR",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/WjvHPdlKoEA",
    "isNew": true,
    "summary": "A short introduction to what performance management is and how organisations put it into practice.",
    "takeaways": [
      "Treat performance management as a process, not a form",
      "Link individual goals to business goals",
      "Keep feedback going between formal reviews"
    ],
    "applyIt": "Give supervisors and site engineers a short set of goals tied to contract KPIs and review progress with them regularly rather than only at year end."
  },
  {
    "id": "it-016",
    "title": "3-2-1 Backup Rule Explained: Protect Your Data from Disaster",
    "department": "IT",
    "topic": "Backup & Continuity",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "IBM Technology (Jeff Crume)",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/WJzsX32qMJY",
    "isNew": true,
    "summary": "Explains the 3-2-1 backup approach, along with immutability and disaster recovery, as ways to protect data from loss.",
    "takeaways": [
      "Keep three copies of important data",
      "Use two media types and one off-site copy",
      "Immutable backups help resist tampering"
    ],
    "applyIt": "Confirm that CAFM data, Zoho Creator exports and inspection reports each have a tested backup copy held away from the main system."
  },
  {
    "id": "fm-022",
    "title": "Failure Modes and Effects Analysis (FMEA) Explained",
    "department": "Facilities Management",
    "topic": "FMEA",
    "level": "Practitioner",
    "source": "Training Academy",
    "channel": "Invensis Learning",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/U6xflqPW3QY",
    "isNew": true,
    "summary": "Explains what failure modes and effects analysis is, the main types of FMEA and how the method is used.",
    "takeaways": [
      "List how each asset could fail and the effect",
      "Rank failures so effort goes to the highest risk",
      "Act on the top risks and then re-score them"
    ],
    "applyIt": "Run an FMEA on critical plant such as chillers and pump sets at a key site, then adjust PPM tasks to target the highest-ranked failure modes."
  },
  {
    "id": "pv-023",
    "title": "Commercial Split-System HVAC Inspection",
    "department": "Property Inspection & Valuation",
    "topic": "HVAC Inspection",
    "level": "Executive",
    "format": "On-the-job",
    "source": "Professional Body",
    "channel": "CCPIA",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/5-WCuEOzj_o",
    "isNew": true,
    "summary": "Follows an HVAC inspection of a multi-tenant office, comparing a solo approach with a team approach across the roof units and the occupied spaces.",
    "takeaways": [
      "Record data-plate details for each unit",
      "Inspect rooftop and in-suite parts of split systems",
      "Choose solo or team coverage to suit the building"
    ],
    "applyIt": "When scoping commercial inspections for owners, decide up front whether a solo inspector or a team is needed and price tenant access across the occupied floors accordingly."
  },
  {
    "id": "ai-013",
    "title": "AI Lurches Towards Recursive Self-Improvement",
    "department": "AI News",
    "topic": "AI Research",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "The AI Daily Brief",
    "publishDate": "2026-11-06",
    "videoDate": "2026-11-04",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/Es59icF3nZg",
    "isNew": true,
    "summary": "The video reports on Elon Musk's doubts about personal AI agents, an MIT paper in which a larger model edits a smaller model's weights, and how investors are weighing recursive self-improvement.",
    "takeaways": [
      "Recursive self-improvement means AI helping improve AI",
      "Treat research claims as early, not settled",
      "Check agent running costs before committing"
    ],
    "applyIt": "Before adopting AI agents for helpdesk or reporting work, estimate the running cost per task and pilot on one contract rather than rolling out across all sites."
  },
  {
    "id": "fin-018",
    "title": "How to Prepare a Cash Flow Statement",
    "department": "Finance",
    "topic": "Cash Flow",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "HBS Online (Harvard Business School)",
    "publishDate": "2026-11-06",
    "duration": "2:35",
    "embedUrl": "https://www.youtube.com/embed/ozniWle1BN4",
    "isNew": true,
    "summary": "Harvard Business School Online walks through the three sections of the cash flow statement and how to build one from opening balance to ending cash, using the direct or indirect method.",
    "takeaways": [
      "Cash flow has three sections: operating, investing and financing.",
      "The indirect method starts from net income and adjusts for non-cash items.",
      "Cash flow shows liquidity in a way the balance sheet cannot."
    ],
    "applyIt": "Ask Finance to present a simple monthly cash flow statement for each major contract alongside the P&L."
  },
  {
    "id": "fin-019",
    "title": "How to Read and Understand a Balance Sheet",
    "department": "Finance",
    "topic": "Financial Statements",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "HBS Online (Harvard Business School)",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/BfXhpe1XxdI",
    "isNew": true,
    "summary": "Explains the balance sheet equation, current and non-current assets and liabilities, and owner's equity, with a worked example of how managers and investors read it.",
    "takeaways": [
      "Assets always equal liabilities plus owner's equity.",
      "Current items convert or fall due within a year.",
      "The balance sheet is a snapshot of one date."
    ],
    "applyIt": "Review the receivables and payables lines on the company balance sheet each quarter to track how much cash is tied up."
  },
  {
    "id": "fin-020",
    "title": "What Is Return on Investment (ROI)?",
    "department": "Finance",
    "topic": "Investment Decisions",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "HBS Online (Harvard Business School)",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/3tVTn7MCuRY",
    "isNew": true,
    "summary": "Defines anticipated and actual ROI, gives the standard formula, and shows how managers use it to justify, compare and review projects.",
    "takeaways": [
      "ROI = net profit ÷ cost of investment × 100.",
      "Estimate ROI before a project and measure it after.",
      "Use ROI to prioritise which initiatives to fund."
    ],
    "applyIt": "Require an anticipated-ROI line in every capex request, such as new tools, vehicles or software, and check actual ROI after six months."
  },
  {
    "id": "fin-021",
    "title": "Cash Flow vs. Profit: What's the Difference?",
    "department": "Finance",
    "topic": "Cash Flow",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "HBS Online (Harvard Business School)",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/lkEtgnhsV04",
    "isNew": true,
    "summary": "Explains why profit (on the income statement) and cash flow (on the cash flow statement) measure different things, and how a profitable company can still run short of cash.",
    "takeaways": [
      "Profit is revenue minus expenses; cash flow is money in and out.",
      "A profitable business can still have negative cash flow.",
      "Track both together to judge financial health."
    ],
    "applyIt": "On contracts with long client payment terms, report cash position next to profit so that 'profitable but cash-negative' sites are visible early."
  },
  {
    "id": "proc-017",
    "title": "Contract Management Masterclass: Roles, Responsibilities and Common Mistakes",
    "department": "Procurement",
    "topic": "Contract Management",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "CIPS (MENA)",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/iDalWOpOEkQ",
    "isNew": true,
    "summary": "A CIPS Middle East masterclass on contract management roles, stakeholder and supplier relationship management, the Kraljic matrix and the common mistakes that cause contracts to fail.",
    "takeaways": [
      "Contract success starts with a clear scope and must-have vs nice-to-have needs.",
      "Relationship management matters as much as the terms.",
      "Use the Kraljic matrix to decide how much effort each supplier needs."
    ],
    "applyIt": "Hold a kick-off with each major subcontractor at award to agree scope, KPIs and escalation routes before work starts."
  },
  {
    "id": "proc-018",
    "title": "Middle East Conflict: Implications for Supplier Relationships and Contracts",
    "department": "Procurement",
    "topic": "Contract Risk",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "CIPS",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/tmMXAsgfZVM",
    "isNew": true,
    "summary": "A CIPS expert panel, with Gulf-based lawyers and consultants, on force majeure versus hardship, price escalation, contract clauses and supplier relationships during the 2026 Middle East conflict.",
    "takeaways": [
      "Force majeure and hardship are different and treated differently by local law.",
      "Check how your contracts handle price escalation and supply disruption.",
      "Talk to suppliers early rather than waiting for disputes."
    ],
    "applyIt": "Review force majeure and price-escalation clauses in your top supplier and subcontractor contracts against UAE law."
  },
  {
    "id": "proc-019",
    "title": "The CIPS Contract Management Cycle",
    "department": "Procurement",
    "topic": "Contract Management",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "CIPS (Colin Linton, FCIPS)",
    "publishDate": "2026-11-06",
    "duration": "42:14",
    "embedUrl": "https://www.youtube.com/embed/mlpfHcN2opg",
    "isNew": true,
    "summary": "A CIPS podcast presenting the phases of the CIPS contract management cycle, why problems still arise on contracts, and how to maintain important contracts throughout their life.",
    "takeaways": [
      "Most contract problems are created before award.",
      "Important contracts need active management throughout their life.",
      "Contract managers need commercial, legal and relationship skills."
    ],
    "applyIt": "Map each major FM subcontract to the contract management cycle and name who owns each phase."
  },
  {
    "id": "proc-020",
    "title": "7 Tips for Successful Supplier Relationship Management",
    "department": "Procurement",
    "topic": "Supplier Management",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "CIPS",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/Kvb_MFw2UQY",
    "isNew": true,
    "summary": "CIPS shares seven practical tips for building productive, long-term relationships with key suppliers.",
    "takeaways": [
      "Segment suppliers and focus SRM effort on the critical ones.",
      "Agree shared goals and measures with key suppliers.",
      "Review performance regularly and openly."
    ],
    "applyIt": "Pick your five most critical subcontractors and schedule a quarterly performance review with each."
  },
  {
    "id": "proc-021",
    "title": "3 Ways to Improve Supplier Collaboration",
    "department": "Procurement",
    "topic": "Supplier Management",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "CIPS",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/jyY6Wosu8iw",
    "isNew": true,
    "summary": "CIPS outlines three ways buyers can move from transactional supplier dealings to genuine collaboration that improves resilience and value.",
    "takeaways": [
      "Share information and forecasts with key suppliers.",
      "Collaborate on cost and improvement ideas, not just price.",
      "Build trust through consistent, fair behaviour."
    ],
    "applyIt": "Share next quarter's planned PPM and project volumes with key material suppliers to secure better lead times and prices."
  },
  {
    "id": "hr-018",
    "title": "5 Key Success Factors of a Performance Appraisal",
    "department": "HR",
    "topic": "Performance Management",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "AIHR - Academy to Innovate HR",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/2Ww4KEnUhec",
    "isNew": true,
    "summary": "AIHR explains what a performance appraisal is and five best practices: use a clear outline, involve the employee, address difficult points early, give regular feedback and document carefully.",
    "takeaways": [
      "Employee participation drives buy-in and perceived fairness.",
      "Use a structured form for every appraisal.",
      "Document appraisals consistently for later decisions."
    ],
    "applyIt": "Introduce one standard appraisal form for all supervisors and require employee self-assessment before the meeting."
  },
  {
    "id": "hr-019",
    "title": "What Is Quiet Hiring? Gartner Expert Answers",
    "department": "HR",
    "topic": "Workforce Planning",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "Gartner (Emily Rose McRae)",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/-rrALHQOiAI",
    "isNew": true,
    "summary": "A Gartner senior research director explains quiet hiring, gaining skills by redeploying and upskilling staff or using contractors instead of adding headcount, and its pros and cons.",
    "takeaways": [
      "Quiet hiring fills skill gaps without new full-time headcount.",
      "Redeployed employees should be recognised and rewarded.",
      "Be transparent so staff don't fear sudden role changes."
    ],
    "applyIt": "Before approving a new hire, check whether an existing technician or engineer could be upskilled into the role."
  },
  {
    "id": "hr-020",
    "title": "Behavioral Interviewing and Values-Based Hiring (Honest HR)",
    "department": "HR",
    "topic": "Recruitment",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "SHRM (David Cohen)",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/c7qJJGjd4iI",
    "isNew": true,
    "summary": "SHRM's Honest HR podcast with author David Cohen on behavioural interviewing, values-based selection, panel interviews and the role and limits of AI in recruiting.",
    "takeaways": [
      "Define the behaviours behind your values before interviewing.",
      "Panel interviews with structured debriefs improve accuracy.",
      "Use AI to support, not replace, hiring judgement."
    ],
    "applyIt": "Agree three behaviours that reflect Al Bonian's values and build one behavioural question for each into supervisor interviews."
  },
  {
    "id": "hr-021",
    "title": "Rethinking Talent Management for Business Success",
    "department": "HR",
    "topic": "Talent Management",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "AIHR - Academy to Innovate HR",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/TnMEfR6Iv8U",
    "isNew": true,
    "summary": "An AIHR HR Dialogues episode with practitioners on applying talent-experience principles to modern talent management.",
    "takeaways": [
      "Design talent processes around the employee experience.",
      "Link talent management to business priorities.",
      "Use practitioner experience to test new approaches."
    ],
    "applyIt": "Map the career path for site supervisors to engineers and share it with high performers."
  },
  {
    "id": "qhse-018",
    "title": "ISO 45001: Demystifying the Standard",
    "department": "Quality & HSE",
    "topic": "ISO 45001",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "IOSH",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/ZO9uo7r62qo",
    "isNew": true,
    "summary": "An IOSH webinar walking through the structure and key requirements of ISO 45001, including context of the organisation, interested parties, leadership, worker participation and risk-based planning.",
    "takeaways": [
      "ISO 45001 shares the common structure of other ISO management systems.",
      "Top management must lead and evidence a safety culture.",
      "Worker consultation and participation are mandatory."
    ],
    "applyIt": "Run a gap analysis of the company's HSE system against ISO 45001 clauses 4–6 before any certification step."
  },
  {
    "id": "qhse-019",
    "title": "IOSH Model of Safety: Applying Cultural Maturity",
    "department": "Quality & HSE",
    "topic": "Safety Culture",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "IOSH",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/f6-uKeflziE",
    "isNew": true,
    "summary": "An IOSH session on applying cultural maturity principles to safety, and why leadership and culture determine whether systems and procedures succeed.",
    "takeaways": [
      "Systems only work when the culture supports them.",
      "Assess where your safety culture sits on a maturity scale.",
      "Leaders set the pace of cultural improvement."
    ],
    "applyIt": "Run a short safety culture survey across sites to find where behaviours lag behind written procedures."
  },
  {
    "id": "qhse-020",
    "title": "Introduction to Incident Investigation",
    "department": "Quality & HSE",
    "topic": "Incident Investigation",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "NEBOSH",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/ZoTep65qQWY",
    "isNew": true,
    "summary": "NEBOSH introduces the purpose and basic method of investigating workplace incidents to find causes and prevent recurrence.",
    "takeaways": [
      "Investigate to learn, not to blame.",
      "Look for immediate, underlying and root causes.",
      "Track corrective actions to completion."
    ],
    "applyIt": "Use one standard incident investigation form across all sites and review open actions monthly."
  },
  {
    "id": "qhse-021",
    "title": "Why ISO 45003 Matters: Psychological Health and Safety",
    "department": "Quality & HSE",
    "topic": "Wellbeing",
    "level": "Practitioner",
    "source": "Regulator",
    "channel": "Health and Safety Executive (Peter Kelly)",
    "publishDate": "2026-11-06",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/ZR_tLcd0UdY",
    "isNew": true,
    "summary": "Peter Kelly of the UK Health and Safety Executive explains the importance of ISO 45003 guidance on managing psychosocial risks at work.",
    "takeaways": [
      "Psychosocial risks such as workload and stress are part of H&S.",
      "ISO 45003 gives guidance within an ISO 45001 system.",
      "Manage psychosocial hazards like any other risk."
    ],
    "applyIt": "Add workload, heat stress and fatigue for site teams to the HSE risk register with clear controls."
  },
  {
    "id": "ai-014",
    "title": "How the Midterm Results Change AI",
    "department": "AI News",
    "topic": "AI Policy",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "The AI Daily Brief",
    "publishDate": "2026-11-06",
    "duration": "24:41",
    "embedUrl": "https://www.youtube.com/embed/rSzMJZEgYeU",
    "isNew": true,
    "summary": "The AI Daily Brief analyses what the 2026 US midterm results mean for AI regulation and data center build-out, drawing on Pew and exit-poll data, as the host's analysis.",
    "takeaways": [
      "Voter concern focused on data centers more than AI itself.",
      "More AI rules are likely as model capabilities grow.",
      "Infrastructure developers will need better deals with local communities."
    ],
    "applyIt": "Track how new US and UAE AI rules could affect the AI tools and cloud providers the company relies on.",
    "videoDate": "2026-11-04"
  },
  {
    "id": "ai-015",
    "title": "How to Deslopify Your AI",
    "department": "AI News",
    "topic": "AI at Work",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "The AI Daily Brief (with Niloofar Razi Howe)",
    "publishDate": "2026-11-06",
    "duration": "43:00",
    "embedUrl": "https://www.youtube.com/embed/QSZKZHeGZr4",
    "isNew": true,
    "summary": "An interview episode on spotting and removing low-quality, generic 'slop' from AI-generated work.",
    "takeaways": [
      "AI output needs human review before it is shared.",
      "Clear instructions and context reduce generic output.",
      "Quality checks should be built into AI workflows."
    ],
    "applyIt": "Set a rule that any AI-drafted client report or proposal is reviewed and edited by the responsible manager before sending.",
    "videoDate": "2026-11-02"
  },
  {
    "id": "ai-016",
    "title": "AI Won't Make Our Minds Useless, According to 400 Years of History",
    "department": "AI News",
    "topic": "AI and Work",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "The AI Daily Brief",
    "publishDate": "2026-11-06",
    "duration": "27:00",
    "embedUrl": "https://www.youtube.com/embed/9VHxHcU0uVY",
    "isNew": true,
    "summary": "The AI Daily Brief looks at past technology shifts to examine fears that AI will weaken human thinking skills.",
    "takeaways": [
      "New technologies have long raised fears about human skills.",
      "How tools are used matters more than the tools themselves.",
      "Keep people practising core judgement skills."
    ],
    "applyIt": "Pair AI tool adoption with training so staff still learn the underlying technical and commercial skills.",
    "videoDate": "2026-11-01"
  },
  {
    "publishDate": "2026-11-07",
    "isNew": true,
    "id": "fin-022",
    "title": "Budgeting and Forecasting: From Strategy to Execution",
    "department": "Finance",
    "topic": "Budgeting & Forecasting",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "Corporate Finance Institute",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/HPDBgabluLM",
    "summary": "A CFI course module that links budgets to strategy, covers budgeting methods and forecasting techniques, and explains variance analysis between budget and forecast.",
    "takeaways": [
      "Link the budget to the business plan and strategic targets so it funds execution.",
      "Build forecasts from explicit drivers and compare them with the budget through variance analysis.",
      "Track a small set of financial and non-financial KPIs to test whether the budget is working."
    ],
    "applyIt": "Use driver-based forecasts and monthly variance reviews on Al Bonian FM maintenance contracts to catch cost overruns early."
  },
  {
    "publishDate": "2026-11-07",
    "isNew": true,
    "id": "lead-019",
    "title": "In Uncertain Times, Ask This Question Before You Make a Decision",
    "department": "Leadership",
    "topic": "Decision-Making",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "Harvard Business Review",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/P9agz-KjGww",
    "summary": "Decisive founder Cheryl Strauss Einhorn argues that persistent volatility calls for resilience-focused decisions and offers a guiding question leaders can ask before acting.",
    "takeaways": [
      "Treat volatility as a lasting condition rather than something to wait out.",
      "Judge decisions by whether they build systems that can flex and endure, not only by fast recovery.",
      "Test a decision against a concrete case, as the speaker does with a COO dealing with a repeatedly late vendor."
    ],
    "applyIt": "When Al Bonian FM faces repeated subcontractor delays, use the same question to choose between a short-term fix and a resilient supply arrangement."
  },
  {
    "publishDate": "2026-11-07",
    "isNew": true,
    "id": "hr-022",
    "title": "From Orientation to Connection: A New Approach to Onboarding",
    "department": "HR",
    "topic": "Onboarding",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "SHRM",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/kbZHbHKV2M8",
    "summary": "A SHRM Honest HR episode in which Vanderbilt University staff describe redesigning onboarding from an administrative checklist into a structured experience that sets new hires up for engagement and retention.",
    "takeaways": [
      "Treat onboarding as a planned process that drives engagement and retention, not a paperwork checklist.",
      "Have systems, access and the workspace ready so new hires can start the real work early.",
      "Build connection and culture into the first days so new staff ask fewer basic questions."
    ],
    "applyIt": "Have supervisors at Al Bonian FM prepare access, PPE and a site induction before a new technician starts, so they can join live maintenance work quickly."
  },
  {
    "publishDate": "2026-11-07",
    "isNew": true,
    "id": "bd-018",
    "title": "How to Progress Customers Through the B2B Sales Funnel",
    "department": "Business Development",
    "topic": "B2B Sales Funnel",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Gartner",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/2CUg-9ucDng",
    "summary": "A Gartner sales-practice talk argues that B2B buyers complete six jobs across digital and in-person channels in a looping, non-linear path, so sellers should supply the information buyers need for each job.",
    "takeaways": [
      "Map the jobs buyers must complete and provide the specific information for each one.",
      "Expect buyers to revisit earlier stages rather than move in a straight line through the funnel.",
      "Align marketing and sales around buyer-enablement information that works in both digital and in-person channels."
    ],
    "applyIt": "Structure Al Bonian FM proposals and client pitches around what property owners, developers and government bodies need to decide at each stage."
  },
  {
    "publishDate": "2026-11-07",
    "isNew": true,
    "id": "it-017",
    "title": "Windows Server administration AZ-800 | Episode 4",
    "department": "IT",
    "topic": "Server Administration",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Microsoft Learn",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/jFssZjDzuuk",
    "summary": "A Microsoft Learn episode covering secure Windows Server administration, the main admin tools, post-installation configuration and Just Enough Administration.",
    "takeaways": [
      "Use secure administration practices and suitable tools when managing Windows Server remotely.",
      "Complete post-installation configuration as a defined step before a server goes into service.",
      "Use Just Enough Administration to limit privileged access to the tasks each role needs."
    ],
    "applyIt": "Apply least-privilege remote administration and documented post-install builds to the on-premise servers that support Al Bonian FM's CAFM and Zoho Creator integrations."
  },
  {
    "publishDate": "2026-11-07",
    "isNew": true,
    "id": "fm-023",
    "title": "Shifting from a reactive 'firefighting' culture to a proactive one",
    "department": "Facilities Management",
    "topic": "Proactive Maintenance Culture",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "Reliabilityweb TV",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/bAUQ_VVLVps",
    "summary": "A Reliabilityweb TV discussion on moving an asset management team from reactive firefighting toward proactive maintenance, including how to win buy-in from a younger team.",
    "takeaways": [
      "Diagnose whether the team is in firefighting mode before setting proactive targets.",
      "Build buy-in with the team, especially newer staff who have not yet worked with asset management concepts.",
      "Name the roadblocks openly, then work through them one at a time."
    ],
    "applyIt": "Use the same diagnosis across Al Bonian FM site teams to move technicians from reactive call-outs toward planned preventive work tracked in CAFM."
  },
  {
    "publishDate": "2026-11-07",
    "isNew": true,
    "id": "pv-024",
    "title": "Detailed Home Inspection According to a Standard of Practice",
    "department": "Property Inspection & Valuation",
    "topic": "Inspection Standards of Practice",
    "level": "Foundation",
    "format": "Process",
    "source": "Professional Body",
    "channel": "InterNACHI",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/9fsjyXLg76o",
    "summary": "An InterNACHI class that walks through a full residential inspection against the InterNACHI Standards of Practice, starting with the roof and using the standard as the outline for reporting.",
    "takeaways": [
      "Use a recognised standard of practice as the minimum scope and as the outline for the report.",
      "Inspect in a fixed sequence so every component in scope is covered and recorded.",
      "Report only what is visually observed, and state clearly what the inspection did not cover."
    ],
    "applyIt": "Use a standards-based checklist with visual-only reporting for Al Bonian FM snagging and property inspection reports so defects are recorded consistently."
  },
  {
    "id": "ai-017",
    "title": "Companies Are Spending 5x More on AI Now",
    "department": "AI News",
    "topic": "Enterprise AI Spend",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "The AI Daily Brief",
    "publishDate": "2026-11-08",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/INC89yHLexM",
    "isNew": true,
    "summary": "The AI Daily Brief walks through Menlo Ventures' fourth State of Enterprise AI report, which estimates enterprise AI spend at almost $177 billion in 2026 as agents shift budgets from seats to tokens. The episode's headlines also cover the AI stock drawdown, doubts around the Anthropic IPO and METR's report on faster AI-led research.",
    "takeaways": [
      "Menlo estimates average spend per enterprise rose about 4.7x, roughly 2.5 times what companies had budgeted.",
      "Budgets built around per-seat pricing are colliding with per-token costs driven by AI agents.",
      "Buyers are choosing frontier-model capability over cost, with frontier models taking 63% of spend."
    ],
    "applyIt": "Review how Al Bonian FM budgets for AI tools and set usage-based cost tracking before rolling out any AI agents across the team.",
    "videoDate": "2026-11-06"
  },
  {
    "id": "lead-020",
    "title": "Why Optimistic Leaders Get Better Results",
    "department": "Leadership",
    "topic": "Resilient Optimism",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Harvard Business Review",
    "publishDate": "2026-11-09",
    "duration": "27:19",
    "embedUrl": "https://www.youtube.com/embed/YLN930f7RE0",
    "isNew": true,
    "summary": "Michelle Gielan, author of Resilient Optimism, tells HBR that rational optimism means assessing reality realistically while believing your behaviour makes a difference. She cites an 11-year data set of more than 25,000 business professionals linking high optimism to higher productivity, stronger engagement and lower burnout.",
    "takeaways": [
      "Rational optimism combines a realistic read of the situation with the belief that your next action matters.",
      "Highly optimistic professionals were reported as three times more likely to be highly engaged and five times less likely to burn out.",
      "Managers can build it by being mindful of the information they take in and by giving specific recognition and gratitude to the team."
    ],
    "applyIt": "Open your next Al Bonian FM site team briefing by naming the real operational problem and then asking each supervisor for one action they will take this week."
  },
  {
    "id": "ai-018",
    "title": "How a Data Center Slowdown Benefits Big Tech",
    "department": "AI News",
    "topic": "AI Infrastructure and Policy",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "The AI Daily Brief",
    "publishDate": "2026-11-09",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/ssEWGHjKHTM",
    "isNew": true,
    "summary": "The AI Daily Brief argues that a policy-driven slowdown in US data center build-out after the midterm elections may help hyperscalers lower capex forecasts without a market crash. It notes that Google, Meta, Amazon and Microsoft all came in under their Q3 capex targets, citing construction delays.",
    "takeaways": [
      "Markets rose after the midterms, with the S&P 500 up 1.6% and the Mag 7 adding about a trillion dollars in value.",
      "Supply-chain, labour and power constraints were already slowing data center construction before any new regulation.",
      "Democratic candidates are pushing data centers to pay for their own energy, recycle water and get community consent."
    ],
    "applyIt": "Ask Al Bonian FM's IT lead to check whether any planned AI or cloud tool purchases depend on vendors exposed to data center capacity or pricing changes.",
    "videoDate": "2026-11-05"
  }
];
