import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,z as r}from"./iframe-C9zXsM_-.js";var i=t({Disabled:()=>l,Primary:()=>o,Sizes:()=>c,Variants:()=>s,__namedExportsOrder:()=>u,default:()=>a}),a,o,s,c,l,u,d=e((()=>{r(),a={title:`AWDS/Button`,component:`awds-button`,argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`}}},o={args:{variant:`primary`,size:`md`,disabled:!1},render:e=>n` <awds-button variant=${e.variant} size=${e.size} ?disabled=${e.disabled}> Button </awds-button> `},s={render:()=>n`
    <div style="display:flex; gap:1rem; align-items:center;">
      <awds-button variant="primary">Primary</awds-button>
      <awds-button variant="secondary">Secondary</awds-button>
      <awds-button variant="tertiary">Tertiary</awds-button>
    </div>
  `},c={render:()=>n`
    <div style="display:flex; gap:1rem; align-items:center;">
      <awds-button size="sm">Small</awds-button>
      <awds-button size="md">Medium</awds-button>
      <awds-button size="lg">Large</awds-button>
    </div>
  `},l={render:()=>n` <awds-button disabled>Disabled</awds-button> `},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false
  },
  render: args => html\` <awds-button variant=\${args.variant} size=\${args.size} ?disabled=\${args.disabled}> Button </awds-button> \`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; gap:1rem; align-items:center;">
      <awds-button variant="primary">Primary</awds-button>
      <awds-button variant="secondary">Secondary</awds-button>
      <awds-button variant="tertiary">Tertiary</awds-button>
    </div>
  \`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex; gap:1rem; align-items:center;">
      <awds-button size="sm">Small</awds-button>
      <awds-button size="md">Medium</awds-button>
      <awds-button size="lg">Large</awds-button>
    </div>
  \`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\` <awds-button disabled>Disabled</awds-button> \`
}`,...l.parameters?.docs?.source}}},u=[`Primary`,`Variants`,`Sizes`,`Disabled`]}));d();export{l as Disabled,o as Primary,c as Sizes,s as Variants,u as __namedExportsOrder,a as default,d as n,i as t};