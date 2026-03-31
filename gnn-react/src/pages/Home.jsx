import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const sidebarWidgets = [
  {
    title: 'Latest News',
    items: [
      { label: 'UDA Issues Certificates to By-Election Candidates, Lauds Digital Nomination Process', href: '#', time: 'March 31, 2026' },
      { label: "KPC Foundation and eKitabu Back Kenya's Isolated Creatives", href: 'https://waristop.blogspot.com/2026/03/kpc-foundation-and-eketabu-forge-new.html', time: 'March 29, 2026' },
      { label: 'New Tech Startup Valuation Reaches $1 Billion', href: '#', time: '2 hours ago' },
      { label: 'National Soccer Team Qualifies for World Cup', href: '#', time: '4 hours ago' },
      { label: 'Stock Market Hits All-Time High', href: '#', time: '6 hours ago' },
    ],
  },
  {
    title: 'Popular Topics',
    type: 'topics',
    items: [
      { label: 'Politics', count: 42 },
      { label: 'Technology', count: 38 },
      { label: 'Entertainment', count: 31 },
      { label: 'Sports', count: 29 },
      { label: 'Health', count: 27 },
      { label: 'Business', count: 24 },
    ],
  },
  {
    title: 'Upcoming Events',
    items: [
      { label: 'International Food Festival - Nairobi', href: '#', time: 'March 15, 2026' },
      { label: 'Tech Innovation Conference', href: '#', time: 'March 22, 2026' },
      { label: 'Annual Marathon for Charity', href: '#', time: 'April 5, 2026' },
    ],
  },
]

export default function Home() {
  return (
    <main className="container main-content">
      <Sidebar widgets={sidebarWidgets} />

      <section className="featured-section">
        <h2>Featured Articles</h2>

        {/* Article 1 – UDA */}
        <section className="news-article" aria-labelledby="article-title-uda">
          <article className="post">
            <header>
              <h1 id="article-title-uda">UDA Issues Certificates to By-Election Candidates, Lauds Digital Nomination Process</h1>
              <div className="article-quote-layout">
                <figure className="article-media">
                  <img src="/UDA certificates.jpg" alt="UDA officials issue nomination certificates to by-election candidates" />
                  <figcaption className="byline">
                    UDA SECRETARY GENERAL<br />Hon. Sen. Hassan Omar<br />MP EALA, presenting certificates to nominees.
                  </figcaption>
                </figure>
                <blockquote>
                  <i>"So far, we have not received any complaint for the dispute of this election. That means the exercise that you did was beyond reproach."</i> Anthony Mwaura said.
                </blockquote>
              </div>
              <p className="dateline">NAIROBI, March 31, 2026, By George Mutua</p>
            </header>
            <div className="post-content">
              <p>The United Democratic Alliance (UDA) has officially issued nomination certificates to its candidates for the upcoming by-elections, with party leaders praising the recently concluded primaries as a model of transparency, fairness, and technological innovation.</p>
              <p>During a ceremony at the party's headquarters, National Election Board official Wycliffe Ndwati said the event marked the successful culmination of a nomination exercise conducted over the weekend. <i>"We are gathered here today for a ceremony to issue certificates to our candidates who won the various party primaries in the just concluded by-election nominations,"</i> Ndwati said.</p>
              <p>National Election Board Chairman Anthony Mwaura underscored the credibility of the process, revealing that the party had not received any formal disputes regarding the outcome. <i>"So far, we have not received any complaint for the dispute of this election. That means the exercise that you did was beyond reproach,"</i> he stated.</p>
              <p>Mwaura described the nominations as a milestone for the party, attributing the smooth conduct to the adoption of digital technology in managing the electoral process. He expressed confidence in the candidates' prospects, adding, <i>"As you look at them today, we believe that by May 14th they will be elected as Members of Parliament and Members of County Assembly."</i></p>
              <p>Senior party leaders highlighted the growing strength of UDA, noting its consistent success in previous by-elections where it won all available seats. One leader urged the aspirants to remain united, praising the National Election Board for conducting credible nominations. <i>"We are not in the business of losing elections. We are grateful to all those who participated and accepted the outcome,"</i> he said, calling on those who lost to rally behind the winners.</p>
              <p>The leader further called for political maturity, advising against airing grievances on social media. <i>"In Kenya, we must create a culture where we concede elections with integrity and honour. Your anger should be expressed through the ballot, not social media,"</i> he said.</p>
              <p>Another speaker commended the party for embracing electronic voting, calling it a landmark achievement in the country's political landscape. <i>"We are the first political party in this country to vote electronically in nominations. This ensures that our candidates truly reflect the will of the people,"</i> he said, noting that the system now uses ID scanning technology to verify voters and reduce errors.</p>
              <p>He added that the advancements had strengthened confidence in the party's processes, positioning UDA as a benchmark for other political parties. <i>"We can even have other countries come to benchmark on how to conduct nominations,"</i> he remarked.</p>
              <p>The official urged successful candidates to remain loyal to the party's manifesto once elected, stressing collective responsibility in governance. <i>"When you belong to a political party and are elected, you are duty-bound to support its policies. If your ideas conflict with the manifesto, go with the manifesto,"</i> he said, adding that UDA remains focused on fulfilling its pledges on housing, universal health coverage, and food security ahead of the 2027 General Election.</p>
              <p>Candidates were also encouraged to unite their supporters and former rivals to strengthen the party ahead of the by-elections. <i>"In a political contest, you will always have opponents. But once you win, bring them on board. We are now one team,"</i> one official said.</p>
              <p>Leaders expressed optimism about the future of digital elections, with one official noting, <i>"I am hopeful that in the coming years, Kenyans will be able to vote from their homes, with results announced the same day."</i></p>
              <p>The ceremony concluded with the presentation of certificates to the successful candidates, officially clearing them to fly the party's ticket in the upcoming by-elections. Party officials expressed confidence that the candidates would replicate the party's past electoral successes, citing strong grassroots support and the integrity of the new digital nomination system.</p>
            </div>
          </article>
        </section>

        {/* Article 2 – KPC & eKitabu */}
        <section className="news-article5" aria-labelledby="article-title-kpc">
          <article className="post">
            <header>
              <h3 id="article-title-kpc">KPC Foundation and eKitabu Forge a New Blueprint to Rescue Kenya's Isolated Creatives</h3>
              <div className="article-quote-layout">
                <figure className="article-media article-media-kpc-hero">
                  <img src="/Rachel Gathoni Kenya Pipeline Company Managing Trustee and Foundation Manager.jpeg" alt="Rachel Gathoni, Kenya Pipeline Company Managing Trustee and Foundation Manager" />
                  <figcaption className="byline">Rachel Gathoni, Kenya Pipeline Company Managing Trustee and Foundation Manager</figcaption>
                </figure>
                <blockquote>"We need to push so that even as Kenyans, we can be the first consumers of our art, our books, so that we can keep this sector alive."</blockquote>
              </div>
              <p className="dateline">Ngecha, Kiambu, Kenya, March 29, 2026: By George Mutua</p>
            </header>
            <div className="post-content">
              <p>In the shadow of a bustling Nairobi that often races past its art, a quiet but determined revolution is taking root. At the Mlango Farm artistic community in Ngecha, the Kenya Pipeline Company (KPC) Foundation has launched the <i>Sanaa</i> initiative — a deliberate, structured attempt to diagnose and treat the chronic isolation and market fragmentation that have long plagued Kenya's writers, visual artists, and musicians.</p>
              <p>The diagnosis emerging from these conversations was stark. Rachel Gathoni, the Kenya Pipeline Company Managing Trustee and Foundation Manager, described a sector suffering from a profound lack of cohesion. <i>"In the creative space, since you kind of create alone, there is isolation and fragmentation,"</i> she explained. <i>"Everyone is doing their thing and trying to access their market their way. Access to markets is a challenge. Platforms are a challenge."</i></p>
              <p>Central to this push is a powerful new partnership between the KPC Foundation and <i>eKitabu</i>, a forward-thinking publisher that operates under the Mvua Press imprint. Speaking at the event, <i>eKitabu's</i> CEO, Will Clurman, made it clear that his organization is not interested in cosmetic gestures. <i>"We don't want to do things that are just cosmetic,"</i> Clurman asserted. <i>"We want to do things that try to address the structural challenges that artists face."</i></p>

              <div className="article-quote-layout article-quote-layout-inline">
                <figure className="article-media article-media-clurman">
                  <img src="/Will Clurman CEO eKitabu.jpeg" alt="eKitabu CEO Will Clurman speaking at the event" />
                  <figcaption className="byline"><i>eKitabu</i> CEO, Will Clurman (pictured).</figcaption>
                </figure>
                <blockquote><i>"The only path worth taking is a path with heart. Heart takes work. It takes time. It takes commitment."</i> Clurman said.</blockquote>
              </div>

              <p>The threat of generative AI loomed over discussions. However, Rachel Gathoni offered a measured perspective, arguing that technology cannot replicate the intrinsic human desire for authentic connection. <i>"Technology will not replace what we love from humans, because sometimes you want something because it is a human who has made it,"</i> she said.</p>
              <p>Rachel Gathoni assured the artists that they are going to lead the change, <i>"This is more of the start,"</i> she concluded. <i>"Mobilizing people and creating awareness takes time. This is a sector we want to be in for quite some time."</i></p>
            </div>
          </article>
        </section>

        {/* Article 3 – Airtel */}
        <section className="news-article4" aria-labelledby="article-title-airtel">
          <article className="post">
            <header>
              <h4 id="article-title-airtel">Airtel Africa Completes Data and Messaging Testing of Starlink Mobile in Kenya</h4>
              <div className="article-quote-layout">
                <figure className="article-media">
                  <img src="/Airtel Africa Group CEO Sunil Taldar (L) & Airtel Kenya MD Ashish Malhotra (R).JPG" alt="Airtel Africa Group CEO Sunil Taldar and Airtel Kenya MD Ashish Malhotra" />
                  <figcaption className="byline">Airtel Africa Group CEO Sunil Taldar (L) and Airtel Kenya MD Ashish Malhotra (R)</figcaption>
                </figure>
                <blockquote>"We are thrilled to move from announcement to actionable steps with our partners at SpaceX," Taldar said. "This testing phase in Kenya is a testament to our commitment to expanding global access."</blockquote>
              </div>
              <p className="dateline">NAIROBI, 24 March 2026 By George Mutua</p>
            </header>
            <div className="post-content">
              <p>Airtel Africa and SpaceX have successfully completed the testing of data and messaging services using Starlink Mobile in Kenya, marking a significant step toward the commercial rollout of satellite-to-mobile connectivity across the continent.</p>
              <p>The trial, conducted in <i>"no connectivity"</i> zones where traditional terrestrial mobile networks are absent, demonstrated the ability to seamlessly activate Starlink's direct-to-device service. Using Starlink's constellation of more than 650 satellites, standard 4G-compatible smartphones were able to maintain a connection in previously unreachable areas.</p>
              <p>During the testing phase, the service successfully supported light-data applications critical to daily life and business. Users were able to make WhatsApp calls, send messages via WhatsApp and Facebook Messenger, navigate using maps, and complete financial transactions through the Airtel app — all while in remote locations with no terrestrial signal.</p>
              <p><i>Sunil Taldar, Chief Executive Officer of Airtel Africa,</i> said the trial represented a shift from planning to tangible execution. He added that by integrating Starlink Mobile's technology, Airtel Africa is ensuring customers remain connected even when they travel beyond the reach of terrestrial networks.</p>
              <p>Following the successful Kenyan trial, Airtel Africa and Starlink Mobile plan to use the technical and operational insights gained to expand the service across Airtel Africa's 14 markets, pending country-specific regulatory approvals.</p>
              <p>The partners also confirmed plans to launch voice calling and expanded data capabilities in the future using Starlink Mobile V2 technology, which is designed to deliver broadband-grade connectivity directly to unmodified mobile phones.</p>
            </div>
          </article>
        </section>

        {/* Featured news card */}
        <article className="featured-news">
          <img src="/CKK01797.jpg" alt="Breaking news coverage" />
          <span className="category-tag">Breaking News</span>
          <h3><a href="#">Breaking News: Major Event Unfolds</a></h3>
          <p className="meta">By George Mutua | Jan 1, 2024</p>
          <p className="excerpt">A significant event has taken place, impacting communities worldwide. Read more to find out the details and implications of this unfolding story.</p>
        </article>

        {/* Article cards grid */}
        <div className="category-grid">
          <article className="article-card">
            <img src="/ISSAD PROF ANNE BEATRICE KIHARA.JPG" alt="Professor Anne Beatrice Kihara" />
            <h3><Link to="/health">Global Health Leaders Converge in Nairobi as FIGO President Prof. Kihara Anne Beatrice Calls for Urgent Action on Maternal GBS Vaccination</Link></h3>
            <p className="meta">By George Mutua | February 23, 2026</p>
            <p className="excerpt">FIGO president Prof. Kihara urges urgent action on maternal Group B Streptococcus vaccination; read the full story in the Health section.</p>
          </article>
          <article className="article-card">
            <img src="/0Y2A0133.jpg" alt="Economic growth trends" />
            <h3><a href="#">Economic Growth Trends in 2024</a></h3>
            <p className="meta">By Jane Smith | Feb 15, 2024</p>
            <p className="excerpt">An in-depth analysis of the economic growth trends expected in 2024, including key sectors driving the economy and potential challenges ahead.</p>
          </article>
          <article className="article-card">
            <img src="/9K7A7502.JPG" alt="Health innovation" />
            <h3><a href="#">Health Innovations: What to Expect</a></h3>
            <p className="meta">By Dr. Alex Brown | Mar 10, 2024</p>
            <p className="excerpt">Explore the latest innovations in healthcare technology and how they are set to revolutionize patient care and treatment options in the coming years.</p>
          </article>
          <article className="article-card">
            <img src="/imlu.png" alt="Renewable energy" />
            <h3><a href="#">The Future of Renewable Energy</a></h3>
            <p className="meta">By Emily Green | Apr 5, 2024</p>
            <p className="excerpt">A comprehensive look at advancements in renewable energy technologies and their potential to shape a sustainable future for the planet.</p>
          </article>
        </div>

        {/* Article 4 – Records Digitization */}
        <section className="news-article" aria-labelledby="article-title-records">
          <article className="post">
            <header>
              <h1 id="article-title-records">Records Digitization Failures Risk Digital Kenya; Urges ICT-Records Unity</h1>
              <div className="article-quote-layout">
                <figure className="article-media">
                  <img src="/image.png" alt="Conference address" />
                </figure>
                <blockquote>"We cannot afford to continue recording false starts every year." - Eng. John Tanui (remarks delivered by Ms. Mary Kerema, OGW)</blockquote>
              </div>
              <p className="dateline">Nairobi, Kenya - July 16, 2025</p>
              <p className="byline">Ms. Mary Kerema, OGW - Secretary, ICT e-Government &amp; Digital Economy (speaking on behalf of Eng. John Tanui, MBS)</p>
            </header>
            <div className="post-content">
              <p>Ms. Mary Kerema, OGW, delivering remarks on behalf of <i>Eng. John Tanui, MBS</i>, <i>the Principal Secretary for ICT and the Digital Economy</i> issued a blunt assessment that government efforts to digitize critical records are failing, risking the paralysis of Kenya's broader digital transformation agenda.</p>
              <p>Speaking to ICT Directors and stakeholders at a breakfast meeting hosted by the <i>Kenya Association of Records Managers and Archivists (KARMA)</i> at the Serena Hotel, Kerema said progress since the Ministry directed State Corporations to adopt paperless systems in March 2023 has been significantly low.</p>
              <p>Kerema highlighted Section 17(3) of the 2016 Access to Information Act, which mandated public entities to computerize records within three years, and outlined key issues: weak policy frameworks, poor implementation, limited ISO best-practice usage, major skills gaps, weak ICT-records collaboration, and weak change management.</p>
              <p>Kerema urged ICT Directors to embed records-management principles into digitalization projects, prioritize ICT training, and work closely with records professionals. The Ministry, via the ICT Authority, pledged support for standards and capacity building.</p>
              <p>She also highlighted KARMA's annual conference in Mombasa as a key opportunity to bridge the ICT-records management divide.</p>
            </div>
          </article>
        </section>

        {/* Article 5 – WADR */}
        <section className="news-article3" aria-labelledby="article-title3">
          <article className="post">
            <header>
              <h1 id="article-title3">WADR Kenya Urges Peaceful Conflict Resolution Amidst National Tensions</h1>
              <p className="dateline">NAIROBI, Kenya July 16, 2025 | George Mutua</p>
            </header>
            <div className="media-side-layout">
              <figure className="article-media">
                <img src="/WADR Kenya.jpg" alt="WADR Kenya Chairperson Eunice Lumallas with stakeholders" className="article-image" />
                <figcaption><i>Women in Alternative Dispute Resolution (WADR Kenya), led by Chairperson <br />Eunice Lumallas (middle).</i></figcaption>
              </figure>
              <div className="side">
                Amidst escalating tensions across Kenya's political, social, and economic sectors, <b>Women in Alternative Dispute Resolution (WADR Kenya)</b>, led by its Chair Eunice Lumallas, has issued a powerful call for nationwide adoption of peaceful conflict resolution mechanisms.
              </div>
            </div>
            <div className="post-content2">
              <p>Lumallas, emphasizing Kenya stands at a <i>critical juncture</i>, warned that unchecked disputes threaten to erode hard-won gains in governance, entrepreneurship, innovation, and the rule of law, jeopardizing national unity.</p>
              <p>Chair Lumallas urged all Kenyans to prioritize empathy and actively embrace dialogue, mediation, conciliation, and reconciliation — core Alternative Dispute Resolution (ADR) methods — as the first recourse, preventing disputes from escalating into adversarial or violent conflicts.</p>
              <p>Highlighting the critical benefits, Lumallas stressed that ADR is essential for safeguarding Kenya's economic resilience and social fabric. Declaring this appeal a <i>"moral imperative and a national duty,"</i> the WADR Chair asserted Kenya must position itself as a beacon of peace and justice in Africa.</p>
              <p>Concluding, Chair Eunice Lumallas reaffirmed WADR Kenya's commitment and urged a national pledge <i>"to resolve conflict through wisdom, not war; through understanding, not upheaval,"</i> underscoring this path as fundamental to Kenya's prosperity and unity amidst current economic pressures and political shifts.</p>
            </div>
            <footer className="post-footer">
              <p className="share">Share</p>
            </footer>
          </article>
        </section>
      </section>
    </main>
  )
}
