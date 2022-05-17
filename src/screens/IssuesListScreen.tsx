import * as React from 'react';
import type {IssuesListScreenProps} from '../navigation/types/navigation_types';
import ListComponent from "../components/List/ListComponent";
import FilterComponent from "../components/Filter/FilterComponent";
import {useEffect} from "react";
import {useIssueListHook} from "../utils/hooks";
import CommunicationControllerInstance from "../api/CommunicationController";
import {View, Text} from "react-native";
import {filterIssuesHandler, loadNextPageHandler} from "../utils/helpers";
import {EMPTY_MESSAGE} from "../model/issues.constants";

export const IssuesListScreen: React.FC<IssuesListScreenProps> = ({route, navigation}) => {
    const { issues } = route.params;
    const {issuesList, addIssues, clearIssues, setIssuesList } = useIssueListHook(issues);
    useEffect(() => {
        return () => CommunicationControllerInstance.resetPage();
    }, []);
    const loadNextPage = ():void => {
        loadNextPageHandler(addIssues);
    }
    const handleItemListSelection = <T extends Issue>(item: T): void => {
        navigation.navigate('IssueDetails', {issue: item});
    }
    const filterIssues = (filter: string):void => {
        clearIssues();
        filterIssuesHandler(filter, setIssuesList);
    }
    const renderIssueList = () => {
        if(issues.length) {
            return(
                <>
                    <FilterComponent filterIssues={filterIssues}/>
                    <ListComponent
                        onItemClick={handleItemListSelection}
                        items={issuesList}
                        loadNextPage={loadNextPage}
                    />
                </>
            )
        } else {
            return <Text>{EMPTY_MESSAGE}</Text>
        }
    }
    return(
        <View style={{flex: 1}}>
            {renderIssueList()}
        </View>

    )
};