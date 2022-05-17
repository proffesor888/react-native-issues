import * as React from 'react';
import renderer from 'react-test-renderer';
import {BookmarkedScreen} from "../../screens/BookmarkedScreen";

const navigation = {
    navigate: jest.fn(),
    addListener: jest.fn()
}

describe("BookmarkedScreen", () => {
    test("default components renders", () => {
        const screen = renderer.create(<BookmarkedScreen navigation={navigation} />).toJSON();
        expect(screen.children.length).toEqual(1);
    })
    test("list rendered", () => {
        const screen = renderer.create(<BookmarkedScreen navigation={navigation} />);
        const element = screen.root.findByProps({testID: 'list'}).props;
        expect(element).toBeTruthy();
    })
})