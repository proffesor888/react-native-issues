import * as CONSTANTS from '../model/issues.constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

class CommunicationController {
    currentPage: number;
    perPage: string;
    organization_name: string;
    repo_name: string;
    filter: string;
    constructor() {
        this.currentPage = CONSTANTS.INITIAL_PAGE_NUMBER;
        this.perPage = CONSTANTS.ISSUES_PER_PAGE;
        this.organization_name = '';
        this.repo_name = '';
        this.filter = CONSTANTS.DEFAULT_FILTER;
    }
    setOrganizationName(name: string):void {
        this.organization_name = name;
    }
    setRepoName(name: string):void {
        this.repo_name = name;
    }
    setCurrentPage(page: number):void {
        this.currentPage = page;
    }
    setFilter(filter: string):void {
        this.filter = filter;
    }
    getRepoName():string {
        return this.repo_name;
    }
    getItemsPerPage():string {
        return this.perPage;
    }
    getCurrentPage():number {
        return this.currentPage;
    }
    getFilter():string {
        return this.filter;
    }
    resetPage():void {
        this.currentPage = CONSTANTS.INITIAL_PAGE_NUMBER;
    }
    async getStorageItems<T extends {issues: Issue[]}>(id: string):Promise<T | undefined> {
        try {
            const jsonValue = await AsyncStorage.getItem(`@${id}`);
            return jsonValue !== null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            return e;
        }
    }
    async setStorageItem(value: Issue):Promise<void | undefined> {
        try {
            let newStorage = null;
            const prevStorage = await AsyncStorage.getItem(`@${this.getRepoName()}`);
            if(prevStorage !== null) {
                const parsedStorage = JSON.parse(prevStorage);
                const issuesList = [...parsedStorage.issues];
                const isValueAlreadyInList = issuesList.find((issue) => issue.id === value.id);
                if(!isValueAlreadyInList) {
                    issuesList.push(value);
                }
                newStorage = {issues: Array.from(new Set(issuesList))};
            } else {
                newStorage = {issues: [{...value}]}
            }
            return await AsyncStorage.setItem(`@${this.getRepoName()}`, JSON.stringify(newStorage));
        } catch (e) {
            return e;
        }
    }
    async removeStorageItem(id: number):Promise<void | undefined> {
        try {
            const storage = await AsyncStorage.getItem(`@${this.getRepoName()}`);
            if (storage) {
                const parsedStorage = JSON.parse(storage);
                const updatedIssuesList = parsedStorage.issues.filter((issue: Issue) => issue.id !== id);
                const newStorage = {issues: updatedIssuesList};
                await AsyncStorage.removeItem(`@${this.getRepoName()}`);
                return await AsyncStorage.setItem(`@${this.getRepoName()}`, JSON.stringify(newStorage));
            }
        } catch (e) {
            return e
        }
    }
    async fetchIssues(
        org_name:string | undefined = this.organization_name,
        repo_name:string | undefined = this.repo_name,
        onSuccessFunc: Function
    ):Promise<void | {message: string}> {
        const url = `${CONSTANTS.API_URL}${org_name}/${repo_name}/issues?per_page=${this.getItemsPerPage()}&page=${this.getCurrentPage()}&state=${this.getFilter()}`;
        const response = await fetch(url);
        const json = await response.json();
        if(json.message) {
            return this.handleError(json);
        } else {
            onSuccessFunc(json)
        }
    }
    handleError<T extends ErrorType>(e: T) {
        throw new Error(e.message);
    }
}

const CommunicationControllerInstance = new CommunicationController();

export default CommunicationControllerInstance;