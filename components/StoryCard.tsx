import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { BoldText } from './BoldText';
import { StoryDataType } from '../types';

interface StoryCardPropTypes extends StoryDataType {
    cardNumber: number;
};

export const StoryCard = ({ title, url, timestamp, score, authorId, authorKarmaScore, cardNumber}: StoryCardPropTypes) => {
    return (
        <View style={{ flex: 1, borderRadius: 20, borderColor: 'blue', borderWidth: 1, padding: 10}}>
            <BoldText>
               {`Random Top Story #${cardNumber}`}
            </BoldText>
            <Text style={styles.text}>
                <BoldText>Title:</BoldText> {title}
            </Text>
            <Text style={styles.text}>
            <BoldText>Url:</BoldText> {url}
            </Text>
            <Text style={styles.text}>
                <BoldText>Timestamp:</BoldText> {timestamp}
            </Text>
            <Text style={styles.text}>
                <BoldText>Score:</BoldText> {score}
            </Text>
            <Text style={styles.text}>
               <BoldText>Author ID:</BoldText> {authorId}
            </Text>
            <Text style={styles.text}>
               <BoldText>Author karma score:</BoldText> {authorKarmaScore}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        paddingVertical: 10,
    }
})