# testcafe-ios-issue

steps to reproduce:

1. run `yarn install`
2. run (this fails for me) `BROWSERSTACK_BUILD_ID=ios-issue-demo BROWSERSTACK_USE_AUTOMATE="1" BROWSERSTACK_USERNAME=*** BROWSERSTACK_ACCESS_KEY=*** yarn testcafe 'browserstack:iPhone 11 Pro@15' --fixture-meta smoketest=true --test-meta breakpoint=XS src/tests/demo.acceptance.js
3. run (this is working fine) `BROWSERSTACK_BUILD_ID=ios-issue-demo BROWSERSTACK_USE_AUTOMATE="1" BROWSERSTACK_USERNAME=*** BROWSERSTACK_ACCESS_KEY=*** yarn testcafe 'browserstack:iPhone 13 Pro@15' --fixture-meta smoketest=true --test-meta breakpoint=XS src/tests/demo.acceptance.js
4. run (this is working fine) `BROWSERSTACK_BUILD_ID=ios-issue-demo BROWSERSTACK_USE_AUTOMATE="1" BROWSERSTACK_USERNAME=*** BROWSERSTACK_ACCESS_KEY=*** yarn testcafe 'browserstack:Samsung Galaxy S20' --fixture-meta smoketest=true --test-meta breakpoint=XS src/tests/demo.acceptance.js
