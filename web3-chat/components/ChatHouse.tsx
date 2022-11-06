import React from "react";
import { View, SectionList, StyleSheet, Text, Image } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";

const newTaskData = [{
    title: "New Tasks",
    data: [
        {
            id: "1",
            task: "Buy groceries"
        },
        {
            id: "2",
            task: "Feed Cat"
        },
        {
            id: "3",
            task: "Sleep for 3 hours"
        },
        {
            id: "4",
            task: "Water Plants"
        },
        {
            id: "5",
            task: "Drink Water"
        },
    ]
}];

export default function ChatHouse() {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[...newTaskData]}
                renderItem={({ item }) => (
                    <View>
                        <Image style={styles.imageItem} source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} />
                        <Text style={styles.taskItem}>{item.task}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
                stickySectionHeadersEnabled
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    imageItem: {
        width: 50,
        height: 50
    },
    taskItem: {
        padding: 10,
        marginVertical: 40,
        fontSize: 16
    },
});