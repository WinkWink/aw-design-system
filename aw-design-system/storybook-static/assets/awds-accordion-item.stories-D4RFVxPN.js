import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,z as r}from"./iframe-D7r0Uamx.js";var i=t({Disabled:()=>c,Open:()=>s,Primary:()=>o,WithRichContent:()=>l,__namedExportsOrder:()=>u,default:()=>a}),a,o,s,c,l,u,d=e((()=>{r(),a={title:`AWDS/Accordion Item`,component:`awds-accordion-item`,argTypes:{heading:{control:`text`},open:{control:`boolean`},disabled:{control:`boolean`}}},o={args:{heading:`Accordion item`,open:!1,disabled:!1},render:e=>n` <awds-accordion-item heading=${e.heading} ?open=${e.open} ?disabled=${e.disabled}> Accordion item content. </awds-accordion-item> `},s={render:()=>n` <awds-accordion-item heading="Open accordion item" open> This accordion item is open by default. </awds-accordion-item> `},c={render:()=>n` <awds-accordion-item heading="Disabled accordion item" disabled> This content is not accessible while the item is disabled. </awds-accordion-item> `},l={render:()=>n`
    <awds-accordion-item heading="Rich content example" open>
      <p>This accordion item includes paragraph content.</p>
      <ul>
        <li>Supporting detail one</li>
        <li>Supporting detail two</li>
        <li>Supporting detail three</li>
      </ul>
    </awds-accordion-item>
  `},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Accordion item',
    open: false,
    disabled: false
  },
  render: args => html\` <awds-accordion-item heading=\${args.heading} ?open=\${args.open} ?disabled=\${args.disabled}> Accordion item content. </awds-accordion-item> \`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\` <awds-accordion-item heading="Open accordion item" open> This accordion item is open by default. </awds-accordion-item> \`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\` <awds-accordion-item heading="Disabled accordion item" disabled> This content is not accessible while the item is disabled. </awds-accordion-item> \`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <awds-accordion-item heading="Rich content example" open>
      <p>This accordion item includes paragraph content.</p>
      <ul>
        <li>Supporting detail one</li>
        <li>Supporting detail two</li>
        <li>Supporting detail three</li>
      </ul>
    </awds-accordion-item>
  \`
}`,...l.parameters?.docs?.source}}},u=[`Primary`,`Open`,`Disabled`,`WithRichContent`]}));d();export{c as Disabled,s as Open,o as Primary,l as WithRichContent,u as __namedExportsOrder,a as default,d as n,i as t};