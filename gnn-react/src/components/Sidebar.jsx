export default function Sidebar({ widgets }) {
  return (
    <aside className="sidebar">
      {widgets.map((widget, i) => (
        <div className="sidebar-widget" key={i}>
          <h3 className="widget-title">{widget.title}</h3>
          <ul className={widget.type === 'topics' ? 'topic-list' : 'latest-news-list'}>
            {widget.items.map((item, j) => (
              <li key={j}>
                <a href={item.href || '#'}>{item.label}</a>
                {item.time && <span className="news-time">{item.time}</span>}
                {item.count !== undefined && <span className="topic-count">{item.count}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
