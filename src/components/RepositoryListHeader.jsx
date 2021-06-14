import React from "react";
import {View} from "react-native";


import {Picker} from '@react-native-picker/picker';
import theme from "../theme.js";


const RepositoryListHeader = ({orderByChange, orderByOptions, orderByValue}) => {


    return (
        <View style={{backgroundColor: theme.colors.mainBackground}}>
            <Picker
                onValueChange={orderByChange}
                selectedValue={orderByValue}

            >{
                orderByOptions.map(item =>
                    <Picker.Item label={item.label} value={item.value} key={item.value}/>)
            }
            </Picker>
        </View>


    );
};


export default RepositoryListHeader;