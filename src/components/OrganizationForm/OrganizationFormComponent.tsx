import * as React from 'react';
import {styles} from "./styles/OrganizationForm_style";
import {Text, TextInput, TouchableOpacity, View} from "react-native";

const OrganizationFormComponent: React.FC<OrganizationFormProps> = ({orgName, orgRepo, handleInputsChange, submit, error}) => {
    const renderError = () => {
        if(error) {
            return <Text style={styles.error}>{error}</Text>
        }
    }
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={'enter GIT organization'}
                value={orgName}
                testID={'organization'}
                onChangeText={(text):void => handleInputsChange(text, 'organization')}
            />
            <TextInput
                style={styles.input}
                placeholder={'enter repository'}
                value={orgRepo}
                testID={'repo'}
                onChangeText={(text):void => handleInputsChange(text, 'repo')}
            />
            <TouchableOpacity testID={'submit'} style={styles.button} onPress={():void => submit()}>
                <Text>Get issues</Text>
            </TouchableOpacity>
            {renderError()}
        </View>
    )
};

export default OrganizationFormComponent;