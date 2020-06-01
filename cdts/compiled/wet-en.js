/*!
 * Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)
 * github.com/opc-cpvp/cdts-sgdc/blob/master/LICENSE
 * v4.0.26 - 2020-06-01
 *
 */// This file was automatically generated from wet-en.soy.
// Please don't edit this file by hand.

if (typeof wet == 'undefined') { var wet = {}; }
if (typeof wet.builder == 'undefined') { wet.builder = {}; }


wet.builder.serverRefTop = function(opt_data, opt_ignored) {
  return serverPage.serverRefTop(opt_data);
};


wet.builder.serverTop = function(opt_data, opt_ignored) {
  return serverPage.serverTop(opt_data);
};


wet.builder.serverRefBottom = function(opt_data, opt_ignored) {
  return serverPage.serverRefBottom(opt_data);
};


wet.builder.serverBottom = function(opt_data, opt_ignored) {
  return serverPage.serverBottom(opt_data);
};


wet.builder.appTop = function(opt_data, opt_ignored) {
  return applicationPage.appTop(opt_data);
};


wet.builder.appFooter = function(opt_data, opt_ignored) {
  return applicationPage.appFooter(opt_data);
};


wet.builder.environment = function(opt_data, opt_ignored) {
  return (opt_data.cdnEnv == 'esdcqat' || opt_data.cdnEnv == 'esdcprod' || opt_data.cdnEnv == 'esdcnonprod') ? '/cdts/' : (opt_data.cdnPath != null) ? soy.$$escapeHtml(opt_data.cdnPath) : 'https://priv.gc.ca/app/cls/WET/gcweb-opc/v4_0_26/';
};


wet.builder.refTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/favicon.ico\' rel="icon" type="image/x-icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/theme.min.css\' /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/cdtsfixes.css\'>' + ((opt_data.isApplication == true) ? '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/cdtsapps.css\'>' : '') + '<!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/ie8-theme.min.css\' /><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/jquery/1.11.1/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]--><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/opc-style.css\' /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/cms-css/feedback.css\' />';
  if (opt_data.webAnalytics != null) {
    output += '<script type="text/javascript">var _paq = (function (paq) {var removeTrailingSlash = function(site) {return site.replace(/\\/$/, \'\');}';
    var aaList53 = opt_data.webAnalytics;
    var aaListLen53 = aaList53.length;
    for (var aaIndex53 = 0; aaIndex53 < aaListLen53; aaIndex53++) {
      var aaData53 = aaList53[aaIndex53];
      output += ((aaData53.environment == 'staging') ? 'var u = "https://staging-www.priv.gc.ca/m/";' : 'var u = "https://priv.gc.ca/m/";') + 'var u = "https://priv.gc.ca/m/"; var url = removeTrailingSlash(window.location.href).toLowerCase(); paq.push([\'setCustomDimension\', \'2\', url]); paq.push([\'setCustomUrl\', url]); paq.push([\'enableLinkTracking\']); paq.push([\'trackPageView\']); paq.push([\'trackVisibleContentImpressions\']); paq.push([\'setTrackerUrl\', u + \'m.php\']); paq.push([\'setSiteId\',  \'' + soy.$$escapeHtml(aaData53.siteId) + '\']);';
    }
    output += 'var d = document, g = d.createElement(\'script\'), s = d.getElementsByTagName(\'script\')[0]; g.type = \'text/javascript\'; g.async = true; g.defer = true; g.src = u + \'m.js\'; s.parentNode.insertBefore(g, s); return paq;})(window._paq || []);<\/script>';
  }
  return output;
};


wet.builder.top = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<section aria-label="Skip to"><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "About this site"</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : '') + '</ul></section><header role="banner"><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="visible-md visible-lg text-right" aria-labelledby="lang-section"><h2 id="lang-section" class="wb-inv">Language selection</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none">';
    var linkList73 = opt_data.lngLinks;
    var linkListLen73 = linkList73.length;
    for (var linkIndex73 = 0; linkIndex73 < linkListLen73; linkIndex73++) {
      var linkData73 = linkList73[linkIndex73];
      output += '<li><a hreflang="' + soy.$$escapeHtml(linkData73.lang) + '" lang="' + soy.$$escapeHtml(linkData73.lang) + '" href="' + soy.$$escapeHtml(linkData73.href) + '">' + soy.$$escapeHtml(linkData73.text) + '</a></li>';
    }
    output += '</ul></div></div></section>';
  }
  output += '<div class="row"><div class="brand col-xs-8 col-sm-9 col-md-5">' + ((opt_data.siteMenu != false) ? '<a href="https://priv.gc.ca/en/" property="url">' : '') + '<img class="visible-print-block" src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-en.png\' alt=""><img src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-wht-en.png\' class="hidden-print img img-responsive" alt="OPC Logo"/><span class="wb-inv"> Office of the Privacy Commissioner of Canada</span>' + ((opt_data.siteMenu != false) ? '</a>' : '') + '</div><section class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs" id="wb-glb-mn" aria-labelledby="search-menu-section"><h2 id="search-menu-section">Search and menus</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="Search and menus" aria-controls="mb-pnl" class="overlay-lnk" role="button"><span class="glyphicon glyphicon-search"><span class="glyphicon glyphicon-th-list"><span class="wb-inv">Search and menus</span></span></span></a></li></ul><div id="mb-pnl"></div></section>' + ((opt_data.search != false) ? '<section id="wb-srch" class="col-xs-7 text-right visible-md visible-lg" aria-labelledby="search-section"><h2 id="search-section">Search</h2><form action="https://priv.gc.ca/en/search" class="form-inline" enctype="multipart/form-data" method="post" name="cse-search-box" role="search"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Search website</label><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="t" type="search" value="" size="27" maxlength="150" placeholder="Search priv.gc.ca" /><datalist id="wb-srch-q-ac"><!--[if lte IE 9]><select><![endif]--><!--[if lte IE 9]></select><![endif]--></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></div><input name=\'ufprt\' type=\'hidden\' value=\'FA9E9C90CBEC92DB4B7B8682502BEFB950B53DE80236602CAE04A6F2DEB49BAB9910BABD1FDF3DB45157B92AB4BC56EC2A6F0F9B73F33F1861E98CB7085A35D879163CB4A9EF37932297B282EB3AE4DA706D29B280ACF4C982435C30C187B3A659BF45C3C73F49876CF62B693423973EFC001049D317307E25184C9CE9BE107A\' /></form></section>' : '') + '</div></div>' + ((opt_data.siteMenu != false) ? '<nav id="wb-sm" data-ajax-replace="https://priv.gc.ca/ajax/sitemenu-en" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement" aria-labelledby="topics-menu-section"><div class="container nvbar"><h2 id="topics-menu-section">Topics menu</h2><div class="row"><ul class="list-inline menu"><li><a href="https://priv.gc.ca/en/for-individuals/" class="item">For individuals</a></li><li><a href="https://priv.gc.ca/en/for-businesses/" class="item">For businesses</a></li><li><a href="https://priv.gc.ca/en/for-federal-institutions/" class="item">For federal institutions</a></li><li><a href="https://priv.gc.ca/en/report-a-concern/" class="item">Report a concern</a></li><li><a href="https://priv.gc.ca/en/opc-actions-and-decisions/" class="item">OPC actions and decisions</a></li><li><a href="https://priv.gc.ca/en/about-the-opc/" class="item">About the OPC</a></li></ul></div></div></nav>' : '<div class="transactBar"></div>');
  if (opt_data.breadcrumbs != false) {
    output += '<nav id="wb-bc" property="breadcrumb" aria-labelledby="you-are-here"><h2 id="you-are-here">You are here:</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList112 = opt_data.breadcrumbs;
      var itemListLen112 = itemList112.length;
      for (var itemIndex112 = 0; itemIndex112 < itemListLen112; itemIndex112++) {
        var itemData112 = itemList112[itemIndex112];
        output += '<li>' + ((itemData112.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData112.acronym) + '">' : '') + ((itemData112.href != null) ? '<a href="' + soy.$$escapeHtml(itemData112.href) + '">' : '') + soy.$$escapeHtml(itemData112.title) + ((itemData112.href != null) ? '</a>' : '') + ((itemData112.acronym != null) ? '</abbr>' : '') + '</li>';
      }
    } else {
      output += '<li><a href="https://priv.gc.ca/en/">Home</a></li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


wet.builder.preFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t' + ((opt_data.showPostContent != false) ? '' : '');
  if (opt_data.pagedetails != false) {
    output += '<div class="pagedetails' + ((opt_data.isContainer != null) ? ' container' : '') + '">';
    if (opt_data.showFeedback != false || opt_data.showShare != false) {
      output += '<div class="row mrgn-tp-sm">' + ((opt_data.showFeedback != false) ? (opt_data.showFeedback != null && opt_data.showFeedback != true) ? '<div class="col-sm-6 col-md-5 col-lg-5"><a href="' + soy.$$escapeHtml(opt_data.showFeedback) + '" class="btn btn-default btn-center">Report a problem on this page</a></div>' : '<div class="col-sm-6 col-md-5 col-lg-5" id="reportAProblem"><details class="brdr-0" aria-labelledby="problemSection"><summary class="btn btn-default" id="problemSection">Report a problem or mistake on this page</summary><div class="well row"><div><div id="wb-auto-3"><strong class="error" id="validationSummary2" role="alert" aria-atomic="true"><span class="label label-danger"><span class="prefix">Error&nbsp;1:&nbsp;</span>No selection was made. You must choose at least 1 answer.</span></strong><form action="https://priv.gc.ca/en/for-individuals/" enctype="multipart/form-data" id="reportAProblemForm" method="post"><input id="ProblemContentId" name="ProblemContentId" type="hidden" value="" /><input name="__RequestVerificationToken" type="hidden" value="" /><fieldset id="reportAProblemInputs"><legend class="required"><span class="field-name">Please select all that apply </span><span class="redspan"><strong>(required)</strong></span>:</legend><div class="checkbox"><label for="PageHasBrokenLink"><input id="PageHasBrokenLink" name="PageHasBrokenLink" type="checkbox" value="true" /><input name="PageHasBrokenLink" type="hidden" value="false" /> There are broken links.</label></div><div class="checkbox"><label for="PageHasSpellingOrGrammarMistakes"><input id="PageHasSpellingOrGrammarMistakes" name="PageHasSpellingOrGrammarMistakes" type="checkbox" value="true" /><input name="PageHasSpellingOrGrammarMistakes" type="hidden" value="false" /> The page has spelling or grammar mistakes.</label></div><div class="checkbox"><label for="InfoIsOutdated2"><input id="InfoIsOutdated2" name="InfoIsOutdated2" type="checkbox" value="true" /><input name="InfoIsOutdated2" type="hidden" value="false" /> The information is wrong or outdated.</label></div><div class="checkbox"><label for="OtherReason3"><input id="OtherReason3" name="OtherReason3" type="checkbox" value="true" /><input name="OtherReason3" type="hidden" value="false" /> Other</label><div class="form-group" id="otherReasonComments3"><label for="Comments3">Please specify (maximum of 750 characters):</label><textarea name="Comments" class="form-control" id="Comments3" maxlength="750" rows="2" cols="20"></textarea></div></div></fieldset><div id="noteAndSubmit2"><div class="alert alert-info"><h2 class="h5">Note</h2><ul><li><small><strong>You will not receive a reply.</strong> For enquiries, please <a href="https://priv.gc.ca/en/contact-the-opc/">contact the Office of the Privacy Commissioner</a>.</small></li><li><small><strong>Do not include any personal information,</strong> such as your name, social insurance number (SIN), home or business address or any case or files numbers.</small></li><li><small><strong>For more information about this tool</strong>, please refer to our <a href="https://priv.gc.ca/en/privacy-and-transparency-at-the-opc/terms-and-conditions-of-use/">terms and conditions of use</a>.</small></li></ul></div><div><input type="submit" class="btn btn-primary" value="Submit" aria-controls="wb-auto-3" id="btnSubmitProblem" /></div></div><input name=\'ufprt\' type=\'hidden\' value=\'\' /></form></div><div id="reportAProblemSubmissionResults"></div></div></div></details></div>' : '');
      if (opt_data.showShare != false) {
        if (opt_data.showShare != null) {
          output += '<div class="wb-share col-sm-4 col-md-3 col-sm-offset-' + ((opt_data.showFeedback != false) ? '2' : '8') + ' col-md-offset-' + ((opt_data.showFeedback != false) ? '4' : '9') + ((opt_data.showFeedback != false) ? ' col-lg-offset-4' : '') + '" data-wb-share=\'{"filter": [';
          var itemList182 = opt_data.showShare;
          var itemListLen182 = itemList182.length;
          for (var itemIndex182 = 0; itemIndex182 < itemListLen182; itemIndex182++) {
            var itemData182 = itemList182[itemIndex182];
            output += '"' + soy.$$escapeHtml(itemData182) + '"' + ((! (itemIndex182 == itemListLen182 - 1)) ? ', ' : '');
          }
          output += '], "lnkClass": "btn btn-default btn-block"}\'></div>';
        } else {
          output += '<div class="wb-share col-sm-4 col-md-3 col-sm-offset-' + ((opt_data.showFeedback != false) ? '2' : '8') + ' col-md-offset-' + ((opt_data.showFeedback != false) ? '4' : '9') + ((opt_data.showFeedback != false) ? ' col-lg-offset-4' : '') + '" data-wb-share=\'{"lnkClass": "btn btn-default btn-block"}\'></div>';
        }
      }
      output += '</div>';
    }
    output += '<dl id="wb-dtmd">' + ((opt_data.screenIdentifier != null) ? '<dt>Screen Identifier:&#32;</dt><dd property="identifier">' + soy.$$escapeHtml(opt_data.screenIdentifier) + '</dd>' : '') + ((opt_data.dateModified != null) ? '<dt>Date modified:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd>' : '') + ((opt_data.versionIdentifier != null) ? '<dt>Version:&#32;</dt><dd property="version">' + soy.$$escapeHtml(opt_data.versionIdentifier) + '</dd>' : '') + '</dl></div>';
  }
  return output;
};


wet.builder.secmenu = function(opt_data, opt_ignored) {
  var output = '\t\t\t<h2 id="wb-sec-h" class="wb-inv">Section menu</h2>';
  var sectionList228 = opt_data.sections;
  var sectionListLen228 = sectionList228.length;
  for (var sectionIndex228 = 0; sectionIndex228 < sectionListLen228; sectionIndex228++) {
    var sectionData228 = sectionList228[sectionIndex228];
    output += '<section class="list-group menu list-unstyled"><h3>' + ((sectionData228.sectionLink != null) ? '<a href="' + soy.$$escapeHtml(sectionData228.sectionLink) + '"' + ((sectionData228.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' : '') + soy.$$escapeHtml(sectionData228.sectionName) + ((sectionData228.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + ((sectionData228.sectionLink != null) ? '</a>' : '') + '</h3><ul class="list-group menu list-unstyled">';
    var linkList247 = sectionData228.menuLinks;
    var linkListLen247 = linkList247.length;
    for (var linkIndex247 = 0; linkIndex247 < linkListLen247; linkIndex247++) {
      var linkData247 = linkList247[linkIndex247];
      if (linkData247.subLinks != null) {
        output += '<li><a href="' + soy.$$escapeHtml(linkData247.href) + '" class="list-group-item"' + ((linkData247.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData247.text) + ((linkData247.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a><ul class="list-group menu list-unstyled">';
        var sublinkList262 = linkData247.subLinks;
        var sublinkListLen262 = sublinkList262.length;
        for (var sublinkIndex262 = 0; sublinkIndex262 < sublinkListLen262; sublinkIndex262++) {
          var sublinkData262 = sublinkList262[sublinkIndex262];
          output += '<li><a href="' + soy.$$escapeHtml(sublinkData262.subhref) + '" class="list-group-item"' + ((sublinkData262.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData262.subtext) + ((sublinkData262.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData247.href) + '" class="list-group-item"' + ((linkData247.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData247.text) + ((linkData247.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
      }
    }
    output += '</ul></section>';
  }
  return output;
};


wet.builder.footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<footer id="wb-info">';
  if (opt_data.showFooter != false) {
    output += '<nav class="container visible-sm visible-md visible-lg wb-navcurr" aria-labelledby="footer-links"><h2 class="wb-inv" id="footer-links">About this site</h2><div class="row"><div class="col-md-3"><section aria-labelledby="about-opc-section"><h3 id="about-opc-section">About the OPC</h3><p>The Privacy Commissioner of Canada is an Agent of Parliament whose mission is to protect and promote privacy rights.</p><ul class="list-unstyled"><li><a href="https://priv.gc.ca/en/about-the-opc/who-we-are/">Who we are</a></li><li><a href="https://priv.gc.ca/en/about-the-opc/what-we-do/">What we do</a></li><li><a href="https://priv.gc.ca/en/about-the-opc/opc-operational-reports/">OPC operational reports</a></li><li><a href="https://priv.gc.ca/en/about-the-opc/publications/">Publications</a></li><li><a href="https://priv.gc.ca/en/about-the-opc/working-at-the-opc/">Working at the OPC</a></li></ul></section></div><div class="col-md-3"><section aria-labelledby="opc-news-section"><h3 id="opc-news-section">OPC news</h3><p>Get updates about the OPC’s announcements and activities, as well as the events in which we participate.</p><ul class="list-unstyled"><li><a href="https://priv.gc.ca/en/opc-news/news-and-announcements/">News and announcements</a></li><li><a href="https://priv.gc.ca/en/opc-news/privacy-events/">Privacy events</a></li><li><a href="https://priv.gc.ca/en/opc-news/speeches/">Speeches</a></li></ul></section></div><div class="col-md-3"><section aria-labelledby="respect-section"><h3 id="respect-section">Your privacy</h3><p><strong>We respect your privacy</strong></p><p>Read our <a href="https://priv.gc.ca/en/privacy-and-transparency-at-the-opc/pp/">Privacy policy</a> and <a href="https://priv.gc.ca/en/privacy-and-transparency-at-the-opc/terms-and-conditions-of-use/">Terms and conditions of use</a> to find out more about your privacy and rights when using the <a href="https://priv.gc.ca/">priv.gc.ca</a> website or contacting the Office of the Privacy Commissioner of Canada.</p></section><section aria-labelledby="transparency-section"><h3 id="transparency-section">Transparency</h3><ul class="list-unstyled"><li><a href="https://priv.gc.ca/en/privacy-and-transparency-at-the-opc/proactive-disclosure/">Proactive disclosure</a></li></ul></section></div><div class="col-md-3"><section aria-labelledby="contact-us-section"><h3 id="contact-us-section">Contact us</h3><p>If you have a question, concerns about your privacy or want to file a complaint against an organization, we are here to help.</p>';
    if (opt_data.contactLinks != null) {
      output += '<ul class="list-unstyled colcount-sm-2 colcount-md-3">';
      var linkList301 = opt_data.contactLinks;
      var linkListLen301 = linkList301.length;
      for (var linkIndex301 = 0; linkIndex301 < linkListLen301; linkIndex301++) {
        var linkData301 = linkList301[linkIndex301];
        output += (linkIndex301 == 0) ? '<li><a href="' + soy.$$escapeHtml(linkData301.href) + '">Contact us</a></li>' : '';
      }
      output += '</ul>';
    } else {
      output += '<a href="https://priv.gc.ca/en/contact-the-opc/" role="button" class="btn btn-default active">Contact the OPC</a>';
    }
    output += '</section><section aria-labelledby="stay-connected-section"><h3 id="stay-connected-section">Stay connected</h3><ul class="list-unstyled"><li><span class="fa fa-comments"></span> <a href="https://priv.gc.ca/en/blog">OPC Blog</a></li><li><span class="fa fa-linkedin-square"></span> <a href="https://www.linkedin.com/company/office-of-the-privacy-commissioner-of-canada">OPC LinkedIn</a></li><li><span class="fa fa-rss-square"></span> <a href="https://priv.gc.ca/en/rss-feeds/">OPC RSS feeds</a></li><li><span class="fa fa-twitter"></span> <a href="https://twitter.com/PrivacyPrivee">OPC Twitter</a></li><li><span class="fa fa-youtube"></span> <a href="https://www.youtube.com/user/PrivacyComm">OPC YouTube channel</a></li></ul></section></div></div></nav>';
  } else {
    output += '<div id="transactFooter" class="landscape"></div><nav class="container visible-sm visible-md visible-lg wb-navcurr ftr-urlt-lnk"><h2 class="wb-inv">About this site</h2><ul>';
    if (opt_data.contactLinks != null) {
      var linkList316 = opt_data.contactLinks;
      var linkListLen316 = linkList316.length;
      for (var linkIndex316 = 0; linkIndex316 < linkListLen316; linkIndex316++) {
        var linkData316 = linkList316[linkIndex316];
        output += (linkIndex316 == 0) ? '<li><a ' + ((linkData316.href) ? ' href="' + soy.$$escapeHtml(linkData316.href) + '"' : ' href="https://priv.gc.ca/en/contact-the-opc/"') + ((linkData316.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Contact information' + ((linkData316.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://priv.gc.ca/en/contact-the-opc/">Contact information</a></li>';
    }
    if (opt_data.termsLink != null) {
      var linkList340 = opt_data.termsLink;
      var linkListLen340 = linkList340.length;
      for (var linkIndex340 = 0; linkIndex340 < linkListLen340; linkIndex340++) {
        var linkData340 = linkList340[linkIndex340];
        output += (linkIndex340 == 0) ? '<li><a ' + ((linkData340.href) ? ' href="' + soy.$$escapeHtml(linkData340.href) + '"' : ' href="https://priv.gc.ca/en/privacy-and-transparency-at-the-opc/terms-and-conditions-of-use/"') + ((linkData340.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Terms and conditions' + ((linkData340.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://priv.gc.ca/en/privacy-and-transparency-at-the-opc/terms-and-conditions-of-use/">Terms and conditions</a></li>';
    }
    if (opt_data.privacyLink != null) {
      var linkList364 = opt_data.privacyLink;
      var linkListLen364 = linkList364.length;
      for (var linkIndex364 = 0; linkIndex364 < linkListLen364; linkIndex364++) {
        var linkData364 = linkList364[linkIndex364];
        output += (linkIndex364 == 0) ? '<li><a ' + ((linkData364.href) ? ' href="' + soy.$$escapeHtml(linkData364.href) + '"' : ' href="https://priv.gc.ca/en/privacy-and-transparency-at-the-opc/pp/"') + ((linkData364.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Privacy' + ((linkData364.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://priv.gc.ca/en/privacy-and-transparency-at-the-opc/pp/">Privacy</a></li>';
    }
    output += '</ul></nav>';
  }
  output += '<div class="brand"><div class="container"><div class="row "><div class="col-md-6"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-en.png\' class="img img-responsive" alt="OPC Logo" /><span class="wb-inv">Office of Privacy Commissioner of Canada</span></div><div class="col-md-6 tofpg text-right"><a href="#wb-cont">Top of Page <span class="fa fa-arrow-circle-up"></span></a></div></div></div></div></footer>';
  return output;
};


wet.builder.refFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><script src=\'' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs/' : wet.builder.environment(opt_data) + 'wet-boew/js/') + 'jquery/2.1.4/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/js/theme.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/cms-scripts/feedback.js\'><\/script>' + ((opt_data.exitScript == true) ? '<script src=\'' + wet.builder.environment(opt_data) + 'cdts/js/exitScript.js\'><\/script><script data-id="exitScript" data-token="' + soy.$$escapeHtml(opt_data.exitURL) + '" data-token-domains="' + soy.$$escapeHtml(opt_data.exitDomains) + '" data-token-modal="' + soy.$$escapeHtml(opt_data.displayModal) + '">clickA();<\/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Secure exit notice</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Warning</h2></header><div class="modal-body"><p>' + ((opt_data.exitMsg != null && opt_data.exitMsg.length > 0) ? soy.$$escapeHtml(opt_data.exitMsg) : 'You are about to leave a secure site, do you wish to continue?') + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + ((opt_data.cancelMsg != null && opt_data.cancelMsg.length > 0) ? soy.$$escapeHtml(opt_data.cancelMsg) : 'Cancel') + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + ((opt_data.yesMsg != null && opt_data.yesMsg.length > 0) ? soy.$$escapeHtml(opt_data.yesMsg) : 'Yes') + '</a></li></ul></div></section>' : '') + ((opt_data.isApplication == true) ? '<script src=\'' + wet.builder.environment(opt_data) + 'cdts/js/cdtscustom.js\'><\/script>' : '') + ((opt_data.webAnalytics != null) ? '' : '');
};


wet.builder.splashTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/theme.min.css\'><!--<![endif]--><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/messages.min.css\'><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/messages-ie.min.css\' /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/ie8-theme.min.css\' /><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/jquery/1.11.4/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]-->';
};


wet.builder.splash = function(opt_data, opt_ignored) {
  var output = '\t\t<div id="bg"></div><main><div class="sp-hb"><div class="sp-bx col-xs-12"><h1 property="name" class="wb-inv">Office of the Privacy Commissioner</h1><div class="row"><div class="col-md-12"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-fr.png\' class="img img-responsive" alt="Commissariat à la protection de la vie privée du Canada / Office of the Privacy Commissioner" /></div></div><div class="row"><section class="col-xs-6 text-right" lang="fr">' + ((opt_data.nameFra != null) ? '<h2>' + soy.$$escapeHtml(opt_data.nameFra) + '</h2>' : '<h2 class="wb-inv">Commissariat à la protection de la vie privée du Canada</h2>') + '<p><a href="' + soy.$$escapeHtml(opt_data.indexFra) + '" class="btn btn-primary" lang="fr">Français</a></p></section><section class="col-xs-6" lang="en">' + ((opt_data.nameEng != null) ? '<h2>' + soy.$$escapeHtml(opt_data.nameEng) + '</h2>' : '<h2 class="wb-inv">Office of the Privacy Commissioner</h2>') + '<p><a href="' + soy.$$escapeHtml(opt_data.indexEng) + '" class="btn btn-primary" lang="en">English</a></p></section></div></div><div class="sp-bx-bt col-xs-12"><div class="row"><div class="col-xs-12 col-md-12"><a href="' + soy.$$escapeHtml(opt_data.termsFra) + '" class="sp-lk" lang="fr">Conditions d\'utilisation</a> <span class="glyphicon glyphicon-asterisk"></span> <a href="' + soy.$$escapeHtml(opt_data.termsEng) + '" class="sp-lk">Terms & conditions</a></div></div></div></div></main><!--[if gte IE 9 | !IE ]><!--><script src="' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs' : wet.builder.environment(opt_data) + 'wet-boew/js/') + 'jquery/2.1.4/jquery.min.js"><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/js/theme.min.js\'><\/script><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/cdtsfixes.css\'>';
  if (opt_data.webAnalytics != null) {
    output += '<script type="text/javascript">var _paq = (function (paq) {var removeTrailingSlash = function(site) {return site.replace(/\\/$/, \'\');}';
    var aaList507 = opt_data.webAnalytics;
    var aaListLen507 = aaList507.length;
    for (var aaIndex507 = 0; aaIndex507 < aaListLen507; aaIndex507++) {
      var aaData507 = aaList507[aaIndex507];
      output += ((aaData507.environment == 'staging') ? 'var u = "https://staging-www.priv.gc.ca/m/";' : 'var u = "https://priv.gc.ca/m/";') + 'var u = "https://priv.gc.ca/m/"; var url = removeTrailingSlash(window.location.href).toLowerCase(); paq.push([\'setCustomDimension\', \'2\', url]); paq.push([\'setCustomUrl\', url]); paq.push([\'enableLinkTracking\']); paq.push([\'trackPageView\']); paq.push([\'trackVisibleContentImpressions\']); paq.push([\'setTrackerUrl\', u + \'m.php\']); paq.push([\'setSiteId\',  \'' + soy.$$escapeHtml(aaData507.siteId) + '\']);';
    }
    output += 'var d = document, g = d.createElement(\'script\'), s = d.getElementsByTagName(\'script\')[0]; g.type = \'text/javascript\'; g.async = true; g.defer = true; g.src = u + \'m.js\'; s.parentNode.insertBefore(g, s); return paq;})(window._paq || []);<\/script>';
  }
  return output;
};

// This file was automatically generated from appPage-en.soy.
// Please don't edit this file by hand.

if (typeof applicationPage == 'undefined') { var applicationPage = {}; }


applicationPage.appTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "' + ((opt_data.topCusMenu == true) ? 'Related links' : 'About this Web application') + '"</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : '') + '</ul><header><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Language selection</h2><ul class="list-inline margin-bottom-none">';
    var linkList17 = opt_data.lngLinks;
    var linkListLen17 = linkList17.length;
    for (var linkIndex17 = 0; linkIndex17 < linkListLen17; linkIndex17++) {
      var linkData17 = linkList17[linkIndex17];
      output += '<li><a lang="' + soy.$$escapeHtml(linkData17.lang) + '" href="' + soy.$$escapeHtml(linkData17.href) + '">' + soy.$$escapeHtml(linkData17.text) + '</a></li>';
    }
    output += '</ul></section>';
  }
  output += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization"><img class="visible-print-block" src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-en.png\' alt=""><img src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-wht-en.png\' class="hidden-print img img-responsive" alt="OPC Logo"/><span class="wb-inv"> Office of the Privacy Commissioner of Canada</span><meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/wmms-blk.svg\' /></div>';
  if (opt_data.customSearch != null) {
    var itemList36 = opt_data.customSearch;
    var itemListLen36 = itemList36.length;
    for (var itemIndex36 = 0; itemIndex36 < itemListLen36; itemIndex36++) {
      var itemData36 = itemList36[itemIndex36];
      if (itemIndex36 == 0) {
        output += '<section id="wb-srch" class="col-lg-8 text-right visible-md visible-lg"><h2>Search' + ((itemData36.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData36.placeholder) : '') + '</h2><form action="' + soy.$$escapeHtml(itemData36.action) + '" method="' + soy.$$escapeHtml(itemData36.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData36.id != null) ? soy.$$escapeHtml(itemData36.id) : 'wb-srch-q') + '" class="wb-inv">Search' + ((itemData36.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData36.placeholder) : '') + '</label><input id="' + ((itemData36.id != null) ? soy.$$escapeHtml(itemData36.id) : 'wb-srch-q') + '" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search' + ((itemData36.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData36.placeholder) : '') + '">';
        if (itemData36.hiddenInput != null) {
          var inputList73 = itemData36.hiddenInput;
          var inputListLen73 = inputList73.length;
          for (var inputIndex73 = 0; inputIndex73 < inputListLen73; inputIndex73++) {
            var inputData73 = inputList73[inputIndex73];
            output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData73.name) + '" value="' + soy.$$escapeHtml(inputData73.value) + '" />';
          }
        }
        output += '</div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search' + ((itemData36.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData36.placeholder) : '') + '</span></button></div></form></section>';
      }
    }
  }
  output += '</div></div><div class="app-bar"><div class="container"><div class="row">' + ((opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) ? '<section class="col-xs-12 col-sm-7">' : '<section class="col-xs-12">');
  var itemList93 = opt_data.appName;
  var itemListLen93 = itemList93.length;
  for (var itemIndex93 = 0; itemIndex93 < itemListLen93; itemIndex93++) {
    var itemData93 = itemList93[itemIndex93];
    output += (itemIndex93 == 0) ? '<h2 class="wb-inv">Name of Web application</h2><a class="app-name" href="' + soy.$$escapeHtml(itemData93.href) + '">' + soy.$$escapeHtml(itemData93.text) + '</a>' : '';
  }
  output += '</section>';
  if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<nav class="col-sm-5 hidden-xs hidden-print"><h2 class="wb-inv">Account menu</h2><ul class="app-list-account list-unstyled">';
    if (opt_data.appSettings != null) {
      var itemList108 = opt_data.appSettings;
      var itemListLen108 = itemList108.length;
      for (var itemIndex108 = 0; itemIndex108 < itemListLen108; itemIndex108++) {
        var itemData108 = itemList108[itemIndex108];
        output += (itemIndex108 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData108.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;' : '';
      }
    }
    if (opt_data.signOut != null) {
      var itemList117 = opt_data.signOut;
      var itemListLen117 = itemList117.length;
      for (var itemIndex117 = 0; itemIndex117 < itemListLen117; itemIndex117++) {
        var itemData117 = itemList117[itemIndex117];
        output += (itemIndex117 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData117.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>' : '';
      }
    } else if (opt_data.signIn != null) {
      var itemList125 = opt_data.signIn;
      var itemListLen125 = itemList125.length;
      for (var itemIndex125 = 0; itemIndex125 < itemListLen125; itemIndex125++) {
        var itemData125 = itemList125[itemIndex125];
        output += (itemIndex125 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData125.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>' : '';
      }
    }
    output += '</ul></nav>';
  }
  output += '</div></div></div>';
  if (opt_data.customSearch != null || opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true || opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<div class="app-bar-mb container visible-xs-block hidden-print">';
    if (opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true || opt_data.customSearch != null) {
      output += '<nav><h2 class="wb-inv">' + ((opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true) ? 'Menu' + ((opt_data.customSearch != null) ? ' and search' : '') : 'Search') + '</h2><ul class="app-list-main list-unstyled">' + ((opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true) ? '<li class="wb-mb-links" id="wb-glb-mn"><a href="#mb-pnl" aria-controls="mb-pnl" class="btn overlay-lnk" role="button">Menu</a><h2>Menu</h2></li>' : '') + ((opt_data.customSearch != null) ? '<li><a href="#app-srch-mb" title="Search" aria-controls="app-srch-mb" class="btn overlay-lnk" role="button"><span class="glyphicon-search glyphicon" aria-hidden="true"></span><span class="wb-inv">Search</span></a></li>' : '') + '</ul><div id="mb-pnl"></div>';
      if (opt_data.customSearch != null) {
        var itemList158 = opt_data.customSearch;
        var itemListLen158 = itemList158.length;
        for (var itemIndex158 = 0; itemIndex158 < itemListLen158; itemIndex158++) {
          var itemData158 = itemList158[itemIndex158];
          if (itemIndex158 == 0) {
            output += '<section id="app-srch-mb" class="wb-overlay modal-content overlay-def wb-bar-t"><div class="modal-header"><h3 class="modal-title">Search' + ((itemData158.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData158.placeholder) : '') + '</h3></div><div class="modal-body"><form action="' + soy.$$escapeHtml(itemData158.action) + '" method="' + soy.$$escapeHtml(itemData158.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="input-group"><label for="' + ((itemData158.id != null) ? 'app-' + soy.$$escapeHtml(itemData158.id) : 'app-srch-q-mb') + '" class="wb-inv">Search' + ((itemData158.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData158.placeholder) : '') + '</label><input placeholder="Search' + ((itemData158.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData158.placeholder) : '') + '" id="' + ((itemData158.id != null) ? 'app-' + soy.$$escapeHtml(itemData158.id) : 'app-srch-q-mb') + '" class="app-srch-q-mb form-control" name="q" type="search" value="" size="27" maxlength="150">';
            if (itemData158.hiddenInput != null) {
              var inputList197 = itemData158.hiddenInput;
              var inputListLen197 = inputList197.length;
              for (var inputIndex197 = 0; inputIndex197 < inputListLen197; inputIndex197++) {
                var inputData197 = inputList197[inputIndex197];
                output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData197.name) + '" value="' + soy.$$escapeHtml(inputData197.value) + '" />';
              }
            }
            output += '<span class="input-group-btn"><button type="submit" id="app-srch-sub-mb" class="btn btn-primary btn-small" name="app-srch-sub-mb"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search' + ((itemData158.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData158.placeholder) : '') + '</span></button></span></div></form></div></section>';
          }
        }
      }
      output += '</nav>';
    }
    if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
      output += '<nav><h2 class="wb-inv">Account menu</h2><ul class="app-list-account list-unstyled">';
      if (opt_data.appSettings != null) {
        var itemList217 = opt_data.appSettings;
        var itemListLen217 = itemList217.length;
        for (var itemIndex217 = 0; itemIndex217 < itemListLen217; itemIndex217++) {
          var itemData217 = itemList217[itemIndex217];
          output += (itemIndex217 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData217.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;' : '';
        }
      }
      if (opt_data.signOut != null) {
        var itemList226 = opt_data.signOut;
        var itemListLen226 = itemList226.length;
        for (var itemIndex226 = 0; itemIndex226 < itemListLen226; itemIndex226++) {
          var itemData226 = itemList226[itemIndex226];
          output += (itemIndex226 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData226.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>' : '';
        }
      } else if (opt_data.signIn != null) {
        var itemList234 = opt_data.signIn;
        var itemListLen234 = itemList234.length;
        for (var itemIndex234 = 0; itemIndex234 < itemListLen234; itemIndex234++) {
          var itemData234 = itemList234[itemIndex234];
          output += (itemIndex234 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData234.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>' : '';
        }
      }
      output += '</ul></nav>';
    }
    output += '</div>';
    if (opt_data.menuLinks != null) {
      output += '<nav id="wb-sm" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Main navigation menu</h2><div class="row"><ul class="list-inline menu" role="menubar">';
      var linkList246 = opt_data.menuLinks;
      var linkListLen246 = linkList246.length;
      for (var linkIndex246 = 0; linkIndex246 < linkListLen246; linkIndex246++) {
        var linkData246 = linkList246[linkIndex246];
        if (linkData246.subLinks != null) {
          output += '<li><a href="#' + soy.$$escapeHtml(linkData246.id) + '" class="item"' + ((linkData246.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData246.text) + ((linkData246.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtml(linkData246.id) + '" role="menu">';
          var sublinkList263 = linkData246.subLinks;
          var sublinkListLen263 = sublinkList263.length;
          for (var sublinkIndex263 = 0; sublinkIndex263 < sublinkListLen263; sublinkIndex263++) {
            var sublinkData263 = sublinkList263[sublinkIndex263];
            output += (sublinkIndex263 == sublinkListLen263 - 1) ? '<li class="slflnk"><a href="' + soy.$$escapeHtml(sublinkData263.subhref) + '"' + ((sublinkData263.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData263.subtext) + ((sublinkData263.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '<li><a href="' + soy.$$escapeHtml(sublinkData263.subhref) + '"' + ((sublinkData263.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData263.subtext) + ((sublinkData263.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
          }
          output += '</ul></li>';
        } else {
          output += '<li><a href="' + soy.$$escapeHtml(linkData246.href) + '" class="item"' + ((linkData246.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData246.text) + ((linkData246.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
        }
      }
      output += '</ul></div></div></nav>';
    } else if (opt_data.menuPath != null) {
      output += '<nav id="wb-sm" data-ajax-replace="' + soy.$$escapeHtml(opt_data.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>';
    }
  }
  if (opt_data.breadcrumbs != null) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    var itemList315 = opt_data.breadcrumbs;
    var itemListLen315 = itemList315.length;
    for (var itemIndex315 = 0; itemIndex315 < itemListLen315; itemIndex315++) {
      var itemData315 = itemList315[itemIndex315];
      output += '<li>' + ((itemData315.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData315.acronym) + '">' : '') + ((itemData315.href != null) ? '<a href="' + soy.$$escapeHtml(itemData315.href) + '">' : '') + soy.$$escapeHtml(itemData315.title) + ((itemData315.href != null) ? '</a>' : '') + ((itemData315.acronym != null) ? '</abbr>' : '') + '</li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


applicationPage.appFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<footer id="wb-info">';
  if (opt_data.footerSections != null) {
    output += '<div class="landscape"><nav class="container visible-sm visible-md visible-lg wb-navcurr" aria-labelledby="footer-links"><h2 class="wb-inv">Related links</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">';
    var linkList345 = opt_data.footerSections;
    var linkListLen345 = linkList345.length;
    for (var linkIndex345 = 0; linkIndex345 < linkListLen345; linkIndex345++) {
      var linkData345 = linkList345[linkIndex345];
      output += '<li><a href="' + soy.$$escapeHtml(linkData345.href) + '"' + ((linkData345.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData345.text) + ((linkData345.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
    }
    output += '</ul></nav></div>';
  }
  output += '<nav class="container visible-sm visible-md visible-lg wb-navcurr ftr-urlt-lnk"><h2 class="wb-inv">About this Web application</h2><ul>';
  if (opt_data.contactLink != null) {
    var linkList363 = opt_data.contactLink;
    var linkListLen363 = linkList363.length;
    for (var linkIndex363 = 0; linkIndex363 < linkListLen363; linkIndex363++) {
      var linkData363 = linkList363[linkIndex363];
      output += (linkIndex363 == 0) ? '<li><a ' + ((linkData363.href) ? ' href="' + soy.$$escapeHtml(linkData363.href) + '"' : ' href="https://priv.gc.ca/en/contact-the-opc/"') + ((linkData363.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Contact information' + ((linkData363.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://priv.gc.ca/en/contact-the-opc/">Contact information</a></li>';
  }
  if (opt_data.termsLink != null) {
    var linkList387 = opt_data.termsLink;
    var linkListLen387 = linkList387.length;
    for (var linkIndex387 = 0; linkIndex387 < linkListLen387; linkIndex387++) {
      var linkData387 = linkList387[linkIndex387];
      output += (linkIndex387 == 0) ? '<li><a ' + ((linkData387.href) ? ' href="' + soy.$$escapeHtml(linkData387.href) + '"' : ' href="https://priv.gc.ca/en/privacy-and-transparency-at-the-opc/terms-and-conditions-of-use/"') + ((linkData387.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Terms and conditions' + ((linkData387.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://priv.gc.ca/en/privacy-and-transparency-at-the-opc/terms-and-conditions-of-use/">Terms and conditions</a></li>';
  }
  if (opt_data.privacyLink != null) {
    var linkList411 = opt_data.privacyLink;
    var linkListLen411 = linkList411.length;
    for (var linkIndex411 = 0; linkIndex411 < linkListLen411; linkIndex411++) {
      var linkData411 = linkList411[linkIndex411];
      output += (linkIndex411 == 0) ? '<li><a ' + ((linkData411.href) ? ' href="' + soy.$$escapeHtml(linkData411.href) + '"' : ' href="https://priv.gc.ca/en/privacy-and-transparency-at-the-opc/pp/"') + ((linkData411.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Privacy' + ((linkData411.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://priv.gc.ca/en/privacy-and-transparency-at-the-opc/pp/">Privacy</a></li>';
  }
  output += '</ul></nav><div class="brand"><div class="container"><div class="row "><div class="col-md-6"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-en.png\' class="img img-responsive" alt="OPC Logo" /><span class="wb-inv">Office of Privacy Commissioner of Canada</span></div><div class="col-md-6 tofpg text-right"><a href="#wb-cont">Top of Page <span class="fa fa-arrow-circle-up"></span></a></div></div></div></div></footer>';
  return output;
};

// This file was automatically generated from serverPage.soy.
// Please don't edit this file by hand.

if (typeof serverPage == 'undefined') { var serverPage = {}; }


serverPage.serverRefTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/theme-srv.min.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/ie8-theme-srv.min.css\' /><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/jquery/1.11.1/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]-->';
};


serverPage.serverTop = function(opt_data, opt_ignored) {
  return '\t<header role="banner" id="wb-bnr" class="container"><div class="row"><div class="col-sm-6"><img id="opc-sig" src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-fr.png\' class="hidden-print img img-responsive" alt="Commissariat à la protection de la vie privée du Canada / Office of the Privacy Commissioner"/><span class="wb-inv"> Commissariat à la protection de la vie privée du Canada / Office of the Privacy Commissioner of Canada</span></div></div></header>';
};


serverPage.serverBottom = function(opt_data, opt_ignored) {
  return '\t<footer id="wb-info"><div class="brand"><div class="container"><div class="row "><div class="col-md-6"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-en.png\' class="img img-responsive" alt="OPC Logo" /><span class="wb-inv">Office of Privacy Commissioner of Canada</span></div><div class="col-md-6 tofpg text-right"><a href="#wb-cont">Top of Page <span class="fa fa-arrow-circle-up"></span></a></div></div></div></div></footer>';
};
