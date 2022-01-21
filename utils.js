/* eslint-disable import/no-import-module-exports */
import { ClientFunction, Selector } from "testcafe";

const breakpoints = require("./breakpoints.json");

const groessenHeadline = Selector("[data-test-bewerten-groessen-headline]");
const onetrustBannerAccept = Selector("#onetrust-accept-btn-handler");
const similarArticles = Selector("[data-test-suchen-teaser-title]");

const utils = {
  breakpoints,

  getWidthForBreakpoint(name) {
    return parseInt(breakpoints[name], 10);
  },

  resizeWindow: async (t, breakpointWidth, breakpointHeight) => {
    if (t.browser.platform !== "mobile") {
      await t.resizeWindow(breakpointWidth, breakpointHeight);
    }
  },

  basicActions: async (t) => {
    if ((await onetrustBannerAccept.filterVisible().exists) === false) {
      console.info(
        "OnetrustBanner not yet ready! Waiting to become visible ..."
      );
      await onetrustBannerAccept.with({ visibilityCheck: true })();
    }
    if (await onetrustBannerAccept.filterVisible().exists) {
      await t.click(onetrustBannerAccept);
    }
    if (await similarArticles.filterVisible().exists) {
      await t.click(similarArticles);
    }
  },

  waitForVueReady: async () => {
    await Selector("body.bewerten-body--ready", { visibilityCheck: true })();
  },

  closeWvbLayer: async (t) => {
    const wvbLayerClose = Selector(
      "[data-test-bewerten-out-of-stock-layer-form].shop-layer--visible [data-test-layer-close]"
    );
    if ((await wvbLayerClose.count) > 0) {
      await t.click(wvbLayerClose);
    }
  },
};

module.exports = utils;
