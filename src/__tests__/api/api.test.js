import CommunicationControllerInstance from "../../api/CommunicationController";
import {INITIAL_PAGE_NUMBER} from "../../model/issues.constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {mockIssue} from "../../model/jestMock";
import {mockIssuesArray} from "../../model/jestMock";

//const mockIssue = {title: 'test1', state: 'open', id: 1, body: 'test', created_at: new Date(), updated_at: new Date()};
//const mockIssuesArray = [{...mockIssue}];

describe("Communication methods", () => {
    jest.spyOn(CommunicationControllerInstance, 'getRepoName');

    test("get repository name", () => {
        expect(CommunicationControllerInstance.getRepoName()).toBe(CommunicationControllerInstance.repo_name);
    })
    test("set current page", () => {
        CommunicationControllerInstance.setCurrentPage(2);
        expect(CommunicationControllerInstance.currentPage).toBe(2);
    })
    test("set filter", () => {
        CommunicationControllerInstance.setFilter('closed');
        expect(CommunicationControllerInstance.filter).toBe('closed');
    })
    test("set repository name", () => {
        CommunicationControllerInstance.setRepoName('test');
        expect(CommunicationControllerInstance.repo_name).toBe('test');
    })
    test("set organization name", () => {
        CommunicationControllerInstance.setOrganizationName('test');
        expect(CommunicationControllerInstance.organization_name).toBe('test');
    })
    test("reset page", () => {
        CommunicationControllerInstance.resetPage();
        expect(CommunicationControllerInstance.currentPage).toBe(INITIAL_PAGE_NUMBER);
    })
    test("fetch api", async () => {
        global.fetch = jest.fn(() => Promise.resolve(({
            json: () => Promise.resolve(mockIssuesArray)
        })));
        let serverResponse = null;
        const onSuccess = jest.fn((result) => serverResponse = result);
        await CommunicationControllerInstance.fetchIssues('facebook', 'react', onSuccess);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(onSuccess).toHaveBeenCalled();
        expect(serverResponse).toBe(mockIssuesArray);
    })
    test("get storage item", async() => {
        await CommunicationControllerInstance.getStorageItems('facebook');
        expect(AsyncStorage.getItem).toBeCalledWith('@facebook');
    })
    test("set storage item", async() => {
        const storageSaveType = JSON.stringify({issues: mockIssuesArray});
        await CommunicationControllerInstance.setStorageItem(mockIssue);
        expect(AsyncStorage.setItem).toBeCalledWith('@test', storageSaveType);
    })
    test("remove storage item", async() => {
        await CommunicationControllerInstance.setStorageItem(mockIssue);
        await CommunicationControllerInstance.removeStorageItem(mockIssue.id);
        expect(AsyncStorage.removeItem).toBeCalledWith('@test');
    })
    test("api fetch error", async () => {
        global.fetch = jest.fn(() => Promise.resolve(({
            json: () => Promise.resolve({message: 'no such repository'})
        })));
        const spyErrorHandler = spyOn(CommunicationControllerInstance, 'handleError');
        const onSuccess = jest.fn();
        await CommunicationControllerInstance.fetchIssues('facebook', 'react', onSuccess);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(spyErrorHandler).toHaveBeenCalledWith({message: 'no such repository'});
    })
})