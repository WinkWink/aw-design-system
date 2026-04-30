import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,z as r}from"./iframe-D7r0Uamx.js";var i=t({MultipleOpen:()=>s,Primary:()=>o,WithLongContent:()=>c,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l,u=e((()=>{r(),a={title:`AWDS/Accordion`,component:`awds-accordion`,argTypes:{multiple:{control:`boolean`}}},o={args:{multiple:!1},render:e=>n`
    <awds-accordion ?multiple=${e.multiple}>
      <awds-accordion-item heading="Accordion item one"> Content for accordion item one. </awds-accordion-item>

      <awds-accordion-item heading="Accordion item two"> Content for accordion item two. </awds-accordion-item>

      <awds-accordion-item heading="Accordion item three"> Content for accordion item three. </awds-accordion-item>
    </awds-accordion>
  `},s={render:()=>n`
    <awds-accordion multiple>
      <awds-accordion-item heading="First item"> Multiple mode allows more than one item to be open. </awds-accordion-item>

      <awds-accordion-item heading="Second item"> This item can stay open at the same time as another item. </awds-accordion-item>
    </awds-accordion>
  `},c={render:()=>n`
    <awds-accordion>
      <awds-accordion-item heading="Long content example">
        <p>
          Accordion content can include longer text, supporting content, and nested markup. This pattern is useful when users need to scan a list of sections and expand only the
          content they need.
        </p>
      </awds-accordion-item>
    </awds-accordion>
  `},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: false
  },
  render: args => html\`
    <awds-accordion ?multiple=\${args.multiple}>
      <awds-accordion-item heading="Accordion item one"> Content for accordion item one. </awds-accordion-item>

      <awds-accordion-item heading="Accordion item two"> Content for accordion item two. </awds-accordion-item>

      <awds-accordion-item heading="Accordion item three"> Content for accordion item three. </awds-accordion-item>
    </awds-accordion>
  \`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <awds-accordion multiple>
      <awds-accordion-item heading="First item"> Multiple mode allows more than one item to be open. </awds-accordion-item>

      <awds-accordion-item heading="Second item"> This item can stay open at the same time as another item. </awds-accordion-item>
    </awds-accordion>
  \`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <awds-accordion>
      <awds-accordion-item heading="Long content example">
        <p>
          Accordion content can include longer text, supporting content, and nested markup. This pattern is useful when users need to scan a list of sections and expand only the
          content they need.
        </p>
      </awds-accordion-item>
    </awds-accordion>
  \`
}`,...c.parameters?.docs?.source}}},l=[`Primary`,`MultipleOpen`,`WithLongContent`]}));u();export{s as MultipleOpen,o as Primary,c as WithLongContent,l as __namedExportsOrder,a as default,u as n,i as t};