// In-memory example data for the frontend (no server calls)
let _jobs = [
  {
    id: 'job_1',
    title: 'Senior Audit Associate',
    company: 'Veritas Accounting',
    location: 'Mumbai',
    ctc: 1800000,
    experience: 3,
    skills: ['Audit', 'IFRS', 'Excel'],
    description: 'Lead statutory audits for mid-market clients across manufacturing and services.',
    verified: true,
  },
  {
    id: 'job_2',
    title: 'Tax Compliance Analyst',
    company: 'Aegis Tax',
    location: 'Bengaluru',
    ctc: 1200000,
    experience: 1,
    skills: ['GST', 'TDS', 'Income Tax'],
    description: 'Handle monthly GST and TDS compliance for a portfolio of clients.',
    verified: false,
  },
  {
    id: 'job_3',
    title: 'Financial Reporting Specialist',
    company: 'ClearBooks',
    location: 'Remote',
    ctc: 1500000,
    experience: 2,
    skills: ['Reporting', 'SAP', 'Excel'],
    description: 'Prepare consolidated financial statements and support month-end close.',
    verified: true,
  },
  {
    id: 'job_4',
    title: 'ERP Implementation Consultant',
    company: 'BlueLedger',
    location: 'Delhi',
    ctc: 2000000,
    experience: 4,
    skills: ['ERP', 'Testing', 'Process Design'],
    description: 'Drive ERP rollouts and tax/finance integrations for large clients.',
    verified: false,
  },
]

function parseQuery(qs) {
  if (!qs) return {}
  return qs
    .split('&')
    .map((p) => p.split('='))
    .reduce((acc, [k, v]) => {
      acc[k] = v === undefined ? true : decodeURIComponent(v)
      return acc
    }, {})
}

export async function fetchJobs(query = '') {
  const q = parseQuery(query)
  let arr = [..._jobs]
  if (q.verified === 'true' || q.verified === true) arr = arr.filter((j) => j.verified)
  if (q.skills) arr = arr.filter((j) => (j.skills || []).join(',').toLowerCase().includes(q.skills.toLowerCase()))
  if (q.q) {
    const term = q.q.toLowerCase()
    arr = arr.filter((j) => (j.title + ' ' + j.company + ' ' + (j.description || '')).toLowerCase().includes(term))
  }
  if (q.minCtc) arr = arr.filter((j) => Number(j.ctc) >= Number(q.minCtc))
  if (q.experience) arr = arr.filter((j) => Number(j.experience) >= Number(q.experience))
  // Keep ordering stable
  return Promise.resolve(arr)
}

export async function postJob(payload) {
  const created = {
    ...payload,
    id: 'job_' + Date.now().toString(36) + Math.floor(Math.random() * 1000),
    verified: false,
  }
  if (typeof created.skills === 'string') {
    created.skills = created.skills
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  }
  _jobs = [created, ..._jobs]
  return Promise.resolve(created)
}

export async function verifyJob(id) {
  _jobs = _jobs.map((j) => (j.id === id ? { ...j, verified: true } : j))
  return Promise.resolve({ ok: true })
}

export async function fetchCAs(){
  return Promise.resolve([])
}
export async function postCA(payload){
  return Promise.resolve(payload)
}
export async function fetchArticles(){
  return Promise.resolve([])
}
export async function postArticle(payload){
  return Promise.resolve(payload)
}
