/*!
 * Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)
 * github.com/opc-cpvp/cdts-sgdc/blob/master/LICENSE
 * v1.0.0 - 2024-01-03
 *
 */// This file was automatically generated from wet-fr.soy.
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
  return (opt_data.cdnPath != null) ? soy.$$escapeHtml(opt_data.cdnPath) : wet.builder.base(opt_data) + 'app/cls/WET/opc-intranet/v1_0_0/';
};


wet.builder.base = function(opt_data, opt_ignored) {
  return (opt_data.cdnEnv == 'opcdev') ? '/' : (opt_data.cdnEnv == 'opcqat') ? 'https://intranet.stage.partners.collab.gc.ca/' : 'https://intranet/';
};


wet.builder.refTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/favicon.ico\' rel="icon" type="image/x-icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'opc-intranet/css/theme.min.css\' /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/cdtsfixes.css\'>' + ((opt_data.isApplication == true) ? '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/cdtsapps.css\'>' : '') + '<!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'opc-intranet/css/ie8-theme.min.css\' /><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/jquery/1.11.1/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]--><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/css/opc-style.css\' />';
  if (opt_data.webAnalytics != null) {
    output += '<script type="text/javascript">var _paq = (function (paq) {var removeTrailingSlash = function(site) {return site.replace(/\\/$/, \'\');};';
    var aaList58 = opt_data.webAnalytics;
    var aaListLen58 = aaList58.length;
    for (var aaIndex58 = 0; aaIndex58 < aaListLen58; aaIndex58++) {
      var aaData58 = aaList58[aaIndex58];
      output += 'var u = \'' + wet.builder.base(opt_data) + 'm/\'; var url = removeTrailingSlash(window.location.href).toLowerCase(); paq.push([\'setCustomDimension\', 2, url]); paq.push([\'setCustomUrl\', url]); paq.push([\'enableLinkTracking\']); paq.push([\'trackPageView\']); paq.push([\'trackVisibleContentImpressions\']); paq.push([\'setTrackerUrl\', u + \'m.php\']); paq.push([\'setSiteId\',  \'' + soy.$$escapeHtml(aaData58.siteId) + '\']);';
      if (aaData58.customDimensions != null) {
        var dimensionList66 = aaData58.customDimensions;
        var dimensionListLen66 = dimensionList66.length;
        for (var dimensionIndex66 = 0; dimensionIndex66 < dimensionListLen66; dimensionIndex66++) {
          var dimensionData66 = dimensionList66[dimensionIndex66];
          output += 'paq.push([\'setCustomDimension\', ' + soy.$$escapeHtml(dimensionData66.id) + ', \'' + soy.$$escapeHtml(dimensionData66.value) + '\']);';
        }
      }
      if (aaData58.customVariables != null) {
        var variableList75 = aaData58.customVariables;
        var variableListLen75 = variableList75.length;
        for (var variableIndex75 = 0; variableIndex75 < variableListLen75; variableIndex75++) {
          var variableData75 = variableList75[variableIndex75];
          output += 'paq.push([\'setCustomVariable\', ' + soy.$$escapeHtml(variableIndex75 + 1) + ', \'' + soy.$$escapeHtml(variableData75.name) + '\', \'' + soy.$$escapeHtml(variableData75.value) + '\', \'' + soy.$$escapeHtml(variableData75.scope) + '\']);';
        }
      }
    }
    output += 'var d = document, g = d.createElement(\'script\'), s = d.getElementsByTagName(\'script\')[0]; g.type = \'text/javascript\'; g.async = true; g.defer = true; g.src = u + \'m.js\'; s.parentNode.insertBefore(g, s); return paq;})(window._paq || []);<\/script>';
  }
  return output;
};


wet.builder.top = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<section aria-label="Skip to"><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;À propos de ce site&#160;»</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul></section><header role="banner"><div id="wb-bnr" class="container"><div class="row"><div class="brand col-xs-8 col-sm-9 col-md-5">' + ((opt_data.siteMenu != false) ? '<a href=\'' + wet.builder.base(opt_data) + 'fr/\' property="url">' : '') + '<img class="visible-print-block" src=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/opc-blk-fr.png\' alt=""><img src=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/opc-wht-fr.png\' class="hidden-print img img-responsive" alt="OPC Logo"/><span class="wb-inv"> Commissariat à la protection de la vie privée du Canada</span>' + ((opt_data.siteMenu != false) ? '</a>' : '') + '</div><section class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs" id="wb-glb-mn" aria-labelledby="search-menu-section"><h2 id="search-menu-section">Recherche et menus</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="Recherche et menus" aria-controls="mb-pnl" class="overlay-lnk" role="button"><span class="glyphicon glyphicon-search"><span class="glyphicon glyphicon-th-list"><span class="wb-inv">Recherche et menus</span></span></span></a></li></ul><div id="mb-pnl"></div></section>';
  if (opt_data.lngLinks != null) {
    output += '<div class="col-md-7"><section id="wb-lng" class="visible-md visible-lg text-right" aria-labelledby="lang-section"><h2 id="lang-section" class="wb-inv">Sélection de la langue</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none">';
    var linkList111 = opt_data.lngLinks;
    var linkListLen111 = linkList111.length;
    for (var linkIndex111 = 0; linkIndex111 < linkListLen111; linkIndex111++) {
      var linkData111 = linkList111[linkIndex111];
      output += '<li><a hreflang="' + soy.$$escapeHtml(linkData111.lang) + '" lang="' + soy.$$escapeHtml(linkData111.lang) + '" href="' + soy.$$escapeHtml(linkData111.href) + '">' + soy.$$escapeHtml(linkData111.text) + '</a></li>';
    }
    output += '</ul></div></div></section></div>';
  }
  output += '</div></div><div class="sub-header"><div class="container"><div class="row"><div class="col-md-8 sub-header__title-cont"></div><div class="col-md-4">' + ((opt_data.search != false) ? '<section id="wb-srch" class="text-right visible-md visible-lg" aria-labelledby="search-section"><h2 id="search-section">Recherche</h2><form action=\'' + wet.builder.base(opt_data) + 'fr/recherche\' class="form-inline" enctype="multipart/form-data" method="post" name="cse-search-box" role="search"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Recherchez le site Web</label><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="t" type="search" value="" size="27" maxlength="150" placeholder="Rechercher dans l\'intranet du Commissariat" /><datalist id="wb-srch-q-ac"><!--[if lte IE 9]><select><![endif]--><!--[if lte IE 9]></select><![endif]--></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>' : '') + '</div></div></div></div>' + ((opt_data.siteMenu != false) ? '<nav id="wb-sm" data-ajax-replace=\'' + wet.builder.base(opt_data) + 'ajax/sitemenu-fr\' data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement" aria-labelledby="topics-menu-section"><div class="container nvbar"><h2 id="topics-menu-section">Menu des sujets</h2><div class="row"><ul class="list-inline menu"><li><a href=\'' + wet.builder.base(opt_data) + 'fr/a-propos/\' class="item">À propos</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/nouvelles-initiatives/\' class="item">Nouvelles, initiatives</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/services-internes/\' class="item">Services internes</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/ressources-humaines/\' class="item">Ressources humaines</a></li></ul></div></div></nav>' : '<div class="transactBar"></div>');
  if (opt_data.breadcrumbs != false) {
    output += '<nav id="wb-bc" property="breadcrumb" aria-labelledby="you-are-here"><h2 id="you-are-here">Vous êtes ici :</h2><div class="container"><div class="row clearfix"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList150 = opt_data.breadcrumbs;
      var itemListLen150 = itemList150.length;
      for (var itemIndex150 = 0; itemIndex150 < itemListLen150; itemIndex150++) {
        var itemData150 = itemList150[itemIndex150];
        output += '<li>' + ((itemData150.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData150.acronym) + '">' : '') + ((itemData150.href != null) ? '<a href="' + soy.$$escapeHtml(itemData150.href) + '">' : '') + soy.$$escapeHtml(itemData150.title) + ((itemData150.href != null) ? '</a>' : '') + ((itemData150.acronym != null) ? '</abbr>' : '') + '</li>';
      }
    } else {
      output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/\'>Accueil</a></li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return output;
};


wet.builder.preFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t' + ((opt_data.showPostContent != false) ? '' : '') + ((opt_data.pagedetails != false) ? '<div class="pagedetails' + ((opt_data.isContainer != null) ? ' container' : '') + '">' + ((opt_data.showFeedback != null || opt_data.showShare != null) ? '<div class="row mrgn-tp-sm">' + ((opt_data.showFeedback != null && opt_data.showFeedback != false) ? '<div class="col-sm-6 col-md-5 col-lg-5"><i18n-host locale="fr">' + ((opt_data.showFeedback != true) ? '<feedback-problem feedback-api="' + soy.$$escapeHtml(opt_data.showFeedback) + '"></feedback-problem>' : '<feedback-problem></feedback-problem>') + '</i18n-host></div>' : '') + ((opt_data.showShare != null && opt_data.showShare != false) ? '<div class="col-sm-6 col-md-4 col-lg-5 col-md-offset-' + ((opt_data.showFeedback != null && opt_data.showFeedback != false) ? '3' : '8') + ' col-lg-offset-' + ((opt_data.showFeedback != null && opt_data.showFeedback != false) ? '2' : '7') + '"><i18n-host locale="fr">' + ((opt_data.showFeedback != null && opt_data.showFeedback != true && opt_data.showFeedback != false) ? '<feedback-helpful feedback-api="' + soy.$$escapeHtml(opt_data.showFeedback) + '"></feedback-helpful>' : '<feedback-helpful></feedback-helpful>') + '</i18n-host></div>' : '') + '</div>' : '') + '<dl id="wb-dtmd">' + ((opt_data.screenIdentifier != null) ? '<dt>Identificateur d\'écran&#160;:&#32;</dt><dd property="identifier">' + soy.$$escapeHtml(opt_data.screenIdentifier) + '</dd>' : '') + ((opt_data.dateModified != null) ? '<dt>Date de modification&#160;:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd>' : '') + ((opt_data.versionIdentifier != null) ? '<dt>Version&#160;:&#32;</dt><dd property="version">' + soy.$$escapeHtml(opt_data.versionIdentifier) + '</dd>' : '') + '</dl></div>' : '');
};


wet.builder.secmenu = function(opt_data, opt_ignored) {
  var output = '\t\t\t<h2 id="wb-sec-h" class="wb-inv">Menu de la section</h2>';
  var sectionList247 = opt_data.sections;
  var sectionListLen247 = sectionList247.length;
  for (var sectionIndex247 = 0; sectionIndex247 < sectionListLen247; sectionIndex247++) {
    var sectionData247 = sectionList247[sectionIndex247];
    output += '<section class="list-group menu list-unstyled"><h3>' + ((sectionData247.sectionLink != null) ? '<a href="' + soy.$$escapeHtml(sectionData247.sectionLink) + '"' + ((sectionData247.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' : '') + soy.$$escapeHtml(sectionData247.sectionName) + ((sectionData247.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + ((sectionData247.sectionLink != null) ? '</a>' : '') + '</h3><ul class="list-group menu list-unstyled">';
    var linkList266 = sectionData247.menuLinks;
    var linkListLen266 = linkList266.length;
    for (var linkIndex266 = 0; linkIndex266 < linkListLen266; linkIndex266++) {
      var linkData266 = linkList266[linkIndex266];
      if (linkData266.subLinks != null) {
        output += '<li><a href="' + soy.$$escapeHtml(linkData266.href) + '" class="list-group-item"' + ((linkData266.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData266.text) + ((linkData266.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a><ul class="list-group menu list-unstyled">';
        var sublinkList281 = linkData266.subLinks;
        var sublinkListLen281 = sublinkList281.length;
        for (var sublinkIndex281 = 0; sublinkIndex281 < sublinkListLen281; sublinkIndex281++) {
          var sublinkData281 = sublinkList281[sublinkIndex281];
          output += '<li><a href="' + soy.$$escapeHtml(sublinkData281.subhref) + '" class="list-group-item"' + ((sublinkData281.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData281.subtext) + ((sublinkData281.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData266.href) + '" class="list-group-item"' + ((linkData266.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData266.text) + ((linkData266.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
      }
    }
    output += '</ul></section>';
  }
  return output;
};


wet.builder.footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<footer role="contentinfo" id="wb-info">';
  if (opt_data.showFooter != false) {
    output += '<nav class="container visible-sm visible-md visible-lg wb-navcurr" aria-labelledby="footer-links"><h2 class="wb-inv" id="footer-links">À propos de ce site</h2><div class="row"><div class="col-md-2"><section aria-labelledby="opc-sites-section"><h3 id="opc-sites-section">Sites du Commissariat</h3><ul class="list-unstyled"><li><span class="fa fa-fw fa-globe"></span><a href="https://www.priv.gc.ca/fr/">Priv.gc.ca</a></li><li><span class="fa fa-fw fa-globe"></span><a href="https://www.priv.gc.ca/fr/blogue/">Blogue</a></li><li><span class="fa fa-fw fa-twitter"></span><a href="https://twitter.com/PriveePrivacy">Twitter</a></li><li><span class="fa fa-fw fa-linkedin"></span><a href="https://www.linkedin.com/company/office-of-the-privacy-commissioner-of-canada">LinkedIn</a></li></ul></section></div><div class="col-md-2"><section aria-labelledby="gc-tools-section"><h3 id="gc-tools-section">Outils GC</h3><ul class="list-unstyled"><li><a href="https://intranet.canada.ca/index-fra.asp">GCIntranet</a></li><li><a href="https://gcconnex.gc.ca/splash/">GCconnex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr">GCpédia</a></li><li><a href="https://gcannuaire-gcdirectory.gc.ca/fr/GCA/?pgid=002">GCannuaire</a></li><li><a href="https://gccollab.ca/splash/">GCcollab</a></li></ul></section></div><div class="col-md-3"><section aria-labelledby="opc-news-section"><h3 id="opc-news-section">Besoin d\'aide?</h3><ul class="list-unstyled"><li><a href="https://web-sh-01.partners.collab.gc.ca/cds-sd/fr/accueil" target="_blank">Centre de services</a></li><li><a href="https://cnas-nscc.tpsgc-pwgsc.gc.ca/index-fra.cfm">Centre national d\'appels de service</a></li><li><a href="' + wet.builder.base(opt_data) + 'fr/nouvelles-initiatives/initiatives-du-gouvernement/pae/">Programme d\'aide aux employés<br />800-268-7708</a></li><li class="non-Link">Ligne d\'urgence du Commissariat<br />819-994-5300</li></ul></section></div><div class="col-md-3"><section aria-labelledby="contact-section"><h3 id="contact-section">Coordonnées</h3>';
    if (opt_data.contactLinks != null) {
      output += '<ul class="list-unstyled colcount-sm-2 colcount-md-3">';
      var linkList322 = opt_data.contactLinks;
      var linkListLen322 = linkList322.length;
      for (var linkIndex322 = 0; linkIndex322 < linkListLen322; linkIndex322++) {
        var linkData322 = linkList322[linkIndex322];
        output += (linkIndex322 == 0) ? '<li><a href="' + soy.$$escapeHtml(linkData322.href) + '">Contactez-nous</a></li>' : '';
      }
      output += '</ul>';
    } else {
      output += '<ul class="list-unstyled"><li><a href="mailto:webmaster-webmestre@priv.gc.ca">Webmestre</a></li><li><p class="non-Link">Répertoire du Commissariat</p><ul class="list-unstyled mrgn-lft-md"><li><a href="https://officium/_layouts/15/OPC.Officium/Utilities/OfficiumIDLookup.aspx?id=7777-6-14568" target="_blank">Alphabétique</a></li><li><a href="https://officium/_layouts/15/OPC.Officium/Utilities/OfficiumIDLookup.aspx?id=7777-6-270852" target="_blank">Par secteur</a></li></ul></li></ul>';
    }
    output += '</section></div><div class="col-md-2"><section aria-labelledby="privacy-section"><h3 id="privacy-section">Vie privée</h3><ul class="list-unstyled"><li><a href="' + wet.builder.base(opt_data) + 'fr/modalites-dutilisation/">Modalités d\'utilisation</a></li></ul></section></div></div></nav>';
  } else {
    output += '<div id="transactFooter" class="landscape"></div><nav class="container visible-sm visible-md visible-lg wb-navcurr ftr-urlt-lnk"><h2 class="wb-inv">À propos du site</h2><ul>';
    if (opt_data.contactLinks != null) {
      var linkList339 = opt_data.contactLinks;
      var linkListLen339 = linkList339.length;
      for (var linkIndex339 = 0; linkIndex339 < linkListLen339; linkIndex339++) {
        var linkData339 = linkList339[linkIndex339];
        output += (linkIndex339 == 0) ? '<li><a ' + ((linkData339.href) ? ' href="' + soy.$$escapeHtml(linkData339.href) + '"' : ' href=\'' + wet.builder.base(opt_data) + 'fr/communiquer-avec-le-commissariat/\'') + ((linkData339.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Coordonnées' + ((linkData339.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/communiquer-avec-le-commissariat/\'>Coordonnées</a></li>';
    }
    if (opt_data.termsLink != null) {
      var linkList367 = opt_data.termsLink;
      var linkListLen367 = linkList367.length;
      for (var linkIndex367 = 0; linkIndex367 < linkListLen367; linkIndex367++) {
        var linkData367 = linkList367[linkIndex367];
        output += (linkIndex367 == 0) ? '<li><a ' + ((linkData367.href) ? ' href="' + soy.$$escapeHtml(linkData367.href) + '"' : ' href=\'' + wet.builder.base(opt_data) + 'fr/modalites-dutilisation/\'') + ((linkData367.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Modalités d\'utilisation' + ((linkData367.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/modalites-dutilisation/\'>Modalités d\'utilisation</a></li>';
    }
    if (opt_data.privacyLink != null) {
      var linkList395 = opt_data.privacyLink;
      var linkListLen395 = linkList395.length;
      for (var linkIndex395 = 0; linkIndex395 < linkListLen395; linkIndex395++) {
        var linkData395 = linkList395[linkIndex395];
        output += (linkIndex395 == 0) ? '<li><a ' + ((linkData395.href) ? ' href="' + soy.$$escapeHtml(linkData395.href) + '"' : ' href=\'' + wet.builder.base(opt_data) + 'fr/modalites-dutilisation/\'') + ((linkData395.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Vie privée' + ((linkData395.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/modalites-dutilisation/\'>Vie privée</a></li>';
    }
    output += '</ul></nav>';
  }
  output += '<div class="brand"><div class="container"><div class="row"><div class="col-md-6"><img src=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/opc-blk-fr.png\' class="img img-responsive" alt="Logo du Commissariat" /><span class="wb-inv">Commissariat à la protection de la vie privée du Canada</span></div><div class="col-md-6 tofpg text-right"><a href="#wb-cont">Haut de la page <span class="fa fa-arrow-circle-up"></span></a></div></div></div></div></footer>';
  return output;
};


wet.builder.refFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><script src=\'' + ((opt_data.jqueryEnv == 'external') ? wet.builder.environment(opt_data) + 'wet-boew/js/' : wet.builder.environment(opt_data) + 'wet-boew/js/') + 'jquery/2.1.4/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'' + wet.builder.environment(opt_data) + 'opc-intranet/js/theme.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'components/feedback.js\'><\/script>' + ((opt_data.exitScript == true) ? '<script src=\'' + wet.builder.environment(opt_data) + 'cdts/js/exitScript.js\'><\/script><script data-id="exitScript" data-token="' + soy.$$escapeHtml(opt_data.exitURL) + '" data-token-domains="' + soy.$$escapeHtml(opt_data.exitDomains) + '" data-token-modal="' + soy.$$escapeHtml(opt_data.displayModal) + '">clickA();<\/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Avis de sortie sécurisée</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Avertissement</h2></header><div class="modal-body"><p>' + ((opt_data.exitMsg != null && opt_data.exitMsg.length > 0) ? soy.$$escapeHtml(opt_data.exitMsg) : 'Vous êtes sur le point de quitter un site sécurisé. Voulez-vous continuer?') + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + ((opt_data.cancelMsg != null && opt_data.cancelMsg.length > 0) ? soy.$$escapeHtml(opt_data.cancelMsg) : 'Annuler') + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + ((opt_data.yesMsg != null && opt_data.yesMsg.length > 0) ? soy.$$escapeHtml(opt_data.yesMsg) : 'Oui') + '</a></li></ul></div></section>' : '') + ((opt_data.isApplication == true) ? '<script src=\'' + wet.builder.environment(opt_data) + 'cdts/js/cdtscustom.js\'><\/script>' : '') + ((opt_data.webAnalytics != null) ? '' : '');
};

// This file was automatically generated from appPage-fr.soy.
// Please don't edit this file by hand.

if (typeof applicationPage == 'undefined') { var applicationPage = {}; }


applicationPage.appTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;' + ((opt_data.topCusMenu == true) ? 'Liens connexes' : 'À propos de cette application Web') + '&#160;»</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul><header><div id="wb-bnr" class="container"><div class="row"><div class="brand col-xs-8 col-sm-9 col-md-5" property="publisher" typeof="GovernmentOrganization"><a href="' + wet.builder.base(opt_data) + 'fr/" property="url"><img class="visible-print-block" src=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/opc-blk-fr.png\' alt=""><img src=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/opc-wht-fr.png\' class="hidden-print img img-responsive" alt="Logo du Commissariat"/><span class="wb-inv"> Commissariat à la protection de la vie privée du Canada</span></a><meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/wmms-blk.svg\' /></div>';
  if (opt_data.lngLinks != null) {
    output += '<div class="col-md-7"><section id="wb-lng" class="text-right"><h2 class="wb-inv">Sélection de la langue</h2><ul class="list-inline margin-bottom-none">';
    var linkList25 = opt_data.lngLinks;
    var linkListLen25 = linkList25.length;
    for (var linkIndex25 = 0; linkIndex25 < linkListLen25; linkIndex25++) {
      var linkData25 = linkList25[linkIndex25];
      output += '<li><a lang="' + soy.$$escapeHtml(linkData25.lang) + '" href="' + soy.$$escapeHtml(linkData25.href) + '">' + soy.$$escapeHtml(linkData25.text) + '</a></li>';
    }
    output += '</ul></section></div>';
  }
  output += '</div></div><div class="sub-header"><div class="container"><div class="row"><div class="col-md-8 sub-header__title-cont"></div><div class="col-md-4">';
  if (opt_data.customSearch != null) {
    var itemList38 = opt_data.customSearch;
    var itemListLen38 = itemList38.length;
    for (var itemIndex38 = 0; itemIndex38 < itemListLen38; itemIndex38++) {
      var itemData38 = itemList38[itemIndex38];
      if (itemIndex38 == 0) {
        output += '<section id="wb-srch" class="text-right visible-md visible-lg"><h2>Recherche' + ((itemData38.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData38.placeholder) : '') + '</h2><form action="' + soy.$$escapeHtml(itemData38.action) + '" method="' + soy.$$escapeHtml(itemData38.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData38.id != null) ? soy.$$escapeHtml(itemData38.id) : 'wb-srch-q') + '" class="wb-inv">Rechercher' + ((itemData38.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData38.placeholder) : '') + '</label><input id="' + ((itemData38.id != null) ? soy.$$escapeHtml(itemData38.id) : 'wb-srch-q') + '" class="wb-srch-q form-control" name="q" type="search" value="" size="27" maxlength="170" placeholder="Rechercher' + ((itemData38.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData38.placeholder) : '') + '">';
        if (itemData38.hiddenInput != null) {
          var inputList75 = itemData38.hiddenInput;
          var inputListLen75 = inputList75.length;
          for (var inputIndex75 = 0; inputIndex75 < inputListLen75; inputIndex75++) {
            var inputData75 = inputList75[inputIndex75];
            output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData75.name) + '" value="' + soy.$$escapeHtml(inputData75.value) + '" />';
          }
        }
        output += '</div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Rechercher' + ((itemData38.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData38.placeholder) : '') + '</span></button></div></form></section>';
      }
    }
  }
  output += '</div></div></div></div><div class="app-bar"><div class="container"><div class="row">' + ((opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) ? '<section class="col-xs-12 col-sm-7">' : '<section class="col-xs-12">');
  var itemList95 = opt_data.appName;
  var itemListLen95 = itemList95.length;
  for (var itemIndex95 = 0; itemIndex95 < itemListLen95; itemIndex95++) {
    var itemData95 = itemList95[itemIndex95];
    output += (itemIndex95 == 0) ? '<h2 class="wb-inv">Nom de l\'application Web</h2><a class="app-name" href="' + soy.$$escapeHtml(itemData95.href) + '">' + soy.$$escapeHtml(itemData95.text) + '</a>' : '';
  }
  output += '</section>';
  if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<nav class="col-sm-5 hidden-xs hidden-print"><h2 class="wb-inv">Menu des paramètres du compte</h2><ul class="app-list-account list-unstyled">';
    if (opt_data.appSettings != null) {
      var itemList110 = opt_data.appSettings;
      var itemListLen110 = itemList110.length;
      for (var itemIndex110 = 0; itemIndex110 < itemListLen110; itemIndex110++) {
        var itemData110 = itemList110[itemIndex110];
        output += (itemIndex110 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData110.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Paramètres du compte</a></li>&#32;' : '';
      }
    }
    if (opt_data.signOut != null) {
      var itemList119 = opt_data.signOut;
      var itemListLen119 = itemList119.length;
      for (var itemIndex119 = 0; itemIndex119 < itemListLen119; itemIndex119++) {
        var itemData119 = itemList119[itemIndex119];
        output += (itemIndex119 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData119.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Fermer la session</a></li>' : '';
      }
    } else if (opt_data.signIn != null) {
      var itemList127 = opt_data.signIn;
      var itemListLen127 = itemList127.length;
      for (var itemIndex127 = 0; itemIndex127 < itemListLen127; itemIndex127++) {
        var itemData127 = itemList127[itemIndex127];
        output += (itemIndex127 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData127.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Ouvrir une session</a></li>' : '';
      }
    }
    output += '</ul></nav>';
  }
  output += '</div></div></div>';
  if (opt_data.customSearch != null || opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true || opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<div class="app-bar-mb container visible-xs-block hidden-print">';
    if (opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true || opt_data.customSearch != null) {
      output += '<nav><h2 class="wb-inv">' + ((opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true) ? 'Menu' + ((opt_data.customSearch != null) ? ' et recherche' : '') : 'Recherche') + '</h2><ul class="app-list-main list-unstyled">' + ((opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true) ? '<li class="wb-mb-links" id="wb-glb-mn"><a href="#mb-pnl" aria-controls="mb-pnl" class="btn overlay-lnk" role="button">Menu</a><h2>Menu</h2></li>' : '') + ((opt_data.customSearch != null) ? '<li><a href="#app-srch-mb" title="Recherche" aria-controls="app-srch-mb" class="btn overlay-lnk" role="button"><span class="glyphicon-search glyphicon" aria-hidden="true"></span><span class="wb-inv">Recherche</span></a></li>' : '') + '</ul><div id="mb-pnl"></div>';
      if (opt_data.customSearch != null) {
        var itemList160 = opt_data.customSearch;
        var itemListLen160 = itemList160.length;
        for (var itemIndex160 = 0; itemIndex160 < itemListLen160; itemIndex160++) {
          var itemData160 = itemList160[itemIndex160];
          if (itemIndex160 == 0) {
            output += '<section id="app-srch-mb" class="wb-overlay modal-content overlay-def wb-bar-t"><div class="modal-header"><h3 class="modal-title">Recherche' + ((itemData160.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData160.placeholder) : '') + '</h3></div><div class="modal-body"><form action="' + soy.$$escapeHtml(itemData160.action) + '" method="' + soy.$$escapeHtml(itemData160.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="input-group"><label for="' + ((itemData160.id != null) ? 'app-' + soy.$$escapeHtml(itemData160.id) : 'app-srch-q-mb') + '" class="wb-inv">Recherche' + ((itemData160.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData160.placeholder) : '') + '</label><input placeholder="Rechercher' + ((itemData160.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData160.placeholder) : '') + '" id="' + ((itemData160.id != null) ? 'app-' + soy.$$escapeHtml(itemData160.id) : 'app-srch-q-mb') + '" class="app-srch-q-mb form-control" name="q" type="search" value="" size="27" maxlength="150">';
            if (itemData160.hiddenInput != null) {
              var inputList199 = itemData160.hiddenInput;
              var inputListLen199 = inputList199.length;
              for (var inputIndex199 = 0; inputIndex199 < inputListLen199; inputIndex199++) {
                var inputData199 = inputList199[inputIndex199];
                output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData199.name) + '" value="' + soy.$$escapeHtml(inputData199.value) + '" />';
              }
            }
            output += '<span class="input-group-btn"><button type="submit" id="app-srch-sub-mb" class="btn btn-primary btn-small" name="app-srch-sub-mb"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche' + ((itemData160.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData160.placeholder) : '') + '</span></button></span></div></form></div></section>';
          }
        }
      }
      output += '</nav>';
    }
    if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
      output += '<nav><h2 class="wb-inv">Menu des paramètres du compte</h2><ul class="app-list-account list-unstyled">';
      if (opt_data.appSettings != null) {
        var itemList219 = opt_data.appSettings;
        var itemListLen219 = itemList219.length;
        for (var itemIndex219 = 0; itemIndex219 < itemListLen219; itemIndex219++) {
          var itemData219 = itemList219[itemIndex219];
          output += (itemIndex219 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData219.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Paramètres du compte</a></li>&#32;' : '';
        }
      }
      if (opt_data.signOut != null) {
        var itemList228 = opt_data.signOut;
        var itemListLen228 = itemList228.length;
        for (var itemIndex228 = 0; itemIndex228 < itemListLen228; itemIndex228++) {
          var itemData228 = itemList228[itemIndex228];
          output += (itemIndex228 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData228.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Fermer la session</a></li>' : '';
        }
      } else if (opt_data.signIn != null) {
        var itemList236 = opt_data.signIn;
        var itemListLen236 = itemList236.length;
        for (var itemIndex236 = 0; itemIndex236 < itemListLen236; itemIndex236++) {
          var itemData236 = itemList236[itemIndex236];
          output += (itemIndex236 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData236.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Ouvrir une session</a></li>' : '';
        }
      }
      output += '</ul></nav>';
    }
    output += '</div>';
    if (opt_data.menuLinks != null) {
      output += '<nav id="wb-sm" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Menu de navigation principal</h2><div class="row"><ul class="list-inline menu" role="menubar">';
      var linkList248 = opt_data.menuLinks;
      var linkListLen248 = linkList248.length;
      for (var linkIndex248 = 0; linkIndex248 < linkListLen248; linkIndex248++) {
        var linkData248 = linkList248[linkIndex248];
        if (linkData248.subLinks != null) {
          output += '<li><a href="' + soy.$$escapeHtml(linkData248.id) + '" class="item"' + ((linkData248.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData248.text) + ((linkData248.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtml(linkData248.id) + '" role="menu">';
          var sublinkList265 = linkData248.subLinks;
          var sublinkListLen265 = sublinkList265.length;
          for (var sublinkIndex265 = 0; sublinkIndex265 < sublinkListLen265; sublinkIndex265++) {
            var sublinkData265 = sublinkList265[sublinkIndex265];
            output += (sublinkIndex265 == sublinkListLen265 - 1) ? '<li class="slflnk"><a href="' + soy.$$escapeHtml(sublinkData265.subhref) + '"' + ((sublinkData265.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData265.subtext) + ((sublinkData265.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '<li><a href="' + soy.$$escapeHtml(sublinkData265.subhref) + '"' + ((sublinkData265.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData265.subtext) + ((sublinkData265.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
          }
          output += '</ul></li>';
        } else {
          output += '<li><a href="' + soy.$$escapeHtml(linkData248.href) + '" class="item"' + ((linkData248.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData248.text) + ((linkData248.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
        }
      }
      output += '</ul></div></div></nav>';
    } else if (opt_data.menuPath != null) {
      output += '<nav id="wb-sm" data-ajax-replace="' + soy.$$escapeHtml(opt_data.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>';
    }
  }
  if (opt_data.breadcrumbs != null) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>Vous êtes ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    var itemList317 = opt_data.breadcrumbs;
    var itemListLen317 = itemList317.length;
    for (var itemIndex317 = 0; itemIndex317 < itemListLen317; itemIndex317++) {
      var itemData317 = itemList317[itemIndex317];
      output += '<li>' + ((itemData317.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData317.acronym) + '">' : '') + ((itemData317.href != null) ? '<a href="' + soy.$$escapeHtml(itemData317.href) + '">' : '') + soy.$$escapeHtml(itemData317.title) + ((itemData317.href != null) ? '</a>' : '') + ((itemData317.acronym != null) ? '</abbr>' : '') + '</li>';
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
    output += '<div class="landscape"><nav class="container visible-sm visible-md visible-lg wb-navcurr" aria-labelledby="footer-links"><h2 class="wb-inv">Liens connexes</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">';
    var linkList347 = opt_data.footerSections;
    var linkListLen347 = linkList347.length;
    for (var linkIndex347 = 0; linkIndex347 < linkListLen347; linkIndex347++) {
      var linkData347 = linkList347[linkIndex347];
      output += '<li><a href="' + soy.$$escapeHtml(linkData347.href) + '"' + ((linkData347.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData347.text) + ((linkData347.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
    }
    output += '</ul></nav></div>';
  }
  output += '<nav class="container visible-sm visible-md visible-lg wb-navcurr ftr-urlt-lnk"><h2 class="wb-inv">À propos de cette application Web</h2><ul>';
  if (opt_data.contactLink != null) {
    var linkList365 = opt_data.contactLink;
    var linkListLen365 = linkList365.length;
    for (var linkIndex365 = 0; linkIndex365 < linkListLen365; linkIndex365++) {
      var linkData365 = linkList365[linkIndex365];
      output += (linkIndex365 == 0) ? '<li><a ' + ((linkData365.href) ? ' href="' + soy.$$escapeHtml(linkData365.href) + '"' : ' href=\'' + wet.builder.base(opt_data) + 'fr/communiquer-avec-le-commissariat/\'') + ((linkData365.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Coordonnées' + ((linkData365.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/communiquer-avec-le-commissariat/\'>Coordonnées</a></li>';
  }
  if (opt_data.termsLink != null) {
    var linkList393 = opt_data.termsLink;
    var linkListLen393 = linkList393.length;
    for (var linkIndex393 = 0; linkIndex393 < linkListLen393; linkIndex393++) {
      var linkData393 = linkList393[linkIndex393];
      output += (linkIndex393 == 0) ? '<li><a ' + ((linkData393.href) ? ' href="' + soy.$$escapeHtml(linkData393.href) + '"' : ' href=\'' + wet.builder.base(opt_data) + 'fr/modalites-dutilisation/\'') + ((linkData393.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Modalités d\'utilisation' + ((linkData393.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/modalites-dutilisation/\'>Modalités d\'utilisation</a></li>';
  }
  if (opt_data.privacyLink != null) {
    var linkList421 = opt_data.privacyLink;
    var linkListLen421 = linkList421.length;
    for (var linkIndex421 = 0; linkIndex421 < linkListLen421; linkIndex421++) {
      var linkData421 = linkList421[linkIndex421];
      output += (linkIndex421 == 0) ? '<li><a ' + ((linkData421.href) ? ' href="' + soy.$$escapeHtml(linkData421.href) + '"' : ' href=\'' + wet.builder.base(opt_data) + 'fr/modalites-dutilisation/\'') + ((linkData421.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Vie privée' + ((linkData421.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/modalites-dutilisation/\'>Vie privée</a></li>';
  }
  output += '</ul></nav><div class="brand"><div class="container"><div class="row "><div class="col-md-6"><img src=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/opc-blk-fr.png\' class="img img-responsive" alt="Logo du Commissariat" /><span class="wb-inv">Commissariat à la protection de la vie privée du Canada</span></div><div class="col-md-6 tofpg text-right"><a href="#wb-cont">Haut de la page <span class="fa fa-arrow-circle-up"></span></a></div></div></div></div></footer>';
  return output;
};

// This file was automatically generated from serverPage.soy.
// Please don't edit this file by hand.

if (typeof serverPage == 'undefined') { var serverPage = {}; }


serverPage.serverRefTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'opc-intranet/css/theme-srv.min.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'opc-intranet/css/ie8-theme-srv.min.css\' /><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/jquery/1.11.1/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]-->';
};


serverPage.serverTop = function(opt_data, opt_ignored) {
  return '\t<header role="banner" id="wb-bnr" class="container"><div class="row"><div class="col-sm-6"><img id="opc-sig" src=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/opc-blk-fr.png\' class="hidden-print img img-responsive" alt="Logo du Commissariat / OPC Logo"/><span class="wb-inv"> Commissariat à la protection de la vie privée du Canada / Office of the Privacy Commissioner of Canada</span></div></div></header>';
};


serverPage.serverBottom = function(opt_data, opt_ignored) {
  return '\t<footer id="wb-info"><div class="brand"><div class="container"><div class="row "><div class="col-md-6"><img src=\'' + wet.builder.environment(opt_data) + 'opc-intranet/assets/opc-blk-en.png\' class="img img-responsive" alt="OPC Logo" /><span class="wb-inv">Office of Privacy Commissioner of Canada</span></div><div class="col-md-6 tofpg text-right"><a href="#wb-cont">Top of Page <span class="fa fa-arrow-circle-up"></span></a></div></div></div></div></footer>';
};
