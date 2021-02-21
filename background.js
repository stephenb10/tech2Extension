function execute4dTemplate() {
  console.log("template")
  chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" }, function () {
    chrome.tabs.executeScript(null, { file: "contact-helper.js" });
  });
}

chrome.runtime.onInstalled.addListener(() => {
  //chrome.storage.sync.set({ color });

  chrome.contextMenus.create({
    title: "4 Device Template",
    id: "4device",
    contexts: ["all"],
    documentUrlPatterns: ["*://tech2.crm6.dynamics.com/*"]
  });

 
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "4device") {
    console.log("executing context menu")
    execute4dTemplate();
  }
});


chrome.commands.onCommand.addListener(function (command, tab) {
  console.log(command, tab.url)
  const urlTest = new RegExp('^https:\/\/tech2\.crm6\.dynamics\.com\/');

  if (!urlTest.test(tab.url)) {
    return
  }
  console.log(command, "on page")

  if (command == 'test') {
    console.log("correct command pressed")
    execute4dTemplate();
  }

});


// pagetype=entityrecord
// {
// etn=contact - contact
// etn=incident - on case
// etn=phonecall - phone call
// etn=entitlement - subscription
// etn=ttg_action
// }

// pagetype=entitylist
// etn=contact - contacts list

// pagetype=dashboard

// New action button data-id="ttg_action|NoRelationship|SubGridStandard|Mscrm.SubGrid.ttg_action.AddNewStandard"

// chrome.webNavigation.onCompleted.addListener(function() {
//   console.log("Completed")
// }, {url: [{urlMatches : 'https://tech2.crm6.dynamics.com/'}]});

// chrome.webNavigation.onHistoryStateUpdated.addListener(function() {
//   console.log("Updated");
// }, {url: [{urlMatches : 'https://tech2.crm6.dynamics.com/'}]});

chrome.tabs.onUpdated.addListener(function
  (tabId, changeInfo, tab) {
  // read changeInfo data and do something with it (like read the url)

  if (changeInfo.url) {
    const urlTest = new RegExp('^https:\/\/tech2\.crm6\.dynamics\.com\/');

    if (!urlTest.test(changeInfo.url)) {
      return
    }
    console.log(changeInfo.url)
    const urlParams = new URLSearchParams(changeInfo.url);
    const pagetype = urlParams.get('pagetype');
    const entity = urlParams.get('etn')

    if (pagetype == 'entityrecord') {
      switch (entity) {
        case 'contact': // Contact 
          break;
        case 'incident': // Case 
          console.log("In a case")
          chrome.tabs.executeScript(tabId, { file: "jquery-3.5.1.min.js" }, function () {
            chrome.tabs.executeScript(tabId, { file: "case-helper.js" });
          });
          break;
        case 'phonecall': // Phone call
          break;
        case 'entitlement': // Subscription
          break;
        case 'ttg_action': // Action
          console.log("In an action")
          // Execute the jquery
          // action-helper.js 
          chrome.tabs.executeScript(tabId, { file: "jquery-3.5.1.min.js" }, function () {
            chrome.tabs.executeScript(tabId, { file: "action-helper.js" });
          });
          break;
      }
    }
  }
}
);