import { useState, useEffect, useRef } from "react";
import "./BusinessPlan.css";

/* Reusable scroll-reveal hook */
function useReveal(threshold = 0.08) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("revealed");
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export default function BusinessPlan() {
  const [activeTab, setActiveTab] = useState("overview");
  const heroRef = useReveal(0.05);

  const tabs = [
    { id: "overview",    label: "Executive Summary" },
    { id: "market",      label: "Market & Strategy" },
    { id: "operations",  label: "Operations & CAPEX" },
    { id: "financials",  label: "Financial Projections" },
    { id: "timeline",    label: "Timeline & Risks" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="tab-pane fade-in">
            {/* Executive Summary */}
            <div className="bp-card text-block">
              <span className="bp-card-badge">Section 1</span>
              <h2>Executive Summary</h2>
              <p>
                <strong>CROSSWORLD INVESTMENTS LIMITED</strong> is a wholly owned Ghanaian company incorporated in 2019. The objects of the company include Agribusiness and Agro-processing. Since 2019, the company has been involved in research into, and development of, Cassava and Industrial Starch processing, Coconut, and Palm plantations.
              </p>
              <p>
                In preparation for commercial cultivation of cassava and processing of cassava starch for export, we have procured large tracts of land in the Eastern region of Ghana, and are currently in advanced stages of leasing about <strong>Ten Thousand (10,000) acres</strong> of land in the Eastern and Central regions. Our research over three years has produced improved species of high-grade cassava variety, and the most efficient cassava starch production process. We have developed human resource capacity — sixty trained people — for industrial grade planting and production.
              </p>
              <p>
                The Global Cassava Starch market is projected to cross <strong>US$ 8 Billion</strong> by 2024, still unable to meet global demand of 119.6 million metric tonnes growing at 3.6% per year. Africa produces 180 Million Metric tonnes of Cassava, with Ghana being the <strong>3rd largest producer</strong> (21.8 Million tonnes) in Africa and 6th in the world.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="bp-grid-2">
              <div className="bp-card bp-vision-card">
                <div className="bp-icon-row">🌍</div>
                <h3>Our Vision</h3>
                <p className="vision-mission-text">
                  "To be Africa's leader in Agro-processing, and to put Africa on the global map of top Agro-processing countries."
                </p>
              </div>
              <div className="bp-card bp-mission-card">
                <div className="bp-icon-row">🏭</div>
                <h3>Our Mission</h3>
                <p className="vision-mission-text">
                  "To harness natural resources, technology and international best practice, to drive innovative and efficient production of high-quality industrial starch to meet growing global demand."
                </p>
              </div>
            </div>

            {/* Key Stats Row */}
            <div className="bp-stats-row">
              <div className="bp-stat-chip">
                <span className="bp-stat-val">9,000 MT</span>
                <span className="bp-stat-lbl">Annual Starch Capacity</span>
              </div>
              <div className="bp-stat-chip">
                <span className="bp-stat-val">5,000 ac</span>
                <span className="bp-stat-lbl">Dedicated Cassava Farm</span>
              </div>
              <div className="bp-stat-chip">
                <span className="bp-stat-val">$8B+</span>
                <span className="bp-stat-lbl">Global Market Size</span>
              </div>
              <div className="bp-stat-chip">
                <span className="bp-stat-val">68%</span>
                <span className="bp-stat-lbl">Gross Profit Margin</span>
              </div>
            </div>

            {/* Business Objectives */}
            <div className="bp-card">
              <h2>Business Objectives</h2>
              <ul className="bp-list">
                <li>
                  <strong>Raw Material Efficiency:</strong> Cost-effective growing and production of cassava raw materials using mechanized methods on owned land.
                </li>
                <li>
                  <strong>Quality Packaging:</strong> Production and packaging of high-quality food-grade and industrial cassava starch meeting international standards.
                </li>
                <li>
                  <strong>Market Leadership:</strong> Leadership position in innovation, quality, and consistent supply of industrial cassava starch for export.
                </li>
                <li>
                  <strong>Customer Satisfaction:</strong> Ensuring client satisfaction at all levels of product demand via guaranteed off-take contracts.
                </li>
                <li>
                  <strong>Self-Financing:</strong> Achieve complete financial self-sustainability from Year-Two onwards, funding all operations from export revenues.
                </li>
              </ul>
            </div>
          </div>
        );

      case "market":
        return (
          <div className="tab-pane fade-in">
            {/* Market Overview */}
            <div className="bp-card">
              <span className="bp-card-badge">Section 2</span>
              <h2>Global Starch Market Size & Growth</h2>
              <p>
                Globally, cassava starch is widely used in fuel-ethanol production, paper and textile manufacturing, and the pharmaceutical industry. China, Thailand, and the United States represent the largest importers. The international price of cassava starch is currently approximately <strong>$510 to $560 per metric tonne</strong>, with returns of <strong>$510/MT</strong> against an OPEX of only <strong>$112/MT</strong> — yielding one of the highest profit margins in agro-processing (~68%).
              </p>
              <p>
                Our marketing plan focuses on direct B2B off-take contracts. We have structured a contracted off-taker agreement with the <strong>TIAST Group</strong> to purchase 100% of our finished products on a pre-paid Freight-On-Board (FOB) basis from the Port of Tema, eliminating buyer prospecting risk during the critical first three years.
              </p>
            </div>

            {/* SWOT Grid */}
            <h2 className="section-subtitle">SWOT Analysis</h2>
            <div className="swot-grid">
              <div className="swot-box swot-s">
                <h3>💪 Strengths</h3>
                <ul>
                  <li>Proprietary Cross-Cassava high-starch variety developed over 3 years of R&D.</li>
                  <li>Owned 5,000-acre farm guarantees raw material independence.</li>
                  <li>9,000 MT automated processing line — world-class capacity.</li>
                  <li>Pre-paid off-take contract with TIAST Group removes revenue uncertainty.</li>
                </ul>
              </div>
              <div className="swot-box swot-w">
                <h3>⚠️ Weaknesses</h3>
                <ul>
                  <li>Relative difficulty in securing agricultural project financing locally in Ghana.</li>
                  <li>Limited local experience in modern mechanized large-scale agro-processing operations.</li>
                </ul>
              </div>
              <div className="swot-box swot-o">
                <h3>🌱 Opportunities</h3>
                <ul>
                  <li>Global industrial starch markets expanding — projected demand of 119.6 MMT+.</li>
                  <li>Fertile loamy soils abundant across Central & Eastern Ghana.</li>
                  <li>Ghana Freezone Act 1995 and One-District-One-Factory tax incentives.</li>
                  <li>Ghana is the 6th largest global cassava producer — untapped processing potential.</li>
                </ul>
              </div>
              <div className="swot-box swot-t">
                <h3>🔒 Threats</h3>
                <ul>
                  <li>Power instability — mitigated by solar backup units and high-capacity diesel generators.</li>
                  <li>Climatic variability — mitigated by 5 deep boreholes and drip irrigation systems.</li>
                  <li>Global cassava starch price drops — mitigated by expanding planting acreage to offset volume margins.</li>
                </ul>
              </div>
            </div>

            {/* Business Model Canvas */}
            <h2 className="section-subtitle">Business Model Canvas</h2>
            <div className="bmc-grid">
              <div className="bmc-cell bmc-partners">
                <h4>Key Partners</h4>
                <ul>
                  <li><strong>TIAST Group</strong> — Technology supplier, off-taker</li>
                  <li>Local transport & haulage contractors</li>
                  <li>Global producer associations</li>
                  <li>Regional land authorities (Stools & Families)</li>
                </ul>
              </div>

              <div className="bmc-cell bmc-activities">
                <h4>Key Activities</h4>
                <ul>
                  <li>Mechanized raw cassava cultivation</li>
                  <li>Automated starch extraction & processing</li>
                  <li>Quality lab testing & certification</li>
                  <li>FOB export packaging & Tema port logistics</li>
                </ul>
                <hr className="bmc-divider" />
                <h4>Key Resources</h4>
                <ul>
                  <li>5,000-acre loamy farm — Obiri, Central Region</li>
                  <li>Cross-Cassava proprietary high-starch seed stock</li>
                  <li>9,000 TPY automated processing line</li>
                  <li>Borehole irrigation & solar energy grid</li>
                </ul>
              </div>

              <div className="bmc-cell bmc-value">
                <h4>Value Propositions</h4>
                <ul>
                  <li><strong>Consistent supply:</strong> Own farm prevents feedstock disruption.</li>
                  <li><strong>World-class quality:</strong> High paste clarity, high viscosity, zero chemicals.</li>
                  <li><strong>Competitive pricing:</strong> Pre-paid agreement at 10% below spot rates.</li>
                  <li><strong>Reliable export:</strong> FOB terms via Tema — Ghana's main port.</li>
                </ul>
              </div>

              <div className="bmc-cell bmc-relationships">
                <h4>Customer Relationships</h4>
                <ul>
                  <li>Guaranteed multi-year off-take agreements</li>
                  <li>Consistent quality batch verification</li>
                  <li>B2B dedicated account management</li>
                </ul>
                <hr className="bmc-divider" />
                <h4>Channels</h4>
                <ul>
                  <li>FOB port exports — Tema, Ghana</li>
                  <li>Direct B2B to local pharma & paper manufacturers</li>
                </ul>
              </div>

              <div className="bmc-cell bmc-segments">
                <h4>Customer Segments</h4>
                <ul>
                  <li>TIAST Group (contracted off-taker)</li>
                  <li>Global food & pharma buying associations</li>
                  <li>Local industrial starch consumers (Ghana)</li>
                </ul>
              </div>

              <div className="bmc-cell bmc-costs bmc-span-2">
                <h4>Cost Structure</h4>
                <div className="cost-split-grid">
                  <div><strong>Fuel & Energy:</strong> 29.15%</div>
                  <div><strong>Staff Salaries:</strong> 20.88%</div>
                  <div><strong>Farm Operations:</strong> 18.40%</div>
                  <div><strong>Factory OPEX:</strong> 14.11%</div>
                  <div><strong>Utilities & Solar O&M:</strong> 6.48%</div>
                  <div><strong>FOB & Overheads:</strong> 11.00%</div>
                </div>
              </div>

              <div className="bmc-cell bmc-revenues bmc-span-3">
                <h4>Revenue Streams</h4>
                <ul>
                  <li>Export sales of premium food-grade native cassava starch (USD payments, FOB Tema).</li>
                  <li>Direct B2B supply of industrial starch to paper, textile, and packaging factories in Ghana.</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "operations":
        return (
          <div className="tab-pane fade-in">
            {/* Operations Summary */}
            <div className="bp-card">
              <span className="bp-card-badge">Section 3</span>
              <h2>Operations & Operating Plan</h2>
              <p>
                Our operations involve an integrated farming-to-factory loop. The raw material — fresh cassava roots — is cultivated on our 5,000-acre farm using mechanized ridgers, mulchers, planters, and harvesters. The factory and administrative offices are located directly onsite in <strong>Obiri, Central Region</strong>, ensuring freshly harvested cassava is processed within the critical 24-hour post-harvest window. Factory operations run <strong>24 hours a day across three shifts</strong> to maximize capital efficiency.
              </p>
              <p>
                The processing line includes: Roots Reception → Washing → Rasping → Desanding Cyclones → Centrifugal Screening → Pulp Dewatering → Starch Hydrocyclone Concentrating → Fine Fiber Sieving → Starch Dewatering → Flash Drying → Packaging.
              </p>
            </div>

            {/* Farming Equipment Budget */}
            <h2 className="section-subtitle">Mechanised Farming Equipment CAPEX</h2>
            <div className="bp-card table-card">
              <table className="bp-table">
                <thead>
                  <tr>
                    <th>Item Description</th>
                    <th>Specification</th>
                    <th>Unit Price ($)</th>
                    <th>Qty</th>
                    <th>Total ($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Full set Laboratory equipment</td><td>Quality analysis set</td><td>62,100.00</td><td>1</td><td>62,100.00</td></tr>
                  <tr><td>Weigh bridge</td><td>50T Capacity</td><td>18,000.00</td><td>1</td><td>18,000.00</td></tr>
                  <tr><td>Electric Forklift</td><td>2T Capacity</td><td>28,000.00</td><td>1</td><td>28,000.00</td></tr>
                  <tr><td>Loader</td><td>1.7m³ bucket</td><td>33,000.00</td><td>1</td><td>33,000.00</td></tr>
                  <tr><td>Pickup Truck (Futon)</td><td>4x4 Double Cabin</td><td>27,000.00</td><td>2</td><td>54,000.00</td></tr>
                  <tr><td>Heavy Tractor</td><td>220 hp, 4WD</td><td>57,000.00</td><td>2</td><td>114,000.00</td></tr>
                  <tr><td>Agricultural Ridger</td><td>2200mm width</td><td>11,730.00</td><td>1</td><td>11,730.00</td></tr>
                  <tr><td>Tractor Dump Trailer</td><td>7Ton load capacity</td><td>8,850.00</td><td>1</td><td>8,850.00</td></tr>
                  <tr><td>Wheel Shovel</td><td>3Ton capacity</td><td>22,500.00</td><td>1</td><td>22,500.00</td></tr>
                  <tr><td>Tractor + Mulcher Setup</td><td>Heavy residues mulching</td><td>85,000.00</td><td>1</td><td>85,000.00</td></tr>
                  <tr><td>Tipper Truck</td><td>20T capacity</td><td>52,700.00</td><td>1</td><td>52,700.00</td></tr>
                  <tr><td>Boom Sprayer</td><td>5000L capacity</td><td>68,000.00</td><td>1</td><td>68,000.00</td></tr>
                  <tr><td>Cassava Planter</td><td>Mechanized row planter</td><td>15,780.00</td><td>1</td><td>15,780.00</td></tr>
                  <tr><td>Cassava Harvester</td><td>Row harvester</td><td>12,470.00</td><td>1</td><td>12,470.00</td></tr>
                  <tr><td>Mulcher</td><td>2000mm width</td><td>15,860.00</td><td>1</td><td>15,860.00</td></tr>
                  <tr><td>Harrower</td><td>Heavy disc harrower</td><td>8,840.00</td><td>2</td><td>17,680.00</td></tr>
                  <tr><td>Disc Plough</td><td>Soil preparation plows</td><td>7,800.00</td><td>2</td><td>15,600.00</td></tr>
                  <tr className="table-total-row">
                    <td colSpan="4">Total Farming Equipment CAPEX</td>
                    <td>$635,270.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pre-Setup Budget */}
            <h2 className="section-subtitle">Pre-Setup Requirements & Construction Budget</h2>
            <div className="bp-card table-card">
              <table className="bp-table">
                <thead>
                  <tr>
                    <th>Item / Infrastructure Description</th>
                    <th>Detail Scope</th>
                    <th>Cost ($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Water Infrastructure</td><td>5 Deep Boreholes equipped with sub-pumps</td><td>25,000.00</td></tr>
                  <tr><td>Land Preparation</td><td>Initial land clearing, survey, formatting & layout works</td><td>150,000.00</td></tr>
                  <tr><td>Grid Electricity</td><td>Medium & Low Voltage power supply lines to site</td><td>200,000.00</td></tr>
                  <tr><td>Solar Backup Units</td><td>External site lighting, street lighting, and administrative solar cells</td><td>50,000.00</td></tr>
                  <tr><td>Access & Civils</td><td>Site main roads, culverts, drain networks, and concrete formatting</td><td>50,000.00</td></tr>
                  <tr><td>Connectivity</td><td>Microwave internet transmitter link and local Wi-Fi layout</td><td>20,000.00</td></tr>
                  <tr><td>Security Installations</td><td>Boundary posts and 24/7 CCTV surveillance system</td><td>10,000.00</td></tr>
                  <tr><td>Power Control System</td><td>UPS backups, high-capacity voltage regulators, surge protectors</td><td>200,000.00</td></tr>
                  <tr><td>Customs Duties</td><td>Import duties, clearing, and port charges for factory machinery</td><td>936,548.00</td></tr>
                  <tr><td>Site Civil Works Prep</td><td>Slab preparation, soil compaction, structural foundations</td><td>100,000.00</td></tr>
                  <tr className="table-total-row">
                    <td colSpan="2">Total Pre-Setup CAPEX</td>
                    <td>$1,741,548.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Factory Line CAPEX */}
            <h2 className="section-subtitle">Industrial Factory Line CAPEX — TIAST Group Partnership</h2>
            <div className="bp-card table-card">
              <table className="bp-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Production & Engineering Module</th>
                    <th>CIF Price, Tema Ghana ($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <strong>9,000 TPY Food-Grade Cassava Starch Production Line</strong>
                      <span className="subtext-detail">Roots Reception, Washing, Rasping, Desanding, Centrifugal Screening, Pulp Dewatering, Starch Hydrocyclone Concentrating, Fine Fiber Sieving, Starch Dewatering, Flash Drying, Boiler, Compressors, Sea Freight & Logistics.</span>
                    </td>
                    <td>1,724,800.00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <strong>Installation & Commissioning Charge</strong>
                      <span className="subtext-detail">Fees for installation engineers, technicians, machinery rentals, and installation tools.</span>
                    </td>
                    <td>215,270.00</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <strong>Installation Materials & Accessories</strong>
                      <span className="subtext-detail">Water system piping, high & weak electrical cabling, air dry systems, valves, and connectors.</span>
                    </td>
                    <td>355,850.00</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <strong>Civil Works & Steel Structure Workshop</strong>
                      <span className="subtext-detail">Processing foundation, drying color-steel workshop, boiler extension, warehouse, raw stock yards, drain pools, weighing office, dormitories, and administration offices.</span>
                    </td>
                    <td>966,900.00</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <strong>Water Treatment & Waste Management System</strong>
                      <span className="subtext-detail">Water purifying plant and wastewater buffer & recycling treatment pools (90% water recovery).</span>
                    </td>
                    <td>385,160.00</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      <strong>Power Generator & Distribution Grid</strong>
                      <span className="subtext-detail">High-capacity backup diesel genset and transformer distribution system.</span>
                    </td>
                    <td>259,490.00</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      <strong>Technology Management Service (2-Year)</strong>
                      <span className="subtext-detail">2-year technical support, staff training, and equipment warranty operations by TIAST engineers.</span>
                    </td>
                    <td>140,000.00</td>
                  </tr>
                  <tr className="table-total-row">
                    <td colSpan="2">Total Factory Line CAPEX (TIAST Group)</td>
                    <td>$4,047,470.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "financials":
        return (
          <div className="tab-pane fade-in">
            {/* Funding Overview */}
            <div className="bp-card stats-summary-card">
              <span className="bp-card-badge">Section 4</span>
              <h2>Overall Funding & Capital Budget</h2>
              <div className="fin-highlights">
                <div className="fin-highlight-box">
                  <span className="fin-label">Total CAPEX Required</span>
                  <span className="fin-val">$7,059,198</span>
                  <span className="fin-desc">Factory building, mechanized farm tools, civil works, customs duties & pre-setup costs.</span>
                </div>
                <div className="fin-highlight-box">
                  <span className="fin-label">Year 1 OPEX Budget</span>
                  <span className="fin-val">$1,715,240</span>
                  <span className="fin-desc">Fuel, salaries, farm operations, rent, chemicals, utilities, and FOB shipping costs.</span>
                </div>
                <div className="fin-highlight-box highlight-accent">
                  <span className="fin-label">Total Project Funding</span>
                  <span className="fin-val">$7,362,000</span>
                  <span className="fin-desc">Debt/equity financing with 3-year repayment after 1-year grace moratorium.</span>
                </div>
              </div>
              <p className="funding-note">
                * The business is designed to achieve complete self-sustainability from Year-Two onwards, funding all operating expenditures directly from export starch revenues.
              </p>
            </div>

            {/* Year 1 OPEX Table */}
            <h2 className="section-subtitle">First Year Operating Expenditure Breakdown</h2>
            <div className="bp-card table-card">
              <table className="bp-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Operating Expense Item</th>
                    <th>Description</th>
                    <th>Annual Budget ($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Ground Rent</td><td>Annual ground rent of land (5,000 Acres @ $10/acre)</td><td>50,000.00</td></tr>
                  <tr><td>2</td><td>Borehole Maintenance</td><td>Periodic maintenance and sub-pump replacement allowances</td><td>2,000.00</td></tr>
                  <tr><td>3</td><td>Farming Operations</td><td>Land preparation, row-cultivation, weeding labor</td><td>200,000.00</td></tr>
                  <tr><td>4</td><td>Electricity</td><td>Factory power bills and transformer maintenance</td><td>111,111.11</td></tr>
                  <tr><td>5</td><td>Solar & CCTV O&M</td><td>Maintenance of solar auxiliary grids and CCTV cameras</td><td>5,000.00</td></tr>
                  <tr><td>6</td><td>Access Roads Maintenance</td><td>Drain cleaning and gravel works on farm roads</td><td>10,000.00</td></tr>
                  <tr><td>7</td><td>Connectivity & Wi-Fi</td><td>Annual internet subscription and network systems maintenance</td><td>42,000.00</td></tr>
                  <tr><td>8</td><td>Staff Salaries</td><td>Wages, allowances, and annual bonuses for 60+ factory/farm workers</td><td>250,000.00</td></tr>
                  <tr><td>9</td><td>Social Security & PF</td><td>Mandatory employer pension contributions (SSNIT)</td><td>42,500.00</td></tr>
                  <tr><td>10</td><td>Management Salaries</td><td>Salaries for Executive and Departmental Managers</td><td>108,000.00</td></tr>
                  <tr><td>11</td><td>Staff Healthcare</td><td>Workplace insurance and medical allowances</td><td>6,111.11</td></tr>
                  <tr><td>12</td><td>Staff Meals & Provisions</td><td>Onsite canteen operations for three shifts</td><td>13,518.52</td></tr>
                  <tr><td>13</td><td>Board Allowances</td><td>Board meetings, legal filing, administrative expenditures</td><td>50,000.00</td></tr>
                  <tr><td>14</td><td>Fuel & Energy</td><td>Diesel fuel for backup generators, loaders, and haulage trucks</td><td>500,000.00</td></tr>
                  <tr><td>15</td><td>Auto Maintenance</td><td>Maintenance of loader, pickup trucks, and tippers</td><td>50,000.00</td></tr>
                  <tr><td>16</td><td>Chemicals & Fertilizer</td><td>Selective organic weed control, fertilizers for farming block</td><td>5,000.00</td></tr>
                  <tr><td>17</td><td>Insurance Premium</td><td>Comprehensive cover for plant, machinery, vehicles</td><td>70,000.00</td></tr>
                  <tr><td>18</td><td>Overheads</td><td>General office supplies, legal fees, consumables</td><td>100,000.00</td></tr>
                  <tr><td>19</td><td>FOB Costs</td><td>Customs clearance, port charges, shipping handling at Tema</td><td>50,000.00</td></tr>
                  <tr><td>20</td><td>Starch Transport</td><td>Haulage of packed starch from Obiri factory to Tema Port</td><td>50,000.00</td></tr>
                  <tr className="table-total-row">
                    <td colSpan="3">Total First Year OPEX</td>
                    <td>$1,715,240.74</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 5-Year Projections */}
            <h2 className="section-subtitle">5-Year Growth & Financial Projections</h2>
            <div className="bp-card table-card">
              <table className="bp-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Year 1</th>
                    <th>Year 2</th>
                    <th>Year 3</th>
                    <th>Year 4</th>
                    <th>Year 5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Projected Revenue ($)</strong></td>
                    <td>3,304,800</td>
                    <td>4,131,000</td>
                    <td>4,131,000</td>
                    <td>4,337,550</td>
                    <td>4,337,550</td>
                  </tr>
                  <tr>
                    <td><strong>Total OPEX ($)</strong></td>
                    <td>1,715,241</td>
                    <td>1,543,717</td>
                    <td>1,715,241</td>
                    <td>1,886,765</td>
                    <td>1,981,103</td>
                  </tr>
                  <tr className="table-highlight-row">
                    <td><strong>Profit Before Tax ($)</strong></td>
                    <td><strong>1,589,559</strong></td>
                    <td><strong>2,587,283</strong></td>
                    <td><strong>2,415,759</strong></td>
                    <td><strong>2,450,785</strong></td>
                    <td><strong>2,356,447</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Profit Margin (%)</strong></td>
                    <td>48.1%</td>
                    <td>62.6%</td>
                    <td>58.5%</td>
                    <td>56.5%</td>
                    <td>54.3%</td>
                  </tr>
                  <tr className="table-note-row">
                    <td>Assumptions & Notes</td>
                    <td>Ramp-up phase — partial year output</td>
                    <td>10% less OPEX; optimal run rate</td>
                    <td>Full baseline operations</td>
                    <td>5% price rise, 10% more OPEX</td>
                    <td>Full ops + 5% price increase</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Conclusion */}
            <div className="bp-card info-conclusion-card">
              <h2>Conclusion & Financial Viability</h2>
              <p>
                Cross World Investments Limited has successfully moved beyond its research phase and is ready to enter commercial industrial starch processing. The financials demonstrate exceptional viability, with a projected average annual revenue of <strong>$4,000,000+</strong> over the first five years and healthy profit margins before tax averaging <strong>55%+</strong>. The required project funding of <strong>$7,362,000</strong> is projected to be fully repaid within <strong>three years</strong> (after a one-year grace/moratorium period). By integrating mechanized agriculture with state-of-the-art closed-loop processing, Cross World is positioned to lead agro-processing in Ghana and yield exceptional returns for investors.
              </p>
            </div>
          </div>
        );

      case "timeline":
        return (
          <div className="tab-pane fade-in">
            {/* Timeline */}
            <div className="bp-card">
              <span className="bp-card-badge">Section 5</span>
              <h2>Project Implementation Schedule</h2>
              <p className="margin-bottom-30">
                The proprietary Cross-Cassava high-starch variety matures in <strong>9 months</strong>. The factory building and machinery installation requires <strong>7 months</strong>. To ensure a steady raw material feedstock to test and run the factory immediately on completion, farming planting operations commence exactly <strong>3 months prior</strong> to factory machinery delivery — ensuring the first harvest coincides precisely with factory readiness.
              </p>

              <div className="timeline-timeline">
                <div className="timeline-lane">
                  <div className="lane-header">🏭 Factory Infrastructure</div>
                  <div className="lane-cells">
                    <div className="lane-cell cell-active" style={{ gridColumn: "span 2" }}>Eq. Order</div>
                    <div className="lane-cell cell-active" style={{ gridColumn: "span 3" }}>Manufacturing</div>
                    <div className="lane-cell cell-active" style={{ gridColumn: "span 2" }}>Shipping</div>
                    <div className="lane-cell cell-active" style={{ gridColumn: "span 1" }}>Clearance</div>
                    <div className="lane-cell cell-active" style={{ gridColumn: "span 2" }}>Site Prep</div>
                    <div className="lane-cell cell-active" style={{ gridColumn: "span 2" }}>Installation</div>
                    <div className="lane-cell cell-active" style={{ gridColumn: "span 2" }}>Dorm & Civil</div>
                    <div className="lane-cell cell-active" style={{ gridColumn: "span 1" }}>UAT Test</div>
                  </div>
                </div>

                <div className="timeline-lane">
                  <div className="lane-header">🌿 Farming Operations</div>
                  <div className="lane-cells">
                    <div className="lane-cell cell-empty" style={{ gridColumn: "span 3" }}>-</div>
                    <div className="lane-cell cell-active" style={{ gridColumn: "span 2" }}>Land Prep</div>
                    <div className="lane-cell cell-active" style={{ gridColumn: "span 3" }}>Cultivation</div>
                    <div className="lane-cell cell-active" style={{ gridColumn: "span 4" }}>Crop Tending</div>
                    <div className="lane-cell cell-active" style={{ gridColumn: "span 3" }}>Harvest (Monthly)</div>
                  </div>
                </div>

                <div className="timeline-lane">
                  <div className="lane-header">📦 Production & Export</div>
                  <div className="lane-cells">
                    <div className="lane-cell cell-empty" style={{ gridColumn: "span 12" }}>-</div>
                    <div className="lane-cell cell-accent" style={{ gridColumn: "span 3" }}>Starch Packing & FOB Export</div>
                  </div>
                </div>

                <div className="timeline-grid-months">
                  {["M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12","M13","M14","M15"].map(m => (
                    <div key={m}>{m}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Risk Matrix */}
            <h2 className="section-subtitle">Risk Management Matrix</h2>
            <div className="bp-card table-card">
              <table className="bp-table">
                <thead>
                  <tr>
                    <th>Identified Operational Risk</th>
                    <th>Significance</th>
                    <th>Planned Mitigation Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Feedstock Perishability / Availability</strong></td>
                    <td><span className="risk-badge risk-high">● High</span></td>
                    <td>Cross World cultivates its own 5,000-acre farm directly adjacent to the factory, rather than relying on inconsistent external out-growers.</td>
                  </tr>
                  <tr>
                    <td><strong>Market Access & Buyer Prospecting</strong></td>
                    <td><span className="risk-badge risk-medium">● Medium</span></td>
                    <td>Structured pre-paid off-take contract with TIAST Group covers 100% of factory production — no buyer prospecting required in Year 1-3.</td>
                  </tr>
                  <tr>
                    <td><strong>Working Capital / Payment Delays</strong></td>
                    <td><span className="risk-badge risk-low">● Low</span></td>
                    <td>FOB off-take terms are negotiated on a pre-paid basis prior to product lifting from Tema port — cash flow is secured upfront.</td>
                  </tr>
                  <tr>
                    <td><strong>Currency Fluctuations (Cedi/USD)</strong></td>
                    <td><span className="risk-badge risk-medium">● Medium</span></td>
                    <td>All export sales invoices and contracts are valued and paid in USD, protecting earnings from Cedi depreciation pressures.</td>
                  </tr>
                  <tr>
                    <td><strong>Dwindling Global Starch Prices</strong></td>
                    <td><span className="risk-badge risk-high">● High</span></td>
                    <td>Increasing planting acreage to 5,000 acres (above the minimum 3,600) offsets margins through volume — ensuring cost leadership.</td>
                  </tr>
                  <tr>
                    <td><strong>Low Farm Yields due to Climatic Shifts</strong></td>
                    <td><span className="risk-badge risk-high">● High</span></td>
                    <td>5 deep boreholes and advanced drip-irrigation systems deployed; 5,000+ acres planted to hedge against yield variability from irregular rainfall.</td>
                  </tr>
                  <tr>
                    <td><strong>Power Grid Instability</strong></td>
                    <td><span className="risk-badge risk-medium">● Medium</span></td>
                    <td>High-capacity backup diesel generator system, UPS devices, and voltage regulators installed to ensure uninterrupted 24-hour factory operations.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Call to Action */}
            <div className="bp-cta-card">
              <div className="bp-cta-inner">
                <h2>Ready to Partner with Cross World?</h2>
                <p>Cross World Investments Limited is actively seeking strategic investors and financial partners to co-finance this world-class agro-processing venture. Contact us to receive the full investor deck, financial models, and due diligence documentation.</p>
                <div className="bp-cta-meta">
                  <span>📞 +233 20 200 7160</span>
                  <span>👤 A. Assan — Founder & CEO</span>
                  <span>📍 Obiri, Central Region, Ghana</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="business-plan-page">

      {/* ===== STICKY HERO ===== */}
      <section className="bp-hero-sticky" ref={heroRef}>
        <div className="bp-hero-bg-overlay" />
        <div className="bp-hero-content">
          <span className="bp-eyebrow">Investor Relations</span>
          <h1 className="bp-title">
            Business<br />
            <span className="bp-title-accent">Plan.</span>
          </h1>
          <p className="bp-subtitle">
            Industrial Cassava Starch Processing<br />Cross World Investments Limited
          </p>
          <div className="bp-meta-row">
            <span>👤 A. Assan — Author</span>
            <span>📅 27-Jul-22</span>
            <span>📞 +233 20 200 7160</span>
          </div>
          <div className="bp-scroll-cta">
            <span className="bp-scroll-label">Scroll to explore</span>
            <div className="bp-scroll-line" />
          </div>
        </div>
      </section>

      {/* ===== SLIDE-UP CONTENT WRAPPER ===== */}
      <div className="bp-content-scroll">

        {/* Sticky Tabs Bar */}
        <div className="bp-tabs-sticky">
          <div className="bp-tabs-container">
            {tabs.map(t => (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                className={`bp-tab-btn ${activeTab === t.id ? "active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <section className="bp-content-section">
          <div className="bp-content-container">
            {renderContent()}
          </div>
        </section>

      </div>
    </main>
  );
}
