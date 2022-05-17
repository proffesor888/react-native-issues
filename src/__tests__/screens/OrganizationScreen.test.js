import * as React from 'react';
import renderer from 'react-test-renderer';
import {OrganizationScreen} from "../../screens/OrganizationScreen";
import {useFormHook} from "../../utils/hooks";
import {act, renderHook} from "@testing-library/react-hooks";

describe("OrganizationScreen", () => {
    test("default components renders", () => {
        const screen = renderer.create(<OrganizationScreen navigation={{}} />).toJSON();
        expect(screen.children.length).toEqual(3);
    })
    test("update organization input", () => {
        const {result} = renderHook(useFormHook);
        act(() => {
            result.current.handleInputsChange('test', '');
        })
        expect(result.current.organization_name).toBe('test');
    })
    test("update repo input", () => {
        const {result} = renderHook(useFormHook);
        act(() => {
            result.current.handleInputsChange('test', 'repo');
        })
        expect(result.current.repository_name).toBe('test');
    })
})