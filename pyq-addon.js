// UPSC Duo PYQ add-on: 2026 GS demand index + CSAT 2015-2025 official paper archive
(()=>{
const SRC={GS1:'https://bharatnotes.com/mains/2026/gs1/',GS2:'https://www.bharatnotes.com/mains/2026/gs2/',GS3:'https://bharatnotes.com/mains/2026/gs3/',GS4:'https://bharatnotes.com/mains/2026/gs4/'};
const G={
GS1:[
['Ancient India · Sources','Assess Ashokan inscriptions as evidence for reconstructing Mauryan history.'],
['Modern India · Education','Examine Macaulay’s Minute and its impact on colonial administration and education.'],
['Freedom Struggle · Gandhian Phase','Explain why mass mobilisation was central to the significance of Gandhian movements.'],
['Physical Geography · Cyclones','Explain the Fujiwhara effect and its influence on tropical-cyclone movement and intensity.'],
['World Geography · Tundra','Critically examine the ecological fragility and economic importance of tundra regions.'],
['Geomorphology · Aeolian Processes','Discuss how aeolian processes contribute to desertification and land degradation.'],
['Resource Geography · Water','Examine South Asian water resources as both assets and sources of conflict.'],
['Indian Society · Diversity','Examine unity in diversity amid communalism and regionalism.'],
['Social Issues · Disability','Assess challenges facing persons with disabilities and the requirements of inclusive policy.'],
['Society · Digital Empowerment','Examine how digital technology affects social empowerment and inclusion.'],
['Medieval India · Vijayanagara','Analyse the significance and features of Vijayanagara art and architecture.'],
['Post-Independence · State Reorganisation','Assess linguistic reorganisation of states and its consequences for Indian unity and federalism.'],
['Post-Independence · Planning','Examine planned development and the challenge of regional imbalance in India.'],
['Climatology · Local Winds','Compare major local winds such as Loo, Chinook and Foehn and explain their effects.'],
['Geography & Technology · Agriculture','Assess the use of satellite or geospatial technology for climate-smart agriculture.'],
['Economic Geography · Trade','Analyse the shift of global trade towards the Indo-Pacific and its geographical implications.'],
['Indian Geography · Land Use','Analyse drivers of human-induced land-use change in India and their geographical consequences.'],
['Indian Society · Caste','Examine whether caste is disappearing in urban India, with examples.'],
['Population · Demographic Transition','Critically examine challenges arising from India’s contemporary demographic transition.'],
['Society · Globalisation','Evaluate globalisation’s social, political, economic and cultural effects on Indian youth.']
],
GS2:[
['Fundamental Rights · Privacy','Examine privacy and self-identity under Article 21 in the context of the 2026 transgender-law amendment.'],
['Social Justice · Women’s Representation','Assess women’s political representation and the constitutional or institutional route to reservation.'],
['Parliament · Speaker & Anti-Defection','Examine the Speaker’s role in anti-defection disputes and concerns over neutrality.'],
['Elections · Franchise & Electoral Rolls','Analyse issues of franchise, electoral rolls and the integrity of representative democracy.'],
['Constitutional Bodies · NCSC/NCST','Assess the role and effectiveness of constitutional commissions for Scheduled Castes and Scheduled Tribes.'],
['Social Justice · Tribal Development','Evaluate India’s tribal-development policy and the balance between welfare, rights and autonomy.'],
['Health & Welfare · Malnutrition','Analyse persistent malnutrition and the effectiveness of public policy responses.'],
['Governance · Civil Services','Examine India’s civil-service structure and reforms needed for responsive governance.'],
['IR · Indo-Pacific','Assess India’s interests and role in Indo-Pacific maritime security.'],
['IR · Plurilateral Groupings','Examine the growing importance of plurilateral groupings in India’s external relations.'],
['Federalism · Governor','Critically examine the constitutional office of Governor in Centre-State relations.'],
['Judiciary · Judicial Law-Making','Discuss judicial law-making, its constitutional basis and concerns about institutional boundaries.'],
['Federalism · Diversity & Disputes','Analyse how Indian federalism manages diversity and intergovernmental disputes.'],
['Comparative Government · Separation of Powers','Compare separation-of-powers arrangements and their relevance to constitutional government.'],
['Democracy · Interest Representation','Examine interest representation, political finance and their effects on democratic equality.'],
['Governance · Transparency','Evaluate transparency and accountability mechanisms in public administration.'],
['Welfare State · Entitlements','Examine rights-based welfare entitlements against fiscal-capacity constraints.'],
['Education · Public Policy','Assess whether education should be viewed primarily as a welfare obligation or strategic investment.'],
['IR · Diaspora','Evaluate the role of the Indian diaspora in diplomacy and national influence.'],
['IR · China & Neighbourhood','Analyse China, connectivity initiatives and their implications for India’s neighbourhood policy.']
],
GS3:[
['Economy · CBDC','Define the Digital Rupee and explain the working and progress of India’s CBDC.'],
['Economy · Financial Inclusion','Examine financial inclusion as social-economic inclusion and assess the RBI Financial Inclusion Index.'],
['Agriculture · Technology Missions','Evaluate technology missions and their role in raising agricultural productivity and resilience.'],
['Agriculture · Marketing & E-Commerce','Examine digital and e-commerce reforms in agricultural marketing.'],
['S&T · Agricultural Biotechnology','Explain, with examples, how biotechnology helps farmers process or manage perishable crops.'],
['S&T · Nuclear Energy','Assess recent nuclear-energy developments and their role in India’s energy strategy.'],
['Disaster Management · Fragile Zones','Analyse risks from infrastructure development in ecologically or geologically fragile regions.'],
['Environment · Biodiversity Governance','Evaluate global biodiversity-governance frameworks and India’s responsibilities.'],
['Internal Security · Information Disorder','Analyse security challenges posed by misinformation, deepfakes or synthetic information.'],
['Internal Security · Border Areas','Examine development and security challenges in border areas, with focus on Ladakh.'],
['Energy · Security & Transition','Assess India’s energy-security challenge during the transition to cleaner energy.'],
['Economy · Startups','Examine how startups promote entrepreneurship, innovation and jobs; analyse challenges and remedies.'],
['Agriculture · Food Surplus','Explain India’s transition from food scarcity to surplus and policies for agricultural diversification.'],
['Agriculture · Subsidies & WTO','Critically examine agricultural subsidies in the context of WTO obligations and food security.'],
['Space Technology · Earth Observation','Assess Earth-observation technologies and their developmental or strategic applications.'],
['S&T · Agentic AI','Explain agentic AI, its working, applications, advantages, risks and governance challenges.'],
['Environment · Solid Waste','Evaluate India’s solid-waste-management framework and implementation challenges.'],
['Disaster Management · Community Participation','Analyse community participation in disaster management, including challenges and strengthening measures.'],
['Internal Security · J&K','Assess separatism and government measures aimed at mainstreaming Jammu and Kashmir.'],
['Internal Security · Terror Financing','Analyse counterfeit currency and money laundering as terror-finance channels, including FATF responses.']
],
GS4:[
['Professional Ethics · AI','Evaluate accountability and integrity when AI is used to produce professional academic assessment.'],
['Development Ethics · Displacement','Identify ethical challenges for a district administrator when development may displace a forest community.'],
['Bioethics · Vulnerable Groups','Assess the ethics of using an untested medical intervention on a vulnerable or endangered tribal group.'],
['Security Ethics · Rights','Examine the ethical balance between security measures, human rights and state responsibility.'],
['Political Ethics · Civil Disobedience','Analyse the ethical place of civil disobedience in a constitutional democracy pursuing social justice.'],
['Gandhian Ethics · Trusteeship','Explain trusteeship and its relevance to ethical public administration.'],
['Means & Ends · Governance','Examine whether a just intention can ethically justify the means used in governance.'],
['Bioethics · Paternalism','Distinguish paternalism and beneficence while analysing consent in medical decision-making.'],
['Administrative Values · Efficiency','Distinguish efficiency and effectiveness and apply them to public administration.'],
['Administrative Ethics · Rules & Rights','Analyse a public servant’s ethical conflict between strict rule compliance and protection of rights.'],
['International Ethics','Examine ethical principles that should guide relations among states and global responsibilities.'],
['Administrative Ethics · Empathy','Balance empathy, impartiality, rules and conflict-of-interest concerns in an administrative decision.'],
['Moral Philosophy · Duty & Charity','Explain why helping severely disadvantaged people may be a moral duty rather than mere charity.'],
['Case Study · Medical Consent','Resolve a case involving patient autonomy, informed consent and family influence.'],
['Case Study · AI & Policing','Resolve ethical issues arising from predictive or AI-assisted policing and algorithmic bias.'],
['Case Study · Corruption','Address corruption and administrative reform in a public-authority decision process.'],
['Case Study · Technology & Welfare','Resolve exclusion and fairness problems caused by technology-dependent welfare delivery.'],
['Case Study · Communal Conflict','Handle communal conflict while preserving neutrality, public order and rights.'],
['Case Study · Arms Exports','Balance national interest, human rights and international ethics in an arms-export decision.']
]};
const rows=[];
Object.entries(G).forEach(([paper,items])=>items.forEach(([theme,q],i)=>rows.push({paper,subject:'2026 Mains',theme,year:2026,marks:paper==='GS4'?(i>=13?20:10):(i<10?10:15),page:'—',q,url:SRC[paper],sourceNote:'2026 PYQ demand index · cross-verified; open source for exact wording'})));
if(!DATA.pyqs.some(x=>Number(x.year)===2026)) DATA.pyqs=[...rows,...DATA.pyqs];
const yearSel=document.getElementById('pyqYear');
if(yearSel && ![...yearSel.options].some(o=>o.value==='2026')){const o=document.createElement('option');o.value='2026';o.textContent='2026';yearSel.insertBefore(o,yearSel.firstChild);}
window.renderPyq=function(){let q=document.getElementById('pyqSearch').value.toLowerCase(),p=document.getElementById('pyqPaper').value,y=document.getElementById('pyqYear').value,box=document.getElementById('pyqList');box.innerHTML='';let found=DATA.pyqs.filter(x=>(!q||JSON.stringify(x).toLowerCase().includes(q))&&(!p||x.paper===p)&&(!y||String(x.year)===y));document.getElementById('pyqCount').textContent=`Showing ${found.length} of ${DATA.pyqs.length} GS1–GS4 PYQs`;found.slice(0,250).forEach(x=>{let c=document.createElement('div');c.className='pyqCard';let meta=`${x.year} · ${x.marks} marks`+(x.page&&x.page!=='—'?` · PDF p.${x.page}`:'');c.innerHTML=`<b>${x.paper} · ${esc(x.subject)} · ${esc(x.theme)}</b><div class="tiny">${meta}</div><p class="sub">${esc(x.q)}</p>${x.sourceNote?`<div class="tiny">${esc(x.sourceNote)}</div>`:''}<div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:8px"><button class="btn analysePyq">Analyse this PYQ</button>${x.url?`<a class="btn" href="${x.url}" target="_blank" rel="noopener">Open full 2026 paper ↗</a>`:''}</div>`;c.querySelector('.analysePyq').onclick=()=>{document.getElementById('dq').value=x.q;toast('PYQ moved to demand decoder')};box.appendChild(c)});if(found.length>250)box.insertAdjacentHTML('beforeend',`<div class="quote">Refine search to view the remaining ${found.length-250} matches.</div>`)};
const archive='https://www.upsc.gov.in/examinations/previous-question-papers';
CSAT_PYQ_GUIDE.splice(0,CSAT_PYQ_GUIDE.length,...Array.from({length:11},(_,i)=>{let year=2025-i;return {year,theme:'Official GS Paper II (CSAT)',q:`UPSC Civil Services Preliminary Examination ${year} — General Studies Paper II (CSAT).`,answer:'Attempt the complete official paper under timed conditions and record weak areas by comprehension, reasoning, numeracy and data interpretation.',url:archive}}),{year:2026,theme:'Official GS Paper II (CSAT)',q:'UPSC Civil Services Preliminary Examination 2026 — General Studies Paper II (CSAT).',answer:'Use the Set-A key only after confirming booklet/set; record weak areas by topic.',url:archive});
window.renderCsatPyqGuide=function(){const box=document.getElementById('csatPyqList');if(!box)return;const ss=normPyqText(document.getElementById('csatSearch')?.value||'');const rr=CSAT_PYQ_GUIDE.filter(x=>!ss||normPyqText(`${x.year} ${x.theme} ${x.q}`).includes(ss));box.innerHTML=rr.map(x=>`<div class="pyqCard"><div class="microTop"><div><span class="badge ca">CSAT ${x.year}</span> <b>${x.theme}</b></div></div><div style="margin-top:7px">${x.q}</div><div class="tiny" style="margin-top:7px"><b>Practice workflow:</b> ${x.answer}</div><a class="btn" style="display:inline-block;margin-top:8px" href="${x.url}" target="_blank" rel="noopener">Open UPSC paper archive ↗</a></div>`).join('')||'<div class="tiny">No CSAT match. Try a broader topic.</div>'};
document.getElementById('csatSearch')?.addEventListener('input',renderCsatPyqGuide);
renderPyq();renderCsatPyqGuide();
})();