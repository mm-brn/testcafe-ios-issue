import { Selector } from "testcafe";

const fixture = (...args) => global.fixture(...args);
const utils = require("../../utils");

const groessenHeadline = Selector("[data-test-bewerten-groessen-headline]");
const selectorSizesHeadline = groessenHeadline;
const groessenLayer = Selector("[data-test-bewerten-groessen-layer]");
const notActiveSize = Selector(
  "[data-test-bewerten-groessen-item]:not(.bewerten-groessen-item--active)" +
    ":not([data-test-bewerten-groessen-item-outofstock=true]) [data-test-bewerten-groessen-item-text]"
);

const breakpointHeight = 800;

const testUrl =
  "https://www.breuninger.com/de/marken/boss/hemd-jason-slim-fit/1000872565/p/?variant=7f9f03b37b8ec416ee1b79aa60a3ff85";

fixture`Größenlayer basic test`
  .page("about:blank")
  .meta("dev", "true")
  .meta("sandbox", "true")
  .meta("smoketest", "true");

["XS", "XL"].forEach((breakpoint) => {
  test.meta("breakpoint", breakpoint)(
    `should show selected size text (${breakpoint})`,
    async (t) => {
      await openPage(t, breakpoint);

      await t.click(selectorSizesHeadline);

      await groessenLayer.exists;
      const newSizeText = await notActiveSize.innerText;

      await t.click(notActiveSize);
      await utils.closeWvbLayer(t);
      const listHeadlineText = await groessenHeadline.innerText;

      await t.expect(listHeadlineText).contains(newSizeText);
    }
  );
});

async function openPage(t, breakpoint) {
  const breakpointWidth = utils.getWidthForBreakpoint(breakpoint);

  await utils.resizeWindow(t, breakpointWidth, breakpointHeight);
  await t.navigateTo(testUrl);
  await utils.basicActions(t);
  await utils.waitForVueReady();
}
