import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server_Dr6oDi21.mjs';
import 'clsx';
/* empty css                         */
import { b as $$Icon } from './BaseLayout_BIw0N1rv.mjs';

const $$Astro = createAstro("https://tuanng.dev");
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "F:/tuanngo/Dijnie/src/components/CallToAction.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Interested in working together?</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "https://t.me/vtuan_205", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Send Me a Message
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
}, "F:/tuanngo/Dijnie/src/components/ContactCTA.astro", void 0);

export { $$ContactCTA as $ };
