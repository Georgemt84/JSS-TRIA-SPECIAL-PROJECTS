import Sidebar from '../components/Sidebar'

const sidebarWidgets = [
  {
    title: 'Latest Lifestyle News',
    items: [
      { label: 'New Art Exhibition Opens Downtown', href: '#', time: '2 hours ago' },
      { label: 'Home Decor Trends for Spring', href: '#', time: '4 hours ago' },
      { label: 'Wellness Retreat Recommendations', href: '#', time: '6 hours ago' },
      { label: 'Cultural Festival This Weekend', href: '#', time: '1 day ago' },
    ],
  },
]

export default function Lifestyle() {
  return (
    <main className="container main-content">
      <section className="featured-section">
        <h1>Lifestyle</h1>
        <p>Explore travel destinations, food trends, fashion, and wellness lifestyle content.</p>

        <div className="category-grid">
          <article className="article-card">
            <img src="/CKK01797.jpg" alt="Travel" />
            <h3><a href="#">Top 10 Travel Destinations for 2024</a></h3>
            <p className="meta">By Travel Writer Sarah | Feb 18, 2024</p>
            <p className="excerpt">Discover the most exciting travel destinations to visit this year, from exotic beaches to cultural landmarks.</p>
          </article>

          <article className="article-card">
            <img src="/0Y2A0133.jpg" alt="Food" />
            <h3><a href="#">Trending Food Recipes This Season</a></h3>
            <p className="meta">By Chef Emma | Mar 1, 2024</p>
            <p className="excerpt">Learn about the latest food trends and try out some delicious recipes that are taking over social media.</p>
          </article>

          <article className="article-card">
            <img src="/9K7A7502.JPG" alt="Fashion" />
            <h3><a href="#">Spring Fashion Trends to Try Now</a></h3>
            <p className="meta">By Fashion Editor Nicole | Feb 28, 2024</p>
            <p className="excerpt">Discover the latest spring fashion trends and tips on how to incorporate them into your wardrobe.</p>
          </article>
        </div>
      </section>

      <Sidebar widgets={sidebarWidgets} />
    </main>
  )
}
