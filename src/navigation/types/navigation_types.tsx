import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';

export type StackParamList = {
    Organization: undefined;
    TabNavigator: { params: { issues: Issue[] }, screen: string };
    IssueList: { issues: Issue[] };
    IssueDetails: { issue: Issue, isBookmarked?: boolean | undefined};
    Bookmarked: { issues: Issue[] }
}

export type TabParamList = {
    TabNavigator: NavigatorScreenParams<StackParamList> & { issues: Issue[] };
}

export type OrganizationScreenProps = NativeStackScreenProps<StackParamList, 'Organization'>
export type IssuesListScreenProps = NativeStackScreenProps<StackParamList, 'IssueList'>
export type IssuesDetailsScreenProps = NativeStackScreenProps<StackParamList, 'IssueDetails'>
export type TabNavigatorScreenProps = NativeStackScreenProps<TabParamList, 'TabNavigator'>
export type BookmarkedScreenProps = NativeStackScreenProps<StackParamList, 'Bookmarked'>

