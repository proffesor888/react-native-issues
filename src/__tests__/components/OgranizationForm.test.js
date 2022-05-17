import * as React from 'react';
import renderer from 'react-test-renderer';
import OrganizationFormComponent from "../../components/OrganizationForm/OrganizationFormComponent";
import {render} from "@testing-library/react";

describe("OrganizationFormComponent elements rendered", () => {
    test("git organization input is rendered", () => {
        const Component = render(<OrganizationFormComponent />);
        expect(Component.getByPlaceholderText("enter GIT organization")).toBeTruthy();
    });

    test("git repository input is rendered", () => {
        const Component = render(<OrganizationFormComponent />);
        expect(Component.getByPlaceholderText("enter repository")).toBeTruthy();
    });

    test("submit button is rendered", () => {
        const Component = render(<OrganizationFormComponent />);
        expect(Component.getByText("Get issues")).toBeTruthy();
    });

    test("organization input updates", () => {
        const mockOnChange = jest.fn();
        const screen = renderer.create(<OrganizationFormComponent handleInputsChange={mockOnChange} />);
        const input = screen.root.findByProps({testID: 'organization'}).props;
        renderer.act(() => input.onChangeText('test'));
        expect(mockOnChange).toHaveBeenCalledWith('test', 'organization');
    })

    test("repo input updates", () => {
        const mockOnChange = jest.fn();
        const screen = renderer.create(<OrganizationFormComponent handleInputsChange={mockOnChange} />);
        const input = screen.root.findByProps({testID: 'repo'}).props;
        renderer.act(() => input.onChangeText('test'));
        expect(mockOnChange).toHaveBeenCalledWith('test', 'repo');
    })

    test("submit", () => {
        const mockSubmit = jest.fn();
        const screen = renderer.create(<OrganizationFormComponent submit={mockSubmit} />);
        const button = screen.root.findByProps({testID: 'submit'}).props;
        renderer.act(() => button.onPress());
        expect(mockSubmit).toHaveBeenCalled();
    })
});