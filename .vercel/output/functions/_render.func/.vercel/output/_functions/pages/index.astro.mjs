import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dr6oDi21.mjs';
import { g as getCollection } from '../chunks/_astro_content_4aWWnM6z.mjs';
import { $ as $$BaseLayout, a as $$Hero, b as $$Icon } from '../chunks/BaseLayout_BIw0N1rv.mjs';
import { $ as $$Pill } from '../chunks/Pill_BQlw7pUl.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_C-EdJuER.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://tuanng.dev");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hello, my name is Tuan Ngo", "tagline": "I am a Creative Developer who is currently based in Ha Noi, Viet Nam.", "align": "start", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <div class="roles" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Developer` })} <!-- <Pill><Icon icon="microphone-stage" size="1.33em" /> Speaker</Pill>
						<Pill><Icon icon="pencil-line" size="1.33em" /> Writer</Pill> --> </div> ` })} <img alt="Tuan Ngo" width="480" height="620" src="/assets/images/portrait.jpg" data-astro-cid-j7pv25f6> </header> <!-- <Skills /> --> </div> <!-- 
		<main class="wrapper stack gap-20 lg:gap-48">
			<section class="section with-background with-cta">
				<header class="section-header stack gap-2 lg:gap-4">
					<h3>Selected Work</h3>
					<p>Take a look below at some of my featured work for clients from the past few years.</p>
				</header>

				<div class="gallery">
					<Grid variant="offset">
						{
							projects.map((project) => (
								<li>
									<PortfolioPreview project={project} />
								</li>
							))
						}
					</Grid>
				</div>

				<div class="cta">
					<CallToAction href="/work/">
						View All
						<Icon icon="arrow-right" size="1.2em" />
					</CallToAction>
				</div>
			</section>

			<section class="section with-background bg-variant">
				<header class="section-header stack gap-2 lg:gap-4">
					<h3>Mentions</h3>
					<p>
						I have been fortunate enough to receive praise for my work in several publications. Take
						a look below to learn more.
					</p>
				</header>

				<div class="gallery">
					<Grid variant="small">
						{
							['Medium', 'BuzzFeed', 'The Next Web', 'awwwards.', 'TechCrunch'].map((brand) => (
								<li class="mention-card">
									<p>{brand}</p>
								</li>
							))
						}
					</Grid>
				</div>
			</section>
		</main> --> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })} </div> ` })} `;
}, "F:/tuanngo/Dijnie/src/pages/index.astro", void 0);

const $$file = "F:/tuanngo/Dijnie/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
