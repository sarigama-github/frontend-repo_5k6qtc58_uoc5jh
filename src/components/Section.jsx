export default function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-white/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.2em] text-blue-600/80 dark:text-cyan-300/80 mb-3">{eyebrow}</p>
        )}
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{title}</h2>
        )}
        {description && (
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-10">{description}</p>
        )}
        {children}
      </div>
    </section>
  )
}
