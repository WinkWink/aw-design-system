import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,z as r}from"./iframe-C9zXsM_-.js";var i=t({Primary:()=>o,__namedExportsOrder:()=>s,default:()=>a}),a,o,s,c=e((()=>{r(),a={title:`AWDS/Modal`,component:`awds-modal`,argTypes:{open:{control:`boolean`},size:{control:`select`,options:[`sm`,`md`,`lg`]},heading:{control:`text`}}},o={args:{open:!1,size:`md`,heading:`Modal title`},render:e=>n`
    <awds-button
      variant="primary"
      @click=${()=>{document.querySelector(`awds-modal`)?.setAttribute(`open`,``)}}
    >
      Open modal
    </awds-button>

    <awds-modal ?open=${e.open} size=${e.size} heading=${e.heading}>
      <p>This is the modal body content.</p>

      <div slot="footer">
        <awds-button variant="secondary">Cancel</awds-button>
        <awds-button variant="primary">Confirm</awds-button>
      </div>
    </awds-modal>
  `},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    size: 'md',
    heading: 'Modal title'
  },
  render: args => html\`
    <awds-button
      variant="primary"
      @click=\${() => {
    const modal = document.querySelector('awds-modal');
    modal?.setAttribute('open', '');
  }}
    >
      Open modal
    </awds-button>

    <awds-modal ?open=\${args.open} size=\${args.size} heading=\${args.heading}>
      <p>This is the modal body content.</p>

      <div slot="footer">
        <awds-button variant="secondary">Cancel</awds-button>
        <awds-button variant="primary">Confirm</awds-button>
      </div>
    </awds-modal>
  \`
}`,...o.parameters?.docs?.source}}},s=[`Primary`]}));c();export{o as Primary,s as __namedExportsOrder,a as default,c as n,i as t};