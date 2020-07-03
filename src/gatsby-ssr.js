import React from 'react';

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    const options = Object.keys(pluginOptions).filter(key => key !== 'plugins').map(key => pluginOptions[key])
    return setHeadComponents([
      <script
        key={`gatsby-plugin-facebook-multi-pixels`}
        dangerouslySetInnerHTML={{
          __html: `
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  ${options.map((opts, index) => (`
  fbq('init', '${opts.pixelId}');
  f.${opts.alias || `fbq${index}`}=function(x,y){return fbq('trackSingle',${opts.pixelId},x,y);};
  f.${opts.alias || `fbq${index}`}Custom=function(x,y){return fbq('trackSingleCustom',${opts.pixelId},x,y);};
  `)).join('\n\t')}
  fbq('track', 'PageView');
      `,
        }}
      />,
    ]);
  }
};
