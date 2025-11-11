import { Cpu, Database, Brain, LineChart, Code2, Boxes } from 'lucide-react'

const items = [
  { icon: Brain, title: 'Machine Learning', desc: 'Supervised/unsupervised learning, model evaluation, feature engineering.' },
  { icon: Cpu, title: 'Deep Learning', desc: 'Computer Vision, NLP, LLMs, transformers, diffusion, prompt engineering.' },
  { icon: Database, title: 'Data & MLOps', desc: 'Pipelines, orchestration, versioning, monitoring, deployment.' },
  { icon: Code2, title: 'Backend Systems', desc: 'FastAPI, microservices, vector databases, streaming APIs.' },
  { icon: Boxes, title: 'Product & Prototyping', desc: 'Rapid iterations, UX for AI, evaluation harnesses, A/B testing.' },
  { icon: LineChart, title: 'Analytics', desc: 'Experiment tracking, dashboards, business metrics alignment.' },
]

export default function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="group rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600/15 to-purple-600/15 text-blue-700 dark:text-cyan-300 flex items-center justify-center mb-4">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
        </div>
      ))}
    </div>
  )
}
