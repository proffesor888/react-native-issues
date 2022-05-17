import {FlatList, View} from "react-native";
import * as React from "react";
import ListItemComponent from "../ListItem/ListItemComponent";
import {styles} from './styles/List_style';


const ListComponent: React.FC<ListProp> = ({items, onItemClick, loadNextPage}) => {
    const renderItem = <T extends Issue>({item}: {item: T}) => {
        return (
            <ListItemComponent onItemClick={onItemClick} item={item}/>
        )
    };
    return (
        <View style={styles.container}>
            <FlatList
                testID={'List'}
                data={items}
                renderItem={renderItem}
                onEndReached={() => loadNextPage()}
                onEndReachedThreshold={0.1}
                extraData={items}
            />
        </View>
    )
}

export default ListComponent;