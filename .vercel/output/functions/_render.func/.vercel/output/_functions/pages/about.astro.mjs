import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dr6oDi21.mjs';
import { $ as $$BaseLayout, a as $$Hero } from '../chunks/BaseLayout_BIw0N1rv.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_C-EdJuER.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Tuan Ngo", "description": "About Me", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-kh7btl4r> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "About", "tagline": "Thanks for stopping by. Read below to learn more about myself and my background.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <img width="1553" height="873" src="/assets/images/hero-about.png" alt="Tuan Ngo" data-astro-cid-kh7btl4r> ` })} <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Background</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
I am <strong data-astro-cid-kh7btl4r>Ngo Van Tuan</strong>, a Computer Science student with a strong interest in web development and blockchain technology. 
						I have experience building web applications and working with backend systems, APIs, and databases. 
						I am also familiar with Git for version control and have participated in several technical projects and hackathons.
</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Education</h2> <div class="content" data-astro-cid-kh7btl4r> <div class="education-item" data-astro-cid-kh7btl4r> <h3 data-astro-cid-kh7btl4r>University of Transport and Communications</h3> <p data-astro-cid-kh7btl4r>Bachelor of Information Technology – Computer Science (2023 – 2027)</p> <p class="gpa" data-astro-cid-kh7btl4r>GPA: <strong data-astro-cid-kh7btl4r>3.49 / 4.0</strong></p> </div> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Skills</h2> <div class="content" data-astro-cid-kh7btl4r> <ul class="skills-list" data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r>JavaScript (ES6+)</li> <li data-astro-cid-kh7btl4r>TypeScript</li> <li data-astro-cid-kh7btl4r>React.js</li> <li data-astro-cid-kh7btl4r>Next.js</li> <li data-astro-cid-kh7btl4r>Node.js</li> <li data-astro-cid-kh7btl4r>Backend API</li> <li data-astro-cid-kh7btl4r>Python</li> <li data-astro-cid-kh7btl4r>C/C++</li> <li data-astro-cid-kh7btl4r>SQL Server</li> <li data-astro-cid-kh7btl4r>Git / GitHub</li> <li data-astro-cid-kh7btl4r>Docker</li> <li data-astro-cid-kh7btl4r>Blockchain</li> <li data-astro-cid-kh7btl4r>Solidity</li> </ul> </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ` })} `;
}, "F:/tuanngo/Dijnie/src/pages/about.astro", void 0);

const $$file = "F:/tuanngo/Dijnie/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
