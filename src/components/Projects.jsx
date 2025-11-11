import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Autonomous Research Agent',
    desc: 'A multi-agent system that plans, searches, and synthesizes reports using LLMs and web tools.',
    tags: ['LLMs', 'Agents', 'Search', 'LangChain'],
    link: '#'
  },
  {
    title: 'Real-time Vision Quality Control',
    desc: 'Edge-deployed transformer for defect detection with streaming telemetry and alerting.',
    tags: ['Vision', 'Transformers', 'Edge AI', 'MLOps'],
    link: '#'
  },
  {
    title: 'Personalized Retrieval Chat',
    desc: 'RAG pipeline with hybrid search, re-ranking, and evaluation harness for quality tracking.',
    tags: ['RAG', 'Vector DB', 'FastAPI', 'Evaluation'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: i * 0.05 }}
          className="group rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all block"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>
            </div>
            <ExternalLink className="h-5 w-5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-wrap gap-2">
            {p.tags.map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200">
                {t}
              </span>
            ))}
          </div>
        </motion.a>
      ))}
    </div>
  )
}
