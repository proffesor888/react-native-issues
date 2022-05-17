import * as React from 'react';
import renderer from 'react-test-renderer';
import ListItemComponent from "../../components/ListItem/ListItemComponent";
import {mockIssue} from "../../model/jestMock";

describe("ListItem components rendered", () => {
    test("Touch area", () => {
        const onItemClick = jest.fn();
        const component = renderer.create(<ListItemComponent item={mockIssue} onItemClick={onItemClick} />);
        const element = component.root.findByProps({testID: 'touchArea'}).props;
        renderer.act(() => element.onPress())
        expect(element).toBeTruthy();
        expect(onItemClick).toBeCalledWith(mockIssue);
    })
    test("Title is rendered", () => {
        const component = renderer.create(<ListItemComponent item={mockIssue} />);
        const element = component.root.findByProps({testID: 'title'}).props;
        expect(element).toBeTruthy();
    })
    test("Status is rendered", () => {
        const component = renderer.create(<ListItemComponent item={mockIssue} />);
        const element = component.root.findByProps({testID: 'status'}).props;
        expect(element).toBeTruthy();
    })
})