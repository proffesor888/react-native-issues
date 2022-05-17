import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {styles} from './styles/ListItem_style';


const ListItemComponent: React.FC<ListItemProp> = ({item, onItemClick}) => {
    const {title, state} = item;
    return(
       <TouchableOpacity testID={'touchArea'} onPress={() => onItemClick(item)} style={styles.item}>
           <Text testID={'title'} style={styles.title}>{`Issue name: ${title}`}</Text>
           <Text testID={'status'} style={styles.title}>{`Issue status: ${state}`}</Text>
       </TouchableOpacity>
    )
};

export default ListItemComponent;