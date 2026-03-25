import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Dr6oDi21.mjs';
import { $ as $$BaseLayout, a as $$Hero } from '../chunks/BaseLayout_BIw0N1rv.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "404 Error \u2014 this page was not found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Page Not Found", "tagline": "Not found" })} ` })}`;
}, "F:/tuanngo/Dijnie/src/pages/404.astro", void 0);

const $$file = "F:/tuanngo/Dijnie/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
