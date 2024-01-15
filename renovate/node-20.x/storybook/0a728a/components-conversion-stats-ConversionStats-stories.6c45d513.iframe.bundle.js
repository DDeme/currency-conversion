"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[442],{"./node_modules/@chakra-ui/skeleton/dist/chunk-GOJLRND4.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Skeleton});var react=__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZHQNHOQS=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),styled_system_dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),chunk_ZJJGQIVY=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_DMO4EI7P=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),chunk_7FWEOSAE=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-7FWEOSAE.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StyledSkeleton=(0,chunk_ZHQNHOQS.m)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),$startColor=(0,styled_system_dist.gJ)("skeleton-start-color"),$endColor=(0,styled_system_dist.gJ)("skeleton-end-color"),fade=(0,emotion_react_browser_esm.F4)({from:{opacity:0},to:{opacity:1}}),bgFade=(0,emotion_react_browser_esm.F4)({from:{borderColor:$startColor.reference,background:$startColor.reference},to:{borderColor:$endColor.reference,background:$endColor.reference}}),Skeleton=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const skeletonProps={...props,fadeDuration:"number"==typeof props.fadeDuration?props.fadeDuration:.4,speed:"number"==typeof props.speed?props.speed:.8},styles=(0,chunk_DMO4EI7P.mq)("Skeleton",skeletonProps),isFirstRender=function useIsFirstRender(){const isFirstRender=(0,react.useRef)(!0);return(0,react.useEffect)((()=>{isFirstRender.current=!1}),[]),isFirstRender.current}(),{startColor="",endColor="",isLoaded,fadeDuration,speed,className,fitContent,...rest}=(0,styled_system_dist.Lr)(skeletonProps),[startColorVar,endColorVar]=(0,chunk_7FWEOSAE.dQ)("colors",[startColor,endColor]),wasPreviouslyLoaded=function usePrevious(value){const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=value}),[value]),ref.current}(isLoaded),_className=(0,dist.cx)("chakra-skeleton",className),cssVarStyles={...startColorVar&&{[$startColor.variable]:startColorVar},...endColorVar&&{[$endColor.variable]:endColorVar}};if(isLoaded){const animation=isFirstRender||wasPreviouslyLoaded?"none":`${fade} ${fadeDuration}s`;return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,className:_className,__css:{animation},...rest})}return(0,jsx_runtime.jsx)(StyledSkeleton,{ref,className:_className,...rest,__css:{width:fitContent?"fit-content":void 0,...styles,...cssVarStyles,_dark:{...styles._dark,...cssVarStyles},animation:`${speed}s linear infinite alternate ${bgFade}`}})}));Skeleton.displayName="Skeleton"},"./node_modules/@chakra-ui/stat/dist/chunk-GF2QC326.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>StatNumber});var _chunk_W64KV3Y7_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/stat/dist/chunk-W64KV3Y7.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),StatNumber=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function StatNumber2(props,ref){const styles=(0,_chunk_W64KV3Y7_mjs__WEBPACK_IMPORTED_MODULE_2__.J)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.dd,{ref,...props,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-stat__number",props.className),__css:{...styles.number,fontFeatureSettings:"pnum",fontVariantNumeric:"proportional-nums"}})}));StatNumber.displayName="StatNumber"},"./node_modules/@chakra-ui/stat/dist/chunk-W64KV3Y7.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>useStatStyles,k:()=>Stat});var _chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),[StatStylesProvider,useStatStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.k)({name:"StatStylesContext",errorMessage:"useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Stat />\" "}),Stat=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Stat2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.jC)("Stat",props),statStyles={position:"relative",flex:"1 1 0%",...styles.container},{className,children,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StatStylesProvider,{value:styles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.div,{ref,...rest,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-stat",className),__css:statStyles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dl",{children})})})}));Stat.displayName="Stat"},"./node_modules/@chakra-ui/stat/dist/chunk-Z457NQVE.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>StatLabel});var _chunk_W64KV3Y7_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/stat/dist/chunk-W64KV3Y7.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),StatLabel=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function StatLabel2(props,ref){const styles=(0,_chunk_W64KV3Y7_mjs__WEBPACK_IMPORTED_MODULE_2__.J)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.dt,{ref,...props,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-stat__label",props.className),__css:styles.label})}));StatLabel.displayName="StatLabel"},"./src/components/conversion-stats/ConversionStats.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LoadingSkeleton:()=>LoadingSkeleton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ConversionStats_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_ZHQNHOQS=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StatGroup=(0,chunk_ZJJGQIVY.G)((function StatGroup2(props,ref){return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{...props,ref,role:"group",className:(0,dist.cx)("chakra-stat__group",props.className),__css:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"flex-start"}})}));StatGroup.displayName="StatGroup";var StatResult=__webpack_require__("./src/components/stat-result/StatResult.tsx"),__jsx=react.createElement,ConversionStats=function ConversionStats(_ref){var conversionStats=_ref.conversionStats;return __jsx(StatGroup,{flexDirection:{base:"column",sm:"row"},gap:5},conversionStats.map((function(_ref2){var title=_ref2.title,value=_ref2.value;return __jsx(StatResult.f,{key:title,title},value)})))};ConversionStats.displayName="ConversionStats";try{ConversionStats.displayName="ConversionStats",ConversionStats.__docgenInfo={description:"",displayName:"ConversionStats",props:{conversionStats:{defaultValue:null,description:"",name:"conversionStats",required:!0,type:{name:"ConversionStat[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/conversion-stats/ConversionStats.tsx#ConversionStats"]={docgenInfo:ConversionStats.__docgenInfo,name:"ConversionStats",path:"src/components/conversion-stats/ConversionStats.tsx#ConversionStats"})}catch(__react_docgen_typescript_loader_error){}var chunk_GOJLRND4=__webpack_require__("./node_modules/@chakra-ui/skeleton/dist/chunk-GOJLRND4.mjs"),ConversionStats_stories_jsx=react.createElement;const ConversionStats_stories={component:ConversionStats};var Default={args:{conversionStats:[{title:"Most popular currency",value:"EUR"},{title:"Total amount converted",value:"$293,910.56"},{title:"Total amount converted",value:"1000"}]}},LoadingSkeleton={args:{conversionStats:[{title:"Most popular currency",value:ConversionStats_stories_jsx(chunk_GOJLRND4.O,{height:"1.5rem",mt:2,mb:2,width:"50px"})},{title:"Total amount converted",value:ConversionStats_stories_jsx(chunk_GOJLRND4.O,{height:"1.5rem",mt:2,mb:2,width:"80px"})},{title:"Total amount converted",value:ConversionStats_stories_jsx(chunk_GOJLRND4.O,{height:"1.5rem",mt:2,mb:2,width:"120px"})}]}};const __namedExportsOrder=["Default","LoadingSkeleton"]},"./src/components/stat-result/StatResult.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>StatResult});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/stat/dist/chunk-W64KV3Y7.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/stat/dist/chunk-Z457NQVE.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/stat/dist/chunk-GF2QC326.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,StatResult=function StatResult(_ref){var title=_ref.title,children=_ref.children;return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.k,null,__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.d,null,title),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.J,null,children))};StatResult.displayName="StatResult";try{StatResult.displayName="StatResult",StatResult.__docgenInfo={description:"",displayName:"StatResult",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/stat-result/StatResult.tsx#StatResult"]={docgenInfo:StatResult.__docgenInfo,name:"StatResult",path:"src/components/stat-result/StatResult.tsx#StatResult"})}catch(__react_docgen_typescript_loader_error){}}}]);