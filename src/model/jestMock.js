import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

export const mockIssue = {title: 'test1', state: 'open', id: 1, body: 'test', created_at: new Date(), updated_at: new Date()};
export const mockIssuesArray = [{...mockIssue}];