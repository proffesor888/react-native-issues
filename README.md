# react-native-issues

**App which gets issues from repository**.

First screen accepts organization name and repository name. If data is correct, app navigates to the second screen.
Second screen represents issues list and bookmarked issues (depending on a tab selection). There is a filter at the top, which can filter issues by open, closed and all statues. By clicking on a particular issue tile - screen with details will be shown.
Screen with details has a switch at the top which turns selected issue into a bookmarked one.
Bookmarked screen loads pre-saved issues from the storage (if such exists).

# Run tests: yarn test
# Start expo env: yarn start
