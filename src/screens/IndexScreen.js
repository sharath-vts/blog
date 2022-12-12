import React, { useContext } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import {Context} from "../contexts/BlogContext";
import { EvilIcons, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(Context)
    return <View>
        <FlatList 
            data={state}    
            keyExtractor = {(blogPost) => blogPost.title}
            renderItem = {({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('BlogDetails', {id: item.id})}>
                        <View style = {styles.row}>
                            <Text style = {styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <EvilIcons style = {styles.icon} 
                                        name="trash" 
                                        size={24} 
                                        color="black" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )
            }}
        >

        </FlatList>
    </View>
}

IndexScreen.navigationOptions = ({navigation})=> {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        paddingLeft: 8,
        borderTopWidth:1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        size: 30
    }
})

export default IndexScreen