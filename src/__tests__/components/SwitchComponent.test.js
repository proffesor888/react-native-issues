import * as React from 'react';
import renderer from 'react-test-renderer';
import SwitchComponent from "../../components/Switch/SwitchComponent";

describe("SwitchComponent", () => {
    test("SwitchComponent is rendered", () => {
        const component = renderer.create(<SwitchComponent />);
        const element = component.root.findByProps({testID: 'switch'}).props;
        expect(element).toBeTruthy();
    })
    test("title is rendered", () => {
        const component = renderer.create(<SwitchComponent />);
        const element = component.root.findByProps({testID: 'title'}).props;
        expect(element).toBeTruthy();
    })
    test("title value", () => {
        const component = renderer.create(<SwitchComponent title={'test'} />);
        const element = component.root.findByProps({testID: 'title'}).props;
        expect(element.children).toBe('test');
    })
    test("SwitchComponent toggle", () => {
        const toggleMock = jest.fn();
        const component = renderer.create(<SwitchComponent toggle={toggleMock} />);
        const element = component.root.findByProps({testID: 'switch'}).props;
        renderer.act(() => element.onValueChange());
        expect(toggleMock).toBeCalled();
    })
    test("SwitchComponent off color", () => {
        const component = renderer.create(<SwitchComponent value={null} />);
        const element = component.root.findByProps({testID: 'switch'}).props;
        expect(element.thumbColor).toBe("#f4f3f4");
    })
    test("SwitchComponent on color", () => {
        const component = renderer.create(<SwitchComponent value={'test'} />);
        const element = component.root.findByProps({testID: 'switch'}).props;
        expect(element.thumbColor).toBe("#f5dd4b");
    })
})