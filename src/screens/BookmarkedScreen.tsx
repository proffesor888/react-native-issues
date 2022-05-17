import * as React from 'react';
import {View, FlatList} from 'react-native';
import { BookmarkedScreenProps} from "../navigation/types/navigation_types";
import {useEffect, useState} from "react";
import CommunicationControllerInstance from "../api/CommunicationController";
import ListItemComponent from "../components/ListItem/ListItemComponent";

export const BookmarkedScreen:React.FC<BookmarkedScreenProps> = ({route, navigation}) => {
    const [bookmarkedIssues, setBookmarked] = useState<[] | Issue[]>([]);

    useEffect(() => {
        const repo = CommunicationControllerInstance.getRepoName();
        CommunicationControllerInstance.getStorageItems(repo)
            .then(result => {
                if(result && result.issues) setBookmarked(result.issues);
            })
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const repo = CommunicationControllerInstance.getRepoName();
            CommunicationControllerInstance.getStorageItems(repo)
                .then(result => {
                    if(result && result.issues) setBookmarked(result.issues);
                })
        });
        return unsubscribe;
    }, [navigation]);

    const handleItemListSelection = <T extends Issue>(item: T): void => {
        navigation.navigate('IssueDetails', {issue: item, isBookmarked: true});
    }

    const renderItem = <T extends Issue>({item}: {item: T}) => {
        return (
            <ListItemComponent onItemClick={handleItemListSelection} item={item}/>
        )
    };
    return(
        <View style={{flex: 1}}>
            <FlatList
                testID={'list'}
                data={bookmarkedIssues}
                renderItem={renderItem}
            />
        </View>
    )
}