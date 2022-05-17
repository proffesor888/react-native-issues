import * as React from 'react';
import renderer from 'react-test-renderer';
import FilterComponent from "../../components/Filter/FilterComponent";
import {OPEN_FILTER, CLOSED_FILTER, DEFAULT_FILTER} from "../../model/issues.constants";

const mockFilterFunc = jest.fn();

describe("FilterComponent components got rendered", () => {
    test("All filter is rendered", () => {
        const component = renderer.create(<FilterComponent filterIssues={mockFilterFunc} />);
        const filter = component.root.findByProps({testID: 'All'}).props;
        expect(filter).toBeTruthy();
    })
    test("Closed filter is rendered", () => {
        const component = renderer.create(<FilterComponent filterIssues={mockFilterFunc} />);
        const filter = component.root.findByProps({testID: 'Closed'}).props;
        expect(filter).toBeTruthy();
    })
    test("Open filter is rendered", () => {
        const component = renderer.create(<FilterComponent filterIssues={mockFilterFunc} />);
        const filter = component.root.findByProps({testID: 'Open'}).props;
        expect(filter).toBeTruthy();
    })
    test("Filter open applied", () => {
        const component = renderer.create(<FilterComponent filterIssues={mockFilterFunc} />);
        const filter = component.root.findByProps({testID: 'Open'}).props;
        renderer.act(() => filter.onPress(OPEN_FILTER));
        expect(mockFilterFunc).toBeCalledWith(OPEN_FILTER);
    })
    test("Filter closed applied", () => {
        const component = renderer.create(<FilterComponent filterIssues={mockFilterFunc} />);
        const filter = component.root.findByProps({testID: 'Closed'}).props;
        renderer.act(() => filter.onPress(CLOSED_FILTER));
        expect(mockFilterFunc).toBeCalledWith(CLOSED_FILTER);
    })
    test("Filter all applied", () => {
        const component = renderer.create(<FilterComponent filterIssues={mockFilterFunc} />);
        const filter = component.root.findByProps({testID: 'All'}).props;
        renderer.act(() => filter.onPress(DEFAULT_FILTER));
        expect(mockFilterFunc).toBeCalledWith(DEFAULT_FILTER);
    })
})