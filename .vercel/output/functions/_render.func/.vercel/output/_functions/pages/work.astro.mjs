import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, e as renderSlot, r as renderComponent } from '../chunks/astro/server_Dr6oDi21.mjs';
import { g as getCollection } from '../chunks/_astro_content_4aWWnM6z.mjs';
import { $ as $$BaseLayout, a as $$Hero } from '../chunks/BaseLayout_BIw0N1rv.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_C-EdJuER.mjs';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://tuanng.dev");
const $$PortfolioPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/work/${slug}`, "href")} data-astro-cid-lgkm4u2a> <span class="title" data-astro-cid-lgkm4u2a>${data.title}</span> <img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-lgkm4u2a> </a> `;
}, "F:/tuanngo/Dijnie/src/components/PortfolioPreview.astro", void 0);

const $$Astro = createAstro("https://tuanng.dev");
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["grid", { offset: variant === "offset", small: variant === "small" }], "class:list")} data-astro-cid-vc5tsdmu> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "F:/tuanngo/Dijnie/src/components/Grid.astro", void 0);

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Tuan Ngo", "description": "Learn about Tuan Ngo's most recent projects" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "My Work", "tagline": "See my most recent projects below to get an idea of my past experience.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": async ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "F:/tuanngo/Dijnie/src/pages/work.astro", void 0);

const $$file = "F:/tuanngo/Dijnie/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Work,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
