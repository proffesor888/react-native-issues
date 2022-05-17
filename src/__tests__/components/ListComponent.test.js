import * as React from 'react';
import renderer from 'react-test-renderer';
import ListComponent from "../../components/List/ListComponent";
import {mockIssuesArray} from "../../model/jestMock";

describe("List is rendered", () => {
    test("All filter is rendered", () => {
        const component = renderer.create(<ListComponent items={[]} />).toJSON();
        expect(component.children.length).toEqual(1);
    })
    test("All filter is rendered", () => {
        const component = renderer.create(<ListComponent items={mockIssuesArray} />).toJSON();
        expect(component.children.length).toEqual(1);
    })
    test("Load next page is triggered", () => {
        const nextPageMock = jest.fn();
        const component = renderer.create(<ListComponent items={mockIssuesArray} loadNextPage={nextPageMock} />);
        const list = component.root.findByProps({testID: 'List'}).props;
        renderer.act(() => list.onEndReached());
        expect(nextPageMock).toBeCalled();
    })
})