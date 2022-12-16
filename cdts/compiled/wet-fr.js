/*!
 * Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)
 * github.com/opc-cpvp/cdts-sgdc/blob/master/LICENSE
 * v4.0.37 - 2022-12-16
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
  return (opt_data.cdnPath != null) ? soy.$$escapeHtml(opt_data.cdnPath) : wet.builder.base(opt_data) + 'app/cls/WET/gcweb-opc/v4_0_37/';
};


wet.builder.base = function(opt_data, opt_ignored) {
  return (opt_data.cdnEnv == 'opcdev') ? '/' : (opt_data.cdnEnv == 'opcqat') ? 'https://staging-www.priv.gc.ca/' : 'https://priv.gc.ca/';
};


wet.builder.refTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/favicon.ico\' rel="icon" type="image/x-icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/theme.min.css\' /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/cdtsfixes.css\'>' + ((opt_data.isApplication == true) ? '<link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'cdts/css/cdtsapps.css\'>' : '') + '<!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/ie8-theme.min.css\' /><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/jquery/2.2.4/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]--><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/css/opc-style.css\' /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'components/feedback.css\' />';
  if (opt_data.webAnalytics != null) {
    output += '<script type="text/javascript">var _paq = (function (paq) {var removeTrailingSlash = function(site) {return site.replace(/\\/$/, \'\');};';
    var aaList60 = opt_data.webAnalytics;
    var aaListLen60 = aaList60.length;
    for (var aaIndex60 = 0; aaIndex60 < aaListLen60; aaIndex60++) {
      var aaData60 = aaList60[aaIndex60];
      output += 'var u = \'' + wet.builder.base(opt_data) + 'm/\'; var url = removeTrailingSlash(window.location.href).toLowerCase(); paq.push([\'setCustomDimension\', 2, url]); paq.push([\'setCustomUrl\', url]); paq.push([\'enableLinkTracking\']); paq.push([\'trackPageView\']); paq.push([\'trackVisibleContentImpressions\']); paq.push([\'setTrackerUrl\', u + \'m.php\']); paq.push([\'setSiteId\',  \'' + soy.$$escapeHtml(aaData60.siteId) + '\']);';
      if (aaData60.customDimensions != null) {
        var dimensionList68 = aaData60.customDimensions;
        var dimensionListLen68 = dimensionList68.length;
        for (var dimensionIndex68 = 0; dimensionIndex68 < dimensionListLen68; dimensionIndex68++) {
          var dimensionData68 = dimensionList68[dimensionIndex68];
          output += 'paq.push([\'setCustomDimension\', ' + soy.$$escapeHtml(dimensionData68.id) + ', \'' + soy.$$escapeHtml(dimensionData68.value) + '\']);';
        }
      }
      if (aaData60.customVariables != null) {
        var variableList77 = aaData60.customVariables;
        var variableListLen77 = variableList77.length;
        for (var variableIndex77 = 0; variableIndex77 < variableListLen77; variableIndex77++) {
          var variableData77 = variableList77[variableIndex77];
          output += 'paq.push([\'setCustomVariable\', ' + soy.$$escapeHtml(variableIndex77 + 1) + ', \'' + soy.$$escapeHtml(variableData77.name) + '\', \'' + soy.$$escapeHtml(variableData77.value) + '\', \'' + soy.$$escapeHtml(variableData77.scope) + '\']);';
        }
      }
    }
    output += 'var d = document, g = d.createElement(\'script\'), s = d.getElementsByTagName(\'script\')[0]; g.type = \'text/javascript\'; g.async = true; g.defer = true; g.src = u + \'m.js\'; s.parentNode.insertBefore(g, s); return paq;})(window._paq || []);<\/script>';
  }
  return output;
};


wet.builder.top = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<section aria-label="Skip to"><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;À propos de ce site&#160;»</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul></section><header role="banner"><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="visible-md visible-lg text-right" aria-labelledby="lang-section"><h2 id="lang-section" class="wb-inv">Sélection de la langue</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none">';
    var linkList99 = opt_data.lngLinks;
    var linkListLen99 = linkList99.length;
    for (var linkIndex99 = 0; linkIndex99 < linkListLen99; linkIndex99++) {
      var linkData99 = linkList99[linkIndex99];
      output += '<li><a hreflang="' + soy.$$escapeHtml(linkData99.lang) + '" lang="' + soy.$$escapeHtml(linkData99.lang) + '" href="' + soy.$$escapeHtml(linkData99.href) + '">' + soy.$$escapeHtml(linkData99.text) + '</a></li>';
    }
    output += '</ul></div></div></section>';
  }
  output += '<div class="row"><div class="brand col-xs-8 col-sm-9 col-md-5">' + ((opt_data.siteMenu != false) ? '<a href=\'' + wet.builder.base(opt_data) + 'fr/\' property="url">' : '') + '<img class="visible-print-block" src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-fr.png\' alt=""><img src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-wht-fr.png\' class="hidden-print img img-responsive" alt="OPC Logo"/><span class="wb-inv"> Commissariat à la protection de la vie privée du Canada</span>' + ((opt_data.siteMenu != false) ? '</a>' : '') + '</div><section class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs" id="wb-glb-mn" aria-labelledby="search-menu-section"><h2 id="search-menu-section">Recherche et menus</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="Recherche et menus" aria-controls="mb-pnl" class="overlay-lnk" role="button"><span class="glyphicon glyphicon-search"><span class="glyphicon glyphicon-th-list"><span class="wb-inv">Recherche et menus</span></span></span></a></li></ul><div id="mb-pnl"></div></section>' + ((opt_data.search != false) ? '<section id="wb-srch" class="col-xs-7 text-right visible-md visible-lg" aria-labelledby="search-section"><h2 id="search-section">Recherche</h2><form action=\'' + wet.builder.base(opt_data) + 'fr/recherche\' class="form-inline" enctype="multipart/form-data" method="get" name="cse-search-box" role="search"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Recherchez le site Web</label><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="t" type="search" value="" size="27" maxlength="150" placeholder="Rechercher dans priv.gc.ca" /><input name="Page" type="hidden" value="1" /><datalist id="wb-srch-q-ac"><!--[if lte IE 9]><select><![endif]--><!--[if lte IE 9]></select><![endif]--></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>' : '') + '</div></div>' + ((opt_data.siteMenu != false) ? '<nav id="wb-sm" data-ajax-replace=\'' + wet.builder.base(opt_data) + 'ajax/sitemenu-fr\' data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement" aria-labelledby="topics-menu-section"><div class="container nvbar"><h2 id="topics-menu-section">Menu des sujets</h2><div class="row"><ul class="list-inline menu"><li><a href=\'' + wet.builder.base(opt_data) + 'fr/pour-les-individus/\' class="item">Pour les individus</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/pour-les-entreprises/\' class="item">Pour les entreprises</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/pour-les-institutions/\' class="item">Pour les institutions fédérales</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/signaler-un-probleme/\' class="item">Signaler un problème</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/mesures-et-decisions-prises-par-le-commissariat/\' class="item">Mesures et décisions prises par le Commissariat</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/a-propos-du-commissariat/\' class="item">À propos du Commissariat</a></li></ul></div></div></nav>' : '<div class="transactBar"></div>');
  if (opt_data.breadcrumbs != false) {
    output += '<nav id="wb-bc" property="breadcrumb" aria-labelledby="you-are-here"><h2 id="you-are-here">Vous êtes ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList156 = opt_data.breadcrumbs;
      var itemListLen156 = itemList156.length;
      for (var itemIndex156 = 0; itemIndex156 < itemListLen156; itemIndex156++) {
        var itemData156 = itemList156[itemIndex156];
        output += '<li>' + ((itemData156.acronym != null) ? '<abbr title="' + soy.$$escapeHtml(itemData156.acronym) + '">' : '') + ((itemData156.href != null) ? '<a href="' + soy.$$escapeHtml(itemData156.href) + '">' : '') + soy.$$escapeHtml(itemData156.title) + ((itemData156.href != null) ? '</a>' : '') + ((itemData156.acronym != null) ? '</abbr>' : '') + '</li>';
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
  return '\t\t' + ((opt_data.showPostContent != false) ? '' : '') + ((opt_data.pagedetails != false) ? '<div class="pagedetails' + ((opt_data.isContainer != null) ? ' container' : '') + '">' + ((opt_data.showFeedback != null || opt_data.showShare != null) ? '<div class="row mrgn-tp-sm">' + ((opt_data.showFeedback != null && opt_data.showFeedback != false) ? '<div class="col-sm-6 col-md-5 col-lg-5">' + ((opt_data.showFeedback != true) ? '<feedback-element locale="fr" feedback-type="problem" feedback-api="' + soy.$$escapeHtml(opt_data.showFeedback) + '"></feedback-element>' : '<feedback-element locale="fr" feedback-type="problem"></feedback-element>') + '</div>' : '') + ((opt_data.showShare != null && opt_data.showShare != false) ? '<div class="col-sm-6 col-md-4 col-lg-5 col-md-offset-' + ((opt_data.showFeedback != null && opt_data.showFeedback != false) ? '3' : '8') + ' col-lg-offset-' + ((opt_data.showFeedback != null && opt_data.showFeedback != false) ? '2' : '7') + '">' + ((opt_data.showFeedback != null && opt_data.showFeedback != true && opt_data.showFeedback != false) ? '<feedback-element locale="fr" feedback-type="helpful" feedback-api="' + soy.$$escapeHtml(opt_data.showFeedback) + '"></feedback-element>' : '<feedback-element locale="fr" feedback-type="helpful"></feedback-element>') + '</div>' : '') + '</div>' : '') + '<dl id="wb-dtmd">' + ((opt_data.screenIdentifier != null) ? '<dt>Identificateur d\'écran&#160;:&#32;</dt><dd property="identifier">' + soy.$$escapeHtml(opt_data.screenIdentifier) + '</dd>' : '') + ((opt_data.dateModified != null) ? '<dt>Date de modification&#160;:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd>' : '') + ((opt_data.versionIdentifier != null) ? '<dt>Version&#160;:&#32;</dt><dd property="version">' + soy.$$escapeHtml(opt_data.versionIdentifier) + '</dd>' : '') + '</dl></div>' : '');
};


wet.builder.secmenu = function(opt_data, opt_ignored) {
  var output = '\t\t\t<h2 id="wb-sec-h" class="wb-inv">Menu de la section</h2>';
  var sectionList253 = opt_data.sections;
  var sectionListLen253 = sectionList253.length;
  for (var sectionIndex253 = 0; sectionIndex253 < sectionListLen253; sectionIndex253++) {
    var sectionData253 = sectionList253[sectionIndex253];
    output += '<section class="list-group menu list-unstyled"><h3>' + ((sectionData253.sectionLink != null) ? '<a href="' + soy.$$escapeHtml(sectionData253.sectionLink) + '"' + ((sectionData253.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' : '') + soy.$$escapeHtml(sectionData253.sectionName) + ((sectionData253.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + ((sectionData253.sectionLink != null) ? '</a>' : '') + '</h3><ul class="list-group menu list-unstyled">';
    var linkList272 = sectionData253.menuLinks;
    var linkListLen272 = linkList272.length;
    for (var linkIndex272 = 0; linkIndex272 < linkListLen272; linkIndex272++) {
      var linkData272 = linkList272[linkIndex272];
      if (linkData272.subLinks != null) {
        output += '<li><a href="' + soy.$$escapeHtml(linkData272.href) + '" class="list-group-item"' + ((linkData272.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData272.text) + ((linkData272.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a><ul class="list-group menu list-unstyled">';
        var sublinkList287 = linkData272.subLinks;
        var sublinkListLen287 = sublinkList287.length;
        for (var sublinkIndex287 = 0; sublinkIndex287 < sublinkListLen287; sublinkIndex287++) {
          var sublinkData287 = sublinkList287[sublinkIndex287];
          output += '<li><a href="' + soy.$$escapeHtml(sublinkData287.subhref) + '" class="list-group-item"' + ((sublinkData287.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData287.subtext) + ((sublinkData287.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtml(linkData272.href) + '" class="list-group-item"' + ((linkData272.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData272.text) + ((linkData272.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
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
    output += '<nav class="container visible-sm visible-md visible-lg wb-navcurr" aria-labelledby="footer-links"><h2 class="wb-inv" id="footer-links">À propos du site</h2><div class="row"><div class="col-md-3"><section aria-labelledby="about-opc-section"><h3 id="about-opc-section">À propos du Commissariat</h3><p>Le commissaire à la protection de la vie privée du Canada est un agent du Parlement qui a pour mission de protéger et de promouvoir le droit à la vie privée.</p><ul class="list-unstyled"><li><a href=\'' + wet.builder.base(opt_data) + 'fr/a-propos-du-commissariat/qui-nous-sommes/\'>Qui nous sommes</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/a-propos-du-commissariat/ce-que-nous-faisons/\'>Ce que nous faisons</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/a-propos-du-commissariat/rapports-operationnels-du-commissariat/\'>Rapports sur les activités du Commissariat</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/a-propos-du-commissariat//publications/\'>Publications</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/a-propos-du-commissariat/travailler-au-commissariat\'>Travailler au Commissariat</a></li></ul></section></div><div class="col-md-3"><section aria-labelledby="opc-news-section"><h3 id="opc-news-section">Nouvelles du Commissariat</h3><p>Soyez informés des annonces et des activités du Commissariat à la protection de la vie privée du Canada de même que des événements auxquels il participe.</p><ul class="list-unstyled"><li><a href=\'' + wet.builder.base(opt_data) + 'fr/nouvelles-du-commissariat/nouvelles-et-annonces\'>Nouvelles et annonces</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/nouvelles-du-commissariat/evenements-lies-a-la-protection-de-la-vie-privee/\'>Événements liés à la protection de la vie privée</a></li><li><a href=\'' + wet.builder.base(opt_data) + 'fr/nouvelles-du-commissariat/allocutions/\'>Allocutions</a></li></ul></section></div><div class="col-md-3"><section aria-labelledby="respect-section"><h3 id="respect-section">Votre vie privée</h3><p><strong>Nous respectons votre vie privée.</strong></p><p>Lisez notre <a href=\'' + wet.builder.base(opt_data) + 'fr/protection-de-la-vie-privee-et-transparence-au-commissariat/pp/\'>Politique sur la protection des renseignements personnels</a> et nos <a href=\'' + wet.builder.base(opt_data) + 'fr/protection-de-la-vie-privee-et-transparence-au-commissariat/conditions-d-utilisation/\'>Conditions d’utilisation</a> pour en savoir plus sur la protection de vos renseignements personnels et votre droit à la vie privée lorsque vous naviguez sur le site Web <a href=\'' + wet.builder.base(opt_data) + '\'>priv.gc.ca</a> ou que vous communiquez avec le Commissariat à la protection de la vie privée du Canada.</p></section><section aria-labelledby="transparency-section"><h3 id="transparency-section">Transparence</h3><ul class="list-unstyled"><li><a href=\'' + wet.builder.base(opt_data) + 'fr/protection-de-la-vie-privee-et-transparence-au-commissariat/divulgation-proactive/\'>Divulgation proactive</a></li></ul></section></div><div class="col-md-3"><section aria-labelledby="contact-us-section"><h3 id="contact-us-section">Pour communiquer avec nous</h3><p>Vous voulez nous poser une question, nous faire part d’une préoccupation ou déposer une plainte contre une organisation? Nous pouvons vous aider.</p>';
    if (opt_data.contactLinks != null) {
      output += '<ul class="list-unstyled colcount-sm-2 colcount-md-3">';
      var linkList350 = opt_data.contactLinks;
      var linkListLen350 = linkList350.length;
      for (var linkIndex350 = 0; linkIndex350 < linkListLen350; linkIndex350++) {
        var linkData350 = linkList350[linkIndex350];
        output += (linkIndex350 == 0) ? '<li><a href="' + soy.$$escapeHtml(linkData350.href) + '">Contactez-nous</a></li>' : '';
      }
      output += '</ul>';
    } else {
      output += '<a href=\'' + wet.builder.base(opt_data) + 'fr/communiquer-avec-le-commissariat/\' role="button" class="btn btn-default active">Communiquer avec le Commissariat</a>';
    }
    output += '</section><section aria-labelledby="stay-connected-section"><h3 id="stay-connected-section">Restez branchés</h3><ul class="list-unstyled"><li><span class="fa fa-comments"></span> <a href=\'' + wet.builder.base(opt_data) + 'fr/blogue\'>Blogue du Commissariat</a></li><li><span class="fa fa-linkedin-square"></span> <a href="https://www.linkedin.com/company/office-of-the-privacy-commissioner-of-canada">LinkedIn du Commissariat</a></li><li><span class="fa fa-rss-square"></span> <a href=\'' + wet.builder.base(opt_data) + 'fr/fils-rss-du-commissariat/\'>Fils RSS du Commissariat</a></li><li><span class="fa fa-twitter"></span> <a href="https://twitter.com/PrivacyPrivee">Twitter du Commissariat</a></li><li><span class="fa fa-youtube"></span> <a href="https://www.youtube.com/user/PrivacyComm">Chaîne YouTube du Commissariat</a></li></ul></section></div></div></nav>';
  } else {
    output += '<div id="transactFooter" class="landscape"></div><nav class="container visible-sm visible-md visible-lg wb-navcurr ftr-urlt-lnk"><h2 class="wb-inv">À propos du site</h2><ul>';
    if (opt_data.contactLinks != null) {
      var linkList371 = opt_data.contactLinks;
      var linkListLen371 = linkList371.length;
      for (var linkIndex371 = 0; linkIndex371 < linkListLen371; linkIndex371++) {
        var linkData371 = linkList371[linkIndex371];
        output += (linkIndex371 == 0) ? '<li><a ' + ((linkData371.href) ? ' href="' + soy.$$escapeHtml(linkData371.href) + '"' : ' href=\'' + wet.builder.base(opt_data) + 'fr/communiquer-avec-le-commissariat/\'') + ((linkData371.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Coordonnées' + ((linkData371.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/communiquer-avec-le-commissariat/\'>Coordonnées</a></li>';
    }
    if (opt_data.termsLink != null) {
      var linkList399 = opt_data.termsLink;
      var linkListLen399 = linkList399.length;
      for (var linkIndex399 = 0; linkIndex399 < linkListLen399; linkIndex399++) {
        var linkData399 = linkList399[linkIndex399];
        output += (linkIndex399 == 0) ? '<li><a ' + ((linkData399.href) ? ' href="' + soy.$$escapeHtml(linkData399.href) + '"' : ' href=\'' + wet.builder.base(opt_data) + 'fr/protection-de-la-vie-privee-et-transparence-au-commissariat/conditions-d-utilisation/\'') + ((linkData399.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Avis' + ((linkData399.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/protection-de-la-vie-privee-et-transparence-au-commissariat/conditions-d-utilisation/\'>Avis</a></li>';
    }
    if (opt_data.privacyLink != null) {
      var linkList427 = opt_data.privacyLink;
      var linkListLen427 = linkList427.length;
      for (var linkIndex427 = 0; linkIndex427 < linkListLen427; linkIndex427++) {
        var linkData427 = linkList427[linkIndex427];
        output += (linkIndex427 == 0) ? '<li><a ' + ((linkData427.href) ? ' href="' + soy.$$escapeHtml(linkData427.href) + '"' : ' href=\'' + wet.builder.base(opt_data) + 'fr/protection-de-la-vie-privee-et-transparence-au-commissariat/pp/\'') + ((linkData427.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Confidentialité' + ((linkData427.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/protection-de-la-vie-privee-et-transparence-au-commissariat/pp/\'>Confidentialité</a></li>';
    }
    output += '</ul></nav>';
  }
  output += '<div class="brand"><div class="container"><div class="row "><div class="col-md-6"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-fr.png\' class="img img-responsive" alt="Logo du Commissariat" /><span class="wb-inv">Commissariat à la protection de la vie privée du Canada</span></div><div class="col-md-6 tofpg text-right"><a href="#wb-cont">Haut de la page <span class="fa fa-arrow-circle-up"></span></a></div></div></div></div></footer>';
  return output;
};


wet.builder.refFooter = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><script src=\'' + ((opt_data.jqueryEnv == 'external') ? wet.builder.environment(opt_data) + 'wet-boew/js/' : wet.builder.environment(opt_data) + 'wet-boew/js/') + 'jquery/2.2.4/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/js/theme.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'components/feedback.js\'><\/script>' + ((opt_data.exitScript == true) ? '<script src=\'' + wet.builder.environment(opt_data) + 'cdts/js/exitScript.js\'><\/script><script data-id="exitScript" data-token="' + soy.$$escapeHtml(opt_data.exitURL) + '" data-token-domains="' + soy.$$escapeHtml(opt_data.exitDomains) + '" data-token-modal="' + soy.$$escapeHtml(opt_data.displayModal) + '">clickA();<\/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Avis de sortie sécurisée</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Avertissement</h2></header><div class="modal-body"><p>' + ((opt_data.exitMsg != null && opt_data.exitMsg.length > 0) ? soy.$$escapeHtml(opt_data.exitMsg) : 'Vous êtes sur le point de quitter un site sécurisé. Voulez-vous continuer?') + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + ((opt_data.cancelMsg != null && opt_data.cancelMsg.length > 0) ? soy.$$escapeHtml(opt_data.cancelMsg) : 'Annuler') + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + ((opt_data.yesMsg != null && opt_data.yesMsg.length > 0) ? soy.$$escapeHtml(opt_data.yesMsg) : 'Oui') + '</a></li></ul></div></section>' : '') + ((opt_data.isApplication == true) ? '<script src=\'' + wet.builder.environment(opt_data) + 'cdts/js/cdtscustom.js\'><\/script>' : '') + ((opt_data.webAnalytics != null) ? '' : '');
};

// This file was automatically generated from appPage-fr.soy.
// Please don't edit this file by hand.

if (typeof applicationPage == 'undefined') { var applicationPage = {}; }


applicationPage.appTop = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '\t\t<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer à «&#160;' + ((opt_data.topCusMenu == true) ? 'Liens connexes' : 'À propos de cette application Web') + '&#160;»</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul><header><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Sélection de la langue</h2><ul class="list-inline margin-bottom-none">';
    var linkList17 = opt_data.lngLinks;
    var linkListLen17 = linkList17.length;
    for (var linkIndex17 = 0; linkIndex17 < linkListLen17; linkIndex17++) {
      var linkData17 = linkList17[linkIndex17];
      output += '<li><a lang="' + soy.$$escapeHtml(linkData17.lang) + '" href="' + soy.$$escapeHtml(linkData17.href) + '">' + soy.$$escapeHtml(linkData17.text) + '</a></li>';
    }
    output += '</ul></section>';
  }
  output += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization"><img class="visible-print-block" src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-fr.png\' alt=""><img src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-wht-fr.png\' class="hidden-print img img-responsive" alt="Logo du Commissariat"/><span class="wb-inv"> Commissariat à la protection de la vie privée du Canada</span><meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/wmms-blk.svg\' /></div>';
  if (opt_data.customSearch != null) {
    var itemList36 = opt_data.customSearch;
    var itemListLen36 = itemList36.length;
    for (var itemIndex36 = 0; itemIndex36 < itemListLen36; itemIndex36++) {
      var itemData36 = itemList36[itemIndex36];
      if (itemIndex36 == 0) {
        output += '<section id="wb-srch" class="col-lg-8 text-right visible-md visible-lg"><h2>Recherche' + ((itemData36.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData36.placeholder) : '') + '</h2><form action="' + soy.$$escapeHtml(itemData36.action) + '" method="' + soy.$$escapeHtml(itemData36.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData36.id != null) ? soy.$$escapeHtml(itemData36.id) : 'wb-srch-q') + '" class="wb-inv">Rechercher' + ((itemData36.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData36.placeholder) : '') + '</label><input id="' + ((itemData36.id != null) ? soy.$$escapeHtml(itemData36.id) : 'wb-srch-q') + '" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Rechercher' + ((itemData36.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData36.placeholder) : '') + '">';
        if (itemData36.hiddenInput != null) {
          var inputList73 = itemData36.hiddenInput;
          var inputListLen73 = inputList73.length;
          for (var inputIndex73 = 0; inputIndex73 < inputListLen73; inputIndex73++) {
            var inputData73 = inputList73[inputIndex73];
            output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData73.name) + '" value="' + soy.$$escapeHtml(inputData73.value) + '" />';
          }
        }
        output += '</div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Rechercher' + ((itemData36.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData36.placeholder) : '') + '</span></button></div></form></section>';
      }
    }
  }
  output += '</div></div><div class="app-bar"><div class="container"><div class="row">' + ((opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) ? '<section class="col-xs-12 col-sm-7">' : '<section class="col-xs-12">');
  var itemList93 = opt_data.appName;
  var itemListLen93 = itemList93.length;
  for (var itemIndex93 = 0; itemIndex93 < itemListLen93; itemIndex93++) {
    var itemData93 = itemList93[itemIndex93];
    output += (itemIndex93 == 0) ? '<h2 class="wb-inv">Nom de l\'application Web</h2><a class="app-name" href="' + soy.$$escapeHtml(itemData93.href) + '">' + soy.$$escapeHtml(itemData93.text) + '</a>' : '';
  }
  output += '</section>';
  if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<nav class="col-sm-5 hidden-xs hidden-print"><h2 class="wb-inv">Menu des paramètres du compte</h2><ul class="app-list-account list-unstyled">';
    if (opt_data.appSettings != null) {
      var itemList108 = opt_data.appSettings;
      var itemListLen108 = itemList108.length;
      for (var itemIndex108 = 0; itemIndex108 < itemListLen108; itemIndex108++) {
        var itemData108 = itemList108[itemIndex108];
        output += (itemIndex108 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData108.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Paramètres du compte</a></li>&#32;' : '';
      }
    }
    if (opt_data.signOut != null) {
      var itemList117 = opt_data.signOut;
      var itemListLen117 = itemList117.length;
      for (var itemIndex117 = 0; itemIndex117 < itemListLen117; itemIndex117++) {
        var itemData117 = itemList117[itemIndex117];
        output += (itemIndex117 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData117.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Fermer la session</a></li>' : '';
      }
    } else if (opt_data.signIn != null) {
      var itemList125 = opt_data.signIn;
      var itemListLen125 = itemList125.length;
      for (var itemIndex125 = 0; itemIndex125 < itemListLen125; itemIndex125++) {
        var itemData125 = itemList125[itemIndex125];
        output += (itemIndex125 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData125.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Ouvrir une session</a></li>' : '';
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
        var itemList158 = opt_data.customSearch;
        var itemListLen158 = itemList158.length;
        for (var itemIndex158 = 0; itemIndex158 < itemListLen158; itemIndex158++) {
          var itemData158 = itemList158[itemIndex158];
          if (itemIndex158 == 0) {
            output += '<section id="app-srch-mb" class="wb-overlay modal-content overlay-def wb-bar-t"><div class="modal-header"><h3 class="modal-title">Recherche' + ((itemData158.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData158.placeholder) : '') + '</h3></div><div class="modal-body"><form action="' + soy.$$escapeHtml(itemData158.action) + '" method="' + soy.$$escapeHtml(itemData158.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="input-group"><label for="' + ((itemData158.id != null) ? 'app-' + soy.$$escapeHtml(itemData158.id) : 'app-srch-q-mb') + '" class="wb-inv">Recherche' + ((itemData158.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData158.placeholder) : '') + '</label><input placeholder="Rechercher' + ((itemData158.placeholder != null) ? ' dans ' + soy.$$escapeHtml(itemData158.placeholder) : '') + '" id="' + ((itemData158.id != null) ? 'app-' + soy.$$escapeHtml(itemData158.id) : 'app-srch-q-mb') + '" class="app-srch-q-mb form-control" name="q" type="search" value="" size="27" maxlength="150">';
            if (itemData158.hiddenInput != null) {
              var inputList197 = itemData158.hiddenInput;
              var inputListLen197 = inputList197.length;
              for (var inputIndex197 = 0; inputIndex197 < inputListLen197; inputIndex197++) {
                var inputData197 = inputList197[inputIndex197];
                output += '<input type="hidden" name="' + soy.$$escapeHtml(inputData197.name) + '" value="' + soy.$$escapeHtml(inputData197.value) + '" />';
              }
            }
            output += '<span class="input-group-btn"><button type="submit" id="app-srch-sub-mb" class="btn btn-primary btn-small" name="app-srch-sub-mb"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche' + ((itemData158.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData158.placeholder) : '') + '</span></button></span></div></form></div></section>';
          }
        }
      }
      output += '</nav>';
    }
    if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
      output += '<nav><h2 class="wb-inv">Menu des paramètres du compte</h2><ul class="app-list-account list-unstyled">';
      if (opt_data.appSettings != null) {
        var itemList217 = opt_data.appSettings;
        var itemListLen217 = itemList217.length;
        for (var itemIndex217 = 0; itemIndex217 < itemListLen217; itemIndex217++) {
          var itemData217 = itemList217[itemIndex217];
          output += (itemIndex217 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData217.href) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Paramètres du compte</a></li>&#32;' : '';
        }
      }
      if (opt_data.signOut != null) {
        var itemList226 = opt_data.signOut;
        var itemListLen226 = itemList226.length;
        for (var itemIndex226 = 0; itemIndex226 < itemListLen226; itemIndex226++) {
          var itemData226 = itemList226[itemIndex226];
          output += (itemIndex226 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData226.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Fermer la session</a></li>' : '';
        }
      } else if (opt_data.signIn != null) {
        var itemList234 = opt_data.signIn;
        var itemListLen234 = itemList234.length;
        for (var itemIndex234 = 0; itemIndex234 < itemListLen234; itemIndex234++) {
          var itemData234 = itemList234[itemIndex234];
          output += (itemIndex234 == 0) ? '<li><a href="' + soy.$$escapeHtml(itemData234.href) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Ouvrir une session</a></li>' : '';
        }
      }
      output += '</ul></nav>';
    }
    output += '</div>';
    if (opt_data.menuLinks != null) {
      output += '<nav id="wb-sm" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Menu de navigation principal</h2><div class="row"><ul class="list-inline menu" role="menubar">';
      var linkList246 = opt_data.menuLinks;
      var linkListLen246 = linkList246.length;
      for (var linkIndex246 = 0; linkIndex246 < linkListLen246; linkIndex246++) {
        var linkData246 = linkList246[linkIndex246];
        if (linkData246.subLinks != null) {
          output += '<li><a href="' + soy.$$escapeHtml(linkData246.id) + '" class="item"' + ((linkData246.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData246.text) + ((linkData246.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtml(linkData246.id) + '" role="menu">';
          var sublinkList263 = linkData246.subLinks;
          var sublinkListLen263 = sublinkList263.length;
          for (var sublinkIndex263 = 0; sublinkIndex263 < sublinkListLen263; sublinkIndex263++) {
            var sublinkData263 = sublinkList263[sublinkIndex263];
            output += (sublinkIndex263 == sublinkListLen263 - 1) ? '<li class="slflnk"><a href="' + soy.$$escapeHtml(sublinkData263.subhref) + '"' + ((sublinkData263.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData263.subtext) + ((sublinkData263.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '<li><a href="' + soy.$$escapeHtml(sublinkData263.subhref) + '"' + ((sublinkData263.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData263.subtext) + ((sublinkData263.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
          }
          output += '</ul></li>';
        } else {
          output += '<li><a href="' + soy.$$escapeHtml(linkData246.href) + '" class="item"' + ((linkData246.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData246.text) + ((linkData246.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
        }
      }
      output += '</ul></div></div></nav>';
    } else if (opt_data.menuPath != null) {
      output += '<nav id="wb-sm" data-ajax-replace="' + soy.$$escapeHtml(opt_data.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>';
    }
  }
  if (opt_data.breadcrumbs != null) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>Vous êtes ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';
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
    output += '<div class="landscape"><nav class="container visible-sm visible-md visible-lg wb-navcurr" aria-labelledby="footer-links"><h2 class="wb-inv">Liens connexes</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">';
    var linkList345 = opt_data.footerSections;
    var linkListLen345 = linkList345.length;
    for (var linkIndex345 = 0; linkIndex345 < linkListLen345; linkIndex345++) {
      var linkData345 = linkList345[linkIndex345];
      output += '<li><a href="' + soy.$$escapeHtml(linkData345.href) + '"' + ((linkData345.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData345.text) + ((linkData345.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>';
    }
    output += '</ul></nav></div>';
  }
  output += '<nav class="container visible-sm visible-md visible-lg wb-navcurr ftr-urlt-lnk"><h2 class="wb-inv">À propos de cette application Web</h2><ul>';
  if (opt_data.contactLink != null) {
    var linkList363 = opt_data.contactLink;
    var linkListLen363 = linkList363.length;
    for (var linkIndex363 = 0; linkIndex363 < linkListLen363; linkIndex363++) {
      var linkData363 = linkList363[linkIndex363];
      output += (linkIndex363 == 0) ? '<li><a ' + ((linkData363.href) ? ' href="' + soy.$$escapeHtml(linkData363.href) + '"' : ' href=\'' + wet.builder.base(opt_data) + 'fr/communiquer-avec-le-commissariat/\'') + ((linkData363.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Coordonnées' + ((linkData363.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/communiquer-avec-le-commissariat/\'>Coordonnées</a></li>';
  }
  if (opt_data.termsLink != null) {
    var linkList391 = opt_data.termsLink;
    var linkListLen391 = linkList391.length;
    for (var linkIndex391 = 0; linkIndex391 < linkListLen391; linkIndex391++) {
      var linkData391 = linkList391[linkIndex391];
      output += (linkIndex391 == 0) ? '<li><a ' + ((linkData391.href) ? ' href="' + soy.$$escapeHtml(linkData391.href) + '"' : ' href=\'' + wet.builder.base(opt_data) + 'fr/protection-de-la-vie-privee-et-transparence-au-commissariat/conditions-d-utilisation/\'') + ((linkData391.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Avis' + ((linkData391.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/protection-de-la-vie-privee-et-transparence-au-commissariat/conditions-d-utilisation/\'>Avis</a></li>';
  }
  if (opt_data.privacyLink != null) {
    var linkList419 = opt_data.privacyLink;
    var linkListLen419 = linkList419.length;
    for (var linkIndex419 = 0; linkIndex419 < linkListLen419; linkIndex419++) {
      var linkData419 = linkList419[linkIndex419];
      output += (linkIndex419 == 0) ? '<li><a ' + ((linkData419.href) ? ' href="' + soy.$$escapeHtml(linkData419.href) + '"' : ' href=\'' + wet.builder.base(opt_data) + 'fr/protection-de-la-vie-privee-et-transparence-au-commissariat/pp/\'') + ((linkData419.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Confidentialité' + ((linkData419.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fenêtre</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href=\'' + wet.builder.base(opt_data) + 'fr/protection-de-la-vie-privee-et-transparence-au-commissariat/pp/\'>Confidentialité</a></li>';
  }
  output += '</ul></nav><div class="brand"><div class="container"><div class="row "><div class="col-md-6"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-fr.png\' class="img img-responsive" alt="Logo du Commissariat" /><span class="wb-inv">Commissariat à la protection de la vie privée du Canada</span></div><div class="col-md-6 tofpg text-right"><a href="#wb-cont">Haut de la page <span class="fa fa-arrow-circle-up"></span></a></div></div></div></div></footer>';
  return output;
};

// This file was automatically generated from serverPage.soy.
// Please don't edit this file by hand.

if (typeof serverPage == 'undefined') { var serverPage = {}; }


serverPage.serverRefTop = function(opt_data, opt_ignored) {
  return '\t\t<!--[if gte IE 9 | !IE ]><!--><link href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/theme-srv.min.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/css/ie8-theme-srv.min.css\' /><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/jquery/2.2.4/jquery.min.js\'><\/script><script src=\'' + wet.builder.environment(opt_data) + 'wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]-->';
};


serverPage.serverTop = function(opt_data, opt_ignored) {
  return '\t<header role="banner" id="wb-bnr" class="container"><div class="row"><div class="col-sm-6"><img id="opc-sig" src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-fr.png\' class="hidden-print img img-responsive" alt="Logo du Commissariat / OPC Logo"/><span class="wb-inv"> Commissariat à la protection de la vie privée du Canada / Office of the Privacy Commissioner of Canada</span></div></div></header>';
};


serverPage.serverBottom = function(opt_data, opt_ignored) {
  return '\t<footer id="wb-info"><div class="brand"><div class="container"><div class="row "><div class="col-md-6"><img src=\'' + wet.builder.environment(opt_data) + 'gcweb-opc/assets/opc-blk-en.png\' class="img img-responsive" alt="OPC Logo" /><span class="wb-inv">Office of Privacy Commissioner of Canada</span></div><div class="col-md-6 tofpg text-right"><a href="#wb-cont">Top of Page <span class="fa fa-arrow-circle-up"></span></a></div></div></div></div></footer>';
};
