import * as React from 'react';
import renderer from 'react-test-renderer';
import {IssuesListScreen} from "../../screens/IssuesListScreen";
import {useIssueListHook} from "../../utils/hooks";
import {act, renderHook} from "@testing-library/react-hooks";
import {mockIssuesArray} from "../../model/jestMock";

describe("IssueListScreen", () => {
    test("default components renders", () => {
        const screen = renderer.create(<IssuesListScreen route={{params: {issues: []}}} navigation={{}} />).toJSON();
        expect(screen.children.length).toEqual(1);
    })
    test("add issue to list", () => {
        const {result} = renderHook(useIssueListHook);
        act(() => {
            result.current.addIssues(mockIssuesArray);
        });
        expect(result.current.issuesList).toMatchObject(mockIssuesArray);
    })
    test("clear issue list", () => {
        const {result} = renderHook(useIssueListHook);
        act(() => {
            result.current.clearIssues();
        });
        expect(result.current.issuesList.length).toBe(0);
    })
})