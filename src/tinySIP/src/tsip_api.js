// /*
// * Copyright (C) 2012-2018 Doubango Telecom <http://www.doubango.org>
// * License: BSD
// * This file is part of Open Source sipML5 solution <http://www.sipml5.org>
// */
// var CustomEvent = document.createEvent("CustomEvent");

// async function tsip_api_add_js_scripts(s_elt) {
//     for (var i = 1; i < arguments.length; ++i) {
//         await loadScript(arguments[i], s_elt);
//     }
//     return;
// };
// async function tmedia_api_add_js_scripts(s_elt) {
//     for (var i = 1; i < arguments.length; ++i) {
//         await loadScript(arguments[i], s_elt);
//     }
//     return;
// };
// async function tsk_api_add_js_script(s_elt) {
//     for (var i = 1; i < arguments.length; ++i) {
//         await loadScript(arguments[i], s_elt);
//     }
//     return;
// };
// async function tsdp_api_add_js_scripts(s_elt) {
//     for (var i = 1; i < arguments.length; ++i) {
//         await loadScript(arguments[i], s_elt);
//     }
//     return;
// };

// function loadScript(url, s_elt){
//     return new Promise((resolve, reject)=>{
//         var tag_script = document.createElement('script');
//         var tag_hdr = document.getElementsByTagName(s_elt)[0];

//         tag_script.setAttribute('type', 'text/javascript');
//         tag_script.setAttribute('src', url + "?svn=252");
//         tag_script.async = true;
//         tag_hdr.appendChild(tag_script);
//         // console.log("ready to append child in script=======");
//         tag_script.onload = () => {
//             // console.log("Script loaded2222222");
//             resolve();
//         };    
//     });
// }

// (async function(){
//     await tmedia_api_add_js_scripts('head',
//     '/src/tinyMEDIA/src/tmedia_common.js',
//     '/src/tinyMEDIA/src/tmedia_param.js',
//     '/src/tinyMEDIA/src/tmedia_qos.js'
//     );
//     await tsk_api_add_js_script('head',
//     '/src/adapter.js',

//     '/src/tinySAK/src/tsk_base64.js',
//     '/src/tinySAK/src/tsk_buff.js',
//     '/src/tinySAK/src/tsk_fsm.js',
//     '/src/tinySAK/src/tsk_md5.js',
//     '/src/tinySAK/src/tsk_param.js',
//     '/src/tinySAK/src/tsk_ragel.js',
//     '/src/tinySAK/src/tsk_string.js',
//     '/src/tinySAK/src/tsk_utils.js'
//     );
//     await tsdp_api_add_js_scripts('head', '/src/tinySAK/src/tsk_api.js');

//     await tsdp_api_add_js_scripts('head',
//         '/src/tinySDP/src/headers/tsdp_header.js',
//         '/src/tinySDP/src/tsdp_message.js'
//     );
//     await tsip_api_add_js_scripts('head',
//     '/src/tinySIP/src/tsip_action.js',
//     '/src/tinySIP/src/tsip_event.js',
//     '/src/tinySIP/src/tsip_message.js',
//     '/src/tinySIP/src/tsip_session.js',
//     '/src/tinySIP/src/tsip_stack.js',
//     '/src/tinySIP/src/tsip_timers.js',
//     '/src/tinySIP/src/tsip_uri.js'
//     );


//     await tsip_api_add_js_scripts('head',
//     '/src/tinySIP/src/authentication/tsip_auth.js',
//     '/src/tinySIP/src/authentication/tsip_challenge.js'
//     );

//     await tsip_api_add_js_scripts('head', 
//     '/src/tinySIP/src/dialogs/tsip_dialog.js',
//     '/src/tinySIP/src/dialogs/tsip_dialog_layer.js'
//     );

//     await tsip_api_add_js_scripts('head',
//     '/src/tinySIP/src/headers/tsip_header.js'
//     );
//     if(!window.__b_release_mode){
//         await tsip_api_add_js_scripts('head',
//             '/src/tinySIP/src/headers/tsip_header_Int.js', // 'Content-Length', 'Expires', 'Max-Forwards', 'Min_Expires', 'Min-SE', 'RSeq'
//             '/src/tinySIP/src/headers/tsip_header_NameAddr.js', // 'From', 'To', 'Refer-To', 'Referred-By'
//             // 'src/tinySIP/src/headers/tsip_header_NameAddrArray.js', #include_in<tsip_header_NameAddr.js> // 'P-Asserted-Identity', 'P-Associated-URI', 'P-Preferred-Identity', 'Path', 'Record-Route', 'Route', 'Service-Route'
//             '/src/tinySIP/src/headers/tsip_header_Str.js', // Call-ID, 'Date', 'Event', 'P-Access-Network-Info', 'P-Charging-Function-Addresses', 'Server', SIP-ETag, SIP-If-Match, User-Agent, Warning, Dummy
//             '/src/tinySIP/src/headers/tsip_header_StrArray.js', // 'Allow', 'Allow-Events', 'Privacy', 'Require', 'Supported'
    
//             '/src/tinySIP/src/headers/tsip_header_Authorization.js',
//             '/src/tinySIP/src/headers/tsip_header_Contact.js',
//             '/src/tinySIP/src/headers/tsip_header_Content_Type.js',
//             '/src/tinySIP/src/headers/tsip_header_CSeq.js',
//             '/src/tinySIP/src/headers/tsip_header_RAck.js',
//             '/src/tinySIP/src/headers/tsip_header_Refer_Sub.js',
//             '/src/tinySIP/src/headers/tsip_header_Session_Expires.js',
//             '/src/tinySIP/src/headers/tsip_header_Subscription_State.js',
//             '/src/tinySIP/src/headers/tsip_header_Via.js',
//             '/src/tinySIP/src/headers/tsip_header_WWW_Authenticate.js'
//         );
//     }
//     await tsip_api_add_js_scripts('head',
//     '/src/tinySIP/src/parsers/tsip_parser_header.js'
//     );

//     await tsip_api_add_js_scripts('head',
//     '/src/tinySIP/src/transactions/tsip_transac.js'
//     );

//     await tsip_api_add_js_scripts('head',
//     '/src/tinySIP/src/transports/tsip_transport.js',
//     '/src/tinySIP/src/transports/tsip_transport_layer.js'
//     );
//     CustomEvent.initCustomEvent("tsip-files-loaded", true, true, {});
//     window.dispatchEvent(CustomEvent);

// }())

