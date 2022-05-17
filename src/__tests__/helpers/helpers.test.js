import {
    saveOrganization,
    filterIssuesHandler,
    loadNextPageHandler,
    getSwitchTitle,
} from "../../utils/helpers";
import CommunicationControllerInstance from "../../api/CommunicationController";
import renderer from 'react-test-renderer';
import {mockIssue, mockIssuesArray} from "../../model/jestMock";
import AsyncStorage from "@react-native-async-storage/async-storage";

describe("helpers", () => {
    test("save organization", () => {
        const saveOrganizationNameSpy = spyOn(CommunicationControllerInstance, 'setOrganizationName');
        const saveRepoNameSpy = spyOn(CommunicationControllerInstance, 'setRepoName');
        renderer.act(() => saveOrganization('facebook', 'react'));
        expect(saveOrganizationNameSpy).toHaveBeenCalledWith('facebook');
        expect(saveRepoNameSpy).toHaveBeenCalledWith('react');
    })
    test("filter status", () => {
        const setFilterSpy = spyOn(CommunicationControllerInstance, 'setFilter');
        const resetPageSpy = spyOn(CommunicationControllerInstance, 'resetPage');
        const fetchIssuesSpy = spyOn(CommunicationControllerInstance, 'fetchIssues');
        const onSuccess = jest.fn();
        renderer.act(() => filterIssuesHandler('open', onSuccess));
        expect(setFilterSpy).toHaveBeenCalledWith('open');
        expect(resetPageSpy).toHaveBeenCalled();
        expect(fetchIssuesSpy).toHaveBeenCalled();
    })
    test("load next page", () => {
        const getCurrentPageSpy = spyOn(CommunicationControllerInstance, 'getCurrentPage');
        const setCurrentPageSpy = spyOn(CommunicationControllerInstance, 'setCurrentPage');
        const fetchIssuesSpy = spyOn(CommunicationControllerInstance, 'fetchIssues');
        const onSuccess = jest.fn();
        renderer.act(() => loadNextPageHandler(onSuccess));
        expect(getCurrentPageSpy).toHaveBeenCalled();
        expect(setCurrentPageSpy).toHaveBeenCalled();
        expect(fetchIssuesSpy).toHaveBeenCalled();
    })
    test("get switch title", () => {
        expect(getSwitchTitle(false)).toBe("Save to Bookmarks");
        expect(getSwitchTitle(true)).toBe("Bookmarked");
    })
});