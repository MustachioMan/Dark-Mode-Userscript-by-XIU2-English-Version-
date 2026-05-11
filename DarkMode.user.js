// ==UserScript==
// @name         Dark Mode
// @name:en-US   Eye Protection Mode
// @version      1.5.8
// @author       X.I.U
// @description  Simple and effective network-wide eye protection mode (night mode, dark mode, black mode)
// @match        *://*/*
// @exclude      https://live.bilibili.com/*
// @icon         data:image/png;base64,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
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @sandbox      JavaScript
// @noframes
// @license      GPL-3.0 License
// @run-at       document-start
// @namespace    https://github.com/XIU2/UserScript
// @supportURL   https://github.com/XIU2/UserScript
// @homepageURL  https://github.com/XIU2/UserScript
// ==/UserScript==

(function() {
    'use strict';
    var menu_ALL = [
      ['Menu disable', '✅ Enabled (click to disable the current website)', '❌ Disabled (click to enable the current website)', []],
        ['Menu run during the day', 'Keep it on during the day (a little brighter than at night)', 'Keep it on during the day', true],
        ['Menu dark mode auto', 'Eye protection mode follows the browser', 'Eye protection mode follows the browser', false],
        ['Menu auto recognition', 'Intelligent exclusion of web pages with dark mode (beta)', 'Intelligent exclusion of web pages with dark mode (beta)', true],
        ['Menu forced to enable', '✅ The current website has been forced to enable eye protection mode (👆)', '❌ The current website has not been forced to enable eye protection mode (👆)', []],
        ['Menu dark mode type', 'Click to switch mode', 'Click to switch mode', 2],
['Menu custom mode', 'Customize the current mode', 'Customize the current mode', true], ['Menu custom mode1',,,'60|50'], ['Menu custom mode2',,,'60|40|50|50'], ['Menu custom mode3',,,'90'], ['Menu custom mode3 exclude',,,'img, .img, video, [style*="background"][style*="url"], svg'],
        ['Menu custom time', 'Custom day and night time', 'Custom day and night time', '6:00|18:00'],
        ['Menu auto switch', 'Automatically switch mode at night', 'Automatically switch mode at night', ''],
    ], menu_ID = [];
    for (let i=0;i<menu_ALL.length;i++){ // If the read value is null, write the default value
        if (GM_getValue(menu_ALL[i][0]) == null){GM_setValue(menu_ALL[i][0], menu_ALL[i][3])};
    }
    registerMenuCommand();

    // Customized day and night time transitional adjustment (accurate to the minute), removed after a period of time
    if (GM_getValue('Menu custom time', '').indexOf(':') === -1) GM_setValue('Menu custom time', GM_getValue('Menu custom time', '6|18').replace('|',':00|') + ':00')

    if (menu_ID.length > 1) {addStyle();}


    // Register script menu
    function registerMenuCommand() {
        if (menu_ID.length != []){
            for (let i=0;i<menu_ID.length;i++){
                GM_unregisterMenuCommand(menu_ID[i]);
            }
        }
        for (let i=0;i<menu_ALL.length;i++){ // Loop registration script menu
            menu_ALL[i][3] = GM_getValue(menu_ALL[i][0]);
            if (menu_ALL[i][0] === 'Menu disable')
            { // Enable/disable eye protection mode (current website)
                if (menu_disable('Check')) { // Whether the current website already exists in the banned list
                    menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][2]}`, function(){menu_disable('Of the')});
                    return
                } else {
                    if (GM_getValue('Menu dark mode auto') && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        menu_ID[i] = GM_registerMenuCommand(`❌ The current browser is in daytime mode (click to close [Follow browser in eye protection mode])`, function(){GM_setValue('Menu dark mode auto', false);location.reload();});
                        return
                    }
                    menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][1]}`, function(){menu_disable('Add')});
                }
            }
            else if (menu_ALL[i][0] === 'Menu dark mode type')
            { // Click to switch modes
                if (menu_ALL[i][3] > 3) { // Prevent errors from being reported if the data stored by the user is larger than the array after reducing the raw array.
                    menu_ALL[i][3] = 1;
                    GM_setValue(menu_ALL[i][0], menu_ALL[i][3]);
                }
                let menu_newMode = getAutoSwitch();
                menu_ID[i] = GM_registerMenuCommand(`${menu_num(menu_newMode)} ${menu_ALL[i][1]}`, function(){menu_toggle(`${menu_ALL[i][3]}`,`${menu_ALL[i][0]}`)});
            }
            else if (menu_ALL[i][0] === 'Menu custom mode')
            { // Customize the current mode
                GM_setValue(menu_ALL[i][0], menu_ALL[i][3]);
                menu_ID[i] = GM_registerMenuCommand(`#️⃣ ${menu_ALL[i][1]}`, function(){menu_customMode()});
            }
            else if (menu_ALL[i][0] === 'Menu custom time')
            { // Custom day and night time
                GM_setValue(menu_ALL[i][0], menu_ALL[i][3]);
                menu_ID[i] = GM_registerMenuCommand(`#️⃣ ${menu_ALL[i][1]}`, function(){menu_customTime()});
            }
            else if (menu_ALL[i][0] === 'Menu custom mode1' || menu_ALL[i][0] === 'Menu custom mode2' || menu_ALL[i][0] === 'Menu custom mode3' || menu_ALL[i][0] === 'Menu custom mode3 exclude')
            { // current mode value
                GM_setValue(menu_ALL[i][0], menu_ALL[i][3]);
            }
            else if (menu_ALL[i][0] === 'Menu auto switch')
            { // Automatically switch modes at night
                menu_ID[i] = GM_registerMenuCommand(`#️⃣ ${menu_ALL[i][1]}`, function(){menu_customAutoSwitch()});
            }
            else if (menu_ALL[i][0] === 'Menu forced to enable')
            { // Force the current website to enable eye protection mode
                if (menu_value('Menu auto recognition')) { // Automatically exclude web pages with built-in dark mode (beta)
                    if (menu_forcedToEnable('Check')) { // Whether the current website already exists in the list
                        menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][1]}`, function(){menu_forcedToEnable('Of the')});
                    } else {
                        menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][2]}`, function(){menu_forcedToEnable('Add')});
                    }
                }
            }
            else
            {
                menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][3]?'✅':'❌'} ${menu_ALL[i][1]}`, function(){menu_switch(`${menu_ALL[i][3]}`,`${menu_ALL[i][0]}`,`${menu_ALL[i][2]}`)});
            }
        }
        menu_ID[menu_ID.length] = GM_registerMenuCommand('💬 Feedback & Suggestions', function () {window.GM_openInTab('https://github.com/XIU2/UserScript#xiu2userscript', {active: true,insert: true,setParent: true});window.GM_openInTab('https://greasyfork.org/zh-CN/scripts/426377/feedback', {active: true,insert: true,setParent: true});});
    }


    // Menu number icon
    function menu_num(num) {
        return ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'][num]
    }


    // Automatically switch modes at night
    function menu_customAutoSwitch() {
        let newAutoSwitch = prompt('Different modes are used during the day and night, and the modification will take effect immediately~\nFormat: Day Mode|Night Mode\nFor example: 1|3 (i.e. Day Mode 1 Night Mode 3)\nDefault: Leave blank (i.e. turn off this function)', GM_getValue('Menu auto switch'));
        if (newAutoSwitch === '') {
            GM_setValue('Menu auto switch', '');
        } else if (newAutoSwitch != null) {
            if (newAutoSwitch.split('|').length == 2) {
                GM_setValue('Menu auto switch', newAutoSwitch);
            } else {
                alert(`The format of the input content is wrong...`);
            }
        }
        registerMenuCommand(); // Re-register script menu
        if (document.getElementById('Xi u2 dark mode')) {
            document.getElementById('Xi u2 dark mode').remove(); // Modify styles on the fly
            addStyle();
        }
    }
    // Get the current mode
    function getAutoSwitch() {
        let darkModeType = GM_getValue('Menu dark mode type'), hours = new Date().getHours(), time = GM_getValue('Menu custom time').split('|').map(Number);
        if (GM_getValue('Menu auto switch') != '') { // Automatically switch modes at night
            if (isDaytime()) { // daytime
                darkModeType = GM_getValue('Menu auto switch').split('|')[0];
            } else { // night
                darkModeType = GM_getValue('Menu auto switch').split('|')[1];
            }
        }
        return parseInt(darkModeType)
    }


    // Customize the current mode
    function menu_customMode() {
        let newMods, tip, defaults, name;
        switch(getAutoSwitch()) {
            case 1:
                tip = 'Customized [Mode 1], the modification will take effect immediately (some web pages may need to be refreshed)~\nFormat: Brightness (day)|Brightness (night)\nDefault: 60|50 (all are percentages 1~100, no % sign is required)';
                defaults = '60|50';
                name = 'Menu custom mode1';
                break;
            case 2:
                tip = 'Customize [Mode 2], the modification will take effect immediately (some web pages may need to be refreshed)~\nFormat: Brightness (day)|Warm (day)|Brightness (night)|Warm (night)\nDefault: 60|40|50|50 (all are percentages 1~100, no % sign is required)';
                defaults = '60|40|50|50';
                name = 'Menu custom mode2';
                break;
            case 3:
                tip = 'Customized [Mode 3], effective immediately after modification (some web pages may need to be refreshed)~\nFormat: inverse color\nDefault: 90 (all percentages 50~100, no % sign required)';
                defaults = '90';
                name = 'Menu custom mode3';
                break;
        }
        newMods = prompt(tip, GM_getValue(`${name}`));
        if (newMods === '') {
            GM_setValue(`${name}`, defaults);
            registerMenuCommand(); // Re-register script menu
        } else if (newMods != null) {
            GM_setValue(`${name}`, newMods);
            registerMenuCommand(); // Re-register script menu
        }
        if (getAutoSwitch() == 3) {
            tip = 'Customize [Mode 3] Exclude the target, the modification will take effect immediately (some web pages may need to be refreshed)~\nFormat: CSS selector (if you don’t know how to write, please contact me)\nDefault: img, .img, video, [style*="background"][style*="url"], svg\n (Use English comma separation, no comma at the end)';
            defaults = 'img, .img, video, [style*="background"][style*="url"], svg';
            name = 'Menu custom mode3 exclude';
            newMods = prompt(tip, GM_getValue(`${name}`));
            if (newMods === '') {
                GM_setValue(`${name}`, defaults);
                registerMenuCommand(); // Re-register script menu
            } else if (newMods != null) {
                GM_setValue(`${name}`, newMods);
                registerMenuCommand(); // Re-register script menu
            }
        }
        if (document.getElementById('Xi u2 dark mode')) {
            document.getElementById('Xi u2 dark mode').remove(); // Modify styles on the fly
            addStyle();
        }
    }


    // Custom day and night time
    function menu_customTime() {
        let newMods = prompt('Customize the time related to day/night in the script. After modification, refresh the webpage to take effect~\nFormat: 6:00|18:30 (i.e. day time between 6:00 ~ 18:30)\nReverse setting is also supported: 14:00|12:00 (i.e. night time between 12:00 ~ 14:00)', GM_getValue('Menu custom time'));
        if (newMods === '') {
            GM_setValue('Menu custom time', '6:00|18:00');
            registerMenuCommand(); // Re-register script menu
        } else if (newMods != null) {
            GM_setValue('Menu custom time', newMods);
            registerMenuCommand(); // Re-register script menu
        }
    }


    // Force the current website to enable eye protection mode
    function menu_forcedToEnable(type) {
        switch(type) {
            case 'Check':
                if(check()) return true
                return false
                break;
            case 'Add':
                add();
                break;
            case 'Of the':
                del();
                break;
        }

        function check() { // Returns true if it exists, false if it doesn't exist
            let websiteList = menu_value('Menu forced to enable'); // Read website list
            if (websiteList.indexOf(location.host) === -1) return false // does not exist returns false
            return true
        }

        function add() {
            if (check()) return
            let websiteList = menu_value('Menu forced to enable'); // Read website list
            websiteList.push(location.host); // Add website domain name
            GM_setValue('Menu forced to enable', websiteList); // Write configuration
            location.reload(); // Refresh web page
        }

        function del() {
            if (!check()) return
            let websiteList = menu_value('Menu forced to enable'), // Read website list
            index = websiteList.indexOf(location.host);
            websiteList.splice(index, 1); // Delete website domain name
            GM_setValue('Menu forced to enable', websiteList); // Write configuration
            location.reload(); // Refresh web page
        }
    }


    // Enable/disable eye protection mode (current website)
    function menu_disable(type) {
        switch(type) {
            case 'Check':
                if(check()) return true
                return false
                break;
            case 'Add':
                add();
                break;
            case 'Of the':
                del();
                break;
        }

        function check() { // Returns true if it exists, false if it doesn't exist
            let websiteList = menu_value('Menu disable'); // Read website list
            if (websiteList.indexOf(location.host) === -1) return false // does not exist returns false
            return true
        }

        function add() {
            if (check()) return
            let websiteList = menu_value('Menu disable'); // Read website list
            websiteList.push(location.host); // Add website domain name
            GM_setValue('Menu disable', websiteList); // Write configuration
            location.reload(); // Refresh web page
        }

        function del() {
            if (!check()) return
            let websiteList = menu_value('Menu disable'), // Read website list
            index = websiteList.indexOf(location.host);
            websiteList.splice(index, 1); // Delete website domain name
            GM_setValue('Menu disable', websiteList); // Write configuration
            location.reload(); // Refresh web page
        }
    }


    // Switch to dark mode
    function menu_toggle(menu_status, Name) {
        menu_status = parseInt(menu_status)
        if (menu_status >= 3){
            menu_status = 1;
        } else {
            menu_status += 1;
        }
        GM_setValue(`${Name}`, menu_status);
        registerMenuCommand(); // Re-register script menu
        if (document.getElementById('Xi u2 dark mode')) {
            document.getElementById('Xi u2 dark mode').remove(); // Modify styles on the fly
            addStyle();
        }
        //location.reload(); //Refresh the web page
    };


    // Menu switch
    function menu_switch(menu_status, Name, Tips) {
        if (menu_status == 'True'){
            GM_setValue(`${Name}`, false);
            GM_notification({text: `Closed [${Tips}] function\n (valid after clicking to refresh the web page)`, timeout: 3500, onclick: function(){location.reload();}});
        }else{
            GM_setValue(`${Name}`, true);
            GM_notification({text: `turned on [${Tips}] function\n(take effect after clicking to refresh the web page)`, timeout: 3500, onclick: function(){location.reload();}});
        }
if (Name === 'Menu auto recognition') {
            location.reload(); //Refresh web page
        }
        registerMenuCommand(); //Re-register script menu
    };

    // Return menu value
    function menu_value(menuName) {
        for (let menu of menu_ALL) {
            if (menu[0] == menuName) {
                return menu[3]
            }
        }
    }


    // Add style
    function addStyle() {
        let remove = false, style_Add = document.createElement('Style'),
            hours = new Date().getHours(),
            style_10 = menu_value('Menu custom mode1').split('|'),
            style_20 = menu_value('Menu custom mode2').split('|'),
            style_30 = menu_value('Menu custom mode3').split('|'),
            style = ``,
            style_00 = `html, body {background-color: #ffffff !important;}`,
            style_11 = `html {filter: brightness(${style_10[0]}%) !important;}`,
            style_11_firefox = `html {filter: brightness(${style_10[0]}%) !important; background-image: url();}`,
            style_12 = `html {filter: brightness(${style_10[1]}%) !important;}`,
            style_12_firefox = `html {filter: brightness(${style_10[1]}%) !important; background-image: url();}`,
            style_21 = `html {filter: brightness(${style_20[0]}%) sepia(${style_20[1]}%) !important;}`,
            style_21_firefox = `html {filter: brightness(${style_20[0]}%) sepia(${style_20[1]}%) !important; background-image: url();}`,
            style_22 = `html {filter: brightness(${style_20[2]}%) sepia(${style_20[3]}%) !important;}`,
            style_22_firefox = `html {filter: brightness(${style_20[2]}%) sepia(${style_20[3]}%) !important; background-image: url();}`,
            style_31 = `html {filter: invert(${style_30[0]}%) !important; text-shadow: 0 0 0 !important;}
            ${menu_value('Menu custom mode3 exclude')} {filter: invert(1) !important;}
            img[alt="[公式]"] {filter: none !important;}`,
            style_31_firefox = `html {filter: invert(${style_30[0]}%) !important; background-image: url(); text-shadow: 0 0 0 !important;}
            ${menu_value('Menu custom mode3 exclude')} {filter: invert(1) !important;}
            img[alt="[公式]"] {filter: none !important;}`,
            style_31_scrollbar = `::-webkit-scrollbar {height: 12px !important;}
::-webkit-scrollbar-thumb {border-radius: 0;border-color: transparent;border-style: dashed;background-color: #3f4752 !important;background-clip: padding-box;transition: background-color .32s ease-in-out;}
::-webkit-scrollbar-corner {background: #202020 !important;}
::-webkit-scrollbar-track {background-color: #22272e !important;}
::-webkit-scrollbar-thumb:hover {background: #3f4752 !important;}`;


        // Firefox browser requires special treatment
        if (navigator.userAgent.toLowerCase().indexOf('Firefox') > -1) {
            style_11 = style_11_firefox
            style_12 = style_12_firefox
            style_21 = style_21_firefox
            style_22 = style_22_firefox
            style_31 = style_31_firefox
        }

        // daytime
        if (isDaytime()) {
            if (menu_value('Menu run during the day')) {
                style_12 = style_11
                style_22 = style_21
            } else {
                style_12 = style_22 = ''
            }
        }


        let darkModeType = getAutoSwitch();

        switch(darkModeType) {
            case 1:
                style += style_12;
                break;
            case 2:
                style += style_22;
                break;
            case 3:
                style += style_31 + style_31_scrollbar;
                if (location.hostname.indexOf('Search.bilibili.com') > -1) {
                    style += `ul.video-list img, ul.video-list .video-item .img .mask-video, ul.video-list .video-item .img .van-danmu, ul.video-list .video-item .img .van-framepreview {filter: none !important;}`
                } else if (location.hostname.indexOf('.bilibili.com') > -1) {
                    style += `
.bpx-player-container[data-screen="full"] .bpx-player-video-wrap {filter: invert(1) !important;}
.bpx-player-container[data-screen="web"] {filter: invert(1) !important;}
.bpx-player-container[data-screen="web"] video {filter: none !important;}
* {font-weight: bold !important;}`
                } else if (location.hostname.indexOf('.huya.com') > -1) {
                    style += `#player-wrap[style="height: 100%;"], .player-loading, .sidebar-show, #player-ctrl-wrap {filter: invert(1) !important;}`
                }
                break;
        }
        style_Add.id = 'Xi u2 dark mode';
        style_Add.type = 'Text/css';
        //Console.log(document,document.last element child,document.query selector('html'))
        if (document.lastElementChild) {
            document.lastElementChild.appendChild(style_Add).textContent = style;
        } else { // If it is found that the speed of some websites is too slow, the script will run too early and even the html tag has not been loaded. . .
            let timer1 = setInterval(function(){ // Check if html already exists every 5 milliseconds
                if (document.lastElementChild) {
                    clearInterval(timer1); // Cancel timer
                    document.lastElementChild.appendChild(style_Add).textContent = style;
                }
            });
        }

        let websiteList = [];
        if (menu_value('Menu auto recognition')) { // Intelligently exclude web pages with dark mode (beta)
            websiteList = menu_value('Menu forced to enable'); // Force the current website to enable eye protection mode
        }

        // In order to avoid being unable to check whether to set the background color because the body has not been loaded yet
        let timer = setInterval(function(){ // Check if body already exists every 5 milliseconds
            if (document.body) {
                clearInterval(timer); // Cancel timer (every 5 milliseconds)
                setTimeout(function(){ // In order to avoid that the CSS of the body has not been loaded too quickly, delay it for 150 milliseconds (the disadvantage is that a brief dark filter may appear)
                    console.log('[Eye protection mode] html:', window.getComputedStyle(document.lastElementChild).backgroundColor, 'body:', window.getComputedStyle(document.body).backgroundColor)
                    if (!(checkChallenge()) && window.getComputedStyle(document.body).backgroundColor === 'rgba(0, 0, 0, 0)' && window.getComputedStyle(document.lastElementChild).backgroundColor === 'rgba(0, 0, 0, 0)' && !(document.querySelector('Head>meta[name="color scheme"],head>link[href^="resource:"]') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        // If it is not on the human-machine verification page of CF CDN and the browser is in dark mode) or the body does not have a CSS background color (or it is on the resource page and the browser is in day mode), then you need to add a background color, otherwise it will affect the filter effect.
                        let style_Add2 = document.createElement('Style');
                        style_Add2.id = 'Xi u2 dark mode2';
                        document.lastElementChild.appendChild(style_Add2).textContent = style_00;

                    } else if (checkChallenge() || (document.querySelector('Head>meta[name="color scheme"],head>link[href^="resource:"]') && window.matchMedia('(prefers-color-scheme: dark)').matches) || (document.querySelector('html[class*=dark], html[data-dark-theme*=dark], html[data-theme*=dark], html[data-color-mode*=dark], body[class*=dark]')) || (window.getComputedStyle(document.body).backgroundColor === 'rgb(0, 0, 0)') || (getColorValue(document.body) > 0 && getColorValue(document.body) < 898989) || (getColorValue(document.lastElementChild) > 0 && getColorValue(document.lastElementChild) < 898989) || (window.getComputedStyle(document.body).backgroundColor === 'rgba(0, 0, 0, 0)' && window.getComputedStyle(document.lastElementChild).backgroundColor === 'rgb(0, 0, 0)')) {
                        // If it is on (CF CDN human-machine verification page and the browser is in dark mode) or (resource page and the browser is in dark mode), or the html/body element contains the dark logo, or the background color is black (equal to 0,0,0) or dark (less than 89,89,89), disable this script filter
                        if (menu_value('Menu auto recognition')) { // Exclude web pages with built-in dark mode (beta)
                            for (let i=0;i<websiteList.length;i++){ // These websites force eye protection mode filters to be enabled
                                if (websiteList[i] === location.host) return
                            }
                            console.log('[Eye Protection Mode] It is detected that the current webpage has a dark mode, and this script filter is disabled...')
                            document.getElementById('Xi u2 dark mode').remove();
                            remove = true;
                        }
                    }
                }, 150);

                // It is used to solve some websites with slow CSS loading. There may be problems that are not correctly eliminated. Before finding a better way, I will make do with it.
                setTimeout(function(){
                    console.log('[Eye protection mode] html:', window.getComputedStyle(document.lastElementChild).backgroundColor, 'body:', window.getComputedStyle(document.body).backgroundColor)
                    if (checkChallenge() || (document.querySelector('Head>meta[name="color scheme"],head>link[href^="resource:"]') && window.matchMedia('(prefers-color-scheme: dark)').matches) || (document.querySelector('html[class*=dark], html[data-dark-theme*=dark], html[data-theme*=dark], html[data-color-mode*=dark], body[class*=dark]')) || (window.getComputedStyle(document.body).backgroundColor === 'rgb(0, 0, 0)') || (getColorValue(document.body) > 0 && getColorValue(document.body) < 898989) || (getColorValue(document.lastElementChild) > 0 && getColorValue(document.lastElementChild) < 898989) || (window.getComputedStyle(document.body).backgroundColor === 'rgba(0, 0, 0, 0)' && window.getComputedStyle(document.lastElementChild).backgroundColor === 'rgb(0, 0, 0)')) {
                        // If it is on (CF CDN human-machine verification page and the browser is in dark mode) or (resource page and the browser is in dark mode), or the html/body element contains the dark logo, or the background color is black (equal to 0,0,0) or dark (less than 89,89,89), disable this script filter
                        if (menu_value('Menu auto recognition')) { // Exclude web pages with built-in dark mode (beta)
                            for (let i=0;i<websiteList.length;i++){ // These websites force eye protection mode filters to be enabled
                                if (websiteList[i] === location.host) return
                            }
                            if (remove) return
                            console.log('[Eye Protection Mode] It is detected that the current webpage has a dark mode, and this script filter is disabled....')
                            if (document.getElementById('Xi u2 dark mode')) document.getElementById('Xi u2 dark mode').remove();
                            if (document.getElementById('Xi u2 dark mode2')) document.getElementById('Xi u2 dark mode2').remove();
                        }
                    }
                }, 1500);
            }
        });

        // Solve the problem that the Vision Forum will clean up the previously inserted CSS styles
        if (location.hostname === 'Bbs.pcbeta.com') {
            let timer1 = setInterval(function(){
                if (!document.getElementById('Xi u2 dark mode')) {
                    document.lastElementChild.appendChild(style_Add).textContent = style;
                    clearInterval(timer1);
                }
            });
        }
    }

    // Cloudflare CDN’s special handling of human-machine verification interface
    function checkChallenge() {
        return (window.matchMedia('(prefers-color-scheme: dark)').matches && document.querySelector('head>meta[content*="https://challenges.cloudflare.com"]') && document.querySelector('Body>script[nonce]'))
    }

    // Get background color value
    function getColorValue(e) {
        let rgbValueArry = window.getComputedStyle(e).backgroundColor.replace(/Rgba|rgb|\(|\)| /G, '').split (',')
        return parseInt(rgbValueArry[0] + rgbValueArry[1] + rgbValueArry[2])
    }


    // Determine whether it is day or night
    function isDaytime() {
        let nowTime = new Date('2022/03/07 ' + new Date().getHours() + ':' + new Date().getMinutes() + ':00').getTime()/1000, time = GM_getValue('Menu custom time').split('|');
        time[0] = new Date('2022/03/07 ' + time[0] + ':00').getTime()/1000;
        time[1] = new Date('2022/03/07 ' + time[1] + ':00').getTime()/1000;
        if (time[0] < time[1]){
            if (nowTime > time[0] && nowTime < time[1]) return true
            return false
        } else {
            if (nowTime > time[0] || nowTime < time[1]) return true
            return false
        }
    }
})();
