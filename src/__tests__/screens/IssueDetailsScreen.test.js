import * as React from 'react';
import renderer from 'react-test-renderer';
import {IssueDetailsScreen} from "../../screens/IssueDetailsScreen";
import {mockIssue} from "../../model/jestMock";

describe("IssueDetailsScreen", () => {
    test("default components renders", () => {
        const screen = renderer.create(<IssueDetailsScreen route={{params: {issue: mockIssue}}} />).toJSON();
        expect(screen.length).toEqual(2);
    })
})