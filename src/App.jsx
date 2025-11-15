import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import Badge from './components/Badge'
import TimelineItem from './components/TimelineItem'

function App() {
  return (
    <div className="bg-neutral-50 text-gray-900">
      <Header />
      <main className="pt-16">
        <Hero />

        <Section id="summary" title="Profile Summary" hint="About">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Product designer with a systems mindset, specializing in accessible interfaces, component-driven design, and research-informed decision making. Experienced in end‑to‑end product cycles—from discovery and ideation to prototyping, testing, and polished delivery.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I collaborate closely with engineers and stakeholders to translate strategy into clear user flows, modular design systems, and delightful micro‑interactions that scale.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <Badge>Figma</Badge>
                  <Badge>Design Systems</Badge>
                  <Badge>User Research</Badge>
                  <Badge>Prototyping</Badge>
                </div>
                <div className="space-y-3">
                  <Badge>Usability Testing</Badge>
                  <Badge>WCAG & Accessibility</Badge>
                  <Badge>Information Architecture</Badge>
                  <Badge>Motion & Micro‑interactions</Badge>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills" hint="Core Strengths">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Product & Strategy</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Discovery workshops, problem framing</li>
                <li>Hypothesis-driven roadmapping</li>
                <li>Impact mapping, KPI alignment</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">UX & Research</h4>
              <ul className="text-gray-700 space-y-1">
                <li>User flows, IA, wireframes</li>
                <li>Qual/quant research, usability tests</li>
                <li>Accessibility-first practices</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">UI & Systems</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Design tokens, components, libraries</li>
                <li>Prototyping and motion design</li>
                <li>Developer handoff & documentation</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience" hint="Selected Roles">
          <div className="space-y-8">
            <TimelineItem
              role="Senior Product Designer"
              company="TechSphere"
              period="2022 — Present"
              description="Leading design for core platform initiatives across web and mobile, shaping the design system and elevating product quality across teams."
              bullets={[
                'Defined end‑to‑end flows and pattern libraries adopted by 6+ squads',
                'Increased task success by 27% through iterative usability testing',
                'Partnered with engineering to streamline component handoff and documentation',
              ]}
            />
            <TimelineItem
              role="UI/UX Designer"
              company="Nova Labs"
              period="2019 — 2022"
              description="Owned research-to-release for data-heavy dashboards and onboarding experiences."
              bullets={[
                'Reduced time-to-value by 35% with redesigned onboarding',
                'Built a scalable design system with tokens and modular components',
              ]}
            />
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-gray-200 bg-white">
              <h4 className="font-medium text-gray-900">B.Des, Interaction Design</h4>
              <p className="text-gray-600">Institut Teknologi Bandung</p>
              <p className="text-sm text-gray-500 mt-1">2015 — 2019</p>
            </div>
            <div className="p-5 rounded-xl border border-gray-200 bg-white">
              <h4 className="font-medium text-gray-900">Design Leadership, Certificate</h4>
              <p className="text-gray-600">Nielsen Norman Group</p>
              <p className="text-sm text-gray-500 mt-1">2020</p>
            </div>
          </div>
        </Section>

        <Section id="certs" title="Certifications">
          <div className="flex flex-wrap gap-3">
            <Badge>NN/g UX Certification</Badge>
            <Badge>Google UX Design</Badge>
            <Badge>Accessibility Fundamentals</Badge>
            <Badge>Design Systems Ops</Badge>
          </div>
        </Section>

        <Section id="creative" title="Additional Creative Work" hint="Selected Explorations">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 via-white to-slate-100" />
                <div className="p-4">
                  <h5 className="font-medium text-gray-900">Concept #{i}</h5>
                  <p className="text-sm text-gray-600">Interface exploration and motion study.</p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
            ))}
          </div>
        </Section>

        <footer className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Hafidz Al Qudsi — Available for freelance and product collaborations.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
