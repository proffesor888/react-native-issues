import * as React from 'react';
import renderer from 'react-test-renderer';
import {BookmarkedScreen} from "../../screens/BookmarkedScreen";

describe("BookmarkedScreen", () => {
    test("default components renders", () => {
        const screen = renderer.create(<BookmarkedScreen navigation={{}} />).toJSON();
        expect(screen.children.length).toEqual(1);
    })
    test("list rendered", () => {
        const screen = renderer.create(<BookmarkedScreen navigation={{}} />);
        const element = screen.root.findByProps({testID: 'list'}).props;
        expect(element).toBeTruthy();
    })
})