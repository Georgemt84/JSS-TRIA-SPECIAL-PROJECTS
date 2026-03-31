import Sidebar from '../components/Sidebar'

const sidebarWidgets = [
  {
    title: 'Latest Health News',
    items: [
      { label: 'New Treatment Shows Promise in Clinical Trials', href: '#', time: '2 hours ago' },
      { label: 'WHO Releases New Guidelines on Nutrition', href: '#', time: '4 hours ago' },
      { label: 'Mental Health Awareness Campaign Launches', href: '#', time: '6 hours ago' },
      { label: 'Exercise Study Provides New Insights', href: '#', time: '1 day ago' },
    ],
  },
]

export default function Health() {
  return (
    <main className="container main-content">
      <section className="featured-section">
        <h1>Health News</h1>
        <h4>Stay informed with the latest health news, medical breakthroughs, and wellness tips from around the world.</h4>

        <section className="news-article" aria-labelledby="article-title-gbs">
          <article className="post">
            <header>
              <div className="article-quote-layout">
                <figure className="article-media">
                  <img src="/ISSAD PROF ANNE BEATRICE KIHARA.JPG" alt="Professor Anne Beatrice Kihara speaking in Nairobi" />
                  <figcaption><i>Professor Anne Beatrice Kihara, President of the International Federation of Gynaecology and Obstetrics (FIGO)</i></figcaption>
                </figure>
                <blockquote>"Kenya is yet to reach the sustainable development goals, which speak of maternal mortality as less than 70,000, and newborn mortality at less than 12,000," Prof. Kihara noted. "Unfortunately, we are still off track."</blockquote>
              </div>
              <div className="article-meta-line">
                <p className="dateline">Nairobi, Kenya | February 23, 2026</p>
                <p className="byline">By George Mutua</p>
              </div>
            </header>
            <div className="post-content">
              <p>The urgent need for maternal vaccination against Group B Streptococcus (GBS) took centre stage in Nairobi as Professor Anne Beatrice Kihara, President of the International Federation of Gynaecology and Obstetrics (FIGO), delivered a powerful keynote address calling for accelerated action on maternal and newborn mortality ahead of a major global conference set for the Kenyan capital next year.</p>
              <p>Speaking as the keynote speaker at the fourth conference on maternal immunisation, Prof. Kihara emphasised the critical need to accelerate the reduction of maternal and newborn deaths through an initiative called "Every Woman, Every Newborn, Everywhere."</p>
              <p>The conference brings together world leaders in Group B Streptococcus research, vaccine development, and public health to discuss the rollout of a global maternal vaccine against GBS. This year's conference is chaired by Dr. Hellen Barsosio, Clinical Research Scientist at the Kenya Medical Research Institute and Liverpool School of Tropical Medicine (KEMRI-LSTM) Collaboration.</p>
              <p>"Today's conversation, we are looking at a bacteria called Group B Streptococcus," Prof. Kihara explained. "Group B Streptococcus colonizes the reproductive tract of the mother. And in so doing, it can have effects on the mother and effects on the baby. For the baby, the baby may be born stillborn."</p>
              <p>The statistics are alarming — an estimated 18–20 million women globally carry GBS each year. The bacteria is responsible for approximately 400,000 cases of invasive disease annually in infants, including sepsis and meningitis, and is linked to an estimated 91,000 infant deaths and 46,200 stillbirths worldwide.</p>
              <p>"The baby may have to be delivered prematurely with adverse neurological problems because of infections that even include infections of the brain," Prof. Kihara warned. "So we must begin to really look at the epidemiology of the disease burden."</p>
              <h5>Integrated Approach Needed</h5>
              <p>Prof. Kihara emphasized that achieving maternal health goals requires collaboration across medical disciplines.</p>
              <p><i>"We need to put efforts together, the midwives, the gynaecologist, the paediatrician, the neonatologist, the physician. We must come together," she said.</i></p>
              <p>Key priorities identified include making every pregnancy planned to avoid risks of unsafe abortions, ensuring sexually active individuals have access to family planning and contraception, and implementing the WHO-recommended eight contact visits during pregnancy.</p>
              <p>A major theme emerging from the conference is the need for Kenya to develop its own context-specific maternal vaccination guidelines through systematic data collection and establishing data repositories. "Last week we were busy trying to strengthen the data repository," Prof. Kihara revealed.</p>
            </div>
          </article>
        </section>

        <div className="category-grid">
          <article className="article-card">
            <img src="/ISSAD PROF ANNE BEATRICE KIHARA.JPG" alt="Professor Anne Beatrice Kihara" />
            <h3><a href="#">Global Health Leaders Converge in Nairobi as FIGO President Prof. Kihara Anne Beatrice Calls for Urgent Action on Maternal GBS Vaccination</a></h3>
            <p className="meta">By George Mutua | February 23, 2026</p>
            <p className="excerpt">The urgent need for maternal vaccination against Group B Streptococcus took centre stage in Nairobi as Prof. Anne Beatrice Kihara called for faster action on maternal and newborn mortality.</p>
          </article>
          <article className="article-card">
            <img src="/9K7A7502.JPG" alt="Health innovation" />
            <h3><a href="#">Health Innovations: What to Expect</a></h3>
            <p className="meta">By Dr. Alex Brown | Mar 10, 2024</p>
            <p className="excerpt">Explore the latest innovations in healthcare technology and how they are set to revolutionize patient care and treatment options in the coming years.</p>
          </article>
          <article className="article-card">
            <img src="/imlu.png" alt="Mediterranean diet" />
            <h3><a href="#">New Study Reveals Benefits of Mediterranean Diet</a></h3>
            <p className="meta">By Dr. Sarah Wilson | Feb 28, 2024</p>
            <p className="excerpt">Recent research highlights the significant health benefits of the Mediterranean diet for heart health and longevity.</p>
          </article>
          <article className="article-card">
            <img src="/0Y2A0133.jpg" alt="Fitness trends" />
            <h3><a href="#">2024 Fitness Trends You Should Know</a></h3>
            <p className="meta">By Robert Martinez | Mar 5, 2024</p>
            <p className="excerpt">Discover the top fitness and wellness trends that are shaping how people stay healthy and active this year.</p>
          </article>
        </div>
      </section>

      <Sidebar widgets={sidebarWidgets} />
    </main>
  )
}
