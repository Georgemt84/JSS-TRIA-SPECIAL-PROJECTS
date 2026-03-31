import Sidebar from '../components/Sidebar'

const sidebarWidgets = [
  {
    title: 'Latest Business News',
    items: [
      { label: 'Tech Startup Valuation Reaches $1 Billion', href: '#', time: '2 hours ago' },
      { label: 'Stock Market Hits New Heights', href: '#', time: '4 hours ago' },
      { label: 'Major Merger Announced', href: '#', time: '6 hours ago' },
      { label: 'Economic Report Shows Growth', href: '#', time: '1 day ago' },
    ],
  },
]

export default function Business() {
  return (
    <main className="container main-content">
      <section className="featured-section">
        <h1>Business News</h1>
        <p>Latest updates on finance, markets, and economic trends.</p>

        <div className="category-grid">
          <article className="article-card">
            <img src="/0Y2A0133.jpg" alt="Business news" />
            <h3><a href="#">Economic Growth Trends in 2024</a></h3>
            <p className="meta">By Jane Smith | Feb 15, 2024</p>
            <p className="excerpt">An in-depth analysis of the economic growth trends expected in 2024, including key sectors driving the economy and potential challenges ahead.</p>
          </article>

          <article className="article-card">
            <img src="/CKK01797.jpg" alt="Market analysis" />
            <h3><a href="#">Stock Market Hits All-Time High</a></h3>
            <p className="meta">By John Davis | Mar 1, 2024</p>
            <p className="excerpt">The global stock markets continue to reach new peaks, with tech and renewable energy sectors leading the charge.</p>
          </article>

          <article className="article-card">
            <img src="/imlu.png" alt="Investment" />
            <h3><a href="#">Smart Investment Strategies for 2024</a></h3>
            <p className="meta">By Michael Johnson | Feb 20, 2024</p>
            <p className="excerpt">Expert advice on diversifying your portfolio and making informed investment decisions in today's dynamic market.</p>
          </article>
        </div>
      </section>

      <Sidebar widgets={sidebarWidgets} />
    </main>
  )
}
