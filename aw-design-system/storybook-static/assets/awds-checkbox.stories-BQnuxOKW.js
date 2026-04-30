import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,z as r}from"./iframe-C9zXsM_-.js";var i=t({Checked:()=>s,Default:()=>o,Disabled:()=>c,WithSlotLabel:()=>l,__namedExportsOrder:()=>u,default:()=>a}),a,o,s,c,l,u,d=e((()=>{r(),a={title:`AWDS/Checkbox`,component:`awds-checkbox`,argTypes:{label:{control:`text`},checked:{control:`boolean`},disabled:{control:`boolean`}}},o={args:{label:`I agree to the terms`,checked:!1,disabled:!1},render:e=>n` <awds-checkbox label=${e.label} ?checked=${e.checked} ?disabled=${e.disabled}></awds-checkbox> `},s={render:()=>n` <awds-checkbox checked label="Checked option"></awds-checkbox> `},c={render:()=>n`
    <div style="display:grid; gap:12px;">
      <awds-checkbox disabled label="Disabled option"></awds-checkbox>
      <awds-checkbox disabled checked label="Disabled checked option"></awds-checkbox>
    </div>
  `},l={render:()=>n` <awds-checkbox> Receive product updates </awds-checkbox> `},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms',
    checked: false,
    disabled: false
  },
  render: args => html\` <awds-checkbox label=\${args.label} ?checked=\${args.checked} ?disabled=\${args.disabled}></awds-checkbox> \`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\` <awds-checkbox checked label="Checked option"></awds-checkbox> \`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:grid; gap:12px;">
      <awds-checkbox disabled label="Disabled option"></awds-checkbox>
      <awds-checkbox disabled checked label="Disabled checked option"></awds-checkbox>
    </div>
  \`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\` <awds-checkbox> Receive product updates </awds-checkbox> \`
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Checked`,`Disabled`,`WithSlotLabel`]}));d();export{s as Checked,o as Default,c as Disabled,l as WithSlotLabel,u as __namedExportsOrder,a as default,d as n,i as t};