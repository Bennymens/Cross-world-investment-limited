import { Link } from "react-router-dom";
import "./FAQ.css";

export default function FAQ() {
  return (
    <main className="faq-page-v2">
      {/* ===== HERO BANNER ===== */}
      <section className="faq-hero-v2">
        {/* Organic Corner Blobs */}
        <div className="faq-blob-v2 faq-blob-left" />
        <div className="faq-blob-v2 faq-blob-right" />
        
        <div className="faq-hero-content-v2">
          <h1 className="faq-hero-title-v2">
            How it's grown, how it's refined, and why it's viable
          </h1>
        </div>
      </section>

      {/* ===== SCROLLABLE CONTENT WRAPPER (Slides up over hero) ===== */}
      <div className="faq-content-scroll-v2">
        {/* ===== SECTION 1: Why Cassava Starch (Mint Background) ===== */}
        <section className="faq-sec-v2 sec-mint">
          <div className="faq-sec-container-v2">
            <div className="faq-col-left-v2">
              <h2 className="faq-question-v2">
                Pioneering Agro-Processing: Why Cassava Starch?
              </h2>
            </div>
            <div className="faq-col-right-v2">
              <p className="faq-answer-v2">
                Cassava is a highly resilient root crop and the 3rd largest source of carbohydrates in the tropics. However, unlike traditional grains, fresh cassava roots are extremely perishable and deteriorate within 24 to 48 hours of harvest. Processing them into industrial starch preserves the crop's value indefinitely and prevents post-harvest waste.
              </p>
              <p className="faq-answer-v2">
                Compared to other sources like corn, potato, or wheat, starch extraction from cassava is economically simple and yields starch with unique properties—including high paste clarity, high viscosity, and excellent freeze-thaw stability without the need for chemical modification.
              </p>
              <div className="faq-links-v2">
                <Link to="/products" className="faq-link-v2">
                  Explore Our Product Specifications ↳
                </Link>
                <Link to="/contact" className="faq-link-v2">
                  View the Cassava Starch Business Case ↳
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: Location (Peach Background) ===== */}
        <section className="faq-sec-v2 sec-peach">
          <div className="faq-sec-container-v2">
            <div className="faq-col-left-v2">
              <h2 className="faq-question-v2">
                Operations: Where are your farming and factory sites located?
              </h2>
            </div>
            <div className="faq-col-right-v2">
              <p className="faq-answer-v2">
                Our 9,000 MT processing factory and our initial 5,000-acre commercial farm are located in Obiri, in the Central Region of Ghana. The proximity of the factory to the plantation is crucial to ensure that harvested roots are washed, peeled, and milled within hours of harvest, locking in starch quality.
              </p>
              <p className="faq-answer-v2">
                Additionally, we have acquired tracts of land in the Eastern region of Ghana and are in advanced stages of leasing 10,000 acres in both the Eastern and Central regions to scale cultivation and support our long-term agro-processing objectives.
              </p>
              <div className="faq-links-v2">
                <Link to="/our-story" className="faq-link-v2">
                  Read About Our Land Acquisition Story ↳
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: Capacity (Lime Background) ===== */}
        <section className="faq-sec-v2 sec-lime">
          <div className="faq-sec-container-v2">
            <div className="faq-col-left-v2">
              <h2 className="faq-question-v2">
                Factory Details: What is the annual production capacity of the plant?
              </h2>
            </div>
            <div className="faq-col-right-v2">
              <p className="faq-answer-v2">
                Our world-class processing factory has a designed production capacity of Nine Thousand Metric Tonnes (9,000 MT) of industrial and food-grade cassava starch yearly. To meet the requirements of our off-take agreements, the plant will operate 24 hours a day across three shifts.
              </p>
              <p className="faq-answer-v2">
                The factory relies on highly automated production machinery including root reception units, rasping units, desanding cyclones, centrifugal screening units, dewatering systems, and high-temperature flash dryers.
              </p>
              <div className="faq-links-v2">
                <Link to="/contact" className="faq-link-v2">
                  View Construction &amp; Equipment Budgets ↳
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: TIAST Partnership (Ivory Background) ===== */}
        <section className="faq-sec-v2 sec-ivory">
          <div className="faq-sec-container-v2">
            <div className="faq-col-left-v2">
              <h2 className="faq-question-v2">
                Supply Chain: Who is your technology partner and buyer?
              </h2>
            </div>
            <div className="faq-col-right-v2">
              <p className="faq-answer-v2">
                Cross World has partnered with the TIAST Group, an acclaimed machinery, financial, and technology service provider. Under this partnership, TIAST Group provides the processing machinery, engineering setup, and 2 years of onsite technical support.
              </p>
              <p className="faq-answer-v2">
                Crucially, TIAST Group also acts as our contracted off-taker, agreeing to purchase 100% of our starch output on a pre-paid Freight-On-Board (FOB) basis. This guarantees a ready market, secure USD payments, and eliminates local buyer prospecting risks.
              </p>
              <div className="faq-links-v2">
                <Link to="/contact" className="faq-link-v2">
                  Read About Our Business Model Canvas ↳
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: Raw Material Security (Slate Background) ===== */}
        <section className="faq-sec-v2 sec-slate">
          <div className="faq-sec-container-v2">
            <div className="faq-col-left-v2">
              <h2 className="faq-question-v2">
                Mitigating Risks: How do you guarantee the raw material supply?
              </h2>
            </div>
            <div className="faq-col-right-v2">
              <p className="faq-answer-v2">
                A key challenge that plagued older setups (such as the Ayensu Starch Factory) was the supply of raw cassava, as they relied on inconsistent third-party out-growers. When out-growers faced harvest issues or redirected crops to local food markets, the factories were forced to shut down.
              </p>
              <p className="faq-answer-v2">
                Cross World resolves this by cultivating our own 5,000-acre farm with mechanized planting, irrigation, and crop scheduling to ensure a steady, independent supply of fresh cassava tubers all year round.
              </p>
              <div className="faq-links-v2">
                <Link to="/contact" className="faq-link-v2">
                  Explore Our Risk Management Matrix ↳
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: Environmental Impact (Lime Green Background) ===== */}
        <section className="faq-sec-v2 sec-lime-green">
          <div className="faq-sec-container-v2">
            <div className="faq-col-left-v2">
              <h2 className="faq-question-v2">
                Eco-Processing: What is the environmental impact of your operations?
              </h2>
            </div>
            <div className="faq-col-right-v2">
              <p className="faq-answer-v2">
                We prioritize sustainability. Our processing system utilizes specialized environmentally friendly machinery. We integrate a closed-loop water treatment system that purifies and recycles up to 90% of processing water. In addition, we deploy solar power units for external site lighting and streetlights to reduce our auxiliary carbon footprint.
              </p>
              <p className="faq-answer-v2">
                The waste fiber and cassava pulp generated from extraction are processed and converted into organic silage for livestock feed, ensuring a near-zero waste production cycle.
              </p>
              <div className="faq-links-v2">
                <Link to="/impact" className="faq-link-v2">
                  View Sustainability &amp; Job Metrics ↳
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}