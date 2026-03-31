import Sidebar from '../components/Sidebar'

const sidebarWidgets = [
  {
    title: 'Latest Sports News',
    items: [
      { label: 'Soccer: Local Team Wins Championship', href: '#', time: '2 hours ago' },
      { label: 'Rugby: National Team Defeats Rivals', href: '#', time: '4 hours ago' },
      { label: 'Cricket: Player Scores Century', href: '#', time: '6 hours ago' },
      { label: 'Motorsport: Driver in Pole Position', href: '#', time: '1 day ago' },
    ],
  },
]

export default function Sports() {
  return (
    <main className="container main-content">
      <section className="featured-section">
        <h1>Sports News</h1>
        <p>Coverage of football, basketball, athletics, and all major sports worldwide.</p>

        <div className="category-grid">
          <article className="article-card">
            <img src="/CKK01797.jpg" alt="Soccer" />
            <h3><a href="#">National Soccer Team Qualifies for World Cup</a></h3>
            <p className="meta">By Sports Editor | Feb 20, 2024</p>
            <p className="excerpt">The national team has secured its place in the upcoming World Cup after an impressive qualifying campaign.</p>
          </article>

          <article className="article-card">
            <img src="/9K7A7502.JPG" alt="Basketball" />
            <h3><a href="#">Basketball Championship Finals Approach</a></h3>
            <p className="meta">By Marcus Thompson | Mar 2, 2024</p>
            <p className="excerpt">Two teams advance to the finals in an exciting upset, setting up for a thrilling championship match.</p>
          </article>

          <article className="article-card">
            <img src="/0Y2A0133.jpg" alt="Athletics" />
            <h3><a href="#">Olympic Athletes Set New Records</a></h3>
            <p className="meta">By Elena Rodriguez | Mar 8, 2024</p>
            <p className="excerpt">Several world records were broken this week as athletes continue to push the limits of human performance.</p>
          </article>
        </div>
      </section>

      <Sidebar widgets={sidebarWidgets} />
    </main>
  )
}
