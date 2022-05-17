import * as React from 'react';
import renderer from 'react-test-renderer';
import DetailsComponent from "../../components/Details/DetailsComponent";

describe("DetailsComponent rendered", () => {
    test("title is rendered", () => {
        const component = renderer.create(<DetailsComponent title={'test'} />);
        const element = component.root.findByProps({testID: 'title'}).props;
        expect(element).toBeTruthy();
        expect(element.children).toBe('Title: test');
    })
    test("state is rendered", () => {
        const component = renderer.create(<DetailsComponent state={'test'} />);
        const element = component.root.findByProps({testID: 'state'}).props;
        expect(element).toBeTruthy();
        expect(element.children).toBe('Status: test');
    })
    test("id is rendered", () => {
        const component = renderer.create(<DetailsComponent id={'test'} />);
        const element = component.root.findByProps({testID: 'id'}).props;
        expect(element).toBeTruthy();
        expect(element.children).toBe('Issue id: test');
    })
    test("body is rendered", () => {
        const component = renderer.create(<DetailsComponent body={'test'} />);
        const element = component.root.findByProps({testID: 'details'}).props;
        expect(element).toBeTruthy();
        expect(element.children).toBe('Details: test');
    })
    test("dates are rendered", () => {
        const component = renderer.create(<DetailsComponent created_at={'date'} updated_at={'date'} />);
        const element = component.root.findByProps({testID: 'dates'}).props;
        expect(element).toBeTruthy();
        expect(element.children).toBe('Dates: date - date');
    })
})